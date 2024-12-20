import { defineStore } from "pinia";

export const useStudentInputStore = defineStore("student", {
    state: () => ({
        // mythNames: [
        //     "Myth 1: Vaccines cause autism / serious side effects",
        //     "Myth 2: Infant immune systems cannot handle multiple vaccines.",
        //     "Myth 3: Immunity acquired through a disease is a better choice than immunity acquired through vaccination",
        //     "Myth 4: Vaccines contain life-threatening substances.",
        //     "Myth 5: Better hygiene and sanitation are responsible for decreased infections, not vaccines",
        //     "Myth 6: Vaccines can infect the child with the disease it is trying to prevent",
        //     "Myth 7: We do not need to vaccinate because many countries have low infection rates",
        //     "Myth 8: Soap is as good as alcohol for killing certain viruses (e.g. COVID-19)",
        //     "Myth 9: Masks are pointless in preventing upper respiratory diseases (e.g. COVID-19)",
        //     "Myth 10: Prolonged use of the mask produces hypoxia/Masks can cause carbon dioxide poisoning."
        // ],
        learningPath: 0,   
        activity3a: {
            activity3aMyth: "",
            activity3aHypothesis: "",
            activity3aPlan: "",
            experimentVariables: {
                independent: "",
                dependent: "",
                control: [
                    [[""], [""]]
                ]
            },
            activity3aVariables: [
                ["", "", ""]
            ],
            reliability: [
                ["", "", "'0'", ""]
            ],
            activity3aResults: [
                ["", ""]
            ],
            activity3aConclusion: "",
            activity3aSecondary: "",
        },
        activity3b: {
            activity3bMyth: "",
            activity3bHypothesis: "",
            activity3bPlan: "",
            activity3bReliability: [
                ["", "", "0", ""]
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
        addVariableRow(){
            this.activity3a.activity3aPlan.push(["", "", ""]);
        },
        addReliabilityRow(){
            this.reliability.push(["", "", "0", ""]);
        },
        changeReliabilityValue(row, column, value){
            console.log("Relaibility:", row, value);
            this.reliability[row][column] = value;
        },
        changePath(index){
            this.learningPath = index;
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