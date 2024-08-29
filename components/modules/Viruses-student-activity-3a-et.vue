<template>
    <div>
        
        <h2>Tegevus 3a: Müüdimurdmine eksperimendi läbiviimise abil</h2>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500"></Icon>
        <label for="3aMyth" class="font-bold block mb-2 leading-tight">Rühma otsus: Me kavatseme hakata ümber lükkama või kinnitama järgmist viirustega seotud müüti:</label>
        
        <select class="select select-bordered w-full max-w-xl" v-model="studentInputs.activity3a.activity3aMyth">
            <option>Vaktsiinid põhjustavad autismi / tõsiseid kõrvalmõjusid</option>
            <option>Vastsündinu organism ei suuda taluda korraga mitut vaktsiini</option>
            <option>Haiguse läbipõdemise teel omandatud immuunsus on parem kui vaktsineerimisel saadud immuunsus</option>
            <option>Vaktsiinid sisaldavad toksiine (mürgiseid aineid)</option>
            <option>Parem hügieen ning sanitaartingimused on põhjusteks, miks nakkushaigused on maailmas vähenenud, mitte vaktsiinid</option>
            <option>Vaktsiinid võivad nakatada lapse haigusega, mida see püüab ära hoida</option>
            <option>Me ei vaja vaktsiine, sest nakatumise näitajad maailmas on niikuinii madalad</option>
            <option>Seep on teatud viiruste nagu näiteks SARS-CoV-2 (põhjustab COVID-19) tapmiseks sama hea kui etüülalkohol</option>
            <option>Maskidest pole mingit kasu ülemiste hingamisteede viirushaiguste (nagu näiteks COVID-19) ärahoidmisel</option>
            <option>Maski kandmine põhjustab organismis hüpoksiat (hapnikuvaegust) / Maski kandmine põhjustab organismi süsihappegaasimürgistust</option>
        </select>

        <!-- <textarea id="3aMyth" class="textarea textarea-bordered block w-full" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea> -->

        
        <h4>Järgneva tegevuse käigus oodatakse, et te:</h4>
        <ul>
            <li>
                kitsendate oma valitud müüdi <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">kontrollitava hüpoteesi</a> / vastatava uurimisküsimuse kujule;
            </li>
            <li>
                kavandate eksperimendi, et hüpoteesi kinnitada või siis ümber lükata / vastata püstitatud uurimisküsimusele;
            </li>
            <li>
                kogute andmeid ning esitate need tabelite ja / või graafikutena, ning näiteks salvestate oma eksperimendi osana tõestusmaterjalist; 
                
                <a href="https://www.youtube.com/watch?v=_l8LgLhjLvc&list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" class="e-btn-outline no-underline"
                target="_blank" rel="noopener noreferrer"><Icon name="material-symbols:youtube-tv-outline" size="24" /> Vaata õpivideot</a>
            </li>
            <li>
                selgitate oma tulemusi kasutades õpitud loodusteaduslikke teadmisi ning sõnastate järeldused;
            </li>
            <li>
                jagate omavahel töökoormust ja -ülesandeid rühmas.
            </li>
        </ul>
        
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500"></Icon>
        <label for="3aHypothesis" class="font-bold block">Meie hüpotees / uurimisküsimus on:</label>
        <textarea id="3aHypothesis" class="textarea textarea-bordered block w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>

        <hr />
        
        <h3>Tegevusplaan</h3>
        
        <section class="e-card mb-8">
            <p class="italic my-0">Mõelge hoolikalt, kuidas kontrollida kõiki muutujaid v.a ühte, millega hakkate manipuleerima; palun näidake ka ära, milliseid tegevusi teete kõik koos ja milliste puhul on tööülesanded rühmakaaslaste puhul erinevad, viimasel juhul näidake ära ka igaühe vastutusala kirjutades nime tegevuse järele sulgudesse</p>
        </section>






        <h4>Muutujate defineerimine:</h4>

        <!-- independent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Sõltumatu muutuja</b> (see, mida muudetakse):</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="1" v-model="studentInputs.activity3a.experimentVariables.independent" placeholder="✍"></textarea>
        
        <!-- dependent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Sõltuv muutuja</b> (see mida sekkumise tulemusena mõõdetakse):</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="1" v-model="studentInputs.activity3a.experimentVariables.dependent" placeholder="✍"></textarea>
        
        <!-- control variables -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Kontrollmuutujad</b> (need muutujad, mida püütakse hoida katse käigus püsivana):</label>

        <ToolsDynamicTableFull class="e-card mb-8"
            :tableStructure = "controlTable" 
            :addRow = "true"
            addRowTitle = "Lisa muutuja"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.experimentVariables.control"
            :deleteRow = "true"
        />
        


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Tulemuste tabel</b></label> 
        <ToolsDynamicTableFull class="e-card mb-8"
            :tableStructure = "resultsTable" 
            :addRow = "true"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.activity3aResults"
            :deleteRow = "true"
        />




        <hr />
    
        <p>
            Palun kasutage info otsimiseks ning selle usaldusväärsuse hindamiseks <NuxtLink target="_blank" href="../tools/reliability-assessment"
            class="e-btn-outline  no-underline"><Icon name="mdi:tools" size="18"></Icon> järgmisi tööriistu</NuxtLink>.
        </p>
        
        
        <p><b>Kirjutage lühikokkuvõte leitud infost ning hinnang selle usaldusväärsusele siia:</b></p>

        <UiFullWidth>
            <div class="e-card mb-8">
                <ToolsReliabilityTable :storeToUpdate="studentInputs" key="activity3a.reliability" :addRow="true"  />
            </div>
        </UiFullWidth>


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500"></Icon>
        <label for="3aConcl" class="font-bold block">Tuginedes leitud tõestusmaterjalile on meie järeldused müüdi paikapidavuse kohta järgmised:</label>
        <textarea id="3aConcl" class="textarea textarea-bordered block w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>

    </div>
</template>


<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();
    const {tm} = useI18n({scope:"global"});

    
    const controlTable = ref({
        header: [
            {thead: "Muutuja", tsubhead: ""},
            {thead: "Väärtus", tsubhead: ""}
        ]
    });
    
    const resultsTable = computed(() => {
        const variables = studentInputs.activity3a.experimentVariables;
        let structure = {
            header: [
                {thead: `${variables.independent}`, tsubhead: "Sõltumatu muutuja"},
                {thead: `${variables.dependent}`, tsubhead: "Sõltuv muutuja"},
            ]
        }
        return structure;
    });

</script>