import { defineStore } from "pinia";

export const useStudentClimateGuidedMyth2 = defineStore("studentClimateGuidedMyth2", {
    state: () => ({
        a1hypothesis: "",
        a1conclusion: "",
        a1q1: "",
        a1q2: "",
        a1q3: "",
        a1q4: "",
        a1q5: "",
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