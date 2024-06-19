const Vc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Vc();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cs(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Z={},$t=[],be=()=>{},Wc=()=>!1,vr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),As=t=>t.startsWith("onUpdate:"),ae=Object.assign,Ps=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kc=Object.prototype.hasOwnProperty,W=(t,e)=>Kc.call(t,e),F=Array.isArray,Bt=t=>yr(t)==="[object Map]",Do=t=>yr(t)==="[object Set]",B=t=>typeof t=="function",ce=t=>typeof t=="string",kt=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",Mo=t=>(ne(t)||B(t))&&B(t.then)&&B(t.catch),Lo=Object.prototype.toString,yr=t=>Lo.call(t),zc=t=>yr(t).slice(8,-1),xo=t=>yr(t)==="[object Object]",Os=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,un=Cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),br=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qc=/-(\w)/g,Be=br(t=>t.replace(qc,(e,n)=>n?n.toUpperCase():"")),Gc=/\B([A-Z])/g,Yt=br(t=>t.replace(Gc,"-$1").toLowerCase()),Er=br(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lr=br(t=>t?`on${Er(t)}`:""),gt=(t,e)=>!Object.is(t,e),Gn=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Uo=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},rs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ai;const ks=()=>ai||(ai=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Ns(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?Qc(r):Ns(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ce(t)||ne(t))return t}const Jc=/;(?![^(]*\))/g,Yc=/:([^]+)/,Xc=/\/\*[^]*?\*\//g;function Qc(t){const e={};return t.replace(Xc,"").split(Jc).forEach(n=>{if(n){const r=n.split(Yc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ds(t){let e="";if(ce(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Ds(t[n]);r&&(e+=r+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",el=Cs(Zc);function Fo(t){return!!t||t===""}const tm=t=>ce(t)?t:t==null?"":F(t)||ne(t)&&(t.toString===Lo||!B(t.toString))?JSON.stringify(t,$o,2):String(t),$o=(t,e)=>e&&e.__v_isRef?$o(t,e.value):Bt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[xr(r,i)+" =>"]=s,n),{})}:Do(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xr(n))}:kt(e)?xr(e):ne(e)&&!F(e)&&!xo(e)?String(e):e,xr=(t,e="")=>{var n;return kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class tl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!e&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function nl(t,e=Re){e&&e.active&&e.effects.push(t)}function rl(){return Re}let Tt;class Ms{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,nl(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,mt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(sl(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),_t()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ft,n=Tt;try{return ft=!0,Tt=this,this._runnings++,ci(this),this.fn()}finally{li(this),this._runnings--,Tt=n,ft=e}}stop(){this.active&&(ci(this),li(this),this.onStop&&this.onStop(),this.active=!1)}}function sl(t){return t.value}function ci(t){t._trackId++,t._depsLength=0}function li(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Bo(t.deps[e],t);t.deps.length=t._depsLength}}function Bo(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ft=!0,ss=0;const Ho=[];function mt(){Ho.push(ft),ft=!1}function _t(){const t=Ho.pop();ft=t===void 0?!0:t}function Ls(){ss++}function xs(){for(ss--;!ss&&is.length;)is.shift()()}function jo(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Bo(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const is=[];function Vo(t,e,n){Ls();for(const r of t.keys()){if(!t.computed&&r.computed&&t.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let s;r._dirtyLevel<e&&(s!=null?s:s=t.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s!=null?s:s=t.get(r)===r._trackId)&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&is.push(r.scheduler)))}xs()}const Wo=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},os=new WeakMap,Rt=Symbol(""),as=Symbol("");function _e(t,e,n){if(ft&&Tt){let r=os.get(t);r||os.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Wo(()=>r.delete(n))),jo(Tt,s)}}function qe(t,e,n,r,s,i){const o=os.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&F(t)){const a=Number(r);o.forEach((l,f)=>{(f==="length"||!kt(f)&&f>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":F(t)?Os(n)&&c.push(o.get("length")):(c.push(o.get(Rt)),Bt(t)&&c.push(o.get(as)));break;case"delete":F(t)||(c.push(o.get(Rt)),Bt(t)&&c.push(o.get(as)));break;case"set":Bt(t)&&c.push(o.get(Rt));break}Ls();for(const a of c)a&&Vo(a,5);xs()}const il=Cs("__proto__,__v_isRef,__isVue"),Ko=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kt)),ui=ol();function ol(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mt(),Ls();const r=G(this)[e].apply(this,n);return xs(),_t(),r}}),t}function al(t){kt(t)||(t=String(t));const e=G(this);return _e(e,"has",t),e.hasOwnProperty(t)}class zo{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?bl:Yo:i?Jo:Go).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){if(o&&W(ui,n))return Reflect.get(ui,n,r);if(n==="hasOwnProperty")return al}const c=Reflect.get(e,n,r);return(kt(n)?Ko.has(n):il(n))||(s||_e(e,"get",n),i)?c:ve(c)?o&&Os(n)?c:c.value:ne(c)?s?Qo(c):wr(c):c}}class qo extends zo{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=yn(i);if(!or(r)&&!yn(r)&&(i=G(i),r=G(r)),!F(e)&&ve(i)&&!ve(r))return a?!1:(i.value=r,!0)}const o=F(e)&&Os(n)?Number(n)<e.length:W(e,n),c=Reflect.set(e,n,r,s);return e===G(s)&&(o?gt(r,i)&&qe(e,"set",n,r):qe(e,"add",n,r)),c}deleteProperty(e,n){const r=W(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&qe(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!kt(n)||!Ko.has(n))&&_e(e,"has",n),r}ownKeys(e){return _e(e,"iterate",F(e)?"length":Rt),Reflect.ownKeys(e)}}class cl extends zo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ll=new qo,ul=new cl,fl=new qo(!0);const Us=t=>t,Ir=t=>Reflect.getPrototypeOf(t);function Bn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(gt(e,i)&&_e(s,"get",e),_e(s,"get",i));const{has:o}=Ir(s),c=r?Us:n?Bs:bn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Hn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(gt(t,s)&&_e(r,"has",t),_e(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function jn(t,e=!1){return t=t.__v_raw,!e&&_e(G(t),"iterate",Rt),Reflect.get(t,"size",t)}function fi(t){t=G(t);const e=G(this);return Ir(e).has.call(e,t)||(e.add(t),qe(e,"add",t,t)),this}function di(t,e){e=G(e);const n=G(this),{has:r,get:s}=Ir(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?gt(e,o)&&qe(n,"set",t,e):qe(n,"add",t,e),this}function hi(t){const e=G(this),{has:n,get:r}=Ir(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&qe(e,"delete",t,void 0),i}function pi(){const t=G(this),e=t.size!==0,n=t.clear();return e&&qe(t,"clear",void 0,void 0),n}function Vn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=G(o),a=e?Us:t?Bs:bn;return!t&&_e(c,"iterate",Rt),o.forEach((l,f)=>r.call(s,a(l),a(f),i))}}function Wn(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=Bt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?Us:e?Bs:bn;return!e&&_e(i,"iterate",a?as:Rt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function Ze(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function dl(){const t={get(i){return Bn(this,i)},get size(){return jn(this)},has:Hn,add:fi,set:di,delete:hi,clear:pi,forEach:Vn(!1,!1)},e={get(i){return Bn(this,i,!1,!0)},get size(){return jn(this)},has:Hn,add:fi,set:di,delete:hi,clear:pi,forEach:Vn(!1,!0)},n={get(i){return Bn(this,i,!0)},get size(){return jn(this,!0)},has(i){return Hn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Vn(!0,!1)},r={get(i){return Bn(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return Hn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Wn(i,!1,!1),n[i]=Wn(i,!0,!1),e[i]=Wn(i,!1,!0),r[i]=Wn(i,!0,!0)}),[t,n,e,r]}const[hl,pl,gl,ml]=dl();function Fs(t,e){const n=e?t?ml:gl:t?pl:hl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const _l={get:Fs(!1,!1)},vl={get:Fs(!1,!0)},yl={get:Fs(!0,!1)};const Go=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,bl=new WeakMap;function El(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Il(t){return t.__v_skip||!Object.isExtensible(t)?0:El(zc(t))}function wr(t){return yn(t)?t:$s(t,!1,ll,_l,Go)}function Xo(t){return $s(t,!1,fl,vl,Jo)}function Qo(t){return $s(t,!0,ul,yl,Yo)}function $s(t,e,n,r,s){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Il(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function fn(t){return yn(t)?fn(t.__v_raw):!!(t&&t.__v_isReactive)}function yn(t){return!!(t&&t.__v_isReadonly)}function or(t){return!!(t&&t.__v_isShallow)}function Zo(t){return t?!!t.__v_raw:!1}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function wl(t){return Object.isExtensible(t)&&Uo(t,"__v_skip",!0),t}const bn=t=>ne(t)?wr(t):t,Bs=t=>ne(t)?Qo(t):t;class ea{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ms(()=>e(this._value),()=>Jn(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return(!e._cacheable||e.effect.dirty)&&gt(e._value,e._value=e.effect.run())&&Jn(e,5),ta(e),e.effect._dirtyLevel>=2&&Jn(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Tl(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=be):(r=t.get,s=t.set),new ea(r,s,i||!s,n)}function ta(t){var e;ft&&Tt&&(t=G(t),jo(Tt,(e=t.dep)!=null?e:t.dep=Wo(()=>t.dep=void 0,t instanceof ea?t:void 0)))}function Jn(t,e=5,n,r){t=G(t);const s=t.dep;s&&Vo(s,e)}function ve(t){return!!(t&&t.__v_isRef===!0)}function na(t){return ra(t,!1)}function Rl(t){return ra(t,!0)}function ra(t,e){return ve(t)?t:new Sl(t,e)}class Sl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:bn(e)}get value(){return ta(this),this._value}set value(e){const n=this.__v_isShallow||or(e)||yn(e);e=n?e:G(e),gt(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:bn(e),Jn(this,5))}}function Ht(t){return ve(t)?t.value:t}const Cl={get:(t,e,n)=>Ht(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ve(s)&&!ve(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sa(t){return fn(t)?t:new Proxy(t,Cl)}/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dt(t,e,n,r){try{return r?t(...r):t()}catch(s){Tr(s,e,n)}}function Ae(t,e,n,r){if(B(t)){const s=dt(t,e,n,r);return s&&Mo(s)&&s.catch(i=>{Tr(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ae(t[i],e,n,r));return s}}function Tr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){mt(),dt(a,null,10,[t,o,c]),_t();return}}Al(t,n,s,r)}function Al(t,e,n,r=!0){console.error(t)}let En=!1,cs=!1;const ue=[];let xe=0;const jt=[];let rt=null,wt=0;const ia=Promise.resolve();let Hs=null;function oa(t){const e=Hs||ia;return t?e.then(this?t.bind(this):t):e}function Pl(t){let e=xe+1,n=ue.length;for(;e<n;){const r=e+n>>>1,s=ue[r],i=In(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function js(t){(!ue.length||!ue.includes(t,En&&t.allowRecurse?xe+1:xe))&&(t.id==null?ue.push(t):ue.splice(Pl(t.id),0,t),aa())}function aa(){!En&&!cs&&(cs=!0,Hs=ia.then(la))}function Ol(t){const e=ue.indexOf(t);e>xe&&ue.splice(e,1)}function kl(t){F(t)?jt.push(...t):(!rt||!rt.includes(t,t.allowRecurse?wt+1:wt))&&jt.push(t),aa()}function gi(t,e,n=En?xe+1:0){for(;n<ue.length;n++){const r=ue[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ue.splice(n,1),n--,r()}}}function ca(t){if(jt.length){const e=[...new Set(jt)].sort((n,r)=>In(n)-In(r));if(jt.length=0,rt){rt.push(...e);return}for(rt=e,wt=0;wt<rt.length;wt++){const n=rt[wt];n.active!==!1&&n()}rt=null,wt=0}}const In=t=>t.id==null?1/0:t.id,Nl=(t,e)=>{const n=In(t)-In(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function la(t){cs=!1,En=!0,ue.sort(Nl);const e=be;try{for(xe=0;xe<ue.length;xe++){const n=ue[xe];n&&n.active!==!1&&dt(n,null,14)}}finally{xe=0,ue.length=0,ca(),En=!1,Hs=null,(ue.length||jt.length)&&la()}}function Dl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Z;p&&(s=n.map(v=>ce(v)?v.trim():v)),h&&(s=n.map(rs))}let c,a=r[c=Lr(e)]||r[c=Lr(Be(e))];!a&&i&&(a=r[c=Lr(Yt(e))]),a&&Ae(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ae(l,t,6,s)}}function ua(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!B(t)){const a=l=>{const f=ua(l,e,!0);f&&(c=!0,ae(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ne(t)&&r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):ae(o,i),ne(t)&&r.set(t,o),o)}function Rr(t,e){return!t||!vr(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,Yt(e))||W(t,e))}let Ee=null,fa=null;function ar(t){const e=Ee;return Ee=t,fa=t&&t.type.__scopeId||null,e}function on(t,e=Ee,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ai(-1);const i=ar(e);let o;try{o=t(...s)}finally{ar(i),r._d&&Ai(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ur(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:f,props:h,data:p,setupState:v,ctx:A,inheritAttrs:N}=t,H=ar(t);let D,O;try{if(n.shapeFlag&4){const V=s||r,te=V;D=Le(l.call(te,V,f,h,v,p,A)),O=c}else{const V=e;D=Le(V.length>1?V(h,{attrs:c,slots:o,emit:a}):V(h,null)),O=e.props?c:Ml(c)}}catch(V){pn.length=0,Tr(V,t,1),D=oe(Ct)}let x=D;if(O&&N!==!1){const V=Object.keys(O),{shapeFlag:te}=x;V.length&&te&7&&(i&&V.some(As)&&(O=Ll(O,i)),x=zt(x,O,!1,!0))}return n.dirs&&(x=zt(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),D=x,ar(H),D}const Ml=t=>{let e;for(const n in t)(n==="class"||n==="style"||vr(n))&&((e||(e={}))[n]=t[n]);return e},Ll=(t,e)=>{const n={};for(const r in t)(!As(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?mi(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Rr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?mi(r,o,l):!0:!!o;return!1}function mi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Rr(n,i))return!0}return!1}function Ul({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const da="components";function _i(t,e){return $l(da,t,!0,e)||t}const Fl=Symbol.for("v-ndc");function $l(t,e,n=!0,r=!1){const s=Ee||fe;if(s){const i=s.type;if(t===da){const c=Mu(i,!1);if(c&&(c===e||c===Be(e)||c===Er(Be(e))))return i}const o=vi(s[t]||i[t],e)||vi(s.appContext[t],e);return!o&&r?i:o}}function vi(t,e){return t&&(t[e]||t[Be(e)]||t[Er(Be(e))])}const Bl=t=>t.__isSuspense;function Hl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):kl(t)}function Sr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{mt();const c=kn(n),a=Ae(e,n,t,o);return c(),_t(),a});return r?s.unshift(i):s.push(i),i}}const Je=t=>(e,n=fe)=>{(!Ar||t==="sp")&&Sr(t,(...r)=>e(...r),n)},jl=Je("bm"),Vl=Je("m"),Wl=Je("bu"),Kl=Je("u"),zl=Je("bum"),ha=Je("um"),ql=Je("sp"),Gl=Je("rtg"),Jl=Je("rtc");function Yl(t,e=fe){Sr("ec",t,e)}function nm(t,e){if(Ee===null)return t;const n=Pr(Ee),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=Z]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&ot(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function bt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(mt(),Ae(a,n,8,[t.el,c,t,e]),_t())}}/*! #__NO_SIDE_EFFECTS__ */function pa(t,e){return B(t)?(()=>ae({name:t.name},e,{setup:t}))():t}const Yn=t=>!!t.type.__asyncLoader,ls=t=>t?Ma(t)?Pr(t):ls(t.parent):null,dn=ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ls(t.parent),$root:t=>ls(t.root),$emit:t=>t.emit,$options:t=>Vs(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,js(t.update)}),$nextTick:t=>t.n||(t.n=oa.bind(t.proxy)),$watch:t=>_u.bind(t)}),Fr=(t,e)=>t!==Z&&!t.__isScriptSetup&&W(t,e),Xl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Fr(r,e))return o[e]=1,r[e];if(s!==Z&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Z&&W(n,e))return o[e]=4,n[e];us&&(o[e]=0)}}const f=dn[e];let h,p;if(f)return e==="$attrs"&&_e(t.attrs,"get",""),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Z&&W(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Fr(s,e)?(s[e]=n,!0):r!==Z&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Z&&W(t,o)||Fr(e,o)||(c=i[0])&&W(c,o)||W(r,o)||W(dn,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yi(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let us=!0;function Ql(t){const e=Vs(t),n=t.proxy,r=t.ctx;us=!1,e.beforeCreate&&bi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:v,updated:A,activated:N,deactivated:H,beforeDestroy:D,beforeUnmount:O,destroyed:x,unmounted:V,render:te,renderTracked:U,renderTriggered:re,errorCaptured:pe,serverPrefetch:we,expose:Ie,inheritAttrs:Xe,components:yt,directives:ke,filters:tn}=e;if(l&&Zl(l,r,null),o)for(const Y in o){const K=o[Y];B(K)&&(r[Y]=K.bind(n))}if(s){const Y=s.call(n,n);ne(Y)&&(t.data=wr(Y))}if(us=!0,i)for(const Y in i){const K=i[Y],He=B(K)?K.bind(n,n):B(K.get)?K.get.bind(n,n):be,Qe=!B(K)&&B(K.set)?K.set.bind(n):be,Ne=Se({get:He,set:Qe});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:ge=>Ne.value=ge})}if(c)for(const Y in c)ga(c[Y],r,n,Y);if(a){const Y=B(a)?a.call(n):a;Reflect.ownKeys(Y).forEach(K=>{Xn(K,Y[K])})}f&&bi(f,t,"c");function se(Y,K){F(K)?K.forEach(He=>Y(He.bind(n))):K&&Y(K.bind(n))}if(se(jl,h),se(Vl,p),se(Wl,v),se(Kl,A),se(vu,N),se(yu,H),se(Yl,pe),se(Jl,U),se(Gl,re),se(zl,O),se(ha,V),se(ql,we),F(Ie))if(Ie.length){const Y=t.exposed||(t.exposed={});Ie.forEach(K=>{Object.defineProperty(Y,K,{get:()=>n[K],set:He=>n[K]=He})})}else t.exposed||(t.exposed={});te&&t.render===be&&(t.render=te),Xe!=null&&(t.inheritAttrs=Xe),yt&&(t.components=yt),ke&&(t.directives=ke)}function Zl(t,e,n=be){F(t)&&(t=fs(t));for(const r in t){const s=t[r];let i;ne(s)?"default"in s?i=Ue(s.from||r,s.default,!0):i=Ue(s.from||r):i=Ue(s),ve(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function bi(t,e,n){Ae(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ga(t,e,n,r){const s=r.includes(".")?Aa(n,r):()=>n[r];if(ce(t)){const i=e[t];B(i)&&Qn(s,i)}else if(B(t))Qn(s,t.bind(n));else if(ne(t))if(F(t))t.forEach(i=>ga(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Qn(s,i,t)}}function Vs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>cr(a,l,o,!0)),cr(a,e,o)),ne(e)&&i.set(e,a),a}function cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&cr(t,i,n,!0),s&&s.forEach(o=>cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=eu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const eu={data:Ei,props:Ii,emits:Ii,methods:an,computed:an,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:an,directives:an,watch:nu,provide:Ei,inject:tu};function Ei(t,e){return e?t?function(){return ae(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function tu(t,e){return an(fs(t),fs(e))}function fs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function an(t,e){return t?ae(Object.create(null),t,e):e}function Ii(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ae(Object.create(null),yi(t),yi(e!=null?e:{})):e}function nu(t,e){if(!t)return e;if(!e)return t;const n=ae(Object.create(null),t);for(const r in e)n[r]=he(t[r],e[r]);return n}function ma(){return{app:null,config:{isNativeTag:Wc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ru=0;function su(t,e){return function(r,s=null){B(r)||(r=ae({},r)),s!=null&&!ne(s)&&(s=null);const i=ma(),o=new WeakSet;let c=!1;const a=i.app={_uid:ru++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:xu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(a,...f)):B(l)&&(o.add(l),l(a,...f))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,f){return f?(i.components[l]=f,a):i.components[l]},directive(l,f){return f?(i.directives[l]=f,a):i.directives[l]},mount(l,f,h){if(!c){const p=oe(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,l):t(p,l,h),c=!0,a._container=l,l.__vue_app__=a,Pr(p.component)}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,f){return i.provides[l]=f,a},runWithContext(l){const f=hn;hn=a;try{return l()}finally{hn=f}}};return a}}let hn=null;function Xn(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Ue(t,e,n=!1){const r=fe||Ee;if(r||hn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:hn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}const _a={},va=()=>Object.create(_a),ya=t=>Object.getPrototypeOf(t)===_a;function iu(t,e,n,r=!1){const s={},i=va();t.propsDefaults=Object.create(null),ba(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Xo(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ou(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=G(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Rr(t.emitsOptions,p))continue;const v=e[p];if(a)if(W(i,p))v!==i[p]&&(i[p]=v,l=!0);else{const A=Be(p);s[A]=ds(a,c,A,v,t,!1)}else v!==i[p]&&(i[p]=v,l=!0)}}}else{ba(t,e,s,i)&&(l=!0);let f;for(const h in c)(!e||!W(e,h)&&((f=Yt(h))===h||!W(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=ds(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!W(e,h)&&!0)&&(delete i[h],l=!0)}l&&qe(t.attrs,"set","")}function ba(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(un(a))continue;const l=e[a];let f;s&&W(s,f=Be(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:Rr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=G(n),l=c||Z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=ds(s,a,h,l[h],t,!W(l,h))}}return o}function ds(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=W(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&B(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=kn(s);r=l[n]=a.call(null,e),f()}}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Yt(n))&&(r=!0))}return r}function Ea(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!B(t)){const f=h=>{a=!0;const[p,v]=Ea(h,e,!0);ae(o,p),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return ne(t)&&r.set(t,$t),$t;if(F(i))for(let f=0;f<i.length;f++){const h=Be(i[f]);wi(h)&&(o[h]=Z)}else if(i)for(const f in i){const h=Be(f);if(wi(h)){const p=i[f],v=o[h]=F(p)||B(p)?{type:p}:ae({},p);if(v){const A=Si(Boolean,v.type),N=Si(String,v.type);v[0]=A>-1,v[1]=N<0||A<N,(A>-1||W(v,"default"))&&c.push(h)}}}const l=[o,c];return ne(t)&&r.set(t,l),l}function wi(t){return t[0]!=="$"&&!un(t)}function Ti(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ri(t,e){return Ti(t)===Ti(e)}function Si(t,e){return F(e)?e.findIndex(n=>Ri(n,t)):B(e)&&Ri(e,t)?0:-1}const Ia=t=>t[0]==="_"||t==="$stable",Ws=t=>F(t)?t.map(Le):[Le(t)],au=(t,e,n)=>{if(e._n)return e;const r=on((...s)=>Ws(e(...s)),n);return r._c=!1,r},wa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ia(s))continue;const i=t[s];if(B(i))e[s]=au(s,i,r);else if(i!=null){const o=Ws(i);e[s]=()=>o}}},Ta=(t,e)=>{const n=Ws(e);t.slots.default=()=>n},cu=(t,e)=>{const n=t.slots=va();if(t.vnode.shapeFlag&32){const r=e._;r?(ae(n,e),Uo(n,"_",r,!0)):wa(e,n)}else e&&Ta(t,e)},lu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(ae(s,e),!n&&c===1&&delete s._):(i=!e.$stable,wa(e,s)),o=e}else e&&(Ta(t,e),o={default:1});if(i)for(const c in s)!Ia(c)&&o[c]==null&&delete s[c]};function hs(t,e,n,r,s=!1){if(F(t)){t.forEach((p,v)=>hs(p,e&&(F(e)?e[v]:e),n,r,s));return}if(Yn(r)&&!s)return;const i=r.shapeFlag&4?Pr(r.component):r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===Z?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(ce(l)?(f[l]=null,W(h,l)&&(h[l]=null)):ve(l)&&(l.value=null)),B(a))dt(a,c,12,[o,f]);else{const p=ce(a),v=ve(a);if(p||v){const A=()=>{if(t.f){const N=p?W(h,a)?h[a]:f[a]:a.value;s?F(N)&&Ps(N,i):F(N)?N.includes(i)||N.push(i):p?(f[a]=[i],W(h,a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else p?(f[a]=o,W(h,a)&&(h[a]=o)):v&&(a.value=o,t.k&&(f[t.k]=o))};o?(A.id=-1,me(A,n)):A()}}}function uu(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(ks().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const me=Hl;function fu(t){return du(t)}function du(t,e){uu();const n=ks();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:v=be,insertStaticContent:A}=t,N=(u,d,g,y=null,m=null,I=null,T=void 0,E=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!rn(u,d)&&(y=_(u),ge(u,m,I,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:C,shapeFlag:M}=d;switch(b){case Cr:H(u,d,g,y);break;case Ct:D(u,d,g,y);break;case Br:u==null&&O(d,g,y,T);break;case We:yt(u,d,g,y,m,I,T,E,w);break;default:M&1?te(u,d,g,y,m,I,T,E,w):M&6?ke(u,d,g,y,m,I,T,E,w):(M&64||M&128)&&b.process(u,d,g,y,m,I,T,E,w,P)}C!=null&&m&&hs(C,u&&u.ref,I,d||u,!d)},H=(u,d,g,y)=>{if(u==null)r(d.el=c(d.children),g,y);else{const m=d.el=u.el;d.children!==u.children&&l(m,d.children)}},D=(u,d,g,y)=>{u==null?r(d.el=a(d.children||""),g,y):d.el=u.el},O=(u,d,g,y)=>{[u.el,u.anchor]=A(u.children,d,g,y,u.el,u.anchor)},x=({el:u,anchor:d},g,y)=>{let m;for(;u&&u!==d;)m=p(u),r(u,g,y),u=m;r(d,g,y)},V=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},te=(u,d,g,y,m,I,T,E,w)=>{d.type==="svg"?T="svg":d.type==="math"&&(T="mathml"),u==null?U(d,g,y,m,I,T,E,w):we(u,d,m,I,T,E,w)},U=(u,d,g,y,m,I,T,E)=>{let w,b;const{props:C,shapeFlag:M,transition:k,dirs:$}=u;if(w=u.el=o(u.type,I,C&&C.is,C),M&8?f(w,u.children):M&16&&pe(u.children,w,null,y,m,$r(u,I),T,E),$&&bt(u,null,y,"created"),re(w,u,u.scopeId,T,y),C){for(const Q in C)Q!=="value"&&!un(Q)&&i(w,Q,null,C[Q],I,u.children,y,m,le);"value"in C&&i(w,"value",null,C.value,I),(b=C.onVnodeBeforeMount)&&Me(b,y,u)}$&&bt(u,null,y,"beforeMount");const j=hu(m,k);j&&k.beforeEnter(w),r(w,d,g),((b=C&&C.onVnodeMounted)||j||$)&&me(()=>{b&&Me(b,y,u),j&&k.enter(w),$&&bt(u,null,y,"mounted")},m)},re=(u,d,g,y,m)=>{if(g&&v(u,g),y)for(let I=0;I<y.length;I++)v(u,y[I]);if(m){let I=m.subTree;if(d===I){const T=m.vnode;re(u,T,T.scopeId,T.slotScopeIds,m.parent)}}},pe=(u,d,g,y,m,I,T,E,w=0)=>{for(let b=w;b<u.length;b++){const C=u[b]=E?st(u[b]):Le(u[b]);N(null,C,d,g,y,m,I,T,E)}},we=(u,d,g,y,m,I,T)=>{const E=d.el=u.el;let{patchFlag:w,dynamicChildren:b,dirs:C}=d;w|=u.patchFlag&16;const M=u.props||Z,k=d.props||Z;let $;if(g&&Et(g,!1),($=k.onVnodeBeforeUpdate)&&Me($,g,d,u),C&&bt(d,u,g,"beforeUpdate"),g&&Et(g,!0),b?Ie(u.dynamicChildren,b,E,g,y,$r(d,m),I):T||K(u,d,E,null,g,y,$r(d,m),I,!1),w>0){if(w&16)Xe(E,d,M,k,g,y,m);else if(w&2&&M.class!==k.class&&i(E,"class",null,k.class,m),w&4&&i(E,"style",M.style,k.style,m),w&8){const j=d.dynamicProps;for(let Q=0;Q<j.length;Q++){const q=j[Q],ie=M[q],Te=k[q];(Te!==ie||q==="value")&&i(E,q,ie,Te,m,u.children,g,y,le)}}w&1&&u.children!==d.children&&f(E,d.children)}else!T&&b==null&&Xe(E,d,M,k,g,y,m);(($=k.onVnodeUpdated)||C)&&me(()=>{$&&Me($,g,d,u),C&&bt(d,u,g,"updated")},y)},Ie=(u,d,g,y,m,I,T)=>{for(let E=0;E<d.length;E++){const w=u[E],b=d[E],C=w.el&&(w.type===We||!rn(w,b)||w.shapeFlag&70)?h(w.el):g;N(w,b,C,null,y,m,I,T,!0)}},Xe=(u,d,g,y,m,I,T)=>{if(g!==y){if(g!==Z)for(const E in g)!un(E)&&!(E in y)&&i(u,E,g[E],null,T,d.children,m,I,le);for(const E in y){if(un(E))continue;const w=y[E],b=g[E];w!==b&&E!=="value"&&i(u,E,b,w,T,d.children,m,I,le)}"value"in y&&i(u,"value",g.value,y.value,T)}},yt=(u,d,g,y,m,I,T,E,w)=>{const b=d.el=u?u.el:c(""),C=d.anchor=u?u.anchor:c("");let{patchFlag:M,dynamicChildren:k,slotScopeIds:$}=d;$&&(E=E?E.concat($):$),u==null?(r(b,g,y),r(C,g,y),pe(d.children||[],g,C,m,I,T,E,w)):M>0&&M&64&&k&&u.dynamicChildren?(Ie(u.dynamicChildren,k,g,m,I,T,E),(d.key!=null||m&&d===m.subTree)&&Ra(u,d,!0)):K(u,d,g,C,m,I,T,E,w)},ke=(u,d,g,y,m,I,T,E,w)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?m.ctx.activate(d,g,y,T,w):tn(d,g,y,m,I,T,w):Nt(u,d,w)},tn=(u,d,g,y,m,I,T)=>{const E=u.component=Pu(u,y,m);if(Pa(u)&&(E.ctx.renderer=P),Ou(E),E.asyncDep){if(m&&m.registerDep(E,se,T),!u.el){const w=E.subTree=oe(Ct);D(null,w,d,g)}}else se(E,u,d,g,m,I,T)},Nt=(u,d,g)=>{const y=d.component=u.component;if(xl(u,d,g))if(y.asyncDep&&!y.asyncResolved){Y(y,d,g);return}else y.next=d,Ol(y.update),y.effect.dirty=!0,y.update();else d.el=u.el,y.vnode=d},se=(u,d,g,y,m,I,T)=>{const E=()=>{if(u.isMounted){let{next:C,bu:M,u:k,parent:$,vnode:j}=u;{const Lt=Sa(u);if(Lt){C&&(C.el=j.el,Y(u,C,T)),Lt.asyncDep.then(()=>{u.isUnmounted||E()});return}}let Q=C,q;Et(u,!1),C?(C.el=j.el,Y(u,C,T)):C=j,M&&Gn(M),(q=C.props&&C.props.onVnodeBeforeUpdate)&&Me(q,$,C,j),Et(u,!0);const ie=Ur(u),Te=u.subTree;u.subTree=ie,N(Te,ie,h(Te.el),_(Te),u,m,I),C.el=ie.el,Q===null&&Ul(u,ie.el),k&&me(k,m),(q=C.props&&C.props.onVnodeUpdated)&&me(()=>Me(q,$,C,j),m)}else{let C;const{el:M,props:k}=d,{bm:$,m:j,parent:Q}=u,q=Yn(d);if(Et(u,!1),$&&Gn($),!q&&(C=k&&k.onVnodeBeforeMount)&&Me(C,Q,d),Et(u,!0),M&&ee){const ie=()=>{u.subTree=Ur(u),ee(M,u.subTree,u,m,null)};q?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ie()):ie()}else{const ie=u.subTree=Ur(u);N(null,ie,g,y,u,m,I),d.el=ie.el}if(j&&me(j,m),!q&&(C=k&&k.onVnodeMounted)){const ie=d;me(()=>Me(C,Q,ie),m)}(d.shapeFlag&256||Q&&Yn(Q.vnode)&&Q.vnode.shapeFlag&256)&&u.a&&me(u.a,m),u.isMounted=!0,d=g=y=null}},w=u.effect=new Ms(E,be,()=>js(b),u.scope),b=u.update=()=>{w.dirty&&w.run()};b.id=u.uid,Et(u,!0),b()},Y=(u,d,g)=>{d.component=u;const y=u.vnode.props;u.vnode=d,u.next=null,ou(u,d.props,y,g),lu(u,d.children,g),mt(),gi(u),_t()},K=(u,d,g,y,m,I,T,E,w=!1)=>{const b=u&&u.children,C=u?u.shapeFlag:0,M=d.children,{patchFlag:k,shapeFlag:$}=d;if(k>0){if(k&128){Qe(b,M,g,y,m,I,T,E,w);return}else if(k&256){He(b,M,g,y,m,I,T,E,w);return}}$&8?(C&16&&le(b,m,I),M!==b&&f(g,M)):C&16?$&16?Qe(b,M,g,y,m,I,T,E,w):le(b,m,I,!0):(C&8&&f(g,""),$&16&&pe(M,g,y,m,I,T,E,w))},He=(u,d,g,y,m,I,T,E,w)=>{u=u||$t,d=d||$t;const b=u.length,C=d.length,M=Math.min(b,C);let k;for(k=0;k<M;k++){const $=d[k]=w?st(d[k]):Le(d[k]);N(u[k],$,g,null,m,I,T,E,w)}b>C?le(u,m,I,!0,!1,M):pe(d,g,y,m,I,T,E,w,M)},Qe=(u,d,g,y,m,I,T,E,w)=>{let b=0;const C=d.length;let M=u.length-1,k=C-1;for(;b<=M&&b<=k;){const $=u[b],j=d[b]=w?st(d[b]):Le(d[b]);if(rn($,j))N($,j,g,null,m,I,T,E,w);else break;b++}for(;b<=M&&b<=k;){const $=u[M],j=d[k]=w?st(d[k]):Le(d[k]);if(rn($,j))N($,j,g,null,m,I,T,E,w);else break;M--,k--}if(b>M){if(b<=k){const $=k+1,j=$<C?d[$].el:y;for(;b<=k;)N(null,d[b]=w?st(d[b]):Le(d[b]),g,j,m,I,T,E,w),b++}}else if(b>k)for(;b<=M;)ge(u[b],m,I,!0),b++;else{const $=b,j=b,Q=new Map;for(b=j;b<=k;b++){const ye=d[b]=w?st(d[b]):Le(d[b]);ye.key!=null&&Q.set(ye.key,b)}let q,ie=0;const Te=k-j+1;let Lt=!1,si=0;const nn=new Array(Te);for(b=0;b<Te;b++)nn[b]=0;for(b=$;b<=M;b++){const ye=u[b];if(ie>=Te){ge(ye,m,I,!0);continue}let De;if(ye.key!=null)De=Q.get(ye.key);else for(q=j;q<=k;q++)if(nn[q-j]===0&&rn(ye,d[q])){De=q;break}De===void 0?ge(ye,m,I,!0):(nn[De-j]=b+1,De>=si?si=De:Lt=!0,N(ye,d[De],g,null,m,I,T,E,w),ie++)}const ii=Lt?pu(nn):$t;for(q=ii.length-1,b=Te-1;b>=0;b--){const ye=j+b,De=d[ye],oi=ye+1<C?d[ye+1].el:y;nn[b]===0?N(null,De,g,oi,m,I,T,E,w):Lt&&(q<0||b!==ii[q]?Ne(De,g,oi,2):q--)}}},Ne=(u,d,g,y,m=null)=>{const{el:I,type:T,transition:E,children:w,shapeFlag:b}=u;if(b&6){Ne(u.component.subTree,d,g,y);return}if(b&128){u.suspense.move(d,g,y);return}if(b&64){T.move(u,d,g,P);return}if(T===We){r(I,d,g);for(let M=0;M<w.length;M++)Ne(w[M],d,g,y);r(u.anchor,d,g);return}if(T===Br){x(u,d,g);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(I),r(I,d,g),me(()=>E.enter(I),m);else{const{leave:M,delayLeave:k,afterLeave:$}=E,j=()=>r(I,d,g),Q=()=>{M(I,()=>{j(),$&&$()})};k?k(I,j,Q):Q()}else r(I,d,g)},ge=(u,d,g,y=!1,m=!1)=>{const{type:I,props:T,ref:E,children:w,dynamicChildren:b,shapeFlag:C,patchFlag:M,dirs:k,memoIndex:$}=u;if(E!=null&&hs(E,null,g,u,!0),$!=null&&(d.renderCache[$]=void 0),C&256){d.ctx.deactivate(u);return}const j=C&1&&k,Q=!Yn(u);let q;if(Q&&(q=T&&T.onVnodeBeforeUnmount)&&Me(q,d,u),C&6)$n(u.component,g,y);else{if(C&128){u.suspense.unmount(g,y);return}j&&bt(u,null,d,"beforeUnmount"),C&64?u.type.remove(u,d,g,m,P,y):b&&(I!==We||M>0&&M&64)?le(b,d,g,!1,!0):(I===We&&M&384||!m&&C&16)&&le(w,d,g),y&&Dt(u)}(Q&&(q=T&&T.onVnodeUnmounted)||j)&&me(()=>{q&&Me(q,d,u),j&&bt(u,null,d,"unmounted")},g)},Dt=u=>{const{type:d,el:g,anchor:y,transition:m}=u;if(d===We){Mt(g,y);return}if(d===Br){V(u);return}const I=()=>{s(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:E}=m,w=()=>T(g,I);E?E(u.el,I,w):w()}else I()},Mt=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},$n=(u,d,g)=>{const{bum:y,scope:m,update:I,subTree:T,um:E,m:w,a:b}=u;Ci(w),Ci(b),y&&Gn(y),m.stop(),I&&(I.active=!1,ge(T,u,d,g)),E&&me(E,d),me(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},le=(u,d,g,y=!1,m=!1,I=0)=>{for(let T=I;T<u.length;T++)ge(u[T],d,g,y,m)},_=u=>u.shapeFlag&6?_(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el);let S=!1;const R=(u,d,g)=>{u==null?d._vnode&&ge(d._vnode,null,null,!0):N(d._vnode||null,u,d,null,null,null,g),S||(S=!0,gi(),ca(),S=!1),d._vnode=u},P={p:N,um:ge,m:Ne,r:Dt,mt:tn,mc:pe,pc:K,pbc:Ie,n:_,o:t};let z,ee;return e&&([z,ee]=e(P)),{render:R,hydrate:z,createApp:su(R,z)}}function $r({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Et({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ra(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=st(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Ra(o,c)),c.type===Cr&&(c.el=o.el)}}function pu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Sa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sa(e)}function Ci(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const gu=Symbol.for("v-scx"),mu=()=>Ue(gu),Kn={};function Qn(t,e,n){return Ca(t,e,n)}function Ca(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Z){if(e&&i){const U=e;e=(...re)=>{U(...re),te()}}const a=fe,l=U=>r===!0?U:ot(U,r===!1?1:void 0);let f,h=!1,p=!1;if(ve(t)?(f=()=>t.value,h=or(t)):fn(t)?(f=()=>l(t),h=!0):F(t)?(p=!0,h=t.some(U=>fn(U)||or(U)),f=()=>t.map(U=>{if(ve(U))return U.value;if(fn(U))return l(U);if(B(U))return dt(U,a,2)})):B(t)?e?f=()=>dt(t,a,2):f=()=>(v&&v(),Ae(t,a,3,[A])):f=be,e&&r){const U=f;f=()=>ot(U())}let v,A=U=>{v=x.onStop=()=>{dt(U,a,4),v=x.onStop=void 0}},N;if(Ar)if(A=be,e?n&&Ae(e,a,3,[f(),p?[]:void 0,A]):f(),s==="sync"){const U=mu();N=U.__watcherHandles||(U.__watcherHandles=[])}else return be;let H=p?new Array(t.length).fill(Kn):Kn;const D=()=>{if(!(!x.active||!x.dirty))if(e){const U=x.run();(r||h||(p?U.some((re,pe)=>gt(re,H[pe])):gt(U,H)))&&(v&&v(),Ae(e,a,3,[U,H===Kn?void 0:p&&H[0]===Kn?[]:H,A]),H=U)}else x.run()};D.allowRecurse=!!e;let O;s==="sync"?O=D:s==="post"?O=()=>me(D,a&&a.suspense):(D.pre=!0,a&&(D.id=a.uid),O=()=>js(D));const x=new Ms(f,be,O),V=rl(),te=()=>{x.stop(),V&&Ps(V.effects,x)};return e?n?D():H=x.run():s==="post"?me(x.run.bind(x),a&&a.suspense):x.run(),N&&N.push(te),te}function _u(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?Aa(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=kn(this),c=Ca(s,i.bind(r),n);return o(),c}function Aa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ot(t,e=1/0,n){if(e<=0||!ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ve(t))ot(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)ot(t[r],e,n);else if(Do(t)||Bt(t))t.forEach(r=>{ot(r,e,n)});else if(xo(t)){for(const r in t)ot(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ot(t[r],e,n)}return t}const Pa=t=>t.type.__isKeepAlive;function vu(t,e){Oa(t,"a",e)}function yu(t,e){Oa(t,"da",e)}function Oa(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Sr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Pa(s.parent.vnode)&&bu(r,e,n,s),s=s.parent}}function bu(t,e,n,r){const s=Sr(e,t,r,!0);ha(()=>{Ps(r[e],s)},n)}function ka(t,e){t.shapeFlag&6&&t.component?ka(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}const Eu=t=>t.__isTeleport,We=Symbol.for("v-fgt"),Cr=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),Br=Symbol.for("v-stc"),pn=[];let Ce=null;function Zn(t=!1){pn.push(Ce=t?null:[])}function Iu(){pn.pop(),Ce=pn[pn.length-1]||null}let wn=1;function Ai(t){wn+=t}function Na(t){return t.dynamicChildren=wn>0?Ce||$t:null,Iu(),wn>0&&Ce&&Ce.push(t),t}function Hr(t,e,n,r,s,i){return Na(gn(t,e,n,r,s,i,!0))}function wu(t,e,n,r,s){return Na(oe(t,e,n,r,s,!0))}function ps(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const Da=({key:t})=>t!=null?t:null,er=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||ve(t)||B(t)?{i:Ee,r:t,k:e,f:!!n}:t:null);function gn(t,e=null,n=null,r=0,s=null,i=t===We?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Da(e),ref:e&&er(e),scopeId:fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return c?(Ks(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ce(n)?8:16),wn>0&&!o&&Ce&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ce.push(a),a}const oe=Tu;function Tu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Fl)&&(t=Ct),ps(t)){const c=zt(t,e,!0);return n&&Ks(c,n),wn>0&&!i&&Ce&&(c.shapeFlag&6?Ce[Ce.indexOf(t)]=c:Ce.push(c)),c.patchFlag=-2,c}if(Lu(t)&&(t=t.__vccOpts),e){e=Ru(e);let{class:c,style:a}=e;c&&!ce(c)&&(e.class=Ds(c)),ne(a)&&(Zo(a)&&!F(a)&&(a=ae({},a)),e.style=Ns(a))}const o=ce(t)?1:Bl(t)?128:Eu(t)?64:ne(t)?4:B(t)?2:0;return gn(t,e,n,r,s,o,i,!0)}function Ru(t){return t?Zo(t)||ya(t)?ae({},t):t:null}function zt(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?Su(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Da(l),ref:e&&e.ref?n&&i?F(i)?i.concat(er(e)):[i,er(e)]:er(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zt(t.ssContent),ssFallback:t.ssFallback&&zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&ka(f,a.clone(f)),f}function nt(t=" ",e=0){return oe(Cr,null,t,e)}function rm(t="",e=!1){return e?(Zn(),wu(Ct,null,t)):oe(Ct,null,t)}function Le(t){return t==null||typeof t=="boolean"?oe(Ct):F(t)?oe(We,null,t.slice()):typeof t=="object"?st(t):oe(Cr,null,String(t))}function st(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zt(t)}function Ks(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ks(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ya(e)?e._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ee},n=32):(e=String(e),r&64?(n=16,e=[nt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Su(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ds([e.class,r.class]));else if(s==="style")e.style=Ns([e.style,r.style]);else if(vr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Me(t,e,n,r=null){Ae(t,e,7,[n,r])}const Cu=ma();let Au=0;function Pu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Cu,i={uid:Au++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new tl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ea(r,s),emitsOptions:ua(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Dl.bind(null,i),t.ce&&t.ce(i),i}let fe=null,lr,gs;{const t=ks(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};lr=e("__VUE_INSTANCE_SETTERS__",n=>fe=n),gs=e("__VUE_SSR_SETTERS__",n=>Ar=n)}const kn=t=>{const e=fe;return lr(t),t.scope.on(),()=>{t.scope.off(),lr(e)}},Pi=()=>{fe&&fe.scope.off(),lr(null)};function Ma(t){return t.vnode.shapeFlag&4}let Ar=!1;function Ou(t,e=!1){e&&gs(e);const{props:n,children:r}=t.vnode,s=Ma(t);iu(t,n,s,e),cu(t,r);const i=s?ku(t,e):void 0;return e&&gs(!1),i}function ku(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Xl);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Du(t):null,i=kn(t);mt();const o=dt(r,t,0,[t.props,s]);if(_t(),i(),Mo(o)){if(o.then(Pi,Pi),e)return o.then(c=>{Oi(t,c,e)}).catch(c=>{Tr(c,t,0)});t.asyncDep=o}else Oi(t,o,e)}else La(t,e)}function Oi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=sa(e)),La(t,n)}let ki;function La(t,e,n){const r=t.type;if(!t.render){if(!e&&ki&&!r.render){const s=r.template||Vs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ae(ae({isCustomElement:i,delimiters:c},o),a);r.render=ki(s,l)}}t.render=r.render||be}{const s=kn(t);mt();try{Ql(t)}finally{_t(),s()}}}const Nu={get(t,e){return _e(t,"get",""),t[e]}};function Du(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Nu),slots:t.slots,emit:t.emit,expose:e}}function Pr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sa(wl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in dn)return dn[n](t)},has(e,n){return n in e||n in dn}})):t.proxy}function Mu(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Lu(t){return B(t)&&"__vccOpts"in t}const Se=(t,e)=>Tl(t,e,Ar);function xa(t,e,n){const r=arguments.length;return r===2?ne(e)&&!F(e)?ps(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ps(n)&&(n=[n]),oe(t,e,n))}const xu="3.4.29";/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Uu="http://www.w3.org/2000/svg",Fu="http://www.w3.org/1998/Math/MathML",Ve=typeof document!="undefined"?document:null,Ni=Ve&&Ve.createElement("template"),$u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ve.createElementNS(Uu,t):e==="mathml"?Ve.createElementNS(Fu,t):n?Ve.createElement(t,{is:n}):Ve.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ve.createTextNode(t),createComment:t=>Ve.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ve.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ni.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Ni.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Bu=Symbol("_vtc");function Hu(t,e,n){const r=t[Bu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Di=Symbol("_vod"),ju=Symbol("_vsh"),Vu=Symbol(""),Wu=/(^|;)\s*display\s*:/;function Ku(t,e,n){const r=t.style,s=ce(n);let i=!1;if(n&&!s){if(e)if(ce(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&tr(r,c,"")}else for(const o in e)n[o]==null&&tr(r,o,"");for(const o in n)o==="display"&&(i=!0),tr(r,o,n[o])}else if(s){if(e!==n){const o=r[Vu];o&&(n+=";"+o),r.cssText=n,i=Wu.test(n)}}else e&&t.removeAttribute("style");Di in t&&(t[Di]=i?r.display:"",t[ju]&&(r.display="none"))}const Mi=/\s*!important$/;function tr(t,e,n){if(F(n))n.forEach(r=>tr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=zu(t,e);Mi.test(n)?t.setProperty(Yt(r),n.replace(Mi,""),"important"):t[r]=n}}const Li=["Webkit","Moz","ms"],jr={};function zu(t,e){const n=jr[e];if(n)return n;let r=Be(e);if(r!=="filter"&&r in t)return jr[e]=r;r=Er(r);for(let s=0;s<Li.length;s++){const i=Li[s]+r;if(i in t)return jr[e]=i}return e}const xi="http://www.w3.org/1999/xlink";function Ui(t,e,n,r,s,i=el(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xi,e.slice(6,e.length)):t.setAttributeNS(xi,e,n):n==null||i&&!Fo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":String(n))}function qu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const l=c==="OPTION"?t.getAttribute("value")||"":t.value,f=n==null?"":String(n);(l!==f||!("_value"in t))&&(t.value=f),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Fo(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function xt(t,e,n,r){t.addEventListener(e,n,r)}function Gu(t,e,n,r){t.removeEventListener(e,n,r)}const Fi=Symbol("_vei");function Ju(t,e,n,r,s=null){const i=t[Fi]||(t[Fi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Yu(e);if(r){const l=i[e]=Zu(r,s);xt(t,c,l,a)}else o&&(Gu(t,c,o,a),i[e]=void 0)}}const $i=/(?:Once|Passive|Capture)$/;function Yu(t){let e;if($i.test(t)){e={};let r;for(;r=t.match($i);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yt(t.slice(2)),e]}let Vr=0;const Xu=Promise.resolve(),Qu=()=>Vr||(Xu.then(()=>Vr=0),Vr=Date.now());function Zu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ae(ef(r,n.value),e,5,[r])};return n.value=t,n.attached=Qu(),n}function ef(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,tf=(t,e,n,r,s,i,o,c,a)=>{const l=s==="svg";e==="class"?Hu(t,r,l):e==="style"?Ku(t,n,r):vr(e)?As(e)||Ju(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nf(t,e,r,l))?(qu(t,e,r,i,o,c,a),(e==="value"||e==="checked"||e==="selected")&&Ui(t,e,r,l,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ui(t,e,r,l))};function nf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bi(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bi(e)&&ce(n)?!1:e in t}const Hi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Gn(e,n):e};function rf(t){t.target.composing=!0}function ji(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wr=Symbol("_assign"),sm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Wr]=Hi(s);const i=r||s.props&&s.props.type==="number";xt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=rs(c)),t[Wr](c)}),n&&xt(t,"change",()=>{t.value=t.value.trim()}),e||(xt(t,"compositionstart",rf),xt(t,"compositionend",ji),xt(t,"change",ji))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Wr]=Hi(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?rs(t.value):t.value,a=e==null?"":e;c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},sf=ae({patchProp:tf},$u);let Vi;function of(){return Vi||(Vi=fu(sf))}const af=(...t)=>{const e=of().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=lf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,cf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function cf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lf(t){return ce(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Fa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,v=l&63;a||(v=64,o||(p=64)),r.push(n[f],n[h],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ua(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new ff;const p=i<<2|c>>4;if(r.push(p),l!==64){const v=c<<4&240|l>>2;if(r.push(v),h!==64){const A=l<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ff extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const df=function(t){const e=Ua(t);return Fa.encodeByteArray(e,!0)},$a=function(t){return df(t).replace(/\./g,"")},Ba=function(t){try{return Fa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=()=>hf().__FIREBASE_DEFAULTS__,gf=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mf=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ba(t[1]);return e&&JSON.parse(e)},zs=()=>{try{return pf()||gf()||mf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_f=t=>{var e,n;return(n=(e=zs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ha=()=>{var t;return(t=zs())===null||t===void 0?void 0:t.config},ja=t=>{var e;return(e=zs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function bf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ef(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function If(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wf(){try{return typeof indexedDB=="object"}catch{return!1}}function Tf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="FirebaseError";class vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rf,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nn.prototype.create)}}class Nn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sf(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new vt(s,c,r)}}function Sf(t,e){return t.replace(Cf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Cf=/\{\$([^}]+)}/g;function Af(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wi(i)&&Wi(o)){if(!ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ln(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Pf(t,e){const n=new Of(t,e);return n.subscribe.bind(n)}class Of{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Kr),s.error===void 0&&(s.error=Kr),s.complete===void 0&&(s.complete=Kr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mf(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Df(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Df(t){return t===It?void 0:t}function Mf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const xf={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Uf=X.INFO,Ff={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},$f=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ff[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Va{constructor(e){this.name=e,this._logLevel=Uf,this._logHandler=$f,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Bf=(t,e)=>e.some(n=>t instanceof n);let Ki,zi;function Hf(){return Ki||(Ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jf(){return zi||(zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wa=new WeakMap,ms=new WeakMap,Ka=new WeakMap,zr=new WeakMap,qs=new WeakMap;function Vf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ht(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wa.set(n,t)}).catch(()=>{}),qs.set(e,t),e}function Wf(t){if(ms.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ms.set(t,e)}let _s={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ms.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ka.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kf(t){_s=t(_s)}function zf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qr(this),e,...n);return Ka.set(r,e.sort?e.sort():[e]),ht(r)}:jf().includes(t)?function(...e){return t.apply(qr(this),e),ht(Wa.get(this))}:function(...e){return ht(t.apply(qr(this),e))}}function qf(t){return typeof t=="function"?zf(t):(t instanceof IDBTransaction&&Wf(t),Bf(t,Hf())?new Proxy(t,_s):t)}function ht(t){if(t instanceof IDBRequest)return Vf(t);if(zr.has(t))return zr.get(t);const e=qf(t);return e!==t&&(zr.set(t,e),qs.set(e,t)),e}const qr=t=>qs.get(t);function Gf(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ht(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ht(o.result),a.oldVersion,a.newVersion,ht(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Jf=["get","getKey","getAll","getAllKeys","count"],Yf=["put","add","delete","clear"],Gr=new Map;function qi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gr.get(e))return Gr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Yf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jf.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Gr.set(e,i),i}Kf(t=>({...t,get:(e,n,r)=>qi(e,n)||t.get(e,n,r),has:(e,n)=>!!qi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vs="@firebase/app",Gi="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new Va("@firebase/app"),Zf="@firebase/app-compat",ed="@firebase/analytics-compat",td="@firebase/analytics",nd="@firebase/app-check-compat",rd="@firebase/app-check",sd="@firebase/auth",id="@firebase/auth-compat",od="@firebase/database",ad="@firebase/database-compat",cd="@firebase/functions",ld="@firebase/functions-compat",ud="@firebase/installations",fd="@firebase/installations-compat",dd="@firebase/messaging",hd="@firebase/messaging-compat",pd="@firebase/performance",gd="@firebase/performance-compat",md="@firebase/remote-config",_d="@firebase/remote-config-compat",vd="@firebase/storage",yd="@firebase/storage-compat",bd="@firebase/firestore",Ed="@firebase/firestore-compat",Id="firebase",wd="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="[DEFAULT]",Td={[vs]:"fire-core",[Zf]:"fire-core-compat",[td]:"fire-analytics",[ed]:"fire-analytics-compat",[rd]:"fire-app-check",[nd]:"fire-app-check-compat",[sd]:"fire-auth",[id]:"fire-auth-compat",[od]:"fire-rtdb",[ad]:"fire-rtdb-compat",[cd]:"fire-fn",[ld]:"fire-fn-compat",[ud]:"fire-iid",[fd]:"fire-iid-compat",[dd]:"fire-fcm",[hd]:"fire-fcm-compat",[pd]:"fire-perf",[gd]:"fire-perf-compat",[md]:"fire-rc",[_d]:"fire-rc-compat",[vd]:"fire-gcs",[yd]:"fire-gcs-compat",[bd]:"fire-fst",[Ed]:"fire-fst-compat","fire-js":"fire-js",[Id]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Map,bs=new Map;function Rd(t,e){try{t.container.addComponent(e)}catch(n){At.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(bs.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;bs.set(e,t);for(const n of fr.values())Rd(n,t);return!0}function za(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pt=new Nn("app","Firebase",Sd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=wd;function qa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ys,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw pt.create("bad-app-name",{appName:String(s)});if(n||(n=Ha()),!n)throw pt.create("no-options");const i=fr.get(s);if(i){if(ur(n,i.options)&&ur(r,i.config))return i;throw pt.create("duplicate-app",{appName:s})}const o=new Lf(s);for(const a of bs.values())o.addComponent(a);const c=new Cd(n,r,o);return fr.set(s,c),c}function Ad(t=ys){const e=fr.get(t);if(!e&&t===ys&&Ha())return qa();if(!e)throw pt.create("no-app",{appName:t});return e}function Vt(t,e,n){var r;let s=(r=Td[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(c.join(" "));return}Tn(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="firebase-heartbeat-database",Od=1,Rn="firebase-heartbeat-store";let Jr=null;function Ga(){return Jr||(Jr=Gf(Pd,Od,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rn)}}}).catch(t=>{throw pt.create("idb-open",{originalErrorMessage:t.message})})),Jr}async function kd(t){try{return await(await Ga()).transaction(Rn).objectStore(Rn).get(Ja(t))}catch(e){if(e instanceof vt)At.warn(e.message);else{const n=pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(n.message)}}}async function Ji(t,e){try{const r=(await Ga()).transaction(Rn,"readwrite");await r.objectStore(Rn).put(e,Ja(t)),await r.done}catch(n){if(n instanceof vt)At.warn(n.message);else{const r=pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});At.warn(r.message)}}}function Ja(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=1024,Dd=30*24*60*60*1e3;class Md{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Dd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yi(),{heartbeatsToSend:n,unsentEntries:r}=Ld(this._heartbeatsCache.heartbeats),s=$a(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Yi(){return new Date().toISOString().substring(0,10)}function Ld(t,e=Nd){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wf()?Tf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ji(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ji(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xi(t){return $a(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t){Tn(new qt("platform-logger",e=>new Xf(e),"PRIVATE")),Tn(new qt("heartbeat",e=>new Md(e),"PRIVATE")),Vt(vs,Gi,t),Vt(vs,Gi,"esm2017"),Vt("fire-js","")}Ud("");function Gs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ya(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fd=Ya,Xa=new Nn("auth","Firebase",Ya());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Va("@firebase/auth");function $d(t,...e){dr.logLevel<=X.WARN&&dr.warn(`Auth (${Mn}): ${t}`,...e)}function nr(t,...e){dr.logLevel<=X.ERROR&&dr.error(`Auth (${Mn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,...e){throw Js(t,...e)}function Fe(t,...e){return Js(t,...e)}function Bd(t,e,n){const r=Object.assign(Object.assign({},Fd()),{[e]:n});return new Nn("auth","Firebase",r).create(e,{appName:t.name})}function Js(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xa.create(t,...e)}function L(t,e,...n){if(!t)throw Js(e,...n)}function Ke(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nr(e),new Error(e)}function Ge(t,e){t||Ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hd(){return Qi()==="http:"||Qi()==="https:"}function Qi(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hd()||bf()||"connection"in navigator)?navigator.onLine:!0}function Vd(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=yf()||Ef()}get(){return jd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Ln(3e4,6e4);function Xt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qt(t,e,n,r,s={}){return Za(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Dn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Qa.fetch()(ec(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Za(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wd),e);try{const s=new zd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw zn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw zn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw zn(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Bd(t,f,l);Pe(t,f)}}catch(s){if(s instanceof vt)throw s;Pe(t,"network-request-failed",{message:String(s)})}}async function xn(t,e,n,r,s={}){const i=await Qt(t,e,n,r,s);return"mfaPendingCredential"in i&&Pe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ec(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ys(t.config,s):`${t.config.apiScheme}://${s}`}class zd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),Kd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Fe(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qd(t,e){return Qt(t,"POST","/v1/accounts:delete",e)}async function Gd(t,e){return Qt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jd(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Xs(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:mn(Yr(s.auth_time)),issuedAtTime:mn(Yr(s.iat)),expirationTime:mn(Yr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yr(t){return Number(t)*1e3}function Xs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ba(n);return s?JSON.parse(s):(nr("Failed to decode base64 JWT payload"),null)}catch(s){return nr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Yd(t){const e=Xs(t);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vt&&Xd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mn(this.lastLoginAt),this.creationTime=mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Sn(t,Gd(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?th(i.providerUserInfo):[],c=eh(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new tc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Zd(t){const e=Ye(t);await hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function th(t){return t.map(e=>{var{providerId:n}=e,r=Gs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nh(t,e){const n=await Za(t,{},async()=>{const r=Dn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ec(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Qa.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Yd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cn;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){L(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class St{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Gs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Sn(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jd(this,e)}reload(){return Zd(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Sn(this,qd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,H=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:V,isAnonymous:te,providerData:U,stsTokenManager:re}=n;L(x&&re,e,"internal-error");const pe=Cn.fromJSON(this.name,re);L(typeof x=="string",e,"internal-error"),et(h,e.name),et(p,e.name),L(typeof V=="boolean",e,"internal-error"),L(typeof te=="boolean",e,"internal-error"),et(v,e.name),et(A,e.name),et(N,e.name),et(H,e.name),et(D,e.name),et(O,e.name);const we=new St({uid:x,auth:e,email:p,emailVerified:V,displayName:h,isAnonymous:te,photoURL:A,phoneNumber:v,tenantId:N,stsTokenManager:pe,createdAt:D,lastLoginAt:O});return U&&Array.isArray(U)&&(we.providerData=U.map(Ie=>Object.assign({},Ie))),H&&(we._redirectEventId=H),we}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cn;s.updateFromServerResponse(n);const i=new St({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Map;function ze(t){Ge(t instanceof Function,"Expected a class definition");let e=Zi.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zi.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nc.type="NONE";const eo=nc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e,n){return`firebase:${t}:${e}:${n}`}class Wt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=rr(this.userKey,s.apiKey,i),this.fullPersistenceKey=rr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?St._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wt(ze(eo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ze(eo);const o=rr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const h=St._fromJSON(e,f);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Wt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Wt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ic(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ac(e))return"Blackberry";if(cc(e))return"Webos";if(Qs(e))return"Safari";if((e.includes("chrome/")||sc(e))&&!e.includes("edge/"))return"Chrome";if(oc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rc(t=de()){return/firefox\//i.test(t)}function Qs(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sc(t=de()){return/crios\//i.test(t)}function ic(t=de()){return/iemobile/i.test(t)}function oc(t=de()){return/android/i.test(t)}function ac(t=de()){return/blackberry/i.test(t)}function cc(t=de()){return/webos/i.test(t)}function Or(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rh(t=de()){var e;return Or(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sh(){return If()&&document.documentMode===10}function lc(t=de()){return Or(t)||oc(t)||cc(t)||ac(t)||/windows phone/i.test(t)||ic(t)}function ih(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t,e=[]){let n;switch(t){case"Browser":n=to(de());break;case"Worker":n=`${to(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mn}/${r}`}async function fc(t,e){return Qt(t,"GET","/v2/recaptchaConfig",Xt(t,e))}function no(t){return t!==void 0&&t.enterprise!==void 0}class dc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Fe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",oh().appendChild(r)})}function ah(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ch="https://www.google.com/recaptcha/enterprise.js?render=",lh="recaptcha-enterprise",uh="NO_RECAPTCHA";class pc{constructor(e){this.type=lh,this.auth=Zt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{fc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new dc(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;no(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(uh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&no(window.grecaptcha))s(c,i,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}hc(ch+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function pr(t,e,n,r=!1){const s=new pc(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ro(this),this.idTokenSubscription=new ro(this),this.beforeStateQueue=new fh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a==null?void 0:a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}async initializeRecaptchaConfig(){const e=await fc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new dc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new pc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Wt.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$d(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zt(t){return Ye(t)}class ro{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pf(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t,e){const n=za(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ur(i,e!=null?e:{}))return s;Pe(s,"already-initialized")}return n.initialize({options:e})}function ph(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gc(t,e,n){const r=Zt(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=mc(e),{host:o,port:c}=gh(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||mh()}function mc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gh(t){const e=mc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:so(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:so(o)}}}function so(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,n){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}async function _h(t,e){return Qt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t,e){return xn(t,"POST","/v1/accounts:signInWithPassword",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",Xt(t,e))}async function yh(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Zs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new An(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new An(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await pr(e,r,"signInWithPassword");return Xr(e,s)}else return Xr(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await pr(e,r,"signInWithPassword");return Xr(e,i)}else return Promise.reject(s)});case"emailLink":return vh(e,{email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return _h(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yh(e,{idToken:n,email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(t,e){return xn(t,"POST","/v1/accounts:signInWithIdp",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="http://localhost";class Pt extends Zs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Gs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Pt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kt(e,n)}buildRequest(){const e={requestUri:bh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ih(t){const e=cn(ln(t)).link,n=e?cn(ln(e)).deep_link_id:null,r=cn(ln(t)).deep_link_id;return(r?cn(ln(r)).link:null)||r||n||e||t}class ei{constructor(e){var n,r,s,i,o,c;const a=cn(ln(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,h=Eh((s=a.mode)!==null&&s!==void 0?s:null);L(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Ih(e);try{return new ei(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,n){return An._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ei.parseLink(n);return L(r,"argument-error"),An._fromEmailAndCode(e,r.code,r.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends _c{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Un{constructor(){super("facebook.com")}static credential(e){return Pt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.FACEBOOK_SIGN_IN_METHOD="facebook.com";at.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Un{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Un{constructor(){super("github.com")}static credential(e){return Pt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Un{constructor(){super("twitter.com")}static credential(e,n){return Pt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.TWITTER_SIGN_IN_METHOD="twitter.com";ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e){return xn(t,"POST","/v1/accounts:signUp",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await St._fromIdTokenResponse(e,r,s),o=io(r);return new Ot({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=io(r);return new Ot({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function io(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends vt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new gr(e,n,r,s)}}function vc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(t,i,e,r):i})}async function wh(t,e,n=!1){const r=await Sn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ot._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Sn(t,vc(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=Xs(i.idToken);L(o,r,"internal-error");const{sub:c}=o;return L(t.uid===c,r,"user-mismatch"),Ot._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(t,e,n=!1){const r="signIn",s=await vc(t,r,e),i=await Ot._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Rh(t,e){return yc(Zt(t),e)}async function im(t,e,n){var r;const s=Zt(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await pr(s,i,"signUpPassword");o=Qr(s,l)}else o=Qr(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const f=await pr(s,i,"signUpPassword");return Qr(s,f)}else return Promise.reject(l)});const c=await o.catch(l=>Promise.reject(l)),a=await Ot._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(a.user),a}function om(t,e,n){return Rh(Ye(t),en.credential(e,n))}function Sh(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function Ch(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function Ah(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function Ph(t){return Ye(t).signOut()}const mr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,"1"),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){const t=de();return Qs(t)||Or(t)}const kh=1e3,Nh=10;class Ec extends bc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Oh()&&ih(),this.fallbackToPolling=lc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Nh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ec.type="LOCAL";const Dh=Ec;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends bc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ic.type="SESSION";const wc=Ic;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new kr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Mh(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=ti("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return window}function xh(t){$e().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){return typeof $e().WorkerGlobalScope!="undefined"&&typeof $e().importScripts=="function"}async function Uh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $h(){return Tc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="firebaseLocalStorageDb",Bh=1,_r="firebaseLocalStorage",Sc="fbase_key";class Fn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nr(t,e){return t.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function Hh(){const t=indexedDB.deleteDatabase(Rc);return new Fn(t).toPromise()}function Is(){const t=indexedDB.open(Rc,Bh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_r,{keyPath:Sc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_r)?e(r):(r.close(),await Hh(),e(await Is()))})})}async function oo(t,e,n){const r=Nr(t,!0).put({[Sc]:e,value:n});return new Fn(r).toPromise()}async function jh(t,e){const n=Nr(t,!1).get(e),r=await new Fn(n).toPromise();return r===void 0?null:r.value}function ao(t,e){const n=Nr(t,!0).delete(e);return new Fn(n).toPromise()}const Vh=800,Wh=3;class Cc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Is(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kr._getInstance($h()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Uh(),!this.activeServiceWorker)return;this.sender=new Lh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Is();return await oo(e,mr,"1"),await ao(e,mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ao(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Nr(s,!1).getAll();return new Fn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cc.type="LOCAL";const Kh=Cc;new Ln(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t,e){return e?ze(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Zs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qh(t){return yc(t.auth,new ni(t),t.bypassAuthState)}function Gh(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Th(n,new ni(t),t.bypassAuthState)}async function Jh(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),wh(n,new ni(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qh;case"linkViaPopup":case"linkViaRedirect":return Jh;case"reauthViaPopup":case"reauthViaRedirect":return Gh;default:Pe(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new Ln(2e3,1e4);class Ft extends Ac{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yh.get())};e()}}Ft.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="pendingRedirect",sr=new Map;class Qh extends Ac{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sr.get(this.auth._key());if(!e){try{const r=await Zh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sr.set(this.auth._key(),e)}return this.bypassAuthState||sr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zh(t,e){const n=np(e),r=tp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ep(t,e){sr.set(t._key(),e)}function tp(t){return ze(t._redirectPersistence)}function np(t){return rr(Xh,t.config.apiKey,t.name)}async function rp(t,e,n=!1){const r=Zt(t),s=zh(r,e),o=await new Qh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=10*60*1e3;class ip{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!op(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sp&&this.cachedEventUids.clear(),this.cachedEventUids.has(co(e))}saveEventToCache(e){this.cachedEventUids.add(co(e)),this.lastProcessedEventTime=Date.now()}}function co(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function op(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(t,e={}){return Qt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lp=/^https?/;async function up(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ap(t);for(const n of e)try{if(fp(n))return}catch{}Pe(t,"unauthorized-domain")}function fp(t){const e=Es(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lp.test(n))return!1;if(cp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Ln(3e4,6e4);function lo(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hp(t){return new Promise((e,n)=>{var r,s,i;function o(){lo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lo(),n(Fe(t,"network-request-failed"))},timeout:dp.get()})}if(!((s=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$e().gapi)===null||i===void 0)&&i.load)o();else{const c=ah("iframefcb");return $e()[c]=()=>{gapi.load?o():n(Fe(t,"network-request-failed"))},hc(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw ir=null,e})}let ir=null;function pp(t){return ir=ir||hp(t),ir}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=new Ln(5e3,15e3),mp="__/auth/iframe",_p="emulator/auth/iframe",vp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bp(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ys(e,_p):`https://${t.config.authDomain}/${mp}`,r={apiKey:e.apiKey,appName:t.name,v:Mn},s=yp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Dn(r).slice(1)}`}async function Ep(t){const e=await pp(t),n=$e().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:bp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Fe(t,"network-request-failed"),c=$e().setTimeout(()=>{i(o)},gp.get());function a(){$e().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wp=500,Tp=600,Rp="_blank",Sp="http://localhost";class uo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cp(t,e,n,r=wp,s=Tp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Ip),{width:r.toString(),height:s.toString(),top:i,left:o}),l=de().toLowerCase();n&&(c=sc(l)?Rp:n),rc(l)&&(e=e||Sp,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[v,A])=>`${p}${v}=${A},`,"");if(rh(l)&&c!=="_self")return Ap(e||"",c),new uo(null);const h=window.open(e||"",c,f);L(h,t,"popup-blocked");try{h.focus()}catch{}return new uo(h)}function Ap(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="__/auth/handler",Op="emulator/auth/handler",kp=encodeURIComponent("fac");async function fo(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mn,eventId:s};if(e instanceof _c){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Af(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries(i||{}))o[f]=h}if(e instanceof Un){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${kp}=${encodeURIComponent(a)}`:"";return`${Np(t)}?${Dn(c).slice(1)}${l}`}function Np({config:t}){return t.emulator?Ys(t,Op):`https://${t.authDomain}/${Pp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="webStorageSupport";class Dp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wc,this._completeRedirectFn=rp,this._overrideRedirectResult=ep}async _openPopup(e,n,r,s){var i;Ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await fo(e,n,r,Es(),s);return Cp(e,o,ti())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await fo(e,n,r,Es(),s);return xh(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ep(e),r=new ip(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zr,{type:Zr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Zr];o!==void 0&&n(!!o),Pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=up(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lc()||Qs()||Or()}}const Mp=Dp;var ho="@firebase/auth",po="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Up(t){Tn(new qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uc(t)},l=new dh(r,s,i,a);return ph(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new qt("auth-internal",e=>{const n=Zt(e.getProvider("auth").getImmediate());return(r=>new Lp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(ho,po,xp(t)),Vt(ho,po,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=5*60,$p=ja("authIdTokenMaxAge")||Fp;let go=null;const Bp=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$p)return;const s=n==null?void 0:n.token;go!==s&&(go=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ws(t=Ad()){const e=za(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hh(t,{popupRedirectResolver:Mp,persistence:[Kh,Dh,wc]}),r=ja("authTokenSyncURL");if(r){const i=Bp(r);Ch(n,i,()=>i(n.currentUser)),Sh(n,o=>i(o))}const s=_f("auth");return s&&gc(n,`http://${s}`),n}Up("Browser");/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ut=typeof document!="undefined";function Hp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const J=Object.assign;function es(t,e){const n={};for(const r in e){const s=e[r];n[r]=Oe(s)?s.map(t):t(s)}return n}const _n=()=>{},Oe=Array.isArray,Oc=/#/g,jp=/&/g,Vp=/\//g,Wp=/=/g,Kp=/\?/g,kc=/\+/g,zp=/%5B/g,qp=/%5D/g,Nc=/%5E/g,Gp=/%60/g,Dc=/%7B/g,Jp=/%7C/g,Mc=/%7D/g,Yp=/%20/g;function ri(t){return encodeURI(""+t).replace(Jp,"|").replace(zp,"[").replace(qp,"]")}function Xp(t){return ri(t).replace(Dc,"{").replace(Mc,"}").replace(Nc,"^")}function Ts(t){return ri(t).replace(kc,"%2B").replace(Yp,"+").replace(Oc,"%23").replace(jp,"%26").replace(Gp,"`").replace(Dc,"{").replace(Mc,"}").replace(Nc,"^")}function Qp(t){return Ts(t).replace(Wp,"%3D")}function Zp(t){return ri(t).replace(Oc,"%23").replace(Kp,"%3F")}function eg(t){return t==null?"":Zp(t).replace(Vp,"%2F")}function Pn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const tg=/\/$/,ng=t=>t.replace(tg,"");function ts(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=og(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Pn(o)}}function rg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gt(e.matched[r],n.matched[s])&&Lc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ig(t[n],e[n]))return!1;return!0}function ig(t,e){return Oe(t)?_o(t,e):Oe(e)?_o(e,t):t===e}function _o(t,e){return Oe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function og(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var On;(function(t){t.pop="pop",t.push="push"})(On||(On={}));var vn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vn||(vn={}));function ag(t){if(!t)if(Ut){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ng(t)}const cg=/^[^#]+#/;function lg(t,e){return t.replace(cg,"#")+e}function ug(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Dr=()=>({left:window.scrollX,top:window.scrollY});function fg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ug(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function vo(t,e){return(history.state?history.state.position-e:-1)+t}const Rs=new Map;function dg(t,e){Rs.set(t,e)}function hg(t){const e=Rs.get(t);return Rs.delete(t),e}let pg=()=>location.protocol+"//"+location.host;function xc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),mo(a,"")}return mo(n,t)+r+s}function gg(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const v=xc(t,location),A=n.value,N=e.value;let H=0;if(p){if(n.value=v,e.value=p,o&&o===A){o=null;return}H=N?p.position-N.position:0}else r(v);s.forEach(D=>{D(n.value,A,{delta:H,type:On.pop,direction:H?H>0?vn.forward:vn.back:vn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const v=()=>{const A=s.indexOf(p);A>-1&&s.splice(A,1)};return i.push(v),v}function f(){const{history:p}=window;!p.state||p.replaceState(J({},p.state,{scroll:Dr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function yo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Dr():null}}function mg(t){const{history:e,location:n}=window,r={value:xc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:pg()+t+a;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(v){console.error(v),n[f?"replace":"assign"](p)}}function o(a,l){const f=J({},e.state,yo(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=J({},s.value,e.state,{forward:a,scroll:Dr()});i(f.current,f,!0);const h=J({},yo(r.value,a,null),{position:f.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function _g(t){t=ag(t);const e=mg(t),n=gg(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:lg.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vg(t){return typeof t=="string"||t&&typeof t=="object"}function Uc(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fc=Symbol("");var bo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bo||(bo={}));function Jt(t,e){return J(new Error,{type:t,[Fc]:!0},e)}function je(t,e){return t instanceof Error&&Fc in t&&(e==null||!!(t.type&e))}const Eo="[^/]+?",yg={sensitive:!1,strict:!1,start:!0,end:!0},bg=/[.+*?^${}()[\]/\\]/g;function Eg(t,e){const n=J({},yg,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let v=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(bg,"\\$&"),v+=40;else if(p.type===1){const{value:A,repeatable:N,optional:H,regexp:D}=p;i.push({name:A,repeatable:N,optional:H});const O=D||Eo;if(O!==Eo){v+=10;try{new RegExp(`(${O})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${A}" (${O}): `+V.message)}}let x=N?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(x=H&&l.length<2?`(?:/${x})`:"/"+x),H&&(x+="?"),s+=x,v+=20,H&&(v+=-8),N&&(v+=-20),O===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const v=f[p]||"",A=i[p-1];h[A.name]=v&&A.repeatable?v.split("/"):v}return h}function a(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const v of p)if(v.type===0)f+=v.value;else if(v.type===1){const{value:A,repeatable:N,optional:H}=v,D=A in l?l[A]:"";if(Oe(D)&&!N)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const O=Oe(D)?D.join("/"):D;if(!O)if(H)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);f+=O}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Ig(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function $c(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ig(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Io(r))return 1;if(Io(s))return-1}return s.length-r.length}function Io(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wg={type:0,value:""},Tg=/[a-zA-Z0-9_]/;function Rg(t){if(!t)return[[]];if(t==="/")return[[wg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${l}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Tg.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Sg(t,e,n){const r=Eg(Rg(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Cg(t,e){const n=[],r=new Map;e=Ro({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const v=!p,A=Ag(f);A.aliasOf=p&&p.record;const N=Ro(e,f),H=[A];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const V of x)H.push(J({},A,{components:p?p.record.components:A.components,path:V,aliasOf:p?p.record:A}))}let D,O;for(const x of H){const{path:V}=x;if(h&&V[0]!=="/"){const te=h.record.path,U=te[te.length-1]==="/"?"":"/";x.path=h.record.path+(V&&U+V)}if(D=Sg(x,h,N),p?p.alias.push(D):(O=O||D,O!==D&&O.alias.push(D),v&&f.name&&!To(D)&&o(f.name)),Bc(D)&&a(D),A.children){const te=A.children;for(let U=0;U<te.length;U++)i(te[U],D,p&&p.children[U])}p=p||D}return O?()=>{o(O)}:_n}function o(f){if(Uc(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){const h=kg(f,n);n.splice(h,0,f),f.record.name&&!To(f)&&r.set(f.record.name,f)}function l(f,h){let p,v={},A,N;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Jt(1,{location:f});N=p.record.name,v=J(wo(h.params,p.keys.filter(O=>!O.optional).concat(p.parent?p.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&wo(f.params,p.keys.map(O=>O.name))),A=p.stringify(v)}else if(f.path!=null)A=f.path,p=n.find(O=>O.re.test(A)),p&&(v=p.parse(A),N=p.record.name);else{if(p=h.name?r.get(h.name):n.find(O=>O.re.test(h.path)),!p)throw Jt(1,{location:f,currentLocation:h});N=p.record.name,v=J({},h.params,f.params),A=p.stringify(v)}const H=[];let D=p;for(;D;)H.unshift(D.record),D=D.parent;return{name:N,path:A,params:v,matched:H,meta:Og(H)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function wo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ag(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Pg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Pg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function To(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Og(t){return t.reduce((e,n)=>J(e,n.meta),{})}function Ro(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function kg(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$c(t,e[i])<0?r=i:n=i+1}const s=Ng(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Ng(t){let e=t;for(;e=e.parent;)if(Bc(e)&&$c(t,e)===0)return e}function Bc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Dg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(kc," "),o=i.indexOf("="),c=Pn(o<0?i:i.slice(0,o)),a=o<0?null:Pn(i.slice(o+1));if(c in e){let l=e[c];Oe(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function So(t){let e="";for(let n in t){const r=t[n];if(n=Qp(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Oe(r)?r.map(i=>i&&Ts(i)):[r&&Ts(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Mg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Oe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Lg=Symbol(""),Co=Symbol(""),Mr=Symbol(""),Hc=Symbol(""),Ss=Symbol("");function sn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function it(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(Jt(4,{from:n,to:e})):p instanceof Error?a(p):vg(p)?a(Jt(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},f=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(f);t.length<3&&(h=h.then(l)),h.catch(p=>a(p))})}function ns(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(xg(a)){const f=(a.__vccOpts||a)[e];f&&i.push(it(f,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const h=Hp(f)?f.default:f;o.components[c]=h;const v=(h.__vccOpts||h)[e];return v&&it(v,n,r,o,c,s)()}))}}return i}function xg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ao(t){const e=Ue(Mr),n=Ue(Hc),r=Se(()=>{const a=Ht(t.to);return e.resolve(a)}),s=Se(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Gt.bind(null,f));if(p>-1)return p;const v=Po(a[l-2]);return l>1&&Po(f)===v&&h[h.length-1].path!==v?h.findIndex(Gt.bind(null,a[l-2])):p}),i=Se(()=>s.value>-1&&Bg(n.params,r.value.params)),o=Se(()=>s.value>-1&&s.value===n.matched.length-1&&Lc(n.params,r.value.params));function c(a={}){return $g(a)?e[Ht(t.replace)?"replace":"push"](Ht(t.to)).catch(_n):Promise.resolve()}return{route:r,href:Se(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Ug=pa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ao,setup(t,{slots:e}){const n=wr(Ao(t)),{options:r}=Ue(Mr),s=Se(()=>({[Oo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Oo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:xa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Fg=Ug;function $g(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Bg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Oe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Po(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Oo=(t,e,n)=>t!=null?t:e!=null?e:n,Hg=pa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ue(Ss),s=Se(()=>t.route||r.value),i=Ue(Co,0),o=Se(()=>{let l=Ht(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),c=Se(()=>s.value.matched[o.value]);Xn(Co,Se(()=>o.value+1)),Xn(Lg,c),Xn(Ss,s);const a=na();return Qn(()=>[a.value,c.value,t.name],([l,f,h],[p,v,A])=>{f&&(f.instances[h]=l,v&&v!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),l&&f&&(!v||!Gt(f,v)||!p)&&(f.enterCallbacks[h]||[]).forEach(N=>N(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=c.value,p=h&&h.components[f];if(!p)return ko(n.default,{Component:p,route:l});const v=h.props[f],A=v?v===!0?l.params:typeof v=="function"?v(l):v:null,H=xa(p,J({},A,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[f]=null)},ref:a}));return ko(n.default,{Component:H,route:l})||H}}});function ko(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jg=Hg;function Vg(t){const e=Cg(t.routes,t),n=t.parseQuery||Dg,r=t.stringifyQuery||So,s=t.history,i=sn(),o=sn(),c=sn(),a=Rl(tt);let l=tt;Ut&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=es.bind(null,_=>""+_),h=es.bind(null,eg),p=es.bind(null,Pn);function v(_,S){let R,P;return Uc(_)?(R=e.getRecordMatcher(_),P=S):P=_,e.addRoute(P,R)}function A(_){const S=e.getRecordMatcher(_);S&&e.removeRoute(S)}function N(){return e.getRoutes().map(_=>_.record)}function H(_){return!!e.getRecordMatcher(_)}function D(_,S){if(S=J({},S||a.value),typeof _=="string"){const d=ts(n,_,S.path),g=e.resolve({path:d.path},S),y=s.createHref(d.fullPath);return J(d,g,{params:p(g.params),hash:Pn(d.hash),redirectedFrom:void 0,href:y})}let R;if(_.path!=null)R=J({},_,{path:ts(n,_.path,S.path).path});else{const d=J({},_.params);for(const g in d)d[g]==null&&delete d[g];R=J({},_,{params:h(d)}),S.params=h(S.params)}const P=e.resolve(R,S),z=_.hash||"";P.params=f(p(P.params));const ee=rg(r,J({},_,{hash:Xp(z),path:P.path})),u=s.createHref(ee);return J({fullPath:ee,hash:z,query:r===So?Mg(_.query):_.query||{}},P,{redirectedFrom:void 0,href:u})}function O(_){return typeof _=="string"?ts(n,_,a.value.path):J({},_)}function x(_,S){if(l!==_)return Jt(8,{from:S,to:_})}function V(_){return re(_)}function te(_){return V(J(O(_),{replace:!0}))}function U(_){const S=_.matched[_.matched.length-1];if(S&&S.redirect){const{redirect:R}=S;let P=typeof R=="function"?R(_):R;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=O(P):{path:P},P.params={}),J({query:_.query,hash:_.hash,params:P.path!=null?{}:_.params},P)}}function re(_,S){const R=l=D(_),P=a.value,z=_.state,ee=_.force,u=_.replace===!0,d=U(R);if(d)return re(J(O(d),{state:typeof d=="object"?J({},z,d.state):z,force:ee,replace:u}),S||R);const g=R;g.redirectedFrom=S;let y;return!ee&&sg(r,P,R)&&(y=Jt(16,{to:g,from:P}),Ne(P,P,!0,!1)),(y?Promise.resolve(y):Ie(g,P)).catch(m=>je(m)?je(m,2)?m:Qe(m):K(m,g,P)).then(m=>{if(m){if(je(m,2))return re(J({replace:u},O(m.to),{state:typeof m.to=="object"?J({},z,m.to.state):z,force:ee}),S||g)}else m=yt(g,P,!0,u,z);return Xe(g,P,m),m})}function pe(_,S){const R=x(_,S);return R?Promise.reject(R):Promise.resolve()}function we(_){const S=Mt.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(_):_()}function Ie(_,S){let R;const[P,z,ee]=Wg(_,S);R=ns(P.reverse(),"beforeRouteLeave",_,S);for(const d of P)d.leaveGuards.forEach(g=>{R.push(it(g,_,S))});const u=pe.bind(null,_,S);return R.push(u),le(R).then(()=>{R=[];for(const d of i.list())R.push(it(d,_,S));return R.push(u),le(R)}).then(()=>{R=ns(z,"beforeRouteUpdate",_,S);for(const d of z)d.updateGuards.forEach(g=>{R.push(it(g,_,S))});return R.push(u),le(R)}).then(()=>{R=[];for(const d of ee)if(d.beforeEnter)if(Oe(d.beforeEnter))for(const g of d.beforeEnter)R.push(it(g,_,S));else R.push(it(d.beforeEnter,_,S));return R.push(u),le(R)}).then(()=>(_.matched.forEach(d=>d.enterCallbacks={}),R=ns(ee,"beforeRouteEnter",_,S,we),R.push(u),le(R))).then(()=>{R=[];for(const d of o.list())R.push(it(d,_,S));return R.push(u),le(R)}).catch(d=>je(d,8)?d:Promise.reject(d))}function Xe(_,S,R){c.list().forEach(P=>we(()=>P(_,S,R)))}function yt(_,S,R,P,z){const ee=x(_,S);if(ee)return ee;const u=S===tt,d=Ut?history.state:{};R&&(P||u?s.replace(_.fullPath,J({scroll:u&&d&&d.scroll},z)):s.push(_.fullPath,z)),a.value=_,Ne(_,S,R,u),Qe()}let ke;function tn(){ke||(ke=s.listen((_,S,R)=>{if(!$n.listening)return;const P=D(_),z=U(P);if(z){re(J(z,{replace:!0}),P).catch(_n);return}l=P;const ee=a.value;Ut&&dg(vo(ee.fullPath,R.delta),Dr()),Ie(P,ee).catch(u=>je(u,12)?u:je(u,2)?(re(u.to,P).then(d=>{je(d,20)&&!R.delta&&R.type===On.pop&&s.go(-1,!1)}).catch(_n),Promise.reject()):(R.delta&&s.go(-R.delta,!1),K(u,P,ee))).then(u=>{u=u||yt(P,ee,!1),u&&(R.delta&&!je(u,8)?s.go(-R.delta,!1):R.type===On.pop&&je(u,20)&&s.go(-1,!1)),Xe(P,ee,u)}).catch(_n)}))}let Nt=sn(),se=sn(),Y;function K(_,S,R){Qe(_);const P=se.list();return P.length?P.forEach(z=>z(_,S,R)):console.error(_),Promise.reject(_)}function He(){return Y&&a.value!==tt?Promise.resolve():new Promise((_,S)=>{Nt.add([_,S])})}function Qe(_){return Y||(Y=!_,tn(),Nt.list().forEach(([S,R])=>_?R(_):S()),Nt.reset()),_}function Ne(_,S,R,P){const{scrollBehavior:z}=t;if(!Ut||!z)return Promise.resolve();const ee=!R&&hg(vo(_.fullPath,0))||(P||!R)&&history.state&&history.state.scroll||null;return oa().then(()=>z(_,S,ee)).then(u=>u&&fg(u)).catch(u=>K(u,_,S))}const ge=_=>s.go(_);let Dt;const Mt=new Set,$n={currentRoute:a,listening:!0,addRoute:v,removeRoute:A,hasRoute:H,getRoutes:N,resolve:D,options:t,push:V,replace:te,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:se.add,isReady:He,install(_){const S=this;_.component("RouterLink",Fg),_.component("RouterView",jg),_.config.globalProperties.$router=S,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ht(a)}),Ut&&!Dt&&a.value===tt&&(Dt=!0,V(s.location).catch(z=>{}));const R={};for(const z in tt)Object.defineProperty(R,z,{get:()=>a.value[z],enumerable:!0});_.provide(Mr,S),_.provide(Hc,Xo(R)),_.provide(Ss,a);const P=_.unmount;Mt.add(_),_.unmount=function(){Mt.delete(_),Mt.size<1&&(l=tt,ke&&ke(),ke=null,a.value=tt,Dt=!1,Y=!1),P()}}};function le(_){return _.reduce((S,R)=>S.then(()=>we(R)),Promise.resolve())}return $n}function Wg(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>Gt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>Gt(l,a))||s.push(a))}return[n,r,s]}function Kg(){return Ue(Mr)}const zg={key:0},qg={key:1},Gg={__name:"App",setup(t){const e=Kg(),n=na(!0);Ah(ws(),function(s){s?n.value=!0:n.value=!1});const r=()=>{Ph(ws()),e.push("/")};return(s,i)=>{const o=_i("router-link"),c=_i("router-view");return Zn(),Hr("div",null,[gn("nav",null,[oe(o,{to:"/"},{default:on(()=>[nt(" Home ")]),_:1}),nt(" | "),gn("span",null,[oe(o,{to:"/feed"},{default:on(()=>[nt(" Feed ")]),_:1}),nt(" | ")]),n.value?(Zn(),Hr("span",zg,[gn("button",{onClick:r}," Logout ")])):(Zn(),Hr("span",qg,[oe(o,{to:"/register"},{default:on(()=>[nt(" Register ")]),_:1}),nt(" | "),oe(o,{to:"/sign-in"},{default:on(()=>[nt(" Login ")]),_:1})]))]),oe(c)])}}},Jg="modulepreload",No={},Yg="/",qn=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Yg}${r}`,r in No)return;No[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Jg,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((c,a)=>{o.addEventListener("load",c),o.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Xg=Vg({history:_g(),routes:[{path:"/",component:()=>qn(()=>import("./Home.0affe8e5.js"),[])},{path:"/register",component:()=>qn(()=>import("./Register.2aec6378.js"),[])},{path:"/sign-in",component:()=>qn(()=>import("./SignIn.ac4705cc.js"),[])},{path:"/feed",component:()=>qn(()=>import("./Feed.effd510c.js"),[])}]});var Qg="firebase",Zg="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(Qg,Zg,"app");const em={apiKey:"AIzaSyCFiHFqB2d_Zc-39XI08yXOhhqn4eRX69A",authDomain:"pairwise-69.firebaseapp.com",projectId:"pairwise-69",storageBucket:"pairwise-69.appspot.com",messagingSenderId:"521929544794",appId:"1:521929544794:web:83cf938c36c22f91fc7463"};qa(em);location.hostname==="localhost"&&gc(ws(),"http://localhost:9099");const jc=af(Gg);jc.use(Xg);jc.mount("#app");export{We as F,gn as a,im as b,Hr as c,rm as d,Ah as e,zl as f,ws as g,Zn as o,na as r,om as s,tm as t,Kg as u,sm as v,nm as w};
