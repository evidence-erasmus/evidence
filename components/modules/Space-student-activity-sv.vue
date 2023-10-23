<template>
    <div>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Gruppbeslut: Vi kommer att undersöka följande myt eller frågan:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.myth" placeholder="✍"></textarea>

        <hr />

        <p>
            Begränsa myten/frågan till en testbar hypotes. Tänk på att en hypotes inte bara är en gissning – den måste vara testbart – du kan stödja eller motbevisa den genom din studie.
        </p>
        <p>
            Planera dina fortsatta aktiviteter genom att följa stegen som anges i figur 1. Går det att testa din myt/fråga experimentellt? Ska ni bekräfta/motbevisa den med digital teknik, till exempel datorsimuleringar, eller med hjälp av information från Internet.
        </p>
        
        <!-- <h4>In this activity, you are expected to do the following:</h4>
        <ul class="leading-tight">
            <li>develop a testable hypothesis/ research question,</li>
            <li>plan your simple experiment or search for relevant information that will confirm or falsify your hypothesis/ answer your research question,</li>
            <li>present collected data in the form of tables, graphs, or similar,</li>
            <li>use your findings to draw a conclusion,</li>
            and finally…
            <li>make a video post or PowerPoint presentation of your main findings (this step is related to the activity 4).</li>
        </ul>
        
        <p>
            While doing this, please consider sharing the workload equally within your group. 
        </p> -->





        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Vår hypotes/ forskningsfråga är:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.hypothesis" placeholder="✍"></textarea>


        <hr />
        

        <h3>Plan över aktiviteter</h3>
            
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500" />
        <label for="planOfActivities" class="block mb-2 mt-2">
            <b>Skriv ner vem som är ansvarig för vad:</b>
        </label>
        <textarea id="planOfActivities" class="textarea textarea-bordered block w-full text-lg mb-8" placeholder="✍️" rows="5"
        v-model="studentInputs.planOfActivities"></textarea>

        <hr />


        <!-- <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Define research variables:</label>
        <ToolsDynamicTableFull 
            :tableStructure="variableTable" 
            :storeToUpdate="studentInputs"
            :keyToUpdate="studentInputs.activity3a.activity3aVariables" 
            :newRow="['','','']" 
            :addRow="true" 
        />
        <label class="font-bold block mt-8">Your research results:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="✍"></textarea> -->

        <p>
            Använd <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm  btn-neutral text-white no-underline"><Icon name="mdi:tools" size="20" /> detta verktyg</NuxtLink> för att söka information och bedöma dess tillförlitlighet.
            <br />
            Skriv sammanfattningen av dina resultat här.
        </p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Baserat på de givna bevisen är våra slutsatser:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.conclusions" placeholder="✍"></textarea>


        
    </div>
</template>




<script setup>
    import { useStudentSpace } from '~~/store/useStudentInputSpace.js';

    const studentInputs = useStudentSpace();

    // const variableTable = ref({
    //     header: [
    //         {thead: "Independent variable", tsubhead: "The one that is going to be altered"},
    //         {thead: "Dependent variable", tsubhead: "The one that is going to be measured"},
    //         {thead: "Control variables", tsubhead: "The ones that are going to be kept constant"},
    //     ]
    // });
</script>