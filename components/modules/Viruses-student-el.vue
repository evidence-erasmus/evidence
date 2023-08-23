<script setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();

    const changeTab = (index) => {
        userPrefs.setLearnPath("learnPathViruses", index);
    } 
</script>

<template>
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-6 px-10 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="answers" target="_blank" class="text-lg font-bold uppercase">Your answers</nuxt-link>
    </section>
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="viruses-student-en" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="en" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Ιοί</h1>
            <h5 class="font-normal uppercase leading-tight">Υλικό Μαθητή</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">Introduction</h2>

            
            <!-- <section class="e-card e-module__meta">
                <p class="m-0 leading-tight font-bold">
                    You may find <a href="https://docs.google.com/document/d/1DAi745eJ9z4-Nky9xG8-qXZk5kiMgk_Ti8yDXuFU7tI/edit?usp=sharing" target="_blank">this Google Docs document</a> useful to write down your answers.
                </p>
            </section> -->


            <p>
                Σε αυτήν την ενότητα, καλείστε να καταρρίψετε ή να επιβεβαιώσετε ένα κοινό μύθο σχετικά με τους ιούς. Μετά την παρακολούθηση του εισαγωγικού βίντεο όπου αναφέρονται ορισμένοι μύθοι που σχετίζονται με τους ιούς αναμένεται στις ομάδες σας να συζητήσετε για το θέμα και να εκφράσετε τις απόψεις σας. Η ομαδική συζήτηση θα οδηγήσει στη διεξαγωγή μιας δραστηριότητας κατά τη διάρκεια της οποίας θα αναζητήσετε δευτερεύοντα τεκμήρια (αναζήτηση από διαφορετικές πηγές και το διαδίκτυο ή πειραματικά) για να καταρρίψετε ή να επιβεβαιώσετε έναν επιλεγμένο μύθο. 
            </p>
            <p>
                Μέσω αυτής της δραστηριότητας, θα μάθετε να αξιολογείτε την αξιοπιστία των πηγών πληροφόρησης (επιστημονικές βάσεις δεδομένων, δημοφιλείς επιστημονικές πηγές, άλλα μέσα κοινωνικής ενημέρωσης) και θα αναπτύξετε περεταίρω τις πειραματικές σας ικανότητες. Πρώτα θα πρέπει να θέσετε μια ελεγχόμενη υπόθεση ή ένα διερευνήσιμο ερώτημα και στην συνέχεια να βρείτε στοιχεία που να αποδέχονται/απορρίπτουν την αρχική σας υπόθεση/ να απαντούν στο διερευνήσιμο σας ερώτημα. Αφού διατυπώσετε τα συμπεράσματά σας, θα προετοιμαστείτε για να παρουσιάσετε τα ευρήματά σας στους συμμαθητές σας (ή σε άλλο κοινό) με επιστημονικό και πειστικό τρόπο (π.χ. με τη μορφή βίντεο). Η ενότητα ολοκληρώνεται με ένα παιχνίδι επιχειρηματολογίας όπου μπορείτε να αξιοποιήσετε τις επιστημονικές σας γνώσεις για τους ιούς.
            </p>
        
                
            

            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-1">Δραστηριότητα 1: Παρουσίαση Εισαγωγικού Βίντεο</h2>
            
            <!-- <ModulesStructure>
                    <template #title>Activity 1<br />OUTLINING THE MOST COMMON TOPIC-RELATED MYTHS</template>
                    <template #icons>
                        <div class="e-icon--rounded ">
                            <Icon name="material-symbols:youtube-tv-outline" class="text-white" />
                        </div>
                        <Icon name="mdi:arrow-right-thick" />
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:ouroboros" class="text-white" />
                        </div>
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:unicorn" class="text-white" />
                        </div>
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:all-seeing-eye" class="text-white" />
                        </div>
                    </template>
                </ModulesStructure> -->

            <p>Σημειώστε τις αρχικές σκέψεις και τα συναισθήματά σας σχετικά με τα ζητήματα που παρουσιάζονται στο βίντεο.</p>

            <UiYoutube video="t4v-36h2noo" /> 
            

            



<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-2">Δραστηριότητα 2: Ομαδική Συζήτηση</h2>
            
            <!-- <ModulesStructure>
                    <template #title>Activity 2<br />CHOOSING A MYTH</template>
                    <template #icons>
                        <div class="e-icon--rounded ">
                            <Icon name="fa6-solid:people-group" class="text-white" />
                        </div>
                        <div class="e-icon--rounded ">
                            <Icon name="mdi:frequently-asked-questions" class="text-white" />
                        </div>
                        <Icon name="mdi:check-bold" />
                        
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:unicorn" class="text-white" />
                        </div>
                    </template>
                </ModulesStructure> -->
            
            <p>Αφού παρακολουθήσετε το βίντεο, καλείστε να συζητήσετε το θέμα σε μικρές ομάδες (4-6 μέλη).</p>
            <ol>
                <li>Σας παρακαλούμε να διατυπώσετε στην ομάδας σας τις αρχικές σκέψεις και συναισθήματά σας για τα θέματα που παρουσιάζονται στο βίντεο.</li>
                <li>Ως ομάδα, καλείστε να επιλέξετε έναν από τους μύθους που αφορούν τους ιούς, τον οποίο θα καταρρίψετε ή θα επιβεβαιώσετε με βάση πληροφορίες που μπορείτε να βρείτε από το διαδίκτυο, τα σχολικά βιβλία κ.λπ.</li>
            </ol>
            <p>Μπορείτε να επιλέξετε έναν από τους παρακάτω μύθους ή να ορίσετε έναν δικό σας (σε αυτήν την περίπτωση παρακαλούμε όπως το συζητήσετε πρώτα με την δασκάλα σας).:</p>

            
            <h3><span class="text-rose-400">Μύθος 1:</span> Τα εμβόλια προκαλούν αυτισμό/σοβαρές παρενέργειες.</h3>
            <p>Μερικοί άνθρωποι πιστεύουν ότι τα ίδια τα εμβόλια και τα συντηρητικά τους μπορούν να προκαλέσουν σοβαρές αντιδράσεις στον  οργανισμό, όπως τον αυτισμό που πρόκειται για μια ομάδα αναπτυξιακών αναπηριών που μπορεί να προκαλέσει σημαντικές κοινωνικές, επικοινωνιακές και συμπεριφορικές προκλήσεις. Είναι δικαιολογημένοι αυτοί οι ισχυρισμοί;</p>

            <h3><span class="text-rose-400">Μύθος 2:</span> Το ανοσοποιητικό σύστημα στα βρέφη δεν μπορεί να δεχθεί πολλαπλά εμβόλια.</h3>
            <p>Μερικές μέρες ακόμη και μερικές εβδομάδες/μήνες μετά την γέννηση τους τα βρέφη δέχονται αρκετά διαφορετικά εμβόλια. Το ερώτημα είναι κατά πόσο μπορεί ένα βρέφος να το αντέξει αυτό;</p>

            <h3><span class="text-rose-400">Μύθος 3:</span> Η φυσική ανοσία είναι καλύτερη από αυτήν που αποκτάς με εμβόλιο.</h3>
            <p>Μύθος 3: Η φυσική ανοσία είναι καλύτερη από αυτήν που αποκτάς με εμβόλιο. Η φυσική ανοσία επέρχεται όταν ο οργανισμός εκτεθεί στην μολυσματική ασθένεια. Ενώ η ανοσία που προκαλείται από το εμβόλιο αποκτάται μέσω μιας νεκρής ή εξασθενημένης μορφής του ιού ή του mRNA που δημιουργήθηκε σε εργαστήριο για να διδάξει στα κύτταρα μας πώς να φτιάχνουν μια πρωτεΐνη ή ακόμα μόνο ένα κομμάτι πρωτεΐνης ή μια τροποποιημένη εκδοχή ενός ιού που πυροδοτεί μια ανοσολογική ανταπόκριση. Αυτό δημιουργεί το ερώτημα του κατά πόσο αυτά τα δύο είναι ισάξια ή όχι.</p>

            <h3><span class="text-rose-400">Μύθος 4:</span> Τα εμβόλια περιέχουν τοξίνες.</h3>
            <p>Μερικές φορές λένε ότι τα εμβόλια περιέχουν συντηρητικά ή πρόσθετες ουσίες, μερικές εκ τον οποίων είναι τοξικές όπως ο υδράργυρος, το αλουμίνιο, η φορμαλδεΰδη κ.λπ. Αληθεύουν αυτοί οι ισχυρισμοί και αν ναι κατά πόσο;</p>

            <h3><span class="text-rose-400">Μύθος 5:</span> Η μείωση των μολύνσεων οφείλεται στην καλύτερη υγιεινή και καθαριότητα και όχι στα εμβόλια.</h3>
            <p>Η εξάπλωση της μόλυνσης πιστεύεται πως έχει άμεση σχέση με τις περιβαλλοντικές συνθήκες, την προσωπική υγιεινή και την καθαριότητα. Κατά τους τελευταίες δύο αιώνες παρατηρήθηκε βελτίωση σε όλα αυτά. Ταυτόχρονα όμως ο αριθμός των μολύνσεων μειώθηκε ενώ ο αριθμός των εμβολιασμών αυξήθηκε. Μπορούμε όμως να πούμε ότι τα εμβόλια δεν παίζουν κάποιο ρόλο;</p>

            <h3><span class="text-rose-400">Μύθος 6:</span> Τα εμβόλια μπορούν να μολύνουν το παιδί μου με την ασθένεια από την οποία προσπαθούν να το προστατεύσουν.</h3>
            <p>Μερικά από τα εμβόλια (της ιλαράς, ανεμοβλογιάς κλπ.) χρησιμοποιούν μια εξασθενημένη μορφή του νεκρού οργανισμού (ζωντανά εξασθενημένα εμβόλια). Το ερώτημα είναι κατά πόσο αυτό θα μολύνει το παιδί μου;</p>

            <h3><span class="text-rose-400">Μύθος 7:</span> Δεν χρειάζεται να εμβολιαζόμαστε γιατί τα ποσοστά μόλυνσης είναι χαμηλά σε πολλές χώρες.</h3>
            <p>Αφού πολύ λίγοι άνθρωποι είναι μολυσμένοι τότε η πιθανότητα να έρθω σε επαφή με αυτά τα άτομα είναι πολύ μικρή. Επίσης είναι αυτονόητο ότι δεν θα ταξιδέψω σε περιοχές με ψηλό ποσοστό μόλυνσης. Ως εκ τούτου, μερικοί άνθρωποι πιστεύουν ότι θα μπορούσαμε να σταματήσουμε τα περισσότερα εμβόλια που χορηγούνται τακτικά στα παιδιά.</p>

            <h3><span class="text-rose-400">Μύθος 8:</span> Το σαπούνι είναι ισάξια καλό στο να σκοτώνει συγκεκριμένους ιούς (π.χ. Covid-19)</h3>
            <p>Μια μέθοδος αποστείρωσης είναι η χρήση οινοπνεύματος και η άλλη να πλένουμε τα χέρια μας με σαπούνι. Είναι όμως και τα δύο ισάξια ως πρώς την απόδοση τους;</p>

            <h3><span class="text-rose-400">Μύθος 9:</span> Η χρήση της μάσκας δεν έχει νόημα στην προστασία από αναπνευστικές ασθένειες.(π.χ. Covid-19)</h3>
            <p>Έχει γίνει πολλή συζήτηση στην κοινωνία σχετικά με την αποτελεσματικότητα της χρήσης της μάσκας για την πρόληψη ασθενειών που μεταδίδονται με σταγονίδια. Ταυτόχρονα όμως η χρήση της μάσκας ήταν μια κανονικότητα σε ορισμένους, π.χ. στους Ασιατικούς πολιτισμούς. Ωστόσο, ποια είναι τα επιστημονικά στοιχεία που το αποδεικνύουν; Ή θα μπορούσατε να δοκιμάσετε μόνοι σας την αποτελεσματικότητά τους;</p>
            
            <h3><span class="text-rose-400">Μύθος 10:</span> Η παρατεταμένη χρήση της μάσκας προκαλεί υποξία/Οι μάσκες μπορεί να προκαλέσουν δηλητηρίαση από διοξείδιο του άνθρακα.</h3>
            <p>Πιστεύεται ότι μέσω της μάσκας, θα λάβετε λιγότερο οξυγόνο. Εάν είναι αλήθεια, τότε με περιορισμένη παροχή οξυγόνου υπάρχει αυξημένος κίνδυνος έλλειψης οξυγόνου, που ονομάζεται υποξία. Την ίδια στιγμή το σώμα σας απελευθερώνει διοξείδιο του άνθρακα που σε πολύ υψηλές συγκεντρώσεις μπορεί να είναι τοξικό. Είναι όμως αυτή η υπόθεση αληθείς;</p>

            







<!-- 
    333333 
        33
     33333
        33
    333333
 -->


            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-3">Δραστηριότητα 3: Διαπραγμάτευση Μύθου</h2>

            <!-- <ModulesStructure>
                <template #title>Activity 3<br />MYTHBUSTING</template>
                <template #icons>
                    <div class="e-icon--rounded ">
                        <Icon name="fa6-solid:people-group" class="text-white" />
                    </div>
                    <div class="e-icon--rounded ">
                        <Icon name="tabler:zoom-question" class="text-white" />
                    </div>
                    <div class="e-icon--rounded ">
                        <Icon name="tabler:microscope" class="text-white" />
                    </div>
                    <Icon name="fa6-solid:arrows-spin" />
                    <div class="e-icon--rounded bg-slate-600">
                        <Icon name="game-icons:horse-head" class="text-white" />
                    </div>
                </template>
            </ModulesStructure> -->


            <UiContentImage class="mt-10" src="https://evidence.onkel.ee/assets/viruses__mythbusting--tp.webp" />

            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:alt-route">
                <div>
                    Τώρα καλείστε να διατυπώσετε μια <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method." target="_blank" rel="noopener noreferrer">ελεγχόμενη υπόθεση</a> (διερευνήσιμο ερώτημα) με βάση τον μύθο σας, να σχεδιάσετε περαιτέρω δραστηριότητες και να μοιραστείτε τις ευθύνες εντός της ομάδας σας ακολουθώντας τον κύκλο όπως δίνεται στο Διάγραμμα 2. Επίσης, θα πρέπει να σκεφτείτε εάν η υπόθεση σας μπορεί να ελεγχθεί πειραματικά χρησιμοποιώντας δευτερεύοντα τεκμήρια (δεδομένα από πειράματα που έχουν ήδη πραγματοποιηθεί) ή  βάση δικού σας πειραματισμού.
                </div>
            </UiCardInfo>

            




            <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                    <Tab as="template" v-slot="{ selected }">
                        <button
                        class="w-full rounded py-3 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                        :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                        >Δραστηριότητα 3α</button>
                    </Tab>
                    
                    <Tab as="template" v-slot="{ selected }">
                        <button
                        class="w-full rounded py-3 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                        :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                        >Δραστηριότητα 3β</button>
                    </Tab>
                    
                    </TabList>
            
                    <TabPanels class="mt-2">
                        <TabPanel class="focus:outline-none">
                            <ModulesVirusesStudentActivity3aEl />
                        </TabPanel>
                        <TabPanel class="focus:outline-none">
                            <ModulesVirusesStudentActivity3bEl />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
                </div>



<!-- 
    44   44    5555555
    44   44    55
    4444444    5555555
         44         55
         44    5555555
-->
                



            <ModulesStudentActivity45El />




<!-- 
    6666666
    66
    6666666
    66   66
    6666666
 -->






            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-6">Δραστηριότητα 6: Παιγνίδι</h2>

            <p class="text-sm italic">Αυτό το παιχνίδι πάρθηκε και τροποποιήθηκε από την ακόλουθη πηγή: <a href="https://playdecide.eu/playdecide-kits/167151" target="_blank" rel="noopener noreferrer">https://playdecide.eu/playdecide-kits/167151</a></p>

            <!-- <ModulesStructure>
                    <template #title>Activity 6<br />SOCIO-SCIENTIFIC DECISION-MAKING</template>
                    <template #icons>
                        <div class="e-icon--rounded ">
                            <Icon name="fa6-solid:people-group" class="text-white" />
                        </div>
                        <div class="e-icon--rounded ">
                            <Icon name="game-icons:rolling-dices" class="text-white" />
                        </div>
                        <div class="e-icon--rounded">
                            <Icon name="healthicons:group-discussion-meeting" class="text-white" />
                        </div>
                    </template>
            </ModulesStructure> -->

            <p>Στην παρακάτω δραστηριότητα, καλείστε να παίξετε ένα παιχνίδι τράπουλας μαζί με την ομάδα/τους συμμαθητές σας για να εξασκήσετε απλές, με σεβασμό και βασισμένα σε γεγονότα ομαδικές συζητήσεις που αναμένεται να διαμορφώσει τις κοινωνικό-επιστημονικές διαδικασίες λήψης αποφάσεων στην κοινωνία μας. Το παιχνίδι σας δίνει τη δυνατότητα να εξερευνήσετε ένα θέμα εις βάθος με ανεπίσημο και ενημερωτικό τρόπο, να εστιάσετε σε σκέψεις και απόψεις που θα ήταν δύσκολο να προσεγγίσετε και να εκφράσετε με άλλους τρόπους.</p>
            
            <p class="font-bold">Ποιο συγκεκριμένα αναμένεται από εσάς να:</p>
            <ul class="leading-tight">
                <li>Να οικειοποιηθείτε με τα προβλήματα που εμφανίζονται σχετικά με το θέμα των εμβολιασμών/ την χρήση της μάσκας και να τα αναλύσετε από διαφορετική σκοπιά.</li>
                <li>Να διατυπώσετε ή να ξεκαθαρίσετε την άποψη σας.</li>
                <li>Να δουλέψετε πάνω σε μια κοινή ομαδική αντίληψη.</li>
                <li>Να ψηφίσετε πάνω σε πολιτικές απόψεις, να κοινοποιήσετε τα αποτελέσματα σας και να τα συγκρίνετε με τις απόψεις άλλων που έπαιξαν το ίδιο παιχνίδι (και είχαν το ίδιο θέμα).</li>
            </ul>

            
            <hr>
            
            <p>Το παιχνίδι παίζετε σε ομάδες (4 μέλη).</p>

            <h3>Φάση 1 (≈ 20 λεπτά)</h3>

            <p>Κάθε ομάδα θα επιλέξει μια θεματική κάρτα με την οποία θα προχωρήσει στο παιχνίδι.</p>

            <div class="grid grid-cols-2 gap-2">
                <div class="e-card text-center">
                    <p class="my-2">Θέμα 1</p>
                    <h4 class="my-1 leading-none">Εμβολιασμός</h4>
                </div>
                <div class="e-card text-center">
                    <p class="my-2">Θέμα 2</p>
                    <h4 class="my-1 leading-none">Χρήση μάσκας σε πανδημίες με λοιμώξεις του ανώτερου αναπνευστικού συστήματος.</h4>
                </div>
            </div>


            <p>Και τα δύο θέματα έχουν αρκετά σενάρια ( κάρτες ιστορίας) που σχετίζονται με το θέμα τους.</p>

            <div class="flex flex-wrap gap-2">
                <div class="e-card text-center">Ιστορία 1</div>
                <div class="e-card text-center">Ιστορία 2</div>
                <div class="e-card text-center">Ιστορία 3</div>
                <div class="e-card text-center">Ιστορία 4</div>
                <div class="e-card text-center">Ιστορία ...</div>
            </div>

            
            <p>Όλοι οι παίχτες διαβάζουν τις κάρτες ιστορίας. Ο κάθε ένας επιλέγει μια που γι΄αυτόν έχει νόημα. Ο κάθε παίχτης κάνει μια σύντομη περίληψη της ιστορίας του στην υπόλοιπη ομάδα.</p>

            <p>Και τα 2 θέματα (εμβολιασμός και χρήση της μάσκας) έχουν συγκεκριμένο αριθμό από κάρτες πληροφοριών που σχετίζονται με το κάθε ένα.</p>

            <div class="flex flex-wrap gap-2">
                <div class="e-card text-center">Πληροφορία 1</div>
                <div class="e-card text-center">Πληροφορία 2</div>
                <div class="e-card text-center">Πληροφορία 3</div>
                <div class="e-card text-center">Πληροφορία 4</div>
                <div class="e-card text-center">Πληροφορία ...</div>
            </div>

            <p>Όλοι οι παίχτες ανταλλάζουν και διαβάζουν τις κάρτες με τις πληροφορίες. Ο καθένας μπορεί να επιλέξει δύο κάρτες πληροφορίας, επιλέγει αυτές που γι΄αυτόν έχουν νόημα. Ο κάθε παίχτης κάνει μια σύντομη περίληψη των καρτών του στην υπόλοιπη ομάδα.</p>



            <h3>Φάση 2 (≈ 20 λεπτά)</h3>
            
            <p>Συζήτηση: Σε αυτήν την φάση οι παίχτες μοιράζονται τα επιχειρήματα τους και σχηματίζουν τον τρόπο σκέψεις τους βάση των διάφορων επιχειρημάτων και αντιλήψεων που άκουσαν. Παρακαλούμε χρησιμοποιείστε τις κάρτες της φάσης 1 για να υποστηρίξετε τα επιχειρήματα σας. Οι παίχτες μπορούν να ηχογραφούν την συζήτηση ομαδοποιώντας τα θέματα που αντικατοπτρίζουν το όραμα της ομάδας. Όλοι οι τύποι καρτών μπορούν να χρησιμοποιηθούν για να γίνει η ομαδοποίηση.</p>
            

            <div class="flex flex-wrap gap-2">
                <div class="e-card text-center">Θέση 1</div>
                <div class="e-card text-center">Θέση 2</div>
                <div class="e-card text-center">Θέση 3</div>
                <div class="e-card text-center">Θέση 4</div>
            </div>

            <p>Μια κοινή απάντηση της ομάδας: Αυτή η φάση καλεί τους παίχτες να δουν τα θέματα ως ομάδα: τι απόψεις παρουσιάζονται στην ομάδα σου; Μπορείτε να καταλήξετε σε μια ομόφωνη συμφωνία για μια θέση; Αυτή η φάση θα ολοκληρωθεί ψηφίζοντας για μια συγκεκριμένη θέση (I-IV).</p>

            <p><b>Αυτό μπορεί να πραγματοποιηθεί με τις ακόλουθες δραστηριότητες:</b></p>
            <ol>
                <li class="my-4 leading-tight">
                    Διαβάστε τις πολιτικές απόψεις 1-4.
                </li>
                <li class="my-4 leading-tight">
                    Προσπαθήστε να δείτε για κοινά. Υπάρχει μια πολιτική με την οποία μπορείτε όλοι  να συνεχίσετε; Αν όχι, προσπαθήστε σαν ομάδα να διατυπώσετε την δική σας 5η πολιτική. 
                </li>
                <li class="my-4 leading-tight">
                    Όλοι οι παίχτες ψηφίζουν ατομικά με σειρά πάνω σε όλες τις πολιτικές. 
                </li>
                <li class="my-4 leading-tight">
                    Οι ψήφοι καταγράφονται στο ψηφοδέλτιο που παρέχει μια ωραία περίληψη και σας επιτρέπει να συγκρίνετε τα αποτελέσματα της ομάδας σας με αυτά άλλων παικτών.
                </li>
            </ol>





            <h3>Θέμα 1: Εμβολιασμός</h3>

            <UiCardInfo>
                <div>
                    <p>Εδώ οι κάρτες ταιριάζουν στη διάταξη της σελίδας και καταλαμβάνουν όσο λίγο χώρο απαιτεί το εσωτερικό τους περιεχόμενο. Αυτό λοιπόν είναι απλώς μια προεπισκόπηση. <b>Εάν θέλετε να δείτε τις κάρτες ως κανονικά τραπουλόχαρτα ομοιόμορφου μεγέθους και να τις εκτυπώσετε, ανοίξτε την ειδική σελίδα "προβολή καρτών".</b></p>
                    
                    <nuxt-link to="../tools/cards/viruses/theme1" target="_blank" 
                    class="mb-3 px-4 py-2 inline-flex items-center gap-2 
                    bg-sky-600 text-md rounded text-white no-underline uppercase transition
                    hover:bg-sky-700
                    print:hidden">
                        <icon name="material-symbols:print-outline-rounded" />Ανοίξτε τις εκτυπώσιμες κάρτες
                    </nuxt-link> (ανοίγει σε νέα καρτέλα)
                </div>
            </UiCardInfo>

            <ToolsCardgameVirusesTheme1 :printMode="false" />

            <hr>

            <h3>Θέμα 2: Φορώντας μάσκες λόγω πανδημικής έκρηξης της λοίμωξης του ανώτερου αναπνευστικού</h3>

            <UiCardInfo>
                <div>
                    <p>Εδώ οι κάρτες ταιριάζουν στη διάταξη της σελίδας και καταλαμβάνουν όσο λίγο χώρο απαιτεί το εσωτερικό τους περιεχόμενο. Αυτό λοιπόν είναι απλώς μια προεπισκόπηση. <b>Εάν θέλετε να δείτε τις κάρτες ως κανονικά τραπουλόχαρτα ομοιόμορφου μεγέθους και να τις εκτυπώσετε, ανοίξτε την ειδική σελίδα "προβολή καρτών".</b></p>
                    
                    <nuxt-link to="../tools/cards/viruses/theme2" target="_blank" 
                    class="mb-3 px-4 py-2 inline-flex items-center gap-2 
                    bg-sky-600 text-md rounded text-white no-underline uppercase transition
                    hover:bg-sky-700
                    print:hidden">
                        <icon name="material-symbols:print-outline-rounded" />Ανοίξτε τις εκτυπώσιμες κάρτες
                    </nuxt-link> (ανοίγει σε νέα καρτέλα)
                </div>
            </UiCardInfo>

            <ToolsCardgameVirusesTheme2 :printMode="false" />







        </section>
    </div>
</template>