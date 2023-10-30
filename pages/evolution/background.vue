<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesEvolutionBackgroundEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesEvolutionBackgroundEn />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesEvolutionBackgroundEn />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesEvolutionBackgroundEn />
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