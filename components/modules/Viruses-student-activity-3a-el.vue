<template>
    <div>
        
        <h2>Δραστηριότητα 3α: Κατάρριψη μύθου με βάση τον πειραματισμό</h2>

        
        
        <!-- <div contenteditable="true" class="ring-slate-600 ring-1 p-2 rounded" ref="studentInput3a">
            {{ studentInputs.activity3a }}
        </div> -->

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Ομαδική συζήτηση: Θα διαπραγματευτούμε τον ακόλουθο μύθο</label>
        <textarea class="textarea textarea-bordered text-lg block w-full" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        <hr />

        

        <p>Σε περίπτωση που πιστεύετε ότι ο μύθος σας μπορεί να ελεγχθεί πειραματικά, διαβάστε τις ακόλουθες οδηγίες:</p>
        
        <h4>Σε αυτήν την δραστηριότητα αναμένεται από εσάς να:</h4>
        <ul class="leading-tight">
            <li>αναπτύξετε μια <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">ελεγχόμενη υπόθεση</a> / ένα διερευνήσιμο ερώτημα</li>
            <li>σχεδιάστε ένα πείραμα που θα επιβεβαιώσει ή θα απορρίψει την υπόθεσή σας/ θα απαντήσει στο ερευνητικό σας ερώτημα</li>
            <li>παρουσιάστε τα δεδομένα που έχετε συλλέξει με τη μορφή πινάκων και γραφημάτων και, κατά προτίμηση, βιντεοσκοπήστε το πείραμά σας ως τεκμήριο (δείτε το σχετικό
                <br />
                <a href="https://www.youtube.com/watch?v=_l8LgLhjLvc&list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" class="btn btn-accent btn-sm text-white no-underline"
                target="_blank" rel="noopener noreferrer"><Icon name="material-symbols:youtube-tv-outline" size="20" /> βίντεο</a> )
            </li>
            <li>εξηγήστε τα αποτελέσματά σας χρησιμοποιώντας τεκμήρια</li>
            <li>χρησιμοποιήστε τα αποτελέσματά σας για να διατυπώσετε ένα συμπέρασμα</li>
            <li>μοιράστε τον φόρτο εργασίας μέσα στην ομάδα σας (π.χ. ορίζοντας τον καθένα σε διαφορετικό ρόλο - συντονιστής, γραμματέας, προμηθευτής υλικού)</li>
        </ul>
        
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Η υπόθεσή μας/το διερευνήσιμο μας ερώτημα είναι:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full" rows="7" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>


        <hr />
        
        

        <h3>Πορεία Δραστηριοτήτων</h3>
        
        <p>Σκεφτείτε προσεκτικά πώς θα διατηρήσετε όλες τις άλλες μεταβλητές σταθερές εκτός από αυτήν που πρόκειται να μεταβάλετε. Επίσης πρέπει να σκεφτείτε προσεκτικά πως θα καταμερίσετε τις εργασίες στην ομάδας σας. Παρακαλούμε αναφέρετε ποιες δραστηριότητες θα υλοποιήσετε ως ομάδα και ποιες δραστηριότητες θα υλοποιηθούν προβαίνοντας σε καταμερισμό εργασίας, σε αυτήν την περίπτωση, παρακαλώ σημειώστε ποιος είναι υπεύθυνος για τι:</p>


        <!-- plan -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Περιγράψτε το σχέδιό σας:</b></label>
        <textarea class="textarea textarea-bordered w-full text-lg mb-8" rows="5" v-model="studentInputs.activity3a.activity3aPlan" placeholder="✍"></textarea>



        <h4>Ορισμός των μεταβλητών:</h4>

        <!-- independent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Άλλαξε παράγοντας</b> (θα αλλάξει):</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="1" v-model="studentInputs.activity3a.experimentVariables.independent" placeholder="✍"></textarea>
        
        <!-- dependent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Μετρημένος συντελεστής</b> (θα μετρηθεί):</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="1" v-model="studentInputs.activity3a.experimentVariables.dependent" placeholder="✍"></textarea>
        
        <!-- control variables -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Σταθερές</b> (δεν θα αλλάξει):</label>

        <ToolsDynamicTableFull class="e-card mb-8"
            :tableStructure = "controlTable" 
            :addRow = "true"
            addRowTitle = "Προσθήκη μεταβλητής"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.experimentVariables.control"
            :deleteRow = "true"
        />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Αποτελέσματα</b></label> 
        <ToolsDynamicTableFull class="e-card mb-8"
            :tableStructure = "resultsTable" 
            :addRow = "true" 
            addRowTitle = "Add constant"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.activity3aResults"
            :deleteRow = "true"
        />

        <hr />



        <!-- <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Ορίστε τις μεταβλητές</label>

        <div class="e-card mb-8">
            <ToolsDynamicTableFull
                :tableStructure="tm('inquiry.variables_table')"
                :storeToUpdate="studentInputs"
                :keyToUpdate="studentInputs.activity3a.activity3aPlan"
                :addRow="true"
                :newRow="['', '', '']"
            />
        </div> -->



        <!-- results -->
        <label class="font-bold block mt-8">Τα αποτελέσματά σας:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="✍"></textarea>


        <hr />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Με βάση το πείραμα, το/τα συμπέρασμα(τα) μας είναι:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>


        <hr />

    
        <p>Τώρα αναμένεται να βρείτε στοιχεία από δευτερεύουσες πηγές για να επιβεβαιώσετε εκ νέου τα ευρήματά σας χρησιμοποιώντας το <NuxtLink target="_blank" to="../tools/reliability-assessment"
            class="btn btn-accent btn-sm text-white no-underline"><Icon name="mdi:tools" size="18"></Icon> ακόλουθο εργαλείο</NuxtLink>.</p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Γράψετε μια σύντομη περίληψη των ευρημάτων σας εδώ:</label>
        <p class="italic mt-0">
            Τα δευτερεύοντα δεδομένα επιβεβαίωσαν τα ευρήματά σας; Εάν όχι, γιατί πιστεύετε;<br />
            Παρακαλούμε όπως δηλώσετε εάν ο μύθος που επιλέξατε επιβεβαιώθηκε ή απορρίφθηκε βάση των ευρημάτων σας.
        </p>
        <textarea class="textarea textarea-bordered text-lg block w-full" rows="7" v-model="studentInputs.activity3a.activity3aSecondary" placeholder="✍"></textarea>

    </div>
</template>


<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();
    const {tm} = useI18n({scope:"global"});

    const controlTable = ref({
        header: [
            {thead: "Μεταβλητός", tsubhead: ""},
            {thead: "Αξία", tsubhead: ""}
        ]
    });
    
    const resultsTable = computed(() => {
        const variables = studentInputs.activity3a.experimentVariables;
        let structure = {
            header: [
                {thead: `${variables.independent}`, tsubhead: "Άλλαξε παράγοντας"},
                {thead: `${variables.dependent}`, tsubhead: "Μετρημένος παράγοντας"},
            ]
        }
        return structure;
    });
    
    
</script>