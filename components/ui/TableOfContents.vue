<template>
    <div class="w-full px-8 py-6 border bg-white shadow sticky top-[5rem] max-h-screen max-h-[100dvh] overflow-y-auto 
        bg-yellow-100
        md:block" >
        <div class="flex items-center justify-between  text-md font-Body font-bold cursor-pointer" @click="userPrefs.toggleToC()">
            <slot name="title"></slot><Icon name="tabler:chevron-down" size="24" class="transition-all duration-300" :class="userPrefs.tocOpen ? '-scale-y-100' : 'scale-y-100'" />
        </div>
        <div class="mt-3" :class="userPrefs.tocOpen ? 'block' : 'hidden'">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
    import { useUserPreferences } from '~~/store/useUserPreferences.js';
    const userPrefs = useUserPreferences();
</script>

<style scoped>
    :slotted(li) {
        line-height: 1.1;
        margin-bottom: 0.75rem;
    }
    :slotted(ol){
        list-style-type: decimal;
    }
    :slotted(li::marker) {
        color: gray;
        /* content: "⁕ "; */
    }
</style>