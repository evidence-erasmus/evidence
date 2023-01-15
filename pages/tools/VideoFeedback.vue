<template>
    <div>
        back
        <ToolsVideoFeedback />
        <button @click="printMe">Print</button>
    </div>
</template>

<script setup>
    // import { useI18n } from 'vue-i18n';
    // const { locale, t } = useI18n({ useScope: 'global' });
    definePageMeta({
        layout: "base",
    });

    const printMe = () => {
        // console.log("printing");
        window.print();
    }
</script>