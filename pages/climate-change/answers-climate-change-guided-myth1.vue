<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        <div class="e-card mb-8 md:fixed md:right-4 md:top-24 md:w-60 print:hidden">
            <p class="italic mt-2">{{ t('print.hint') }}</p>
            <button @click="printMe" class="my-4 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white uppercase"><icon name="material-symbols:print-outline-rounded" /> {{ t('print.print') }}</button>
        </div>

        <div class="prose prose-lg">
            
            
            <h1 class="mb-2">{{ t('inquiry.cc-myth1.title') }}</h1>
            <p class="uppercase my-2">{{ t('inquiry.cc-myth1.subtitle') }}</p>
            <h3 class="mb-8 text-rose-400 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.cc-myth1.myth') }}</h3>
                

            <section>
                <h4 class="my-1">{{ t('inquiry.cc-myth1.hypothesis') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ climateMythOneAnswers.hypothesis }}
                </p>
                
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-1') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ climateMythOneAnswers.q1 }}
                </p>

                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-2') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q2 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-3') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q3 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-4') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q4 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-5') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q5 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-6.q-6') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q6 }}
                </p>
                
                
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-7.q-7') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q7 }}
                </p>
                
                <ToolsReliabilityTable :storeToUpdate="climateMythOneAnswers" :printMode="true"
                class="mb-8" />
                
                
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-8') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q8 }}
                </p>
                

                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-9') }}</h4>
                <ToolsFliccTable :storeToUpdate="climateMythOneAnswers" :printMode="true" />


                
                <!-- <h4 class="my-1">{{ t('fliccTitle') }}</h4>
                <table class="border border-slate-400 leading-tight">
                    <tr>
                        <th class="border border-slate-400 p-2">{{ t('flicc[0]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('flicc[1]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('flicc[2]') }}</th>
                    </tr>
                    <tr v-for="fliccName, i in tm('fliccNames')">
                            <td class="border border-slate-400 p-1" >{{ rt(fliccName) }}</td>
                            <td v-for="item in climateMythOneAnswers.flicc[i]" class="border border-slate-400 p-1" >{{ item }}</td>
                    </tr>
                </table> -->
            </section>
        </div>
    </div>
</template>

<!-- <i18n lang="json">
    {
      "en": {
        "title": "Climate change module",
        "subtitle": "Answers for open inquiry",
        "hint": "You can print this page or save as pdf file from the print window",
        "hypothesis" : "Our hypothesis is:",
        "q1" : "1. What do we mean by “mass extinction”?",
        "q2" : "2. How many mass extinctions do you find happening?",
        "q3" : "3. What were the causes of the mass extinctions?",
        "q4": "4. What were the consequences of the mass extinctions?",
        "q5": "5. Why should we worry about mass extinctions now?",
        "q6": "6. What is the reason for the mass killing of penguins?",
        "reliabilityTitle" : "Reliability of sources:",
        "reliability": ["Evidence / main conclusions / summary of the information relevant to the hypothesis", "Type and source of evidence", "Reliability rate", "Comments"],
        "fliccTitle": "Science denial tactics:",
        "fliccNames" : ["Cherry picking", "Slippery slope", "Impossible expectations", "Over-simplification"],
        "flicc": ["Fallacy", "Selection (yes/no)", "Comments"],
        "print" : "Print - or save as pdf"
    },
    "et": {
        "title": "Kliimamuutuste moodul",
        "subtitle": "Juhitud uurimus, müüt 1",
        "hint": "Saate selle lehe printida või salvestada pdf failina",
        "hypothesis" : "Meie hüpotees:",
        "q1" : "1. Mida me mõtleme 'massilise väljasuremise' all?",
        "q2" : "2. Kui palju massilist väljasuremist teie arvates toimub?",
        "q3" : "3. Millised olid massilise väljasuremise põhjused?",
        "q4": "4. Millised olid massilise väljasuremise tagajärjed?",
        "q5": "5. Miks me peaksime praegu muretsema massilise väljasuremise pärast?",
        "q6": "6. Mis on pingviinide massilise hukkumise põhjus?",
        "reliabilityTitle" : "Tõendite usaldusväärsus:",
        "reliability": ["Tõendid / peamised järeldused / kokkuvõte hüpoteesist", "Tõendite tüüp ja allikas", "Hinnang usaldusväärsusele", "Kommentaarid"],
        "fliccTitle": "Teaduse eitamise taktikad:",
        "flicc": ["Eksikujutelm", "Allikas", "Kommentaarid"],
        "fliccNames" : ["Kirsside noppimine", "Kiirustamine järelduste tegemisel", "Võimatud ootused", "Liigne lihtsustamine"],
        "print" : "Prindi või salvesta pdf"
    },
    "el": {
        "title": "Viruses module",
        "subtitle": "These are your submitted answers",
        "hint": "You can print this page or save as pdf file from the print window in most browsers",
        "hypothesis" : "Meie hüpotees:",
        "q1" : "1. Mida me mõtleme 'massilise väljasuremise' all?",
        "q2" : "2. Kui palju massilist väljasuremist teie arvates toimub?",
        "q3" : "3. Millised olid massilise väljasuremise põhjused?",
        "q4": "4. Millised olid massilise väljasuremise tagajärjed?",
        "q5": "5. Miks me peaksime praegu muretsema massilise väljasuremise pärast?",
        "q6": "6. Mis on pingviinide massilise hukkumise põhjus?",
        "reliabilityTitle" : "Tõendite usaldusväärsus:",
        "reliability": ["Tõendid / peamised järeldused / kokkuvõte hüpoteesist", "Tõendite tüüp ja allikas", "Hinnang usaldusväärsusele", "Kommentaarid"],
        "fliccTitle": "Teaduse eitamise taktikad:",
        "fliccNames" : ["Cherry picking", "Slippery slope", "Impossible expectations", "Oversimplification"],
        "flicc": ["Eksikujutelm", "Allikas", "Kommentaarid"],
        "print" : "Print - or save as pdf"
    }
    }
</i18n> -->

<script setup>
    import { useStudentClimateGuidedMyth1 } from '~~/store/useStudentClimateGuidedMyth1.js'; 
    const climateMythOneAnswers = useStudentClimateGuidedMyth1();
    
    const { locale, t, tm, rt } = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });

    const printMe = () => {
        // console.log("printing");
        window.print();
    }
</script>