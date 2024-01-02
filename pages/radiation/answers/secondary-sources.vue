<template>
    <div class="p-6 md:p-10" :lang="locale" style="hyphens:auto">
        
        <UiPrintMessage class="z-10" />
        <div class="prose-lg print:prose">
            
            <h1 class="mb-0">{{ t('title') }}</h1>
            <p class="uppercase mt-2 italic">{{ t('subtitle') }}</p>

            <hr class="print:hidden" />

            <section>
                <h3 class="my-1 font-bold">{{ t('q1') }}</h3>
                <p class="whitespace-pre-wrap">
                    {{ studentInputs.activity3b.activity3bMyth }} 
                </p>

                <h3 class="my-1 font-bold">{{ t('q2') }}</h3>
                <p class="whitespace-pre-wrap">
                    {{ studentInputs.activity3b.activity3bHypothesis }}
                </p>

                <h3 class="my-1 font-bold">{{ t('q3') }}</h3>
                <p class="whitespace-pre-wrap">
                    {{ studentInputs.activity3b.activity3bPlan }}
                </p>
                
                <h3 class="my-1 font-bold">{{ t('qReliability') }}</h3>
                <ToolsReliabilityTable :printMode="true" :storeToUpdate="studentInputs"></ToolsReliabilityTable>

                <h3 class="mb-1 mt-6 font-bold">{{ t('q7') }}</h3>
                <p>
                    {{ studentInputs.activity3b.activity3bConclusion }}
                </p>

                

                <h3 class="mb-1 mt-8 font-bold">{{ t('q8') }}</h3>
                <p>
                    {{ studentInputs.activity3b.activity3bStatement }}
                </p>
            </section>
        </div>

    </div>
</template>

<i18n lang="json">
{
    "en": {
        "title": "Radiation. Secondary sources.",
        "subtitle": "These are our research results",
        "q1" : "1. We busted the following myth:",
        "q2" : "2. Our hypothesis / research question:",
        "q3" : "3. Work plan:",
        "qReliability": "4. Sources reliability",
        "q7" : "5. Based on the experiment, our conclusion(s) is/are:",
        "q8" : "6. Our statement is:"
    },
    "et": {
        "title": "Kiirgused",
        "subtitle": "Sekundaarsed allikad",
        "q1" : "1. Lükkasime ümber või kinnitasime järgmist kiirgustega seotud müüti:",
        "q2" : "2. Meie hüpotees / uurimisküsimus on:",
        "q3" : "3. Töö käik:",
        "qReliability": "4. Allikate usaldusväärsus",
        "q7" : "5. Põhinedes eksperimendi tulemustele jõudsime järgmistele järeldustele:",
        "q8" : "6. asasdasd:"
    },
    "el": {
        "title": "Radiation. Secondary sources.",
        "subtitle": "These are our research results",
        "q1" : "1. We busted the following myth:",
        "q2" : "2. Our hypothesis / research question:",
        "q3" : "3. Work plan:",
        "qReliability": "4. Sources reliability",
        "q7" : "5. Based on the experiment, our conclusion(s) is/are:",
        "q8" : "6. Our statement is:"
    },
    "pt": {
        "title": "Radiation. Secondary sources.",
        "subtitle": "These are our research results",
        "q1" : "1. We busted the following myth:",
        "q2" : "2. Our hypothesis / research question:",
        "q3" : "3. Work plan:",
        "qReliability": "4. Sources reliability",
        "q7" : "5. Based on the experiment, our conclusion(s) is/are:",
        "q8" : "6. Our statement is:"
    },
    "sv": {
        "title": "Radiation. Secondary sources.",
        "subtitle": "These are our research results",
        "q1" : "1. We busted the following myth:",
        "q2" : "2. Our hypothesis / research question:",
        "q3" : "3. Work plan:",
        "qReliability": "4. Sources reliability",
        "q7" : "5. Based on the experiment, our conclusion(s) is/are:",
        "q8" : "6. Our statement is:"
    }
}
</i18n>

<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';
    const studentInputs = useStudentRadiation();

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