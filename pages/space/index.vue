<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesSpaceEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesSpaceEl />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesSpacePt />
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