<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesVirusesBackgroundEt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesVirusesBackgroundSv />
        </template>
        <template v-else>
            <ModulesVirusesBackgroundEn />
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