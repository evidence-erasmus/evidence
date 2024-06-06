<template>
    <!-- <UiYourAnswersButton :url="userPrefs.learnPathViruses === 0 ? 'answers/experiment' : 'answers/secondary-sources'" /> -->
    <!-- <UiYourAnswersButton url="answers/experiment" /> -->

    <div class="border-l-2 border-l-sky-400 pl-6 pb-8">
        
        <h2> Tegevus 3a: Müüdimurdmine eksperimendi läbiviimise abil</h2>

        <Icon name="material-symbols:edit-square" size="40" class="text-blue-500"></Icon>
        <label class="font-bold block leading-tight my-2">Rühma otsus − me kavatseme hakata ümber lükkama või kinnitama järgmist kiirgustega seotud müüti:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg my-4" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        

        
        
        <h4>
            Järgneva tegevuse käigus oodatakse, et te:
        </h4>
        <ul class="leading-tight">
            <li>
                kitsendate oma valitud müüdi <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method." target="_blank" rel="noopener noreferrer">kontrollitava hüpoteesi</a> / vastatava uurimisküsimuse kujule;
            </li>
            <li>
                kavandate eksperimendi, et hüpoteesi kinnitada või siis ümber lükata/vastata püstitatud uurimisküsimusele;
            </li>
            <li>
                kogute andmeid ning esitate need tabelite ja/või graafikutena, ning näiteks salvestate oma eksperimendi osana tõestusmaterjalist (Vt sellekohaseid <a href="https://www.youtube.com/watch?v=_l8LgLhjLvc&list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" target="_blank" rel="noopener noreferrer">õpivideoid</a>);
            </li>
            <li>
                selgitate oma tulemusi kasutades õpitud loodusteaduslikke teadmisi ning sõnastate järeldused;
            </li>
            <li>
                jagate omavahel töökoormust ja -ülesandeid rühmas.
            </li>
        </ul>
        

        <!-- hypothesis -->        
        <Icon name="material-symbols:edit-square" size="40" class="text-blue-500 mt-4"></Icon>
        <label class="font-bold block leading-tight my-2">Meie hüpotees / uurimisküsimus on:</label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="4" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>

        <!-- work plan -->
        <Icon name="material-symbols:edit-square" size="40" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-2"><b>Töö käik</b> <i>(palun näidake ära, milliseid tegevusi teete kõik koos ja milliste puhul on tööülesanded rühmakaaslaste puhul erinevad. Sel juhul kirjutage nimi tegevuse järele sulgudesse):</i></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="5" v-model="studentInputs.activity3a.activity3aPlan" placeholder="✍"></textarea>
        
        
        <!-- independent variable -->
        <Icon name="material-symbols:edit-square" size="40" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-2"><b>Sõltumatu muutuja</b> <i>(see, mida muudetakse):</i></label>
        <input type="text" class="input input-bordered w-full text-lg my-4" rows="1" v-model="studentInputs.activity3a.experimentVariables.independent" placeholder="✍" />
        
        <!-- dependent variable -->
        <Icon name="material-symbols:edit-square" size="40" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-2"><b>Sõltuv muutuja</b> <i>(see, mida sekkumise tulemusena mõõdetakse):</i></label>
        <input type="text" class="input input-bordered w-full text-lg my-4" rows="1" v-model="studentInputs.activity3a.experimentVariables.dependent" placeholder="✍" />
        
        <!-- control variables -->
        <Icon name="material-symbols:edit-square" size="40" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-4"><b>Kontrollmuutujad</b> <i>(need muutujad, mida püütakse hoida katse käigus püsivana):</i></label>
        <ToolsDynamicTableFull class="e-card"
            :tableStructure = "controlTable" 
            :addRow = "true"
            addRowTitle = "Lisa muutuja"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.experimentVariables.control"
            :deleteRow = "true" 
            cellType = "input"
        />
        
        <!-- results table -->
        <Icon name="material-symbols:edit-square" size="40" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-4"><b>Tulemuste tabel</b></label> 
        <ToolsDynamicTableFull class="e-card"
            :tableStructure = "resultsTable" 
            :addRow = "true"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.activity3aResults"
            :deleteRow = "true"
            cellType = "input"
        />


        
        <Icon name="material-symbols:edit-square" size="40" class="text-blue-500 mt-16"></Icon>
        <label class="block"><b>Asjaolud, mis võisid vähendada eksperimendi tulemuste usaldusväärsust</b> <i>(palun mõelge võimalikele vigade allikatele, mis võisid katse tulemusi mõjutada).</i></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aCredibility" placeholder="✍"></textarea>
        
        

        <Icon name="material-symbols:edit-square" size="40" class="text-blue-500 mt-16"></Icon>
        <label class="font-bold block">Põhinedes eksperimendi tulemustele jõudsime järgmistele järeldustele:</label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>

    
        <p>Lisaks oodatakse teilt, et te otsiksite tõestusmaterjali usaldusväärsetest sekundaarsetest allikatest (teadusandmebaasid jm.), et leida lisakinnitust oma eksperimendi tulemustele ning tehtud järeldustele. Selleks on teil kasutada järgmised tööriistad.</p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        
        <Icon name="material-symbols:edit-square" size="40" class="text-blue-500 mt-16" />
        <label class="font-bold block">Kirjutage lühikokkuvõte oma uurimistulemustest siia: </label>
        <p class="italic">
            Kas muud allikad kinnitasid/toetasid teie poolt saadud tulemusi? Kui ei, siis miks see võib nii olla?
            <br />
            Katsuge nüüd teha järeldus valitud müüdi paikapidavuse kohta:
        </p>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aSummary" placeholder="✍"></textarea>
        
    </div>
</template>


<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';
    const studentInputs = useStudentRadiation();

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