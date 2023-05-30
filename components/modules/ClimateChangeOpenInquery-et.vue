<script setup>
    
    import { useUserPreferences } from '~~/store/useUserPreferences'; 
    import { useStudentClimateOpen } from '~~/store/useStudentClimateOpen.js'; 

    const userPrefs = useUserPreferences();
    const studentClimateOpen = useStudentClimateOpen();

     const myths = ref(
        [
            "Liikide väljasuremine on looduslik protsess.",
            "Liigid suudavad kliimamuutustega kohaneda.",
            "Kliimamuutuste alane teadus ei ole usaldusväärne.",
            "Globaalne soojenemine on kasulik.",
            "Seos CO2 ja temperatuuri tõusu vahel puudub.",
            "Kliimamuutustega seotud meetmed muudavad inimesed vaesemaks.",
            "Maa kliima on alati muutunud ning see jätkab muutumist."
        ]
     );


</script>

<template>
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="answers" target="_blank" class="text-lg font-bold uppercase">Sinu vastused</nuxt-link>
    </section>
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" lang="et" style="hyphens:auto;">
            
            <h1 class="mb-0">Kliimamuutused</h1>
            <h5 class="font-normal uppercase leading-tight">Avatud uurimus</h5>
        
            <h2>
                Tegevus 3:  Müüdimurdmine
                <br />
                (avatud  uurimus)
            </h2>

            <label for="q1" class="block mb-2">
                <b>Hakkame uurima järgmist müüti:</b>
            </label>
            <select id="q1" class="select select-bordered w-full max-w-sm block" v-model="studentClimateOpen.mythName">
                <option disabled selected>Vali müüt</option>
                <option v-for="myth in myths">{{ myth }}</option>
            </select>
            <hr />


<!--             
            <div class="rating">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
            </div>

             -->

            <p>
                Nüüd kitsendage oma müüt <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method." target="_blank" rel="noopener noreferrer">kontrollitavaks hüpoteesiks</a> või uurimisküsimuseks.
            </p>

            <label for="q2" class="block mb-2">
                <b>Meie hüpotees ja/või uurimisküsimus on:</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full" placeholder="abc...✍️" rows="4"></textarea>
            <hr />

            <label for="q3" class="block mb-2">
                <b>Tegevusplaan</b> (palun märkige, milliste tegevustega olete kogu meeskonnana kaasatud ja mille puhul kavatsete töökohustusi jagada, antud juhul pange palun kirja, kes mille eest vastutab):
            </label>
            <textarea id="q3" class="textarea textarea-bordered block w-full" placeholder="abc...✍️" rows="5"></textarea>
            <hr />



            <p>Kasuta järgmist tööriista informatsiooni otsimiseks ning selle usaldusväärsuse hindamiseks</p>

            <p>Kirjuta kokkuvõte uuritud materjalist alljärgnevasse tabelisse.</p>

            <ToolsReliabilityTable :storeToUpdate="studentClimateOpen" />

            <!-- <section class="e-card w-[90vw] -ml-[3vw] sm:w-[90vw] sm:-ml-[3vw] lg:w-[92vw] lg:-ml-[6vw]">
                <div 
                class="grid grid-cols-[1fr_1fr_100px_1fr]">
                    <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Tõendid / peamised järeldused / kokkuvõte hüpoteesist</div>
                    <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Tõendite tüüp ja allikas</div>
                    <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Hinnang usaldusväärsusele</div>
                    <div class="text-sm font-bold leading-none p-2 border-x border-x-slate-300">Kommentaarid</div>
                </div>
                <div v-for="row, i in studentClimateOpen.reliability" 
                class="grid grid-cols-[1fr_1fr_100px_1fr]">
                    <div v-for="cell, j in row" class="border border-slate-300">
                        <div v-if="j === 2" class="flex justify-center items-center h-full">
                            <ToolsReliabilityRating :storeToUpdate="studentClimateOpen" :idx="i" />
                        </div>
                        <textarea v-else 
                        v-model="studentClimateOpen.reliability[i][j]" rows="1" class="textarea block w-full h-full py-1 px-2"></textarea>
                    </div>
                </div>
                <button @click="studentClimateOpen.addReliabilityRow" class="bg-slate-700 text-md text-slate-100 rounded-full px-4 mt-4">LISA RIDA</button>
            </section> -->








 


        </section>
    </div>
</template>