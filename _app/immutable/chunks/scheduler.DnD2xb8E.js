function g(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function F(){return Object.create(null)}function j(t){t.forEach(w)}function E(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function S(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const o of n)o(void 0);return g}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(v(n,e))}function A(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function B(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|r[u];return a}return n.dirty|r}return n.dirty}function C(t,n,e,o,r,a){if(r){const f=y(n,e,o,a);t.p(f,r)}}function D(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function G(t){return t&&E(t.destroy)?t.destroy:g}let i;function d(t){i=t}function m(){if(!i)throw new Error("Function called outside component initialization");return i}function H(t){m().$$.on_mount.push(t)}function I(t){m().$$.after_update.push(t)}const l=[],p=[];let s=[];const b=[],x=Promise.resolve();let _=!1;function O(){_||(_=!0,x.then(M))}function J(){return O(),x}function q(t){s.push(t)}const h=new Set;let c=0;function M(){if(c!==0)return;const t=i;do{try{for(;c<l.length;){const n=l[c];c++,d(n),z(n.$$)}}catch(n){throw l.length=0,c=0,n}for(d(null),l.length=0,c=0;p.length;)p.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(l.length);for(;b.length;)b.pop()();_=!1,h.clear(),d(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function K(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{B as a,U as b,A as c,I as d,p as e,G as f,D as g,F as h,E as i,M as j,S as k,q as l,K as m,g as n,H as o,i as p,d as q,j as r,P as s,J as t,C as u,w as v,l as w,O as x};
