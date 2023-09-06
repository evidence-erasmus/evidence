<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesDrugsEn />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesDrugsEn />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesDrugsEn />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesDrugsEn />
        </template>
        <template v-else>
            <ModulesDrugsEn />
        </template>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { locale, t } = useI18n({ useScope: 'global' });
    definePageMeta({
        layout: "content-left",
    });


</script>