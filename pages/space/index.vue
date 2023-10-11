<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesSpaceEn />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesSpaceEn />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesSpaceEn />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesSpaceSv />
        </template>
        <template v-else>
            <ModulesSpaceEn />
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