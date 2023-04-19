import { defineStore } from "pinia";

export const useUserPreferences = defineStore("userPreferences", {
    state: () => ({
        tocOpen: true,
        modalOpen: false
    }),
    actions : {
        toggleToC(){
            this.tocOpen = !this.tocOpen;
        },
        toggleModal(){
            this.modalOpen = !this.modalOpen;
        }
    },
    persist: true
});