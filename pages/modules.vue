<template>
    <div>
        <h1>{{ t('modules.title') }}</h1>

        <section class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                <UiCardModule path="viruses" 
                    :title="t('modules.viruses.title')" 
                    icon="material-symbols:coronavirus-outline-sharp" 
                    class="w-full"
                    />
                <UiCardModule path="climate-change" 
                    :title="t('modules.climateChange.title')" 
                    icon="material-symbols:mode-cool-off" 
                    class="w-full"
                />
                <UiCardModule path="radiation" 
                    :title="t('modules.radiation.title')" 
                    icon="icon-park-outline:radiation" 
                    class="w-full"
                />
                <UiCardModule path="drugs" 
                    :title="t('modules.drugs.title')" 
                    icon="material-symbols:syringe-outline" 
                    class="w-full md:mt-4"
                />
                <UiCardModule path="evolution" 
                    :title="t('modules.evolution.title')" 
                    icon="mdi:dna" 
                    class="w-full md:mt-4"
                />
                <UiCardModule path="space" 
                    :title="t('modules.space.title')" 
                    icon="material-symbols:rocket-launch-outline" 
                    class="w-full md:mt-4"
                />
                
        </section>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { locale, t } = useI18n({ useScope: 'global' });
    definePageMeta({
        layout: "content-pages",
    });
</script>