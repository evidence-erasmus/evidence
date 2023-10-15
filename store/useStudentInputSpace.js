import { defineStore } from "pinia";

export const useStudentSpace = defineStore("studentSpace", {
    state: () => ({
        learningPath: 0,   
        myth: "",
        hypothesis: "",
        planOfActivities: "",
        conclusions: "",
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