(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>h});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),c=e(667),s=e.n(c),l=new URL(e(967),e.b),d=new URL(e(708),e.b),u=i()(o());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap);"]);var p=s()(l),m=s()(d);u.push([n.id,":root {\r\n    --color1:#F2C641;\r\n    --color2:#F28705;\r\n    --color3:#8C0E03;\r\n    --color4:#D91807;\r\n    --color5:#590202;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    background-image: url("+p+");\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\n/* Header */\r\n\r\nheader {\r\n    min-width: 500px;\r\n    width: 70vw;\r\n    \r\n    background-color: rgba(140, 14, 3, 0.5);\r\n    margin-bottom: 30px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n#mainTitle {\r\n    color: var(--color5);\r\n    font-size: 3.5em;\r\n    font-family: 'Comforta', cursive;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 10px;\r\n    width: 390px;\r\n    height: 85px;\r\n    gap: 15px;\r\n}\r\n\r\n.nav-item {\r\n    width: 100px;\r\n    height: 50px;\r\n    background-color: rgba(140, 14, 3, 0.205);\r\n    border: 0;\r\n    text-align: center;\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    cursor: pointer;\r\n    transition: 100ms;\r\n}\r\n\r\n.nav-item:hover {\r\n    transform: translateY(-10%);\r\n}\r\n\r\n.active {\r\n    border-bottom: 3px solid #8C0E03;\r\n}\r\n\r\n/* Main */\r\n\r\n\r\n/* Main - home */\r\n\r\n.home {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    background-color: transparent;\r\n    align-items: center;\r\n\r\n    min-width: 400px;\r\n    width: 50%;\r\n    height: 400px;\r\n\r\n}\r\n\r\n.home-title {\r\n    font-size: calc(3.5em / 1vmin);\r\n    text-align: center;\r\n    margin: auto 0 3rem 0;\r\n    \r\n    background-image: linear-gradient(90deg, var(--color1), var(--color2), var(--color4), var(--color5));\r\n    background-size: 100%;\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent; \r\n    -moz-background-clip: text;\r\n    -moz-text-fill-color: transparent;\r\n}\r\n\r\n\r\n.home-subtitle {\r\n    text-align: center;\r\n    margin: 0 0 50px 0;\r\n\r\n    background-image: linear-gradient(90deg, var(--color1), var(--color2), var(--color5));\r\n    background-size: 100%;\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent; \r\n    -moz-background-clip: text;\r\n    -moz-text-fill-color: transparent;\r\n}\r\n\r\n.home-contact-btn {\r\n    margin: 0 0 50px 0;\r\n    width: 100px;\r\n    height: 50px;\r\n    outline: 0;\r\n    border: 1px solid var(--color5);\r\n    background-color: var(--color2);\r\n    border-radius: 10%;\r\n\r\n    font-size: 1em;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    cursor: pointer;\r\n\r\n    transition: 500ms;\r\n}\r\n\r\n.home-contact-btn:hover {\r\n    background-color: rgb(199, 113, 8);\r\n}\r\n\r\n/* Main - menu */\r\n\r\n.menu {\r\n    min-width: 500px;\r\n    width: 700px;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    background-color: rgba(140, 14, 3, 0.319);\r\n    align-items: center;\r\n    justify-items: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.menu-item {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n\r\n    width: 250px;\r\n    margin: 20px;\r\n    gap: 15px;\r\n    \r\n}\r\n\r\n.menu-item > img{\r\n    width: 200px;\r\n    height: 180px;\r\n}\r\n\r\n.menu-item > h3 {\r\n    font-size: 1.7em;\r\n}\r\n\r\n.menu-item > p {\r\n    width: 250px;\r\n    height: 120px;\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n}\r\n\r\n/* Main - contact*/\r\n\r\n.contact {\r\n    min-width: 400px;\r\n    width: 50%;\r\n    height: 600px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n\r\n    background: rgba(140, 14, 3, 0.319);\r\n\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.contact-phone {\r\n    margin: 15px;\r\n}\r\n\r\n.contact-phone::before {\r\n    content: '☎️';\r\n}\r\n\r\n.contact-map {\r\n    width: 500px;\r\n    height: 350px;\r\n    margin: 15px;\r\n}\r\n\r\n/* Footer */\r\n\r\nfooter {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: rgba(140, 14, 3, 0.63);\r\n    padding: 10px 0;\r\n    color: var(--color5);\r\n    font-size: 1.1em;\r\n    margin-top: auto;\r\n}\r\n\r\nfooter img {\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: var(--color5);\r\n    -webkit-mask: url("+m+") no-repeat center;\r\n    mask: url("+m+") no-repeat center;\r\n}\r\n\r\nfooter img:hover {\r\n    background-color: var(--color3);\r\n}",""]);const h=u},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=e(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(m);else{var h=o(m,t);t.byIndex=c,r.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),l=0;l<a.length;l++){var d=e(a[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},967:(n,r,e)=>{n.exports=e.p+"e92793ce64923e0f480f.jpg"},708:(n,r,e)=>{n.exports=e.p+"550985caaa8859d4b95f.svg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),s=e.n(c),l=e(216),d=e.n(l),u=e(589),p=e.n(u),m=e(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=function(){const n=document.querySelector("main");n.innerHTML="",n.className="contact",n.appendChild(function(){const n=document.createElement("h2");return n.classList.add("contact-phone"),n.innerHTML=": (0) 1 2345-6789",n}()),n.appendChild(function(){const n=document.createElement("img");return n.src="../src/img/map.JPG",n.classList.add("contact-map"),n}())},g=function(){const n=document.querySelector("main");n.innerHTML="",n.classList="home",n.appendChild(function(){const n=document.createElement("h1");return n.classList.add("home-title"),n.innerHTML="The best food in the world",n}()),n.appendChild(function(){const n=document.createElement("h2");return n.classList.add("home-subtitle"),n.innerHTML="Only in Brazil, contact us",n}()),n.appendChild(function(){const n=document.createElement("button");return n.classList.add("home-contact-btn"),n.innerHTML="Contact",n.onclick=()=>{const n=document.querySelectorAll(".nav-item");n[2].classList.add("active"),n[0].classList.remove("active"),document.querySelector("main").className="contact",f()},n}())};function v(n,r){const e=document.createElement("div");e.classList.add("menu-item");const t=document.createElement("img");t.src=`../src/img/foods/${n.toLowerCase()}.jpg`;const o=document.createElement("h3");o.innerHTML=n;const a=document.createElement("p");return a.innerHTML=r,e.appendChild(t),e.appendChild(o),e.appendChild(a),e}function b(){const n=document.createElement("header"),r=document.createElement("h1");return r.id="mainTitle",r.innerHTML="Muçar",n.appendChild(r),n.appendChild(function(){const n=document.createElement("nav"),r=document.createElement("button");r.classList.add("nav-item"),r.classList.add("active"),r.innerHTML="Home",r.addEventListener("click",(n=>{n.target.classList.contains("active")||(x(r),g())}));const e=document.createElement("button");e.classList.add("nav-item"),e.innerHTML="Menu",e.addEventListener("click",(n=>{n.target.classList.contains("active")||(x(e),function(){const n=document.querySelector("main");n.innerHTML="",n.className="menu",[v("Feijoada","Black beans, Dried meat, Pork ear, Pork tail, Pork foot, Pork ribs, Pork loin, Paio, Portuguese sausage"),v("Moqueca","Medium shrimp, Lemon juice, Palm oil, Medium onions, Cilantro, Parsley, Green onions, Tomatoes, Salt, Coconut milk"),v("Acarajé","Cowpea, Onion, Salt, Palm oil, Chilli pepper, Shrimp"),v("Baião de dois","Green bean, Paio, Broth, Onion, Garlic clove, Oil, Cilantro, Rice, Curd cheese"),v("Carne de sol","Sun dried meat, Unsalted margarine, Manioc, Onion, Garlic cloves"),v("Tacacá","Water, Sassava gum, Salt, Salted shrimp, Chicory leaves, Garlic cloves, Hot peppers, Bunches of jambu, Liters of tucupi")].forEach((r=>{n.appendChild(r)}))}())}));const t=document.createElement("button");return t.classList.add("nav-item"),t.innerHTML="Contact",t.addEventListener("click",(n=>{n.target.classList.contains("active")||(x(t),f())})),n.appendChild(r),n.appendChild(e),n.appendChild(t),n}()),n}function x(n){document.querySelectorAll(".nav-item").forEach((n=>{n!==this&&n.classList.remove("active")})),n.classList.add("active")}!function(){const n=document.querySelector("#content");n.appendChild(b()),n.appendChild(document.createElement("main")),n.appendChild(function(){const n=document.createElement("footer"),r=document.createElement("p");r.innerHTML="Copyright © "+(new Date).getFullYear()+" PedroRub1";const e=document.createElement("a");e.href="https://github.com/PedroRub1";const t=document.createElement("img");return e.appendChild(t),n.appendChild(r),n.appendChild(e),n}()),g()}()})()})();