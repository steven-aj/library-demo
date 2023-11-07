import{r as Le,u as Dt,v as Ot,w as Ht,x as Ne,s as ae,y as q,f as L,a as N,g as I,h as F,c as V,d as k,j as m,i as M,z as R,A as K,B as G,C as W,D as gt,E as J,F as se,k as Ve,G as U,H as ye,l as le,m as oe,e as j,I as Re,J as pt,K as Y,L as Ft,M as ze,N as be,O as ge,P as pe,Q as we,q as he,R as Ue,S as je,n as ce,T as te,U as Mt,V as Pt}from"../chunks/scheduler.a3135585.js";import{S as re,i as fe,a as T,g as z,t as C,c as w,f as Bt,h as qe,j as At,b as Z,d as ie,m as x,e as $}from"../chunks/index.2af51129.js";import{w as ve,r as Nt}from"../chunks/index.b20e7359.js";import{B as Vt}from"../chunks/index.58101c1c.js";function de(o,e){const t={},a={},s={$$scope:1};let l=o.length;for(;l--;){const n=o[l],i=e[l];if(i){for(const f in n)f in i||(a[f]=1);for(const f in i)s[f]||(t[f]=i[f],s[f]=1);o[l]=i}else for(const f in n)s[f]=1}for(const n in a)n in t||(t[n]=void 0);return t}function _e(o){return typeof o=="object"&&o!==null?o:{}}const zt=!0,so=Object.freeze(Object.defineProperty({__proto__:null,prerender:zt},Symbol.toStringTag,{value:"Module"}));const wt="drawerStore";function Ut(){const o=jt();return Le(wt,o)}function jt(){const{subscribe:o,set:e,update:t}=ve({});return{subscribe:o,set:e,update:t,open:a=>t(()=>({open:!0,...a})),close:()=>t(a=>(a.open=!1,a))}}const vt="modalStore";function Ie(){const o=Dt(vt);if(!o)throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return o}function qt(){const o=Kt();return Le(vt,o)}function Kt(){const{subscribe:o,set:e,update:t}=ve([]);return{subscribe:o,set:e,update:t,trigger:a=>t(s=>(s.push(a),s)),close:()=>t(a=>(a.length>0&&a.shift(),a)),clear:()=>e([])}}const Gt={message:"Missing Toast Message",autohide:!0,timeout:5e3},Wt="toastStore";function Qt(){const o=Jt();return Le(Wt,o)}function Yt(){const o=Math.random();return Number(o).toString(32)}function Jt(){const{subscribe:o,set:e,update:t}=ve([]),a=l=>t(n=>{if(n.length>0){const i=n.findIndex(r=>r.id===l),f=n[i];f&&(f.callback&&f.callback({id:l,status:"closed"}),f.timeoutId&&clearTimeout(f.timeoutId),n.splice(i,1))}return n});function s(l){if(l.autohide===!0)return setTimeout(()=>{a(l.id)},l.timeout)}return{subscribe:o,close:a,trigger:l=>{const n=Yt();return t(i=>{l&&l.callback&&l.callback({id:n,status:"queued"}),l.hideDismiss&&(l.autohide=!0);const f={...Gt,...l,id:n};return f.timeoutId=s(f),i.push(f),i}),n},freeze:l=>t(n=>(n.length>0&&clearTimeout(n[l].timeoutId),n)),unfreeze:l=>t(n=>(n.length>0&&(n[l].timeoutId=s(n[l])),n)),clear:()=>e([])}}function Xt(){qt(),Qt(),Ut()}const Ce={};function Ke(o){return o==="local"?localStorage:sessionStorage}function De(o,e,t){const a=(t==null?void 0:t.serializer)??JSON,s=(t==null?void 0:t.storage)??"local";function l(n,i){Ke(s).setItem(n,a.stringify(i))}if(!Ce[o]){const n=ve(e,r=>{const u=Ke(s).getItem(o);u&&r(a.parse(u));{const d=h=>{h.key===o&&r(h.newValue?a.parse(h.newValue):null)};return window.addEventListener("storage",d),()=>window.removeEventListener("storage",d)}}),{subscribe:i,set:f}=n;Ce[o]={set(r){l(o,r),f(r)},update(r){const u=r(Ot(n));l(o,u),f(u)},subscribe:i}}return Ce[o]}De("modeOsPrefers",!1);De("modeUserPrefers",void 0);De("modeCurrent",!1);function Zt(){const o=window.matchMedia("(prefers-color-scheme: light)");function e(t){const a=document.documentElement.classList,s="dark";t===!0?a.remove(s):a.add(s)}e(o.matches),o.onchange=()=>{e(o.matches)}}const kt="(prefers-reduced-motion: reduce)";function xt(){return window.matchMedia(kt).matches}const $t=Nt(xt(),o=>{{const e=a=>{o(a.matches)},t=window.matchMedia(kt);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});function el(o,e){const t='a[href]:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';let a,s;function l(d){d.shiftKey&&d.code==="Tab"&&(d.preventDefault(),s.focus())}function n(d){!d.shiftKey&&d.code==="Tab"&&(d.preventDefault(),a.focus())}const i=d=>{if(e===!1)return;const h=Array.from(o.querySelectorAll(t));h.length&&(a=h[0],s=h[h.length-1],d||a.focus(),a.addEventListener("keydown",l),s.addEventListener("keydown",n))};i(!1);function f(){a&&a.removeEventListener("keydown",l),s&&s.removeEventListener("keydown",n)}const r=(d,h)=>(d.length&&(f(),i(!0)),h),u=new MutationObserver(r);return u.observe(o,{childList:!0,subtree:!0}),{update(d){e=d,d?i(!1):f()},destroy(){f(),u.disconnect()}}}function tl(o){const e=o-1;return e*e*e+1}function Ge(o,{delay:e=0,duration:t=400,easing:a=Ht}={}){const s=+getComputedStyle(o).opacity;return{delay:e,duration:t,easing:a,css:l=>`opacity: ${l*s}`}}function We(o,{delay:e=0,duration:t=400,easing:a=tl,x:s=0,y:l=0,opacity:n=0}={}){const i=getComputedStyle(o),f=+i.opacity,r=i.transform==="none"?"":i.transform,u=f*(1-n),[d,h]=Ne(s),[g,E]=Ne(l);return{delay:e,duration:t,easing:a,css:(S,_)=>`
			transform: ${r} translate(${(1-S)*d}${h}, ${(1-S)*g}${E});
			opacity: ${f-u*_}`}}function me(o,e){const{transition:t,params:a,enabled:s}=e;return s?t(o,a):"duration"in a?t(o,{duration:0}):{duration:0}}const ll=o=>({}),Qe=o=>({}),ol=o=>({}),Ye=o=>({}),al=o=>({}),Je=o=>({});function Xe(o){let e,t,a;const s=o[22].lead,l=q(s,o,o[21],Je);return{c(){e=L("div"),l&&l.c(),this.h()},l(n){e=I(n,"DIV",{class:!0});var i=F(e);l&&l.l(i),i.forEach(k),this.h()},h(){m(e,"class",t="app-bar-slot-lead "+o[4])},m(n,i){M(n,e,i),l&&l.m(e,null),a=!0},p(n,i){l&&l.p&&(!a||i&2097152)&&K(l,s,n,n[21],a?W(s,n[21],i,al):G(n[21]),Je),(!a||i&16&&t!==(t="app-bar-slot-lead "+n[4]))&&m(e,"class",t)},i(n){a||(T(l,n),a=!0)},o(n){C(l,n),a=!1},d(n){n&&k(e),l&&l.d(n)}}}function Ze(o){let e,t,a;const s=o[22].trail,l=q(s,o,o[21],Ye);return{c(){e=L("div"),l&&l.c(),this.h()},l(n){e=I(n,"DIV",{class:!0});var i=F(e);l&&l.l(i),i.forEach(k),this.h()},h(){m(e,"class",t="app-bar-slot-trail "+o[2])},m(n,i){M(n,e,i),l&&l.m(e,null),a=!0},p(n,i){l&&l.p&&(!a||i&2097152)&&K(l,s,n,n[21],a?W(s,n[21],i,ol):G(n[21]),Ye),(!a||i&4&&t!==(t="app-bar-slot-trail "+n[2]))&&m(e,"class",t)},i(n){a||(T(l,n),a=!0)},o(n){C(l,n),a=!1},d(n){n&&k(e),l&&l.d(n)}}}function xe(o){let e,t,a;const s=o[22].headline,l=q(s,o,o[21],Qe);return{c(){e=L("div"),l&&l.c(),this.h()},l(n){e=I(n,"DIV",{class:!0});var i=F(e);l&&l.l(i),i.forEach(k),this.h()},h(){m(e,"class",t="app-bar-row-headline "+o[5])},m(n,i){M(n,e,i),l&&l.m(e,null),a=!0},p(n,i){l&&l.p&&(!a||i&2097152)&&K(l,s,n,n[21],a?W(s,n[21],i,ll):G(n[21]),Qe),(!a||i&32&&t!==(t="app-bar-row-headline "+n[5]))&&m(e,"class",t)},i(n){a||(T(l,n),a=!0)},o(n){C(l,n),a=!1},d(n){n&&k(e),l&&l.d(n)}}}function nl(o){let e,t,a,s,l,n,i,f,r,u,d=o[8].lead&&Xe(o);const h=o[22].default,g=q(h,o,o[21],null);let E=o[8].trail&&Ze(o),S=o[8].headline&&xe(o);return{c(){e=L("div"),t=L("div"),d&&d.c(),a=N(),s=L("div"),g&&g.c(),n=N(),E&&E.c(),f=N(),S&&S.c(),this.h()},l(_){e=I(_,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var c=F(e);t=I(c,"DIV",{class:!0});var b=F(t);d&&d.l(b),a=V(b),s=I(b,"DIV",{class:!0});var A=F(s);g&&g.l(A),A.forEach(k),n=V(b),E&&E.l(b),b.forEach(k),f=V(c),S&&S.l(c),c.forEach(k),this.h()},h(){m(s,"class",l="app-bar-slot-default "+o[3]),m(t,"class",i="app-bar-row-main "+o[6]),m(e,"class",r="app-bar "+o[7]),m(e,"data-testid","app-bar"),m(e,"role","toolbar"),m(e,"aria-label",o[0]),m(e,"aria-labelledby",o[1])},m(_,c){M(_,e,c),R(e,t),d&&d.m(t,null),R(t,a),R(t,s),g&&g.m(s,null),R(t,n),E&&E.m(t,null),R(e,f),S&&S.m(e,null),u=!0},p(_,[c]){_[8].lead?d?(d.p(_,c),c&256&&T(d,1)):(d=Xe(_),d.c(),T(d,1),d.m(t,a)):d&&(z(),C(d,1,1,()=>{d=null}),w()),g&&g.p&&(!u||c&2097152)&&K(g,h,_,_[21],u?W(h,_[21],c,null):G(_[21]),null),(!u||c&8&&l!==(l="app-bar-slot-default "+_[3]))&&m(s,"class",l),_[8].trail?E?(E.p(_,c),c&256&&T(E,1)):(E=Ze(_),E.c(),T(E,1),E.m(t,null)):E&&(z(),C(E,1,1,()=>{E=null}),w()),(!u||c&64&&i!==(i="app-bar-row-main "+_[6]))&&m(t,"class",i),_[8].headline?S?(S.p(_,c),c&256&&T(S,1)):(S=xe(_),S.c(),T(S,1),S.m(e,null)):S&&(z(),C(S,1,1,()=>{S=null}),w()),(!u||c&128&&r!==(r="app-bar "+_[7]))&&m(e,"class",r),(!u||c&1)&&m(e,"aria-label",_[0]),(!u||c&2)&&m(e,"aria-labelledby",_[1])},i(_){u||(T(d),T(g,_),T(E),T(S),u=!0)},o(_){C(d),C(g,_),C(E),C(S),u=!1},d(_){_&&k(e),d&&d.d(),g&&g.d(_),E&&E.d(),S&&S.d()}}}const sl="flex flex-col",il="grid items-center",rl="",fl="flex-none flex justify-between items-center",ul="flex-auto",cl="flex-none flex items-center space-x-4";function dl(o,e,t){let a,s,l,n,i,f,{$$slots:r={},$$scope:u}=e;const d=gt(r);let{background:h="bg-surface-100-800-token"}=e,{border:g=""}=e,{padding:E="p-4"}=e,{shadow:S=""}=e,{spacing:_="space-y-4"}=e,{gridColumns:c="grid-cols-[auto_1fr_auto]"}=e,{gap:b="gap-4"}=e,{regionRowMain:A=""}=e,{regionRowHeadline:B=""}=e,{slotLead:D=""}=e,{slotDefault:H=""}=e,{slotTrail:P=""}=e,{label:v=""}=e,{labelledby:O=""}=e;return o.$$set=y=>{t(23,e=J(J({},e),se(y))),"background"in y&&t(9,h=y.background),"border"in y&&t(10,g=y.border),"padding"in y&&t(11,E=y.padding),"shadow"in y&&t(12,S=y.shadow),"spacing"in y&&t(13,_=y.spacing),"gridColumns"in y&&t(14,c=y.gridColumns),"gap"in y&&t(15,b=y.gap),"regionRowMain"in y&&t(16,A=y.regionRowMain),"regionRowHeadline"in y&&t(17,B=y.regionRowHeadline),"slotLead"in y&&t(18,D=y.slotLead),"slotDefault"in y&&t(19,H=y.slotDefault),"slotTrail"in y&&t(20,P=y.slotTrail),"label"in y&&t(0,v=y.label),"labelledby"in y&&t(1,O=y.labelledby),"$$scope"in y&&t(21,u=y.$$scope)},o.$$.update=()=>{t(7,a=`${sl} ${h} ${g} ${_} ${E} ${S} ${e.class??""}`),o.$$.dirty&114688&&t(6,s=`${il} ${c} ${b} ${A}`),o.$$.dirty&131072&&t(5,l=`${rl} ${B}`),o.$$.dirty&262144&&t(4,n=`${fl} ${D}`),o.$$.dirty&524288&&t(3,i=`${ul} ${H}`),o.$$.dirty&1048576&&t(2,f=`${cl} ${P}`)},e=se(e),[v,O,f,i,n,l,s,a,d,h,g,E,S,_,c,b,A,B,D,H,P,u,r]}class ml extends re{constructor(e){super(),fe(this,e,dl,nl,ae,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const hl=o=>({}),$e=o=>({}),_l=o=>({}),et=o=>({}),bl=o=>({}),tt=o=>({}),gl=o=>({}),lt=o=>({}),pl=o=>({}),ot=o=>({}),vl=o=>({}),at=o=>({});function nt(o){let e,t,a;const s=o[19].header,l=q(s,o,o[18],at);return{c(){e=L("header"),l&&l.c(),this.h()},l(n){e=I(n,"HEADER",{id:!0,class:!0});var i=F(e);l&&l.l(i),i.forEach(k),this.h()},h(){m(e,"id","shell-header"),m(e,"class",t="flex-none "+o[8])},m(n,i){M(n,e,i),l&&l.m(e,null),a=!0},p(n,i){l&&l.p&&(!a||i&262144)&&K(l,s,n,n[18],a?W(s,n[18],i,vl):G(n[18]),at),(!a||i&256&&t!==(t="flex-none "+n[8]))&&m(e,"class",t)},i(n){a||(T(l,n),a=!0)},o(n){C(l,n),a=!1},d(n){n&&k(e),l&&l.d(n)}}}function st(o){let e,t;const a=o[19].sidebarLeft,s=q(a,o,o[18],ot);return{c(){e=L("aside"),s&&s.c(),this.h()},l(l){e=I(l,"ASIDE",{id:!0,class:!0});var n=F(e);s&&s.l(n),n.forEach(k),this.h()},h(){m(e,"id","sidebar-left"),m(e,"class",o[7])},m(l,n){M(l,e,n),s&&s.m(e,null),t=!0},p(l,n){s&&s.p&&(!t||n&262144)&&K(s,a,l,l[18],t?W(a,l[18],n,pl):G(l[18]),ot),(!t||n&128)&&m(e,"class",l[7])},i(l){t||(T(s,l),t=!0)},o(l){C(s,l),t=!1},d(l){l&&k(e),s&&s.d(l)}}}function it(o){let e,t,a;const s=o[19].pageHeader,l=q(s,o,o[18],lt),n=l||kl();return{c(){e=L("header"),n&&n.c(),this.h()},l(i){e=I(i,"HEADER",{id:!0,class:!0});var f=F(e);n&&n.l(f),f.forEach(k),this.h()},h(){m(e,"id","page-header"),m(e,"class",t="flex-none "+o[5])},m(i,f){M(i,e,f),n&&n.m(e,null),a=!0},p(i,f){l&&l.p&&(!a||f&262144)&&K(l,s,i,i[18],a?W(s,i[18],f,gl):G(i[18]),lt),(!a||f&32&&t!==(t="flex-none "+i[5]))&&m(e,"class",t)},i(i){a||(T(n,i),a=!0)},o(i){C(n,i),a=!1},d(i){i&&k(e),n&&n.d(i)}}}function kl(o){let e;return{c(){e=le("(slot:header)")},l(t){e=oe(t,"(slot:header)")},m(t,a){M(t,e,a)},d(t){t&&k(e)}}}function rt(o){let e,t,a;const s=o[19].pageFooter,l=q(s,o,o[18],tt),n=l||El();return{c(){e=L("footer"),n&&n.c(),this.h()},l(i){e=I(i,"FOOTER",{id:!0,class:!0});var f=F(e);n&&n.l(f),f.forEach(k),this.h()},h(){m(e,"id","page-footer"),m(e,"class",t="flex-none "+o[3])},m(i,f){M(i,e,f),n&&n.m(e,null),a=!0},p(i,f){l&&l.p&&(!a||f&262144)&&K(l,s,i,i[18],a?W(s,i[18],f,bl):G(i[18]),tt),(!a||f&8&&t!==(t="flex-none "+i[3]))&&m(e,"class",t)},i(i){a||(T(n,i),a=!0)},o(i){C(n,i),a=!1},d(i){i&&k(e),n&&n.d(i)}}}function El(o){let e;return{c(){e=le("(slot:footer)")},l(t){e=oe(t,"(slot:footer)")},m(t,a){M(t,e,a)},d(t){t&&k(e)}}}function ft(o){let e,t;const a=o[19].sidebarRight,s=q(a,o,o[18],et);return{c(){e=L("aside"),s&&s.c(),this.h()},l(l){e=I(l,"ASIDE",{id:!0,class:!0});var n=F(e);s&&s.l(n),n.forEach(k),this.h()},h(){m(e,"id","sidebar-right"),m(e,"class",o[6])},m(l,n){M(l,e,n),s&&s.m(e,null),t=!0},p(l,n){s&&s.p&&(!t||n&262144)&&K(s,a,l,l[18],t?W(a,l[18],n,_l):G(l[18]),et),(!t||n&64)&&m(e,"class",l[6])},i(l){t||(T(s,l),t=!0)},o(l){C(s,l),t=!1},d(l){l&&k(e),s&&s.d(l)}}}function ut(o){let e,t,a;const s=o[19].footer,l=q(s,o,o[18],$e);return{c(){e=L("footer"),l&&l.c(),this.h()},l(n){e=I(n,"FOOTER",{id:!0,class:!0});var i=F(e);l&&l.l(i),i.forEach(k),this.h()},h(){m(e,"id","shell-footer"),m(e,"class",t="flex-none "+o[2])},m(n,i){M(n,e,i),l&&l.m(e,null),a=!0},p(n,i){l&&l.p&&(!a||i&262144)&&K(l,s,n,n[18],a?W(s,n[18],i,hl):G(n[18]),$e),(!a||i&4&&t!==(t="flex-none "+n[2]))&&m(e,"class",t)},i(n){a||(T(l,n),a=!0)},o(n){C(l,n),a=!1},d(n){n&&k(e),l&&l.d(n)}}}function Tl(o){let e,t,a,s,l,n,i,f,r,u,d,h,g,E,S,_=o[10].header&&nt(o),c=o[10].sidebarLeft&&st(o),b=o[10].pageHeader&&it(o);const A=o[19].default,B=q(A,o,o[18],null);let D=o[10].pageFooter&&rt(o),H=o[10].sidebarRight&&ft(o),P=o[10].footer&&ut(o);return{c(){e=L("div"),_&&_.c(),t=N(),a=L("div"),c&&c.c(),s=N(),l=L("div"),b&&b.c(),n=N(),i=L("main"),B&&B.c(),r=N(),D&&D.c(),d=N(),H&&H.c(),h=N(),P&&P.c(),this.h()},l(v){e=I(v,"DIV",{id:!0,class:!0,"data-testid":!0});var O=F(e);_&&_.l(O),t=V(O),a=I(O,"DIV",{class:!0});var y=F(a);c&&c.l(y),s=V(y),l=I(y,"DIV",{id:!0,class:!0});var Q=F(l);b&&b.l(Q),n=V(Q),i=I(Q,"MAIN",{id:!0,class:!0});var ne=F(i);B&&B.l(ne),ne.forEach(k),r=V(Q),D&&D.l(Q),Q.forEach(k),d=V(y),H&&H.l(y),y.forEach(k),h=V(O),P&&P.l(O),O.forEach(k),this.h()},h(){m(i,"id","page-content"),m(i,"class",f="flex-auto "+o[4]),m(l,"id","page"),m(l,"class",u=o[1]+" "+ct),Ve(l,"scrollbar-gutter",o[0]),m(a,"class","flex-auto "+Cl),m(e,"id","appShell"),m(e,"class",o[9]),m(e,"data-testid","app-shell")},m(v,O){M(v,e,O),_&&_.m(e,null),R(e,t),R(e,a),c&&c.m(a,null),R(a,s),R(a,l),b&&b.m(l,null),R(l,n),R(l,i),B&&B.m(i,null),R(l,r),D&&D.m(l,null),R(a,d),H&&H.m(a,null),R(e,h),P&&P.m(e,null),g=!0,E||(S=U(l,"scroll",o[20]),E=!0)},p(v,[O]){v[10].header?_?(_.p(v,O),O&1024&&T(_,1)):(_=nt(v),_.c(),T(_,1),_.m(e,t)):_&&(z(),C(_,1,1,()=>{_=null}),w()),v[10].sidebarLeft?c?(c.p(v,O),O&1024&&T(c,1)):(c=st(v),c.c(),T(c,1),c.m(a,s)):c&&(z(),C(c,1,1,()=>{c=null}),w()),v[10].pageHeader?b?(b.p(v,O),O&1024&&T(b,1)):(b=it(v),b.c(),T(b,1),b.m(l,n)):b&&(z(),C(b,1,1,()=>{b=null}),w()),B&&B.p&&(!g||O&262144)&&K(B,A,v,v[18],g?W(A,v[18],O,null):G(v[18]),null),(!g||O&16&&f!==(f="flex-auto "+v[4]))&&m(i,"class",f),v[10].pageFooter?D?(D.p(v,O),O&1024&&T(D,1)):(D=rt(v),D.c(),T(D,1),D.m(l,null)):D&&(z(),C(D,1,1,()=>{D=null}),w()),(!g||O&2&&u!==(u=v[1]+" "+ct))&&m(l,"class",u),O&1&&Ve(l,"scrollbar-gutter",v[0]),v[10].sidebarRight?H?(H.p(v,O),O&1024&&T(H,1)):(H=ft(v),H.c(),T(H,1),H.m(a,null)):H&&(z(),C(H,1,1,()=>{H=null}),w()),v[10].footer?P?(P.p(v,O),O&1024&&T(P,1)):(P=ut(v),P.c(),T(P,1),P.m(e,null)):P&&(z(),C(P,1,1,()=>{P=null}),w()),(!g||O&512)&&m(e,"class",v[9])},i(v){g||(T(_),T(c),T(b),T(B,v),T(D),T(H),T(P),g=!0)},o(v){C(_),C(c),C(b),C(B,v),C(D),C(H),C(P),g=!1},d(v){v&&k(e),_&&_.d(),c&&c.d(),b&&b.d(),B&&B.d(v),D&&D.d(),H&&H.d(),P&&P.d(),E=!1,S()}}}const Sl="w-full h-full flex flex-col overflow-hidden",Cl="w-full h-full flex overflow-hidden",ct="flex-1 overflow-x-hidden flex flex-col",yl="flex-none overflow-x-hidden overflow-y-auto",Rl="flex-none overflow-x-hidden overflow-y-auto";function Ll(o,e,t){let a,s,l,n,i,f,r,u,{$$slots:d={},$$scope:h}=e;const g=gt(d);let{scrollbarGutter:E="auto"}=e,{regionPage:S=""}=e,{slotHeader:_="z-10"}=e,{slotSidebarLeft:c="w-auto"}=e,{slotSidebarRight:b="w-auto"}=e,{slotPageHeader:A=""}=e,{slotPageContent:B=""}=e,{slotPageFooter:D=""}=e,{slotFooter:H=""}=e;function P(v){ye.call(this,o,v)}return o.$$set=v=>{t(21,e=J(J({},e),se(v))),"scrollbarGutter"in v&&t(0,E=v.scrollbarGutter),"regionPage"in v&&t(1,S=v.regionPage),"slotHeader"in v&&t(11,_=v.slotHeader),"slotSidebarLeft"in v&&t(12,c=v.slotSidebarLeft),"slotSidebarRight"in v&&t(13,b=v.slotSidebarRight),"slotPageHeader"in v&&t(14,A=v.slotPageHeader),"slotPageContent"in v&&t(15,B=v.slotPageContent),"slotPageFooter"in v&&t(16,D=v.slotPageFooter),"slotFooter"in v&&t(17,H=v.slotFooter),"$$scope"in v&&t(18,h=v.$$scope)},o.$$.update=()=>{t(9,a=`${Sl} ${e.class??""}`),o.$$.dirty&2048&&t(8,s=`${_}`),o.$$.dirty&4096&&t(7,l=`${yl} ${c}`),o.$$.dirty&8192&&t(6,n=`${Rl} ${b}`),o.$$.dirty&16384&&t(5,i=`${A}`),o.$$.dirty&32768&&t(4,f=`${B}`),o.$$.dirty&65536&&t(3,r=`${D}`),o.$$.dirty&131072&&t(2,u=`${H}`)},e=se(e),[E,S,u,r,f,i,n,l,s,a,g,_,c,b,A,B,D,H,h,d,P]}class Il extends re{constructor(e){super(),fe(this,e,Ll,Tl,ae,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17})}}function dt(o){let e=o[13],t,a,s=bt(o);return{c(){s.c(),t=j()},l(l){s.l(l),t=j()},m(l,n){s.m(l,n),M(l,t,n),a=!0},p(l,n){n[0]&8192&&ae(e,e=l[13])?(z(),C(s,1,1,Y),w(),s=bt(l),s.c(),T(s,1),s.m(t.parentNode,t)):s.p(l,n)},i(l){a||(T(s),a=!0)},o(l){C(s),a=!1},d(l){l&&k(t),s.d(l)}}}function Dl(o){let e,t,a,s,l,n;const i=[Fl,Hl],f=[];function r(u,d){var h;return(h=u[15])!=null&&h.slot?0:1}return t=r(o),a=f[t]=i[t](o),{c(){e=L("div"),a.c(),this.h()},l(u){e=I(u,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var d=F(e);a.l(d),d.forEach(k),this.h()},h(){var u;m(e,"class",s="modal contents "+(((u=o[13][0])==null?void 0:u.modalClasses)??"")),m(e,"data-testid","modal-component"),m(e,"role","dialog"),m(e,"aria-modal","true"),m(e,"aria-label",l=o[13][0].title??"")},m(u,d){M(u,e,d),f[t].m(e,null),n=!0},p(u,d){var g;let h=t;t=r(u),t===h?f[t].p(u,d):(z(),C(f[h],1,1,()=>{f[h]=null}),w(),a=f[t],a?a.p(u,d):(a=f[t]=i[t](u),a.c()),T(a,1),a.m(e,null)),(!n||d[0]&8192&&s!==(s="modal contents "+(((g=u[13][0])==null?void 0:g.modalClasses)??"")))&&m(e,"class",s),(!n||d[0]&8192&&l!==(l=u[13][0].title??""))&&m(e,"aria-label",l)},i(u){n||(T(a),n=!0)},o(u){C(a),n=!1},d(u){u&&k(e),f[t].d()}}}function Ol(o){var g,E,S,_;let e,t,a,s,l,n,i=((g=o[13][0])==null?void 0:g.title)&&mt(o),f=((E=o[13][0])==null?void 0:E.body)&&ht(o),r=((S=o[13][0])==null?void 0:S.image)&&typeof((_=o[13][0])==null?void 0:_.image)=="string"&&_t(o);function u(c,b){if(c[13][0].type==="alert")return Al;if(c[13][0].type==="confirm")return Bl;if(c[13][0].type==="prompt")return Pl}let d=u(o),h=d&&d(o);return{c(){e=L("div"),i&&i.c(),t=N(),f&&f.c(),a=N(),r&&r.c(),s=N(),h&&h.c(),this.h()},l(c){e=I(c,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var b=F(e);i&&i.l(b),t=V(b),f&&f.l(b),a=V(b),r&&r.l(b),s=V(b),h&&h.l(b),b.forEach(k),this.h()},h(){m(e,"class",l="modal "+o[17]),m(e,"data-testid","modal"),m(e,"role","dialog"),m(e,"aria-modal","true"),m(e,"aria-label",n=o[13][0].title??"")},m(c,b){M(c,e,b),i&&i.m(e,null),R(e,t),f&&f.m(e,null),R(e,a),r&&r.m(e,null),R(e,s),h&&h.m(e,null)},p(c,b){var A,B,D,H;(A=c[13][0])!=null&&A.title?i?i.p(c,b):(i=mt(c),i.c(),i.m(e,t)):i&&(i.d(1),i=null),(B=c[13][0])!=null&&B.body?f?f.p(c,b):(f=ht(c),f.c(),f.m(e,a)):f&&(f.d(1),f=null),(D=c[13][0])!=null&&D.image&&typeof((H=c[13][0])==null?void 0:H.image)=="string"?r?r.p(c,b):(r=_t(c),r.c(),r.m(e,s)):r&&(r.d(1),r=null),d===(d=u(c))&&h?h.p(c,b):(h&&h.d(1),h=d&&d(c),h&&(h.c(),h.m(e,null))),b[0]&131072&&l!==(l="modal "+c[17])&&m(e,"class",l),b[0]&8192&&n!==(n=c[13][0].title??"")&&m(e,"aria-label",n)},i:Y,o:Y,d(c){c&&k(e),i&&i.d(),f&&f.d(),r&&r.d(),h&&h.d()}}}function Hl(o){var i,f;let e,t,a;const s=[(i=o[15])==null?void 0:i.props,{parent:o[16]}];var l=(f=o[15])==null?void 0:f.ref;function n(r,u){var h;let d={};if(u!==void 0&&u[0]&98304)d=de(s,[u[0]&32768&&_e((h=r[15])==null?void 0:h.props),u[0]&65536&&{parent:r[16]}]);else for(let g=0;g<s.length;g+=1)d=J(d,s[g]);return{props:d}}return l&&(e=he(l,n(o))),{c(){e&&Z(e.$$.fragment),t=j()},l(r){e&&ie(e.$$.fragment,r),t=j()},m(r,u){e&&x(e,r,u),M(r,t,u),a=!0},p(r,u){var d,h;if(u[0]&32768&&l!==(l=(d=r[15])==null?void 0:d.ref)){if(e){z();const g=e;C(g.$$.fragment,1,0,()=>{$(g,1)}),w()}l?(e=he(l,n(r,u)),Z(e.$$.fragment),T(e.$$.fragment,1),x(e,t.parentNode,t)):e=null}else if(l){const g=u[0]&98304?de(s,[u[0]&32768&&_e((h=r[15])==null?void 0:h.props),u[0]&65536&&{parent:r[16]}]):{};e.$set(g)}},i(r){a||(e&&T(e.$$.fragment,r),a=!0)},o(r){e&&C(e.$$.fragment,r),a=!1},d(r){r&&k(t),e&&$(e,r)}}}function Fl(o){var i,f;let e,t,a;const s=[(i=o[15])==null?void 0:i.props,{parent:o[16]}];var l=(f=o[15])==null?void 0:f.ref;function n(r,u){var h;let d={$$slots:{default:[Ml]},$$scope:{ctx:r}};if(u!==void 0&&u[0]&98304)d=de(s,[u[0]&32768&&_e((h=r[15])==null?void 0:h.props),u[0]&65536&&{parent:r[16]}]);else for(let g=0;g<s.length;g+=1)d=J(d,s[g]);return{props:d}}return l&&(e=he(l,n(o))),{c(){e&&Z(e.$$.fragment),t=j()},l(r){e&&ie(e.$$.fragment,r),t=j()},m(r,u){e&&x(e,r,u),M(r,t,u),a=!0},p(r,u){var d,h;if(u[0]&32768&&l!==(l=(d=r[15])==null?void 0:d.ref)){if(e){z();const g=e;C(g.$$.fragment,1,0,()=>{$(g,1)}),w()}l?(e=he(l,n(r,u)),Z(e.$$.fragment),T(e.$$.fragment,1),x(e,t.parentNode,t)):e=null}else if(l){const g=u[0]&98304?de(s,[u[0]&32768&&_e((h=r[15])==null?void 0:h.props),u[0]&65536&&{parent:r[16]}]):{};u[0]&32768|u[1]&65536&&(g.$$scope={dirty:u,ctx:r}),e.$set(g)}},i(r){a||(e&&T(e.$$.fragment,r),a=!0)},o(r){e&&C(e.$$.fragment,r),a=!1},d(r){r&&k(t),e&&$(e,r)}}}function Ml(o){var s;let e,t=((s=o[15])==null?void 0:s.slot)+"",a;return{c(){e=new ge(!1),a=j(),this.h()},l(l){e=pe(l,!1),a=j(),this.h()},h(){e.a=a},m(l,n){e.m(t,l,n),M(l,a,n)},p(l,n){var i;n[0]&32768&&t!==(t=((i=l[15])==null?void 0:i.slot)+"")&&e.p(t)},d(l){l&&(k(a),e.d())}}}function mt(o){let e,t,a=o[13][0].title+"",s;return{c(){e=L("header"),t=new ge(!1),this.h()},l(l){e=I(l,"HEADER",{class:!0});var n=F(e);t=pe(n,!1),n.forEach(k),this.h()},h(){t.a=null,m(e,"class",s="modal-header "+o[5])},m(l,n){M(l,e,n),t.m(a,e)},p(l,n){n[0]&8192&&a!==(a=l[13][0].title+"")&&t.p(a),n[0]&32&&s!==(s="modal-header "+l[5])&&m(e,"class",s)},d(l){l&&k(e)}}}function ht(o){let e,t,a=o[13][0].body+"",s;return{c(){e=L("article"),t=new ge(!1),this.h()},l(l){e=I(l,"ARTICLE",{class:!0});var n=F(e);t=pe(n,!1),n.forEach(k),this.h()},h(){t.a=null,m(e,"class",s="modal-body "+o[6])},m(l,n){M(l,e,n),t.m(a,e)},p(l,n){n[0]&8192&&a!==(a=l[13][0].body+"")&&t.p(a),n[0]&64&&s!==(s="modal-body "+l[6])&&m(e,"class",s)},d(l){l&&k(e)}}}function _t(o){let e,t;return{c(){e=L("img"),this.h()},l(a){e=I(a,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var a;m(e,"class","modal-image "+Ul),we(e.src,t=(a=o[13][0])==null?void 0:a.image)||m(e,"src",t),m(e,"alt","Modal")},m(a,s){M(a,e,s)},p(a,s){var l;s[0]&8192&&!we(e.src,t=(l=a[13][0])==null?void 0:l.image)&&m(e,"src",t)},d(a){a&&k(e)}}}function Pl(o){let e,t,a,s,l,n,i,f,r,u,d,h,g,E,S=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},o[13][0].valueAttr],_={};for(let c=0;c<S.length;c+=1)_=J(_,S[c]);return{c(){e=L("form"),t=L("input"),a=N(),s=L("footer"),l=L("button"),n=le(o[0]),f=N(),r=L("button"),u=le(o[2]),this.h()},l(c){e=I(c,"FORM",{class:!0});var b=F(e);t=I(b,"INPUT",{class:!0,name:!0,type:!0}),a=V(b),s=I(b,"FOOTER",{class:!0});var A=F(s);l=I(A,"BUTTON",{type:!0,class:!0});var B=F(l);n=oe(B,o[0]),B.forEach(k),f=V(A),r=I(A,"BUTTON",{type:!0,class:!0});var D=F(r);u=oe(D,o[2]),D.forEach(k),A.forEach(k),b.forEach(k),this.h()},h(){Ue(t,_),m(l,"type","button"),m(l,"class",i="btn "+o[3]),m(r,"type","submit"),m(r,"class",d="btn "+o[4]),m(s,"class",h="modal-footer "+o[7]),m(e,"class","space-y-4")},m(c,b){M(c,e,b),R(e,t),t.autofocus&&t.focus(),je(t,o[14]),R(e,a),R(e,s),R(s,l),R(l,n),R(s,f),R(s,r),R(r,u),g||(E=[U(t,"input",o[41]),U(l,"click",o[23]),U(e,"submit",o[25])],g=!0)},p(c,b){Ue(t,_=de(S,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},b[0]&8192&&c[13][0].valueAttr])),b[0]&16384&&t.value!==c[14]&&je(t,c[14]),b[0]&1&&ce(n,c[0]),b[0]&8&&i!==(i="btn "+c[3])&&m(l,"class",i),b[0]&4&&ce(u,c[2]),b[0]&16&&d!==(d="btn "+c[4])&&m(r,"class",d),b[0]&128&&h!==(h="modal-footer "+c[7])&&m(s,"class",h)},d(c){c&&k(e),g=!1,be(E)}}}function Bl(o){let e,t,a,s,l,n,i,f,r,u,d;return{c(){e=L("footer"),t=L("button"),a=le(o[0]),l=N(),n=L("button"),i=le(o[1]),this.h()},l(h){e=I(h,"FOOTER",{class:!0});var g=F(e);t=I(g,"BUTTON",{type:!0,class:!0});var E=F(t);a=oe(E,o[0]),E.forEach(k),l=V(g),n=I(g,"BUTTON",{type:!0,class:!0});var S=F(n);i=oe(S,o[1]),S.forEach(k),g.forEach(k),this.h()},h(){m(t,"type","button"),m(t,"class",s="btn "+o[3]),m(n,"type","button"),m(n,"class",f="btn "+o[4]),m(e,"class",r="modal-footer "+o[7])},m(h,g){M(h,e,g),R(e,t),R(t,a),R(e,l),R(e,n),R(n,i),u||(d=[U(t,"click",o[23]),U(n,"click",o[24])],u=!0)},p(h,g){g[0]&1&&ce(a,h[0]),g[0]&8&&s!==(s="btn "+h[3])&&m(t,"class",s),g[0]&2&&ce(i,h[1]),g[0]&16&&f!==(f="btn "+h[4])&&m(n,"class",f),g[0]&128&&r!==(r="modal-footer "+h[7])&&m(e,"class",r)},d(h){h&&k(e),u=!1,be(d)}}}function Al(o){let e,t,a,s,l,n,i;return{c(){e=L("footer"),t=L("button"),a=le(o[0]),this.h()},l(f){e=I(f,"FOOTER",{class:!0});var r=F(e);t=I(r,"BUTTON",{type:!0,class:!0});var u=F(t);a=oe(u,o[0]),u.forEach(k),r.forEach(k),this.h()},h(){m(t,"type","button"),m(t,"class",s="btn "+o[3]),m(e,"class",l="modal-footer "+o[7])},m(f,r){M(f,e,r),R(e,t),R(t,a),n||(i=U(t,"click",o[23]),n=!0)},p(f,r){r[0]&1&&ce(a,f[0]),r[0]&8&&s!==(s="btn "+f[3])&&m(t,"class",s),r[0]&128&&l!==(l="modal-footer "+f[7])&&m(e,"class",l)},d(f){f&&k(e),n=!1,i()}}}function bt(o){let e,t,a,s,l,n,i,f,r,u,d,h;const g=[Ol,Dl],E=[];function S(_,c){return _[13][0].type!=="component"?0:1}return a=S(o),s=E[a]=g[a](o),{c(){e=L("div"),t=L("div"),s.c(),this.h()},l(_){e=I(_,"DIV",{class:!0,"data-testid":!0});var c=F(e);t=I(c,"DIV",{class:!0});var b=F(t);s.l(b),b.forEach(k),c.forEach(k),this.h()},h(){m(t,"class",l="modal-transition "+o[18]),m(e,"class",f="modal-backdrop "+o[19]),m(e,"data-testid","modal-backdrop")},m(_,c){M(_,e,c),R(e,t),E[a].m(t,null),u=!0,d||(h=[U(e,"mousedown",o[21]),U(e,"mouseup",o[22]),U(e,"touchstart",o[39],{passive:!0}),U(e,"touchend",o[40],{passive:!0}),Ft(el.call(null,e,!0))],d=!0)},p(_,c){o=_;let b=a;a=S(o),a===b?E[a].p(o,c):(z(),C(E[b],1,1,()=>{E[b]=null}),w(),s=E[a],s?s.p(o,c):(s=E[a]=g[a](o),s.c()),T(s,1),s.m(t,null)),(!u||c[0]&262144&&l!==(l="modal-transition "+o[18]))&&m(t,"class",l),(!u||c[0]&524288&&f!==(f="modal-backdrop "+o[19]))&&m(e,"class",f)},i(_){u||(T(s),ze(()=>{u&&(i&&i.end(1),n=Bt(t,me,{transition:o[9],params:o[10],enabled:o[8]}),n.start())}),ze(()=>{u&&(r||(r=qe(e,me,{transition:Ge,params:{duration:150},enabled:o[8]},!0)),r.run(1))}),u=!0)},o(_){C(s),n&&n.invalidate(),i=At(t,me,{transition:o[11],params:o[12],enabled:o[8]}),r||(r=qe(e,me,{transition:Ge,params:{duration:150},enabled:o[8]},!1)),r.run(0),u=!1},d(_){_&&k(e),E[a].d(),_&&i&&i.end(),_&&r&&r.end(),d=!1,be(h)}}}function Nl(o){let e,t,a,s,l=o[13].length>0&&dt(o);return{c(){l&&l.c(),e=j()},l(n){l&&l.l(n),e=j()},m(n,i){l&&l.m(n,i),M(n,e,i),t=!0,a||(s=U(window,"keydown",o[26]),a=!0)},p(n,i){n[13].length>0?l?(l.p(n,i),i[0]&8192&&T(l,1)):(l=dt(n),l.c(),T(l,1),l.m(e.parentNode,e)):l&&(z(),C(l,1,1,()=>{l=null}),w())},i(n){t||(T(l),t=!0)},o(n){C(l),t=!1},d(n){n&&k(e),l&&l.d(n),a=!1,s()}}}const Vl="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto",zl="w-full h-fit min-h-full p-4 overflow-y-auto flex justify-center",wl="block overflow-y-auto",Ul="w-full h-auto";function jl(o,e,t){let a,s,l,n,i,f,r;Re(o,$t,p=>t(43,r=p));const u=pt();let{position:d="items-center"}=e,{components:h={}}=e,{background:g="bg-surface-100-800-token"}=e,{width:E="w-modal"}=e,{height:S="h-auto"}=e,{padding:_="p-4"}=e,{spacing:c="space-y-4"}=e,{rounded:b="rounded-container-token"}=e,{shadow:A="shadow-xl"}=e,{zIndex:B="z-[999]"}=e,{buttonNeutral:D="variant-ghost-surface"}=e,{buttonPositive:H="variant-filled"}=e,{buttonTextCancel:P="Cancel"}=e,{buttonTextConfirm:v="Confirm"}=e,{buttonTextSubmit:O="Submit"}=e,{regionBackdrop:y="bg-surface-backdrop-token"}=e,{regionHeader:Q="text-2xl font-bold"}=e,{regionBody:ne="max-h-[200px] overflow-hidden"}=e,{regionFooter:ke="flex justify-end space-x-2"}=e,{transitions:Oe=!r}=e,{transitionIn:He=We}=e,{transitionInParams:Fe={duration:150,opacity:0,x:0,y:100}}=e,{transitionOut:Me=We}=e,{transitionOutParams:Pe={duration:150,opacity:0,x:0,y:100}}=e,ue;const Ee={buttonTextCancel:P,buttonTextConfirm:v,buttonTextSubmit:O};let Be,Te=!1;const ee=Ie();Re(o,ee,p=>t(13,f=p)),ee.subscribe(p=>{p.length&&(p[0].type==="prompt"&&t(14,ue=p[0].value),t(0,P=p[0].buttonTextCancel||Ee.buttonTextCancel),t(1,v=p[0].buttonTextConfirm||Ee.buttonTextConfirm),t(2,O=p[0].buttonTextSubmit||Ee.buttonTextSubmit),t(15,Be=typeof p[0].component=="string"?h[p[0].component]:p[0].component))});function Et(p){if(!(p.target instanceof Element))return;const X=p.target.classList;(X.contains("modal-backdrop")||X.contains("modal-transition"))&&(Te=!0)}function Tt(p){if(!(p.target instanceof Element))return;const X=p.target.classList;(X.contains("modal-backdrop")||X.contains("modal-transition"))&&Te&&(f[0].response&&f[0].response(void 0),ee.close(),u("backdrop",p)),Te=!1}function Se(){f[0].response&&f[0].response(!1),ee.close()}function St(){f[0].response&&f[0].response(!0),ee.close()}function Ct(p){p.preventDefault(),f[0].response&&f[0].response(ue),ee.close()}function yt(p){f.length&&p.code==="Escape"&&Se()}function Rt(p){ye.call(this,o,p)}function Lt(p){ye.call(this,o,p)}function It(){ue=this.value,t(14,ue)}return o.$$set=p=>{t(46,e=J(J({},e),se(p))),"position"in p&&t(27,d=p.position),"components"in p&&t(28,h=p.components),"background"in p&&t(29,g=p.background),"width"in p&&t(30,E=p.width),"height"in p&&t(31,S=p.height),"padding"in p&&t(32,_=p.padding),"spacing"in p&&t(33,c=p.spacing),"rounded"in p&&t(34,b=p.rounded),"shadow"in p&&t(35,A=p.shadow),"zIndex"in p&&t(36,B=p.zIndex),"buttonNeutral"in p&&t(3,D=p.buttonNeutral),"buttonPositive"in p&&t(4,H=p.buttonPositive),"buttonTextCancel"in p&&t(0,P=p.buttonTextCancel),"buttonTextConfirm"in p&&t(1,v=p.buttonTextConfirm),"buttonTextSubmit"in p&&t(2,O=p.buttonTextSubmit),"regionBackdrop"in p&&t(37,y=p.regionBackdrop),"regionHeader"in p&&t(5,Q=p.regionHeader),"regionBody"in p&&t(6,ne=p.regionBody),"regionFooter"in p&&t(7,ke=p.regionFooter),"transitions"in p&&t(8,Oe=p.transitions),"transitionIn"in p&&t(9,He=p.transitionIn),"transitionInParams"in p&&t(10,Fe=p.transitionInParams),"transitionOut"in p&&t(11,Me=p.transitionOut),"transitionOutParams"in p&&t(12,Pe=p.transitionOutParams)},o.$$.update=()=>{var p,X,Ae;o.$$.dirty[0]&134225920&&t(38,a=((p=f[0])==null?void 0:p.position)??d),t(19,s=`${Vl} ${y} ${B} ${e.class??""} ${((X=f[0])==null?void 0:X.backdropClasses)??""}`),o.$$.dirty[1]&128&&t(18,l=`${zl} ${a??""}`),o.$$.dirty[0]&1610620928|o.$$.dirty[1]&31&&t(17,n=`${wl} ${g} ${E} ${S} ${_} ${c} ${b} ${A} ${((Ae=f[0])==null?void 0:Ae.modalClasses)??""}`),o.$$.dirty[0]&1744830719|o.$$.dirty[1]&95&&t(16,i={position:d,background:g,width:E,height:S,padding:_,spacing:c,rounded:b,shadow:A,buttonNeutral:D,buttonPositive:H,buttonTextCancel:P,buttonTextConfirm:v,buttonTextSubmit:O,regionBackdrop:y,regionHeader:Q,regionBody:ne,regionFooter:ke,onClose:Se})},e=se(e),[P,v,O,D,H,Q,ne,ke,Oe,He,Fe,Me,Pe,f,ue,Be,i,n,l,s,ee,Et,Tt,Se,St,Ct,yt,d,h,g,E,S,_,c,b,A,B,y,a,Rt,Lt,It]}class ql extends re{constructor(e){super(),fe(this,e,jl,Nl,ae,{position:27,components:28,background:29,width:30,height:31,padding:32,spacing:33,rounded:34,shadow:35,zIndex:36,buttonNeutral:3,buttonPositive:4,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:37,regionHeader:5,regionBody:6,regionFooter:7,transitions:8,transitionIn:9,transitionInParams:10,transitionOut:11,transitionOutParams:12},null,[-1,-1])}}function Kl(o){let e,t,a="<strong>Add a book</strong>",s,l,n='<input required="" type="text" name="title" placeholder="Enter the title"/> <input required="" type="text" name="author" placeholder="Author (optional)"/> <textarea rows="4" name="description" placeholder="Description/Synopsis (optional)"></textarea>',i,f,r,u="Cancel",d,h,g="Save",E,S;return{c(){e=L("article"),t=L("header"),t.innerHTML=a,s=N(),l=L("form"),l.innerHTML=n,i=N(),f=L("footer"),r=L("button"),r.textContent=u,d=N(),h=L("button"),h.textContent=g,this.h()},l(_){e=I(_,"ARTICLE",{});var c=F(e);t=I(c,"HEADER",{"data-svelte-h":!0}),te(t)!=="svelte-u30lv2"&&(t.innerHTML=a),s=V(c),l=I(c,"FORM",{id:!0,"data-svelte-h":!0}),te(l)!=="svelte-mkcowq"&&(l.innerHTML=n),i=V(c),f=I(c,"FOOTER",{});var b=F(f);r=I(b,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),te(r)!=="svelte-4bpued"&&(r.textContent=u),d=V(b),h=I(b,"BUTTON",{form:!0,class:!0,"data-svelte-h":!0}),te(h)!=="svelte-1pv8y9c"&&(h.textContent=g),b.forEach(k),c.forEach(k),this.h()},h(){m(l,"id","BookForm"),m(r,"type","button"),m(r,"class","variant-filled-warning"),m(h,"form","BookForm"),m(h,"class","variant-filled-success")},m(_,c){M(_,e,c),R(e,t),R(e,s),R(e,l),R(e,i),R(e,f),R(f,r),R(f,d),R(f,h),E||(S=[U(l,"submit",o[2]),U(r,"click",function(){Mt(o[0].onClose())&&o[0].onClose().apply(this,arguments)})],E=!0)},p(_,[c]){o=_},i:Y,o:Y,d(_){_&&k(e),E=!1,be(S)}}}function Gl(o,e,t){let a,{parent:s}=e;const l=Ie();Re(o,l,i=>t(3,a=i)),pt();function n({target:i}){let f=new FormData(i).entries();f=Object.fromEntries(f),a[0].meta.onSave(f)}return o.$$set=i=>{"parent"in i&&t(0,s=i.parent)},[s,l,n]}class Wl extends re{constructor(e){super(),fe(this,e,Gl,Kl,ae,{parent:0})}}function Ql(o){let e,t=`<aside class="alert variant-ghost-warning"><div class="alert-message"><h3 class="h3">Feature Demo</h3> <p>This is a demo app of common CRUD operations. It stores data using
         your browser&#39;s local database. See <a class="anchor" href="https://dexie.org/" target="_blank">Dexie.org</a> for more details.</p></div></aside>`;return{c(){e=L("footer"),e.innerHTML=t,this.h()},l(a){e=I(a,"FOOTER",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-o2m544"&&(e.innerHTML=t),this.h()},h(){m(e,"class","fixed bottom-0 w-full p-4")},m(a,s){M(a,e,s)},p:Y,i:Y,o:Y,d(a){a&&k(e)}}}class Yl extends re{constructor(e){super(),fe(this,e,null,Ql,ae,{})}}function Jl(o){let e;const t=o[1].default,a=q(t,o,o[2],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,l){a&&a.m(s,l),e=!0},p(s,l){a&&a.p&&(!e||l&4)&&K(a,t,s,s[2],e?W(t,s[2],l,null):G(s[2]),null)},i(s){e||(T(a,s),e=!0)},o(s){C(a,s),e=!1},d(s){a&&a.d(s)}}}function Xl(o){let e,t="Library Demo";return{c(){e=L("h1"),e.textContent=t},l(a){e=I(a,"H1",{"data-svelte-h":!0}),te(e)!=="svelte-1pa7fgq"&&(e.textContent=t)},m(a,s){M(a,e,s)},p:Y,d(a){a&&k(e)}}}function Zl(o){let e,t="Add Book",a,s;return{c(){e=L("button"),e.textContent=t,this.h()},l(l){e=I(l,"BUTTON",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-93u3fl"&&(e.textContent=t),this.h()},h(){m(e,"class","variant-filled-secondary")},m(l,n){M(l,e,n),a||(s=U(e,"click",o[0]),a=!0)},p:Y,d(l){l&&k(e),a=!1,s()}}}function xl(o){let e,t;return e=new ml({props:{$$slots:{trail:[Zl],lead:[Xl]},$$scope:{ctx:o}}}),{c(){Z(e.$$.fragment)},l(a){ie(e.$$.fragment,a)},m(a,s){x(e,a,s),t=!0},p(a,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:a}),e.$set(l)},i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){$(e,a)}}}function $l(o){let e,t;return e=new Yl({}),{c(){Z(e.$$.fragment)},l(a){ie(e.$$.fragment,a)},m(a,s){x(e,a,s),t=!0},i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){$(e,a)}}}function eo(o){let e,t=`<script>${Zt.toString()} autoModeWatcher();<\/script>`,a,s,l,n,i,f;return l=new ql({}),i=new Il({props:{$$slots:{pageFooter:[$l],header:[xl],default:[Jl]},$$scope:{ctx:o}}}),{c(){e=new ge(!1),a=j(),s=N(),Z(l.$$.fragment),n=N(),Z(i.$$.fragment),this.h()},l(r){const u=Pt("svelte-c2jv9b",document.head);e=pe(u,!1),a=j(),u.forEach(k),s=V(r),ie(l.$$.fragment,r),n=V(r),ie(i.$$.fragment,r),this.h()},h(){e.a=a},m(r,u){e.m(t,document.head),R(document.head,a),M(r,s,u),x(l,r,u),M(r,n,u),x(i,r,u),f=!0},p(r,[u]){const d={};u&4&&(d.$$scope={dirty:u,ctx:r}),i.$set(d)},i(r){f||(T(l.$$.fragment,r),T(i.$$.fragment,r),f=!0)},o(r){C(l.$$.fragment,r),C(i.$$.fragment,r),f=!1},d(r){r&&(e.d(),k(s),k(n)),k(a),$(l,r),$(i,r)}}}function to(o,e,t){let{$$slots:a={},$$scope:s}=e;Xt();let l=Ie();function n(){l.trigger({type:"component",component:{ref:Wl},meta:{onSave:async i=>await Vt.addBook(i)}})}return o.$$set=i=>{"$$scope"in i&&t(2,s=i.$$scope)},[n,a,s]}class io extends re{constructor(e){super(),fe(this,e,to,eo,ae,{})}}export{io as component,so as universal};
