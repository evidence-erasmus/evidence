<template>
    <div class="p-6 md:p-10">
        <div class="prose mb-8">
            <h1>{{ t('title') }}</h1>
        </div>
        
        <ToolsPeerFeedback />

        <UiPrintMessage />

        <!-- <button @click="printMe" class="mt-8 btn btn-info no-underline text-white uppercase print:hidden"><Icon name="material-symbols:print-outline-rounded" size="24" /> {{ t('button-title') }} {{ t('button-note') }}</button> -->
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
    },
    "pt": {
        "title" : "Questionário de feedback",
        "button-title" : "PRINDI",
        "button-note" : "- või salvesta pdf-ina"
    },
    "sv": {
        "title" : "Feedback på video, poster eller presentation",
        "button-title" : "PRINDI",
        "button-note" : "- või salvesta pdf-ina"
    }
}
</i18n>

<script setup>
    const { t } = useI18n();
    
    definePageMeta({
        layout: "base",
    });

    const printMe = () => {
        window.print();
    }
</script>