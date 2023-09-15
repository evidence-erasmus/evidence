<script setup>
    const { locale, locales } = useI18n();
    const availableLocales = locales.value;
    const switchLocalePath = useSwitchLocalePath();
</script>
<template>
    <nav class="dropdown dropdown-end">
        <label tabindex="0" class="bg-slate-900 text-white flex w-10 h-7 justify-center items-center font-bold tracking-wide uppercase cursor-pointer">{{ locale }}</label>
        <ul tabindex="0" class="dropdown-content z-[1] bg-slate-900 w-10 border-t border-t-slate-400">
            <li v-for="loc in availableLocales" :key="loc.code" class="text-slate-100 text-center py-2">
                <NuxtLink :to="switchLocalePath(loc.code)" 
                class="p-2 leading-none text-center transition hover:bg-slate-600" :class="locale == loc.code ? 'bg-yellow-400 text-slate-900 font-bold hover:bg-yellow-300' : ''">
                {{ loc.code.toUpperCase() }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>