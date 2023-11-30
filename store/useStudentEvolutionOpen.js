import { defineStore } from "pinia";

export const useStudentEvolutionOpen = defineStore("studentEvolutionOpen", {
    state: () => ({
        learningPath: 0,
        mythName: "Not selected yet",
        hypothesis: "",
        plan: "",
        reliability: [
            ["","","0",""]
        ],
        conclusions: ""
    }),
    
    actions : {
        changePath(index){
            this.learningPath = index;
        },
        addReliabilityRow(){
            this.reliability.push(["", "", "0", ""]);
        },
        changeReliabilityValue(row, column, value){
            this.reliability[row][column] = value;
        },
        addFliccRow(){
            this.flicc.push(["", false, false, false, false, ""]);
        },
        changeFliccValue(index, flicc, value){
            this.flicc[index][flicc] = value;
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});