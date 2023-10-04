<template>
    <div>
        <h2>Tegevus 3b: Müüdimurdmine sekundaarsete allikate uurimise abil</h2>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3bMyth" class="font-bold block leading-tight mb-2">Rühma otsus: Me kavatseme hakata ümber lükkama või kinnitama järgmist viirustega seotud müüti:</label>
        <!-- <textarea id="3bMyth" class="textarea textarea-bordered block w-full leading-tight" v-model="studentInputs.activity3b.activity3bMyth"></textarea> -->

        <select class="select select-bordered w-full max-w-xl" v-model="studentInputs.activity3b.activity3bMyth">
            <option>Vaktsiinid põhjustavad autismi / tõsiseid kõrvalmõjusid</option>
            <option>Vastsündinu organism ei suuda taluda korraga mitut vaktsiini</option>
            <option>Haiguse läbipõdemise teel omandatud immuunsus on parem kui vaktsineerimisel saadud immuunsus</option>
            <option>Vaktsiinid sisaldavad toksiine (mürgiseid aineid)</option>
            <option>Parem hügieen ning sanitaartingimused on põhjusteks, miks nakkushaigused on maailmas vähenenud, mitte vaktsiinid</option>
            <option>Vaktsiinid võivad nakatada lapse haigusega, mida see püüab ära hoida</option>
            <option>Me ei vaja vaktsiine, sest nakatumise näitajad maailmas on niikuinii madalad</option>
        </select>


        <h3>Järgneva tegevuse käigus oodatakse, et te:</h3>
        <ul class="leading-tight">
            <li>kitsendate oma valitud müüdi <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">kontrollitava hüpoteesi</a> / vastatava uurimisküsimuse kujule;</li>
            <li>kavandate internetiotsingud, et hüpoteesi kinnitada või siis ümber lükata / vastata püstitatud uurimisküsimusele;</li>
            <li>kogute andmeid ning esitate need tabelite ja/või graafikutena;</li>
            <li>selgitate oma tulemusi kasutades õpitud loodusteaduslikke teadmisi ning sõnastate järeldused;</li>
            <li>jagate omavahel töökoormust ja -ülesandeid rühmas.</li>    
        </ul>
        
        <!-- <p class="bg-orange-200">While doing this, you should think carefully about how to share the workload within your group. You could designate everybody to a different role, for example, to a leader who is organizing the activities, to a secretary who is making notes and comments about the information found, to an investigator who is doing searches, to a critic who is scrutinizing the reliability of the information.</p> -->

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-8"></Icon>
        <label for="3bHypothesis" class="font-bold block">Meie hüpotees / uurimisküsimus on:</label>

        <textarea id="3bHypothesis" class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis"></textarea>



        <h3>Tegevusplaan</h3>
        <p class="mt-2">
            Palun näidake ka ära, milliseid tegevusi teete kõik koos ja milliste puhul on tööülesanded rühmakaaslaste puhul erinevad, viimasel juhul näidake ära ka igaühe vastusala kirjutades nime tegevuse järele sulgudesse.
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3bPlan" class="font-bold block">Kirjutage oma tegevusplaan siia:</label>
        <textarea id="3bPlan" class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bPlan"></textarea>


        

        <h3>
            Info usaldusväärsus
        </h3>

        <p>
            Palun kasutage info otsimiseks ning selle usaldusväärsuse hindamiseks <nuxt-link target="_blank" href="../tools/reliability-assessment"
            class="btn btn-accent btn-sm text-white no-underline"><Icon name="mdi:tools" size="18"></Icon> järgmisi tööriistu</nuxt-link>.
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Kirjutage lühikokkuvõte oma leitud infost ning hinnang selle usaldusväärsusele siia:</label>

        <div class="e-card mb-8" >
            <ToolsReliabilityTable
                :storeToUpdate="studentInputs"
                :addRow="true" 
            />
        </div>


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3bConcl" class="font-bold block">Tuginedes leitud tõestusmaterjalile on meie järeldused järgmised:</label>
        <textarea id="3bConcl" class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bConclusion"></textarea>


    </div>
</template>

<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();

</script>