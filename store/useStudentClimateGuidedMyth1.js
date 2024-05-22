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
            ["", "", "'0'", ""],
            ["", "", "'0'", ""]
        ],
        flicc: [
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""],
        ]
    }),
    
    actions : {
        addReliabilityRow(){
            this.reliability.push(["", "", "'0'", ""]);
        },
        changeReliabilityValue(row, column, value){
            this.reliability[row][column] = value;
        },
        addFliccRow(){
            this.flicc.push(["", false, false, false, false, ""]);
        },
        changeFliccValue(row, column, newvalue){
            this.flicc[row][column] = newvalue;
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});