(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{175:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,s=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?r.a.createElement(s,c(c({ref:t},p),{},{components:a})):r.a.createElement(s,c({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<i;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(175)),l={},c={unversionedId:"app.utilFunctions",id:"app.utilFunctions",isDocsHomePage:!1,title:"app.utilFunctions",description:"This object contains utility functions to speed up the development",source:"@site/docs/app.utilFunctions.md",slug:"/app.utilFunctions",permalink:"/platform-documentation/docs/app.utilFunctions",editUrl:"https://github.com/yellowmessenger/platform-documentation/docs/app.utilFunctions.md",version:"current",sidebar:"docs",previous:{title:"app.xmlToJSON",permalink:"/platform-documentation/docs/app.xmlToJSON"},next:{title:"app.translate",permalink:"/platform-documentation/docs/app.translate"}},o=[{value:"Methods",id:"methods",children:[]},{value:"emailValidator",id:"emailvalidator",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Return Value | <code>array</code>",id:"return-value--array",children:[]},{value:"Example",id:"example-2",children:[]}]},{value:"mobileNumValidator",id:"mobilenumvalidator",children:[{value:"Syntax",id:"syntax-1",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"Return Value | <code>array</code>",id:"return-value--array-1",children:[]},{value:"Example",id:"example-5",children:[]}]},{value:"pinCodeValidator",id:"pincodevalidator",children:[{value:"Syntax",id:"syntax-2",children:[]},{value:"Parameters",id:"parameters-2",children:[]},{value:"Return Value | <code>array</code>",id:"return-value--array-2",children:[]},{value:"Example",id:"example-8",children:[]}]}],p={rightToc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This object contains utility functions to speed up the development\nprocess like ",Object(i.b)("inlineCode",{parentName:"p"},"emailValidator"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pinCodeValidator"),", and\n",Object(i.b)("inlineCode",{parentName:"p"},"mobileNumValidator")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h2",{id:"emailvalidator"},"emailValidator"),Object(i.b)("p",null,"This method validates the given string for any valid emails are present\nor not. If valid emails are present it returns the matched emails array\notherwise it returns an empty array."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.utilFunctions.emailValidator(emailString)\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("h4",{id:"emailstring--string"},"emailString ","|"," ",Object(i.b)("inlineCode",{parentName:"h4"},"string")),Object(i.b)("p",null,"A string to test it contains any valid emails"),Object(i.b)("h4",{id:"example"},"example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"example@example.com\n")),Object(i.b)("h3",{id:"return-value--array"},"Return Value ","|"," ",Object(i.b)("inlineCode",{parentName:"h3"},"array")),Object(i.b)("p",null,"If valid emails are present it returns the matched emails array\notherwise it returns an empty array."),Object(i.b)("h4",{id:"example-1"},"example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'[\n  "example@example.com"\n]\nor\n[] //if emails not matched\n')),Object(i.b)("h3",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let email = `example@example.com`;\nlet matches = app.utilFunctions.emailValidator(email)\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"mobilenumvalidator"},"mobileNumValidator"),Object(i.b)("p",null,"This method validates the given string is a valid mobile number or not.\nThen it returns the matched mobile number as an array otherwise it\nreturns an empty array."),Object(i.b)("h3",{id:"syntax-1"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.utilFunctions.mobileNumValidator(mobile)\n")),Object(i.b)("h3",{id:"parameters-1"},"Parameters"),Object(i.b)("h4",{id:"mobile-string"},"mobile","|"," ",Object(i.b)("inlineCode",{parentName:"h4"},"string")),Object(i.b)("p",null,"A string to test it contains any valid mobile numbers"),Object(i.b)("h4",{id:"example-3"},"example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"9876543210\n")),Object(i.b)("h3",{id:"return-value--array-1"},"Return Value ","|"," ",Object(i.b)("inlineCode",{parentName:"h3"},"array")),Object(i.b)("p",null,"If a valid mobile number is present it returns the matched number as an\narray otherwise it returns an empty array."),Object(i.b)("h4",{id:"example-4"},"example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'[\n  "9876543210"\n]\nor\n[] //if mobile number is not matched\n')),Object(i.b)("h3",{id:"example-5"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let mobile = '9839874325'; //[6-9]XXXXXXXXX, 091[6-9]XXXXXXXXX, 091-[6-9]XXXXXXXXX\nlet matches = app.utilFunctions.mobileNumValidator(mobile);\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"pincodevalidator"},"pinCodeValidator"),Object(i.b)("p",null,"This method validates the given string is a valid mobile number or not.\nThen it returns the matched mobile number as an array otherwise it\nreturns an empty array."),Object(i.b)("h3",{id:"syntax-2"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.utilFunctions.pinCodeValidator(pincode)\n")),Object(i.b)("h3",{id:"parameters-2"},"Parameters"),Object(i.b)("h4",{id:"pincode--string"},"pincode ","|"," ",Object(i.b)("inlineCode",{parentName:"h4"},"string")),Object(i.b)("p",null,"A string to test whether it is valid Pincode or not"),Object(i.b)("h4",{id:"example-6"},"example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"516390\n")),Object(i.b)("h3",{id:"return-value--array-2"},"Return Value ","|"," ",Object(i.b)("inlineCode",{parentName:"h3"},"array")),Object(i.b)("p",null,"If a valid Pincode is present it returns the matched Pincode as an array\notherwise it returns an empty array."),Object(i.b)("h4",{id:"example-7"},"example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'[\n  "516390"\n]\nor\n[] //if pincode number is not matched\n')),Object(i.b)("h3",{id:"example-8"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let pincode = '516390';\nlet matches = app.utilFunctions.pinCodeValidator(pincode);\n")),Object(i.b)("hr",null))}b.isMDXComponent=!0}}]);