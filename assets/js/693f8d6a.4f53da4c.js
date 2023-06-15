"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"simple-rest",title:"Simple REST"},o=void 0,l={unversionedId:"packages/documentation/data-providers/simple-rest",id:"packages/documentation/data-providers/simple-rest",title:"Simple REST",description:"The Simple REST data provider is a package that provides an implementation for working with REST APIs that conform to a standard API design. It is built on the foundation of the json-server package.",source:"@site/docs/packages/documentation/data-providers/simple-rest.md",sourceDirName:"packages/documentation/data-providers",slug:"/packages/documentation/data-providers/simple-rest",permalink:"/docs/packages/documentation/data-providers/simple-rest",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/documentation/data-providers/simple-rest.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1686811135,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{id:"simple-rest",title:"Simple REST"},sidebar:"someSidebar",previous:{title:"GraphQL",permalink:"/docs/packages/documentation/data-providers/graphql"},next:{title:"Strapi-v4",permalink:"/docs/packages/documentation/data-providers/strapi-v4"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"URL design",id:"url-design",level:2},{value:"Default HTTP methods and customizing them",id:"default-http-methods-and-customizing-them",level:2},{value:"Passing custom headers",id:"passing-custom-headers",level:2},{value:"Customizing the data provider",id:"customizing-the-data-provider",level:2}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Simple REST data provider is a package that provides an implementation for working with REST APIs that conform to a standard API design. It is built on the foundation of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typicode/json-server"},"json-server")," package."),(0,r.kt)("p",null,"You can use this data provider to quickly get started with ",(0,r.kt)("strong",{parentName:"p"},"refine")," and then customize it to fit your specific needs."),(0,r.kt)("p",null,"Run the following command to install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @refinedev/simple-rest\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The package exports a function that accepts two parameters: ",(0,r.kt)("inlineCode",{parentName:"p"},"apiUrl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"httpClient"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"apiUrl"),":")," The base URL for your API endpoints. All requests made through the data provider will be made relative to this URL."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\nconst App = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider("https://my.api.com")}\n            /* ... */\n        />\n    );\n};\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"httpClient"),":")," An axios instance used to make HTTP requests. You can provide your own instance otherwise the data provider will create one for you."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, HttpError } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport axios from "axios";\n\nconst httpClient = axios.create();\n\nhttpClient.interceptors.response.use(\n    (response) => {\n        return response;\n    },\n    (error) => {\n        const customError: HttpError = {\n            ...error,\n            message: error.response?.data?.message,\n            statusCode: error.response?.status,\n        };\n\n        return Promise.reject(customError);\n    },\n);\n\nconst App = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider("https://my.api.com", httpClient)}\n            /* ... */\n        />\n    );\n};\n')))),(0,r.kt)("h2",{id:"url-design"},"URL design"),(0,r.kt)("p",null,"The data provider methods are designed to work with REST APIs that follow the standard design. The following table shows the expected URL for each method:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Query Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Body"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getList")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"resource")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pagination"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sorters"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"filters")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getOne")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"resource")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getMany")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"resource")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"create")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"resource")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"variables"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"resource")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"variables"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deleteOne")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"resource")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data: variables"))))),(0,r.kt)("h2",{id:"default-http-methods-and-customizing-them"},"Default HTTP methods and customizing them"),(0,r.kt)("p",null,"The following table shows the HTTP method used for each data provider method:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getList")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getOne")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getMany")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"create")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POST"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PATCH"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deleteOne")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DELETE"))))),(0,r.kt)("p",null,"You can customize the HTTP method used for each data provider method by passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," parameter when calling a hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@refinedev/core";\n\nconst { mutate } = useUpdate();\n\nmutate({\n    resource: "posts",\n    id: 1,\n    variables: {\n        title: "New title",\n    },\n    //highlight-start\n    meta: {\n        method: "put",\n    },\n    //highlight-end\n});\n')),(0,r.kt)("h2",{id:"passing-custom-headers"},"Passing custom headers"),(0,r.kt)("p",null,"You can pass custom headers to the data provider by passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useOne } from "@refinedev/core";\n\nuseOne({\n    resource: "posts",\n    id: 1,\n    //highlight-start\n    meta: {\n        headers: {\n            "X-Custom-Header": "Custom header value",\n        },\n    },\n    //highlight-end\n});\n')),(0,r.kt)("h2",{id:"customizing-the-data-provider"},"Customizing the data provider"),(0,r.kt)("p",null,"In some cases, you may need to customize the data provider to work with a REST API that doesn't follow the simple-rest design. In this case, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle")," command to customize the data provider."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle")," command is only available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/cli")," package. If you don't have it installed, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli/"},"CLI documentation"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle")," command in the project directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run refine swizzle\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/simple-rest")," from the list of available data providers.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"/rest-data-provider/index.ts")," file to customize the data provider.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pass the customized data provider to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," prop of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Refine")," component."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n\nimport { dataProvider } from "./rest-data-provider";\n\nconst App = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider}\n            /* ... */\n        />\n    );\n};\n')))))}s.isMDXComponent=!0}}]);