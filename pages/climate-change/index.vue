<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesClimateChangeEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesClimateChangeEl />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesClimateChangePt />
        </template>
        <template v-else>
            <ModulesClimateChangeEn />
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