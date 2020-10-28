(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(174)),c={},p={unversionedId:"app.BOT_ENV",id:"app.BOT_ENV",isDocsHomePage:!1,title:"app.BOT_ENV",description:"//app.BOT_ENV",source:"@site/docs/app.BOT_ENV.md",slug:"/app.BOT_ENV",permalink:"/ym-documentation/docs/app.BOT_ENV",editUrl:"https://github.com/yellowmessenger/ym-documentation/tree/master/docs/app.BOT_ENV.md",version:"current",sidebar:"docs",previous:{title:"orchestratorBotId",permalink:"/ym-documentation/docs/orchestratorBotId"},next:{title:"triggerJourney",permalink:"/ym-documentation/docs/triggerJourney"}},i=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={rightToc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"//app.BOT_ENV"),Object(a.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"None")),Object(a.b)("p",null,"\u200b"),Object(a.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"returns the bot environment i.e. sanbox, staging, production\n\u200b")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,"\u200b"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"let currentENV = app.BOT_ENV\n\n\n")),Object(a.b)("p",null,"\u200b"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It is usually used to diffrentiate between enviornments so to dynamically change values like API keys, header etc.")))}l.isMDXComponent=!0},174:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||a;return r?o.a.createElement(d,p(p({ref:t},u),{},{components:r})):o.a.createElement(d,p({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);