"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31135,8851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(86010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),r=n(67294),a=n(86010),i=n(12466),s=n(99104),c=n(72389);const l="tabList__CuJ",u="tabItem_LNqP";function p(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:l}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),f=e=>{const t=e.currentTarget,n=p.indexOf(t),o=l[n].value;o!==s&&(d(t),c(o))},m=e=>{var t;let n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:f},i,{className:(0,a.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":s===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function f(e){const t=(0,s.Y)(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",l)},r.createElement(p,(0,o.Z)({},e,t)),r.createElement(d,(0,o.Z)({},e,t)))}function m(e){const t=(0,c.Z)();return r.createElement(f,(0,o.Z)({key:String(t)},e))}},99104:(e,t,n)=>{n.d(t,{Y:()=>p});var o=n(67294),r=n(76775),a=n(91980);var i=n(50012);function s(e){return function(e){var t;return(null==(t=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??s(n);return function(e){const t=(void 0===(o=(e,t)=>e.value===t.value)&&(o=(e,t)=>e===t),(n=e).filter(((e,t)=>n.findIndex((t=>o(t,e)))!==t)));var n,o;if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function l(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=c(e),[s,p]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!l({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[d,f]=u({queryString:n,groupId:r}),[m,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,i.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),v=(()=>{const e=d??m;return l({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{v&&p(v)}),[v]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!l({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);p(e),f(e),h(e)}),[f,h,a]),tabValues:a}}},87801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"api-reference/core/hooks/useNotification/basic-usage-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/useNotification",slug:"/api-reference/core/hooks/useNotification/basic-usage-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1686811135,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=200px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"200px",hideCode:!0},'setInitialRoutes(["/"]);\n// visible-block-start\nimport { useNotification } from "@pankod/refine-core";\nimport { Button, Stack } from "@pankod/refine-mui";\n\nconst ExamplePage: React.FC = () => {\n  const { open, close } = useNotification();\n\n    return (\n        <Stack spacing={2} direction="row">\n            <Button\n                color="success"\n                variant="outlined"\n                size="small"\n                onClick={() =>\n                    open?.({\n                        type: "success",\n                        message: "Success",\n                        description: "Success description",\n                    })\n                }\n            >\n                Success\n            </Button>\n            <Button\n                color="error"\n                variant="outlined"\n                size="small"\n                onClick={() =>\n                    open?.({\n                        type: "error",\n                        message: "Error",\n                        description: "Error description",\n                    })\n                }\n            >\n                Error\n            </Button>\n\n            <Button\n                color="secondary"\n                variant="outlined"\n                size="small"\n                onClick={() =>\n                    open?.({\n                        type: "progress",\n                        message: "Progress",\n                        undoableTimeout: 5,\n                        cancelMutation: () => {\n                            alert("cancelMutation")\n                        }\n                    })\n                }\n            >\n                Progress\n            </Button>\n      </Stack>\n    );\n};\n// visible-block-end\nsetRefineProps({\n    DashboardPage: () => <ExamplePage />,\n    resources: [\n        {\n            name: "post",\n            create: () => {},\n        },\n    ],\n});\nrender(<RefineMuiDemo />);\n')))}p.isMDXComponent=!0},82196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));n(65488),n(85162),n(87801);const a={title:"useNotification",siderbar_label:"useNotification",source:"https://github.com/refinedev/refine/blob/next/packages/core/src/hooks/notification/useNotification/index.ts"},i=void 0,s={unversionedId:"api-reference/core/hooks/useNotification/index",id:"version-3.xx.xx/api-reference/core/hooks/useNotification/index",title:"useNotification",description:"It can be used to open or close notification at any time. It returns the open and close method from notificationProvider under the hood.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/index.md",sourceDirName:"api-reference/core/hooks/useNotification",slug:"/api-reference/core/hooks/useNotification/",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/index.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1686811135,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"useNotification",siderbar_label:"useNotification",source:"https://github.com/refinedev/refine/blob/next/packages/core/src/hooks/notification/useNotification/index.ts"},sidebar:"someSidebar",previous:{title:"useNavigation",permalink:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},next:{title:"useTitle",permalink:"/docs/3.xx.xx/api-reference/core/hooks/refine/useTitle"}},c={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>open</code>",id:"open",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to use a undoable notification?",id:"how-to-use-a-undoable-notification",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Return Values",id:"return-values",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It can be used to ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," notification at any time. It returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"notificationProvider"))," under the hood."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"Here is a basic example of how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"useNotification")," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { open, close } = useNotification();\n\n// open notification\nopen?.({\n    type: "success",\n    message: "Success",\n    description: "This is a success message",\n});\n\n// close notification\nclose?.("notification-key");\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"open"},(0,r.kt)("inlineCode",{parentName:"h3"},"open")),(0,r.kt)("p",null,"You can call this method to open a new notification box."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { open } = useNotification();\n\nopen?.({\n    type: "success",\n    message: "Success",\n    description: "This is a success message",\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences/#open-notification-params"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Open Notification Params")," interface for more information \u2192"))),(0,r.kt)("h3",{id:"close"},(0,r.kt)("inlineCode",{parentName:"h3"},"close")),(0,r.kt)("p",null,"You can close a notification with a ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { close } = useNotification();\n\nclose?.("notification-key");\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences/#close-notification-params"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Close Notification Params")," interface for more information \u2192"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You must pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," method. This key is used to close the notification.")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"how-to-use-a-undoable-notification"},"How to use a undoable notification?"),(0,r.kt)("p",null,"It should be ",(0,r.kt)("inlineCode",{parentName:"p"},"type=progress")," to show undoable notifications. A function can then be triggered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { open } = useNotification();\n\nopen?.({\n    type: "progress",\n    message: "Progress",\n    undoableTimeout: 5,\n    cancelMutation: () => {\n      // when undo button is clicked run this callback\n    }\n})\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"return-values"},"Return Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"open"),(0,r.kt)("td",{parentName:"tr",align:null},"Open Notification Params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences/#open-notification-params"},(0,r.kt)("inlineCode",{parentName:"a"},"Open Notification Params")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"Close Notification Params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences/#close-notification-params"},(0,r.kt)("inlineCode",{parentName:"a"},"Close Notification Params")))))))}p.isMDXComponent=!0}}]);