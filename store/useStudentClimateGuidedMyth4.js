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
            sealevelTableAnswer: ""
        },
        a3: {
            source431Table: [
                ["",""]
            ],
            source432: "",
            source433: "",
            conclusion: ""
        },
        a4: {
            source441: "",
            source442: "",
            insectTable: [
                ["",""],
                ["",""],
                ["",""]
            ],
            conclusion: ""
        },
        a5: {
            source451: "",
            q1: "",
            extra1: "",
            extra2: "",
            extra3: "",
            conclusion: ""
        },
        conclusions: "",
        
        reliability: [
            ["", "", "'0'", ""],
            ["", "", "'0'", ""],
            ["", "", "'0'", ""],
            ["", "", "'0'", ""],
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