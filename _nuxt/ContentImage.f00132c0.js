import{H as $,Q as H,R as b,L,S as q,T as j,U as G,V as U,E,n as v,G as T,B as I,u as V,I as F,K as Q,o as P,c as M,b as J,C as W,a as X,W as Y,t as Z,A as K}from"./entry.dda16265.js";async function ee(e,t){return await te(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function te(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,o)=>{const i=new Image;i.onload=()=>{const r={width:i.width,height:i.height,ratio:i.width/i.height};t(r)},i.onerror=r=>o(r),i.src=e})}function O(e){return t=>t?e[t]||t:e.missingValue}function N({formatter:e,keyMap:t,joinWith:o="/",valueMap:i}={}){e||(e=(n,s)=>`${n}=${s}`),t&&typeof t!="function"&&(t=O(t));const r=i||{};return Object.keys(r).forEach(n=>{typeof r[n]!="function"&&(r[n]=O(r[n]))}),(n={})=>Object.entries(n).filter(([c,l])=>typeof l<"u").map(([c,l])=>{const d=r[c];return typeof d=="function"&&(l=d(n[c])),c=typeof t=="function"?t(c):c,e(c,l)}).join(o)}function m(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function ie(e=""){if(e===void 0||!e.length)return[];const t=e.split(" ").map(o=>parseInt(o.replace("x","")));return t.filter((o,i)=>t.indexOf(o)===i)}function oe(e){const t={};if(typeof e=="string")for(const o of e.split(/[\s,]+/).filter(i=>i)){const i=o.split(":");i.length!==2?t[i[0].trim()]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function re(e){const t={options:e},o=(r,n={})=>k(t,r,n),i=(r,n={},s={})=>o(r,{...s,modifiers:q(n,s.modifiers||{})}).url;for(const r in e.presets)i[r]=(n,s,c)=>i(n,s,{...e.presets[r],...c});return i.options=e,i.getImage=o,i.getMeta=(r,n)=>ne(t,r,n),i.getSizes=(r,n)=>ce(t,r,n),t.$img=i,i}async function ne(e,t,o){const i=k(e,t,{...o});return typeof i.getMeta=="function"?await i.getMeta():await ee(e,i.url)}function k(e,t,o){var d,u;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:r}=se(e,o.provider||e.options.provider),n=ae(e,o.preset);if(t=$(t)?t:H(t),!i.supportsAlias)for(const h in e.options.alias)t.startsWith(h)&&(t=b(e.options.alias[h],t.substr(h.length)));if(i.validateDomains&&$(t)){const h=L(t).host;if(!e.options.domains.find(w=>w===h))return{url:t}}const s=q(o,n,r);s.modifiers={...s.modifiers};const c=s.modifiers.format;(d=s.modifiers)!=null&&d.width&&(s.modifiers.width=m(s.modifiers.width)),(u=s.modifiers)!=null&&u.height&&(s.modifiers.height=m(s.modifiers.height));const l=i.getImage(t,s,e);return l.format=l.format||c||"",l}function se(e,t){const o=e.options.providers[t];if(!o)throw new Error("Unknown provider: "+t);return o}function ae(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ce(e,t,o){var g,S,x,_,z;const i=m((g=o.modifiers)==null?void 0:g.width),r=m((S=o.modifiers)==null?void 0:S.height),n=oe(o.sizes),s=(x=o.densities)!=null&&x.trim()?ie(o.densities.trim()):e.options.densities;if(s.length===0)throw new Error("'densities' must not be empty, configure to '1' to render regular size only (DPR 1.0)");const c=i&&r?r/i:0,l=[],d=[];if(Object.keys(n).length>1){for(const f in n){const p=A(f,String(n[f]),r,c,e);if(p!==void 0){l.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const y of s)d.push({width:p._cWidth*y,src:R(e,t,o,p,y)})}}le(l)}else for(const f of s){const p=Object.keys(n)[0];let y=A(p,String(n[p]),r,c,e);y===void 0&&(y={size:"",screenMaxWidth:0,_cWidth:(_=o.modifiers)==null?void 0:_.width,_cHeight:(z=o.modifiers)==null?void 0:z.height}),d.push({width:f,src:R(e,t,o,y,f)})}de(d);const u=d[d.length-1],h=l.length?l.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,w=h?"w":"x",a=d.map(f=>`${f.src} ${f.width}${w}`).join(", ");return{sizes:h,srcset:a,src:u==null?void 0:u.src}}function A(e,t,o,i,r){const n=r.options.screens&&r.options.screens[e]||parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let c=parseInt(t);if(!n||!c)return;s&&(c=Math.round(c/100*n));const l=i?Math.round(c*i):o;return{size:t,screenMaxWidth:n,_cWidth:c,_cHeight:l}}function R(e,t,o,i,r){return e.$img(t,{...o.modifiers,width:i._cWidth?i._cWidth*r:void 0,height:i._cHeight?i._cHeight*r:void 0},o)}function le(e){e.sort((o,i)=>o.screenMaxWidth-i.screenMaxWidth),e[e.length-1]&&(e[e.length-1].media="");let t=null;for(let o=e.length-1;o>=0;o--){const i=e[o];i.media===t&&e.splice(o,1),t=i.media}}function de(e){e.sort((o,i)=>o.width-i.width);let t=null;for(let o=e.length-1;o>=0;o--){const i=e[o];i.width===t&&e.splice(o,1),t=i.width}}const B=N({keyMap:{width:"w",height:"h",format:"format",quality:"q",backgroundColor:"bg",rotate:"rot",mask:"mask",auto:"auto",crop:"crop",brightness:"bri",contrast:"con",exposure:"exp",gamma:"gam",highlight:"high",hueShift:"hue",invert:"invert",saturation:"sat",sharpen:"sharp",padding:"pad",paletteColorCount:"colors",colorPaletteExtraction:"palette",cssPrefix:"prefix",jsonFaceData:"faces",fillMode:"fill",fillColor:"fill-color",transparency:"transparency",focalPointDebug:"fp-debug",focalPointXPosition:"fp-x",focalPointYPosition:"fp-y",focalPointZoom:"fp-z",chromaSubsampling:"chromasub",colorQuantization:"colorquant",colorSpace:"colorspace",dotsPerInch:"dpi",pdfPageNumber:"page",pixelDensity:"dpr",aspectRatio:"ar",sourceRectangleRegion:"rect",monochrome:"monochrome"},valueMap:{fit:{fill:"scale",inside:"max",outside:"min",cover:"crop",contain:"fill",clamp:"clamp",clip:"clip",facearea:"facearea",fillMax:"fillmax"},format:{gif:"gif",jpg:"jpg",json:"json",png:"png",avif:"avif",webp:"webp",auto:"auto"}},joinWith:"&",formatter:(e,t)=>`${e}=${t}`}),ue=(e,{modifiers:t={},baseURL:o="/"}={})=>{const i=B(t);return{url:b(o,e+(i?"?"+i:""))}},fe=Object.freeze(Object.defineProperty({__proto__:null,getImage:ue,operationsGenerator:B},Symbol.toStringTag,{value:"Module"})),ge=N({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>j(e)+"_"+j(t)}),me=(e,{modifiers:t={},baseURL:o}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const r=ge(t)||"_";return o||(o=b(i.options.nuxt.baseURL,"/_ipx")),{url:b(o,r,G(e))}},he=!0,pe=!0,ve=Object.freeze(Object.defineProperty({__proto__:null,getImage:me,supportsAlias:pe,validateDomains:he},Symbol.toStringTag,{value:"Module"})),C={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{},densities:[1,2],format:["webp"]};C.providers={gumlet:{provider:fe,defaults:{baseURL:"https://erasmus-evidence.gumlet.io"}},ipx:{provider:ve,defaults:void 0}};const D=()=>{const e=U(),t=E();return t.$img||t._img||(t._img=re({...C,nuxt:{baseURL:e.app.baseURL}}))},ye={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},we=e=>{const t=v(()=>({provider:e.provider,preset:e.preset})),o=v(()=>({width:m(e.width),height:m(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),i=D(),r=v(()=>({...e.modifiers,width:m(e.width),height:m(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:o,modifiers:r}},be={...ye,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},Se=T({name:"NuxtImg",props:be,emits:["load","error"],setup:(e,t)=>{const o=D(),i=we(e),r=I(!1),n=v(()=>o.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:m(e.width),height:m(e.height)}})),s=v(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||r.value)&&(a.sizes=n.value.sizes,a.srcset=n.value.srcset),a}),c=v(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||r.value)return!1;if(typeof a=="string")return a;const g=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return o(e.src,{...i.modifiers.value,width:g[0],height:g[1],quality:g[2]||50},i.options.value)}),l=v(()=>e.sizes?n.value.src:o(e.src,i.modifiers.value,i.options.value)),d=v(()=>c.value?c.value:l.value);if(e.preload){const a=Object.values(n.value).every(g=>g);V({link:[{rel:"preload",as:"image",...a?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:d.value}}]})}const u=I(),w=E().isHydrating;return F(()=>{if(c.value){const a=new Image;a.src=l.value,e.sizes&&(a.sizes=n.value.sizes||"",a.srcset=n.value.srcset),a.onload=g=>{r.value=!0,t.emit("load",g)};return}u.value&&(u.value.complete&&w&&(u.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),u.value.onload=a=>{t.emit("load",a)},u.value.onerror=a=>{t.emit("error",a)})}),()=>Q("img",{ref:u,src:d.value,...s.value,...t.attrs})}}),xe={class:"block text-sm text-center italic mt-4 w-full"},_e={key:0,class:"block text-xs w-full text-center text-slate-400 break-words"},$e={__name:"ContentImage",props:{src:{type:String,default:""},zoom:{type:Boolean,default:!0},credits:{type:String,default:"."},elevated:{type:Boolean,default:!1}},setup(e){return(t,o)=>{const i=Se;return P(),M("figure",{class:W(["not-prose m-0",e.elevated?"border-slate-300 border bg-white shadow-md rounded-lg p-4 ":""])},[J(i,{src:e.src,fit:"contain",loading:"lazy",class:W(["block w-full",e.zoom?"img-zoom":""])},null,8,["src","class"]),X("figcaption",xe,[Y(t.$slots,"caption")]),e.credits!="."?(P(),M("p",_e,Z(e.credits),1)):K("",!0)],2)}}};export{$e as _};
