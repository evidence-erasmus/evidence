<template>
    <div class="p-6 md:p-10">
        <div class="prose prose-lg">
            <h1 class="mb-2">{{ t('title') }}</h1>
            <p class="uppercase my-2">{{ t('subtitle') }}</p>
            <p class="italic mt-2">{{ t('hint') }}</p>
            <button @click="printMe" class="mt-8 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white uppercase print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('print') }}</button>

            <hr />

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
                <table class="border border-slate-400 leading-tight">
                    <tr>
                        <th class="border border-slate-400 p-2">{{ t('q3aVar[0]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('q3aVar[1]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('q3aVar[2]') }}</th>
                    </tr>
                    <tr v-for="row, i in studentInputs.activity3a.activity3aPlan">
                        <td class="border border-slate-400 p-1" v-for="item, j in row">{{ studentInputs.activity3a.activity3aPlan[i][j] }}</td>
                    </tr>
                </table>


                <h3 class="my-1">{{ t('q4') }}</h3>
                <p>
                    {{ studentInputs.activity3a.activity3aConclusion }}
                </p>
                <h3 class="my-1">{{ t('q5') }}</h3>
                <p>
                    {{ studentInputs.activity3a.activity3aSecondary }}
                </p>
            </section>

            <hr />
            </div>
        
            <button @click="printMe" class="mt-8 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white uppercase print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('print') }}</button>
    </div>
</template>

<i18n lang="json">
    {
      "en": {
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
    },
    "et": {
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
    
    const { t } = useI18n({ useScope: 'local' });
    definePageMeta({
        layout: "base",
    });

    const printMe = () => {
        // console.log("printing");
        window.print();
    }
</script>