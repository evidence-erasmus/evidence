<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesClimateChangeBackgroundEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesClimateChangeBackgroundEl />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesClimateChangeBackgroundPt />
        </template>
        <template v-else>
            <ModulesClimateChangeBackgroundEn />
        </template>
    </div>
</template>
<script setup>
    import { useI18n } from 'vue-i18n';
    const { locale } = useI18n();
    definePageMeta({
        layout: "content-left",
    });

</script>