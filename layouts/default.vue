<template>
    <div>
        <header class="flex flex-col justify-center gap-16 items-center min-h-[85vh] p-8 bg-yellow-400">
            <EvidenceSymbol class="fill-slate-800 h-28" />

            <div class="flex flex-col items-center gap-4 max-w-4xl px-4 py-8 rounded-xl border border-yellow-300 shadow-md">
                <h1 class="font-Alfa text-5xl 
                    sm:text-6xl">Evidence</h1>
                <p class="text-slate-800"><a class="underline" href="https://erasmus-plus.ec.europa.eu/projects/search/details/2020-1-EE01-KA201-078008" target="_blank">An <b>Erasmus+</b> project</a></p>
                <p class="text-2xl font-bold text-center">Promoting students’ key competences for making evidence-based decisions on controversial socio-scientific issues</p>
                
                <UiEButton bStyle="outline" class="text-md font-bold my-6">
                    <NuxtLink to="/about">
                        ABOUT THE PROJECT <Icon name="fluent:info-24-regular"  />
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
        <slot />
    </div>
</template>
<script>
    // import { useI18n } from 'vue-i18n';
    // const { t } = useI18n({ useScope: 'global' });
    // const localePath = useLocalePath();
</script>
