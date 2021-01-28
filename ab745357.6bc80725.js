(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(175)),p={},l={unversionedId:"app.profile",id:"app.profile",isDocsHomePage:!1,title:"app.profile",description:"This object contains all about the user data i.e. userAgent, payload",source:"@site/docs/app.profile.md",slug:"/app.profile",permalink:"/platform-documentation/docs/app.profile",editUrl:"https://github.com/yellowmessenger/platform-documentation/docs/app.profile.md",version:"current",sidebar:"docs",previous:{title:"app.predictionEndTime",permalink:"/platform-documentation/docs/app.predictionEndTime"},next:{title:"app.soap",permalink:"/platform-documentation/docs/app.soap"}},o=[{value:"Objects",id:"objects",children:[{value:"userAgent",id:"useragent",children:[]}]},{value:"Properties",id:"properties",children:[{value:"city | <code>string</code>",id:"city--string",children:[]},{value:"country| <code>string</code>",id:"country-string",children:[]}]},{value:"More Properties",id:"more-properties",children:[]},{value:"Store Values",id:"store-values",children:[]}],c={rightToc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This object contains all about the user data i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"userAgent"),", ",Object(i.b)("inlineCode",{parentName:"p"},"payload"),"\n(anything passed using ym.payload)"),Object(i.b)("p",null,"The Update Profile functionality is used when we have to add some\nparameters to user profile"),Object(i.b)("p",null,"Most of the information is stored in\xa0",Object(i.b)("inlineCode",{parentName:"p"},"app.profile")," is"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ip")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Timezone, country_code, latitude, longitude, region, country, city,")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Device type, os, browser")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"UserId to uniquely identify the user")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"UTM parameters\n(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/UTM_parameters"})," https://en.wikipedia.org/wiki/UTM_parameters "),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Name: Anonymous unique name"))),Object(i.b)("p",null,"Typical ",Object(i.b)("inlineCode",{parentName:"p"},"app.profile")," object looks like this"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'{\n    "userAgent": {\n        "browser": "Chrome",\n        "os": "OS X",\n        "platform": "Apple Mac",\n        "source": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",\n        "device": "Desktop"\n    },\n    "city": "Bangalore",\n    "country": "India",\n    "region": "Karnataka",\n    "longitude": "77.603290",\n    "latitude": "12.976230",\n    "end_ip": 736141311,\n    "value": "560018",\n    "country_code": "IN",\n    "start_ip": 736140288,\n    "timezone": "+05:30",\n    "ip": "43.224.157.81",\n    "userId": null,\n    "userToken": null,\n    "name": "Nervous Destruction",\n    "utm_source": null,\n    "utm_campaign": null,\n    "utm_medium": null,\n    "utm_term": null,\n    "utm_content": null,\n}\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"objects"},"Objects"),Object(i.b)("h3",{id:"useragent"},"userAgent"),Object(i.b)("p",null,"This object contains about the user browser, device, platform, os, and\nsource"),Object(i.b)("h4",{id:"example"},"example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"userAgent": {\n        "browser": "Chrome",\n        "os": "OS X",\n        "platform": "Apple Mac",\n        "source": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",\n        "device": "Desktop"\n},\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"city--string"},"city ","|"," ",Object(i.b)("inlineCode",{parentName:"h3"},"string")),Object(i.b)("p",null,"Has the value user city name"),Object(i.b)("h4",{id:"example-1"},"example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"city": "Bangalore"\n')),Object(i.b)("hr",null),Object(i.b)("h3",{id:"country-string"},"country","|"," ",Object(i.b)("inlineCode",{parentName:"h3"},"string")),Object(i.b)("p",null,"Has the value of user country name"),Object(i.b)("h4",{id:"example-2"},"example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"country": "India"\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"more-properties"},"More Properties"),Object(i.b)("p",null,"It has the following properties along with the above"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"region"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"longitude"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"latitude"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"end_ip"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"value"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"country_code"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"start_ip"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"timezone"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ip"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"userId"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"userToken"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"name")," (Anonymous unique name )")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"utm_source"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"utm_campaign"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"utm_medium"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"utm_content"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"utm_term")))),Object(i.b)("h2",{id:"store-values"},"Store Values"),Object(i.b)("p",null,"We can also store values in ",Object(i.b)("inlineCode",{parentName:"p"},"app.profile")," object as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"app.profile.variable_name = varible_value;\n//example app.profile.mobileNum = '9876543210';\napp.updateProfile(); //call this method to update profile object\n")))}b.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=b(n),s=a,O=u["".concat(p,".").concat(s)]||u[s]||m[s]||i;return n?r.a.createElement(O,l(l({ref:t},c),{},{components:n})):r.a.createElement(O,l({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=n[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);