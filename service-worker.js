if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-347b9996"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./0.bundle.js",revision:"af9389d9b0627051f156c2fc268599d1"},{url:"./1.7c3ed6e35c5838d1b34d.css",revision:null},{url:"./1.bundle.js",revision:"2dda6ddb958002084901d2a9b10e0668"},{url:"./2.bundle.js",revision:"63b72b3c8467d91cc1da0e6f700b22e0"},{url:"./4.7c3ed6e35c5838d1b34d.css",revision:null},{url:"./4.bundle.js",revision:"53a231ddae1c4a6557610c6d7d6ca792"},{url:"./assets/Apazuc01.png",revision:"92feacd4075842f4e8a73a565e93d602"},{url:"./assets/Apazuc02.png",revision:"4a76b31e1b01f1b3c5f39b6c0006ff63"},{url:"./assets/Apazuc03.png",revision:"5662a71ce232e85a6bb4001b198e2c31"},{url:"./assets/Apazuc04.png",revision:"8d347da726124f8b2ce1abba6c05e431"},{url:"./assets/Apazuc05.png",revision:"32e7234d62562605811a32f5d5b3ad9b"},{url:"./assets/Apazuc06.png",revision:"b3c7300305fda931de4629cf2a50e973"},{url:"./assets/BOP-logo.png",revision:"3245f966b5515002058ee6f431db1321"},{url:"./assets/BoP1.png",revision:"02dc005241e8255d96854f5bc92653cb"},{url:"./assets/Constantsys01.png",revision:"d768759536b82bd2cb7e6fb3c76f6d25"},{url:"./assets/Daedalus01.png",revision:"91d419aad96c6c4436c2a5c13379bcd9"},{url:"./assets/FineDine1.png",revision:"f39c6c522ce299fe5ed8ecdad9687b8b"},{url:"./assets/Glozic01.png",revision:"63d74b96c737a84eefb8367690273421"},{url:"./assets/Glozic02.png",revision:"f1399f0ebcc9f1e27832744d669d217a"},{url:"./assets/Glozic03.png",revision:"eb7a08812ac7cb7cb69512dd1e3a4a87"},{url:"./assets/Roboto-Regular.ttf",revision:"f36638c2135b71e5a623dca52b611173"},{url:"./assets/Worksnap01.png",revision:"b7599cbdfcbbe7b24516f11237b69ef8"},{url:"./assets/avatar-1.jpg",revision:"67e2b9d795fc068c08cef7e07ea5171b"},{url:"./assets/avatar-2.jpg",revision:"02aea0c2c148263b4c4de63a52284803"},{url:"./assets/avatar-3.jpg",revision:"41a180f34b2da436150ac0442c88b9f2"},{url:"./assets/concorde-logo.png",revision:"cfcc572a407db71b98a828305e2cbf13"},{url:"./assets/constantsys-log.png",revision:"c9fbbe3b4da3d3633dced5c17b57f012"},{url:"./assets/daedalus-logo.png",revision:"5c98c41d921db2856b78c6f161f053aa"},{url:"./assets/finedine-logo.png",revision:"eb109d123e4dbb721e08dfbb95176e43"},{url:"./assets/fips-logo.png",revision:"698dcbcd33a5aa6bb67c02d9ddc12cc4"},{url:"./assets/glozic-logo.png",revision:"0e32976c84cbb737340256356d9272f3"},{url:"./assets/logo.jpeg",revision:"0c8ff58b3e66cf92408de0eac9eabb3e"},{url:"./assets/miniboat1.png",revision:"d810f869ee04be1d92b4afb4d2f6ecb1"},{url:"./assets/miniboat2.png",revision:"8716557e084c5bc8c6c7904ea2c4e825"},{url:"./assets/miniboat3.png",revision:"afe620500287a0fde8d1d6220fef0686"},{url:"./bundle.js",revision:"8628b548ddfbfe7c566d9ac6e43ff5d4"},{url:"./index.html",revision:"de487312104695f54ec352f0d6ea5588"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
