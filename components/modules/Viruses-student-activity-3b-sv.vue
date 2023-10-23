<template>
    <div>
        <h2>Activity 3b: Mythbusting baserat på sekundära bevis</h2>


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Gruppbeslut - vi kommer att motbevisa följande myt:</label>
        
        <textarea class="textarea textarea-bordered text-lg block w-full leading-tight" v-model="studentInputs.activity3b.activity3bMyth"></textarea>

        <hr />

        <h3>Om du tror att din myt kan prövas med hjälp av sekundära bevis, läs följande riktlinjer:</h3>
        <ul class="leading-tight">
            <li>utveckla en <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">testbar hypotes</a> / forskningsfråga;</li>
            <li>planera din sökning efter relevant information som kommer att bekräfta eller motbevisa din hypotes/ svara på din forskningsfråga;</li>
            <li>presentera insamlade data i form av tabeller, grafer eller liknande;</li>
            <li>bedöma tillförlitligheten hos de insamlade bevisen;</li>
            <li>använd dina resultat för att dra en slutsats;</li>    
        </ul>
        
        <p>När du gör detta bör du tänka igenom hur du fördelar arbetet inom din grupp. Ni kan fördela olika roller, till exempel, en gruppledare som organiserar aktiviteterna, en sekreterare som gör anteckningar och kommenterar informationen som hittats, en utredare som gör sökningar, en kritiker som granskar informationens tillförlitlighet.</p>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Vår hypotes / forskningsfråga är:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis"></textarea>


        <hr />


        <h3>Plan över aktiviteter</h3>
        <p class="italic mt-2">
            (ange i vilka aktiviteter är ni involverade som ett helt team och i vilka ni ska dela på ansvaret, i det här fallet, skriv gärna ner, vem är ansvarig för vad).
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Skriv din plan här:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bPlan"></textarea>


        <hr />

        <h3>Reliability check</h3>
        <p>
            Använd det här <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20"></Icon> verktyget</NuxtLink> för att söka information och bedöma dess tillförlitlighet
        </p>

        <div class="e-card mb-8">
                <ToolsReliabilityTable :storeToUpdate="studentInputs" 
                :addRow = "true" 
                key="virus3breliability" />
            </div>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Baserat på de givna bevisen är våra slutsatser:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bConclusion"></textarea>
        
        <hr />
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Gör ett uttalande om huruvida den valda myten bekräftas eller förkastas baserat på den utförda undersökningen:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bStatement"></textarea>


    </div>
</template>

<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();

</script>