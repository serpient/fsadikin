"use strict";var precacheConfig=[["/index.html","400004c9c5a91ee49de2b2f1fe06f3ff"],["/static/css/main.dac3a98d.css","52946ba2856d1875768e9591007e3f91"],["/static/js/main.b1b01606.js","fdb4b9c2e3dd80edc3af9c663dca0835"],["/static/media/180625_Francesca Sadikin_Resume.c17db171.jpg","c17db171d90b6f809b28368181c569b5"],["/static/media/404-03.0d9c03b7.png","0d9c03b7b67b095924a86e7298febbd4"],["/static/media/project-match-main.307312c4.png","307312c4bd1e4dc96a595143c5399f74"],["/static/media/project-match-project-portal.d93a17f6.png","d93a17f6b23517d3dbcadb5aa5e019e5"],["/static/media/project-match-project-showcase.9dd2ee32.png","9dd2ee3288f70b049afa60c39d69034c"],["/static/media/project-match-project.05f44099.png","05f440996d3c3f8c9c9fe11052717ad7"],["/static/media/project-match-revision-Portal.45bfc3a4.png","45bfc3a4be909ffacbc316492e792762"],["/static/media/project-match-user-profile.d4eef54f.png","d4eef54fcfbbcbf746f54ecc04c5b78c"],["/static/media/project-match.ebab4ea5.png","ebab4ea530b2bfe915ce627fb70a6edf"],["/static/media/turtleTab-feature1.ac6ca761.png","ac6ca761a9f5286aafe5883f64021957"],["/static/media/turtleTab-feature2.f966a768.png","f966a768a052a94e66fc831417dec566"],["/static/media/turtleTab-main.fa3f0b94.png","fa3f0b94adde3f3d79c9238ac54a1ff0"],["/static/media/turtleTab-search.c2f16f1d.png","c2f16f1dfc425c96782db30ef5bb45e1"],["/static/media/turtleTab.7d59b0da.png","7d59b0daafdf1d8a41212c72732f9b04"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});