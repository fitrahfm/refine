"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31691],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var s=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,s,i=function(e,t){if(null==e)return{};var a,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=s.createContext({}),h=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return s.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=h(a),u=i,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||n;return a?s.createElement(d,o(o({ref:t},c),{},{components:a})):s.createElement(d,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var h=2;h<n;h++)o[h]=a[h];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},59297:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var s=a(87462),i=(a(67294),a(3905));const n={title:"git stash - Save the Uncommitted Changes Locally",description:"We will take a look the examples of using git stash command",slug:"git-stash",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-02-git-stash/social.png",hide_table_of_contents:!1},o=void 0,r={permalink:"/blog/git-stash",source:"@site/blog/2022-12-02-git-stash.md",title:"git stash - Save the Uncommitted Changes Locally",description:"We will take a look the examples of using git stash command",date:"2022-12-02T00:00:00.000Z",formattedDate:"December 2, 2022",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:7.73,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"git stash - Save the Uncommitted Changes Locally",description:"We will take a look the examples of using git stash command",slug:"git-stash",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-02-git-stash/social.png",hide_table_of_contents:!1},prevItem:{title:"A Guide on React Lazy Loading",permalink:"/blog/react-lazy-loading"},nextItem:{title:"How to use Material UI Tooltip",permalink:"/blog/material-ui-tooltip-component"},relatedPosts:[{title:"How to Install and Use NVM?",permalink:"/blog/install-nvm-mac-and-windows",formattedDate:"November 9, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:7.49,date:"2022-11-09T00:00:00.000Z"},{title:"git switch and git checkout \u2013 How to switch branches in git",permalink:"/blog/git-switch-and-git-checkout",formattedDate:"December 20, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.44,date:"2022-12-20T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",permalink:"/blog/kubernetes-vs-docker",formattedDate:"May 25, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:12.945,date:"2023-05-25T00:00:00.000Z"}],authorPosts:[{title:"How to Use Docker Copy Command",permalink:"/blog/docker-copy",formattedDate:"December 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.185,date:"2022-12-28T00:00:00.000Z"},{title:"How to Use Docker EntryPoint",permalink:"/blog/docker-entrypoint",formattedDate:"January 10, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.175,date:"2023-01-10T00:00:00.000Z"},{title:"git diff - Comparing Changes in Git",permalink:"/blog/git-diff-command",formattedDate:"May 12, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.99,date:"2023-05-12T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},h=[{value:"What is Git stash",id:"what-is-git-stash",level:2},{value:"Why do we need Git stash",id:"why-do-we-need-git-stash",level:2},{value:"Switching between branches",id:"switching-between-branches",level:3},{value:"Pull latest remote changes",id:"pull-latest-remote-changes",level:3},{value:"How to use Git stash",id:"how-to-use-git-stash",level:2},{value:"Git stash vs commit",id:"git-stash-vs-commit",level:2},{value:"Git stash vs reset",id:"git-stash-vs-reset",level:2},{value:"Git stash vs stage",id:"git-stash-vs-stage",level:2},{value:"Create a Git stash with a name",id:"create-a-git-stash-with-a-name",level:2},{value:"Stash untracked files",id:"stash-untracked-files",level:2},{value:"Create branch from stash",id:"create-branch-from-stash",level:2},{value:"List stashes",id:"list-stashes",level:2},{value:"Apply Git stash",id:"apply-git-stash",level:2},{value:"Pop Git stash",id:"pop-git-stash",level:2},{value:"Best Practices of using Git stash",id:"best-practices-of-using-git-stash",level:2},{value:"Conclusion",id:"conclusion",level:2}],c=(m="PromotionBanner",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var m;const p={toc:h};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-git-stash"},"What is Git stash"),(0,i.kt)("p",null,"Stash is a Git command to locally store your recent changes in a separate area so you can fetch those changes later. After taking a snapshot of your local files, it resets the state of your workspace to the previous commit state. You can save multiple stashes on your local computer and you can apply back any of the stashes at a later stage. "),(0,i.kt)("p",null,"Stash is very simple to use. You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash")," to save your changes and then use ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash apply")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash pop")," to bring back those saved changes.",(0,i.kt)("br",{parentName:"p"}),"\n","Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash")," is only applied to locally versioned files, and developers using the same git repository will not be aware of these stash changes. "),(0,i.kt)("p",null,"In this article, we will cover Git stash in detail. We will start with why it is needed, how to use it, what are its best practices and some example commands of Git stash. "),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-git-stash"},"What is Git stash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-do-we-need-git-stash"},"Why do we need Git stash"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#switching-between-branches"},"Switching between branches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pull-latest-remote-changes"},"Pull latest remote changes")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-use-git-stash"},"How to use Git stash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#git-stash-vs-commit"},"Git stash vs commit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#git-stash-vs-reset"},"Git stash vs reset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#git-stash-vs-stage"},"Git stash vs stage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-a-git-stash-with-a-name"},"Create a Git stash with a name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#stash-untracked-files"},"Stash untracked files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-branch-from-stash"},"Create branch from stash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#list-stashes"},"List stashes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#apply-git-stash"},"Apply Git stash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pop-git-stash"},"Pop Git stash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#best-practices-of-using-git-stash"},"Best Practices of using Git stash"))),(0,i.kt)("h2",{id:"why-do-we-need-git-stash"},"Why do we need Git stash"),(0,i.kt)("p",null,"Some of the use cases where you will need Git stash are the following:"),(0,i.kt)("h3",{id:"switching-between-branches"},"Switching between branches"),(0,i.kt)("p",null,"If you have two branches, let\u2019s say branch A and branch B. A lot of work has been added to both branches, and they have diverged from each other quite a lot. Both have different heads.  "),(0,i.kt)("p",null,"If you are working on branch A and you want to make some changes to branch B, then you will have no other choice except to create a commit at that point in branch A, then commit the code and push your changes so that you can fix the bug in branch B. After fixing the bug in branch B, you will switch your active branch to branch A and then run ",(0,i.kt)("inlineCode",{parentName:"p"},"git reset head\u2026")," to get your changes back.  "),(0,i.kt)("p",null,"This is not a very flexible approach because your unfinished work will be considered a checkpoint instead of a patch that is still a work in progress. This is where Git stash comes in. With Git stash, you can save your changes locally without making a commit, switch branches, perform other operations, and then reapply the locally stashed changes when you need them.  "),(0,i.kt)("p",null,"You can transition between different tasks without needing to undo or redo the changes. "),(0,i.kt)("h3",{id:"pull-latest-remote-changes"},"Pull latest remote changes"),(0,i.kt)("p",null,"If more than one team member is working on the same code file and you want to fetch the changes made by other developers, then you will use ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," which will merge other developers' changes into the file.  "),(0,i.kt)("p",null,"However, that will only happen if their changes do not conflict with yours. If the incoming modifications are on the same lines you have changed, then using ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," will likely throw an error related to merging error. Git stash comes to the rescue here.  "),(0,i.kt)("p",null,"You can easily stash your local changes, pull the modifications made by other developers in the same file, and then you can apply your locally stashed changes to the same file. You might still have to resolve the conflicts manually, though. "),(0,i.kt)("h2",{id:"how-to-use-git-stash"},"How to use Git stash"),(0,i.kt)("p",null,"Continuing the previous example of branch A and branch B, here is how you will use Git stash to switch between branches while saving your changes locally without making a commit. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Save changes to branch A which is your working branch. "),(0,i.kt)("li",{parentName:"ol"},"Execute command ",(0,i.kt)("inlineCode",{parentName:"li"},"git stash"),". It will preserve your changes locally in the stack. "),(0,i.kt)("li",{parentName:"ol"},"Check out branch B."),(0,i.kt)("li",{parentName:"ol"},"Fix the bug in branch B."),(0,i.kt)("li",{parentName:"ol"},"Commit the changes and if you want to push to remote, then do that as well."),(0,i.kt)("li",{parentName:"ol"},"Switch back to branch A using ",(0,i.kt)("inlineCode",{parentName:"li"},"checkout")," command"),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"git stash pop")," to retrieve your stashed changes back.")),(0,i.kt)("p",null,"Your changes preserved through ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash")," are saved in your project\u2019s .git directory, usually, the path is ",(0,i.kt)("inlineCode",{parentName:"p"},"/.git/refs/stash"),". It is the fastest way to get your working directory clean while still keeping the changes. "),(0,i.kt)("hr",null),(0,i.kt)(c,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"git-stash-vs-commit"},"Git stash vs commit"),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash")," take a snapshot of changed files in the git working tree and save that snapshot for later use. However, both are very different from each other in many aspects, such as:"),(0,i.kt)("p",null,"\u2022\tCommit is a part of the public git history so others can see it. Stash is always local.\n\u2022\tThe Stash command resets the files in the working tree to a previous commit point. A new commit leaves files in the working tree unmodified.\n\u2022\tCommit creates a new save point on your branch, whereas stash reverts to a previous save point. "),(0,i.kt)("h2",{id:"git-stash-vs-reset"},"Git stash vs reset"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"git reset")," command is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash")," in the sense that both commands revert the files in the working directory to a previous commit. However, there are many differences, such as:"),(0,i.kt)("p",null,"\u2022\tA hard reset will wipe out all the changes. A stash will save a snapshot of modified files on the local machine.\n\u2022\tStash does not create a new save point in the branch history because it is only to your local machine. A reset will create a new commit point in the branch history.\n\u2022\tAs the reset is based on the overall remote repository so you can use reset to jump back to any previous commit. A stash will only reset the files in your local workspace to a previous state. "),(0,i.kt)("h2",{id:"git-stash-vs-stage"},"Git stash vs stage"),(0,i.kt)("p",null,"The command ",(0,i.kt)("inlineCode",{parentName:"p"},"git stage")," might appear to be the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash")," because it also stages your changes; however, that is not the case. The ",(0,i.kt)("inlineCode",{parentName:"p"},"git stage")," is the step prior to the commit. You add new files to the \u201cstaged files\u201d so that the next commit contains these files. Stash will move your files back to the stack so that you can bring these files back and see the modifications. "),(0,i.kt)("h2",{id:"create-a-git-stash-with-a-name"},"Create a Git stash with a name"),(0,i.kt)("p",null,"Although it is not mandatory to name a stash, you can do that through ",(0,i.kt)("inlineCode",{parentName:"p"},'git stash push -m "stashName"')," followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash apply stash^{/stashName}")," . You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash save stashName")," however, the ",(0,i.kt)("inlineCode",{parentName:"p"},"save")," command is deprecated. Note that a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash")," would work perfectly fine as well. "),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-02-git-stash/git-stash-1.png",alt:"git stash"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"stash")," command stores uncommitted files and code while leaving any untracked or ignored files."),(0,i.kt)("h2",{id:"stash-untracked-files"},"Stash untracked files"),(0,i.kt)("p",null,"If you want to stash all your untracked files in the stash stack, then execute the command ",(0,i.kt)("inlineCode",{parentName:"p"}," git stash --include-untracked")," or the short version ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash -u"),". "),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-02-git-stash/git-stash-2.png",alt:"git stash"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"create-branch-from-stash"},"Create branch from stash"),(0,i.kt)("p",null,"It is very easy to create a new branch from your latest stash. If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash branch <branchName>"),", it will create a new branch from the latest stash. You can use the command ",(0,i.kt)("inlineCode",{parentName:"p"}," git stash branch <branch_name> stash@{revision}")," to generate a new branch from a specific stash. "),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-02-git-stash/git-stash-3.png",alt:"git stash"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"list-stashes"},"List stashes"),(0,i.kt)("p",null,"Just execute the command ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash list")," to see the list of current stashes. "),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-02-git-stash/git-stash-4.png",alt:"git stash"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"apply-git-stash"},"Apply Git stash"),(0,i.kt)("p",null,"You can apply the git stash by running the command ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash apply stash^{/MyStash1}"),"."),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-02-git-stash/git-stash-5.png",alt:"git stash"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"pop-git-stash"},"Pop Git stash"),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash pop")," removes the stash after applying it. ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash apply")," leaves it in the stash list for later use. The below screenshot will remove the stash after applying it. "),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-02-git-stash/git-stash-6.png",alt:"git stash"})),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,i.kt)("h2",{id:"best-practices-of-using-git-stash"},"Best Practices of using Git stash"),(0,i.kt)("p",null,"Here are some of the best practices you should follow when using Git stash:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Git stash should be used only on a need basis; its scope is limited to local repository history. Any code part of the stash is not visible to other developers in your team. "),(0,i.kt)("li",{parentName:"ul"},"Try to create temporary feature or development branches in your Git working tree and regularly commit to these branches instead of using stash. "),(0,i.kt)("li",{parentName:"ul"},"Use stash only when you need the modified files temporarily stored on your machine for restoration later. ")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Git stash is a convenient command by Git. If used in the right situations, it can be very beneficial. If you switch between your branches frequently and need to safely stage your latest work for a short time, Git stash is for you. Too much usage of the stash is also discouraged as well. If you follow the best practices mentioned above, Git stash will improve your efficiency and result in increased productivity."))}u.isMDXComponent=!0}}]);