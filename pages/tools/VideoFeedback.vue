<template>
    <div class="p-6 md:p-10">
        <ToolsVideoFeedback />

        <hr />

        <button @click="printMe" class="mt-8 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white  uppercase "><icon name="material-symbols:print-outline-rounded"  /> Print</button>
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