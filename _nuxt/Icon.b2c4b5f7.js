import{a as k,T as A,Z as N,y as B,e as o,$ as C,a0 as b,u as e,o as r,f as z,H as h,c as I,a1 as D,a2 as H,t as $,h as q,a3 as E,i as F}from"./entry.57380966.js";import{u as T}from"./config.2d38fdf4.js";const Z=["width","height"],j=k({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(f){var x;let c,v;const i=f,S=A(),s=T();(x=s==null?void 0:s.nuxtIcon)!=null&&x.aliases;const m=N("icons",()=>({})),p=B(!1),a=o(()=>{var t;return(((t=s.nuxtIcon)==null?void 0:t.aliases)||{})[i.name]||i.name}),_=o(()=>{var t;return(t=m.value)==null?void 0:t[a.value]}),l=o(()=>S.vueApp.component(a.value)),n=o(()=>{var d,g,w;if(!i.size&&typeof((d=s.nuxtIcon)==null?void 0:d.size)=="boolean"&&!((g=s.nuxtIcon)!=null&&g.size))return;const t=i.size||((w=s.nuxtIcon)==null?void 0:w.size)||"1em";return String(Number(t))===t?`${t}px`:t}),u=o(()=>{var t;return((t=s==null?void 0:s.nuxtIcon)==null?void 0:t.class)??"icon"});async function y(){var t;l.value||(t=m.value)!=null&&t[a.value]||(p.value=!0,m.value[a.value]=await E(a.value).catch(()=>{}),p.value=!1)}return C(()=>a.value,y),!l.value&&([c,v]=b(()=>y()),c=await c,v()),(t,d)=>e(p)?(r(),z("span",{key:0,class:h(e(u)),width:e(n),height:e(n)},null,10,Z)):e(_)?(r(),I(e(D),{key:1,icon:e(_),class:h(e(u)),width:e(n),height:e(n)},null,8,["icon","class","width","height"])):e(l)?(r(),I(H(e(l)),{key:2,class:h(e(u)),width:e(n),height:e(n)},null,8,["class","width","height"])):(r(),z("span",{key:3,class:h(e(u)),style:q({fontSize:e(n),lineHeight:e(n),width:e(n),height:e(n)})},$(f.name),7))}}),K=F(j,[["__scopeId","data-v-cf1ec82f"]]);export{K as default};
