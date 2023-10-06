"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"v4-to-v5",title:"Migration Guide from v4 to v5"},d=void 0,l={unversionedId:"api-reference/mui/migration-guide/v4-to-v5",id:"api-reference/mui/migration-guide/v4-to-v5",title:"Migration Guide from v4 to v5",description:"Material UI released a new major version for @mui/x-data-grid package as v6. This document will guide you through the migration process for the refine related parts. While this document won't cover all the changes, it will help you get started with the migration process.",source:"@site/docs/api-reference/mui/migration-guide/v4-to-v5.md",sourceDirName:"api-reference/mui/migration-guide",slug:"/api-reference/mui/migration-guide/v4-to-v5",permalink:"/docs/api-reference/mui/migration-guide/v4-to-v5",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/migration-guide/v4-to-v5.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1696580273,formattedLastUpdatedAt:"Oct 6, 2023",frontMatter:{id:"v4-to-v5",title:"Migration Guide from v4 to v5"},sidebar:"someSidebar",previous:{title:"Theme",permalink:"/docs/api-reference/mui/theming"},next:{title:"Packages",permalink:"/docs/packages"}},s={},u=[{value:"Required Changes",id:"required-changes",level:2},{value:"Updating the packages",id:"updating-the-packages",level:3},{value:"<code>useDataGrid</code>",id:"usedatagrid",level:3},{value:"<code>GridColumns</code> to <code>GridColDef[]</code>",id:"gridcolumns-to-gridcoldef",level:3}],c={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Material UI released a new major version for ",(0,r.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," package as v6. This document will guide you through the migration process for the refine related parts. While this document won't cover all the changes, it will help you get started with the migration process."),(0,r.kt)("admonition",{title:"Official Migration Guide",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out the official ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/x/migration/migration-data-grid-v5/"},"MUI X Migration Guide for ",(0,r.kt)("inlineCode",{parentName:"a"},"DataGrid"))," for detailed information and all the changes."),(0,r.kt)("p",{parentName:"admonition"},"You can also check out the ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/blog/mui-x-v6"},"Introducing MUI X v6.0.0")," blog post for more information about the new version.")),(0,r.kt)("p",null,"The changes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataGrid")," API are included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/mui"),"'s latest version (",(0,r.kt)("inlineCode",{parentName:"p"},"v5"),"). With this release, we've updated the peer dependency of ",(0,r.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"^6.6.0"),"."),(0,r.kt)("h2",{id:"required-changes"},"Required Changes"),(0,r.kt)("p",null,"The changes listed below are required to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," with ",(0,r.kt)("strong",{parentName:"p"},"refine"),". It doesn't cover all the changes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataGrid")," API. To see all the changes, please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/x/migration/migration-data-grid-v5/"},"official migration guide for MUI X"),"."),(0,r.kt)("h3",{id:"updating-the-packages"},"Updating the packages"),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," with version 6, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/mui"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/mui"))," must be updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"5.x.x")," as well."),(0,r.kt)("p",null,"Since there are some changes in the return values of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDataGrid")," and the common usage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataGrid")," component with TypeScript, we've also released a major release to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/inferencer"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/inferencer"))," package. If you're using the Inferencer package, you'll need to update it to ",(0,r.kt)("inlineCode",{parentName:"p"},"4.x.x")," as well."),(0,r.kt)("h3",{id:"usedatagrid"},(0,r.kt)("inlineCode",{parentName:"h3"},"useDataGrid")),(0,r.kt)("p",null,"We've updated the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook to return ",(0,r.kt)("inlineCode",{parentName:"p"},"paginationModel")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onPaginationModelChange")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"page"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pageSize"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onPageChange")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onPageSizeChange"),". If you've modified these props, you'll need to update them to use the new API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="posts/list.tsx"',title:'"posts/list.tsx"'},"const PostList = () => {\nconst { dataGridProps } = useDataGrid();\n-   const { page, pageSize, onPageChange, onPageSizeChange, ...restDataGridProps } = dataGridProps;\n+   const { paginationModel, onPaginationModelChange, ...restDataGridProps } = dataGridProps;\n\n    /* ... */\n    /* Your changes to use the new values */\n    /* ... */\n\n    return (\n        <DataGrid\n            {...restDataGridProps}\n-          page={page}\n-          pageSize={pageSize}\n-          onPageChange={onPageChange}\n-          onPageSizeChange={onPageSizeChange}\n+          paginationModel={paginationModel}\n+          onPaginationModelChange={onPaginationModelChange}\n        />\n    );\n}\n")),(0,r.kt)("h3",{id:"gridcolumns-to-gridcoldef"},(0,r.kt)("inlineCode",{parentName:"h3"},"GridColumns")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},"GridColDef[]")),(0,r.kt)("p",null,"While updating our Material UI examples, we've encountered this issue and thought it deserves a mention here. When defining the ",(0,r.kt)("inlineCode",{parentName:"p"},"columns")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<DataGrid>"),", we've used ",(0,r.kt)("inlineCode",{parentName:"p"},"GridColums")," type, with the changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid"),"'s last version, this type is removed and should be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"GridColDef")," array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="posts/list.tsx"',title:'"posts/list.tsx"'},'import React from "react";\nimport { List, useDataGrid } from "@refinedev/mui";\n\n- import { DataGrid, GridColumns } from "@mui/x-data-grid";\n+ import { DataGrid, GridColDef } from "@mui/x-data-grid";\n\nimport { ICategory, IPost } from "interfaces";\n\nexport const PostList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IPost>();\n\n-   const columns = React.useMemo<GridColumns<IPost>>(\n+   const columns = React.useMemo<GridColDef<IPost>[]>(\n        () => [/* ... */],\n        [],\n    );\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n')))}m.isMDXComponent=!0}}]);