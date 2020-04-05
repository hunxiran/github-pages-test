(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(156)),i=n(158),c={id:"lesson6",title:"Evan You on the Virtual DOM",sidebar_label:"Lesson6"},s={id:"advanceComp/lesson6",title:"Evan You on the Virtual DOM",description:"import useBaseUrl from '@docusaurus/useBaseUrl';\r",source:"@site/docs\\advanceComp\\lesson6.md",permalink:"/github-pages-test/docs/advanceComp/lesson6",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanceComp/lesson6.md",sidebar_label:"Lesson6",sidebar:"someSidebar",previous:{title:"Template Compilation",permalink:"/github-pages-test/docs/advanceComp/lesson5"},next:{title:"Functional Components",permalink:"/github-pages-test/docs/advanceComp/lesson7"}},l=[{value:"Initial implementation",id:"initial-implementation",children:[]},{value:"Improving the current Virtual DOM implementation",id:"improving-the-current-virtual-dom-implementation",children:[]},{value:"Question: Do we really need a virtual DOM?",id:"question-do-we-really-need-a-virtual-dom",children:[]},{value:"Solution: The power of render functions",id:"solution-the-power-of-render-functions",children:[]},{value:"Up next",id:"up-next",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you watched the previous lesson then you\u2019re familiar with the workings of template compilation and Virtual DOM (VDom) in Vue. In this video Evan You, the creator of Vue, talks about the creation of the VDom, the present state, and the future."),Object(a.b)("h2",{id:"initial-implementation"},"Initial implementation"),Object(a.b)("p",null,"Evan credits ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/snabbdom/snabbdom"}),"snabbdom"),", a VDom library which he forked to create Vue\u2019s VDom. Snabbdom is simple, performant, extensible, and has a modular architecture."),Object(a.b)("p",null,"The modular design helps separate concerns into modules such as style, classes, and attributes. This makes it easy for Vue to have its own modules to handle ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/vuejs/vue/blob/dev/src/core/vdom/modules/directives.js"}),"directives")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/vuejs/vue/blob/dev/src/core/vdom/modules/ref.js"}),"ref"),". It also allows for the construction of a different patch functions with modules that target different platforms. This enables Vue to be platform agnostic and is what enables alternate platform implementations like ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://weex.incubator.apache.org/"}),"Weex")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nativescript.org/vue"}),"Nativescript"),"."),Object(a.b)("h2",{id:"improving-the-current-virtual-dom-implementation"},"Improving the current Virtual DOM implementation"),Object(a.b)("p",null,"The Vue team wishes to further trim down the current implementation of the VDom to enable performance improvements."),Object(a.b)("img",{alt:"VM",src:Object(i.a)("/img/VM.png")}),Object(a.b)("p",null,"The image above shows how the compilation phase can be further optimized for additional performance by doing static analysis amongst other improvements. Evan compares this to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://gcc.gnu.org/"}),"GNU Compiler Collection")," providing ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://gcc.gnu.org/onlinedocs/gnat_ugn/Optimization-Levels.html"}),"optimization levels")," to create a better assembly."),Object(a.b)("p",null,"This way the template syntax can remain the same while the underlying implementation can be iteratively optimized over time."),Object(a.b)("h2",{id:"question-do-we-really-need-a-virtual-dom"},"Question: Do we really need a virtual DOM?"),Object(a.b)("p",null,"The VDom certainly comes with its own trade-offs. Abstracting the browser DOM into a virtual representation does make things slower when you compare it to directly updating the DOM."),Object(a.b)("h2",{id:"solution-the-power-of-render-functions"},"Solution: The power of render functions"),Object(a.b)("p",null,"Evan clarifies that we need the VDom because of the power of render functions, where you get access to the power of JavaScript. Render functions can be used to create:"),Object(a.b)("p",null,"Functional wrapper components\nHigher order components containing complex arbritrary logic\nThe ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/vuejs/vue-router/blob/dev/src/components/view.js"}),"view.js")," of the Vue Router is a perfect example of the power of render functions."),Object(a.b)("h2",{id:"up-next"},"Up next"),Object(a.b)("p",null,"In the next lesson we\u2019ll have a closer look at functional components and their usage."))}p.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return n?o.a.createElement(d,c({ref:t},l,{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";var r=n(0),o=n(35);t.a=function(){return Object(r.useContext)(o.a)}},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(157);function o(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);