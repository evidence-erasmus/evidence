<template>
    <div>
         
        <p>
            <b>Σε αυτή τη δραστηριότητα, αναμένετε να κάνετε τα εξής:</b>
        </p>
        <ul class="leading-tight">
            <li>
                Να διατυπώσετε μία υπόθεση / ερευνητικό ερώτημα,
            </li>
            <li>
                Να σχεδιάσετε την αναζήτηση των σχετικών πληροφοριών που θα επιβεβαιώσουν ή θα καταρρίψουν τον μύθο σας,
            </li>
            <li>
                Να εξετάσετε την αξιοπιστία των πληροφοριών σας,
            </li>
            <li>
                Να διατυπώσετε τα συμπεράσματά σας βάσει των αποτελεσμάτων σα,
            </li>
            <li>
                Να παρουσιάσετε τα αποτελέσματά σας και τα συμπεράσματά σας μέσω πινάκων, διαγραμμάτων ή άλλων παραστάσεων.
            </li>
        </ul>
        <p>
            Για να επιτύχετε στα πιο πάνω χρειάζεται να σκεφτείτε προσεχτικά πώς θα εργαστείτε στην ομάδα σας. Για παράδειγμα, θα μπορούσατε να μοιράσετε ρόλους και ο καθένας από εσάς να έχει διαφορετική υπευθυνότητα. Ρόλους όπως ο «ηγέτης», ο οποίος θα είναι υπεύθυνος για την οργάνωση των δραστηριοτήτων, ο «καταγραφέας», ο οποίος θα λαμβάνει σημειώσεις και σχόλια για τις πηγές πληροφόρησης που εντοπίζετε, ο «ερευνητής», ο οποίος θα διενεργεί τις αναζητήσεις και ο «κριτικός», ο οποίος θα ελέγχει κατά πόσο οι πληροφορίες που εντοπίζετε είναι αξιόπιστες ή όχι.
        </p>    


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Απόφαση ομάδας: Θα καταρρίψουμε τον ακόλουθο μύθο:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.myth" placeholder="✍"></textarea>


        <hr />
        

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Η υπόθεση / ερευνητικό ερώτημα είναι:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.hypothesis" placeholder="✍"></textarea>


        <hr />
        

        <h3>Σχεδιασμός Δραστηριοτήτων</h3>
        <p>
            (Χρειάζεται να καταγράψετε τις δραστηριότητες που θα εμπλακείτε όλοι μαζί και τις υπευθυνότητες που θα έχει ο καθένας σας ξεχωριστά)
        </p>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500" />
        <label for="planOfActivities" class="block mb-2 mt-2">
            <b>Καταγράψτε το σχεδιασμό σας εδώ:</b>
        </label>
        <textarea id="planOfActivities" class="textarea textarea-bordered block w-full text-lg mb-8" placeholder="✍️" rows="5"
        v-model="studentInputs.planOfActivities"></textarea>

        <hr />


        <p>Αναμένεται να βρείτε στοιχεία από δευτερογενείς πηγές για να επιβεβαιώσετε τα δικά σας ευρήματα χρησιμοποιώντας το ακόλουθο εργαλείο.</p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Βάσει του πειράματος, τα συμπεράσματά μας είναι:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.conclusions" placeholder="✍"></textarea>
        
        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Με βάση τα ευρήματά σας, καταγράψετε μια δήλωση σχετικά με το εάν ο επιλεγμένος μύθος επιβεβαιώθηκε ή απορρίφθηκε:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.decision" placeholder="✍"></textarea>
        
    </div>
</template>




<script setup>
    import { useStudentDrugs } from '~~/store/useStudentInputDrugs.js';

    const studentInputs = useStudentDrugs();
</script>