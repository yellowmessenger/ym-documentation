(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),p=(r(0),r(165)),o={id:"app.allSteps",title:"app.allSteps",sidebar_label:"app.allSteps"},l={unversionedId:"app.allSteps",id:"app.allSteps",isDocsHomePage:!1,title:"app.allSteps",description:"Input Parameters",source:"@site/docs/app-allSteps.md",slug:"/app.allSteps",permalink:"/docs/app.allSteps",editUrl:"https://github.com/yellowmessenger/platform-documentation/docs/app-allSteps.md",version:"current",sidebar_label:"app.allSteps",sidebar:"docs",previous:{title:"app.ai",permalink:"/docs/app.ai"},next:{title:"app.context",permalink:"/docs/app.context"}},i=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(p.b)("p",null,"It is an Array contains info of each step id and slug as an object. "),Object(p.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(p.b)("h2",{id:"examples"},"Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{}),'app.log(app.allSteps);\n\n// the log will look like below\n[\n    {\n        "id": "5e31aa76069ba4001001e341",\n        "slug": "hi"\n    },\n    {\n        "id": "5e31aa8a7971bc0010d1f32a",\n        "slug": "bye"\n    }\n]\n')))}u.isMDXComponent=!0},165:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||p;return r?a.a.createElement(m,l(l({ref:t},c),{},{components:r})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<p;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);