"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[31116],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(a),u=o,h=p["".concat(s,".").concat(u)]||p[u]||c[u]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(44996);const r=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,o.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(39960);a(44996);const r=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>n.createElement("p",{className:"in-blog-cta-link-container"},n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),n.createElement(r,null),n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(r,null),n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},92622:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),o=(a(67294),a(3905));a(39960),a(44996),a(92908),a(70589),a(38610);const r={title:"Building React Forms with Ease Using React Hook Form, Zod and Shadcn",authors:["martinovicdev"],image:"/img/forms/banner.webp",tags:["webdev","wasp","react","forms"]},i=void 0,l={permalink:"/blog/2024/11/20/building-react-forms-with-ease-using-react-hook-form-and-zod",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2024-11-20-building-react-forms-with-ease-using-react-hook-form-and-zod.md",source:"@site/blog/2024-11-20-building-react-forms-with-ease-using-react-hook-form-and-zod.md",title:"Building React Forms with Ease Using React Hook Form, Zod and Shadcn",description:"Forms are something every developer encounters, whether as a user or on the developer side. They\u2019re essential on most websites, but their complexity can vary wildly\u2014from simple 3-field contact forms to giga-monster-t-rex, multi-page forms with 150 fields, dynamic validation, and asynchronous checks.",date:"2024-11-20T00:00:00.000Z",formattedDate:"November 20, 2024",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"react",permalink:"/blog/tags/react"},{label:"forms",permalink:"/blog/tags/forms"}],readingTime:6.11,hasTruncateMarker:!1,authors:[{name:"Boris Martinovi\u0107",title:"Contributor @ Wasp",url:"https://martinovic.dev",imageURL:"https://github.com/martinovicdev.png",key:"martinovicdev"}],frontMatter:{title:"Building React Forms with Ease Using React Hook Form, Zod and Shadcn",authors:["martinovicdev"],image:"/img/forms/banner.webp",tags:["webdev","wasp","react","forms"]},prevItem:{title:"ArmadaJS 2024: A Conference That Feels Like Home",permalink:"/blog/2024/12/11/armadajs-2024-a-conference-that-feels-like-home"},nextItem:{title:"The Faces Behind Open Source Projects: Pilcrow, author of Lucia Auth \ud83d\udd12",permalink:"/blog/2024/10/24/pilcrow-os-maintainers-interview"}},s={authorsImageUrls:[void 0]},m=[{value:"The form we\u2019ll be building",id:"the-form-well-be-building",level:2},{value:"Meet the tools",id:"meet-the-tools",level:2},{value:"<strong>React and Wasp</strong>",id:"react-and-wasp",level:3},{value:"<strong>React Hook Form</strong>",id:"react-hook-form",level:3},{value:"<strong>Zod</strong>",id:"zod",level:3},{value:"<strong>Shadcn/UI</strong>",id:"shadcnui",level:3},{value:"Let\u2019s build a simple user dashboard",id:"lets-build-a-simple-user-dashboard",level:2},{value:"Finding this article useful?",id:"finding-this-article-useful",level:3},{value:"Putting it all together - Zod schema + React Hook Form instance + layout",id:"putting-it-all-together---zod-schema--react-hook-form-instance--layout",level:2}],d={toc:m},p="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Forms are something every developer encounters, whether as a user or on the developer side. They\u2019re essential on most websites, but their complexity can vary wildly\u2014from simple 3-field contact forms to giga-monster-t-rex, multi-page forms with 150 fields, dynamic validation, and asynchronous checks. "),(0,o.kt)("p",null,"In this post, we\u2019ll explore how React Hook Form, Zod, and Shadcn can be used to create an adaptable, developer-friendly solution that handles a wide range of form requirements with ease."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"david and victoria meme",src:a(26255).Z,width:"346",height:"534"})),(0,o.kt)("h2",{id:"the-form-well-be-building"},"The form we\u2019ll be building"),(0,o.kt)("p",null,"Here\u2019s the form we\u2019ll be developing in this post. I plan on writing another post about an advanced use of forms that will have even more complexity as a follow-up, so stay tuned \ud83d\ude03"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example form",src:a(21960).Z,width:"1502",height:"1802"})),(0,o.kt)("h2",{id:"meet-the-tools"},"Meet the tools"),(0,o.kt)("p",null,"Let\u2019s look at the stack we\u2019ll use to build and manage our forms."),(0,o.kt)("h3",{id:"react-and-wasp"},(0,o.kt)("strong",{parentName:"h3"},"React and Wasp")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Framework: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wasp-lang/wasp"},(0,o.kt)("strong",{parentName:"a"},"Wasp"))," (full-stack framework for React, Node.js, and Prisma)."),(0,o.kt)("li",{parentName:"ul"},"Enables fast, efficient full-stack web development and deployment with React.")),(0,o.kt)("h3",{id:"react-hook-form"},(0,o.kt)("strong",{parentName:"h3"},"React Hook Form")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lightweight library for crafting forms in React, mainly via its ",(0,o.kt)("inlineCode",{parentName:"li"},"useForm")," hook."),(0,o.kt)("li",{parentName:"ul"},"Handles form validation, error management, and offers flexible validation method and integration with various UI component libraries.")),(0,o.kt)("h3",{id:"zod"},(0,o.kt)("strong",{parentName:"h3"},"Zod")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TypeScript-first validation library for creating detailed, reusable validation schemas."),(0,o.kt)("li",{parentName:"ul"},"Integrates with TypeScript types to keep validation unified and avoid duplication.")),(0,o.kt)("h3",{id:"shadcnui"},(0,o.kt)("strong",{parentName:"h3"},"Shadcn/UI")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Collection of reusable UI components which are embedded directly in project, which allows developers to take only what they need and customize those components as well."),(0,o.kt)("li",{parentName:"ul"},"Offers built-in support for React Hook Form and Zod.")),(0,o.kt)("p",null,"Here\u2019s an example snippet showcasing a form field in Shadcn library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<FormField\n  control={form.control}\n  name="name"\n  render={({ field }) => (\n    <FormItem>\n      <FormLabel>Name</FormLabel>\n      <FormControl>\n        <Input {...field} />\n      </FormControl>\n      <FormMessage />\n    </FormItem>\n  )}\n/>\n')),(0,o.kt)("p",null,"Even if you prefer using a different flavor of the stack, as long as you stick with React and RHF, this is still a valid example that will get you going."),(0,o.kt)("h2",{id:"lets-build-a-simple-user-dashboard"},"Let\u2019s build a simple user dashboard"),(0,o.kt)("p",null,"The application we'll use to demonstrate basic forms is an admin panel with essential CRUD operations. It will include email and password authentication and consist of two pages: a main screen displaying a table of all users, and a user creation page, which will be the star of this article."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example data",src:a(84454).Z,width:"1552",height:"926"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example form",src:a(21960).Z,width:"1502",height:"1802"})),(0,o.kt)("p",null,"Our form will include validation to ensure users cannot submit it (i.e., create a new user) without meeting the specified requirements. The User object is an excellent candidate for validation examples, as it contains a variety of data types suitable for different validations: strings, dates (e.g., date of birth), email strings, and booleans (e.g., premium user status). The complete Prisma schema file is shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"model Customer {\n  id    Int    @id @default(autoincrement())\n  name  String\n  surname String\n  email String\n  dateOfBirth DateTime\n  premiumUser Boolean\n}\n")),(0,o.kt)("p",null,"To jumpstart our project, we\u2019ll use a predefined ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/project/starter-templates"},"Wasp template")," with TypeScript, called ",(0,o.kt)("strong",{parentName:"p"},"todo-ts"),". This template comes with ready-made components and routing for authentication, including login and signup screens. It also offers a solid example of how CRUD operations work in Wasp, ideal if you\u2019re new to the framework. Additionally, we\u2019ll leverage the new Wasp TypeScript SDK to manage our configuration, as it provides extended flexibility for customization."),(0,o.kt)("h3",{id:"finding-this-article-useful"},"Finding this article useful?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://wasp.sh/"},"Wasp"),"\xa0team is working hard to create content like this, not to mention building a modern, open-source React/NodeJS framework."),(0,o.kt)("p",null,"The easiest way to show your support is just to star Wasp repo! \ud83d\udc1d But it would be greatly appreciated if you could take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"repository")," (for contributions, or to simply test the product). Click on the button below to give Wasp a star and show your support!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/axqiv01tl1pha9ougp21.gif",alt:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/axqiv01tl1pha9ougp21.gif"})),(0,o.kt)("div",{className:"cta"},(0,o.kt)("a",{href:"https://github.com/wasp-lang/wasp",target:"_blank",rel:"noopener noreferrer"},"\u2b50\ufe0f Thank You For Your Support \ud83d\udcaa")),(0,o.kt)("h2",{id:"putting-it-all-together---zod-schema--react-hook-form-instance--layout"},"Putting it all together - Zod schema + React Hook Form instance + layout"),(0,o.kt)("p",null,"To work with forms, we\u2019ll start by defining a Zod validation schema. Our form has three data types: strings, a date, and a boolean. We\u2019ll apply validation to most fields: ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"surname")," are required, while ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," utilises the built-in e-mail validation. Zod simplifies validating common string types with built-in validations for different types, like emails, URLs, and UUIDs, which is helpful for our email field."),(0,o.kt)("p",null,"For additional validations, the date can\u2019t be set to a future date, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"premiumUser")," field simply needs to be a boolean. Zod also provides default validation error messages, but these can be customized. For example, instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"name: z.string().min(1)"),", we could specify ",(0,o.kt)("inlineCode",{parentName:"p"},"name: z.string().min(1, 'Name is required')"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"  const formSchema = z.object({\n    name: z.string().min(1, { message: 'Name is required' }),\n    surname: z.string().min(1, { message: 'Surname is required' }),\n    email: z.string().email({ message: 'Invalid email address' }),\n    dateOfBirth: z\n      .date()\n      .max(new Date(), { message: 'Date cannot be in the future' }),\n    premiumUser: z.boolean(),\n  });\n")),(0,o.kt)("p",null,"Our form is managed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("a",{parentName:"p",href:"https://react-hook-form.com/docs/useform"},"React Hook Form"),", which provides extensive options for handling and validating form values, checking errors, and managing form state. To integrate our Zod validation schema, we\u2019ll use a Zod resolver, allowing React Hook Form to apply the validations we defined earlier."),(0,o.kt)("p",null,"The form\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultValues")," are derived from the customer object. Since this component is used for both adding new customers and editing existing ones, we\u2019ll pass the necessary data as input. For a new customer, some sensible default values are used; for existing customers, data is retrieved from the database. Apart from setting default values and determining whether to call ",(0,o.kt)("inlineCode",{parentName:"p"},"createCustomer")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"updateCustomer"),", all other aspects of form handling remain the same."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type FormData = z.infer<typeof formSchema>\nconst form = useForm<FormData>({\n  resolver: zodResolver(formSchema),\n  defaultValues: customer,\n});\n")),(0,o.kt)("p",null,"The final step is to create the form itself and assemble it in the TSX file. As shown earlier, this process is straightforward. Whether we\u2019re using text inputs, date pickers, or checkboxes with Shadcn controls, we follow a similar structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start by creating the ",(0,o.kt)("inlineCode",{parentName:"li"},"FormField")," element and setting its ",(0,o.kt)("inlineCode",{parentName:"li"},"control"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"render")," properties."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"render")," property is key, as it contains the form element itself."),(0,o.kt)("li",{parentName:"ul"},"Typically, we wrap everything in ",(0,o.kt)("inlineCode",{parentName:"li"},"FormItem"),", add a ",(0,o.kt)("inlineCode",{parentName:"li"},"FormLabel")," for the label, and place the controlled form element inside ",(0,o.kt)("inlineCode",{parentName:"li"},"FormControl")," with the appropriate value and setter method."),(0,o.kt)("li",{parentName:"ul"},"Finally, we include ",(0,o.kt)("inlineCode",{parentName:"li"},"FormMessage")," below, which displays the Zod validation message if validation fails.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"form with errors",src:a(99289).Z,width:"1102",height:"1584"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'\n// Defining form schema\nconst formSchema = z.object({   \n    dateOfBirth: z.date().max(new Date(), {\n      message: \'Date of birth cannot be today, or in the future\',\n    }),    \n});\n\n// Defining form  \nconst form = useForm<FormData>({\n    resolver: zodResolver(formSchema),\n    defaultValues: defaultValues,\n});\n\n // Creating form control\n  <FormField\n  control={form.control}\n  name="dateOfBirth"\n  render={({ field }) => (\n    <FormItem className="flex flex-col">\n      <FormLabel>Date of birth</FormLabel>\n      <FormControl>\n        <DatePicker date={field.value} setDate={field.onChange} />\n      </FormControl>\n      <FormMessage />\n    </FormItem>\n  )}\n/>\n')),(0,o.kt)("p",null,"If you\u2019re curious to see the complete application, check out the GitHub repository here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/martinovicdev/wasp-form-tutorial"},"GitHub Repo"),". I hope this article has made working with forms easier, and if you're interested in more form-related content, stay tuned for part two! In the next part, we'll dive into advanced patterns and validation techniques to enhance your applications."),(0,o.kt)("p",null,"Please consider starring ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},(0,o.kt)("strong",{parentName:"a"},"Wasp"))," on GitHub if you liked this post! Your support helps us continue making web development easier and smoother for everyone. \ud83d\udc1d"))}c.isMDXComponent=!0},70589:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={toc:[]},i="wrapper";function l(e){let{components:t,...a}=e;return(0,o.kt)(i,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0},84454:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-e5267c18bdcc4a4d32df6e3a2e42044e.png"},99289:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/form-error-415c6e0e5f742acaf051db1cc4fc4f6a.png"},21960:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/form-20082c7cbe003e7a56836171cfd7525e.png"},26255:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/meme-5fbc311e3efab63935f889210fbe602e.webp"}}]);