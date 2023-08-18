<template>
    <div>
        <template v-if="locale === 'et'">
            <ModulesRadiationStudentEt />
        </template>
        <template v-else-if="locale === 'sv'">
            <ModulesRadiationStudentSv />
        </template>
        <template v-else>
            <ModulesRadiationStudentEn />
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