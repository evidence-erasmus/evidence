<template>
    <div class="border-r-2 border-r-sky-400 pr-8">
        <h2>Tegevus 3b: Müüdimurdmine sekundaarsete allikate uurimise abil</h2>

        <!-- <p>
            In  this activity, you are expected to:
        </p>
        
        <ul class="leading-tight">
            <li>Develop a testable hypothesis/research question.</li>
            <li>Search for relevant information that will confirm or falsify your hypothesis/ answer your research question.</li>
            <li>Present collected data in tables, graphs, or similar.</li>
            <li>Use your findings to draw a conclusion.</li>
            <li><i>And finally…</i>
                <br />Make a video post, PowerPoint presentation, or similar of your main findings to inform the public (this step is related to activity 4).</li>
        </ul> -->

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Rühma otsus: Me kavatseme hakata ümber lükkama või kinnitama järgmist kiirgustega seotud müüti:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3b.activity3bMyth"></textarea>


        <h3>Järgneva tegevuse käigus oodatakse, et te:</h3>
        <ul class="leading-tight">
            <li>kitsendate oma valitud müüdi <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">kontrollitava hüpoteesi</a> / vastatava uurimisküsimuse kujule;</li>
            <li>kavandate internetiotsingud, et hüpoteesi kinnitada või siis ümber lükata/vastata püstitatud uurimisküsimusele;</li>
            <li>kogute andmeid ning esitate need tabelite ja/või graafikutena;</li>
            <li>selgitate oma tulemusi kasutades õpitud loodusteaduslikke teadmisi ning sõnastate järeldused;</li>
            <li>jagate omavahel töökoormust ja -ülesandeid rühmas.</li>    
        </ul>
        
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Meie hüpotees / uurimisküsimus on:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis"></textarea>




        <h3>Tegevusplaan</h3>
        <p class="italic mt-2">
            (Palun näidake ka ära, milliseid tegevusi teete kõik koos ja milliste puhul on tööülesanded rühmakaaslaste puhul erinevad, viimasel juhul näidake ära ka igaühe vastusala kirjutades nime tegevuse järele sulgudesse).
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Kirjutage oma tegevusplaan siia:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bPlan"></textarea>


       

        <h3>Info usaldusväärsus</h3>
        <p>
            Palun kasutage info otsimiseks ning selle usaldusväärsuse hindamiseks järgmisi tööriistu:
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Kirjutage lühikokkuvõte oma leitud infost ning hinnang selle usaldusväärsusele siia:</label>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Tuginedes leitud tõestusmaterjalile on meie järeldused järgmised:</label>
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