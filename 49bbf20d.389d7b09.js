(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=o,p=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.a.createElement(p,i(i({ref:t},l),{},{components:n})):r.a.createElement(p,i({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},120:function(e,t,n){"use strict";var o=n(0),r=n(121);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},121:function(e,t,n){"use strict";var o=n(0),r=Object(o.createContext)(void 0);t.a=r},122:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(120),c=n(119),i=n(55),s=n.n(i),l=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,m=e.groupId,d=e.className,p=Object(a.a)(),h=p.tabGroupChoices,O=p.setTabGroupChoices,j=Object(o.useState)(i),g=j[0],f=j[1],x=o.Children.toArray(e.children);if(null!=m){var v=h[m];null!=v&&v!==g&&u.some((function(e){return e.value===v}))&&f(v)}var N=function(e){f(e),null!=m&&O(m,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(o.cloneElement)(x.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},123:function(e,t,n){"use strict";var o=n(3),r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var o=n(3),r=n(7),a=(n(0),n(118)),c=n(122),i=n(123),s={id:"mobx",title:"Mobx",sidebar_label:"Mobx",description:"Using Mobx in Next.js Project"},l={unversionedId:"state-management/mobx",id:"state-management/mobx",isDocsHomePage:!1,title:"Mobx",description:"Using Mobx in Next.js Project",source:"@site/docs/state-management/mobx.md",slug:"/state-management/mobx",permalink:"/superplate/docs/state-management/mobx",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/state-management/mobx.md",version:"current",sidebar_label:"Mobx",sidebar:"someSidebar",previous:{title:"Recoil.js",permalink:"/superplate/docs/state-management/recoil"},next:{title:"SWR",permalink:"/superplate/docs/hooks/swr"}},b=[{value:"Observable state",id:"observable-state",children:[{value:"Making observable stores with classes",id:"making-observable-stores-with-classes",children:[]}]},{value:"Actions",id:"actions",children:[]},{value:"Using store in components",id:"using-store-in-components",children:[]},{value:"Using <code>mobx-state-tree</code>",id:"using-mobx-state-tree",children:[{value:"<code>CounterStore</code>",id:"counterstore",children:[]},{value:"<code>RootStore</code>",id:"rootstore",children:[]},{value:"<code>RootStoreProvider</code>",id:"rootstoreprovider",children:[]}]},{value:"Adding mobx to your project later",id:"adding-mobx-to-your-project-later",children:[]}],u={toc:b};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Simple, scalable state management.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Anything that can be derived from the application state, should be. Automatically.")),Object(a.b)("p",null,"MobX is a battle tested library that makes state management simple and scalable by transparently applying functional reactive programming.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mobx.js.org/README.html"}),"Refer to official documentation for detailed usage. ","\u2192")),Object(a.b)("h2",{id:"observable-state"},"Observable state"),Object(a.b)("p",null,"Mobx uses observables for store values. Properties, entire objects, arrays, Maps and Sets can all be made observable.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mobx.js.org/observable-state.html"}),"Refer to official documentation on observable state for detailed usage. ","\u2192")),Object(a.b)("h3",{id:"making-observable-stores-with-classes"},"Making observable stores with classes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Make a counter store that holds a ",Object(a.b)("inlineCode",{parentName:"li"},"count")," state")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/mobx/stores/counter/index.ts"',title:'"src/mobx/stores/counter/index.ts"'}),'import { makeAutoObservable } from "mobx";\n\nimport { ICounter } from "./counter";\n\nexport class CounterStore implements ICounter {\n  count = 0;\n\n  constructor() {\n    makeAutoObservable(this);\n  }\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/mobx/stores/counter/counter.d.ts"',title:'"src/mobx/stores/counter/counter.d.ts"'}),"export interface ICounter {\n  count: number;\n}\n")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},Object(a.b)("inlineCode",{parentName:"p"},"makeAutoObservable")," and its cousin ",Object(a.b)("inlineCode",{parentName:"p"},"makeObservable")," trap existing object properties and make them observable. ",Object(a.b)("inlineCode",{parentName:"p"},"makeAutoObservable")," is like ",Object(a.b)("inlineCode",{parentName:"p"},"makeObservable")," on steroids, as it infers all the properties by default."))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Make a root store that holds the counter store")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/mobx/stores/index.ts"',title:'"src/mobx/stores/index.ts"'}),'import { iroot } from "./store";\nimport { CounterStore } from "./counter";\nimport { ICounter } from "./counter/counter";\n\nexport class RootStore implements IRoot {\n    counterStore: ICounter;\n\n    constructor() {\n        this.counterStore = new CounterStore();\n    }\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/mobx/stores/store.d.ts"',title:'"src/mobx/stores/store.d.ts"'}),'import { ICounter } from "./stores/counter/counter";\n\nexport interface iroot {\n  counterStore: ICounter;\n}\n')),Object(a.b)("p",null,"Before starting to read data from the store, let's add some action."),Object(a.b)("h2",{id:"actions"},"Actions"),Object(a.b)("p",null,"An action is any piece of code that modifies the state."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add actions to counter store.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/mobx/stores/counter/index.ts"',title:'"src/mobx/stores/counter/index.ts"'}),'import { makeAutoObservable } from "mobx";\n\nimport { ICounter } from "./counter";\n\nexport class CounterStore implements ICounter {\n  count = 0;\n\n  constructor() {\n    makeAutoObservable(this);\n  }\n\n// highlight-start\n  increase = () => {\n    this.count++;\n  };\n\n  decrease = () => {\n    this.count--;\n  };\n// highlight-end\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/mobx/stores/counter/counter.d.ts"',title:'"src/mobx/stores/counter/counter.d.ts"'}),"export interface ICounter {\n  count: number;\n// highlight-start\n  increase: () => void;\n  decrease: () => void;\n// highlight-end\n}\n")),Object(a.b)("h2",{id:"using-store-in-components"},"Using store in components"),Object(a.b)("p",null,"Firstly store must be made accessible to components. It can be done with ",Object(a.b)("inlineCode",{parentName:"p"},"React.useContext"),". Then with a custom hook, store can be read from components."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Make a context to hold store.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/mobx/index.tsx"',title:'"src/mobx/index.tsx"'}),'import React from "react";\n\nconst StoreContext = React.createContext<RootStore | undefined>(undefined);\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Use its provider to make store accessible to all components.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/mobx/index.tsx"',title:'"src/mobx/index.tsx"'}),'import React from "react";\n// highlight-start\nimport { IRoot } from "./stores/store";\n// highlight-end\n\n// highlight-start\nlet store: IRoot;\n// highlight-end\n\nconst StoreContext = React.createContext<RootStore | undefined>(undefined);\n\n// highlight-start\nexport const RootStoreProvider = ({\n  children,\n}: {\n  children: React.ReactNode;\n}) => {\n  const root = store ?? new RootStore();\n\n  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;\n};\n// highlight-end\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Components can read from store via a custom hook.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/mobx/index.tsx"',title:'"src/mobx/index.tsx"'}),'import React from "react";\nimport { IRoot } from "./stores/store";\n\nlet store: IRoot;\n\nconst StoreContext = React.createContext<RootStore | undefined>(undefined);\n\nexport const RootStoreProvider = ({\n  children,\n}: {\n  children: React.ReactNode;\n}) => {\n  const root = store ?? new RootStore();\n\n  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;\n};\n\n// highlight-start\nexport const useRootStore = () => {\n  const context = React.useContext(StoreContext);\n  if (context === undefined) {\n    throw new Error("useRootStore must be used within RootStoreProvider");\n  }\n\n  return context;\n};\n// highlight-end\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Wrap your component with ",Object(a.b)("inlineCode",{parentName:"li"},"observer")," HOC.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="Your Component"',title:'"Your','Component"':!0}),'// highlight-start\nimport { observer } from "mobx-react";\n// highlight-end\nimport { useRootStore } from "@mobx";\n\n// highlight-start\nexport const MobxExample: React.FC = observer(() => {\n// highlight-end\n  const { counterStore } = useRootStore();\n  const { count, increase, decrease } = counterStore;\n\n  return (\n    <div>\n      <div>\n        <h2>Counter</h2>\n        <button\n          type="button"\n          onClick={increase}\n        >\n          +\n        </button>\n        <span>{count}</span>\n        <button\n          type="button"\n          onClick={decrease}\n        >\n          -\n        </button>\n      </div>\n    </div>\n  );\n});\n')),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mobx.js.org/react-integration.html"}),"Refer to official documentation on React integration for detailed usage. ","\u2192")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"You might consider using mobx-react-lite instead of mobx-react if you're not using class components."))),Object(a.b)("h2",{id:"using-mobx-state-tree"},"Using ",Object(a.b)("inlineCode",{parentName:"h2"},"mobx-state-tree")),Object(a.b)("p",null,"Mobx State Tree provides a better structured state management and tools you need in your app. If you want to use ",Object(a.b)("inlineCode",{parentName:"p"},"mobx-state-tree"),", you need to make some changes to the files you've created above."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'{\n  "dependencies": {\n    ...\n    // highlight-next-line\n      "mobx-state-tree": "^5.0.1",\n    ...\n  }\n}\n')),Object(a.b)("h3",{id:"counterstore"},Object(a.b)("inlineCode",{parentName:"h3"},"CounterStore")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"mobx-state-tree")," provides a simpler API to create our stores and actions."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="mobx/stores/counter/index.ts"',title:'"mobx/stores/counter/index.ts"'}),'import { types } from "mobx-state-tree";\n\nexport const CounterStore = types\n    .model("Counter", {\n        count: 0,\n    })\n    .actions((counter) => ({\n        increase() {\n            counter.count += 1;\n        },\n        decrease() {\n            counter.count -= 1;\n        },\n    }));\n')),Object(a.b)("h3",{id:"rootstore"},Object(a.b)("inlineCode",{parentName:"h3"},"RootStore")),Object(a.b)("p",null,"After the changes in ",Object(a.b)("inlineCode",{parentName:"p"},"CounterStore")," we will need to update ",Object(a.b)("inlineCode",{parentName:"p"},"RootStore")," with ",Object(a.b)("inlineCode",{parentName:"p"},"mobx-state-tree")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="mobx/stores/index.ts"',title:'"mobx/stores/index.ts"'}),'import { types } from "mobx-state-tree";\nimport { CounterStore } from "./counter";\n\n// highlight-start\nexport const RootStore = types.model("RootStore", {\n    counterStore: CounterStore,\n});\n// highlight-end\n\nexport const createRootStore = () =>\n    // highlight-start\n    RootStore.create({\n        counterStore: CounterStore.create(),\n    });\n    // highlight-end\n')),Object(a.b)("h3",{id:"rootstoreprovider"},Object(a.b)("inlineCode",{parentName:"h3"},"RootStoreProvider")),Object(a.b)("p",null,"Finally, you need to update ",Object(a.b)("inlineCode",{parentName:"p"},"RootStoreProvider")," with the ",Object(a.b)("inlineCode",{parentName:"p"},"createRootStore")," function."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="mobx/index.tsx"',title:'"mobx/index.tsx"'}),'import React from "react";\n\n// highlight-next-line\nimport { createRootStore } from "./stores";\n\nconst StoreContext = React.createContext<\n    ReturnType<typeof createRootStore> | undefined\n>(undefined);\n\nexport const RootStoreProvider = ({\n    children,\n}: {\n    children: React.ReactNode;\n}) => {\n    // highlight-next-line\n    const root = createRootStore();\n\n    return (\n        <StoreContext.Provider value={root}>{children}</StoreContext.Provider>\n    );\n};\n\nexport const useRootStore = () => {\n    const context = React.useContext(StoreContext);\n    if (context === undefined) {\n        throw new Error("useRootStore must be used within RootStoreProvider");\n    }\n\n    return context;\n};\n')),Object(a.b)("h2",{id:"adding-mobx-to-your-project-later"},"Adding mobx to your project later"),Object(a.b)("p",null,"If you didn't choose the plugin during project creation phase, you can follow the instructions below to add it."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Install ",Object(a.b)("inlineCode",{parentName:"li"},"mobx")," and ",Object(a.b)("inlineCode",{parentName:"li"},"mobx-react")," packages.")),Object(a.b)(c.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install mobx mobx-react\n"))),Object(a.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"yarn add mobx mobx-react\n")))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#making-observable-stores-with-classes"}),"Follow instructions beginning from here"))),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mobx.js.org/installation.html"}),"Refer to official documentation on installation for detailed usage. ","\u2192")))}m.isMDXComponent=!0}}]);