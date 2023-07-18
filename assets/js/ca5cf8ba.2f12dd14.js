"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99089],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},97480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>d});t(67294);var r=t(3905);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={id:"useMenu",title:"useMenu",source:"packages/core/src/hooks/menu/useMenu.tsx"},l=void 0,u={unversionedId:"api-reference/core/hooks/ui/useMenu",id:"version-3.xx.xx/api-reference/core/hooks/ui/useMenu",title:"useMenu",description:"useMenu is used to get menu items derived from the resources. These items include a link to the dashboard page (if it exists) and links to the user-defined resources (passed as children to ``).",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/ui/useMenu.md",sourceDirName:"api-reference/core/hooks/ui",slug:"/api-reference/core/hooks/ui/useMenu",permalink:"/docs/3.xx.xx/api-reference/core/hooks/ui/useMenu",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/ui/useMenu.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1689684410,formattedLastUpdatedAt:"Jul 18, 2023",frontMatter:{id:"useMenu",title:"useMenu",source:"packages/core/src/hooks/menu/useMenu.tsx"},sidebar:"someSidebar",previous:{title:"useModal",permalink:"/docs/3.xx.xx/api-reference/core/hooks/ui/useModal"},next:{title:"<AuthPage>",permalink:"/docs/3.xx.xx/api-reference/core/components/auth-page"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Creating a Menu",id:"creating-a-menu",level:3},{value:"Multi Level Menus",id:"multi-level-menus",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>selectedKey</code>",id:"selectedkey",level:3},{value:"<code>menuItems</code>",id:"menuitems",level:3},{value:"<code>defaultOpenKeys</code>",id:"defaultopenkeys",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Return values",id:"return-values-1",level:3},{value:"Interfaces",id:"interfaces",level:4},{value:"Example",id:"example",level:2}],c=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:d};function k(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," is used to get menu items derived from the resources. These items include a link to the dashboard page (if it exists) and links to the user-defined resources (passed as children to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),")."),(0,r.kt)("p",null,"This hook can also be used to build custom menus, including multi-level support. ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider/>")," components inside ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-mui")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/chakra-ui/"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-chakra-ui"))," and, ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-mantine"))," packages are using this hook as a base for their menus."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { selectedKey, menuItems, defaultOpenKeys } = useMenu();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"menuItems")," is a list of style agnostic menu items. Each of them has a key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selectedKey")," is the key of the resource user is viewing at the moment. Its inferred from the route."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultOpenKeys")," is the array with the keys of default opened menus.")),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hooks exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," packages are now ",(0,r.kt)("strong",{parentName:"p"},"deprecated")," and will be removed. Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are using ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-mui")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/chakra-ui/"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-chakra-ui"))," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-mantine"))," as a UI framework integration, you can find out more info about how their ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider/>")," components are created and how to create a custom one by following their guides."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/customization/antd-custom-sider/"},"Ant Design > Customization > Custom Sider ","\u2192")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/customization/mui-custom-sider/"},"Material UI > Customization > Custom Sider ","\u2192")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/customization/sider/"},"Mantine > Customization > Custom Sider ","\u2192"))),(0,r.kt)("h3",{id:"creating-a-menu"},"Creating a Menu"),(0,r.kt)("p",null,"We will show you how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," to create a simple menu for your ",(0,r.kt)("strong",{parentName:"p"},"refine")," application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000",live:!0,hideCode:!0,url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\n// visible-block-start\nimport React from "react";\nimport {\n    useMenu,\n    LayoutProps,\n    useRouterContext,\n    useRefineContext,\n    ITreeMenu,\n} from "@pankod/refine-core";\n\nconst Layout: React.FC<LayoutProps> = ({ children }) => {\n    // highlight-start\n    const { menuItems, selectedKey } = useMenu();\n    // highlight-end\n    const { hasDashboard } = useRefineContext();\n    const { Link } = useRouterContext();\n\n    // You can also use navigation helpers from `useNavigation` hook instead of `Link` from your Router Provider.\n    // const { push } = useNavigation();\n\n    // highlight-start\n    const renderMenuItems = (items: ITreeMenu[]) => {\n        return (\n            <>\n                {menuItems.map(({ name, label, icon, route }) => {\n                    const isSelected = route === selectedKey;\n                    return (\n                        <li key={name}>\n                            <Link\n                                to={route}\n                                style={{\n                                    fontWeight: isSelected ? "bold" : "normal",\n                                }}\n                            >\n                                {icon}\n                                <span>{label ?? name}</span>\n                            </Link>\n                        </li>\n                    );\n                })}\n            </>\n        );\n    };\n    // highlight-end\n\n    return (\n        <div>\n            <div>\n                <Link to="/">\n                    <img\n                        src="https://refine.dev/img/refine_logo.png"\n                        alt="Logo"\n                    />\n                </Link>\n                {/* highlight-start */}\n                <ul>\n                    {hasDashboard && (\n                        <li>\n                            <Link\n                                to="/"\n                                style={{\n                                    fontWeight:\n                                        selectedKey === "/" ? "bold" : "normal",\n                                }}\n                            >\n                                <span>Dashboard</span>\n                            </Link>\n                        </li>\n                    )}\n                    {renderMenuItems(menuItems)}\n                </ul>\n                {/* highlight-end */}\n            </div>\n            <div>{children}</div>\n        </div>\n    );\n};\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { Layout } from "components";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    list: () => <div>dummy posts page</div>,\n                },\n                {\n                    name: "categories",\n                    list: () => <div>dummy categories page</div>,\n                },\n            ]}\n            Layout={Layout}\n        />\n    );\n};\n// visible-block-end\n\nrender(App);\n')),(0,r.kt)("p",null,"We created ",(0,r.kt)("inlineCode",{parentName:"p"},"<Layout>")," with a header with a logo and a list of links to all menu items (resources). The links are clickable and will navigate to the corresponding resource. To do this, we used the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook to get the menu items from the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouterContext")," hook to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Link/>")," component from the router provider. Also ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation/"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," hook can be used to navigate between routes."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"children")," is the content of the layout. In our case, it is the content of the ",(0,r.kt)("strong",{parentName:"p"},"Page")," components."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-layout/"},"Refer to Custom Layout guide for more detailed information on layout customization. ","\u2192"),"  ")),(0,r.kt)("p",null,"After creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Layout/>")," component, we can use it in our application. We need to pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component as a prop."),(0,r.kt)("h3",{id:"multi-level-menus"},"Multi Level Menus"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook comes out of the box with multi level menu support, you can render menu items recursively to get a multi level menu."),(0,r.kt)("p",null,"Update your ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"parentName")," to nest them inside a label."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { Layout } from "components/layout";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            // highlight-start\n            resources={[\n                {\n                    name: "CMS",\n                },\n                {\n                    name: "posts",\n                    parentName: "CMS",\n                    list: () => <div>dummy posts page</div>,\n                },\n                {\n                    name: "categories",\n                    parentName: "CMS",\n                    list: () => <div>dummy categories page</div>,\n                },\n            ]}\n            // highlight-end\n            Layout={Layout}\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"Now you can update your ",(0,r.kt)("inlineCode",{parentName:"p"},"<Layout/>")," to support multi level rendering with following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Layout.tsx"',title:'"src/components/Layout.tsx"'},'import React from "react";\nimport {\n    useMenu,\n    LayoutProps,\n    useRouterContext,\n    useRefineContext,\n    ITreeMenu,\n} from "@pankod/refine-core";\n\nexport const Layout: React.FC<LayoutProps> = ({ children }) => {\n    const { menuItems, selectedKey } = useMenu();\n    const { Link } = useRouterContext();\n\n    // highlight-start\n    const renderMenuItems = (items: ITreeMenu[]) => {\n        return (\n            <>\n                {items.map(({ name, label, icon, route, children, list }) => {\n                    if (!list) {\n                        return (\n                            <li key={label}>\n                                <span>{label ?? name}</span>\n                                {children ? renderMenuItems(children) : null}\n                            </li>\n                        );\n                    }\n\n                    const isSelected = route === selectedKey;\n\n                    return (\n                        <li key={label}>\n                            <Link\n                                to={route}\n                                style={{\n                                    fontWeight: isSelected ? "bold" : "normal",\n                                }}\n                            >\n                                {icon}\n                                <span>{label ?? name}</span>\n                            </Link>\n                        </li>\n                    );\n                })}\n            </>\n        );\n    };\n    // highlight-end\n\n    return (\n        <div>\n            <div>\n                <Link to="/">\n                    <img\n                        src="https://refine.dev/img/refine_logo.png"\n                        alt="Logo"\n                    />\n                </Link>\n                <ul>\n                    {hasDashboard && (\n                        <li>\n                            <Link\n                                to="/"\n                                style={{\n                                    fontWeight:\n                                        selectedKey === "/" ? "bold" : "normal",\n                                }}\n                            >\n                                <span>Dashboard</span>\n                            </Link>\n                        </li>\n                    )}\n                    {renderMenuItems(menuItems)}\n                </ul>\n            </div>\n            <div>{children}</div>\n        </div>\n    );\n};\n')),(0,r.kt)("h2",{id:"return-values"},"Return Values"),(0,r.kt)("h3",{id:"selectedkey"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectedKey")),(0,r.kt)("p",null,"Key of the resource the user is viewing at the moment."),(0,r.kt)("h3",{id:"menuitems"},(0,r.kt)("inlineCode",{parentName:"h3"},"menuItems")),(0,r.kt)("p",null,"List of keys and routes and some metadata of resources and also the dashboard if exists."),(0,r.kt)("h3",{id:"defaultopenkeys"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultOpenKeys")),(0,r.kt)("p",null,"Array with the keys of default opened menus."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"return-values-1"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectedKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Key of the resource the user is viewing at the moment."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"menuItems"),(0,r.kt)("td",{parentName:"tr",align:null},"List of keys and routes and some metadata of resources and also the dashboard if exists."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#interfaces"},(0,r.kt)("inlineCode",{parentName:"a"},"ITreeMenu[]")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultOpenKeys"),(0,r.kt)("td",{parentName:"tr",align:null},"Array with the keys of default opened menus."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]"))))),(0,r.kt)("h4",{id:"interfaces"},"Interfaces"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface IResourceItem extends IResourceComponents {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n    parentName?: string;\n    options?: OptionsProps;\n}\n\ninterface IResourceComponents {\n    list?: React.FunctionComponent<IResourceComponentsProps>;\n    create?: React.FunctionComponent<IResourceComponentsProps>;\n    edit?: React.FunctionComponent<IResourceComponentsProps>;\n    show?: React.FunctionComponent<IResourceComponentsProps>;\n}\n\ninterface IResourceComponentsProps<TCrudData = any> {\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canDelete?: boolean;\n    canShow?: boolean;\n    name?: string;\n    initialData?: TCrudData;\n}\n\ntype OptionsProps<TExtends = { [key: string]: any }> = TExtends & {\n    label?: string;\n    route?: string;\n    auditLog?: {\n        permissions?: AuditLogPermissions[number][] | string[];\n    };\n    hide?: boolean;\n    [key: string]: any;\n};\n\n// highlight-start\ntype IMenuItem = IResourceItem & {\n    key: string;\n};\n\ntype ITreeMenu = IMenuItem & {\n    children: ITreeMenu[];\n};\n// highlight-end\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(c,{path:"core-use-menu",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);