<template>
    <div class="border-l-2 border-l-sky-400 pl-6 pb-8">
        
        <h2>Aktivitet 3a: Mythbusting baserat på experiment</h2>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Gruppbeslut - Vi kommer att motbevisa följande myt:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        
        
        <h4>I den här aktiviteten förväntas du att göra följande:</h4>
        <ul class="leading-tight">
            <li>utveckla en testbar hypotes / forskningsfråga,</li>
            <li>planera ditt enkla experiment som kommer att bekräfta eller motbevisa din hypotes / svara på din forskningsfråga,</li>
            <li>presentera insamlade data i form av tabeller, grafer eller liknande,</li>
            <li>använd dina resultat för att dra en slutsats,</li>
            <li>uppskatta hur rimligt det är att resultat kan motbevisa den valda myten</li>
            <li><i>och slutligen…</i>
                <br />
                göra ett videoinlägg eller PowerPoint-presentation av dina viktigaste resultat för att informera allmänheten (detta steg är relaterat till aktiviteten 4).</li>
        </ul>
        
        <p>
            När du gör detta bör du noga tänka igenom hur du fördelar arbetet inom din grupp. Ni ska ha olika roller, t.ex. en ledare som organiserar aktiviteterna, en sekreterare som gör anteckningar och kommenterar informationen som hittas, en forskare som gör datasökningar, en kritiker som granskar tillförlitligheten av information etc.
        </p>



        <!-- hypothesis -->        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Vår hypotes / forskningsfråga är:</b></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="4" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>

        <!-- work plan -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-2"><b>Arbetsplan</b> <i>Ange vilka aktiviteter (1), (2), (3)… ni är involverade i som ett helt team och i vilka ni ska dela upp ansvarsområden, i det här fallet, skriv ner vem som är ansvarig för vad</i></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="5" v-model="studentInputs.activity3a.activity3aPlan" placeholder="✍"></textarea>
        
        
        <!-- independent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-2"><b>Oberoende variabel</b> <i>(den som kommer att ändras)</i></label>
        <input type="text" class="input input-bordered w-full text-lg my-4" rows="1" v-model="studentInputs.activity3a.experimentVariables.independent" placeholder="✍" />
        
        <!-- dependent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-2"><b>Beroende variabel</b> <i>(den som ska mätas)</i></label>
        <input type="text" class="input input-bordered w-full text-lg my-4" rows="1" v-model="studentInputs.activity3a.experimentVariables.dependent" placeholder="✍" />
        
        <!-- control variables -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-4"><b>Kontrollvariabler</b> <i>(de som kommer att hållas konstanta)</i></label>
        <ToolsDynamicTableFull class="e-card"
            :tableStructure = "controlTable" 
            :addRow = "true"
            addRowTitle = "Lägg till variabel"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.experimentVariables.control"
            :deleteRow = "true" 
            cellType = "input"
        />
        
        <!-- results table -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-4"><b>Resultat</b> <i>(presentera data som samlats in under experimentet som en tabell och/eller fritext).</i></label> 
        <ToolsDynamicTableFull class="e-card"
            :tableStructure = "resultsTable" 
            :addRow = "true"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.activity3aResults"
            :deleteRow = "true"
            cellType = "input"
        />


        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block"><b>Faktorer som skulle kunna minska tillförlitligheten av experimentets resultat</b> <i>(beakta möjliga felkällor som kan ha påverkat resultaten av experimentet).</i></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aCredibility" placeholder="✍"></textarea>
        
        

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="font-bold block">Baserat på resultat av experimentet är våra slutsatser:</label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>

    
        <p>Du ska nu leta efter bevis från sekundära källor för att bekräfta dina egna slutsatser med hjälp av följande verktyg.</p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block"><b>Gör ett uttalande</b> om den valda myten ska bekräftas eller förkastas baserat på dina bevis <i>(när du svarar, ta hänsyn till slutsatserna från både experimentet och analys av sekundära källor)</i></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aSummary" placeholder="✍"></textarea>


    </div>
</template>




<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';
    const studentInputs = useStudentRadiation();

    const controlTable = ref({
        header: [
            {thead: "Variabel", tsubhead: ""},
            {thead: "Värdet", tsubhead: ""}
        ]
    });

    const resultsTable = computed(() => {
        const variables = studentInputs.activity3a.experimentVariables;
        let structure = {
            header: [
                {thead: `${variables.independent}`, tsubhead: "Oberoende variabel"},
                {thead: `${variables.dependent}`, tsubhead: "Beroende variabel"},
            ]
        }
        // studentInputs.activity3a.experimentVariables.control.forEach( (variable) => {
        //     structure.header.push({thead: `${variable}`, tsubhead:"Kontrollmuutuja"});
        // } );
        return structure;
    });    
</script>