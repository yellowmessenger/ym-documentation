(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||l;return t?r.a.createElement(d,i(i({ref:n},p),{},{components:t})):r.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},56:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(6),l=(t(0),t(165)),o={},i={unversionedId:"agentsAvailable",id:"agentsAvailable",isDocsHomePage:!1,title:"agentsAvailable",description:"app.agentsAvailable() is used to a list of online agents.",source:"@site/docs/agentsAvailable.md",slug:"/agentsAvailable",permalink:"/docs/agentsAvailable",editUrl:"https://github.com/yellowmessenger/platform-documentation/docs/agentsAvailable.md",version:"current",sidebar:"docs",previous:{title:"raiseTicket",permalink:"/docs/raiseTicket"},next:{title:"agentsOnline",permalink:"/docs/agentsOnline"}},c=[{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]},{value:"Example Output:",id:"example-output",children:[]}],p={rightToc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"app.agentsAvailable() is used to a list of online agents.\n\u200b"),Object(l.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(l.b)("p",null,"Array of objects, with all the details of the online agents.\n\u200b"),Object(l.b)("h2",{id:"example-usage"},"Example Usage"),Object(l.b)("p",null,"\u200b"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'app.agentsAvailable().then((agents) => {\n                app.log(agents, "agentsAvailable")\n            });\n')),Object(l.b)("h2",{id:"example-output"},"Example Output:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),' agentsAvailable {\n             "email": "xyz@gmail.com",\n             "username": "xyz",\n             "name": "xyz",\n             "call_enabled": false,\n             "voip_call_enabled": false,\n             "voip_password": null,\n             "webrtc_username": null,\n             "xmppUsername": "user_1602478055017",\n             "user_id": 84799,\n             "status": "available",\n             "agentProfile": {\n                 "email": "xyz@gmail.com",\n                 "id": 1234,\n                 "owner": "x1************7",\n                 "username": "xyz",\n                 "user_id": 2345,\n                 "name": "xyz",\n                 "profile_picture": "https://cdn.yellowmessenger.com/pic3.png",\n                 "description": "xyz",\n                 "max_conn_tickets": 50,\n                 "call_enabled": 0,\n                 "voip_call_enabled": 0,\n                 "voip_password": null,\n                 "webrtc_username": null,\n                 "xmpp_username": "xyz"\n             },\n             "xmpp": "xyz",\n             "currentHandlingTicketsCount": 13\n         }\n')))}s.isMDXComponent=!0}}]);