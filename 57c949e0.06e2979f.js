(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{174:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,y=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return n?o.a.createElement(y,u(u({ref:t},p),{},{components:n})):o.a.createElement(y,u({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(174)),i={id:"app.invokeJourney",title:"app.invokeJourney",sidebar_label:"app.invokeJourney"},u={unversionedId:"app.invokeJourney",id:"app.invokeJourney",isDocsHomePage:!1,title:"app.invokeJourney",description:"Process to invoke journey directly from the developer section",source:"@site/docs/method-app-invokeJourney.md",slug:"/app.invokeJourney",permalink:"/ym-documentation/docs/app.invokeJourney",editUrl:"https://github.com/yellowmessenger/ym-documentation/tree/master/docs/method-app-invokeJourney.md",version:"current",sidebar_label:"app.invokeJourney",sidebar:"docs",previous:{title:"executeFunction",permalink:"/ym-documentation/docs/executeFunction"},next:{title:"app.renderMessage",permalink:"/ym-documentation/docs/app.renderMessage"}},c=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Process to invoke journey directly from the developer section"),Object(a.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(a.b)("p",null,"1.The first argument is the name of that journey that we want to invoke.\n1.The second argument deals with the entity that is being used.\n1.The third argument sets a value to a particular step of that journey."),Object(a.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"app.invokeJourney('journeyName', {entityName: 'entityValue'} , {'stepName': value}).then(() => {\n    resolve();\n }).catch((e) => {\n    //handle error\n })\n\n// This will trigger default intent\napp.invokeJourney('intentName')\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"journeyName and stepName should be slug names i.e, the name mentioned in brackets of journeys and steps.")))}l.isMDXComponent=!0}}]);