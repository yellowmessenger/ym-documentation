(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(174)),i={},c={unversionedId:"start",id:"start",isDocsHomePage:!1,title:"start",description:"This function will start the bot again with respect to app.data.message",source:"@site/docs/start.md",slug:"/start",permalink:"/docs/start",version:"current",sidebar:"docs",previous:{title:"getProfile",permalink:"/docs/getProfile"},next:{title:"logTimes",permalink:"/docs/logTimes"}},p=[{value:"Example",id:"example",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"This function will start the bot again with respect to app.data.message"),Object(o.a)("h2",{id:"example"},"Example"),Object(o.a)("p",null,"To know more about available options visit ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://yellowmessenger.atlassian.net/wiki/spaces/docs/pages/532513374/app.options"}),"app.options")," "),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{}),'let options = {\n  "minConfidence": 0.8,\n  "contextConfidence": 0.9,\n  "targetLanguage": "en"\n}\napp.start(options);\n')))}l.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),m=r,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);