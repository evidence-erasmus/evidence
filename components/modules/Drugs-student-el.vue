<script setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();

    const changeTab = (index) => {
        userPrefs.setLearnPath("learnPathViruses", index);
    }
</script>

<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" />
        </ClientOnly>



        <section class="e-article print:not-prose" lang="el" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <!-- <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" /> -->
            <h1 class="mb-0">Ναρκωτικά</h1>
            <h5 class="font-normal uppercase leading-tight">Υλικό Μαθητή</h5>
        
            <section id="s1">
                <h2 id="s1t">Εισαγωγή</h2>

                <p>
                    Σε αυτή την ενότητα καλείστε να καταρρίψετε ή να επιβεβαιώσετε ένα μύθο σχετικά με τις ναρκωτικές ουσίες. Ένα ναρκωτικό που προτείνεται στη συγκεκριμένη ενότητα για περαιτέρω μελέτη είναι η κάνναβη (γνωστή και ως μαριχουάνα). Ένα άλλο είναι το MMS (Miracle Mineral Solution), το οποίο είναι μια εμπορική ονομασία για ένα υδατικό διάλυμα διοξειδίου του χλωρίου, ένα βιομηχανικό λευκαντικό μέσο, το οποίο έχει προωθηθεί ψευδώς σε πολλές χώρες ως θεραπεία για ασθένειες όπως ο HIV, ο καρκίνος, το COVID-19 κλπ. 
                </p>
                <p>
                    Μέσω ενός <NuxtLink to="#a1">εισαγωγικού βίντεο</NuxtLink>, θα εντοπίσετε ορισμένες απόψεις σχετικά με τις ναρκωτικές ουσίες πάνω στις οποίες θα κληθείτε να εκφράσετε τη γνώμη σας συζητώντας με τα μέλη της ομάδας σας. Στη συνέχεια, καλείστε να επιλέξετε ένα από αυτούς τους μύθους και να τον καταρρίψετε μελετώντας δευτερoγενείς πηγές πληροφόρησης (π.χ. πηγές πληροφόρησης από το διαδίκτυο). (βλέπε εικόνα 1)
                </p>

                <UiContentImage src="https://evidence.onkel.ee/assets/mythbusting-el.webp" :elevated="true">
                    <template #caption>
                        <b>Εικόνα 1.</b> Διάγραμμα πορείας ενοτήτων Evidence
                    </template>
                </UiContentImage>

                <p>
                    Μέσω της συγκεκριμένης δραστηριότητας, θα μάθετε να αξιολογείτε την αξιοπιστία των πηγών πληροφόρησης (ερευνητικά άρθρα, δημοφιλείς επιστημονικές πηγές, άλλα και πηγές που προέρχονται από τα μέσα κοινωνικής ενημέρωσης). Αρχικά, θα χρειαστεί να θέσετε μια ελεγχόμενη υπόθεση ή ένα ερευνητικό ερώτημα και να βρείτε δεδομένα που θα επιβεβαιώσουν ή θα απορρίψουν την υπόθεση ή και/να απαντήσουν στο ερευνητικό ερώτημα. Αφού διατυπώσετε τα συμπεράσματά σας, θα προετοιμαστείτε με σκοπό να παρουσιάσετε τα ευρήματά σας στους συμμαθητές σας (ή σε άλλο κοινό) με επιστημονικό και πειστικό τρόπο.  Η ενότητα ολοκληρώνεται μέσω μίας μελέτης περίπτωσης κατά την οποία καλείστε να βρείτε λύση για ένα ηθικό δίλημμα που σχετίζεται με τα ναρκωτικά.
                </p>
            </section>
                        
 
            






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="a1">
                <h2 id="a1t">Δραστηριότητα 1: Παρουσίαση Εισαγωγικού Βίντεο</h2>
                <p>Παρακολουθήστε προσεχτικά το βίντεo. Καταγράψτε τις αρχικές σας σκέψεις και τα συναισθήματά σας.</p>
                <UiYoutube video="cN5KV_WJubw" />
            </section>

 


<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />

            <section id="a2">
                <h2 id="a2t">Δραστηριότητα 2: Ομαδικές Συζητήσεις</h2>

                <p>Αφού παρακολουθήσετε το βίντεο καλείστε να συζητήσετε το θέμα στις ομάδες σας.</p>
                <ol class="leading-tight">
                    <li>Αρχικά εκφράστε τις αρχικές σας σκέψεις για το θέμα στα υπόλοιπα μέλη της ομάδας σας.</li>
                    <li>Ως ομάδα, επιλέξτε έναν από τους πιο κάτω μύθους με σκοπό να τον καταρρίψετε βασισμένοι σε πληροφορίες που θα βρείτε από το διαδίκτυο (π.χ. βίντεο, ενημερωτικά δελτία). Μπορείτε να επιλέξετε έναν από τους παρακάτω μύθους ή να ορίσετε έναν δικό σας (σε αυτήν την περίπτωση συζητήστε το πρώτα με τον δάσκαλο σας):</li>
                </ol>
                <ul class="leading-tight">
                    <li><span class="text-rose-400 font-bold">Μύθος 1:</span> Η κάνναβη δεν είναι επικίνδυνη για την υγεία.</li>
                    <li><span class="text-rose-400 font-bold">Μύθος 2:</span> Η χρήση της κάνναβης είναι κατάλληλη για μερικούς νέους.</li>
                    <li><span class="text-rose-400 font-bold">Μύθος 3:</span> Η κάνναβη αποτελεί ένα ναρκωτικό που χρησιμεύει στην ιατρική.</li>
                    <li><span class="text-rose-400 font-bold">Μύθος 4:</span> Η κάνναβη βοηθά στη βελτίωση της ανθρώπινης διάθεσης και προωθεί την ψυχική υγεία.</li>
                    <li><span class="text-rose-400 font-bold">Μύθος 5:</span> Η κάνναβη δεν είναι εθιστική.</li>
                    <li><span class="text-rose-400 font-bold">Μύθος 6:</span> Η κάνναβη είναι ένα ναρκωτικό που σε βοηθάει να ξεφύγεις από την πραγματικότητα.</li>
                    <li><span class="text-rose-400 font-bold">Μύθος 7:</span> Δεν μπορεί κάποιος να κάνει υπερβολική χρήση κάνναβης.</li>
                    <li><span class="text-rose-400 font-bold">Μύθος 8:</span> Ο παθητικός δέκτης του καπνού της κάνναβης είναι ασφαλής.</li>
                    <li><span class="text-rose-400 font-bold">Μύθος 9:</span> Το ναρκωτικό MMS θεραπεύει από τον ιό COVID-19</li>
                    <li><span class="text-rose-400 font-bold">Μύθος 10:</span> Το ναρκωτικό MMS θεραπεύει τον αυτισμό.</li>
                </ul>
            </section>

            





<!-- 
    333333 
        33
     33333
        33
    333333
 -->            



            <section id="a3">
                <h2 id="a3t">
                    Δραστηριότητα 3: Κατάρριψη του μύθου
                </h2>
                
                <ModulesDrugsStudentActivityEl />
                
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

            <section id="s5">
                <h2 id="s5t">Δραστηριότητα 6: Μελέτες περιπτώσεων</h2>
                

                <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                    <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                        <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'text-slate-50 ring-4 ring-blue-400 ring-offset-2 ring-offset-blue-300': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Μελέτη Περίπτωσης 1</button>
                            </Tab>
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'text-slate-50 ring-4 ring-blue-400 ring-offset-2 ring-offset-blue-300': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Μελέτη Περίπτωσης 2</button>
                            </Tab>
                        </TabList>
                        <TabPanels class="mt-2">
                            <TabPanel class="focus:outline-none">
                                <ModulesDrugsStudentCasestudy1El />
                            </TabPanel>
                            <TabPanel class="focus:outline-none">
                                <ModulesDrugsStudentCasestudy2El />
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>


            </section>

        </section>
    </div>
</template>