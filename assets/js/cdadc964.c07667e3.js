"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65683],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,f=d["".concat(u,".").concat(h)]||d[h]||l[h]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30982:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});t(67294);var n=t(3905);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"useOnError",title:"useOnError",siderbar_label:"useOnError",description:"useOnError data hook from refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useOnError/index.ts"},u=void 0,c={unversionedId:"api-reference/core/hooks/authentication/useOnError",id:"api-reference/core/hooks/authentication/useOnError",title:"useOnError",description:"useOnError data hook from refine is a modified version of react-query's useMutation for create mutations",source:"@site/docs/api-reference/core/hooks/authentication/useOnError.md",sourceDirName:"api-reference/core/hooks/authentication",slug:"/api-reference/core/hooks/authentication/useOnError",permalink:"/docs/api-reference/core/hooks/authentication/useOnError",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/authentication/useOnError.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1695662180,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{id:"useOnError",title:"useOnError",siderbar_label:"useOnError",description:"useOnError data hook from refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useOnError/index.ts"},sidebar:"someSidebar",previous:{title:"useIsAuthenticated",permalink:"/docs/api-reference/core/hooks/authentication/useIsAuthenticated"},next:{title:"useGetIdentity",permalink:"/docs/api-reference/core/hooks/authentication/useGetIdentity"}},p={},l=[{value:"Internal Usage",id:"internal-usage",level:2},{value:"Usage",id:"usage",level:2}],d={toc:l};function h(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," is provided.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useOnError")," calls the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/#onerror-"},(0,n.kt)("inlineCode",{parentName:"a"},"onError"))," method from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,n.kt)("p",null,"It returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"useMutation"),", which includes many properties like ",(0,n.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"isError"),"."),(0,n.kt)("p",null,"Data that is resolved from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/#onerror-"},(0,n.kt)("inlineCode",{parentName:"a"},"onError"))," will be returned as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type OnErrorResponse = {\n    redirectTo?: string;\n    logout?: boolean;\n    error?: Error;\n};\n")),(0,n.kt)("p",null,"According to the ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," method's returned values, the following process will be executed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If it has a value, the app will be redirected to the given URL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"logout"),": If it is ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"useOnError")," calls the ",(0,n.kt)("inlineCode",{parentName:"li"},"logout")," method."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error"),": An Error object representing any errors that may have occurred during the operation.")),(0,n.kt)("h2",{id:"internal-usage"},"Internal Usage"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," uses ",(0,n.kt)("inlineCode",{parentName:"p"},"useOnError")," internally in the data hooks to handle errors in a unified way."),(0,n.kt)("p",null,"When an error is thrown by any data hook, the ",(0,n.kt)("inlineCode",{parentName:"p"},"useOnError")," function is triggered with the error object. Afterward, the error object is passed to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/#onerror-"},(0,n.kt)("inlineCode",{parentName:"a"},"onError"))," method of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider")),", which can be utilized to redirect the user or to log them out."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    logout: () => {\n        // ---\n        return {\n            success: true,\n            redirectTo: "/login",\n        };\n    },\n    // highlight-start\n    onError: (error) => {\n        const status = error.status;\n        if (status === 418) {\n            return {\n                logout: true,\n                redirectTo: "/login",\n                error: new Error(error),\n            };\n        }\n        return {};\n    },\n    // highlight-end\n    // ---\n};\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information about data hooks, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider/#supported-hooks"},"Data Provider documentation","\u2192"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Let's say that a payment request was declined by the API. If the error status code is ",(0,n.kt)("inlineCode",{parentName:"p"},"418"),", the user will be logged out for security reasons:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useOnError } from "@refinedev/core";\n\n// highlight-next-line\nconst { mutate: onError } = useOnError();\n\nfetch("http://example.com/payment")\n    .then(() => console.log("Success"))\n    // highlight-next-line\n    .catch((error) => onError(error));\n')),(0,n.kt)("p",null,"We have a logic in ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," method like below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    logout: () => {\n        // ---\n        return {\n            success: true,\n            redirectTo: "/login",\n        };\n    },\n    // highlight-start\n    onError: (error) => {\n        const status = error.status;\n        if (status === 418) {\n            return {\n                logout: true,\n                redirectTo: "/login",\n                error: new Error(error),\n            };\n        }\n        return {};\n    },\n    // highlight-end\n    // ---\n};\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Any error passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," function will be available in the ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),".")))}h.isMDXComponent=!0}}]);