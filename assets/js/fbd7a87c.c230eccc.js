"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43039],{52740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(53787),o=n(50551);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"quickstart",title:"Quick Start Guide"},c=void 0,u={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quick Start Guide",description:"refine works on any environment that can run React (incl. Vite, Next.js, Remix, and CRA(Legacy) etc.)",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/getting-started/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1695922162,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{id:"quickstart",title:"Quick Start Guide"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"1. Build your first refine app",permalink:"/docs/tutorial/introduction/index"}},d={},m=[{value:"Next Steps",id:"next-steps",level:2}],f={toc:m};function k(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," works on any environment that can run ",(0,a.kt)("strong",{parentName:"p"},"React")," (incl. ",(0,a.kt)("em",{parentName:"p"},"Vite, Next.js, Remix, and CRA(Legacy)")," etc.)"),(0,a.kt)("p",null,"Although you could take the time to manually set up your environment and install the ",(0,a.kt)("strong",{parentName:"p"},"refine")," packages afterwards, the optimal way to get started with ",(0,a.kt)("strong",{parentName:"p"},"refine")," is using the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/?playground=true"},"Browser-based Scaffolder")," and ",(0,a.kt)("strong",{parentName:"p"},"CLI-based Scaffolder"),"."),(0,a.kt)("p",null,"Choose one of the methods below to bootstrap a refine app:"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Browser-based-scaffolder",label:"With Browser-based",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"This is an efficient tool that allows you to create refine app seamlessly in your browser."),(0,a.kt)("p",null,"You can choose the libraries and frameworks you want to work with, and the tool will generate a boilerplate code for you."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/?playground=true"},"scaffolder")," and select libraries and frameworks you want to work with by using interactive UI. "),(0,a.kt)("li",{parentName:"ol"},"Download the generated project by clicking on the ",(0,a.kt)("strong",{parentName:"li"},'"Build & Download"')," button.")),(0,a.kt)("div",{className:"flex justify-center"},(0,a.kt)("img",{alt:"React admin panel",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-25-refine-primereact/create-refine-project.gif",className:"border border-gray-200 rounded"})),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://refine.new/preview/1a5eb93b-ab9b-4112-b80e-7563b334c025"},"If you do not want to deal with the installation steps, you can use this pre-configured refine.new template ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Next, navigate to the project folder, install the dependencies, and then start your project.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> npm install\n\n> npm run dev\n"))),(0,a.kt)(o.Z,{value:"CLI",label:"With CLI-based",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create refine-app")," provides built-in templates for ",(0,a.kt)("em",{parentName:"p"},"Vite"),", ",(0,a.kt)("em",{parentName:"p"},"Next.js"),", ",(0,a.kt)("em",{parentName:"p"},"Remix"),", and ",(0,a.kt)("em",{parentName:"p"},"CRA(Legacy)")," environments, so you can bootstrap a ",(0,a.kt)("strong",{parentName:"p"},"refine")," project in just a couple of minutes. It also offers a wide range of options that you can easily configure for your ",(0,a.kt)("em",{parentName:"p"},"UI framework"),", ",(0,a.kt)("em",{parentName:"p"},"i18n"),", ",(0,a.kt)("em",{parentName:"p"},"router"),", ",(0,a.kt)("em",{parentName:"p"},"Auth.")," and ",(0,a.kt)("em",{parentName:"p"},"data provider")," preferences."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To get started, run the following command. The ",(0,a.kt)("em",{parentName:"li"},"CLI wizard")," will assist you for the rest of the setup process:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm create refine-app@latest\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Once the setup is complete, navigate to the project folder and start your application with:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In case you select ",(0,a.kt)("inlineCode",{parentName:"p"},"Yes")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Do you want to add example pages?")," option while using the CLI wizard, the refine will add sample CRUD pages utilizing ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/components/inferencer/"},(0,a.kt)("inlineCode",{parentName:"a"},"refine Inferencer"))," and fill the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," property."),(0,a.kt)("p",{parentName:"admonition"},"It is highly recommended to add example pages as it provides a clearer understanding of how ",(0,a.kt)("strong",{parentName:"p"},"refine")," works and lets you test out the CRUD operation functionalities.")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"Now, you can access the refine application at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,a.kt)("p",null,"You will see the output as a table populated with ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," data with filtering, sorting, and pagination features."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("img",{style:{width:"100%"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start-example.png",alt:"Example result"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"\ud83d\udc49 Jump to ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/tutorial/introduction/index/"},"Tutorials")," and continue your work to turn your example project into a full-blown CRUD application! \ud83d\ude80"),(0,a.kt)("p",null,"\ud83d\udc49 Read more on ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/advanced-tutorials/"},"Advanced Tutorials")," for different usage scenarios."),(0,a.kt)("p",null,"\ud83d\udc49 See ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/examples/"},"real-life examples")," built using ",(0,a.kt)("strong",{parentName:"p"},"refine")))}k.isMDXComponent=!0}}]);