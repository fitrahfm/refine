"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,p(p({ref:t},c),{},{components:n})):a.createElement(h,p({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<r;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>m});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"React Props Explained with Examples",description:"A detailed guide on React props with examples",slug:"react-props",authors:"chidume_nnamdi",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-16-react-props/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/react-props",source:"@site/blog/2022-11-16-react-props.md",title:"React Props Explained with Examples",description:"A detailed guide on React props with examples",date:"2022-11-16T00:00:00.000Z",formattedDate:"November 16, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:11.025,hasTruncateMarker:!1,authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],frontMatter:{title:"React Props Explained with Examples",description:"A detailed guide on React props with examples",slug:"react-props",authors:"chidume_nnamdi",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-16-react-props/social.png",hide_table_of_contents:!1},prevItem:{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design"},nextItem:{title:"How to use JavaScript Ternary Operator?",permalink:"/blog/javascript-ternary-operator"},relatedPosts:[{title:"How to create React draggable components with react-dnd",description:"We'll be using the react-dnd library to create draggable components in React.",permalink:"/blog/react-draggable-components-with-react-dnd",formattedDate:"March 7, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:20.1,date:"2023-03-07T00:00:00.000Z"},{title:"Svelte vs React Comparison",description:"We will compare the optimal performance of React and Svelte",permalink:"/blog/svelte-vs-react",formattedDate:"December 8, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.3,date:"2022-12-08T00:00:00.000Z"},{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"November 24, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:6.98,date:"2022-11-24T00:00:00.000Z"}],authorPosts:[{title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",permalink:"/blog/astro-js-guide",formattedDate:"June 12, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.27,date:"2023-06-12T00:00:00.000Z"},{title:"Top React Admin Templates 2023",description:"We have compiled a list of the top 5 React admin templates that are currently available on the market.",permalink:"/blog/react-admin-template",formattedDate:"March 22, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:7.775,date:"2023-03-22T00:00:00.000Z"},{title:"Svelte vs React Comparison",description:"We will compare the optimal performance of React and Svelte",permalink:"/blog/svelte-vs-react",formattedDate:"December 8, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.3,date:"2022-12-08T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"\xa0Introduction",id:"introduction",level:2},{value:"Props in React",id:"props-in-react",level:2},{value:"Passing Array to React Component",id:"passing-array-to-react-component",level:2},{value:"Passing Function to React Component",id:"passing-function-to-react-component",level:2},{value:"Default Props in React",id:"default-props-in-react",level:2},{value:"React children prop",id:"react-children-prop",level:2},{value:"State vs Props",id:"state-vs-props",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const h={toc:m};function k(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"\xa0Introduction"),(0,a.kt)("p",null,"React.js is the backbone of modern web development. Almost all companies use it. This is because React is easy to install and use, has strong community support, and is still actively maintained by Facebook."),(0,a.kt)("p",null,"It has a plethora of simple features that made it incredibly powerful. One of those features is Props, and we are going to learn what it is in this article."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#props-in-react"},"Props in React")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#passing-array-to-react-component"},"Passing Array to React Component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#passing-function-to-react-component"},"Passing Function to React Component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#default-props-in-react"},"Default Props in React")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#react-children-prop"},"React children prop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#state-vs-props"},"State vs Props"))),(0,a.kt)("p",null,"Props in simple terms are used for communication among components in React app. Component communication is a very essential feature that any framework based on component-driven design should have. Most popular frameworks like Angular and Vuejs have their own way of components passing data to each other."),(0,a.kt)("p",null,"In a component-drive framework, every single unit of the UI is made up of components. Now, each of these components might need to communicate data among themselves, so you see that this becomes a necessity to have in frameworks.\nFor example, we have the below components"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Root\n\n|\nv\nCompA CompB\n    \n|      |\nv      v\nCompC CompD\n   \n")),(0,a.kt)("p",null,"The Root component is root of the component tree, it renders the components CompA and CompB. They in turn render CompC and CompD. Let's say that CompD needs data to render and the data comes from CompB, we see that CompB must pass that data to CompD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Root\n    \n|\nv\nCompA CompB\n    \n|      | dataToRender: 90\nv      v\nCompC CompD  \n")),(0,a.kt)("p",null,"On the other hand, we might need to send data upward from a child to a parent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Root\n\n|\nv\nCompA CompB\n        ^\n|      | |dataToRender: 90\nv      v\nCompC CompD\n")),(0,a.kt)("h2",{id:"props-in-react"},"Props in React"),(0,a.kt)("p",null,"Props are the main backbone of Reactjs, it is one of the basic features that made Reactjs awesome and powerful. Props in Reactjs are used for one-way and bidirectional way communication in Reactjs components."),(0,a.kt)("p",null,"Think of props as arguments to functions. Functions in JS are a group of codes that perform a task. We can have a function that returns the summation of ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function sum() {\n  return 1 + 2;\n}\n")),(0,a.kt)("p",null,"This function returns the summation of 1 and 2. We can make this function to be flexible enough not to sum only 1 and 2 but to sum any two numbers. We will make it to accept two arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function sum(firstNumber, secondNumber) {\n  return firstNumber + secondNumber;\n}\n")),(0,a.kt)("p",null,"Here, now we can add two numbers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"sum(1, 2); // 3\nsum(90, 23); // 113\n")),(0,a.kt)("p",null,"We are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"sum"),' function passing to it what we need it to work with.\nThis is the same concept as "props" in React components. Components in React are JavaScript functions and ES6 classes. The arguments we pass to functions are now "props" in React Components.'),(0,a.kt)("p",null,"React Components written as functions are known as Functional Components. While the ES6 components are known as Class Components."),(0,a.kt)("p",null,"Functional Components are basically JavaScript functions. Let's see an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function FunctionalComponent() {\n  return <div>Hello</div>;\n}\n")),(0,a.kt)("p",null,"We can now render it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<FunctionalComponent />\n")),(0,a.kt)("p",null,"Very simple."),(0,a.kt)("p",null,"Now, to pass props to a React Component, we pass them like attributes on an HTML element:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'<img src="./image.jpg" width="120" height="90" />\n')),(0,a.kt)("p",null,"The attributes here are ",(0,a.kt)("inlineCode",{parentName:"p"},"src"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"width"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"height"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"img")," uses them to render an image. So these attributes are just like passing arguments to a function."),(0,a.kt)("p",null,"So similar to the thing we do on a React component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'<ReactComponent data1="Hi" data2={20} />\n')),(0,a.kt)("p",null,"The props here in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactComponent")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"data1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"data2"),". So, the question is how do we get to access and use them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactComponent"),'?\nNow, React gathers all the "attributes" in the Component and adds them to an argument object it passes to the Component it is being rendered.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function ReactComponent(props) {}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," argument is an argument that React passes to its Components when they are being rendered(and updated too). The name is not just to be ",(0,a.kt)("inlineCode",{parentName:"p"},"props"),", it can be anything. I was following naming conventions, the ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," name tells us it's a prop/property passed to the Component."),(0,a.kt)("p",null,'So, the "attributes" passed to the ',(0,a.kt)("inlineCode",{parentName:"p"},"ReactComponent")," can be accessed as properties in the ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," argument. As we said before the ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," argument is an object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'function ReactComponent(props) {\n  typeof props; // "object"\n  return null;\n}\n')),(0,a.kt)("p",null,"Now, we can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"data1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"data2")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"props")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ReactComponent(props) {\n  const data1 = props.data1;\n  const data2 = props.data2;\n  return null;\n}\n")),(0,a.kt)("p",null,"We can display the props:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function ReactComponent(props) {\n  const data1 = props.data1;\n  const data2 = props.data2;\n  return (\n    <div>\n      <span>Data 1: {data1}</span>\n      <span>Data 2: {data2}</span>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"We can convert our first example of the ",(0,a.kt)("inlineCode",{parentName:"p"},"sum")," function as a React Component. This is it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function Sum() {\n  return <div>{1 + 2}</div>;\n}\n")),(0,a.kt)("p",null,"We render it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<Sum />;\n\n// <div>3</div>\n")),(0,a.kt)("p",null,"Let's make accept two numbers to sum and then display the result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function Sum(props) {\n  const firstNumber = +props.firstnumber;\n  const secondNumber = +props.secondnumber;\n\n  const result = firstNumber + secondNumber;\n\n  return (\n    <div>\n      <span>\n        Summing {firstNumber} and {secondNumber}{" "}\n      </span>\n      <span>{result}</span>\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"From this, we know now that we will pass the numbers we want to sum to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sum")," component in ",(0,a.kt)("inlineCode",{parentName:"p"},"firstNumber")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secondNumber")," props."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//let's display the summation of 1 and 2:\n\n<Sum firstNumber={1} secondNumber={2} />;\n")),(0,a.kt)("p",null,"The display will be this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<div>\n  <span> Summing 1 and 2 </span>\n  <span>3</span>\n</div>;\n")),(0,a.kt)("p",null,"We can pass any data type as props in React components: object, array, boolean, number, string, function, etc."),(0,a.kt)("p",null,"Object"),(0,a.kt)("p",null,"Yes, it is possible to pass objects to React components. Let's say you have the below object in a parent component and want to pass it to a child component so it can display the object's property values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const user = {\n  id: 0,\n  name: "Chidume Nnamdi",\n  age: 54,\n};\n\n')),(0,a.kt)("p",null,"We pass it to the component like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<DisplayUser user={user} />\n")),(0,a.kt)("p",null,"Very simple."),(0,a.kt)("p",null,"Now, we can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," prop in the ",(0,a.kt)("inlineCode",{parentName:"p"},"DisplayUser")," component in the ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function DisplayUser(props) {\n  const user = props.user;\n\n  return (\n    <div>\n      <p>\n        Name: <span>{user.name}</span>\n      </p>\n      <p>\n        Age: <span>{user.age}</span>\n      </p>\n    </div>\n  );\n}\n")),(0,a.kt)("hr",null),(0,a.kt)(u,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"passing-array-to-react-component"},"Passing Array to React Component"),(0,a.kt)("p",null,'Let\'s see how to pass an array to React components via "props".'),(0,a.kt)("p",null,"Let's say we have this array of users:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const users = [\n  {\n    id: 0,\n    name: "Chidume Nnamdi",\n    age: 54,\n  },\n  {\n    id: 1,\n    name: "Karim",\n    age: 24,\n  },\n  {\n    id: 2,\n    name: "Bruno",\n    age: 45,\n  },\n  {\n    id: 3,\n    name: "Ola Brown",\n    age: 24,\n  },\n];\n')),(0,a.kt)("p",null,"We have a component that displays a list of users. We want this component to receive an array of users via a ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," props. We pass the array to it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<DisplayUsers users={users} />\n")),(0,a.kt)("p",null,"Now, let's get the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," object and display the users."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function DisplayUsers(props) {\n  const users = props.users;\n\n  return (\n    <div>\n      {users.map((user) => (\n        <div>\n          <p>\n            Name: <span>{user.name}</span>\n          </p>\n          <p>\n            Age: <span>{user.age}</span>\n          </p>\n        </div>\n      ))}\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"Yes, simple."),(0,a.kt)("h2",{id:"passing-function-to-react-component"},"Passing Function to React Component"),(0,a.kt)("p",null,"This may seem a bit complex, but yes, we can actually pass a function via props to a component."),(0,a.kt)("p",null,"Most function props are used to communicate data from a child component to a parent component. If you delve deep into Angular that's what it uses under the hood in its ",(0,a.kt)("inlineCode",{parentName:"p"},"@Output")," decorator to pass data from child component to parent component."),(0,a.kt)("p",null,"Let's see a simple example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function func() {\n console.log("Yes, I am a function");\n}\n')),(0,a.kt)("p",null,"Now, we can pass this function to a component, by setting its name as the value in props on a component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<Component funcProp={func} />\n")),(0,a.kt)("p",null,"Now, we can get this function in ",(0,a.kt)("inlineCode",{parentName:"p"},"funcProp")," in the props argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function Component(props) {\n  const funcProp = props.funcProp;\n  funcProp();\n  return null;\n}\n")),(0,a.kt)("p",null,"We will see ",(0,a.kt)("inlineCode",{parentName:"p"},"Yes, I am a function")," in our Console tab."),(0,a.kt)("h2",{id:"default-props-in-react"},"Default Props in React"),(0,a.kt)("p",null,"Default props are props that the Component will fall back to when the props are not passed to the component."),(0,a.kt)("p",null,"Think of default props as default values set on an argument in a function."),(0,a.kt)("p",null,"Let's say we have this function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function concat(str1, str2) {\n  return str1 + str2;\n}\n")),(0,a.kt)("p",null,"Let's say we call the function passing only one param for the ",(0,a.kt)("inlineCode",{parentName:"p"},"str1"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'concat("Hello");\n')),(0,a.kt)("p",null,"The second argument ",(0,a.kt)("inlineCode",{parentName:"p"},"str2")," will be undefined and will get this result: ",(0,a.kt)("inlineCode",{parentName:"p"},"Helloundefined"),". This is a bad result, we don't want ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," concatenated in our string if any of the arguments are missing. If any of the arguments are missing the only argument available should be concatenated with an empty string. So to do this we will set a default value to the ",(0,a.kt)("inlineCode",{parentName:"p"},"str2")," like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function concat(str1, str2 = "") {\n  return str1 + str2;\n}\n')),(0,a.kt)("p",null,"So now this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'concat("Hello");\n')),(0,a.kt)("p",null,"will return this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hello\n")),(0,a.kt)("p",null,"We can also set the default value on the ",(0,a.kt)("inlineCode",{parentName:"p"},"str1")," in case no arguments are passed when the function is called:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function concat(str1 = "", str2 = "") {\n  return str1 + str2;\n}\nconcat();\n// ""\n')),(0,a.kt)("p",null,"This is exactly what default props are all about. Let's say that this is our ",(0,a.kt)("inlineCode",{parentName:"p"},"DisplayUser")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function DisplayUser(props) {\n  const user = props.user;\n\n  return (\n    <div>\n      <p>\n        Name: <span>{user.name}</span>\n      </p>\n      <p>\n        Age: <span>{user.age}</span>\n      </p>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"That, we did not pass any ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," object to it via its ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," props."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<DisplayUser />\n")),(0,a.kt)("p",null,"This will throw an error and will probably crash the application. So you see because of missing props the whole application went down. This is where default props come in to help."),(0,a.kt)("p",null,"Let's set default props on ",(0,a.kt)("inlineCode",{parentName:"p"},"DisplayUser")," component. This is done by using the static property ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultProps"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function DisplayUser(props) {\n  //...\n}\n")),(0,a.kt)("p",null,"Inside this object, we will set the default values of the props in the ",(0,a.kt)("inlineCode",{parentName:"p"},"DisplayUser")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'DisplayUser.defaultProps = {\n  user: {\n    name: "",\n    age: 0,\n  },\n};\n')),(0,a.kt)("p",null,"To see that we set the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," props inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultProps")," object. This is will be the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," props when it is not passed to the component."),(0,a.kt)("p",null,"Let's see it in action:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<>\n  <DisplayUser />\n  <div>\n    <p>\n      Name: <span></span>\n    </p>\n    <p>\n      Age: <span>0</span>\n    </p>\n  </div>\n</>;\n")),(0,a.kt)("p",null,"The application didn't crash this time."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"react-children-prop"},"React children prop"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," prop is a special prop passed by React itself to components. This ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," contains the child node of a component. Let's see an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<DisplayUser user={user}>\n  <>\n    <Hello />\n    <div>I am a child</div>\n  </>\n</DisplayUser>;\n")),(0,a.kt)("p",null,"We see that we have some elements rendered in between the ",(0,a.kt)("inlineCode",{parentName:"p"},"DisplayUser")," component. "),(0,a.kt)("p",null,"These elements are passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"DisplayUser")," component in the ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function DisplayUser(props) {\n const user = props.user;\n const children = props.children;\n\n return ( // )\n}\n")),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," is a React Fiber Node that renders the element in between a component's tag. Let's render the child elements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function DisplayUser(props) {\n  const user = props.user;\n  const children = props.children;\n\n  return (\n    <div>\n      <p>\n        Name: <span>{user.name}</span>\n      </p>\n      <p>\n        Age: <span>{user.age}</span>\n      </p>\n      {children}\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"This will render this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<div>\n <p>\n   Name: <span>{user.name}</span>\n </p>\n <p>\n   Age: <span>{user.age}</span>\n </p>\n <div>Hello</div>\n <div>I am a child</div>\n</div>;\n\n")),(0,a.kt)("h2",{id:"state-vs-props"},"State vs Props"),(0,a.kt)("p",null,"We have learned deep down what props are. Now, people often tend to confuse props with the state in React components. They differ completely, let's see their differences."),(0,a.kt)("p",null,"Props as we know are passed to components, and from one component to another. State on the other hand is not passed from one component to the other, it is passed within the component only. The state is local data used and maintained by one component only. Two components cannot use or maintain one state."),(0,a.kt)("p",null,"Props are immutable, which means that they cannot be modified. Once a props is passed to a component, that component cannot change the value of the props. State on the reverse is mutable. States can be changed at will in the component."),(0,a.kt)("p",null,"So props are read-only while states are read-and-write.\nProps are used for communication uni-directional or bi-directional, while the state is used to render dynamic data in the component."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We have learned a great lot from this article.\nWe started by introducing the concept of component-driven design in JS frameworks and components communication in them. From there, we introduced Props in React and learned about these basic concepts."),(0,a.kt)("p",null,"Next, we learned examples of how to use props, and how to access them from the components. We learned also how to pass other data types(object, array, function, etc) via props to components. Next, we learned about default props and ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," props, how they work, and all that. Finally, we saw the comparison between state and props in React."))}k.isMDXComponent=!0}}]);