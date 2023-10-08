import { defineStore } from "pinia";

export const useUserPreferences = defineStore("userPreferences", {
    state: () => ({
        tocOpen: true,
        modalOpen: false,
        modalName: '',
        learnPathViruses: 0
    }),
    actions : {
        toggleToC(){
            this.tocOpen = !this.tocOpen;
        },
        toggleModal(modalName){
            this.modalName = modalName;
            this.modalOpen = !this.modalOpen;
            console.log("MODAL",this.modalName);
        },
        setLearnPath(module, value){
            this[module] = value;
        }
    },
    persist: true
});