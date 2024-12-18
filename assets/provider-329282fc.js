var m=Object.defineProperty;var v=(i,t,e)=>t in i?m(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var h=(i,t,e)=>(v(i,typeof t!="symbol"?t+"":t,e),e);import{k as f,l as p,D as d,m as a,n as g,o as L,q as S,s as w,v as y}from"./register-38e4aa0c.js";import{VideoProvider as E}from"./provider-ba5f9e41.js";import{a as H}from"./provider-a208e3c4.js";import"./app-7efd264d.js";class j{constructor(t,e,r){this.Bh=t,this.ph=e,this.jf=r,this.Ch()}async Ch(){const t={onLoadStart:this.ge.bind(this),onLoaded:this.ue.bind(this),onLoadError:this.Dh.bind(this)};let e=await C(this.Bh,t);if(f(e)&&!p(this.Bh)&&(e=await D(this.Bh,t)),!e)return null;if(!e.isSupported()){const r="[vidstack]: `hls.js` is not supported in this environment";return this.ph.player.dispatchEvent(new d("hls-unsupported")),this.ph.delegate.p("error",{detail:{message:r,code:4}}),null}return e}ge(){this.ph.player.dispatchEvent(new d("hls-lib-load-start"))}ue(t){this.ph.player.dispatchEvent(new d("hls-lib-loaded",{detail:t})),this.jf(t)}Dh(t){const e=a(t);this.ph.player.dispatchEvent(new d("hls-lib-load-error",{detail:e})),this.ph.delegate.p("error",{detail:{message:e.message,code:4}})}}async function D(i,t={}){var e,r,o,n,u;if(!f(i)){if((e=t.onLoadStart)==null||e.call(t),i.prototype&&i.prototype!==Function)return(r=t.onLoaded)==null||r.call(t,i),i;try{const s=(o=await i())==null?void 0:o.default;if(s&&s.isSupported)(n=t.onLoaded)==null||n.call(t,s);else throw Error("");return s}catch(s){(u=t.onLoadError)==null||u.call(t,s)}}}async function C(i,t={}){var e,r,o;if(p(i)){(e=t.onLoadStart)==null||e.call(t);try{if(await g(i),!L(window.Hls))throw Error("");const n=window.Hls;return(r=t.onLoaded)==null||r.call(t,n),n}catch(n){(o=t.onLoadError)==null||o.call(t,n)}}}const $="https://cdn.jsdelivr.net";class B extends E{constructor(){super(...arguments);h(this,"$$PROVIDER_TYPE","HLS");h(this,"mh",null);h(this,"od",new H(this.video));h(this,"lh",`${$}/npm/hls.js@^1.0.0/dist/hls.min.js`)}get ctor(){return this.mh}get instance(){return this.od.instance}get type(){return"hls"}get canLiveSync(){return!0}get config(){return this.od.nh}set config(e){this.od.nh=e}get library(){return this.lh}set library(e){this.lh=e}preconnect(){p(this.lh)&&w(this.lh)}setup(e){super.setup(e),new j(this.lh,e,r=>{this.mh=r,this.od.setup(r,e),e.delegate.p("provider-setup",{detail:this});const o=y(e.$store.source);o&&this.loadSource(o)})}async loadSource({src:e}){var r;p(e)&&((r=this.od.instance)==null||r.loadSource(e))}onInstance(e){const r=this.od.instance;return r&&e(r),this.od.oh.add(e),()=>this.od.oh.delete(e)}destroy(){this.od.Jg()}}h(B,"supported",S());export{B as HLSProvider};