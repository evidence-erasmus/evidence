<template>
    <div>
        
        <h2>Aktivitet 3a: Mythbusting baserat på experiment</h2>

        
        
        <!-- <div contenteditable="true" class="ring-slate-600 ring-1 p-2 rounded" ref="studentInput3a">
            {{ studentInputs.activity3a }}
        </div> -->

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Grupp beslut: Vi kommer att motbevisa följande myt:</label>
        
        <textarea class="textarea textarea-bordered text-lg block w-full" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        <hr />

        

        <p><b>Om du tror att din myt kan testas experimentellt, läs följande riktlinjer:</b></p>
        
        <h4>Du förväntas att:</h4>
        <ul class="leading-tight">
            <li>utveckla en <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">testbar hypotes</a> / forskningsfråga;</li>
            <li>planera ett experiment som kommer att bekräfta eller förfalska din hypotes/ svara på din forskningsfråga;</li>
            <li>presentera dina insamlade data i form av tabeller och grafer, och helst videofilma ditt experiment som ett bevis 
                <br />
                (titta på <a href="https://www.youtube.com/watch?v=_l8LgLhjLvc&list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" class="btn btn-accent btn-sm text-white no-underline" target="_blank" rel="noopener noreferrer"><Icon name="material-symbols:youtube-tv-outline" size="20" /> handledning</a> );
            </li>
            <li>förklara dina resultat på vetenskapliga grunder;</li>
            <li>använda dina resultat för att dra en slutsats;</li>
            <li>uppskatta hur rimligt det är att resultat kan motbevisa/ ta kål på den valda myten;</li>
            <li>fördela arbetet inom din grupp (t.ex. genom att utse alla till olika roller - gruppledare, sekreterare, forskare).</li>
        </ul>
        
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Vår hypotes/forskningsfråga är:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full" rows="7" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>


        <hr />
        
        

        <h3>Plan över aktiviteter</h3>
        
        <section class="e-card mb-8">
            <p class="italic my-0">Tänk noga på hur du kommer att kontrollera alla andra variabler utom den du ska ändra på. Du bör också tänka noga på hur du fördelar arbetsuppgifterna inom din grupp. Ange vilka aktiviteter (1), (2), (3) … ni är involverade i som ett helt team och i vilka ni ska dela upp ansvarsområden, i det här fallet, skriv ner vem som är ansvarig för vad</p>
        </section>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Definiera variabler:</label>

        <!-- <section>
            <div class="grid grid-cols-3 gap-2">
                <p class="text-sm font-bold">Independent variable</p>
                <p class="text-sm font-bold">Dependent variable</p>
                <p class="text-sm font-bold">Control variables</p>
            </div>
            <div v-for="row, i in studentInputs.activity3a.activity3aPlan" class="grid grid-cols-3 gap-2">
                <div v-for="variable, j in row"
                ><input v-model="studentInputs.activity3a.activity3aPlan[i][j]" class="w-full ring-1 ring-slate-300 px-1 rounded text-ellipsis overflow-hidden focus:bg-amber-50" placeholder="abc...✍" /></div>
            </div>

            <button @click="studentInputs.addVariableRow" class="bg-slate-700 text-md text-slate-100 rounded-full px-4 mt-4">ADD VARIABLES ROW</button>
        </section> -->

        <ToolsDynamicTableFull 
            :tableStructure="variableTable" 
            :storeToUpdate="studentInputs"
            :keyToUpdate="studentInputs.activity3a.activity3aVariables" 
            :newRow="['','','']" 
            :addRow="true" 
        />

        <label class="font-bold block mt-8">Dina resultat:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="✍"></textarea>


        <hr />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Baserat på experimentet är våra slutsatser:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>


        <hr />

    
        <p>Du förväntas nu hitta bevis från sekundära källor för att bekräfta dina egna fynd med hjälp av följande <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20"></Icon> verktyg</NuxtLink>.</p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Skriv en kort sammanfattning av dina resultat här:</label>
        <p class="italic">
            Bekräftade sekundära data dina resultat? Om inte, vad tror du det beror på?<br />
            Gör ett uttalande om den valda myten bekräftas eller förkastas baserat på dina fynd.
        </p>
        <textarea class="textarea textarea-bordered text-lg block w-full" rows="7" v-model="studentInputs.activity3a.activity3aSecondary" placeholder="✍"></textarea>

    </div>
</template>


<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';

    const studentInputs = useStudentInputStore();

    const variableTable = ref({
        header: [
            {thead: "Oberoende variabel", tsubhead: "(den som kommer att ändras)"},
            {thead: "Beroende variabel", tsubhead: "(den som ska mätas)"},
            {thead: "Kontrollvariabler", tsubhead: "(de som kommer att hållas konstanta)"},
        ]
    });

</script>