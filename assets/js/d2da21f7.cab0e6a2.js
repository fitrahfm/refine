"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6073],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=o.createContext({}),u=function(e){var r=o.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return o.createElement(m.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,d=p["".concat(m,".").concat(f)]||p[f]||c[f]||a;return t?o.createElement(d,i(i({ref:r},s),{},{components:t})):o.createElement(d,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var m in r)hasOwnProperty.call(r,m)&&(l[m]=r[m]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5321:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>m,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>c});t(67294);var o=t(3905);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={id:"useModalForm",title:"useModalForm","example-tags":["form","mui","react-hook-form"]},m=void 0,u={unversionedId:"examples/form/mui/useModalForm",id:"version-3.xx.xx/examples/form/mui/useModalForm",title:"useModalForm",description:"useModalForm hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal. You can view the live example or review the source code to see how it's used with Material UI.",source:"@site/versioned_docs/version-3.xx.xx/examples/form/mui/useModalForm.md",sourceDirName:"examples/form/mui",slug:"/examples/form/mui/useModalForm",permalink:"/docs/3.xx.xx/examples/form/mui/useModalForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/form/mui/useModalForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1691157843,formattedLastUpdatedAt:"Aug 4, 2023",frontMatter:{id:"useModalForm",title:"useModalForm","example-tags":["form","mui","react-hook-form"]},sidebar:"someSidebar",previous:{title:"useForm",permalink:"/docs/3.xx.xx/examples/form/mui/useForm"},next:{title:"useStepsForm",permalink:"/docs/3.xx.xx/examples/form/mui/useStepsForm"}},s={},c=[],p=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var f;const d={toc:c};function y(e){var{components:r}=e,t=i(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal. You can view the live example or review the source code to see how it's used with Material UI."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useModalForm/"},"Refer to the useModalForm hook documentation for more information. \u2192")),(0,o.kt)(p,{path:"form-material-ui-use-modal-form",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);