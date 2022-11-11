<script setup>
    const { locale, locales } = useI18n();
    const availableLocales = locales.value;
    // const availableLocales = computed(() => {
    //     return (locales.value).filter(i => i.code !== locale.value)
    // });
    const switchLocalePath = useSwitchLocalePath();
</script>
<template>
    <nav class="flex flex-col absolute right-0 top-16 items-stretch bg-slate-800 rounded-l-md text-white text-sm">
        <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)" 
            class="p-2 leading-none text-center transition" :class="locale == loc.code ? 'bg-slate-100 text-slate-800 font-bold py-4' : ''">
            {{ loc.code.toUpperCase() }}
        </NuxtLink>
    </nav>
</template>