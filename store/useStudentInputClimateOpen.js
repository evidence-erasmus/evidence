import { defineStore } from "pinia";

export const useStudentInputStore = defineStore("studentClimateOpen", {
    state: () => ({
        // mythNames: [
        //     "Myth 1: Vaccines cause autism / serious side effects",
        //     "Myth 2: Infant immune systems cannot handle multiple vaccines.",
        //     "Myth 3: Immunity acquired through a disease is a better choice than immunity acquired through vaccination",
        //     "Myth 4: Vaccines contain life-threatening substances.",
        //     "Myth 5: Better hygiene and sanitation are responsible for decreased infections, not vaccines",
        //     "Myth 6sp: Vaccines can infect the child with the disease it is trying to prevent",
        //     "Myth 7: We do not need to vaccinate because many countries have low infection rates",
        //     "Myth 8: Soap is as good as alcohol for killing certain viruses (e.g. COVID-19)",
        //     "Myth 9: Masks are pointless in preventing upper respiratory diseases (e.g. COVID-19)",
        //     "Myth 10: Prolonged use of the mask produces hypoxia/Masks can cause carbon dioxide poisoning."
        // ],
        learningPath: 0,
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