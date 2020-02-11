!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):"object"==typeof exports?exports.tweenEngine=t(require("lodash")):e.tweenEngine=t(e.lodash)}(this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=123)}({0:function(t,n){t.exports=e},1:function(e,t,n){"use strict";var r=n(0);e.exports={capitalize:function(e,t){return r.upperFirst(t?e.toLowerCase():e)},startsWith:function e(t,n,o){return!!t&&(o?e(t.toLowerCase(),n.toLowerCase(),!1):r.startsWith(t,n))},endsWith:function(e,t,n){return!!e&&(n?this.endsWith(e.toLowerCase(),t.toLowerCase(),!1):r.endsWith(e,t))},isNullOrEmpty:function(e){return!e||!e.trim()},isTrue:function(e){return"true"===e}}},123:function(e,t,n){"use strict";var r=n(124),o=n(125);e.exports={create:function(e,t){var n=o.create(e,t);return{factory:r.create(),engine:n}}}},124:function(e,t,n){"use strict";var r=n(0),o=n(6);e.exports={create:function(){var e={animations:{},transitions:{},properties:{}};function t(t){this.timeline=e.animations.BaseSequence(t?r.cloneDeep(t):{})}return t.prototype.add=function(e,t,n){return t=void 0===t?"+=0":t,n=n||"normal",this.timeline.add(e,t,n),this},t.prototype.get=function(){return this.timeline},t.prototype.event=function(e,t){for(var n,r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return(n=this.timeline).eventCallback.apply(n,[e,t].concat(o)),this},t.prototype.play=function(){return this.timeline.play(),this},t.prototype.reverse=function(){return this.timeline.reverse(),this},t.prototype.pause=function(){return this.timeline.pause(),this},t.prototype.seek=function(e){return this.timeline.totalProgress(e),this},t.prototype.clear=function(){return this.timeline.clear(),this},{animate:function(t,n,a,i,s){var u=e.animations[t];return u?u(n,a,i,s?r.cloneDeep(s):{}):(o.error("Warning:",t,"is not a registered animation. skipping."),null)},transition:function(t,n,a,i,s,u){var l=e.transitions[t];return l?l(n,a,i,s,u?r.cloneDeep(u):{}):(o.error("Warning:",t,"is not a registered transition. skipping."),null)},sequence:function(e){return new t(e)},registerAnimation:function(t,n,r){e.transitions[t]&&o.error("Warning: there is already a transition with the name",t),e.animations[t]=n,e.properties[t]=r||{}},registerTransition:function(t,n,r){e.animations[t]&&o.error("Warning: there is already an animation with the name",t),e.transitions[t]=n,e.properties[t]=r},getProperties:function(t){return e.properties[t]||{}},getAllProperties:function(){return e.properties},getAnimationsDefs:function(){return e.animations},getTransitionsDefs:function(){return e.transitions},resetRegistrations:function(){e.animations={},e.transitions={},e.properties={}}}}}},125:function(e,t,n){"use strict";var r=n(0),o=n(17);e.exports={create:function(e,t){var n=["ease","duration","delay","to","from","repeat","yoyo","repeatDelay","easeParams","stagger","transformOrigin","clearProps","paused","overwrite","autoClear","parseTransform","fireUpdateCommand","data","elementClearParams","perspective","transformPerspective","immediateRender","callbacks","force3D","transformStyle"],a=["delay","repeat","yoyo","repeatDelay","stagger","paused","align","tweens","autoClear","data","elementClearParams","callbacks"];function i(e,t,o){return r.isArray(e)||(e=e instanceof window.NodeList?r.toArray(e):[e]),f(t=y(t=t||{},[o,n])),(t.from&&t.to?c:t.from?u:l)(e,t)}function s(e,n){return f(e=y(e||{},[n,a])),new t(e)}function u(t,n){var o,a,i,u=n.duration,l=n.stagger,c=n.delay,f=r.defaults(n,n.from);return f.data=f.data||{},delete f.from,delete f.duration,delete f.stagger,void 0!==l?(i=f.data,f.data={},delete f.delay,o=e.staggerFrom(t,u,f,l),a=s({data:i,delay:c}).add(o)):o=e.from(t,u,f),a||o}function l(t,n){var o,a,i,u=n.duration,l=n.stagger,c=n.delay,f=r.defaults(n,n.to||{});return f.data=f.data||{},delete f.to,delete f.duration,delete f.stagger,void 0!==l?(i=f.data,f.data={},delete f.delay,o=e.staggerTo(t,u,f,l),a=s({data:i,delay:c}).add(o)):o=e.to(t,u,f),a||o}function c(t,n){var o,a,i,u,l=n.duration,c=n.stagger,f=n.delay,p=n.from;return(o=n.to).data=o.data||{},delete n.to,delete n.from,delete n.duration,delete n.stagger,delete o.duration,delete o.stagger,o=r.merge(o,n),void 0!==c?(u=o.data,o.data={},delete o.delay,a=e.staggerFromTo(t,l,p,o,c),i=s({data:u,delay:f}).add(a)):a=e.fromTo(t,l,p,o),i||a}function f(e){return e.data=e.data||{},e.callbacks&&(e.data.callbacks={},e.callbacks.onComplete&&(e.data.callbacks.onComplete=e.callbacks.onComplete,e.onComplete=p,e.onCompleteParams=["{self}"]),e.callbacks.onReverseComplete&&(e.data.callbacks.onReverseComplete=e.callbacks.onReverseComplete,e.onReverseComplete=d,e.onReverseCompleteParams=["{self}"]),e.callbacks.onStart&&(e.data.callbacks.onStart=e.callbacks.onStart,e.onStart=m,e.onStartParams=["{self}"]),e.callbacks.onUpdate&&(e.data.callbacks.onUpdate=e.callbacks.onUpdate,e.onUpdate=g,e.onUpdateParams=["{self}"]),e.callbacks.onInterrupt&&(e.data.callbacks.onInterrupt=e.callbacks.onInterrupt)),delete e.callbacks,e}function p(e){h(e,"onComplete")}function d(e){h(e,"onReverseComplete")}function m(e){h(e,"onStart")}function g(e){h(e,"onUpdate")}function h(e,t){r.isFunction(r.get(e,"data.callbacks."+t))&&e.data.callbacks[t](e)}function y(e,t){var n=r.union.apply(r,t);return r.forEach(e,(function(e,o,a){"to"===o||"from"===o?y(a[o],t):r.includes(n,o)||delete a[o]})),e}return{timeline:s,tween:i,set:function(e,t){return(t=t?r.cloneDeep(t):{}).duration=0,t.delay=0,t.to=t.to||{},i(e,t,r.keys(t))},kill:function(e,t){e.paused()||(e.pause(),function(e){h(e,"onInterrupt")}(e)),r.isNumber(t)&&e.progress(t,!0),e.kill(),e.clear&&e.clear()},addTickerEvent:function(t){e.ticker.addEventListener("tick",t)},removeTickerEvent:function(t){e.ticker.removeEventListener("tick",t)},isTweening:function(t){return e.isTweening(t)},getTweensOf:function(t,n){return e.getTweensOf(t,n)},getElementRect:o.getElementRect,getContentRect:o.getContentRect,getBoundingRect:o.getBoundingRect,getBoundingContentRect:o.getBoundingContentRect,delayedCall:function(t,n,r,o){return e.delayedCall(t,n,r,o)},animateTimeScale:function(t,n,o,a,i,s){var u={timeScale:o},l={timeScale:a,easing:i||"Linear.easeNone"};return s&&r.assign(l,s),0===o&&t.paused()&&t.play(),e.fromTo(t,n,u,l)},adjustLagSmoothing:function(t,n){"function"==typeof e.lagSmoothing&&e.lagSmoothing(t,n)},useRAF:function(t){e.ticker&&"function"==typeof e.ticker.useRAF&&e.ticker.useRAF(t)}}}}},17:function(e,t,n){"use strict";function r(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.getPropertyValue("border-top-width"),10),left:parseFloat(t.getPropertyValue("border-left-width"),10)}}var o=function(e,t){return Array.from(e.children).filter((function(e){return e.tagName.toLowerCase()===t}))};function a(e,t){for(var n=e.offsetTop,o=e.offsetLeft,a=e.offsetWidth,i=e.offsetHeight;e.offsetParent;){var s=r(e=e.offsetParent);if(n+=s.top,o+=s.left,t&&e===t)break;n+=e.offsetTop,o+=e.offsetLeft}return{top:n,left:o,width:a,height:i,bottom:n+i,right:o+a}}function i(e,t,n,r){return r=r||a(e,t),(n=n||o(e,"div")).forEach((function(e){var n=a(e,t);n.width>0&&n.height>0&&(n.left<r.left&&(r.left=n.left),n.right>r.right&&(r.right=n.right),n.top<r.top&&(r.top=n.top),n.bottom>r.bottom&&(r.bottom=n.bottom));var s=o(e,"div");s.length&&function(e){return"visible"===window.getComputedStyle(e).getPropertyValue("overflow")}(e)&&i(e,t,s,r)})),r.width=r.right-r.left,r.height=r.bottom-r.top,r}e.exports={getElementRect:a,getBoundingRect:function(e,t,n){n=n||"undefined"!=typeof window&&window;var r=a(e,t);if(n){var o=n.scrollY||n.scrollTop||0,i=n.scrollX||n.scrollLeft||0;r.top-=o,r.bottom-=o,r.left-=i,r.right-=i}return r},getContentRect:i,getBoundingContentRect:function(e,t,n){n=n||"undefined"!=typeof window&&window;var r=i(e,t);if(n){var o=n.pageYOffset||n.scrollTop||0,a=n.pageXOffset||n.scrollLeft||0;r.top-=o,r.bottom-=o,r.left-=a,r.right-=a}return r}}},2:function(e,t,n){"use strict";var r=n(0),o=n(1),a=/\${(.*?)}/g;function i(e,t){var n=/^(ftps|ftp|http|https):.*$/.test(e),r=/^\/\//.test(e);return n?e:(t=t||"https:",r?t+e:t+"//"+e)}function s(e,t){return r.map(e,(function(e,n){return u(n,e,t)})).sort().join("&")}function u(e,t,n){return e=encodeURIComponent(e),t||0===t||!1===t?(e+="=",r.isArray(t)?r.map(t,(function(t){return e+encodeURIComponent(t)})).join("&"):(n&&"boolean"==typeof t?t=t?"1":"0":(o=t,a.test(o)||(t=encodeURIComponent(t))),e+t)):e;var o}var l=0;var c=null;var f=/((https?\:)\/\/)?([^\?\:\/#]+)(\:([0-9]+))?(\/[^\?\#]*)?(\?([^#]*))?(#.*)?/i;function p(e){if(!e)return{};var t=e.match(f),n=t[5]||"",r=t[8]?"?"+t[8]:"",o={full:e,protocol:t[2]||"http:",host:t[3]+(n?":"+n:""),hostname:t[3],port:n,path:t[6]||"/",search:r,hash:t[9]||""};return"#"!==o.hash&&"#!"!==o.hash||(o.hash=""),o.query=m(t[8]),o}function d(e){try{return decodeURIComponent(e)}catch(t){return e}}function m(e){for(var t,n=/([^&=]+)=([^&]*)/g,o={};null!==(t=n.exec(e));){var a=d(t[1]),i=d(t[2]);o[a]?r.isArray(o[a])?o[a].push(i):o[a]=[o[a],i]:o[a]=i}return o}function g(e,t){var n=t?null:e.search;n&&(n=n.replace(/^[?]/,""));var o,a=n||s(e.query||{});a&&(a=(r.includes(e.path,"?")?"&":"?")+a);return o=e.full,/(^data)|(^blob)/.test(o)?e.full:e.protocol+"//"+e.hostname+(e.port?":"+e.port:"")+e.path+(a||"")+e.hash}function h(e){return/(^https?)|(^data)|(^blob)|(^\/\/)/.test(e)}function y(e){return e&&e.replace(/[?&#/]+$/,"").toLowerCase()}function v(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)","i").exec(r.isUndefined(t)?window.location.search:t);return null===n?"":d(n[1].replace(/\+/g," "))}e.exports={addProtocolIfMissing:i,toQueryString:s,toQueryParam:u,baseUrl:function(e){var t=p(e);return t.protocol+"//"+t.host},getPath:function(e){return p(e).path},cacheKiller:function(){return(new Date).getTime().toString()+l++},resetCacheKiller:function(){l=0},setPersistentCacheKiller:function(e){c=e},persistentCacheKiller:function(){return c=c||(new Date).getTime().toString()},resetPersistentCacheKiller:function(){c=null},removeUrlParam:function(e,t){var n=p(e);return delete n.search,n.query&&delete n.query[t],g(n)},removeUrlParams:function(e,t){var n=p(e);return delete n.search,n.query&&r.forEach(t,(function(e){delete n.query[e]})),g(n)},setUrlParam:function(e,t,n){var a=e.split("?"),i=[],s=!1;if(a.length>1){i=a[1].split("&");var u=r.findIndex(i,(function(e){return o.startsWith(e,t+"=")}));-1!==u&&(i[u]=t+"="+String(n),s=!0)}return s||i.push(t+"="+String(n)),a[1]=i.join("&"),e=a.join("?")},setUrlParams:function(e,t){var n=p(e);return r.assign(n.query,t),g(n,!0)},isExternalUrl:h,isRelativeUrl:function(e){return/^\/(.*)/.test(e)},isUrlEmptyOrNone:function(e){return!e||!e.trim()||"none"===e.toLowerCase()},updateUrl:function(e){window.history&&window.history.replaceState?window.history.replaceState({},"",e):console.error("window.history is not supported in this OLD browser!")},parseUrl:p,parseUrlParams:m,buildFullUrl:g,isQueryParamOn:function(e,t){return r.has(e.query,t)&&"false"!==e.query[t]},isTrue:function(e,t){return"true"===v(e,t)},isSame:function(e,t){return y(e)===y(t)},joinURL:function(){for(var e=arguments[0],t=1;t<arguments.length;++t)e=e.replace(/\/$/,"")+"/"+arguments[t].replace(/^\//,"");return e},getMediaUrlByContext:function(e,t,n){if(h(e))return e;var r=t+"/";return e&&(/^micons\//.test(e)?r=n:"ico"===/[^.]+$/.exec(e)[0]&&(r=r.replace("media","ficons"))),r+e},origin:function(e){if(e)return e.protocol+"//"+e.hostname+e.port;if("undefined"!=typeof window){if(window.location.origin)return window.location.origin;var t=window.location.port?":"+window.location.port:"";return window.location.protocol+"//"+window.location.hostname+t}},getBaseUrlWithPath:function(e,t){var n=(e.path||e.pathname||"").split("/"),o=r.compact(n.slice(0,(t||0)+1)),a=e.protocol+"//"+e.hostname;return r.isEmpty(o)||(a+="/"+o.join("/")),a},getParameterByName:v,isHostnameYandexWebvisor:function(e){return/^(.*\.)?(mtproxy|hghltd)\.yandex\.net$/.test(e)},setProtocol:function(e,t){if(!r.includes(["ftp:","http:","https:"],t))return e;if(e=i(e,t),!r.startsWith(e,t+"//")){var n=e.split("//");e=[t,"//",n[1]].join("")}return e},getTemplateValuesFromUrl:function(e){for(var t=[],n=a.exec(e);n;)t.push(n[1]),n=a.exec(e);return t}}},6:function(e,t,n){"use strict";var r=n(0),o=n(2),a=console.log.bind(console),i=console.warn.bind(console),s=c(),u=s?a:r.noop,l=s?i:r.noop;function c(){return"undefined"==typeof window||"all"===o.parseUrl(r.get(window,["location","href"],"")).query.debug}e.exports={isDebug:c,verbose:u,info:a,warnVerbose:l,warn:i,error:console.error.bind(console),warnDeprecation:function(e){s&&console.error.call(console,"DocumentServices|Deprecated|"+e)}}}})}));
//# sourceMappingURL=tweenEngine.js.map