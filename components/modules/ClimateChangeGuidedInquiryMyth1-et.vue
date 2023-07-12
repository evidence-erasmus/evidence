<script setup>
    
    import { useStudentClimateGuidedMyth1 } from '~~/store/useStudentClimateGuidedMyth1.js'; 

    const studentClimateGuidedMyth1 = useStudentClimateGuidedMyth1();
</script>

<template>
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="../../answers-climate-change-guided-myth1/" target="_blank" class="text-lg font-bold uppercase">Sinu vastused</nuxt-link>
    </section>
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" lang="et" style="hyphens:auto;">
            
            <NuxtLink to="../../student" style="transform: translateY(-4rem); position:absolute;">
                <Icon name="material-symbols:arrow-back-rounded" /> Tagasi
            </NuxtLink>

            <h1 class="mb-0">Kliimamuutused</h1>
            <h5 class="font-normal uppercase leading-tight">Juhitud uurimus, müüt 1</h5>
        
            <h2>
                Tegevus 3: Müüdimurdmine
            </h2>

            <h3>
                Sinu rühm hakkab uurima müüti nr 1: Liikide väljasuremine on looduslik protsess. Massiline liikide väljasuremine on alati toimunud.
            </h3>

            

            <label for="q1" class="block mb-2">
                <b>Püstitage selle kohta oma hüpotees:</b>
            </label>
            <textarea id="q1" class="textarea textarea-bordered block w-full" placeholder="abc...✍️" rows="4"
            v-model="studentClimateGuidedMyth1.hypothesis"></textarea>
            <hr />

            <p>
                Teile antakse müüdi nr. 1 põhiargument ja küsimus, millele peate vastama etteantud allikate abil.
            </p>
            
            <UiCardInfo theme="sky-500">
                <h4 class="leading-tight my-2">Müüdi 1 põhiargument: Liikide massiline väljasuremine on loomulik protsess.</h4>
            </UiCardInfo>
            
            <p>
                <b>Uurimisküsimus:</b> Kas liikide massiline väljasuremine on loomulik protsess?
            </p>

            <p>
                Uurige <a href="http://mde-didaktiki.biol.uoa.gr/mde7/plexida/ordovician.html" target="_blank" rel="noopener noreferrer">allikat 1.1</a> ja <a href="https://www.youtube.com/watch?v=nho73BtDQtE" target="_blank" rel="noopener noreferrer">vaadake videot</a> ning vastake järgnevatele küsimustele.
            </p>

            <label for="q2" class="block mb-2">
                <b>1. Mida me mõtleme "massilise väljasuremise" all?</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q1"></textarea>
            <hr />
            
            <label for="q3" class="block mb-2">
                <b>2. Kui palju massilist väljasuremist teie arvates toimub?</b>
            </label>
            <textarea id="q3" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q2"></textarea>
            <hr />
            
            <label for="q4" class="block mb-2">
                <b>3. Millised olid massilise väljasuremise põhjused?</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q3"></textarea>
            <hr />
            
            <label for="q5" class="block mb-2">
                <b>4. Millised olid massilise väljasuremise tagajärjed?</b>
            </label>
            <textarea id="q5" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q5"></textarea>
            <hr />
            
            <label for="q6" class="block mb-2">
                <b>5. Miks me peaksime praegu muretsema massilise väljasuremise pärast?</b>
            </label>
            <textarea id="q6" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q6"></textarea>
            <hr />
            
            
            <p>
                Uurige <a href="https://docs.google.com/document/d/e/2PACX-1vTxM7SnO9h9ZC8wxVMEVwU8Ha2_AKh99vbYcBO-g8BxJy9w5oFeb5lUoxUbvTQnq35mtT9Fi7bCSf67/pub" target="_blank" rel="noopener noreferrer">allikat 1.2</a> ning vastake järgmisele küsimusele.
            </p>

            <label for="q7" class="block mb-2">
                <b>6. Mis on pingviinide massilise hukkumise põhjus?</b>
            </label>
            <textarea id="q7" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q7"></textarea>
            <hr />
            


            <p>Kasuta järgmist tööriista informatsiooni otsimiseks ning selle usaldusväärsuse hindamiseks</p>

            <p>
                <b>7. Kirjuta kokkuvõte uuritud materjalist alljärgnevasse tabelisse.</b>
            </p>

            <ToolsReliabilityTable :storeToUpdate="studentClimateGuidedMyth1" />
            <hr />
            


            


            <p>
                <b>8. Tuginedes kogutud andmetele, milliseid teaduse eitamise taktikaid tuvastasite loetud tekstides?</b>
            </p>

            <ModulesFliccTable :storeToUpdate="studentClimateGuidedMyth1" />
            




 


        </section>
    </div>
</template>