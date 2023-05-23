<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesClimateChangeEn />
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