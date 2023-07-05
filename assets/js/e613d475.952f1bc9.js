"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"real-time",title:"Live / Realtime",sidebar_label:"Live / Realtime"},l=void 0,p={unversionedId:"advanced-tutorials/real-time",id:"advanced-tutorials/real-time",title:"Live / Realtime",description:"refine lets you add Realtime support to your app via the liveProvider prop for ``. It can be used to update and show data in Realtime throughout your app. refine remains agnostic in its API to allow different solutions(Ably, Socket.IO, Mercure, supabase, etc.) to be integrated.",source:"@site/docs/advanced-tutorials/real-time.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/real-time",permalink:"/docs/advanced-tutorials/real-time",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/real-time.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1688560778,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{id:"real-time",title:"Live / Realtime",sidebar_label:"Live / Realtime"},sidebar:"someSidebar",previous:{title:"CSV Import",permalink:"/docs/advanced-tutorials/import-export/csv-import"},next:{title:"Multi Level Menu",permalink:"/docs/advanced-tutorials/multi-level-menu/"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding <code>liveProvider</code>",id:"adding-liveprovider",level:2},{value:"Configuring <code>liveMode</code>",id:"configuring-livemode",level:2},{value:"Custom Subscriptions",id:"custom-subscriptions",level:2},{value:"Example",id:"example",level:2}],u=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:c};function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," lets you add Realtime support to your app via the ",(0,r.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop for ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>")),". It can be used to update and show data in Realtime throughout your app. ",(0,r.kt)("strong",{parentName:"p"},"refine")," remains agnostic in its API to allow different solutions(",(0,r.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),", ",(0,r.kt)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mercure.rocks/"},"Mercure"),", ",(0,r.kt)("a",{parentName:"p",href:"https://supabase.com"},"supabase"),", etc.) to be integrated."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Refer to the Live Provider documentation for detailed information. ","\u2192")),(0,r.kt)("p",null,"We will be using ",(0,r.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably")," in this guide to provide Realtime features."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"We need to install the Ably live provider package from ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @refinedev/ably\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Since we will need ",(0,r.kt)("inlineCode",{parentName:"p"},"apiKey")," from Ably, you must first register and get the key from ",(0,r.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),"."),(0,r.kt)("p",null,"The app will have one resource: ",(0,r.kt)("strong",{parentName:"p"},"posts")," with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/base-antd/src/pages/posts"},"CRUD pages(list, create, edit, and show) similar to base example"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#example"},"You can also refer to CodeSandbox to see the final state of the app ","\u2192")),(0,r.kt)("h2",{id:"adding-liveprovider"},"Adding ",(0,r.kt)("inlineCode",{parentName:"h2"},"liveProvider")),(0,r.kt)("p",null,"Firstly we create a Ably client for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/ably"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/ably"))," live provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/utility/ablyClient.ts"',title:'"src/utility/ablyClient.ts"'},'import { Ably } from "@refinedev/ably";\n\nexport const ablyClient = new Ably.Realtime("your-api-key");\n')),(0,r.kt)("p",null,"Then pass ",(0,r.kt)("inlineCode",{parentName:"p"},"liveProvider")," from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/ably"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/ably"))," to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport {\n    ThemedLayoutV2,\n    notificationProvider,\n    ErrorComponent,\n} from "@refinedev/antd";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { ConfigProvider } from "antd";\nimport "@refinedev/antd/dist/reset.css";\n\n//highlight-next-line\nimport { liveProvider } from "@refinedev/ably";\n\n//highlight-next-line\nimport { ablyClient } from "utility/ablyClient";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    //highlight-start\n                    liveProvider={liveProvider(ablyClient)}\n                    options={{ liveMode: "auto" }}\n                    //highlight-end\n                    resources={[\n                        {\n                            name: "posts",\n                            list: "/posts",\n                            show: "/posts/show/:id",\n                            create: "/posts/create",\n                            edit: "/posts/edit/:id",\n                            meta: {\n                                canDelete: true,\n                            },\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route index element={<NavigateToResource />} />\n                            <Route path="/posts" element={<PostList />} />\n                            <Route\n                                path="/posts/create"\n                                element={<PostCreate />}\n                            />\n                            <Route\n                                path="/posts/show/:id"\n                                element={<PostShow />}\n                            />\n                            <Route\n                                path="/posts/edit/:id"\n                                element={<PostEdit />}\n                            />\n                        </Route>\n                        <Route path="*" element={<ErrorComponent />} />\n                    </Routes>\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For live features to work automatically we added ",(0,r.kt)("inlineCode",{parentName:"p"},'liveMode: "auto"')," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," prop."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider#livemode"},"Refer to the Live Provider documentation for detailed information. ","\u2192"))),(0,r.kt)("br",null),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/Realtime/real-time.gif",alt:"Realtime Demo"}),(0,r.kt)("h2",{id:"configuring-livemode"},"Configuring ",(0,r.kt)("inlineCode",{parentName:"h2"},"liveMode")),(0,r.kt)("p",null,"We may not want to make Realtime changes instantly in some cases. In these cases, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"manual")," mode to prevent the data from changing instantly. Then we can handle the event manually."),(0,r.kt)("p",null,"For example in an edit page for a record, It would be better to handle Realtime data manually to prevent synchronization problems caused by multiple editing sources. We would not want the data changing while we are trying to edit a record."),(0,r.kt)("p",null,"We will be alerted about changes in an alert box on top of the form instead of changing the data instantly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'// ...\n\nexport const PostEdit: React.FC = () => {\n    //highlight-start\n    const [deprecated, setDeprecated] = useState<\n        "deleted" | "updated" | undefined\n    >();\n    //highlight-end\n\n    const { formProps, saveButtonProps, queryResult } = useForm<IPost>({\n        //highlight-start\n        liveMode: "manual",\n        onLiveEvent: (event) => {\n            if (event.type === "deleted" || event.type === "updated") {\n                setDeprecated(event.type);\n            }\n        },\n        //highlight-end\n    });\n\n    //highlight-start\n    const handleRefresh = () => {\n        queryResult?.refetch();\n        setDeprecated(undefined);\n    };\n    //highlight-end\n\n    // ...\n\n    return (\n        <Edit /* ... */>\n            //highlight-start\n            {deprecated === "deleted" && (\n                <Alert\n                    message="This post is deleted."\n                    type="warning"\n                    style={{ marginBottom: 20 }}\n                    action={<ListButton size="small" />}\n                />\n            )}\n            {deprecated === "updated" && (\n                <Alert\n                    message="This post is updated. Refresh to see changes."\n                    type="warning"\n                    style={{ marginBottom: 20 }}\n                    action={\n                        <RefreshButton size="small" onClick={handleRefresh} />\n                    }\n                />\n            )}\n            //highlight-end\n            <Form {...formProps} layout="vertical">\n                // ....\n            </Form>\n        </Edit>\n    );\n};\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We can also implement a similar thing on the show page."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"#example"},"Refer to the CodeSandbox example for detailed information. ","\u2192"))),(0,r.kt)("br",null),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/manual-mode.gif",alt:"Manual Mode Demo"}),(0,r.kt)("h2",{id:"custom-subscriptions"},"Custom Subscriptions"),(0,r.kt)("p",null,"You can subscribe to events emitted within ",(0,r.kt)("strong",{parentName:"p"},"refine")," in any place in your app with ",(0,r.kt)("inlineCode",{parentName:"p"},"useSubscription"),"."),(0,r.kt)("p",null,"For example, we can subscribe to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"create"))," event for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"posts"))," resource and we can show a badge for the number of events in the sider menu."),(0,r.kt)("p",null,"Firstly, let's implement a custom sider like in ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/customization/customSider"},"this example"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Custom Sider Menu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/sider.tsx"',title:'"src/components/sider.tsx"'},'import React, { useState } from "react";\nimport { TreeMenuItem, CanAccess, useMenu } from "@refinedev/core";\nimport { Layout, Menu, Grid } from "antd";\nimport { UnorderedListOutlined } from "@ant-design/icons";\n\nimport { Link } from "react-router-dom";\n\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nexport const CustomSider: React.FC = ({ Title }) => {\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n    const { menuItems, selectedKey } = useMenu();\n    const breakpoint = Grid.useBreakpoint();\n\n    const isMobile =\n        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n    const renderTreeView = (tree: TreeMenuItem[], selectedKey?: string) => {\n        return tree.map((item: TreeMenuItem) => {\n            const { icon, label, route, key, name, children, meta } = item;\n\n            if (children.length > 0) {\n                return (\n                    <SubMenu\n                        key={key}\n                        icon={icon ?? <UnorderedListOutlined />}\n                        title={label}\n                    >\n                        {renderTreeView(children, selectedKey)}\n                    </SubMenu>\n                );\n            }\n            const isSelected = key === selectedKey;\n            const isRoute = !(\n                meta?.parent !== undefined && children.length === 0\n            );\n\n            return (\n                <CanAccess\n                    key={key}\n                    resource={name.toLowerCase()}\n                    action="list"\n                >\n                    <Menu.Item\n                        key={key}\n                        style={{\n                            fontWeight: isSelected ? "bold" : "normal",\n                        }}\n                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}\n                    >\n                        <Link to={route}>{label}</Link>\n                        {!collapsed && isSelected && <UnorderedListOutlined />}\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n\n    return (\n        <Layout.Sider\n            collapsible\n            collapsedWidth={isMobile ? 0 : 80}\n            collapsed={collapsed}\n            breakpoint="lg"\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <Title collapsed={collapsed} />\n            <Menu\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                onClick={({ key }) => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n                }}\n            >\n                {renderTreeView(menuItems, selectedKey)}\n            </Menu>\n        </Layout.Sider>\n    );\n};\n'))),(0,r.kt)("p",null,"Now, let's add a badge for the number of create and update events for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"posts"))," menu items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport {\n    TreeMenuItem,\n    CanAccess,\n    useMenu,\n    //highlight-start\n    useSubscription,\n    //highlight-end\n} from "@refinedev/core";\nimport {\n    Layout,\n    Menu,\n    Grid,\n    //highlight-start\n    Badge,\n    //highlight-end\n} from "antd";\nimport { UnorderedListOutlined } from "@ant-design/icons";\n\nimport { Link } from "react-router-dom";\n\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nexport const CustomSider: React.FC = ({ Title }) => {\n    const [subscriptionCount, setSubscriptionCount] = useState(0);\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n    const { menuItems, selectedKey } = useMenu();\n    const breakpoint = Grid.useBreakpoint();\n\n    const isMobile =\n        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n    //highlight-start\n    useSubscription({\n        channel: "resources/posts",\n        type: ["created", "updated"],\n        onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),\n    });\n    //highlight-end\n\n    const renderTreeView = (tree: TreeMenuItem[], selectedKey?: string) => {\n        return tree.map((item: TreeMenuItem) => {\n            const { icon, label, route, key, name, children, meta } = item;\n\n            if (children.length > 0) {\n                return (\n                    <SubMenu\n                        key={key}\n                        icon={icon ?? <UnorderedListOutlined />}\n                        title={label}\n                    >\n                        {renderTreeView(children, selectedKey)}\n                    </SubMenu>\n                );\n            }\n            const isSelected = key === selectedKey;\n            const isRoute = !(\n                meta?.parent !== undefined && children.length === 0\n            );\n            return (\n                <CanAccess\n                    key={key}\n                    resource={name.toLowerCase()}\n                    action="list"\n                >\n                    <Menu.Item\n                        key={key}\n                        style={{\n                            fontWeight: isSelected ? "bold" : "normal",\n                        }}\n                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}\n                    >\n                        //highlight-start\n                        <div>\n                            <Link to={route}>{label}</Link>\n                            {label === "Posts" && (\n                                <Badge\n                                    size="small"\n                                    count={subscriptionCount}\n                                    offset={[2, -15]}\n                                />\n                            )}\n                        </div>\n                        //highlight-end\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n\n    return (\n        <Layout.Sider\n            collapsible\n            collapsedWidth={isMobile ? 0 : 80}\n            collapsed={collapsed}\n            breakpoint="lg"\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <Title collapsed={collapsed} />\n            <Menu\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                onClick={() => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n\n                    //highlight-start\n                    if (key === "/posts") {\n                        setSubscriptionCount(0);\n                    }\n                    //highlight-end\n                }}\n            >\n                {renderTreeView(menuItems, selectedKey)}\n            </Menu>\n        </Layout.Sider>\n    );\n};\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can subscribe to specific ",(0,r.kt)("inlineCode",{parentName:"p"},"ids")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),". For example, you can subscribe to ",(0,r.kt)("strong",{parentName:"p"},"deleted")," and ",(0,r.kt)("strong",{parentName:"p"},"updated")," events from ",(0,r.kt)("strong",{parentName:"p"},"posts")," resource with ",(0,r.kt)("strong",{parentName:"p"},"id")," ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useSubscription({\n    channel: "resources/posts",\n    type: ["deleted", "updated"],\n    //highlight-start\n    params: {\n        ids: ["1", "2"],\n    },\n    //highlight-end\n    onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),\n});\n'))),(0,r.kt)("br",null),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/custom-sider.gif",alt:"Custom Sider Demo"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(u,{path:"live-provider-ably",mdxType:"CodeSandboxExample"}))}h.isMDXComponent=!0}}]);