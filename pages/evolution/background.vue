<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesEvolutionBackgroundEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesEvolutionBackgroundEl />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesEvolutionBackgroundPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesEvolutionBackgroundSv />
        </template>
        <template v-else>
            <ModulesEvolutionBackgroundEn />
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