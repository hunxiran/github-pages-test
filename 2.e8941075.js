/*! For license information please see 2.e8941075.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),h=r,m=f["".concat(i,".").concat(h)]||f[h]||d[h]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},161:function(e,t,n){"use strict";var r=n(0);const a=n.n(r).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=a},162:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(171),i=n(157),c=n(158);const l="",s="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(i.a)(),[t,n]=Object(r.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):l),a=Object(r.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[n]),o=Object(r.useCallback)(()=>{n(l),a(l)},[]),c=Object(r.useCallback)(()=>{n(s),a(s)},[]);return Object(r.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(r.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&n(e)}catch(t){console.error(t)}},[n]),Object(r.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{n(e?s:l)})},[]),{isDarkTheme:t===s,setLightTheme:o,setDarkTheme:c}},f=n(161);var d=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=u();return a.a.createElement(f.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},h=n(1),m=n(160),p=n(170),y=()=>null,b=n(166),v=n.n(b),g=n(159),k=n.n(g),E=n(93),O=n.n(E);const j=()=>a.a.createElement("span",{className:k()(O.a.toggle,O.a.moon)}),w=()=>a.a.createElement("span",{className:k()(O.a.toggle,O.a.sun)});var _=function(e){const{isClient:t}=Object(i.a)();return a.a.createElement(v.a,Object(h.a)({disabled:!t,icons:{checked:a.a.createElement(j,null),unchecked:a.a.createElement(w,null)}},e))},T=n(163),C=n(164);var S=function(e){const[t,n]=Object(r.useState)(e);return Object(r.useEffect)(()=>{const e=()=>n(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,n]};var N=e=>{const[t,n]=Object(r.useState)(!0),[a,o]=Object(r.useState)(!1),[i,c]=Object(r.useState)(0),[l,s]=Object(r.useState)(0),u=Object(r.useCallback)(e=>{null!==e&&s(e.getBoundingClientRect().height)},[]),f=Object(C.b)(),[d,h]=S(f.hash),m=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(e<l)return;if(a)return o(!1),n(!1),void c(e);const t=document.documentElement.scrollHeight-l,r=window.innerHeight;i&&e>i?n(!1):e+r<t&&n(!0),c(e)};return Object(r.useEffect)(()=>{if(e)return window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}},[i,l]),Object(r.useEffect)(()=>{e&&(n(!0),h(f.hash))},[f]),Object(r.useEffect)(()=>{e&&d&&o(!0)},[d]),{navbarRef:u,isNavbarVisible:t}},x=n(165),P=n(94),L=n.n(P);function A({activeBasePath:e,to:t,href:n,label:r,position:o,...i}){const l=Object(c.a)(t),s=Object(c.a)(e);return a.a.createElement(m.a,Object(h.a)({className:"navbar__item navbar__link"},n?{target:"_blank",rel:"noopener noreferrer",href:n}:{activeClassName:"navbar__link--active",to:l,...e?{isActive:(e,t)=>t.pathname.startsWith(s)}:null},i),r)}var M=function(){const{siteConfig:e={},isClient:t}=Object(i.a)(),{baseUrl:n,themeConfig:o={}}=e,{navbar:l={},disableDarkMode:s=!1}=o,{title:u,logo:f={},links:d=[],hideOnScroll:b=!1}=l,[v,g]=Object(r.useState)(!1),[E,O]=Object(r.useState)(!1),{isDarkTheme:j,setLightTheme:w,setDarkTheme:C}=Object(T.a)(),{navbarRef:S,isNavbarVisible:P}=N(b);Object(x.a)(v);const M=Object(r.useCallback)(()=>{g(!0)},[g]),D=Object(r.useCallback)(()=>{g(!1)},[g]),F=Object(r.useCallback)(e=>e.target.checked?C():w(),[w,C]),I=f.href||n;let B={};f.target?B={target:f.target}:Object(p.a)(I)||(B={rel:"noopener noreferrer",target:"_blank"});const R=f.srcDark&&j?f.srcDark:f.src,H=Object(c.a)(R);return a.a.createElement("nav",{ref:S,className:k()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":v,[L.a.navbarHideable]:b,[L.a.navbarHidden]:!P})},a.a.createElement("div",{className:"navbar__inner"},a.a.createElement("div",{className:"navbar__items"},a.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},a.a.createElement("title",null,"Menu"),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.a.createElement(m.a,Object(h.a)({className:"navbar__brand",to:I},B),null!=f&&a.a.createElement("img",{key:t,className:"navbar__logo",src:H,alt:f.alt}),null!=u&&a.a.createElement("strong",{className:k()("navbar__title",{[L.a.hideLogoText]:E})},u)),d.filter(e=>"right"!==e.position).map((e,t)=>a.a.createElement(A,Object(h.a)({},e,{key:t})))),a.a.createElement("div",{className:"navbar__items navbar__items--right"},d.filter(e=>"right"===e.position).map((e,t)=>a.a.createElement(A,Object(h.a)({},e,{key:t}))),!s&&a.a.createElement(_,{className:L.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:j,onChange:F}),a.a.createElement(y,{handleSearchBarToggle:O,isSearchBarExpanded:E}))),a.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:D}),a.a.createElement("div",{className:"navbar-sidebar"},a.a.createElement("div",{className:"navbar-sidebar__brand"},a.a.createElement(m.a,Object(h.a)({className:"navbar__brand",onClick:D,to:I},B),null!=f&&a.a.createElement("img",{key:t,className:"navbar__logo",src:H,alt:f.alt}),null!=u&&a.a.createElement("strong",{className:"navbar__title"},u)),!s&&v&&a.a.createElement(_,{"aria-label":"Dark mode toggle in sidebar",checked:j,onChange:F})),a.a.createElement("div",{className:"navbar-sidebar__items"},a.a.createElement("div",{className:"menu"},a.a.createElement("ul",{className:"menu__list"},d.map((e,t)=>a.a.createElement("li",{className:"menu__list-item",key:t},a.a.createElement(A,Object(h.a)({className:"menu__link"},e,{onClick:D})))))))))},D=n(95),F=n.n(D);function I({to:e,href:t,label:n,...r}){const o=Object(c.a)(e);return a.a.createElement(m.a,Object(h.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:o},r),n)}const B=({url:e,alt:t})=>a.a.createElement("img",{className:"footer__logo",alt:t,src:e});var R=function(){const e=Object(i.a)(),{siteConfig:t={}}=e,{themeConfig:n={}}=t,{footer:r}=n,{copyright:o,links:l=[],logo:s={}}=r||{},u=Object(c.a)(s.src);return r?a.a.createElement("footer",{className:k()("footer",{"footer--dark":"dark"===r.style})},a.a.createElement("div",{className:"container"},l&&l.length>0&&a.a.createElement("div",{className:"row footer__links"},l.map((e,t)=>a.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?a.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.a.createElement(I,e)))):null))),(s||o)&&a.a.createElement("div",{className:"text--center"},s&&s.src&&a.a.createElement("div",{className:"margin-bottom--sm"},s.href?a.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:F.a.footerLogoLink},a.a.createElement(B,{alt:s.alt,url:u})):a.a.createElement(B,{alt:s.alt,url:u})),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))):null};n(96);t.a=function(e){const{siteConfig:t={}}=Object(i.a)(),{favicon:n,title:r,themeConfig:{image:l},url:s}=t,{children:u,title:f,noFooter:h,description:m,image:p,keywords:y,permalink:b,version:v}=e,g=f?`${f} | ${r}`:r,k=p||l,E=s+Object(c.a)(k),O=Object(c.a)(n);return a.a.createElement(d,null,a.a.createElement(o.a,null,a.a.createElement("html",{lang:"en"}),a.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),g&&a.a.createElement("title",null,g),g&&a.a.createElement("meta",{property:"og:title",content:g}),n&&a.a.createElement("link",{rel:"shortcut icon",href:O}),m&&a.a.createElement("meta",{name:"description",content:m}),m&&a.a.createElement("meta",{property:"og:description",content:m}),v&&a.a.createElement("meta",{name:"docsearch:version",content:v}),y&&y.length&&a.a.createElement("meta",{name:"keywords",content:y.join(",")}),k&&a.a.createElement("meta",{property:"og:image",content:E}),k&&a.a.createElement("meta",{property:"twitter:image",content:E}),k&&a.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${g}`}),b&&a.a.createElement("meta",{property:"og:url",content:s+b}),a.a.createElement("meta",{name:"twitter:card",content:"summary"})),a.a.createElement(M,null),a.a.createElement("div",{className:"main-wrapper"},u),!h&&a.a.createElement(R,null))}},163:function(e,t,n){"use strict";var r=n(0),a=n(161);t.a=function(){return Object(r.useContext)(a.a)}},164:function(e,t,n){"use strict";var r=n(19);n.d(t,"a",(function(){return r.c})),n.d(t,"b",(function(){return r.d}))},165:function(e,t,n){"use strict";var r=n(0);t.a=function(e=!0){Object(r.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=d(o),c=d(n(159)),l=d(n(8)),s=d(n(167)),u=d(n(168)),f=n(169);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,f.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,f.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,f.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=(t.icons,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","icons"])),o=(0,c.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return i.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",r({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:i.default.createElement(s.default,null),unchecked:i.default.createElement(u.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}},173:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(160),c=n(159),l=n.n(c),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(36).a,theme:s};function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=d({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=d({},n,{backgroundColor:null}),a};function b(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var v=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),f(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),f(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=d({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?d({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),f(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(c))}})),f(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=d({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?d({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,c=[],l=[c];i>-1;){for(;(o=r[i]++)<a[i];){var s=void 0,u=t[i],f=n[i][o];if("string"==typeof f?(u=i>0?u:["plain"],s=f):(u=p(u,f.type),f.alias&&(u=p(u,f.alias)),s=f.content),"string"==typeof s){var d=s.split(h),y=d.length;c.push({types:u,content:d[0]});for(var b=1;b<y;b++)m(c),l.push(c=[]),c.push({types:u,content:d[b]})}else i++,t.push(u),n.push(s),r.push(0),a.push(s.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return m(c),l}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),g=n(180),k=n.n(g),E=n(178),O=n.n(E),j=n(179),w=n.n(j),_=n(157),T=n(163),C=n(102),S=n.n(C);const N=/{([\d,-]+)}/;var x=({children:e,className:t,metastring:n})=>{const{siteConfig:{themeConfig:{prism:i={}}}}=Object(_.a)(),[c,s]=Object(a.useState)(!1),[f,d]=Object(a.useState)(!1);Object(a.useEffect)(()=>{d(!0)},[]);const h=Object(a.useRef)(null),m=Object(a.useRef)(null);let p=[];const{isDarkTheme:y}=Object(T.a)(),b=i.theme||k.a,g=i.darkTheme||b,E=y?g:b;if(n&&N.test(n)){const e=n.match(N)[1];p=w.a.parse(e).filter(e=>e>0)}Object(a.useEffect)(()=>{let e;return m.current&&(e=new O.a(m.current,{target:()=>h.current})),()=>{e&&e.destroy()}},[m.current,h.current]);let j=t&&t.replace(/language-/,"");!j&&i.defaultLanguage&&(j=i.defaultLanguage);const C=()=>{window.getSelection().empty(),s(!0),setTimeout(()=>s(!1),2e3)};return o.a.createElement(v,Object(r.a)({},u,{key:f,theme:E,code:e.replace(/\n$/,""),language:j}),({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:i})=>o.a.createElement("pre",{className:l()(e,S.a.codeBlock)},o.a.createElement("button",{ref:m,type:"button","aria-label":"Copy code to clipboard",className:S.a.copyButton,onClick:C},c?"Copied":"Copy"),o.a.createElement("code",{ref:h,className:S.a.codeBlockLines,style:t},n.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return p.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(r.a)({key:t},n),e.map((e,t)=>o.a.createElement("span",Object(r.a)({key:t},i({token:e,key:t})))))}))))},P=(n(103),n(104)),L=n.n(P);var A=e=>function({id:t,...n}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:r=!1}={}}={}}={}}=Object(_.a)();return t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:l()("anchor",{[L.a.enhancedAnchor]:!r}),id:t}),o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#"),n.children):o.a.createElement(e,n)},M=n(105),D=n.n(M);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?o.a.createElement(x,e):t},a:e=>/\.[^./]+$/.test(e.href)?o.a.createElement("a",e):o.a.createElement(i.a,e),pre:e=>o.a.createElement("div",Object(r.a)({className:D.a.mdxCodeBlock},e)),h1:A("h1"),h2:A("h2"),h3:A("h3"),h4:A("h4"),h5:A("h5"),h6:A("h6")}},178:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),a=document.createRange();a.selectNodeContents(e),r.removeAllRanges(),r.addRange(a),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function a(){r.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,a=n.length;r<a;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],a=[];if(r&&t)for(var o=0,i=r.length;o<i;o++)r[o].fn!==t&&r[o].fn._!==t&&a.push(r[o]);return a.length?n[e]=a:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),a=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return a(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function a(e,t,n,r,a){var i=o.apply(this,arguments);return e.addEventListener(n,i,a),{destroy:function(){e.removeEventListener(n,i,a)}}}function o(e,t,n,a){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&a.call(e,n)}}e.exports=function(e,t,n,r,o){return"function"==typeof e.addEventListener?a.apply(null,arguments):"function"==typeof n?a.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return a(e,t,n,r,o)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=a()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=a()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=n(1),s=n.n(l),u=n(2),f=n.n(u),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),h(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=f()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return p("action",e)}},{key:"defaultTarget",value:function(e){var t=p("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return p("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(s.a);function p(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=m}]).default},e.exports=r()},179:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],a=t[3];if(n&&a){var o=[],i=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(a+=i);for(var c=n;c!=a;c+=i)o.push(c);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},180:function(e,t){e.exports={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]}}}]);