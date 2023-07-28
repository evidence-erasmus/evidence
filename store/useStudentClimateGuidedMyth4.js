import { defineStore } from "pinia";

export const useStudentClimateGuidedMyth4 = defineStore("studentClimateGuidedMyth4", {
    state: () => ({
        hypothesis: "",
        a1: {
            source410:"",
            source411:"",
            source412:"",
            conclusion:""
        },
        a2: {
            variableTable: [
                ["", "", ""]
            ],
            hypothesis: "",
            resultsTable: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            conclusion: "",
            islands: "",
            source421: "",
            sealevelTable: [
                ["","","","","","",""],
                ["","","","","","",""]
            ],
            sealevelTableAnswer: "",
            conclusion: ""
        },
        a3: {
            source431Table: [
                ["",""]
            ]
        },
        conclusions: "",
        
        reliability: [
            ["", "", "'0'", ""],
            ["", "", "'0'", ""],
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
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""]
        ],
        flicc2: [
            [false, ""],
            [false, ""],
            [false, ""],
            [false, ""]
        ]
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