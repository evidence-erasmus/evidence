<template>
    <div class="p-6 md:p-10">
        <div class="prose mb-8">
            <h1>{{ t('title') }}</h1>
        </div>
        
        <ToolsPeerFeedback />


        <button @click="printMe" class="mt-8 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white uppercase print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('button-title') }} {{ t('button-note') }}</button>
    </div>
</template>

<i18n lang="json">
    {
      "en": {
        "title" : "Feedback questionnaire",
        "button-title" : "PRINT",
        "button-note" : "- or save as pdf"
    },
    "et": {
        "title" : "Tagasiside vorm",
        "button-title" : "PRINDI",
        "button-note" : "- või salvesta pdf-ina"
    },
    "el": {
        "title" : "Feedback questionnaire",
        "button-title" : "PRINDI",
        "button-note" : "- või salvesta pdf-ina"
      }
    }
</i18n>

<script setup>
    // import { useI18n } from 'vue-i18n';
    const { t } = useI18n({ useScope: 'local' });
    definePageMeta({
        layout: "base",
    });

    const printMe = () => {
        // console.log("printing");
        window.print();
    }
</script>