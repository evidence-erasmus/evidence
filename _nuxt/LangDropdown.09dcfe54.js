import{_}from"./nuxt-link.10184079.js";import{f as p,o,c as a,a as n,t as r,g as t,F as u,k as b,b as m,w,d as x,C as h}from"./entry.bd70b6bb.js";import{a as f}from"./composables.011c660f.js";const g={class:"dropdown dropdown-end"},k={tabindex:"0",class:"bg-slate-900 text-white flex w-10 h-7 justify-center items-center font-bold tracking-wide uppercase cursor-pointer"},y={tabindex:"0",class:"dropdown-content z-[1] bg-slate-900 w-10 border-t border-t-slate-400"},z={__name:"LangDropdown",setup(L){const{locale:s,locales:c}=p(),l=c.value,d=f();return(v,C)=>{const i=_;return o(),a("nav",g,[n("label",k,r(t(s)),1),n("ul",y,[(o(!0),a(u,null,b(t(l),e=>(o(),a("li",{key:e.code,class:"text-slate-100 text-center py-2"},[m(i,{to:t(d)(e.code),class:h(["p-2 leading-none text-center transition hover:bg-slate-600",t(s)==e.code?"bg-yellow-400 text-slate-900 font-bold hover:bg-yellow-300":""])},{default:w(()=>[x(r(e.code.toUpperCase()),1)]),_:2},1032,["to","class"])]))),128))])])}}};export{z as _};