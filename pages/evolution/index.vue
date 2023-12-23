<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesEvolutionEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesEvolutionEl />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesEvolutionPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesEvolutionSv />
        </template>
        <template v-else>
            <ModulesEvolutionEn />
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