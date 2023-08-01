<template>
    <div>
        <h3>Tegevus 3b: Müüdimurdmine sekundaarsete allikate uurimise abil</h3>


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3bMyth" class="font-bold block leading-tight mb-2">Rühma otsus: Me kavatseme hakata ümber lükkama või kinnitama järgmist viirustega seotud müüti:</label>
        <textarea id="3bMyth" class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" v-model="studentInputs.activity3b.activity3bMyth"></textarea>

        <hr />

        <h3>Järgneva tegevuse käigus oodatakse, et te:</h3>
        <ul class="leading-tight">
            <li>kitsendate oma valitud müüdi <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">kontrollitava hüpoteesi</a> / vastatava uurimisküsimuse kujule;</li>
            <li>kavandate internetiotsingud, et hüpoteesi kinnitada või siis ümber lükata / vastata püstitatud uurimisküsimusele;</li>
            <li>kogute andmeid ning esitate need tabelite ja/või graafikutena;</li>
            <li>selgitate oma tulemusi kasutades õpitud loodusteaduslikke teadmisi ning sõnastate järeldused;</li>
            <li>jagate omavahel töökoormust ja -ülesandeid rühmas.</li>    
        </ul>
        
        <p class="bg-orange-200">While doing this, you should think carefully about how to share the workload within your group. You could designate everybody to a different role, for example, to a leader who is organizing the activities, to a secretary who is making notes and comments about the information found, to an investigator who is doing searches, to a critic who is scrutinizing the reliability of the information.</p>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3bHypothesis" class="font-bold block">Meie hüpotees / uurimisküsimus on:</label>

        <textarea id="3bHypothesis" class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis"></textarea>


        <hr />


        <h3>Tegevusplaan</h3>
        <p class="mt-2">
            Palun näidake ka ära, milliseid tegevusi teete kõik koos ja milliste puhul on tööülesanded rühmakaaslaste puhul erinevad, viimasel juhul näidake ära ka igaühe vastusala kirjutades nime tegevuse järele sulgudesse.
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3bPlan" class="font-bold block">Kirjutage oma tegevusplaan siia:</label>
        <textarea id="3bPlan" class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bPlan"></textarea>


        <hr />

        <h3>Realiability check</h3>
        <p>
            Please use these tools for searching for information and assessing its reliability.<br />
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Kirjutage lühikokkuvõte oma leitud infost ning hinnang selle usaldusväärsusele siia:</label>

        <div class="e-card w-[90vw] mb-8" style="transform: translateX(-5vw);">
            <ToolsReliabilityTable
                :storeToUpdate="studentInputs"
                :addRow="true" 
            />
        </div>


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3bConcl" class="font-bold block">Tuginedes leitud tõestusmaterjalile on meie järeldused järgmised:</label>
        <textarea id="3bConcl" class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bConclusion"></textarea>



        



        <!-- <section class="e-card w-[90vw] -ml-[3vw] sm:w-[90vw] sm:-ml-[3vw] lg:w-[92vw] lg:-ml-[7vw]">
            <div 
            class="grid grid-cols-[1fr_1fr_80px_1fr]">
                <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Evidence / main conclusions / summary of the information relevant to the hypothesis</div>
                <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Type and source of evidence</div>
                <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Reliability rate</div>
                <div class="text-sm font-bold leading-none p-2 border-x border-x-slate-300">Comments</div>
            </div>
            <div v-for="row, i in studentInputs.activity3b.activity3bReliability" 
            class="grid grid-cols-[1fr_1fr_80px_1fr]">
                <div v-for="cell, j in row"
                ><textarea v-model="studentInputs.activity3b.activity3bReliability[i][j]" rows="1" class="w-full object-fill h-full ring-1 ring-slate-300 p-2 leading-tight  focus:bg-amber-50"></textarea></div>
            </div>
            <button @click="studentInputs.addReliabilityRow" class="bg-slate-700 text-md text-slate-100 rounded-full px-4 mt-4">ADD ROW</button>
        </section> -->



    </div>
</template>

<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();

</script>