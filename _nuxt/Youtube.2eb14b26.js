import{f as t,o as l,c,a,g as r}from"./entry.071d8a8f.js";const s={class:"relative h-0 overflow-hidden pb-[56.25%]"},i=["src"],d={__name:"Youtube",props:{video:{type:String},lang:{type:String,default:"en"}},setup(e){const{locale:o}=t({useScope:"global"});return(n,p)=>(l(),c("div",s,[a("iframe",{class:"absolute left-0 top-0 h-full w-full",width:"560",height:"315",src:`https://www.youtube-nocookie.com/embed/${e.video}?cc_lang_pref=${r(o)}&cc_load_policy=1`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,i)]))}};export{d as _};