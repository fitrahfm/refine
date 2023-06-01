"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:f,className:k}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,x]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=f){const e=y[f];null!=e&&e!==N&&g.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==N&&(j(t),x(a),null!=f&&w(f,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:T,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={id:"quickstart",title:"Quick Start Guide"},s=void 0,p={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quick Start Guide",description:"refine works on any environment that can run React (incl. Vite, Next.js, Remix, and CRA(Legacy) etc.)",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/getting-started/quickstart.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1685627184,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{id:"quickstart",title:"Quick Start Guide"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"1. Build your first refine app",permalink:"/docs/tutorial/introduction/index"}},u={},c=[{value:"Next Steps",id:"next-steps",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," works on any environment that can run ",(0,r.kt)("strong",{parentName:"p"},"React")," (incl. ",(0,r.kt)("em",{parentName:"p"},"Vite, Next.js, Remix, and CRA(Legacy)")," etc.)"),(0,r.kt)("p",null,"Although you could take the time to manually set up your environment and install the ",(0,r.kt)("strong",{parentName:"p"},"refine")," packages afterwards, the optimal way to get started with ",(0,r.kt)("strong",{parentName:"p"},"refine")," is using the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new")," platform or ",(0,r.kt)("inlineCode",{parentName:"p"},"create refine-app")," project starter tool."),(0,r.kt)("p",null,"Choose one of the methods below to bootstrap a refine app:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"refine-new",label:"refine.new",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new")," is a powerful tool that lets you create ",(0,r.kt)("strong",{parentName:"p"},"refine")," apps right in your browser. You have the ability to preview, modify, and download your project immediately, thereby streamlining the development process."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("a",{parentName:"li",href:"https://refine.new/?form=true"},"refine.new")," and select libraries and frameworks you want to work with by using interactive UI. "),(0,r.kt)("li",{parentName:"ol"},"Download the generated project by clicking on the ",(0,r.kt)("strong",{parentName:"li"},'"Build & Download"')," button.")),(0,r.kt)("br",null),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",alt:"quick start gif"})),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://refine.new/preview/1a5eb93b-ab9b-4112-b80e-7563b334c025"},"If you do not want to deal with the installation steps, you can use this pre-configured refine.new template ","\u2192"))),(0,r.kt)("br",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Next, navigate to the project folder, install the dependencies, and then start your project.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> npm install\n\n> npm run dev\n"))),(0,r.kt)(i.Z,{value:"CLI",label:"create refine-app",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create refine-app")," provides built-in templates for ",(0,r.kt)("em",{parentName:"p"},"Vite"),", ",(0,r.kt)("em",{parentName:"p"},"Next.js"),", ",(0,r.kt)("em",{parentName:"p"},"Remix"),", and ",(0,r.kt)("em",{parentName:"p"},"CRA(Legacy)")," environments, so you can bootstrap a ",(0,r.kt)("strong",{parentName:"p"},"refine")," project in just a couple of minutes. It also offers a wide range of options that you can easily configure for your ",(0,r.kt)("em",{parentName:"p"},"UI framework"),", ",(0,r.kt)("em",{parentName:"p"},"i18n"),", ",(0,r.kt)("em",{parentName:"p"},"router"),", ",(0,r.kt)("em",{parentName:"p"},"Auth.")," and ",(0,r.kt)("em",{parentName:"p"},"data provider")," preferences."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To get started, run the following command. The ",(0,r.kt)("em",{parentName:"li"},"CLI wizard")," will assist you for the rest of the setup process:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm create refine-app@latest\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Once the setup is complete, navigate to the project folder and start your application with:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In case you select ",(0,r.kt)("inlineCode",{parentName:"p"},"Yes")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Do you want to add example pages?")," option while using the CLI wizard, the refine will add sample CRUD pages utilizing ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/components/inferencer/"},(0,r.kt)("inlineCode",{parentName:"a"},"refine Inferencer"))," and fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," property."),(0,r.kt)("p",{parentName:"admonition"},"It is highly recommended to add example pages as it provides a clearer understanding of how ",(0,r.kt)("strong",{parentName:"p"},"refine")," works and lets you test out the CRUD operation functionalities.")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now, you can access the refine application at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,r.kt)("p",null,"You will see the output as a table populated with ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," data with filtering, sorting, and pagination features."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("img",{style:{width:"100%"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start-example.png",alt:"Example result"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"\ud83d\udc49 Jump to ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/tutorial/introduction/index/"},"Tutorials")," and continue your work to turn your example project into a full-blown CRUD application! \ud83d\ude80"),(0,r.kt)("p",null,"\ud83d\udc49 Read more on ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/advanced-tutorials/"},"Advanced Tutorials")," for different usage scenarios."),(0,r.kt)("p",null,"\ud83d\udc49 See ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/examples/"},"real-life examples")," built using ",(0,r.kt)("strong",{parentName:"p"},"refine")))}m.isMDXComponent=!0}}]);