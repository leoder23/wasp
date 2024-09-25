module Wasp.Project.Analyze
  ( analyzeWaspProject,
    analyzeWaspFileContent,
    findWaspFile,
    findPackageJsonFile,
    analyzePrismaSchema,
    WaspFile (..),
  )
where

import Control.Applicative ((<|>))
import Control.Arrow (ArrowChoice (left))
import Control.Concurrent (newChan)
import Control.Concurrent.Async (concurrently)
import Control.Monad.Except (ExceptT (..), runExceptT)
import Control.Monad.IO.Class (liftIO)
import qualified Data.Aeson as Aeson
import Data.Conduit.Process.Typed (ExitCode (..))
import Data.List (find, isSuffixOf)
import StrongPath (Abs, Dir, File', Path', Rel, toFilePath, (</>))
import qualified StrongPath as SP
import StrongPath.TH (relfile)
import StrongPath.Types (File)
import qualified Wasp.Analyzer as Analyzer
import Wasp.Analyzer.AnalyzeError (getErrorMessageAndCtx)
import Wasp.Analyzer.Parser.Ctx (Ctx)
import qualified Wasp.AppSpec as AS
import Wasp.AppSpec.PackageJson (PackageJson)
import qualified Wasp.AppSpec.Valid as ASV
import Wasp.CompileOptions (CompileOptions)
import qualified Wasp.CompileOptions as CompileOptions
import qualified Wasp.ConfigFile as CF
import Wasp.Error (showCompilerErrorForTerminal)
import qualified Wasp.Generator.ConfigFile as G.CF
import qualified Wasp.Generator.Job as J
import Wasp.Generator.Job.IO (readJobMessagesAndPrintThemPrefixed)
import Wasp.Generator.Job.Process (runNodeCommandAsJob)
import Wasp.Project.Common
  ( CompileError,
    CompileWarning,
    WaspProjectDir,
    dotWaspDirInWaspProjectDir,
    findFileInWaspProjectDir,
    packageJsonInWaspProjectDir,
    prismaSchemaFileInWaspProjectDir,
  )
import Wasp.Project.Db (makeDevDatabaseUrl)
import Wasp.Project.Db.Migrations (findMigrationsDir)
import Wasp.Project.Deployment (loadUserDockerfileContents)
import Wasp.Project.Env (readDotEnvClient, readDotEnvServer)
import qualified Wasp.Project.ExternalFiles as ExternalFiles
import Wasp.Project.Vite (findCustomViteConfigPath)
import qualified Wasp.Psl.Ast.Schema as Psl.Schema
import qualified Wasp.Psl.Parser.Schema as Psl.Parser
import Wasp.Psl.Valid (getValidDbSystemFromPrismaSchema)
import qualified Wasp.Psl.Valid as PslV
import Wasp.Util (maybeToEither)
import qualified Wasp.Util.IO as IOUtil
import Wasp.Valid (ValidationError)
import qualified Wasp.Valid as Valid

analyzeWaspProject ::
  Path' Abs (Dir WaspProjectDir) ->
  CompileOptions ->
  IO (Either [CompileError] AS.AppSpec, [CompileWarning])
analyzeWaspProject waspDir options = do
  waspFilePathOrError <- maybeToEither [fileNotFoundMessage] <$> findWaspFile waspDir

  case waspFilePathOrError of
    Left err -> return (Left err, [])
    Right waspFilePath ->
      analyzePrismaSchema waspDir >>= \case
        (Left prismaSchemaErrors, prismaSchemaWarnings) -> return (Left prismaSchemaErrors, prismaSchemaWarnings)
        -- NOTE: we are ignoring prismaSchemaWarnings if the schema was parsed successfully
        (Right prismaSchemaAst, _) ->
          analyzeWaspFile waspDir prismaSchemaAst waspFilePath >>= \case
            Left errors -> return (Left errors, [])
            Right declarations ->
              analyzePackageJsonContent waspDir >>= \case
                Left errors -> return (Left errors, [])
                Right packageJsonContent -> constructAppSpec waspDir options packageJsonContent prismaSchemaAst declarations
  where
    fileNotFoundMessage = "Couldn't find the *.wasp file in the " ++ toFilePath waspDir ++ " directory"

data WaspFile
  = WaspLang !(Path' Abs (File WaspLangFile))
  | WaspTs !(Path' Abs (File WaspTsFile))

data WaspLangFile

data WaspTsFile

data CompiledWaspJsFile

data SpecJsonFile

analyzeWaspFile :: Path' Abs (Dir WaspProjectDir) -> Psl.Schema.Schema -> WaspFile -> IO (Either [CompileError] [AS.Decl])
analyzeWaspFile waspDir prismaSchemaAst = \case
  WaspLang waspFilePath -> analyzeWaspLangFile prismaSchemaAst waspFilePath
  WaspTs waspFilePath -> analyzeWaspTsFile waspDir prismaSchemaAst waspFilePath

analyzeWaspTsFile :: Path' Abs (Dir WaspProjectDir) -> Psl.Schema.Schema -> Path' Abs (File WaspTsFile) -> IO (Either [CompileError] [AS.Decl])
analyzeWaspTsFile waspProjectDir _prismaSchemaAst _waspFilePath = runExceptT $ do
  -- TODO: I'm not yet sure where tsconfig.node.json location will come from
  -- because we also need that knowledge to generate a TS SDK project.
  compiledWaspJsFile <- ExceptT $ compileWaspTsFile waspProjectDir [relfile|tsconfig.node.json|]
  specJsonFile <- ExceptT $ executeMainWaspJsFile waspProjectDir compiledWaspJsFile
  contents <- ExceptT $ readDeclsJsonFile specJsonFile
  liftIO $ putStrLn "Here are the contents of the spec file:"
  liftIO $ print contents
  return []

-- TODO: Reconsider the return value. Can I write the function in such a way
-- that it's impossible to get the absolute path to the compiled file without
-- calling the function that compiles it?
-- To do that, I'd have to craete a private module that knows where the file is
-- and not expose the constant for creating the absoltue path (like I did with config/spec.json).
-- Normally, I could just put the constant in the where clause like I did there, but I'm hesitant
-- to do that since the path comes from the tsconfig.
-- That is what I did currently, but I'll have to figure out the long-term solution.
-- The ideal solution is reading the TS file, and passing its config to tsc
-- manually (and getting the output file path in the process).
compileWaspTsFile ::
  Path' Abs (Dir WaspProjectDir) ->
  Path' (Rel WaspProjectDir) File' ->
  IO (Either [CompileError] (Path' Abs (File CompiledWaspJsFile)))
compileWaspTsFile waspProjectDir tsconfigNodeFileInWaspProjectDir = do
  chan <- newChan
  (_, tscExitCode) <-
    concurrently
      (readJobMessagesAndPrintThemPrefixed chan)
      ( runNodeCommandAsJob
          waspProjectDir
          "npx"
          [ "tsc",
            "-p",
            toFilePath (waspProjectDir </> tsconfigNodeFileInWaspProjectDir),
            "--noEmit",
            "false",
            "--outDir",
            toFilePath $ SP.parent absCompiledWaspJsFile
          ]
          J.Wasp
          chan
      )
  case tscExitCode of
    ExitFailure _status -> return $ Left ["Error while running TypeScript compiler on the *.wasp.mts file."]
    ExitSuccess -> return $ Right absCompiledWaspJsFile
  where
    -- TODO: I should be getting the compiled file path from the tsconfig.node.file
    absCompiledWaspJsFile = waspProjectDir </> dotWaspDirInWaspProjectDir </> [relfile|config/main.wasp.mjs|]

executeMainWaspJsFile :: Path' Abs (Dir WaspProjectDir) -> Path' Abs (File CompiledWaspJsFile) -> IO (Either [CompileError] (Path' Abs (File SpecJsonFile)))
executeMainWaspJsFile waspProjectDir absCompiledMainWaspJsFile = do
  chan <- newChan
  (_, runExitCode) <- do
    concurrently
      (readJobMessagesAndPrintThemPrefixed chan)
      ( runNodeCommandAsJob
          waspProjectDir
          "npx"
          -- TODO: Figure out how to keep running instructions in a single place
          -- (e.g., this is the same as the package name, but it's repeated in two places).
          -- Before this, I had the entrypoint file hardcoded, which was bad
          -- too: waspProjectDir </> [relfile|node_modules/wasp-config/dist/run.js|]
          [ "wasp-config",
            SP.fromAbsFile absCompiledMainWaspJsFile,
            SP.fromAbsFile absSpecOutputFile
          ]
          J.Wasp
          chan
      )
  case runExitCode of
    ExitFailure _status -> return $ Left ["Error while running the compiled *.wasp.mts file."]
    ExitSuccess -> return $ Right absSpecOutputFile
  where
    -- TODO: The config part of the path is problematic because it relies on TSC to create it during compilation,
    -- see notes in compileWaspFile.
    absSpecOutputFile = waspProjectDir </> dotWaspDirInWaspProjectDir </> [relfile|config/spec.json|]

readDeclsJsonFile :: Path' Abs (File SpecJsonFile) -> IO (Either [CompileError] Aeson.Value)
readDeclsJsonFile declsJsonFile = do
  byteString <- IOUtil.readFile declsJsonFile
  return $ Right $ Aeson.toJSON byteString

analyzeWaspLangFile :: Psl.Schema.Schema -> Path' Abs (File WaspLangFile) -> IO (Either [CompileError] [AS.Decl])
analyzeWaspLangFile prismaSchemaAst waspFilePath = do
  waspFileContent <- IOUtil.readFile waspFilePath
  left (map $ showCompilerErrorForTerminal (waspFilePath, waspFileContent))
    <$> analyzeWaspFileContent prismaSchemaAst waspFileContent

analyzeWaspFileContent :: Psl.Schema.Schema -> String -> IO (Either [(String, Ctx)] [AS.Decl])
analyzeWaspFileContent prismaSchemaAst = return . left (map getErrorMessageAndCtx) . Analyzer.analyze prismaSchemaAst

constructAppSpec ::
  Path' Abs (Dir WaspProjectDir) ->
  CompileOptions ->
  PackageJson ->
  Psl.Schema.Schema ->
  [AS.Decl] ->
  IO (Either [CompileError] AS.AppSpec, [CompileWarning])
constructAppSpec waspDir options packageJson parsedPrismaSchema decls = do
  externalCodeFiles <- ExternalFiles.readCodeFiles waspDir
  externalPublicFiles <- ExternalFiles.readPublicFiles waspDir
  customViteConfigPath <- findCustomViteConfigPath waspDir

  maybeMigrationsDir <- findMigrationsDir waspDir
  maybeUserDockerfileContents <- loadUserDockerfileContents waspDir
  configFiles <- CF.discoverConfigFiles waspDir G.CF.configFileRelocationMap
  let dbSystem = getValidDbSystemFromPrismaSchema parsedPrismaSchema
  let devDbUrl = makeDevDatabaseUrl waspDir dbSystem decls
  serverEnvVars <- readDotEnvServer waspDir
  clientEnvVars <- readDotEnvClient waspDir

  let appSpec =
        AS.AppSpec
          { AS.decls = decls,
            AS.prismaSchema = parsedPrismaSchema,
            AS.packageJson = packageJson,
            AS.waspProjectDir = waspDir,
            AS.externalCodeFiles = externalCodeFiles,
            AS.externalPublicFiles = externalPublicFiles,
            AS.migrationsDir = maybeMigrationsDir,
            AS.devEnvVarsServer = serverEnvVars,
            AS.devEnvVarsClient = clientEnvVars,
            AS.isBuild = CompileOptions.isBuild options,
            AS.userDockerfileContents = maybeUserDockerfileContents,
            AS.configFiles = configFiles,
            AS.devDatabaseUrl = devDbUrl,
            AS.customViteConfigPath = customViteConfigPath
          }

  return $ runValidation ASV.validateAppSpec appSpec

findWaspFile :: Path' Abs (Dir WaspProjectDir) -> IO (Maybe WaspFile)
findWaspFile waspDir = do
  files <- fst <$> IOUtil.listDirectory waspDir
  return $ findWaspTsFile files <|> findWaspLangFile files
  where
    findWaspTsFile files = WaspTs <$> findFileThatEndsWith ".wasp.mts" files
    findWaspLangFile files = WaspLang <$> findFileThatEndsWith ".wasp" files
    -- TODO: Try out what happens when Wasp finds this file, but the tsconfing setup and package are missing
    findFileThatEndsWith suffix files = SP.castFile . (waspDir </>) <$> find ((suffix `isSuffixOf`) . toFilePath) files

analyzePackageJsonContent :: Path' Abs (Dir WaspProjectDir) -> IO (Either [CompileError] PackageJson)
analyzePackageJsonContent waspProjectDir =
  findPackageJsonFile waspProjectDir >>= \case
    Just packageJsonFile -> readPackageJsonFile packageJsonFile
    Nothing -> return $ Left [fileNotFoundMessage]
  where
    fileNotFoundMessage = "Couldn't find the package.json file in the " ++ toFilePath waspProjectDir ++ " directory"

findPackageJsonFile :: Path' Abs (Dir WaspProjectDir) -> IO (Maybe (Path' Abs File'))
findPackageJsonFile waspProjectDir = findFileInWaspProjectDir waspProjectDir packageJsonInWaspProjectDir

readPackageJsonFile :: Path' Abs File' -> IO (Either [CompileError] PackageJson)
readPackageJsonFile packageJsonFile = do
  byteString <- IOUtil.readFileBytes packageJsonFile
  return $ maybeToEither ["Error parsing the package.json file"] $ Aeson.decode byteString

analyzePrismaSchema :: Path' Abs (Dir WaspProjectDir) -> IO (Either [CompileError] Psl.Schema.Schema, [CompileWarning])
analyzePrismaSchema waspProjectDir = do
  findPrismaSchemaFile waspProjectDir >>= \case
    Just pathToPrismaSchemaFile -> do
      prismaSchemaContent <- IOUtil.readFile pathToPrismaSchemaFile

      case Psl.Parser.parsePrismaSchema prismaSchemaContent of
        Left err ->
          return (Left [couldntParsePrismaSchemaMessage ++ "\n\n" ++ show err], [])
        Right parsedPrismaSchema -> return $ runValidation PslV.validatePrismaSchema parsedPrismaSchema
    Nothing -> return (Left [couldntFindPrismaSchemaMessage], [])
  where
    couldntParsePrismaSchemaMessage = "Wasp couldn't parse your schema.prisma file, please check if you have any errors in it."

    -- NOTE: linking here to migration docs because I think it's the most common reason why schema.prisma file is missing.
    -- After people mostly start using 0.14.0+ they will have schema.prisma file, so this message will be less relevant.
    -- If we see that this message is still relevant, we can change it to be more general.
    couldntFindPrismaSchemaMessage = "Couldn't find the schema.prisma file in the " ++ toFilePath waspProjectDir ++ " directory. \nRead more: https://wasp-lang.dev/docs/migrate-from-0-13-to-0-14#migrate-to-the-new-schemaprisma-file"

runValidation :: (result -> [ValidationError]) -> result -> (Either [CompileError] result, [CompileWarning])
runValidation getErrorsAndWarnings result =
  if null errors
    then (Right result, warnings)
    else (Left errors, warnings)
  where
    errors = showErrorsBy Valid.isValidationError errsAndWarns
    warnings = showErrorsBy Valid.isValidationWarning errsAndWarns
    errsAndWarns = getErrorsAndWarnings result
    showErrorsBy predicate = map show . filter predicate

findPrismaSchemaFile :: Path' Abs (Dir WaspProjectDir) -> IO (Maybe (Path' Abs File'))
findPrismaSchemaFile waspProjectDir = findFileInWaspProjectDir waspProjectDir prismaSchemaFileInWaspProjectDir
