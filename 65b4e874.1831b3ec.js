(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{174:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(b,i(i({ref:n},s),{},{components:t})):a.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(174)),c={},i={unversionedId:"getAgents",id:"getAgents",isDocsHomePage:!1,title:"getAgents",description:"app.getAgents() is used to a list of agents that have signed up in the 'Support' portal.",source:"@site/docs/getAgents.md",slug:"/getAgents",permalink:"/ym-documentation/docs/getAgents",editUrl:"https://github.com/yellowmessenger/ym-documentation/tree/master/docs/getAgents.md",version:"current",sidebar:"docs",previous:{title:"agentsOnline",permalink:"/ym-documentation/docs/agentsOnline"},next:{title:"setVariables",permalink:"/ym-documentation/docs/setVariables"}},l=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]},{value:"Example Output:",id:"example-output",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"app.getAgents() is used to a list of agents that have signed up in the 'Support' portal."),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("p",null,"None\n\u200b"),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("p",null,"Array of objects, with all the details of all the signed up agents.\n\u200b"),Object(o.b)("h2",{id:"example-usage"},"Example Usage"),Object(o.b)("p",null,"\u200b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'app.getAgents().then((agents) => {\n    app.log(agents, "allAgentsData")\n});\n')),Object(o.b)("h2",{id:"example-output"},"Example Output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'agents {\n             "success": true,\n             "message": "",\n             "data": [\n                 {\n                     "email": "abcd@gmail.com",\n                     "id": 12345,\n                     "owner": "x1***********7",\n                     "username": "abcd",\n                     "user_id": 7890,\n                     "name": "abcd xyz",\n                     "profile_picture": "https://cdn.yellowmessenger.com/pic1.png",\n                     "description": "xyz",\n                     "max_conn_tickets": 50,\n                     "call_enabled": 0,\n                     "voip_call_enabled": 0,\n                     "voip_password": null,\n                     "webrtc_username": null,\n                     "xmpp_username": "xyz",\n                     "avalability": {\n                         "currentHandlingTicketsCount": 0,\n                         "status": "offline"\n                     }\n                 },\n                 {\n                     "email": "xyz@ym.com",\n                     "id": 7890,\n                     "owner": "x1**********7",\n                     "username": "xyz",\n                     "user_id": 1234,\n                     "name": "xyz",\n                     "profile_picture": "https://cdn.yellowmessenger.com/pic2.png",\n                     "description": "abc",\n                     "max_conn_tickets": 50,\n                     "call_enabled": 0,\n                     "voip_call_enabled": 0,\n                     "voip_password": null,\n                     "webrtc_username": null,\n                     "xmpp_username": "abc",\n                     "avalability": {\n                         "currentHandlingTicketsCount": 5,\n                         "status": "offline"\n                     }\n                 },\n             ]\n         }\n')))}p.isMDXComponent=!0}}]);