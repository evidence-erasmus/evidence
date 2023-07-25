import { defineStore } from "pinia";

export const useStudentClimateGuidedMyth3 = defineStore("studentClimateGuidedMyth3", {
    state: () => ({
        a1: {
            q1: {
                hypothesis : "",
                noaa1q1: "",
                noaa1q2: "",
                noaa1q3: "",
                noaa1q4: "",
                noaa1Table: [
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""]
                ],
                noaa1q5: "",
                noaa2conclusion: "",

            }
        },
        reliability: [
            ["", "", "'0'", ""],
            ["", "", "'0'", ""],
            ["", "", "'0'", ""],
            ["", "", "'0'", ""]
        ],
        flicc: [
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""]
        ],
        flicc2: [
            [false, ""],
            [false, ""],
            [false, ""],
            [false, ""]
        ],
        conclusions: ""
    }),
    
    actions : {
        addReliabilityRow(){
            this.reliability.push(["", "", "'0'", ""]);
        },
        changeReliabilityValue(row, column, value){
            this.reliability[row][column] = value;
        },
        addDynamicRow(key){
            key.push(["", "", ""]);
        },
        addFliccRow(){
            this.flicc.push(["", false, false, false, false, ""]);
        },
        changeFliccValue(row, column, value){
            this.flicc[row][column] = value;
        },
        changeFlicc2Value(row, column, value){
            this.flicc2[row][column] = value;
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});