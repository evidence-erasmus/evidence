import{_ as v}from"./logo-evidence.2720d740.js";import{_ as f}from"./nuxt-link.7b1d7d6b.js";import{_ as w}from"./NavMain.b1e58348.js";import{u as h}from"./composables.0d06004f.js";import{j as k,z as y,e as L,o as u,f as p,k as a,l as s,w as i,t as _,u as e,m as l,P as N,R as $,i as M,M as P}from"./entry.03850fa9.js";import{_ as S}from"./LangSwitcher.7e48c5a3.js";const z={class:"bg-stone-50 shadow-md"},U={class:"h-10 container px-4 flex justify-start items-center gap-8"},j={class:"uppercase text-sm leading-none"},B={class:"uppercase text-sm leading-none"},E={class:"uppercase text-sm leading-none"},H={__name:"NavModule",setup(d){const{t:o}=k({useScope:"global"}),t=h(),n=y(),r=L(()=>n.path.includes("background")?"background":n.path.includes("student")?"student":"teacher");return(b,m)=>{const c=f;return u(),p("section",z,[a("nav",U,[s(c,{to:"/viruses",class:l(["flex items-center gap-2 uppercase font-bold transition-all",e(r)=="teacher"?"border-b-4 border-b-slate-700 py-3":""])},{default:i(()=>[a("span",j,_(e(o)("modules.for-teachers")),1)]),_:1},8,["class"]),s(c,{to:e(t)("/viruses/student"),class:l(["flex items-center gap-2 font-bold transition-all",e(r)=="student"?"border-b-4 border-b-slate-700 py-3":""])},{default:i(()=>[a("span",B,_(e(o)("modules.for-students")),1)]),_:1},8,["to","class"]),s(c,{to:e(t)("/viruses/background"),class:l(["flex items-center gap-2 font-bold transition-all",e(r)=="background"?"border-b-4 border-b-slate-700 py-3":""])},{default:i(()=>[a("span",E,_(e(o)("modules.background-info")),1)]),_:1},8,["to","class"])])])}}},C={class:"shadow fixed w-full top-0",style:{"z-index":"5000"}},R={__name:"Header",setup(d){const o=h(),t=N(!1),n=()=>{window.scrollY<50?t.value=!1:t.value=!0};return $(()=>{window.addEventListener("scroll",n)}),(r,b)=>{const m=v,c=f,x=w,g=H;return u(),p("header",C,[a("div",{class:l(["flex items-center justify-between px-4 bg-yellow-400 shadow z-10 transition-all md:px-10 print:bg-white",e(t)?"py-2":"py-4"])},[s(c,{to:e(o)("/")},{default:i(()=>[s(m,{class:l(["fill-slate-800 transition-all",e(t)?"h-6":"h-10"])},null,8,["class"])]),_:1},8,["to"]),s(x,{class:"print:hidden"})],2),s(g,{class:"md:pl-[3vw] lg:pl-[7vw] print:hidden"})])}}},V={},D={class:"mt-28 md:pl-[3vw] lg:pl-[7vw]"};function I(d,o){const t=R,n=S;return u(),p("div",null,[s(t),a("div",D,[P(d.$slots,"default")]),s(n,{class:"fixed right-0 bottom-10 print:invisible"})])}const K=M(V,[["render",I]]);export{K as default};
