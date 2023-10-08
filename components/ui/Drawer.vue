<template>
    <div class="prose-lg e-article max-w-none 
        fixed top-0 right-0 z-[9999] 
        min-h-screen h-screen w-full md:w-[75vw] xl:w-[50vw]
        bg-slate-50 p-8 overflow-y-auto" style="box-shadow:-0.25rem 0 0.75rem 0.125rem hsl(0 0% 0% / 0.25)">
        <div class="relative">
            <UiButtonClose class="fixed right-8 top-6" @click="closeModal" />
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
    import { useUserPreferences } from '~~/store/useUserPreferences';
    const userPrefs = useUserPreferences();

    const closeModal = () => {
        userPrefs.toggleModal();
    }
</script>
