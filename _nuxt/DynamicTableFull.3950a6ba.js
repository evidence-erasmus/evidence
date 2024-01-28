import D from"./Icon.1de33355.js";import{f as M,n as b,o as t,c as a,t as r,A as i,a as g,F as y,k as w,g as u,$ as k,j as p,l as T,b as x,d as N}from"./entry.bd70b6bb.js";const z={class:"w-full"},C={key:0,style:{"font-size":"120%"},class:"mt-2 mb-0 leading-tight"},P={key:1,class:"italic mt-0 mb-2 leading-tight"},A={class:"text-sm leading-none px-2 py-4 border border-slate-300"},F={class:"font-bold m-0 p-0"},E={key:0,class:"italic m-0 p-0"},I={class:"text-sm leading-none"},q={key:0,class:"text-sm m-2 leading-none"},L=["onUpdate:modelValue"],G=["onUpdate:modelValue"],H=["onClick"],Q={__name:"DynamicTableFull",props:{storeToUpdate:{},keyToUpdate:{},tableStructure:{},cellType:{type:String,default:"textarea"},newRow:{type:Array,default:[""]},printMode:{type:Boolean,default:!1},addRow:{type:Boolean,default:!1},deleteRow:{type:Boolean,default:!1},addRowTitle:{type:String},overwrite:{type:Boolean,default:!1},overwritePos:{type:Number,default:0},title:{type:String},subtitle:{type:String}},setup(e){const o=e,{t:U,tm:J,rt:m}=M({useScope:"global"}),v=b(()=>!(!o.addRow||o.printMode)),R=b(()=>!(!o.deleteRow||o.printMode)),S=()=>{const s=new Array(...o.newRow);o.storeToUpdate.addDynamicRow(o.keyToUpdate,s)},$=s=>{o.storeToUpdate.deleteDynamicRow(o.keyToUpdate,s)},B=()=>{o.tableStructure.rows.forEach((s,h)=>{const c=m(s[o.overwritePos]);o.storeToUpdate.changeDynamicRow(o.keyToUpdate,h,o.overwritePos,c)})};return o.overwrite===!0&&B(),(s,h)=>{const c=D;return t(),a("section",z,[e.title?(t(),a("h5",C,r(e.title),1)):i("",!0),e.subtitle?(t(),a("p",P,r(e.subtitle),1)):i("",!0),g("div",{class:"grid",style:k(`grid-template-columns:repeat(${e.tableStructure.header.length}, 1fr)`)},[(t(!0),a(y,null,w(e.tableStructure.header,d=>(t(),a("div",A,[g("p",F,r(u(m)(d.thead)),1),d.tsubhead?(t(),a("p",E,r(u(m)(d.tsubhead)),1)):i("",!0)]))),256))],4),(t(!0),a(y,null,w(e.keyToUpdate,(d,l)=>(t(),a("div",{key:`r${l}-${e.keyToUpdate.length}`,class:"grid relative",style:k(`grid-template-columns:repeat(${e.tableStructure.header.length}, 1fr)`)},[(t(!0),a(y,null,w(d,(V,n)=>(t(),a("div",I,[e.overwrite&&n===e.overwritePos||e.printMode===!0?(t(),a("p",q,r(e.keyToUpdate[l][n]),1)):(t(),a(y,{key:1},[e.cellType=="textarea"?p((t(),a("textarea",{"onUpdate:modelValue":f=>e.keyToUpdate[l][n]=f,rows:"1",class:"textarea textarea-bordered ring-inset block w-full h-full py-1 px-2 leading-tight rounded-md focus:bg-yellow-50 focus:text-slate-800",style:{"outline-offset":"-4px"},key:`ta-${l}-${n}-${e.keyToUpdate.length}`},null,8,L)),[[T,e.keyToUpdate[l][n]]]):p((t(),a("input",{type:"text","onUpdate:modelValue":f=>e.keyToUpdate[l][n]=f,class:"input input-bordered rounded-none w-full focus:bg-yellow-50 focus:text-slate-800",style:{"outline-offset":"-4px"},key:`ip-${l}-${n}-${e.keyToUpdate.length}`},null,8,G)),[[T,e.keyToUpdate[l][n]]])],64))]))),256)),u(R)?(t(),a("button",{key:0,class:"absolute -right-2 top-1 text-red-700",onClick:V=>$(l)},[x(c,{name:"material-symbols:cancel",size:"24"})],8,H)):i("",!0)],4))),128)),u(v)?(t(),a("button",{key:2,onClick:S,class:"btn btn-sm btn-neutral mt-3"},[x(c,{name:"mdi:plus-circle",style:{"font-size":"140%"}}),N(" "+r(e.addRowTitle?e.addRowTitle:u(U)("inquiry.add_row")),1)])):i("",!0)])}}};export{Q as _};