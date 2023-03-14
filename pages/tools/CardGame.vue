<template>
    <div class="p-6 md:p-10">
        <div class="prose">
            <h1 class="mb-8">{{ t('title-1') }}</h1>
        </div>
        
        <hr />

        <button @click="printMe" class="my-6 px-4 py-2 flex items-center gap-2 bg-blue-500 text-md  
            rounded text-white uppercase print:hidden">
            <icon name="material-symbols:print-outline-rounded" /> {{ t('button-title') }} {{ t('button-note') }}
        </button>

        <hr />

        <ToolsCardgameVirusesTheme1 :printMode="true" />

        

        
    </div>
</template>

<i18n lang="json">
    {
      "en": {
        "title-1" : "Role playing card game",
        "button-title" : "PRINT",
        "button-note" : "- or save as pdf"
    },
    "et": {
        "title-1" : "Kaardi",
        "button-title" : "PRINDI",
        "button-note" : "- või salvesta pdf-ina"
    },
    "el": {
        "title-1" : "Video hinnangu vorm",
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