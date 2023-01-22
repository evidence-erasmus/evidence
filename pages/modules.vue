<template>
    <div>
        <h1>{{ t('modules.title') }}</h1>

        <section class="grid md:grid-cols-3 gap-4">
                <UiCardModule path="viruses" 
                    :title="t('modules.viruses.title')" 
                    :description="t('modules.viruses.description')" 
                    icon="material-symbols:coronavirus-outline-sharp" 
                    />
                <UiCardModule path="radiation" 
                    :title="t('modules.radiation.title')" 
                    :description="t('modules.radiation.description')" 
                    icon="material-symbols:mode-cool-off-rounded" 
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