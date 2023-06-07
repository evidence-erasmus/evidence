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
        reliability: [
            ["","","1",""]
        ],
        
        flicc: [
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""]
        ]
    }),
    
    actions : {
        addReliabilityRow(){
            this.reliability.push(["", "", "1", ""]);
        },
        changeReliabilityValue(index, value){
            this.reliability[index][2] = value;
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});