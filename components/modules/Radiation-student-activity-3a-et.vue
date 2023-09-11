<template>
    <div class="border-l-2 border-l-sky-400 pl-6 pb-8">
        
        <h2> Tegevus 3a: Müüdimurdmine eksperimendi läbiviimise abil</h2>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block leading-tight my-2">Rühma otsus − me kavatseme hakata ümber lükkama või kinnitama järgmist kiirgustega seotud müüti:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        

        
        
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
        

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="font-bold block leading-tight my-2">Meie hüpotees / uurimisküsimus on:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>
        

        
        <!-- independent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Sõltumatu muutuja</b> (see, mida muudetakse):</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="1" v-model="studentInputs.activity3a.experimentVariables.independent" placeholder="✍"></textarea>
        
        <!-- dependent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Sõltuv muutuja</b> (see mida sekkumise tulemusena mõõdetakse):</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="1" v-model="studentInputs.activity3a.experimentVariables.dependent" placeholder="✍"></textarea>
        
        <!-- control variables -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Kontrollmuutujad</b> (need muutujad, mida püütakse hoida katse käigus püsivana):</label>

        <ToolsDynamicTableFull class="e-card"
            :tableStructure = "controlTable" 
            :addRow = "true"
            addRowTitle = "Lisa muutuja"
            :newRow = "['']"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.experimentVariables.control"
            :deleteRow = "true"
        />
        
        Results table 

        <ToolsDynamicTableFull class="e-card"
            :tableStructure = "resultsTable" 
            :addRow = "true"
            :newRow = "new Array(2 + studentInputs.activity3a.experimentVariables.control.length)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.activity3aResults"
            :deleteRow = "true"
        />



        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        

        <h3>Tegevusplaan</h3>
        
        <section class="e-card mb-8">
            <p class="italic my-0">
                (mõelge hoolikalt, kuidas  kontrollida kõiki muutujaid v.a ühte, millega hakkate manipuleerima; palun näidake ka ära, milliseid tegevusi teete kõik koos ja milliste puhul on tööülesanded rühmakaaslaste puhul erinevad, viimasel juhul näidake ära ka igaühe vastutusala kirjutades nime tegevuse järele sulgudesse):
            </p>
        </section>







        

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Muutujate määratlemine:</label>


        <ToolsDynamicTableFull 
            :tableStructure="variableTable" 
            :storeToUpdate="studentInputs"
            :keyToUpdate="studentInputs.activity3a.activity3aVariables" 
            :newRow="['','','']" 
            :addRow="true" 
        />


        <label class="font-bold block mt-8">Tulemused:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="✍"></textarea>




        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Põhinedes eksperimendi tulemustele jõudsime järgmistele järeldustele:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>



    
        <p>Lisaks oodatakse teilt, et te otsiksite tõestusmaterjali usaldusväärsetest sekundaarsetest allikatest (teadusandmebaasid jm.), et leida lisakinnitust oma eksperimendi tulemustele ning tehtud järeldustele. Selleks on teil kasutada järgmised tööriistad.</p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
             />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Kirjutage lühikokkuvõte oma uurimistulemustest siia: </label>
        <p class="italic">
            Kas muud allikad kinnitasid/toetasid teie poolt saadud tulemusi? Kui ei, siis miks see võib nii olla?
            <br />
            Katsuge nüüd teha  järeldus valitud müüdi paikapidavuse kohta:
        </p>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aSecondary" placeholder="✍"></textarea>
    </div>
</template>




<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';

    const studentInputs = useStudentRadiation();

    const variableTable = ref({
        header: [
            {thead: "Sõltumatu muutuja", tsubhead: "(see, mida muudetakse)"},
            {thead: "Sõltuv muutuja", tsubhead: "(see mida sekkumise tulemusena mõõdetakse)"},
            {thead: "Kontrollmuutujad", tsubhead: "(need, mida üritatakse hoida katse jooksul muutumatutena)"},
        ]
    });
    const controlTable = ref({
        header: [
            {thead: "", tsubhead: "Iga muutuja eraldi reale"}
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

        studentInputs.activity3a.experimentVariables.control.forEach( (variable) => {
            structure.header.push({thead: `${variable}`, tsubhead:"Kontrollmuutuja"});
        } );

        return structure;
    });
</script>