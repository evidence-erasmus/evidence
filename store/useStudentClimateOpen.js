import { defineStore } from "pinia";

export const useStudentClimateOpen = defineStore("studentClimateOpen", {
    state: () => ({
        learningPath: 0,
        mythName: "Not selected yet",
        q2: "",
        q3: "",
        reliability: [
            ["","","0",""]
        ],
        q4: "",
        flicc: [
            ["", false, false, false, false, ""],
        ]
    }),
    
    actions : {
        changePath(index){
            this.learningPath = index;
        },
        addReliabilityRow(){
            this.reliability.push(["", "", "0", ""]);
        },
        changeReliabilityValue(index, value){
            this.reliability[index][2] = value;
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