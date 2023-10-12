"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"base64-upload",title:"Base64 Upload"},l=void 0,p={unversionedId:"advanced-tutorials/upload/base64-upload",id:"version-3.xx.xx/advanced-tutorials/upload/base64-upload",title:"Base64 Upload",description:"By encoding your files and images from your forms to Base64 you can change all files needed for the upload to Base64 format before the submit. This can be done via the onFinish property of the `` component that comes with Ant Design",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/upload/base64-upload.md",sourceDirName:"advanced-tutorials/upload",slug:"/advanced-tutorials/upload/base64-upload",permalink:"/docs/3.xx.xx/advanced-tutorials/upload/base64-upload",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/upload/base64-upload.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1697100403,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"base64-upload",title:"Base64 Upload"},sidebar:"someSidebar",previous:{title:"Next.js",permalink:"/docs/3.xx.xx/advanced-tutorials/ssr/nextjs"},next:{title:"Multipart Upload",permalink:"/docs/3.xx.xx/advanced-tutorials/upload/multipart-upload"}},u={},c=[{value:"Example",id:"example-1",level:2}],d=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:c};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By encoding your files and images from your forms to Base64 you can change all files needed for the upload to Base64 format before the submit. This can be done via the ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinish")," property of the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Form"},(0,r.kt)("inlineCode",{parentName:"a"},"<Form>"))," component that comes with ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design")," "),(0,r.kt)("h1",{id:"example"},"Example"),(0,r.kt)("p",null,"Now let's make a small example to see how its done. In this example, the file we are going to be uploading files in Base64 type  is going to be called ",(0,r.kt)("inlineCode",{parentName:"p"},"avatar")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users/create.tsx"',title:'"pages/users/create.tsx"'},'import {\n    //highlight-start\n    file2Base64,\n    //highlight-end\n} from "@pankod/refine-core";\n\nimport {\n    Create,\n    Form,\n    Upload,\n    Input,\n    useForm,\n// highlight-start\n    getValueFromEvent,\n// highlight-end\n} from "@pankod/refine-antd";\n\nexport const UserCreate: React.FC = () => {\n    const { form, formProps, saveButtonProps } = useForm<IUser>();\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form\n                {...formProps}\n                layout="vertical"\n// highlight-start\n                onFinish={async (values) => {\n                    const base64Files = [];\n                    // @ts-ignore\n                    const { avatar } = values;\n\n                    for (const file of avatar) {\n                        if (file.originFileObj) {\n                            const base64String = await file2Base64(file);\n\n                            base64Files.push({\n                                ...file,\n                                base64String,\n                            });\n                        } else {\n                            base64Files.push(file);\n                        }\n                    }\n\n                    return (\n                        formProps.onFinish &&\n                        formProps.onFinish({\n                            ...values,\n                            avatar: base64Files,\n                        })\n                    );\n                }}\n// highlight-end\n            >\n                <Form.Item\n                    label="First Name"\n                    name="firstName"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item label="Avatar">\n                    <Form.Item\n                        name="avatar"\n                        valuePropName="fileList"\n// highlight-start\n                        getValueFromEvent={getValueFromEvent}\n                        noStyle\n                        rules={[\n                            {\n                                required: true,\n                            },\n                        ]}\n                    >\n                        <Upload.Dragger\n                            listType="picture"\n                            multiple\n// highlight-start\n                            beforeUpload={() => false}\n                        >\n                            <p className="ant-upload-text">\n                                Drag & drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n\ninterface IUser {\n    id: number;\n    firstName: string;\n    avatar: [\n        {\n            uid: string;\n            name: string;\n            url: string;\n            status: "error" | "success" | "done" | "uploading" | "removed";\n        },\n    ];\n}\n')),(0,r.kt)("p",null,"You can change files to Base64 by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"file2Base64")," function."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"An edit form can be made by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," component instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create>")," without changing the rest of the code.")),(0,r.kt)("h2",{id:"example-1"},"Example"),(0,r.kt)(d,{path:"upload-antd-multipart",mdxType:"CodeSandboxExample"}))}g.isMDXComponent=!0}}]);