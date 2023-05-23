<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesClimateChangeBackgroundEt />
        </template>
        <template v-else>
            <ModulesClimateChangeBackgroundEn />
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