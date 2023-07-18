"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"useAuthenticated",title:"useAuthenticated",siderbar_label:"useAuthenticated",description:"useAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations"},s=void 0,u={unversionedId:"api-reference/core/hooks/auth/useAuthenticated",id:"version-3.xx.xx/api-reference/core/hooks/auth/useAuthenticated",title:"useAuthenticated",description:"useAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useAuthenticated.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useAuthenticated",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useAuthenticated.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1689684410,formattedLastUpdatedAt:"Jul 18, 2023",frontMatter:{id:"useAuthenticated",title:"useAuthenticated",siderbar_label:"useAuthenticated",description:"useAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations"},sidebar:"someSidebar",previous:{title:"useCan",permalink:"/docs/3.xx.xx/api-reference/core/hooks/accessControl/useCan"},next:{title:"useCheckError",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useCheckError"}},l={},p=[{value:"Usage",id:"usage",level:2}],d={toc:p};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkAuth")," method from the",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood. "),(0,r.kt)("p",null,"It returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,r.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isError"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Data that is resolved from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," will be returned as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," can be useful when you want to ask for authentication to grant access to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/custom-pages"},"custom pages")," manually."),(0,r.kt)("p",null,"We have used this hook in refine's ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/auth/authenticated"},(0,r.kt)("inlineCode",{parentName:"a"},"<Authenticated>"))," component which allows only authenticated users to access the page or any part of the code."),(0,r.kt)("p",null,"We will demonstrate a similar basic implementation below. Imagine that you have public page but you want to make some specific fields private."),(0,r.kt)("p",null,"We have a logic in ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"checkAuth")," method like below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n  ...\n    // highlight-start\n    checkAuth: () => {\n        localStorage.getItem("username")\n                ? Promise.resolve()\n                : Promise.reject(),\n    },\n    // highlight-end\n  ...\n};\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Let's create a wrapper component that renders children if ",(0,r.kt)("inlineCode",{parentName:"p"},"checkAuth")," method returns the Promise resolved."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/authenticated.tsx"',title:'"components/authenticated.tsx"'},'// highlight-next-line\nimport { useAuthenticated, useNavigation } from "@pankod/refine";\n\nexport const Authenticated: React.FC<AuthenticatedProps> = ({\n    children,\n    fallback,\n    loading,\n}) => {\n    // highlight-next-line\n    const { isSuccess, isLoading, isError } = useAuthenticated();\n\n    const { replace } = useNavigation();\n\n    if (isLoading) {\n        return <>{loading}</> || null;\n    }\n\n    if (isError) {\n        if (!fallback) {\n            replace("/");\n            return null;\n        }\n\n        return <>{fallback}</>;\n    }\n\n    if (isSuccess) {\n        return <>{children}</>;\n    }\n\n    return null;\n};\n\ntype AuthenticatedProps = {\n    fallback?: React.ReactNode;\n    loading?: React.ReactNode;\n};\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now, only authenticated users can see the price field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/postShow"',title:'"components/postShow"'},'// highlight-next-line\nimport { Authenticated } from "components/authenticated"\n\nconst { Title, Text } = Typography;\n\nexport const PostShow: React.FC = () => (\n    <div>\n        // highlight-start\n        <Authenticated>\n            <span>Only authenticated users can see</span>\n        </Authenticated>\n        // highlight-end\n    </div>\n)\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}h.isMDXComponent=!0}}]);