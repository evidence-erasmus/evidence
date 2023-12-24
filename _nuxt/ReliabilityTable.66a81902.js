import{o as t,c as n,a as b,D as f,f as U,q as $,F as y,k as g,t as m,g as r,b as x,w as v,i as R,j as w,l as S,d as B,B as C}from"./entry.338f2bb4.js";import{_ as V}from"./client-only.19c8bb80.js";import N from"./Icon.bc05775f.js";const q={class:"rating"},D=["name","disabled"],z=["name","checked","disabled"],F=["name","checked","disabled"],I=["name","checked","disabled"],E={__name:"ReliabilityRating",props:{idx:{},storeToUpdate:{},rating:{},printMode:{type:Boolean,default:!1}},setup(e){const l=e,s=i=>{if(l.printMode===!1)l.storeToUpdate.changeReliabilityValue(l.idx,2,i);else return};return(i,a)=>(t(),n("div",q,[b("input",{type:"radio",name:`rating-${e.idx}`,class:f(["mask mask-cross bg-red-400",e.printMode?"cursor-default":"cursor-pointer"]),checked:"",disabled:e.printMode===!0,onClick:a[0]||(a[0]=c=>s(0)),style:{transform:"scale(0.8) translateY(0.1rem)"}},null,10,D),b("input",{type:"radio",name:`rating-${e.idx}`,class:f(["mask mask-star-2 bg-blue-500",e.printMode?"cursor-default":"cursor-pointer"]),checked:e.rating.toString()=="1",disabled:e.printMode===!0,onClick:a[1]||(a[1]=c=>s(1))},null,10,z),b("input",{type:"radio",name:`rating-${e.idx}`,class:f(["mask mask-star-2 bg-blue-500",e.printMode?"cursor-default":"cursor-pointer"]),checked:e.rating.toString()=="2",disabled:e.printMode===!0,onClick:a[2]||(a[2]=c=>s(2))},null,10,F),b("input",{type:"radio",name:`rating-${e.idx}`,class:f(["mask mask-star-2 bg-blue-500",e.printMode?"cursor-default":"cursor-pointer"]),checked:e.rating.toString()=="3",disabled:e.printMode===!0,onClick:a[3]||(a[3]=c=>s(3))},null,10,I)]))}},H={class:"w-full"},L={class:"grid grid-cols-[1fr_1fr_110px_1fr]"},O={class:"font-bold leading-tight text-sm border border-slate-300 px-2 py-1"},Y={class:"grid grid-cols-[1fr_1fr_110px_1fr]"},A={class:"border border-slate-300"},G={key:0,class:"px-2 py-1 text-sm"},J=["href"],K={key:1},P={key:1,class:"flex justify-center items-center h-full"},Q=["onUpdate:modelValue"],W={key:1,class:"leading-tight px-2 py-2"},te={__name:"ReliabilityTable",props:{currentSources:{default:{}},storeToUpdate:{},printMode:{type:Boolean,default:!1},addRow:{type:Boolean,default:!1}},setup(e){const l=e,{t:s,tm:i,rt:a}=U({useScope:"global"}),c=$(()=>!(!l.addRow||l.printMode));return(X,k)=>{const h=E,p=V,T=N;return t(),n("section",H,[b("div",L,[(t(!0),n(y,null,g(r(i)("inquiry.reliability_table.cols"),u=>(t(),n("div",O,m(r(a)(u)),1))),256))]),(t(!0),n(y,null,g(e.storeToUpdate.reliability,(u,o)=>(t(),n("div",Y,[(t(!0),n(y,null,g(u,(Z,d)=>(t(),n("div",A,[d===1&&o<r(i)(e.currentSources).length?(t(),n("div",G,[r(i)(e.currentSources)[o].url?(t(),n("a",{key:0,href:r(a)(r(i)(e.currentSources)[o].url),target:"_blank",rel:"noopener noreferrer"},m(r(a)(r(i)(e.currentSources)[o].name)),9,J)):(t(),n("span",K,m(r(a)(r(i)(e.currentSources)[o].name)),1))])):d===2?(t(),n("div",P,[x(p,null,{default:v(()=>[(t(),R(h,{storeToUpdate:e.storeToUpdate,idx:o,rating:e.storeToUpdate.reliability[o][2],printMode:e.printMode,key:e.storeToUpdate.$id+o+d},null,8,["storeToUpdate","idx","rating","printMode"]))]),_:2},1024)])):(t(),n(y,{key:2},[e.printMode===!1?w((t(),n("textarea",{key:0,"onUpdate:modelValue":M=>e.storeToUpdate.reliability[o][d]=M,rows:"1",class:"textarea block w-full h-full py-1 px-2 leading-tight"},null,8,Q)),[[S,e.storeToUpdate.reliability[o][d]]]):(t(),n("div",W,m(e.storeToUpdate.reliability[o][d]),1))],64))]))),256))]))),256)),r(c)?(t(),n("button",{key:0,onClick:k[0]||(k[0]=(...u)=>e.storeToUpdate.addReliabilityRow&&e.storeToUpdate.addReliabilityRow(...u)),class:"btn btn-sm btn-neutral mt-3"},[x(T,{name:"mdi:plus-circle",style:{"font-size":"140%"}}),B(" "+m(r(s)("inquiry.reliability_table.add_row")),1)])):C("",!0)])}}};export{te as _};