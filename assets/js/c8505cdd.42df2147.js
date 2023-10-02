"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",slug:"manage-hackathons-with-refine",authors:"muharrem",tags:["refine","supabase","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/manage-hackathons-with-refine",source:"@site/blog/2021-10-4-manage-hackatons.md",title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"supabase",permalink:"/blog/tags/supabase"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:3.405,hasTruncateMarker:!0,authors:[{name:"Muharrem Kocadere",title:"Frontend Developer",url:"https://github.com/mhrrmk",imageURL:"https://github.com/mhrrmk.png",key:"muharrem"}],frontMatter:{title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",slug:"manage-hackathons-with-refine",authors:"muharrem",tags:["refine","supabase","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi"},nextItem:{title:"Simple Web Application Example with Refine",permalink:"/blog/simple-web-application-with-refine"},relatedPosts:[{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.075,date:"2022-03-29T00:00:00.000Z"},{title:"Building a Complete React CRM App with refine, Ant Design and GraphQL",description:"We'll explore the key features of our CRM app, the technologies we used.",permalink:"/blog/react-crm-with-refine",formattedDate:"October 2, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:4.95,date:"2023-10-02T00:00:00.000Z"},{title:"Building React admin panel with NextUI and refine",description:"We will see how  to build a React admin panel using refine and NextUI components library",permalink:"/blog/next-ui-react-admin-panel",formattedDate:"September 20, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:41.82,date:"2023-09-20T00:00:00.000Z"}],authorPosts:[]},c={authorsImageUrls:[void 0]},m=[{value:"Creating tables",id:"creating-tables",level:2},{value:"Craeting CRUD pages",id:"craeting-crud-pages",level:2},{value:"Create page:",id:"create-page",level:2},{value:"Creating voting page",id:"creating-voting-page",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:m};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,a.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,a.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,a.kt)("p",{parentName:"admonition"},"You should know that ",(0,a.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),".")),(0,a.kt)("p",null,"We'll be building a demo app to manage hackathons with ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/"},"refine"),". We'll be able to create new hackathons, new project entries for a hackathon and criterias for a hackathon."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-manage-hackathons/hackathons.png",alt:"hackathons"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"We'll use ",(0,a.kt)("a",{parentName:"p",href:"https://supabase.io/"},"supabase")," as the backend service. ",(0,a.kt)("strong",{parentName:"p"},"refine")," comes with a builtin data provider for supabase thus it's very easy to create crud pages."),(0,a.kt)("h2",{id:"creating-tables"},"Creating tables"),(0,a.kt)("p",null,"Our app will have these tables in supabase"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"criterias"),(0,a.kt)("li",{parentName:"ul"},"hackathons"),(0,a.kt)("li",{parentName:"ul"},"hackathoners"),(0,a.kt)("li",{parentName:"ul"},"projects"),(0,a.kt)("li",{parentName:"ul"},"projectscores  ")),(0,a.kt)("p",null,"These are reflected in our app as "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type HackathonerType = {\n  id: string;\n  name: string;\n};\n\nexport type HackathonType = {\n  id: string;\n  start: string;\n  end: string;\n  name: string;\n};\n\nexport type ProjectType = {\n  id: string;\n  name: string;\n  description: string;\n  url: string;\n  hackathon_id: string;\n  hackathoner_id: string;\n};\n\nexport type CriteriaType = {\n  id: string;\n  name: string;\n  hackathon_id: string;\n};\n\nexport type ProjectScoreType = {\n  project_id: string;\n  criteria_id: string;\n  score: string;\n};\n\n")),(0,a.kt)("h2",{id:"craeting-crud-pages"},"Craeting CRUD pages"),(0,a.kt)("p",null,"Creating crud pages is as easy like this:"),(0,a.kt)("p",null,"List page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  List,\n  Table,\n  useTable,\n  Space,\n  ShowButton,\n  EditButton,\n  TextField,\n} from "@pankod/refine";\n\nimport dayjs from "dayjs";\n\nimport { HackathonType } from "interfaces";\n\nexport const HackathonsList: React.FC = () => {\n  const { tableProps } = useTable<HackathonType>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="name" title="Name" />\n        <Table.Column\n          dataIndex="start"\n          title="Starts"\n          render={(value) => (\n            <TextField value={dayjs(value).format("DD/MMMM dddd")} />\n          )}\n        />\n        <Table.Column\n          dataIndex="end"\n          title="Ends"\n          render={(value) => (\n            <TextField value={dayjs(value).format("DD/MMMM dddd")} />\n          )}\n        />\n        <Table.Column\n          title="Actions"\n          dataIndex="actions"\n          render={(_text, record: HackathonType): React.ReactNode => {\n            return (\n              <Space>\n                <ShowButton size="small" recordItemId={record.id} hideText />\n                <EditButton size="small" recordItemId={record.id} hideText />\n              </Space>\n            );\n          }}\n        />\n      </Table>\n    </List>\n  );\n};\n\n')),(0,a.kt)("h2",{id:"create-page"},"Create page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Create, Form, Input, useForm, DatePicker } from "@pankod/refine";\n\nimport { HackathonType } from "interfaces";\n\nexport const HackathonsCreate: React.FC = () => {\n  const { formProps, saveButtonProps } = useForm<HackathonType>();\n\n  return (\n    <Create saveButtonProps={saveButtonProps}>\n      <Form {...formProps} layout="vertical">\n        <Form.Item label="Name" name="name">\n          <Input />\n        </Form.Item>\n        <Form.Item label="Name" name="start">\n          <DatePicker />\n        </Form.Item>\n        <Form.Item label="Name" name="end">\n          <DatePicker />\n        </Form.Item>\n      </Form>\n    </Create>\n  );\n};\n')),(0,a.kt)("p",null,"Then use these pages as the corresponding crud component for the ",(0,a.kt)("inlineCode",{parentName:"p"},"hackathon")," resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine";\n\nimport "@pankod/refine/dist/styles.min.css";\nimport { dataProvider } from "@refinedev/supabase";\nimport { supabaseClient } from "utility";\nimport {\n  HackathonsList,\n  HackathonsCreate,\n  HackathonsEdit,\n  HackathonsShow,\n} from "./pages/hackathons";\n\nfunction App() {\n  return (\n    <Refine\n      dataProvider={dataProvider(supabaseClient)}\n      resources={[{\n        name: "hackathons",\n        list: HackathonsList,\n        create: HackathonsCreate,\n        edit: HackathonsEdit,\n        show: HackathonsShow\n      }]}\n    />\n  );\n}\n\nexport default App;\n\n')),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-manage-hackathons/create.png",alt:"create"}),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," comes with builtin hooks for Ant design components. You can find detailed usage for the hooks and supabase in the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"documentation")),(0,a.kt)("h2",{id:"creating-voting-page"},"Creating voting page"),(0,a.kt)("p",null,"We'll use the dashboard option to place voting page. We'll need data from different resources. ",(0,a.kt)("strong",{parentName:"p"},"refine")," comes with powerful hooks that are based on react-query to get data from those resources."),(0,a.kt)("p",null,"For example to get the hackathons that are active now we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'export const DashboardPage: React.FC = () => {\n  const currentHackathons = useList<HackathonType>({\n    resource: "hackathons",\n    filters: [\n      {\n        field: "start",\n        operator: "lte",\n        value: now,\n      },\n      {\n        field: "end",\n        operator: "gte",\n        value: now,\n      },\n    ],\n  });\n}\n')),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/hackathonize-xcpcp?autoresize=1fontsize=14&=1&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"hackathonize",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("p",null,"We can get data from other resources in a similar fashion. You can find the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/blog-hackathonize"},"repo here")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"This project itself is a product of a hackathon. It lacks lots of feature like authorization though it shows how ",(0,a.kt)("strong",{parentName:"p"},"refine")," makes it easy to quickly build a working app."))}d.isMDXComponent=!0}}]);