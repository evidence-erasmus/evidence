<template>
    <div>
         
        <p>
            <b>Selle tegevuse käigus oodatakse teilt järgmist:</b>
        </p>
        <ul class="leading-tight">
            <li>
                töötama välja <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method." target="_blank" rel="noopener noreferrer">testitava hüpoteesi</a> / uurimisküsimuse;
            </li>
            <li>
                kavandama infootsingu, mis lükkaks ümber või kinnitaks teie hüpoteesi / vastaks teie uurimisküsimusele;
            </li>
            <li>
                hindama kogutud tõestusmaterjali usaldusväärsust;
            </li>
            <li>
                tegema järeldused hüpoteesi / uurimisküsimuse ning lõpuks ka müüdi paikapidavuse kohta;
            </li>
            <li>
                esitama kogutud andmeid tabelite, graafikute vms kujul.
            </li>
        </ul>
        <p>
            Seda tehes peaksite hoolikalt mõtlema, kuidas oma rühmas töökoormust jagada. Võite määrata kõik erinevasse rolli, näiteks juhiks, kes korraldab tegevusi, sekretäriks, kes teeb leitud teabe kohta märkmeid ja kommentaare, uurijaks, kes teeb otsinguid, kriitikuks, kes kontrollib teabe usaldusväärsust vms.
        </p>    


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Grupiotsus - me murrame järgmise müüdi:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.myth" placeholder="✍"></textarea>


        <hr />
        

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Meie hüpotees / uurimisküsimus on:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.hypothesis" placeholder="✍"></textarea>


        <hr />
        

        <h3>Tegevusplaan</h3>
        <p>
            (võite märkida, milliste tegevustesse olete kaasatud terve tiimiga ja milliseid teete individuaalselt).
        </p>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500" />
        <label for="planOfActivities" class="block mb-2 mt-2">
            <b>Kirjutage oma tegevuskäik siia:</b>
        </label>
        <textarea id="planOfActivities" class="textarea textarea-bordered block w-full text-lg mb-8" placeholder="✍️" rows="5"
        v-model="studentInputs.planOfActivities"></textarea>

        <hr />


        <p>Kasutage järgmist <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20" /> tööriista</NuxtLink> teabe otsimiseks ja selle usaldusväärsuse hindamiseks</p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Antud tõendite põhjal on meie järeldus(ed) järgmised:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.conclusions" placeholder="✍"></textarea>
        
        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Otsustage, kas saadud tõestusmaterjalid kinnitavad müüti või lükkavad selle ümber. Põhjendage oma otsust:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.decision" placeholder="✍"></textarea>
        
    </div>
</template>




<script setup>
    import { useStudentDrugs } from '~~/store/useStudentInputDrugs.js';

    const studentInputs = useStudentDrugs();
</script>