import{a as $t,r as Zt,b as te,e as Z,h as D,f as ee,i as ne,j as M,w as oe,k as ie,u as S,o as E,l as lt,c as at,m as re,t as se,p as ce,q as le}from"./entry.cbd30fde.js";function ae(){const t=$t();return t._appConfig||(t._appConfig=Zt(te)),t._appConfig}const Ft=Object.freeze({left:0,top:0,width:16,height:16}),Pt=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),tt=Object.freeze({...Ft,...Pt});Object.freeze({...tt,body:"",hidden:!1});({...Ft});const Mt=Object.freeze({width:null,height:null}),Et=Object.freeze({...Mt,...Pt});function ue(t,o){const n={...t};for(const i in o){const e=o[i],r=typeof e;i in Mt?(e===null||e&&(r==="string"||r==="number"))&&(n[i]=e):r===typeof n[i]&&(n[i]=i==="rotate"?e%4:e)}return n}const fe=/[\s,]+/;function he(t,o){o.split(fe).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function de(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:i(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/e,r%1===0?i(r):0)}}return o}const pe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ge=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ut(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const i=t.split(pe);if(i===null||!i.length)return t;const e=[];let r=i.shift(),s=ge.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?e.push(r):e.push(Math.ceil(c*o*n)/n)}else e.push(r);if(r=i.shift(),r===void 0)return e.join("");s=!s}}function me(t,o){const n={...tt,...t},i={...Et,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(d=>{const p=[],g=d.hFlip,f=d.vFlip;let w=d.rotate;g?f?w+=2:(p.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),p.push("scale(-1 1)"),e.top=e.left=0):f&&(p.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),p.push("scale(1 -1)"),e.top=e.left=0);let y;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:y=e.height/2+e.top,p.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:p.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:y=e.width/2+e.left,p.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}w%2===1&&(e.left!==e.top&&(y=e.left,e.left=e.top,e.top=y),e.width!==e.height&&(y=e.width,e.width=e.height,e.height=y)),p.length&&(r='<g transform="'+p.join(" ")+'">'+r+"</g>")});const s=i.width,c=i.height,l=e.width,a=e.height;let u,h;return s===null?(h=c===null?"1em":c==="auto"?a:c,u=ut(h,l/a)):(u=s==="auto"?l:s,h=c===null?ut(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:h.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:r}}const ye=/\sid="(\S+)"/g,we="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let be=0;function Se(t,o=we){const n=[];let i;for(;i=ye.exec(t);)n.push(i[1]);return n.length&&n.forEach(e=>{const r=typeof o=="function"?o(e):o+(be++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),t}function ve(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in o)n+=" "+i+'="'+o[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function xe(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ie(t){return'url("data:image/svg+xml,'+xe(t)+'")'}const ft={...Et,inline:!1},ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Ce={display:"inline-block"},Q={backgroundColor:"currentColor"},At={backgroundColor:"transparent"},ht={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},dt={webkitMask:Q,mask:Q,background:At};for(const t in dt){const o=dt[t];for(const n in ht)o[t+n]=ht[n]}const L={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";L[t+"-flip"]=o,L[t.slice(0,1)+"-flip"]=o,L[t+"Flip"]=o});function pt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const _e=(t,o)=>{const n=ue(ft,o),i={...ke},e=o.mode||"svg",r={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let g in o){const f=o[g];if(f!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&he(n,f);break;case"color":r.color=f;break;case"rotate":typeof f=="string"?n[g]=de(f):typeof f=="number"&&(n[g]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete i["aria-hidden"];break;default:{const w=L[g];w?(f===!0||f==="true"||f===1)&&(n[w]=!0):ft[g]===void 0&&(i[g]=f)}}}const l=me(t,n),a=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),e==="svg"){i.style={...r,...c},Object.assign(i,a);let g=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),i.innerHTML=Se(l.body,f?()=>f+"ID"+g++:"iconifyVue"),D("svg",i)}const{body:u,width:h,height:m}=t,d=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),p=ve(u,{...a,width:h+"",height:m+""});return i.style={...r,"--svg":Ie(p),width:pt(a.width),height:pt(a.height),...Ce,...d?Q:At,...c},D("span",i)},Te=Object.create(null),je=Z({inheritAttrs:!1,render(){const t=this.$attrs,o=t.icon,n=typeof o=="string"?Te[o]:typeof o=="object"?o:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:_e({...tt,...n},t)}}),_=/^[a-z0-9]+(-[a-z0-9]+)*$/,$=(t,o,n,i="")=>{const e=t.split(":");if(t.slice(0,1)==="@"){if(e.length<2||e.length>3)return null;i=e.shift().slice(1)}if(e.length>3||!e.length)return null;if(e.length>1){const c=e.pop(),l=e.pop(),a={provider:e.length>0?e[0]:i,prefix:l,name:c};return o&&!O(a)?null:a}const r=e[0],s=r.split("-");if(s.length>1){const c={provider:i,prefix:s.shift(),name:s.join("-")};return o&&!O(c)?null:c}if(n&&i===""){const c={provider:i,prefix:"",name:r};return o&&!O(c,n)?null:c}return null},O=(t,o)=>t?!!((t.provider===""||t.provider.match(_))&&(o&&t.prefix===""||t.prefix.match(_))&&t.name.match(_)):!1,Lt=Object.freeze({left:0,top:0,width:16,height:16}),R=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),F=Object.freeze({...Lt,...R}),U=Object.freeze({...F,body:"",hidden:!1});function $e(t,o){const n={};!t.hFlip!=!o.hFlip&&(n.hFlip=!0),!t.vFlip!=!o.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(o.rotate||0))%4;return i&&(n.rotate=i),n}function gt(t,o){const n=$e(t,o);for(const i in U)i in R?i in t&&!(i in n)&&(n[i]=R[i]):i in o?n[i]=o[i]:i in t&&(n[i]=t[i]);return n}function Fe(t,o){const n=t.icons,i=t.aliases||{},e=Object.create(null);function r(s){if(n[s])return e[s]=[];if(!(s in e)){e[s]=null;const c=i[s]&&i[s].parent,l=c&&r(c);l&&(e[s]=[c].concat(l))}return e[s]}return(o||Object.keys(n).concat(Object.keys(i))).forEach(r),e}function Pe(t,o,n){const i=t.icons,e=t.aliases||{};let r={};function s(c){r=gt(i[c]||e[c],r)}return s(o),n.forEach(s),gt(t,r)}function Ot(t,o){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(e=>{o(e,null),n.push(e)});const i=Fe(t);for(const e in i){const r=i[e];r&&(o(e,Pe(t,e,r)),n.push(e))}return n}const Me={provider:"",aliases:{},not_found:{},...Lt};function V(t,o){for(const n in o)if(n in t&&typeof t[n]!=typeof o[n])return!1;return!0}function Nt(t){if(typeof t!="object"||t===null)return null;const o=t;if(typeof o.prefix!="string"||!t.icons||typeof t.icons!="object"||!V(t,Me))return null;const n=o.icons;for(const e in n){const r=n[e];if(!e.match(_)||typeof r.body!="string"||!V(r,U))return null}const i=o.aliases||{};for(const e in i){const r=i[e],s=r.parent;if(!e.match(_)||typeof s!="string"||!n[s]&&!i[s]||!V(r,U))return null}return o}const mt=Object.create(null);function Ee(t,o){return{provider:t,prefix:o,icons:Object.create(null),missing:new Set}}function I(t,o){const n=mt[t]||(mt[t]=Object.create(null));return n[o]||(n[o]=Ee(t,o))}function et(t,o){return Nt(o)?Ot(o,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function Ae(t,o,n){try{if(typeof n.body=="string")return t.icons[o]={...n},!0}catch{}return!1}let T=!1;function zt(t){return typeof t=="boolean"&&(T=t),T}function Dt(t){const o=typeof t=="string"?$(t,!0,T):t;if(o){const n=I(o.provider,o.prefix),i=o.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function Le(t,o){const n=$(t,!0,T);if(!n)return!1;const i=I(n.provider,n.prefix);return Ae(i,n.name,o)}function Oe(t,o){if(typeof t!="object")return!1;if(typeof o!="string"&&(o=t.provider||""),T&&!o&&!t.prefix){let e=!1;return Nt(t)&&(t.prefix="",Ot(t,(r,s)=>{s&&Le(r,s)&&(e=!0)})),e}const n=t.prefix;if(!O({provider:o,prefix:n,name:"a"}))return!1;const i=I(o,n);return!!et(i,t)}const Rt=Object.freeze({width:null,height:null}),Ht=Object.freeze({...Rt,...R}),Ne=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ze=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function yt(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const i=t.split(Ne);if(i===null||!i.length)return t;const e=[];let r=i.shift(),s=ze.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?e.push(r):e.push(Math.ceil(c*o*n)/n)}else e.push(r);if(r=i.shift(),r===void 0)return e.join("");s=!s}}function De(t,o){const n={...F,...t},i={...Ht,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(d=>{const p=[],g=d.hFlip,f=d.vFlip;let w=d.rotate;g?f?w+=2:(p.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),p.push("scale(-1 1)"),e.top=e.left=0):f&&(p.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),p.push("scale(1 -1)"),e.top=e.left=0);let y;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:y=e.height/2+e.top,p.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:p.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:y=e.width/2+e.left,p.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}w%2===1&&(e.left!==e.top&&(y=e.left,e.left=e.top,e.top=y),e.width!==e.height&&(y=e.width,e.width=e.height,e.height=y)),p.length&&(r='<g transform="'+p.join(" ")+'">'+r+"</g>")});const s=i.width,c=i.height,l=e.width,a=e.height;let u,h;return s===null?(h=c===null?"1em":c==="auto"?a:c,u=yt(h,l/a)):(u=s==="auto"?l:s,h=c===null?yt(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:h.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:r}}const Re=/\sid="(\S+)"/g,He="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Be=0;function Ve(t,o=He){const n=[];let i;for(;i=Re.exec(t);)n.push(i[1]);return n.length&&n.forEach(e=>{const r=typeof o=="function"?o(e):o+(Be++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),t}const G=Object.create(null);function qe(t,o){G[t]=o}function W(t){return G[t]||G[""]}function nt(t){let o;if(typeof t.resources=="string")o=[t.resources];else if(o=t.resources,!(o instanceof Array)||!o.length)return null;return{resources:o,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const ot=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],N=[];for(;C.length>0;)C.length===1||Math.random()>.5?N.push(C.shift()):N.push(C.pop());ot[""]=nt({resources:["https://api.iconify.design"].concat(N)});function Qe(t,o){const n=nt(o);return n===null?!1:(ot[t]=n,!0)}function it(t){return ot[t]}const Ue=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let wt=Ue();function Ge(t,o){const n=it(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let e=0;n.resources.forEach(s=>{e=Math.max(e,s.length)});const r=o+".json?icons=";i=n.maxURL-e-n.path.length-r.length}return i}function We(t){return t===404}const Ke=(t,o,n)=>{const i=[],e=Ge(t,o),r="icons";let s={type:r,provider:t,prefix:o,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=e&&a>0&&(i.push(s),s={type:r,provider:t,prefix:o,icons:[]},c=l.length),s.icons.push(l)}),i.push(s),i};function Je(t){if(typeof t=="string"){const o=it(t);if(o)return o.path}return"/"}const Xe=(t,o,n)=>{if(!wt){n("abort",424);return}let i=Je(o.provider);switch(o.type){case"icons":{const r=o.prefix,c=o.icons.join(","),l=new URLSearchParams({icons:c});i+=r+".json?"+l.toString();break}case"custom":{const r=o.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let e=503;wt(t+i).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{n(We(s)?"abort":"next",s)});return}return e=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{n("next",e)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",e)})},Ye={prepare:Ke,send:Xe};function Ze(t){const o={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((e,r)=>e.provider!==r.provider?e.provider.localeCompare(r.provider):e.prefix!==r.prefix?e.prefix.localeCompare(r.prefix):e.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return t.forEach(e=>{if(i.name===e.name&&i.prefix===e.prefix&&i.provider===e.provider)return;i=e;const r=e.provider,s=e.prefix,c=e.name,l=n[r]||(n[r]=Object.create(null)),a=l[s]||(l[s]=I(r,s));let u;c in a.icons?u=o.loaded:s===""||a.missing.has(c)?u=o.missing:u=o.pending;const h={provider:r,prefix:s,name:c};u.push(h)}),o}function Bt(t,o){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(e=>e.id!==o))})}function tn(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const o=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!o.length)return;let n=!1;const i=t.provider,e=t.prefix;o.forEach(r=>{const s=r.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==e)return!0;const a=l.name;if(t.icons[a])s.loaded.push({provider:i,prefix:e,name:a});else if(t.missing.has(a))s.missing.push({provider:i,prefix:e,name:a});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||Bt([t],r.id),r.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),r.abort))})}))}let en=0;function nn(t,o,n){const i=en++,e=Bt.bind(null,n,i);if(!o.pending.length)return e;const r={id:i,icons:o,callback:t,abort:e};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(r)}),e}function on(t,o=!0,n=!1){const i=[];return t.forEach(e=>{const r=typeof e=="string"?$(e,o,n):e;r&&i.push(r)}),i}var rn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function sn(t,o,n,i){const e=t.resources.length,r=t.random?Math.floor(Math.random()*e):t.index;let s;if(t.random){let b=t.resources.slice(0);for(s=[];b.length>1;){const v=Math.floor(Math.random()*b.length);s.push(b[v]),b=b.slice(0,v).concat(b.slice(v+1))}s=s.concat(b)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let l="pending",a=0,u,h=null,m=[],d=[];typeof i=="function"&&d.push(i);function p(){h&&(clearTimeout(h),h=null)}function g(){l==="pending"&&(l="aborted"),p(),m.forEach(b=>{b.status==="pending"&&(b.status="aborted")}),m=[]}function f(b,v){v&&(d=[]),typeof b=="function"&&d.push(b)}function w(){return{startTime:c,payload:o,status:l,queriesSent:a,queriesPending:m.length,subscribe:f,abort:g}}function y(){l="failed",d.forEach(b=>{b(void 0,u)})}function ct(){m.forEach(b=>{b.status==="pending"&&(b.status="aborted")}),m=[]}function Yt(b,v,k){const P=v!=="success";switch(m=m.filter(x=>x!==b),l){case"pending":break;case"failed":if(P||!t.dataAfterTimeout)return;break;default:return}if(v==="abort"){u=k,y();return}if(P){u=k,m.length||(s.length?B():y());return}if(p(),ct(),!t.random){const x=t.resources.indexOf(b.resource);x!==-1&&x!==t.index&&(t.index=x)}l="completed",d.forEach(x=>{x(k)})}function B(){if(l!=="pending")return;p();const b=s.shift();if(b===void 0){if(m.length){h=setTimeout(()=>{p(),l==="pending"&&(ct(),y())},t.timeout);return}y();return}const v={status:"pending",resource:b,callback:(k,P)=>{Yt(v,k,P)}};m.push(v),a++,h=setTimeout(B,t.rotate),n(b,o,v.callback)}return setTimeout(B),w}function Vt(t){const o={...rn,...t};let n=[];function i(){n=n.filter(c=>c().status==="pending")}function e(c,l,a){const u=sn(o,c,l,(h,m)=>{i(),a&&a(h,m)});return n.push(u),u}function r(c){return n.find(l=>c(l))||null}return{query:e,find:r,setIndex:c=>{o.index=c},getIndex:()=>o.index,cleanup:i}}function bt(){}const q=Object.create(null);function cn(t){if(!q[t]){const o=it(t);if(!o)return;const n=Vt(o),i={config:o,redundancy:n};q[t]=i}return q[t]}function ln(t,o,n){let i,e;if(typeof t=="string"){const r=W(t);if(!r)return n(void 0,424),bt;e=r.send;const s=cn(t);s&&(i=s.redundancy)}else{const r=nt(t);if(r){i=Vt(r);const s=t.resources?t.resources[0]:"",c=W(s);c&&(e=c.send)}}return!i||!e?(n(void 0,424),bt):i.query(o,e,n)().abort}const St="iconify2",j="iconify",qt=j+"-count",vt=j+"-version",Qt=36e5,an=168;function K(t,o){try{return t.getItem(o)}catch{}}function rt(t,o,n){try{return t.setItem(o,n),!0}catch{}}function xt(t,o){try{t.removeItem(o)}catch{}}function J(t,o){return rt(t,qt,o.toString())}function X(t){return parseInt(K(t,qt))||0}const H={local:!0,session:!0},Ut={local:new Set,session:new Set};let st=!1;function un(t){st=t}let A=typeof window>"u"?{}:window;function Gt(t){const o=t+"Storage";try{if(A&&A[o]&&typeof A[o].length=="number")return A[o]}catch{}H[t]=!1}function Wt(t,o){const n=Gt(t);if(!n)return;const i=K(n,vt);if(i!==St){if(i){const c=X(n);for(let l=0;l<c;l++)xt(n,j+l.toString())}rt(n,vt,St),J(n,0);return}const e=Math.floor(Date.now()/Qt)-an,r=c=>{const l=j+c.toString(),a=K(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>e&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&o(u,c))return!0}catch{}xt(n,l)}};let s=X(n);for(let c=s-1;c>=0;c--)r(c)||(c===s-1?(s--,J(n,s)):Ut[t].add(c))}function Kt(){if(!st){un(!0);for(const t in H)Wt(t,o=>{const n=o.data,i=o.provider,e=n.prefix,r=I(i,e);if(!et(r,n).length)return!1;const s=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,s):s,!0})}}function fn(t,o){const n=t.lastModifiedCached;if(n&&n>=o)return n===o;if(t.lastModifiedCached=o,n)for(const i in H)Wt(i,e=>{const r=e.data;return e.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===o});return!0}function hn(t,o){st||Kt();function n(i){let e;if(!H[i]||!(e=Gt(i)))return;const r=Ut[i];let s;if(r.size)r.delete(s=Array.from(r).shift());else if(s=X(e),!J(e,s+1))return;const c={cached:Math.floor(Date.now()/Qt),provider:t.provider,data:o};return rt(e,j+s.toString(),JSON.stringify(c))}o.lastModified&&!fn(t,o.lastModified)||!Object.keys(o.icons).length||(o.not_found&&(o=Object.assign({},o),delete o.not_found),n("local")||n("session"))}function It(){}function dn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,tn(t)}))}function pn(t,o){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(o).sort():t.iconsToLoad=o,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,e=t.iconsToLoad;delete t.iconsToLoad;let r;if(!e||!(r=W(n)))return;r.prepare(n,i,e).forEach(c=>{ln(n,c,(l,a)=>{if(typeof l!="object"){if(a!==404)return;c.icons.forEach(u=>{t.missing.add(u)})}else try{const u=et(t,l);if(!u.length)return;const h=t.pendingIcons;h&&u.forEach(m=>{h.delete(m)}),hn(t,l)}catch(u){console.error(u)}dn(t)})})}))}const Jt=(t,o)=>{const n=on(t,!0,zt()),i=Ze(n);if(!i.pending.length){let l=!0;return o&&setTimeout(()=>{l&&o(i.loaded,i.missing,i.pending,It)}),()=>{l=!1}}const e=Object.create(null),r=[];let s,c;return i.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===s)return;s=a,c=u,r.push(I(a,u));const h=e[a]||(e[a]=Object.create(null));h[u]||(h[u]=[])}),i.pending.forEach(l=>{const{provider:a,prefix:u,name:h}=l,m=I(a,u),d=m.pendingIcons||(m.pendingIcons=new Set);d.has(h)||(d.add(h),e[a][u].push(h))}),r.forEach(l=>{const{provider:a,prefix:u}=l;e[a][u].length&&pn(l,e[a][u])}),o?nn(o,i,r):It},gn=t=>new Promise((o,n)=>{const i=typeof t=="string"?$(t):t;Jt([i||t],e=>{if(e.length&&i){const r=Dt(i);if(r){o({...F,...r});return}}n(t)})});function mn(t,o){const n={...t};for(const i in o){const e=o[i],r=typeof e;i in Rt?(e===null||e&&(r==="string"||r==="number"))&&(n[i]=e):r===typeof n[i]&&(n[i]=i==="rotate"?e%4:e)}return n}const yn=/[\s,]+/;function wn(t,o){o.split(yn).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function bn(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:i(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/e,r%1===0?i(r):0)}}return o}function Sn(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in o)n+=" "+i+'="'+o[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function vn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function xn(t){return'url("data:image/svg+xml,'+vn(t)+'")'}const kt={...Ht,inline:!1},In={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},kn={display:"inline-block"},Y={backgroundColor:"currentColor"},Xt={backgroundColor:"transparent"},Ct={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},_t={webkitMask:Y,mask:Y,background:Xt};for(const t in _t){const o=_t[t];for(const n in Ct)o[t+n]=Ct[n]}const z={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";z[t+"-flip"]=o,z[t.slice(0,1)+"-flip"]=o,z[t+"Flip"]=o});function Tt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const jt=(t,o)=>{const n=mn(kt,o),i={...In},e=o.mode||"svg",r={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let g in o){const f=o[g];if(f!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&wn(n,f);break;case"color":r.color=f;break;case"rotate":typeof f=="string"?n[g]=bn(f):typeof f=="number"&&(n[g]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete i["aria-hidden"];break;default:{const w=z[g];w?(f===!0||f==="true"||f===1)&&(n[w]=!0):kt[g]===void 0&&(i[g]=f)}}}const l=De(t,n),a=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),e==="svg"){i.style={...r,...c},Object.assign(i,a);let g=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),i.innerHTML=Ve(l.body,f?()=>f+"ID"+g++:"iconifyVue"),D("svg",i)}const{body:u,width:h,height:m}=t,d=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),p=Sn(u,{...a,width:h+"",height:m+""});return i.style={...r,"--svg":xn(p),width:Tt(a.width),height:Tt(a.height),...kn,...d?Y:Xt,...c},D("span",i)};zt(!0);qe("",Ye);if(typeof document<"u"&&typeof window<"u"){Kt();const t=window;if(t.IconifyPreload!==void 0){const o=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof o=="object"&&o!==null&&(o instanceof Array?o:[o]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Oe(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const o=t.IconifyProviders;if(typeof o=="object"&&o!==null)for(let n in o){const i="IconifyProviders["+n+"] is invalid.";try{const e=o[n];if(typeof e!="object"||!e||e.resources===void 0)continue;Qe(n,e)||console.error(i)}catch{console.error(i)}}}}const Cn={...F,body:""};Z({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,o){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=$(t,!1,!0))===null)return this.abortLoading(),null;const i=Dt(n);if(!i)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",i!==null&&(this._loadingIcon={name:t,abort:Jt([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,o&&o(t));const e=["iconify"];return n.prefix!==""&&e.push("iconify--"+n.prefix),n.provider!==""&&e.push("iconify--"+n.provider),{data:i,classes:e}}},render(){this.counter;const t=this.$attrs,o=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!o)return jt(Cn,t);let n=t;return o.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+o.classes.join(" ")}),jt({...F,...o.data},n)}});const _n=["width","height"],Tn=Z({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(t){let o,n;const i=t,e=$t(),r=ae().nuxtIcon,s=ee("icons",()=>({})),c=ne(!1),l=M(()=>((r==null?void 0:r.aliases)||{})[i.name]||i.name),a=M(()=>{var d;return(d=s.value)==null?void 0:d[l.value]}),u=M(()=>e.vueApp.component(l.value)),h=M(()=>{const d=i.size||(r==null?void 0:r.size)||"1em";return String(Number(d))===d?`${d}px`:d});async function m(){var d;u.value||(d=s.value)!=null&&d[l.value]||(c.value=!0,s.value[l.value]=await gn(l.value).catch(()=>{}),c.value=!1)}return oe(()=>l.value,m),!u.value&&([o,n]=ie(()=>m()),o=await o,n()),(d,p)=>S(c)?(E(),lt("span",{key:0,class:"icon",width:S(h),height:S(h)},null,8,_n)):S(a)?(E(),at(S(je),{key:1,icon:S(a),class:"icon",width:S(h),height:S(h)},null,8,["icon","width","height"])):S(u)?(E(),at(re(S(u)),{key:2,class:"icon",width:S(h),height:S(h)},null,8,["width","height"])):(E(),lt("span",{key:3,class:"icon",style:ce({fontSize:S(h),lineHeight:S(h),width:S(h),height:S(h)})},se(t.name),5))}});const $n=le(Tn,[["__scopeId","data-v-ca945699"]]);export{$n as default};
