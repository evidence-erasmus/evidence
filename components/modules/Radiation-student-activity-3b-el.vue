<template>
    <div class="border-r-2 border-r-sky-400 pr-8">
        <h2>Δραστηριότητα 3β</h2>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Απόφαση Ομάδας - Θα διαπραγματευτούμε τον ακόλουθο μύθο ή θα μελετήσουμε το ζήτημα:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3b.activity3bMyth"></textarea>


        <h3>Σε περίπτωση που δυσκολεύεστε να ελέγξετε πειραματικά τον μύθο σας, αναμένεται να κάνετε τα εξής:</h3>
        <ul class="leading-tight">
            <li>αναπτύξτε μια ελεγχόμενη υπόθεση/ένα ερευνητικό ερώτημα</li>
            <li>σχεδιάστε την αναζήτησή σας για εύρεση σχετικών πληροφοριών που θα επιβεβαιώσουν ή θα απορρίψουν την υπόθεσή σας / θα απαντήσουν στο ερευνητικό σας ερώτημα</li>
            <li>παρουσιάστε τα συλλεγμένα δεδομένα με τη μορφή πινάκων, γραφημάτων ή παρόμοιων τρόπων</li>
            <li>αξιολογήστε την αξιοπιστία των τεκμηρίων που έχετε συγκεντρώσει</li>
            <li>χρησιμοποιήστε τα ευρήματά σας για να διατυπώσετε ένα συμπέρασμα</li>
        </ul>
        
        <p>
            Ενώ το κάνετε αυτό, θα πρέπει να σκεφτείτε προσεκτικά πώς θα μοιραστείτε τον φόρτο εργασίας στο πλαίσιο της ομάδας σας. Θα μπορούσατε να ορίσετε στον καθένα ένα διαφορετικό ρόλο, για παράδειγμα, σε έναν αρχηγό που θα οργανώνει τις δραστηριότητες, έναν γραμματέα που θα σημειώνει και θα σχολιάζει τις πληροφορίες που θα συλλέγετε, έναν ερευνητή που θα κάνει αναζητήσεις, έναν κριτικό που θα εξετάζει αξιοπιστία των πληροφοριών.
        </p>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Η υπόθεσή μας/το ερευνητικό μας ερώτημα είναι: </label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis"></textarea>




        <h3>Πορεία Δραστηριοτήτων</h3>
        <p>
            (παρακαλούμε αναφέρετε ποιες δραστηριότητες θα υλοποιήσετε ως ομάδα και ποιες δραστηριότητες θα υλοποιηθούν προβαίνοντας σε καταμερισμό εργασίας.  Σε αυτήν την περίπτωση, σημειώστε ποιος είναι υπεύθυνος για τι παρακαλώ):
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Γράψετε την πορεία δραστηριοτήτων εδώ:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bPlan"></textarea>


       

        <h3>Realiability check</h3>
        <p>
            Παρακαλώ χρησιμοποιήστε αυτό το εργαλείο για την αναζήτηση πληροφοριών και την αξιολόγηση της αξιοπιστίας τους<br />
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Γράψτε μια περίληψη των ευρημάτων σας στον παρακάτω πίνακα:</label>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Με βάση τα τεκμήρια, το/τα συμπέρασμα(τα) είναι:</label>
        <textarea class="textarea textarea-bordered w-full text-lg mb-8" rows="7" v-model="studentInputs.activity3b.activity3bConclusion"></textarea>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Based on your findings, make a statement on whether the selected myth is confirmed or rejected.</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bStatement"></textarea>


    </div>
</template>

<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';

    const studentInputs = useStudentRadiation();

</script>