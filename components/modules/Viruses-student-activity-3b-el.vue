<template>
    <div>
        <h2>Δραστηριότητα 3β: Mythbusting based on secondary sources</h2>


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Απόφαση Ομάδας - Θα διαπραγματευτούμε τον ακόλουθο μύθο:</label>
        
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" v-model="studentInputs.activity3b.activity3bMyth" placeholder="✍️"></textarea>

        <hr />

        <h3>Σε περίπτωση που δυσκολεύεστε να ελέγξετε πειραματικά τον μύθο σας, αναμένεται να κάνετε τα εξής:</h3>
        <ul class="leading-tight">
            <li>αναπτύξτε μια <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">ελεγχόμενη υπόθεση</a> / ένα διερευνήσιμο ερώτημα</li>
            <li>σχεδιάστε την αναζήτησή σας για εύρεση σχετικών πληροφοριών που θα επιβεβαιώσουν ή θα απορρίψουν την υπόθεσή σας / θα απαντήσουν στο ερευνητικό σας ερώτημα</li>
            <li>παρουσιάστε τα δεδομένα που συλλέξατε με τη μορφή πινάκων, γραφημάτων ή παρόμοιων τρόπων</li>
            <li>αξιολογήστε την αξιοπιστία των τεκμηρίων που έχετε συγκεντρώσει</li>
            <li>χρησιμοποιήστε τα ευρήματά σας για να διατυπώσετε ένα συμπέρασμα</li>    
        </ul>
        
        <p>Ενώ το κάνετε αυτό, θα πρέπει να σκεφτείτε προσεκτικά πώς θα μοιραστείτε τον φόρτο εργασίας στο πλαίσιο της ομάδας σας. Θα μπορούσατε να ορίσετε στον καθένα ένα διαφορετικό ρόλο, για παράδειγμα, σε έναν αρχηγό που θα οργανώνει τις δραστηριότητες, έναν γραμματέα που θα σημειώνει και θα σχολιάζει τις πληροφορίες που θα συλλέγετε, έναν ερευνητή που θα κάνει αναζητήσεις, έναν κριτικό που θα εξετάζει την αξιοπιστία των πληροφοριών.</p>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Η υπόθεσή μας/το ερευνητικό μας ερώτημα είναι:</label>

        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis" placeholder="✍️"></textarea>


        <hr />


        <h3>Πορεία Δραστηριοτήτων</h3>
        <p class="italic mt-2">
            (αναφέρετε ποιες δραστηριότητες θα υλοποιήσετε ως ομάδα και ποιες δραστηριότητες θα υλοποιηθούν προβαίνοντας σε καταμερισμό εργασίας, σε αυτήν την περίπτωση, παρακαλούμε όπως σημειώσετε ποιος είναι υπεύθυνος για τι):
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Γράψετε την πορεία δραστηριοτήτων εδώ:</label>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bPlan" placeholder="✍️"></textarea>


        <hr />

        <h3>Realiability check</h3>
        <p>
            Παρακαλούμε χρησιμοποιήστε αυτό το εργαλείο για να ψάξετε για πληροφορίες και για να ελέγξετε την αξιοπιστία τους
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Γράψτε μια περίληψη για τα ευρήματα σας στον παρακάτω πίνακα:</label>

        <div class="e-card w-[90vw] mb-8" style="transform: translateX(-5vw);">
            <ToolsReliabilityTable
                :storeToUpdate="studentInputs"
                :addRow="true" 
            />
        </div>

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Με βάση τα τεκμήρια, το/τα συμπέρασμα(τα) μας είναι:</label>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bConclusion" placeholder="✍️"></textarea>

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Δηλώστε εάν ο μύθος που επιλέξατε επιβεβαιώθηκε ή απορρίφθηκε βάση των ευρημάτων σας.</label>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bStatement" placeholder="✍️"></textarea>



    </div>
</template>

<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();

</script>