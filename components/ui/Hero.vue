<script setup>
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({ useScope: 'global' });
    const localePath = useLocalePath();
</script>

<template>
    <header class="flex flex-col justify-center gap-16 items-center min-h-[85vh] p-8 bg-yellow-400">
        
        <EvidenceSymbol class="fill-slate-800 h-28" />
    
        <div class="flex flex-col items-center gap-4 max-w-4xl px-4 md:px-6 py-8 rounded-xl border border-yellow-300 shadow">
            <h1 class="text-6xl text-slate-900
                sm:text-7xl">Evidence</h1>
            <p class="text-slate-800"><a class="underline" href="https://erasmus-plus.ec.europa.eu/projects/search/details/2020-1-EE01-KA201-078008" target="_blank" v-html="$t('hero.erasmus')"></a></p>
            <p class="text-slate-800 text-2xl font-bold text-center">{{$t('hero.intro')}}</p>
    
            <button class="bg-slate-900 text-yellow-300 px-6 py-3 text-lg font-bold mt-4 rounded-full">
                <NuxtLink :to="localePath('/modules')">
                    {{$t('hero.modules')}}
                </NuxtLink>
            </button>
            <p>or</p>
            <UiEButton bStyle="outline" class="text-md font-bold mb-2 rounded-full px-4 py-2">
                <NuxtLink :to="localePath('/about')">
                    {{$t('hero.about')}}
                </NuxtLink>
            </UiEButton>
            
            <!--
            <UiEButton bStyle="outline" class="text-xl text-slate-800">
                Outline green <Icon name="fluent:info-24-regular"  />
            </UiEButton>
            <UiEButton bStyle="link" class="text-4xl">Just</UiEButton>
             -->
        </div>
    
    </header>
</template>

<style>
    p {
        hyphens: auto;
    }
</style>