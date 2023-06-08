<template>
    <div class="p-6 md:p-10">
        <div class="prose prose-lg">
            
            
            <h1 class="mb-2">{{ t('title') }}</h1>
            <p class="uppercase my-2">{{ t('subtitle') }}</p>
            <p class="italic mt-2">{{ t('hint') }}</p>
            <button @click="printMe" class="my-4 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white uppercase print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('print') }}</button>


            <section>
                <h4 class="my-1">{{ t('hypothesis') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ studentClimateGuidedMyth1.hypothesis }}
                </p>
                
                <h4 class="my-1">{{ t('q1') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ studentClimateGuidedMyth1.q1 }}
                </p>

                <h4 class="my-1">{{ t('q2') }}</h4>
                <p>
                    {{ studentClimateGuidedMyth1.q2 }}
                </p>
                <h4 class="my-1">{{ t('q3') }}</h4>
                <p>
                    {{ studentClimateGuidedMyth1.q3 }}
                </p>
                <h4 class="my-1">{{ t('q4') }}</h4>
                <p>
                    {{ studentClimateGuidedMyth1.q4 }}
                </p>
                <h4 class="my-1">{{ t('q5') }}</h4>
                <p>
                    {{ studentClimateGuidedMyth1.q5 }}
                </p>
                <h4 class="my-1">{{ t('q6') }}</h4>
                <p>
                    {{ studentClimateGuidedMyth1.q6 }}
                </p>

                <h4 class="my-1">{{ t('reliabilityTitle') }}</h4>
                <table class="border border-slate-400 leading-tight">
                    <tr>
                        <th class="border border-slate-400 p-2">{{ t('reliability[0]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('reliability[1]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('reliability[2]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('reliability[3]') }}</th>
                    </tr>
                    <tr v-for="row, i in studentClimateGuidedMyth1.reliability">
                        <template v-for="item, j in row">
                            <td v-if="j === 2" class="border border-slate-400 p-1" >{{ item == '3' ? '⭐⭐⭐' : item == '2' ? '⭐⭐' : '⭐'  }}</td>
                            <td v-else class="border border-slate-400 p-1" >{{ studentClimateGuidedMyth1.reliability[i][j] }}</td>
                        </template>
                    </tr>
                </table>


                
                <h4 class="my-1">{{ t('fliccTitle') }}</h4>
                <table class="border border-slate-400 leading-tight">
                    <tr>
                        <th class="border border-slate-400 p-2">{{ t('flicc[0]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('flicc[1]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('flicc[2]') }}</th>
                    </tr>
                    <tr v-for="fliccName, i in tm('fliccNames')">
                        <!-- <template v-for="item, j in row"> -->
                            <td class="border border-slate-400 p-1" >{{ rt(fliccName) }}</td>
                            <td v-for="item in studentClimateGuidedMyth1.flicc[i]" class="border border-slate-400 p-1" >{{ item }}</td>
                            <!-- <td v-else class="border border-slate-400 p-1" >{{ studentClimateOpen.flicc[i][j] }}</td> -->
                        <!-- </template> -->
                    </tr>
                </table>
            </section>

            <hr />
            </div>
        
            <button @click="printMe" class="mt-8 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white uppercase print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('print') }}</button>
    </div>
</template>

<i18n lang="json">
    {
      "en": {
        "title": "Climate change module",
        "subtitle": "Answers for open inquery",
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
</i18n>

<script setup>
    import { useStudentClimateGuidedMyth1 } from '~~/store/useStudentClimateGuidedMyth1.js'; 
    const studentClimateGuidedMyth1 = useStudentClimateGuidedMyth1();
    
    const { t, tm, rt } = useI18n({ useScope: 'local' });
    definePageMeta({
        layout: "base",
    });

    const printMe = () => {
        // console.log("printing");
        window.print();
    }
</script>