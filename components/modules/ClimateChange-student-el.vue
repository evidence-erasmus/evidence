<script setup>
    // import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 
    const userPrefs = useUserPreferences();

    

    // const changeTab = (index) => {
    //     userPrefs.setLearnPath("learnPathViruses", index);
    // } 
</script>

<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="climatechange-student-et" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="el" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Κλιματική Αλλαγή</h1>
            <h5 class="font-normal uppercase leading-tight">Υλικό Μαθητή</h5>
        
            
            <section id="s-1">
                <h2 id="s-1t">Εισαγωγή</h2>
                <p>
                    Σε αυτήν την ενότητα, καλείστε να καταρρίψετε ή να επιβεβαιώσετε έναν κοινό μύθο σχετικά με την κλιματική αλλαγή. Αφού παρακολουθήσετε το εισαγωγικό βίντεο σχετικά με τους μύθους που σχετίζονται με την κλιματική αλλαγή, θα τους συζητήσετε σε ομάδες και θα επιλέξετε έναν μύθο. Η ομαδική συζήτηση θα οδηγήσει στην επόμενη δραστηριότητα κατά τη διάρκεια της οποίας θα αναζητήσετε στοιχεία για να καταρρίψετε ή να επιβεβαιώσετε τον μύθο που επιλέξατε προηγουμένως. (Διάγραμμα 1). Για τον σκοπό αυτό, θα μπορούσατε να ακολουθήσετε την Ανοιχτή ή την Καθοδηγούμενη Διερεύνηση. Στην πρώτη περίπτωση (Ανοιχτή Διερεύνηση), θα αναζητήσετε τυχόν επιστημονικές πηγές στο διαδίκτυο (π.χ. βίντεο, άρθρα, ιστοσελίδες, κινούμενα σχέδια) και θα εφαρμόσετε το δικό σας πλάνο δραστηριοτήτων για να καταρρίψετε ή να επιβεβαιώσετε τον μύθο σας. Στη 2η περίπτωση (Καθοδηγούμενη Διερεύνηση), θα εφαρμόσετε ένα συγκεκριμένο προτεινόμενο πλάνο δραστηριοτήτων (π.χ. προτεινόμενο βίντεο, επιλεγμένα άρθρα, προτεινόμενα πειράματα) προκειμένου να καταρρίψετε ή να επιβεβαιώσετε τον μύθο σας. Μέσω της δραστηριότητας αυτής, θα μάθετε να αξιολογείτε την αξιοπιστία των πηγών πληροφοριών (π.χ. βάσεις δεδομένων επιστημονικών ερευνών, βίντεο, ιστοσελίδες). Φυσικά, προηγουμένως θα διατυπώσετε μια υπόθεση την οποία προτίθεστε να ελέγξετε. Αφού διατυπώσετε τα συμπεράσματά σας, θα προετοιμαστείτε να παρουσιάσετε τα ευρήματά σας στους συμμαθητές σας (ή στο διαφορετικό κοινό) με σχετικό και πειστικό τρόπο (π.χ. με τη μορφή αναρτήσεων βίντεο). Η ενότητα ολοκληρώνεται με ένα παιχνίδι ρόλων όπου μπορείτε να προτείνετε λύσεις χρησιμοποιώντας τις επιστημονικές σας γνώσεις και αποκλίνοντας από τις προσωπικές και κοινωνικές σας αξίες.
                </p>
                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-el.webp" />
            </section>




<!--
    222222
        22
    222222
    22
    222222
-->


            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-2">
                <h2 id="s-2t">Δραστηριότητα 1: Παρουσίαση Εισαγωγικού Βίντεο</h2>
                <p>
                    Παρακολουθήστε το εισαγωγικό βίντεο. Σημειώστε τις αρχικές σκέψεις και τα συναισθήματά σας σχετικά με τα ζητήματα που παρουσιάζονται.
                </p>
                <UiYoutube video="CbJ7GmgEAAo" />
            </section>



<!-- 
    333333 
        33
     33333
        33
    333333
 -->
            


            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-3">
                <h2 id="s-3t">Δραστηριότητα 2: Ομαδική Συζήτηση</h2>
                <p>
                    Αφού παρακολουθήσετε το <a href="https://www.youtube.com/watch?v=CbJ7GmgEAAo&t=281s" target="_blank" rel="noopener noreferrer">βίντεο</a>, καλείστε να συζητήσετε το θέμα σε μικρές ομάδες (4-6 μέλη).
                </p>
                <ol>
                    <li>Παρακαλούμε, διατυπώστε τις αρχικές σκέψεις και τα συναισθήματά σας για τα θέματα που παρουσιάζονται στο βίντεο, στους συνομηλίκους σας.</li>
                    <li>Ως ομάδα, καλείστε να επιλέξετε έναν από τους μύθους που αφορούν στην κλιματική αλλαγή, τον οποίο θα καταρρίψετε ή θα επιβεβαιώσετε με βάση τις επιστημονικές πηγές που θα σας δοθούν.</li>
                    <li>Μετά την επιλογή του μύθου που θα διερευνήσετε, αποφασίστε εάν θα ακολουθήσετε την Ανοιχτή ή Καθοδηγούμενη Διερεύνηση και ακολουθήστε τον αντίστοιχο σύνδεσμο: Ανοιχτή Διερεύνηση ή Καθοδηγούμενη Διερεύνηση (Μύθος 1, Μύθος 2, Μύθος 3, Μύθος 4, Μύθος 5, Μύθος 6, Μύθος 7)</li>
                </ol>
            </section>    

            




            
            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-4">
                <h2 id="s-4t" class="bg-rose-100">Δραστηριότητα 3: Μύθοι για την κλιματική αλλαγή</h2>

                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth-1">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">1<sup>ος</sup> Μύθος:</span> Η εξαφάνιση των ειδών είναι μια φυσική διαδικασία. Μαζικές εξαφανίσεις ειδών συνέβαιναν πάντα.</h4>
                    <p>Η εξαφάνιση των ειδών είναι ένα ιστορικό πρόβλημα. Από τους προϊστορικούς χρόνους έχουμε στοιχεία για μια σειρά μαζικών εξαφανίσεων, με πιο αξιοσημείωτη την εξαφάνιση των δεινοσαύρων. Αυτή η εξαφάνιση, που έλαβε χώρα πριν από 66.000.000 χρόνια, αποδόθηκε στην πρόσκρουση ενός αστεροειδούς στη Γη. Με τα χρόνια έχουμε και άλλα γνωστά παραδείγματα όπως η εξαφάνιση των μαμούθ. Οι αιτίες εξαφάνισης που έχουν καταγραφεί ποικίλλουν.</p>
                    <p>Η ιδέα ότι η ανθρωπότητα είναι ικανή να επηρεάσει και να ενοχλήσει δυνάμεις τέτοιου μεγέθους αντικατοπτρίζει μια εγωκεντρική αλαζονεία. Η ανθρωπότητα είναι ένα υποσύνολο της Φύσης. Η φύση δεν είναι υποσύνολο της ανθρωπότητας. Οι άνθρωποι δεν μπορούν ούτε να προκαλέσουν ούτε να παρέμβουν για να διορθώσουν αυτές τις διαδικασίες (Financial Sense University).</p>
                    <p>
                        <a class="break-all" href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
                    </p>
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'ΑΝΟΙΧΤΉ ΔΙΕΡΕΎΝΗΣΗ', url:'./inquiry/open', blank:false},
                        {text:'Καθοδηγούμενη Διερεύνηση', url:'./inquiry/myth1', blank:false}
                    ]" />
                </UiCardInfo>

                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth2">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">2<sup>ος</sup> Μύθος:</span> Οι οργανισμοί μπορούν να προσαρμοστούν στις κλιματικές αλλαγές.</h4>
                    <p>Η γη καταγράφει πορεία ιστορίας 4,54 δισεκατομμυρίων ετών. Οι καιρικές συνθήκες που επικρατούσαν κατά καιρούς στον πλανήτη μεταβάλλονταν. Ως εκ τούτου, οι οργανισμοί οι οποίοι ζούσαν στη γη αναγκάζονταν να προσαρμοστούν στις νέες συνθήκες ώστε να επιβιώσουν και να διατηρηθούν. Με αυτό τον τρόπο πρόκυπτε και η εξέλιξη των ειδών.</p>
                    <p>Τα φυτά και τα ζώα προσαρμόστηκαν ήδη αρκετές φορές σε αντίξοες συνθήκες (π.χ. αλλαγή κλιματικών συνθηκών, πτώση μετεωριτών, εκρήξεις ηφαιστείων). Το γεγονός αυτό, τα καθιστά ικανά να προσαρμοστούν στην άνοδο της θερμοκρασίας και στην κατάσταση που ονομάζουμε σήμερα κλιματική αλλαγή. Με άλλα λόγια, τα είδη είναι ικανά να επιβιώσουν και να διατηρηθούν στις νέες συνθήκες.</p>
                    <p>
                        <a class="break-all" href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
                    </p>
                    <UiNavButtonBar :buttons="[
                        {text:'ΑΝΟΙΧΤΉ ΔΙΕΡΕΎΝΗΣΗ', url:'./inquiry/open', blank:false},
                        {text:'Καθοδηγούμενη Διερεύνηση', url:'./inquiry/myth2', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth3">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">3<sup>ος</sup> Μύθος:</span> Η επιστήμη της κλιματικής αλλαγής δεν είναι αξιόπιστη.</h4>
                    <p class="pl-4 border-l border-slate-300">
                        <i>«Οι μετεωρολογικοί σταθμοί βρίσκονται σε περιοχές στις οποίες τα δεδομένα που συλλέγονται δεν είναι αντιπροσωπευτικά για τις κλιματικές αλλαγές και κατ’ επέκταση αναξιόπιστα για την μελέτη του παγκόσμιου κλίματος. Οι επιστήμονες στοχεύουν στην τρομοκρατία του κόσμου για δεδομένα, τα οποία οι ίδιοι δημιουργούν κάτω από τις συνθήκες που θέλουν. Συγκεκριμένα, στις ΗΠΑ εντοπίστηκαν σταθμοί μελέτης του κλίματος που βρίσκονται δίπλα στους ανεμιστήρες καυσαερίων των μονάδων κλιματισμού, περιτριγυρισμένοι από ασφάλτινους χώρους στάθμευσης και δρόμους, σε καυτές στέγες και κοντά σε πεζοδρόμια και κτίρια που απορροφούν και εκπέμπουν θερμότητα.»</i>
                        <br />
                        <a href="http://wattsupwiththat.files.wordpress.com/2009/05/surfacestationsreport_spring09.pdf" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —Watts 2009
                        </a>
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/surface-temperature-measurements-basic.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/surface-temperature-measurements-basic.htm</a>
                    </p>
                    <UiNavButtonBar :buttons="[
                        {text:'ΑΝΟΙΧΤΉ ΔΙΕΡΕΎΝΗΣΗ', url:'./inquiry/open', blank:false},
                        {text:'Καθοδηγούμενη Διερεύνηση', url:'./inquiry/myth3', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>

                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth4">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">4<sup>ος</sup> Μύθος:</span> Η αύξηση της θερμοκρασίας είναι για καλό.</h4>
                    <p class="pl-4 border-l border-slate-300">
                        <i>«Παρεμπιπτόντως, αν πρόκειται να ψηφίσετε κάτι, ψηφίστε υπέρ της θέρμανσης. Λιγότεροι θάνατοι λόγω ψύχους, περιοχές πιο κατοικήσιμες, μεγαλύτερες καλλιέργειες, μεγαλύτερη περίοδος ανάπτυξης. Αυτό είναι καλό. Η θέρμανση βοηθά τους φτωχούς.»</i>
                        <br />
                        <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&feature=youtu.be&t=353" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —John MacArthur
                        </a>
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/global-warming-positives-negatives.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/global-warming-positives-negatives.htm</a>
                    </p>
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'ΑΝΟΙΧΤΉ ΔΙΕΡΕΎΝΗΣΗ', url:'./inquiry/open', blank:false},
                        {text:'Καθοδηγούμενη Διερεύνηση', url:'./inquiry/myth4', blank:false}
                    ]" />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth5">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">5<sup>ος</sup> Μύθος:</span> Δεν υπάρχει συσχέτιση μεταξύ CO2 και θερμοκρασίας.</h4>
                    <p class="pl-4 border-l border-slate-300">
                        <i>«Ήταν η μεταπολεμική εκβιομηχάνιση που προκάλεσε την ταχεία άνοδο των παγκόσμιων εκπομπών CO₂, αλλά μέχρι το 1945 που ξεκίνησε, η Γη βρισκόταν ήδη σε φάση ψύξης που ξεκίνησε γύρω στο 1942 και συνεχίστηκε μέχρι το 1975. Με 32 χρόνια ραγδαίας αύξησης των παγκόσμιων θερμοκρασιών και μόνο μια μικρή αύξηση στις παγκόσμιες εκπομπές CO2, ακολουθούμενη από 33 χρόνια αργής ψύξης των παγκόσμιων θερμοκρασιών με ραγδαίες αυξήσεις στις παγκόσμιες εκπομπές CO₂, ήταν παραπλανητικό για την IPCC να ισχυριστεί ότι οι εκπομπές CO₂ ήταν κυρίως υπεύθυνες για την παρατηρούμενη υπερθέρμανση του πλανήτη τον 20ο αιώνα.»</i>
                        <br />
                        <a href="https://archive.md/q3Tim" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —Norm Kalmanovitch
                        </a>
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
                    </p>
                    <UiNavButtonBar :buttons="[
                        {text:'ΑΝΟΙΧΤΉ ΔΙΕΡΕΎΝΗΣΗ', url:'./inquiry/open', blank:false},
                        {text:'Καθοδηγούμενη Διερεύνηση', url:'./inquiry/myth5', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth6">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">6<sup>ος</sup> Μύθος:</span> Οι δράσεις για την κλιματική αλλαγή θα κάνουν τους ανθρώπους φτωχότερους.</h4>
                    <p class="pl-4 border-l border-slate-300">
                        <i>«Τα ορυκτά καύσιμα έχουν τροφοδοτήσει οχήματα, εργοστάσια και τεχνολογία, επιτρέποντας στους ανθρώπους τον περασμένο αιώνα να κάνουν πράγματα σε μια κλίμακα και ταχύτητα που προηγουμένως θα ήταν αδύνατη. Αυτό έδωσε τη δυνατότητα στους ανθρώπους να κάνουν, να πουλήσουν και να αγοράσουν περισσότερα πράγματα και να γίνουν πλουσιότεροι. Ως εκ τούτου, η διακοπή της χρήσης άνθρακα θα κάνει τους ανθρώπους φτωχότερους. Οι προσπάθειες μείωσης των εκπομπών αερίων του θερμοκηπίου θα έχουν συνέπειες. Τα ορυκτά καύσιμα είναι απαραίτητα για την παγκόσμια ανάπτυξη. Επομένως, ο περιορισμός της χρήσης τους, αναπόφευκτα θα εμποδίσει αυτή την ανάπτυξη και θα αυξήσει το κόστος ζωής, βλάπτοντας τους φτωχότερους.»</i>
                        <br />
                        <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&feature=youtu.be&t=353" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —John MacArthur
                        </a>
                    </p>
                    <UiNavButtonBar :buttons="[
                        {text:'ΑΝΟΙΧΤΉ ΔΙΕΡΕΎΝΗΣΗ', url:'./inquiry/open', blank:false},
                        {text:'Καθοδηγούμενη Διερεύνηση', url:'./inquiry/myth6', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>

                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth7">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">7<sup>ος</sup> Μύθος:</span> Το κλίμα της γης πάντα άλλαζε, και τώρα το ίδιο συμβαίνει.</h4>
                    <p class="pl-4 border-l border-slate-300">
                        <i>«Το κλίμα πάντα άλλαζε. Είχαμε εποχές των παγετώνων και θερμότερες περιόδους. Σκεφτείτε μόνο ότι βρέθηκαν αλιγάτορες στο Spitzbergen1!</i>
                        <br />
                        <i>Οι εποχές των παγετώνων έχουν εμφανιστεί σε κύκλο εκατό χιλιάδων ετών τα τελευταία 700 χιλιάδες χρόνια, και υπήρξαν προηγούμενες περίοδοι που φαίνεται να ήταν θερμότερες από την παρούσα, παρόλο που τα επίπεδα CO2 ήταν χαμηλότερα απ’ ότι είναι τώρα. Πιο πρόσφατα, είχαμε τη μεσαιωνική ζεστή περίοδο και τη μικρή εποχή των παγετώνων.»</i>
                        <br />
                        <a href="http://www.quadrant.org.au/blogs/doomed-planet/2009/07/resisting-climate-hysteria" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —Richard Lindzen
                        </a>
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm</a>
                    </p>
                    <UiNavButtonBar :buttons="[
                        {text:'ΑΝΟΙΧΤΉ ΔΙΕΡΕΎΝΗΣΗ', url:'./inquiry/open', blank:false},
                        {text:'Καθοδηγούμενη Διερεύνηση', url:'./inquiry/myth7', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
            </section>




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






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-5">
                <h2 id="s-5t">Δραστηριότητα 6: Παιγνίδι Επιχειρηματολογίας</h2>

                <p>Το ακόλουθο παιγνίδι επιχειρηματολογίας ολοκληρώνει τη θεματική ενότητα της κλιματικής αλλαγής. Διαβάστε προσεχτικά τις ακόλουθες οδηγίες.</p>
                <h3>Οδηγίες Παιγνιδιού:</h3>
                <ol>
                    <li>Οι παίκτες χωρίζονται σε ισάριθμες ομάδες.</li>
                    <li>
                        Κάθε ομάδα επιλέγει μια πράσινη και μια μπλε κάρτα. Στις πράσινες κάρτες καταγράφονται ιστορίες που σχετίζονται με την κλιματική αλλαγή. Οι ιστορίες βασίζονται σε πραγματικά γεγονότα. Κάθε πράσινη κάρτα αντιστοιχεί σε μια μπλε κάρτα πληροφοριών που σχετίζονται με την ιστορία που περιλαμβάνει και δίνουν την απάντηση σε αυτήν.
                    </li>
                    <li>
                        Όλοι οι παίκτες της  κάθε ομάδας διαβάζουν την πράσινη κάρτα. Οι παίκτες συζητούν την ιστορία τους στην ομάδα. Για παράδειγμα, στην πρώτη πράσινη κάρτα καταγράφεται μια πραγματική ιστορία για ένα16χρονο αρσενικό πολικό αρκουδάκι που βρέθηκε νεκρό στο Σβάλμπαρντ από ασιτία. Οι παίκτες της ομάδας προσπαθούν να εξηγήσουν γιατί πέθανε το αρκουδάκι.
                    </li>
                    <li>
                        Όταν κάθε ομάδα παρουσιάζει την ιστορία στην ολομέλεια, η ομάδα που έχει την αντίστοιχη μπλε κάρτα πληροφοριών προσπαθεί να απαντήσει στο σενάριο με τα δικά της επιχειρήματα. Σε αυτό το στάδιο, οι παίκτες μοιράζονται τις απόψεις τους με άλλους και βελτιώνουν την απάντησή τους καθώς ακούν διαφορετικά επιχειρήματα και απόψεις. Σε αυτήν την περίπτωση, η ομάδα της μπλε κάρτας υποστηρίζει ότι η αρκούδα πέθανε λόγω της κλιματικής αλλαγής.
                    </li>
                    <li>Στο τέλος του παιγνιδιού, οι παίκτες θα συνδέσουν τις κάρτες ιστορίας με τις κάρτες πληροφοριών. Κάθε επιχείρημα παίρνει 3 βαθμούς. Η ομάδα με την υψηλότερη βαθμολογία κερδίζει το παιχνίδι.</li>
                </ol>

                <hr />

                <h3>Playing cards</h3>
                <UiCardGamePrintMessage url="../tools/cards/climate-change" />
                <ToolsCardgameClimateChange :printMode="false" />
                <hr />
            </section>

        </section>
    </div>
</template>