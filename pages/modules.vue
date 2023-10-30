<template>
    <div>
        <h1>{{ t('modules.title') }}</h1>

        <section class="grid md:grid-cols-3 gap-3">
                <UiCardModule path="viruses" 
                    :title="t('modules.viruses.title')" 
                    :description="t('modules.viruses.description')" 
                    icon="material-symbols:coronavirus-outline-sharp" 
                    class="w-full"
                    />
                <UiCardModule path="climate-change" 
                    :title="t('modules.climateChange.title')" 
                    :description="t('modules.climateChange.description')" 
                    icon="material-symbols:mode-cool-off" 
                    class="w-full"
                />
                <UiCardModule path="radiation" 
                    :title="t('modules.radiation.title')" 
                    :description="t('modules.radiation.description')" 
                    icon="icon-park-outline:radiation" 
                    class="w-full"
                />
                <UiCardModule path="drugs" 
                    :title="t('modules.drugs.title')" 
                    :description="t('modules.drugs.description')" 
                    icon="material-symbols:syringe-outline" 
                    class="w-full md:mt-4"
                />
                <UiCardModule path="evolution" 
                    :title="t('modules.evolution.title')" 
                    :description="t('modules.evolution.description')" 
                    icon="mdi:dna" 
                    class="w-full md:mt-4"
                />
                <UiCardModule path="space" 
                    :title="t('modules.space.title')" 
                    :description="t('modules.space.description')" 
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
        layout: "content",
    });
</script>