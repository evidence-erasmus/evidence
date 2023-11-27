<template>
    <section class="group fixed bottom-0 left-0 flex gap-2 bg-amber-400 pt-2 pb-4 pl-3 pr-5 
    rounded-tr-xl z-50" style="box-shadow:0.5ch -0.5ch 0.75ch hsl(0 0% 0% / 0.2)">
        <NuxtLink :to="url" target="_blank" class="text-lg font-bold uppercase no-underline text-slate-800">
            <Icon name="material-symbols:edit-square" class="absolute text-slate-700 w-10 h-10 transform -translate-y-10 transition-all group-hover:rotate-[-10deg] group-hover:-translate-y-12 group-hover:scale-125" /> {{ t('inquiry.your_answers') }}
        </NuxtLink>
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