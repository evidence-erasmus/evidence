<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesSpaceStudentEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesSpaceStudentEn />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesSpaceStudentPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesSpaceStudentSv />
        </template>
        <template v-else>
            <ModulesSpaceStudentEn />
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