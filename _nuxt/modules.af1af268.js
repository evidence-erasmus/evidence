import _ from"./Icon.9f34b9cc.js";import{_ as h}from"./nuxt-link.f9f7addf.js";import{f as r,o as d,i as f,w as g,a as s,b as l,t as n,g as e,c as x}from"./entry.6cca6deb.js";import{u as y}from"./composables.16b1f0c6.js";import"./config.ef2e52b4.js";const b={class:"h-full flex items-center flex-col justify-center shadow-md rounded-md px-2 py-6 w-full border border-slate-100 transition-all hover:bg-yellow-50"},w={class:"text-3xl font-bold no-underline leading-6 mt-4 mb-3"},v={class:"text-sm leading-tight my-0"},S={__name:"CardModule",props:{title:{type:String,default:"Module Name Here"},description:{type:String,default:"This is a description for this Module. A sentence or so."},icon:{type:String,default:"material-symbols:coronavirus-outline-sharp"},path:{type:String,default:""}},setup(a){const i=a,{locale:t}=r({useScope:"global"}),c=y();return(u,o)=>{const m=_,p=h;return d(),f(p,{to:e(c)(i.path,e(t)),class:"no-underline flex items-center text-center text-slate-500"},{default:g(()=>[s("div",b,[l(m,{name:i.icon,size:"48",class:"text-blue-500"},null,8,["name"]),s("h3",w,n(i.title),1),s("p",v,n(i.description),1)])]),_:1},8,["to"])}}},k={class:"grid md:grid-cols-3 gap-3"},I={__name:"modules",setup(a){const{locale:i,t}=r({useScope:"global"});return(c,u)=>{const o=S;return d(),x("div",null,[s("h1",null,n(e(t)("modules.title")),1),s("section",k,[l(o,{path:"viruses",title:e(t)("modules.viruses.title"),description:e(t)("modules.viruses.description"),icon:"material-symbols:coronavirus-outline-sharp",class:"w-full"},null,8,["title","description"]),l(o,{path:"climate-change",title:e(t)("modules.climateChange.title"),description:e(t)("modules.climateChange.description"),icon:"material-symbols:mode-cool-off",class:"w-full"},null,8,["title","description"]),l(o,{path:"radiation",title:e(t)("modules.radiation.title"),description:e(t)("modules.radiation.description"),icon:"icon-park-outline:radiation",class:"w-full"},null,8,["title","description"]),l(o,{path:"radiation",title:e(t)("modules.evolution.title"),description:e(t)("modules.evolution.description"),icon:"mdi:dna",class:"w-full md:mt-4"},null,8,["title","description"]),l(o,{path:"drugs",title:e(t)("modules.drugs.title"),description:e(t)("modules.drugs.description"),icon:"material-symbols:syringe-outline",class:"w-full md:mt-4"},null,8,["title","description"]),l(o,{path:"radiation",title:e(t)("modules.space.title"),description:e(t)("modules.space.description"),icon:"material-symbols:rocket-launch-outline",class:"w-full md:mt-4"},null,8,["title","description"])])])}}};export{I as default};
