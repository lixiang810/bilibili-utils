(this["webpackJsonpbili-utils"]=this["webpackJsonpbili-utils"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);for(var i=n(0),o=n(10),a=n.n(o),c=(n(77),n(43)),r="fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",s={},l=0;l<58;l++)s[r[l]]=l;var u=[11,10,3,8,4,6],d=177451812,h=8728348608;var j=n(135),b=n(146),f=n(144),p=n(138),g=n(147),v=n(148),m=n(149),w=n(150),x=n(153),O=n(151),k=n(65),y=n(145),B=n(40),C=n(152),W=n(64),S=n.n(W),L=n(58),N=n.n(L),A=n(140),T=n(141),F=n(142),P=n(143),V=n(8),E=Object(j.a)({root:{maxWidth:345},media:{maxHeight:250}}),M=function(e){var t=E();return console.log(e.bvnum),Object(V.jsx)(p.a,{item:!0,children:Object(V.jsx)(A.a,{className:t.root,children:Object(V.jsxs)(T.a,{onClick:function(){setTimeout((function(){window.open("http://www.bilibili.com/video/".concat(e.bvnum))}),200)},children:[Object(V.jsx)(F.a,{className:t.media,component:"img",image:e.src,title:"Contemplative Reptile"}),Object(V.jsx)(P.a,{children:Object(V.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title})})]})})})},R=Object(k.a)({palette:{primary:y.a,secondary:B.a}}),U=Object(j.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"500px",height:"auto"},icon:{color:"rgba(255, 255, 255, 0.54)"},menuButton:{marginRight:e.spacing(2)},videoelement:{width:"500px",height:"500px"}}})),z=function(e){var t=e.prop,n=U();return 0===t.length?"":Object(V.jsxs)(b.a,{children:[Object(V.jsx)(f.a,{variant:"text",style:{color:"#8A8A8A"},children:"\u63a8\u8350\u89c6\u9891\u5217\u8868"}),Object(V.jsx)(p.a,{container:!0,spacing:2,children:t.map((function(e){var t="http://localhost:8080/".concat(e.cover),i=function(e){e=(e^d)+h;for(var t="BV1  4 1 7  ".split(""),n=0;n<6;n++)t[u[n]]=r[Math.floor(e/Math.pow(58,n))%58];return t.join("")}(e.aid);return Object(V.jsx)(M,{bvnum:i,src:t,title:e.title,className:n.videoelement},e.aid)}))})]})},D=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],a=Object(i.useState)("BV1uX4y1N7LS"),r=Object(c.a)(a,2),l=r[0],j=r[1],b=U();return Object(V.jsxs)(g.a,{theme:R,children:[Object(V.jsx)(v.a,{position:"static",children:Object(V.jsxs)(m.a,{children:[Object(V.jsx)(w.a,{edge:"start",className:b.menuButton,color:"inherit","aria-label":"menu",children:Object(V.jsx)(S.a,{})}),Object(V.jsx)(f.a,{variant:"h6",children:"\u83b7\u53d6\u63a8\u8350\u89c6\u9891"})]})}),Object(V.jsxs)(p.a,{container:!0,children:[Object(V.jsxs)(p.a,{item:!0,style:{margin:R.spacing(1)},children:[Object(V.jsx)(x.a,{variant:"outlined",size:"small",label:"BV\u53f7",placeholder:"BV1uX4y1N7LS",onChange:function(e){j(e.target.value)}}),Object(V.jsxs)(O.a,{variant:"contained",color:"secondary",size:"large",onClick:function(e){e.preventDefault();var t=function(e){for(var t=0,n=0;n<6;n++)t+=s[e[u[n]]]*Math.pow(58,n);return t-h^d}(l),n="http://localhost:8080/http://api.bilibili.cn/author_recommend?aid=".concat(t);N.a.get(n).then((function(e){o([]),o(e.data.list)})).catch((function(e){alert("".concat(e))}))},style:{marginLeft:R.spacing(1)},children:[Object(V.jsx)(C.a,{}),"\u83b7\u53d6"]})]}),Object(V.jsx)(p.a,{item:!0,children:Object(V.jsx)(z,{prop:n})})]})]})},J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),o(e),a(e),c(e)}))};a.a.render(Object(V.jsx)(D,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/bilibili-utils",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/bilibili-utils","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):X(t,e)}))}}(),H()},77:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.cb2f9313.chunk.js.map