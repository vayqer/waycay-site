function C(){}function S(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function W(){return Object.create(null)}function P(t){t.forEach(M)}function Q(t){return typeof t=="function"}function R(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function U(t){return Object.keys(t).length===0}function B(t,...n){if(t==null){for(const i of n)i(void 0);return C}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function V(t,n,e){t.$$.on_destroy.push(B(n,e))}function X(t,n,e,i){if(t){const r=E(t,n,e,i);return t[0](r)}}function E(t,n,e,i){return t[1]&&i?S(e.ctx.slice(),t[1](i(n))):e.ctx}function Y(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=n.dirty[u]|r[u];return o}return n.dirty|r}return n.dirty}function Z(t,n,e,i,r,o){if(r){const c=E(n,e,i,o);t.p(c,r)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let m=!1;function tt(){m=!0}function nt(){m=!1}function O(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const s=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:O(1,r,j=>n[e[j]].claim_order,s))-1;i[l]=e[a]+1;const v=a+1;e[v]=l,r=Math.max(v,r)}const o=[],c=[];let u=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(o.push(n[l-1]);u>=l;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);o.reverse(),c.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<c.length;l++){for(;s<o.length&&c[l].claim_order>=o[s].claim_order;)s++;const a=s<o.length?o[s]:null;t.insertBefore(c[l],a)}}function D(t,n){if(m){for(q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){m&&!e?D(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function it(t){t.parentNode&&t.parentNode.removeChild(t)}function H(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function rt(){return x(" ")}function ct(){return x("")}function lt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function ut(t){return t.dataset.svelteH}function ot(t){return Array.from(t.childNodes)}function T(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function N(t,n,e,i,r=!1){T(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function z(t,n,e,i){return N(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function st(t,n,e){return z(t,n,e,H)}function F(t,n){return N(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>x(n),!0)}function at(t){return F(t," ")}function ft(t,n){n=""+n,t.data!==n&&(t.data=n)}function _t(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function I(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function dt(t,n){return new t(n)}let h;function p(t){h=t}function g(){if(!h)throw new Error("Function called outside component initialization");return h}function ht(t){g().$$.on_mount.push(t)}function mt(t){g().$$.after_update.push(t)}function pt(){const t=g();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=I(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const d=[],k=[];let _=[];const w=[],A=Promise.resolve();let y=!1;function L(){y||(y=!0,A.then(J))}function bt(){return L(),A}function G(t){_.push(t)}const b=new Set;let f=0;function J(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const n=d[f];f++,p(n),K(n.$$)}}catch(n){throw d.length=0,f=0,n}for(p(null),d.length=0,f=0;k.length;)k.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;w.length;)w.pop()();y=!1,b.clear(),p(t)}function K(t){if(t.fragment!==null){t.update(),P(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}function yt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{V as A,pt as B,P as C,W as D,J as E,Q as F,U as G,G as H,yt as I,h as J,p as K,M as L,d as M,L as N,tt as O,nt as P,rt as a,mt as b,at as c,it as d,ct as e,H as f,st as g,ot as h,et as i,lt as j,_t as k,x as l,F as m,ft as n,ht as o,k as p,dt as q,X as r,R as s,bt as t,ut as u,Z as v,$ as w,Y as x,D as y,C as z};