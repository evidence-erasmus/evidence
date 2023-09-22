<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesClimateChangeStudentEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesClimateChangeStudentEl />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesClimateChangeStudentSv />
        </template>
        <template v-else>
            <ModulesClimateChangeStudentEn />
        </template>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { locale } = useI18n({ useScope: 'global' });
    definePageMeta({
        layout: "content-left",
    });


</script>