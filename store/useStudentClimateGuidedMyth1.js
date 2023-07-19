import { defineStore } from "pinia";

export const useStudentClimateGuidedMyth1 = defineStore("studentClimateGuidedMyth1", {
    state: () => ({
        hypothesis: "",
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        reliability: [
            ["","","0",""]
        ],
        flicc: [
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""],
        ]
    }),
    
    actions : {
        addReliabilityRow(){
            this.reliability.push(["", "", "1", ""]);
        },
        changeReliabilityValue(index, value){
            this.reliability[index][2] = value;
        },
        addFliccRow(){
            this.flicc.push(["", false, false, false, false, ""]);
        },
        changeFliccValue(index, flicc, value){
            this.flicc[index][flicc] = value;
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});