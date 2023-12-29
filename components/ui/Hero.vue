<script setup>
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({ useScope: 'global' });
    const localePath = useLocalePath();
</script>

<template>
    <header class="flex flex-col justify-center gap-8 items-center min-h-screen p-6 bg-yellow-400">
        
        <EvidenceSymbol class="fill-slate-800 h-24" />
    
        <div class="flex flex-col items-center gap-4 max-w-4xl px-4 md:px-6 py-6 rounded-xl border border-yellow-300 bg-yellow-400 shadow-lg">
            <h1 class="text-6xl text-slate-900 mx-0 leading-none 
                sm:text-7xl">Evidence</h1>
            <p class="text-slate-800">
                <a class="underline" href="https://erasmus-plus.ec.europa.eu/projects/search/details/2020-1-EE01-KA201-078008" target="_blank">{{ t('hero.erasmus') }}</a>
            </p>
            <p class="text-slate-800 text-2xl font-bold text-center">
                {{t('hero.intro')}}
            </p>
    
            <NuxtLink :to="localePath({name: 'modules'})">
                <UiEButton class="bg-slate-900 text-yellow-300 px-6 py-3 text-lg font-bold mt-4 rounded-full">
                    {{t('hero.modules')}}
                </UiEButton>
            </NuxtLink>
            <p>{{t('hero.or')}}</p>
            <NuxtLink :to="localePath({name: 'about'})">
                <UiEButton bStyle="outline" class="text-md font-bold mb-2 rounded-full px-4 py-2">
                    {{t('hero.about')}}
                </UiEButton>
            </NuxtLink>
        </div>
    <img 
        class="fixed bottom-0  right-6 max-w-[12rem]"
    src="https://evidence.onkel.ee/assets/erasmus-eu-logo__opt.svg" />
    </header>
</template>

<style>
    p {
        hyphens: auto;
    }
</style>