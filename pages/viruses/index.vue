<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesVirusesEt />
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