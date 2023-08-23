import _ from"./Icon.20528ca4.js";import{_ as h}from"./nuxt-link.2846c70b.js";import{f as r,o as d,i as f,w as g,a as s,b as n,t as l,g as e,c as x}from"./entry.071d8a8f.js";import{u as b}from"./composables.2636269d.js";import"./config.d99b9349.js";const y={class:"shadow-md rounded-md p-4"},v={class:"text-2xl font-bold no-underline leading-6 mt-4"},S={class:"text-sm leading-tight"},C={__name:"CardModule",props:{title:{type:String,default:"Module Name Here"},description:{type:String,default:"This is a description for this Module. A sentence or so."},icon:{type:String,default:""},path:{type:String,default:"material-symbols:coronavirus-outline-sharp"}},setup(a){const o=a,{locale:t}=r({useScope:"global"}),c=b();return(u,i)=>{const m=_,p=h;return d(),f(p,{to:e(c)(o.path,e(t)),class:"no-underline flex flex-col items-center text-center text-slate-500"},{default:g(()=>[s("div",y,[n(m,{name:o.icon,size:"64",class:"text-blue-500"},null,8,["name"]),s("h3",v,l(o.title),1),s("p",S,l(o.description),1)])]),_:1},8,["to"])}}},k={class:"grid md:grid-cols-3 gap-4"},I={__name:"modules",setup(a){const{locale:o,t}=r({useScope:"global"});return(c,u)=>{const i=C;return d(),x("div",null,[s("h1",null,l(e(t)("modules.title")),1),s("section",k,[n(i,{path:"viruses",title:e(t)("modules.viruses.title"),description:e(t)("modules.viruses.description"),icon:"material-symbols:coronavirus-outline-sharp"},null,8,["title","description"]),n(i,{path:"climate-change",title:e(t)("modules.climateChange.title"),description:e(t)("modules.climateChange.description"),icon:"material-symbols:mode-cool-off-rounded"},null,8,["title","description"]),n(i,{path:"radiation",title:e(t)("modules.radiation.title"),description:e(t)("modules.radiation.description"),icon:"material-symbols:mode-cool-off-rounded"},null,8,["title","description"])])])}}};export{I as default};