<template>
    <div class="border-r-2 border-r-sky-400 pr-8">
        <h2>Activity 3b: Mythbusting baserat på sekundära bevis</h2>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Grupp beslut - Vi kommer att motbevisa följande myt:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3b.activity3bMyth"></textarea>


        <h4>I aktivitet 3 förväntas du göra följande:</h4>
        <ul class="leading-tight">
            <li>utveckla en testbar hypotes / forskningsfråga,</li>
            <li>planera ditt enkla experiment som kommer att bekräfta eller motbevisa din hypotes / svara på din forskningsfråga,</li>
            <li>presentera insamlade data i form av tabeller, grafer eller liknande,</li>
            <li>använd dina resultat för att dra en slutsats,</li>
            <li>uppskatta hur rimligt det är att resultat kan motbevisa / ta kål på den valda myten</li>
            <li><i>och slutligen…</i>
                <br />
                göra ett videoinlägg eller PowerPoint-presentation av dina viktigaste resultat för att informera allmänheten (detta steg är relaterat till aktiviteten 4).</li>
        </ul>
        
        <p>
            När du gör detta bör du tänka igenom hur du fördelar arbetet inom din grupp. Ni kan fördela olika roller, till exempel, en gruppledare som organiserar aktiviteterna, en sekreterare som gör anteckningar och kommenterar informationen som hittats, en utredare som gör sökningar, en kritiker som granskar informationens tillförlitlighet.
        </p>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Vår hypotes/forskningsfråga är:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis"></textarea>




        <h3>Plan över aktiviteter</h3>
        <p class="italic mt-2">
            (ange i vilka aktiviteter är ni involverade som ett helt team och i vilka ni ska dela på ansvaret, i det här fallet, skriv gärna ner, vem är ansvarig för vad).
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Skriv din plan här:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bPlan"></textarea>


       

        <h3>Realiability check</h3>
        <p>
            Använd detta <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20"></Icon> verktyg</NuxtLink> för att söka information och bedöma dess tillförlitlighet <br />
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Skriv sammanfattningen av dina resultat här:</label>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
             />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Baserat på bevisen är våra slutsatser om myten följande:</label>
        <textarea class="textarea textarea-bordered w-full text-lg mb-8" rows="7" v-model="studentInputs.activity3b.activity3bConclusion"></textarea>

        <!-- <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Based on your findings, make a statement on whether the selected myth is confirmed or rejected.</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bStatement"></textarea> -->


    </div>
</template>

<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';

    const studentInputs = useStudentRadiation();

</script>