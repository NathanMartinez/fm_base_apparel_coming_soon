(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function N(){}function ee(e){return e()}function Q(){return Object.create(null)}function P(e){e.forEach(ee)}function te(e){return typeof e=="function"}function re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let j;function R(e,t){return j||(j=document.createElement("a")),j.href=t,e===j.href}function oe(e){return Object.keys(e).length===0}function U(e){return e??""}function i(e,t){e.appendChild(t)}function B(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function le(e){return document.createTextNode(e)}function p(){return le(" ")}function se(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function ie(e){return function(t){return t.preventDefault(),e.call(this,t)}}function o(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ce(e){return Array.from(e.childNodes)}let V;function C(e){V=e}const k=[],X=[],z=[],Y=[],ae=Promise.resolve();let H=!1;function ue(){H||(H=!0,ae.then(ne))}function T(e){z.push(e)}const F=new Set;let $=0;function ne(){if($!==0)return;const e=V;do{try{for(;$<k.length;){const t=k[$];$++,C(t),fe(t.$$)}}catch(t){throw k.length=0,$=0,t}for(C(null),k.length=0,$=0;X.length;)X.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];F.has(n)||(F.add(n),n())}z.length=0}while(k.length);for(;Y.length;)Y.pop()();H=!1,F.clear(),C(e)}function fe(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}const de=new Set;function me(e,t){e&&e.i&&(de.delete(e),e.i(t))}function ge(e,t,n,l){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),l||T(()=>{const a=e.$$.on_mount.map(ee).filter(te);e.$$.on_destroy?e.$$.on_destroy.push(...a):P(a),e.$$.on_mount=[]}),s.forEach(T)}function _e(e,t){const n=e.$$;n.fragment!==null&&(P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&(k.push(e),ue(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function he(e,t,n,l,r,s,a,d=[-1]){const g=V;C(e);const c=e.$$={fragment:null,ctx:[],props:s,update:N,not_equal:r,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:Q(),dirty:d,skip_bound:!1,root:t.target||g.$$.root};a&&a(c.root);let h=!1;if(c.ctx=n?n(e,t.props||{},(m,y,...x)=>{const u=x.length?x[0]:y;return c.ctx&&r(c.ctx[m],c.ctx[m]=u)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](u),h&&pe(e,m)),y}):[],c.update(),h=!0,P(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const m=ce(t.target);c.fragment&&c.fragment.l(m),m.forEach(q)}else c.fragment&&c.fragment.c();t.intro&&me(e.$$.fragment),ge(e,t.target,t.anchor,t.customElement),ne()}C(g)}class ye{$destroy(){_e(this,1),this.$destroy=N}$on(t,n){if(!te(n))return N;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ve="/fm_base_apparel_coming_soon/assets/logo-760646a1.svg",be="/fm_base_apparel_coming_soon/assets/icon-arrow-cf319c02.svg",$e="/fm_base_apparel_coming_soon/assets/icon-error-fcc402f9.svg";function ke(e){let t,n,l,r,s,a,d,g,c,h,m,y,x,u,v,W,b,Z,D,L,K,w,E,G,O,S,M,I,J;return{c(){t=f("main"),n=f("img"),r=p(),s=f("div"),a=p(),d=f("div"),g=f("h1"),g.textContent="We're",c=p(),h=f("h2"),h.textContent="coming soon",m=p(),y=f("p"),y.textContent=`Hello fellow shoppers! We're currently building our new fashion store. Add
			your email below to stay up-to-date with announcements and our launch
			deals.`,x=p(),u=f("form"),v=f("input"),W=p(),b=f("img"),D=p(),L=f("p"),L.textContent="Please provide a valid email",K=p(),w=f("button"),E=f("img"),S=p(),M=f("footer"),M.innerHTML=`<p class="attribution svelte-13g6rok">Challenge by
		<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" class="svelte-13g6rok">Frontend Mentor</a>. Coded by
		<a href="https://github.com/NathanMartinez" class="svelte-13g6rok">Nathan Martinez</a>.</p>`,o(n,"class","logo svelte-13g6rok"),R(n.src,l=ve)||o(n,"src",l),o(n,"alt","logo"),o(s,"class","girl svelte-13g6rok"),o(g,"class","svelte-13g6rok"),o(h,"class","svelte-13g6rok"),o(y,"class","svelte-13g6rok"),v.required=!0,o(v,"type","email"),o(v,"placeholder","Email Address"),o(v,"class","svelte-13g6rok"),o(b,"class","error_image svelte-13g6rok"),R(b.src,Z=$e)||o(b,"src",Z),o(b,"alt","error"),o(L,"class","error_text svelte-13g6rok"),R(E.src,G=be)||o(E,"src",G),o(E,"alt","submit"),o(w,"type","submit"),o(w,"class","svelte-13g6rok"),o(u,"class",O=U(e[0]&&"error")+" svelte-13g6rok"),o(d,"class","content svelte-13g6rok"),o(t,"class","svelte-13g6rok")},m(_,A){B(_,t,A),i(t,n),i(t,r),i(t,s),i(t,a),i(t,d),i(d,g),i(d,c),i(d,h),i(d,m),i(d,y),i(d,x),i(d,u),i(u,v),i(u,W),i(u,b),i(u,D),i(u,L),i(u,K),i(u,w),i(w,E),B(_,S,A),B(_,M,A),I||(J=se(u,"submit",ie(e[1])),I=!0)},p(_,[A]){A&1&&O!==(O=U(_[0]&&"error")+" svelte-13g6rok")&&o(u,"class",O)},i:N,o:N,d(_){_&&q(t),_&&q(S),_&&q(M),I=!1,J()}}}function xe(e,t,n){let l=!1;function r(s){let{value:a}=s.target[0];if(a===""){n(0,l=!0);return}if(new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,"gm").test(a))console.log(a);else{n(0,l=!0);return}}return[l,r]}class we extends ye{constructor(t){super(),he(this,t,xe,ke,re,{})}}new we({target:document.getElementById("app")});