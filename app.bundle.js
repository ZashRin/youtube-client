!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var i=n(1);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,o);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".search {\n  margin: 10px auto;\n  display: block;\n  width: 30%;\n}\n\n.page-cont {\n  margin: 0 auto;\n  overflow: hidden;\n  border: solid 2px black;\n  width: 70%;\n}\n\n.page {\n  display: flex;\n  justify-content: space-evenly;\n  position: relative;\n  animation-duration: 1s;\n}\n\n.page-move-next{\n  animation-name: page-next;\n}\n\n@keyframes page-next {\n  from {\n    margin-left: 100%;\n  }\n\n  to {\n    margin-left: 0;\n  }\n}\n\n.page-move-prev{\n  animation-name: page-prev;\n}\n\n@keyframes page-prev {\n  from {\n    margin-left: -100%;\n  }\n\n  to {\n    margin-left: 0;\n  }\n}\n\n.clip-card {\n  margin: 5px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  border: solid 1px gray;\n  height: 500px;\n  width: 320px;\n}\n\n.title {\n  align-self: flex-start;\n  width: 100%;\n  height: 180px;\n}\n\n.clip-card p {\n  margin: 5px 0;\n}\n\n.link {\n  text-decoration: none;\n  background: red;\n}\n\n.description {\n  overflow: hidden;\n  width: 100%;\n  height: 215px;\n  word-wrap: break-word;\n}\n\n.page-control {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 10px auto;\n  width: 50px;\n}\n\n.nav {\n  position: relative;\n}\n\n.tooltip {\n  position: absolute;\n  bottom: 100%;\n  background-color: red;\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}var r;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(o=0;o<e.length;o++){var r=e[o];null!=r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(e,t,n){var i,o,s={},r=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var i=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}}(),c=null,l=0,d=[],u=n(4);function h(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=s[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(y(i.parts[r],t))}else{var a=[];for(r=0;r<i.parts.length;r++)a.push(y(i.parts[r],t));s[i.id]={id:i.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],i={},o=0;o<e.length;o++){var s=e[o],r=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};i[r]?i[r].parts.push(a):n.push(i[r]={id:r,parts:[a]})}return n}function f(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return n.nc}();i&&(e.attrs.nonce=i)}return g(t,e.attrs),f(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,i,o,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var r=l++;n=c||(c=v(t)),i=C.bind(null,n,r,!1),o=C.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),f(e,t),t}(t),i=function(e,t,n){var i=n.css,o=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||s)&&(i=u(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return h(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var r=n[o];(a=s[r.id]).refs--,i.push(a)}e&&h(p(e,t),t);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete s[a.id]}}}};var b,x=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function C(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(o=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:i+s.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";n.r(t);var i=e=>{const t=document.createElement("input");t.setAttribute("class","search"),document.body.appendChild(t),document.getElementsByClassName("search")[0].focus(),document.getElementsByClassName("search")[0].addEventListener("change",e)};const o="AIzaSyARR5XOaigY_vihr56R5norLGxwJaIoehA",s=16,r="https://www.googleapis.com/youtube/v3/",a=`${r}search?key=${o}`,c=`${r}videos?key=${o}`,l="MOBILE",d="TABLET",u="DESKTOP",h={[l]:480,[d]:1024},p={[l]:1,[d]:2,[u]:4},f=e=>{const{id:t}=e,{title:n,description:i,channelTitle:o,publishedAt:s,thumbnails:r}=e.snippet,{viewCount:a}=e.statistics;return{link:`https://www.youtube.com/watch?v=${t}`,title:n,description:i,channelTitle:o,publishedAt:s,viewCount:a,thumbnails:r.medium}},m=({videoIds:e,...t})=>fetch(`${c}&id=${e}&part=snippet,statistics`).then(e=>e.json()).then(({items:e})=>({items:e.map(f),...t}));var v=e=>(({searchQuery:e,pageToken:t})=>fetch(`${a}&part=id${t?`&pageToken=${t}`:""}&q=${e}&type=video&maxResults=${s}`).then(e=>e.json()).then(({nextPageToken:e,items:t})=>({videoIds:t.map(e=>e.id.videoId).join(","),nextPageToken:e})).then(e=>e))(e).then(m);var g=class{constructor(e,t,n){this.onPrevClick=e,this.onNextClick=t,this.currentPageNum=n,this.control=null}render(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div");return t.classList.add("nav"),i.classList.add("nav"),e.appendChild(t),e.appendChild(n),e.appendChild(i),t.addEventListener("click",this.onPrevClick),t.addEventListener("mousedown",()=>{const e=document.createElement("div");e.classList.add("tooltip"),e.innerText=this.currentPageNum,t.appendChild(e)}),t.addEventListener("mouseup",()=>{t.innerHTML="<"}),t.innerText="<",i.addEventListener("click",this.onNextClick),i.addEventListener("mousedown",()=>{const e=document.createElement("div");e.classList.add("tooltip"),e.innerText=this.currentPageNum+2,i.appendChild(e)}),i.addEventListener("mouseup",()=>{i.innerHTML=">"}),i.innerText=">",n.innerText=this.currentPageNum+1,this.current=n,e}updateCurPageNum(e){this.currentPageNum=e,this.current.innerText=this.currentPageNum+1}};var y=class{constructor(e,t,n){this.model=n,this.loadPrevPage=e,this.loadNextPage=t,this.mouseMove=this.mouseMove.bind(this),this.touchMove=this.touchMove.bind(this)}renderClipCards(){this.content.innerHTML="",this.model.forEach(e=>{const t=document.createElement("div");t.classList.add("clip-card");const n=document.createElement("div");n.innerHTML=`<a href=${e.link} class=link target=_blank>${e.title}</a>`,n.style.backgroundImage=`url(${e.thumbnails.url})`,n.classList.add("title"),t.appendChild(n);const i=document.createElement("p");i.innerHTML=e.channelTitle,t.appendChild(i);const o=document.createElement("p");o.innerHTML=e.publishedAt.slice(0,10).split("-").reverse().join("-"),t.appendChild(o);const s=document.createElement("p");s.innerHTML=e.viewCount,t.appendChild(s);const r=document.createElement("p");r.innerHTML=e.description,r.classList.add("description"),t.appendChild(r),this.content.appendChild(t)})}mouseMove(e){const t=e.pageX-this.x;this.content.style.left=`${t}px`}touchMove({changedTouches:[{pageX:e}]}){const t=e-this.x;this.content.style.left=`${t}px`}render(){const e=document.createElement("div");e.classList.add("page-cont");const t=document.createElement("div");return t.classList.add("page"),this.content=t,this.renderClipCards(),e.addEventListener("mousedown",t=>{this.x=t.pageX,e.addEventListener("mousemove",this.mouseMove)}),e.addEventListener("mouseup",t=>{this.content.style.left=0,e.removeEventListener("mousemove",this.mouseMove);const n=t.pageX-this.x;0!==n&&(n<0?this.loadNextPage():this.loadPrevPage())}),e.addEventListener("touchstart",({changedTouches:[{pageX:t}]})=>{this.x=t,e.addEventListener("touchmove",this.touchMove)}),e.addEventListener("touchend",({changedTouches:[{pageX:t}]})=>{this.content.style.left=0,e.removeEventListener("mousemove",this.mouseMove);const n=t-this.x;0!==n&&(n<0?this.loadNextPage():this.loadPrevPage())}),e.appendChild(this.content),e}updateClips(e,t=!0){const n=t?"page-move-next":"page-move-prev";setTimeout(()=>{this.model=e,this.renderClipCards(),this.content.classList.add(n)}),this.content.classList.remove("page-move-next","page-move-prev")}};var b=e=>e<=h[l]?p[l]:e<=h[d]?p[d]:p[u];var x=()=>document.body.clientWidth;var C=class{constructor(){this.videos=[],this.search=this.search.bind(this),this.onResize=this.onResize.bind(this),this.onPrevClick=this.onPrevClick.bind(this),this.onNextClick=this.onNextClick.bind(this),this.onSearchApply=this.onSearchApply.bind(this),this.nextPageToken=null,this.getPageSize=(()=>b(x())),this.fetchVideoItems=v,this.offset=0}loadNextChunk(){if(this.videos.length-this.offset<=.75*s){const{searchQuery:e,nextPageToken:t}=this;this.fetchVideoItems({searchQuery:e,pageToken:t}).then(e=>{const{items:t}=e;this.nextPageToken=e.nextPageToken,this.videos=this.videos.concat(t)})}}updateView(e=!0){this.videoClips.updateClips(this.getClipsPage(),e),this.pageControl.updateCurPageNum(this.getCurPageNum())}onPrevClick(){let e=this.offset-this.getPageSize();e<0&&(e=0),this.offset=e,this.updateView(!1)}onNextClick(){this.offset=this.offset+this.getPageSize(),this.loadNextChunk(),this.updateView()}getCurPageNum(){return Math.floor(this.offset/this.getPageSize())}getClipsPage(){return this.videos.slice(this.offset,this.offset+this.getPageSize())}onSearchApply(){const e=document.getElementsByClassName("page-control")[0];e&&e.remove(),this.videoClips.updateClips(this.getClipsPage());const t=this.pageControl.render();t.classList.add("page-control"),document.body.appendChild(t)}search(e){this.offset=0,this.nextPageToken=null,this.videos=[];const t=e.target.value;this.searchQuery=t,this.fetchVideoItems({searchQuery:t}).then(e=>{const{items:t,nextPageToken:n}=e;return this.nextPageToken=n,this.videos=t,this.getClipsPage()}).then(this.onSearchApply)}onResize(){this.updateView()}start(){this.videoClips=new y(this.onPrevClick,this.onNextClick,this.getClipsPage()),this.pageControl=new g(this.onPrevClick,this.onNextClick,this.getCurPageNum()),window.addEventListener("resize",this.onResize),i(this.search),document.body.appendChild(this.videoClips.render())}};n(0);(new C).start()}]);
//# sourceMappingURL=app.bundle.js.map