"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",slug:"react-strict-mode-in-react-18",authors:"deborah_emeni",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-24-react-strict-mode/social.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/react-strict-mode-in-react-18",source:"@site/blog/2022-11-24-react-strict-mode.md",title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",date:"2022-11-24T00:00:00.000Z",formattedDate:"November 24, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:6.925,hasTruncateMarker:!1,authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],frontMatter:{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",slug:"react-strict-mode-in-react-18",authors:"deborah_emeni",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-24-react-strict-mode/social.png",hide_table_of_contents:!1},prevItem:{title:"How to Delete Local and Remote Git Branches",permalink:"/blog/git-delete-remote-branch-and-local-branch"},nextItem:{title:"5 Best Free Platforms for Hosting Hobby Web Projects",permalink:"/blog/5-top-free-react-hosting-platforms"},relatedPosts:[{title:"How to use Material UI Tooltip",description:"We'll discover the Material UI Tooltip component with examples",permalink:"/blog/material-ui-tooltip-component",formattedDate:"November 29, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:8.495,date:"2022-11-29T00:00:00.000Z"},{title:"How to use Material UI Select in React",description:"We'll discover the Material UI select component with examples",permalink:"/blog/material-ui-select-component",formattedDate:"October 30, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.17,date:"2022-10-30T00:00:00.000Z"},{title:"React useMemo hook guide with examples",description:"Improve the React app performance with useMemo() hook",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:4.965,date:"2022-09-16T00:00:00.000Z"}],authorPosts:[{title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",permalink:"/blog/grpc-vs-rest",formattedDate:"June 23, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:12.54,date:"2023-06-23T00:00:00.000Z"},{title:"TDD vs BDD - A Detailed Guide",description:"We'll be looking at the differences between TDD and BDD, their pros and cons, and how to implement them in a project.",permalink:"/blog/tdd-vs-bdd",formattedDate:"June 9, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:13.105,date:"2023-06-09T00:00:00.000Z"},{title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",permalink:"/blog/uri-vs-url",formattedDate:"February 1, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:7.735,date:"2023-02-01T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is React Strict Mode?",id:"what-is-react-strict-mode",level:2},{value:"Comparison between React Strict Mode and Use Strict",id:"comparison-between-react-strict-mode-and-use-strict",level:2},{value:"React Strict Mode",id:"react-strict-mode",level:3},{value:"Use Strict",id:"use-strict",level:3},{value:"What\u2019s new in React v18.0?",id:"whats-new-in-react-v180",level:2},{value:"Benefits of React Strict Mode",id:"benefits-of-react-strict-mode",level:2},{value:"Features of React Strict Mode",id:"features-of-react-strict-mode",level:2},{value:"Identifying components with unsafe lifecycles in React",id:"identifying-components-with-unsafe-lifecycles-in-react",level:3},{value:"Warning About Legacy String Ref API Usage",id:"warning-about-legacy-string-ref-api-usage",level:3},{value:"Warning about deprecated findDOMNode usage",id:"warning-about-deprecated-finddomnode-usage",level:3},{value:"Detecting Unexpected Side Effects",id:"detecting-unexpected-side-effects",level:3},{value:"Detecting Legacy Context API",id:"detecting-legacy-context-api",level:3},{value:"Ensuring a reusable state",id:"ensuring-a-reusable-state",level:3},{value:"Conclusion",id:"conclusion",level:2}],p=(m="BannerRandom",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const h={toc:d};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In recent years, React.js has undergone significant development by adding and improving new features to solve discovered bugs and provide tools that improve application performance. In March 2022, a new version (React v18.0) was released with features such as React Strict Mode, Server-Side Rendering (SSR), Suspense, Concurrency, Automatic Batching, and the introduction of new hooks."),(0,a.kt)("p",null,"Among all of the new features, the React Strict Mode feature stood out for its extensive improvements and functions in areas such as identifying coding patterns for bugs, providing feedback to developers with no impact on the production build, and much more."),(0,a.kt)("p",null,"In this article, we'll see the ",(0,a.kt)("strong",{parentName:"p"},"React Strict Mode"),", how it relates to the JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"\u201cuse strict\u201d")," expression, its importance, benefits, features, and significant improvements. "),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-react-strict-mode"},"What is React Strict Mode?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#comparison-between-react-strict-mode-and-use-strict"},"Comparison between React Strict Mode and Use Strict"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#react-strict-mode"},"React Strict Mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-strict"},"Use Strict")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#whats-new-in-react-v180"},"What\u2019s new in React v18.0?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#benefits-of-react-strict-mode"},"Benefits of React Strict Mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#features-of-react-strict-mode"},"Features of React Strict Mode"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#identifying-components-with-unsafe-lifecycles-in-react"},"Identifying components with unsafe lifecycles in React")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#warning-about-legacy-string-ref-api-usage"},"Warning About Legacy String Ref API Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#warning-about-deprecated-finddomnode-usage"},"Warning about deprecated findDOMNode usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#detecting-unexpected-side-effects"},"Detecting Unexpected Side Effects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#detecting-legacy-context-api"},"Detecting Legacy Context API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ensuring-a-reusable-state"},"Ensuring a reusable state"))))),(0,a.kt)("h2",{id:"what-is-react-strict-mode"},"What is React Strict Mode?"),(0,a.kt)("p",null,"React Strict Mode is a developer tool highlighting potential bugs or issues in a React application's codebase. It provides warnings to developers as feedback for errors that occur in an application, with no effect on the result because it does not render any visible UI."),(0,a.kt)("p",null,"With React v18.0, new features  were added to the framework, and some existing features were significantly improved."),(0,a.kt)("p",null,"React Strict Mode runs some functions in the development environment to ensure that they return values identical to the desired arguments and have no unintended side effects. These functions are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Functional Component"),(0,a.kt)("li",{parentName:"ul"},"Initializer Function"),(0,a.kt)("li",{parentName:"ul"},"Updater Function"),(0,a.kt)("li",{parentName:"ul"},"React Strict Mode versus \u201cuse strict\u201d"),(0,a.kt)("li",{parentName:"ul"},'This section explains the relationship between Strict Mode and the JavaScript "use strict" expression. You can specify that a code block should be run in strict mode by appending "use strict" to the beginning of a script or function.')),(0,a.kt)("p",null,'Strict Mode, on the other hand, detects errors in coding patterns and flags previously accepted "bad syntax" as errors by eliminating silent errors and throwing errors when they occur. React Strict mode works similarly to JavaScript\'s "use strict" expression in that it ensures a more strict and type-safe version of JavaScript.'),(0,a.kt)("p",null,'The relationship between React Strict Mode and the "use strict" expression is described in the table below:'),(0,a.kt)("h2",{id:"comparison-between-react-strict-mode-and-use-strict"},"Comparison between React Strict Mode and Use Strict"),(0,a.kt)("h3",{id:"react-strict-mode"},"React Strict Mode"),(0,a.kt)("p",null,"Undeclared variables will return an error in React Strict mode. It checks for the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Components with unsafe lifecycles."),(0,a.kt)("li",{parentName:"ul"},"Usage of legacy or deprecated APIs or methods like the string ref API and Context API, and findDOMNode."),(0,a.kt)("li",{parentName:"ul"},"Unexpected side effects.")),(0,a.kt)("p",null,"You can reference the Strict Mode by using ",(0,a.kt)("inlineCode",{parentName:"p"},"<React.StrictMode>"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"import { StrictMode } from 'react'"),"\xa0in your code. Then, the component can be called as StrictMode. "),(0,a.kt)("p",null,"Wrap the suspected code in the Strict Mode helper component as shown in the code block below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\n \nconst root = ReactDOM.createRoot(document.getElementById('root'));\n \nconst SuspiciousCode=()=>{\n  return (\n    <div>Contains suspicious code blocks</div>\n  )\n}\n \nroot.render(\n   <React.StrictMode>\n       <SuspiciousCode />\n   </React.StrictMode>\n)\n")),(0,a.kt)("h3",{id:"use-strict"},"Use Strict"),(0,a.kt)("p",null,"The expression \u201cuse strict\u201d flags out the following as errors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assigning values to undeclared variables."),(0,a.kt)("li",{parentName:"ul"},"Use of keywords for variable name, e.g. public."),(0,a.kt)("li",{parentName:"ul"},"Writing data to constant variables."),(0,a.kt)("li",{parentName:"ul"},"Accessing a variable before it is declared etc. ")),(0,a.kt)("p",null,"Both statements in the code example below will return errors because arguments is a reserved words and variable x is not defined."),(0,a.kt)("p",null,"Also, \u201cuse strict\u201d must be specified at the top of the file for it to take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'"use strict";\n \nlet arguments = "an argument"; \n \nx = 500;\n')),(0,a.kt)("hr",null),(0,a.kt)(p,{mdxType:"BannerRandom"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"whats-new-in-react-v180"},"What\u2019s new in React v18.0?"),(0,a.kt)("p",null,"Strict Mode plays a significant role in the incremental adoption of Concurrent rendering, a new implementation detail that, in simple terms, allows rendering UI to be interruptible. While in development, Strict Mode can be used to help expose concurrency-related bugs."),(0,a.kt)("p",null,"The new React Strict Mode behaviours are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React Strict Mode can now be used to detect bugs that occur as code runs concurrently (two or more tasks being carried out simultaneously)."),(0,a.kt)("li",{parentName:"ul"},"Strict Mode only runs in development, which does not impede the production build."),(0,a.kt)("li",{parentName:"ul"},"It logs extra warnings or errors and invokes functions twice to ensure that the expected results always occur."),(0,a.kt)("li",{parentName:"ul"},"With React 18, Strict Mode can now handle mounting and unmounting components and, in future, preserve and restore their state on subsequent mounts.")),(0,a.kt)("h2",{id:"benefits-of-react-strict-mode"},"Benefits of React Strict Mode"),(0,a.kt)("p",null,"React Strict Mode comes with a couple of outstanding benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Preventing Mutations of Values: Strict Mode aids in the prevention of scenarios in applications where values are mutated by unpure functions, resulting in different results after each render. The developer can easily detect if the application returns the expected results thanks to its double invocation feature."),(0,a.kt)("li",{parentName:"ul"},"Ease of use: React Strict mode makes it easier to work with unfamiliar codebases, i.e. code that you did not write."),(0,a.kt)("li",{parentName:"ul"},"Bug detection: It makes it easier to detect programming bugs."),(0,a.kt)("li",{parentName:"ul"},"Facilitating Clean Code: Strict Mode helps you become a better React developer. It assists the developer in writing cleaner code by instilling the habit of writing code that follows React's best practices.")),(0,a.kt)("h2",{id:"features-of-react-strict-mode"},"Features of React Strict Mode"),(0,a.kt)("p",null,"In this section, you will learn about the current features of StrictMode, which include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identifying components with unsafe lifecycles in React."),(0,a.kt)("li",{parentName:"ul"},"Warning about Legacy String Ref API usage."),(0,a.kt)("li",{parentName:"ul"},"Warning about deprecated findDOMNode usage."),(0,a.kt)("li",{parentName:"ul"},"Detecting unexpected side effects."),(0,a.kt)("li",{parentName:"ul"},"Detecting legacy context API."),(0,a.kt)("li",{parentName:"ul"},"Ensuring a reusable state.")),(0,a.kt)("h3",{id:"identifying-components-with-unsafe-lifecycles-in-react"},"Identifying components with unsafe lifecycles in React"),(0,a.kt)("p",null," Legacy components such as componentWillMount, componentWillReceiveProps, and componentWillUpdate have been discovered to cause unhealthy code practices in React. When misused in asynchronous React applications, they produce undesirable results. As a result, React developers decided to prefix these lifecycles with UNSAFE_ in future releases."),(0,a.kt)("p",null,"As an improvement, React Strict Mode will now detect and warn the developer whenever these lifecycles are used. Furthermore, React Strict Mode inspects third-party packages in the development environment and can notify the user if these packages use deprecated dependencies."),(0,a.kt)("h3",{id:"warning-about-legacy-string-ref-api-usage"},"Warning About Legacy String Ref API Usage"),(0,a.kt)("p",null,"Due to difficulties in passing refs to child components and issues with referencing the names of created Refs, the use of the String Ref in React, which was previously acceptable in previous versions, now has a warning in Strict Mode. Strict Mode warns developers, instructing them to use Callback refs or React.createRef as best practices."),(0,a.kt)("h3",{id:"warning-about-deprecated-finddomnode-usage"},"Warning about deprecated findDOMNode usage"),(0,a.kt)("p",null,"FindDOMNode was a React feature designed to search the DOM node tree for a specific class interface. A refactoring issue caused by the FindDOMNode approach was that the parent component needed to be aware of their child's implementation details to return the appropriate child. Another issue was that FindDOMNode did not reflect changes in the state of node elements."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h3",{id:"detecting-unexpected-side-effects"},"Detecting Unexpected Side Effects"),(0,a.kt)("p",null,"Due to the Strict Mode practice of double invoking function routines, functions can scrutinise their results to ensure they are pure and produce the desired results whenever the functions run. As a result, if a side effect occurs erroneously during the function render process, it can easily be detected and traced in Development Mode due to visible inconsistencies in the program\u2019s output. "),(0,a.kt)("h3",{id:"detecting-legacy-context-api"},"Detecting Legacy Context API"),(0,a.kt)("p",null,"StrictMode now highlights the use of the old Context API, prompting the user to upgrade to a higher version, as the Legacy Context API will be discontinued in future React releases. "),(0,a.kt)("h3",{id:"ensuring-a-reusable-state"},"Ensuring a reusable state"),(0,a.kt)("p",null,"In future versions, the React Strict Mode aims to prevent state loss caused by component mounts and dismounts. This feature improves performance by retaining and restoring application states when dismounted components are mounted back into the component tree."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, you learned about the React Strict Mode, its similarities to the JavaScript \u201cuse strict\u201d expression, and the enormous benefits and features of the React Strict Mode."))}f.isMDXComponent=!0}}]);