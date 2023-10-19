"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"simple-rest",title:"Simple REST"},p=void 0,d={unversionedId:"packages/documentation/data-providers/simple-rest",id:"packages/documentation/data-providers/simple-rest",title:"Simple REST",description:"The Simple REST data provider is a package that provides an implementation for working with REST APIs that conform to a standard API design. It is built on the foundation of the json-server package.",source:"@site/docs/packages/documentation/data-providers/simple-rest.md",sourceDirName:"packages/documentation/data-providers",slug:"/packages/documentation/data-providers/simple-rest",permalink:"/docs/packages/documentation/data-providers/simple-rest",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/documentation/data-providers/simple-rest.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1697716326,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{id:"simple-rest",title:"Simple REST"},sidebar:"someSidebar",previous:{title:"GraphQL",permalink:"/docs/packages/documentation/data-providers/graphql"},next:{title:"Strapi-v4",permalink:"/docs/packages/documentation/data-providers/strapi-v4"}},s={},m=[{value:"Usage",id:"usage",level:2},{value:"URL design",id:"url-design",level:2},{value:"Default HTTP methods and customizing them",id:"default-http-methods-and-customizing-them",level:2},{value:"Passing custom headers",id:"passing-custom-headers",level:2},{value:"Customizing the data provider",id:"customizing-the-data-provider",level:2}],u={toc:m};function c(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Simple REST data provider is a package that provides an implementation for working with REST APIs that conform to a standard API design. It is built on the foundation of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typicode/json-server"},"json-server")," package."),(0,a.kt)("p",null,"You can use this data provider to quickly get started with ",(0,a.kt)("strong",{parentName:"p"},"refine")," and then customize it to fit your specific needs."),(0,a.kt)("p",null,"Run the following command to install:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @refinedev/simple-rest\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The package exports a function that accepts two parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"apiUrl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"httpClient"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"apiUrl"),":")," The base URL for your API endpoints. All requests made through the data provider will be made relative to this URL."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\nconst App = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider("https://my.api.com")}\n            /* ... */\n        />\n    );\n};\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"httpClient"),":")," An axios instance used to make HTTP requests. You can provide your own instance otherwise the data provider will create one for you."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, HttpError } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport axios from "axios";\n\nconst httpClient = axios.create();\n\nhttpClient.interceptors.response.use(\n    (response) => {\n        return response;\n    },\n    (error) => {\n        const customError: HttpError = {\n            ...error,\n            message: error.response?.data?.message,\n            statusCode: error.response?.status,\n        };\n\n        return Promise.reject(customError);\n    },\n);\n\nconst App = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider("https://my.api.com", httpClient)}\n            /* ... */\n        />\n    );\n};\n')))),(0,a.kt)("h2",{id:"url-design"},"URL design"),(0,a.kt)("p",null,"The data provider methods are designed to work with REST APIs that follow the standard design. The following table shows the expected URL for each method:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"URL"),(0,a.kt)("th",{parentName:"tr",align:null},"Query Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Body"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getList")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"resource")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pagination"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"sorters"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"filters")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getOne")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"resource")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getMany")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"resource")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"create")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"resource")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"variables"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"update")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"resource")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"variables"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"deleteOne")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"resource")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"data: variables"))))),(0,a.kt)("h2",{id:"default-http-methods-and-customizing-them"},"Default HTTP methods and customizing them"),(0,a.kt)("p",null,"The following table shows the HTTP method used for each data provider method:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP Method"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getList")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"GET"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getOne")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"GET"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getMany")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"GET"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"create")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"POST"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"update")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PATCH"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"deleteOne")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DELETE"))))),(0,a.kt)("p",null,"You can customize the HTTP method used for each data provider method by passing a ",(0,a.kt)("inlineCode",{parentName:"p"},"method")," property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," parameter when calling a hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@refinedev/core";\n\nconst { mutate } = useUpdate();\n\nmutate({\n    resource: "posts",\n    id: 1,\n    variables: {\n        title: "New title",\n    },\n    //highlight-start\n    meta: {\n        method: "put",\n    },\n    //highlight-end\n});\n')),(0,a.kt)("h2",{id:"passing-custom-headers"},"Passing custom headers"),(0,a.kt)("p",null,"You can pass custom headers to the data provider by passing a ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useOne } from "@refinedev/core";\n\nuseOne({\n    resource: "posts",\n    id: 1,\n    //highlight-start\n    meta: {\n        headers: {\n            "X-Custom-Header": "Custom header value",\n        },\n    },\n    //highlight-end\n});\n')),(0,a.kt)("h2",{id:"customizing-the-data-provider"},"Customizing the data provider"),(0,a.kt)("p",null,"In some cases, you may need to customize the data provider to work with a REST API that doesn't follow the simple-rest design. In this case, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"swizzle")," command to customize the data provider."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"swizzle")," command is only available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/cli")," package. If you don't have it installed, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli/"},"CLI documentation"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"swizzle")," command in the project directory:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run refine swizzle\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/simple-rest")," from the list of available data providers.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"/rest-data-provider/index.ts")," file to customize the data provider.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pass the customized data provider to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," prop of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Refine")," component."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n\nimport { dataProvider } from "./rest-data-provider";\n\nconst App = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider}\n            /* ... */\n        />\n    );\n};\n')))))}c.isMDXComponent=!0}}]);