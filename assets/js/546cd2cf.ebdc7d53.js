"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"Creating a Responsive React Navbar with Tailwind CSS",description:"In this brief guide, we'll create a responsive navbar with Tailwind CSS and Bootstrap in React.",slug:"react-navbar-responsive-tailwind",authors:"muhammed_arslan",tags:["tailwind","css","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-07-responsive-navbar/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/react-navbar-responsive-tailwind",source:"@site/blog/2022-10-07-responsive-navbar.md",title:"Creating a Responsive React Navbar with Tailwind CSS",description:"In this brief guide, we'll create a responsive navbar with Tailwind CSS and Bootstrap in React.",date:"2022-10-07T00:00:00.000Z",formattedDate:"October 7, 2022",tags:[{label:"tailwind",permalink:"/blog/tags/tailwind"},{label:"css",permalink:"/blog/tags/css"},{label:"react",permalink:"/blog/tags/react"}],readingTime:8.485,hasTruncateMarker:!1,authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],frontMatter:{title:"Creating a Responsive React Navbar with Tailwind CSS",description:"In this brief guide, we'll create a responsive navbar with Tailwind CSS and Bootstrap in React.",slug:"react-navbar-responsive-tailwind",authors:"muhammed_arslan",tags:["tailwind","css","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-07-responsive-navbar/social.png",hide_table_of_contents:!1},prevItem:{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type"},nextItem:{title:"How to use Next.js API Routes?",permalink:"/blog/next-js-api-routes"},relatedPosts:[{title:"A Guide on React Lazy Loading",description:"We will be looking at what lazy loading is, how it works, and how it can be used to improve the performance of React applications.",permalink:"/blog/react-lazy-loading",formattedDate:"December 7, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.925,date:"2022-12-07T00:00:00.000Z"},{title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",formattedDate:"August 29, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:14.69,date:"2022-08-29T00:00:00.000Z"},{title:"How to create React draggable components with react-dnd",description:"We'll be using the react-dnd library to create draggable components in React.",permalink:"/blog/react-draggable-components-with-react-dnd",formattedDate:"March 7, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:21.255,date:"2023-03-07T00:00:00.000Z"}],authorPosts:[{title:"CSS Grid vs Flexbox - A brief guide",description:"In this brief guide, we compare some concept of the two most popular CSS layout methods - Grid and Flexbox.",permalink:"/blog/css-grid-vs-flexbox",formattedDate:"August 30, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:6.225,date:"2022-08-30T00:00:00.000Z"},{title:"Temporal API - A new approach to managing Date and Time in JS",description:"Are we saying goodbye to the JavaScript Date object? Use the Temporal API to manipulate date and time objects in JavaScript.",permalink:"/blog/temporal-date-api",formattedDate:"August 19, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:6.82,date:"2022-08-19T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Setting Up a refine App",id:"setting-up-a-refine-app",level:2},{value:"Responsive Navbar with Tailwind",id:"responsive-navbar-with-tailwind",level:2},{value:"Add navigation functionality to the navbar",id:"add-navigation-functionality-to-the-navbar",level:2},{value:"Responsive Navbar with Bootstrap",id:"responsive-navbar-with-bootstrap",level:2},{value:"Add React Router to Bootstrap Navbar",id:"add-react-router-to-bootstrap-navbar",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=d("PromotionBanner"),g=d("CodeSandboxExample"),h={toc:m};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,a.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,a.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,a.kt)("p",{parentName:"admonition"},"You should know that ",(0,a.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,a.kt)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this article, you'll see how to create responsive navbars in ",(0,a.kt)("strong",{parentName:"p"},"refine")," apps using the following CSS frameworks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Tailwind CSS"),(0,a.kt)("li",{parentName:"ol"},"Bootstrap")),(0,a.kt)("p",null,"refine is a React-based framework for building internal tools using helper hooks, components, and providers. It provides amazing functionality for rapid development while ensuring extreme customizability. Everything is separate from your UI components and business logic in refine-based Apps. So, you can create UI components or code your flow. You can build admin panels, B2B applications, and dashboards using refine. But it's not limited to only these three scenarios."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setting-up-a-refine-app"},"Setting Up a refine App")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#responsive-navbar-with-tailwind"},"Responsive Navbar with Tailwind")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#add-navigation-functionality-to-the-navbar"},"Add navigation functionality to the navbar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#responsive-navbar-with-bootstrap"},"Responsive Navbar with Bootstrap")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#add-react-router-to-bootstrap-navbar"},"Add React Router to Bootstrap Navbar"))),(0,a.kt)("h2",{id:"setting-up-a-refine-app"},"Setting Up a refine App"),(0,a.kt)("p",null,"We'll use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," tool to create an empty React-based ",(0,a.kt)("strong",{parentName:"p"},"refine")," application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm create refine-app@latest refine-navbar -- -o refine-headless -b v3\n")),(0,a.kt)("p",null,"Navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"refine-navbar")," folder and run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," command."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-07-responsive-navbar/pic-1.png",alt:"app welcome page"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"We're using four resources ",(0,a.kt)("inlineCode",{parentName:"p"},"posts"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"categories"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," for the navigation purpose."),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/posts")," folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'export const postList = () => <p className="post">Post Page</p>\n')),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/categories")," folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/categories/list.tsx"',title:'"src/pages/categories/list.tsx"'},'export const categoryList = () => <p className="category">Category Page</p>\n')),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/users")," folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/users/list.tsx"',title:'"src/pages/users/list.tsx"'},'export const userList = () => <p className="user">User Page</p>\n')),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/events")," folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/events/list.tsx"',title:'"src/pages/events/list.tsx"'},'export const eventList = () => <p className="event">Event Page</p>\n')),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx")," file inside ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," folder and add the following code to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},'export * from "./posts";\nexport * from "./categories";\nexport * from "./users";\nexport * from "./events";\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," is the root component of the application. ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," is a property of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," representing API Endpoints. The ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," property of every single resource should match one of the endpoints in your API."),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," use Page components to handle data and perform rendering. Page components are passed to resources as an array of objects."),(0,a.kt)("p",null,"Add these ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," as a prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport React from "react";\nimport \'App.css\'\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n//highlight-next-line\nimport { postList, categoryList, userList, eventList } from "pages";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            //highlight-next-line\n            resources={[{ name: "posts", list: postList }, { name: "categories", list: categoryList }, { name: "users", list: userList }, { name: "events", list: eventList }]}\n        />\n    );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," works based on consuming data from APIs. You can consume Rest APIs using ",(0,a.kt)("inlineCode",{parentName:"p"},"dataproviders"),". Data providers are ",(0,a.kt)("strong",{parentName:"p"},"refine")," components that make it possible to consume APIs and data services easily."),(0,a.kt)("p",null,"For this tutorial, we don't want consume API since we only want to focus navigating. The key point is ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," is required property. So we need give it anyway even if we don't want to consume the API.  We  use the fake Rest API available at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev/"),"."),(0,a.kt)("p",null,"Also, add following code inside ",(0,a.kt)("inlineCode",{parentName:"p"},"App.css"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/App.css"',title:'"src/App.css"'},".post, .category, .user, .event {\n  text-align: center;\n}\n")),(0,a.kt)("p",null,"and import it inside ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import 'App.css'\n")),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-07-responsive-navbar/pic-2.png",alt:"post page"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"responsive-navbar-with-tailwind"},"Responsive Navbar with Tailwind"),(0,a.kt)("p",null,"Tailwind provides utility classes for creating components. We need to set up Tailwind CSS before starting to create a navbar with it."),(0,a.kt)("p",null,"Install tailwindcss and its peer dependencies using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i -D tailwindcss postcss autoprefixer\n")),(0,a.kt)("p",null,"Then, init command to generate ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx tailwindcss init\n")),(0,a.kt)("p",null,"Now, add paths of all template files in ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="tailwind.config.js"',title:'"tailwind.config.js"'},'module.exports = {\n    content: ["./src/**/*.{js,jsx,ts,tsx}"],\n};\n')),(0,a.kt)("p",null,"After that, add all @tailwind directives in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.css")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/index.css"',title:'"src/index.css"'},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n")),(0,a.kt)("p",null,'Add "index.css" import inside the ',(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import 'index.css';\n")),(0,a.kt)("p",null,"Now, We can use Tailwind to style our application."),(0,a.kt)("p",null,"We're using the following tailwind classes for creating a responsive navbar layout:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flex")," sets the display mode of container to flex."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flex-col")," changes the flex direction to column."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min-h-screen")," sets the minimum height of the element to min-height: 100vh."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"container max-auto")," centers the container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flex justify-between")," adds space between the flex items."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"w-32")," indicates that element has (32*4) 128px width."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ml-2")," provides 8px margin to the element from left."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"items-center")," pushes items to the center."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hidden")," sets element visibility to hidden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"md:flex")," displays flex when screen size is atleast medium."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"md:hidden")," sets visibility to hidden when screen size is atleast medium."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"text-green-500")," changes text color to green with 500 font weight."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bg-white")," sets the background color of the element to white.")),(0,a.kt)("p",null,"Layout component is used for the customization of ",(0,a.kt)("strong",{parentName:"p"},"refine")," app's layout. Create ",(0,a.kt)("inlineCode",{parentName:"p"},"components/Layout.tsx")," file inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder."),(0,a.kt)("p",null,"Create the following navbar using Tailwind CSS inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Layout")," component. We can get all the ",(0,a.kt)("inlineCode",{parentName:"p"},"menuItems")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"useMenu()")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Layout.tsx"',title:'"src/components/Layout.tsx"'},'import { useMenu, LayoutProps } from "@refinedev/core";\nimport React from "react";\n\nexport const Layout: React.FC<LayoutProps> = ({ children }) => {\n\n    const { menuItems } = useMenu();\n\n    return (\n        <div className="flex min-h-screen flex-col">\n            <div className="mb-2 md:border-b py-2">\n                <div className="container mx-auto">\n                    <div className="flex justify-between gap-2">\n                            <img\n                                className="w-32 ml-2"\n                                src="https://refine.dev/img/refine_logo.png"\n                                alt="Logo"\n                            />\n                        <ul className="hidden md:flex">\n                            {menuItems.map(({ name, route }) => (\n                                <li key={name} className="float-left">\n                                    <a\n                                        className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out"\n                                    >\n                                        <span className="text-green-500">{name}</span>\n                                    </a>\n                                </li>\n                            ))}\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div className="bg-white">{children}</div>\n        </div>\n    );\n};\n')),(0,a.kt)("p",null,"This layout is passed as a prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},' //highlight-next-line\nimport { Layout } from "components/Layout";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            ...\n            //highlight-next-line\n            Layout={Layout}\n        />\n    );\n};\n')),(0,a.kt)("p",null,"The output of the above code is as follows:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-07-responsive-navbar/pic-3.png",alt:"post page"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Let's make it mobile responsive by adding the mobile menu:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Layout.tsx"',title:'"src/components/Layout.tsx"'},'...\n<div className="flex flex-col md:hidden border-b pl-3">\n    {menuItems.map(({ name, route }) => (\n        <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition     duration-300 ease-in-out"\n        >\n            <span className="text-green-500">{name}</span>\n        </a>\n    ))}\n</div>\n...\n')),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-07-responsive-navbar/pic-4.png",alt:"post page"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"add-navigation-functionality-to-the-navbar"},"Add navigation functionality to the navbar"),(0,a.kt)("p",null,"We need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Link")," component in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Layout.tsx")," will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Layout.tsx"',title:'"src/components/Layout.tsx"'},'//highlight-next-line\nimport { useMenu, LayoutProps, useRouterContext } from "@refinedev/core";\nimport React from "react";\n\nexport const Layout: React.FC<LayoutProps> = ({ children }) => {\n\n    const { menuItems } = useMenu();\n//highlight-next-line\n      const { Link } = useRouterContext();\n\n    return (\n        <div className="flex min-h-screen flex-col">\n            <div className="mb-2 md:border-b py-2">\n                <div className="container mx-auto">\n                    <div className="flex justify-between gap-2">\n                        <img\n                            className="w-32 ml-2"\n                            src="https://refine.dev/img/refine_logo.png"\n                            alt="Logo"\n                        />\n                        <ul className="hidden md:flex">\n                            {menuItems.map(({ name, route }) => (\n                                <li key={name} className="float-left">\n                                //highlight-start\n                                    <Link\n                                        className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize\n                                    decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out"\n                                        to={name}\n                                    >\n                                        <span className="text-green-500">{name}</span>\n                                    </Link>\n                                       //highlight-\n                                </li>\n                            ))}\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div className="bg-white">{children}</div>\n        </div>\n    );\n};\n\n')),(0,a.kt)("hr",null),(0,a.kt)(u,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"responsive-navbar-with-bootstrap"},"Responsive Navbar with Bootstrap"),(0,a.kt)("p",null,"I've already walked you through ",(0,a.kt)("a",{parentName:"p",href:"#refine-setup"},"setting up refine app"),". Now, we'll create navbar inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Layout.tsx")," and pass it as a prop to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,a.kt)("p",null,"First, install ",(0,a.kt)("strong",{parentName:"p"},"react-bootstrap"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install bootstrap react-bootstrap\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"react-bootstrap")," comes only with js. It doesn't have any CSS styles. That's why we installed bootstrap, which contains CSS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import "bootstrap/dist/css/bootstrap.min.css"\n')),(0,a.kt)("p",null,"Add navbar component inside the layout component and then create navbar items. We'll use ",(0,a.kt)("strong",{parentName:"p"},"refine")," logo for our navbar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Layout.tsx"',title:'"src/components/Layout.tsx"'},'import { Navbar, Nav } from \'react-bootstrap\'\n\n<div>\n  <Navbar className="navbar-border" >\n    <img className="brand-image" src="https://refine.ams3.cdn.digitaloceanspaces.comundefined" width="100px" height="100px" />\n    <Nav>\n        {menuItems.map(({ name, label, icon, route }) => (\n            <Nav.Link className="nav-link">{name}</Nav.Link>\n        ))}\n    </Nav>\n  </Navbar>\n  <div>{children}</div>\n</div>\n\n')),(0,a.kt)("p",null,"Add following CSS classes to ",(0,a.kt)("inlineCode",{parentName:"p"},"App.css")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/App.css"',title:'"src/App.css"'},".navbar-border {\n    border-bottom: 1px solid gray;\n}\n\n.nav-link {\n    margin-top: 5px;\n    text-transform: capitalize;\n}\n\n.brand-image {\n    margin: 0 15px !important;\n}\n")),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-07-responsive-navbar/pic-5.png",alt:"post page"}),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Navbar.Toggle />")," creates hamburger menu when screen size equals to minimum width set by ",(0,a.kt)("inlineCode",{parentName:"p"},"expand")," attribute in ",(0,a.kt)("inlineCode",{parentName:"p"},"Navbar")," component. You can do this in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Layout.tsx"',title:'"src/components/Layout.tsx"'},'import { useMenu, LayoutProps } from "@refinedev/core";\nimport React from "react";\nimport "bootstrap/dist/css/bootstrap.min.css"\nimport { Navbar, Nav } from \'react-bootstrap\'\n\nexport const Layout: React.FC<LayoutProps> = ({ children }) => {\n\n    const { menuItems } = useMenu();\n\n    return (\n        <div>\n            <Navbar className="navbar-border" expand="lg" >\n                <img className="brand-image" src="https://refine.ams3.cdn.digitaloceanspaces.comundefined" width="100px" height="100px" />\n                <Navbar.Toggle />\n                <Navbar.Collapse>\n                    <Nav>\n                        {menuItems.map(({ name, label, icon, route }) => (\n                            <Nav.Link className="nav-link">{name}</Nav.Link>\n                        ))}\n                    </Nav>\n                </Navbar.Collapse>\n            </Navbar>\n            <div>{children}</div>\n        </div>\n    );\n};\n')),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-07-responsive-navbar/pic-6.png",alt:"post page"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"add-react-router-to-bootstrap-navbar"},"Add React Router to Bootstrap Navbar"),(0,a.kt)("p",null,"Now, we're done with creating a responsive navbar using ",(0,a.kt)("inlineCode",{parentName:"p"},"react-bootstrap"),"."),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"<Link>")," component inside ",(0,a.kt)("inlineCode",{parentName:"p"},"<Nav>")," like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Layout.tsx"',title:'"src/components/Layout.tsx"'},'//highlight-next-line\nimport { useMenu, LayoutProps, useRouterContext } from "@refinedev/core";\nimport React from "react";\n\nimport "bootstrap/dist/css/bootstrap.min.css"\nimport { Navbar, Nav } from \'react-bootstrap\'\n\nexport const Layout: React.FC<LayoutProps> = ({ children }) => {\n\n    const { menuItems } = useMenu();\n  //highlight-next-line\n    const { Link } = useRouterContext();\n\n    return (\n        <div>\n            <Navbar className="navbar-border" expand="lg" >\n                <img className="brand-image" src="https://refine.ams3.cdn.digitaloceanspaces.comundefined" width="100px" height="100px" />\n                <Navbar.Toggle />\n                <Navbar.Collapse>\n                   //highlight-start\n                    <Nav>\n                        {menuItems.map(({ name, label, icon, route }) => (\n                            <Link className="nav-link" to={name}>\n                                <span>{name}</span>\n                            </Link>\n                        ))}\n                    </Nav>\n                  //highlight-end\n\n                </Navbar.Collapse>\n            </Navbar>\n            <div>{children}</div>\n        </div>\n    );\n};\n')),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Refine"),"  works with any custom design or UI framework. Every UI framework helps in creating layouts by providing utility classes or pre-designed components. In this article we implemented responsive navbar using Tailwind and Bootstrap.  You can choose any framework and design components according to your needs."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(g,{path:"blog-responsive-navbar",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);