(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),c=(t(0),t(165)),i={},o={unversionedId:"getCurrentActiveTicket",id:"getCurrentActiveTicket",isDocsHomePage:!1,title:"getCurrentActiveTicket",description:"getCurrentActiveTicket",source:"@site/docs/getCurrentActiveTicket.md",slug:"/getCurrentActiveTicket",permalink:"/docs/getCurrentActiveTicket",editUrl:"https://github.com/yellowmessenger/platform-documentation/docs/getCurrentActiveTicket.md",version:"current",sidebar:"docs",previous:{title:"libphonenumber-js",permalink:"/docs/libphonenumber-js"},next:{title:"createEmailTicket",permalink:"/docs/createEmailTicket"}},s=[{value:"getCurrentActiveTicket",id:"getcurrentactiveticket",children:[{value:"Input parameters",id:"input-parameters",children:[]},{value:"Example",id:"example",children:[]}]}],u={rightToc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"getcurrentactiveticket"},"getCurrentActiveTicket"),Object(c.b)("p",null,"returns the currently active (open/assigned/queued) ticket."),Object(c.b)("h3",{id:"input-parameters"},"Input parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'app.getCurrentActiveTicket()\n.then(app.log)\n.catch(app.log)\n\n\n//log\n\n {\n     "success": true,\n     "message": "success",\n     "data": {\n         "tags": [],\n         "responded": true,\n         "ticketType": "livechat",\n         "ticketCsatScore": null,\n         "agentCsatScore": null,\n         "comments": [],\n         "assignedByAdmin": false,\n         "manualAssignment": false,\n         "lastAgentMessageTime": 1605718004413,\n         "lastUserMessageTime": 1605718061222,\n         "userActiveStatus": "ACTIVE",\n         "agentActiveStatus": "ACTIVE",\n         "replyCount": 1,\n         "voiceCall": false,\n         "sipCall": false,\n         "agentCurrentHandlingTicketsCount": 0,\n         "autoStartCall": false,\n         "_id": "5fb54fdba5254c0011c95a29",\n         "ticketId": "100315",\n         "botId": "x1586702990815",\n         "uid": "918309798602",\n         "contact": {\n             "name": "Harish",\n             "phone": "8309798602",\n             "email": ""\n         },\n         "issue": "Issue not resolved -store",\n         "priority": "MEDIUM",\n         "status": "ASSIGNED",\n         "source": "whatsapp",\n         "assignedTo": "harishmukkarayellowmessengercom",\n         "xmpp": "user_1599108579034",\n         "assignedTime": "2020-11-18T16:46:18.996Z",\n         "timestamp": "2020-11-18T16:46:19.003Z",\n         "updated": "2020-11-18T16:47:41.222Z",\n         "reopenedBy": "harishmukkarayellowmessengercom",\n         "reopenedFrom": "100313",\n         "agentMobileApp": false,\n         "agentProfile": {\n             "name": "Harish Mukkara",\n             "profile_picture": "https://cdn.yellowmessenger.com/YCxnyq7Lo0L31563442773004.png",\n             "description": "Support Agent",\n             "email": "harish.mukkara@yellowmessenger.com"\n         },\n         "logs": [],\n         "reassignmentLog": [],\n         "collaborators": [\n             {\n                 "_id": "5fb54fdba5254c0011c95a2c",\n                 "username": "harishmukkarayellowmessengercom",\n                 "xmppUsername": "user_1599108579034",\n                 "name": "Harish Mukkara"\n             }\n         ],\n         "__v": 1,\n         "firstResponseTime": "2020-11-18T16:46:32.645Z",\n         "avgResponseTime": 5837\n     }\n }\n')))}l.isMDXComponent=!0},165:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,g=p["".concat(i,".").concat(d)]||p[d]||m[d]||c;return t?a.a.createElement(g,o(o({ref:n},u),{},{components:t})):a.a.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<c;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);