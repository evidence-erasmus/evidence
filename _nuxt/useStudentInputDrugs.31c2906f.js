import{x as a,y as l}from"./entry.1de833bf.js";const n=a("studentDrugs",{state:()=>({learningPath:0,myth:"",hypothesis:"",planOfActivities:"",conclusions:"",reliability:[["","","0",""]],decision:""}),actions:{addReliabilityRow(){this.reliability.push(["","","'0'",""])},changeReliabilityValue(i,e,t){this.reliability[i][e]=t},addDynamicRow(i,e){i.push(e)},deleteDynamicRow(i,e){i.splice(e,1)},changeDynamicRow(i,e,t,s){i[e][t]=s}},persist:{storage:l.localStorage}});export{n as u};
