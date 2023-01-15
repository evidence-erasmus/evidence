<script setup>
    const { locale, locales } = useI18n();
    const availableLocales = locales.value;
    // const availableLocales = computed(() => {
    //     return (locales.value).filter(i => i.code !== locale.value)
    // });
    const switchLocalePath = useSwitchLocalePath();
</script>
<template>
    <nav class="flex flex-col items-stretch fixed right-0 top-0 bg-slate-800 text-white text-sm" style="z-index:5100">
        <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)" 
            class="p-2 leading-none text-center transition" :class="locale == loc.code ? 'bg-slate-100 text-slate-800 font-bold' : ''">
            {{ loc.code.toUpperCase() }}
        </NuxtLink>
    </nav>
</template>