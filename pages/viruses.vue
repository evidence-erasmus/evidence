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
    const { locale, t } = useI18n({ useScope: 'global' });
    definePageMeta({
        layout: "content-left",
    });


</script>