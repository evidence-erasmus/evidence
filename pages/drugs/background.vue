<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesDrugsBackgroundEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesDrugsBackgroundEn />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesDrugsBackgroundEn />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesDrugsBackgroundEn />
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