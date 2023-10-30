<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesDrugsEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesDrugsEl />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesDrugsPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesDrugsSv />
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