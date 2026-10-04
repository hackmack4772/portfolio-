import{x as rc,y as Tr,z as sc,r as De,M as ac,B as oc,D as lc,E as cc,G as kr,v as Fi,u as ga,j as E,m as zt,H as Vi,I as uc,J as ja,A as dc,q as hc,s as sl,K as fc}from"./index-DspsRJ8-.js";import{a as al,S as Hi}from"./SectionWrapper-DNKEC1ux.js";import pc from"./ContactUs-Buu88mG5.js";import{A as qa}from"./ActionButton-Dd_-TA8h.js";import{F as mc}from"./FloatingBadge-pqBKVAkj.js";import{T as gc}from"./triangle-alert-BJ7GDL-V.js";import{S as ol}from"./server-zti-zK-B.js";import{Z as ll,D as cl}from"./zap-CMMgdhnf.js";import{N as ul}from"./network-C7w-xHIe.js";import{A as dl}from"./activity-DyiC7NwX.js";import{T as _a}from"./terminal-CicmDfy8.js";import{O as _c}from"./Overlay-BIuqwWOw.js";import{c as xc}from"./createLucideIcon-3Xx5rUrJ.js";import{X as vc}from"./x-I7qvKTTT.js";import{G as Sc}from"./github-WlS6BEGh.js";import{T as Mc,L as bc,I as Ec}from"./twitter-TopLbNtK.js";import"./HelmetWrapper-D-KGyH21.js";import"./GlowCard-BgUxNQiS.js";import"./phone-DluYEz7x.js";import"./mail-CbQiL1EX.js";function yc(...i){const e=!Array.isArray(i[0]),t=e?0:-1,n=i[0+t],r=i[1+t],s=i[2+t],a=i[3+t],o=rc(r,s,a);return e?o(n):o}function bs(i){const e=Tr(()=>sc(i)),{isStatic:t}=De.useContext(ac);if(t){const[,n]=De.useState(i);De.useEffect(()=>e.on("change",n),[])}return e}function hl(i,e){const t=bs(e()),n=()=>t.set(e());return n(),oc(()=>{const r=()=>cc.preRender(n,!1,!0),s=i.map(a=>a.on("change",r));return()=>{s.forEach(a=>a()),lc(n)}}),t}function Tc(i){kr.current=[],i();const e=hl(kr.current,i);return kr.current=void 0,e}function Es(i,e,t,n){if(typeof i=="function")return Tc(i);if(t!==void 0&&!Array.isArray(t)&&typeof e!="function")return Ac(i,e,t,n);const a=typeof e=="function"?e:yc(e,t,n),o=Array.isArray(i)?Ya(i,a):Ya([i],([l])=>a(l)),c=Array.isArray(i)?void 0:i.accelerate;return c&&!c.isTransformed&&typeof e!="function"&&Array.isArray(t)&&(n==null?void 0:n.clamp)!==!1&&(o.accelerate={...c,times:e,keyframes:t,isTransformed:!0}),o}function Ya(i,e){const t=Tr(()=>[]);return hl(i,()=>{t.length=0;const n=i.length;for(let r=0;r<n;r++)t[r]=i[r].get();return e(t)})}function Ac(i,e,t,n){const r=Tr(()=>Object.keys(t)),s=Tr(()=>({}));for(const a of r)s[a]=Es(i,e,t[a],n);return s}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Rc=xc("ShieldAlert",wc);function Cc({children:i}){const e=bs(150),t=bs(150),n=Es(t,[0,300],[15,-15]),r=Es(e,[0,300],[-15,15]),s=o=>{const c=o.currentTarget.getBoundingClientRect(),l=o.clientX-c.left,f=o.clientY-c.top,p=l/c.width*300,u=f/c.height*300;e.set(p),t.set(u)},a=()=>{e.set(150),t.set(150)};return E.jsx(zt.div,{onMouseMove:s,onMouseLeave:a,style:{rotateX:n,rotateY:r,transformStyle:"preserve-3d"},className:"relative flex w-full cursor-pointer justify-center",whileHover:{scale:1.03},transition:{type:"spring",stiffness:350,damping:25},children:i})}function Pc(){Fi("MyJourney");const{home2:i}=ga(),e=i||{heading:"My Journey",introduction:"",skills:"",hobbies:"",imageUrl:""},t=n=>n?n.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi,"").trim():"";return E.jsxs("div",{className:"grid w-full items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 xl:gap-24",children:[E.jsxs(zt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"flex min-w-0 flex-col",children:[E.jsx(al,{subtitle:"BIOGRAPHY",title:"Let me",highlight:"Introduce Myself",description:"A summary of my engineering background and technical expertise",align:"left",className:"mb-6 md:mb-8 font-mono"}),E.jsx("div",{className:"my-journey-introduction flex max-w-4xl flex-col gap-5 text-left font-sans text-xs leading-relaxed text-text-muted md:text-sm",dangerouslySetInnerHTML:{__html:t(e.introduction)}})]}),E.jsx(zt.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:.15},className:"flex w-full items-center justify-center lg:justify-end",children:E.jsx(Cc,{children:E.jsxs("div",{style:{transform:"translateZ(30px)"},className:"group relative h-64 w-64 rounded-2xl bg-gradient-to-tr from-primary to-accent p-[2px] shadow-2xl md:h-72 md:w-72",children:[E.jsx("div",{className:"absolute top-2 left-2 text-[8px] font-mono text-accent/60 group-hover:text-accent pointer-events-none select-none z-20 transition-colors",children:"[ 0x01_AVATAR ]"}),E.jsx("div",{className:"absolute bottom-2 right-2 text-[8px] font-mono text-primary/60 group-hover:text-accent pointer-events-none select-none z-20 transition-colors",children:"// RECON: OK"}),E.jsxs("div",{className:"absolute inset-0 bg-bg-base rounded-2xl overflow-hidden flex items-center justify-center",children:[e.imageUrl?E.jsx("img",{src:e.imageUrl,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",alt:"Aamir Saleem Lone Avatar"}):E.jsx("div",{className:"w-full h-full bg-gradient-to-br from-card-base to-bg-sub flex items-center justify-center",children:E.jsx("span",{className:"text-[10px] font-mono tracking-widest text-text-muted",children:"IMAGE_NULL"})}),E.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none group-hover:opacity-40 transition-opacity"})]}),E.jsx("div",{className:"absolute -inset-1 border border-accent/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"}),E.jsx("div",{className:"absolute inset-0 border border-border-base/50 rounded-2xl pointer-events-none group-hover:border-accent/40 transition-colors duration-500"})]})})})]})}function Nc({typewriterStrings:i=["Full-Stack Engineer","MERN Developer"]}){Fi("Type");const[e,t]=De.useState(0),[n,r]=De.useState(""),[s,a]=De.useState(!1),[o,c]=De.useState(100);De.useEffect(()=>{if(!i||i.length===0)return;const f=i[e],u=setTimeout(()=>{s?(r(f.substring(0,n.length-1)),c(45),n===""&&(a(!1),t(m=>(m+1)%i.length),c(500))):(r(f.substring(0,n.length+1)),c(100),n===f&&(a(!0),c(2e3)))},o);return()=>clearTimeout(u)},[n,s,e,i,o]);const l=De.useMemo(()=>Math.max(...(i!=null&&i.length?i:[""]).map(f=>f.length)),[i]);return E.jsxs("div",{className:"inline-flex min-h-10 items-center justify-center text-center md:min-h-12",children:[E.jsx("span",{className:"inline-block max-w-full bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-center font-mono text-xl font-bold text-transparent select-none md:text-3xl lg:text-4xl",style:{width:`min(100%, ${l}ch)`},children:n}),E.jsx("span",{className:"ml-1 font-mono text-xl font-bold text-accent animate-[pulse_1s_infinite] md:text-3xl lg:text-4xl",children:"|"})]})}function Lc({title:i="bash",children:e,className:t=""}){return E.jsxs("div",{className:`w-full rounded-2xl glass-premium-dark relative overflow-hidden flex flex-col font-mono text-xs text-text-muted ${t}`,children:[E.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 bg-white/[0.015] border-b border-white/[0.06] select-none",children:[E.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[E.jsx("div",{className:"w-3 h-3 rounded-full bg-[#ff5f56]"}),E.jsx("div",{className:"w-3 h-3 rounded-full bg-[#ffbd2e]"}),E.jsx("div",{className:"w-3 h-3 rounded-full bg-[#27c93f]"})]}),E.jsxs("div",{className:"text-[10px] font-mono tracking-widest uppercase text-text-muted/70 flex items-center gap-1",children:[E.jsx("span",{className:"text-accent",children:">"})," ",i]}),E.jsx("div",{className:"w-12 flex justify-end",children:E.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(12,251,255,0.8)]"})})]}),E.jsx("div",{className:"p-6 flex-grow overflow-auto no-scrollbar font-mono text-left leading-relaxed text-text-muted/90",children:e})]})}function Dc(){return E.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none select-none -z-10"})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xa="184",Ic=0,$a=1,Uc=2,vr=1,Fc=2,Ri=3,Nn=0,Pt=1,fn=2,mn=0,ci=1,Ka=2,Za=3,Ja=4,Oc=5,Bn=100,Bc=101,zc=102,kc=103,Gc=104,Vc=200,Hc=201,Wc=202,Xc=203,ys=204,Ts=205,jc=206,qc=207,Yc=208,$c=209,Kc=210,Zc=211,Jc=212,Qc=213,eu=214,As=0,ws=1,Rs=2,di=3,Cs=4,Ps=5,Ns=6,Ls=7,fl=0,tu=1,nu=2,nn=0,pl=1,ml=2,gl=3,_l=4,xl=5,vl=6,Sl=7,Ml=300,Vn=301,hi=302,Gr=303,Vr=304,Ir=306,Ds=1e3,pn=1001,Is=1002,bt=1003,iu=1004,Wi=1005,At=1006,Hr=1007,kn=1008,Ft=1009,bl=1010,El=1011,Li=1012,va=1013,sn=1014,en=1015,_n=1016,Sa=1017,Ma=1018,Di=1020,yl=35902,Tl=35899,Al=1021,wl=1022,Yt=1023,xn=1026,Gn=1027,Rl=1028,ba=1029,Hn=1030,Ea=1031,ya=1033,Sr=33776,Mr=33777,br=33778,Er=33779,Us=35840,Fs=35841,Os=35842,Bs=35843,zs=36196,ks=37492,Gs=37496,Vs=37488,Hs=37489,Ar=37490,Ws=37491,Xs=37808,js=37809,qs=37810,Ys=37811,$s=37812,Ks=37813,Zs=37814,Js=37815,Qs=37816,ea=37817,ta=37818,na=37819,ia=37820,ra=37821,sa=36492,aa=36494,oa=36495,la=36283,ca=36284,wr=36285,ua=36286,ru=3200,Qa=0,su=1,Cn="",kt="srgb",Rr="srgb-linear",Cr="linear",Ze="srgb",Yn=7680,eo=519,au=512,ou=513,lu=514,Ta=515,cu=516,uu=517,Aa=518,du=519,to=35044,no="300 es",tn=2e3,Ii=2001;function hu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){const i=Pr("canvas");return i.style.display="block",i}const io={};function ro(...i){const e="THREE."+i.shift();console.log(e,...i)}function Cl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=Cl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=Cl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function da(...i){const e=i.join(" ");e in io||(io[e]=!0,Ce(...i))}function pu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const mu={[As]:ws,[Rs]:Ns,[Cs]:Ls,[di]:Ps,[ws]:As,[Ns]:Rs,[Ls]:Cs,[Ps]:di};class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let so=1234567;const Pi=Math.PI/180,Ui=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function wa(i,e){return(i%e+e)%e}function gu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function _u(i,e,t){return i!==e?(t-i)/(e-i):0}function Ni(i,e,t){return(1-t)*i+t*e}function xu(i,e,t,n){return Ni(i,e,1-Math.exp(-t*n))}function vu(i,e=1){return e-Math.abs(wa(i,e*2)-e)}function Su(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Eu(i,e){return i+Math.random()*(e-i)}function yu(i){return i*(.5-Math.random())}function Tu(i){i!==void 0&&(so=i);let e=so+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Au(i){return i*Pi}function wu(i){return i*Ui}function Ru(i){return(i&i-1)===0&&i!==0}function Cu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),f=a((e+n)/2),p=s((e-n)/2),u=a((e-n)/2),m=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*f,c*p,c*u,o*l);break;case"YZY":i.set(c*u,o*f,c*p,o*l);break;case"ZXZ":i.set(c*p,c*u,o*f,o*l);break;case"XZX":i.set(o*f,c*_,c*m,o*l);break;case"YXY":i.set(c*m,o*f,c*_,o*l);break;case"ZYZ":i.set(c*_,c*m,o*f,o*l);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wr={DEG2RAD:Pi,RAD2DEG:Ui,generateUUID:mi,clamp:We,euclideanModulo:wa,mapLinear:gu,inverseLerp:_u,lerp:Ni,damp:xu,pingpong:vu,smoothstep:Su,smootherstep:Mu,randInt:bu,randFloat:Eu,randFloatSpread:yu,seededRandom:Tu,degToRad:Au,radToDeg:wu,isPowerOfTwo:Ru,ceilPowerOfTwo:Cu,floorPowerOfTwo:Pu,setQuaternionFromProperEuler:Nu,normalize:wt,denormalize:li},Da=class Da{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Da.prototype.isVector2=!0;let Ke=Da;class gi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],f=n[r+2],p=n[r+3],u=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(p!==S||c!==u||l!==m||f!==_){let h=c*u+l*m+f*_+p*S;h<0&&(u=-u,m=-m,_=-_,S=-S,h=-h);let d=1-o;if(h<.9995){const M=Math.acos(h),T=Math.sin(M);d=Math.sin(d*M)/T,o=Math.sin(o*M)/T,c=c*d+u*o,l=l*d+m*o,f=f*d+_*o,p=p*d+S*o}else{c=c*d+u*o,l=l*d+m*o,f=f*d+_*o,p=p*d+S*o;const M=1/Math.sqrt(c*c+l*l+f*f+p*p);c*=M,l*=M,f*=M,p*=M}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],f=n[r+3],p=s[a],u=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+f*p+c*m-l*u,e[t+1]=c*_+f*u+l*p-o*m,e[t+2]=l*_+f*m+o*u-c*p,e[t+3]=f*_-o*p-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(r/2),p=o(s/2),u=c(n/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=u*f*p+l*m*_,this._y=l*m*p-u*f*_,this._z=l*f*_+u*m*p,this._w=l*f*p-u*m*_;break;case"YXZ":this._x=u*f*p+l*m*_,this._y=l*m*p-u*f*_,this._z=l*f*_-u*m*p,this._w=l*f*p+u*m*_;break;case"ZXY":this._x=u*f*p-l*m*_,this._y=l*m*p+u*f*_,this._z=l*f*_+u*m*p,this._w=l*f*p-u*m*_;break;case"ZYX":this._x=u*f*p-l*m*_,this._y=l*m*p+u*f*_,this._z=l*f*_-u*m*p,this._w=l*f*p+u*m*_;break;case"YZX":this._x=u*f*p+l*m*_,this._y=l*m*p+u*f*_,this._z=l*f*_-u*m*p,this._w=l*f*p-u*m*_;break;case"XZY":this._x=u*f*p-l*m*_,this._y=l*m*p-u*f*_,this._z=l*f*_+u*m*p,this._w=l*f*p+u*m*_;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],p=t[10],u=n+o+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(f-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-r*o,this._w=a*f-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ia=class Ia{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ao.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ao.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),f=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+c*l+a*p-o*f,this.y=n+c*f+o*l-s*p,this.z=r+c*p+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ia.prototype.isVector3=!0;let z=Ia;const Xr=new z,ao=new gi,Ua=class Ua{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],p=n[7],u=n[2],m=n[5],_=n[8],S=r[0],h=r[3],d=r[6],M=r[1],T=r[4],y=r[7],N=r[2],A=r[5],U=r[8];return s[0]=a*S+o*M+c*N,s[3]=a*h+o*T+c*A,s[6]=a*d+o*y+c*U,s[1]=l*S+f*M+p*N,s[4]=l*h+f*T+p*A,s[7]=l*d+f*y+p*U,s[2]=u*S+m*M+_*N,s[5]=u*h+m*T+_*A,s[8]=u*d+m*y+_*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],p=f*a-o*l,u=o*c-f*s,m=l*s-a*c,_=t*p+n*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=p*S,e[1]=(r*l-f*n)*S,e[2]=(o*n-r*a)*S,e[3]=u*S,e[4]=(f*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=m*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jr.makeScale(e,t)),this}rotate(e){return this.premultiply(jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ua.prototype.isMatrix3=!0;let Ue=Ua;const jr=new Ue,oo=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lo=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lu(){const i={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ze&&(r.r=gn(r.r),r.g=gn(r.g),r.b=gn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cn?Cr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return da("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return da("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rr]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}const Xe=Lu();function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $n;class Du{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$n===void 0&&($n=Pr("canvas")),$n.width=e.width,$n.height=e.height;const r=$n.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=$n}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gn(t[n]/255)*255):t[n]=gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Iu=0;class Ra{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qr(r[a].image)):s.push(qr(r[a]))}else s=qr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Du.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Uu=0;const Yr=new z;class Ct extends Xn{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=pn,r=pn,s=At,a=kn,o=Yt,c=Ft,l=Ct.DEFAULT_ANISOTROPY,f=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=mi(),this.name="",this.source=new Ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Ml;Ct.DEFAULT_ANISOTROPY=1;const Fa=class Fa{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],f=c[4],p=c[8],u=c[1],m=c[5],_=c[9],S=c[2],h=c[6],d=c[10];if(Math.abs(f-u)<.01&&Math.abs(p-S)<.01&&Math.abs(_-h)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+S)<.1&&Math.abs(_+h)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(m+1)/2,N=(d+1)/2,A=(f+u)/4,U=(p+S)/4,v=(_+h)/4;return T>y&&T>N?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=A/n,s=U/n):y>N?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=v/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=U/s,r=v/s),this.set(n,r,s,t),this}let M=Math.sqrt((h-_)*(h-_)+(p-S)*(p-S)+(u-f)*(u-f));return Math.abs(M)<.001&&(M=1),this.x=(h-_)/M,this.y=(p-S)/M,this.z=(u-f)/M,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fa.prototype.isVector4=!0;let dt=Fa;class Fu extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Ct(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ra(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends Fu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pl extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ou extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dr=class Dr{constructor(e,t,n,r,s,a,o,c,l,f,p,u,m,_,S,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,f,p,u,m,_,S,h)}set(e,t,n,r,s,a,o,c,l,f,p,u,m,_,S,h){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=f,d[10]=p,d[14]=u,d[3]=m,d[7]=_,d[11]=S,d[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),a=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=a*f,m=a*p,_=o*f,S=o*p;t[0]=c*f,t[4]=-c*p,t[8]=l,t[1]=m+_*l,t[5]=u-S*l,t[9]=-o*c,t[2]=S-u*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*f,m=c*p,_=l*f,S=l*p;t[0]=u+S*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*p,t[5]=a*f,t[9]=-o,t[2]=m*o-_,t[6]=S+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*f,m=c*p,_=l*f,S=l*p;t[0]=u-S*o,t[4]=-a*p,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*f,t[9]=S-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*f,m=a*p,_=o*f,S=o*p;t[0]=c*f,t[4]=_*l-m,t[8]=u*l+S,t[1]=c*p,t[5]=S*l+u,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,m=a*l,_=o*c,S=o*l;t[0]=c*f,t[4]=S-u*p,t[8]=_*p+m,t[1]=p,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=m*p+_,t[10]=u-S*p}else if(e.order==="XZY"){const u=a*c,m=a*l,_=o*c,S=o*l;t[0]=c*f,t[4]=-p,t[8]=l*f,t[1]=u*p+S,t[5]=a*f,t[9]=m*p-_,t[2]=_*p-m,t[6]=o*f,t[10]=S*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bu,e,zu)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),En.crossVectors(n,It),En.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),En.crossVectors(n,It)),En.normalize(),Xi.crossVectors(It,En),r[0]=En.x,r[4]=Xi.x,r[8]=It.x,r[1]=En.y,r[5]=Xi.y,r[9]=It.y,r[2]=En.z,r[6]=Xi.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],p=n[5],u=n[9],m=n[13],_=n[2],S=n[6],h=n[10],d=n[14],M=n[3],T=n[7],y=n[11],N=n[15],A=r[0],U=r[4],v=r[8],w=r[12],O=r[1],R=r[5],k=r[9],H=r[13],W=r[2],D=r[6],L=r[10],C=r[14],j=r[3],Y=r[7],q=r[11],ee=r[15];return s[0]=a*A+o*O+c*W+l*j,s[4]=a*U+o*R+c*D+l*Y,s[8]=a*v+o*k+c*L+l*q,s[12]=a*w+o*H+c*C+l*ee,s[1]=f*A+p*O+u*W+m*j,s[5]=f*U+p*R+u*D+m*Y,s[9]=f*v+p*k+u*L+m*q,s[13]=f*w+p*H+u*C+m*ee,s[2]=_*A+S*O+h*W+d*j,s[6]=_*U+S*R+h*D+d*Y,s[10]=_*v+S*k+h*L+d*q,s[14]=_*w+S*H+h*C+d*ee,s[3]=M*A+T*O+y*W+N*j,s[7]=M*U+T*R+y*D+N*Y,s[11]=M*v+T*k+y*L+N*q,s[15]=M*w+T*H+y*C+N*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],p=e[6],u=e[10],m=e[14],_=e[3],S=e[7],h=e[11],d=e[15],M=c*m-l*u,T=o*m-l*p,y=o*u-c*p,N=a*m-l*f,A=a*u-c*f,U=a*p-o*f;return t*(S*M-h*T+d*y)-n*(_*M-h*N+d*A)+r*(_*T-S*N+d*U)-s*(_*y-S*A+h*U)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],p=e[9],u=e[10],m=e[11],_=e[12],S=e[13],h=e[14],d=e[15],M=t*o-n*a,T=t*c-r*a,y=t*l-s*a,N=n*c-r*o,A=n*l-s*o,U=r*l-s*c,v=f*S-p*_,w=f*h-u*_,O=f*d-m*_,R=p*h-u*S,k=p*d-m*S,H=u*d-m*h,W=M*H-T*k+y*R+N*O-A*w+U*v;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/W;return e[0]=(o*H-c*k+l*R)*D,e[1]=(r*k-n*H-s*R)*D,e[2]=(S*U-h*A+d*N)*D,e[3]=(u*A-p*U-m*N)*D,e[4]=(c*O-a*H-l*w)*D,e[5]=(t*H-r*O+s*w)*D,e[6]=(h*y-_*U-d*T)*D,e[7]=(f*U-u*y+m*T)*D,e[8]=(a*k-o*O+l*v)*D,e[9]=(n*O-t*k-s*v)*D,e[10]=(_*A-S*y+d*M)*D,e[11]=(p*y-f*A-m*M)*D,e[12]=(o*w-a*R-c*v)*D,e[13]=(t*R-n*w+r*v)*D,e[14]=(S*T-_*N-h*M)*D,e[15]=(f*N-p*T+u*M)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+n,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,p=o+o,u=s*l,m=s*f,_=s*p,S=a*f,h=a*p,d=o*p,M=c*l,T=c*f,y=c*p,N=n.x,A=n.y,U=n.z;return r[0]=(1-(S+d))*N,r[1]=(m+y)*N,r[2]=(_-T)*N,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(u+d))*A,r[6]=(h+M)*A,r[7]=0,r[8]=(_+T)*U,r[9]=(h-M)*U,r[10]=(1-(u+S))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Kn.set(r[0],r[1],r[2]).length();const o=Kn.set(r[4],r[5],r[6]).length(),c=Kn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Wt.copy(this);const l=1/a,f=1/o,p=1/c;return Wt.elements[0]*=l,Wt.elements[1]*=l,Wt.elements[2]*=l,Wt.elements[4]*=f,Wt.elements[5]*=f,Wt.elements[6]*=f,Wt.elements[8]*=p,Wt.elements[9]*=p,Wt.elements[10]*=p,t.setFromRotationMatrix(Wt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=tn,c=!1){const l=this.elements,f=2*s/(t-e),p=2*s/(n-r),u=(t+e)/(t-e),m=(n+r)/(n-r);let _,S;if(c)_=s/(a-s),S=a*s/(a-s);else if(o===tn)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Ii)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=tn,c=!1){const l=this.elements,f=2/(t-e),p=2/(n-r),u=-(t+e)/(t-e),m=-(n+r)/(n-r);let _,S;if(c)_=1/(a-s),S=a/(a-s);else if(o===tn)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===Ii)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Dr.prototype.isMatrix4=!0;let lt=Dr;const Kn=new z,Wt=new lt,Bu=new z(0,0,0),zu=new z(1,1,1),En=new z,Xi=new z,It=new z,co=new lt,uo=new gi;class Wn{constructor(e=0,t=0,n=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],p=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(co,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uo.setFromEuler(this),this.setFromQuaternion(uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Nl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ku=0;const ho=new z,Zn=new gi,ln=new lt,ji=new z,vi=new z,Gu=new z,Vu=new gi,fo=new z(1,0,0),po=new z(0,1,0),mo=new z(0,0,1),go={type:"added"},Hu={type:"removed"},Jn={type:"childadded",child:null},$r={type:"childremoved",child:null};class Mt extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new z,t=new Wn,n=new gi,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ue}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(fo,e)}rotateY(e){return this.rotateOnAxis(po,e)}rotateZ(e){return this.rotateOnAxis(mo,e)}translateOnAxis(e,t){return ho.copy(e).applyQuaternion(this.quaternion),this.position.add(ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fo,e)}translateY(e){return this.translateOnAxis(po,e)}translateZ(e){return this.translateOnAxis(mo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ji.copy(e):ji.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(vi,ji,this.up):ln.lookAt(ji,vi,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),Zn.setFromRotationMatrix(ln),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(go),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hu),$r.child=e,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(go),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,e,Gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,Vu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),p=a(e.shapes),u=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new z(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qi extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wu={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const h=t.getJointPose(S,n),d=this._getHandJoint(l,S);h!==null&&(d.matrix.fromArray(h.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=h.radius),d.visible=h!==null}const f=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=f.position.distanceTo(p.position),m=.02,_=.005;l.inputState.pinching&&u>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wu)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function Zr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=wa(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Zr(a,s,e+1/3),this.g=Zr(a,s,e),this.b=Zr(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=kt){function n(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=Ll[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this}copyLinearToSRGB(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Xe.workingToColorSpace(Tt.copy(this),e),Math.round(We(Tt.r*255,0,255))*65536+Math.round(We(Tt.g*255,0,255))*256+Math.round(We(Tt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Tt.copy(this),t);const n=Tt.r,r=Tt.g,s=Tt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=f<=.5?p/(a+o):p/(2-a-o),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=kt){Xe.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,r=Tt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(Yi);const n=Ni(yn.h,Yi.h,t),r=Ni(yn.s,Yi.s,t),s=Ni(yn.l,Yi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ye;Ye.NAMES=Ll;class Ca{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new Ca(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xu extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xt=new z,cn=new z,Jr=new z,un=new z,Qn=new z,ei=new z,_o=new z,Qr=new z,es=new z,ts=new z,ns=new dt,is=new dt,rs=new dt;class qt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xt.subVectors(r,t),cn.subVectors(n,t),Jr.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(cn),c=Xt.dot(Jr),l=cn.dot(cn),f=cn.dot(Jr),p=a*l-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,m=(l*c-o*f)*u,_=(a*f-o*c)*u;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,un.x),c.addScaledVector(a,un.y),c.addScaledVector(o,un.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return ns.setScalar(0),is.setScalar(0),rs.setScalar(0),ns.fromBufferAttribute(e,t),is.fromBufferAttribute(e,n),rs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ns,s.x),a.addScaledVector(is,s.y),a.addScaledVector(rs,s.z),a}static isFrontFacing(e,t,n,r){return Xt.subVectors(n,t),cn.subVectors(e,t),Xt.cross(cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Xt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Qn.subVectors(r,n),ei.subVectors(s,n),Qr.subVectors(e,n);const c=Qn.dot(Qr),l=ei.dot(Qr);if(c<=0&&l<=0)return t.copy(n);es.subVectors(e,r);const f=Qn.dot(es),p=ei.dot(es);if(f>=0&&p<=f)return t.copy(r);const u=c*p-f*l;if(u<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(Qn,a);ts.subVectors(e,s);const m=Qn.dot(ts),_=ei.dot(ts);if(_>=0&&m<=_)return t.copy(s);const S=m*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(ei,o);const h=f*_-m*p;if(h<=0&&p-f>=0&&m-_>=0)return _o.subVectors(s,r),o=(p-f)/(p-f+(m-_)),t.copy(r).addScaledVector(_o,o);const d=1/(h+S+u);return a=S*d,o=u*d,t.copy(n).addScaledVector(Qn,a).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(s,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$i.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(e.matrixWorld),this.union($i)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),Ki.subVectors(this.max,Si),ti.subVectors(e.a,Si),ni.subVectors(e.b,Si),ii.subVectors(e.c,Si),Tn.subVectors(ni,ti),An.subVectors(ii,ni),Dn.subVectors(ti,ii);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Dn.z,Dn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Dn.z,0,-Dn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Dn.y,Dn.x,0];return!ss(t,ti,ni,ii,Ki)||(t=[1,0,0,0,1,0,0,0,1],!ss(t,ti,ni,ii,Ki))?!1:(Zi.crossVectors(Tn,An),t=[Zi.x,Zi.y,Zi.z],ss(t,ti,ni,ii,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dn=[new z,new z,new z,new z,new z,new z,new z,new z],jt=new z,$i=new Oi,ti=new z,ni=new z,ii=new z,Tn=new z,An=new z,Dn=new z,Si=new z,Ki=new z,Zi=new z,In=new z;function ss(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){In.fromArray(i,s);const o=r.x*Math.abs(In.x)+r.y*Math.abs(In.y)+r.z*Math.abs(In.z),c=e.dot(In),l=t.dot(In),f=n.dot(In);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const mt=new z,Ji=new Ke;let ju=0;class Vt extends Xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ju++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=to,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==to&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Dl extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Il extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const qu=new Oi,Mi=new z,as=new z;class Bi{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mi.subVectors(e,this.center);const t=Mi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Mi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(as.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mi.copy(e.center).add(as)),this.expandByPoint(Mi.copy(e.center).sub(as))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Yu=0;const Bt=new lt,os=new Mt,ri=new z,Ut=new Oi,bi=new Oi,St=new z;class Nt extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hu(e)?Il:Dl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return os.lookAt(e),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];bi.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Ut.min,bi.min),Ut.expandByPoint(St),St.addVectors(Ut.max,bi.max),Ut.expandByPoint(St)):(Ut.expandByPoint(bi.min),Ut.expandByPoint(bi.max))}Ut.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)St.fromBufferAttribute(o,l),c&&(ri.fromBufferAttribute(e,l),St.add(ri)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new z,c[v]=new z;const l=new z,f=new z,p=new z,u=new Ke,m=new Ke,_=new Ke,S=new z,h=new z;function d(v,w,O){l.fromBufferAttribute(n,v),f.fromBufferAttribute(n,w),p.fromBufferAttribute(n,O),u.fromBufferAttribute(s,v),m.fromBufferAttribute(s,w),_.fromBufferAttribute(s,O),f.sub(l),p.sub(l),m.sub(u),_.sub(u);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(R),h.copy(p).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(R),o[v].add(S),o[w].add(S),o[O].add(S),c[v].add(h),c[w].add(h),c[O].add(h))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,w=M.length;v<w;++v){const O=M[v],R=O.start,k=O.count;for(let H=R,W=R+k;H<W;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new z,y=new z,N=new z,A=new z;function U(v){N.fromBufferAttribute(r,v),A.copy(N);const w=o[v];T.copy(w),T.sub(N.multiplyScalar(N.dot(w))).normalize(),y.crossVectors(A,w);const R=y.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,R)}for(let v=0,w=M.length;v<w;++v){const O=M[v],R=O.start,k=O.count;for(let H=R,W=R+k;H<W;H+=3)U(e.getX(H+0)),U(e.getX(H+1)),U(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new z,s=new z,a=new z,o=new z,c=new z,l=new z,f=new z,p=new z;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),S=e.getX(u+1),h=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,h),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,h),o.add(f),c.add(f),l.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,p=o.normalized,u=new l.constructor(c.length*f);let m=0,_=0;for(let S=0,h=c.length;S<h;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*f;for(let d=0;d<f;d++)u[_++]=l[m++]}return new Vt(u,f,p)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,p=l.length;f<p;f++){const u=l[f],m=e(u,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let p=0,u=l.length;p<u;p++){const m=l[p];f.push(m.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],p=s[l];for(let u=0,m=p.length;u<m;u++)f.push(p[u].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $u=0;class _i extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=ci,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ys,this.blendDst=Ts,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ys&&(n.blendSrc=this.blendSrc),this.blendDst!==Ts&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hn=new z,ls=new z,Qi=new z,wn=new z,cs=new z,er=new z,us=new z;class Pa{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ls.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(ls);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),o=wn.dot(this.direction),c=-wn.dot(Qi),l=wn.lengthSq(),f=Math.abs(1-a*a);let p,u,m,_;if(f>0)if(p=a*c-o,u=a*o-c,_=s*f,p>=0)if(u>=-_)if(u<=_){const S=1/f;p*=S,u*=S,m=p*(p+a*u+2*o)+u*(a*p+u+2*c)+l}else u=s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;else u=-s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;else u<=-_?(p=Math.max(0,-(-a*s+o)),u=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+u*(u+2*c)+l):u<=_?(p=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(p=Math.max(0,-(a*s+o)),u=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+u*(u+2*c)+l);else u=a>0?-s:s,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ls).addScaledVector(Qi,u),m}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),r=hn.dot(hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,r,s){cs.subVectors(t,e),er.subVectors(n,e),us.crossVectors(cs,er);let a=this.direction.dot(us),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const c=o*this.direction.dot(er.crossVectors(wn,er));if(c<0)return null;const l=o*this.direction.dot(cs.cross(wn));if(l<0||c+l>a)return null;const f=-o*wn.dot(us);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ul extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xo=new lt,Un=new Pa,tr=new Bi,vo=new z,nr=new z,ir=new z,rr=new z,ds=new z,sr=new z,So=new z,ar=new z;class vn extends Mt{constructor(e=new Nt,t=new Ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){sr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],p=s[c];f!==0&&(ds.fromBufferAttribute(p,e),a?sr.addScaledVector(ds,f):sr.addScaledVector(ds.sub(t),f))}t.add(sr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(tr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(tr,vo)===null||Un.origin.distanceToSquared(vo)>(e.far-e.near)**2))&&(xo.copy(s).invert(),Un.copy(e.ray).applyMatrix4(xo),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const h=u[_],d=a[h.materialIndex],M=Math.max(h.start,m.start),T=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let y=M,N=T;y<N;y+=3){const A=o.getX(y),U=o.getX(y+1),v=o.getX(y+2);r=or(this,d,e,n,l,f,p,A,U,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let h=_,d=S;h<d;h+=3){const M=o.getX(h),T=o.getX(h+1),y=o.getX(h+2);r=or(this,a,e,n,l,f,p,M,T,y),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const h=u[_],d=a[h.materialIndex],M=Math.max(h.start,m.start),T=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let y=M,N=T;y<N;y+=3){const A=y,U=y+1,v=y+2;r=or(this,d,e,n,l,f,p,A,U,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let h=_,d=S;h<d;h+=3){const M=h,T=h+1,y=h+2;r=or(this,a,e,n,l,f,p,M,T,y),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function Ku(i,e,t,n,r,s,a,o){let c;if(e.side===Pt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Nn,o),c===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ar);return l<t.near||l>t.far?null:{distance:l,point:ar.clone(),object:i}}function or(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,nr),i.getVertexPosition(c,ir),i.getVertexPosition(l,rr);const f=Ku(i,e,t,n,nr,ir,rr,So);if(f){const p=new z;qt.getBarycoord(So,nr,ir,rr,p),r&&(f.uv=qt.getInterpolatedAttribute(r,o,c,l,p,new Ke)),s&&(f.uv1=qt.getInterpolatedAttribute(s,o,c,l,p,new Ke)),a&&(f.normal=qt.getInterpolatedAttribute(a,o,c,l,p,new z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new z,materialIndex:0};qt.getNormal(nr,ir,rr,u.normal),f.face=u,f.barycoord=p}return f}class Zu extends Ct{constructor(e=null,t=1,n=1,r,s,a,o,c,l=bt,f=bt,p,u){super(null,a,o,c,l,f,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hs=new z,Ju=new z,Qu=new Ue;class On{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=hs.subVectors(n,t).cross(Ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(hs),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qu.getNormalMatrix(e),r=this.coplanarPoint(hs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Bi,ed=new Ke(.5,.5),lr=new z;class Na{constructor(e=new On,t=new On,n=new On,r=new On,s=new On,a=new On){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],p=s[5],u=s[6],m=s[7],_=s[8],S=s[9],h=s[10],d=s[11],M=s[12],T=s[13],y=s[14],N=s[15];if(r[0].setComponents(l-a,m-f,d-_,N-M).normalize(),r[1].setComponents(l+a,m+f,d+_,N+M).normalize(),r[2].setComponents(l+o,m+p,d+S,N+T).normalize(),r[3].setComponents(l-o,m-p,d-S,N-T).normalize(),n)r[4].setComponents(c,u,h,y).normalize(),r[5].setComponents(l-c,m-u,d-h,N-y).normalize();else if(r[4].setComponents(l-c,m-u,d-h,N-y).normalize(),t===tn)r[5].setComponents(l+c,m+u,d+h,N+y).normalize();else if(t===Ii)r[5].setComponents(c,u,h,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){Fn.center.set(0,0,0);const t=ed.distanceTo(e.center);return Fn.radius=.7071067811865476+t,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(lr.x=r.normal.x>0?e.max.x:e.min.x,lr.y=r.normal.y>0?e.max.y:e.min.y,lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fl extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nr=new z,Lr=new z,Mo=new lt,Ei=new Pa,cr=new Bi,fs=new z,bo=new z;class td extends Mt{constructor(e=new Nt,t=new Fl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Nr.fromBufferAttribute(t,r-1),Lr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Nr.distanceTo(Lr);e.setAttribute("lineDistance",new Ht(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),cr.radius+=s,e.ray.intersectsSphere(cr)===!1)return;Mo.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Mo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,f=n.index,u=n.attributes.position;if(f!==null){const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=m,h=_-1;S<h;S+=l){const d=f.getX(S),M=f.getX(S+1),T=ur(this,e,Ei,c,d,M,S);T&&t.push(T)}if(this.isLineLoop){const S=f.getX(_-1),h=f.getX(m),d=ur(this,e,Ei,c,S,h,_-1);d&&t.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=m,h=_-1;S<h;S+=l){const d=ur(this,e,Ei,c,S,S+1,S);d&&t.push(d)}if(this.isLineLoop){const S=ur(this,e,Ei,c,_-1,m,_-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ur(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Nr.fromBufferAttribute(o,r),Lr.fromBufferAttribute(o,s),t.distanceSqToSegment(Nr,Lr,fs,bo)>n)return;fs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(fs);if(!(l<e.near||l>e.far))return{distance:l,point:bo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Eo=new z,yo=new z;class nd extends td{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Eo.fromBufferAttribute(t,r),yo.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Eo.distanceTo(yo);e.setAttribute("lineDistance",new Ht(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ha extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const To=new lt,fa=new Pa,dr=new Bi,hr=new z;class Ao extends Mt{constructor(e=new Nt,t=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),dr.radius+=s,e.ray.intersectsSphere(dr)===!1)return;To.copy(r).invert(),fa.copy(e.ray).applyMatrix4(To);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=u,S=m;_<S;_++){const h=l.getX(_);hr.fromBufferAttribute(p,h),wo(hr,h,c,r,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=u,S=m;_<S;_++)hr.fromBufferAttribute(p,_),wo(hr,_,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wo(i,e,t,n,r,s,a){const o=fa.distanceSqToPoint(i);if(o<t){const c=new z;fa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ol extends Ct{constructor(e=[],t=Vn,n,r,s,a,o,c,l,f){super(e,t,n,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fi extends Ct{constructor(e,t,n=sn,r,s,a,o=bt,c=bt,l,f=xn,p=1){if(f!==xn&&f!==Gn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,r,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class id extends fi{constructor(e,t=sn,n=Vn,r,s,a=bt,o=bt,c,l=xn){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bl extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zi extends Nt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],p=[];let u=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function _(S,h,d,M,T,y,N,A,U,v,w){const O=y/U,R=N/v,k=y/2,H=N/2,W=A/2,D=U+1,L=v+1;let C=0,j=0;const Y=new z;for(let q=0;q<L;q++){const ee=q*R-H;for(let oe=0;oe<D;oe++){const Se=oe*O-k;Y[S]=Se*M,Y[h]=ee*T,Y[d]=W,l.push(Y.x,Y.y,Y.z),Y[S]=0,Y[h]=0,Y[d]=A>0?1:-1,f.push(Y.x,Y.y,Y.z),p.push(oe/U),p.push(1-q/v),C+=1}}for(let q=0;q<v;q++)for(let ee=0;ee<U;ee++){const oe=u+ee+D*q,Se=u+ee+D*(q+1),ye=u+(ee+1)+D*(q+1),he=u+(ee+1)+D*q;c.push(oe,Se,he),c.push(Se,ye,he),j+=6}o.addGroup(m,j,w),m+=j,u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ur extends Nt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,f=c+1,p=e/o,u=t/c,m=[],_=[],S=[],h=[];for(let d=0;d<f;d++){const M=d*u-a;for(let T=0;T<l;T++){const y=T*p-s;_.push(y,-M,0),S.push(0,0,1),h.push(T/o),h.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){const T=M+l*d,y=M+l*(d+1),N=M+1+l*(d+1),A=M+1+l*d;m.push(T,y,A),m.push(y,N,A)}this.setIndex(m),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(S,3)),this.setAttribute("uv",new Ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}function pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Ro(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ro(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=pi(i[t]);for(const r in n)e[r]=n[r]}return e}function Ro(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const sd={clone:pi,merge:Rt};var ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ad,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ld extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cd extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ud extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kl extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ps=new lt,Co=new z,Po=new z;class dd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Ft,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Co.setFromMatrixPosition(e.matrixWorld),t.position.copy(Co),Po.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Po),t.updateMatrixWorld(),ps.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ps,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ii||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ps)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fr=new z,pr=new gi,Zt=new z;class Gl extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fr,pr,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,Zt.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(fr,pr,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,Zt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new z,No=new Ke,Lo=new Ke;class Gt extends Gl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ui*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,No,Lo),t.subVectors(Lo,No)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class La extends Gl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hd extends dd{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fd extends kl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new hd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class pd extends kl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const si=-90,ai=1;class md extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(si,ai,e,t);r.layers=this.layers,this.add(r);const s=new Gt(si,ai,e,t);s.layers=this.layers,this.add(s);const a=new Gt(si,ai,e,t);a.layers=this.layers,this.add(a);const o=new Gt(si,ai,e,t);o.layers=this.layers,this.add(o);const c=new Gt(si,ai,e,t);c.layers=this.layers,this.add(c);const l=new Gt(si,ai,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ii)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;e.isWebGLRenderer===!0?h=e.state.buffers.depth.getReversed():h=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class gd extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _d{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Oa=class Oa{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Oa.prototype.isMatrix2=!0;let Do=Oa;function Io(i,e,t,n){const r=xd(n);switch(t){case Al:return i*e;case Rl:return i*e/r.components*r.byteLength;case ba:return i*e/r.components*r.byteLength;case Hn:return i*e*2/r.components*r.byteLength;case Ea:return i*e*2/r.components*r.byteLength;case wl:return i*e*3/r.components*r.byteLength;case Yt:return i*e*4/r.components*r.byteLength;case ya:return i*e*4/r.components*r.byteLength;case Sr:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case br:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fs:case Bs:return Math.max(i,16)*Math.max(e,8)/4;case Us:case Os:return Math.max(i,8)*Math.max(e,8)/2;case zs:case ks:case Vs:case Hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gs:case Ar:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case js:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ys:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $s:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ks:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Js:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sa:case aa:case oa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case la:case ca:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wr:case ua:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xd(i){switch(i){case Ft:case bl:return{byteLength:1,components:1};case Li:case El:case _n:return{byteLength:2,components:1};case Sa:case Ma:return{byteLength:2,components:4};case sn:case va:case en:return{byteLength:4,components:1};case yl:case Tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function vd(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,f),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const f=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,f);else{p.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<p.length;m++){const _=p[u],S=p[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,p[u]=S)}p.length=u+1;for(let m=0,_=p.length;m<_;m++){const S=p[m];i.bufferSubData(l,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Md=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ld=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ih=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ah=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ch=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ph=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_h=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bh=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Eh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Th=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ah=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ph=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ih=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Oh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$h=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Sd,alphahash_pars_fragment:Md,alphamap_fragment:bd,alphamap_pars_fragment:Ed,alphatest_fragment:yd,alphatest_pars_fragment:Td,aomap_fragment:Ad,aomap_pars_fragment:wd,batching_pars_vertex:Rd,batching_vertex:Cd,begin_vertex:Pd,beginnormal_vertex:Nd,bsdfs:Ld,iridescence_fragment:Dd,bumpmap_pars_fragment:Id,clipping_planes_fragment:Ud,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:Bd,color_fragment:zd,color_pars_fragment:kd,color_pars_vertex:Gd,color_vertex:Vd,common:Hd,cube_uv_reflection_fragment:Wd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:jd,displacementmap_vertex:qd,emissivemap_fragment:Yd,emissivemap_pars_fragment:$d,colorspace_fragment:Kd,colorspace_pars_fragment:Zd,envmap_fragment:Jd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:eh,envmap_pars_vertex:th,envmap_physical_pars_fragment:hh,envmap_vertex:nh,fog_vertex:ih,fog_pars_vertex:rh,fog_fragment:sh,fog_pars_fragment:ah,gradientmap_pars_fragment:oh,lightmap_pars_fragment:lh,lights_lambert_fragment:ch,lights_lambert_pars_fragment:uh,lights_pars_begin:dh,lights_toon_fragment:fh,lights_toon_pars_fragment:ph,lights_phong_fragment:mh,lights_phong_pars_fragment:gh,lights_physical_fragment:_h,lights_physical_pars_fragment:xh,lights_fragment_begin:vh,lights_fragment_maps:Sh,lights_fragment_end:Mh,lightprobes_pars_fragment:bh,logdepthbuf_fragment:Eh,logdepthbuf_pars_fragment:yh,logdepthbuf_pars_vertex:Th,logdepthbuf_vertex:Ah,map_fragment:wh,map_pars_fragment:Rh,map_particle_fragment:Ch,map_particle_pars_fragment:Ph,metalnessmap_fragment:Nh,metalnessmap_pars_fragment:Lh,morphinstance_vertex:Dh,morphcolor_vertex:Ih,morphnormal_vertex:Uh,morphtarget_pars_vertex:Fh,morphtarget_vertex:Oh,normal_fragment_begin:Bh,normal_fragment_maps:zh,normal_pars_fragment:kh,normal_pars_vertex:Gh,normal_vertex:Vh,normalmap_pars_fragment:Hh,clearcoat_normal_fragment_begin:Wh,clearcoat_normal_fragment_maps:Xh,clearcoat_pars_fragment:jh,iridescence_pars_fragment:qh,opaque_fragment:Yh,packing:$h,premultiplied_alpha_fragment:Kh,project_vertex:Zh,dithering_fragment:Jh,dithering_pars_fragment:Qh,roughnessmap_fragment:ef,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:rf,shadowmap_vertex:sf,shadowmask_pars_fragment:af,skinbase_vertex:of,skinning_pars_vertex:lf,skinning_vertex:cf,skinnormal_vertex:uf,specularmap_fragment:df,specularmap_pars_fragment:hf,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:gf,uv_pars_fragment:_f,uv_pars_vertex:xf,uv_vertex:vf,worldpos_vertex:Sf,background_vert:Mf,background_frag:bf,backgroundCube_vert:Ef,backgroundCube_frag:yf,cube_vert:Tf,cube_frag:Af,depth_vert:wf,depth_frag:Rf,distance_vert:Cf,distance_frag:Pf,equirect_vert:Nf,equirect_frag:Lf,linedashed_vert:Df,linedashed_frag:If,meshbasic_vert:Uf,meshbasic_frag:Ff,meshlambert_vert:Of,meshlambert_frag:Bf,meshmatcap_vert:zf,meshmatcap_frag:kf,meshnormal_vert:Gf,meshnormal_frag:Vf,meshphong_vert:Hf,meshphong_frag:Wf,meshphysical_vert:Xf,meshphysical_frag:jf,meshtoon_vert:qf,meshtoon_frag:Yf,points_vert:$f,points_frag:Kf,shadow_vert:Zf,shadow_frag:Jf,sprite_vert:Qf,sprite_frag:ep},me={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Qt={basic:{uniforms:Rt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Rt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Rt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Rt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Rt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Rt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Rt([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Rt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Rt([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Rt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Rt([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Rt([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Rt([me.lights,me.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Qt.physical={uniforms:Rt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const mr={r:0,b:0,g:0},tp=new lt,Hl=new Ue;Hl.set(-1,0,0,0,1,0,0,0,1);function np(i,e,t,n,r,s){const a=new Ye(0);let o=r===!0?0:1,c,l,f=null,p=0,u=null;function m(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const y=M.backgroundBlurriness>0;T=e.get(T,y)}return T}function _(M){let T=!1;const y=m(M);y===null?h(a,o):y&&y.isColor&&(h(y,1),T=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,s):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,T){const y=m(T);y&&(y.isCubeTexture||y.mapping===Ir)?(l===void 0&&(l=new vn(new zi(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:pi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(N,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Hl),l.material.toneMapped=Xe.getTransfer(y.colorSpace)!==Ze,(f!==y||p!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new vn(new Ur(2,2),new an({name:"BackgroundMaterial",uniforms:pi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(y.colorSpace)!==Ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function h(M,T){M.getRGB(mr,zl(i)),t.buffers.color.setClear(mr.r,mr.g,mr.b,T,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,h(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,h(a,o)},render:_,addToRenderList:S,dispose:d}}function ip(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(R,k,H,W,D){let L=!1;const C=p(R,W,H,k);s!==C&&(s=C,l(s.object)),L=m(R,W,H,D),L&&_(R,W,H,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,y(R,k,H,W),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function f(R){return i.deleteVertexArray(R)}function p(R,k,H,W){const D=W.wireframe===!0;let L=n[k.id];L===void 0&&(L={},n[k.id]=L);const C=R.isInstancedMesh===!0?R.id:0;let j=L[C];j===void 0&&(j={},L[C]=j);let Y=j[H.id];Y===void 0&&(Y={},j[H.id]=Y);let q=Y[D];return q===void 0&&(q=u(c()),Y[D]=q),q}function u(R){const k=[],H=[],W=[];for(let D=0;D<t;D++)k[D]=0,H[D]=0,W[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:W,object:R,attributes:{},index:null}}function m(R,k,H,W){const D=s.attributes,L=k.attributes;let C=0;const j=H.getAttributes();for(const Y in j)if(j[Y].location>=0){const ee=D[Y];let oe=L[Y];if(oe===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),ee===void 0||ee.attribute!==oe||oe&&ee.data!==oe.data)return!0;C++}return s.attributesNum!==C||s.index!==W}function _(R,k,H,W){const D={},L=k.attributes;let C=0;const j=H.getAttributes();for(const Y in j)if(j[Y].location>=0){let ee=L[Y];ee===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor));const oe={};oe.attribute=ee,ee&&ee.data&&(oe.data=ee.data),D[Y]=oe,C++}s.attributes=D,s.attributesNum=C,s.index=W}function S(){const R=s.newAttributes;for(let k=0,H=R.length;k<H;k++)R[k]=0}function h(R){d(R,0)}function d(R,k){const H=s.newAttributes,W=s.enabledAttributes,D=s.attributeDivisors;H[R]=1,W[R]===0&&(i.enableVertexAttribArray(R),W[R]=1),D[R]!==k&&(i.vertexAttribDivisor(R,k),D[R]=k)}function M(){const R=s.newAttributes,k=s.enabledAttributes;for(let H=0,W=k.length;H<W;H++)k[H]!==R[H]&&(i.disableVertexAttribArray(H),k[H]=0)}function T(R,k,H,W,D,L,C){C===!0?i.vertexAttribIPointer(R,k,H,D,L):i.vertexAttribPointer(R,k,H,W,D,L)}function y(R,k,H,W){S();const D=W.attributes,L=H.getAttributes(),C=k.defaultAttributeValues;for(const j in L){const Y=L[j];if(Y.location>=0){let q=D[j];if(q===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(q=R.instanceColor)),q!==void 0){const ee=q.normalized,oe=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const ye=Se.buffer,he=Se.type,J=Se.bytesPerElement,fe=he===i.INT||he===i.UNSIGNED_INT||q.gpuType===va;if(q.isInterleavedBufferAttribute){const le=q.data,Pe=le.stride,Ie=q.offset;if(le.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Y.locationSize;Ne++)d(Y.location+Ne,le.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ne=0;Ne<Y.locationSize;Ne++)h(Y.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Ne=0;Ne<Y.locationSize;Ne++)T(Y.location+Ne,oe/Y.locationSize,he,ee,Pe*J,(Ie+oe/Y.locationSize*Ne)*J,fe)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)d(Y.location+le,q.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<Y.locationSize;le++)h(Y.location+le);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let le=0;le<Y.locationSize;le++)T(Y.location+le,oe/Y.locationSize,he,ee,oe*J,oe/Y.locationSize*le*J,fe)}}else if(C!==void 0){const ee=C[j];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(Y.location,ee);break;case 3:i.vertexAttrib3fv(Y.location,ee);break;case 4:i.vertexAttrib4fv(Y.location,ee);break;default:i.vertexAttrib1fv(Y.location,ee)}}}}M()}function N(){w();for(const R in n){const k=n[R];for(const H in k){const W=k[H];for(const D in W){const L=W[D];for(const C in L)f(L[C].object),delete L[C];delete W[D]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;const k=n[R.id];for(const H in k){const W=k[H];for(const D in W){const L=W[D];for(const C in L)f(L[C].object),delete L[C];delete W[D]}}delete n[R.id]}function U(R){for(const k in n){const H=n[k];for(const W in H){const D=H[W];if(D[R.id]===void 0)continue;const L=D[R.id];for(const C in L)f(L[C].object),delete L[C];delete D[R.id]}}}function v(R){for(const k in n){const H=n[k],W=R.isInstancedMesh===!0?R.id:0,D=H[W];if(D!==void 0){for(const L in D){const C=D[L];for(const j in C)f(C[j].object),delete C[j];delete D[L]}delete H[W],Object.keys(H).length===0&&delete n[k]}}}function w(){O(),a=!0,s!==r&&(s=r,l(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:O,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:U,initAttributes:S,enableAttribute:h,disableUnusedAttributes:M}}function rp(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,f){f!==0&&(i.drawArraysInstanced(n,c,l,f),t.update(l,n,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let u=0;for(let m=0;m<f;m++)u+=l[m];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function sp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==Yt&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const v=U===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Ft&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==en&&!v)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Ce("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:h,maxAttributes:d,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:N,samples:A}}function ap(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new On,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||n!==0||r;return r=u,n=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){t=f(p,u,0)},this.setState=function(p,u,m){const _=p.clippingPlanes,S=p.clipIntersection,h=p.clipShadows,d=i.get(p);if(!r||_===null||_.length===0||s&&!h)s?f(null):l();else{const M=s?0:n,T=M*4;let y=d.clippingState||null;c.value=y,y=f(_,u,T,m);for(let N=0;N!==T;++N)y[N]=t[N];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,u,m,_){const S=p!==null?p.length:0;let h=null;if(S!==0){if(h=c.value,_!==!0||h===null){const d=m+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(h===null||h.length<d)&&(h=new Float32Array(d));for(let T=0,y=m;T!==S;++T,y+=4)a.copy(p[T]).applyMatrix4(M,o),a.normal.toArray(h,y),h[y+3]=a.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,h}}const Pn=4,Uo=[.125,.215,.35,.446,.526,.582],zn=20,op=256,yi=new La,Fo=new Ye;let ms=null,gs=0,_s=0,xs=!1;const lp=new z;class Oo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=lp}=s;ms=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ms,gs,_s),this._renderer.xr.enabled=xs,e.scissorTest=!1,oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vn||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ms=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:_n,format:Yt,colorSpace:Rr,depthBuffer:!1},r=Bo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cp(s)),this._blurMaterial=dp(s,e,t),this._ggxMaterial=up(s,e,t)}return r}_compileMaterial(e){const t=new vn(new Nt,e);this._renderer.compile(t,yi)}_sceneToCubeUV(e,t,n,r,s){const c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(Fo),p.toneMapping=nn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vn(new zi,new Ul({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,h=S.material;let d=!1;const M=e.background;M?M.isColor&&(h.color.copy(M),e.background=null,d=!0):(h.color.copy(Fo),d=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[T],s.y,s.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[T]));const N=this._cubeSize;oi(r,y*N,T>2?N:0,N,N),p.setRenderTarget(r),d&&p.render(S,c),p.render(e,c)}p.toneMapping=m,p.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Vn||e.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;oi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,yi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-f*f),u=0+l*1.25,m=p*u,{_lodMax:_}=this,S=this._sizeLods[n],h=3*S*(n>_-Pn?n-_+Pn:0),d=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-t,oi(s,h,d,3*S,2*S),r.setRenderTarget(s),r.render(o,yi),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-n,oi(e,h,d,3*S,2*S),r.setRenderTarget(e),r.render(o,yi)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const f=3,p=this._lodMeshes[r];p.material=l;const u=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zn-1),S=s/_,h=isFinite(s)?1+Math.floor(f*S):zn;h>zn&&Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${zn}`);const d=[];let M=0;for(let U=0;U<zn;++U){const v=U/S,w=Math.exp(-v*v/2);d.push(w),U===0?M+=w:U<h&&(M+=2*w)}for(let U=0;U<d.length;U++)d[U]=d[U]/M;u.envMap.value=e.texture,u.samples.value=h,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=_,u.mipInt.value=T-n;const y=this._sizeLods[r],N=3*y*(r>T-Pn?r-T+Pn:0),A=4*(this._cubeSize-y);oi(t,N,A,3*y,2*y),c.setRenderTarget(t),c.render(p,yi)}}function cp(i){const e=[],t=[],n=[];let r=i;const s=i-Pn+1+Uo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Pn?c=Uo[a-i+Pn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),f=-l,p=1+l,u=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,_=6,S=3,h=2,d=1,M=new Float32Array(S*_*m),T=new Float32Array(h*_*m),y=new Float32Array(d*_*m);for(let A=0;A<m;A++){const U=A%3*2/3-1,v=A>2?0:-1,w=[U,v,0,U+2/3,v,0,U+2/3,v+1,0,U,v,0,U+2/3,v+1,0,U,v+1,0];M.set(w,S*_*A),T.set(u,h*_*A);const O=[A,A,A,A,A,A];y.set(O,d*_*A)}const N=new Nt;N.setAttribute("position",new Vt(M,S)),N.setAttribute("uv",new Vt(T,h)),N.setAttribute("faceIndex",new Vt(y,d)),n.push(new vn(N,null)),r>Pn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Bo(i,e,t){const n=new rn(i,e,t);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function up(i,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:op,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function dp(i,e,t){const n=new Float32Array(zn),r=new z(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function zo(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ko(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Fr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wl extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ol(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zi(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:mn});s.uniforms.tEquirect.value=t;const a=new vn(r,s),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=At),new md(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function hp(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Gr||m===Vr)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new Wl(_.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,_=m===Gr||m===Vr,S=m===Vn||m===hi;if(_||S){let h=t.get(u);const d=h!==void 0?h.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Oo(i)),h=_?n.fromEquirectangular(u,h):n.fromCubemap(u,h),h.texture.pmremVersion=u.pmremVersion,t.set(u,h),h.texture;if(h!==void 0)return h.texture;{const M=u.image;return _&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new Oo(i)),h=_?n.fromEquirectangular(u):n.fromCubemap(u),h.texture.pmremVersion=u.pmremVersion,t.set(u,h),u.addEventListener("dispose",f),h.texture):null}}}return u}function o(u,m){return m===Gr?u.mapping=Vn:m===Vr&&(u.mapping=hi),u}function c(u){let m=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&m++;return m===_}function l(u){const m=u.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function fp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&da("WebGLRenderer: "+n+" extension not supported."),r}}}function pp(i,e,t,n){const r={},s=new WeakMap;function a(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function c(p){const u=p.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function l(p){const u=[],m=p.index,_=p.attributes.position;let S=0;if(_===void 0)return;if(m!==null){const M=m.array;S=m.version;for(let T=0,y=M.length;T<y;T+=3){const N=M[T+0],A=M[T+1],U=M[T+2];u.push(N,A,A,U,U,N)}}else{const M=_.array;S=_.version;for(let T=0,y=M.length/3-1;T<y;T+=3){const N=T+0,A=T+1,U=T+2;u.push(N,A,A,U,U,N)}}const h=new(_.count>=65535?Il:Dl)(u,1);h.version=S;const d=s.get(p);d&&e.remove(d),s.set(p,h)}function f(p){const u=s.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&l(p)}else l(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:f}}function mp(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,u){i.drawElements(n,u,s,p*a),t.update(u,n,1)}function l(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,s,p*a,m),t.update(u,n,m))}function f(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,p,0,m);let S=0;for(let h=0;h<m;h++)S+=u[h];t.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function gp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function _p(i,e,t){const n=new WeakMap,r=new dt;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let u=n.get(o);if(u===void 0||u.count!==p){let w=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),S===!0&&(T=3);let y=o.attributes.position.count*T,N=1;y>e.maxTextureSize&&(N=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*N*4*p),U=new Pl(A,y,N,p);U.type=en,U.needsUpdate=!0;const v=T*4;for(let O=0;O<p;O++){const R=h[O],k=d[O],H=M[O],W=y*N*4*O;for(let D=0;D<R.count;D++){const L=D*v;m===!0&&(r.fromBufferAttribute(R,D),A[W+L+0]=r.x,A[W+L+1]=r.y,A[W+L+2]=r.z,A[W+L+3]=0),_===!0&&(r.fromBufferAttribute(k,D),A[W+L+4]=r.x,A[W+L+5]=r.y,A[W+L+6]=r.z,A[W+L+7]=0),S===!0&&(r.fromBufferAttribute(H,D),A[W+L+8]=r.x,A[W+L+9]=r.y,A[W+L+10]=r.z,A[W+L+11]=H.itemSize===4?r.w:1)}}u={count:p,texture:U,size:new Ke(y,N)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let S=0;S<l.length;S++)m+=l[S];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function xp(i,e,t,n,r){let s=new WeakMap;function a(l){const f=r.render.frame,p=l.geometry,u=e.get(l,p);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function o(){s=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const vp={[pl]:"LINEAR_TONE_MAPPING",[ml]:"REINHARD_TONE_MAPPING",[gl]:"CINEON_TONE_MAPPING",[_l]:"ACES_FILMIC_TONE_MAPPING",[vl]:"AGX_TONE_MAPPING",[Sl]:"NEUTRAL_TONE_MAPPING",[xl]:"CUSTOM_TONE_MAPPING"};function Sp(i,e,t,n,r){const s=new rn(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new fi(e,t):void 0}),a=new rn(e,t,{type:_n,depthBuffer:!1,stencilBuffer:!1}),o=new Nt;o.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const c=new ld({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new vn(o,c),f=new La(-1,1,1,-1,0,1);let p=null,u=null,m=!1,_,S=null,h=[],d=!1;this.setSize=function(M,T){s.setSize(M,T),a.setSize(M,T);for(let y=0;y<h.length;y++){const N=h[y];N.setSize&&N.setSize(M,T)}},this.setEffects=function(M){h=M,d=h.length>0&&h[0].isRenderPass===!0;const T=s.width,y=s.height;for(let N=0;N<h.length;N++){const A=h[N];A.setSize&&A.setSize(T,y)}},this.begin=function(M,T){if(m||M.toneMapping===nn&&h.length===0)return!1;if(S=T,T!==null){const y=T.width,N=T.height;(s.width!==y||s.height!==N)&&this.setSize(y,N)}return d===!1&&M.setRenderTarget(s),_=M.toneMapping,M.toneMapping=nn,!0},this.hasRenderPass=function(){return d},this.end=function(M,T){M.toneMapping=_,m=!0;let y=s,N=a;for(let A=0;A<h.length;A++){const U=h[A];if(U.enabled!==!1&&(U.render(M,N,y,T),U.needsSwap!==!1)){const v=y;y=N,N=v}}if(p!==M.outputColorSpace||u!==M.toneMapping){p=M.outputColorSpace,u=M.toneMapping,c.defines={},Xe.getTransfer(p)===Ze&&(c.defines.SRGB_TRANSFER="");const A=vp[u];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(S),M.render(l,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Xl=new Ct,pa=new fi(1,1),jl=new Pl,ql=new Ou,Yl=new Ol,Go=[],Vo=[],Ho=new Float32Array(16),Wo=new Float32Array(9),Xo=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Go[r];if(s===void 0&&(s=new Float32Array(r),Go[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Or(i,e){let t=Vo[e];t===void 0&&(t=new Int32Array(e),Vo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Tp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Xo.set(n),i.uniformMatrix2fv(this.addr,!1,Xo),vt(t,n)}}function Ap(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Wo.set(n),i.uniformMatrix3fv(this.addr,!1,Wo),vt(t,n)}}function wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Ho.set(n),i.uniformMatrix4fv(this.addr,!1,Ho),vt(t,n)}}function Rp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function Lp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function Fp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(pa.compareFunction=t.isReversedDepthBuffer()?Aa:Ta,s=pa):s=Xl,t.setTexture2D(e||s,r)}function Op(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ql,r)}function Bp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Yl,r)}function zp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||jl,r)}function kp(i){switch(i){case 5126:return Mp;case 35664:return bp;case 35665:return Ep;case 35666:return yp;case 35674:return Tp;case 35675:return Ap;case 35676:return wp;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Pp;case 35669:case 35673:return Np;case 5125:return Lp;case 36294:return Dp;case 36295:return Ip;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}function Gp(i,e){i.uniform1fv(this.addr,e)}function Vp(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function Hp(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function Wp(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function Xp(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jp(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qp(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yp(i,e){i.uniform1iv(this.addr,e)}function $p(i,e){i.uniform2iv(this.addr,e)}function Kp(i,e){i.uniform3iv(this.addr,e)}function Zp(i,e){i.uniform4iv(this.addr,e)}function Jp(i,e){i.uniform1uiv(this.addr,e)}function Qp(i,e){i.uniform2uiv(this.addr,e)}function em(i,e){i.uniform3uiv(this.addr,e)}function tm(i,e){i.uniform4uiv(this.addr,e)}function nm(i,e,t){const n=this.cache,r=e.length,s=Or(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=pa:a=Xl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function im(i,e,t){const n=this.cache,r=e.length,s=Or(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ql,s[a])}function rm(i,e,t){const n=this.cache,r=e.length,s=Or(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Yl,s[a])}function sm(i,e,t){const n=this.cache,r=e.length,s=Or(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||jl,s[a])}function am(i){switch(i){case 5126:return Gp;case 35664:return Vp;case 35665:return Hp;case 35666:return Wp;case 35674:return Xp;case 35675:return jp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return $p;case 35668:case 35672:return Kp;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Qp;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return sm}}class om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kp(t.type)}}class lm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=am(t.type)}}class cm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const vs=/(\w+)(\])?(\[|\.)?/g;function jo(i,e){i.seq.push(e),i.map[e.id]=e}function um(i,e,t){const n=i.name,r=n.length;for(vs.lastIndex=0;;){const s=vs.exec(n),a=vs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){jo(t,l===void 0?new om(o,i,e):new lm(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new cm(o),jo(t,p)),t=p}}}class yr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);um(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function qo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const dm=37297;let hm=0;function fm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Yo=new Ue;function pm(i){Xe._getMatrix(Yo,Xe.workingColorSpace,i);const e=`mat3( ${Yo.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $o(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+fm(i.getShaderSource(e),o)}else return s}function mm(i,e){const t=pm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const gm={[pl]:"Linear",[ml]:"Reinhard",[gl]:"Cineon",[_l]:"ACESFilmic",[vl]:"AgX",[Sl]:"Neutral",[xl]:"Custom"};function _m(i,e){const t=gm[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gr=new z;function xm(){Xe.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),e=gr.y.toFixed(4),t=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ci).join(`
`)}function Sm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ci(i){return i!==""}function Ko(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(i){return i.replace(bm,ym)}const Em=new Map;function ym(i,e){let t=ze[e];if(t===void 0){const n=Em.get(e);if(n!==void 0)t=ze[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ma(t)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(i){return i.replace(Tm,Am)}function Am(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const wm={[vr]:"SHADOWMAP_TYPE_PCF",[Ri]:"SHADOWMAP_TYPE_VSM"};function Rm(i){return wm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Cm={[Vn]:"ENVMAP_TYPE_CUBE",[hi]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE_UV"};function Pm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Cm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Nm={[hi]:"ENVMAP_MODE_REFRACTION"};function Lm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Nm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Dm={[fl]:"ENVMAP_BLENDING_MULTIPLY",[tu]:"ENVMAP_BLENDING_MIX",[nu]:"ENVMAP_BLENDING_ADD"};function Im(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Dm[i.combine]||"ENVMAP_BLENDING_NONE"}function Um(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Rm(t),l=Pm(t),f=Lm(t),p=Im(t),u=Um(t),m=vm(t),_=Sm(s),S=r.createProgram();let h,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ci).join(`
`),h.length>0&&(h+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ci).join(`
`),d.length>0&&(d+=`
`)):(h=[Qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),d=[Qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?ze.tonemapping_pars_fragment:"",t.toneMapping!==nn?_m("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,mm("linearToOutputTexel",t.outputColorSpace),xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ci).join(`
`)),a=ma(a),a=Ko(a,t),a=Zo(a,t),o=ma(o),o=Ko(o,t),o=Zo(o,t),a=Jo(a),o=Jo(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,d=["#define varying in",t.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=M+h+a,y=M+d+o,N=qo(r,r.VERTEX_SHADER,T),A=qo(r,r.FRAGMENT_SHADER,y);r.attachShader(S,N),r.attachShader(S,A),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function U(R){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(S)||"",H=r.getShaderInfoLog(N)||"",W=r.getShaderInfoLog(A)||"",D=k.trim(),L=H.trim(),C=W.trim();let j=!0,Y=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,N,A);else{const q=$o(r,N,"vertex"),ee=$o(r,A,"fragment");qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+q+`
`+ee)}else D!==""?Ce("WebGLProgram: Program Info Log:",D):(L===""||C==="")&&(Y=!1);Y&&(R.diagnostics={runnable:j,programLog:D,vertexShader:{log:L,prefix:h},fragmentShader:{log:C,prefix:d}})}r.deleteShader(N),r.deleteShader(A),v=new yr(r,S),w=Mm(r,S)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(S,dm)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hm++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=N,this.fragmentShader=A,this}let Om=0;class Bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zm(e),t.set(e,n)),n}}class zm{constructor(e){this.id=Om++,this.code=e,this.usedTimes=0}}function km(i){return i===Hn||i===Ar||i===wr}function Gm(i,e,t,n,r,s){const a=new Nl,o=new Bm,c=new Set,l=[],f=new Map,p=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function S(v,w,O,R,k,H){const W=R.fog,D=k.geometry,L=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,C=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||L,C),Y=j&&j.mapping===Ir?j.image.height:null,q=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,oe=ee!==void 0?ee.length:0;let Se=0;D.morphAttributes.position!==void 0&&(Se=1),D.morphAttributes.normal!==void 0&&(Se=2),D.morphAttributes.color!==void 0&&(Se=3);let ye,he,J,fe;if(q){const Fe=Qt[q];ye=Fe.vertexShader,he=Fe.fragmentShader}else ye=v.vertexShader,he=v.fragmentShader,o.update(v),J=o.getVertexShaderID(v),fe=o.getFragmentShaderID(v);const le=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,Ne=k.isBatchedMesh===!0,at=!!v.map,Ve=!!v.matcap,Je=!!j,st=!!v.aoMap,Ge=!!v.lightMap,gt=!!v.bumpMap,ot=!!v.normalMap,Lt=!!v.displacementMap,I=!!v.emissiveMap,_t=!!v.metalnessMap,He=!!v.roughnessMap,it=v.anisotropy>0,pe=v.clearcoat>0,ct=v.dispersion>0,b=v.iridescence>0,g=v.sheen>0,B=v.transmission>0,Z=it&&!!v.anisotropyMap,ie=pe&&!!v.clearcoatMap,re=pe&&!!v.clearcoatNormalMap,de=pe&&!!v.clearcoatRoughnessMap,$=b&&!!v.iridescenceMap,Q=b&&!!v.iridescenceThicknessMap,xe=g&&!!v.sheenColorMap,be=g&&!!v.sheenRoughnessMap,ce=!!v.specularMap,se=!!v.specularColorMap,Le=!!v.specularIntensityMap,Be=B&&!!v.transmissionMap,$e=B&&!!v.thicknessMap,P=!!v.gradientMap,ae=!!v.alphaMap,K=v.alphaTest>0,ve=!!v.alphaHash,ue=!!v.extensions;let ne=nn;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Ae={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:ye,fragmentShader:he,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ne,batchingColor:Ne&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:at,matcap:Ve,envMap:Je,envMapMode:Je&&j.mapping,envMapCubeUVHeight:Y,aoMap:st,lightMap:Ge,bumpMap:gt,normalMap:ot,displacementMap:Lt,emissiveMap:I,normalMapObjectSpace:ot&&v.normalMapType===su,normalMapTangentSpace:ot&&v.normalMapType===Qa,packedNormalMap:ot&&v.normalMapType===Qa&&km(v.normalMap.format),metalnessMap:_t,roughnessMap:He,anisotropy:it,anisotropyMap:Z,clearcoat:pe,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:de,dispersion:ct,iridescence:b,iridescenceMap:$,iridescenceThicknessMap:Q,sheen:g,sheenColorMap:xe,sheenRoughnessMap:be,specularMap:ce,specularColorMap:se,specularIntensityMap:Le,transmission:B,transmissionMap:Be,thicknessMap:$e,gradientMap:P,opaque:v.transparent===!1&&v.blending===ci&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:K,alphaHash:ve,combine:v.combine,mapUv:at&&_(v.map.channel),aoMapUv:st&&_(v.aoMap.channel),lightMapUv:Ge&&_(v.lightMap.channel),bumpMapUv:gt&&_(v.bumpMap.channel),normalMapUv:ot&&_(v.normalMap.channel),displacementMapUv:Lt&&_(v.displacementMap.channel),emissiveMapUv:I&&_(v.emissiveMap.channel),metalnessMapUv:_t&&_(v.metalnessMap.channel),roughnessMapUv:He&&_(v.roughnessMap.channel),anisotropyMapUv:Z&&_(v.anisotropyMap.channel),clearcoatMapUv:ie&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(v.sheenRoughnessMap.channel),specularMapUv:ce&&_(v.specularMap.channel),specularColorMapUv:se&&_(v.specularColorMap.channel),specularIntensityMapUv:Le&&_(v.specularIntensityMap.channel),transmissionMapUv:Be&&_(v.transmissionMap.channel),thicknessMapUv:$e&&_(v.thicknessMap.channel),alphaMapUv:ae&&_(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ot||it),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!D.attributes.uv&&(at||ae),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&ot===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Pe,skinning:k.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:at&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===Ze,decodeVideoTextureEmissive:I&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===Ze,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===fn,flipSided:v.side===Pt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&v.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function h(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)w.push(O),w.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(d(w,v),M(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function d(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function T(v){const w=m[v.type];let O;if(w){const R=Qt[w];O=sd.clone(R.uniforms)}else O=v.uniforms;return O}function y(v,w){let O=f.get(w);return O!==void 0?++O.usedTimes:(O=new Fm(i,w,v,r),l.push(O),f.set(w,O)),O}function N(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),f.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function U(){o.dispose()}return{getParameters:S,getProgramCacheKey:h,getUniforms:T,acquireProgram:y,releaseProgram:N,releaseShaderCache:A,programs:l,dispose:U}}function Vm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Hm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function el(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,S,h,d){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:h,group:d},i[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=_,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=h,M.group=d),e++,M}function c(u,m,_,S,h,d){const M=o(u,m,_,S,h,d);_.transmission>0?n.push(M):_.transparent===!0?r.push(M):t.push(M)}function l(u,m,_,S,h,d){const M=o(u,m,_,S,h,d);_.transmission>0?n.unshift(M):_.transparent===!0?r.unshift(M):t.unshift(M)}function f(u,m){t.length>1&&t.sort(u||Hm),n.length>1&&n.sort(m||el),r.length>1&&r.sort(m||el)}function p(){for(let u=e,m=i.length;u<m;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:p,sort:f}}function Wm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new tl,i.set(n,[a])):r>=s.length?(a=new tl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ye};break;case"SpotLight":t={position:new z,direction:new z,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qm=0;function Ym(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $m(i){const e=new Xm,t=jm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const r=new z,s=new lt,a=new lt;function o(l){let f=0,p=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,_=0,S=0,h=0,d=0,M=0,T=0,y=0,N=0,A=0,U=0;l.sort(Ym);for(let w=0,O=l.length;w<O;w++){const R=l[w],k=R.color,H=R.intensity,W=R.distance;let D=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Hn?D=R.shadow.map.texture:D=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=k.r*H,p+=k.g*H,u+=k.b*H;else if(R.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(R.sh.coefficients[L],H);U++}else if(R.isDirectionalLight){const L=e.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const C=R.shadow,j=t.get(R);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=D,n.directionalShadowMatrix[m]=R.shadow.matrix,M++}n.directional[m]=L,m++}else if(R.isSpotLight){const L=e.get(R);L.position.setFromMatrixPosition(R.matrixWorld),L.color.copy(k).multiplyScalar(H),L.distance=W,L.coneCos=Math.cos(R.angle),L.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),L.decay=R.decay,n.spot[S]=L;const C=R.shadow;if(R.map&&(n.spotLightMap[N]=R.map,N++,C.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[S]=C.matrix,R.castShadow){const j=t.get(R);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=D,y++}S++}else if(R.isRectAreaLight){const L=e.get(R);L.color.copy(k).multiplyScalar(H),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),n.rectArea[h]=L,h++}else if(R.isPointLight){const L=e.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity),L.distance=R.distance,L.decay=R.decay,R.castShadow){const C=R.shadow,j=t.get(R);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,j.shadowCameraNear=C.camera.near,j.shadowCameraFar=C.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=D,n.pointShadowMatrix[_]=R.shadow.matrix,T++}n.point[_]=L,_++}else if(R.isHemisphereLight){const L=e.get(R);L.skyColor.copy(R.color).multiplyScalar(H),L.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[d]=L,d++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=u;const v=n.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==S||v.rectAreaLength!==h||v.hemiLength!==d||v.numDirectionalShadows!==M||v.numPointShadows!==T||v.numSpotShadows!==y||v.numSpotMaps!==N||v.numLightProbes!==U)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=h,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+N-A,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=U,v.directionalLength=m,v.pointLength=_,v.spotLength=S,v.rectAreaLength=h,v.hemiLength=d,v.numDirectionalShadows=M,v.numPointShadows=T,v.numSpotShadows=y,v.numSpotMaps=N,v.numLightProbes=U,n.version=qm++)}function c(l,f){let p=0,u=0,m=0,_=0,S=0;const h=f.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){const T=l[d];if(T.isDirectionalLight){const y=n.directional[p];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(h),p++}else if(T.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(h),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(h),m++}else if(T.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(h),a.identity(),s.copy(T.matrixWorld),s.premultiply(h),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(h),u++}else if(T.isHemisphereLight){const y=n.hemi[S];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(h),S++}}}return{setup:o,setupView:c,state:n}}function nl(i){const e=new $m(i),t=[],n=[],r=[];function s(u){p.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function f(u){e.setupView(t,u)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Km(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new nl(i),e.set(r,[o])):s>=a.length?(o=new nl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qm=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],eg=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],il=new lt,Ti=new z,Ss=new z;function tg(i,e,t){let n=new Na;const r=new Ke,s=new Ke,a=new dt,o=new cd,c=new ud,l={},f=t.maxTextureSize,p={[Nn]:Pt,[Pt]:Nn,[fn]:fn},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Zm,fragmentShader:Jm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new Nt;_.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new vn(_,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vr;let d=this.type;this.render=function(A,U,v){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||A.length===0)return;this.type===Fc&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vr);const w=i.getRenderTarget(),O=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),k=i.state;k.setBlending(mn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=d!==this.type;H&&U.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(D=>D.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,D=A.length;W<D;W++){const L=A[W],C=L.shadow;if(C===void 0){Ce("WebGLShadowMap:",L,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const j=C.getFrameExtents();r.multiply(j),s.copy(C.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/j.x),r.x=s.x*j.x,C.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/j.y),r.y=s.y*j.y,C.mapSize.y=s.y));const Y=i.state.buffers.depth.getReversed();if(C.camera._reversedDepth=Y,C.map===null||H===!0){if(C.map!==null&&(C.map.depthTexture!==null&&(C.map.depthTexture.dispose(),C.map.depthTexture=null),C.map.dispose()),this.type===Ri){if(L.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}C.map=new rn(r.x,r.y,{format:Hn,type:_n,minFilter:At,magFilter:At,generateMipmaps:!1}),C.map.texture.name=L.name+".shadowMap",C.map.depthTexture=new fi(r.x,r.y,en),C.map.depthTexture.name=L.name+".shadowMapDepth",C.map.depthTexture.format=xn,C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=bt,C.map.depthTexture.magFilter=bt}else L.isPointLight?(C.map=new Wl(r.x),C.map.depthTexture=new id(r.x,sn)):(C.map=new rn(r.x,r.y),C.map.depthTexture=new fi(r.x,r.y,sn)),C.map.depthTexture.name=L.name+".shadowMap",C.map.depthTexture.format=xn,this.type===vr?(C.map.depthTexture.compareFunction=Y?Aa:Ta,C.map.depthTexture.minFilter=At,C.map.depthTexture.magFilter=At):(C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=bt,C.map.depthTexture.magFilter=bt);C.camera.updateProjectionMatrix()}const q=C.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<q;ee++){if(C.map.isWebGLCubeRenderTarget)i.setRenderTarget(C.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(C.map),i.clear());const oe=C.getViewport(ee);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),k.viewport(a)}if(L.isPointLight){const oe=C.camera,Se=C.matrix,ye=L.distance||oe.far;ye!==oe.far&&(oe.far=ye,oe.updateProjectionMatrix()),Ti.setFromMatrixPosition(L.matrixWorld),oe.position.copy(Ti),Ss.copy(oe.position),Ss.add(Qm[ee]),oe.up.copy(eg[ee]),oe.lookAt(Ss),oe.updateMatrixWorld(),Se.makeTranslation(-Ti.x,-Ti.y,-Ti.z),il.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),C._frustum.setFromProjectionMatrix(il,oe.coordinateSystem,oe.reversedDepth)}else C.updateMatrices(L);n=C.getFrustum(),y(U,v,C.camera,L,this.type)}C.isPointLightShadow!==!0&&this.type===Ri&&M(C,v),C.needsUpdate=!1}d=this.type,h.needsUpdate=!1,i.setRenderTarget(w,O,R)};function M(A,U){const v=e.update(S);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new rn(r.x,r.y,{format:Hn,type:_n})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(U,null,v,u,S,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(U,null,v,m,S,null)}function T(A,U,v,w){let O=null;const R=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)O=R;else if(O=v.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const k=O.uuid,H=U.uuid;let W=l[k];W===void 0&&(W={},l[k]=W);let D=W[H];D===void 0&&(D=O.clone(),W[H]=D,U.addEventListener("dispose",N)),O=D}if(O.visible=U.visible,O.wireframe=U.wireframe,w===Ri?O.side=U.shadowSide!==null?U.shadowSide:U.side:O.side=U.shadowSide!==null?U.shadowSide:p[U.side],O.alphaMap=U.alphaMap,O.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,O.map=U.map,O.clipShadows=U.clipShadows,O.clippingPlanes=U.clippingPlanes,O.clipIntersection=U.clipIntersection,O.displacementMap=U.displacementMap,O.displacementScale=U.displacementScale,O.displacementBias=U.displacementBias,O.wireframeLinewidth=U.wireframeLinewidth,O.linewidth=U.linewidth,v.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const k=i.properties.get(O);k.light=v}return O}function y(A,U,v,w,O){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===Ri)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const H=e.update(A),W=A.material;if(Array.isArray(W)){const D=H.groups;for(let L=0,C=D.length;L<C;L++){const j=D[L],Y=W[j.materialIndex];if(Y&&Y.visible){const q=T(A,Y,w,O);A.onBeforeShadow(i,A,U,v,H,q,j),i.renderBufferDirect(v,null,H,q,A,j),A.onAfterShadow(i,A,U,v,H,q,j)}}}else if(W.visible){const D=T(A,W,w,O);A.onBeforeShadow(i,A,U,v,H,D,null),i.renderBufferDirect(v,null,H,D,A,null),A.onAfterShadow(i,A,U,v,H,D,null)}}const k=A.children;for(let H=0,W=k.length;H<W;H++)y(k[H],U,v,w,O)}function N(A){A.target.removeEventListener("dispose",N);for(const v in l){const w=l[v],O=A.target.uuid;O in w&&(w[O].dispose(),delete w[O])}}}function ng(i,e){function t(){let P=!1;const ae=new dt;let K=null;const ve=new dt(0,0,0,0);return{setMask:function(ue){K!==ue&&!P&&(i.colorMask(ue,ue,ue,ue),K=ue)},setLocked:function(ue){P=ue},setClear:function(ue,ne,Ae,Fe,ht){ht===!0&&(ue*=Fe,ne*=Fe,Ae*=Fe),ae.set(ue,ne,Ae,Fe),ve.equals(ae)===!1&&(i.clearColor(ue,ne,Ae,Fe),ve.copy(ae))},reset:function(){P=!1,K=null,ve.set(-1,0,0,0)}}}function n(){let P=!1,ae=!1,K=null,ve=null,ue=null;return{setReversed:function(ne){if(ae!==ne){const Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ae=ne;const Fe=ue;ue=null,this.setClear(Fe)}},getReversed:function(){return ae},setTest:function(ne){ne?le(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(ne){K!==ne&&!P&&(i.depthMask(ne),K=ne)},setFunc:function(ne){if(ae&&(ne=mu[ne]),ve!==ne){switch(ne){case As:i.depthFunc(i.NEVER);break;case ws:i.depthFunc(i.ALWAYS);break;case Rs:i.depthFunc(i.LESS);break;case di:i.depthFunc(i.LEQUAL);break;case Cs:i.depthFunc(i.EQUAL);break;case Ps:i.depthFunc(i.GEQUAL);break;case Ns:i.depthFunc(i.GREATER);break;case Ls:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=ne}},setLocked:function(ne){P=ne},setClear:function(ne){ue!==ne&&(ue=ne,ae&&(ne=1-ne),i.clearDepth(ne))},reset:function(){P=!1,K=null,ve=null,ue=null,ae=!1}}}function r(){let P=!1,ae=null,K=null,ve=null,ue=null,ne=null,Ae=null,Fe=null,ht=null;return{setTest:function(Qe){P||(Qe?le(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!P&&(i.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,on,$t){(K!==Qe||ve!==on||ue!==$t)&&(i.stencilFunc(Qe,on,$t),K=Qe,ve=on,ue=$t)},setOp:function(Qe,on,$t){(ne!==Qe||Ae!==on||Fe!==$t)&&(i.stencilOp(Qe,on,$t),ne=Qe,Ae=on,Fe=$t)},setLocked:function(Qe){P=Qe},setClear:function(Qe){ht!==Qe&&(i.clearStencil(Qe),ht=Qe)},reset:function(){P=!1,ae=null,K=null,ve=null,ue=null,ne=null,Ae=null,Fe=null,ht=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let f={},p={},u={},m=new WeakMap,_=[],S=null,h=!1,d=null,M=null,T=null,y=null,N=null,A=null,U=null,v=new Ye(0,0,0),w=0,O=!1,R=null,k=null,H=null,W=null,D=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,j=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),C=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),C=j>=2);let q=null,ee={};const oe=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),ye=new dt().fromArray(oe),he=new dt().fromArray(Se);function J(P,ae,K,ve){const ue=new Uint8Array(4),ne=i.createTexture();i.bindTexture(P,ne),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<K;Ae++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(ae+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ne}const fe={};fe[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(di),gt(!1),ot($a),le(i.CULL_FACE),st(mn);function le(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function Pe(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function Ie(P,ae){return u[P]!==ae?(i.bindFramebuffer(P,ae),u[P]=ae,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ae),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ne(P,ae){let K=_,ve=!1;if(P){K=m.get(ae),K===void 0&&(K=[],m.set(ae,K));const ue=P.textures;if(K.length!==ue.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ae=ue.length;ne<Ae;ne++)K[ne]=i.COLOR_ATTACHMENT0+ne;K.length=ue.length,ve=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ve=!0);ve&&i.drawBuffers(K)}function at(P){return S!==P?(i.useProgram(P),S=P,!0):!1}const Ve={[Bn]:i.FUNC_ADD,[Bc]:i.FUNC_SUBTRACT,[zc]:i.FUNC_REVERSE_SUBTRACT};Ve[kc]=i.MIN,Ve[Gc]=i.MAX;const Je={[Vc]:i.ZERO,[Hc]:i.ONE,[Wc]:i.SRC_COLOR,[ys]:i.SRC_ALPHA,[Kc]:i.SRC_ALPHA_SATURATE,[Yc]:i.DST_COLOR,[jc]:i.DST_ALPHA,[Xc]:i.ONE_MINUS_SRC_COLOR,[Ts]:i.ONE_MINUS_SRC_ALPHA,[$c]:i.ONE_MINUS_DST_COLOR,[qc]:i.ONE_MINUS_DST_ALPHA,[Zc]:i.CONSTANT_COLOR,[Jc]:i.ONE_MINUS_CONSTANT_COLOR,[Qc]:i.CONSTANT_ALPHA,[eu]:i.ONE_MINUS_CONSTANT_ALPHA};function st(P,ae,K,ve,ue,ne,Ae,Fe,ht,Qe){if(P===mn){h===!0&&(Pe(i.BLEND),h=!1);return}if(h===!1&&(le(i.BLEND),h=!0),P!==Oc){if(P!==d||Qe!==O){if((M!==Bn||N!==Bn)&&(i.blendEquation(i.FUNC_ADD),M=Bn,N=Bn),Qe)switch(P){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFunc(i.ONE,i.ONE);break;case Za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ja:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",P);break}else switch(P){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Za:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ja:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",P);break}T=null,y=null,A=null,U=null,v.set(0,0,0),w=0,d=P,O=Qe}return}ue=ue||ae,ne=ne||K,Ae=Ae||ve,(ae!==M||ue!==N)&&(i.blendEquationSeparate(Ve[ae],Ve[ue]),M=ae,N=ue),(K!==T||ve!==y||ne!==A||Ae!==U)&&(i.blendFuncSeparate(Je[K],Je[ve],Je[ne],Je[Ae]),T=K,y=ve,A=ne,U=Ae),(Fe.equals(v)===!1||ht!==w)&&(i.blendColor(Fe.r,Fe.g,Fe.b,ht),v.copy(Fe),w=ht),d=P,O=!1}function Ge(P,ae){P.side===fn?Pe(i.CULL_FACE):le(i.CULL_FACE);let K=P.side===Pt;ae&&(K=!K),gt(K),P.blending===ci&&P.transparent===!1?st(mn):st(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const ve=P.stencilWrite;o.setTest(ve),ve&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),I(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(P){R!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),R=P)}function ot(P){P!==Ic?(le(i.CULL_FACE),P!==k&&(P===$a?i.cullFace(i.BACK):P===Uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),k=P}function Lt(P){P!==H&&(C&&i.lineWidth(P),H=P)}function I(P,ae,K){P?(le(i.POLYGON_OFFSET_FILL),(W!==ae||D!==K)&&(W=ae,D=K,a.getReversed()&&(ae=-ae),i.polygonOffset(ae,K))):Pe(i.POLYGON_OFFSET_FILL)}function _t(P){P?le(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function He(P){P===void 0&&(P=i.TEXTURE0+L-1),q!==P&&(i.activeTexture(P),q=P)}function it(P,ae,K){K===void 0&&(q===null?K=i.TEXTURE0+L-1:K=q);let ve=ee[K];ve===void 0&&(ve={type:void 0,texture:void 0},ee[K]=ve),(ve.type!==P||ve.texture!==ae)&&(q!==K&&(i.activeTexture(K),q=K),i.bindTexture(P,ae||fe[P]),ve.type=P,ve.texture=ae)}function pe(){const P=ee[q];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ct(){try{i.compressedTexImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function g(){try{i.texSubImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function B(){try{i.texSubImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function re(){try{i.texStorage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function de(){try{i.texStorage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function $(){try{i.texImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function Q(){try{i.texImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function xe(P){return p[P]!==void 0?p[P]:i.getParameter(P)}function be(P,ae){p[P]!==ae&&(i.pixelStorei(P,ae),p[P]=ae)}function ce(P){ye.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ye.copy(P))}function se(P){he.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),he.copy(P))}function Le(P,ae){let K=l.get(ae);K===void 0&&(K=new WeakMap,l.set(ae,K));let ve=K.get(P);ve===void 0&&(ve=i.getUniformBlockIndex(ae,P.name),K.set(P,ve))}function Be(P,ae){const ve=l.get(ae).get(P);c.get(ae)!==ve&&(i.uniformBlockBinding(ae,ve,P.__bindingPointIndex),c.set(ae,ve))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},p={},q=null,ee={},u={},m=new WeakMap,_=[],S=null,h=!1,d=null,M=null,T=null,y=null,N=null,A=null,U=null,v=new Ye(0,0,0),w=0,O=!1,R=null,k=null,H=null,W=null,D=null,ye.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Pe,bindFramebuffer:Ie,drawBuffers:Ne,useProgram:at,setBlending:st,setMaterial:Ge,setFlipSided:gt,setCullFace:ot,setLineWidth:Lt,setPolygonOffset:I,setScissorTest:_t,activeTexture:He,bindTexture:it,unbindTexture:pe,compressedTexImage2D:ct,compressedTexImage3D:b,texImage2D:$,texImage3D:Q,pixelStorei:be,getParameter:xe,updateUBOMapping:Le,uniformBlockBinding:Be,texStorage2D:re,texStorage3D:de,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:Z,compressedTexSubImage3D:ie,scissor:ce,viewport:se,reset:$e}}function ig(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,f=new WeakMap,p=new Set;let u;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,g){return _?new OffscreenCanvas(b,g):Pr("canvas")}function h(b,g,B){let Z=1;const ie=ct(b);if((ie.width>B||ie.height>B)&&(Z=B/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const re=Math.floor(Z*ie.width),de=Math.floor(Z*ie.height);u===void 0&&(u=S(re,de));const $=g?S(re,de):u;return $.width=re,$.height=de,$.getContext("2d").drawImage(b,0,0,re,de),Ce("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+re+"x"+de+")."),$}else return"data"in b&&Ce("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function d(b){return b.generateMipmaps}function M(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(b,g,B,Z,ie,re=!1){if(b!==null){if(i[b]!==void 0)return i[b];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de;Z&&(de=e.get("EXT_texture_norm16"),de||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&de&&($=de.R16_EXT),B===i.SHORT&&de&&($=de.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),g===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&de&&($=de.RG16_EXT),B===i.SHORT&&de&&($=de.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&de&&($=de.RGB16_EXT),B===i.SHORT&&de&&($=de.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){const Q=re?Cr:Xe.getTransfer(ie);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Q===Ze?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&de&&($=de.RGBA16_EXT),B===i.SHORT&&de&&($=de.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function N(b,g){let B;return b?g===null||g===sn||g===Di?B=i.DEPTH24_STENCIL8:g===en?B=i.DEPTH32F_STENCIL8:g===Li&&(B=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===sn||g===Di?B=i.DEPTH_COMPONENT24:g===en?B=i.DEPTH_COMPONENT32F:g===Li&&(B=i.DEPTH_COMPONENT16),B}function A(b,g){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==bt&&b.minFilter!==At?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function U(b){const g=b.target;g.removeEventListener("dispose",U),w(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&p.delete(g)}function v(b){const g=b.target;g.removeEventListener("dispose",v),R(g)}function w(b){const g=n.get(b);if(g.__webglInit===void 0)return;const B=b.source,Z=m.get(B);if(Z){const ie=Z[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&O(b),Object.keys(Z).length===0&&m.delete(B)}n.remove(b)}function O(b){const g=n.get(b);i.deleteTexture(g.__webglTexture);const B=b.source,Z=m.get(B);delete Z[g.__cacheKey],a.memory.textures--}function R(b){const g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let ie=0;ie<g.__webglFramebuffer[Z].length;ie++)i.deleteFramebuffer(g.__webglFramebuffer[Z][ie]);else i.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[Z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=b.textures;for(let Z=0,ie=B.length;Z<ie;Z++){const re=n.get(B[Z]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(b)}let k=0;function H(){k=0}function W(){return k}function D(b){k=b}function L(){const b=k;return b>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),k+=1,b}function C(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function j(b,g){const B=n.get(b);if(b.isVideoTexture&&it(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const Z=b.image;if(Z===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(B,b,g);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function Y(b,g){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Pe(B,b,g);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function q(b,g){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Pe(B,b,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function ee(b,g){const B=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&B.__version!==b.version){Ie(B,b,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const oe={[Ds]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[Is]:i.MIRRORED_REPEAT},Se={[bt]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[Wi]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},ye={[au]:i.NEVER,[du]:i.ALWAYS,[ou]:i.LESS,[Ta]:i.LEQUAL,[lu]:i.EQUAL,[Aa]:i.GEQUAL,[cu]:i.GREATER,[uu]:i.NOTEQUAL};function he(b,g){if(g.type===en&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===At||g.magFilter===Hr||g.magFilter===Wi||g.magFilter===kn||g.minFilter===At||g.minFilter===Hr||g.minFilter===Wi||g.minFilter===kn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,oe[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,oe[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,oe[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Se[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ye[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===bt||g.minFilter!==Wi&&g.minFilter!==kn||g.type===en&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function J(b,g){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",U));const Z=g.source;let ie=m.get(Z);ie===void 0&&(ie={},m.set(Z,ie));const re=C(g);if(re!==b.__cacheKey){ie[re]===void 0&&(ie[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ie[re].usedTimes++;const de=ie[b.__cacheKey];de!==void 0&&(ie[b.__cacheKey].usedTimes--,de.usedTimes===0&&O(g)),b.__cacheKey=re,b.__webglTexture=ie[re].texture}return B}function fe(b,g,B){return Math.floor(Math.floor(b/B)/g)}function le(b,g,B,Z){const re=b.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,Z,g.data);else{re.sort((be,ce)=>be.start-ce.start);let de=0;for(let be=1;be<re.length;be++){const ce=re[de],se=re[be],Le=ce.start+ce.count,Be=fe(se.start,g.width,4),$e=fe(ce.start,g.width,4);se.start<=Le+1&&Be===$e&&fe(se.start+se.count-1,g.width,4)===Be?ce.count=Math.max(ce.count,se.start+se.count-ce.start):(++de,re[de]=se)}re.length=de+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let be=0,ce=re.length;be<ce;be++){const se=re[be],Le=Math.floor(se.start/4),Be=Math.ceil(se.count/4),$e=Le%g.width,P=Math.floor(Le/g.width),ae=Be,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,$e,P,ae,K,B,Z,g.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function Pe(b,g,B){let Z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=i.TEXTURE_3D);const ie=J(b,g),re=g.source;t.bindTexture(Z,b.__webglTexture,i.TEXTURE0+B);const de=n.get(re);if(re.version!==de.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const K=Xe.getPrimaries(Xe.workingColorSpace),ve=g.colorSpace===Cn?null:Xe.getPrimaries(g.colorSpace),ue=g.colorSpace===Cn||K===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=h(g.image,!1,r.maxTextureSize);Q=pe(g,Q);const xe=s.convert(g.format,g.colorSpace),be=s.convert(g.type);let ce=y(g.internalFormat,xe,be,g.normalized,g.colorSpace,g.isVideoTexture);he(Z,g);let se;const Le=g.mipmaps,Be=g.isVideoTexture!==!0,$e=de.__version===void 0||ie===!0,P=re.dataReady,ae=A(g,Q);if(g.isDepthTexture)ce=N(g.format===Gn,g.type),$e&&(Be?t.texStorage2D(i.TEXTURE_2D,1,ce,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ce,Q.width,Q.height,0,xe,be,null));else if(g.isDataTexture)if(Le.length>0){Be&&$e&&t.texStorage2D(i.TEXTURE_2D,ae,ce,Le[0].width,Le[0].height);for(let K=0,ve=Le.length;K<ve;K++)se=Le[K],Be?P&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,xe,be,se.data):t.texImage2D(i.TEXTURE_2D,K,ce,se.width,se.height,0,xe,be,se.data);g.generateMipmaps=!1}else Be?($e&&t.texStorage2D(i.TEXTURE_2D,ae,ce,Q.width,Q.height),P&&le(g,Q,xe,be)):t.texImage2D(i.TEXTURE_2D,0,ce,Q.width,Q.height,0,xe,be,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Be&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ce,Le[0].width,Le[0].height,Q.depth);for(let K=0,ve=Le.length;K<ve;K++)if(se=Le[K],g.format!==Yt)if(xe!==null)if(Be){if(P)if(g.layerUpdates.size>0){const ue=Io(se.width,se.height,g.format,g.type);for(const ne of g.layerUpdates){const Ae=se.data.subarray(ne*ue/se.data.BYTES_PER_ELEMENT,(ne+1)*ue/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ne,se.width,se.height,1,xe,Ae)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,Q.depth,xe,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ce,se.width,se.height,Q.depth,0,se.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,Q.depth,xe,be,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ce,se.width,se.height,Q.depth,0,xe,be,se.data)}else{Be&&$e&&t.texStorage2D(i.TEXTURE_2D,ae,ce,Le[0].width,Le[0].height);for(let K=0,ve=Le.length;K<ve;K++)se=Le[K],g.format!==Yt?xe!==null?Be?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,xe,se.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ce,se.width,se.height,0,se.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?P&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,xe,be,se.data):t.texImage2D(i.TEXTURE_2D,K,ce,se.width,se.height,0,xe,be,se.data)}else if(g.isDataArrayTexture)if(Be){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ce,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const K=Io(Q.width,Q.height,g.format,g.type);for(const ve of g.layerUpdates){const ue=Q.data.subarray(ve*K/Q.data.BYTES_PER_ELEMENT,(ve+1)*K/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,Q.width,Q.height,1,xe,be,ue)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,xe,be,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,Q.width,Q.height,Q.depth,0,xe,be,Q.data);else if(g.isData3DTexture)Be?($e&&t.texStorage3D(i.TEXTURE_3D,ae,ce,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,xe,be,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ce,Q.width,Q.height,Q.depth,0,xe,be,Q.data);else if(g.isFramebufferTexture){if($e)if(Be)t.texStorage2D(i.TEXTURE_2D,ae,ce,Q.width,Q.height);else{let K=Q.width,ve=Q.height;for(let ue=0;ue<ae;ue++)t.texImage2D(i.TEXTURE_2D,ue,ce,K,ve,0,xe,be,null),K>>=1,ve>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),p.add(g),K.onpaint=Fe=>{const ht=Fe.changedElements;for(const Qe of p)ht.includes(Qe.image)&&(Qe.needsUpdate=!0)},K.requestPaint();return}const ve=0,ue=i.RGBA,ne=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,ve,ue,ne,Ae,Q),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Be&&$e){const K=ct(Le[0]);t.texStorage2D(i.TEXTURE_2D,ae,ce,K.width,K.height)}for(let K=0,ve=Le.length;K<ve;K++)se=Le[K],Be?P&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,xe,be,se):t.texImage2D(i.TEXTURE_2D,K,ce,xe,be,se);g.generateMipmaps=!1}else if(Be){if($e){const K=ct(Q);t.texStorage2D(i.TEXTURE_2D,ae,ce,K.width,K.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,be,Q)}else t.texImage2D(i.TEXTURE_2D,0,ce,xe,be,Q);d(g)&&M(Z),de.__version=re.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Ie(b,g,B){if(g.image.length!==6)return;const Z=J(b,g),ie=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const re=n.get(ie);if(ie.version!==re.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);const de=Xe.getPrimaries(Xe.workingColorSpace),$=g.colorSpace===Cn?null:Xe.getPrimaries(g.colorSpace),Q=g.colorSpace===Cn||de===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,be=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let ne=0;ne<6;ne++)!xe&&!be?ce[ne]=h(g.image[ne],!0,r.maxCubemapSize):ce[ne]=be?g.image[ne].image:g.image[ne],ce[ne]=pe(g,ce[ne]);const se=ce[0],Le=s.convert(g.format,g.colorSpace),Be=s.convert(g.type),$e=y(g.internalFormat,Le,Be,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,ae=re.__version===void 0||Z===!0,K=ie.dataReady;let ve=A(g,se);he(i.TEXTURE_CUBE_MAP,g);let ue;if(xe){P&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,$e,se.width,se.height);for(let ne=0;ne<6;ne++){ue=ce[ne].mipmaps;for(let Ae=0;Ae<ue.length;Ae++){const Fe=ue[Ae];g.format!==Yt?Le!==null?P?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,Fe.width,Fe.height,Le,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,$e,Fe.width,Fe.height,0,Fe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,Fe.width,Fe.height,Le,Be,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,$e,Fe.width,Fe.height,0,Le,Be,Fe.data)}}}else{if(ue=g.mipmaps,P&&ae){ue.length>0&&ve++;const ne=ct(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,$e,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(be){P?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ce[ne].width,ce[ne].height,Le,Be,ce[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,ce[ne].width,ce[ne].height,0,Le,Be,ce[ne].data);for(let Ae=0;Ae<ue.length;Ae++){const ht=ue[Ae].image[ne].image;P?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,ht.width,ht.height,Le,Be,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,$e,ht.width,ht.height,0,Le,Be,ht.data)}}else{P?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le,Be,ce[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,Le,Be,ce[ne]);for(let Ae=0;Ae<ue.length;Ae++){const Fe=ue[Ae];P?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Le,Be,Fe.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,$e,Le,Be,Fe.image[ne])}}}d(g)&&M(i.TEXTURE_CUBE_MAP),re.__version=ie.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Ne(b,g,B,Z,ie,re){const de=s.convert(B.format,B.colorSpace),$=s.convert(B.type),Q=y(B.internalFormat,de,$,B.normalized,B.colorSpace),xe=n.get(g),be=n.get(B);if(be.__renderTarget=g,!xe.__hasExternalTextures){const ce=Math.max(1,g.width>>re),se=Math.max(1,g.height>>re);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,Q,ce,se,g.depth,0,de,$,null):t.texImage2D(ie,re,Q,ce,se,0,de,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ie,be.__webglTexture,0,_t(g)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ie,be.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(b,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){const Z=g.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,re=N(g.stencilBuffer,ie),de=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(g),re,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(g),re,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,re,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,b)}else{const Z=g.textures;for(let ie=0;ie<Z.length;ie++){const re=Z[ie],de=s.convert(re.format,re.colorSpace),$=s.convert(re.type),Q=y(re.internalFormat,de,$,re.normalized,re.colorSpace);He(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(g),Q,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(g),Q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(b,g,B){const Z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(g.depthTexture);if(ie.__renderTarget=g,(!ie.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,g.depthTexture.addEventListener("dispose",U)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),he(i.TEXTURE_CUBE_MAP,g.depthTexture);const xe=s.convert(g.depthTexture.format),be=s.convert(g.depthTexture.type);let ce;g.depthTexture.format===xn?ce=i.DEPTH_COMPONENT24:g.depthTexture.format===Gn&&(ce=i.DEPTH24_STENCIL8);for(let se=0;se<6;se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ce,g.width,g.height,0,xe,be,null)}}else j(g.depthTexture,0);const re=ie.__webglTexture,de=_t(g),$=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Q=g.depthTexture.format===Gn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===xn)He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,re,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,re,0);else if(g.depthTexture.format===Gn)He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,re,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,re,0);else throw new Error("Unknown depthTexture format")}function Je(b){const g=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const Z=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=Z}if(b.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)Ve(g.__webglFramebuffer[Z],b,Z);else{const Z=b.texture.mipmaps;Z&&Z.length>0?Ve(g.__webglFramebuffer[0],b,0):Ve(g.__webglFramebuffer,b,0)}else if(B){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=i.createRenderbuffer(),at(g.__webglDepthbuffer[Z],b,!1);else{const ie=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,re)}}else{const Z=b.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),at(g.__webglDepthbuffer,b,!1);else{const ie=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(b,g,B){const Z=n.get(b);g!==void 0&&Ne(Z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Je(b)}function Ge(b){const g=b.texture,B=n.get(b),Z=n.get(g);b.addEventListener("dispose",v);const ie=b.textures,re=b.isWebGLCubeRenderTarget===!0,de=ie.length>1;if(de||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=g.version,a.memory.textures++),re){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let Q=0;Q<g.mipmaps.length;Q++)B.__webglFramebuffer[$][Q]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(de)for(let $=0,Q=ie.length;$<Q;$++){const xe=n.get(ie[$]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&He(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<ie.length;$++){const Q=ie[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);const xe=s.convert(Q.format,Q.colorSpace),be=s.convert(Q.type),ce=y(Q.internalFormat,xe,be,Q.normalized,Q.colorSpace,b.isXRRenderTarget===!0),se=_t(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ce,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),at(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),he(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)Ne(B.__webglFramebuffer[$][Q],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else Ne(B.__webglFramebuffer[$],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);d(g)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let $=0,Q=ie.length;$<Q;$++){const xe=ie[$],be=n.get(xe);let ce=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,be.__webglTexture),he(ce,xe),Ne(B.__webglFramebuffer,b,xe,i.COLOR_ATTACHMENT0+$,ce,0),d(xe)&&M(ce)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&($=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,Z.__webglTexture),he($,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)Ne(B.__webglFramebuffer[Q],b,g,i.COLOR_ATTACHMENT0,$,Q);else Ne(B.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,$,0);d(g)&&M($),t.unbindTexture()}b.depthBuffer&&Je(b)}function gt(b){const g=b.textures;for(let B=0,Z=g.length;B<Z;B++){const ie=g[B];if(d(ie)){const re=T(b),de=n.get(ie).__webglTexture;t.bindTexture(re,de),M(re),t.unbindTexture()}}}const ot=[],Lt=[];function I(b){if(b.samples>0){if(He(b)===!1){const g=b.textures,B=b.width,Z=b.height;let ie=i.COLOR_BUFFER_BIT;const re=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(b),$=g.length>1;if($)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const Q=b.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[xe]);const be=n.get(g[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,ie,i.NEAREST),c===!0&&(ot.length=0,Lt.length=0,ot.push(i.COLOR_ATTACHMENT0+xe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ot.push(re),Lt.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,de.__webglColorRenderbuffer[xe]);const be=n.get(g[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function _t(b){return Math.min(r.maxSamples,b.samples)}function He(b){const g=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function it(b){const g=a.render.frame;f.get(b)!==g&&(f.set(b,g),b.update())}function pe(b,g){const B=b.colorSpace,Z=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Rr&&B!==Cn&&(Xe.getTransfer(B)===Ze?(Z!==Yt||ie!==Ft)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",B)),g}function ct(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=H,this.getTextureUnits=W,this.setTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=ee,this.rebindTextures=st,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rg(i,e){function t(n,r=Cn){let s;const a=Xe.getTransfer(r);if(n===Ft)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bl)return i.BYTE;if(n===El)return i.SHORT;if(n===Li)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===sn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===wl)return i.RGB;if(n===Yt)return i.RGBA;if(n===xn)return i.DEPTH_COMPONENT;if(n===Gn)return i.DEPTH_STENCIL;if(n===Rl)return i.RED;if(n===ba)return i.RED_INTEGER;if(n===Hn)return i.RG;if(n===Ea)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===Sr||n===Mr||n===br||n===Er)if(a===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Us||n===Fs||n===Os||n===Bs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Us)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Os)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zs||n===ks||n===Gs||n===Vs||n===Hs||n===Ar||n===Ws)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===zs||n===ks)return a===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vs)return s.COMPRESSED_R11_EAC;if(n===Hs)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ar)return s.COMPRESSED_RG11_EAC;if(n===Ws)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xs||n===js||n===qs||n===Ys||n===$s||n===Ks||n===Zs||n===Js||n===Qs||n===ea||n===ta||n===na||n===ia||n===ra)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===js)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ys)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$s)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ks)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Js)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ea)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ta)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===na)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ia)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ra)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sa||n===aa||n===oa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===sa)return a===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===la||n===ca||n===wr||n===ua)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===la)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ua)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ag=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class og{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:sg,fragmentShader:ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lg extends Xn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,p=null,u=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",h=new og,d={},M=t.getContextAttributes();let T=null,y=null;const N=[],A=[],U=new Ke;let v=null;const w=new Gt;w.viewport=new dt;const O=new Gt;O.viewport=new dt;const R=[w,O],k=new gd;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=N[J];return fe===void 0&&(fe=new Kr,N[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=N[J];return fe===void 0&&(fe=new Kr,N[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=N[J];return fe===void 0&&(fe=new Kr,N[J]=fe),fe.getHandSpace()};function D(J){const fe=A.indexOf(J.inputSource);if(fe===-1)return;const le=N[fe];le!==void 0&&(le.update(J.inputSource,J.frame,l||a),le.dispatchEvent({type:J.type,data:J.inputSource}))}function L(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",C);for(let J=0;J<N.length;J++){const fe=A[J];fe!==null&&(A[J]=null,N[J].disconnect(fe))}H=null,W=null,h.reset();for(const J in d)delete d[J];e.setRenderTarget(T),m=null,u=null,p=null,r=null,y=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",L),r.addEventListener("inputsourceschange",C),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(U),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Pe=null,Ie=null;M.depth&&(Ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=M.stencil?Gn:xn,Pe=M.stencil?Di:sn);const Ne={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Ne),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new rn(u.textureWidth,u.textureHeight,{format:Yt,type:Ft,depthTexture:new fi(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new rn(m.framebufferWidth,m.framebufferHeight,{format:Yt,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function C(J){for(let fe=0;fe<J.removed.length;fe++){const le=J.removed[fe],Pe=A.indexOf(le);Pe>=0&&(A[Pe]=null,N[Pe].disconnect(le))}for(let fe=0;fe<J.added.length;fe++){const le=J.added[fe];let Pe=A.indexOf(le);if(Pe===-1){for(let Ne=0;Ne<N.length;Ne++)if(Ne>=A.length){A.push(le),Pe=Ne;break}else if(A[Ne]===null){A[Ne]=le,Pe=Ne;break}if(Pe===-1)break}const Ie=N[Pe];Ie&&Ie.connect(le)}}const j=new z,Y=new z;function q(J,fe,le){j.setFromMatrixPosition(fe.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const Pe=j.distanceTo(Y),Ie=fe.projectionMatrix.elements,Ne=le.projectionMatrix.elements,at=Ie[14]/(Ie[10]-1),Ve=Ie[14]/(Ie[10]+1),Je=(Ie[9]+1)/Ie[5],st=(Ie[9]-1)/Ie[5],Ge=(Ie[8]-1)/Ie[0],gt=(Ne[8]+1)/Ne[0],ot=at*Ge,Lt=at*gt,I=Pe/(-Ge+gt),_t=I*-Ge;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(_t),J.translateZ(I),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ie[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const He=at+I,it=Ve+I,pe=ot-_t,ct=Lt+(Pe-_t),b=Je*Ve/it*He,g=st*Ve/it*He;J.projectionMatrix.makePerspective(pe,ct,b,g,He,it),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ee(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let fe=J.near,le=J.far;h.texture!==null&&(h.depthNear>0&&(fe=h.depthNear),h.depthFar>0&&(le=h.depthFar)),k.near=O.near=w.near=fe,k.far=O.far=w.far=le,(H!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,W=k.far),k.layers.mask=J.layers.mask|6,w.layers.mask=k.layers.mask&-5,O.layers.mask=k.layers.mask&-3;const Pe=J.parent,Ie=k.cameras;ee(k,Pe);for(let Ne=0;Ne<Ie.length;Ne++)ee(Ie[Ne],Pe);Ie.length===2?q(k,w,O):k.projectionMatrix.copy(w.projectionMatrix),oe(J,k,Pe)};function oe(J,fe,le){le===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(le.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ui*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(k)},this.getCameraTexture=function(J){return d[J]};let Se=null;function ye(J,fe){if(f=fe.getViewerPose(l||a),_=fe,f!==null){const le=f.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Pe=!1;le.length!==k.cameras.length&&(k.cameras.length=0,Pe=!0);for(let Ve=0;Ve<le.length;Ve++){const Je=le[Ve];let st=null;if(m!==null)st=m.getViewport(Je);else{const gt=p.getViewSubImage(u,Je);st=gt.viewport,Ve===0&&(e.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(y))}let Ge=R[Ve];Ge===void 0&&(Ge=new Gt,Ge.layers.enable(Ve),Ge.viewport=new dt,R[Ve]=Ge),Ge.matrix.fromArray(Je.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Je.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(st.x,st.y,st.width,st.height),Ve===0&&(k.matrix.copy(Ge.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pe===!0&&k.cameras.push(Ge)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=n.getBinding();const Ve=p.getDepthInformation(le[0]);Ve&&Ve.isValid&&Ve.texture&&h.init(Ve,r.renderState)}if(Ie&&Ie.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let Ve=0;Ve<le.length;Ve++){const Je=le[Ve].camera;if(Je){let st=d[Je];st||(st=new Bl,d[Je]=st);const Ge=p.getCameraImage(Je);st.sourceTexture=Ge}}}}for(let le=0;le<N.length;le++){const Pe=A[le],Ie=N[le];Pe!==null&&Ie!==void 0&&Ie.update(Pe,fe,l||a)}Se&&Se(J,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),_=null}const he=new Vl;he.setAnimationLoop(ye),this.setAnimationLoop=function(J){Se=J},this.dispose=function(){}}}const cg=new lt,$l=new Ue;$l.set(-1,0,0,0,1,0,0,0,1);function ug(i,e){function t(h,d){h.matrixAutoUpdate===!0&&h.updateMatrix(),d.value.copy(h.matrix)}function n(h,d){d.color.getRGB(h.fogColor.value,zl(i)),d.isFog?(h.fogNear.value=d.near,h.fogFar.value=d.far):d.isFogExp2&&(h.fogDensity.value=d.density)}function r(h,d,M,T,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(h,d):d.isMeshLambertMaterial?(s(h,d),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(h,d),p(h,d)):d.isMeshPhongMaterial?(s(h,d),f(h,d),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(h,d),u(h,d),d.isMeshPhysicalMaterial&&m(h,d,y)):d.isMeshMatcapMaterial?(s(h,d),_(h,d)):d.isMeshDepthMaterial?s(h,d):d.isMeshDistanceMaterial?(s(h,d),S(h,d)):d.isMeshNormalMaterial?s(h,d):d.isLineBasicMaterial?(a(h,d),d.isLineDashedMaterial&&o(h,d)):d.isPointsMaterial?c(h,d,M,T):d.isSpriteMaterial?l(h,d):d.isShadowMaterial?(h.color.value.copy(d.color),h.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(h,d){h.opacity.value=d.opacity,d.color&&h.diffuse.value.copy(d.color),d.emissive&&h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(h.map.value=d.map,t(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.bumpMap&&(h.bumpMap.value=d.bumpMap,t(d.bumpMap,h.bumpMapTransform),h.bumpScale.value=d.bumpScale,d.side===Pt&&(h.bumpScale.value*=-1)),d.normalMap&&(h.normalMap.value=d.normalMap,t(d.normalMap,h.normalMapTransform),h.normalScale.value.copy(d.normalScale),d.side===Pt&&h.normalScale.value.negate()),d.displacementMap&&(h.displacementMap.value=d.displacementMap,t(d.displacementMap,h.displacementMapTransform),h.displacementScale.value=d.displacementScale,h.displacementBias.value=d.displacementBias),d.emissiveMap&&(h.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,h.emissiveMapTransform)),d.specularMap&&(h.specularMap.value=d.specularMap,t(d.specularMap,h.specularMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest);const M=e.get(d),T=M.envMap,y=M.envMapRotation;T&&(h.envMap.value=T,h.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply($l),h.reflectivity.value=d.reflectivity,h.ior.value=d.ior,h.refractionRatio.value=d.refractionRatio),d.lightMap&&(h.lightMap.value=d.lightMap,h.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,h.lightMapTransform)),d.aoMap&&(h.aoMap.value=d.aoMap,h.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,h.aoMapTransform))}function a(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,d.map&&(h.map.value=d.map,t(d.map,h.mapTransform))}function o(h,d){h.dashSize.value=d.dashSize,h.totalSize.value=d.dashSize+d.gapSize,h.scale.value=d.scale}function c(h,d,M,T){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.size.value=d.size*M,h.scale.value=T*.5,d.map&&(h.map.value=d.map,t(d.map,h.uvTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function l(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.rotation.value=d.rotation,d.map&&(h.map.value=d.map,t(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function f(h,d){h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)}function p(h,d){d.gradientMap&&(h.gradientMap.value=d.gradientMap)}function u(h,d){h.metalness.value=d.metalness,d.metalnessMap&&(h.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,h.metalnessMapTransform)),h.roughness.value=d.roughness,d.roughnessMap&&(h.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,h.roughnessMapTransform)),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)}function m(h,d,M){h.ior.value=d.ior,d.sheen>0&&(h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),h.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(h.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,h.sheenColorMapTransform)),d.sheenRoughnessMap&&(h.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,h.sheenRoughnessMapTransform))),d.clearcoat>0&&(h.clearcoat.value=d.clearcoat,h.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(h.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,h.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(h.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pt&&h.clearcoatNormalScale.value.negate())),d.dispersion>0&&(h.dispersion.value=d.dispersion),d.iridescence>0&&(h.iridescence.value=d.iridescence,h.iridescenceIOR.value=d.iridescenceIOR,h.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(h.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,h.iridescenceMapTransform)),d.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),d.transmission>0&&(h.transmission.value=d.transmission,h.transmissionSamplerMap.value=M.texture,h.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(h.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,h.transmissionMapTransform)),h.thickness.value=d.thickness,d.thicknessMap&&(h.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=d.attenuationDistance,h.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(h.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(h.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=d.specularIntensity,h.specularColor.value.copy(d.specularColor),d.specularColorMap&&(h.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,h.specularColorMapTransform)),d.specularIntensityMap&&(h.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,h.specularIntensityMapTransform))}function _(h,d){d.matcap&&(h.matcap.value=d.matcap)}function S(h,d){const M=e.get(d).light;h.referencePosition.value.setFromMatrixPosition(M.matrixWorld),h.nearDistance.value=M.shadow.camera.near,h.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dg(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){const y=T.program;n.uniformBlockBinding(M,y)}function l(M,T){let y=r[M.id];y===void 0&&(_(M),y=f(M),r[M.id]=y,M.addEventListener("dispose",h));const N=T.program;n.updateUBOMapping(M,N);const A=e.render.frame;s[M.id]!==A&&(u(M),s[M.id]=A)}function f(M){const T=p();M.__bindingPointIndex=T;const y=i.createBuffer(),N=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,N,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const T=r[M.id],y=M.uniforms,N=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,U=y.length;A<U;A++){const v=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,O=v.length;w<O;w++){const R=v[w];if(m(R,A,w,N)===!0){const k=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let D=0;D<H.length;D++){const L=H[D],C=S(L);typeof L=="number"||typeof L=="boolean"?(R.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,k+W,R.__data)):L.isMatrix3?(R.__data[0]=L.elements[0],R.__data[1]=L.elements[1],R.__data[2]=L.elements[2],R.__data[3]=0,R.__data[4]=L.elements[3],R.__data[5]=L.elements[4],R.__data[6]=L.elements[5],R.__data[7]=0,R.__data[8]=L.elements[6],R.__data[9]=L.elements[7],R.__data[10]=L.elements[8],R.__data[11]=0):ArrayBuffer.isView(L)?R.__data.set(new L.constructor(L.buffer,L.byteOffset,R.__data.length)):(L.toArray(R.__data,W),W+=C.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,T,y,N){const A=M.value,U=T+"_"+y;if(N[U]===void 0)return typeof A=="number"||typeof A=="boolean"?N[U]=A:ArrayBuffer.isView(A)?N[U]=A.slice():N[U]=A.clone(),!0;{const v=N[U];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return N[U]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(v.equals(A)===!1)return v.copy(A),!0}}return!1}function _(M){const T=M.uniforms;let y=0;const N=16;for(let U=0,v=T.length;U<v;U++){const w=Array.isArray(T[U])?T[U]:[T[U]];for(let O=0,R=w.length;O<R;O++){const k=w[O],H=Array.isArray(k.value)?k.value:[k.value];for(let W=0,D=H.length;W<D;W++){const L=H[W],C=S(L),j=y%N,Y=j%C.boundary,q=j+Y;y+=Y,q!==0&&N-q<C.storage&&(y+=N-q),k.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=C.storage}}}const A=y%N;return A>0&&(y+=N-A),M.__size=y,M.__cache={},this}function S(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",M),T}function h(M){const T=M.target;T.removeEventListener("dispose",h);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}const hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jt=null;function fg(){return Jt===null&&(Jt=new Zu(hg,16,16,Hn,_n),Jt.name="DFG_LUT",Jt.minFilter=At,Jt.magFilter=At,Jt.wrapS=pn,Jt.wrapT=pn,Jt.generateMipmaps=!1,Jt.needsUpdate=!0),Jt}class pg{constructor(e={}){const{canvas:t=fu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Ft}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=m,h=new Set([ya,Ea,ba]),d=new Set([Ft,sn,Li,Di,Sa,Ma]),M=new Uint32Array(4),T=new Int32Array(4),y=new z;let N=null,A=null;const U=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let R=!1,k=null;this._outputColorSpace=kt;let H=0,W=0,D=null,L=-1,C=null;const j=new dt,Y=new dt;let q=null;const ee=new Ye(0);let oe=0,Se=t.width,ye=t.height,he=1,J=null,fe=null;const le=new dt(0,0,Se,ye),Pe=new dt(0,0,Se,ye);let Ie=!1;const Ne=new Na;let at=!1,Ve=!1;const Je=new lt,st=new z,Ge=new dt,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Lt(){return D===null?he:1}let I=n;function _t(x,F){return t.getContext(x,F)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xa}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),I===null){const F="webgl2";if(I=_t(F,x),I===null)throw _t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw qe("WebGLRenderer: "+x.message),x}let He,it,pe,ct,b,g,B,Z,ie,re,de,$,Q,xe,be,ce,se,Le,Be,$e,P,ae,K;function ve(){He=new fp(I),He.init(),P=new rg(I,He),it=new sp(I,He,e,P),pe=new ng(I,He),it.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),ct=new gp(I),b=new Vm,g=new ig(I,He,pe,b,it,P,ct),B=new hp(O),Z=new vd(I),ae=new ip(I,Z),ie=new pp(I,Z,ct,ae),re=new xp(I,ie,Z,ae,ct),Le=new _p(I,it,g),be=new ap(b),de=new Gm(O,B,He,it,ae,be),$=new ug(O,b),Q=new Wm,xe=new Km(He),se=new np(O,B,pe,re,_,c),ce=new tg(O,re,it),K=new dg(I,ct,it,pe),Be=new rp(I,He,ct),$e=new mp(I,He,ct),ct.programs=de.programs,O.capabilities=it,O.extensions=He,O.properties=b,O.renderLists=Q,O.shadowMap=ce,O.state=pe,O.info=ct}ve(),S!==Ft&&(w=new Sp(S,t.width,t.height,r,s));const ue=new lg(O,I);this.xr=ue,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=He.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=He.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(x){x!==void 0&&(he=x,this.setSize(Se,ye,!1))},this.getSize=function(x){return x.set(Se,ye)},this.setSize=function(x,F,X=!0){if(ue.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=x,ye=F,t.width=Math.floor(x*he),t.height=Math.floor(F*he),X===!0&&(t.style.width=x+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(Se*he,ye*he).floor()},this.setDrawingBufferSize=function(x,F,X){Se=x,ye=F,he=X,t.width=Math.floor(x*X),t.height=Math.floor(F*X),this.setViewport(0,0,x,F)},this.setEffects=function(x){if(S===Ft){qe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let F=0;F<x.length;F++)if(x[F].isOutputPass===!0){Ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(j)},this.getViewport=function(x){return x.copy(le)},this.setViewport=function(x,F,X,G){x.isVector4?le.set(x.x,x.y,x.z,x.w):le.set(x,F,X,G),pe.viewport(j.copy(le).multiplyScalar(he).round())},this.getScissor=function(x){return x.copy(Pe)},this.setScissor=function(x,F,X,G){x.isVector4?Pe.set(x.x,x.y,x.z,x.w):Pe.set(x,F,X,G),pe.scissor(Y.copy(Pe).multiplyScalar(he).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(x){pe.setScissorTest(Ie=x)},this.setOpaqueSort=function(x){J=x},this.setTransparentSort=function(x){fe=x},this.getClearColor=function(x){return x.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(x=!0,F=!0,X=!0){let G=0;if(x){let V=!1;if(D!==null){const _e=D.texture.format;V=h.has(_e)}if(V){const _e=D.texture.type,Ee=d.has(_e),ge=se.getClearColor(),Te=se.getClearAlpha(),we=ge.r,Oe=ge.g,ke=ge.b;Ee?(M[0]=we,M[1]=Oe,M[2]=ke,M[3]=Te,I.clearBufferuiv(I.COLOR,0,M)):(T[0]=we,T[1]=Oe,T[2]=ke,T[3]=Te,I.clearBufferiv(I.COLOR,0,T))}else G|=I.COLOR_BUFFER_BIT}F&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),k=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),se.dispose(),Q.dispose(),xe.dispose(),b.dispose(),B.dispose(),re.dispose(),ae.dispose(),K.dispose(),de.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ba),ue.removeEventListener("sessionend",za),Ln.stop()};function ne(x){x.preventDefault(),ro("WebGLRenderer: Context Lost."),R=!0}function Ae(){ro("WebGLRenderer: Context Restored."),R=!1;const x=ct.autoReset,F=ce.enabled,X=ce.autoUpdate,G=ce.needsUpdate,V=ce.type;ve(),ct.autoReset=x,ce.enabled=F,ce.autoUpdate=X,ce.needsUpdate=G,ce.type=V}function Fe(x){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ht(x){const F=x.target;F.removeEventListener("dispose",ht),Qe(F)}function Qe(x){on(x),b.remove(x)}function on(x){const F=b.get(x).programs;F!==void 0&&(F.forEach(function(X){de.releaseProgram(X)}),x.isShaderMaterial&&de.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,X,G,V,_e){F===null&&(F=gt);const Ee=V.isMesh&&V.matrixWorld.determinant()<0,ge=Jl(x,F,X,G,V);pe.setMaterial(G,Ee);let Te=X.index,we=1;if(G.wireframe===!0){if(Te=ie.getWireframeAttribute(X),Te===void 0)return;we=2}const Oe=X.drawRange,ke=X.attributes.position;let Re=Oe.start*we,et=(Oe.start+Oe.count)*we;_e!==null&&(Re=Math.max(Re,_e.start*we),et=Math.min(et,(_e.start+_e.count)*we)),Te!==null?(Re=Math.max(Re,0),et=Math.min(et,Te.count)):ke!=null&&(Re=Math.max(Re,0),et=Math.min(et,ke.count));const ft=et-Re;if(ft<0||ft===1/0)return;ae.setup(V,G,ge,X,Te);let ut,tt=Be;if(Te!==null&&(ut=Z.get(Te),tt=$e,tt.setIndex(ut)),V.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*Lt()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(V.isLine){let Et=G.linewidth;Et===void 0&&(Et=1),pe.setLineWidth(Et*Lt()),V.isLineSegments?tt.setMode(I.LINES):V.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else V.isPoints?tt.setMode(I.POINTS):V.isSprite&&tt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(He.get("WEBGL_multi_draw"))tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Et=V._multiDrawStarts,Me=V._multiDrawCounts,Dt=V._multiDrawCount,je=Te?Z.get(Te).bytesPerElement:1,Ot=b.get(G).currentProgram.getUniforms();for(let Kt=0;Kt<Dt;Kt++)Ot.setValue(I,"_gl_DrawID",Kt),tt.render(Et[Kt]/je,Me[Kt])}else if(V.isInstancedMesh)tt.renderInstances(Re,ft,V.count);else if(X.isInstancedBufferGeometry){const Et=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Me=Math.min(X.instanceCount,Et);tt.renderInstances(Re,ft,Me)}else tt.render(Re,ft)};function $t(x,F,X){x.transparent===!0&&x.side===fn&&x.forceSinglePass===!1?(x.side=Pt,x.needsUpdate=!0,Gi(x,F,X),x.side=Nn,x.needsUpdate=!0,Gi(x,F,X),x.side=fn):Gi(x,F,X)}this.compile=function(x,F,X=null){X===null&&(X=x),A=xe.get(X),A.init(F),v.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),x!==X&&x.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const G=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _e=V.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){const ge=_e[Ee];$t(ge,X,V),G.add(ge)}else $t(_e,X,V),G.add(_e)}),A=v.pop(),G},this.compileAsync=function(x,F,X=null){const G=this.compile(x,F,X);return new Promise(V=>{function _e(){if(G.forEach(function(Ee){b.get(Ee).currentProgram.isReady()&&G.delete(Ee)}),G.size===0){V(x);return}setTimeout(_e,10)}He.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Br=null;function Kl(x){Br&&Br(x)}function Ba(){Ln.stop()}function za(){Ln.start()}const Ln=new Vl;Ln.setAnimationLoop(Kl),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(x){Br=x,ue.setAnimationLoop(x),x===null?Ln.stop():Ln.start()},ue.addEventListener("sessionstart",Ba),ue.addEventListener("sessionend",za),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;k!==null&&k.renderStart(x,F);const X=ue.enabled===!0&&ue.isPresenting===!0,G=w!==null&&(D===null||X)&&w.begin(O,D);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),x.isScene===!0&&x.onBeforeRender(O,x,F,D),A=xe.get(x,v.length),A.init(F),A.state.textureUnits=g.getTextureUnits(),v.push(A),Je.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ne.setFromProjectionMatrix(Je,tn,F.reversedDepth),Ve=this.localClippingEnabled,at=be.init(this.clippingPlanes,Ve),N=Q.get(x,U.length),N.init(),U.push(N),ue.enabled===!0&&ue.isPresenting===!0){const Ee=O.xr.getDepthSensingMesh();Ee!==null&&zr(Ee,F,-1/0,O.sortObjects)}zr(x,F,0,O.sortObjects),N.finish(),O.sortObjects===!0&&N.sort(J,fe),ot=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ot&&se.addToRenderList(N,x),this.info.render.frame++,at===!0&&be.beginShadows();const V=A.state.shadowsArray;if(ce.render(V,x,F),at===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&w.hasRenderPass())===!1){const Ee=N.opaque,ge=N.transmissive;if(A.setupLights(),F.isArrayCamera){const Te=F.cameras;if(ge.length>0)for(let we=0,Oe=Te.length;we<Oe;we++){const ke=Te[we];Ga(Ee,ge,x,ke)}ot&&se.render(x);for(let we=0,Oe=Te.length;we<Oe;we++){const ke=Te[we];ka(N,x,ke,ke.viewport)}}else ge.length>0&&Ga(Ee,ge,x,F),ot&&se.render(x),ka(N,x,F)}D!==null&&W===0&&(g.updateMultisampleRenderTarget(D),g.updateRenderTargetMipmap(D)),G&&w.end(O),x.isScene===!0&&x.onAfterRender(O,x,F),ae.resetDefaultState(),L=-1,C=null,v.pop(),v.length>0?(A=v[v.length-1],g.setTextureUnits(A.state.textureUnits),at===!0&&be.setGlobalState(O.clippingPlanes,A.state.camera)):A=null,U.pop(),U.length>0?N=U[U.length-1]:N=null,k!==null&&k.renderEnd()};function zr(x,F,X,G){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLightProbeGrid)A.pushLightProbeGrid(x);else if(x.isLight)A.pushLight(x),x.castShadow&&A.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ne.intersectsSprite(x)){G&&Ge.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Je);const Ee=re.update(x),ge=x.material;ge.visible&&N.push(x,Ee,ge,X,Ge.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ne.intersectsObject(x))){const Ee=re.update(x),ge=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ge.copy(x.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ge.copy(Ee.boundingSphere.center)),Ge.applyMatrix4(x.matrixWorld).applyMatrix4(Je)),Array.isArray(ge)){const Te=Ee.groups;for(let we=0,Oe=Te.length;we<Oe;we++){const ke=Te[we],Re=ge[ke.materialIndex];Re&&Re.visible&&N.push(x,Ee,Re,X,Ge.z,ke)}}else ge.visible&&N.push(x,Ee,ge,X,Ge.z,null)}}const _e=x.children;for(let Ee=0,ge=_e.length;Ee<ge;Ee++)zr(_e[Ee],F,X,G)}function ka(x,F,X,G){const{opaque:V,transmissive:_e,transparent:Ee}=x;A.setupLightsView(X),at===!0&&be.setGlobalState(O.clippingPlanes,X),G&&pe.viewport(j.copy(G)),V.length>0&&ki(V,F,X),_e.length>0&&ki(_e,F,X),Ee.length>0&&ki(Ee,F,X),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ga(x,F,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){const Re=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new rn(1,1,{generateMipmaps:!0,type:Re?_n:Ft,minFilter:kn,samples:Math.max(4,it.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const _e=A.state.transmissionRenderTarget[G.id],Ee=G.viewport||j;_e.setSize(Ee.z*O.transmissionResolutionScale,Ee.w*O.transmissionResolutionScale);const ge=O.getRenderTarget(),Te=O.getActiveCubeFace(),we=O.getActiveMipmapLevel();O.setRenderTarget(_e),O.getClearColor(ee),oe=O.getClearAlpha(),oe<1&&O.setClearColor(16777215,.5),O.clear(),ot&&se.render(X);const Oe=O.toneMapping;O.toneMapping=nn;const ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),at===!0&&be.setGlobalState(O.clippingPlanes,G),ki(x,X,G),g.updateMultisampleRenderTarget(_e),g.updateRenderTargetMipmap(_e),He.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let et=0,ft=F.length;et<ft;et++){const ut=F[et],{object:tt,geometry:Et,material:Me,group:Dt}=ut;if(Me.side===fn&&tt.layers.test(G.layers)){const je=Me.side;Me.side=Pt,Me.needsUpdate=!0,Va(tt,X,G,Et,Me,Dt),Me.side=je,Me.needsUpdate=!0,Re=!0}}Re===!0&&(g.updateMultisampleRenderTarget(_e),g.updateRenderTargetMipmap(_e))}O.setRenderTarget(ge,Te,we),O.setClearColor(ee,oe),ke!==void 0&&(G.viewport=ke),O.toneMapping=Oe}function ki(x,F,X){const G=F.isScene===!0?F.overrideMaterial:null;for(let V=0,_e=x.length;V<_e;V++){const Ee=x[V],{object:ge,geometry:Te,group:we}=Ee;let Oe=Ee.material;Oe.allowOverride===!0&&G!==null&&(Oe=G),ge.layers.test(X.layers)&&Va(ge,F,X,Te,Oe,we)}}function Va(x,F,X,G,V,_e){x.onBeforeRender(O,F,X,G,V,_e),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(O,F,X,G,x,_e),V.transparent===!0&&V.side===fn&&V.forceSinglePass===!1?(V.side=Pt,V.needsUpdate=!0,O.renderBufferDirect(X,F,G,V,x,_e),V.side=Nn,V.needsUpdate=!0,O.renderBufferDirect(X,F,G,V,x,_e),V.side=fn):O.renderBufferDirect(X,F,G,V,x,_e),x.onAfterRender(O,F,X,G,V,_e)}function Gi(x,F,X){F.isScene!==!0&&(F=gt);const G=b.get(x),V=A.state.lights,_e=A.state.shadowsArray,Ee=V.state.version,ge=de.getParameters(x,V.state,_e,F,X,A.state.lightProbeGridArray),Te=de.getProgramCacheKey(ge);let we=G.programs;G.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const Oe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;G.envMap=B.get(x.envMap||G.environment,Oe),G.envMapRotation=G.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,we===void 0&&(x.addEventListener("dispose",ht),we=new Map,G.programs=we);let ke=we.get(Te);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===Ee)return Wa(x,ge),ke}else ge.uniforms=de.getUniforms(x),k!==null&&x.isNodeMaterial&&k.build(x,X,ge),x.onBeforeCompile(ge,O),ke=de.acquireProgram(ge,Te),we.set(Te,ke),G.uniforms=ge.uniforms;const Re=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=be.uniform),Wa(x,ge),G.needsLights=ec(x),G.lightsStateVersion=Ee,G.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=A.state.lightProbeGridArray.length>0,G.currentProgram=ke,G.uniformsList=null,ke}function Ha(x){if(x.uniformsList===null){const F=x.currentProgram.getUniforms();x.uniformsList=yr.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function Wa(x,F){const X=b.get(x);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Zl(x,F){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let X=0,G=x.length;X<G;X++){const V=x[X];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Jl(x,F,X,G,V){F.isScene!==!0&&(F=gt),g.resetTextureUnits();const _e=F.fog,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,ge=D===null?O.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Xe.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,we=B.get(G.envMap||Ee,Te),Oe=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,ft=!!X.morphAttributes.color;let ut=nn;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ut=O.toneMapping);const tt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Et=tt!==void 0?tt.length:0,Me=b.get(G),Dt=A.state.lights;if(at===!0&&(Ve===!0||x!==C)){const rt=x===C&&G.id===L;be.setState(G,x,rt)}let je=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Dt.state.version||Me.outputColorSpace!==ge||V.isBatchedMesh&&Me.batching===!1||!V.isBatchedMesh&&Me.batching===!0||V.isBatchedMesh&&Me.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Me.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Me.instancing===!1||!V.isInstancedMesh&&Me.instancing===!0||V.isSkinnedMesh&&Me.skinning===!1||!V.isSkinnedMesh&&Me.skinning===!0||V.isInstancedMesh&&Me.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Me.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Me.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Me.instancingMorph===!1&&V.morphTexture!==null||Me.envMap!==we||G.fog===!0&&Me.fog!==_e||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==be.numPlanes||Me.numIntersection!==be.numIntersection)||Me.vertexAlphas!==Oe||Me.vertexTangents!==ke||Me.morphTargets!==Re||Me.morphNormals!==et||Me.morphColors!==ft||Me.toneMapping!==ut||Me.morphTargetsCount!==Et||!!Me.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,Me.__version=G.version);let Ot=Me.currentProgram;je===!0&&(Ot=Gi(G,F,V),k&&G.isNodeMaterial&&k.onUpdateProgram(G,Ot,Me));let Kt=!1,Sn=!1,jn=!1;const nt=Ot.getUniforms(),pt=Me.uniforms;if(pe.useProgram(Ot.program)&&(Kt=!0,Sn=!0,jn=!0),G.id!==L&&(L=G.id,Sn=!0),Me.needsLights){const rt=Zl(A.state.lightProbeGridArray,V);Me.lightProbeGrid!==rt&&(Me.lightProbeGrid=rt,Sn=!0)}if(Kt||C!==x){pe.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),nt.setValue(I,"projectionMatrix",x.projectionMatrix),nt.setValue(I,"viewMatrix",x.matrixWorldInverse);const bn=nt.map.cameraPosition;bn!==void 0&&bn.setValue(I,st.setFromMatrixPosition(x.matrixWorld)),it.logarithmicDepthBuffer&&nt.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&nt.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),C!==x&&(C=x,Sn=!0,jn=!0)}if(Me.needsLights&&(Dt.state.directionalShadowMap.length>0&&nt.setValue(I,"directionalShadowMap",Dt.state.directionalShadowMap,g),Dt.state.spotShadowMap.length>0&&nt.setValue(I,"spotShadowMap",Dt.state.spotShadowMap,g),Dt.state.pointShadowMap.length>0&&nt.setValue(I,"pointShadowMap",Dt.state.pointShadowMap,g)),V.isSkinnedMesh){nt.setOptional(I,V,"bindMatrix"),nt.setOptional(I,V,"bindMatrixInverse");const rt=V.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),nt.setValue(I,"boneTexture",rt.boneTexture,g))}V.isBatchedMesh&&(nt.setOptional(I,V,"batchingTexture"),nt.setValue(I,"batchingTexture",V._matricesTexture,g),nt.setOptional(I,V,"batchingIdTexture"),nt.setValue(I,"batchingIdTexture",V._indirectTexture,g),nt.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&nt.setValue(I,"batchingColorTexture",V._colorsTexture,g));const Mn=X.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Le.update(V,X,Ot),(Sn||Me.receiveShadow!==V.receiveShadow)&&(Me.receiveShadow=V.receiveShadow,nt.setValue(I,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(pt.envMapIntensity.value=F.environmentIntensity),pt.dfgLUT!==void 0&&(pt.dfgLUT.value=fg()),Sn){if(nt.setValue(I,"toneMappingExposure",O.toneMappingExposure),Me.needsLights&&Ql(pt,jn),_e&&G.fog===!0&&$.refreshFogUniforms(pt,_e),$.refreshMaterialUniforms(pt,G,he,ye,A.state.transmissionRenderTarget[x.id]),Me.needsLights&&Me.lightProbeGrid){const rt=Me.lightProbeGrid;pt.probesSH.value=rt.texture,pt.probesMin.value.copy(rt.boundingBox.min),pt.probesMax.value.copy(rt.boundingBox.max),pt.probesResolution.value.copy(rt.resolution)}yr.upload(I,Ha(Me),pt,g)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(yr.upload(I,Ha(Me),pt,g),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&nt.setValue(I,"center",V.center),nt.setValue(I,"modelViewMatrix",V.modelViewMatrix),nt.setValue(I,"normalMatrix",V.normalMatrix),nt.setValue(I,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const rt=G.uniformsGroups;for(let bn=0,qn=rt.length;bn<qn;bn++){const Xa=rt[bn];K.update(Xa,Ot),K.bind(Xa,Ot)}}return Ot}function Ql(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function ec(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,F,X){const G=b.get(x);G.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),b.get(x.texture).__webglTexture=F,b.get(x.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,F){const X=b.get(x);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const tc=I.createFramebuffer();this.setRenderTarget=function(x,F=0,X=0){D=x,H=F,W=X;let G=null,V=!1,_e=!1;if(x){const ge=b.get(x);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),j.copy(x.viewport),Y.copy(x.scissor),q=x.scissorTest,pe.viewport(j),pe.scissor(Y),pe.setScissorTest(q),L=-1;return}else if(ge.__webglFramebuffer===void 0)g.setupRenderTarget(x);else if(ge.__hasExternalTextures)g.rebindTextures(x,b.get(x.texture).__webglTexture,b.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Oe=x.depthTexture;if(ge.__boundDepthTexture!==Oe){if(Oe!==null&&b.has(Oe)&&(x.width!==Oe.image.width||x.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(x)}}const Te=x.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);const we=b.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(we[F])?G=we[F][X]:G=we[F],V=!0):x.samples>0&&g.useMultisampledRTT(x)===!1?G=b.get(x).__webglMultisampledFramebuffer:Array.isArray(we)?G=we[X]:G=we,j.copy(x.viewport),Y.copy(x.scissor),q=x.scissorTest}else j.copy(le).multiplyScalar(he).floor(),Y.copy(Pe).multiplyScalar(he).floor(),q=Ie;if(X!==0&&(G=tc),pe.bindFramebuffer(I.FRAMEBUFFER,G)&&pe.drawBuffers(x,G),pe.viewport(j),pe.scissor(Y),pe.setScissorTest(q),V){const ge=b.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,X)}else if(_e){const ge=F;for(let Te=0;Te<x.textures.length;Te++){const we=b.get(x.textures[Te]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Te,we.__webglTexture,X,ge)}}else if(x!==null&&X!==0){const ge=b.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,X)}L=-1},this.readRenderTargetPixels=function(x,F,X,G,V,_e,Ee,ge=0){if(!(x&&x.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=b.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){pe.bindFramebuffer(I.FRAMEBUFFER,Te);try{const we=x.textures[ge],Oe=we.format,ke=we.type;if(x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!it.textureFormatReadable(Oe)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(ke)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-G&&X>=0&&X<=x.height-V&&I.readPixels(F,X,G,V,P.convert(Oe),P.convert(ke),_e)}finally{const we=D!==null?b.get(D).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(x,F,X,G,V,_e,Ee,ge=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=b.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te)if(F>=0&&F<=x.width-G&&X>=0&&X<=x.height-V){pe.bindFramebuffer(I.FRAMEBUFFER,Te);const we=x.textures[ge],Oe=we.format,ke=we.type;if(x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!it.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(F,X,G,V,P.convert(Oe),P.convert(ke),0);const et=D!==null?b.get(D).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,et);const ft=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await pu(I,ft,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(Re),I.deleteSync(ft),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,F=null,X=0){const G=Math.pow(2,-X),V=Math.floor(x.image.width*G),_e=Math.floor(x.image.height*G),Ee=F!==null?F.x:0,ge=F!==null?F.y:0;g.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Ee,ge,V,_e),pe.unbindTexture()};const nc=I.createFramebuffer(),ic=I.createFramebuffer();this.copyTextureToTexture=function(x,F,X=null,G=null,V=0,_e=0){let Ee,ge,Te,we,Oe,ke,Re,et,ft;const ut=x.isCompressedTexture?x.mipmaps[_e]:x.image;if(X!==null)Ee=X.max.x-X.min.x,ge=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,Oe=X.min.y,ke=X.isBox3?X.min.z:0;else{const pt=Math.pow(2,-V);Ee=Math.floor(ut.width*pt),ge=Math.floor(ut.height*pt),x.isDataArrayTexture?Te=ut.depth:x.isData3DTexture?Te=Math.floor(ut.depth*pt):Te=1,we=0,Oe=0,ke=0}G!==null?(Re=G.x,et=G.y,ft=G.z):(Re=0,et=0,ft=0);const tt=P.convert(F.format),Et=P.convert(F.type);let Me;F.isData3DTexture?(g.setTexture3D(F,0),Me=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(g.setTexture2DArray(F,0),Me=I.TEXTURE_2D_ARRAY):(g.setTexture2D(F,0),Me=I.TEXTURE_2D),pe.activeTexture(I.TEXTURE0),pe.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Dt=pe.getParameter(I.UNPACK_ROW_LENGTH),je=pe.getParameter(I.UNPACK_IMAGE_HEIGHT),Ot=pe.getParameter(I.UNPACK_SKIP_PIXELS),Kt=pe.getParameter(I.UNPACK_SKIP_ROWS),Sn=pe.getParameter(I.UNPACK_SKIP_IMAGES);pe.pixelStorei(I.UNPACK_ROW_LENGTH,ut.width),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut.height),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,we),pe.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const jn=x.isDataArrayTexture||x.isData3DTexture,nt=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){const pt=b.get(x),Mn=b.get(F),rt=b.get(pt.__renderTarget),bn=b.get(Mn.__renderTarget);pe.bindFramebuffer(I.READ_FRAMEBUFFER,rt.__webglFramebuffer),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let qn=0;qn<Te;qn++)jn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,b.get(x).__webglTexture,V,ke+qn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,b.get(F).__webglTexture,_e,ft+qn)),I.blitFramebuffer(we,Oe,Ee,ge,Re,et,Ee,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||b.has(x)){const pt=b.get(x),Mn=b.get(F);pe.bindFramebuffer(I.READ_FRAMEBUFFER,nc),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,ic);for(let rt=0;rt<Te;rt++)jn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.__webglTexture,V,ke+rt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pt.__webglTexture,V),nt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mn.__webglTexture,_e,ft+rt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mn.__webglTexture,_e),V!==0?I.blitFramebuffer(we,Oe,Ee,ge,Re,et,Ee,ge,I.COLOR_BUFFER_BIT,I.NEAREST):nt?I.copyTexSubImage3D(Me,_e,Re,et,ft+rt,we,Oe,Ee,ge):I.copyTexSubImage2D(Me,_e,Re,et,we,Oe,Ee,ge);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else nt?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(Me,_e,Re,et,ft,Ee,ge,Te,tt,Et,ut.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,_e,Re,et,ft,Ee,ge,Te,tt,ut.data):I.texSubImage3D(Me,_e,Re,et,ft,Ee,ge,Te,tt,Et,ut):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,Re,et,Ee,ge,tt,Et,ut.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,Re,et,ut.width,ut.height,tt,ut.data):I.texSubImage2D(I.TEXTURE_2D,_e,Re,et,Ee,ge,tt,Et,ut);pe.pixelStorei(I.UNPACK_ROW_LENGTH,Dt),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,Ot),pe.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,Sn),_e===0&&F.generateMipmaps&&I.generateMipmap(Me),pe.unbindTexture()},this.initRenderTarget=function(x){b.get(x).__webglFramebuffer===void 0&&g.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?g.setTextureCube(x,0):x.isData3DTexture?g.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?g.setTexture2DArray(x,0):g.setTexture2D(x,0),pe.unbindTexture()},this.resetState=function(){H=0,W=0,D=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}function mg(){const i=De.useRef(null),e=De.useRef({current:0,target:0}),t=De.useRef({x:0,y:0,targetX:0,targetY:0});return De.useEffect(()=>{if(!i.current)return;const n=i.current.clientWidth,r=i.current.clientHeight,s=new Xu;s.background=new Ye("#030712"),s.fog=new Ca("#030712",.005);const a=new Gt(60,n/r,.1,1e3);a.position.set(0,0,150);const o=new pg({antialias:!0,alpha:!1});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(n,r),i.current.appendChild(o.domElement);const c=60,l=[],f=new Nt,p=new Float32Array(c*3);for(let q=0;q<c;q++){const ee=25+Math.random()*40,oe=Math.random()*Math.PI*2,Se=ee*Math.cos(oe),ye=ee*Math.sin(oe),he=-250+q/c*500+(Math.random()-.5)*20;l.push({x:Se,y:ye,z:he,originalX:Se,originalY:ye,speed:.1+Math.random()*.4}),p[q*3]=Se,p[q*3+1]=ye,p[q*3+2]=he}f.setAttribute("position",new Vt(p,3));const u=new ha({color:850943,size:1.8,transparent:!0,opacity:.85,sizeAttenuation:!0}),m=new Ao(f,u);s.add(m);const _=new Fl({color:959977,transparent:!0,opacity:.15}),S=[];for(let q=0;q<c;q++)for(let ee=q+1;ee<c;ee++)if(Math.abs(l[q].z-l[ee].z)<45){const Se=l[q].x-l[ee].x,ye=l[q].y-l[ee].y;Math.sqrt(Se*Se+ye*ye)<40&&(S.push(l[q].x,l[q].y,l[q].z),S.push(l[ee].x,l[ee].y,l[ee].z))}const h=new Nt;h.setAttribute("position",new Ht(S,3));const d=new nd(h,_);s.add(d);const M=25,T=[],y=new Nt,N=new Float32Array(M*3);for(let q=0;q<M;q++){const ee=Math.floor(Math.random()*c),oe={x:l[ee].x,y:l[ee].y,z:l[ee].z,currentNode:ee,targetNode:(ee+1)%c,progress:Math.random()};T.push(oe),N[q*3]=oe.x,N[q*3+1]=oe.y,N[q*3+2]=oe.z}y.setAttribute("position",new Vt(N,3));const A=new ha({color:15485081,size:2.5,transparent:!0,opacity:.95,sizeAttenuation:!0}),U=new Ao(y,A);s.add(U);const v=new pd(16777215,.15);s.add(v);const w=new fd(850943,.8);w.position.set(0,1,1),s.add(w);const O=()=>{const q=document.documentElement.scrollHeight-window.innerHeight,ee=q>0?window.scrollY/q:0;e.current.target=160-ee*320},R=q=>{t.current.targetX=(q.clientX/window.innerWidth-.5)*12,t.current.targetY=(q.clientY/window.innerHeight-.5)*12};window.addEventListener("scroll",O,{passive:!0}),window.addEventListener("mousemove",R,{passive:!0});let k;const H=new _d,W=()=>{k=requestAnimationFrame(W);const q=H.getDelta(),ee=m.geometry.attributes.position,oe=H.getElapsedTime()*.5;for(let ye=0;ye<c;ye++){const he=l[ye];he.x=he.originalX+Math.sin(oe*he.speed)*2,he.y=he.originalY+Math.cos(oe*he.speed)*2,ee.setXYZ(ye,he.x,he.y,he.z)}ee.needsUpdate=!0;const Se=U.geometry.attributes.position;for(let ye=0;ye<M;ye++){const he=T[ye];he.progress+=q*.4,he.progress>=1&&(he.progress=0,he.currentNode=he.targetNode,he.targetNode=Math.floor(Math.random()*c));const J=l[he.currentNode],fe=l[he.targetNode];he.x=Wr.lerp(J.x,fe.x,he.progress),he.y=Wr.lerp(J.y,fe.y,he.progress),he.z=Wr.lerp(J.z,fe.z,he.progress),Se.setXYZ(ye,he.x,he.y,he.z)}Se.needsUpdate=!0,e.current.current+=(e.current.target-e.current.current)*.08,a.position.z=e.current.current,t.current.x+=(t.current.targetX-t.current.x)*.05,t.current.y+=(t.current.targetY-t.current.y)*.05,a.position.x=t.current.x,a.position.y=-t.current.y,a.lookAt(0,0,a.position.z-80),o.render(s,a)};W(),Vi("threeRunning",!0);const D=()=>{k&&(cancelAnimationFrame(k),k=null),Vi("threeRunning",!1)},L=()=>{k||document.hidden||ja()||(H.getDelta(),W(),Vi("threeRunning",!0))},C=()=>document.hidden||ja()?D():L(),j=uc(C);document.addEventListener("visibilitychange",C);const Y=()=>{if(!i.current)return;const q=i.current.clientWidth,ee=i.current.clientHeight;a.aspect=q/ee,a.updateProjectionMatrix(),o.setSize(q,ee)};return window.addEventListener("resize",Y),O(),()=>{cancelAnimationFrame(k),Vi("threeRunning",!1),j(),document.removeEventListener("visibilitychange",C),window.removeEventListener("scroll",O),window.removeEventListener("mousemove",R),window.removeEventListener("resize",Y),i.current&&o.domElement&&i.current.removeChild(o.domElement),f.dispose(),u.dispose(),h.dispose(),_.dispose(),y.dispose(),A.dispose(),o.dispose()}},[]),E.jsx("div",{ref:i,className:"fixed inset-0 w-full h-full -z-20 pointer-events-none select-none overflow-hidden"})}const Ai={gateway:{id:"gateway",name:"MERN_Gateway",icon:ol,color:"text-green-500",borderColor:"border-green-500/30",bgGlow:"bg-green-500/10",role:"API Routing & WebSocket Handshakes",metrics:{cpu:12,mem:140,req:1850,latency:12},logs:["[INFO] Gateway initialized on secure port 443","[INFO] Established WebSocket socket.io pipeline with client","[INFO] Routing GET /api/v1/user/profile to Cache Core","[INFO] Routing POST /api/v1/rewards/redeem to Transaction Core"]},cache:{id:"cache",name:"Redis_Cache",icon:ll,color:"text-blue-500",borderColor:"border-blue-500/30",bgGlow:"bg-blue-500/10",role:"Session Caching & Transaction Staging",metrics:{cpu:8,mem:512,req:1420,latency:2},logs:["[INFO] Redis connection successful: cluster_size=3","[INFO] Cache HIT for key: user:aamir_lone:meta","[INFO] Eviction check complete: 0 keys evicted (LFU policy)","[INFO] Staging transactional lock for rewards allocation"]},engine:{id:"engine",name:"Mobilytix_Rewards",icon:dl,color:"text-cyan-500",borderColor:"border-cyan-500/30",bgGlow:"bg-cyan-500/10",role:"Rewards Core Calculation Engine",metrics:{cpu:28,mem:1024,req:2450,latency:45},logs:["[INFO] Mobilytix rewards core booted online // clusters=4","[INFO] Executed qualification queries: 12 users matched threshold","[INFO] Dispatched reward transaction payload to Kafka","[INFO] Computed rewards profile hash: 0x9f5a11bc"]},broker:{id:"broker",name:"Kafka_Broker",icon:ul,color:"text-purple-500",borderColor:"border-purple-500/30",bgGlow:"bg-purple-500/10",role:"High-Throughput Messaging & Event Hub",metrics:{cpu:14,mem:2048,req:4890,latency:8},logs:["[INFO] Kafka broker cluster sync active: leader=broker_2","[INFO] Published transaction_event to topic: user.reward.allocated","[INFO] Consumer group 'analytics_sync' committed offset 495102","[INFO] Rebalancing partition metrics: Status OK"]},database:{id:"database",name:"MySQL_Storage",icon:cl,color:"text-pink-500",borderColor:"border-pink-500/30",bgGlow:"bg-pink-500/10",role:"Persistent Storage & Relational Archives",metrics:{cpu:18,mem:4096,req:820,latency:32},logs:["[INFO] Connection pool allocated: active=45 idle=5","[INFO] SQL Select query executed: duration=8ms // scan_rows=1","[INFO] Committing transaction lock: ID=9012481","[INFO] DB replica replication log synchronized successfully"]}};function gg(){Fi("Telemetry");const[i,e]=De.useState("gateway"),[t,n]=De.useState(!1),[r,s]=De.useState(!1),[a,o]=De.useState({}),[c,l]=De.useState([]),f=De.useRef(null);De.useEffect(()=>{const S={};Object.keys(Ai).forEach(h=>{S[h]={...Ai[h].metrics}}),o(S),l([...Ai[i].logs])},[i]),De.useEffect(()=>{const S=setInterval(()=>{o(h=>{const d={...h};return Object.keys(d).forEach(M=>{if(!d[M])return;const T=Ai[M].metrics;let y=1,N=1;t&&(M==="cache"||M==="engine"||M==="database")&&(y=10+Math.random()*8,N=2.2),d[M]={cpu:Math.max(2,Math.min(99,Math.round(T.cpu*N+(Math.random()-.5)*4))),mem:Math.round(T.mem+(Math.random()-.5)*10),req:Math.round(T.req+(Math.random()-.5)*80),latency:Math.round(T.latency*y+(Math.random()-.5)*5)}}),d});{let h="";const d=new Date().toISOString().split("T")[1].slice(0,8);if(t){const M=[`[WARN] [${d}] Eviction buffer threshold breached on Cache cluster`,`[ALERT] [${d}] Database connection throttling - Lock acquisition latency high`,`[WARN] [${d}] Redis request timeout - Fallback to direct DB query triggered`,`[ALERT] [${d}] Mobilytix core under degraded operations state (miss_ratio=94.2%)`,`[INFO] [${d}] Load balancer rerouting transactions to backup database node`];h=M[Math.floor(Math.random()*M.length)]}else if(r){const M=[`[DIAG] [${d}] Running memory integrity registers checks... OK`,`[DIAG] [${d}] Handshaking node connectivity grids... 5/5 ACTIVE`,`[DIAG] [${d}] Simulating packet throughput benchmarks... 120,402 req/s`,`[DIAG] [${d}] Re-indexing B-Tree database records cache indices... SUCCESS`,`[DIAG] [${d}] Flushing transactional queues... SYSTEM OPERATIONAL`];h=M[Math.floor(Math.random()*M.length)]}else{const M=[`[INFO] [${d}] Routing microservice GET /api/v1/rewards/meta`,`[INFO] [${d}] Cache HIT for session payload // key=auth:user_95`,`[INFO] [${d}] Kafka published event: rewards.calculated.payload`,`[INFO] [${d}] MySQL connection released back to pool // pool_size=50`,`[INFO] [${d}] Socket handshake heartbeat verified (RTT: 4ms)`];h=M[Math.floor(Math.random()*M.length)]}l(M=>{const T=[...M,h];return T.length>30&&T.shift(),T})}},1800);return()=>clearInterval(S)},[t,r]),De.useEffect(()=>{f.current&&(f.current.scrollTop=f.current.scrollHeight)},[c]);const p=()=>{if(n(S=>!S),t){const S=new Date().toISOString().split("T")[1].slice(0,8);l(h=>[...h,`[INFO] [${S}] EXPERIMENT DISMISSED. System recovering normal status.`,`[INFO] [${S}] Redis cluster cache eviction pipeline restored.`])}else{s(!1);const S=new Date().toISOString().split("T")[1].slice(0,8);l(h=>[...h,`[CRITICAL] [${S}] INJECTING SIMULATED CACHE TIMEOUT EXPERIMENT`,`[ALERT] [${S}] System throttling active. Eviction pipelines disabled.`])}},u=()=>{if(r)return;s(!0),n(!1);const S=new Date().toISOString().split("T")[1].slice(0,8);l(h=>[...h,`[DIAG] [${S}] BOOTING AUTOMATED NODE DIAGNOSTICS DIAG01...`,`[DIAG] [${S}] Disabling external API gates temporarily.`]),setTimeout(()=>{s(!1);const h=new Date().toISOString().split("T")[1].slice(0,8);l(d=>[...d,`[DIAG] [${h}] AUTOMATED SELF-TEST CONCLUDED.`,`[DIAG] [${h}] ALL NODES RUNNING NOMINAL // ERROR_RATE=0.00%`])},8e3)},m=Ai[i],_=a[i]||m.metrics;return E.jsxs("div",{className:"w-full",children:[E.jsx(al,{subtitle:"Live Telemetry Console",title:"Microservice",highlight:"Infrastructure",description:"Interact with the live microservice node topology layout mapping of my typical systems architecture."}),E.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12 w-full text-left",children:[E.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-between glass-premium-dark rounded-2xl border border-white/[0.08] p-6 shadow-2xl min-h-[460px] relative overflow-hidden",children:[E.jsx(dc,{children:t&&E.jsxs(zt.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"absolute top-4 left-4 right-4 z-20 px-4 py-2.5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-between text-red-500 animate-pulse",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(gc,{className:"w-4 h-4"}),E.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-wider",children:"Warning: Cache Latency Experiment Active // Degraded State"})]}),E.jsx("button",{onClick:p,className:"text-[9px] font-mono uppercase bg-red-500 text-bg-base font-black px-2 py-0.5 rounded cursor-pointer",children:"Terminate"})]})}),E.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.06] pb-4 select-none",children:[E.jsxs("div",{className:"text-[10px] font-mono tracking-widest text-text-muted uppercase flex items-center gap-1.5",children:[E.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${t?"bg-red-500 animate-ping":"bg-green-500 animate-pulse"}`}),E.jsx("span",{children:"Network Topology Mesh // click_node_to_inspect"})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("button",{onClick:u,disabled:r||t,className:"px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded border border-white/[0.08] hover:border-accent hover:text-accent bg-white/[0.02] disabled:opacity-40 disabled:hover:border-white/[0.08] disabled:hover:text-text-muted transition-colors cursor-pointer",children:r?"Testing...":"Self Test"}),E.jsx("button",{onClick:p,className:`px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded border transition cursor-pointer ${t?"bg-red-500 border-red-500 text-bg-base font-bold shadow-[0_0_10px_rgba(239,68,68,0.3)]":"border-white/[0.08] hover:border-red-500/40 hover:text-red-500 bg-white/[0.02]"}`,children:t?"Fix Latency":"Inject Latency"})]})]}),E.jsxs("div",{className:"flex-grow flex items-center justify-center py-10 relative overflow-x-auto min-w-[320px]",children:[E.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none select-none z-0",children:[E.jsxs("defs",{children:[E.jsxs("linearGradient",{id:"cyan-pink",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[E.jsx("stop",{offset:"0%",stopColor:"#0cfbff",stopOpacity:"0.25"}),E.jsx("stop",{offset:"100%",stopColor:"#ec4899",stopOpacity:"0.25"})]}),E.jsxs("linearGradient",{id:"green-blue",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[E.jsx("stop",{offset:"0%",stopColor:"#22c55e",stopOpacity:"0.25"}),E.jsx("stop",{offset:"100%",stopColor:"#3b82f6",stopOpacity:"0.25"})]})]}),E.jsx("line",{x1:"20%",y1:"50%",x2:"40%",y2:"25%",stroke:"url(#green-blue)",strokeWidth:"1.5",strokeDasharray:"4 4"}),E.jsx("line",{x1:"20%",y1:"50%",x2:"40%",y2:"75%",stroke:"url(#green-blue)",strokeWidth:"1.5"}),E.jsx("line",{x1:"40%",y1:"25%",x2:"60%",y2:"50%",stroke:"url(#cyan-pink)",strokeWidth:"1.5"}),E.jsx("line",{x1:"40%",y1:"75%",x2:"60%",y2:"50%",stroke:"url(#cyan-pink)",strokeWidth:"1.5",strokeDasharray:"4 4"}),E.jsx("line",{x1:"60%",y1:"50%",x2:"80%",y2:"50%",stroke:"url(#cyan-pink)",strokeWidth:"2"})]}),E.jsxs("div",{className:"relative w-full h-64 flex justify-between items-center px-4 md:px-8 z-10",children:[E.jsxs("button",{onClick:()=>e("gateway"),className:`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition cursor-pointer ${i==="gateway"?"bg-green-500/10 border-green-500 scale-105 shadow-[0_0_15px_rgba(34,197,94,0.25)]":"bg-white/[0.02] border-white/[0.08] hover:border-green-500/40"}`,children:[E.jsx(ol,{className:"w-6 h-6 text-green-500 mb-1"}),E.jsx("span",{className:"text-[10px] font-mono font-bold text-text-base",children:"MERN_Gateway"}),E.jsx("span",{className:"text-[8px] font-mono text-green-500 mt-0.5",children:"Router"})]}),E.jsxs("div",{className:"flex flex-col gap-12 justify-center",children:[E.jsxs("button",{onClick:()=>e("cache"),className:`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition cursor-pointer ${i==="cache"?"bg-blue-500/10 border-blue-500 scale-105 shadow-[0_0_15px_rgba(59,130,246,0.25)]":"bg-white/[0.02] border-white/[0.08] hover:border-blue-500/40"} ${t?"border-red-500/40 text-red-500":""}`,children:[E.jsx(ll,{className:`w-6 h-6 mb-1 ${t?"text-red-500 animate-bounce":"text-blue-500"}`}),E.jsx("span",{className:"text-[10px] font-mono font-bold text-text-base",children:"Redis_Cache"}),E.jsx("span",{className:`text-[8px] font-mono mt-0.5 ${t?"text-red-500 font-bold":"text-blue-500"}`,children:t?"TIMEOUT":"Memory Cache"})]}),E.jsxs("button",{onClick:()=>e("broker"),className:`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition cursor-pointer ${i==="broker"?"bg-purple-500/10 border-purple-500 scale-105 shadow-[0_0_15px_rgba(168,85,247,0.25)]":"bg-white/[0.02] border-white/[0.08] hover:border-purple-500/40"}`,children:[E.jsx(ul,{className:"w-6 h-6 text-purple-500 mb-1"}),E.jsx("span",{className:"text-[10px] font-mono font-bold text-text-base",children:"Kafka_Broker"}),E.jsx("span",{className:"text-[8px] font-mono text-purple-500 mt-0.5",children:"Queue"})]})]}),E.jsxs("button",{onClick:()=>e("engine"),className:`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition cursor-pointer ${i==="engine"?"bg-cyan-500/10 border-cyan-500 scale-105 shadow-[0_0_15px_rgba(6,182,212,0.25)]":"bg-white/[0.02] border-white/[0.08] hover:border-cyan-500/40"} ${t?"border-amber-500/40":""}`,children:[E.jsx(dl,{className:`w-6 h-6 mb-1 ${t?"text-amber-500 animate-pulse":"text-cyan-500"}`}),E.jsx("span",{className:"text-[10px] font-mono font-bold text-text-base",children:"Mobilytix_Core"}),E.jsx("span",{className:`text-[8px] font-mono mt-0.5 ${t?"text-amber-500":"text-cyan-500"}`,children:t?"DEGRADED":"SaaS Engine"})]}),E.jsxs("button",{onClick:()=>e("database"),className:`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition cursor-pointer ${i==="database"?"bg-pink-500/10 border-pink-500 scale-105 shadow-[0_0_15px_rgba(236,72,153,0.25)]":"bg-white/[0.02] border-white/[0.08] hover:border-pink-500/40"}`,children:[E.jsx(cl,{className:"w-6 h-6 text-pink-500 mb-1"}),E.jsx("span",{className:"text-[10px] font-mono font-bold text-text-base",children:"MySQL_Storage"}),E.jsx("span",{className:"text-[8px] font-mono text-pink-500 mt-0.5",children:"Persistence"})]})]})]}),E.jsxs("div",{className:"border-t border-white/[0.06] pt-3 text-[9px] font-mono text-text-muted flex justify-between select-none",children:[E.jsx("span",{children:"PACKETS DISPATCHED: 905.1K"}),E.jsx("span",{className:"text-green-500",children:"PACKET DROP RATE: 0.00%"})]})]}),E.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-6 w-full",children:[E.jsxs("div",{className:"glass-premium-dark rounded-2xl border border-white/[0.08] p-5 shadow-2xl flex flex-col gap-4",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("div",{className:`p-2.5 rounded-xl border ${m.borderColor} ${m.bgGlow}`,children:E.jsx(m.icon,{className:`w-5 h-5 ${m.color}`})}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-sm font-bold text-text-base leading-tight font-mono",children:m.name}),E.jsx("p",{className:"text-[10px] text-text-muted mt-0.5 font-sans leading-none",children:m.role})]})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-3.5 pt-2",children:[E.jsxs("div",{className:"p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01]",children:[E.jsx("span",{className:"text-[8px] font-mono text-text-muted uppercase tracking-wider block",children:"CPU Utilization"}),E.jsxs("span",{className:"text-lg font-bold font-mono text-text-base",children:[_.cpu,"%"]}),E.jsx("div",{className:"w-full h-1 bg-black/40 rounded-full overflow-hidden mt-1.5",children:E.jsx("div",{className:"h-full bg-accent transition duration-500",style:{width:`${_.cpu}%`}})})]}),E.jsxs("div",{className:"p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01]",children:[E.jsx("span",{className:"text-[8px] font-mono text-text-muted uppercase tracking-wider block",children:"Throughput Rate"}),E.jsxs("span",{className:"text-lg font-bold font-mono text-text-base",children:[_.req," r/s"]}),E.jsx("span",{className:"text-[8px] font-mono text-green-500 block mt-1",children:"✓ Connection Stable"})]}),E.jsxs("div",{className:"p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01]",children:[E.jsx("span",{className:"text-[8px] font-mono text-text-muted uppercase tracking-wider block",children:"Allocated Memory"}),E.jsx("span",{className:"text-lg font-bold font-mono text-text-base",children:_.mem>=1024?`${(_.mem/1024).toFixed(1)} GB`:`${_.mem} MB`}),E.jsx("span",{className:"text-[8px] font-mono text-text-muted block mt-1",children:"Eviction: LFU active"})]}),E.jsxs("div",{className:"p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01] relative overflow-hidden",children:[t&&(m.id==="cache"||m.id==="engine"||m.id==="database")&&E.jsx("div",{className:"absolute top-1 right-1 px-1 bg-red-500/10 border border-red-500/30 text-red-500 rounded text-[7px] font-mono animate-pulse uppercase",children:"high_rtt"}),E.jsx("span",{className:"text-[8px] font-mono text-text-muted uppercase tracking-wider block",children:"Node RTT Latency"}),E.jsxs("span",{className:`text-lg font-bold font-mono transition-colors ${t&&(m.id==="cache"||m.id==="engine"||m.id==="database")?"text-red-500":"text-text-base"}`,children:[_.latency," ms"]}),E.jsx("span",{className:"text-[8px] font-mono text-text-muted block mt-1",children:"SLA Limit: 80ms"})]})]})]}),E.jsxs("div",{className:"glass-premium-dark rounded-2xl border border-white/[0.08] p-5 shadow-2xl flex-grow flex flex-col min-h-[220px]",children:[E.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.06] pb-2 select-none",children:[E.jsxs("span",{className:"text-[9px] font-mono tracking-widest text-text-muted uppercase flex items-center gap-1.5",children:[E.jsx(_a,{className:"w-3.5 h-3.5 text-accent"}),E.jsx("span",{children:"Diagnostics Stream console"})]}),E.jsx("span",{className:"text-[8px] font-mono text-accent animate-pulse",children:"● STREAMING_RAW"})]}),E.jsx("div",{ref:f,className:"flex-grow overflow-y-auto font-mono text-[9px] leading-relaxed text-text-muted/90 space-y-1.5 pt-3 pr-2 h-44 no-scrollbar",children:c.map((S,h)=>{const d=S.includes("[ALERT]")||S.includes("[CRITICAL]")||S.includes("[WARN]"),M=S.includes("[DIAG]");return E.jsx("div",{className:`transition duration-300 ${d?"text-red-400 font-bold border-l-2 border-red-500 pl-1.5 bg-red-500/5 py-0.5 rounded":M?"text-accent font-bold border-l-2 border-accent pl-1.5 bg-accent/5 py-0.5 rounded":""}`,children:S},h)})})]})]})]})]})}const rl=String.raw`
 _   _     _      ____  _  __ __  __     _      ____  _  __
| | | |   / \    / ___|| |/ /|  \/  |   / \    / ___|| |/ /
| |_| |  / _ \  | |    | ' / | |\/| |  / _ \  | |    | ' /
|  _  | / ___ \ | |___ | . \ | |  | | / ___ \ | |___ | . \
| | | |/_/   \_\ \____||_|\_\|_|  |_|/_/   \_\ \____||_|\_\
|_| |_|                                                    `,_r={home:"/",about:"/about",projects:"/projects",resume:"/resume",education:"/education",contact:"/contact"},wi={matrix:{"--primary-color":"#22c55e","--accent-color":"#4ade80","--secondary-color":"#15803d"},cyber:{"--primary-color":"#a855f7","--accent-color":"#ec4899","--secondary-color":"#6366f1"},amber:{"--primary-color":"#f59e0b","--accent-color":"#fbbf24","--secondary-color":"#d97706"},ice:{"--primary-color":"#0ea5e9","--accent-color":"#67e8f9","--secondary-color":"#2563eb"}},te=(i="",e="normal")=>({text:i,type:e}),_g=i=>{const e=Math.max(0,Math.min(20,Math.round((Number(i)||0)/5)));return"["+"=".repeat(e)+" ".repeat(20-e)+"]"},xr=(i,e)=>String(i??"").padEnd(e),Ms=(i,e=76)=>{const t=[];let n="";for(const r of String(i).split(/\s+/))(n+" "+r).trim().length>e?(t.push(n.trim()),n=r):n+=" "+r;return n.trim()&&t.push(n.trim()),t},xg=(i,e)=>{const t=Array.from({length:i.length+1},(n,r)=>[r,...Array(e.length).fill(0)]);for(let n=0;n<=e.length;n++)t[0][n]=n;for(let n=1;n<=i.length;n++)for(let r=1;r<=e.length;r++)t[n][r]=Math.min(t[n-1][r]+1,t[n][r-1]+1,t[n-1][r-1]+(i[n-1]===e[r-1]?0:1));return t[i.length][e.length]};function vg({isOpen:i,onClose:e}){Fi("ConsoleCLI");const t=hc(),{about:n,contact:r,skills:s,projects:a,education:o}=ga(),[c,l]=De.useState([]),[f,p]=De.useState(""),[u,m]=De.useState([]),[_,S]=De.useState(-1),[h,d]=De.useState(!1),M=De.useRef(null),T=De.useRef(null),y=De.useRef(null),N=De.useMemo(()=>{const H=sl(),W={...(n==null?void 0:n.socialLinks)||{},...(r==null?void 0:r.socialLinks)||{}},D={help:{group:"core",desc:"List every command, or explain one: help <command>",run:L=>{var q;const C=(q=L[0])==null?void 0:q.toLowerCase();if(C&&D[C])return[te(`${C} - ${D[C].desc}`,"info"),...D[C].usage?[te(`  usage: ${D[C].usage}`)]:[]];const j={core:"CORE",profile:"PROFILE",work:"WORK",nav:"NAVIGATION",system:"SYSTEM"},Y=[te("HACKMACK-OS command directory","info"),te()];for(const[ee,oe]of Object.entries(j)){const Se=Object.keys(D).filter(ye=>D[ye].group===ee&&!D[ye].hidden);Se.length&&(Y.push(te(`  ${oe}`,"success")),Se.forEach(ye=>Y.push(te(`    ${xr(ye,12)} ${D[ye].desc}`))),Y.push(te()))}return Y.push(te("  Tab completes - Up/Down recalls history - Esc closes","muted")),Y}},whoami:{group:"profile",desc:"Identity, role and current posting",run:()=>[te("IDENTITY REGISTER","info"),te(`  name       : ${(n==null?void 0:n.name)||"Aamir Saleem Lone"}`),te(`  role       : ${(n==null?void 0:n.title)||"Full-Stack Engineer"}`),te(`  experience : ${H.displayYears} years (since Jun 2022)`),te(`  location   : ${(r==null?void 0:r.address)||"Handwara, Jammu and Kashmir, India"}`),te("  status     : OPEN TO INTERESTING PROBLEMS","success")]},about:{group:"profile",desc:"Full biography",run:()=>{const L=(n==null?void 0:n.description)||(n==null?void 0:n.tagline);return L?[te("BIOGRAPHY","info"),...Ms(L).map(C=>te("  "+C))]:[te("No biography loaded.","error")]}},skills:{group:"profile",desc:"Skill matrix, live from the database",usage:"skills [category]",run:L=>{var oe;const C=Array.isArray(s)?s:[];if(!C.length)return[te("Skill register empty - the database returned no rows.","error")];const j=(oe=L[0])==null?void 0:oe.toLowerCase(),Y=j?C.filter(Se=>(Se.category||"").toLowerCase().includes(j)):C;if(!Y.length){const Se=[...new Set(C.map(ye=>ye.category).filter(Boolean))];return[te(`No category matching '${j}'.`,"error"),te(`Known: ${Se.join(", ")}`,"muted")]}const q=Y.reduce((Se,ye)=>{const he=ye.category||"GENERAL";return(Se[he]=Se[he]||[]).push(ye),Se},{}),ee=[te(`SKILL MATRIX // ${Y.length} entries`,"info")];for(const[Se,ye]of Object.entries(q))ee.push(te(),te(`  ${String(Se).toUpperCase()}`,"success")),ye.forEach(he=>ee.push(te(`    ${xr(he.name,18)} ${_g(he.proficiency)} ${String(he.proficiency??"--").padStart(3)}%`)));return ee}},projects:{group:"work",desc:"List shipped projects",usage:"projects [n]   - 'projects 2' shows detail",run:L=>{const C=Array.isArray(a)?a:[];if(!C.length)return[te("Project archive empty - the database returned no rows.","error")];if(L[0]){const j=parseInt(L[0],10)-1,Y=C[j];if(!Y)return[te(`No project at index ${L[0]}. Range is 1-${C.length}.`,"error")];const q=[te(`PROJECT ${String(j+1).padStart(2,"0")} // ${Y.title}`,"info"),te(`  category   : ${Y.category||"uncategorised"}`),te(`  stack      : ${(Y.technologies||[]).join(", ")||"n/a"}`)];return Y.githubUrl&&q.push(te(`  repository : ${Y.githubUrl}`)),Y.demoUrl&&q.push(te(`  live       : ${Y.demoUrl}`)),Y.description&&q.push(te(),...Ms(Y.description).map(ee=>te("  "+ee))),q.push(te(),te(`  'open ${j+1}' launches the repository`,"muted")),q}return[te(`PROJECT ARCHIVE // ${C.length} records`,"info"),te(),...C.map((j,Y)=>te(`  [${String(Y+1).padStart(2,"0")}] ${xr(j.title,26)} ${(j.technologies||[]).slice(0,3).join(" / ")}`)),te(),te("  'projects <n>' for detail, 'open <n>' to launch the repo","muted")]}},experience:{group:"work",desc:"Employment history",run:()=>{const L=(n==null?void 0:n.experience)||[];if(!L.length)return[te("No experience records loaded.","error")];const C=[te("ENGINEERING TIMELINE","info")];return L.forEach(j=>{C.push(te(),te(`  * ${j.period} - ${j.position} @ ${j.company}`,"success")),j.description&&Ms(j.description,72).forEach(Y=>C.push(te("    "+Y,"muted")))}),C}},education:{group:"work",desc:"Academic record",run:()=>{var C;const L=(C=n==null?void 0:n.education)!=null&&C.length?n.education:o||[];return L.length?[te("ACADEMIC RECORD","info"),...L.flatMap(j=>[te(),te(`  * ${j.degree||j.title||"Programme"} (${j.year||j.period||"n/a"})`,"success"),te(`    ${j.institution||j.school||""}${j.score?` // ${j.score}`:""}`,"muted")])]:[te("No academic records loaded.","error")]}},contact:{group:"profile",desc:"Contact channels and social links",run:()=>{const L=[te("CONTACT CHANNELS","info")];r!=null&&r.email&&L.push(te(`  email    : ${r.email}`)),r!=null&&r.phone&&L.push(te(`  phone    : ${r.phone}`)),r!=null&&r.address&&L.push(te(`  location : ${r.address}`));const C=Object.entries(W).filter(([,j])=>j);return C.length&&(L.push(te(),te("  SOCIAL","success")),C.forEach(([j,Y])=>L.push(te(`    ${xr(j,10)} ${Y}`))),L.push(te(),te("  'open <github|linkedin|twitter|email>' to launch","muted"))),L}},open:{group:"nav",desc:"Open a social link, a project repo or your mail client",usage:"open <github|linkedin|twitter|instagram|email|resume|n>",run:L=>{const C=(L[0]||"").toLowerCase();if(!C)return[te("Missing target. Try 'open github' or 'open 1'.","error")];const j=parseInt(C,10);if(!Number.isNaN(j)){const q=(a||[])[j-1];if(!q)return[te(`No project at index ${C}.`,"error")];const ee=q.githubUrl||q.demoUrl;return ee?(window.open(ee,"_blank","noopener,noreferrer"),[te(`Launching ${q.title} -> ${ee}`,"success")]):[te(`'${q.title}' has no public link on record.`,"error")]}if(C==="email")return r!=null&&r.email?(window.location.href=`mailto:${r.email}`,[te(`Opening mail client -> ${r.email}`,"success")]):[te("No email on record.","error")];if(C==="resume")return D.resume.run([]);const Y=W[C];return Y?(window.open(Y,"_blank","noopener,noreferrer"),[te(`Launching ${C} -> ${Y}`,"success")]):[te(`Unknown target '${C}'. Known: ${Object.keys(W).join(", ")}`,"error")]}},resume:{group:"work",desc:"Open the CV",run:()=>{var C;const L=(C=r==null?void 0:r.resumeURL)==null?void 0:C.trim();return L&&L.startsWith("http")?(window.open(L,"_blank","noopener,noreferrer"),[te("Opening CV...","success")]):(t("/resume"),e(),[te("No direct CV URL on record - routing to /resume.","success")])}},goto:{group:"nav",desc:"Navigate the site",usage:`goto <${Object.keys(_r).join("|")}>`,run:L=>{const C=(L[0]||"").toLowerCase();if(!C)return[te(`Missing page. Options: ${Object.keys(_r).join(", ")}`,"error")];const j=_r[C];return j?(t(j),e(),[te(`Routing to ${j}`,"success")]):[te(`Unknown page '${C}'. Options: ${Object.keys(_r).join(", ")}`,"error")]}},theme:{group:"system",desc:"Recolour the interface",usage:`theme <${Object.keys(wi).join("|")}|reset>`,run:L=>{const C=(L[0]||"").toLowerCase(),j=document.documentElement;if(!C)return[te(`Missing theme. Options: ${Object.keys(wi).join(", ")}, reset`,"error")];if(C==="reset"||C==="default")return Object.values(wi).forEach(q=>Object.keys(q).forEach(ee=>j.style.removeProperty(ee))),[te("Palette restored to the configured scheme.","success")];const Y=wi[C];return Y?(Object.entries(Y).forEach(([q,ee])=>j.style.setProperty(q,ee)),[te(`Palette '${C}' applied. 'theme reset' to undo.`,"success")]):[te(`Unknown theme '${C}'. Options: ${Object.keys(wi).join(", ")}, reset`,"error")]}},stack:{group:"system",desc:"What this site is built with",run:()=>[te("BUILD MANIFEST","info"),te("  framework : React 19 + Vite 6"),te("  routing   : react-router-dom 6"),te("  styling   : Tailwind CSS 4"),te("  motion    : framer-motion 12"),te("  3d        : three.js"),te("  data      : Firebase Firestore (lite SDK)"),te("  hosting   : Vercel"),te(),te("  source    : github.com/hackmack4772/portfolio-","muted")]},date:{group:"system",desc:"Current system time",run:()=>[te(new Date().toString())]},echo:{group:"system",desc:"Print back the arguments",run:L=>[te(L.join(" "))]},banner:{group:"system",desc:"Reprint the banner",run:()=>[te(rl,"banner")]},clear:{group:"core",desc:"Clear the screen",run:()=>"CLEAR"},exit:{group:"core",desc:"Close the console",run:()=>"EXIT"},sudo:{group:"system",hidden:!0,desc:"Elevate privileges",run:L=>[te("guest is not in the sudoers file. This incident has been reported.","error"),te(L.length?`  (nice try: ${L.join(" ")})`:"  (nice try)","muted")]},glitch:{group:"system",hidden:!0,desc:"Trigger the decoupling alert",run:()=>"GLITCH"}};return D},[n,r,s,a,o,t,e]),A=De.useMemo(()=>Object.keys(N),[N]),U=De.useCallback(()=>[te(rl,"banner"),te("HACKMACK-OS // interactive portfolio shell","muted"),te(),te(`Connected as guest. ${(a||[]).length} projects and ${(s||[]).length} skills indexed.`,"success"),te("Type 'help' for the command directory.","info"),te()],[a,s]),v=De.useRef(!1);De.useEffect(()=>{!i||v.current||(v.current=!0,l(U()))},[i,U]),De.useEffect(()=>{if(!i)return;const H=setTimeout(()=>{var W;return(W=M.current)==null?void 0:W.focus()},120);return()=>clearTimeout(H)},[i]),De.useEffect(()=>{T.current&&(T.current.scrollTop=T.current.scrollHeight)},[c]),De.useEffect(()=>()=>clearTimeout(y.current),[]);const w=De.useRef(e);w.current=e,De.useEffect(()=>{if(!i)return;const H=W=>{W.key==="Escape"&&w.current()};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[i]);const O=H=>{const W=H.trim();if(!W)return;m(oe=>[...oe,W]),S(-1);const[D,...L]=W.split(/\s+/),C=D.toLowerCase(),j=N[C],Y=te(`guest@hackmack-os:~$ ${W}`,"command"),q=oe=>l(Se=>[...Se,Y,...oe]);if(!j){const oe=A.filter(Se=>!N[Se].hidden).map(Se=>[Se,xg(C,Se)]).sort((Se,ye)=>Se[1]-ye[1]).find(([,Se])=>Se<=3);q([te(`command not found: ${C}`,"error"),te(oe?`Did you mean '${oe[0]}'?`:"Type 'help' for the directory.","muted")]);return}const ee=j.run(L);if(ee==="CLEAR"){l([]);return}if(ee==="EXIT"){l(oe=>[...oe,Y]),e();return}if(ee==="GLITCH"){q([te("[CRITICAL] CACHE EVICTION OVERFLOW SIGNAL SENT","error")]),d(!0),y.current=setTimeout(()=>{d(!1),l(oe=>[...oe,te("Interface self-healed. Calibration indices secure.","success")])},2500);return}q(ee||[])},R=H=>{if(H.key==="Enter"){O(f),p("");return}if(H.key==="Tab"){H.preventDefault();const W=f.trim();if(!W||W.includes(" "))return;const D=A.filter(L=>L.startsWith(W.toLowerCase())&&!N[L].hidden);D.length===1?p(D[0]+" "):D.length>1&&l(L=>[...L,te(`guest@hackmack-os:~$ ${W}`,"command"),te(D.join("   "),"muted")]);return}if(H.key==="ArrowUp"){if(H.preventDefault(),!u.length)return;const W=_<0?u.length-1:Math.max(0,_-1);S(W),p(u[W]);return}if(H.key==="ArrowDown"){if(H.preventDefault(),_<0)return;const W=_+1;W>=u.length?(S(-1),p("")):(S(W),p(u[W]))}};if(!i)return null;const k=H=>({command:"text-white font-bold",success:"text-green-400",info:"text-accent font-bold",error:"text-red-400 font-bold",muted:"text-text-muted/55 italic",banner:"text-accent font-bold leading-none"})[H]||"text-text-muted";return E.jsxs(_c,{className:"bg-black/90 backdrop-blur-md",children:[h&&E.jsx("div",{className:"absolute inset-0 bg-red-500/10 pointer-events-none z-30 animate-pulse flex items-center justify-center border-4 border-red-500",children:E.jsxs("div",{className:"text-red-500 font-mono text-center space-y-2",children:[E.jsx(Rc,{className:"w-16 h-16 mx-auto"}),E.jsx("h2",{className:"text-xl font-bold tracking-widest uppercase",children:"CRITICAL SYSTEM DECOUPLING"}),E.jsx("p",{className:"text-xs uppercase font-semibold",children:"Decryption failure on cluster core // calibration mismatch"})]})}),E.jsxs(zt.div,{initial:{scale:.97,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.18},className:"w-full max-w-4xl h-[85vh] bg-[#030712] border border-white/[0.08] rounded-2xl flex flex-col overflow-hidden shadow-2xl relative",children:[E.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-white/[0.08] bg-white/[0.015] select-none shrink-0",children:[E.jsxs("div",{className:"flex items-center gap-1.5",children:[E.jsx("button",{onClick:e,"aria-label":"Close console",className:"w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80 cursor-pointer"}),E.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80"}),E.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80"})]}),E.jsxs("div",{className:"text-[10px] font-mono tracking-wider uppercase text-text-muted/65 flex items-center gap-1.5",children:[E.jsx(_a,{className:"w-3.5 h-3.5 text-accent"}),E.jsx("span",{children:"guest@hackmack-os: ~"})]}),E.jsx("button",{onClick:e,"aria-label":"Close console",className:"text-text-muted hover:text-white cursor-pointer",children:E.jsx(vc,{className:"w-4.5 h-4.5"})})]}),E.jsx("div",{ref:T,onClick:()=>{var H;return(H=M.current)==null?void 0:H.focus()},className:"flex-grow p-4 sm:p-6 overflow-y-auto font-mono text-[11px] sm:text-xs text-text-muted/95 selection:bg-accent selection:text-bg-base",children:c.map((H,W)=>E.jsx("div",{className:`${k(H.type)} ${H.type==="banner"?"text-[7px] sm:text-[10px] overflow-x-auto no-scrollbar mb-2":""}`,style:{whiteSpace:"pre"},children:H.text||" "},W))}),E.jsxs("div",{className:"p-4 border-t border-white/[0.08] bg-white/[0.01] flex items-center gap-2 shrink-0",children:[E.jsx("span",{className:"font-mono text-[11px] sm:text-xs text-accent font-bold select-none shrink-0",children:"guest@hackmack-os:~$"}),E.jsx("input",{ref:M,type:"text",value:f,onChange:H=>p(H.target.value),onKeyDown:R,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",className:"flex-grow min-w-0 bg-transparent border-none outline-none font-mono text-[11px] sm:text-xs text-white selection:bg-accent focus:ring-0",placeholder:"help, whoami, projects, skills..."})]})]})]})}function Sg(){const{displayYears:i}=sl();return E.jsxs("div",{className:"relative group w-full max-w-md select-none",children:[E.jsx("div",{className:"absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"}),E.jsx(Lc,{title:"aamir_saleem_lone.ts",className:"relative",children:E.jsxs("div",{className:"flex min-w-0 gap-4",children:[E.jsxs("div",{className:"hidden select-none text-right font-mono text-[10px] text-text-muted/20 sm:block",children:[E.jsx("div",{children:"01"}),E.jsx("div",{children:"02"}),E.jsx("div",{children:"03"}),E.jsx("div",{children:"04"}),E.jsx("div",{children:"05"}),E.jsx("div",{children:"06"}),E.jsx("div",{children:"07"}),E.jsx("div",{children:"08"}),E.jsx("div",{children:"09"}),E.jsx("div",{children:"10"}),E.jsx("div",{children:"11"}),E.jsx("div",{children:"12"})]}),E.jsx("pre",{className:"no-scrollbar min-w-0 overflow-x-auto font-mono text-[10px] leading-relaxed text-text-muted/95 sm:text-xs",children:E.jsxs("code",{children:[E.jsx("span",{className:"text-text-muted/30",children:"// INITIALIZE CORE NODE"}),`
`,E.jsx("span",{className:"text-accent font-semibold",children:"import"})," ","{"," ",E.jsx("span",{className:"text-secondary font-bold",children:"Engineer"})," ","}"," ",E.jsx("span",{className:"text-accent font-semibold",children:"from"})," ",E.jsx("span",{className:"text-primary font-bold",children:'"@core"'}),";",`

`,E.jsx("span",{className:"text-accent font-semibold",children:"const"})," ",E.jsx("span",{className:"text-text-base",children:"dev"})," = ",E.jsx("span",{className:"text-accent font-semibold",children:"new"})," ",E.jsx("span",{className:"text-secondary font-bold",children:"Engineer"}),"(",`{
`,"  ","name: ",E.jsx("span",{className:"text-[#34d399]",children:'"Aamir Saleem Lone"'}),",",`
`,"  ","role: ",E.jsx("span",{className:"text-[#34d399]",children:'"Full-Stack Engineer"'}),",",`
`,"  ","experience: ",E.jsxs("span",{className:"text-[#eab308]",children:['"',i,' Years"']}),",",`
`,"  ","tech: [",E.jsx("span",{className:"text-[#38bdf8]",children:'"React"'}),", ",E.jsx("span",{className:"text-[#38bdf8]",children:'"Node"'}),", ",E.jsx("span",{className:"text-[#38bdf8]",children:'"TS"'}),", ",E.jsx("span",{className:"text-[#38bdf8]",children:'"SQL"'}),"]",`
`,"}",");",`

`,E.jsx("span",{className:"text-text-muted/30",children:"// RUN PORTFOLIO APPS"}),`
`,E.jsx("span",{className:"text-text-base",children:"dev"}),".",E.jsx("span",{className:"text-[#38bdf8]",children:"bootDeployment"}),"();"]})})]})})]})}function Gg(){var u,m,_,S,h,d,M,T;Fi("LandingPage");const[i,e]=De.useState(null),[t,n]=De.useState(!1),r=De.useCallback(()=>n(!1),[]),{homeData:s,contact:a}=ga();De.useEffect(()=>{const y=N=>{(N.key==="`"||N.ctrlKey&&N.key==="k")&&(N.preventDefault(),n(A=>!A))};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]);const o={name:(s==null?void 0:s.name)||"Aamir Saleem Lone",description:(s==null?void 0:s.description)||"",tagline:(s==null?void 0:s.tagline)||"",typewriterStrings:(s==null?void 0:s.typewriterStrings)||["Full-Stack Engineer","MERN Stack Developer","Backend Specialist"],socialLinks:{github:((u=s==null?void 0:s.socialLinks)==null?void 0:u.github)||"",twitter:((m=s==null?void 0:s.socialLinks)==null?void 0:m.twitter)||"",linkedin:((_=s==null?void 0:s.socialLinks)==null?void 0:_.linkedin)||"",instagram:((S=s==null?void 0:s.socialLinks)==null?void 0:S.instagram)||"",...(a==null?void 0:a.socialLinks)||{}}},c=o.tagline&&o.tagline.trim().length>5?o.tagline:"Full-Stack Developer designing high-performance, responsive systems with beautiful, modern layouts.",l=[{icon:Sc,href:((h=o.socialLinks)==null?void 0:h.github)||"https://github.com/hackmack4772",label:"GitHub",port:"443"},{icon:Mc,href:((d=o.socialLinks)==null?void 0:d.twitter)||"https://twitter.com/hackmack4772",label:"Twitter",port:"80"},{icon:bc,href:((M=o.socialLinks)==null?void 0:M.linkedin)||"https://www.linkedin.com/in/aamir-saleem-lone/",label:"LinkedIn",port:"8080"},{icon:Ec,href:((T=o.socialLinks)==null?void 0:T.instagram)||"https://www.instagram.com/aamir-saleem-lone",label:"Instagram",port:"8443"}].filter(y=>y.href),p=(()=>{switch(i){case"GitHub":return{cmd:"curl -I https://github.com/hackmack4772",line1:"HTTP/2 200 OK",line2:"server: GitHub.com | connection: keep-alive",status:"ESTABLISHED // SECURE_PORT_443"};case"Twitter":return{cmd:"ping -c 1 twitter.com",line1:"64 bytes from 104.244.42.1: icmp_seq=1 ttl=56 time=14.2 ms",line2:"--- twitter.com ping statistics --- 1 packets transmitted, 1 received",status:"ROUTE_ACTIVE // SECURE_PORT_80"};case"LinkedIn":return{cmd:"ssh -T git@linkedin.com",line1:"Welcome aamir-saleem-lone! Shell access is restricted.",line2:"Authorized keys verified. Protocol version 2.0 active.",status:"HANDSHAKE_GRANTED // PORT_8080"};case"Instagram":return{cmd:"traceroute instagram.com",line1:"1  gateway (192.168.1.1)  0.315 ms",line2:"2  edge-star-shv (157.240.23.174)  22.450 ms",status:"LINK_ESTABLISHED // PORT_8443"};default:return{cmd:"ssh-connect -t social_ports --user=guest",line1:"Initializing encrypted connection to external domains...",line2:"✓ Handshake successful: Node coordinates resolved.",status:"SYSTEM_READY // WAITING_FOR_PORTAL_SELECTION"}}})();return E.jsxs("div",{className:"w-full bg-bg-base text-text-base relative",children:[E.jsx(mg,{}),E.jsx(vg,{isOpen:t,onClose:r}),E.jsx("button",{onClick:()=>n(!0),className:"fixed bottom-6 right-6 w-12 h-12 rounded-full glass-premium border border-primary/30 flex items-center justify-center text-primary hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(12,251,255,0.35)] transition duration-300 z-40 cursor-pointer shadow-lg animate-float-slow","aria-label":"Open Interactive CLI Console",title:"Open Terminal (Ctrl + K or `)",children:E.jsx(_a,{className:"w-5 h-5"})}),E.jsxs(Hi,{id:"home",className:"flex min-h-screen items-center pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32",containerClassName:"flex items-center w-full min-h-[70vh]",spacing:"none",showTicks:!0,children:[E.jsx(Dc,{}),E.jsxs("div",{className:"absolute inset-0 select-none pointer-events-none overflow-hidden -z-10",children:[E.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] lg:opacity-[0.12] mix-blend-luminosity scale-105",style:{backgroundImage:`url(${fc})`,maskImage:"radial-gradient(circle at 75% 50%, black 30%, transparent 70%)",WebkitMaskImage:"radial-gradient(circle at 75% 50%, black 30%, transparent 70%)"}}),E.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px]"}),E.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-bg-base"})]}),E.jsx("div",{className:"absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[140px] animate-pulse-glow -z-20 pointer-events-none"}),E.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[140px] animate-pulse-glow -z-20 pointer-events-none"}),E.jsxs("div",{className:"grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] xl:gap-20",children:[E.jsxs("div",{className:"mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center lg:items-start lg:text-left",children:[E.jsx(mc,{label:"system_online // core_active",color:"accent"}),E.jsxs("div",{className:"flex flex-col gap-2",children:[E.jsxs(zt.h1,{initial:{y:15,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6},className:"text-4xl font-light leading-tight tracking-tight text-white/90 md:text-5xl lg:text-6.5xl font-sans",children:["Hi There, ",E.jsx("span",{className:"font-extrabold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent",children:"I'm"})," ",E.jsx("span",{className:"inline-block animate-[wave-animation_2.1s_infinite]","aria-hidden":"true",children:"👋🏻"})]}),E.jsx(zt.h2,{initial:{y:15,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,delay:.15},className:"text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent md:text-5xl lg:text-6xl font-sans",children:o.name})]}),E.jsx(zt.div,{initial:{y:15,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,delay:.15},className:"flex w-full justify-center lg:justify-start font-mono text-sm tracking-widest text-accent/80 uppercase",children:E.jsx(Nc,{typewriterStrings:o.typewriterStrings})}),E.jsx(zt.p,{initial:{y:15,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,delay:.2},className:"max-w-xl text-xs sm:text-sm leading-relaxed text-text-muted/90 text-center lg:text-left font-sans",children:c}),E.jsxs(zt.div,{initial:{y:15,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,delay:.3},className:"flex w-full flex-col items-stretch gap-4 pt-3 sm:w-auto sm:flex-row sm:items-center sm:justify-start",children:[E.jsx(qa,{href:"#about",variant:"secondary",className:"w-full sm:w-auto glass-premium hover:bg-white/[0.04] transition",children:"Discover Journey"}),E.jsx(qa,{href:"#telemetry",variant:"primary",className:"w-full sm:w-auto bg-accent text-bg-base hover:bg-accent/80 shadow-[0_0_25px_rgba(12,251,255,0.25)] transition",children:"Inspect Infrastructure"})]})]}),E.jsx(zt.div,{initial:{scale:.96,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.7,delay:.25},className:"flex w-full justify-center lg:justify-end",children:E.jsx(Sg,{})})]})]}),E.jsx(Hi,{id:"about",variant:"sub",showTicks:!0,children:E.jsx(Pc,{})}),E.jsx(Hi,{id:"telemetry",showTicks:!0,children:E.jsx(gg,{})}),E.jsxs(Hi,{id:"contact",showTicks:!0,children:[E.jsx("div",{className:"mx-auto mb-16 flex w-full max-w-4xl flex-col items-center",children:E.jsxs("div",{className:"relative group w-full",children:[E.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-primary/10 via-secondary/15 to-accent/15 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500"}),E.jsxs("div",{className:"relative rounded-2xl border border-white/[0.08] bg-bg-base/90 shadow-2xl overflow-hidden flex flex-col font-mono text-xs text-text-muted",children:[E.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 bg-white/[0.015] border-b border-white/[0.06] select-none",children:[E.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[E.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80"}),E.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80"}),E.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80"})]}),E.jsxs("div",{className:"text-[10px] tracking-wider uppercase text-text-muted/65 flex items-center gap-1.5 font-mono",children:[E.jsx("span",{className:"text-accent",children:">"})," SOCIAL_CONNECTIVITY.sh"]}),E.jsx("div",{className:"w-12 flex justify-end",children:E.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(12,251,255,0.8)]"})})]}),E.jsx("div",{className:"p-6 md:p-8",children:E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch",children:[E.jsxs("div",{className:"md:col-span-5 flex flex-col gap-5 justify-between min-h-[170px]",children:[E.jsxs("div",{className:"space-y-3",children:[E.jsxs("div",{className:"flex items-center gap-2 text-accent font-semibold tracking-widest text-[9px] uppercase bg-accent/5 px-2.5 py-1 rounded w-fit select-none",children:[E.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent animate-ping"}),"transmitting_nodes"]}),E.jsxs("div",{className:"space-y-1",children:[E.jsx("h2",{className:"text-xl font-bold tracking-[0.15em] text-white uppercase font-mono",children:"FIND_ME_ON"}),E.jsxs("p",{className:"text-[10px] text-text-muted/80 uppercase tracking-wider font-mono",children:["I'd love to ",E.jsx("span",{className:"text-accent font-semibold",children:"connect"})," with you!"]})]})]}),E.jsxs("div",{className:"bg-black/45 rounded-xl border border-white/[0.05] p-4.5 font-mono text-[10px] leading-relaxed text-text-muted/80 flex-grow flex flex-col justify-between min-h-[105px]",children:[E.jsxs("div",{className:"space-y-1",children:[E.jsxs("div",{className:"flex items-center gap-1.5",children:[E.jsx("span",{className:"text-secondary font-bold",children:"$"}),E.jsx("span",{className:"text-text-base font-semibold",children:p.cmd})]}),E.jsx("div",{className:"text-text-muted/50 pl-2.5 truncate",children:p.line1}),E.jsx("div",{className:"text-text-muted/50 pl-2.5 truncate",children:p.line2})]}),E.jsxs("div",{className:"flex items-center justify-between border-t border-white/[0.04] pt-2 mt-3 text-[8px] tracking-wider uppercase text-text-muted/40",children:[E.jsx("span",{children:"NODE_FEED"}),E.jsx("span",{className:"text-accent font-bold tracking-widest",children:p.status})]})]})]}),E.jsx("div",{className:"hidden md:block md:col-span-1 w-px bg-white/[0.05] mx-auto"}),E.jsx("div",{className:"md:col-span-6 flex flex-col justify-center",children:E.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full",children:l.map((y,N)=>{const A=y.icon;return E.jsxs(zt.a,{href:y.href,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>e(y.label),onMouseLeave:()=>e(null),whileHover:{scale:1.02,y:-2},whileTap:{scale:.98},className:"relative group/btn flex items-center gap-3.5 px-4.5 py-4 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.04] hover:border-accent/40 transition duration-300 select-none cursor-pointer","aria-label":y.label,children:[E.jsx("div",{className:"absolute inset-0 bg-accent/5 opacity-0 group-hover/btn:opacity-100 rounded-xl blur transition-opacity duration-300 pointer-events-none"}),E.jsx("div",{className:"p-2 rounded-lg bg-bg-base/70 border border-white/[0.04] group-hover/btn:border-accent/30 group-hover/btn:bg-accent/5 transition duration-300",children:E.jsx(A,{className:"w-4.5 h-4.5 text-text-muted group-hover/btn:text-accent transition-colors duration-300"})}),E.jsxs("div",{className:"flex flex-col text-left min-w-0",children:[E.jsx("span",{className:"text-[11px] font-bold text-white group-hover/btn:text-accent tracking-wider uppercase transition-colors duration-300 truncate",children:y.label}),E.jsxs("span",{className:"text-[8px] font-mono text-text-muted/40 group-hover/btn:text-accent/50 transition-colors duration-300",children:["PORT // ",y.port]})]}),E.jsx("div",{className:"absolute bottom-0 left-4 right-4 h-[2px] bg-accent scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-center shadow-[0_0_8px_rgba(12,251,255,0.8)]"})]},N)})})})]})})]})]})}),E.jsx(pc,{hideHeader:!0})]})]})}export{Gg as default};
