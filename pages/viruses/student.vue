<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesVirusesStudentEn />
        </template>
        <template v-else>
            <ModulesVirusesStudentEn />
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