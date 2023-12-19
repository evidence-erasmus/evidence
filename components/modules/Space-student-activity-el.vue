<template>
    <div>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Απόφαση Ομάδας: Θα διαπραγματευτούμε τον ακόλουθο μύθο ή θα μελετήσουμε το εξής ζήτημα:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.myth" placeholder="✍"></textarea>

        <hr />

        <p>
            Τώρα καλείστε να περιοριστείτε σε έναν μύθο και να τον μετατρέψετε σε μια ελεγχόμενη υπόθεση ή σε ένα ερώτημα που να μπορεί να απαντηθεί μέσα από την εξερεύνηση σας. 
        </p>
        <p>
            Σχεδιάσετε δραστηριότητες και μοιραστείτε τις ευθύνες εντός της ομάδας σας ακολουθώντας τα βήματα του κύκλου όπως δίνονται στην Εικόνα 1. Επίσης πρέπει να σκεφτείτε αν ο μύθος που επιλέξατε μπορεί να διερευνηθεί πειραματικά, απορρίπτοντας/αποδέχοντας τον με την χρήση εφαρμογών, μοντέλων υπολογιστή και προσομοιώσεων ή εναλλακτικά χρησιμοποιώντας δευτερογενή στοιχεία (πειράματα που έχουν γίνει και δημοσιεύθηκαν).
        </p>
        
        <h4>Στην δραστηριότητα 3 αναμένεται να κάνετε τα εξής:</h4>
        <ul class="leading-tight">
            <li>Καταγράψτε μια ελεγχόμενη υπόθεση / διερευνήσιμο ερώτημα</li>
            <li>Οργανώστε ένα απλό πείραμα ή ψάξτε για σχετικές πληροφορίες ώστε να απορρίψετε ή να επιβεβαιώσετε την υπόθεση σας / απαντήσετε το διερευνήσιμο ερώτημα σας</li>
            <li>Παρουσιάστε τα στοιχεία που μαζέψατε στη μορφή πινάκων, γραφικών κτλ</li>
            <li>Με βάση τα ευρήματα σας καταλήξτε σε ένα συμπέρασμα,</li>
            και τέλος…
            <li>Φτιάξτε ένα βίντεο ή μια παρουσίαση PowerPoint για να παρουσιάσετε τα ευρήματα σας (αυτό το βήμα σχετίζεται με την  δραστηριότητα 4).</li>
        </ul>
        
        <p>
            Καθώς τα κάνετε αυτά παρακαλώ σκεφτείτε πως θα μοιραστείτε ισάξια τις ευθύνες εντός της ομάδας σας.
        </p>





        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Η υπόθεση / διερευνήσιμο ερώτημα μας είναι:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.hypothesis" placeholder="✍"></textarea>


        <hr />
        

        <h3>Πλάνο δραστηριοτήτων</h3>
        <p>
            (σημειώσετε ποιες δραστηριότητες θα κάνετε ως ομάδα και ποιες θα μοιραστείτε, σε αυτές που θα μοιραστείτε καταγράψτε και το όνομα του κάθε υπεύθυνου):
        </p>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500" />
        <label for="planOfActivities" class="block mb-2 mt-2">
            <b>Καταγράψτε το σχέδιο σας εδώ:</b>
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

        <p>
            Παρακαλώ χρησιμοποιήστε αυτό το <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-neutral text-white no-underline"><Icon name="mdi:tools" size="18"></Icon> εργαλείο</NuxtLink> για την αναζήτηση πληροφοριών και την αξιολόγηση της αξιοπιστίας τους:
        </p>
        <p>
            Γράψτε μια περίληψη των ευρημάτων σας στον παρακάτω πίνακα:
        </p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Με βάση τα ευρήματα μας το συμπέρασμα μας είναι:</label>
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