import { defineStore } from "pinia";

export const useStudentClimateGuidedMyth2 = defineStore("studentClimateGuidedMyth2", {
    state: () => ({
        a1: {
            q1: {
                t1: "",
                t2: ""
            },
            q2: {
                hypothesis: "",
                conclusions: "",
                source1: "",
                source2: "",
                source3: "",
                datatable: [
                    ["", "", ""]
                ],
                table2: [
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""],
                ]
            }
        },
        a2: {
            q1: {
                source1: "",
                t1: "",
            }
        },
        hypothesis: "",
        conclusions: "",
        
        reliability: [
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