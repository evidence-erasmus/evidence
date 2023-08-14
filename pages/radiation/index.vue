<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesRadiationEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesRadiationEl />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesRadiationPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesRadiationSv />
        </template>
        <template v-else>
            <ModulesRadiationEn />
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