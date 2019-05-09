module Lexer where

import Text.Parsec (letter, alphaNum, (<|>), char, between)
import Text.Parsec.String (Parser)
import Text.Parsec.Language (emptyDef)
import qualified Text.Parsec.Token as Token

-- * Wasp element types

reservedNameApp :: String
reservedNameApp = "app"

reservedNamePage :: String
reservedNamePage = "page"

reservedNameEntity :: String
reservedNameEntity = "entity"

-- * Data types.

reservedNameString :: String
reservedNameString = "string"

reservedNameBoolean :: String
reservedNameBoolean = "boolean"

reservedNames :: [String]
reservedNames =
    -- * Wasp element types
    [ reservedNameApp
    , reservedNamePage
    , reservedNameEntity
    -- * Data types
    , reservedNameString
    , reservedNameBoolean
    ]

waspLanguageDef :: Token.LanguageDef ()
waspLanguageDef = emptyDef 
    { Token.commentLine = "//"
    , Token.reservedNames = reservedNames
    , Token.caseSensitive = True
    -- Identifier
    , Token.identStart = letter
    , Token.identLetter = alphaNum <|> char '_'
    }

waspLexer :: Token.TokenParser ()
waspLexer = Token.makeTokenParser waspLanguageDef

reserved :: String -> Parser ()
reserved = Token.reserved waspLexer

identifier :: Parser String
identifier = Token.identifier waspLexer

symbol :: String -> Parser String
symbol = Token.symbol waspLexer

colon :: Parser String
colon = Token.colon waspLexer

braces :: Parser a -> Parser a
braces = Token.braces waspLexer

commaSep1 :: Parser a -> Parser [a]
commaSep1 = Token.commaSep1 waspLexer

whiteSpace :: Parser ()
whiteSpace = Token.whiteSpace waspLexer

singleQuotes :: Parser a -> Parser a
singleQuotes p = between (symbol "'") (symbol "'") p

stringLiteral :: Parser String
stringLiteral = Token.stringLiteral waspLexer
