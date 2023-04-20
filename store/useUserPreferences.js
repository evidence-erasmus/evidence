import { defineStore } from "pinia";

export const useUserPreferences = defineStore("userPreferences", {
    state: () => ({
        tocOpen: true,
        modalOpen: false,
        learnPathViruses: 0
    }),
    actions : {
        toggleToC(){
            this.tocOpen = !this.tocOpen;
        },
        toggleModal(){
            this.modalOpen = !this.modalOpen;
        },
        setLearnPath(module, value){
            this[module] = value;
        }
    },
    persist: true
});