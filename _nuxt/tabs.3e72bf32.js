import{K as te,L as k,F as q,D as I,G as D,M as _,E as T,q as g,N as C,H as ne,O as K,P as U}from"./entry.6cca6deb.js";function N(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,N),a}var R=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(R||{}),re=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(re||{});function $({visible:e=!0,features:t=0,ourProps:n,theirProps:a,...r}){var s;let o=z(a,n),c=Object.assign(r,{props:o});if(e||t&2&&o.static)return H(c);if(t&1){let v=(s=o.unmount)==null||s?0:1;return N(v,{[0](){return null},[1](){return H({...r,props:{...o,hidden:!0,style:{display:"none"}}})}})}return H(c)}function H({props:e,attrs:t,slots:n,slot:a,name:r}){var s,o;let{as:c,...v}=X(e,["unmount","static"]),p=(s=n.default)==null?void 0:s.call(n,a),b={};if(a){let d=!1,y=[];for(let[h,f]of Object.entries(a))typeof f=="boolean"&&(d=!0),f===!0&&y.push(h);d&&(b["data-headlessui-state"]=y.join(" "))}if(c==="template"){if(p=V(p??[]),Object.keys(v).length>0||Object.keys(t).length>0){let[d,...y]=p??[];if(!le(d)||y.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(v).concat(Object.keys(t)).map(u=>u.trim()).filter((u,l,i)=>i.indexOf(u)===l).sort((u,l)=>u.localeCompare(l)).map(u=>`  - ${u}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(u=>`  - ${u}`).join(`
`)].join(`
`));let h=z((o=d.props)!=null?o:{},v),f=te(d,h);for(let u in h)u.startsWith("on")&&(f.props||(f.props={}),f.props[u]=h[u]);return f}return Array.isArray(p)&&p.length===1?p[0]:p}return k(c,Object.assign({},v,b),{default:()=>p})}function V(e){return e.flatMap(t=>t.type===q?V(t.children):[t])}function z(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let a of e)for(let r in a)r.startsWith("on")&&typeof a[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(a[r])):t[r]=a[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(a=>[a,void 0])));for(let a in n)Object.assign(t,{[a](r,...s){let o=n[a];for(let c of o){if(r instanceof Event&&r.defaultPrevented)return;c(r,...s)}}});return t}function X(e,t=[]){let n=Object.assign({},e);for(let a of t)a in n&&delete n[a];return n}function le(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let ae=0;function ue(){return++ae}function Y(){return ue()}var w=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(w||{});function m(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}function G(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function se(e,t){let n=I(G(e.value.type,e.value.as));return D(()=>{n.value=G(e.value.type,e.value.as)}),_(()=>{var a;n.value||m(t)&&m(t)instanceof HTMLButtonElement&&!((a=m(t))!=null&&a.hasAttribute("type"))&&(n.value="button")}),n}var oe=Object.defineProperty,ie=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t,n)=>(ie(e,typeof t!="symbol"?t+"":t,n),n);class de{constructor(){W(this,"current",this.detect()),W(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let ce=new de;function pe(e){if(ce.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=m(e);if(t)return t.ownerDocument}return document}let fe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var P=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(P||{}),j=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(j||{}),ve=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ve||{});function be(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(fe)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var me=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(me||{}),he=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(he||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let ye=["textarea","input"].join(",");function ge(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ye))!=null?n:!1}function F(e,t=n=>n){return e.slice().sort((n,a)=>{let r=t(n),s=t(a);if(r===null||s===null)return 0;let o=r.compareDocumentPosition(s);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function A(e,t,{sorted:n=!0,relativeTo:a=null,skipElements:r=[]}={}){var s;let o=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?s:document,c=Array.isArray(e)?n?F(e):e:be(e);r.length>0&&c.length>1&&(c=c.filter(f=>!r.includes(f))),a=a??o.activeElement;let v=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,c.indexOf(a))-1;if(t&4)return Math.max(0,c.indexOf(a))+1;if(t&8)return c.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),b=t&32?{preventScroll:!0}:{},d=0,y=c.length,h;do{if(d>=y||d+y<=0)return 0;let f=p+d;if(t&16)f=(f+y)%y;else{if(f<0)return 3;if(f>=y)return 1}h=c[f],h==null||h.focus(b),d+=v}while(h!==o.activeElement);return t&6&&ge(h)&&h.select(),2}var J=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(J||{});let Q=T({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:a,...r}=e,s={"aria-hidden":(a&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(a&4)===4&&(a&2)!==2&&{display:"none"}}};return $({ourProps:s,theirProps:r,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function xe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let we=T({props:{onFocus:{type:Function,required:!0}},setup(e){let t=I(!0);return()=>t.value?k(Q,{as:"button",type:"button",features:J.Focusable,onFocus(n){n.preventDefault();let a,r=50;function s(){var o;if(r--<=0){a&&cancelAnimationFrame(a);return}if((o=e.onFocus)!=null&&o.call(e)){t.value=!1,cancelAnimationFrame(a);return}a=requestAnimationFrame(s)}a=requestAnimationFrame(s)}}):null}});var Pe=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Pe||{}),Se=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Se||{});let Z=Symbol("TabsContext");function L(e){let t=U(Z,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,L),n}return t}let B=Symbol("TabsSSRContext"),Ee=T({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:n,emit:a}){var r;let s=I((r=e.selectedIndex)!=null?r:e.defaultIndex),o=I([]),c=I([]),v=g(()=>e.selectedIndex!==null),p=g(()=>v.value?e.selectedIndex:s.value);function b(u){var l;let i=F(d.tabs.value,m),x=F(d.panels.value,m),E=i.filter(S=>{var O;return!((O=m(S))!=null&&O.hasAttribute("disabled"))});if(u<0||u>i.length-1){let S=N(s.value===null?0:Math.sign(u-s.value),{[-1]:()=>1,[0]:()=>N(Math.sign(u),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});s.value=N(S,{[0]:()=>i.indexOf(E[0]),[1]:()=>i.indexOf(E[E.length-1])}),d.tabs.value=i,d.panels.value=x}else{let S=i.slice(0,u),O=[...i.slice(u),...S].find(ee=>E.includes(ee));if(!O)return;let M=(l=i.indexOf(O))!=null?l:d.selectedIndex.value;M===-1&&(M=d.selectedIndex.value),s.value=M,d.tabs.value=i,d.panels.value=x}}let d={selectedIndex:g(()=>{var u,l;return(l=(u=s.value)!=null?u:e.defaultIndex)!=null?l:null}),orientation:g(()=>e.vertical?"vertical":"horizontal"),activation:g(()=>e.manual?"manual":"auto"),tabs:o,panels:c,setSelectedIndex(u){p.value!==u&&a("change",u),v.value||b(u)},registerTab(u){var l;if(o.value.includes(u))return;let i=o.value[s.value];o.value.push(u),o.value=F(o.value,m);let x=(l=o.value.indexOf(i))!=null?l:s.value;x!==-1&&(s.value=x)},unregisterTab(u){let l=o.value.indexOf(u);l!==-1&&o.value.splice(l,1)},registerPanel(u){c.value.includes(u)||(c.value.push(u),c.value=F(c.value,m))},unregisterPanel(u){let l=c.value.indexOf(u);l!==-1&&c.value.splice(l,1)}};C(Z,d);let y=I({tabs:[],panels:[]}),h=I(!1);D(()=>{h.value=!0}),C(B,g(()=>h.value?null:y.value));let f=g(()=>e.selectedIndex);return D(()=>{ne([f],()=>{var u;return b((u=e.selectedIndex)!=null?u:e.defaultIndex)},{immediate:!0})}),_(()=>{if(!v.value||p.value==null||d.tabs.value.length<=0)return;let u=F(d.tabs.value,m);u.some((l,i)=>m(d.tabs.value[i])!==m(l))&&d.setSelectedIndex(u.findIndex(l=>m(l)===m(d.tabs.value[p.value])))}),()=>{let u={selectedIndex:s.value};return k(q,[o.value.length<=0&&k(we,{onFocus:()=>{for(let l of o.value){let i=m(l);if((i==null?void 0:i.tabIndex)===0)return i.focus(),!0}return!1}}),$({theirProps:{...n,...X(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:u,slots:t,attrs:n,name:"TabGroup"})])}}}),Oe=T({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let a=L("TabList");return()=>{let r={selectedIndex:a.selectedIndex.value},s={role:"tablist","aria-orientation":a.orientation.value};return $({ourProps:s,theirProps:e,slot:r,attrs:t,slots:n,name:"TabList"})}}}),Te=T({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${Y()}`}},setup(e,{attrs:t,slots:n,expose:a}){let r=L("Tab"),s=I(null);a({el:s,$el:s}),D(()=>r.registerTab(s)),K(()=>r.unregisterTab(s));let o=U(B),c=g(()=>{if(o.value){let l=o.value.tabs.indexOf(e.id);return l===-1?o.value.tabs.push(e.id)-1:l}return-1}),v=g(()=>{let l=r.tabs.value.indexOf(s);return l===-1?c.value:l}),p=g(()=>v.value===r.selectedIndex.value);function b(l){var i;let x=l();if(x===j.Success&&r.activation.value==="auto"){let E=(i=pe(s))==null?void 0:i.activeElement,S=r.tabs.value.findIndex(O=>m(O)===E);S!==-1&&r.setSelectedIndex(S)}return x}function d(l){let i=r.tabs.value.map(x=>m(x)).filter(Boolean);if(l.key===w.Space||l.key===w.Enter){l.preventDefault(),l.stopPropagation(),r.setSelectedIndex(v.value);return}switch(l.key){case w.Home:case w.PageUp:return l.preventDefault(),l.stopPropagation(),b(()=>A(i,P.First));case w.End:case w.PageDown:return l.preventDefault(),l.stopPropagation(),b(()=>A(i,P.Last))}if(b(()=>N(r.orientation.value,{vertical(){return l.key===w.ArrowUp?A(i,P.Previous|P.WrapAround):l.key===w.ArrowDown?A(i,P.Next|P.WrapAround):j.Error},horizontal(){return l.key===w.ArrowLeft?A(i,P.Previous|P.WrapAround):l.key===w.ArrowRight?A(i,P.Next|P.WrapAround):j.Error}}))===j.Success)return l.preventDefault()}let y=I(!1);function h(){var l;y.value||(y.value=!0,!e.disabled&&((l=m(s))==null||l.focus(),r.setSelectedIndex(v.value),xe(()=>{y.value=!1})))}function f(l){l.preventDefault()}let u=se(g(()=>({as:e.as,type:t.type})),s);return()=>{var l;let i={selected:p.value},{id:x,...E}=e,S={ref:s,onKeydown:d,onMousedown:f,onClick:h,id:x,role:"tab",type:u.value,"aria-controls":(l=m(r.panels.value[v.value]))==null?void 0:l.id,"aria-selected":p.value,tabIndex:p.value?0:-1,disabled:e.disabled?!0:void 0};return $({ourProps:S,theirProps:E,slot:i,attrs:t,slots:n,name:"Tab"})}}}),Ae=T({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let a=L("TabPanels");return()=>{let r={selectedIndex:a.selectedIndex.value};return $({theirProps:e,ourProps:{},slot:r,attrs:n,slots:t,name:"TabPanels"})}}}),Fe=T({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${Y()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:t,slots:n,expose:a}){let r=L("TabPanel"),s=I(null);a({el:s,$el:s}),D(()=>r.registerPanel(s)),K(()=>r.unregisterPanel(s));let o=U(B),c=g(()=>{if(o.value){let b=o.value.panels.indexOf(e.id);return b===-1?o.value.panels.push(e.id)-1:b}return-1}),v=g(()=>{let b=r.panels.value.indexOf(s);return b===-1?c.value:b}),p=g(()=>v.value===r.selectedIndex.value);return()=>{var b;let d={selected:p.value},{id:y,tabIndex:h,...f}=e,u={ref:s,id:y,role:"tabpanel","aria-labelledby":(b=m(r.tabs.value[v.value]))==null?void 0:b.id,tabIndex:p.value?h:-1};return!p.value&&e.unmount&&!e.static?k(Q,{as:"span",...u}):$({ourProps:u,theirProps:f,slot:d,attrs:t,slots:n,features:R.Static|R.RenderStrategy,visible:p.value,name:"TabPanel"})}}});export{Oe as I,Ae as S,Fe as g,Ee as x,Te as y};
