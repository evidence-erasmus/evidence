<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="drugs-bg-en" />
        </ClientOnly>

        <section class="e-article" lang="el" style="hyphens: auto;">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Ναρκωτικά</h1>
            <h5 class="font-normal uppercase leading-tight">Επιστημονικό Περιεχόμενο</h5>
        
            
            <section id="s-1">
                <h2 id="s-1t">Introduction</h2>
                
                <p class="mt-20">
                    Η Ενότητα «Ναρκωτικές Ουσίες» επικεντρώνεται στην κάνναβη. 
                </p>
                <p>
                    Στην παρούσα ενότητα παρουσιάζονται οι πιο κάτω μύθοι:
                </p>
                <h4>
                    <a href="#s2">Τι είναι η κάνναβη;</a>
                </h4>
                <ul class="leading-tight">
                    <li class="my-0">
                        <a href="#myth-1">Μύθος 1: Η κάνναβη δεν είναι επικίνδυνη για την υγεία.</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth2">Μύθος 2: Η χρήση της κάνναβης είναι κατάλληλη από μερικούς νέους.</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-3">Μύθος 3. Η κάνναβη αποτελεί ένα ναρκωτικό που χρησιμεύει στην ιατρική.</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-4">Μύθος 4: Η κάνναβη βοηθά στην αύξηση της ανθρώπινης διάθεσης και προωθεί τη ψυχική υγεία.</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth5">Μύθος 5: Η κάνναβη δεν είναι εθιστική.</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-6">Μύθος 6: Η κάνναβη είναι ένα ναρκωτικό που σε βοηθάει να ξεφύγεις από την πραγματικότητα.</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-7">Μύθος 7: Δεν μπορεί κάποιος να κάνει υπερβολική χρήση κάνναβης.</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-8">Μύθος 8: Ο παθητικός δέκτης του καπνού της κάνναβης είναι ασφαλής.</a>
                    </li>
                </ul>

            </section>







            <section id="s2">
                <h2 id="s2t">What is cannabis?</h2>
            
                <p>
                    <span class="e-term">H Κάνναβη</span> (ή Μαριχουάνα) αναφέρεται σε μία ομάδα τριών φυτών με ψυχοδραστικές ιδιότητες, γνωστά ως <i>Cannabis sativa</i>, <i>Cannabis indica</i>, και <i>Cannabis ruderalis</i>. Όταν τα άνθη αυτών των φυτών συλλεχθούν και αποξηρανθούν, αποτελούν ένα από τα πιο κοινά ναρκωτικά στον κόσμο. Η κάνναβη αποτελείται από πάνω από 120 συστατικά τα οποία είναι γνωστά ως κανναβινοειδή. Τα δύο πιο γνωστά κανναβινοειδή είναι η κανναβιδιόλη (CBD) και η δέλτα-9- τετραϋδροκανναβινόλη (THC). H CBD είναι η δεύτερη πιο διαδεδομένη χημική ένωση που βρίσκεται στην κάνναβη και πρόσφατα έχει γίνει πιο δημοφιλής ως εναλλακτική θεραπεία για πολλές παθήσεις. Μπορεί να προέρχεται από σπόρους <sup><span class="tooltip" data-tip="The term “hemp” is used to mean cannabis that contains 0.3 percent or less THC content by dry weight">[1]</span></sup> κάνναβης ή από τα άνθη της κάνναβης. Η THC είναι το κύριο ψυχοδραστικό συστατικό της κάνναβης που ενεργοποιεί το σύστημα ανταμοιβής του εγκεφάλου σηματοδοτώντας την απελευθέρωση της χημικής ντοπαμίνης <a href="https://nida.nih.gov/publications/research-reports/marijuana/how-does-marijuana-produce-its-effects" target="_blank" rel="noopener noreferrer"><sup>[2]</sup></a> του εγκεφάλου. 

                </p>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/drugs__cannabis.webp"
                    credits="Pixabay: https://pixabay.com/photos/marijuana-herbal-cannabis-hemp-5858148/"
                    :elevated="true">
                    <template #caption>
                        <b>Σχήμα 1.</b> Φυτό κάνναβης
                    </template>
                </UiContentImage>
                <p>
                    Κανένα άλλο φυτό δεν προκαλεί τόση συζήτηση και λανθασμένες αντιλήψεις όπως η κάνναβη. Η χρήση και η δημοτικότητα του ανά τους αιώνες οδήγησε στο να χαρακτηρίζεται από  κάποιους ως ένα «σούπερ» φάρμακο, και από άλλους να στιγματίζεται ως «κακό» για την κοινωνία. 
                </p>
                <p>
                    Την τελευταία δεκαετία μάλιστα, η νομιμοποίηση της κάνναβης για ψυχαγωγική χρήση σε πολλές χώρες, καθώς επίσης οι ευρέως διαθέσιμες πληροφορίες για τα οφέλη που έχει οδήγησαν στην αύξηση των λανθασμένων αντιλήψεων που σχηματίζει ο κόσμος για αυτό. 
                </p>
                <p>
                    Πληροφορίες υπάρχουν πολλές όσον αφορά τους κινδύνους που προκαλεί η χρήση της κάνναβης όπως υπάρχουν και πολλές που αφορούν τα οφέλη της. Οι περισσότερες πληροφορίες βέβαια υπάρχουν στο διαδίκτυο χωρίς να δίδονται οι ανάλογες αναφορές και αποδείξεις για αυτές.
                </p>
                <p>
                    Ακολούθως, θα δούμε τι έχουν να πουν οι επιστήμονες και η ιατρική κοινότητα σχετικά με τους περισσότερους μύθους που επικρατούν σχετικά με τη χρήση της κάνναβης/μαριχουάνας κάνοντας αναφορά σε επιστημονικές μελέτες. 
                </p>
                <!-- <p>
                    More information about the health effects of cannabis can be found from:
                    <a class="break-all" href="https://docs.google.com/document/d/1kxisOjHc0qINFXhWvmdmMAJyjp7V9JmgfWXDhCKeuyk/edit" target="_blank" rel="noopener noreferrer">https://docs.google.com/document/d/1kxisOjHc0qINFXhWvmdmMAJyjp7V9JmgfWXDhCKeuyk/edit</a>
                </p> -->
            </section>








            <section id="s3">
                <h2 id="s3t">Myths about drugs</h2>

                <h3 id="myth-1">
                    <span class="text-rose-400">Μύθος 1:</span> Η κάνναβη δεν είναι επικίνδυνη για την υγεία
                </h3>
                <p>
                    Αρκετοί υποστηρίζουν ότι η κάνναβη δεν είναι τόσο επικίνδυνη για την υγεία, αντιθέτως είναι και ωφέλιμη. Αυτός ο μύθος είναι ευρέως διαδεδομένος με αρκετές απόψεις να ισχυρίζονται το γεγονός ότι άλλα ναρκωτικά είναι πολύ πιο τοξικά από τη χρήση της κάνναβης η οποία αξιοποιείται για θεραπευτικούς σκοπούς ως εναλλακτικό φάρμακο σε αρκετές χώρες. Ωστόσο, σύμφωνα με επιστημονικά στοιχεία, η κάνναβη έχει συσχετιστεί με μεγάλο αριθμό επιπτώσεων στην υγεία (Σχήμα 2). Οι πιο σημαντικές επιπτώσεις περιλαμβάνουν ψυχικές ασθένειες <sup><span class="tooltip" data-tip="Paruk S & Burns JK. 2016. Cannabis and mental illness in adolescents: a review. South African Family Practice, 58:sup1, S18-S21.">[3]</span></sup>, καρδιαγγειακές παθήσεις <sup><span class="tooltip" data-tip="Thomas G et al. 2014. Adverse cardiovascular, cerebrovascular, and peripheral vascular effects of marijuana inhalation: what cardiologists need to know. American Journal of Cardiology 113(1):187-190.">[4]</span></sup>, ασθένειες των πνευμόνων <sup><span class="tooltip" data-tip=" Joshi M et al. 2014. Marijuana and lung diseases. Current Opinions of Pulmonary Medicine 20(2):173-179.">[5]</span></sup> και καρκίνο <sup><span class="tooltip" data-tip="Joshi M et al. 2014. Marijuana and lung diseases. Current Opinions of Pulmonary Medicine 20(2):173-179. ">[6]</span></sup>του αναπνευστικού και των όρχεων.
                </p>
                <p>
                    Ορισμένες ομάδες κινδύνου όπως οι έφηβοι και οι εγκυμονούσες είναι ιδιαίτερα ευάλωτες στη χρήση κάνναβης. Επίσης, το παθητικό κάπνισμα είναι ζωτικής σημασίας καθώς ο παθητικός καπνός της κάνναβης μοιάζει πολύ με τον καπνό του τσιγάρου από άποψη φυσικών και χημικών ιδιοτήτων <sup><span class="tooltip" data-tip="Graves BM et al. 2020. Comprehensive characterization of mainstream marijuana and tobacco smoke. Scientific Reports 10(1):7160.">[7]</span></sup>. Ακόμη, η χρήση της κάνναβης σχετίζεται με τον εθισμό, αυξάνει τον κίνδυνο χρήσης άλλων ναρκωτικών και αρκετοί κάνουν χρήση κάνναβης σε υπερβολική δόση.
                </p>
                <UiContentImage elevated src="https://evidence.onkel.ee/assets/drugs__cannabis-medical-effects.webp">
                    <template #caption>
                        <b>Σχήμα 2.</b> Επιπτώσεις στην υγεία από τη χρήση κάνναβης.
                    </template>
                </UiContentImage>


                <h3 id="myth-2">
                    <span class="text-rose-400">Μύθος 2:</span> Η χρήση της κάνναβης είναι κατάλληλη από μερικούς νέους.
                </h3>
                <p>
                    Καθώς αρκετοί νέοι χρησιμοποιούν κάνναβη, υπάρχει αυξημένη πεποίθηση ότι είναι εντάξει να χρησιμοποιείται από αυτούς. Ωστόσο, σύμφωνα με μελέτες, η χρήση κάνναβης ειδικά κατά την εφηβεία και την πρώιμη ενήλικη ζωή, μπορεί να βλάψει το τμήμα του εγκεφάλου που σχετίζεται με τη μνήμη <sup><span class="tooltip" data-tip="Ventura County. 2015. Marijuana and Your Kid’s Brain.” Marijuana in Ventura County: A Gateway for Discussion, Ventura County Behavioral Health. http:// venturacountylimits.org.s94613.gridserver.com//resources/ article/E413A9/marijuana-and-your-kids-brain-video.">[8]</span></sup> και τη μάθηση.
                </p>
                <p>
                    Άλλες μελέτες υποδεικνύουν ότι η τακτική χρήση μαριχουάνας στην εφηβεία σχετίζεται με αλλοιωμένη συνδεσιμότητα και μειωμένο όγκο συγκεκριμένων περιοχών του εγκεφάλου που εμπλέκονται σε ένα ευρύ φάσμα εκτελεστικών λειτουργιών όπως η μνήμη, η μάθηση και ο έλεγχος των παρορμήσεων σε σύγκριση με άτομα που δεν χρησιμοποιούν <sup><span class="tooltip" data-tip="Batalla A et al. 2013. Structural and functional imaging studies in chronic cannabis users: a systematic review of adolescent and adult findings. PloS One 8(2):e55821.">[9]</span></sup>.
                </p>
                <p>
                    Η πιο σημαντική διαπίστωση σύμφωνα με μελέτες είναι ότι η τακτική χρήση κάνναβης κατά την εφηβεία μπορεί να οδηγήσει σε χαμηλότερες σχολικές επιδόσεις και υψηλότερα ποσοστά <sup><span class="tooltip" data-tip="Fergusson, DM et al. 2010. Cannabis and Educational Achievement: Findings from Three Australian Cohort Studies. Drug and Alcohol Dependence, 110, 3.">[10]</span></sup> εγκατάλειψης του σχολείου. Έχει αποδειχθεί μάλιστα ότι οι δομικές αλλαγές που προκαλούνται στον εγκέφαλο από τη χρήση κάνναβης στους εφήβους και στους νεαρούς ενήλικες είναι μόνιμες – το επίπεδο του IQ χαμηλώνει και δεν μπορεί να ανακτηθεί με την ηλικία <sup><span class="tooltip" data-tip="Meier MH et al. 2012. Persistent cannabis users show neuropsychological decline from childhood to midlife. Proceedings of the National Academy of Sciences of the United States of America, 109:E2657-2664">[11]</span></sup>.
                </p>


                <h3 id="myth-3">
                    <span class="text-rose-400">Μύθος 3:</span> Η κάνναβη αποτελεί ένα ναρκωτικό φάρμακο που χρησιμεύει στην ιατρική.
                </h3>
                <p>
                    Μέχρι σήμερα υπάρχουν τρεις αναγνωρισμένες χρήσεις της κάνναβης ή των προϊόντων που προέρχονται από κάνναβη: για αντιμετώπιση της ναυτίας και του εμετού που είναι βασικές επιπτώσεις χημειοθεραπείας, για αντιμετώπιση της ανορεξίας που σχετίζεται με προχωρημένο HIV/AIDS, και για την αντιμετώπιση σπάνιων μορφών παιδικής επιληψίας <sup><span class="tooltip" data-tip="National Academies of Sciences, Engineering, and Medicine, 2017. Therapeutic effects of cannabis and cannabinoids. In The health effects of cannabis and cannabinoids: The current state of evidence and recommendations for research. National Academies Press (US)">[12]</span></sup>. Όλες οι άλλες χρήσεις, συμπεριλαμβανομένων των ψυχιατρικών παθήσεων δεν είναι ευρέως εγκεκριμένες. Με βάση πρόσφατα δεδομένα, οι θεραπείες με κανναβινοειδή (που περιέχουν κυρίως CBD) μπορεί να παρέχουν μία πιο κατάλληλη θεραπεία για άτομα που έχουν άγχος ή ως συμπληρωματική θεραπεία στη διαχείριση του άγχους ή διαταραχών <sup><span class="tooltip" data-tip="Sharpe L et al. 2020. Cannabis, a cause for anxiety? A critical appraisal of the anxiogenic and anxiolytic properties. Journal of Translational Medicine, 18:374.">[13]</span></sup> που σχετίζονται με το άγχος και το στρες. Ωστόσο, ορισμένες έρευνες έχουν δείξει ότι μπορεί η ίδια η χρήση της κάνναβης να προκαλέσει συναισθήματα άγχους, πανικού, παράνοια και ψύχωση. 
                </p>
                <p>
                    Για να έχει εγκριθεί η κάνναβη για θεραπευτικούς σκοπούς, πιθανότατα θα πρόκειται μόνο για  ένα συγκεκριμένο προϊόν κάναβης με σταθερές συγκεντρώσεις συγκεκριμένων κανναβινοειδών(CBD) όπως είναι η κανναβιδιόλη και η δέλτα-9-τετραϋδροκανναβινόλη (THC) (Σχήμα 3).
                </p>
                <p>
                    Επιπλέον, έχει συζητηθεί ότι η αναλογία CBD/THC έχει σημασία. Συγκεκριμένα, στη φαρμακευτική κάνναβη έχει αποδειχθεί ότι η αναλογία παίζει καθοριστικό ρόλο στη βελτίωση της σωματικής και λειτουργικής ευεξίας των ασθενών με καρκίνο του εγκεφάλου <sup><span class="tooltip" data-tip="Schloss J et al. 2021. A phase 2 randomised clinical trial assessing the tolerability of two different ratios of medicinal cannabis in patients with high grade gliomas. Frontiers in Oncology, 11:649555.">[14]</span></sup>. Μόνο σε ελεγχόμενα (ιατρικά) προϊόντα η συγκέντρωση και οι δόσεις CBD και THC μπορούν να ελεγχθούν.
                </p>
                <UiContentImage elevated src="https://evidence.onkel.ee/assets/drugs__cannabis-products.webp">
                    <template #caption>
                        <b>Σχήμα 3.</b> Κάνναβη και προϊόντα που περιέχουν συγκεντρώσεις από κανναβινοειδή
                    </template>
                </UiContentImage>


                <h3 id="myth-4">
                    <span class="text-rose-400">Μύθος 4:</span> Η κάνναβη βοηθά στην αύξηση της ανθρώπινης διάθεσης και προωθεί τη ψυχική υγεία.
                </h3>
                <p>
                    Είναι γνωστό ότι η ουσία TBC που εμπεριέχει η κάνναβη προκαλεί ένα αίσθημα έξαρσης κατά το οποίο το άτομο αισθάνεται χαρούμενο, χαλαρό, είναι περισσότερο ομιλητικό και γελάει περισσότερο από το συνηθισμένο. Επιπλέον διαπιστώνει ότι τα χρώματα τριγύρω είναι πιο φωτεινά και η μουσική πιο έντονη από την πραγματικότητα. Οι ακριβείς επιπτώσεις της χρήσης της κάνναβης ποικίλουν από άτομο σε άτομο, ωστόσο σε γενικές γραμμές μοιάζουν αρκετά με τον τρόπο επίδρασης του αλκοόλ <sup><span class="tooltip" data-tip="Gruber SA et al., 2009. Altered affective response in marijuana smokers: An FMRI study. Drug and Alcohol Dependence, 105(1-2), 139-153.">[15]</span></sup> στον ανθρώπινο οργανισμό. 
                </p>
                <p>
                    Τα πιο πάνω συναισθήματα εμφανίζονται από τη βραχυπρόθεσμη χρήση της κάνναβης, ενώ η μακροχρόνια χρήση της κάνναβης σχετίζεται με υψηλό αριθμό αρνητικών επιπτώσεων στη ψυχική υγεία. Για παράδειγμα, το αλκοόλ, η μαριχουάνα και τα σχετικά προϊόντα που περιέχουν THC είναι μεθυστικά και μπορούν να συμβάλουν σε μειωμένη κρίση και αυξημένη ευαισθησία σε προβλήματα ψυχικής υγείας, όπως κατάθλιψη, αϋπνία και παρανοϊκές παραληρητικές ιδέες <sup><a class="tooltip" data-tip="National Alliance on Mental Illness (2013) Marijuana and Mental Illness Fact Sheet. Duckworth, K., Freedman, J., reviewers." href="http://www2.nami.org/Content/NavigationMenu/Hearts_and_ Minds/Smoking_Cessation/Marijuana_and_Mental_Illness.htm" target="_blank" rel="noopener noreferrer">[16]</a></sup>. 
                </p>
                <p>
                    Επιπλέον, υπάρχει σημαντικός κίνδυνος υποτροπής ή επιδείνωσης των συμπτωμάτων για άτομα με ψυχωτικές διαταραχές <sup><span class="tooltip" data-tip="D’Souza DR. 2015. Medical marijuana: Is the cart before the horse? Journal of the American Medical Association, 313(24), 2431-2432.">[17]</span></sup>. Η τακτική χρήση μαριχουάνας συσχετίζεται με αυξημένο κίνδυνο και/ή επιδείνωση των συμπτωμάτων για άτομα με άγχος, κατάθλιψη και ψυχωτικές ασθένειες <sup><span class="tooltip" data-tip="Hill, K. 2015. Medical marijuana for treatment of chronic pain and other medical and psychiatric problems: A clinical review. Journal of the American Medical Association, 313(24), 2474-2483.">[18]</span></sup>. Υπάρχουν ορισμένα στοιχεία που δείχνουν συσχέτιση μεταξύ της χρήσης της κάνναβης και των ψυχωτικών ασθενειών, συμπεριλαμβανομένης της σχιζοφρένειας. Ωστόσο, τα επιστημονικά στοιχεία εξακολουθούν να είναι ελάχιστα και οι μηχανισμοί δεν είναι πλήρως κατανοητοί <sup><span class="tooltip" data-tip="Patel S. 2020. The association between cannabis use and schizophrenia: causative or curative? A systematic review. Cureus Journal of Medical Science, 12(7), e9309.">[19]</span></sup>.
                </p>


                <h3 id="myth-5">
                    <span class="text-rose-400">Μύθος 5:</span> Η κάνναβη δεν είναι εθιστική.
                </h3>
                <p>
                    Ο μύθος βασίζεται στο γεγονός ότι από όλους τους ανθρώπους που κάνουν χρήση μαριχουάνας, μόνο το 9% περίπου θα πληροί τα κριτήρια για εθισμό σε κάποια στιγμή της ζωής τους αργότερα. Ωστόσο, αν εξετάσουμε τους ανθρώπους που αρχίζουν χρήση μαριχουάνας από εφηβική ηλικία, όταν δηλαδή ο εγκέφαλός τους εξακολουθεί να αναπτύσσεται και είναι ακόμη ευάλωτος, τότε έχουν τέσσερις έως επτά φορές περισσότερες πιθανότητες να αναπτύξουν μία διαταραχή από τη χρήση κάνναβης σε σύγκριση με έναν ενήλικα <sup><span class="tooltip" data-tip="Winters KC & Lee C-YS. 2008. Likelihood of developing an alcohol and cannabis use disorder during youth: Association with recent use and age. Drug and Alcohol Dependence, 92(1-3), 239-247.">[20]</span></sup>.
                </p>
                <p>
                    Πρόσφατα δεδομένα υποδηλώνουν ότι το 30% όσων κάνουν χρήση κάνναβης τακτικά μπορεί να εμφανίσουν σε κάποιο βαθμό διαταραχή από τη χρήση <sup><span class="tooltip" data-tip="Hasin DS, et al. 2015. Prevalence of marijuana use disorders in the United States between 2001-2002 and 2012-2013. JAMA Psychiatry, 72(12), 1235-1242.">[21]</span></sup>.
                </p>
                <p>
                    Έχει επίσης αποδειχθεί ότι τα σημερινά στελέχη THC είναι ισχυρότερα – και τώρα προκαλούν φυσιολογική εξάρτηση και απόσυρση που απαιτεί θεραπεία κατάχρησης ουσιών <sup><span class="tooltip" data-tip="Copeland J, Swift W. 2009. Cannabis use disorder: epidemiology and management. International Review of Psychiatry, 21(2), 96-103.">[22]</span></sup>. Όταν οι χρόνιοι χρήστες κάνναβης επιχειρούν απότομη διακοπή, τα σημάδια του συνδρόμου στέρησης (π.χ. η ανησυχία, η ευερεθιστότητα, η ήπια διέγερση, η υπερκινητικότητα, η αϋπνία, η ναυτία, οι κράμπες, η μειωμένη όρεξη, η εφίδρωση και τα αυξημένα όνειρα) είναι κοινά <sup><span class="tooltip" data-tip="Bonnet U & Preuss UW. 2017. The cannabis withdrawal syndrome: current insights. Substance Abuse and Rehabilitation, 8, 9-37.">[23]</span></sup>.
                </p>


                <h3 id="myth-6">
                    <span class="text-rose-400">Μύθος 6:</span> Η κάνναβη είναι ένα ναρκωτικό που σε βοηθάει να ξεφύγεις από την πραγματικότητα
                </h3>
                <p>
                    Τα στοιχεία σχετικά με τον πιο πάνω μύθο είναι απροσδιόριστα και η αιτιότητα δεν επιβεβαιώνεται, αλλά αν εξετάσουμε όλους τους ανθρώπους που κάνουν χρήση άλλων ναρκωτικών η πλειοψηφία ξεκίνησε από τη χρήση κάνναβης. Ωστόσο, αυτό δεν σημαίνει ότι εάν κάνει κάποιος χρήση κάνναβης, θα συνεχίσει να χρησιμοποιεί ισχυρότερα ναρκωτικά όπως είναι η κοκαΐνη. Παρόλα αυτά ένα ποσοστό των χρηστών κάνναβης θα χρησιμοποιήσει και ισχυρότερα ναρκωτικά στο μέλλον.
                </p>
                <p>
                    Αν συγκρίνουμε μάλιστα τη χρήση της κάνναβης με τη χρήση άλλων ναρκωτικών, η κάνναβη χρησιμοποιείται περισσότερο στις περισσότερες χώρες <sup><a href="https://www.emcdda.europa.eu/data/stats2021/gps_en" target="_blank" rel="noopener noreferrer">[24]</a></sup>. Ωστόσο, δεν μπορούμε να συνδέσουμε την μακροχρόνια χρήση της κάνναβης με την πιο πάνω υπόθεση ότι βοηθάει στο να ξεφύγει κανείς από την πραγματικότητα. 
                </p>
                <p>
                    Βέβαια, μία μακροχρόνια μελέτη 25 ετών διαπίστωσε ότι η συχνότητα της χρήσης μαριχουάνας συνδέεται με τη χρήση άλλων παράνομων ναρκωτικών, ιδιαίτερα στους εφήβους <sup><span class="tooltip" data-tip="Fergusson DM, et al. 2006. Cannabis use and other illicit drug use: testing the cannabis gateway hypothesis. Addiction, 101(4), 556-569.">[25]</span></sup>. Επιπλέον, δύο ξεχωριστές μελέτες σε δίδυμα άτομα έκαναν σύγκριση κατά πόσο η πρώιμη χρήση κάνναβης θα οδηγούσε σε κατάχρηση ή εξάρτηση από άλλα παράνομα ναρκωτικά. Τα ευρήματα έδειξαν δύο έως πέντε φορές περισσότερες πιθανότητες να κάνει χρήση το άτομο που έκανε χρήση μαριχουάνας <sup><span class="tooltip" data-tip="Lynskey MT, et al. 2003. Escalation of drug use in early-onset cannabis users vs co-twin controls. JAMA, 289(4), 427-433.">[26]</span>, <span class="tooltip" data-tip="Agrawal A et al. 2004. Cannabis and other illicit drugs: comorbid use and abuse/dependence in males and females. Behavior Genetics, 34(3), 217-228.">[27]</span></sup>.
                </p>
                <p>
                    Άλλη μία εξήγηση της υπόθεσης ότι αισθάνονται να ξεφεύγουν από την πραγματικότητα, βασίζεται στη νευροβιολογία του εγκεφάλου. Η μειωμένη ευαισθησία ανταμοιβής και η αυξημένη ευαισθησία προσδοκιών κατακλύζουν το κύκλωμα ελέγχου του εγκεφάλου <sup><span class="tooltip" data-tip="Volkow ND, et al. 2010. Addiction: decreased reward sensitivity and increased expectation sensitivity conspire to overwhelm the brain's control circuit. Bioessays, 32(9), 748-755.">[28]</span></sup>. Με άλλα λόγια, το κύκλωμα μνήμης ανταμείβει τις προσδοκίες μας και ενισχύει το κίνητρο για κατανάλωση του ναρκωτικού.
                </p>
                <p>
                    Καταλήγοντας, τα στοιχεία είναι διφορούμενα όσον αφορά τον πιο πάνω μύθο, ωστόσο φαίνεται να υπάρχει ο συγκεκριμένος συσχετισμός σε πολλούς χρήστες κάνναβης. 
                </p>


                <h3 id="myth-7">
                    <span class="text-rose-400">Μύθος 7:</span> Δεν μπορεί κάποιος να κάνει υπερβολική χρήση κάνναβης
                </h3>
                <p>
                    Δεν υπάρχει πιθανότητα να πεθάνει κανείς άμεσα από τη χρήση κάνναβης.  Ωστόσο, η υπερβολική δόση μπορεί να προκαλέσει συμπτώματα όπως ναυτία και εμετό, αίσθηση άγχους, παράνοια και βραχυπρόθεσμη ψύχωση (να χάσει επαφή με το περιβάλλον). Τα συμπτώματα αυτά υπάρχει πιθανότητα να διαρκέσουν αρκετές ώρες. Η υπερβολική δόση κάνναβης δεν συμβαίνει συχνά, όμως υπάρχει αυτός ο κίνδυνος εάν κάποιος κάνει χρήση ανεπίσημων προϊόντων κάνναβης. Συμβαίνει καθώς δεν μπορεί να υπολογίσει κανείς εύκολα τη σωστή δόση και το περιεχόμενο των κανναβιδοειδών που περιλαμβάνει.
                </p>
                <p>
                    Ωστόσο, καθώς η χρήση της κάνναβης στις περισσότερες χώρες είναι πολύ υψηλότερη από άλλα ναρκωτικά, οι παρενέργειες από τη χρήση της έχουν οδηγήσει σε πολύ περισσότερες επισκέψεις στα επείγοντα από άλλες ουσίες <sup><a href=" https://www.samhsa.gov/data/sites/default/files/DAWN2k11ED/DAWN2k11ED/DAWN2k11ED.pdf" target="_blank" rel="noopener noreferrer">[29]</a></sup>.
                </p>
                <p>
                    Η υπερβολική χρήση μάλιστα μπορεί να οδηγήσει σε επιδείνωση μίας ψυχιατρικής κατάστασης, ιδιαίτερα στην περίπτωση της ψύχωσης: π.χ. να οδηγήσει σε παράνοια, να αισθάνεται κανείς ότι βλέπει κάτι που δεν υπάρχει, ότι ακούσει κάτι που επίσης δεν υπάρχει ακόμη και σε παραληρητική σκέψη. 
                </p>
                <p>
                    Το κανναβινοειδές THC στην κάνναβη μπορεί επίσης να οδηγήσει σε χειρότερες συνέπειες.  Μερικές φορές καταλήγουμε να δίνουμε σε αυτούς τους ανθρώπους αντιψυχωσιτικά φάρμακα και να μειώνουμε σε αυτούς τα συμπτώματα που βιώνουν. Το άλλο πράγμα για το οποίο οι άνθρωποι μπορούν να καταλήψουν στα επείγοντα είναι το σύνδρομο υπερέμεσης κάνναβης (CHS) <sup><a href="https://my.clevelandclinic.org/health/diseases/21665-cannabis-hyperemesis-syndrome" target="_blank" rel="noopener noreferrer">[30]</a></sup>. Το σύνδρομο αυτό περιγράφει την κατάσταση που προκαλείται από τη μακροχρόνια χρήση κάνναβης. Τα άτομα που βιώνουν αυτό το σύνδρομο εμφανίζουν συχνά ναυτία, εμετό, αφυδάτωση, πόνο στην κοιλιά και πολύ συχνά επισκέπτονται το τμήμα επειγόντων περιστατικών.
                </p>
                <p>
                    Η οξεία τοξικότητα από τη χρήση κάνναβης έχει επίσης μελετηθεί στην Αλάσκα των ΗΠΑ  <sup><span class="tooltip" data-tip="Noble MJ et al. 2019. Acute cannabis toxicity. Clinical Toxicology, 57(8), 735-742.">[31]</span></sup> Η νευροτοξιότητα είναι συχνή μετά από οξεία έκθεση στην κάνναβη.  Τα παιδιά βιώνουν ακούσιες εκθέσεις στην κάνναβη, ιδιαίτερα μέσα στο σπίτι και περιστασιακά με σοβαρές αρνητικές συνέπειες.
                </p>
                <p>
                    Τα συμπυκνωμένα προϊόντα όπως οι ρητίνες και τα υγρά συμπυκνώματα έχουν συνδεθεί με μεγαλύτερη τοξικότητα σε σύγκριση με άλλα προϊόντα κάνναβης. 
                </p>
                <p>
                    Ακόμη μία πτυχή που συζητείται στην επιστημονική βιβλιογραφία είναι οι επιπτώσεις της ιατρικής κάνναβης στην υπερβολική δόση οπιοειδών και τη θνησιμότητα. Εδώ τα στοιχεία είναι πραγματικά ανάμικτα <sup><span class="tooltip" data-tip="Shover CL et al. 2019. Association between medical cannabis laws and opioid overdose mortality has reversed over time. Proceedings of the National Academy of Sciences of the United States of America, 116(26), 12624-12626.">[32]</span></sup>.
                </p>
                <p>
                    Συμπερασματικά, η σύνδεση πρέπει να υπάρχει για αρκετούς χρήστες κάνναβης, όμως πρόκειται μόνο για μελέτες συσχετισμού και η αιτιότητα δεν είναι ξεκάθαρη.
                </p>


                <h3 id="myth-8">
                    <span class="text-rose-400">Μύθος 8:</span> Ο παθητικός δέκτης του καπνού της κάνναβης είναι ασφαλής
                </h3>
                <p>
                    Όπως συμβαίνει με κάθε τύπο καπνού που μπορεί να εισπνεύσει ένα άλλο πρόσωπο (παθητικός καπνιστής), οι τοξικές και καρκινογόνες ουσίες του παθητικού καπνίσματος της κάνναβης μπορούν εύκολα να εισπνευστούν από τα παιδιά. Ο καπνός από την κάνναβη περιέχει πολλές χημικές ουσίες όπως ο καπνός του τσιγάρου <sup><span class="tooltip" data-tip="Graves B.M. et al. 2020. Comprehensive characterization of mainstream marijuana and tobacco smoke. Scientific Reports 10(1):7160.">[33]</span></sup> συμπεριλαμβανομένου αυτές που προκαλούν καρκίνο στους πνεύμονες. 
                </p>
                <p>
                    Ο καπνός από την μαριχουάνα επίσης περιέχει THC, μία ουσία που είναι υπεύθυνη για τις περισσότερες ψυχοδραστικές επιδράσεις της κάνναβης. Η ουσία αυτή μπορεί να μεταδοθεί και στα βρέφη και στα παιδιά μέσω του παθητικού καπνίσματος. Επιπλέον τα άτομα που εκτίθενται σε καπνό που προέρχεται από την κάνναβη υπάρχει πιθανότητα να παρουσιάσουν ψυχοδραστικές επιδράσεις καθώς και το αίσθημα της υπερέντασης <sup><span class="tooltip" data-tip="Wilson KM, et al. 2017. Detecting biomarkers of secondhand marijuana smoke in young children. Pediatric Research, 81(4), 589-592.">[34]</span></sup>. 
                </p>
                <p>
                    Πρόσφατες μελέτες διαπιστώνουν ότι υπάρχει υψηλή συσχέτιση μεταξύ του παθητικού καπνίσματος μαριχουάνας (καπνός που προέρχεται από κάποιο γονιό ή συγγενή), και του εντοπισμού της ουσίας THC στα παιδιά <sup><span class="tooltip" data-tip="Moore C, et al. 2011. Cannabinoids in oral fluid following passive exposure to marijuana smoke. Forensic Science International, 212(1-3), 227-230.">[35]</span></sup>. Επιπλέον εντοπίστηκε ότι τα βρέφη που εκτίθενται σε καπνό που προέρχεται από μαριχουάνα κινδυνεύουν σε πρόωρο αιφνίδιο θάνατο (aka SIDS) <sup><span class="tooltip" data-tip="Reece-Stremtan S & Marinelli KA. 2015. ABM clinical protocol #21: guidelines for breastfeeding and substance use or substance use disorder, revised 2015. Breastfeeding Medicine, 10(3), 135-141.">[36]</span></sup>.
                </p>
                <p>
                    Λαμβάνοντας υπόψη τα πιο πάνω γεγονότα, το παθητικό κάπνισμα από την κάνναβη περιλαμβάνει ξεκάθαρα πολλούς κινδύνους για την υγεία. Ωστόσο, συχνά πολλές διαδικτυακές πηγές συμπεραίνουν ότι είναι απίθανο να επηρεαστούν άτομα που έχουν περιορισμένη έκθεση στον καπνό και βρίσκονται σε καλά αεριζόμενο χώρο. Παρόλα αυτά, βασισμένοι σε επιστημονικά γεγονότα, αυτό δεν είναι απόλυτα σίγουρο, ειδικότερα σε κλειστούς χώρους. 
                </p>

                <h3>
                    Άλλε έγκυρες πηγές πληροφόρησης
                </h3>
                <p>
                    <a class="break-all" href="https://www.unodc.org/documents/drug-prevention-and-treatment/cannabis_review.pdf " target="_blank" rel="noopener noreferrer">https://www.unodc.org/documents/drug-prevention-and-treatment/cannabis_review.pdf</a>
                </p>
            </section>

        </section>
    </div>
</template>