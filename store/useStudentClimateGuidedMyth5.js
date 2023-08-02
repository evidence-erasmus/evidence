import { defineStore } from "pinia";

export const useStudentClimateGuidedMyth5 = defineStore("studentClimateGuidedMyth5", {
    state: () => ({
        hypothesis: "",
        videoNotes: "",
        exp: {
            variableTable: [
                ["", "", ""]
            ],
            hypothesis: "",
            tempTable: [
                ["","","","","","","","","","",""],
                ["","","","","","","","","","",""]
            ],
            dataTable: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            collectedData: "",
        },
        reliability: [
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
        addDynamicRow(key, row){
            key.push(row);
        },
        changeDynamicRow(key, row, column, value){
            key[row][column] = value;
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