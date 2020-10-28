(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(174)),i={},c={unversionedId:"regexValidator",id:"regexValidator",isDocsHomePage:!1,title:"regexValidator",description:"app.regexValidator",source:"@site/docs/regexValidator.md",slug:"/regexValidator",permalink:"/ym-documentation/docs/regexValidator",editUrl:"https://github.com/yellowmessenger/ym-documentation/tree/master/docs/regexValidator.md",version:"current",sidebar:"docs",previous:{title:"setActionFunction",permalink:"/ym-documentation/docs/setActionFunction"},next:{title:"orchestratorBotId",permalink:"/ym-documentation/docs/orchestratorBotId"}},l=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output",id:"output",children:[]},{value:"Examples",id:"examples",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"appregexvalidator"},"app.regexValidator"),Object(o.b)("p",null,"Validates the given string against the regular expression"),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"regex")," : Regular experession to validate string"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"message")," : String to be validated"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"flag")," : Flags to be used for regular expression"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"fallBackMessage")," : Fallback message in case of failure")),Object(o.b)("h2",{id:"output"},"Output"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Function returns a ",Object(o.b)("strong",{parentName:"li"},"promise"))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app.regexValidator(\n    { regex: '(dart|cart)', message: \"bart gun\" }).then((res) => {\n    app.log(res);\n})\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"it prints an object with success key set to ",Object(o.b)("strong",{parentName:"p"},"false"))))}u.isMDXComponent=!0},174:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);