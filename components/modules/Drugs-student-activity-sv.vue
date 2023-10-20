<template>
    <div>
         
        <p>
            Ni ska nu snäva till myten till en <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method." target="_blank" rel="noopener noreferrer">testbar hypotes</a> - ett påstående som kan testas eller en fråga som kan besvaras genom er faktakoll. Tänk på att en hypotes inte bara är en gissning – den bör baseras på befintlig kunskap. Den måste också vara testbar, vilket innebär att ni kan stödja eller motbevisa den som ett resultat av er undersökning. Ni bör också tänka på att er hypotes ska testas endast baserat på sekundära bevis (förlita sig på publicerat material från redan utförda experiment). Planera ytterligare aktiviteter efter cirkeln i figur 1 och dela på ansvaret inom din grupp.
        </p>
        <p>
            <b>Så, i den här aktiviteten förväntas ni göra följande:</b>
        </p>
        <ul class="leading-tight">
            <li>
                utveckla en testbar hypotes / forskningsfråga;
            </li>
            <li>
                planera sökning efter relevant information som kommer att motbevisa eller bekräfta hypotesen/ svara på forskningsfrågan;
            </li>
            <li>
                bedöma tillförlitligheten hos de insamlade bevisen;
            </li>
            <li>
                använda era resultat för att dra en slutsats;
            </li>
            <li>
                presentera insamlade data i form av tabeller, grafer eller liknande.
            </li>
        </ul>
        <p>
            När ni gör detta bör ni fördela arbetet inom gruppen. Ni ska ha olika roller, till exempel en ledare som organiserar aktiviteterna, en sekreterare som gör anteckningar över informationen som hittats, en forskare som ansvarar för sökningar, en kritiker som granskar informationens tillförlitlighet, etc.
        </p>    


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Gruppbeslut - Vi kommer att motbevisa (undersöka) följande myt:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.myth" placeholder="✍"></textarea>


        <hr />
        

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Vår hypotes / forskningsfråga är:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.hypothesis" placeholder="✍"></textarea>


        <hr />
        

        <h3>Plan över aktiviteter</h3>
        <p>
            (ange vem är ansvarig för vad)
        </p>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500" />
        <label for="planOfActivities" class="block mb-2 mt-2">
            <b>Skriv planeringen här:</b>
        </label>
        <textarea id="planOfActivities" class="textarea textarea-bordered block w-full text-lg mb-8" placeholder="✍️" rows="5"
        v-model="studentInputs.planOfActivities"></textarea>

        <hr />


        <p>
            Använd detta <NuxtLink to="../tools/reliability-assessment" target="_blank" class=""><Info name="mdi:tools" size="20"></Info> verktyg</NuxtLink> för att söka information och bedöma dess tillförlitlighet
        </p>
        <p>
            Skriv en sammanfattning av dina resultat till följande tabell:
        </p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Baserat på de givna bevisen är våra slutsatser:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.conclusions" placeholder="✍"></textarea>
        
        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Gör ett uttalande om huruvida den valda myten bekräftas eller förkastas baserat på dina resultat:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.decision" placeholder="✍"></textarea>
        
    </div>
</template>




<script setup>
    import { useStudentDrugs } from '~~/store/useStudentInputDrugs.js';

    const studentInputs = useStudentDrugs();
</script>