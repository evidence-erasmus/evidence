import { defineStore } from "pinia";

export const useUserPreferencesStore = defineStore("userPreferences", {
    state: () => ({
        tocOpen: true,
        modalOpen: false,
        userLang: "",
        
    }),
    getters: {
        // getActivity3a: state => `Value is ${state.activity3a}`
    },
    actions : {
        toggleModal(){
            this.modalOpen = !this.modalOpen;
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
});