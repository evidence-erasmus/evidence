import{a as Ft,r as te,b as ee,e as tt,h as R,f as ne,i as oe,j as P,w as ie,k as re,u as S,o as M,l as at,c as ut,m as se,t as ce,p as le,q as ae}from"./entry.6489b0af.js";function ue(){const t=Ft();return t._appConfig||(t._appConfig=te(ee)),t._appConfig}const At=Object.freeze({left:0,top:0,width:16,height:16}),Pt=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),et=Object.freeze({...At,...Pt});Object.freeze({...et,body:"",hidden:!1});({...At});const Mt=Object.freeze({width:null,height:null}),Et=Object.freeze({...Mt,...Pt});function fe(t,o){const n={...t};for(const i in o){const e=o[i],r=typeof e;i in Mt?(e===null||e&&(r==="string"||r==="number"))&&(n[i]=e):r===typeof n[i]&&(n[i]=i==="rotate"?e%4:e)}return n}const he=/[\s,]+/;function de(t,o){o.split(he).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function pe(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:i(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/e,r%1===0?i(r):0)}}return o}const ge=/(-?[0-9.]*[0-9]+[0-9.]*)/g,me=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ft(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const i=t.split(ge);if(i===null||!i.length)return t;const e=[];let r=i.shift(),s=me.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?e.push(r):e.push(Math.ceil(c*o*n)/n)}else e.push(r);if(r=i.shift(),r===void 0)return e.join("");s=!s}}function ye(t,o){const n={...et,...t},i={...Et,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(d=>{const p=[],g=d.hFlip,f=d.vFlip;let w=d.rotate;g?f?w+=2:(p.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),p.push("scale(-1 1)"),e.top=e.left=0):f&&(p.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),p.push("scale(1 -1)"),e.top=e.left=0);let y;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:y=e.height/2+e.top,p.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:p.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:y=e.width/2+e.left,p.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}w%2===1&&(e.left!==e.top&&(y=e.left,e.left=e.top,e.top=y),e.width!==e.height&&(y=e.width,e.width=e.height,e.height=y)),p.length&&(r='<g transform="'+p.join(" ")+'">'+r+"</g>")});const s=i.width,c=i.height,l=e.width,a=e.height;let u,h;return s===null?(h=c===null?"1em":c==="auto"?a:c,u=ft(h,l/a)):(u=s==="auto"?l:s,h=c===null?ft(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:h.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:r}}const we=/\sid="(\S+)"/g,be="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Se=0;function xe(t,o=be){const n=[];let i;for(;i=we.exec(t);)n.push(i[1]);return n.length&&n.forEach(e=>{const r=typeof o=="function"?o(e):o+(Se++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),t}function ve(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in o)n+=" "+i+'="'+o[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Ie(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ke(t){return'url("data:image/svg+xml,'+Ie(t)+'")'}const ht={...Et,inline:!1},Ce={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},_e={display:"inline-block"},U={backgroundColor:"currentColor"},Lt={backgroundColor:"transparent"},dt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},pt={webkitMask:U,mask:U,background:Lt};for(const t in pt){const o=pt[t];for(const n in dt)o[t+n]=dt[n]}const O={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";O[t+"-flip"]=o,O[t.slice(0,1)+"-flip"]=o,O[t+"Flip"]=o});function gt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Te=(t,o)=>{const n=fe(ht,o),i={...Ce},e=o.mode||"svg",r={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let g in o){const f=o[g];if(f!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&de(n,f);break;case"color":r.color=f;break;case"rotate":typeof f=="string"?n[g]=pe(f):typeof f=="number"&&(n[g]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete i["aria-hidden"];break;default:{const w=O[g];w?(f===!0||f==="true"||f===1)&&(n[w]=!0):ht[g]===void 0&&(i[g]=f)}}}const l=ye(t,n),a=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),e==="svg"){i.style={...r,...c},Object.assign(i,a);let g=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),i.innerHTML=xe(l.body,f?()=>f+"ID"+g++:"iconifyVue"),R("svg",i)}const{body:u,width:h,height:m}=t,d=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),p=ve(u,{...a,width:h+"",height:m+""});return i.style={...r,"--svg":ke(p),width:gt(a.width),height:gt(a.height),..._e,...d?U:Lt,...c},R("span",i)},je=Object.create(null),$e=tt({inheritAttrs:!1,render(){const t=this.$attrs,o=t.icon,n=typeof o=="string"?je[o]:typeof o=="object"?o:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:Te({...et,...n},t)}}),_=/^[a-z0-9]+(-[a-z0-9]+)*$/,$=(t,o,n,i="")=>{const e=t.split(":");if(t.slice(0,1)==="@"){if(e.length<2||e.length>3)return null;i=e.shift().slice(1)}if(e.length>3||!e.length)return null;if(e.length>1){const c=e.pop(),l=e.pop(),a={provider:e.length>0?e[0]:i,prefix:l,name:c};return o&&!N(a)?null:a}const r=e[0],s=r.split("-");if(s.length>1){const c={provider:i,prefix:s.shift(),name:s.join("-")};return o&&!N(c)?null:c}if(n&&i===""){const c={provider:i,prefix:"",name:r};return o&&!N(c,n)?null:c}return null},N=(t,o)=>t?!!((t.provider===""||t.provider.match(_))&&(o&&t.prefix===""||t.prefix.match(_))&&t.name.match(_)):!1,Ot=Object.freeze({left:0,top:0,width:16,height:16}),H=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),F=Object.freeze({...Ot,...H}),G=Object.freeze({...F,body:"",hidden:!1});function Fe(t,o){const n={};!t.hFlip!=!o.hFlip&&(n.hFlip=!0),!t.vFlip!=!o.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(o.rotate||0))%4;return i&&(n.rotate=i),n}function mt(t,o){const n=Fe(t,o);for(const i in G)i in H?i in t&&!(i in n)&&(n[i]=H[i]):i in o?n[i]=o[i]:i in t&&(n[i]=t[i]);return n}function Ae(t,o){const n=t.icons,i=t.aliases||{},e=Object.create(null);function r(s){if(n[s])return e[s]=[];if(!(s in e)){e[s]=null;const c=i[s]&&i[s].parent,l=c&&r(c);l&&(e[s]=[c].concat(l))}return e[s]}return(o||Object.keys(n).concat(Object.keys(i))).forEach(r),e}function Pe(t,o,n){const i=t.icons,e=t.aliases||{};let r={};function s(c){r=mt(i[c]||e[c],r)}return s(o),n.forEach(s),mt(t,r)}function Nt(t,o){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(e=>{o(e,null),n.push(e)});const i=Ae(t);for(const e in i){const r=i[e];r&&(o(e,Pe(t,e,r)),n.push(e))}return n}const Me={provider:"",aliases:{},not_found:{},...Ot};function q(t,o){for(const n in o)if(n in t&&typeof t[n]!=typeof o[n])return!1;return!0}function zt(t){if(typeof t!="object"||t===null)return null;const o=t;if(typeof o.prefix!="string"||!t.icons||typeof t.icons!="object"||!q(t,Me))return null;const n=o.icons;for(const e in n){const r=n[e];if(!e.match(_)||typeof r.body!="string"||!q(r,G))return null}const i=o.aliases||{};for(const e in i){const r=i[e],s=r.parent;if(!e.match(_)||typeof s!="string"||!n[s]&&!i[s]||!q(r,G))return null}return o}const yt=Object.create(null);function Ee(t,o){return{provider:t,prefix:o,icons:Object.create(null),missing:new Set}}function I(t,o){const n=yt[t]||(yt[t]=Object.create(null));return n[o]||(n[o]=Ee(t,o))}function nt(t,o){return zt(o)?Nt(o,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function Le(t,o,n){try{if(typeof n.body=="string")return t.icons[o]={...n},!0}catch{}return!1}let T=!1;function Dt(t){return typeof t=="boolean"&&(T=t),T}function Rt(t){const o=typeof t=="string"?$(t,!0,T):t;if(o){const n=I(o.provider,o.prefix),i=o.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function Oe(t,o){const n=$(t,!0,T);if(!n)return!1;const i=I(n.provider,n.prefix);return Le(i,n.name,o)}function Ne(t,o){if(typeof t!="object")return!1;if(typeof o!="string"&&(o=t.provider||""),T&&!o&&!t.prefix){let e=!1;return zt(t)&&(t.prefix="",Nt(t,(r,s)=>{s&&Oe(r,s)&&(e=!0)})),e}const n=t.prefix;if(!N({provider:o,prefix:n,name:"a"}))return!1;const i=I(o,n);return!!nt(i,t)}const Ht=Object.freeze({width:null,height:null}),Bt=Object.freeze({...Ht,...H}),ze=/(-?[0-9.]*[0-9]+[0-9.]*)/g,De=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function wt(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const i=t.split(ze);if(i===null||!i.length)return t;const e=[];let r=i.shift(),s=De.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?e.push(r):e.push(Math.ceil(c*o*n)/n)}else e.push(r);if(r=i.shift(),r===void 0)return e.join("");s=!s}}function Re(t,o){const n={...F,...t},i={...Bt,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(d=>{const p=[],g=d.hFlip,f=d.vFlip;let w=d.rotate;g?f?w+=2:(p.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),p.push("scale(-1 1)"),e.top=e.left=0):f&&(p.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),p.push("scale(1 -1)"),e.top=e.left=0);let y;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:y=e.height/2+e.top,p.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:p.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:y=e.width/2+e.left,p.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}w%2===1&&(e.left!==e.top&&(y=e.left,e.left=e.top,e.top=y),e.width!==e.height&&(y=e.width,e.width=e.height,e.height=y)),p.length&&(r='<g transform="'+p.join(" ")+'">'+r+"</g>")});const s=i.width,c=i.height,l=e.width,a=e.height;let u,h;return s===null?(h=c===null?"1em":c==="auto"?a:c,u=wt(h,l/a)):(u=s==="auto"?l:s,h=c===null?wt(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:h.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:r}}const He=/\sid="(\S+)"/g,Be="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ve=0;function qe(t,o=Be){const n=[];let i;for(;i=He.exec(t);)n.push(i[1]);return n.length&&n.forEach(e=>{const r=typeof o=="function"?o(e):o+(Ve++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),t}const W=Object.create(null);function Qe(t,o){W[t]=o}function K(t){return W[t]||W[""]}function ot(t){let o;if(typeof t.resources=="string")o=[t.resources];else if(o=t.resources,!(o instanceof Array)||!o.length)return null;return{resources:o,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const it=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],z=[];for(;C.length>0;)C.length===1||Math.random()>.5?z.push(C.shift()):z.push(C.pop());it[""]=ot({resources:["https://api.iconify.design"].concat(z)});function Ue(t,o){const n=ot(o);return n===null?!1:(it[t]=n,!0)}function rt(t){return it[t]}const Ge=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let bt=Ge();function We(t,o){const n=rt(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let e=0;n.resources.forEach(s=>{e=Math.max(e,s.length)});const r=o+".json?icons=";i=n.maxURL-e-n.path.length-r.length}return i}function Ke(t){return t===404}const Je=(t,o,n)=>{const i=[],e=We(t,o),r="icons";let s={type:r,provider:t,prefix:o,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=e&&a>0&&(i.push(s),s={type:r,provider:t,prefix:o,icons:[]},c=l.length),s.icons.push(l)}),i.push(s),i};function Xe(t){if(typeof t=="string"){const o=rt(t);if(o)return o.path}return"/"}const Ye=(t,o,n)=>{if(!bt){n("abort",424);return}let i=Xe(o.provider);switch(o.type){case"icons":{const r=o.prefix,c=o.icons.join(","),l=new URLSearchParams({icons:c});i+=r+".json?"+l.toString();break}case"custom":{const r=o.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let e=503;bt(t+i).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{n(Ke(s)?"abort":"next",s)});return}return e=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{n("next",e)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",e)})},Ze={prepare:Je,send:Ye};function tn(t){const o={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((e,r)=>e.provider!==r.provider?e.provider.localeCompare(r.provider):e.prefix!==r.prefix?e.prefix.localeCompare(r.prefix):e.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return t.forEach(e=>{if(i.name===e.name&&i.prefix===e.prefix&&i.provider===e.provider)return;i=e;const r=e.provider,s=e.prefix,c=e.name,l=n[r]||(n[r]=Object.create(null)),a=l[s]||(l[s]=I(r,s));let u;c in a.icons?u=o.loaded:s===""||a.missing.has(c)?u=o.missing:u=o.pending;const h={provider:r,prefix:s,name:c};u.push(h)}),o}function Vt(t,o){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(e=>e.id!==o))})}function en(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const o=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!o.length)return;let n=!1;const i=t.provider,e=t.prefix;o.forEach(r=>{const s=r.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==e)return!0;const a=l.name;if(t.icons[a])s.loaded.push({provider:i,prefix:e,name:a});else if(t.missing.has(a))s.missing.push({provider:i,prefix:e,name:a});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||Vt([t],r.id),r.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),r.abort))})}))}let nn=0;function on(t,o,n){const i=nn++,e=Vt.bind(null,n,i);if(!o.pending.length)return e;const r={id:i,icons:o,callback:t,abort:e};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(r)}),e}function rn(t,o=!0,n=!1){const i=[];return t.forEach(e=>{const r=typeof e=="string"?$(e,o,n):e;r&&i.push(r)}),i}var sn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function cn(t,o,n,i){const e=t.resources.length,r=t.random?Math.floor(Math.random()*e):t.index;let s;if(t.random){let b=t.resources.slice(0);for(s=[];b.length>1;){const x=Math.floor(Math.random()*b.length);s.push(b[x]),b=b.slice(0,x).concat(b.slice(x+1))}s=s.concat(b)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let l="pending",a=0,u,h=null,m=[],d=[];typeof i=="function"&&d.push(i);function p(){h&&(clearTimeout(h),h=null)}function g(){l==="pending"&&(l="aborted"),p(),m.forEach(b=>{b.status==="pending"&&(b.status="aborted")}),m=[]}function f(b,x){x&&(d=[]),typeof b=="function"&&d.push(b)}function w(){return{startTime:c,payload:o,status:l,queriesSent:a,queriesPending:m.length,subscribe:f,abort:g}}function y(){l="failed",d.forEach(b=>{b(void 0,u)})}function lt(){m.forEach(b=>{b.status==="pending"&&(b.status="aborted")}),m=[]}function Zt(b,x,k){const A=x!=="success";switch(m=m.filter(v=>v!==b),l){case"pending":break;case"failed":if(A||!t.dataAfterTimeout)return;break;default:return}if(x==="abort"){u=k,y();return}if(A){u=k,m.length||(s.length?V():y());return}if(p(),lt(),!t.random){const v=t.resources.indexOf(b.resource);v!==-1&&v!==t.index&&(t.index=v)}l="completed",d.forEach(v=>{v(k)})}function V(){if(l!=="pending")return;p();const b=s.shift();if(b===void 0){if(m.length){h=setTimeout(()=>{p(),l==="pending"&&(lt(),y())},t.timeout);return}y();return}const x={status:"pending",resource:b,callback:(k,A)=>{Zt(x,k,A)}};m.push(x),a++,h=setTimeout(V,t.rotate),n(b,o,x.callback)}return setTimeout(V),w}function qt(t){const o={...sn,...t};let n=[];function i(){n=n.filter(c=>c().status==="pending")}function e(c,l,a){const u=cn(o,c,l,(h,m)=>{i(),a&&a(h,m)});return n.push(u),u}function r(c){return n.find(l=>c(l))||null}return{query:e,find:r,setIndex:c=>{o.index=c},getIndex:()=>o.index,cleanup:i}}function St(){}const Q=Object.create(null);function ln(t){if(!Q[t]){const o=rt(t);if(!o)return;const n=qt(o),i={config:o,redundancy:n};Q[t]=i}return Q[t]}function an(t,o,n){let i,e;if(typeof t=="string"){const r=K(t);if(!r)return n(void 0,424),St;e=r.send;const s=ln(t);s&&(i=s.redundancy)}else{const r=ot(t);if(r){i=qt(r);const s=t.resources?t.resources[0]:"",c=K(s);c&&(e=c.send)}}return!i||!e?(n(void 0,424),St):i.query(o,e,n)().abort}const xt="iconify2",j="iconify",Qt=j+"-count",vt=j+"-version",Ut=36e5,un=168;function J(t,o){try{return t.getItem(o)}catch{}}function st(t,o,n){try{return t.setItem(o,n),!0}catch{}}function It(t,o){try{t.removeItem(o)}catch{}}function X(t,o){return st(t,Qt,o.toString())}function Y(t){return parseInt(J(t,Qt))||0}const B={local:!0,session:!0},Gt={local:new Set,session:new Set};let ct=!1;function fn(t){ct=t}let E=typeof window>"u"?{}:window;function Wt(t){const o=t+"Storage";try{if(E&&E[o]&&typeof E[o].length=="number")return E[o]}catch{}B[t]=!1}function Kt(t,o){const n=Wt(t);if(!n)return;const i=J(n,vt);if(i!==xt){if(i){const c=Y(n);for(let l=0;l<c;l++)It(n,j+l.toString())}st(n,vt,xt),X(n,0);return}const e=Math.floor(Date.now()/Ut)-un,r=c=>{const l=j+c.toString(),a=J(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>e&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&o(u,c))return!0}catch{}It(n,l)}};let s=Y(n);for(let c=s-1;c>=0;c--)r(c)||(c===s-1?(s--,X(n,s)):Gt[t].add(c))}function Jt(){if(!ct){fn(!0);for(const t in B)Kt(t,o=>{const n=o.data,i=o.provider,e=n.prefix,r=I(i,e);if(!nt(r,n).length)return!1;const s=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,s):s,!0})}}function hn(t,o){const n=t.lastModifiedCached;if(n&&n>=o)return n===o;if(t.lastModifiedCached=o,n)for(const i in B)Kt(i,e=>{const r=e.data;return e.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===o});return!0}function dn(t,o){ct||Jt();function n(i){let e;if(!B[i]||!(e=Wt(i)))return;const r=Gt[i];let s;if(r.size)r.delete(s=Array.from(r).shift());else if(s=Y(e),!X(e,s+1))return;const c={cached:Math.floor(Date.now()/Ut),provider:t.provider,data:o};return st(e,j+s.toString(),JSON.stringify(c))}o.lastModified&&!hn(t,o.lastModified)||!Object.keys(o.icons).length||(o.not_found&&(o=Object.assign({},o),delete o.not_found),n("local")||n("session"))}function kt(){}function pn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,en(t)}))}function gn(t,o){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(o).sort():t.iconsToLoad=o,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,e=t.iconsToLoad;delete t.iconsToLoad;let r;if(!e||!(r=K(n)))return;r.prepare(n,i,e).forEach(c=>{an(n,c,(l,a)=>{if(typeof l!="object"){if(a!==404)return;c.icons.forEach(u=>{t.missing.add(u)})}else try{const u=nt(t,l);if(!u.length)return;const h=t.pendingIcons;h&&u.forEach(m=>{h.delete(m)}),dn(t,l)}catch(u){console.error(u)}pn(t)})})}))}const Xt=(t,o)=>{const n=rn(t,!0,Dt()),i=tn(n);if(!i.pending.length){let l=!0;return o&&setTimeout(()=>{l&&o(i.loaded,i.missing,i.pending,kt)}),()=>{l=!1}}const e=Object.create(null),r=[];let s,c;return i.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===s)return;s=a,c=u,r.push(I(a,u));const h=e[a]||(e[a]=Object.create(null));h[u]||(h[u]=[])}),i.pending.forEach(l=>{const{provider:a,prefix:u,name:h}=l,m=I(a,u),d=m.pendingIcons||(m.pendingIcons=new Set);d.has(h)||(d.add(h),e[a][u].push(h))}),r.forEach(l=>{const{provider:a,prefix:u}=l;e[a][u].length&&gn(l,e[a][u])}),o?on(o,i,r):kt},mn=t=>new Promise((o,n)=>{const i=typeof t=="string"?$(t):t;Xt([i||t],e=>{if(e.length&&i){const r=Rt(i);if(r){o({...F,...r});return}}n(t)})});function yn(t,o){const n={...t};for(const i in o){const e=o[i],r=typeof e;i in Ht?(e===null||e&&(r==="string"||r==="number"))&&(n[i]=e):r===typeof n[i]&&(n[i]=i==="rotate"?e%4:e)}return n}const wn=/[\s,]+/;function bn(t,o){o.split(wn).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Sn(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:i(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/e,r%1===0?i(r):0)}}return o}function xn(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in o)n+=" "+i+'="'+o[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function vn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function In(t){return'url("data:image/svg+xml,'+vn(t)+'")'}const Ct={...Bt,inline:!1},kn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Cn={display:"inline-block"},Z={backgroundColor:"currentColor"},Yt={backgroundColor:"transparent"},_t={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Tt={webkitMask:Z,mask:Z,background:Yt};for(const t in Tt){const o=Tt[t];for(const n in _t)o[t+n]=_t[n]}const D={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";D[t+"-flip"]=o,D[t.slice(0,1)+"-flip"]=o,D[t+"Flip"]=o});function jt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const $t=(t,o)=>{const n=yn(Ct,o),i={...kn},e=o.mode||"svg",r={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let g in o){const f=o[g];if(f!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&bn(n,f);break;case"color":r.color=f;break;case"rotate":typeof f=="string"?n[g]=Sn(f):typeof f=="number"&&(n[g]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete i["aria-hidden"];break;default:{const w=D[g];w?(f===!0||f==="true"||f===1)&&(n[w]=!0):Ct[g]===void 0&&(i[g]=f)}}}const l=Re(t,n),a=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),e==="svg"){i.style={...r,...c},Object.assign(i,a);let g=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),i.innerHTML=qe(l.body,f?()=>f+"ID"+g++:"iconifyVue"),R("svg",i)}const{body:u,width:h,height:m}=t,d=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),p=xn(u,{...a,width:h+"",height:m+""});return i.style={...r,"--svg":In(p),width:jt(a.width),height:jt(a.height),...Cn,...d?Z:Yt,...c},R("span",i)};Dt(!0);Qe("",Ze);if(typeof document<"u"&&typeof window<"u"){Jt();const t=window;if(t.IconifyPreload!==void 0){const o=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof o=="object"&&o!==null&&(o instanceof Array?o:[o]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Ne(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const o=t.IconifyProviders;if(typeof o=="object"&&o!==null)for(let n in o){const i="IconifyProviders["+n+"] is invalid.";try{const e=o[n];if(typeof e!="object"||!e||e.resources===void 0)continue;Ue(n,e)||console.error(i)}catch{console.error(i)}}}}const _n={...F,body:""};tt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,o){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=$(t,!1,!0))===null)return this.abortLoading(),null;const i=Rt(n);if(!i)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",i!==null&&(this._loadingIcon={name:t,abort:Xt([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,o&&o(t));const e=["iconify"];return n.prefix!==""&&e.push("iconify--"+n.prefix),n.provider!==""&&e.push("iconify--"+n.provider),{data:i,classes:e}}},render(){this.counter;const t=this.$attrs,o=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!o)return $t(_n,t);let n=t;return o.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+o.classes.join(" ")}),$t({...F,...o.data},n)}});function L(t){let o,n=t[0],i=1;for(;i<t.length;){const e=t[i],r=t[i+1];if(i+=2,(e==="optionalAccess"||e==="optionalCall")&&n==null)return;e==="access"||e==="optionalAccess"?(o=n,n=r(n)):(e==="call"||e==="optionalCall")&&(n=r((...s)=>n.call(o,...s)),o=void 0)}return n}const Tn=["width","height"],jn=tt({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(t){let o,n;const i=t,e=Ft(),r=ue().nuxtIcon,s=ne("icons",()=>({})),c=oe(!1),l=P(()=>(L([r,"optionalAccess",d=>d.aliases])||{})[i.name]||i.name),a=P(()=>L([s,"access",d=>d.value,"optionalAccess",d=>d[l.value]])),u=P(()=>e.vueApp.component(l.value)),h=P(()=>{const d=i.size||L([r,"optionalAccess",p=>p.size])||"1em";return String(Number(d))===d?`${d}px`:d});async function m(){u.value||L([s,"access",d=>d.value,"optionalAccess",d=>d[l.value]])||(c.value=!0,s.value[l.value]=await mn(l.value).catch(()=>{}),c.value=!1)}return ie(()=>l.value,m),!u.value&&([o,n]=re(()=>m()),o=await o,n()),(d,p)=>S(c)?(M(),at("span",{key:0,class:"icon",width:S(h),height:S(h)},null,8,Tn)):S(a)?(M(),ut(S($e),{key:1,icon:S(a),class:"icon",width:S(h),height:S(h)},null,8,["icon","width","height"])):S(u)?(M(),ut(se(S(u)),{key:2,class:"icon",width:S(h),height:S(h)},null,8,["width","height"])):(M(),at("span",{key:3,class:"icon",style:le({fontSize:S(h),lineHeight:S(h),width:S(h),height:S(h)})},ce(t.name),5))}});const Fn=ae(jn,[["__scopeId","data-v-ca945699"]]);export{Fn as default};