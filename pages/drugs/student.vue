<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesDrugsStudentEt />
        </template>
        <template v-else-if="locale === 'el'">
            <ModulesDrugsStudentEn />
        </template>
        <template v-else-if="locale === 'pt'">
            <ModulesDrugsStudentPt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesDrugsStudentSv />
        </template>
        <template v-else>
            <ModulesDrugsStudentEn />
        </template>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { locale } = useI18n({ useScope: 'global' });
    definePageMeta({
        layout: "content-left",
    });

</script>