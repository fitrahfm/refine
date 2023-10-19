"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=l(n),s=o,f=d["".concat(u,".").concat(s)]||d[s]||c[s]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var m={};for(var u in t)hasOwnProperty.call(t,u)&&(m[u]=t[u]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>O,frontMatter:()=>m,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m={id:"mutation-mode",title:"Mutation Modes","example-tags":["form"]},u=void 0,l={unversionedId:"examples/mutation-mode",id:"examples/mutation-mode",title:"Mutation Modes",description:"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: pessimistic, optimistic and undoable. You can experience them with this app.",source:"@site/docs/examples/mutation-mode.md",sourceDirName:"examples",slug:"/examples/mutation-mode",permalink:"/docs/examples/mutation-mode",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/mutation-mode.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1697721251,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{id:"mutation-mode",title:"Mutation Modes","example-tags":["form"]},sidebar:"someSidebar",previous:{title:"Multi-level Menu",permalink:"/docs/examples/multi-level-menu/"},next:{title:"Next.js",permalink:"/docs/examples/next-js/"}},p={},c=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=d("Tabs"),f=d("TabItem"),b=d("CodeSandboxExample"),y={toc:c};function O(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,r.kt)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"optimistic")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"undoable"),". You can experience them with this app."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/mutation-mode/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Mutation Mode")," documentation for more information ","\u2192")),(0,r.kt)(s,{defaultValue:"antd",values:[{label:"Antd Design",value:"antd"},{label:"Chakra UI",value:"chakra-ui"},{label:"Mantine",value:"mantine"},{label:"Material UI",value:"material-ui"}],mdxType:"Tabs"},(0,r.kt)(f,{value:"antd",mdxType:"TabItem"},(0,r.kt)(b,{path:"form-antd-mutation-mode",mdxType:"CodeSandboxExample"})),(0,r.kt)(f,{value:"chakra-ui",mdxType:"TabItem"},(0,r.kt)(b,{path:"form-chakra-ui-mutation-mode",mdxType:"CodeSandboxExample"})),(0,r.kt)(f,{value:"mantine",mdxType:"TabItem"},(0,r.kt)(b,{path:"form-mantine-mutation-mode",mdxType:"CodeSandboxExample"})),(0,r.kt)(f,{value:"material-ui",mdxType:"TabItem"},(0,r.kt)(b,{path:"form-material-ui-mutation-mode",mdxType:"CodeSandboxExample"}))))}O.isMDXComponent=!0}}]);