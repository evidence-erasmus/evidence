<template>
    <div>
        
        <h2>Tegevus 3a: Müüdimurdmine eksperimendi läbiviimise abil</h2>

        
        
        <!-- <div contenteditable="true" class="ring-slate-600 ring-1 p-2 rounded" ref="studentInput3a">
            {{ studentInputs.activity3a }}
        </div> -->

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3aMyth" class="font-bold block mb-2 leading-tight">Rühma otsus: Me kavatseme hakata ümber lükkama või kinnitama järgmist viirustega seotud müüti
</label>
        
        <textarea id="3aMyth" class="ring-slate-600 ring-1 p-2 rounded block w-full" v-model="studentInputs.activity3a.activity3aMyth" placeholder="abc...✍"></textarea>

        <hr />

        
        <!-- <p>In case you think your myth can be tested experimentally, please read the following guidelines:</p> -->
        
        <h4>Järgneva tegevuse käigus oodatakse, et te:</h4>
        <ul class="leading-tight">
            <li>kitsendate oma valitud müüdi <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">kontrollitava hüpoteesi</a> / vastatava uurimisküsimuse kujule;</li>
            <li>kavandate eksperimendi, et hüpoteesi kinnitada või siis ümber lükata/vastata püstitatud uurimisküsimusele;</li>
            <li>
                kogute andmeid ning esitate need tabelite ja/või graafikutena, ning näiteks salvestate oma eksperimendi osana tõestusmaterjalist;
                <br />
                <a href="#" class="btn btn-lg btn-secondry not-prose "
                target="_blank" rel="noopener noreferrer"><Icon name="material-symbols:youtube-tv-outline" size="24" /> (Vt sellekohast õpivideot)</a>
            </li>
            <li>selgitate oma tulemusi kasutades õpitud loodusteaduslikke teadmisi ning sõnastate järeldused;</li>
            <li class="bg-orange-200">Use your results to form a conclusion.</li>
            <li class="bg-orange-200">Estimate the plausibility of the chosen myth.</li>
            <li>jagate omavahel töökoormust ja -ülesandeid rühmas.</li>
        </ul>
        
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3aHypothesis" class="font-bold block">Meie hüpotees / uurimisküsimus on:</label>

        <textarea id="3aHypothesis" class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="abc...✍"></textarea>


        <hr />
        
        

        <h3>Tegevusplaan</h3>
        
        <section class="e-card mb-8">
            <p class="italic my-0">Mõelge hoolikalt, kuidas  kontrollida kõiki muutujaid v.a ühte, millega hakkate manipuleerima; palun näidake ka ära, milliseid tegevusi teete kõik koos ja milliste puhul on tööülesanded rühmakaaslaste puhul erinevad, viimasel juhul näidake ära ka igaühe vastutusala kirjutades nime tegevuse järele sulgudesse</p>
        </section>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Muutujate määratlemine:</label>

        <div class="e-card w-[90vw]" style="transform: translateX(-5vw);">
            <ToolsDynamicTableFull
                :tableStructure="tm('inquiry.variables_table')"
                :storeToUpdate="studentInputs"
                :keyToUpdate="studentInputs.activity3a.activity3aPlan"
                :addRow="true"
                :newRow="['', '', '']"
            />
        </div>

        <!-- <section>
            <div class="grid grid-cols-3 gap-2">
                <p class="text-sm font-bold">Independent variable</p>
                <p class="text-sm font-bold">Dependent variable</p>
                <p class="text-sm font-bold">Control variables</p>
            </div>
            <div v-for="row, i in studentInputs.activity3a.activity3aPlan" class="grid grid-cols-3 gap-2">
                <div v-for="variable, j in row"
                ><input v-model="studentInputs.activity3a.activity3aPlan[i][j]" class="w-full ring-1 ring-slate-300 px-1 rounded text-ellipsis overflow-hidden focus:bg-amber-50" placeholder="abc...✍" /></div>
            </div>

            <button @click="studentInputs.addVariableRow" class="bg-slate-700 text-md text-slate-100 rounded-full px-4 mt-4">ADD VARIABLES ROW</button>
        </section> -->

        <label for="3aResults" class="font-bold block mt-8">Eksperimendi tulemused:</label>
        <textarea id="3aResults" class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="abc...✍"></textarea>


        <hr />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3aConcl" class="font-bold block">Põhinedes eksperimendi tulemustele jõudsime järgmistele järeldustele:</label>
        <textarea id="3aConcl" class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="abc...✍"></textarea>


        <hr />

    
        <p>Lisaks oodatakse teilt, et te otsiksite tõestusmaterjali sekundaarsetest allikatest (teadusandmebaasid jm.), et leida lisakinnitust oma eksperimendi tulemustele ning tehtud järeldustele. Selleks on teil kasutada järgmised tööriistad.</p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3aSummary" class="font-bold block">Kirjutage lühikokkuvõte oma uurimistulemustest siia:</label>
        <p class="italic">
            Kas muud allikad kinnitasid / toetasid teie poolt saadud tulemusi? Kui ei, siis miks see võib nii olla?<br />
            Katsuge nüüd teha  järeldus valitud müüdi paikapidavuse kohta:
        </p>
        <textarea id="3aSummary" class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aSecondary" placeholder="abc...✍"></textarea>

    </div>
</template>


<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();
    const {tm} = useI18n({scope:"global"});
</script>