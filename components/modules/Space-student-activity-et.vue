<template>
    <div>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Rühma otsus: Meie uurime järgmist müüti või probleemi:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.myth" placeholder="✍"></textarea>

        <hr />

        <p>
            Teid kutsutakse nüüd kitsendama müüti/probleemi kontrollitavaks hüpoteesiks – väiteks, mida saab testida või küsimuseks, millele saate oma uurimise kaudu vastuse leida.
        </p>
        <p>
            Planeerige oma edasised tegevused järgides joonisel 1 toodud samme. Peaksite mõtlema, kas teie müüti/probleemi saab katseliselt testida, kinnitada/ümber lükata kasutades mobiiliäppe, arvutisimulatsioone või sekundaarsete allikate uurimise abil (varemavaldatud info, YouTube'i videod vm). Nendest allikatest võiksite kasutada rohkem kui ühte, rakendades nn triangulatsiooni põhimõtet – suurendades leitud info paikapidavust erinevate allikate võrdlemise kaudu.
        </p>
        
        <h4>Järgneva tegevuse käigus oodatakse, et te:</h4>
        <ul class="leading-tight">
            <li>kitsendate oma valitud müüdi <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">kontrollitava hüpoteesi</a> / vastatava uurimisküsimuse kujule;</li>
            <li>kogute andmeid ning esitate need tabelite ja/või graafikutena, ning näiteks salvestate oma eksperimendi osana tõestusmaterjalist (Vt <a href="https://www.youtube.com/watch?v=_l8LgLhjLvc&list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" target="_blank" rel="noopener noreferrer">sellekohast õpivideot</a>);</li>
            <li>selgitate oma tulemusi kasutades õpitud loodusteaduslikke teadmisi ning sõnastate järeldused;</li>
            <li>jagate omavahel töökoormust ja -ülesandeid rühmas.</li>
        </ul>
        
        

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Meie hüpotees / uurimisküsimus on:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.hypothesis" placeholder="✍"></textarea>


        <hr />
        

        <h3>Tegevusplaan</h3>
        <p>
            (Palun näidake ka ära, milliseid tegevusi teete kõik koos ja milliste puhul on tööülesanded rühmakaaslaste puhul erinevad, viimasel juhul näidake ära  igaühe vastutusala kirjutades nime tegevuse järele sulgudesse).
        </p>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500" />
        <label for="planOfActivities" class="block mb-2 mt-2">
            <b>Kirjuta oma plaan siia:</b>
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

        <p>Palun kasutage info otsimiseks ning selle usaldusväärsuse hindamiseks <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-neutral text-white no-underline"><Icon name="mdi:tools" size="20" />järgmisi tööriistu</NuxtLink></p>
        
        <!-- <label class="font-bold">Kirjutage lühikokkuvõte oma leitud infost ning hinnang selle usaldusväärsusele siia:</label> -->
        
        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Leitud tõendite põhjal on meie järeldus(ed) müüdi paikapidavuse kohta järgmised:</label>
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