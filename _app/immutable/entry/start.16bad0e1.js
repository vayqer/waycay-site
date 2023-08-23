import{o as De,t as ye}from"../chunks/scheduler.407f581c.js";import{S as He,a as Je,I as V,g as Ce,f as Ve,b as we,c as le,s as ee,i as _e,d as M,P as qe,e as We}from"../chunks/singletons.8f683920.js";import{b as K}from"../chunks/paths.b235fa70.js";function Xe(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function Ze(n){return n.split("%25").map(decodeURI).join("%25")}function Qe(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const et=["href","pathname","search","searchParams","toString","toJSON"];function tt(n,o){const u=new URL(n);for(const s of et)Object.defineProperty(u,s,{get(){return o(),n[s]},enumerable:!0,configurable:!0});return nt(u),u}function nt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const at="/__data.json";function rt(n){return n.replace(/\/$/,"")+at}function ot(...n){let o=5381;for(const u of n)if(typeof u=="string"){let s=u.length;for(;s;)o=o*33^u.charCodeAt(--s)}else if(ArrayBuffer.isView(u)){const s=new Uint8Array(u.buffer,u.byteOffset,u.byteLength);let d=s.length;for(;d;)o=o*33^s[--d]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&ne.delete(Se(n)),fe(n,o));const ne=new Map;function it(n,o){const u=Se(n,o),s=document.querySelector(u);if(s!=null&&s.textContent){const{body:d,...f}=JSON.parse(s.textContent),S=s.getAttribute("data-ttl");return S&&ne.set(u,{body:d,init:f,ttl:1e3*Number(S)}),Promise.resolve(new Response(d,f))}return fe(n,o)}function st(n,o,u){if(ne.size>0){const s=Se(n,u),d=ne.get(s);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(u==null?void 0:u.cache))return new Response(d.body,d.init);ne.delete(s)}}return fe(o,u)}function Se(n,o){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const d=[];o.headers&&d.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&d.push(o.body),s+=`[data-hash="${ot(...d)}"]`}return s}const ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function lt(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ut(n).map(s=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(d)return o.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(f)return o.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const S=s.split(/\[(.+?)\](?!\])/);return"/"+S.map((y,w)=>{if(w%2){if(y.startsWith("x+"))return be(String.fromCharCode(parseInt(y.slice(2),16)));if(y.startsWith("u+"))return be(String.fromCharCode(...y.slice(2).split("-").map(U=>parseInt(U,16))));const h=ct.exec(y);if(!h)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,x,k,N]=h;return o.push({name:k,matcher:N,optional:!!D,rest:!!x,chained:x?w===1&&S[0]==="":!1}),x?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return be(y)}).join("")}).join("")}/?$`),params:o}}function ft(n){return!/^\([^)]+\)$/.test(n)}function ut(n){return n.slice(1).split("/").filter(ft)}function dt(n,o,u){const s={},d=n.slice(1);let f=0;for(let S=0;S<o.length;S+=1){const l=o[S];let y=d[S-f];if(l.chained&&l.rest&&f&&(y=d.slice(S-f,S+1).filter(w=>w).join("/"),f=0),y===void 0){l.rest&&(s[l.name]="");continue}if(!l.matcher||u[l.matcher](y)){s[l.name]=y;const w=o[S+1],h=d[S+1];w&&!w.rest&&w.optional&&h&&l.chained&&(f=0);continue}if(l.optional&&l.chained){f++;continue}return}if(!f)return s}function be(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function pt({nodes:n,server_loads:o,dictionary:u,matchers:s}){const d=new Set(o);return Object.entries(u).map(([l,[y,w,h]])=>{const{pattern:D,params:x}=lt(l),k={id:l,exec:N=>{const U=D.exec(N);if(U)return dt(U,x,s)},errors:[1,...h||[]].map(N=>n[N]),layouts:[0,...w||[]].map(S),leaf:f(y)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function f(l){const y=l<0;return y&&(l=~l),[y,n[l]]}function S(l){return l===void 0?l:[d.has(l),n[l]]}}function Ke(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Fe(n,o){const u=JSON.stringify(o);try{sessionStorage[n]=u}catch{}}const ht=-1,gt=-2,mt=-3,yt=-4,wt=-5,_t=-6;function bt(n,o){if(typeof n=="number")return d(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const u=n,s=Array(u.length);function d(f,S=!1){if(f===ht)return;if(f===mt)return NaN;if(f===yt)return 1/0;if(f===wt)return-1/0;if(f===_t)return-0;if(S)throw new Error("Invalid input");if(f in s)return s[f];const l=u[f];if(!l||typeof l!="object")s[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const y=l[0],w=o==null?void 0:o[y];if(w)return s[f]=w(d(l[1]));switch(y){case"Date":s[f]=new Date(l[1]);break;case"Set":const h=new Set;s[f]=h;for(let k=1;k<l.length;k+=1)h.add(d(l[k]));break;case"Map":const D=new Map;s[f]=D;for(let k=1;k<l.length;k+=2)D.set(d(l[k]),d(l[k+1]));break;case"RegExp":s[f]=new RegExp(l[1],l[2]);break;case"Object":s[f]=Object(l[1]);break;case"BigInt":s[f]=BigInt(l[1]);break;case"null":const x=Object.create(null);s[f]=x;for(let k=1;k<l.length;k+=2)x[l[k]]=d(l[k+1]);break;default:throw new Error(`Unknown type ${y}`)}}else{const y=new Array(l.length);s[f]=y;for(let w=0;w<l.length;w+=1){const h=l[w];h!==gt&&(y[w]=d(h))}}else{const y={};s[f]=y;for(const w in l){const h=l[w];y[w]=d(h)}}return s[f]}return d(0)}function vt(n){return n.filter(o=>o!=null)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const Et=new Set([...ze]);[...Et];async function St(n){var o;for(const u in n)if(typeof((o=n[u])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,d])=>[s,await d])));return n}class te{constructor(o,u){this.status=o,typeof u=="string"?this.body={message:u}:u?this.body=u:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(o,u){this.status=o,this.location=u}}const kt="x-sveltekit-invalidated",z=Ke(He)??{},Q=Ke(Je)??{};function ve(n){z[n]=ee()}function Rt(n,o){var $e;const u=pt(n),s=n.nodes[0],d=n.nodes[1];s(),d();const f=document.documentElement,S=[],l=[];let y=null;const w={before_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},D=!1,x=!1,k=!0,N=!1,U=!1,B=!1,H=!1,q,j=($e=history.state)==null?void 0:$e[V];j||(j=Date.now(),history.replaceState({...history.state,[V]:j},"",location.href));const ue=z[j];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let F,ae,Y;async function ke(){if(Y=Y||Promise.resolve(),await Y,!Y)return;Y=null;const e=new URL(location.href),i=X(e,!0);y=null;const t=ae={},r=i&&await he(i);if(t===ae&&r){if(r.type==="redirect")return re(new URL(r.location,e).href,{},[e.pathname],t);r.props.page!==void 0&&(F=r.props.page),q.$set(r.props)}}function Re(e){l.some(i=>i==null?void 0:i.snapshot)&&(Q[e]=l.map(i=>{var t;return(t=i==null?void 0:i.snapshot)==null?void 0:t.capture()}))}function Ae(e){var i;(i=Q[e])==null||i.forEach((t,r)=>{var a,c;(c=(a=l[r])==null?void 0:a.snapshot)==null||c.restore(t)})}function Ie(){ve(j),Fe(He,z),Re(j),Fe(Je,Q)}async function re(e,{noScroll:i=!1,replaceState:t=!1,keepFocus:r=!1,state:a={},invalidateAll:c=!1},p,v){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:i?ee():null,keepfocus:r,redirect_chain:p,details:{state:a,replaceState:t},nav_token:v,accepted:()=>{c&&(H=!0)},blocked:()=>{},type:"goto"})}async function Le(e){return y={id:e.id,promise:he(e).then(i=>(i.type==="loaded"&&i.state.error&&(y=null),i))},y.promise}async function oe(...e){const t=u.filter(r=>e.some(a=>r.exec(a))).map(r=>Promise.all([...r.layouts,r.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(t)}function Oe(e){var r;h=e.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),F=e.props.page,q=new n.root({target:o,props:{...e.props,stores:M,components:l},hydrate:!0}),Ae(j);const t={from:null,to:{params:h.params,route:{id:((r=h.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};w.after_navigate.forEach(a=>a(t)),x=!0}async function W({url:e,params:i,branch:t,status:r,error:a,route:c,form:p}){let v="never";for(const g of t)(g==null?void 0:g.slash)!==void 0&&(v=g.slash);e.pathname=Xe(e.pathname,v),e.search=e.search;const b={type:"loaded",state:{url:e,params:i,branch:t,error:a,route:c},props:{constructors:vt(t).map(g=>g.node.component)}};p!==void 0&&(b.props.form=p);let _={},R=!F,A=0;for(let g=0;g<Math.max(t.length,h.branch.length);g+=1){const m=t[g],P=h.branch[g];(m==null?void 0:m.data)!==(P==null?void 0:P.data)&&(R=!0),m&&(_={..._,...m.data},R&&(b.props[`data_${A}`]=_),A+=1)}return(!h.url||e.href!==h.url.href||h.error!==a||p!==void 0&&p!==F.form||R)&&(b.props.page={error:a,params:i,route:{id:(c==null?void 0:c.id)??null},status:r,url:new URL(e),form:p??null,data:R?_:F.data}),b}async function de({loader:e,parent:i,url:t,params:r,route:a,server_data_node:c}){var _,R,A;let p=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((_=b.universal)!=null&&_.load){let I=function(...m){for(const P of m){const{href:$}=new URL(P,t);v.dependencies.add($)}};const g={route:{get id(){return v.route=!0,a.id}},params:new Proxy(r,{get:(m,P)=>(v.params.add(P),m[P])}),data:(c==null?void 0:c.data)??null,url:tt(t,()=>{v.url=!0}),async fetch(m,P){let $;m instanceof Request?($=m.url,P={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...P}):$=m;const C=new URL($,t);return I(C.href),C.origin===t.origin&&($=C.href.slice(t.origin.length)),x?st($,C.href,P):it($,P)},setHeaders:()=>{},depends:I,parent(){return v.parent=!0,i()}};p=await b.universal.load.call(null,g)??null,p=p?await St(p):null}return{node:b,loader:e,server:c,universal:(R=b.universal)!=null&&R.load?{type:"data",data:p,uses:v}:null,data:p??(c==null?void 0:c.data)??null,slash:((A=b.universal)==null?void 0:A.trailingSlash)??(c==null?void 0:c.slash)}}function Ue(e,i,t,r,a){if(H)return!0;if(!r)return!1;if(r.parent&&e||r.route&&i||r.url&&t)return!0;for(const c of r.params)if(a[c]!==h.params[c])return!0;for(const c of r.dependencies)if(S.some(p=>p(new URL(c))))return!0;return!1}function pe(e,i){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?i??null:null}async function he({id:e,invalidating:i,url:t,params:r,route:a}){if((y==null?void 0:y.id)===e)return y.promise;const{errors:c,layouts:p,leaf:v}=a,b=[...p,v];c.forEach(E=>E==null?void 0:E().catch(()=>{})),b.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let _=null;const R=h.url?e!==h.url.pathname+h.url.search:!1,A=h.route?a.id!==h.route.id:!1;let I=!1;const g=b.map((E,O)=>{var J;const L=h.branch[O],T=!!(E!=null&&E[0])&&((L==null?void 0:L.loader)!==E[1]||Ue(I,A,R,(J=L.server)==null?void 0:J.uses,r));return T&&(I=!0),T});if(g.some(Boolean)){try{_=await Be(t,g)}catch(E){return ie({status:E instanceof te?E.status:500,error:await Z(E,{url:t,params:r,route:{id:a.id}}),url:t,route:a})}if(_.type==="redirect")return _}const m=_==null?void 0:_.nodes;let P=!1;const $=b.map(async(E,O)=>{var ge;if(!E)return;const L=h.branch[O],T=m==null?void 0:m[O];if((!T||T.type==="skip")&&E[1]===(L==null?void 0:L.loader)&&!Ue(P,A,R,(ge=L.universal)==null?void 0:ge.uses,r))return L;if(P=!0,(T==null?void 0:T.type)==="error")throw T;return de({loader:E[1],url:t,params:r,route:a,parent:async()=>{var Te;const je={};for(let me=0;me<O;me+=1)Object.assign(je,(Te=await $[me])==null?void 0:Te.data);return je},server_data_node:pe(T===void 0&&E[0]?{type:"skip"}:T??null,E[0]?L==null?void 0:L.server:void 0)})});for(const E of $)E.catch(()=>{});const C=[];for(let E=0;E<b.length;E+=1)if(b[E])try{C.push(await $[E])}catch(O){if(O instanceof Me)return{type:"redirect",location:O.location};let L=500,T;if(m!=null&&m.includes(O))L=O.status??L,T=O.error;else if(O instanceof te)L=O.status,T=O.body;else{if(await M.updated.check())return await G(t);T=await Z(O,{params:r,url:t,route:{id:a.id}})}const J=await Pe(E,C,c);return J?await W({url:t,params:r,branch:C.slice(0,J.idx).concat(J.node),status:L,error:T,route:a}):await Ne(t,{id:a.id},T,L)}else C.push(void 0);return await W({url:t,params:r,branch:C,status:200,error:null,route:a,form:i?void 0:null})}async function Pe(e,i,t){for(;e--;)if(t[e]){let r=e;for(;!i[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:i,url:t,route:r}){const a={};let c=null;if(n.server_loads[0]===0)try{const _=await Be(t,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;c=_.nodes[0]??null}catch{(t.origin!==location.origin||t.pathname!==location.pathname||D)&&await G(t)}const v=await de({loader:s,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:pe(c)}),b={node:await d(),loader:d,universal:null,server:null,data:null};return await W({url:t,params:a,branch:[v,b],status:e,error:i,route:null})}function X(e,i){if(_e(e,K))return;const t=se(e);for(const r of u){const a=r.exec(t);if(a)return{id:e.pathname+e.search,invalidating:i,route:r,params:Qe(a),url:e}}}function se(e){return Ze(e.pathname.slice(K.length)||"/")}function xe({url:e,type:i,intent:t,delta:r}){var v,b;let a=!1;const c={from:{params:h.params,route:{id:((v=h.route)==null?void 0:v.id)??null},url:h.url},to:{params:(t==null?void 0:t.params)??null,route:{id:((b=t==null?void 0:t.route)==null?void 0:b.id)??null},url:e},willUnload:!t,type:i};r!==void 0&&(c.delta=r);const p={...c,cancel:()=>{a=!0}};return U||w.before_navigate.forEach(_=>_(p)),a?null:c}async function ce({url:e,scroll:i,keepfocus:t,redirect_chain:r,details:a,type:c,delta:p,nav_token:v={},accepted:b,blocked:_}){var $,C,E;const R=X(e,!1),A=xe({url:e,type:c,delta:p,intent:R});if(!A){_();return}const I=j;b(),U=!0,x&&M.navigating.set(A),ae=v;let g=R&&await he(R);if(!g){if(_e(e,K))return await G(e);g=await Ne(e,{id:null},await Z(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ae!==v)return!1;if(g.type==="redirect")if(r.length>10||r.includes(e.pathname))g=await ie({status:500,error:await Z(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(g.location,e).href,{},[...r,e.pathname],v),!1;else(($=g.props.page)==null?void 0:$.status)>=400&&await M.updated.check()&&await G(e);if(S.length=0,H=!1,N=!0,ve(I),Re(I),(C=g.props.page)!=null&&C.url&&g.props.page.url.pathname!==e.pathname&&(e.pathname=(E=g.props.page)==null?void 0:E.url.pathname),a){const O=a.replaceState?0:1;if(a.state[V]=j+=O,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let L=j+1;for(;Q[L]||z[L];)delete Q[L],delete z[L],L+=1}}y=null,x?(h=g.state,g.props.page&&(g.props.page.url=e),q.$set(g.props)):Oe(g);const{activeElement:m}=document;if(await ye(),k){const O=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));i?scrollTo(i.x,i.y):O?O.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==m&&document.activeElement!==document.body;!t&&!P&&Ee(),k=!0,g.props.page&&(F=g.props.page),U=!1,c==="popstate"&&Ae(j),w.after_navigate.forEach(O=>O(A)),M.navigating.set(null),N=!1}async function Ne(e,i,t,r){return e.origin===location.origin&&e.pathname===location.pathname&&!D?await ie({status:r,error:t,url:e,route:i}):await G(e)}function G(e){return location.href=e.href,new Promise(()=>{})}function Ye(){let e;f.addEventListener("mousemove",c=>{const p=c.target;clearTimeout(e),e=setTimeout(()=>{r(p,2)},20)});function i(c){r(c.composedPath()[0],1)}f.addEventListener("mousedown",i),f.addEventListener("touchstart",i,{passive:!0});const t=new IntersectionObserver(c=>{for(const p of c)p.isIntersecting&&(oe(se(new URL(p.target.href))),t.unobserve(p.target))},{threshold:0});function r(c,p){const v=Ve(c,f);if(!v)return;const{url:b,external:_,download:R}=we(v,K);if(_||R)return;const A=le(v);if(!A.reload)if(p<=A.preload_data){const I=X(b,!1);I&&Le(I)}else p<=A.preload_code&&oe(se(b))}function a(){t.disconnect();for(const c of f.querySelectorAll("a")){const{url:p,external:v,download:b}=we(c,K);if(v||b)continue;const _=le(c);_.reload||(_.preload_code===qe.viewport&&t.observe(c),_.preload_code===qe.eager&&oe(se(p)))}}w.after_navigate.push(a),a()}function Z(e,i){return e instanceof te?e.body:n.hooks.handleError({error:e,event:i})??{message:i.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{De(()=>(w.after_navigate.push(e),()=>{const i=w.after_navigate.indexOf(e);w.after_navigate.splice(i,1)}))},before_navigate:e=>{De(()=>(w.before_navigate.push(e),()=>{const i=w.before_navigate.indexOf(e);w.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(N||!x)&&(k=!1)},goto:(e,i={})=>re(e,i,[]),invalidate:e=>{if(typeof e=="function")S.push(e);else{const{href:i}=new URL(e,location.href);S.push(t=>t.href===i)}return ke()},invalidate_all:()=>(H=!0,ke()),preload_data:async e=>{const i=new URL(e,Ce(document)),t=X(i,!1);if(!t)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await Le(t)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const i=new URL(location.href),{branch:t,route:r}=h;if(!r)return;const a=await Pe(h.branch.length,t,r.errors);if(a){const c=await W({url:i,params:h.params,branch:t.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});h=c.state,q.$set(c.props),ye().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...F,form:e.data,status:e.status}}),await ye(),q.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{var a;let r=!1;if(Ie(),!U){const c={from:{params:h.params,route:{id:((a=h.route)==null?void 0:a.id)??null},url:h.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};w.before_navigate.forEach(p=>p(c))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(i=navigator.connection)!=null&&i.saveData||Ye(),f.addEventListener("click",t=>{var I;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Ve(t.composedPath()[0],f);if(!r)return;const{url:a,external:c,target:p,download:v}=we(r,K);if(!a)return;if(p==="_parent"||p==="_top"){if(window.parent!==window)return}else if(p&&p!=="_self")return;const b=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||v)return;if(c||b.reload){xe({url:a,type:"link"})?U=!0:t.preventDefault();return}const[R,A]=a.href.split("#");if(A!==void 0&&R===location.href.split("#")[0]){if(h.url.hash===a.hash){t.preventDefault(),(I=r.ownerDocument.getElementById(A))==null||I.scrollIntoView();return}if(B=!0,ve(j),e(a),!b.replace_state)return;B=!1,t.preventDefault()}ce({url:a,scroll:b.noscroll?ee():null,keepfocus:b.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:b.replace_state??a.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),f.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const p=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(p,K))return;const v=t.target,{keep_focus:b,noscroll:_,reload:R,replace_state:A}=le(v);if(R)return;t.preventDefault(),t.stopPropagation();const I=new FormData(v),g=a==null?void 0:a.getAttribute("name");g&&I.append(g,(a==null?void 0:a.getAttribute("value"))??""),p.search=new URLSearchParams(I).toString(),ce({url:p,scroll:_?ee():null,keepfocus:b??!1,redirect_chain:[],details:{state:{},replaceState:A??p.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[V]){if(t.state[V]===j)return;const a=z[t.state[V]];if(h.url.href.split("#")[0]===location.href.split("#")[0]){z[j]=ee(),j=t.state[V],scrollTo(a.x,a.y);return}const c=t.state[V]-j;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=t.state[V]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}else if(!B){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[V]:++j},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&M.navigating.set(null)});function e(t){h.url=t,M.page.set({...F,url:t}),M.page.notify()}},_hydrate:async({status:e=200,error:i,node_ids:t,params:r,route:a,data:c,form:p})=>{D=!0;const v=new URL(location.href);({params:r={},route:a={id:null}}=X(v,!1)||{});let b;try{const _=t.map(async(I,g)=>{const m=c[g];return m!=null&&m.uses&&(m.uses=Ge(m.uses)),de({loader:n.nodes[I],url:v,params:r,route:a,parent:async()=>{const P={};for(let $=0;$<g;$+=1)Object.assign(P,(await _[$]).data);return P},server_data_node:pe(m)})}),R=await Promise.all(_),A=u.find(({id:I})=>I===a.id);if(A){const I=A.layouts;for(let g=0;g<I.length;g++)I[g]||R.splice(g,0,void 0)}b=await W({url:v,params:r,branch:R,status:e,error:i,form:p,route:A??null})}catch(_){if(_ instanceof Me){await G(new URL(_.location,location.href));return}b=await ie({status:_ instanceof te?_.status:500,error:await Z(_,{url:v,params:r,route:a}),url:v,route:a})}Oe(b)}}}async function Be(n,o){const u=new URL(n);u.pathname=rt(n.pathname),u.searchParams.append(kt,o.map(d=>d?"1":"0").join(""));const s=await fe(u.href);if(!s.ok)throw new te(s.status,await s.json());return new Promise(async d=>{var h;const f=new Map,S=s.body.getReader(),l=new TextDecoder;function y(D){return bt(D,{Promise:x=>new Promise((k,N)=>{f.set(x,{fulfil:k,reject:N})})})}let w="";for(;;){const{done:D,value:x}=await S.read();if(D&&!w)break;for(w+=!x&&w?`
`:l.decode(x);;){const k=w.indexOf(`
`);if(k===-1)break;const N=JSON.parse(w.slice(0,k));if(w=w.slice(k+1),N.type==="redirect")return d(N);if(N.type==="data")(h=N.nodes)==null||h.forEach(U=>{(U==null?void 0:U.type)==="data"&&(U.uses=Ge(U.uses),U.data=y(U.data))}),d(N);else if(N.type==="chunk"){const{id:U,data:B,error:H}=N,q=f.get(U);f.delete(U),H?q.reject(y(H)):q.fulfil(y(B))}}}})}function Ge(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function Ee(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,u=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),u!==null?o.setAttribute("tabindex",u):o.removeAttribute("tabindex");const s=getSelection();if(s&&s.type!=="None"){const d=[];for(let f=0;f<s.rangeCount;f+=1)d.push(s.getRangeAt(f));setTimeout(()=>{if(s.rangeCount===d.length){for(let f=0;f<s.rangeCount;f+=1){const S=d[f],l=s.getRangeAt(f);if(S.commonAncestorContainer!==l.commonAncestorContainer||S.startContainer!==l.startContainer||S.endContainer!==l.endContainer||S.startOffset!==l.startOffset||S.endOffset!==l.endOffset)return}s.removeAllRanges()}})}}}async function Ot(n,o,u){const s=Rt(n,o);We({client:s}),u?await s._hydrate(u):s.goto(location.href,{replaceState:!0}),s._start_router()}export{Ot as start};
