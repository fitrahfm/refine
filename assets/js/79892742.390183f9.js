"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78876],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>d});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function p(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var u=r.createContext({}),l=function(t){var e=r.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,i=t.originalType,u=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),y=l(o),d=n,m=y["".concat(u,".").concat(d)]||y[d]||s[d]||i;return o?r.createElement(m,a(a({ref:e},c),{},{components:o})):r.createElement(m,a({ref:e},c))}));function d(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=o.length,a=new Array(i);a[0]=y;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:n,a[1]=p;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},31030:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>s});o(67294);var r=o(3905);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})),t}function a(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}const p={id:"store-your-repository",title:"5. Store your repository online",tutorial:{prev:"tutorial/getting-started/{preferredUI}/generate-crud-pages",next:"tutorial/getting-started/deploy-project"}},u=void 0,l={unversionedId:"tutorial/getting-started/store-your-repository",id:"version-3.xx.xx/tutorial/getting-started/store-your-repository",title:"5. Store your repository online",description:"In this tutorial, we will use GitHub to store and manage our repository, and to connect to a web host. If you prefer to use a different online git provider, feel free to do so.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/4-store-your-repository.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/store-your-repository",permalink:"/docs/3.xx.xx/tutorial/getting-started/store-your-repository",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/4-store-your-repository.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1698397567,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:4,frontMatter:{id:"store-your-repository",title:"5. Store your repository online",tutorial:{prev:"tutorial/getting-started/{preferredUI}/generate-crud-pages",next:"tutorial/getting-started/deploy-project"}}},c={},s=[{value:"Create a repository on GitHub",id:"create-a-repository-on-github",level:2},{value:"Commit your local code to GitHub",id:"commit-your-local-code-to-github",level:2},{value:"See your project on GitHub",id:"see-your-project-on-github",level:2}],y=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},d=y("Checklist"),m=y("ChecklistItem"),f={toc:s};function g(t){var{components:e}=t,o=a(t,["components"]);return(0,r.kt)("wrapper",i(function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),r.forEach((function(e){n(t,e,o[e])}))}return t}({},f,o),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we will use GitHub to store and manage our repository, and to connect to a web host. If you prefer to use a different online git provider, feel free to do so."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are already proficient in git and have your own preferred workflow, you can create a new GitHub repository for your project using your method of choice. Once you have done so, you can move on to the next page: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/deploy-project"},'"Deploy your app to the Web"'),".")),(0,r.kt)("h2",{id:"create-a-repository-on-github"},"Create a repository on GitHub"),(0,r.kt)("p",null,"To create a repository on GitHub, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub.com")," and log in with your account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click the plus icon in the top right corner of the page and select "New repository".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name for your repository and a brief description (optional).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose whether you want your repository to be public or private.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click "Create repository".'))),(0,r.kt)("p",null,"For more detailed instructions and options, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/create-a-repo"},"GitHub documentation"),"."),(0,r.kt)("h2",{id:"commit-your-local-code-to-github"},"Commit your local code to GitHub"),(0,r.kt)("p",null,"After you have created a repository on GitHub, you will need to commit your local code to the repository. This will allow you to store and manage your project's code on GitHub."),(0,r.kt)("p",null,"To commit your code to GitHub, you will need to use git commands in the terminal. If you are not familiar with git, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/docs"},"git documentation")," or follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to your project directory in the terminal.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect your local repository to the remote repository on GitHub by running the command ",(0,r.kt)("inlineCode",{parentName:"p"},"git remote add origin <url>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<url>")," is the URL of your GitHub repository.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add your changes to the staging area by running the command ",(0,r.kt)("inlineCode",{parentName:"p"},"git add ."),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Commit your changes by running the command ",(0,r.kt)("inlineCode",{parentName:"p"},'git commit -m "Initial commit"'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Push your changes to GitHub by running the command ",(0,r.kt)("inlineCode",{parentName:"p"},"git push -u origin master"),"."))),(0,r.kt)("p",null,"For more detailed instructions and options, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git"},"GitHub documentation"),"."),(0,r.kt)("h2",{id:"see-your-project-on-github"},"See your project on GitHub"),(0,r.kt)("p",null,"To confirm that your project has been successfully stored on GitHub, go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub.com")," and navigate to your list of repositories. Select the new repository you created, and verify that it contains your project files."),(0,r.kt)(d,{mdxType:"Checklist"},(0,r.kt)(m,{id:"store-your-repo",mdxType:"ChecklistItem"},"I created a repository on GitHub."),(0,r.kt)(m,{id:"store-your-repo-2",mdxType:"ChecklistItem"},"I uploaded my project to GitHub.")))}g.isMDXComponent=!0}}]);