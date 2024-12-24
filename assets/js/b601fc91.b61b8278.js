"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8980],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),i=r(16550),u=r(91980),s=r(67392),c=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=m({queryString:r,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=u??p;return h({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var b=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==i&&(p(t),u(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},46300:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(50012);function o(e){let{path:t}=e;const[r]=(0,n.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),l=t.slice(o+1,t.length-1),[i,u]=l.split(","),s=t.slice(0,o);return a.createElement("code",null,s+("js"===r?i:u))}},99055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=(r(46300),r(85162)),l=r(74866),i=r(44996);const u={title:"1. Creating a New Project"},s=void 0,c={unversionedId:"tutorial/create",id:"version-0.14.0/tutorial/create",title:"1. Creating a New Project",description:"You'll need to have the latest version of Wasp installed locally to follow this tutorial. If you haven't installed it yet, check out the QuickStart guide!",source:"@site/versioned_docs/version-0.14.0/tutorial/01-create.md",sourceDirName:"tutorial",slug:"/tutorial/create",permalink:"/docs/0.14.0/tutorial/create",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.14.0/tutorial/01-create.md",tags:[],version:"0.14.0",sidebarPosition:1,frontMatter:{title:"1. Creating a New Project"},sidebar:"docs",previous:{title:"Editor Setup",permalink:"/docs/0.14.0/editor-setup"},next:{title:"2. Project Structure",permalink:"/docs/0.14.0/tutorial/project-structure"}},p={},d=[{value:"Creating a Project",id:"creating-a-project",level:2},{value:"A note on supported languages",id:"a-note-on-supported-languages",level:2}],h={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You'll need to have the latest version of Wasp installed locally to follow this tutorial. If you haven't installed it yet, check out the ",(0,n.kt)("a",{parentName:"p",href:"../quick-start"},"QuickStart")," guide!")),(0,n.kt)("p",null,"In this section, we'll guide you through the process of creating a simple Todo app with Wasp. In the process, we'll take you through the most important and useful features of Wasp."),(0,n.kt)("img",{alt:"How Todo App will work once it is done",src:(0,i.Z)("img/todo-app-tutorial-intro.gif"),style:{border:"1px solid black"}}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"If you get stuck at any point (or just want to chat), reach out to us on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," and we will help you!"),(0,n.kt)("p",null,"You can find the complete code of the app we're about to build ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/release/examples/tutorials/TodoApp"},"here"),"."),(0,n.kt)("h2",{id:"creating-a-project"},"Creating a Project"),(0,n.kt)("p",null,"To setup a new Wasp project, run the following command in your terminal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"$ wasp new TodoApp\n")),(0,n.kt)("p",null,"Enter the newly created directory and start the development server:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd TodoApp\n$ wasp start\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"wasp start")," will take a bit of time to start the server the first time you run it in a new project."),(0,n.kt)("p",null,"You will see log messages from the client, server, and database setting themselves up. When everything is ready, a new tab should open in your browser at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," with a simple placeholder page:"),(0,n.kt)("img",{alt:"Screenshot of new Wasp app",src:(0,i.Z)("img/wasp-new-screenshot.png"),height:"400px",style:{border:"1px solid black"}}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"Wasp has generated for you the full front-end and back-end code of the app! Next, we'll take a closer look at how the project is structured."),(0,n.kt)("h2",{id:"a-note-on-supported-languages"},"A note on supported languages"),(0,n.kt)("p",null,"Wasp supports both JavaScript and TypeScript out of the box, but you are free to choose between or mix JavaScript and TypeScript as you see fit."),(0,n.kt)("p",null,"We'll provide you with both JavaScript and TypeScript code in this tutorial.\nCode blocks will have a toggle to switch between vanilla JavaScript and TypeScript."),(0,n.kt)("p",null,"Try it out:"),(0,n.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Welcome to JavaScript! ",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You are now reading the JavaScript version of the docs. The site will remember your preference as you switch pages."),(0,n.kt)("p",{parentName:"admonition"},"You'll have a chance to change the language on every code snippet - both the snippets and the text will update accordingly."))),(0,n.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Welcome to TypeScript! ",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You are now reading the TypeScript version of the docs. The site will remember your preference as you switch pages."),(0,n.kt)("p",{parentName:"admonition"},"You'll have a chance to change the language on every code snippet - both the snippets and the text will update accordingly.")))))}f.isMDXComponent=!0}}]);