"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16895:(e,t,r)=>{r.d(t,{b:()=>i,k:()=>l});var n=r(67294),o=r(37806);const a=n.createContext(null);function i({children:e,content:t}){const r=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return n.createElement(a.Provider,{value:r},e)}function l(){const e=(0,n.useContext)(a);if(null===e)throw new o.i6("DocProvider");return e}},86557:(e,t,r)=>{r.d(t,{I:()=>p});var n=r(67294),o=r(3329),a=r(81261);const i="cards_w51s",l="cardsSmall_pehM";var s=r(86010);const c=({name:e,title:t,selected:r,onClick:o})=>n.createElement("button",{type:"button",onClick:o,className:(0,s.Z)("rounded-lg","p-4","flex flex-col","justify-between","items-center","gap-3","shadow-lg","border-2 dark:border-gray-700 border-gray-200",r&&"dark:border-refine-blue border-refine-blue")},n.createElement("img",{className:"max-w-[48px] mt-2 mb-2",src:`${r?"https://refine.ams3.digitaloceanspaces.com/website/static/icons/colored/ui-framework-":"https://refine.ams3.digitaloceanspaces.com/website/static/icons/grayscale/ui-framework-"}${e}.svg`,alt:t,width:"100%",height:"100%"}),t&&n.createElement("span",{className:(0,s.Z)("text-gray-500","dark:text-gray-600",r&&"text-gray-900 dark:text-gray-0")},t)),u={headless:"Headless",antd:"Ant Design",mui:"Material UI",mantine:"Mantine","chakra-ui":"Chakra UI"},p=({small:e})=>{const{preferred:t,setPreferred:r}=(0,a.n)();return n.createElement("div",null,n.createElement("div",{className:(0,s.Z)(i,e&&l)},o.V1.map((o=>n.createElement(c,{key:o,title:e?void 0:u[o],name:o,selected:t===o,onClick:()=>r(o)})))))}},3329:(e,t,r)=>{r.d(t,{KZ:()=>s,V1:()=>a,lu:()=>c});var n=r(67294),o=r(16895);const a=["headless","antd","chakra-ui","mantine","mui"],i=e=>{if(a.includes(e))return e},l="tutorial-preferred-ui-package",s=n.createContext({preferred:"headless",current:void 0,setPreferred:()=>{}}),c=({children:e})=>{const{metadata:t}=(0,o.k)(),r=(e=>{const t=e.match(/\/(headless|antd|chakra-ui|mantine|mui)\//);if(t&&i(t[1]))return t[1]})(t.id),[a,c]=n.useState("headless");n.useEffect((()=>{if("undefined"!=typeof window){const e=localStorage.getItem(l),t=i(e);t&&c(t)}}),[]);const u=e=>{i(e)&&("undefined"!=typeof window&&localStorage.setItem(l,e),c(e))};return n.useEffect((()=>{r&&r!==a&&u(r)}),[r,a]),n.createElement(s.Provider,{value:{preferred:a,setPreferred:u,current:r||a}},e)}},81261:(e,t,r)=>{r.d(t,{n:()=>a});var n=r(67294),o=r(3329);const a=()=>n.useContext(o.KZ)},10020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});r(67294);var n=r(3905),o=r(86557);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"select-framework",title:"3. Selection of UI Framework",tutorial:{order:2,prev:"tutorial/introduction/prequisite",next:"tutorial/getting-started/index"}},c=void 0,u={unversionedId:"tutorial/introduction/select-framework",id:"version-3.xx.xx/tutorial/introduction/select-framework",title:"3. Selection of UI Framework",description:"refine is a headless framework by default. It means you can build your app without any UI frameworks. However, refine has built-in support for the most popular UI frameworks like Material UI, Ant Design, Mantine, and Chakra UI. You can speed up your app UI development with these powerful frameworks.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/0-introduction/2-select-framework.md",sourceDirName:"tutorial/0-introduction",slug:"/tutorial/introduction/select-framework",permalink:"/docs/3.xx.xx/tutorial/introduction/select-framework",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/0-introduction/2-select-framework.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1689004886,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:2,frontMatter:{id:"select-framework",title:"3. Selection of UI Framework",tutorial:{order:2,prev:"tutorial/introduction/prequisite",next:"tutorial/getting-started/index"}}},p={},d=[],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=f("UIConditional"),k=f("Checklist"),y=f("ChecklistItem"),w={toc:d};function h(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},w,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," is a headless framework by default. It means you can build your app without any UI frameworks. However, ",(0,n.kt)("strong",{parentName:"p"},"refine")," has built-in support for the most popular UI frameworks like ",(0,n.kt)("strong",{parentName:"p"},"Material UI"),", ",(0,n.kt)("strong",{parentName:"p"},"Ant Design"),", ",(0,n.kt)("strong",{parentName:"p"},"Mantine"),", and ",(0,n.kt)("strong",{parentName:"p"},"Chakra UI"),". You can speed up your app UI development with these powerful frameworks."),(0,n.kt)("p",null,"Before you start, you can read the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/general-concepts/"},"API references")," of the UI frameworks to get more information about them."),(0,n.kt)("h3",null,"Select a UI Framework"),(0,n.kt)("p",null,"After this step, the tutorial will proceed according to your UI framework choice. You can choose one of the following UI frameworks or just go with the headless UI option:"),(0,n.kt)(o.I,{mdxType:"SelectTutorialFramework"}),(0,n.kt)("br",null),(0,n.kt)(m,{is:"antd",mdxType:"UIConditional"},(0,n.kt)("p",null,"The tutorial content will continue as if it were the ",(0,n.kt)("strong",{parentName:"p"},"Ant Design")," selection.")),(0,n.kt)(m,{is:"chakra-ui",mdxType:"UIConditional"},(0,n.kt)("p",null,"The tutorial content will continue as if it were the ",(0,n.kt)("strong",{parentName:"p"},"Chakra UI")," selection.")),(0,n.kt)(m,{is:"headless",mdxType:"UIConditional"},(0,n.kt)("p",null,"The tutorial content will continue as if it were the ",(0,n.kt)("strong",{parentName:"p"},"headless")," selection.")),(0,n.kt)(m,{is:"mantine",mdxType:"UIConditional"},(0,n.kt)("p",null,"The tutorial content will continue as if it were the ",(0,n.kt)("strong",{parentName:"p"},"Mantine")," selection.")),(0,n.kt)(m,{is:"mui",mdxType:"UIConditional"},(0,n.kt)("p",null,"The tutorial content will continue as if it were the ",(0,n.kt)("strong",{parentName:"p"},"Material UI*")," selection.")),(0,n.kt)("br",null),(0,n.kt)(k,{mdxType:"Checklist"},(0,n.kt)(y,{id:"select-framework",mdxType:"ChecklistItem"},"I understood that refine is a headless framework."),(0,n.kt)(y,{id:"select-framework-2",mdxType:"ChecklistItem"},"I understood that refine has built-in support for the most popular UI frameworks."),(0,n.kt)(y,{id:"select-framework-3",mdxType:"ChecklistItem"},"I have selected a UI framework.")))}h.isMDXComponent=!0}}]);