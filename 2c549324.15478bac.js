(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},120:function(e,t,n){"use strict";var r=n(0),a=n(121);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},121:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},122:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(120),o=n(119),c=n(55),s=n.n(c),l=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=Object(i.a)(),y=d.tabGroupChoices,g=d.setTabGroupChoices,f=Object(r.useState)(c),O=f[0],j=f[1],v=r.Children.toArray(e.children);if(null!=u){var h=y[u];null!=h&&h!==O&&p.some((function(e){return e.value===h}))&&j(h)}var x=function(e){j(e),null!=u&&g(u,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},123:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(118)),o=n(122),c=n(123),s={id:"testing-library",title:"Testing Library",sidebar_label:"Testing Library"},l={unversionedId:"testing/testing-library",id:"testing/testing-library",isDocsHomePage:!1,title:"Testing Library",description:"The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.",source:"@site/docs/testing/testing-library.md",slug:"/testing/testing-library",permalink:"/superplate/docs/testing/testing-library",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/testing/testing-library.md",version:"current",sidebar_label:"Testing Library",sidebar:"someSidebar",previous:{title:"Jest",permalink:"/superplate/docs/testing/jest"},next:{title:"Enzyme",permalink:"/superplate/docs/testing/enzyme"}},b=[{value:"Implementation",id:"implementation",children:[{value:"Custom Render",id:"custom-render",children:[]},{value:"Example Test",id:"example-test",children:[]},{value:"Running Tests",id:"running-tests",children:[]}]},{value:"Adding Testing Library to your project later",id:"adding-testing-library-to-your-project-later",children:[]}],p={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://testing-library.com/docs/react-testing-library/intro/"}),"React Testing Library")," is a very light-weight solution for testing React components. It provides light utility functions on top of ",Object(i.b)("inlineCode",{parentName:"p"},"react-dom")," and ",Object(i.b)("inlineCode",{parentName:"p"},"react-dom/test-utils"),", in a way that encourages better testing practices."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"superplate"),"'s plugin of React Testing Library is built on top of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"jest"}),"superplate's Jest plugin")," and automatically includes necessary wrappers and imports to run your component tests."),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("p",null,"You can see how ",Object(i.b)("strong",{parentName:"p"},"superplate"),"'s React Testing Library plugin is implemented below."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Configuration for Jest is not included. Please check out ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"jest"}),"Jest Plugin")," to learn more about our Jest configuration."))),Object(i.b)("h3",{id:"custom-render"},"Custom Render"),Object(i.b)("p",null,"We may need to wrap our test components to context providers, data stores etc. It's a good practice to make this wrappers globally available. We will create a custom render and re-export everything from ",Object(i.b)("inlineCode",{parentName:"p"},"React Testing Library")," in ",Object(i.b)("inlineCode",{parentName:"p"},"test/index.tsx")," file. "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="test/index.tsx"',title:'"test/index.tsx"'}),'import React, { ReactElement } from "react";\nimport {\n    render as baseRender,\n    RenderOptions,\n    RenderResult,\n} from "@testing-library/react";\n/*\nimport { ThemeProvider } from \'my-ui-lib\'\nimport { TranslationProvider } from \'my-i18n-lib\'\n*/\n\nexport const AllTheProviders = ({ children }) => {\n    return (\n        // <ThemeProvider theme="light">\n        //     <TranslationProvider>\n                {children}\n        //     </TranslationProvider>\n        // </ThemeProvider>\n    );\n};\n\nconst render = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>\n    baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult;\n\n// re-export everything\nexport * from "@testing-library/react";\n\n// override render method\nexport { render };\n')),Object(i.b)("h3",{id:"example-test"},"Example Test"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="components/myComponent/index.spec.tsx"',title:'"components/myComponent/index.spec.tsx"'}),'// highlight-next-line\nimport { fireEvent, render } from "@test"; // <root>/test/index.tsx\nimport { MyComponent } from "./MyComponent";\n\ndescribe("MyComponent", () => {\n    it("button is clickable", () => {\n        const mockFn = jest.fn();\n        // highlight-next-line\n        const { getByTestId } = render(<MyComponent onClick={mockFn} />);\n\n        const btn = getByTestId("btn");\n        fireEvent.click(btn);\n\n        expect(mockFn).toHaveBeenCalledTimes(1);\n    });\n});\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="components/myComponent/index.tsx"',title:'"components/myComponent/index.tsx"'}),'import React from "react";\n\nexport const MyComponent: React.FC<{ onClick: () => void }> = ({\n    onClick,\n}) => {\n    return (\n        <div>\n            <button data-testid="btn" onClick={onClick}>\n                Click Me!\n            </button>\n        </div>\n    );\n};\n')),Object(i.b)("h3",{id:"running-tests"},"Running Tests"),Object(i.b)("p",null,"We will use Jest as our test runner. If Jest is already set up you can simply run:"),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run test\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn test\n")))),Object(i.b)("h2",{id:"adding-testing-library-to-your-project-later"},"Adding Testing Library to your project later"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"All this work will be handled automatically by superplate, so you don\u2019t need to do anything extra as long as you choose testing-library as testing plugin during the project creation phase."))),Object(i.b)("p",null,"If you want to add React Testing Library to your existing project first install the dependencies"),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install -D @testing-library/react @testing-library/react-hooks\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn add -D @testing-library/react @testing-library/react-hooks\n")))),Object(i.b)("p",null,"Then you can follow documentations for detail usage"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"React Testing Library ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://testing-library.com/docs/react-testing-library/intro/"}),"documentation")),Object(i.b)("li",{parentName:"ul"},"Next.js with Jest and Testing Library ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest"}),"example repository"))))}u.isMDXComponent=!0}}]);