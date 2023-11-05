<template>
    <div class="border-l-2 border-l-sky-400 pl-6 pb-8">
        
        <h2>Aktivitet 3a: Mythbusting baserat på experiment</h2>

        <p>Om du tror att din myt kan testas experimentellt, läs följande riktlinjer:</p>
        
        <h4>Det förväntas att du:</h4>
        <ul class="leading-tight">
            <li>Utvecklar en testbar hypotes / forskningsfråga.</li>
            <li>Planerar ett experiment som kommer att bekräfta eller motbevisa din hypotes/ svara på din forskningsfråga.</li>
            <li>Presenterar dina insamlade data i form av tabeller och grafer, och helst videofilma ditt experiment som ett bevis (titta på handledningen)</li>
            <li>Förklarar dina resultat med hjälp av vetenskaplig kunskap.</li>
            <li>Använder dina resultat för att göra en slutsats.</li>
            <li>Delar arbetsbelastningen inom din grupp (t.ex. genom att utse alla till olika roller).</li>
        </ul>
        
        <hr />
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Grupp beslut - Vi kommer att testa följande myt:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        <hr />        


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Vår hypotes är:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>


        
        

        <h3>Plan över aktiviteter</h3>
        
        <section class="e-card mb-8">
            <p class="italic my-0">Tänk noga på hur du kommer att kontrollera alla andra variabler utom den du ska ändra på. Du bör också tänka noga på hur du fördelar arbetsuppgifterna inom din grupp. Ange vilka aktiviteter (1), (2), (3) … ni är involverade i som ett helt team och i vilka ni ska dela upp ansvarsområden, i det här fallet, skriv ner vem som är ansvarig för vad</p>
        </section>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Definiera variabler:</label>


        <ToolsDynamicTableFull 
            :tableStructure="variableTable" 
            :storeToUpdate="studentInputs"
            :keyToUpdate="studentInputs.activity3a.activity3aVariables" 
            :newRow="['','','']" 
            :addRow="true" 
        />


        <label class="font-bold block mt-8">Baserat på experimentet är våra slutsatser:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="✍"></textarea>




        <!-- <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Based on the experiment, our conclusion(s) is/are:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea> -->


    
        <p>Du förväntas nu hitta bevis från sekundära källor för att bekräfta dina egna fynd med hjälp av följande <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20"></Icon> verktyg</NuxtLink>.</p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
             />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Skriv en kort sammanfattning av dina resultat här:</label>
        <p class="italic">
            Bekräftade sekundära data dina resultat? Om inte, vad tror du det beror på?
            <br />
            Gör ett uttalande om den valda myten bekräftas eller förkastas baserat på dina fynd.
        </p>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aSecondary" placeholder="✍"></textarea>
    </div>
</template>




<script setup>
    import { useStudentClimateChangeSv } from '~~/store/useStudentInputClimateChangeSv.js';

    const studentInputs = useStudentClimateChangeSv();

    const variableTable = ref({
        header: [
            {thead: "Oberoende variabel", tsubhead: "(den som kommer att ändras)"},
            {thead: "Beroende variabel", tsubhead: "(den som ska mätas)"},
            {thead: "Kontrollvariabler", tsubhead: "(de som kommer att hållas konstanta)"},
        ]
    });
</script>