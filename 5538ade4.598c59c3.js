(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},120:function(e,t,n){"use strict";var a=n(0),r=n(121);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},121:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},122:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(120),o=n(119),c=n(55),l=n.n(c),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=Object(i.a)(),j=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(a.useState)(c),g=O[0],h=O[1],v=a.Children.toArray(e.children);if(null!=p){var w=j[p];null!=w&&w!==g&&u.some((function(e){return e.value===w}))&&h(w)}var N=function(e){h(e),null!=p&&f(p,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},123:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(118)),o=n(122),c=n(123),l={id:"wdio",title:"WebdriverIO",sidebar_label:"Using WebdriverIO with Next.js for End to End testing"},s={unversionedId:"e2e-testing/wdio",id:"e2e-testing/wdio",isDocsHomePage:!1,title:"WebdriverIO",description:"Next-gen browser and mobile automation test framework for Node.js.",source:"@site/docs/e2e-testing/wdio.md",slug:"/e2e-testing/wdio",permalink:"/superplate/docs/e2e-testing/wdio",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/e2e-testing/wdio.md",version:"current",sidebar_label:"Using WebdriverIO with Next.js for End to End testing",sidebar:"someSidebar",previous:{title:"Cypress",permalink:"/superplate/docs/e2e-testing/cypress"},next:{title:"Github Actions",permalink:"/superplate/docs/ci/github-actions"}},b=[{value:"Writing Tests",id:"writing-tests",children:[]},{value:"Running Tests",id:"running-tests",children:[]},{value:"File structure",id:"file-structure",children:[]},{value:"Adding WebdriverIO to your project later",id:"adding-webdriverio-to-your-project-later",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Next-gen browser and mobile automation test framework for Node.js."),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://webdriver.io/docs/gettingstarted.html"}),"Refer to official documentation for detailed usage. ","\u2192")),Object(i.b)("h3",{id:"writing-tests"},"Writing Tests"),Object(i.b)("p",null,"Testing your application will require interacting with UI elements. Best practice for selecting elements in your tests is with special attributes for testing.  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add test attributes to elements of your UI.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/main/index.tsx"',title:'"src/components/main/index.tsx"'}),'import React from "react";\nimport { Button } from "@components";\n\nexport const Main: React.FC = () => {\n  return (\n    <div>\n    // highlight-start\n      <h1 data-test="main-heading">superplate</h1>\n    // highlight-end\n      <p>The frontend boilerplate with superpowers!</p>\n    // highlight-start\n      <Button data-test="docs-btn-anchor">Docs</Button>\n    // highlight-end\n    </div>\n  );\n};\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Now these elements can be selected in tests with ",Object(i.b)("inlineCode",{parentName:"li"},"$")," or ",Object(i.b)("inlineCode",{parentName:"li"},"$$"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const heading = await $('[data-test=\"main-heading\"]');\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Don't forget to visit the page before each test.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="test/e2e/specs/home.spec.ts"',title:'"test/e2e/specs/home.spec.ts"'}),'describe("Homepage", () => {\n  beforeEach(async () => {\n    await browser.url("/");\n  });\n\n  it("Brings header", async () => {\n    const heading = await $(\'[data-test="main-heading"]\');\n    expect(await heading.getText()).toBe("superplate");\n  });\n\n  it("Should have true href", async () => {\n    const button = await $(\'[data-test="docs-btn-anchor"]\');\n    expect(await button.getTagName()).toBe("a");\n    const buttonHref = await button.getAttribute("href");\n    expect(buttonHref).toBeTruthy();\n    expect(buttonHref).toBe("https://pankod.github.io/superplate/");\n  });\n\n  it("Should have icons", async () => {\n    const icons = await $$(\'[data-test="icon"]\');\n    expect(icons).toHaveLength(6);\n  });\n});\n\n')),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://webdriver.io/docs/selectors.html"}),"Refer to official documentation on selecting elemets for detailed usage. ","\u2192")),Object(i.b)("h3",{id:"running-tests"},"Running Tests"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Configure ",Object(i.b)("inlineCode",{parentName:"li"},"baseUrl")," option in ",Object(i.b)("inlineCode",{parentName:"li"},"wdio.conf.js"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="wdio.conf.js"',title:'"wdio.conf.js"'}),'exports.config = {\n  ...\n  baseUrl: "http://localhost:3000",\n  ...\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If your ",Object(i.b)("inlineCode",{parentName:"p"},"url")," parameter starts with ",Object(i.b)("inlineCode",{parentName:"p"},"/"),", the base url gets prepended, not including the path portion of your baseUrl. If your ",Object(i.b)("inlineCode",{parentName:"p"},"url")," parameter starts without a scheme or ",Object(i.b)("inlineCode",{parentName:"p"},"/")," (like ",Object(i.b)("inlineCode",{parentName:"p"},"some/path"),"), the base url gets prepended directly."))),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://webdriver.io/docs/configurationfile.html"}),"Refer to official documentation on configuration for detailed usage. ","\u2192")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add a command to run tests.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'{\n    scripts: {\n        "webdriver:run": "wdio wdio.conf.js"\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Start your project in dev mode")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run dev\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run tests with ",Object(i.b)("inlineCode",{parentName:"li"},"wdio"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run webdriver:run\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://webdriver.io/docs/clioptions.html"}),"Refer to official documentation on command line for detailed usage. ","\u2192")),Object(i.b)("h3",{id:"file-structure"},"File structure"),Object(i.b)("p",null,"WebdriverIO test directory is placed in the root of the project."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json")," for WebdriverIO")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="test/e2e/tsconfig.json"',title:'"test/e2e/tsconfig.json"'}),'{\n  "compilerOptions": {\n    "types": ["node", "webdriverio", "@wdio/mocha-framework"]\n  },\n  "include": ["./specs/**/*.ts"]\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Don't forget to exclude WebdriveIO from main ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "exclude": ["test/*"]\n}\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"All this work will be handled automatically by CLI, so you don\u2019t need to do anything extra as long as you choose ",Object(i.b)("strong",{parentName:"p"},"WebdriverIO")," plugin during the project creation phase."))),Object(i.b)("h3",{id:"adding-webdriverio-to-your-project-later"},"Adding WebdriverIO to your project later"),Object(i.b)("p",null,"If you didn't choose the plugin during project creation phase, you can follow the instructions below to add it."),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install -D @wdio/cli \n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @wdio/cli\n")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Generate configuration file")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx wdio config -y\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://webdriver.io/docs/gettingstarted.html"}),"Refer to official documentation on installation for detailed usage. ","\u2192")))}p.isMDXComponent=!0}}]);