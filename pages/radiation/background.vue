<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesRadiationBackgroundEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesRadiationBackgroundEl />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesRadiationBackgroundPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesRadiationBackgroundSv />
        </template>
        <template v-else>
            <ModulesRadiationBackgroundEn />
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