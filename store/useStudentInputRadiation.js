import { defineStore } from "pinia";

export const useStudentRadiation = defineStore("studentRadiation", {
    state: () => ({
        learningPath: 0,   
        activity3a: {
            activity3aMyth: "",
            activity3aHypothesis: "",
            activity3aPlan: "",
            experimentVariables: {
                independent: "",
                dependent: "",
                control: [
                    [[""],[""]]
                ]
            },
            activity3aVariables: [
               ["", "", ""]
            ],
            activity3aResults: [
                ["", ""]
            ],
            activity3aCredibility: "",
            activity3aConclusion: "",
            activity3aSummary: "",
        },
        activity3b: {
            activity3bMyth: "",
            activity3bHypothesis: "",
            activity3bPlan: "",
            activity3bReliability: [
                ["","","0",""]
            ],
            activity3bConclusion: "",
            activity3bStatement: "",
        },
        reliability: [
            ["", "", "0", ""]
        ]
    }),
    // getters: {
    //     getActivity3a: state => `Value is ${state.activity3a}`
    // },
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
        deleteDynamicRow(key, row){
            key.splice(row, 1);
        },
        changeDynamicRow(key, row, column, value){
            key[row][column] = value;
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});