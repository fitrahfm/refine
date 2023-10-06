"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),g=l(n),u=a,d=g["".concat(s,".").concat(u)]||g[u]||m[u]||r;return n?i.createElement(d,o(o({ref:t},h),{},{components:n})):i.createElement(d,o({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>m});n(67294);var i=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",slug:"git-switch-and-git-checkout",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/social.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/blog/git-switch-and-git-checkout",source:"@site/blog/2022-12-20-git-switch.md",title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",date:"2022-12-20T00:00:00.000Z",formattedDate:"December 20, 2022",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:7.385,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",slug:"git-switch-and-git-checkout",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/social.png",hide_table_of_contents:!1},prevItem:{title:"rem vs em - Everything you need to know",permalink:"/blog/rem-vs-em"},nextItem:{title:"How to use Material UI Checkbox",permalink:"/blog/material-ui-checkbox-component"},relatedPosts:[{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",permalink:"/blog/docker-run-command",formattedDate:"June 24, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.875,date:"2023-06-24T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",description:"We'll compare both in terms of features, pros, and cons and in which scenario you should prefer one over another.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"May 25, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:12.89,date:"2023-05-25T00:00:00.000Z"},{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",permalink:"/blog/what-is-esbuild",formattedDate:"November 3, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.04,date:"2022-11-03T00:00:00.000Z"}],authorPosts:[{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",permalink:"/blog/what-is-esbuild",formattedDate:"November 3, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.04,date:"2022-11-03T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",description:"We'll compare both in terms of features, pros, and cons and in which scenario you should prefer one over another.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"May 25, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:12.89,date:"2023-05-25T00:00:00.000Z"},{title:"How to use Docker Build Args and Environment Variables",description:"A guide for using Docker Build Args to Configure Image Builds",permalink:"/blog/docker-build-args-and-env-vars",formattedDate:"September 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.255,date:"2022-09-28T00:00:00.000Z"}]},h={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Using git checkout to switch branches",id:"using-git-checkout-to-switch-branches",level:2},{value:"Switch to an existing branch",id:"switch-to-an-existing-branch",level:3},{value:"Switch to a new branch",id:"switch-to-a-new-branch",level:3},{value:"Switching to a remote branch",id:"switching-to-a-remote-branch",level:3},{value:"Using git switch vs git checkout",id:"using-git-switch-vs-git-checkout",level:2},{value:"Why git switch was needed?",id:"why-git-switch-was-needed",level:3},{value:"Difference between git checkout and git reset",id:"difference-between-git-checkout-and-git-reset",level:2},{value:"Difference between git checkout and git restore",id:"difference-between-git-checkout-and-git-restore",level:2},{value:"Difference between git checkout and git Clone",id:"difference-between-git-checkout-and-git-clone",level:2}],g=(u="BannerRandom",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var u;const d={toc:m};function p(e){var{components:t}=e,n=o(e,["components"]);return(0,i.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"When working on a project, you usually work on more than one branch at a time. You also switch branches frequently based on priorities. Efficient branch switching is important to safely switch from one branch and commit your changes to the desired branch. The most famous command for switching branches has always been ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," however the newer versions of Git divided its features into specific commands. Today, we will go through different use cases and examples for using ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"git switch"),". We will also go through some of the similar commands of Git. After reading this article, you will have strong knowledge of how to switch branches in Git and what are its companion commands. "),(0,i.kt)("p",null,"Note that the command ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," is a multi-feature command which performs multiple functions like:"),(0,i.kt)("p",null,"\u2022   If it is a local branch or an explicit remote branch, it will switch to it\n\u2022   If it is a tracked path, reset it\n\u2022   If it is a remote branch, it will create a tracking branch and will switch to it\nLet's go through some examples of switching branches through ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout"),", and then we will touch upon the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"git switch"),". "),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-git-checkout-to-switch-branches"},"Using git checkout to switch branches"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#switch-to-an-existing-branch"},"Switch to an existing branch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#switch-to-a-new-branch"},"Switch to a new branch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#switching-to-a-remote-branch"},"Switching to a remote branch")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-git-switch-vs-git-checkout"},"Using git switch vs git checkout"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-git-switch-was-needed"},"Why git switch was needed?")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#difference-between-git-checkout-and-git-reset"},"Difference between git checkout and git reset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#difference-between-git-checkout-and-git-restore"},"Difference between git checkout and git restore")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#difference-between-git-checkout-and-git-clone"},"Difference between git checkout and git Clone"))),(0,i.kt)("h2",{id:"using-git-checkout-to-switch-branches"},"Using git checkout to switch branches"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," command allows you to navigate between different branches created through the command ",(0,i.kt)("inlineCode",{parentName:"p"},"git branch"),". When you checkout a branch, it updates all the files in your working directory to match the version stored in that branch. It also informs Git to preserve all the new commits on that branch. "),(0,i.kt)("p",null,"Let's try different versions of ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," command. "),(0,i.kt)("h3",{id:"switch-to-an-existing-branch"},"Switch to an existing branch"),(0,i.kt)("p",null,"First, get the list of the branches through ",(0,i.kt)("inlineCode",{parentName:"p"},"git branch")),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image1.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("p",null,'The "*" shows your currently selected branch, which is "test_branch". Now let\'s switch to BranchB. '),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image2.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"To confirm the successful branch switch, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"git branch")," and you will see that your current branch is now BranchB"),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image3.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"switch-to-a-new-branch"},"Switch to a new branch"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout"),' command also comes with a "-b" argument which creates a new branch and automatically switches to it. Let\'s try it. '),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image4.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"The above example shows that the new branch created is the currently selected branch as well.\nWhen switching branch using ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," you might see an error as below. "),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image5.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"The above error appears when you have changed a file, and the branch that you are switching to also has changes for the same file too (from the latest merge point). Git will not allow switching branch until you do one of the following:"),(0,i.kt)("p",null,"\u2022   Use stash to locally stash your changes temporarily without commit\n\u2022   Force checkout, which will discard your local changes\n\u2022   Commit your changes, and then update this commit with extra changes (you can modify commits in Git until they are pushed)"),(0,i.kt)("h3",{id:"switching-to-a-remote-branch"},"Switching to a remote branch"),(0,i.kt)("p",null,"To checkout a remote branch, you will need to fetch the contents of the branch using ",(0,i.kt)("inlineCode",{parentName:"p"},"git fetch \u2013all")," first. Then use the same command ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout RemoteBranchName")," to switch to remote branch. You might have noticed that it is the same command used to switch to a local branch. "),(0,i.kt)("p",null,"If you want to switch to a remote branch that does not exist as local branch in your local working directory, you can simply execute ",(0,i.kt)("inlineCode",{parentName:"p"},"git switch remoteBranch"),". When Git is unable to find this branch in your local repository, it will assume that you want to checkout the respective remote branch with the same name. It will then create a local branch with the same name. It will also set up a tracking relationship between your remote and local branch so that ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"git push")," will work as intended. "),(0,i.kt)("h2",{id:"using-git-switch-vs-git-checkout"},"Using git switch vs git checkout"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"git switch")," command replaced ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," in 2020, although ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," is still a supported command. The ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout"),' command performs two functionalities; "switch branch" and "restore working tree files". To separate these two functionalities, Git introduced the ',(0,i.kt)("inlineCode",{parentName:"p"},"git switch"),' command, which replaces the "switch branch" feature of "git checkout". '),(0,i.kt)("h3",{id:"why-git-switch-was-needed"},"Why git switch was needed?"),(0,i.kt)("p",null,'Let\'s assume you have a file named "test.txt" and at the same time, you have a branch named "test". If you are on master branch and you want to checkout to branch "test", you would use the command "git checkout test" but this would checkout the file "test", this is where ',(0,i.kt)("inlineCode",{parentName:"p"},"git switch")," comes in. "),(0,i.kt)("p",null,"\u2022   ",(0,i.kt)("inlineCode",{parentName:"p"},"git switch test"),' will switch to branch "test" even if you have a file "test"\n\u2022   ',(0,i.kt)("inlineCode",{parentName:"p"},"git restore"),' will discard uncommitted local changes in the file "test" even if you have a branch "test".'),(0,i.kt)("p",null,"Let's try this command. "),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image6.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"The above command works just the same way ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," switched branches.\nSwitching to a branch that does not exist will throw an error:"),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image7.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"To create a new branch and switch to it in one go, try the following example:"),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image8.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"To verify, just run the ",(0,i.kt)("inlineCode",{parentName:"p"},"git branch")," command to see if your current branch has been successfully switched to the newly created branch. "),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image9.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Another interesting argument of this command is ",(0,i.kt)("inlineCode",{parentName:"p"},"git switch -"),". If you have to frequently switch between two branches and typing the branch name every time is cumbersome, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"git switch -")," version, which switches to the previously checked out branch. Let's try. "),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image10.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"difference-between-git-checkout-and-git-reset"},"Difference between git checkout and git reset"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"git reset")," moves the current branch reference, whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," just moves the head instead of the current branch reference.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," resets the index without changing the working tree. The below example will reset the index to match HEAD, without touching the working tree:"),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image11.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Note that you will use reset to undo the staging of a modified file.\n",(0,i.kt)("inlineCode",{parentName:"p"},"checkout")," is mostly used with a branch, tag, or commit. It will reset HEAD and index to a specified commit, as well as perform the checkout of the index into the working tree at the same time. It is mostly used to discard the changes to your unstaged file(s). "),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image12.png",alt:"git switch"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"If your HEAD is currently set to the master branch, running ",(0,i.kt)("inlineCode",{parentName:"p"},"git reset 8e3f6r5"),' will point the master to "9e5e6a4". ',(0,i.kt)("inlineCode",{parentName:"p"},"Checkout")," on the other hand, changes the head itself. "),(0,i.kt)("hr",null),(0,i.kt)(g,{mdxType:"BannerRandom"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"difference-between-git-checkout-and-git-restore"},"Difference between git checkout and git restore"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git restore")," was introduced when the functionality of ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," was broken into two separate commands ",(0,i.kt)("inlineCode",{parentName:"p"},"git switch")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"git restore"),". Apart from switching branches, ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," can also restore files to a specific commit state. This latter functionality has been extracted into ",(0,i.kt)("inlineCode",{parentName:"p"},"git restore"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git restore")," restores the files in the working tree from index or any other commit you specify. You can also use it to restore files in index from some other commit. Note that it does not update your branch. You would use ",(0,i.kt)("inlineCode",{parentName:"p"},"git restore")," to revert non-committed changes. These changes can be in the form of the update in your working copy or the content in your index (i.e. staging area). "),(0,i.kt)("p",null,'The below command will restore "test.txt" in the index so that it matches the version in HEAD. Basically, you are telling Git to copy from HEAD to staging area / index, which is how Git reset works.\n',(0,i.kt)("inlineCode",{parentName:"p"},"git restore --staged test.txt")),(0,i.kt)("p",null,"If you want to restore both index and the working tree, then you would use the following version:\n",(0,i.kt)("inlineCode",{parentName:"p"},"git restore --source=HEAD --staged --worktree test.txt ")),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,i.kt)("h2",{id:"difference-between-git-checkout-and-git-clone"},"Difference between git checkout and git Clone"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git clone")," is used to fetch repositories you do not have. It will fetch your repositories from the remote git server. ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," is a powerful command with different uses, like switching branches in your current repository and restoring files file from a particular revision."))}p.isMDXComponent=!0}}]);