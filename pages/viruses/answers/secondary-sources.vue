<template>
    <div class="p-6 md:p-10" :lang="locale" style="hyphens:auto">
        <UiPrintMessage />
        <div class="prose-lg print:prose">
            <!-- <a id="exportAnswersLink" style="display: none;">Export</a>
            <button class="btn btn-accent btn-sm text-white" @click="exportAnswers">Download your answers</button> -->
            
            <h1 class="mb-2">{{ t('title') }}</h1>
            <p class="uppercase my-2">{{ t('subtitle') }}</p>
            <!-- <p class="italic mt-2 print:hidden">{{ t('hint') }}</p>
            <button @click="printMe" class="btn btn-secondary text-white uppercase no-underline print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('print') }}</button> -->

            <hr class="print:hidden" />

            <section>
                <h3 class="my-1">{{ t('q1') }}</h3>
                <p class="whitespace-pre-wrap">
                    {{ studentInputs.activity3b.activity3bMyth }}
                </p>

                <h3 class="my-1">{{ t('q2') }}</h3>
                <p>
                    {{ studentInputs.activity3b.activity3bHypothesis }}
                </p>

                                
                <h3 class="my-1">{{ t('qReliability') }}</h3>
                <ToolsReliabilityTable :printMode="true" :storeToUpdate="studentInputs"></ToolsReliabilityTable>


                <h3 class="my-8">{{ t('q4') }}</h3>
                <p>
                    {{ studentInputs.activity3b.activity3bConclusion }}
                </p>
            </section>

        </div>
        
        <!-- <button @click="printMe" class="btn btn-secondary text-white uppercase no-underline print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('print') }}</button> -->
    </div>
</template>

<i18n lang="json">
{
    "en": {
        "title": "Viruses. Secondary sources.",
        "subtitle": "These are your submitted answers",
        "hint": "You can print this page or save as pdf file from the print window",
        "q1" : "1. We are going to bust the following myth:",
        "q2" : "2. Our hypothesis / research question is:",
        "qReliability": "3. Sources reliability",
        "q4" : "4. Based on the experiment, our conclusion(s) is/are:",
        "print" : "Print - or save as pdf"
    },
    "et": {
        "title": "Viirused",
        "subtitle": "Vastuste leht",
        "hint": "Siin lehel saad vastused välja printida või salvestada printimise aknas pdf failiks",
        "q1" : "1. Lükkasime ümber või kinnitasime järgmist viirustega seotud müüti:",
        "q2" : "2. Meie hüpotees / uurimisküsimus on:",
        "qReliability": "3. Allikate usaldusväärsus",
        "q4" : "4. Põhinedes eksperimendi tulemustele jõudsime järgmistele järeldustele:",
        "print" : "Prindi või salvesta pdf"
    },
    "el": {
        "title": "Viruses module",
        "subtitle": "These are your submitted answers",
        "hint": "You can print this page or save as pdf file from the print window",
        "q1" : "1. We are going to bust the following myth:",
        "q2" : "2. Our hypothesis / research question is:",
        "qReliability": "3. Sources reliability",
        "q4" : "4. Based on the experiment, our conclusion(s) is/are:",
        "print" : "Print - or save as pdf"
    }
}
</i18n>

<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();
    
    const { locale, t } = useI18n({ useScope: 'local' });
    definePageMeta({
        layout: "base",
    });

    const printMe = () => {
        window.print();
    }

    function exportAnswers() {  
        const answers = JSON.stringify(localStorage.getItem('student'), null, 4); 
        const vLink = document.getElementById('exportAnswersLink');

        // const vBlob = new Blob(answers, {type: "octet/stream"});
        const vBlob = new Blob([answers], {type: "application/json"});
        const vName = 'your-answers.json';
        const vUrl = window.URL.createObjectURL(vBlob);

        vLink.setAttribute('href', vUrl);
        vLink.setAttribute('download', vName );
        vLink.click();
    }


</script>