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
                ]
            }
        },
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
            ["", "", "'0'", ""],
            ["", "", "'0'", ""],
            ["", "", "'0'", ""]
        ],
        flicc: [
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""],
            ["", false, false, false, false, ""]
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
            console.log("Adding dynamic row");
            key.push(["", "", ""]);
        },
        addFliccRow(){
            this.flicc.push(["", false, false, false, false, ""]);
        },
        changeFliccValue(row, column, value){
            this.flicc[row][column] = value;
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});