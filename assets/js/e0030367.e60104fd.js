"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"delete-button",title:"Delete",swizzle:!0},s=void 0,d={unversionedId:"api-reference/antd/components/buttons/delete-button",id:"api-reference/antd/components/buttons/delete-button",title:"Delete",description:"` uses Ant Design's  and ` components.",source:"@site/docs/api-reference/antd/components/buttons/delete.md",sourceDirName:"api-reference/antd/components/buttons",slug:"/api-reference/antd/components/buttons/delete-button",permalink:"/docs/api-reference/antd/components/buttons/delete-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/buttons/delete.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1697459234,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{id:"delete-button",title:"Delete",swizzle:!0},sidebar:"someSidebar",previous:{title:"Create",permalink:"/docs/api-reference/antd/components/buttons/create-button"},next:{title:"Edit",permalink:"/docs/api-reference/antd/components/buttons/edit-button"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>onSuccess</code>",id:"onsuccess",level:3},{value:"<code>mutationMode</code>",id:"mutationmode",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"<del><code>resourceNameOrRouteName</code></del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"How to override confirm texts?",id:"how-to-override-confirm-texts",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=u("PropTag"),f=u("PropsTable"),h={toc:p};function b(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," uses Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/popconfirm/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Popconfirm>"))," components."),(0,r.kt)("p",null,"When you try to delete something, a pop-up shows up and asks for confirmation. When confirmed it executes the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete"))," method provided by your ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport {\n    List,\n    useTable,\n    // highlight-next-line\n    DeleteButton,\n} from "@refinedev/antd";\nimport { Table } from "antd";\n\nconst PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" width="50%" />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    key="actions"\n                    render={(_, record) => (\n                        // highlight-next-line\n                        <DeleteButton size="small" recordItemId={record.id} />\n                    )}\n                    width="50%"\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"recorditemid"},(0,r.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which record will be deleted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { DeleteButton } from "@refinedev/antd";\n\nconst MyEditComponent = () => {\n    return (\n        <DeleteButton\n            resource="posts"\n            // highlight-next-line\n            recordItemId="123"\n        />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => {\n                    return <RefineAntd.List>List page here...</RefineAntd.List>;\n                },\n            },\n        ]}\n        DashboardPage={MyEditComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete")),' method and then the record whose resource is "posts" and whose id is "123" will be deleted.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<DeleteButton>"))," component reads the id information from the route by default.")),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resource")," allows us to manage which resource's record is going to be deleted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/antd";\n\nconst MyDeleteComponent = () => {\n    return <DeleteButton resource="categories" recordItemId="123" />;\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => {\n                    return <RefineAntd.List>List page here...</RefineAntd.List>;\n                },\n            },\n            {\n                name: "categories",\n                list: () => {\n                    return <RefineAntd.List>List page here...</RefineAntd.List>;\n                },\n            },\n        ]}\n        DashboardPage={MyDeleteComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete")),' method and then the record whose resource is "categories" and whose id is "2" will be deleted.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<DeleteButton>"))," component reads the resource name from the route by default.")),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.kt)("h3",{id:"onsuccess"},(0,r.kt)("inlineCode",{parentName:"h3"},"onSuccess")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess")," can be used if you want to do something based on the results returned after the delete request."),(0,r.kt)("p",null,"For example, let's ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," after deletion:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=150px disableScroll",live:!0,url:"http://localhost:3000",previewHeight:"150px",disableScroll:!0},'setInitialRoutes(["/"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/antd";\n\nconst MyDeleteComponent = () => {\n    return (\n        <DeleteButton\n            resourceNameOrRouteName="posts"\n            recordItemId="1"\n            onSuccess={(value) => {\n                console.log(value);\n            }}\n        />\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    const simpleRestDataProvider = dataProvider(\n        "https://api.fake-rest.refine.dev",\n    );\n\n    const customDataProvider = {\n        ...simpleRestDataProvider,\n        deleteOne: async ({ resource, id, variables }) => {\n            await new Promise((resolve) => setTimeout(resolve, 500));\n\n            return {\n                message: "You have successfully deleted the record",\n            };\n        },\n    };\n\n    return (\n        <RefineAntdDemo\n            dataProvider={customDataProvider}\n            resources={[\n                {\n                    name: "posts",\n                    list: MyDeleteComponent,\n                },\n            ]}\n        />\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("h3",{id:"mutationmode"},(0,r.kt)("inlineCode",{parentName:"h3"},"mutationMode")),(0,r.kt)("p",null,"Determines which mode mutation will have while executing ",(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton>"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/mutation-mode"},"mutation mode documentation ","\u2192"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, DeleteButton, useTable } from "@refinedev/antd";\nimport { Table } from "antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        <DeleteButton\n                            size="small"\n                            recordItemId={record.id}\n                            // highlight-next-line\n                            mutationMode="undoable"\n                        />\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n')),(0,r.kt)("h3",{id:"hidetext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,r.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/antd";\n\nconst MyDeleteComponent = () => {\n    return (\n        <DeleteButton\n            recordItemId="123"\n            // highlight-next-line\n            hideText={true}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: MyDeleteComponent,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"accesscontrol"},(0,r.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,r.kt)("p",null,"This prop can be used to skip access control check with its ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@refinedev/antd";\n\nexport const MyListComponent = () => {\n    return (\n        <DeleteButton\n            accessControl={{ enabled: true, hideIfUnauthorized: true }}\n        />\n    );\n};\n')),(0,r.kt)("h3",{id:"resourcenameorroutename-"},(0,r.kt)("del",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"del"},"resourceNameOrRouteName"))," ",(0,r.kt)(m,{deprecated:!0,mdxType:"PropTag"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," prop is deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," allows us to manage which resource's record is going to be deleted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/antd";\n\nconst MyDeleteComponent = () => {\n    return (\n        <DeleteButton resourceNameOrRouteName="categories" recordItemId="123" />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => {\n                    return <RefineAntd.List>List page here...</RefineAntd.List>;\n                },\n            },\n            {\n                name: "categories",\n                list: () => {\n                    return <RefineAntd.List>List page here...</RefineAntd.List>;\n                },\n            },\n        ]}\n        DashboardPage={MyDeleteComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete")),' method and then the record whose resource is "categories" and whose id is "2" gets deleted.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<DeleteButton>"))," component reads the resource name from the route by default.")),(0,r.kt)("h2",{id:"how-to-override-confirm-texts"},"How to override confirm texts?"),(0,r.kt)("p",null,"You can change the text that appears when you confirm a transaction with the ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmTitle")," prop, as well as what the 'ok' and 'cancel' buttons' text look like with the ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmOkText")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmCancelText")," props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/antd";\n\nconst MyDeleteComponent = () => {\n    return (\n        <DeleteButton\n            recordItemId="123"\n            // highlight-start\n            confirmTitle="Title"\n            confirmOkText="Ok Text"\n            confirmCancelText="Delete Text"\n            // highlight-end\n        />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: MyDeleteComponent,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(f,{module:"@refinedev/antd/DeleteButton",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),".")))}b.isMDXComponent=!0}}]);