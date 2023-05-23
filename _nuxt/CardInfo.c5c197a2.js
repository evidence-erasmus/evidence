import{M as w,e as s,N as n,a as z,O as b,P as k,Q as x,R as N,o as f,f as g,l as S,k as v,T as _,t as B,z as I,J as y}from"./entry.1a305ff4.js";import $ from"./Icon.87abc968.js";const q=()=>w().$img,C={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},A=e=>{const i=s(()=>({provider:e.provider,preset:e.preset})),o=s(()=>({width:n(e.width),height:n(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),a=s(()=>({...e.modifiers,width:n(e.width),height:n(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:i,attrs:o,modifiers:a}},O={...C,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},j=z({name:"NuxtImg",props:O,emits:["load"],setup:(e,i)=>{const o=q(),a=A(e),h=b(!1),r=s(()=>o.getSizes(e.src,{...a.options.value,sizes:e.sizes,modifiers:{...a.modifiers.value,width:n(e.width),height:n(e.height)}})),p=s(()=>{const t={...a.attrs.value,"data-nuxt-img":""};return e.sizes&&(t.sizes=r.value.sizes,t.srcset=r.value.srcset),t}),d=s(()=>{let t=e.placeholder;if(t===""&&(t=!0),!t||h.value)return!1;if(typeof t=="string")return t;const l=Array.isArray(t)?t:typeof t=="number"?[t,t]:[10,10];return o(e.src,{...a.modifiers.value,width:l[0],height:l[1],quality:l[2]||50},a.options.value)}),u=s(()=>e.sizes?r.value.src:o(e.src,a.modifiers.value,a.options.value)),c=s(()=>d.value?d.value:u.value);if(e.preload){const t=Object.values(r.value).every(l=>l);k({link:[{rel:"preload",as:"image",...t?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:c.value}}]})}const m=b();return x(()=>{if(d.value){const t=new Image;t.src=u.value,t.onload=l=>{m.value.src=u.value,h.value=!0,i.emit("load",l)}}else m.value.onload=t=>{i.emit("load",t)}}),()=>N("img",{ref:m,key:c.value,src:c.value,...p.value,...i.attrs})}}),P={class:"block text-sm text-center italic mt-4 w-full"},V={key:0,class:"block text-xs w-full text-center text-slate-400 break-words"},R={__name:"ContentImage",props:{src:{type:String,default:""},credits:{type:String,default:"."},elevated:{type:Boolean,default:!1}},setup(e){return(i,o)=>{const a=j;return f(),g("figure",{class:y(["not-prose m-0",e.elevated?"border-slate-300 border bg-white shadow-md rounded-lg p-4 ":""])},[S(a,{src:e.src,fit:"contain",loading:"lazy",class:"block"},null,8,["src"]),v("figcaption",P,[_(i.$slots,"caption")]),e.credits!="."?(f(),g("p",V,B(e.credits),1)):I("",!0)],2)}}},E={class:"font-Heading"},D={__name:"CardInfo",props:{theme:{type:String,default:""},icon:{type:String,default:"material-symbols:info"}},setup(e){return(i,o)=>{const a=$;return f(),g("div",{class:y(["shadow-md rounded-lg border bg-white px-8 py-4 border-l-8",e.theme=="blue"?"border-sky-500":"border-yellow-400"])},[v("div",null,[S(a,{name:e.icon,size:"64",class:y(["float-left mr-4",e.theme=="blue"?"text-sky-500":"text-yellow-400"])},null,8,["name","class"]),v("div",E,[_(i.$slots,"default")])])],2)}}};export{R as _,D as a};