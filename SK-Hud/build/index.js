var Dt=Object.defineProperty;var Mt=(e,t,s)=>t in e?Dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var Te=(e,t,s)=>(Mt(e,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();function $(){}const ge=e=>e;function qe(e,t){for(const s in t)e[s]=t[s];return e}function wt(e){return e()}function Ke(){return Object.create(null)}function re(e){e.forEach(wt)}function We(e){return typeof e=="function"}function _e(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Lt(e){return Object.keys(e).length===0}function kt(e,...t){if(e==null){for(const l of t)l(void 0);return $}const s=e.subscribe(...t);return s.unsubscribe?()=>s.unsubscribe():s}function ze(e){let t;return kt(e,s=>t=s)(),t}function Ee(e,t,s){e.$$.on_destroy.push(kt(t,s))}function Ue(e){return e??""}const jt=typeof window<"u";let Bt=jt?()=>window.performance.now():()=>Date.now(),Ve=jt?e=>requestAnimationFrame(e):$;const de=new Set;function Ot(e){de.forEach(t=>{t.c(e)||(de.delete(t),t.f())}),de.size!==0&&Ve(Ot)}function Ct(e){let t;return de.size===0&&Ve(Ot),{promise:new Promise(s=>{de.add(t={c:e,f:s})}),abort(){de.delete(t)}}}function c(e,t){e.appendChild(t)}function St(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Wt(e){const t=g("style");return t.textContent="/* empty */",zt(St(e),t),t.sheet}function zt(e,t){return c(e.head||e,t),t.sheet}function R(e,t,s){e.insertBefore(t,s||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function Vt(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function g(e){return document.createElement(e)}function ne(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function ee(e){return document.createTextNode(e)}function S(){return ee(" ")}function we(){return ee("")}function o(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function Ft(e){return Array.from(e.childNodes)}function ie(e,t){t=""+t,e.data!==t&&(e.data=t)}function E(e,t,s,l){s==null?e.style.removeProperty(t):e.style.setProperty(t,s,l?"important":"")}function Ht(e,t,{bubbles:s=!1,cancelable:l=!1}={}){return new CustomEvent(e,{detail:t,bubbles:s,cancelable:l})}const Pe=new Map;let Ne=0;function Gt(e){let t=5381,s=e.length;for(;s--;)t=(t<<5)-t^e.charCodeAt(s);return t>>>0}function qt(e,t){const s={stylesheet:Wt(t),rules:{}};return Pe.set(e,s),s}function Xe(e,t,s,l,n,i,r,a=0){const d=16.666/l;let f=`{
`;for(let b=0;b<=1;b+=d){const w=t+(s-t)*i(b);f+=b*100+`%{${r(w,1-w)}}
`}const h=f+`100% {${r(s,1-s)}}
}`,m=`__svelte_${Gt(h)}_${a}`,u=St(e),{stylesheet:v,rules:p}=Pe.get(u)||qt(u,e);p[m]||(p[m]=!0,v.insertRule(`@keyframes ${m} ${h}`,v.cssRules.length));const B=e.style.animation||"";return e.style.animation=`${B?`${B}, `:""}${m} ${l}ms linear ${n}ms 1 both`,Ne+=1,m}function Kt(e,t){const s=(e.style.animation||"").split(", "),l=s.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),n=s.length-l.length;n&&(e.style.animation=l.join(", "),Ne-=n,Ne||Ut())}function Ut(){Ve(()=>{Ne||(Pe.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&P(t)}),Pe.clear())})}let pe;function ve(e){pe=e}function Et(){if(!pe)throw new Error("Function called outside component initialization");return pe}function Xt(e){Et().$$.on_mount.push(e)}function Yt(e){Et().$$.on_destroy.push(e)}const ce=[],Ye=[];let he=[];const Je=[],Jt=Promise.resolve();let Me=!1;function Qt(){Me||(Me=!0,Jt.then(Pt))}function le(e){he.push(e)}const Ie=new Set;let oe=0;function Pt(){if(oe!==0)return;const e=pe;do{try{for(;oe<ce.length;){const t=ce[oe];oe++,ve(t),Zt(t.$$)}}catch(t){throw ce.length=0,oe=0,t}for(ve(null),ce.length=0,oe=0;Ye.length;)Ye.pop()();for(let t=0;t<he.length;t+=1){const s=he[t];Ie.has(s)||(Ie.add(s),s())}he.length=0}while(ce.length);for(;Je.length;)Je.pop()();Me=!1,Ie.clear(),ve(e)}function Zt(e){if(e.fragment!==null){e.update(),re(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(le)}}function $t(e){const t=[],s=[];he.forEach(l=>e.indexOf(l)===-1?t.push(l):s.push(l)),s.forEach(l=>l()),he=t}let me;function xt(){return me||(me=Promise.resolve(),me.then(()=>{me=null})),me}function De(e,t,s){e.dispatchEvent(Ht(`${t?"intro":"outro"}${s}`))}const Se=new Set;let x;function Nt(){x={r:0,c:[],p:x}}function At(){x.r||re(x.c),x=x.p}function Y(e,t){e&&e.i&&(Se.delete(e),e.i(t))}function te(e,t,s,l){if(e&&e.o){if(Se.has(e))return;Se.add(e),x.c.push(()=>{Se.delete(e),l&&(s&&e.d(1),l())}),e.o(t)}else l&&l()}const es={duration:0};function se(e,t,s,l){let i=t(e,s,{direction:"both"}),r=l?0:1,a=null,d=null,f=null,h;function m(){f&&Kt(e,f)}function u(p,B){const b=p.b-r;return B*=Math.abs(b),{a:r,b:p.b,d:b,duration:B,start:p.start,end:p.start+B,group:p.group}}function v(p){const{delay:B=0,duration:b=300,easing:w=ge,tick:N=$,css:T}=i||es,W={start:Bt()+B,b:p};p||(W.group=x,x.r+=1),"inert"in e&&(p?h!==void 0&&(e.inert=h):(h=e.inert,e.inert=!0)),a||d?d=W:(T&&(m(),f=Xe(e,r,p,b,B,w,T)),p&&N(0,1),a=u(W,b),le(()=>De(e,p,"start")),Ct(F=>{if(d&&F>d.start&&(a=u(d,b),d=null,De(e,a.b,"start"),T&&(m(),f=Xe(e,r,a.b,a.duration,0,w,i.css))),a){if(F>=a.end)N(r=a.b,1-r),De(e,a.b,"end"),d||(a.b?m():--a.group.r||re(a.group.c)),a=null;else if(F>=a.start){const H=F-a.start;r=a.a+a.d*w(H/a.duration),N(r,1-r)}}return!!(a||d)}))}return{run(p){We(i)?xt().then(()=>{i=i({direction:p?"in":"out"}),v(p)}):v(p)},end(){m(),a=d=null}}}function ae(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Qe(e,t){e.d(1),t.delete(e.key)}function Ze(e,t,s,l,n,i,r,a,d,f,h,m){let u=e.length,v=i.length,p=u;const B={};for(;p--;)B[e[p].key]=p;const b=[],w=new Map,N=new Map,T=[];for(p=v;p--;){const j=m(n,i,p),L=s(j);let A=r.get(L);A?l&&T.push(()=>A.p(j,t)):(A=f(L,j),A.c()),w.set(L,b[p]=A),L in B&&N.set(L,Math.abs(p-B[L]))}const W=new Set,F=new Set;function H(j){Y(j,1),j.m(a,h),r.set(j.key,j),h=j.first,v--}for(;u&&v;){const j=b[v-1],L=e[u-1],A=j.key,G=L.key;j===L?(h=j.first,u--,v--):w.has(G)?!r.has(A)||W.has(A)?H(j):F.has(G)?u--:N.get(A)>N.get(G)?(F.add(A),H(j)):(W.add(G),u--):(d(L,r),u--)}for(;u--;){const j=e[u];w.has(j.key)||d(j,r)}for(;v;)H(b[v-1]);return re(T),b}function Ae(e){e&&e.c()}function be(e,t,s){const{fragment:l,after_update:n}=e.$$;l&&l.m(t,s),le(()=>{const i=e.$$.on_mount.map(wt).filter(We);e.$$.on_destroy?e.$$.on_destroy.push(...i):re(i),e.$$.on_mount=[]}),n.forEach(le)}function ye(e,t){const s=e.$$;s.fragment!==null&&($t(s.after_update),re(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function ts(e,t){e.$$.dirty[0]===-1&&(ce.push(e),Qt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ke(e,t,s,l,n,i,r=null,a=[-1]){const d=pe;ve(e);const f=e.$$={fragment:null,ctx:[],props:i,update:$,not_equal:n,bound:Ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:Ke(),dirty:a,skip_bound:!1,root:t.target||d.$$.root};r&&r(f.root);let h=!1;if(f.ctx=s?s(e,t.props||{},(m,u,...v)=>{const p=v.length?v[0]:u;return f.ctx&&n(f.ctx[m],f.ctx[m]=p)&&(!f.skip_bound&&f.bound[m]&&f.bound[m](p),h&&ts(e,m)),u}):[],f.update(),h=!0,re(f.before_update),f.fragment=l?l(f.ctx):!1,t.target){if(t.hydrate){const m=Ft(t.target);f.fragment&&f.fragment.l(m),m.forEach(P)}else f.fragment&&f.fragment.c();t.intro&&Y(e.$$.fragment),be(e,t.target,t.anchor),Pt()}ve(d)}class je{constructor(){Te(this,"$$");Te(this,"$$set")}$destroy(){ye(this,1),this.$destroy=$}$on(t,s){if(!We(s))return $;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(s),()=>{const n=l.indexOf(s);n!==-1&&l.splice(n,1)}}$set(t){this.$$set&&!Lt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ss="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ss);const fe=[];function Be(e,t=$){let s;const l=new Set;function n(a){if(_e(e,a)&&(e=a,s)){const d=!fe.length;for(const f of l)f[1](),fe.push(f,e);if(d){for(let f=0;f<fe.length;f+=2)fe[f][0](fe[f+1]);fe.length=0}}}function i(a){n(a(e))}function r(a,d=$){const f=[a,d];return l.add(f),l.size===1&&(s=t(n,i)||$),a(e),()=>{l.delete(f),l.size===0&&s&&(s(),s=null)}}return{set:n,update:i,subscribe:r}}const Rt=Be({fallbackResourceName:"debug",allowEscapeKey:!0}),ls=Be(window.GetParentResourceName?"SK-Hud":ze(Rt).DEBUG_RESOURCE_NAME),Tt=Be(!window.invokeNative),ns=Be({hunger:{color:"yellow",icon:"pot-food",hide:100},thirst:{color:"rgb(0, 238, 255)",icon:"glass",hide:100},stress:{color:"rgb(139, 91, 252)",icon:"brain",hide:0}});var It=(e=>(e.visible="resource:visible",e.imageResize="resource:imageSize",e.imageInvert="resource:imageInvert",e.changeText="resource:changeText",e.resetText="resource:resetText",e))(It||{});ze(Tt);ze(ls);function Re(e,t){const s=l=>{const{action:n,data:i}=l.data;n===e&&t(i)};Xt(()=>window.addEventListener("message",s)),Yt(()=>window.removeEventListener("message",s))}const is=[{action:It.visible,handler:e=>{console.log("This is always listened to because it is in the AlwaysListened array.")}}];function rs(){for(const e of is)Re(e.action,e.handler)}function os(e){const t=e-1;return t*t*t+1}function $e(e){return--e*e*e*e*e+1}function ue(e,{delay:t=0,duration:s=400,easing:l=ge}={}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:l,css:i=>`opacity: ${i*n}`}}function xe(e,{delay:t=0,duration:s=400,easing:l=os,start:n=0,opacity:i=0}={}){const r=getComputedStyle(e),a=+r.opacity,d=r.transform==="none"?"":r.transform,f=1-n,h=a*(1-i);return{delay:t,duration:s,easing:l,css:(m,u)=>`
			transform: ${d} scale(${1-f*u});
			opacity: ${a-h*u}
		`}}function et(e,t,s){const l=e.slice();return l[13]=t[s],l[15]=s,l}function tt(e,t,s){const l=e.slice();return l[13]=t[s],l[15]=s,l}function st(e,t,s){const l=e.slice();return l[17]=t[s],l}function lt(e){let t,s,l,n,i,r,a,d,f,h,m,u,v,p,B,b,w,N,T,W,F,H,j,L,A=[],G=new Map,Q,U,q=[],y=new Map,K,z,D=e[2]>0&&nt(e),V=ae(e[12]),I=[];for(let _=0;_<V.length;_+=1)I[_]=rt(st(e,V,_));let M=e[8]<100&&ot(e),k=e[9]<100&&at(e);function X(_,O){if(_[6])return fs;if(_[5])return as}let Z=X(e),J=Z&&Z(e),Oe=ae(Array(7));const Fe=_=>_[15];for(let _=0;_<Oe.length;_+=1){let O=tt(e,Oe,_),C=Fe(O);G.set(C,A[_]=ft(C,O))}let Ce=ae(Array(3));const He=_=>_[15];for(let _=0;_<Ce.length;_+=1){let O=et(e,Ce,_),C=He(O);y.set(C,q[_]=ct(C,O))}return{c(){t=g("div"),s=g("div"),l=g("div"),D&&D.c(),n=S(),i=g("div"),r=g("i"),d=S(),f=g("span"),h=ee(e[1]),u=S(),v=g("div"),p=g("div"),b=S(),w=g("div");for(let _=0;_<I.length;_+=1)I[_].c();N=S(),M&&M.c(),T=S(),k&&k.c(),F=S(),J&&J.c(),H=S(),j=g("div"),L=g("div");for(let _=0;_<A.length;_+=1)A[_].c();Q=S(),U=g("div");for(let _=0;_<q.length;_+=1)q[_].c();o(r,"class","fa-solid fa-heart icon svelte-sjjc3e"),o(r,"style",a=e[1]==0&&"color:red;"),o(f,"class","barTxt svelte-sjjc3e"),o(f,"style",m=e[1]==0&&"color:red;"),o(p,"class","healthbar svelte-sjjc3e"),E(p,"width",e[1]+"%"),o(v,"class","barBase svelte-sjjc3e"),o(v,"style",B=e[1]==0&&"box-shadow: 0 0 1vh red;"),o(i,"class","barWrapper svelte-sjjc3e"),o(w,"class","statWrapper svelte-sjjc3e"),o(l,"class","wasteWrapper svelte-sjjc3e"),o(s,"class","barsWrapper svelte-sjjc3e"),o(t,"class","leftDiv svelte-sjjc3e"),o(L,"class","audioBarsWrapper svelte-sjjc3e"),o(U,"class","audioRangWrapper svelte-sjjc3e"),o(j,"class","rightDiv svelte-sjjc3e")},m(_,O){R(_,t,O),c(t,s),c(s,l),D&&D.m(l,null),c(l,n),c(l,i),c(i,r),c(i,d),c(i,f),c(f,h),c(i,u),c(i,v),c(v,p),c(l,b),c(l,w);for(let C=0;C<I.length;C+=1)I[C]&&I[C].m(w,null);c(w,N),M&&M.m(w,null),c(w,T),k&&k.m(w,null),R(_,F,O),J&&J.m(_,O),R(_,H,O),R(_,j,O),c(j,L);for(let C=0;C<A.length;C+=1)A[C]&&A[C].m(L,null);c(j,Q),c(j,U);for(let C=0;C<q.length;C+=1)q[C]&&q[C].m(U,null);z=!0},p(_,O){if(_[2]>0?D?D.p(_,O):(D=nt(_),D.c(),D.m(l,n)):D&&(D.d(1),D=null),(!z||O&2&&a!==(a=_[1]==0&&"color:red;"))&&o(r,"style",a),(!z||O&2)&&ie(h,_[1]),(!z||O&2&&m!==(m=_[1]==0&&"color:red;"))&&o(f,"style",m),(!z||O&2)&&E(p,"width",_[1]+"%"),(!z||O&2&&B!==(B=_[1]==0&&"box-shadow: 0 0 1vh red;"))&&o(v,"style",B),O&7168){V=ae(_[12]);let C;for(C=0;C<V.length;C+=1){const Ge=st(_,V,C);I[C]?I[C].p(Ge,O):(I[C]=rt(Ge),I[C].c(),I[C].m(w,N))}for(;C<I.length;C+=1)I[C].d(1);I.length=V.length}_[8]<100?M?M.p(_,O):(M=ot(_),M.c(),M.m(w,T)):M&&(M.d(1),M=null),_[9]<100?k?k.p(_,O):(k=at(_),k.c(),k.m(w,null)):k&&(k.d(1),k=null),Z!==(Z=X(_))&&(J&&J.d(1),J=Z&&Z(_),J&&(J.c(),J.m(H.parentNode,H))),O&152&&(Oe=ae(Array(7)),A=Ze(A,O,Fe,1,_,Oe,G,L,Qe,ft,null,tt)),O&128&&(Ce=ae(Array(3)),q=Ze(q,O,He,1,_,Ce,y,U,Qe,ct,null,et))},i(_){z||(_&&le(()=>{z&&(W||(W=se(t,ue,{duration:100},!0)),W.run(1))}),_&&le(()=>{z&&(K||(K=se(j,ue,{duration:100},!0)),K.run(1))}),z=!0)},o(_){_&&(W||(W=se(t,ue,{duration:100},!1)),W.run(0)),_&&(K||(K=se(j,ue,{duration:100},!1)),K.run(0)),z=!1},d(_){_&&(P(t),P(F),P(H),P(j)),D&&D.d(),Vt(I,_),M&&M.d(),k&&k.d(),_&&W&&W.end(),J&&J.d(_);for(let O=0;O<A.length;O+=1)A[O].d();for(let O=0;O<q.length;O+=1)q[O].d();_&&K&&K.end()}}}function nt(e){let t,s,l,n,i,r,a,d,f,h,m;return{c(){t=g("div"),s=g("i"),l=S(),n=g("span"),i=ee(e[2]),r=S(),a=g("div"),d=g("div"),d.innerHTML='<div class="armorBarPill svelte-sjjc3e"></div> <div class="armorBarPill svelte-sjjc3e"></div> <div class="armorBarPill svelte-sjjc3e"></div> <div class="armorBarPill svelte-sjjc3e"></div> <div class="armorBarPill svelte-sjjc3e"></div>',f=S(),h=g("div"),m=g("div"),m.innerHTML='<div class="armorBarPill svelte-sjjc3e" style="background-color: #2489db; box-shadow: 0 0 0.5vh #2489db; "></div> <div class="armorBarPill svelte-sjjc3e" style="background-color: #2489db; box-shadow: 0 0 0.5vh #2489db; "></div> <div class="armorBarPill svelte-sjjc3e" style="background-color: #2489db; box-shadow: 0 0 0.5vh #2489db; "></div> <div class="armorBarPill svelte-sjjc3e" style="background-color: #2489db; box-shadow: 0 0 0.5vh #2489db; "></div> <div class="armorBarPill svelte-sjjc3e" style="background-color: #2489db; box-shadow: 0 0 0.5vh #2489db; "></div>',o(s,"class","fa-solid fa-shield icon svelte-sjjc3e"),o(n,"class","barTxt svelte-sjjc3e"),E(n,"color","#2489db"),o(d,"class","armorBarBase svelte-sjjc3e"),o(m,"class","armorBarBase svelte-sjjc3e"),o(h,"class","armorBar svelte-sjjc3e"),E(h,"width",e[2]+"%"),o(a,"class","armorBarWrapper svelte-sjjc3e"),o(t,"class","barWrapper svelte-sjjc3e")},m(u,v){R(u,t,v),c(t,s),c(t,l),c(t,n),c(n,i),c(t,r),c(t,a),c(a,d),c(a,f),c(a,h),c(h,m)},p(u,v){v&4&&ie(i,u[2]),v&4&&E(h,"width",u[2]+"%")},d(u){u&&P(t)}}}function it(e){let t,s,l,n,i,r;return{c(){t=g("div"),s=g("div"),l=g("div"),n=S(),i=g("i"),o(l,"class","statBar svelte-sjjc3e"),E(l,"height",e[10][e[17]]+"%"),E(l,"background-color",e[11][e[17]].color),E(l,"box-shadow","0 0 0.5vh "+e[11][e[17]].color),o(s,"class","statBarBase svelte-sjjc3e"),o(i,"class",r="fa-light fa-"+e[11][e[17]].icon+" barIcon svelte-sjjc3e"),o(t,"class","stat svelte-sjjc3e")},m(a,d){R(a,t,d),c(t,s),c(s,l),c(t,n),c(t,i)},p(a,d){d&1024&&E(l,"height",a[10][a[17]]+"%"),d&2048&&E(l,"background-color",a[11][a[17]].color),d&2048&&E(l,"box-shadow","0 0 0.5vh "+a[11][a[17]].color),d&2048&&r!==(r="fa-light fa-"+a[11][a[17]].icon+" barIcon svelte-sjjc3e")&&o(i,"class",r)},d(a){a&&P(t)}}}function rt(e){let t,s=e[10][e[17]]&&e[11][e[17]]&&e[11][e[17]].hide!=e[10][e[17]]&&it(e);return{c(){s&&s.c(),t=we()},m(l,n){s&&s.m(l,n),R(l,t,n)},p(l,n){l[10][l[17]]&&l[11][l[17]]&&l[11][l[17]].hide!=l[10][l[17]]?s?s.p(l,n):(s=it(l),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(l){l&&P(t),s&&s.d(l)}}}function ot(e){let t,s,l,n,i;return{c(){t=g("div"),s=g("div"),l=g("div"),n=S(),i=g("i"),o(l,"class","statBar svelte-sjjc3e"),E(l,"height",e[8]+"%"),E(l,"background-color","rgb(66, 135, 245)"),E(l,"box-shadow","0 0 0.5vh rgb(66, 135, 245)"),o(s,"class","statBarBase svelte-sjjc3e"),o(i,"class","fa-light fa-person-walking barIcon svelte-sjjc3e"),o(t,"class","stat svelte-sjjc3e")},m(r,a){R(r,t,a),c(t,s),c(s,l),c(t,n),c(t,i)},p(r,a){a&256&&E(l,"height",r[8]+"%")},d(r){r&&P(t)}}}function at(e){let t,s,l,n,i;return{c(){t=g("div"),s=g("div"),l=g("div"),n=S(),i=g("i"),o(l,"class","statBar svelte-sjjc3e"),E(l,"height",e[9]+"%"),E(l,"background-color","rgb(255, 132, 0)"),E(l,"box-shadow","0 0 0.5vh rgb(255, 132, 0)"),o(s,"class","statBarBase svelte-sjjc3e"),o(i,"class","fa-light fa-lungs barIcon svelte-sjjc3e"),o(t,"class","stat svelte-sjjc3e")},m(r,a){R(r,t,a),c(t,s),c(s,l),c(t,n),c(t,i)},p(r,a){a&512&&E(l,"height",r[9]+"%")},d(r){r&&P(t)}}}function as(e){let t;return{c(){t=g("i"),o(t,"class","fa-regular fa-walkie-talkie talkingIcon svelte-sjjc3e")},m(s,l){R(s,t,l)},d(s){s&&P(t)}}}function fs(e){let t;return{c(){t=g("i"),o(t,"class","fa-regular fa-phone talkingIcon svelte-sjjc3e")},m(s,l){R(s,t,l)},d(s){s&&P(t)}}}function ft(e,t){let s,l,n;return{key:e,first:null,c(){s=g("div"),o(s,"class",l="audioBar "+(t[4]?"audioRadio":t[3]&&"audioTalking")+" svelte-sjjc3e"),o(s,"style",n=t[7]==1?"max-height: 50%":t[7]==2&&"max-height: 70%"),this.first=s},m(i,r){R(i,s,r)},p(i,r){t=i,r&24&&l!==(l="audioBar "+(t[4]?"audioRadio":t[3]&&"audioTalking")+" svelte-sjjc3e")&&o(s,"class",l),r&128&&n!==(n=t[7]==1?"max-height: 50%":t[7]==2&&"max-height: 70%")&&o(s,"style",n)},d(i){i&&P(s)}}}function ct(e,t){let s,l;return{key:e,first:null,c(){s=g("div"),o(s,"class",l=Ue(t[7]<t[15]+1?"audioRangeBar":"audioBarActive")+" svelte-sjjc3e"),this.first=s},m(n,i){R(n,s,i)},p(n,i){t=n,i&128&&l!==(l=Ue(t[7]<t[15]+1?"audioRangeBar":"audioBarActive")+" svelte-sjjc3e")&&o(s,"class",l)},d(n){n&&P(s)}}}function cs(e){let t,s=e[0]&&lt(e);return{c(){s&&s.c(),t=we()},m(l,n){s&&s.m(l,n),R(l,t,n)},p(l,[n]){l[0]?s?(s.p(l,n),n&1&&Y(s,1)):(s=lt(l),s.c(),Y(s,1),s.m(t.parentNode,t)):s&&(Nt(),te(s,1,1,()=>{s=null}),At())},i(l){Y(s)},o(l){te(s)},d(l){l&&P(t),s&&s.d(l)}}}function us(e,t,s){let l;Ee(e,ns,b=>s(11,l=b));let n=!1,i=47,r=10,a=!1,d=!1,f=!1,h=!1,m=0,u=100,v=100,p={hunger:90,thirst:50,stress:10},B=["hunger","thirst","stress"];return Re("updateStats",b=>{s(0,n=b.showing),s(1,i=b.health),s(2,r=b.armor),s(3,a=b.isTalking),s(4,d=b.talkingOnRadio),s(5,f=b.onRadio),s(6,h=b.onPhone),s(7,m=b.voiceRange),s(10,p=b.stats),s(8,u=b.stamina),s(9,v=b.oxygen)}),[n,i,r,a,d,f,h,m,u,v,p,l,B]}class ds extends je{constructor(t){super(),ke(this,t,us,cs,_e,{})}}function ut(e){return Object.prototype.toString.call(e)==="[object Date]"}function Le(e,t){if(e===t||e!==e)return()=>e;const s=typeof e;if(s!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const l=t.map((n,i)=>Le(e[i],n));return n=>l.map(i=>i(n))}if(s==="object"){if(!e||!t)throw new Error("Object cannot be null");if(ut(e)&&ut(t)){e=e.getTime(),t=t.getTime();const i=t-e;return r=>new Date(e+r*i)}const l=Object.keys(t),n={};return l.forEach(i=>{n[i]=Le(e[i],t[i])}),i=>{const r={};return l.forEach(a=>{r[a]=n[a](i)}),r}}if(s==="number"){const l=t-e;return n=>e+n*l}throw new Error(`Cannot interpolate ${s} values`)}function dt(e,t={}){const s=Be(e);let l,n=e;function i(r,a){if(e==null)return s.set(e=r),Promise.resolve();n=r;let d=l,f=!1,{delay:h=0,duration:m=400,easing:u=ge,interpolate:v=Le}=qe(qe({},t),a);if(m===0)return d&&(d.abort(),d=null),s.set(e=n),Promise.resolve();const p=Bt()+h;let B;return l=Ct(b=>{if(b<p)return!0;f||(B=v(e,r),typeof m=="function"&&(m=m(e,r)),f=!0),d&&(d.abort(),d=null);const w=b-p;return w>m?(s.set(e=r),!1):(s.set(e=B(u(w/m))),!0)}),l.promise}return{set:i,update:(r,a)=>i(r(n,e),a),subscribe:s.subscribe}}function ht(e){let t,s,l,n;return{c(){t=ne("circle"),o(t,"opacity",e[4]),o(t,"fill","transparent"),o(t,"stroke",e[3]),o(t,"stroke-dashoffset",s=e[15]-e[10]/100*e[15]),o(t,"stroke-dasharray",l=e[15]+" "+e[15]),o(t,"stroke-width",e[6]),o(t,"r",e[14]),o(t,"cx",e[13]),o(t,"cy",e[13]),o(t,"transform",n="rotate(-90, "+e[13]+", "+e[13]+")")},m(i,r){R(i,t,r)},p(i,r){r&16&&o(t,"opacity",i[4]),r&8&&o(t,"stroke",i[3]),r&33792&&s!==(s=i[15]-i[10]/100*i[15])&&o(t,"stroke-dashoffset",s),r&32768&&l!==(l=i[15]+" "+i[15])&&o(t,"stroke-dasharray",l),r&64&&o(t,"stroke-width",i[6]),r&16384&&o(t,"r",i[14]),r&8192&&o(t,"cx",i[13]),r&8192&&o(t,"cy",i[13]),r&8192&&n!==(n="rotate(-90, "+i[13]+", "+i[13]+")")&&o(t,"transform",n)},d(i){i&&P(t)}}}function _t(e){let t,s,l,n,i;return{c(){t=ne("circle"),o(t,"fill",e[1]),o(t,"fill-opacity",e[2]),o(t,"stroke","transparent"),o(t,"stroke-dashoffset",0),o(t,"stroke-dasharray",s=e[15]+" "+e[15]),o(t,"stroke-width",l=e[6]-.6),o(t,"r",n=e[14]-e[6]/2+.1),o(t,"cx",e[13]),o(t,"cy",e[13]),o(t,"transform",i="rotate(-90, "+e[13]+", "+e[13]+")")},m(r,a){R(r,t,a)},p(r,a){a&2&&o(t,"fill",r[1]),a&4&&o(t,"fill-opacity",r[2]),a&32768&&s!==(s=r[15]+" "+r[15])&&o(t,"stroke-dasharray",s),a&64&&l!==(l=r[6]-.6)&&o(t,"stroke-width",l),a&16448&&n!==(n=r[14]-r[6]/2+.1)&&o(t,"r",n),a&8192&&o(t,"cx",r[13]),a&8192&&o(t,"cy",r[13]),a&8192&&i!==(i="rotate(-90, "+r[13]+", "+r[13]+")")&&o(t,"transform",i)},d(r){r&&P(t)}}}function mt(e){let t,s=Math.floor(e[17])+"",l,n,i;return{c(){t=ne("text"),l=ee(s),n=ne("text"),i=ee(e[12]),o(t,"class","vehicle-number svelte-4yl9he"),o(t,"x","50%"),o(t,"y","45%"),o(t,"dominant-baseline","middle"),o(t,"text-anchor","middle"),o(n,"class","vehicle-text svelte-4yl9he"),o(n,"x","50%"),o(n,"y","70%"),o(n,"dominant-baseline","middle"),o(n,"text-anchor","middle")},m(r,a){R(r,t,a),c(t,l),R(r,n,a),c(n,i)},p(r,a){a&131072&&s!==(s=Math.floor(r[17])+"")&&ie(l,s),a&4096&&ie(i,r[12])},d(r){r&&(P(t),P(n))}}}function hs(e){let t,s,l,n,i,r,a,d,f=e[0]&&ht(e),h=e[11]&&_t(e),m=e[12]&&mt(e);return{c(){t=ne("svg"),s=ne("g"),f&&f.c(),l=we(),h&&h.c(),n=ne("circle"),m&&m.c(),o(n,"stroke",e[5]),o(n,"fill","transparent"),o(n,"stroke-dashoffset",e[16]),o(n,"stroke-dasharray",i=e[15]+" "+e[15]),o(n,"stroke-width",e[6]),o(n,"r",e[14]),o(n,"cx",e[13]),o(n,"cy",e[13]),o(n,"transform",r="rotate(-90, "+e[13]+", "+e[13]+")"),E(n,"filter","drop-shadow(0 0 0.1vh "+e[5]+")"),o(s,"transform",a=`
	  `+(e[7]>0?"rotate("+e[7]+" "+e[13]+" "+e[13]+")":"")+`
	  `+("translate("+e[8]+" "+e[9]+")")),o(t,"width","100%"),o(t,"height","100%"),o(t,"viewBox",d="0 0 "+e[13]*2+" "+e[13]*2),o(t,"overflow","visible")},m(u,v){R(u,t,v),c(t,s),f&&f.m(s,null),c(s,l),h&&h.m(s,null),c(s,n),m&&m.m(t,null)},p(u,[v]){u[0]?f?f.p(u,v):(f=ht(u),f.c(),f.m(s,l)):f&&(f.d(1),f=null),u[11]?h?h.p(u,v):(h=_t(u),h.c(),h.m(s,n)):h&&(h.d(1),h=null),v&32&&o(n,"stroke",u[5]),v&65536&&o(n,"stroke-dashoffset",u[16]),v&32768&&i!==(i=u[15]+" "+u[15])&&o(n,"stroke-dasharray",i),v&64&&o(n,"stroke-width",u[6]),v&16384&&o(n,"r",u[14]),v&8192&&o(n,"cx",u[13]),v&8192&&o(n,"cy",u[13]),v&8192&&r!==(r="rotate(-90, "+u[13]+", "+u[13]+")")&&o(n,"transform",r),v&32&&E(n,"filter","drop-shadow(0 0 0.1vh "+u[5]+")"),v&9088&&a!==(a=`
	  `+(u[7]>0?"rotate("+u[7]+" "+u[13]+" "+u[13]+")":"")+`
	  `+("translate("+u[8]+" "+u[9]+")"))&&o(s,"transform",a),u[12]?m?m.p(u,v):(m=mt(u),m.c(),m.m(t,null)):m&&(m.d(1),m=null),v&8192&&d!==(d="0 0 "+u[13]*2+" "+u[13]*2)&&o(t,"viewBox",d)},i:$,o:$,d(u){u&&P(t),f&&f.d(),h&&h.d(),m&&m.d()}}}function _s(e,t,s){let l,n,{displayOutline:i=!0}=t,{height:r=50}=t,{innerColor:a="#212121"}=t,{innerColorOpacity:d=1}=t,{outlineColor:f="red"}=t,{outlineColorOpacity:h=.4}=t,{progressColor:m="red"}=t,{progressValue:u=100}=t,{ringSize:v=4}=t,{rotateDegree:p=0}=t,{translateX:B=0}=t,{translateY:b=0}=t,{width:w=50}=t,{maxLengthDisplay:N=100}=t,{maxProgressValue:T=100}=t,{showInnerBG:W=!1}=t,{displayNumber:F=0}=t,{text:H=""}=t,j=25,L=u/T*100;const A=dt(L,{duration:200,easing:ge});Ee(e,A,y=>s(26,l=y));const G=dt(F,{duration:600,easing:ge});Ee(e,G,y=>s(17,n=y));let Q=j-v/2,U=Q*2*Math.PI,q=U-l/100*U;return e.$$set=y=>{"displayOutline"in y&&s(0,i=y.displayOutline),"height"in y&&s(21,r=y.height),"innerColor"in y&&s(1,a=y.innerColor),"innerColorOpacity"in y&&s(2,d=y.innerColorOpacity),"outlineColor"in y&&s(3,f=y.outlineColor),"outlineColorOpacity"in y&&s(4,h=y.outlineColorOpacity),"progressColor"in y&&s(5,m=y.progressColor),"progressValue"in y&&s(20,u=y.progressValue),"ringSize"in y&&s(6,v=y.ringSize),"rotateDegree"in y&&s(7,p=y.rotateDegree),"translateX"in y&&s(8,B=y.translateX),"translateY"in y&&s(9,b=y.translateY),"width"in y&&s(22,w=y.width),"maxLengthDisplay"in y&&s(10,N=y.maxLengthDisplay),"maxProgressValue"in y&&s(23,T=y.maxProgressValue),"showInnerBG"in y&&s(11,W=y.showInnerBG),"displayNumber"in y&&s(24,F=y.displayNumber),"text"in y&&s(12,H=y.text)},e.$$.update=()=>{e.$$.dirty&42991616&&(s(20,u=Math.min(u,T)),s(25,L=u/T*100),A.set(L)),e.$$.dirty&16777216&&G.set(F),e.$$.dirty&6291456&&s(13,j=r>w?r/2:w/2),e.$$.dirty&24640&&(s(14,Q=j-v/2),s(15,U=Q*2*Math.PI)),e.$$.dirty&67142656&&s(16,q=U-l/(100/N)/100*U)},[i,a,d,f,h,m,v,p,B,b,N,W,H,j,Q,U,q,n,A,G,u,r,w,T,F,L,l]}class ms extends je{constructor(t){super(),ke(this,t,_s,hs,_e,{displayOutline:0,height:21,innerColor:1,innerColorOpacity:2,outlineColor:3,outlineColorOpacity:4,progressColor:5,progressValue:20,ringSize:6,rotateDegree:7,translateX:8,translateY:9,width:22,maxLengthDisplay:10,maxProgressValue:23,showInnerBG:11,displayNumber:24,text:12})}}function vs(e){let t,s,l,n,i,r,a,d,f,h,m,u,v,p,B,b,w;return{c(){t=g("div"),s=g("div"),l=g("i"),n=S(),i=ee(e[0]),r=S(),a=g("div"),d=g("i"),f=S(),h=ee(e[1]),m=S(),u=g("div"),v=g("i"),p=S(),B=ee(e[2]),o(l,"class","fa-regular fa-compass icon svelte-1kds20a"),o(s,"class","keyWrapper svelte-1kds20a"),o(d,"class","fa-regular fa-location-dot icon svelte-1kds20a"),o(a,"class","keyWrapper svelte-1kds20a"),o(v,"class","fa-regular fa-map icon svelte-1kds20a"),o(u,"class","keyWrapper svelte-1kds20a"),o(t,"class","wrapper svelte-1kds20a")},m(N,T){R(N,t,T),c(t,s),c(s,l),c(s,n),c(s,i),c(t,r),c(t,a),c(a,d),c(a,f),c(a,h),c(t,m),c(t,u),c(u,v),c(u,p),c(u,B),w=!0},p(N,[T]){(!w||T&1)&&ie(i,N[0]),(!w||T&2)&&ie(h,N[1]),(!w||T&4)&&ie(B,N[2])},i(N){w||(N&&le(()=>{w&&(b||(b=se(t,ue,{duration:100},!0)),b.run(1))}),w=!0)},o(N){N&&(b||(b=se(t,ue,{duration:100},!1)),b.run(0)),w=!1},d(N){N&&P(t),N&&b&&b.end()}}}function gs(e,t,s){let l="N",n="Strawberry Ave x Olympic Fwy",i="Strawberry";return Re("compasstick",r=>{s(0,l=r.direction),s(1,n=r.roads),s(2,i=r.zone)}),[l,n,i]}class ps extends je{constructor(t){super(),ke(this,t,gs,vs,_e,{})}}function vt(e){let t,s,l,n,i,r,a,d,f,h,m,u,v,p,B,b,w,N,T,W,F,H,j,L,A,G,Q,U,q,y,K,z;t=new ps({}),n=new ms({props:{maxLengthDisplay:72,rotateDegree:230,ringSize:3.5,progressColor:e[1]<.9?"greenyellow":"#FF3838",outlineColor:"black",outlineColorOpacity:.6,height:60,width:60,progressValue:e[1],text:"MPH",displayNumber:e[2],maxProgressValue:1}});let D=e[3]>=2&&gt(),V=e[3]<2&&pt(),I=e[4]&&bt(),M=e[4]==!1&&yt();return{c(){Ae(t.$$.fragment),s=S(),l=g("div"),Ae(n.$$.fragment),i=S(),r=g("div"),a=g("div"),D&&D.c(),d=S(),V&&V.c(),f=S(),h=g("div"),m=g("div"),u=S(),v=g("div"),I&&I.c(),p=S(),M&&M.c(),B=S(),b=g("div"),w=g("div"),N=S(),T=g("div"),W=g("i"),F=S(),H=g("div"),j=g("div"),L=S(),A=g("div"),G=g("div"),Q=g("i"),U=S(),q=g("div"),y=g("div"),o(m,"class","statBar svelte-1v233my"),E(m,"width",e[3]+"%"),E(m,"background-color","rgb(255, 185, 34)"),o(h,"class","statBarBase svelte-1v233my"),o(a,"class","statWrapper svelte-1v233my"),o(w,"class","statBar svelte-1v233my"),E(w,"width",(e[4]?100:0)+"%"),o(b,"class","statBarBase svelte-1v233my"),o(v,"class","statWrapper svelte-1v233my"),o(W,"class","fa-light fa-down-left-and-up-right-to-center"),o(j,"class","statBar svelte-1v233my"),E(j,"width",(e[5]?100:0)+"%"),o(H,"class","statBarBase svelte-1v233my"),o(T,"class","statWrapper svelte-1v233my"),o(r,"class","statsWrapper svelte-1v233my"),o(Q,"class","fa-light fa-car-wrench"),o(y,"class","statBar svelte-1v233my"),E(y,"width",e[6]+"%"),E(y,"background-color","rgb(255, 185, 34)"),o(q,"class","statBarBase svelte-1v233my"),o(G,"class","statWrapper svelte-1v233my"),o(A,"class","statsWrapper2 svelte-1v233my"),o(l,"class","speedometer svelte-1v233my")},m(k,X){be(t,k,X),R(k,s,X),R(k,l,X),be(n,l,null),c(l,i),c(l,r),c(r,a),D&&D.m(a,null),c(a,d),V&&V.m(a,null),c(a,f),c(a,h),c(h,m),c(r,u),c(r,v),I&&I.m(v,null),c(v,p),M&&M.m(v,null),c(v,B),c(v,b),c(b,w),c(r,N),c(r,T),c(T,W),c(T,F),c(T,H),c(H,j),c(l,L),c(l,A),c(A,G),c(G,Q),c(G,U),c(G,q),c(q,y),z=!0},p(k,X){const Z={};X&2&&(Z.progressColor=k[1]<.9?"greenyellow":"#FF3838"),X&2&&(Z.progressValue=k[1]),X&4&&(Z.displayNumber=k[2]),n.$set(Z),k[3]>=2?D||(D=gt(),D.c(),D.m(a,d)):D&&(D.d(1),D=null),k[3]<2?V||(V=pt(),V.c(),V.m(a,f)):V&&(V.d(1),V=null),(!z||X&8)&&E(m,"width",k[3]+"%"),k[4]?I||(I=bt(),I.c(),I.m(v,p)):I&&(I.d(1),I=null),k[4]==!1?M||(M=yt(),M.c(),M.m(v,B)):M&&(M.d(1),M=null),(!z||X&16)&&E(w,"width",(k[4]?100:0)+"%"),(!z||X&32)&&E(j,"width",(k[5]?100:0)+"%"),(!z||X&64)&&E(y,"width",k[6]+"%")},i(k){z||(Y(t.$$.fragment,k),Y(n.$$.fragment,k),k&&le(()=>{z&&(K||(K=se(l,xe,{duration:200,opacity:0,start:0,easing:$e},!0)),K.run(1))}),z=!0)},o(k){te(t.$$.fragment,k),te(n.$$.fragment,k),k&&(K||(K=se(l,xe,{duration:200,opacity:0,start:0,easing:$e},!1)),K.run(0)),z=!1},d(k){k&&(P(s),P(l)),ye(t,k),ye(n),D&&D.d(),V&&V.d(),I&&I.d(),M&&M.d(),k&&K&&K.end()}}}function gt(e){let t;return{c(){t=g("i"),o(t,"class","fa-light fa-gas-pump")},m(s,l){R(s,t,l)},d(s){s&&P(t)}}}function pt(e){let t;return{c(){t=g("i"),o(t,"class","fa-light fa-gas-pump-slash"),E(t,"color","orangered")},m(s,l){R(s,t,l)},d(s){s&&P(t)}}}function bt(e){let t;return{c(){t=g("i"),o(t,"class","fa-light fa-engine")},m(s,l){R(s,t,l)},d(s){s&&P(t)}}}function yt(e){let t;return{c(){t=g("i"),o(t,"class","fa-light fa-car")},m(s,l){R(s,t,l)},d(s){s&&P(t)}}}function bs(e){let t,s,l=e[0]&&vt(e);return{c(){l&&l.c(),t=we()},m(n,i){l&&l.m(n,i),R(n,t,i),s=!0},p(n,[i]){n[0]?l?(l.p(n,i),i&1&&Y(l,1)):(l=vt(n),l.c(),Y(l,1),l.m(t.parentNode,t)):l&&(Nt(),te(l,1,1,()=>{l=null}),At())},i(n){s||(Y(l),s=!0)},o(n){te(l),s=!1},d(n){n&&P(t),l&&l.d(n)}}}function ys(e,t,s){let l=!1,n=0,i=0,r=50,a=!1,d=!1,f=20;return Re("updateVehicle",h=>{s(0,l=h.showing),s(1,n=h.rpm),s(2,i=h.speed),s(3,r=h.fuel),s(4,a=h.engineOn),s(5,d=h.beltOn),s(6,f=h.vehHealth),h.engHealth}),[l,n,i,r,a,d,f]}class ws extends je{constructor(t){super(),ke(this,t,ys,bs,_e,{})}}function ks(e){let t,s,l,n,i,r,a;s=new ds({}),n=new ws({});let d=!1;return{c(){t=g("main"),Ae(s.$$.fragment),l=S(),Ae(n.$$.fragment),i=S(),r=we(),o(t,"class","svelte-1y4be3q")},m(f,h){R(f,t,h),be(s,t,null),c(t,l),be(n,t,null),R(f,i,h),R(f,r,h),a=!0},p(f,[h]){},i(f){a||(Y(s.$$.fragment,f),Y(n.$$.fragment,f),Y(d),a=!0)},o(f){te(s.$$.fragment,f),te(n.$$.fragment,f),te(d),a=!1},d(f){f&&(P(t),P(i),P(r)),ye(s),ye(n)}}}function js(e,t,s){let l;return Ee(e,Tt,n=>s(0,l=n)),Rt.set({fallbackResourceName:"debug",allowEscapeKey:!0}),rs(),[l]}class Bs extends je{constructor(t){super(),ke(this,t,js,ks,_e,{})}}new Bs({target:document.getElementById("app")});