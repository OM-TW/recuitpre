function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-CAChMVW8.js","./index-CotUXGPU.js","./index-DlKZHp14.css","./index-BR_XF-O7.js","./index-92sIglLS.css","./index-C5Viy-7P.js","./index-bKlOk9Rx.css","./index-B1Ak9-uS.js","./index-BQDBq_zI.css","./index-DEMNogFR.js","./index-DZ0lVn6o.css","./index-99VmdMKC.js","./index-DANvJ_cG.css","./index-51XYkb7N.js","./index-C8XdPluD.css","./index-BJpNMVMZ.js","./index-D1qoxtxJ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as l,C as I,A as x,M as N,j as r,t as U,R as ce,B as O,a as fe,S as J,b as he,c as me,d as ee,i as te,g as ve,_ as ge,e as E}from"./index-CotUXGPU.js";const pe=l.memo(()=>{var d;const[e]=l.useContext(I),a=(d=e[x.Menu])==null?void 0:d.enabled,[t,n]=l.useState(window.location.hash);l.useEffect(()=>{window.addEventListener("hashchange",()=>{n(window.location.hash)})},[]);const o=l.useMemo(()=>a?!0:N[1].hash===t.slice(1),[t,a]);return r.jsx("div",{className:U("Logo",o?"bg-white":"bg-black")})}),xe=l.memo(()=>{var t;const[e,a]=l.useContext(I);return r.jsx("button",{className:U("burger",(t=e[x.Menu])!=null&&t.enabled?"burger-revert":""),onClick:()=>{var n;return a({type:x.Menu,state:{enabled:!((n=e[x.Menu])!=null&&n.enabled)}})},children:[...new Array(3).keys()].map(n=>r.jsx("div",{},`b${n}`))})});var k=function(){return k=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++){a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},k.apply(this,arguments)},we=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t},K=!1,z=l.forwardRef(function(e,a){var t=e.style,n=we(e,["style"]),o=be();!K&&(t!=null&&t.height)&&(K=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var d=k(k({},t),{height:o?o+"px":"100vh"});return ce.createElement("div",k({ref:a,style:d},n))});z.displayName="Div100vh";function be(){var e=l.useState(G),a=e[0],t=e[1],n=je();return l.useEffect(function(){if(!n)return;function o(){var d=G();t(d)}return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}},[n]),n?a:null}function G(){return ne()?window.innerHeight:null}function je(){var e=l.useState(!1),a=e[0],t=e[1];return l.useEffect(function(){ne()&&t(!0)},[]),a}function ne(){return typeof window<"u"&&typeof document<"u"}const Oe=l.memo(({data:e})=>{const[,a]=l.useContext(I);return r.jsx(O,{className:"menuRegular",onClick:()=>{window.location.hash=e.hash,a({type:x.Menu,state:{enabled:!1}})},children:r.jsxs(O.MenuRegular,{children:[r.jsx("span",{children:e.name}),r.jsx("span",{children:e.subName})]})})}),ye=l.memo(({enabled:e})=>{const a=l.useMemo(()=>{const t=N.filter((o,d)=>d<3),n=N.filter((o,d)=>d>=3);return[t,n]},[N]);return r.jsx(z,{className:"Drawer",children:r.jsx("div",{className:U(e?"open":"close"),children:r.jsxs("div",{className:"context",children:[r.jsx("div",{children:r.jsx("div",{className:"flex flex-col lg:flex-row w-full space-y-5 lg:space-y-0",children:a.map((t,n)=>r.jsx("div",{className:"w-full lg:w-1/2 space-y-5 flex flex-col justify-start items-start",children:t.map((o,d)=>r.jsx(Oe,{data:o},d))},n))})}),r.jsxs("div",{children:[r.jsx("h2",{children:"台灣奧美新人才來計劃聯絡資訊"}),r.jsx("span",{children:"Contact us"}),r.jsxs("div",{children:[r.jsx("div",{className:"contacts",children:fe.map(t=>r.jsx("a",{className:"underline",href:`mailto:${t.email}`,children:t.name},JSON.stringify(t)))}),r.jsxs("div",{className:"socials",children:[r.jsx(O,{onClick:()=>window.open(J.Facebook),children:r.jsx(O.Facebook,{})}),r.jsx(O,{onClick:()=>window.open(J.Instagram),children:r.jsx(O.Instagram,{})})]})]})]})]})})})}),_e=l.memo(()=>{var t,n;const[e,a]=l.useContext(I);return r.jsxs("div",{className:"Menu",children:[r.jsx(ye,{enabled:(t=e[x.Menu])==null?void 0:t.enabled}),r.jsxs("div",{className:"absolute top-8 right-8 flex flex-row space-x-5",children:[r.jsx(O,{onClick:()=>a({type:x.Alert,state:{enabled:!0}}),children:r.jsx(O.MenuRegister,{revert:(n=e[x.Menu])==null?void 0:n.enabled})}),r.jsx(xe,{})]})]})}),D=[{hash:"home"},...N,{hash:"footer"}].map(e=>e.hash);let q;const $=(e,a)=>{if(e instanceof WheelEvent)return e.deltaY;if(e instanceof TouchEvent){let t=0;return a.delta!==0&&(t=e.touches[0].clientY-a.delta),a.delta=e.touches[0].clientY,t*-1}else return 0},B=(e,a,t)=>{t.enabled=!1,a.preventDefault(),e>0?t.index=t.index+1:e<0&&(t.index=t.index-1),t.index<0?(t.index=0,t.enabled=!0):t.index>D.length-1&&(t.index=D.length-1,t.enabled=!0);const n=document.getElementById(`${D[t.index]}`);if(n){window.location.hash=D[t.index];const o=n.offsetTop;window.scrollTo(0,o),clearTimeout(q),window.addEventListener("scroll",function(){clearTimeout(q),q=setTimeout(function(){t.enabled=!0},600)})}};let re=!1;try{window.addEventListener("test",()=>{},Object.defineProperty({},"passive",{get:function(){re=!0}}))}catch(e){console.error(e)}const V=re?{passive:!1}:!1,Ee="onwheel"in document.createElement("div")?"wheel":"mousewheel";let Z;const Pe=()=>{const e=l.useRef({delta:0,enabled:!1,index:D.indexOf(window.location.hash.replace("#","")||"home")}),a=l.useCallback(n=>{if(!e.current.enabled){n.preventDefault();return}clearTimeout(Z);const o=document.querySelector(`#${D[e.current.index]}`);if(o){const{height:d,top:h}=o.getBoundingClientRect(),{innerHeight:m}=window;if(d<=m){const f=$(n,e.current);f!==0?B(f,n,e.current):n.preventDefault()}else Z=setTimeout(()=>{if(h>0){const f=$(n,e.current);B(f,n,e.current)}else if(m-h>d){const f=$(n,e.current);B(f,n,e.current)}},250)}},[]);return l.useEffect(()=>{window.addEventListener(Ee,a,V),window.addEventListener("touchmove",a,V),window.addEventListener("touchstart",()=>{e.current.delta=0},V),window.addEventListener("keydown",a,!1)},[]),[l.useCallback(()=>{e.current.enabled=!0},[])]};var ae={},H={},R={},Q;function Ce(){return Q||(Q=1,Object.defineProperty(R,"__esModule",{value:!0}),R.Status=void 0,R.Status=function(e){return e[e.unload=0]="unload",e[e.loading=1]="loading",e[e.loaded=2]="loaded",e}({})),R}var X;function Le(){return X||(X=1,function(e){var a=te;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(he()),n=a(me()),o=a(ee()),d=Ce();function h(u,c){var s=Object.keys(u);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(u);c&&(i=i.filter(function(v){return Object.getOwnPropertyDescriptor(u,v).enumerable})),s.push.apply(s,i)}return s}function m(u){for(var c=1;c<arguments.length;c++){var s=arguments[c]!=null?arguments[c]:{};c%2?h(Object(s),!0).forEach(function(i){(0,o.default)(u,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach(function(i){Object.defineProperty(u,i,Object.getOwnPropertyDescriptor(s,i))})}return u}var f={hideBeforeLoaded:!0,onUpdate:function(c){}};e.default=function(){function u(){(0,t.default)(this,u),(0,o.default)(this,"index",void 0),(0,o.default)(this,"result",void 0),this.index=0,this.result=[]}return(0,n.default)(u,[{key:"load",value:function(s){var i=this,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f;if(!s)return new Promise(function(p){p({total:0,loaded:0})});var g=m(m({},f),v),w=g.onUpdate,y=g.hideBeforeLoaded,F=this.getStyle(s,"display")==="flex"?"flex":"block";y&&(s.style.display="none");var ie=Array.from(s.querySelectorAll("*")),le=[s].concat(ie);le.forEach(function(p,b){var P=p.tagName,C=p.getAttribute("src"),S=i.getStyle(p,"background-image").replace(/url\((['"])?(.*?)\1\)/gi,"$2"),M=i.getStyle(p,"-webkit-mask-image").replace(/url\((['"])?(.*?)\1\)/gi,"$2"),j=d.Status.unload;return P==="IMG"&&C?(i.result.push({url:C,index:b,status:j}),!0):P==="DIV"&&S!=="none"?(i.result.push({url:S,index:b,status:j}),!0):(P==="DIV"&&M!=="none"&&i.result.push({url:M,index:b,status:j}),!1)});var ue=function p(b){var P=b.resolve,C=P===void 0?function(_){return console.log(_)}:P,S=b.reject,M=S===void 0?function(_){return console.log(_)}:S;if(i.result.length===0){y&&(s.style.display=F),C({total:0,loaded:0});return}var j=i.result[i.index],A=i.result.length,T=j.url,W=j.index;j.status=d.Status.loading;var Y=new Image;Y.onload=function(){j.status=d.Status.loaded;var _=i.result.filter(function(de){return de.status===d.Status.loaded}).length;A===_?(y&&(s.style.display=F),requestAnimationFrame(function(){return C({url:T,total:A,loaded:_,index:W})})):(w({url:T,total:A,loaded:_,index:W}),i.index++,p({resolve:C,reject:M}))},Y.src=T};return new Promise(function(p,b){ue({resolve:p,reject:b})})}},{key:"getStyle",value:function(s,i){var v,g=s.ownerDocument.defaultView;return g&&g.getComputedStyle?(i=i.replace(/([A-Z])/g,"-$1").toLowerCase(),g.getComputedStyle(s,null).getPropertyValue(i)):s.currentStyle?(i=i.replace(/\-(\w)/g,function(w,y){return y.toUpperCase()}),v=s.currentStyle[i],v):""}}]),u}()}(H)),H}(function(e){var a=te;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(ee()),n=a(Le()),o=l;function d(f,u){var c=Object.keys(f);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(f);u&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(f,i).enumerable})),c.push.apply(c,s)}return c}function h(f){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?d(Object(c),!0).forEach(function(s){(0,t.default)(f,s,c[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(c)):d(Object(c)).forEach(function(s){Object.defineProperty(f,s,Object.getOwnPropertyDescriptor(c,s))})}return f}var m=function(u){var c=u.children,s=u.hideBeforeLoaded,i=u.onStep,v=u.onload,g=(0,o.useRef)();return(0,o.useEffect)(function(){g.current&&new n.default().load(g.current,{hideBeforeLoaded:s,onUpdate:function(y){return i==null?void 0:i(y)}}).then(function(w){v==null||v(w)})},[]),o.Children.map(c,function(w){return(0,o.cloneElement)(w,h(h({},w.props),{},{ref:g}))})};m.defaultProps={hideBeforeLoaded:!0,onStep:function(){},onload:function(){}},e.default=m})(ae);const De=ve(ae),Se=[{page:"landing",name:"首頁"},{page:"introduction",name:"計畫介紹"},{page:"values",name:"五大珍奇異獸​"},{page:"position",name:"招募職位"},{page:"process",name:"申請流程"},{page:"exclusive",name:"新人才來專屬"},{page:"footer",name:"尾頁"}];var L=(e=>(e[e.unset=0]="unset",e[e.loaded=1]="loaded",e[e.fontLoaded=2]="fontLoaded",e))(L||{});const oe={step:0},Re=l.createContext([oe,()=>{}]),se=l.memo(()=>(l.useEffect(()=>{},[]),r.jsxs(z,{id:"home",className:"Landing",children:[r.jsx("div",{className:"symbols",children:r.jsx("div",{className:"headline"})}),r.jsxs("div",{className:"cfa",children:[r.jsx("div",{className:"text",children:"SCROLL"}),r.jsx("div",{className:"arrow"})]})]}))),Ne=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),ke=window.location.hash,Ie=l.memo(()=>{const[,e]=l.useContext(I),[a]=Pe(),[t,n]=l.useState(oe),{step:o}=t,d=l.useMemo(()=>o!==L.unset?Se.filter((h,m)=>m!==0).map(h=>{const m=l.lazy(()=>ge(Object.assign({"./exclusive/index.tsx":()=>E(()=>import("./index-CAChMVW8.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./footer/index.tsx":()=>E(()=>import("./index-B1Ak9-uS.js"),__vite__mapDeps([7,1,2,3,4,8]),import.meta.url),"./introduction/index.tsx":()=>E(()=>import("./index-DEMNogFR.js"),__vite__mapDeps([9,1,2,3,4,5,10]),import.meta.url),"./landing/index.tsx":()=>E(()=>Promise.resolve().then(()=>Ne),void 0,import.meta.url),"./position/index.tsx":()=>E(()=>import("./index-99VmdMKC.js"),__vite__mapDeps([11,1,2,3,4,5,12]),import.meta.url),"./process/index.tsx":()=>E(()=>import("./index-51XYkb7N.js"),__vite__mapDeps([13,1,2,3,4,5,14]),import.meta.url),"./values/index.tsx":()=>E(()=>import("./index-BJpNMVMZ.js"),__vite__mapDeps([15,1,2,3,4,5,16]),import.meta.url)}),`./${h.page}/index.tsx`));return r.jsx(l.Suspense,{fallback:"",children:r.jsx(m,{})},JSON.stringify(h))}):null,[o]);return l.useEffect(()=>{o===L.fontLoaded?(window.location.hash="",setTimeout(()=>{window.location.hash=ke,e({type:x.LoadingProcess,state:{enabled:!1}}),a()},400)):window.location.hash=""},[o]),r.jsx(De,{onload:()=>{n(h=>({...h,step:L.loaded})),document.fonts.ready.then(()=>{n(h=>({...h,step:L.fontLoaded}))})},children:r.jsx("div",{className:"Home",children:r.jsxs(Re.Provider,{value:[t,n],children:[r.jsx(se,{}),o!==L.unset&&d||null,r.jsx(pe,{}),r.jsx(_e,{})]})})})}),Ae=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"}));export{z as D,Ae as i};