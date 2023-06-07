import { defineStore } from "pinia";

export const useStudentClimateOpen = defineStore("studentClimateOpen", {
    state: () => ({
        learningPath: 0,
        mythName: "Not selected yet",
        q2: "",
        q3: "",
        reliability: [
            ["","","1",""]
        ],
        q4: "",
        flicc: [
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""]
        ]
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