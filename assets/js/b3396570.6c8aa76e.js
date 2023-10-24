"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var o=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",slug:"astro-js-guide",authors:"chidume_nnamdi",tags:["react","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-12-astro-js/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/astro-js-guide",source:"@site/blog/2023-06-12-astro-js.md",title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",date:"2023-06-12T00:00:00.000Z",formattedDate:"June 12, 2023",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:15.215,hasTruncateMarker:!1,authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],frontMatter:{title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",slug:"astro-js-guide",authors:"chidume_nnamdi",tags:["react","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-12-astro-js/social.png",hide_table_of_contents:!1},prevItem:{title:"refine Open Source Hackathon 2",permalink:"/blog/refine-hackathon-2"},nextItem:{title:"TDD vs BDD - A Detailed Guide",permalink:"/blog/tdd-vs-bdd"},relatedPosts:[{title:"How to set up a WebSocket connection with Node.js and React.js?",description:"Understanding Real-time communication with React and WebSocket",permalink:"/blog/react-websocket-tutorial-nodejs",formattedDate:"August 16, 2023",authors:[{name:"Frank Joseph",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"frank_joseph"}],readingTime:12.225,date:"2023-08-16T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:25.235,date:"2022-11-17T00:00:00.000Z"},{title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",permalink:"/blog/zustand-react-state",formattedDate:"May 18, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.605,date:"2023-05-18T00:00:00.000Z"}],authorPosts:[{title:"Svelte vs React Comparison",description:"We will compare the optimal performance of React and Svelte",permalink:"/blog/svelte-vs-react",formattedDate:"December 8, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.245,date:"2022-12-08T00:00:00.000Z"},{title:"A Comprehensive Guide of React Unit Testing",description:"We'll learn how to unit test our component down to hooks and Context.",permalink:"/blog/react-unit-testing",formattedDate:"May 26, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:20.315,date:"2023-05-26T00:00:00.000Z"},{title:"How to Install and Use NVM?",description:"Guide to using NVM with Mac and Windows",permalink:"/blog/install-nvm-mac-and-windows",formattedDate:"November 9, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:7.435,date:"2022-11-09T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Creating Your First Astro Project",id:"creating-your-first-astro-project",level:2},{value:"Defining Layouts and Pages",id:"defining-layouts-and-pages",level:2},{value:"Building Components with Astro",id:"building-components-with-astro",level:2},{value:"Working with Static and Dynamic Content",id:"working-with-static-and-dynamic-content",level:2},{value:"Managing Data in Astro",id:"managing-data-in-astro",level:2},{value:"Conclusion",id:"conclusion",level:2}],m=(u="BannerRandom",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const h={toc:d};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Yet another framework, in the fast-paced world of web development, staying up-to-date with the latest tools and technologies is crucial. One such technology that has gained significant popularity in recent times is Astro.js. Designed to streamline and simplify the web development process, Astro.js offers an innovative approach to building modern websites and applications."),(0,o.kt)("p",null,'Astro.js, often referred to as a "static site generator," provides developers with a comprehensive framework for constructing static and dynamic web pages. By combining the best features of static site generation and server-side rendering, Astro.js offers a unique solution that optimizes performance, enhances developer productivity, and delivers exceptional user experiences.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Astro is the all-in-one web framework designed for speed. Pull your content from anywhere and deploy it everywhere, all powered by your favorite UI components and libraries. - ",(0,o.kt)("a",{parentName:"p",href:"https://astro.build/"},"Astro.js"))),(0,o.kt)("p",null,"The benefits and advantages of using Astro.js are numerous. First, it allows developers to leverage the power of component-based development, enabling them to build reusable UI elements. This modular approach not only enhances code organization but also facilitates collaboration among team members, making it easier to maintain and scale projects."),(0,o.kt)("p",null,"One of the greatest achievements of Astro.js is its blinding speed. ",(0,o.kt)("a",{parentName:"p",href:"https://astro.build/blog/2023-web-framework-performance-report/"},"In 2023, Astrojs was compared with other frameworks")," in terms of performance. Astro.js, Nextjs, Nuxt, SvelteKit, WordPress, Remix, and Gatsby were compared against major core vitals assessments. In the FID, First Input Delay, measurement Astrojs came second behind SvelteKit. Astrojs took lea in Cumulative Layout Shift, Largest Contentful Paint (LCP), and Interaction to Next Paint (INP) measurements."),(0,o.kt)("p",null,"Another significant advantage of Astro.js is its ability to seamlessly integrate with various frontend frameworks and libraries. Whether you prefer React, Vue.js, Svelte, or any other popular JavaScript framework, Astro.js provides a flexible and agnostic environment that empowers developers to work with their preferred tools. This compatibility ensures that developers can leverage their existing knowledge and expertise while harnessing the benefits of Astro.js."),(0,o.kt)("p",null,"One of the standout features of Astro.js is its ability to deliver blazing-fast websites. By employing static site generation and intelligent caching, Astro.js optimizes performance by pre-rendering pages and serving them directly from a Content Delivery Network (CDN). This approach eliminates the need for server-side rendering on every request, resulting in lightning-fast loading times and improved SEO rankings."),(0,o.kt)("p",null,"Astro.js also excels at reducing the complexity associated with managing multiple data sources and APIs. With its unified data fetching approach, developers can seamlessly fetch data from various sources and render it alongside static content. This simplifies the development process and eliminates the need for separate data fetching and rendering logic, resulting in cleaner code and improved developer productivity."),(0,o.kt)("p",null,"Now that we have finished discussing the advantages and benefits of Astro.js, let's determine the intended readership for this article. This all-encompassing guide caters specifically to web developers aiming to augment their skill set and embrace contemporary development methodologies. Whether you are an experienced developer aiming to incorporate a more streamlined workflow or a novice enthusiastic to plunge into the realm of web development, this article will furnish you with a robust groundwork to initiate your Astro.js journey."),(0,o.kt)("p",null,"In the following sections, we will delve deeper into the core concepts of Astro.js, explore its key features, and guide you through the process of setting up your first Astro.js project. By the end of this article, you will have the knowledge and confidence to leverage Astro.js to build performant, scalable, and visually stunning websites and applications. So, let's embark on this exciting journey into the world of Astro.js and unlock its true potential in modern web development."),(0,o.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,o.kt)("p",null,"In this section, we will learn how to set up the Astrojs project on our machine, but first, we have to make sure that some tools and binaries are already installed in our system."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nodejs"),": We need the Nodejs binaries installed in our system. Go over to ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download")," and install the binaries meant for your machine."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"npm or yarn"),": These are Node Package Managers, they help in maintaining and managing the dependencies, and the Nodejs environment of our project. ",(0,o.kt)("inlineCode",{parentName:"li"},"npm")," comes bundled with the Nodejs binaries, so once you install Nodejs you don't need a separate installation for npm. ",(0,o.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/lang/en/docs/install/"},"Yarn")," can be installed by running ",(0,o.kt)("inlineCode",{parentName:"li"},"npm i yarn -g"),".")),(0,o.kt)("p",null,"Now, we have all the binaries installed. To test if everything is working fine, run the following commands in your terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\nyarn -v\n")),(0,o.kt)("p",null,"If you get the version numbers of the binaries, then you are good to go."),(0,o.kt)("p",null,"In the next section, we will learn how to create a new Astrojs project."),(0,o.kt)("h2",{id:"creating-your-first-astro-project"},"Creating Your First Astro Project"),(0,o.kt)("p",null,"To create a new Astrojs project, run the following command in your terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-astro my-astro-project\n\n# create a new project with yarn\nyarn create astro\n\n# create a new project with npm\nnpm create astro@latest\n")),(0,o.kt)("p",null,"This will create a new Astrojs project in the ",(0,o.kt)("inlineCode",{parentName:"p"},"my-astro-project")," directory. But first, you will be prompted to choose the directory where your new project will be created in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," astro   v2.5.7 Launch sequence initiated.\n\n   dir   Where should we create your new project?\n         ./astro-prj\n")),(0,o.kt)("p",null,"Next, you will be prompted to choose a template for your project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  tmpl   How would you like to start your new project?\n         \u25cb Include sample files\n         \u25cb Use blog template\n         \u25cf Empty\n")),(0,o.kt)("p",null,"For this project, I chose the ",(0,o.kt)("inlineCode",{parentName:"p"},"Empty")," project."),(0,o.kt)("p",null,"After some background work, it will prompt you to install dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  deps   Install dependencies? (recommended)\n         \u25cf Yes  \u25cb No\n")),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," to install the dependencies. The next prompt will be whether you want to use TypeScript in the project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  ts   Do you plan to write TypeScript?\n         \u25cf Yes  \u25cb No\n")),(0,o.kt)("p",null,"Next, will be whether to initialize a git repository in the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  git   Initialize a git repository?\n         \u25cf Yes  \u25cb No\n")),(0,o.kt)("p",null,"At the end, you will be presented with this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n  next   Liftoff confirmed. Explore your project!\n\n         Enter your project directory using cd ./astro-prj\n         Run npm run dev to start the dev server. CTRL+C to stop.\n         Add frameworks like react or tailwind using astro add.\n\n         Stuck? Join us at https://astro.build/chat\n\n\u256d\u2500\u2500\u2500\u2500\u2500\u256e  Houston:\n\u2502 \u25e0 \u25e1 \u25e0  Good luck out there, astronaut! \ud83d\ude80\n")),(0,o.kt)("p",null,"And an Astrojs project will be created in the ",(0,o.kt)("inlineCode",{parentName:"p"},"astro-prj")," directory."),(0,o.kt)("p",null,"Once the project is created, navigate to the project directory and run the following command to start the development server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd astro-prj\nnpm run dev\n\n(base) \u279c  astro-prj git:(master) npm run dev\n\n> astro-prj@0.0.1 dev\n> astro dev\n\n  \ud83d\ude80  astro  v2.5.7 started in 68ms\n\n  \u2503 Local    http://127.0.0.1:3000/\n  \u2503 Network  use --host to expose\n\n")),(0,o.kt)("p",null,"The server will be started at ",(0,o.kt)("inlineCode",{parentName:"p"}," http://127.0.0.1:3000/"),". Open the URL in your browser to see the Astrojs project."),(0,o.kt)("p",null,"Now, we have successfully created our first Astrojs project. We will now learn about the project structure."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Project Structure")),(0,o.kt)("p",null,"The project structure of an Astrojs project is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 astro.config.mjs\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.svg\n\u2502   \u251c\u2500\u2500 index.css\n\u2502   \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u2514\u2500\u2500 App.astro\n\u2502   \u251c\u2500\u2500 layouts\n\u2502   \u2502   \u2514\u2500\u2500 default.astro\n\u2502   \u251c\u2500\u2500 pages\n\u2502   \u2502   \u251c\u2500\u2500 404.astro\n\u2502   \u2502   \u2514\u2500\u2500 index.astro\n\u2502   \u2514\u2500\u2500 styles\n\u2502       \u2514\u2500\u2500 global.css\n\u2514\u2500\u2500 yarn.lock\n")),(0,o.kt)("p",null,"This is the structure of a basic Astrojs project. Let's go over the files and directories in the project."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"astro.config.mjs")," file is the configuration file for the Astrojs project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," directory contains the static assets of the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory contains the source code of the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," directory contains the components of the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"layouts")," directory contains the layouts of the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," directory contains the pages of the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"styles")," directory contains the styles of the project."))),(0,o.kt)("p",null,"In the next section, we will learn about Astrojs layouts and pages."),(0,o.kt)("h2",{id:"defining-layouts-and-pages"},"Defining Layouts and Pages"),(0,o.kt)("p",null,"Pages in Astrojs are similar to the pages in Nextjs. They are responsible for the routing of the Astrojs project. Every file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," directory is a page in the project. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.astro")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," directory is the home page of the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 pages\n\u2502   \u251c\u2500\u2500 404.astro\n\u2502   \u2514\u2500\u2500 index.astro\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"404.astro")," file is the 404 page of the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 pages\n\u2502   \u251c\u2500\u2500 about.astro\n\u2502   \u251c\u2500\u2500 contact.astro\n\u2502   \u251c\u2500\u2500 blog\n\u2502   \u2502   \u251c\u2500\u2500 [slug].astro\n\u2502   \u2502   \u2514\u2500\u2500 index.astro\n\u2502   \u2514\u2500\u2500 index.astro\n")),(0,o.kt)("p",null,"All the files in the above directory structure are pages of the project. Each of them makes up the routing of the project. Each file is loaded when its mapped route URL is visited in the browser. So each file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/")," directory becomes an endpoint on your site based on its file path."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"about.astro")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"contact.astro")," files are the about and contact pages of the project respectively. The ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," directory contains the blog pages of the project. The ",(0,o.kt)("inlineCode",{parentName:"p"},"index.astro")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," directory is the blog home page. The ",(0,o.kt)("inlineCode",{parentName:"p"},"[slug].astro")," file is the blog post page."),(0,o.kt)("p",null,"See that Astrojs supports dynamic routing. We have ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," folder and inside the blog folder are three files: ",(0,o.kt)("inlineCode",{parentName:"p"},"index.astro")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"[slug].astro"),". Now, the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," folder becomes a sub-path, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.astro")," maps to ",(0,o.kt)("inlineCode",{parentName:"p"},"/blog/")," URL. The ",(0,o.kt)("inlineCode",{parentName:"p"},"[slug].astro")," maps to ",(0,o.kt)("inlineCode",{parentName:"p"},"/blog/:slug")," URL. The ",(0,o.kt)("inlineCode",{parentName:"p"},":slug")," is a dynamic parameter. So, if we have a blog post with the slug ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-world"),", then the URL will be ",(0,o.kt)("inlineCode",{parentName:"p"},"/blog/hello-world"),"."),(0,o.kt)("p",null,"So:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"blog/ will load blog/index.astro file\n\n/blog/hello-world will load blog/[slug].astro file\n")),(0,o.kt)("p",null,"This process is called ",(0,o.kt)("inlineCode",{parentName:"p"},"file-based routing"),". It is a simple and intuitive way to define routes in Astrojs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Layouts")),(0,o.kt)("p",null,"Layouts in Astrojs are like HTML templates used to provide a reusable UI structure. The ",(0,o.kt)("inlineCode",{parentName:"p"},"default.astro")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"layouts")," directory is the default layout of the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 layouts\n\u2502   \u2514\u2500\u2500 default.astro\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"default.astro")," file is used as the layout for all the pages of the project. The ",(0,o.kt)("inlineCode",{parentName:"p"},"default.astro")," file is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'---\nimport { Head } from \'https://astrojs.org\'\n---\n\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n\n    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />\n    <link rel="stylesheet" href="/index.css" />\n    <script type="module" src="/index.js"><\/script>\n  </head>\n\n  <body>\n    <slot />\n  </body>\n</html>\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"slot")," element is where the external content placed between the layout component will be injected. This is similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ng-content")," in Angular and ",(0,o.kt)("inlineCode",{parentName:"p"},"{children}")," in Reactjs."),(0,o.kt)("p",null,"Let's say we have a layout ",(0,o.kt)("inlineCode",{parentName:"p"},"MyLayout.astro"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'---\nimport BaseHead from \'../components/BaseHead.astro\';\nimport Footer from \'../components/Footer.astro\';\nconst { title } = Astro.props\n---\n\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <BaseHead title="{title}" />\n  </head>\n  <body>\n    <nav>\n      <a href="#">Home</a>\n      <a href="#">Posts</a>\n      <a href="#">Contact</a>\n    </nav>\n    <h1>{title}</h1>\n    <article>\n      <slot />\n      \x3c!-- your content is injected here --\x3e\n    </article>\n    <footer />\n  </body>\n</html>\n')),(0,o.kt)("p",null,"Let's see how we can render it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"---\nimport MyLayout from '../layouts/MyLayout.astro';\n---\n\n<MyLayout title=\"MyLayout\">\n  <p>My layout!</p>\n</MyLayout>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>My layout!</p>")," will be injected into the ",(0,o.kt)("inlineCode",{parentName:"p"},"<slot />")," element in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyLayout.astro")," file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," prop will be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyLayout.astro")," file."),(0,o.kt)("p",null,"We will learn more about props in the next section."),(0,o.kt)("hr",null),(0,o.kt)(m,{mdxType:"BannerRandom"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"building-components-with-astro"},"Building Components with Astro"),(0,o.kt)("p",null,"Components are the building blocks of all component-oriented frameworks. Astrojs is a component-oriented framework. It is built around components."),(0,o.kt)("p",null,"Components are single units of UI. They are reusable and composable. This makes them easy to maintain and test. The complete website built using Astro is made up of components. So Astrojs is a tree of components."),(0,o.kt)("p",null,"To create a component in Astrojs we will simply create a file with its name ending with ",(0,o.kt)("inlineCode",{parentName:"p"},".astro"),". For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Component.astro")," is a component in Astrojs. We have created a component."),(0,o.kt)("p",null,"A basic shell of a component looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"---\n// Component Script (JavaScript)\n---\n\x3c!-- Component Template (HTML + JS Expressions) --\x3e\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Component Script")," section is where the JavaScript code is written. It is where to define the component logic. The component template is written in HTML. It is used to define the component UI."),(0,o.kt)("p",null,"Let's create a component called ",(0,o.kt)("inlineCode",{parentName:"p"},"MyComponent.astro"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<input type="text" placeholder="Type your text here..." />\n\n<button>Send</button>\n')),(0,o.kt)("p",null,"This is a simple component. It is a form component. It has an input field and a button. It is a reusable component. We can use it anywhere in our project."),(0,o.kt)("p",null,"Let's see how we can use it in our project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"---\nimport MyComponent from '../components/MyComponent.astro';\n---\n\n<MyComponent />\n")),(0,o.kt)("p",null,"Let's say we want to add a click event to the button in ",(0,o.kt)("inlineCode",{parentName:"p"},"MyComponent"),". We know that the event handler will be a function, and this function is JavaScript. So first, we will add a script tag to the component. This is done by writing double dashes ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," at the top of the component file. Then we will write the JavaScript code in the script tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'---\nfunction handleClick() {\n  console.log(\'Button clicked!\');\n}\n---\n<input type="text" placeholder="Type your text here..." />\n\n<button onclick="{handleClick}">Send</button>\n')),(0,o.kt)("p",null,"We have added a click event handler to the button. The ",(0,o.kt)("inlineCode",{parentName:"p"},"handleClick")," function will be called when the button is clicked. The ",(0,o.kt)("inlineCode",{parentName:"p"},"handleClick")," function will log ",(0,o.kt)("inlineCode",{parentName:"p"},"Button clicked!")," to the console."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Passing Props to Components")),(0,o.kt)("p",null,"Props are one of the most important features in any component-oriented framework. Props are used to pass data from one component to another. This makes the components reusable and composable."),(0,o.kt)("p",null,"Let's see how we can pass props to an Astrojs component. We want to pass a button text to the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyComponent")," component. We will do this by rendering the component like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"---\nimport MyComponent from '../components/MyComponent.astro';\n---\n\n<MyComponent buttonText=\"Send\" />\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'buttonText="Send"')," is how props are passed to components. The ",(0,o.kt)("inlineCode",{parentName:"p"},"buttonText")," is the name of the prop. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Send")," is the value of the prop. The prop name and value are separated by an equal sign ",(0,o.kt)("inlineCode",{parentName:"p"},"="),". The prop name and value are wrapped in double quotes ",(0,o.kt)("inlineCode",{parentName:"p"},'"'),". Any JavaScript data can be passed via props."),(0,o.kt)("p",null,"Let's see how the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyComponent")," component will receive the prop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'---\nconst { buttonText } = Astro.props;\n---\n<input type="text" placeholder="Type your text here..." />\n\n<button>{buttonText}</button>\n')),(0,o.kt)("p",null,"So the ",(0,o.kt)("inlineCode",{parentName:"p"},"buttonText")," prop is received in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyComponent")," component. The prop is destructured from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Astro.props")," object. The prop is then used in the component template."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Astro")," object is available in all components and Astrojs puts all the props sent to that particular component in the component's ",(0,o.kt)("inlineCode",{parentName:"p"},"Astro.props")," object. The Astro object instance is unique to each component."),(0,o.kt)("h2",{id:"working-with-static-and-dynamic-content"},"Working with Static and Dynamic Content"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Passing content to components")),(0,o.kt)("p",null,"There are times when we want to render elements between the tags of a component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<MyComponent>\n  <p>My component!</p>\n</MyComponent>\n")),(0,o.kt)("p",null,"With the code in our ",(0,o.kt)("inlineCode",{parentName:"p"},"MyComponent")," component, the ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>My component!</p>")," will not be rendered. This is because the component template does not have a place to render the content. We will add a ",(0,o.kt)("inlineCode",{parentName:"p"},"slot")," element to the component template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'---\nconst { buttonText } = Astro.props;\n---\n<input type="text" placeholder="Type your text here..." />\n\n<button>{buttonText}</button>\n\n<slot />\n')),(0,o.kt)("p",null,"Astrojs will render the element ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>My component!</p>")," in place of the ",(0,o.kt)("inlineCode",{parentName:"p"},"slot")," element."),(0,o.kt)("p",null,"Astrojs gave us the option of naming slots so we can render content in a specific slot. Let's say we want to render content at the start of the template and a footer at the end of the template. We will name the slots ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"footer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'---\nconst { buttonText } = Astro.props;\n---\n<slot name="header">\n<input type="text" placeholder="Type your text here..." />\n\n<button>{buttonText}</button>\n\n<slot name="footer" />\n')),(0,o.kt)("p",null,"Now, we can render content in the header and footer slots:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<MyComponent>\n  <p slot="header">My component!</p>\n  <p slot="footer">My component!</p>\n</MyComponent>\n')),(0,o.kt)("h2",{id:"managing-data-in-astro"},"Managing Data in Astro"),(0,o.kt)("p",null,"Managing data is a crucial aspect of web development, and Astro.js provides robust options for efficiently fetching and utilizing data within your projects. In this section, we will explore the various data management capabilities offered by Astro.js, including fetching data from external sources or APIs and leveraging that data within Astro templates and components."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fetching Data from External Sources or APIs")),(0,o.kt)("p",null,"Astro.js offers us the flexibility for retrieving data from external sources or APIs. We can utilize the full power of JavaScript to perform data fetching operations and seamlessly integrate the retrieved data into your Astro projects."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HTTP Requests"),"\nWe can make HTTP requests using popular JavaScript libraries such as ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," in Astro.js. These libraries provide convenient methods for sending GET, POST, PUT, DELETE, and other types of requests to external APIs. By leveraging these libraries, we can retrieve data from various sources, including RESTful APIs, GraphQL endpoints, or even custom backend servers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data Fetching Libraries"),"\nAstro.js also integrates well with data-fetching libraries like ",(0,o.kt)("inlineCode",{parentName:"p"},"swr")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query"),". These libraries provide additional features such as caching, automatic revalidation, and error handling, which can greatly simplify the process of fetching and managing data in our Astro projects."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serverless Functions"),"\nAnother approach to fetching data in Astro.js involves using serverless functions. These functions run on the server side and allow us to fetch data from external sources or perform any necessary server-side processing. Astro.js seamlessly supports serverless functions, enabling us to retrieve data dynamically and pass it to our Astro components during the build process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"---\nimport { getPosts } from '../lib/posts';\nconst posts = getPosts();\n---\n\n{posts.map((post) => (\n  <div>\n    <h2>{post.title}</h2>\n    <p>{post.body}</p>\n  </div>\n))}\n")),(0,o.kt)("p",null,"Once we have fetched the required data, Astro.js empowers us to seamlessly integrate it into your templates and components, enabling dynamic rendering and data-driven UIs."),(0,o.kt)("p",null,"With the data management capabilities provided by Astro.js, we can effortlessly fetch and utilize data from external sources or APIs, empowering you to create dynamic and data-driven websites or applications. Whether you need to display blog posts, populate product information, or showcase real-time data, Astro.js offers a versatile toolkit for managing data within your projects."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We covered a lot and the basics of Astro.js in this article. We started by installing Astro.js and creating a new project. We then looked at the project structure and how to run the project. We then looked at the Astro.js template syntax and how to create components. We also looked at how to pass props to components and how to render static and dynamic content in components. We also looked at how to fetch data from external sources or APIs."))}g.isMDXComponent=!0}}]);