(function(){"use strict";var e={8679:function(e,t,n){var r=n(5130),a=n(6768);function o(e,t,n,r,o,i){const u=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)((0,a.$y)(e.$route.meta.layout||"div"),null,{default:(0,a.k6)((()=>[(0,a.bF)(u,null,{default:(0,a.k6)((({Component:e})=>[((0,a.uX)(),(0,a.Wv)((0,a.$y)(e)))])),_:1})])),_:1})}var i={name:"App"},u=n(1241);const c=(0,u.A)(i,[["render",o]]);var l=c,s=n(1387);function f(e,t,n,r,o,i){const u=(0,a.g2)("NavbarMenu"),c=(0,a.g2)("FooterSection");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(u),(0,a.RG)(e.$slots,"default"),(0,a.bF)(c)],64)}const d=e=>((0,a.Qi)("data-v-139b767e"),e=e(),(0,a.jt)(),e),p={class:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},v={class:"container"},m=d((()=>(0,a.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a.Lk)("span",{class:"navbar-toggler-icon"})],-1))),b={class:"collapse navbar-collapse",id:"navbarSupportedContent"},g={class:"navbar-nav ms-auto mb-2 mb-lg-0"},h={class:"nav-item"},y={class:"nav-item"},k={class:"nav-item"};function C(e,t,n,r,o,i){const u=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("nav",p,[(0,a.Lk)("div",v,[(0,a.bF)(u,{class:"navbar-brand",to:{name:"index"}},{default:(0,a.k6)((()=>[(0,a.eW)("RCE reader")])),_:1}),m,(0,a.Lk)("div",b,[(0,a.Lk)("ul",g,[(0,a.Lk)("li",h,[(0,a.bF)(u,{class:"nav-link",to:{name:"index"}},{default:(0,a.k6)((()=>[(0,a.eW)("Home")])),_:1})]),(0,a.Lk)("li",y,[(0,a.bF)(u,{class:"nav-link",to:{name:"weather"}},{default:(0,a.k6)((()=>[(0,a.eW)("Weather")])),_:1})]),(0,a.Lk)("li",k,[(0,a.bF)(u,{class:"nav-link",to:{name:"solar"}},{default:(0,a.k6)((()=>[(0,a.eW)("Solar")])),_:1})])])])])])}var w={name:"NavbarMenu",props:{msg:String}};const E=(0,u.A)(w,[["render",C],["__scopeId","data-v-139b767e"]]);var S=E,L=n(4232);const _={class:"py-5 bg-dark"},A={class:"container"},F={class:"m-0 text-center text-white"};function x(e,t,n,r,o,i){return(0,a.uX)(),(0,a.CE)("footer",_,[(0,a.Lk)("div",A,[(0,a.Lk)("p",F,"Copyright © RCE reader "+(0,L.v_)(r.currYear),1)])])}var O=n(5323),j={name:"FooterSection",props:{msg:String},setup(){return{currYear:(0,O.Y)(!0)}}};const N=(0,u.A)(j,[["render",x],["__scopeId","data-v-85dc9f02"]]);var T=N,D={name:"DefaultLayout",components:{NavbarMenu:S,FooterSection:T}};const P=(0,u.A)(D,[["render",f]]);var M=P;const W=[{path:"/",name:"index",component:()=>n.e(510).then(n.bind(n,9707)),meta:{layout:M}},{path:"/weather",name:"weather",component:()=>Promise.all([n.e(690),n.e(24)]).then(n.bind(n,3561)),meta:{layout:M}},{path:"/solar",name:"solar",component:()=>Promise.all([n.e(690),n.e(998)]).then(n.bind(n,7275)),meta:{layout:M}},{path:"/:pathMatch(.*)",name:"catchAll",component:()=>n.e(510).then(n.bind(n,9707))}],Y=(0,s.aE)({history:(0,s.LA)(),routes:W,mode:"history",base:"/",linkActiveClass:"active"});var X=Y;n(8077);const B=(0,r.Ef)(l);B.use(X),B.mount("#app")},5323:function(e,t,n){function r(e=!1){let t=new Date(Date.now());if(e)return t.getFullYear();const n=t.getHours();t=n<6?new Date(t.setDate(t.getDate()-1)):t;let r=t.getDate();const a=r<10?"0"+r:r;let o=t.getMonth()+1;const i=o<10?"0"+o:o,u=t.getFullYear();return u+"-"+i+"-"+a}n.d(t,{Y:function(){return r}})}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],a=e[s][1],o=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,o<i&&(i=o));if(u){e.splice(s--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{24:"7cdb827d",510:"5f19f693",690:"ca7ec59d",998:"2d733c2c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{24:"961d503c",510:"0de4dc45",998:"961d503c"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var u,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[a];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,a,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)a();else{var r=n&&n.type,u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return a();e(r,u,null,a,o)}))},a={524:0};n.f.miniCss=function(e,t){var n={24:1,510:1,998:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(c)var s=c(n)}for(t&&t(r);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(8679)}));r=n.O(r)})();
//# sourceMappingURL=app.6e6b6f8d.js.map