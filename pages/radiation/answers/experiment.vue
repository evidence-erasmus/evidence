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
                    {{ studentInputs.activity3a.activity3aMyth }} 
                </p>

                <h3 class="my-1 font-bold">{{ t('q2') }}</h3>
                <p class="whitespace-pre-wrap">
                    {{ studentInputs.activity3a.activity3aHypothesis }}
                </p>

                <h3 class="my-1 font-bold">{{ t('q3') }}</h3>
                <p class="whitespace-pre-wrap">
                    {{ studentInputs.activity3a.activity3aPlan }}
                </p>
                
                <h3 class="my-1 font-bold">{{ t('q4') }}</h3>
                <table class="table">
                    <thead>
                    <tr>
                        <th>{{ t('q4a.name') }}</th>
                        <th>{{ t('q4a.value') }}</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="variable in studentInputs.activity3a.experimentVariables.control">
                            <td>{{ variable[0] }}</td>
                            <td>{{ variable[1] }}</td>
                        </tr>
                    </tbody>
                </table>

                <h3 class="mb-1 mt-6 font-bold">{{ t('q5') }}</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>{{ studentInputs.activity3a.experimentVariables.independent }}</th>
                            <th>{{ studentInputs.activity3a.experimentVariables.dependent }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="result, i in studentInputs.activity3a.activity3aResults" key="radQResults">
                            <td>{{ result[0] }}</td>
                            <td>{{ result[1] }}</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3 class="mb-1 mt-6 font-bold">{{ t('q6') }}</h3>
                <p class="whitespace-pre-wrap">
                    {{ studentInputs.activity3a.activity3aCredibility }}
                </p>

                <h3 class="mb-1 mt-6 font-bold">{{ t('q7') }}</h3>
                <p>
                    {{ studentInputs.activity3a.activity3aConclusion }}
                </p>

                <h3 class="my-1 font-bold">{{ t('qReliability') }}</h3>
                <ToolsReliabilityTable :printMode="true" :storeToUpdate="studentInputs"></ToolsReliabilityTable>

                <h3 class="mb-1 mt-8 font-bold">{{ t('q8') }}</h3>
                <p>
                    {{ studentInputs.activity3a.activity3aSummary }}
                </p>
            </section>
        </div>
        
            <!-- <button @click="printMe" class="mt-4 btn btn-secondary text-white uppercase no-underline print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('print') }}</button> -->
    </div>
</template>

<i18n lang="json">
{
    "en": {
        "title": "Radiation. Experiment.",
        "subtitle": "These are our experiment results",
        "q1" : "1. We busted the following myth:",
        "q2" : "2. Our hypothesis / research question:",
        "q3" : "3. Work plan:",
        "q4" : "4. Control variables:",
        "q4a" : {
            "name": "Control variable",
            "value": "Value"
        },
        "q5" : "5. Research results:",
        "q6" : "6. Circumstances that could reduce the reliability of the results of the experiment",
        "qReliability": "4. Sources reliability",
        "q7" : "7. Based on the experiment, our conclusion(s) is/are:",
        "q8" : "8. Short summary of our findings:"
    },
    "et": {
        "title": "Kiirgused",
        "subtitle": "Eksperimendi vastused",
        "q1" : "1. Lükkasime ümber või kinnitasime järgmist kiirgustega seotud müüti:",
        "q2" : "2. Meie hüpotees / uurimisküsimus on:",
        "q3" : "3. Töö käik:",
        "q4" : "4. Kontrollmuutujad:",
        "q4a" : {
            "name": "Muutuja",
            "value": "Väärtus"
        },
        "q5" : "5. Mõõtmiste tulemused:",
        "q6" : "6. Asjaolud, mis võisid vähendada eksperimendi tulemuste usaldusväärsust",
        "qReliability": "7. Allikate usaldusväärsus",
        "q7" : "8. Põhinedes eksperimendi tulemustele jõudsime järgmistele järeldustele:",
        "q8" : "9. Lühikokkuvõte uurimistulemustest:"
    },
    "el": {
        "title": "Radiation. Experiment.",
        "subtitle": "These are our experiment results",
        "q1" : "1. We busted the following myth:",
        "q2" : "2. Our hypothesis / research question:",
        "q3" : "3. Work plan:",
        "q4" : "4. Control variables:",
        "q4a" : {
            "name": "Control variable",
            "value": "Value"
        },
        "q5" : "5. Research results:",
        "q6" : "6. Circumstances that could reduce the reliability of the results of the experiment",
        "qReliability": "4. Sources reliability",
        "q7" : "7. Based on the experiment, our conclusion(s) is/are:",
        "q8" : "8. Short summary of our findings:"
    },
    "pt": {
        "title": "Radiation. Experiment.",
        "subtitle": "These are our experiment results",
        "q1" : "1. We busted the following myth:",
        "q2" : "2. Our hypothesis / research question:",
        "q3" : "3. Work plan:",
        "q4" : "4. Control variables:",
        "q4a" : {
            "name": "Control variable",
            "value": "Value"
        },
        "q5" : "5. Research results:",
        "q6" : "6. Circumstances that could reduce the reliability of the results of the experiment",
        "qReliability": "4. Sources reliability",
        "q7" : "7. Based on the experiment, our conclusion(s) is/are:",
        "q8" : "8. Short summary of our findings:"
    },
    "sv": {
        "title": "Radiation. Experiment.",
        "subtitle": "These are our experiment results",
        "q1" : "1. We busted the following myth:",
        "q2" : "2. Our hypothesis / research question:",
        "q3" : "3. Work plan:",
        "q4" : "4. Control variables:",
        "q4a" : {
            "name": "Control variable",
            "value": "Value"
        },
        "q5" : "5. Research results:",
        "q6" : "6. Circumstances that could reduce the reliability of the results of the experiment",
        "qReliability": "4. Sources reliability",
        "q7" : "7. Based on the experiment, our conclusion(s) is/are:",
        "q8" : "8. Short summary of our findings:"
    }
}
</i18n>

<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';
    const studentInputs = useStudentRadiation();
    
    console.log("HALLOO", studentInputs.activity3a.activity3aMyth);

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