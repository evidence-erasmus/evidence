<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesClimateChangeStudentEn />
        </template>
        <template v-else>
            <ModulesClimateChangeStudentEn />
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