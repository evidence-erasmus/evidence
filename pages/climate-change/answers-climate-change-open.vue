<template>
    <div class="p-6 md:p-10">
        <div class="prose prose-lg">
            <h1 class="mb-2">{{ t('title') }}</h1>
            <p class="uppercase my-2">{{ t('subtitle') }}</p>
            <p class="italic mt-2 print:hidden">{{ t('hint') }}</p>
            <button @click="printMe" class="my-4 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white uppercase print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('print') }}</button>


            <section>
                <h4 class="my-1">{{ t('q1') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ studentClimateOpen.mythName }}
                </p>

                <h4 class="my-1">{{ t('q2') }}</h4>
                <p>
                    {{ studentClimateOpen.q2 }}
                </p>
                <h4 class="my-1">{{ t('q3') }}</h4>
                <p>
                    {{ studentClimateOpen.q3 }}
                </p>

                <h4 class="my-1">{{ t('reliabilityTitle') }}</h4>
                <table class="border border-slate-400 leading-tight">
                    <tr>
                        <th class="border border-slate-400 p-2">{{ t('reliability[0]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('reliability[1]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('reliability[2]') }}</th>
                        <th class="border border-slate-400 p-2">{{ t('reliability[3]') }}</th>
                    </tr>
                    <tr v-for="row, i in studentClimateOpen.reliability">
                        <template v-for="item, j in row">
                            <td v-if="j === 2" class="border border-slate-400 p-1" >{{ item == '3' ? '⭐⭐⭐' : item == '2' ? '⭐⭐' : '⭐'  }}</td>
                            <td v-else class="border border-slate-400 p-1" >{{ studentClimateOpen.reliability[i][j] }}</td>
                        </template>
                    </tr>
                </table>


                <h4 class="my-1">{{ t('q4') }}</h4>
                <p>
                    {{ studentClimateOpen.q4 }}
                </p>
                
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
                            <td v-for="item in studentClimateOpen.flicc[i]" class="border border-slate-400 p-1" >{{ item }}</td>
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
        "subtitle": "Answers for open inquiry",
        "hint": "You can print this page or save as pdf file from the print window",
        "q1" : "1. We are going to bust the following myth:",
        "q2" : "2. Our hypothesis / research question is:",
        "q3" : "3. Plan of activities:",
        "reliabilityTitle" : "Reliability of sources:",
        "reliability": ["Evidence / main conclusions / summary of the information relevant to the hypothesis", "Type and source of evidenceType and source of evidence", "Reliability rate", "Comments"],
        "q4": "Based on the given evidence, our conclusions concerning the myth are:",
        "fliccTitle": "Science denial tactics:",
        "fliccNames" : ["Cherry picking", "Slippery slope", "Impossible expectations", "Over-simplification"],
        "flicc": ["Fallacy", "Selection(yes/no)", "Comments"],
        "print" : "Print - or save as pdf"
    },
    "et": {
        "title": "Kliimamuutuste moodul",
        "subtitle": "Avatud uurimuse vastused",
        "hint": "Saate selle lehe printida või salvestada pdf failina",
        "q1" : "1. Kavatseme murda järgmise müüdi:",
        "q2" : "2. Meie hüpotees ja/või uurimisküsimus on:",
        "q3" : "3. Tegevusplaan:",
        "reliabilityTitle" : "Tõendite usaldusväärsus:",
        "reliability": ["Tõendid / peamised järeldused / kokkuvõte hüpoteesist", "Tõendite tüüp ja allikas", "Hinnang usaldusväärsusele", "Kommentaarid"],
        "q4": "Kogutud tõenditest lähtudes on meie järeldused järgmised:",
        "fliccTitle": "Teaduse eitamise taktikad:",
        "flicc": ["Eksikujutelm", "Allikas", "Kommentaarid"],
        "fliccNames" : ["Kirsside noppimine", "Kiirustamine järelduste tegemisel", "Võimatud ootused", "Liigne lihtsustamine"],
        "print" : "Prindi või salvesta pdf"
    },
    "el": {
        "title": "Viruses module",
        "subtitle": "These are your submitted answers",
        "hint": "You can print this page or save as pdf file from the print window in most browsers",
        "q1" : "1. Kavatseme murda järgmise müüdi:",
        "q2" : "2. Meie hüpotees ja/või uurimisküsimus on:",
        "q3" : "3. Tegevusplaan:",
        "reliabilityTitle" : "Tõendite usaldusväärsus:",
        "reliability": ["Tõendid / peamised järeldused / kokkuvõte hüpoteesist", "Tõendite tüüp ja allikas", "Hinnang usaldusväärsusele", "Kommentaarid"],
        "q4": "Kogutud tõenditest lähtudes on meie järeldused järgmised:",
        "fliccTitle": "Teaduse eitamise taktikad:",
        "fliccNames" : ["Cherry picking", "Slippery slope", "Impossible expectations", "Oversimplification"],
        "flicc": ["Eksikujutelm", "Allikas", "Kommentaarid"],
        "print" : "Print - or save as pdf"
    }
    }
</i18n>

<script setup>
    import { useStudentClimateOpen } from '~~/store/useStudentClimateOpen.js'; 
    const studentClimateOpen = useStudentClimateOpen();
    
    const { t, tm, rt } = useI18n({ useScope: 'local' });
    definePageMeta({
        layout: "base",
    });

    const printMe = () => {
        // console.log("printing");
        window.print();
    }
</script>