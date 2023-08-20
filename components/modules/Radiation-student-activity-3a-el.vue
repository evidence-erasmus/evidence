<template>
    <div class="border-l-2 border-l-sky-400 pl-6 pb-8">
        
        <h2>Δραστηριότητα 3α</h2>

        <p>
            (μπορείτε να παραλείψετε αυτό το βήμα και να μεταβείτε απευθείας στη Δραστηριότητα 3β σε περίπτωση που δεν θα διεξάγεται κάποιο πείραμα για να ελέγξετε τον μύθο σας)
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Απόφαση Ομάδας - Θα διαπραγματευτούμε τον ακόλουθο μύθο ή θα μελετήσουμε το ζήτημα:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        <p>
            Σε περίπτωση που πιστεύετε ότι ο μύθος σας μπορεί να ελεγχθεί πειραματικά, διαβάστε τις ακόλουθες οδηγίες:
        </p>


        
        
        <p>
            Αναμένεται να:
        </p>

        <ul class="leading-tight">
            <li>αναπτύξετε μια ελεγχόμενη υπόθεση/ένα ερευνητικό ερώτημα</li>
            <li>σχεδιάσετε ένα πείραμα που θα επιβεβαιώσει ή θα απορρίψει την υπόθεσή σας/ θα απαντήσει στο ερευνητικό σας ερώτημα</li>
            <li>παρουσιάσετε τα δεδομένα που έχετε συλλέξει με τη μορφή πινάκων και γραφημάτων και, κατά προτίμηση, βιντεοσκοπήστε το πείραμά σας ως τεκμήριο (δείτε το σχετικό βίντεο)</li>
            <li>εξηγήσετε τα αποτελέσματά σας χρησιμοποιώντας τεκμήρια</li>
            <li>χρησιμοποιήσετε τα αποτελέσματά σας για να διατυπώσετε ένα συμπέρασμα</li>
            <li>μοιράσετε τον φόρτο εργασίας μέσα στην ομάδα σας (π.χ. ορίζοντας τον καθένα σε διαφορετικό ρόλο - συντονιστής, γραμματέας, προμηθευτής υλικού)</li>
        </ul>
        

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Η υπόθεσή μας/το ερευνητικό μας ερώτημα είναι:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>


        
        

        <h3>Πορεία Δραστηριοτήτων</h3>
        
        <p>
            (σκεφτείτε προσεκτικά πώς θα διατηρήσετε όλες τις άλλες μεταβλητές σταθερές εκτός από αυτήν που πρόκειται να μεταβάλετε· παρακαλούμε αναφέρετε ποιες δραστηριότητες θα υλοποιήσετε ως ομάδα και ποιες δραστηριότητες θα υλοποιηθούν προβαίνοντας σε καταμερισμό εργασίας. Σε αυτήν την περίπτωση, σημειώστε ποιος είναι υπεύθυνος για τι παρακαλώ):
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Define research variables:</label>


        <ToolsDynamicTableFull 
            :tableStructure="variableTable" 
            :storeToUpdate="studentInputs"
            :keyToUpdate="studentInputs.activity3a.activity3aVariables" 
            :newRow="['','','']" 
            :addRow="true" 
        />


        <label class="font-bold block mt-8">Your research results:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="✍"></textarea>




        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Με βάση το πείραμα, το/τα συμπέρασμα(τα) είναι:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>



    
        <p>
            Τώρα αναμένεται να βρείτε στοιχεία από δευτερεύουσες πηγές για να επιβεβαιώσετε εκ νέου τα ευρήματά σας χρησιμοποιώντας το ακόλουθο εργαλείο.
        </p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Γράψετε σύντομη περίληψη των ευρημάτων σας εδώ:</label>
        <p class="italic">
            Τα δευτερεύοντα δεδομένα επιβεβαίωσαν τα ευρήματά σας; Εάν όχι, γιατί πιστεύετε;
        </p>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aSecondary" placeholder="✍"></textarea>
    </div>
</template>




<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';

    const studentInputs = useStudentRadiation();

    const variableTable = ref({
        header: [
            {thead: "Independent variable", tsubhead: "The one that is going to be altered"},
            {thead: "Dependent variable", tsubhead: "The one that is going to be measured"},
            {thead: "Control variables", tsubhead: "The ones that are going to be kept constant"},
        ]
    });
</script>