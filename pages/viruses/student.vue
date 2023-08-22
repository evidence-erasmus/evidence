<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesVirusesStudentEt />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesVirusesStudentPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesVirusesStudentSv />
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