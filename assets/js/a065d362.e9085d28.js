"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[16883],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(44996);const o=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,r.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(39960);a(44996);const o=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>n.createElement("p",{className:"in-blog-cta-link-container"},n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),n.createElement(o,null),n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(o,null),n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},65961:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=(a(39960),a(44996));a(92908),a(70589),a(38610);const i={title:"How I Built CoverLetterGPT - SaaS app with the PERN stack, GPT, Stripe, & Chakra UI",authors:["vinny"],image:"/img/cover-letter-gpt-yt.png",tags:["wasp","ai","gpt","fullstack","PERN","stripe","chakra","saas"]},l=void 0,s={permalink:"/blog/2023/04/17/How-I-Built-CoverLetterGPT",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2023-04-17-How-I-Built-CoverLetterGPT.md",source:"@site/blog/2023-04-17-How-I-Built-CoverLetterGPT.md",title:"How I Built CoverLetterGPT - SaaS app with the PERN stack, GPT, Stripe, & Chakra UI",description:"---",date:"2023-04-17T00:00:00.000Z",formattedDate:"April 17, 2023",tags:[{label:"wasp",permalink:"/blog/tags/wasp"},{label:"ai",permalink:"/blog/tags/ai"},{label:"gpt",permalink:"/blog/tags/gpt"},{label:"fullstack",permalink:"/blog/tags/fullstack"},{label:"PERN",permalink:"/blog/tags/pern"},{label:"stripe",permalink:"/blog/tags/stripe"},{label:"chakra",permalink:"/blog/tags/chakra"},{label:"saas",permalink:"/blog/tags/saas"}],readingTime:2.655,hasTruncateMarker:!0,authors:[{name:"Vinny",title:"DevRel @ Wasp",url:"https://vincanger.github.io",email:"vince@wasp-lang.dev",imageURL:"https://vincanger.github.io/assets/vince_smiley.jpg",key:"vinny"}],frontMatter:{title:"How I Built CoverLetterGPT - SaaS app with the PERN stack, GPT, Stripe, & Chakra UI",authors:["vinny"],image:"/img/cover-letter-gpt-yt.png",tags:["wasp","ai","gpt","fullstack","PERN","stripe","chakra","saas"]},prevItem:{title:'Wasp Hackathon #2 - Let\'s "hack-a-ton"!',permalink:"/blog/2023/04/27/wasp-hackathon-two"},nextItem:{title:"Wasp steps up its database game with Fully Managed Dev DB & DB Seeding",permalink:"/blog/2023/04/13/db-start-and-seed"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},h="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("div",{style:{textAlign:"center",width:"100%",height:"400px",display:"inline-block"}},(0,r.kt)("iframe",{height:"100%",width:"100%",src:"https://www.youtube.com/embed/D1l0iwGUed0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Like many other software developers, I enjoy trying out new technologies even if it's just to get a feel for what they can do. "),(0,r.kt)("p",null,"So when I first learned about the ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference"},"OpenAI API"),", I knew I wanted to give it a try. I had already wanted to create a SaaS app that could help manage the process of applying to numerous jobs, and the prospect of adding GPT into the mix made it even more interesting. So with API access and a bit of free time, I decided to give it a shot."),(0,r.kt)("p",null,"I threw together a simple version of the app in about 3-4 days and ",(0,r.kt)("a",{parentName:"p",href:"https://coverlettergpt.xyz"},"CoverLetterGPT")," was born, a SaaS app that uses GPT-3.5-turbo to generate, revise, and manage cover letters for you based on your skills and the specific job descriptions. "),(0,r.kt)("p",null,'Even though I did think it had potential as a SaaS app, I was approaching it mostly as a way to learn how to build one for the first time. And after seeing so many people "building in public" and sharing their progress, I thought it would be fun to try it out myself.'),(0,r.kt)("div",{style:{marginBottom:"1rem"}},(0,r.kt)("a",{href:"https://twitter.com/hot_town/status/1633873684573323265?s=20"},(0,r.kt)("img",{src:(0,o.Z)("img/coverlettergpt.png"),alt:"Hey peeps. Check out http://coverlettergpt.xyz. You can try it out now and create your own cover letters for free (no Payment/API key). I'm working on A LOT more features. Stay Tuned!"}))),(0,r.kt)("p",null,"So I started sharing my progress on Twitter, Reddit, and Indie Hackers. I made my first post about it on March 9th, and because I was just experimenting and trying my hand at a SaaS app for the first time, I also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vincanger/coverlettergpt"},"open-sourced the app")," to share the code and what I was learning with others. This led to a lot of interest and great feedback, and I ended up getting featured in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.indiehackers.com/post/whats-new-don-t-build-things-no-one-wants-833ee752ba?utm_source=indie-hackers-emails&utm_campaign=ih-newsletter&utm_medium=email"},"indiehackers newsletter"),", which led to even more interest."),(0,r.kt)("p",null,"Within the first month, I got over 1,000 sign-ups along with my first paying customers. Pretty surprising, to say the least!"),(0,r.kt)("p",null,'So to continue in the spirit of curiosity, learning, and just "wingin\' it," I decided to make a code walkthrough video that explains how I built the app, the tools I used to build it, and a little bit about how I marketed the app without spending any money. '),(0,r.kt)("p",null,"As an extra bonus, I also give a quick introduction to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/SaaS-Template-GPT"},"free SaaS template")," I created for building your own SaaS app, with or without GPT, on the PERN stack (PostgreSQL/Prisma, Express, React, NodeJS)."),(0,r.kt)("p",null,"My hope is that others will learn something from my experience, and that it could inspire them to try out new technologies and build that app idea they've had in mind (and if they do, they should make sure to share it with me on Twitter ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/hot_town"},"@hot_town")," -- I'd love to see it!)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Want to stay in the loop? \u2192 ",(0,r.kt)("a",{parentName:"em",href:"https://wasp-lang.dev/#signup"},"Join our newsletter!"))))}m.isMDXComponent=!0},70589:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(i,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0}}]);