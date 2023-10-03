<template>
    <div class="p-6 md:p-10">
        <div class="prose print:hidden">
            <h1 class="mb-8">{{ t('title-1') }}</h1>
        </div>
        
        <button @click="printMe" class="my-6 px-4 py-2 flex items-center gap-2 bg-sky-600 text-md  
            rounded text-white uppercase transition
            hover:bg-sky-700
            print:hidden">
            <icon name="material-symbols:print-outline-rounded" /> {{ t('button-title') }} {{ t('button-note') }}
        </button>


        <ToolsCardgameVirusesTheme1 
            v-if="route.params.game[0] === 'viruses' && route.params.game[1] === 'theme1'" :printMode="true" />
        <ToolsCardgameVirusesTheme2 
            v-else-if="route.params.game[0] === 'viruses' && route.params.game[1] === 'theme2'" :printMode="true" />
        <ToolsCardgameClimateChange 
            v-else-if="route.params.game[0] === 'climate-change'" :printMode="true" />
        <ToolsCardgameRadiation 
            v-else-if="route.params.game[0] === 'radiation'" :printMode="true" />


        
        

        
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
        "title-1" : "Rollimäng",
        "button-title" : "PRINDI",
        "button-note" : "- või salvesta pdf-ina"
    },
    "el": {
        "title-1" : "Παιχνίδι καρτών ρόλων",
        "button-title" : "Εκτύπωση",
        "button-note" : "- ή αποθήκευση ως pdf"
    },
    "pt": {
        "title-1" : "Jogo de cartas role play",
        "button-title" : "Imprima",
        "button-note" : "- ou salve como pdf"
    },
    "sv": {
        "title-1" : "Rollspel kortspel",
        "button-title" : "SKRIV UT",
        "button-note" : "- eller spara som pdf"
    }
}
</i18n>


<script setup>
    const { t } = useI18n({ useScope: 'local' });
    
    const route = useRoute();
    //console.log(route.params); 

    
    definePageMeta({
        layout: "base",
    });

    const printMe = () => {
        window.print();
    }
</script>