(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(175)),c={},p={unversionedId:"app.xmppObj",id:"app.xmppObj",isDocsHomePage:!1,title:"app.xmppObj",description:"This object contains journey name, id, slug, and target language",source:"@site/docs/app.xmppObj.md",slug:"/app.xmppObj",permalink:"/platform-documentation/docs/app.xmppObj",editUrl:"https://github.com/yellowmessenger/platform-documentation/docs/app.xmppObj.md",version:"current",sidebar:"docs",previous:{title:"app.soap",permalink:"/platform-documentation/docs/app.soap"},next:{title:"app.xmlToJSON",permalink:"/platform-documentation/docs/app.xmlToJSON"}},i=[{value:"Properties",id:"properties",children:[{value:"journeyId | <code>string</code>",id:"journeyid--string",children:[]},{value:"journeyName | <code>string</code>",id:"journeyname--string",children:[]},{value:"journeySlug | <code>string</code>",id:"journeyslug--string",children:[]},{value:"targetLanguage | <code>string</code>",id:"targetlanguage--string",children:[]}]}],l={rightToc:i};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This object contains journey name, id, slug, and target language"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'{\n    "journeyId": "5e155fd3071e0a0010064a8c",\n    "journeyName": "News Feed",\n    "journeySlug": "news-feed",\n    "targetLanguage": "en"\n}\n')),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"journeyid--string"},"journeyId ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"string")),Object(o.b)("p",null,"Has the value of the journey id"),Object(o.b)("h4",{id:"example"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'"journeyId": "5e2fc40b4f6ce40010c2e894"\n')),Object(o.b)("hr",null),Object(o.b)("h3",{id:"journeyname--string"},"journeyName ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"string")),Object(o.b)("p",null,"Has the value of the journey name"),Object(o.b)("h4",{id:"example-1"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'"journeyName": "News Feed"\n')),Object(o.b)("hr",null),Object(o.b)("h3",{id:"journeyslug--string"},"journeySlug ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"string")),Object(o.b)("p",null,"Has the value of the journey slug"),Object(o.b)("h4",{id:"example-2"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'"journeySlug": "news-feed"\n')),Object(o.b)("hr",null),Object(o.b)("h3",{id:"targetlanguage--string"},"targetLanguage ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"string")),Object(o.b)("p",null,"Has the value of the target language"),Object(o.b)("h4",{id:"example-3"},"example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'"targetLanguage": "en"\n')))}u.isMDXComponent=!0},175:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,j=b["".concat(c,".").concat(d)]||b[d]||s[d]||o;return t?a.a.createElement(j,p(p({ref:n},l),{},{components:t})):a.a.createElement(j,p({ref:n},l))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);