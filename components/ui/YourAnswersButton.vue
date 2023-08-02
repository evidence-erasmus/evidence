<template>
    <section class="fixed bottom-0 left-0 flex gap-2 bg-amber-400 pt-2 pb-4 pl-3 pr-4 rounded-tr-xl z-50 ">
        <NuxtLink :to="url" target="_blank" class="text-lg font-bold uppercase">
        <Icon name="material-symbols:edit-square" class="absolute text-slate-700 w-10 h-10 transform -translate-y-10" /> {{ t('inquiry.your_answers') }}</NuxtLink>
    </section>
</template>

<script setup>
    const props = defineProps({
        url: {
            type: String
        }
    });
    const {t} = useI18n();
</script>