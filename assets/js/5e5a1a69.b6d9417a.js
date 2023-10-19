"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99968],{66871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>c});n(67294);var a=n(3905),r=n(53787),o=n(50551);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={title:"Refine vs AdminBro - Comparison Admin Panel Framework",description:"Refine vs AdminBro",slug:"refine-vs-adminbro",authors:"melih",tags:["refine","react","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},u=void 0,d={permalink:"/blog/refine-vs-adminbro",source:"@site/blog/2021-11-29-refine-vs-admin-bro.md",title:"Refine vs AdminBro - Comparison Admin Panel Framework",description:"Refine vs AdminBro",date:"2021-11-29T00:00:00.000Z",formattedDate:"November 29, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"comparison",permalink:"/blog/tags/comparison"}],readingTime:13.49,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Refine vs AdminBro - Comparison Admin Panel Framework",description:"Refine vs AdminBro",slug:"refine-vs-adminbro",authors:"melih",tags:["refine","react","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Web3 with Refine",permalink:"/blog/web3-with-refine"},nextItem:{title:"refine vs React-Admin Which is Better for Your Project?",permalink:"/blog/refine-vs-react-admin"},relatedPosts:[{title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",permalink:"/blog/zustand-react-state",formattedDate:"May 18, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.605,date:"2023-05-18T00:00:00.000Z"},{title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",permalink:"/blog/react-search-bar-and-filtering",formattedDate:"August 26, 2022",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:13.88,date:"2022-08-26T00:00:00.000Z"},{title:"Creating Polished Content with React Markdown",description:"We will explore the process of integrating the markdown editor into a refine application",permalink:"/blog/react-markdown",formattedDate:"August 24, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:12.68,date:"2023-08-24T00:00:00.000Z"}],authorPosts:[{title:"How to Multipart File Upload Using FormData with HTML",description:"In this guide, I'm going to show you how to multipart files upload with using HTML and JavaScript",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.535,date:"2021-12-27T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.605,date:"2022-02-21T00:00:00.000Z"},{title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",permalink:"/blog/web3-with-refine",formattedDate:"December 13, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:1.53,date:"2021-12-13T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"Refine",id:"refine",level:2},{value:"Installation",id:"installation",level:3},{value:"Features",id:"features",level:3},{value:"SSR - Next.js Support",id:"ssr---nextjs-support",level:3},{value:"SSR-Next.js Setup",id:"ssr-nextjs-setup",level:4},{value:"SSR-Next.js Basic Usage",id:"ssr-nextjs-basic-usage",level:4},{value:"Routing",id:"routing",level:3},{value:"Data Provider Logic",id:"data-provider-logic",level:3},{value:"GraphQL Data Provider",id:"graphql-data-provider",level:4},{value:"Basic GraphQL Usage",id:"basic-graphql-usage",level:4},{value:"Refine Avaible Providers",id:"refine-avaible-providers",level:3},{value:"Customization",id:"customization",level:3},{value:"UI/UX Customization:",id:"uiux-customization",level:4},{value:"Logic Customization:",id:"logic-customization",level:4},{value:"Pricing",id:"pricing",level:3},{value:"AdminBro",id:"adminbro",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Features",id:"features-1",level:3},{value:"SSR - Next.js Support\u200b",id:"ssr---nextjs-support-1",level:3},{value:"Routing",id:"routing-1",level:3},{value:"Data Provider Logic",id:"data-provider-logic-1",level:3},{value:"Install the Database Adapter and add resources",id:"install-the-database-adapter-and-add-resources",level:4},{value:"GraphQL Data Provider",id:"graphql-data-provider-1",level:4},{value:"Customization",id:"customization-1",level:3},{value:"UI/UX Customization:\u200b",id:"uiux-customization-1",level:4},{value:"Pricing",id:"pricing-1",level:3},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c};function f(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,a.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,a.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,a.kt)("p",{parentName:"admonition"},"You should know that ",(0,a.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),".")),(0,a.kt)("p",null,"Looking for open source ",(0,a.kt)("strong",{parentName:"p"},"admin panel framework"),"? Here we are going to review two of the best ",(0,a.kt)("strong",{parentName:"p"},"Open Source admin panel frameworks of 2021"),"."),(0,a.kt)("p",null,"These frameworks that we will talk about have emerged to offer solutions to the same business demands in general. Although the purpose of these two frameworks is the same, the solutions are different from each other. Our goal in this article is to show you these differences and help you find the appropriate framework for your project."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This comparison table strives to be as accurate and as unbiased as possible. If you use any of these libraries and feel the information could be improved, feel free to suggest changes (with notes or evidence of claims) contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:info@refine.dev"},"info@refine.dev")," or you can open a issue on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"Github"),".")),(0,a.kt)("h2",{id:"refine"},"Refine"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is a React-based framework that helps you to develop admin panel, B2B and dashboard that can be fully customized with Ant Design."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," directly provides Ant Design components and some hooks to work with those components. These hooks give you the required props for those Ant Design components."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is a collection of helper hooks, components and providers. They are all decoupled from your UI components and business logic, so they never keep you from customizing your UI or coding your own flow."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"React Query")," for data processing, caching, and state management. In this respect, you do not need to define anything extra for every cases and model."),(0,a.kt)("p",null,"Although ",(0,a.kt)("strong",{parentName:"p"},"refine")," is a newer framework, it is successful in identifying deficiencies in development and producing solutions accordingly. Using new technologies, it offers users more effective and simpler development options."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installation is very simple and customizable options can be added.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest demo-refine-project -- -b v3\n")),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-11-29-refine-vs-adminbro/project_setup.gif",alt:"setup"}),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configuration: One-line setup with superplate. Project setup is very simple. Using superplate you can choose the content of your project and the features you want to add.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"UI: You have full control over the UI elements. Fully customizable, open to use. Works seamlessly with Ant Design.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Out-of-the-box: Routing, networking, authentication, state managment, i18n and UI.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SSR: ",(0,a.kt)("strong",{parentName:"p"},"refine")," can be used with Next.js and Remix to SSR your pages.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"React Location: React Location router provider support"))),(0,a.kt)("h3",{id:"ssr---nextjs-support"},"SSR - Next.js Support"),(0,a.kt)("p",null,"refine has support for SSR - Next.js. This is an important feature that separates ",(0,a.kt)("strong",{parentName:"p"},"refine")," from other frameworks. Thanks to this feature, ",(0,a.kt)("strong",{parentName:"p"},"refine")," provides the opportunity to develop B2C applications in addition to B2B and admin panel."),(0,a.kt)("p",null,"refine can be used with Next.js to SSR your pages. It doesn't get in the way and follows Next.js conventions and also provides helper modules when necessary."),(0,a.kt)("h4",{id:"ssr-nextjs-setup"},"SSR-Next.js Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine @refinedev/nextjs-router\n")),(0,a.kt)("h4",{id:"ssr-nextjs-basic-usage"},"SSR-Next.js Basic Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," must wrap your pages in a custom App component. This way your pages are integrated to refine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/_app.tsx",title:"pages/_app.tsx"},'import { AppProps } from "next/app";\n\nimport { Refine } from "@pankod/refine";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider from "@refinedev/nextjs-router";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nfunction MyApp({ Component, pageProps }: AppProps): JSX.Element {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n        >\n            <Component {...pageProps} />\n        </Refine>\n    );\n}\n\nexport default MyApp;\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/ssr/nextjs/"},"For more information on how to add SSR-Next.js to your Refine project ->")),(0,a.kt)("h3",{id:"routing"},"Routing"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," uses a customized Router Provider to save routes and navigate between pages. ",(0,a.kt)("strong",{parentName:"p"},"refine")," offers a much more flexible structure thanks to its routerProvider support."),(0,a.kt)("p",null,"A router provider must include the following methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const routerProvider = {\n    useHistory: () => {\n        push: (...args) => any,\n        replace: (...args) => any,\n        goBack: (...args) => any,\n    },\n    useLocation: () => {\n        pathname: string,\n        search: string,\n    },\n    useParams: <Params extends { [K in keyof Params]?: string } = {}>() => Params,\n    Prompt: React.FC<PromptProps*>,\n    Link: React.FC<any>,\n    RouterComponent?: React.FC<any>,\n};\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"refine includes many router providers to use in your projects like:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"React Router"),(0,a.kt)("li",{parentName:"ul"},"React Location"),(0,a.kt)("li",{parentName:"ul"},"Next.js Router"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/routers/"},"To take a look at how other router providers are defined and working")),(0,a.kt)("p",null,"To activate router provider in ",(0,a.kt)("strong",{parentName:"p"},"refine"),", we have to pass the routerProvider to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,a.kt)(r.Z,{defaultValue:"react-router",values:[{label:"React Router",value:"react-router"},{label:"React Location",value:"react-location"},{label:"Next.js Router",value:"nextjs"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"react-router",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@refinedev/react-router-v6";\n\nconst App: React.FC = () => {\n    return <Refine routerProvider={routerProvider} />;\n};\n'))),(0,a.kt)(o.Z,{value:"react-location",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-location";\n\nconst App: React.FC = () => {\n    return <Refine routerProvider={routerProvider} />;\n};\n'))),(0,a.kt)(o.Z,{value:"nextjs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@refinedev/nextjs-router";\n\nconst App: React.FC = () => {\n    return <Refine routerProvider={routerProvider} />;\n};\n')))),(0,a.kt)("p",null,"You just need to tell the route of your component to the routerProvider."),(0,a.kt)("h3",{id:"data-provider-logic"},"Data Provider Logic"),(0,a.kt)("p",null,"A data provider is the place where a ",(0,a.kt)("strong",{parentName:"p"},"refine")," app communicates with an API."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-11-29-refine-vs-adminbro/refine_flow.png",alt:"refine"}),(0,a.kt)("p",null,"A data provider must include following methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const dataProvider = {\n    create: ({ resource, variables, meta }) => Promise,\n    createMany: ({ resource, variables, meta }) => Promise,\n    deleteOne: ({ resource, id, meta }) => Promise,\n    deleteMany: ({ resource, ids, meta }) => Promise,\n    getList: ({ resource, pagination, sorters, filters, meta }) => Promise,\n    getMany: ({ resource, ids, meta }) => Promise,\n    getOne: ({ resource, id, meta }) => Promise,\n    update: ({ resource, id, variables, meta }) => Promise,\n    updateMany: ({ resource, ids, variables, meta }) => Promise,\n    custom: ({\n        url,\n        method,\n        sorters,\n        filters,\n        payload,\n        query,\n        headers,\n        meta,\n    }) => Promise,\n    getApiUrl: () => "",\n};\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Data hooks uses React Query to manage data fetching. React Query handles important concerns like caching, invalidation, loading states etc..")),(0,a.kt)("h4",{id:"graphql-data-provider"},"GraphQL Data Provider"),(0,a.kt)("p",null,"It is well covered by GraphQL data provider ",(0,a.kt)("strong",{parentName:"p"},"refine")," and explained step by step in the documentation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," GraphQL data provider is built with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"qql-query-builder")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-request"},"graphql-request"),". The purpose here is to send dynamic queries that we can do with qql-query-builder as requests with graphql-request."),(0,a.kt)("p",null,"Query builder helps us build queries and mutations. We can use these queries with the getList, getMany and getOne methods in our data provider. On the other hand, the create, createMany, update, updateMany, deleteOne and deleteMany methods generate a mutation to send a request."),(0,a.kt)("p",null,"In order to create a query, we need to specify the fields that we will use from our data provider. Thanks to the MetaDataQuery, we pass these fields to our data provider and start using them."),(0,a.kt)("h4",{id:"basic-graphql-usage"},"Basic GraphQL Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"src/App.tsx","src/App.tsx":!0},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider, { GraphQLClient } from "@refinedev/strapi-graphql";\n\nconst client = new GraphQLClient("API_URL");\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(client)}\n        />\n    );\n};\n')),(0,a.kt)("p",null,"When sending the request, we must specify which fields will come, so we send fields in ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," to hooks that we will fetch data from."),(0,a.kt)(r.Z,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"usage",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'export const PostList: React.FC<IResourceComponentsProps> = () => {\n    const { tableProps, sorter } = useTable<IPost>({\n        sorters: {\n            initial: [\n                {\n                    field: "id",\n                    order: "asc",\n                },\n            ],\n        },\n        // highlight-start\n        meta: {\n            fields: [\n                "id",\n                "title",\n                {\n                    category: ["title"],\n                },\n            ],\n        },\n        // highlight-end\n    });\n\n    const { selectProps } = useSelect<ICategory>({\n        resource: "categories",\n        // highlight-start\n        meta: {\n            fields: ["id", "title"],\n        },\n        // highlight-end\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column\n                    dataIndex="id"\n                    title="ID"\n                    sorter={{ multiple: 2 }}\n                    defaultSortOrder={getDefaultSortOrder("id", sorter)}\n                />\n                <Table.Column\n                    key="title"\n                    dataIndex="title"\n                    title="Title"\n                    sorter={{ multiple: 1 }}\n                />\n                <Table.Column<IPost>\n                    dataIndex="category"\n                    title="Category"\n                    filterDropdown={(props) => (\n                        <FilterDropdown {...props}>\n                            <Select\n                                style={{ minWidth: 200 }}\n                                mode="multiple"\n                                placeholder="Select Category"\n                                {...selectProps}\n                            />\n                        </FilterDropdown>\n                    )}\n                    render={(_, record) => record.category.title}\n                />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        <Space>\n                            <EditButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <ShowButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <DeleteButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                        </Space>\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n'))),(0,a.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"query ($sort: String, $where: JSON, $start: Int, $limit: Int) {\n    posts (sort: $sort, where: $where, start: $start, limit: $limit) {\n        id,\n        title,\n        category {\n            title\n        }\n    }\n}\n")))),(0,a.kt)("p",null,"Here we only make requests for queries that are necessary. As you can see, all you have to do is specify the field you want to select with ",(0,a.kt)("inlineCode",{parentName:"p"},"meta"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/data-providers/graphql/"},"Refer to the GraphQL for detailed usage. \u2192 ")),(0,a.kt)("h3",{id:"refine-avaible-providers"},"Refine Avaible Providers"),(0,a.kt)("p",null,"Connects to any REST or GraphQL custom backend."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NestJs CRUD: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-nestjsx-crud"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-nestjsx-crud")),(0,a.kt)("li",{parentName:"ul"},"Airtable: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-airtable"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-airtable")),(0,a.kt)("li",{parentName:"ul"},"Strapi: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi")),(0,a.kt)("li",{parentName:"ul"},"Strapi v4: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi-v4"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi-v4")),(0,a.kt)("li",{parentName:"ul"},"Strapi GraphQL: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi-graphql"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi-graphql")),(0,a.kt)("li",{parentName:"ul"},"Supabase: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-supabase"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-supabase")),(0,a.kt)("li",{parentName:"ul"},"Hasura: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-hasura"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-hasura")),(0,a.kt)("li",{parentName:"ul"},"Nhost: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-nhost"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-nhost")),(0,a.kt)("li",{parentName:"ul"},"Appwrite: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-appwrite"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-appwrite")),(0,a.kt)("li",{parentName:"ul"},"Medusa: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/next/packages/medusa"},"https://github.com/refinedev/refine/tree/next/packages/medusa"))),(0,a.kt)("h3",{id:"customization"},"Customization"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"refine's"),' motivation and main purpose are as follows: "Higher-level frontend frameworks can save you a lot time, but they typically offer you a trade-off between speed and flexibility."'),(0,a.kt)("li",{parentName:"ul"},"While the admin panel allows you to make dashboard, B2B and B2C applications quickly, we offer you flexibility in your UI or business model.")),(0,a.kt)("h4",{id:"uiux-customization"},"UI/UX Customization:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"refine"),", comes ready-made decoupled from the UI, and is used. ",(0,a.kt)("strong",{parentName:"li"},"refine")," mostly touches UI components via hooks. The main advantage of this for you is that you can successfully perform any Business request or different case.")),(0,a.kt)("h4",{id:"logic-customization"},"Logic Customization:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"refine"),", works flawless with react-query. You don't have to worry about state management in your business model or when you encounter a different situation.")),(0,a.kt)("h3",{id:"pricing"},"Pricing"),(0,a.kt)("p",null,"All features of ",(0,a.kt)("strong",{parentName:"p"},"refine")," are available as ",(0,a.kt)("strong",{parentName:"p"},"open source"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access Control Provider (RBAC, ABAC, ACL, IP, LDAP, etc...)"),(0,a.kt)("li",{parentName:"ul"},"Realtime"),(0,a.kt)("li",{parentName:"ul"},"Search"),(0,a.kt)("li",{parentName:"ul"},"Navigation and more features are available")),(0,a.kt)("p",null,"If you want to get information about the Enterprise, refine ready to help you for Support and Training.\n",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/enterprise/"},"For more info about Enterprise->")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," Docs & Demo: ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Documentation")," - ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/demo/"},"Live Demo")),(0,a.kt)("h2",{id:"adminbro"},"AdminBro"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://adminbro.com/index.html"},"AdminBro")," is an open-source package from that adds an auto-generated admin panel to your Node.js application. You provide database models or schemas and AdminBro generates the user interface for you."),(0,a.kt)("p",null,"You can connect your various databases to the admin interface and perform standard CRUD operations on the records. In this way, it makes it to make changes on your data and provides you with a great deal of convenience."),(0,a.kt)("p",null,"You can quickly develop and customize the Admin panel with AdminBro."),(0,a.kt)("p",null,"It provides you with solutions and provides convenience when making admin panel and b2b applications. It is an open source project that has been in development and ongoing development for a long time."),(0,a.kt)("h3",{id:"installation-1"},"Installation"),(0,a.kt)("p",null,"We can say that it is difficult to install, but it is clearly explained step by step in the documentation."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Since AdminBro uses your existing framework to render its routes - you have to use one of our plugins."),(0,a.kt)("p",{parentName:"admonition"},"There are plugins for:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Express"),(0,a.kt)("li",{parentName:"ul"},"Hapi"),(0,a.kt)("li",{parentName:"ul"},"Koa.js"),(0,a.kt)("li",{parentName:"ul"},"Nest.js"))),(0,a.kt)("p",null,"Install the AdminBro along with the express plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install admin-bro @admin-bro/express\n")),(0,a.kt)("p",null,"Then, we need to install some dependencies express and the express-formidable packages. express-formidable is a peer dependency for AdminBro"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install express express-formidable\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://adminbro.com/tutorial-installation-instructions.html"},"For detailed installation \u2192")),(0,a.kt)("h3",{id:"features-1"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can use any data from any source and make changes to the data(create, read, update, delete)"),(0,a.kt)("li",{parentName:"ul"},"Custom actions"),(0,a.kt)("li",{parentName:"ul"},"Custom resource decorators"),(0,a.kt)("li",{parentName:"ul"},"Form validation"),(0,a.kt)("li",{parentName:"ul"},"A full-featured control panel can be created."),(0,a.kt)("li",{parentName:"ul"},"Internationalization(i18n)")),(0,a.kt)("h3",{id:"ssr---nextjs-support-1"},"SSR - Next.js Support\u200b"),(0,a.kt)("p",null,"AdminBro does not support SSR-Next.js. It only helps you develop B2B and admin panel applications."),(0,a.kt)("h3",{id:"routing-1"},"Routing"),(0,a.kt)("p",null,"Adminbro's routing processes are slightly different than others. You can also define the routes of the components that you have created custom here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const AdminBro = require("admin-bro");\nconst AdminBroExpress = require("@admin-bro/express");\n\nconst express = require("express");\nconst app = express();\n\nconst adminBro = new AdminBro({\n    databases: [],\n    rootPath: "/admin",\n});\n\nconst router = AdminBroExpress.buildRouter(adminBro);\n')),(0,a.kt)("p",null,"The concept of routing is handled in a different way and in general all routing operations are defined through this file."),(0,a.kt)("h3",{id:"data-provider-logic-1"},"Data Provider Logic"),(0,a.kt)("p",null,"It does not have a data provider exactly like other frameworks. It has a different structure. It has created functions for you to control your data. But there are rules that we must follow and do."),(0,a.kt)("p",null,"AdminBro can be connected to many different types of resources. Right now, they support the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mongoose"),(0,a.kt)("li",{parentName:"ul"},"Sequelize"),(0,a.kt)("li",{parentName:"ul"},"TypeORM")),(0,a.kt)("p",null,"To add resources , you first have to intall an adapter for the resource you want to use."),(0,a.kt)("h4",{id:"install-the-database-adapter-and-add-resources"},"Install the Database Adapter and add resources"),(0,a.kt)("p",null,"Let's take a look at an example made with the mongoose adapter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install mongoose @admin-bro/mongoose\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.js"',title:'"index.js"'},'const AdminBro = require("admin-bro");\nconst AdminBroExpress = require("@admin-bro/express");\nconst AdminBroMongoose = require("@admin-bro/mongoose");\n\nconst express = require("express");\nconst app = express();\n\nconst mongoose = require("mongoose");\n\nAdminBro.registerAdapter(AdminBroMongoose);\n\nconst run = async () => {\n    const connection = await mongoose.connect(\n        "mongodb://localhost:27017/users",\n        { useNewUrlParser: true, useUnifiedTopology: true },\n    );\n\n    const User = mongoose.model("User", {\n        name: String,\n        email: String,\n        surname: String,\n    });\n\n    const adminBro = new AdminBro({\n        Databases: [connection],\n        rootPath: "/admin",\n        resources: [User],\n    });\n    const router = AdminBroExpress.buildRouter(adminBro);\n    app.use(adminBro.options.rootPath, router);\n\n    app.listen(3000, () => {\n        console.log("Application is up and running under localhost:3000/admin");\n    });\n};\nrun();\n')),(0,a.kt)("p",null,"Here we first installed and connected mongoose. We then created a model and passed it to the AdminBro resource. AdminBro has built an interface for us where we can list our users. You can also add your own ",(0,a.kt)("a",{parentName:"p",href:"https://adminbro.com/tutorial-writing-custom-adapters.html"},"custom adapters")," and set up ",(0,a.kt)("a",{parentName:"p",href:"https://adminbro.com/tutorial-customizing-resources.html"},"custom resources"),"."),(0,a.kt)("p",null,"The logic is well covered and also well explained in the documentation. But we can say that it is complex compared to other frameworks. It can be difficult to use on big data."),(0,a.kt)("h4",{id:"graphql-data-provider-1"},"GraphQL Data Provider"),(0,a.kt)("p",null,"There is no native GraphQL support. It can be supported with 3rd party packages."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/admin-bro-graphql"},"https://www.npmjs.com/package/admin-bro-graphql"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SoftwareBrothers/adminjs/issues/655"},"https://github.com/SoftwareBrothers/adminjs/issues/655")),(0,a.kt)("h3",{id:"customization-1"},"Customization"),(0,a.kt)("p",null,"AdminBro is good at customizing. You can connect your own adapters and customize your resources. These customizations are challenging and complex."),(0,a.kt)("p",null,"Some customizable features are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://adminbro.com/tutorial-customizing-resources.html"},"Customize Resources")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://adminbro.com/tutorial-actions.html"},"Customize Actions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://adminbro.com/tutorial-actions-validations.html"},"Custom Validations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://adminbro.com/tutorial-custom-dashboard.html"},"Customize dashboard"))),(0,a.kt)("h4",{id:"uiux-customization-1"},"UI/UX Customization:\u200b"),(0,a.kt)("p",null,"It automatically offers you an interface option that you can use. You can also develop and customize your own components. You can do your own styling and write your own custom components, but for this customization, you need to follow and apply a few steps. It doesn't speed you up in UI development."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://adminbro.com/tutorial-writing-react-components.html"},"For more information about developing your own components ->")),(0,a.kt)("h3",{id:"pricing-1"},"Pricing"),(0,a.kt)("p",null,"All features of Adminbro are open source and accessible."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Role-Based Access Control"),(0,a.kt)("li",{parentName:"ul"},"Content Management System")),(0,a.kt)("p",null,"AdminBro Docs & Demo: ",(0,a.kt)("a",{parentName:"p",href:"https://adminbro.com/tutorial-installation-instructions.html"},"Documentation")," - ",(0,a.kt)("a",{parentName:"p",href:"https://admin-bro-example-app-staging.herokuapp.com/admin/login"},"Live Demo")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We have examined these two frameworks under some headings. Both help you successfully develop admin panel and B2B applications."),(0,a.kt)("p",null,"We suggest asking some questions to find out which one is more suitable for your project."),(0,a.kt)("p",null,"At this point, the questions you should ask when choosing these of framework may be as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"How flexible are they in offering solutions to the different business demands we may encounter?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"How difficult will it be to implement the providers and features we will be using?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If any problem arises, can I easily find a solution from the documentation?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"How dependent am I on this framework when using it in my project and does it offer customization possibilities?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"What does it offer me as an extra feature?"))),(0,a.kt)("p",null,"Here ",(0,a.kt)("strong",{parentName:"p"},"refine")," directly answers some of your questions. ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s customized structures (API, Router, i18n, GraphQL provider, etc...) provide you convenience from many points, unlike admin bro. This convenience and perspective provided by ",(0,a.kt)("strong",{parentName:"p"},"refine")," can be preferred for many projects. In addition, you can be limited to internal tool/B2B applications with AdminBro. You can develop many different projects with ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s rich UI library and SSR support."),(0,a.kt)("p",null,"In this article, we tried to answer these questions. By reading this article, you can choose the appropriate framework for your project and use it."))}f.isMDXComponent=!0}}]);