"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(r),d=n,f=y["".concat(p,".").concat(d)]||y[d]||s[d]||i;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={id:"deploy-project",title:"6. Deploy your app to the web",tutorial:{prev:"tutorial/getting-started/store-your-repository",next:"tutorial/understanding-dataprovider/index"}},p=void 0,c={unversionedId:"tutorial/getting-started/deploy-project",id:"version-3.xx.xx/tutorial/getting-started/deploy-project",title:"6. Deploy your app to the web",description:"To make your app accessible to the public, you can use a hosting service to build and deploy your site live on the web. In this tutorial, we will use Netlify, but you are welcome to choose your preferred hosting service.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/5-deploy-project.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/deploy-project",permalink:"/docs/3.xx.xx/tutorial/getting-started/deploy-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/5-deploy-project.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1698056446,formattedLastUpdatedAt:"Oct 23, 2023",sidebarPosition:5,frontMatter:{id:"deploy-project",title:"6. Deploy your app to the web",tutorial:{prev:"tutorial/getting-started/store-your-repository",next:"tutorial/understanding-dataprovider/index"}}},u={},s=[{value:"Create a new Netlify site",id:"create-a-new-netlify-site",level:2},{value:"Visit your new website",id:"visit-your-new-website",level:2}],y=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=y("Checklist"),f=y("ChecklistItem"),b={toc:s};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To make your app accessible to the public, you can use a hosting service to build and deploy your site live on the web. In this tutorial, we will use Netlify, but you are welcome to choose your preferred hosting service."),(0,o.kt)("p",null,"Netlify will use your GitHub repository to build and deploy your site every time you commit a change to your code. To connect your repository to Netlify, you will need to create a new Netlify site and link it to your GitHub repository."),(0,o.kt)("h2",{id:"create-a-new-netlify-site"},"Create a new Netlify site"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you don't already have a Netlify account, go to ",(0,o.kt)("a",{parentName:"p",href:"https://www.netlify.com/"},"Netlify.com")," and create a free account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add new site")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Import an existing project"),"."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You will be prompted to connect to a Git provider. Choose GitHub and follow the on-screen instructions to authenticate your GitHub account. Then, choose your project\u2019s GitHub repository from the list provided.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"To complete the process of deploying your app to the web, you will need to review and confirm the settings provided by Netlify. These settings should already be correctly configured for your ",(0,o.kt)("strong",{parentName:"li"},"refine")," project. Simply scroll down and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Deploy site"),".")),(0,o.kt)("p",null,"Congratulations! You now have an ",(0,o.kt)("strong",{parentName:"p"},"refine")," website hosted on Netlify."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To support for client-side routing, you can check out the Create React App documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/deployment/#netlify"},"deployment"),".")),(0,o.kt)("h2",{id:"visit-your-new-website"},"Visit your new website"),(0,o.kt)("p",null,"To view your new website, visit the URL provided in your site settings or type it into a browser window."),(0,o.kt)(d,{mdxType:"Checklist"},(0,o.kt)(f,{id:"deploy-your-project",mdxType:"ChecklistItem"},"I deployed my app to the Netfly.")))}m.isMDXComponent=!0}}]);