"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"mutation-mode",title:"Mutation Mode"},d=void 0,l={unversionedId:"advanced-tutorials/mutation-mode",id:"advanced-tutorials/mutation-mode",title:"Mutation Mode",description:"Overview",source:"@site/docs/advanced-tutorials/mutation-mode.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/mutation-mode",permalink:"/docs/advanced-tutorials/mutation-mode",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/mutation-mode.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1695922162,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{id:"mutation-mode",title:"Mutation Mode"},sidebar:"someSidebar",previous:{title:"Strapi-v4",permalink:"/docs/advanced-tutorials/multi-tenancy/strapi-v4"},next:{title:"List Search",permalink:"/docs/advanced-tutorials/search/list-search"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Modes",id:"modes",level:2},{value:"<code>pessimistic</code>",id:"pessimistic",level:3},{value:"<code>optimistic</code>",id:"optimistic",level:3},{value:"<code>undoable</code>",id:"undoable",level:3},{value:"Usage",id:"usage",level:2},{value:"Supported data hooks",id:"supported-data-hooks",level:3},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=c("Tabs"),f=c("TabItem"),h=c("CodeSandboxExample"),y={toc:p};function v(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { Refine } from "@refinedev/core";\nimport { AuthPage, RefineThemes, ThemedLayoutV2, ErrorComponent, notificationProvider } from "@refinedev/antd";\nimport routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";\nimport { ConfigProvider } from "antd";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\nimport dataProvider from "@refinedev/simple-rest";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nimport {\n    useMany as CoreUseMany,\n    useShow as RefineCoreUseShow,\n    useOne as RefineCoreUseOne,\n} from "@refinedev/core";\nimport {\n    List as RefineAntdList,\n    TextField as RefineAntdTextField,\n    useTable as RefineAntdUseTable,\n    EditButton as RefineAntdEditButton,\n    ShowButton as RefineAntdShowButton,\n    useForm as RefineAntdUseForm,\n    useSelect as RefineAntdUseSelect,\n    Create as RefineAntdCreate,\n    Edit as RefineAntdEdit,\n    Show as RefineAntdShow,\n} from "@refinedev/antd";\nimport {\n    Table as AntdTable,\n    Space as AntdSpace,\n    Form as AntdForm,\n    Select as AntdSelect,\n    Input as AntdInput,\n    Typography as AntdTypography,\n} from "antd";\n\nconst PostList: React.FC = () => {\n    const { tableProps, sorter } = RefineAntdUseTable<IPost>({\n        sorters: {\n            initial: [\n                {\n                    field: "$id",\n                    order: "asc",\n                },\n            ],\n        },\n    });\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data, isLoading } = CoreUseMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <RefineAntdList>\n            <AntdTable {...tableProps} rowKey="id">\n                <AntdTable.Column\n                    dataIndex="id"\n                    title="ID"\n                />\n                <AntdTable.Column dataIndex="title" title="Title" />\n                <AntdTable.Column\n                    dataIndex={["category", "id"]}\n                    title="Category"\n                    render={(value) => {\n                        if (isLoading) {\n                            return <RefineAntdTextField value="Loading..." />;\n                        }\n\n                        return (\n                            <RefineAntdTextField\n                                value={\n                                    data?.data.find((item) => item.id === value)\n                                        ?.title\n                                }\n                            />\n                        );\n                    }}\n                />\n                <AntdTable.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        <AntdSpace>\n                            <RefineAntdEditButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <RefineAntdShowButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                        </AntdSpace>\n                    )}\n                />\n            </AntdTable>\n        </RefineAntdList>\n    );\n};\n\nconst PostCreate: React.FC = () => {\n    const { formProps, saveButtonProps } = RefineAntdUseForm<IPost>();\n\n    const { selectProps: categorySelectProps } = RefineAntdUseSelect<ICategory>(\n        {\n            resource: "categories",\n        },\n    );\n\n    return (\n        <RefineAntdCreate saveButtonProps={saveButtonProps}>\n            <AntdForm {...formProps} layout="vertical">\n                <AntdForm.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdInput />\n                </AntdForm.Item>\n                <AntdForm.Item\n                    label="Category"\n                    name={["category", "id"]}\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdSelect {...categorySelectProps} />\n                </AntdForm.Item>\n                <AntdForm.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdInput.TextArea />\n                </AntdForm.Item>\n            </AntdForm>\n        </RefineAntdCreate>\n    );\n};\n\nconst PostEdit: React.FC = () => {\n    const { formProps, saveButtonProps, queryResult } =\n        RefineAntdUseForm<IPost>();\n\n    const postData = queryResult?.data?.data;\n    const { selectProps: categorySelectProps } = RefineAntdUseSelect<ICategory>({\n        resource: "categories",\n        defaultValue: postData?.category.id,\n    });\n\n    return (\n        <RefineAntdEdit saveButtonProps={saveButtonProps}>\n            <AntdForm {...formProps} layout="vertical">\n                <AntdForm.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdInput />\n                </AntdForm.Item>\n                <AntdForm.Item\n                    label="Category"\n                    name={["category", "id"]}\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdSelect {...categorySelectProps} />\n                </AntdForm.Item>\n                <AntdForm.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdInput.TextArea />\n                </AntdForm.Item>\n            </AntdForm>\n        </RefineAntdEdit>\n    );\n};\n\nconst PostShow: React.FC = () => {\n    const { queryResult } = RefineCoreUseShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        RefineCoreUseOne<ICategory>({\n            resource: "categories",\n            id: record?.category?.id || "",\n            queryOptions: {\n                enabled: !!record,\n            },\n        });\n\n    return (\n        <RefineAntdShow isLoading={isLoading}>\n            <AntdTypography.Title level={5}>Id</AntdTypography.Title>\n            <AntdTypography.Text>{record?.id}</AntdTypography.Text>\n\n            <AntdTypography.Title level={5}>\n                AntdTypography.Title\n            </AntdTypography.Title>\n            <AntdTypography.Text>{record?.title}</AntdTypography.Text>\n\n            <AntdTypography.Title level={5}>Category</AntdTypography.Title>\n            <AntdTypography.Text>\n                {categoryIsLoading ? "Loading..." : categoryData?.data.title}\n            </AntdTypography.Text>\n\n            <AntdTypography.Title level={5}>Content</AntdTypography.Title>\n            <AntdTypography.Text>{record?.content}</AntdTypography.Text>\n        </RefineAntdShow>\n    );\n};\n')),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,o.kt)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"optimistic")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"undoable"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Each mode corresponds to a different type of user experience."),(0,o.kt)("h2",{id:"modes"},"Modes"),(0,o.kt)("p",null,"We'll show usages of modes with editing a record examples."),(0,o.kt)("h3",{id:"pessimistic"},(0,o.kt)("inlineCode",{parentName:"h3"},"pessimistic")),(0,o.kt)("p",null,"The mutation runs immediately. Redirection and UI updates are executed after the mutation returns successfuly.  "),(0,o.kt)("p",null,"You can experience an example of this below using the edit page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly url=http://localhost:5173/posts previewHeight=600px",live:!0,previewOnly:!0,url:"http://localhost:5173/posts",previewHeight:"600px"},'setInitialRoutes(["/posts"]);\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    resources={[\n                        {\n                            name: "posts",\n                            list: "/posts",\n                            show: "/posts/show/:id",\n                            edit: "/posts/edit/:id",\n                        },\n                    ]}\n                    notificationProvider={notificationProvider}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route index element={<NavigateToResource />} />\n\n                            <Route path="/posts">\n                                <Route index element={<PostList />} />\n                                <Route path="create" element={<PostCreate />} />\n                                <Route path="edit/:id" element={<PostEdit />} />\n                                <Route path="show/:id" element={<PostShow />} />\n                            </Route>\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and after successful response, list page updates with newly edited record.")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"optimistic"},(0,o.kt)("inlineCode",{parentName:"h3"},"optimistic")),(0,o.kt)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. If mutation returns with error, UI updates to show data prior to the mutation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly url=http://localhost:5173/posts previewHeight=600px",live:!0,previewOnly:!0,url:"http://localhost:5173/posts",previewHeight:"600px"},'setInitialRoutes(["/posts"]);\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    resources={[\n                        {\n                            name: "posts",\n                            list: "/posts",\n                            show: "/posts/show/:id",\n                            edit: "/posts/edit/:id",\n                        },\n                    ]}\n                    notificationProvider={notificationProvider}\n                    options={{ mutationMode: "optimistic" }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route index element={<NavigateToResource />} />\n\n                            <Route path="/posts">\n                                <Route index element={<PostList />} />\n                                <Route path="create" element={<PostCreate />} />\n                                <Route path="edit/:id" element={<PostEdit />} />\n                                <Route path="show/:id" element={<PostShow />} />\n                            </Route>\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and list page updates with edited data immediately without waiting API response.")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"undoable"},(0,o.kt)("inlineCode",{parentName:"h3"},"undoable")),(0,o.kt)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. Waits for a customizable amount of timeout period before mutation is applied. During the timeout, mutation can be cancelled from the notification with an undo button and UI will revert back accordingly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly url=http://localhost:5173/posts previewHeight=600px",live:!0,previewOnly:!0,url:"http://localhost:5173/posts",previewHeight:"600px"},'setInitialRoutes(["/posts"]);\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    resources={[\n                        {\n                            name: "posts",\n                            list: "/posts",\n                            show: "/posts/show/:id",\n                            edit: "/posts/edit/:id",\n                        },\n                    ]}\n                    notificationProvider={notificationProvider}\n                    options={{ mutationMode: "undoable" }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route index element={<NavigateToResource />} />\n\n                            <Route path="/posts">\n                                <Route index element={<PostList />} />\n                                <Route path="create" element={<PostCreate />} />\n                                <Route path="edit/:id" element={<PostEdit />} />\n                                <Route path="show/:id" element={<PostShow />} />\n                            </Route>\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request isn't sent to API immediately however list page updates with edited data. It waits for a period of time while the user can cancel the mutation. If the mutation is cancelled, locally applied edit is undone.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Mutation mode can be set application-wide in ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#mutationmode"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'<Refine\n    ...\n    options={{ mutationMode: "optimistic" }}\n/>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Its default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"pessimistic"),".")),(0,o.kt)("br",null),(0,o.kt)("p",null,"It can also be set in supported ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useUpdate#mutation-mode"},"data hooks")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm#properties"},"form hooks")," for fine-grained configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@refinedev/core";\n\nconst { mutate } = useUpdate();\n\nmutate({\n    resource: "categories",\n    id: "2",\n    values: { title: "New Category Title" },\n    // highlight-next-line\n    mutationMode: "optimistic",\n});\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Mutation mode passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," will be overriden by the mutation mode passed to data or form hooks and components.")),(0,o.kt)("h3",{id:"supported-data-hooks"},"Supported data hooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useUpdate/"},(0,o.kt)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useUpdateMany/"},(0,o.kt)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useDelete/"},(0,o.kt)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useDeleteMany/"},(0,o.kt)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(m,{defaultValue:"antd",values:[{label:"Antd Design",value:"antd"},{label:"Chakra UI",value:"chakra-ui"},{label:"Mantine",value:"mantine"},{label:"Material UI",value:"material-ui"}],mdxType:"Tabs"},(0,o.kt)(f,{value:"antd",mdxType:"TabItem"},(0,o.kt)(h,{path:"form-antd-mutation-mode",mdxType:"CodeSandboxExample"})),(0,o.kt)(f,{value:"chakra-ui",mdxType:"TabItem"},(0,o.kt)(h,{path:"form-chakra-ui-mutation-mode",mdxType:"CodeSandboxExample"})),(0,o.kt)(f,{value:"mantine",mdxType:"TabItem"},(0,o.kt)(h,{path:"form-mantine-mutation-mode",mdxType:"CodeSandboxExample"})),(0,o.kt)(f,{value:"material-ui",mdxType:"TabItem"},(0,o.kt)(h,{path:"form-material-ui-mutation-mode",mdxType:"CodeSandboxExample"}))))}v.isMDXComponent=!0}}]);