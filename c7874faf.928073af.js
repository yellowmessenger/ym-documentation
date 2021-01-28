(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(165)),c={id:"executeFunction",title:"executeFunction",sidebar_label:"executeFunction"},u={unversionedId:"executeFunction",id:"executeFunction",isDocsHomePage:!1,title:"executeFunction",description:"Process to directly call/execute another function from the developer section",source:"@site/docs/method-executeFunction.md",slug:"/executeFunction",permalink:"/docs/executeFunction",editUrl:"https://github.com/yellowmessenger/platform-documentation/docs/method-executeFunction.md",version:"current",sidebar_label:"executeFunction",sidebar:"docs",previous:{title:"sendTextMessage",permalink:"/docs/sendTextMessage"},next:{title:"app.invokeJourney",permalink:"/docs/app.invokeJourney"}},i=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={rightToc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Process to directly call/execute another function from the developer section"),Object(a.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The first argument is the function name that we want to execute."),Object(a.b)("li",{parentName:"ol"},"The second argument deals with the arguments/parameters that we want the function to use.")),Object(a.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"app.executeFunction('functionName', args).then((optional_returned_value) => {\n// good practice to return resolve if nothing else has to be done, otherwise use the returned value (optional)\n    return resolve();\n }).catch((e) => {\n     //handle error\n })\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"args is a JSON Object")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"args = {\n   time: date,\n   mobile: app.context.steps['phone-number'],\n   branch: branch_name,\n   documents: documents,\n   address: branch_addr\n};\n")),Object(a.b)("p",null,"To use it in a function being called, directly name them as:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"app.sendTextMessage(`Branch name is ${args.branch}`);\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"There is no need to use .then and .catch but it is good practice since this function will be executed asynchronously and you may resolve the function before even actually setting the value.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If a value has to be returned, then return it as return value.")))}s.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,u(u({ref:t},l),{},{components:n})):o.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);