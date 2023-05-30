import { defineStore } from "pinia";

export const useStudentClimateOpen = defineStore("studentClimateOpen", {
    state: () => ({
        learningPath: 0,
        mythName: "Not selected yet",
        reliability: [
            ["","","1",""]
        ],
        
        activity3a: {
            activity3aMyth: "",
            activity3aHypothesis: "",
            activity3aPlan: [
               ["independent variable", "dependent variable", "control variables"]
            ],
            activity3aResults: "",
            activity3aConclusion: "",
            activity3aSecondary: "",
        },
        
    }),
    
    actions : {
        changePath(index){
            this.learningPath = index;
        },
        addReliabilityRow(){
            this.reliability.push(["", "", "1", ""]);
        },
        changeReliabilityValue(index, value){
            this.reliability[index][2] = value;
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});