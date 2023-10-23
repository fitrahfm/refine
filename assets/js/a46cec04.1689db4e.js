"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"create",title:"Create",swizzle:!0},p=void 0,l={unversionedId:"api-reference/antd/components/basic-views/create",id:"api-reference/antd/components/basic-views/create",title:"Create",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like action buttons and giving titles to the page.",source:"@site/docs/api-reference/antd/components/basic-views/create.md",sourceDirName:"api-reference/antd/components/basic-views",slug:"/api-reference/antd/components/basic-views/create",permalink:"/docs/api-reference/antd/components/basic-views/create",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/basic-views/create.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1698055313,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{id:"create",title:"Create",swizzle:!0},sidebar:"someSidebar",previous:{title:"Inferencer",permalink:"/docs/api-reference/antd/components/inferencer"},next:{title:"Edit",permalink:"/docs/api-reference/antd/components/basic-views/edit"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>goBack</code>",id:"goback",level:3},{value:"<code>isLoading</code>",id:"isloading",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"<code>footerButtons</code>",id:"footerbuttons",level:3},{value:"<code>footerButtonProps</code>",id:"footerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const h={toc:u};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Create>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like action buttons and giving titles to the page."),(0,r.kt)("p",null,"We will show what ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create>")," does using properties with examples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/posts/create",live:!0,hideCode:!0,url:"http://localhost:3000/posts/create"},'interface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n}\n\n// visible-block-start\nimport { Create, useForm, useSelect } from "@refinedev/antd";\nimport { Form, Input, Select } from "antd";\n\nconst PostCreate: React.FC = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Category"\n                    name={["category", "id"]}\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select {...categorySelectProps} />\n                </Form.Item>\n                <Form.Item\n                    label="Status"\n                    name="status"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select\n                        options={[\n                            {\n                                label: "Published",\n                                value: "published",\n                            },\n                            {\n                                label: "Draft",\n                                value: "draft",\n                            },\n                            {\n                                label: "Rejected",\n                                value: "rejected",\n                            },\n                        ]}\n                    />\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h3"},"title")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"title")," allows you to add a title inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create>"),' component. If you don\'t pass the title props, it uses the "Create" prefix and the singular resource name by default. For example, for the ',(0,r.kt)("inlineCode",{parentName:"p"},"/posts/create"),' resource, it would be "Create post".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { Form, Input, Select, useForm, useSelect, CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Create title="Custom Title">\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"savebuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create>")," component has a save button that submits the form by default. If you want to customize this button you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { Form, Input, Select, useForm, useSelect, CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Create saveButtonProps={{ size: "small" }}>\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/buttons/save-button"},(0,r.kt)("inlineCode",{parentName:"a"},"<SaveButton>")," documentation ","\u2192"))),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create>")," component reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. If you want to use a custom resource for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/custom",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/custom"},'// handle initial routes in new way\nsetInitialRoutes(["/custom"]);\n\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\n\nconst MyComponent: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Create resource="posts">\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App: React.FC = () => {\n    return (\n        <RefineAntdDemo\n            legacyRouterProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <MyComponent />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.kt)("h3",{id:"goback"},(0,r.kt)("inlineCode",{parentName:"h3"},"goBack")),(0,r.kt)("p",null,"To customize the back button or to disable it, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\nimport { Button } from "antd";\n\nconst PostCreate: React.FC = () => {\n    const BackButton = () => <Button>\u2190</Button>;\n    return (\n        /* highlight-next-line */\n        <Create goBack={<BackButton />}>\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts", "/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If your route has no ",(0,r.kt)("inlineCode",{parentName:"p"},":action")," parameter or your action is ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", the back button will ",(0,r.kt)("em",{parentName:"p"},"not")," be shown even if you pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," property. You can override this behavior by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerProps")," property:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/* highlight-next-line */\nimport { useBack } from "@refinedev/core";\nimport { Create } from "@refinedev/antd";\nimport { Button } from "antd";\n\nconst PostCreate: React.FC = () => {\n    /* highlight-next-line */\n    const back = useBack();\n    const BackButton = () => <Button>\u2190</Button>;\n\n    return (\n        /* highlight-next-line */\n        <Create goBack={<BackButton />} headerProps={{ onBack: back }}>\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n'))),(0,r.kt)("h3",{id:"isloading"},(0,r.kt)("inlineCode",{parentName:"h3"},"isLoading")),(0,r.kt)("p",null,"To toggle the loading state of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Create isLoading={true}>\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"breadcrumb"},(0,r.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,r.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default the ",(0,r.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/antd")," package is used for breadcrumbs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create, Breadcrumb } from "@refinedev/antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            breadcrumb={\n                <div\n                    style={{\n                        padding: "3px 6px",\n                        border: "2px dashed cornflowerblue",\n                    }}\n                >\n                    <Breadcrumb />\n                </div>\n            }\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/breadcrumb"},(0,r.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation ","\u2192"))),(0,r.kt)("h3",{id:"wrapperprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property if you want to customize the wrapper of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create/>")," component. The ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/antd")," wrapper elements are simply ",(0,r.kt)("inlineCode",{parentName:"p"},"<div/>"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," and can get every attribute that ",(0,r.kt)("inlineCode",{parentName:"p"},"<div/>")," can get."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            wrapperProps={{\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"headerprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerProps")," property to customize the header of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create/>")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            headerProps={{\n                subTitle: "This is a subtitle",\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://procomponents.ant.design/en-US/components/page-header"},(0,r.kt)("inlineCode",{parentName:"a"},"PageHeader")," documentation ","\u2192"))),(0,r.kt)("h3",{id:"contentprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"contentProps")," property to customize the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create/>")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            contentProps={{\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/card/"},(0,r.kt)("inlineCode",{parentName:"a"},"Card")," documentation ","\u2192"))),(0,r.kt)("h3",{id:"headerbuttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,r.kt)("p",null,"You can customize the buttons at the header by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,r.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\nimport { Button } from "antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"headerbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," proeprty to customize the wrapper element of the buttons at the header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\nimport { Button } from "antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            headerButtonProps={{\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n            headerButtons={<Button type="primary">Custom Button</Button>}\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/space/"},(0,r.kt)("inlineCode",{parentName:"a"},"Space")," documentation ","\u2192"))),(0,r.kt)("h3",{id:"footerbuttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"footerButtons")),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create/>")," component has a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/buttons/save-button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<SaveButton>"))," at the footer."),(0,r.kt)("p",null,"You can customize the buttons at the footer by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"footerButtons")," property. It accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,r.kt)("inlineCode",{parentName:"p"},"({ defaultButtons, saveButtonProps }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\nimport { Button } from "antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            footerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("p",null,"Or, instead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultButtons"),", you can create your own buttons. If you want, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," to utilize the default values of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/buttons/save-button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<SaveButton>"))," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create, SaveButton } from "@refinedev/antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            footerButtons={({ saveButtonProps }) => (\n                <>\n                    <SaveButton\n                        {...saveButtonProps}\n                        type="primary"\n                        style={{ marginRight: 8 }}\n                    >\n                        Save\n                    </SaveButton>\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"footerbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"footerButtonProps")),(0,r.kt)("p",null,"You can customize the wrapper element of the buttons at the footer by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"footerButtonProps")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'const { CreateButton } = RefineAntd;\n\n// visible-block-start\nimport { Create } from "@refinedev/antd";\nimport { Button } from "antd";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            footerButtonProps={{\n                style: {\n                    // hide-start\n                    float: "right",\n                    marginRight: 24,\n                    // hide-end\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/space/"},(0,r.kt)("inlineCode",{parentName:"a"},"Space")," documentation ","\u2192"))),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(d,{module:"@refinedev/antd/Create","goBack-default":"`<ArrowLeft />`","headerProps-type":"[`PageHeaderProps`](https://procomponents.ant.design/en-US/components/page-header)",mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);