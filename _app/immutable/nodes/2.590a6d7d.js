import{s as $,f as u,g as d,h as m,d as i,i as _,K as k,I as x,e as T,T as z,j as b,W as B,l as w,a as C,m as D,c as H,z as h,n as L}from"../chunks/scheduler.a3135585.js";import{S as P,i as V}from"../chunks/index.2af51129.js";import{B as j}from"../chunks/index.58101c1c.js";function M(c){return(c==null?void 0:c.length)!==void 0?c:Array.from(c)}function N(c,l,s){const e=c.slice();return e[2]=l[s],e}function R(c){let l;function s(a,n){return a[0].length?y:q}let e=s(c),t=e(c);return{c(){t.c(),l=T()},l(a){t.l(a),l=T()},m(a,n){t.m(a,n),_(a,l,n)},p(a,n){e===(e=s(a))&&t?t.p(a,n):(t.d(1),t=e(a),t&&(t.c(),t.m(l.parentNode,l)))},d(a){a&&i(l),t.d(a)}}}function q(c){let l,s='<p class="text-slate-500/50">Add books to get started</p>';return{c(){l=u("div"),l.innerHTML=s,this.h()},l(e){l=d(e,"DIV",{class:!0,"data-svelte-h":!0}),z(l)!=="svelte-hakzvw"&&(l.innerHTML=s),this.h()},h(){b(l,"class","m-auto")},m(e,t){_(e,l,t)},p:k,d(e){e&&i(l)}}}function y(c){let l,s=M(c[0]),e=[];for(let t=0;t<s.length;t+=1)e[t]=S(N(c,s,t));return{c(){l=u("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=d(t,"DIV",{class:!0});var a=m(l);for(let n=0;n<e.length;n+=1)e[n].l(a);a.forEach(i),this.h()},h(){b(l,"class","grid grid-cols-4 gap-4 p-4")},m(t,a){_(t,l,a);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,null)},p(t,a){if(a&1){s=M(t[0]);let n;for(n=0;n<s.length;n+=1){const o=N(t,s,n);e[n]?e[n].p(o,a):(e[n]=S(o),e[n].c(),e[n].m(l,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},d(t){t&&i(l),B(e,t)}}}function S(c){let l,s,e,t=c[2].title+"",a,n,o,p=c[2].author+"",g,E;return{c(){l=u("article"),s=u("header"),e=u("strong"),a=w(t),n=C(),o=u("p"),g=w(p),E=C(),this.h()},l(r){l=d(r,"ARTICLE",{class:!0});var f=m(l);s=d(f,"HEADER",{});var v=m(s);e=d(v,"STRONG",{});var A=m(e);a=D(A,t),A.forEach(i),n=H(v),o=d(v,"P",{class:!0});var I=m(o);g=D(I,p),I.forEach(i),v.forEach(i),E=H(f),f.forEach(i),this.h()},h(){b(o,"class","text-slate-500/50"),b(l,"class","max-w-sm w-full")},m(r,f){_(r,l,f),h(l,s),h(s,e),h(e,a),h(s,n),h(s,o),h(o,g),h(l,E)},p(r,f){f&1&&t!==(t=r[2].title+"")&&L(a,t),f&1&&p!==(p=r[2].author+"")&&L(g,p)},d(r){r&&i(l)}}}function G(c){let l,s=c[0]&&R(c);return{c(){l=u("main"),s&&s.c()},l(e){l=d(e,"MAIN",{});var t=m(l);s&&s.l(t),t.forEach(i)},m(e,t){_(e,l,t),s&&s.m(l,null)},p(e,[t]){e[0]?s?s.p(e,t):(s=R(e),s.c(),s.m(l,null)):s&&(s.d(1),s=null)},i:k,o:k,d(e){e&&i(l),s&&s.d()}}}function K(c,l,s){let e;const{store:t}=j;return x(c,t,a=>s(0,e=a)),[e,t]}class J extends P{constructor(l){super(),V(this,l,K,G,$,{})}}export{J as component};
