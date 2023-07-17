<script setup>
    
    import { useStudentClimateOpen } from '~~/store/useStudentClimateOpen.js'; 
    const studentClimateOpen = useStudentClimateOpen();

    const { t, tm, rt } = useI18n({
        useScope: 'local'
    });

    // const myths = ref(
    //     [
    //         "Liikide väljasuremine on looduslik protsess.",
    //         "Liigid suudavad kliimamuutustega kohaneda.",
    //         "Kliimamuutuste alane teadus ei ole usaldusväärne.",
    //         "Globaalne soojenemine on kasulik.",
    //         "Seos CO₂ ja temperatuuri tõusu vahel puudub.",
    //         "Kliimamuutustega seotud meetmed muudavad inimesed vaesemaks.",
    //         "Maa kliima on alati muutunud ning see jätkab muutumist."
    //     ]
    // );
</script>

<i18n lang="json">
    {
        "en": {
            "back": "Tagasi",
            "title": "Kliimamuutused",
            "subtitle": "Avatud uurimus",
            "choose": "Vali müüt",
            "q1-title": "Hakkame uurima järgmist müüti:",
            "myths": [
                "Liikide väljasuremine on looduslik protsess.",
                "Liigid suudavad kliimamuutustega kohaneda.",
                "Kliimamuutuste alane teadus ei ole usaldusväärne.",
                "Globaalne soojenemine on kasulik.",
                "Seos CO₂ ja temperatuuri tõusu vahel puudub.",
                "Kliimamuutustega seotud meetmed muudavad inimesed vaesemaks.",
                "Maa kliima on alati muutunud ning see jätkab muutumist."
            ],
            "q2-txt": "Nüüd kitsendage oma müüt {q2Link} hüpoteesiks või uurimisküsimuseks.",
            "q2-link": "kontrollitavaks hüpoteesiks",
            "q2-title": "2. Meie hüpotees ja/või uurimisküsimus on:",
            "q2-txt2": "Tegevusplaan (palun märkige, milliste tegevustega olete kogu meeskonnana kaasatud ja mille puhul kavatsete töökohustusi jagada, antud juhul pange palun kirja, kes mille eest vastutab):",
            "q3-txt": "Kasuta järgmist tööriista informatsiooni otsimiseks ning selle usaldusväärsuse hindamiseks",
            "q3-title": "3. Kirjuta kokkuvõte uuritud materjalist alljärgnevasse tabelisse.",
            "q4-title": "4. Kogutud tõenditest lähtudes on meie järeldused järgmised:",
            "q5-title": "5. Tuginedes kogutud andmetele, milliseid teaduse eitamise taktikaid tuvastasite loetud tekstides?"
        },
        "et": {
            "back": "Tagasi",
            "title": "Kliimamuutused",
            "subtitle": "Avatud uurimus",
            "choose": "Vali müüt",
            "q1-title": "Hakkame uurima järgmist müütiZZZ:",
            "myths": [
                
                "Liikide väljasuremine on looduslik protsess.",
                "Liigid suudavad kliimamuutustega kohaneda.",
                "Kliimamuutuste alane teadus ei ole usaldusväärne.",
                "Globaalne soojenemine on kasulik.",
                "Seos CO₂ ja temperatuuri tõusu vahel puudub.",
                "Kliimamuutustega seotud meetmed muudavad inimesed vaesemaks.",
                "Maa kliima on alati muutunud ning see jätkab muutumist."
            ],
            "q2-txt": "Nüüd kitsendage oma müüt {q2Link} või uurimisküsimuseks.",
            "q2-link": "kontrollitavaks hüpoteesiks",
            "q2-title": "2. Meie hüpotees ja/või uurimisküsimus on:",
            "q2-txt2": "Tegevusplaan (palun märkige, milliste tegevustega olete kogu meeskonnana kaasatud ja mille puhul kavatsete töökohustusi jagada, antud juhul pange palun kirja, kes mille eest vastutab):",
            "q3-txt": "Kasuta järgmist tööriista informatsiooni otsimiseks ning selle usaldusväärsuse hindamiseks",
            "q3-title": "3. Kirjuta kokkuvõte uuritud materjalist alljärgnevasse tabelisse.",
            "q4-title": "4. Kogutud tõenditest lähtudes on meie järeldused järgmised:",
            "q5-title": "5. Tuginedes kogutud andmetele, milliseid teaduse eitamise taktikaid tuvastasite loetud tekstides?"
        },
        "el": {
            "back": "Tagasi"
        }
    }
</i18n>


<template>
    
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" />
        <nuxt-link href="../../answers-climate-change-open" target="_blank" class="text-lg font-bold uppercase">Sinu vastused</nuxt-link>
    </section>
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">

        <h1>Here we are!!!</h1>
        
        <section class="e-article print:not-prose" lang="et" style="hyphens:auto;">
            
            <NuxtLink to="../../kliimamuutused/opilane#section-4" 
                style="transform: translateY(-4rem); position:absolute;">
                <span class="btn btn-outline btn-neutral btn-sm leading-none">
                    <Icon name="material-symbols:arrow-back-rounded" /><span>{{t('back')}}</span>
                </span>
            </NuxtLink>

            <h1 class="mb-0">{{ t('title') }}</h1>
            <h5 class="font-normal uppercase leading-tight mb-10">{{ t('subtitle') }}</h5>
        

            <label for="q1" class="block mb-2">
                <b>{{ t('q1-title') }}</b>
            </label>
            
            <select id="q1" class="select select-bordered w-full max-w-sm block" v-model="studentClimateOpen.mythName">
                <option disabled selected>{{ t('choose') }}</option>
                <option v-for="myth in tm('myths')">{{ rt(myth) }}</option>
            </select>
            <hr />

            <i18n-t keypath="q2-txt" tag="p">
                <template #q2Link>
                    <a href='https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method.' target='_blank' rel='noopener noreferrer'>{{ t('q2-link') }}</a>
                </template>
            </i18n-t>

            <!-- <p>
                {{ t('q2-txt') }}
            </p> -->

            <label for="q2" class="block mb-2">
                <b>{{ t('q2-title') }}</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full" placeholder="abc...✍️" rows="4"
            v-model="studentClimateOpen.q2"></textarea>
            <hr />

            <label for="q3" class="block mb-2">
                {{t('q3-title')}}
            </label>
            <textarea id="q3" class="textarea textarea-bordered block w-full" placeholder="abc...✍️" rows="5"
            v-model="studentClimateOpen.q3"></textarea>
            <hr />



            <p>Kasuta järgmist tööriista informatsiooni otsimiseks ning selle usaldusväärsuse hindamiseks</p>

            <p>
                <b>3. Kirjuta kokkuvõte uuritud materjalist alljärgnevasse tabelisse.</b>
            </p>

            <ToolsReliabilityTable :storeToUpdate="studentClimateOpen" />
            <hr />
            


            <label for="q4" class="block mb-2">
                <b>4. Kogutud tõenditest lähtudes on meie järeldused järgmised:</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateOpen.q4"></textarea>
            <hr />


            <p>
                <b>5. Tuginedes kogutud andmetele, milliseid teaduse eitamise taktikaid tuvastasite loetud tekstides?</b>
            </p>

            <ToolsFliccTable :storeToUpdate="studentClimateOpen" />


        </section>
    </div>
</template>