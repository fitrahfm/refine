"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32081],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(h,a(a({ref:n},l),{},{components:t})):r.createElement(h,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const i={id:"edit-button",title:"Edit",swizzle:!0},a=void 0,p={unversionedId:"api-reference/mantine/components/buttons/edit-button",id:"api-reference/mantine/components/buttons/edit-button",title:"Edit",description:"` uses Mantine  component. It uses the edit method from useNavigation` under the hood. It can be useful when redirecting the app to the edit page with the record id route of resource.",source:"@site/docs/api-reference/mantine/components/buttons/edit.md",sourceDirName:"api-reference/mantine/components/buttons",slug:"/api-reference/mantine/components/buttons/edit-button",permalink:"/docs/api-reference/mantine/components/buttons/edit-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mantine/components/buttons/edit.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1683898558,formattedLastUpdatedAt:"May 12, 2023",frontMatter:{id:"edit-button",title:"Edit",swizzle:!0},sidebar:"someSidebar",previous:{title:"Delete",permalink:"/docs/api-reference/mantine/components/buttons/delete-button"},next:{title:"Export",permalink:"/docs/api-reference/mantine/components/buttons/export-button"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"<del><code>resourceNameOrRouteName</code></del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},c=l("PropTag"),u=l("PropsTable"),m={toc:d};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = LegacyRefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    legacyRouterProvider: routerProvider,\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    notificationProvider: RefineMantine.notificationProvider,\n    Layout: RefineMantine.Layout,\n    Sider: () => null,\n    catchAll: <RefineMantine.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <MantineCore.MantineProvider\n            theme={RefineMantine.LightTheme}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <MantineCore.Global\n                styles={{ body: { WebkitFontSmoothing: "auto" } }}\n            />\n            <MantineNotifications.NotificationsProvider position="top-right">\n                {children}\n            </MantineNotifications.NotificationsProvider>\n        </MantineCore.MantineProvider>\n    );\n};\n\nconst EditPage = () => {\n    const { list } = RefineCore.useNavigation();\n    const params = RefineCore.useRouterContext().useParams();\n\n    return (\n        <div>\n            <RefineMantine.Text italic color="dimmed" size="sm">\n                URL Parameters:\n            </RefineMantine.Text>\n            <RefineMantine.Code>{JSON.stringify(params)}</RefineMantine.Code>\n            <RefineMantine.Space h="md" />\n            <RefineMantine.Button\n                size="xs"\n                variant="outline"\n                onClick={() => list("posts")}\n            >\n                Go back\n            </RefineMantine.Button>\n        </div>\n    );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses Mantine ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the edit page with the record id route of resource."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine, useNavigation, useRouterContext } from "@refinedev/core";\n\n// visible-block-start\nimport { List, EditButton } from "@refinedev/mantine";\nimport { Table, Pagination } from "@mantine/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "actions",\n                header: "Actions",\n                accessorKey: "id",\n                cell: function render({ getValue }) {\n                    return (\n                        // highlight-start\n                        <EditButton\n                            size="xs"\n                            recordItemId={getValue() as number}\n                        />\n                        // highlight-end\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n    });\n\n    return (\n        <List>\n            <Table>\n                <thead>\n                    {getHeaderGroups().map((headerGroup) => (\n                        <tr key={headerGroup.id}>\n                            {headerGroup.headers.map((header) => (\n                                <th key={header.id}>\n                                    {header.isPlaceholder\n                                        ? null\n                                        : flexRender(\n                                              header.column.columnDef.header,\n                                              header.getContext(),\n                                          )}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody>\n                    {getRowModel().rows.map((row) => (\n                        <tr key={row.id}>\n                            {row.getVisibleCells().map((cell) => (\n                                <td key={cell.id}>\n                                    {flexRender(\n                                        cell.column.columnDef.cell,\n                                        cell.getContext(),\n                                    )}\n                                </td>\n                            ))}\n                        </tr>\n                    ))}\n                </tbody>\n            </Table>\n            <br />\n            <Pagination\n                position="right"\n                total={pageCount}\n                page={current}\n                onChange={setCurrent}\n            />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    edit: EditPage,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"recorditemid"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { EditButton } from "@refinedev/mantine";\n\nconst MyEditComponent = () => {\n    return <EditButton recordItemId="123" />;\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    list: MyEditComponent,\n                    edit: EditPage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,"Redirection endpoint is defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," property and its ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," action path. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses the inferred resource from the route."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { EditButton } from "@refinedev/mantine";\n\nconst MyEditComponent = () => {\n    return <EditButton resource="categories" recordItemId="2" />;\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    list: MyEditComponent,\n                },\n                {\n                    name: "categories",\n                    edit: EditPage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," action path of the resource, filling the necessary parameters in the route."),(0,o.kt)("h3",{id:"meta"},(0,o.kt)("inlineCode",{parentName:"h3"},"meta")),(0,o.kt)("p",null,"It is used to pass additional parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," method. You can pass additional parameters or override the existing ones using the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," prop."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," action route is defined by the pattern: ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/:authorId/edit/:id"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n    return (\n        <EditButton meta={{ authorId: "10" }} />\n    );\n};\n')),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { EditButton } from "@refinedev/mantine";\n\nconst MyEditComponent = () => {\n    return <EditButton recordItemId="123" hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    list: MyEditComponent,\n                    edit: EditPage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"accesscontrol"},(0,o.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,o.kt)("p",null,"This prop can be used to skip access control check with its ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@refinedev/mantine";\n\nexport const MyListComponent = () => {\n    return (\n        <EditButton\n            accessControl={{ enabled: true, hideIfUnauthorized: true }}\n        />\n    );\n};\n')),(0,o.kt)("h3",{id:"resourcenameorroutename-"},(0,o.kt)("del",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"del"},"resourceNameOrRouteName"))," ",(0,o.kt)(c,{deprecated:!0,mdxType:"PropTag"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," prop is deprecated. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,o.kt)("p",null,"Redirection endpoint(",(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName/edit"),") is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," property. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property of the resource object as an endpoint to redirect after clicking."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { EditButton } from "@refinedev/mantine";\n\nconst MyEditComponent = () => {\n    return <EditButton resourceNameOrRouteName="categories" recordItemId="2" />;\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    list: MyEditComponent,\n                },\n                {\n                    name: "categories",\n                    edit: EditPage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,o.kt)("inlineCode",{parentName:"p"},"/categories/edit/2"),"."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(u,{module:"@refinedev/mantine/EditButton",mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);