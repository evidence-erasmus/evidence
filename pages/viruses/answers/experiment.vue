<template>
    <div class="p-6 md:p-10" :lang="locale" style="hyphens:auto">
        
        <UiPrintMessage />
        <div class="prose-lg print:prose">
            
            <h1 class="mb-2">{{ t('title') }}</h1>
            <p class="uppercase my-2">{{ t('subtitle') }}</p>

            <hr class="print:hidden" />

            <section>
                <h3 class="my-1">{{ t('q1') }}</h3>
                <p class="whitespace-pre-wrap">
                    {{ studentInputs.activity3a.activity3aMyth }}
                </p>

                <h3 class="my-1">{{ t('q2') }}</h3>
                <p>
                    {{ studentInputs.activity3a.activity3aHypothesis }}
                </p>

                <h3 class="my-1">{{ t('q3a') }}</h3>
                
                <table class="not-prose table table-zebra leading-tight mb-8">
                    <tr class="border-b border-b-slate-300">
                        <th>
                            {{ studentInputs.activity3a.experimentVariables.independent }}
                        </th>
                        <th>
                            {{ studentInputs.activity3a.experimentVariables.dependent }}
                        </th>
                        <th v-for="control in studentInputs.activity3a.experimentVariables.control">
                            {{ control[0] }}
                        </th>
                    </tr>
                    <tr v-for="row in studentInputs.activity3a.activity3aResults" class="border-b border-b-slate-300">
                        <td v-for="td in row">{{ td }}</td>
                    </tr>
                </table>
                
                
                
                <h3 class="my-1">{{ t('qReliability') }}</h3>
                <ToolsReliabilityTable :printMode="true" :storeToUpdate="studentInputs"></ToolsReliabilityTable>


                <h3 class="my-1">{{ t('q4') }}</h3>
                <p>
                    {{ studentInputs.activity3a.activity3aConclusion }}
                </p>
                <h3 class="my-1">{{ t('q5') }}</h3>
                <p>
                    {{ studentInputs.activity3a.activity3aSecondary }}
                </p>
            </section>
        </div>
        
            <!-- <button @click="printMe" class="mt-4 btn btn-secondary text-white uppercase no-underline print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('print') }}</button> -->
    </div>
</template>

<i18n lang="json">
    {
      "en": {
        "title": "Viruses. Experiment.",
        "subtitle": "These are your submitted answers",
        "hint": "You can print this page or save as pdf file from the print window",
        "q1" : "1. We are going to bust the following myth:",
        "q2" : "2. Our hypothesis / research question is:",
        "q3a" : "3. Research results:",
        "qReliability": "4. Sources reliability",
        "q4" : "5. Based on the experiment, our conclusion(s) is/are:",
        "q5" : "6. Short summary of our findings:",
        "print" : "Print - or save as pdf"
    },
    "et": {
        "title": "Viirused",
        "subtitle": "Eksperimendi vastused",
        "hint": "Siin lehel saad need välja printida või salvestada printimise aknas pdf failiks",
        "q1" : "1. Lükkasime ümber või kinnitasime järgmist viirustega seotud müüti:",
        "q2" : "2. Meie hüpotees / uurimisküsimus on:",
        "q3a" : "3. Eksperimendi tulemused:",
        "qReliability": "4. Allikate usaldusväärsus",
        "q4" : "5. Põhinedes eksperimendi tulemustele jõudsime järgmistele järeldustele:",
        "q5" : "6. Lühikokkuvõte uurimistulemustest:",
        "print" : "Prindi või salvesta pdf"
    },
    "el": {
        "title": "Viruses module",
        "subtitle": "These are your submitted answers",
        "hint": "You can print this page or save as pdf file from the print window in most browsers",
        "q1" : "1. We are going to bust the following myth:",
        "q2" : "2. Our hypothesis / research question is:",
        "q3a" : "3. Research variables:",
        "q3aVar": ["Independent variables", "Dependent variables", "Control variables"],
        "q4" : "4. Based on the experiment, our conclusion(s) is/are:",
        "q5" : "5. Short summary of our findings:",
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