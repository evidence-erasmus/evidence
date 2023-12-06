import { defineStore } from "pinia";

export const useStudentEvolutionGuidedMyth3 = defineStore("studentEvolutionGuidedMyth3", {
    state: () => ({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        reliability: [
            ["", "", "'0'", ""],
            ["", "", "'0'", ""],
            ["", "", "'0'", ""]
        ]
    }),
    
    actions : {
        addReliabilityRow(){
            this.reliability.push(["", "", "'0'", ""]);
        },
        changeReliabilityValue(row, column, value){
            this.reliability[row][column] = value;
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});