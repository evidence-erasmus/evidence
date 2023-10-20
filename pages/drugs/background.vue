<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesDrugsBackgroundEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesDrugsBackgroundEn />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesDrugsBackgroundPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesDrugsBackgroundSv />
        </template>
        <template v-else>
            <ModulesDrugsBackgroundEn />
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