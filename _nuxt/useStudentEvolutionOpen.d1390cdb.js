import{x as a,y as l}from"./entry.2edb84a9.js";const n=a("studentEvolutionOpen",{state:()=>({learningPath:0,mythName:"Not selected yet",hypothesis:"",plan:"",reliability:[["","","0",""]],conclusions:""}),actions:{changePath(e){this.learningPath=e},addReliabilityRow(){this.reliability.push(["","","0",""])},changeReliabilityValue(e,t,i){this.reliability[e][t]=i},addFliccRow(){this.flicc.push(["",!1,!1,!1,!1,""])},changeFliccValue(e,t,i){this.flicc[e][t]=i}},persist:{storage:l.localStorage}});export{n as u};
