<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesVirusesEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesVirusesEl />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesVirusesPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesVirusesSv />
        </template>
        <template v-else>
            <ModulesVirusesEn />
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