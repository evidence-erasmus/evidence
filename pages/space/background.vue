<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesSpaceBackgroundEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesSpaceBackgroundEl />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesSpaceBackgroundPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesSpaceBackgroundSv />
        </template>
        <template v-else>
            <ModulesSpaceBackgroundEn />
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