<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesEvolutionStudentEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesEvolutionStudentEl />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesDrugsStudentPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesEvolutionStudentSv />
        </template>
        <template v-else>
            <ModulesEvolutionStudentEn />
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