import { defineStore } from "pinia";

export const useStudentClimateOpen = defineStore("studentClimateOpen", {
    state: () => ({
        learningPath: 0,
        mythName: "Not selected yet",
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
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});