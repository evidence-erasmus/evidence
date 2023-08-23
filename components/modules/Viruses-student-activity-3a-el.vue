<template>
    <div>
        
        <h2>Δραστηριότητα 3α: Mythbusting based on  experiment</h2>

        
        
        <!-- <div contenteditable="true" class="ring-slate-600 ring-1 p-2 rounded" ref="studentInput3a">
            {{ studentInputs.activity3a }}
        </div> -->

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Απόφαση Ομάδας - Θα διαπραγματευτούμε τον ακόλουθο μύθο:</label>
        
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        <hr />

        

        <p>Σε περίπτωση που πιστεύετε ότι ο μύθος σας μπορεί να ελεγχθεί πειραματικά, διαβάστε τις ακόλουθες οδηγίες:</p>
        
        <h4>Αναμένεται να:</h4>
        <ul class="leading-tight">
            <li>αναπτύξετε μια ελεγχόμενη υπόθεση/ένα διερευνήσιμο ερώτημα</li>
            <li>σχεδιάστε ένα πείραμα που θα επιβεβαιώσει ή θα απορρίψει την υπόθεσή σας/ θα απαντήσει στο ερευνητικό σας ερώτημα</li>
            <li>παρουσιάστε τα δεδομένα που έχετε συλλέξει με τη μορφή πινάκων και γραφημάτων και, κατά προτίμηση, βιντεοσκοπήστε το πείραμά σας ως τεκμήριο (δείτε το σχετικό
                <br />
                <a href="#" class="inline-block my-2 py-0.5 px-2 ring-2 ring-slate-700 rounded no-underline"
                target="_blank" rel="noopener noreferrer"><Icon name="material-symbols:youtube-tv-outline" />βίντεο</a>)
            </li>
            <li>εξηγήστε τα αποτελέσματά σας χρησιμοποιώντας τεκμήρια</li>
            <li>χρησιμοποιήστε τα αποτελέσματά σας για να διατυπώσετε ένα συμπέρασμα</li>
            <li>μοιράστε τον φόρτο εργασίας μέσα στην ομάδα σας (π.χ. ορίζοντας τον καθένα σε διαφορετικό ρόλο - συντονιστής, γραμματέας, προμηθευτής υλικού)</li>
        </ul>
        
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Η υπόθεσή μας/το διερευνήσιμο μας ερώτημα είναι:</label>

        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>


        <hr />
        
        

        <h3>Πορεία Δραστηριοτήτων</h3>
        
        <section class="e-card mb-8">
            <p class="italic my-0">Σκεφτείτε προσεκτικά πώς θα διατηρήσετε όλες τις άλλες μεταβλητές σταθερές εκτός από αυτήν που πρόκειται να μεταβάλετε. Επίσης πρέπει να σκεφτείτε προσεκτικά πως θα καταμερίσετε τις εργασίες στην ομάδας σας. Παρακαλούμε αναφέρετε ποιες δραστηριότητες θα υλοποιήσετε ως ομάδα και ποιες δραστηριότητες θα υλοποιηθούν προβαίνοντας σε καταμερισμό εργασίας, σε αυτήν την περίπτωση, παρακαλώ σημειώστε ποιος είναι υπεύθυνος για τι:</p>
        </section>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Ορίστε τις μεταβλητές</label>

        <div class="e-card w-[90vw]" style="transform: translateX(-5vw);">
            <ToolsDynamicTableFull
                :tableStructure="tm('inquiry.variables_table')"
                :storeToUpdate="studentInputs"
                :keyToUpdate="studentInputs.activity3a.activity3aPlan"
                :addRow="true"
                :newRow="['', '', '']"
            />
        </div>

        <label class="font-bold block mt-8">Τα αποτελέσματά σας:</label>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="✍"></textarea>


        <hr />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Με βάση το πείραμα, το/τα συμπέρασμα(τα) μας είναι:</label>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>


        <hr />

    
        <p>Τώρα αναμένεται να βρείτε στοιχεία από δευτερεύουσες πηγές για να επιβεβαιώσετε εκ νέου τα ευρήματά σας χρησιμοποιώντας το ακόλουθο εργαλείο.</p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Γράψετε μια σύντομη περίληψη των ευρημάτων σας εδώ:</label>
        <p class="italic">
            Τα δευτερεύοντα δεδομένα επιβεβαίωσαν τα ευρήματά σας; Εάν όχι, γιατί πιστεύετε;<br />
            Παρακαλούμε όπως δηλώσετε εάν ο μύθος που επιλέξατε επιβεβαιώθηκε ή απορρίφθηκε βάση των ευρημάτων σας.
        </p>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aSecondary" placeholder="✍"></textarea>

    </div>
</template>


<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();
    const {tm} = useI18n({scope:"global"});
</script>