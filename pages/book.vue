<template>
    <div>
        <h1>
            {{ t('title') }}
        </h1>

        <p>
            {{ t('description') }}
        </p>

        <NuxtLink :to="t('link')" target="_blank"
        class="btn btn-outline btn-rounded"
        >
            {{ t('download') }}
        </NuxtLink>

        <UiContentImage :elevated="true" class="mt-16" src="https://evidence.onkel.ee/assets/the-book__mockup.webp">

</UiContentImage>
    </div>

</template>

<script setup>
    // import { useI18n } from 'vue-i18n';
    const { t } = useI18n({ useScope: 'local' });

    definePageMeta({
        layout: "content-pages",
    });
</script>


<i18n lang="json">
{
    "en" : {
        "link": "https://drive.google.com/file/d/1UWfPJNTOPUjff3O3HexWSTpv-iNRZiJO/view?usp=drive_link",
        "download": "Download the book as pdf file",
        "description": "The EU Erasmus+ project EVIDENCE is based on a contemporary approach to scientific competence which, besides attempting to foster science content knowledge and process skills, also focuses on the formation of skills, attitudes and values to find solutions to the problems in society caused by post-truth. However, it may require different competences from teachers than previously needed for teaching as knowledge delivery. The current guidebook, Busting Post-Truth in the Science Classroom, together with EVIDENCE learning materials (target group: 15-18 years old students), tries to fill this gap in order to help teachers, educators and supervisors of both formal and non-formal education sectors to meet post-truth challenges: to cope with mis- and disinformation and science denial, as well as tackling socially sensitive science-related issues towards which people may have quite polarised views, thus building students’ trust in science. This last point is crucial if we want to manage global problems such as climate change, pandemics, poverty and so forth.",
        "title": "Guidebook",
        "s01": "In the post-truth era, refuting misinformation spread in (social) media has become part of a teacher's daily work. This kind of information is often related to socially sensitive topics, such as viruses and vaccination, radiation, climate change, evolution, cannabis, etc.",
        "s02": "In order to solve the problem, in the project EVIDENCE (2020-2023) of the “Erasmus+” program of the European Union, scientists of nature, education, public health and culture from the University of Tartu, Umeå and Cyprus, as well as multimedia and design experts from the António Arroio Art Center and the Kuressaare Vocational School, have put their backs together.",
        "s03": "With the help of the created learning environment and the handbook, teachers can discuss socially sensitive topics related to natural sciences in class. Students can investigate myths related to such topics, including assessing the reliability of information sources, recognizing the main techniques of denying science in media texts and better conveying information about the research results they have conducted. Each learning module is introduced by a staged short film that illustrates popular concepts related to the topic through the lens of humor. Developing the skills of solving moral dilemmas and making consensus decisions is also an important part of the educational materials - without them, solving global problems would probably be unthinkable.",
        "s04": {
            "title": "Module authors:",
            "authors": "Katrin Vaino, Márcio Martins, Luís Simões, José Leitão, Céu Guarda, Bruno Santos, Alexandre Almeida, Delfim Ramos, João Ribeiro, João Duarte, José Pina, Luísa Mota, Konstantinos Korfiatis, Oleg Popov, Merit Karise, Oliver Maaker, Andreas Panayides, Filio Ioulianou, Stella Petrou, Vasiliki Vasileiou, Hans Orru, Anastasiya Astapova, Ana Valdmann, Triin Rosin, Jenny Hellgren, Marie Johanna Univer."
        },
        "s05": {
            "title": "They helped to test the materials and provide feedback:",
            "authors-01": "Liis Rüütel and Toomas Liivamägi (Luunja Keskkool, Estonia); Marie Johanna Univer and Ave Vitsut (Viljandi Gymnasium, Estonia), Anna Strid (Tegs Central Skola, Sweden).",
            "authors-02": "Clélia Alves and Maria Eduarda Alves de Oliveira (Agrupamento de Escolas Professor Armando de Lucena, Portugal).",
            "authors-03": "Helena Constantinou (Archagellos gymnasioum, Cyprus) ja Andreas Panayides (Agias Filaxeos gymnasium, Cyprus)."

        }
        
    },



    "et" : {
        "link": "https://docs.google.com/document/d/1pJRYbsDNzb4zOczMHheMAEfT14QPpRnVFh0uadIxBeY/edit?fbclid=IwAR0D4rsp2KDmWo80iieFbSeU7CHzPUeUG_hHQf-rKgsh91lLe1KNim5tCuU",
        "download": "Raamatu leiad siit",
        "description": "Euroopa Liidu Erasmus+ projekt EVIDENCE põhineb kaasaegsel lähenemisel loodusteaduslikule pädevusele, mis lisaks loodusteaduslikele sisuteadmistele ja protsessioskustele keskendub ka oskuste, hoiakute ja väärtuste kujundamisele, mis aitavad kaasa lahenduste leidmisele tõejärgsuse poolt põhjustatud probleemidele ühiskonnas. See võib aga nõuda õpetajatelt uusi pädevusi võrrledes nendega, mis varem vaid teadmiste “äraõpetamiseks” vajalikud olid. Käesolev õpetaja käsiraamat, “Kummutame tõejärgsust loodusainete tundides” koos EVIDENCE õppematerjalidega (sihtgrupp: 15-18-aastased õpilased), püüab täita seda tühimikku, et aidata õpetajatel, haridustöötajatel ja juhendajatel nii formaalse kui ka mitteformaalse hariduse valdkonnas tulla toime tõejärgsuse probleemidega: tegeleda tundides väärinfo ning teaduse eitamisega ning käsitleda ühiskonnas tundlikke loodusteadustega seotud küsimusi, mille suhtes inimestel võivad omada üsna polariseeritud arvamusi, tugevdades seeläbi ühtlasi õpilaste usaldust teaduse vastu. Viimane on ülimalt oluline, kui soovime hakkama saada globaalsete probleemidega nagu kliimamuutused, pandeemiad, vaesus jne.",
        "title": "Õpetaja käsiraamat",
        "s01": "Tõejärgsel ajastul on (sotsiaal)meedias leviva väärinfo ümberlükkamine saanud õpetaja igapäevatöö osaks. Tihti on sedalaadi info seotud ühiskondlikult tundlike teemadega, nagu viirused ja vaktsineerimine, kiirgused, kliimamuutused, evolutsioon, kanep jpm.",
        "s02": "Probleemi lahendamiseks on Euroopa Liidu programmi „Erasmus+“ projektis EVIDENCE (2020–2023) pannud seljad kokku Tartu, Umeå ja Küprose ülikooli loodus-, haridus-, rahvatervise- ja kultuuriteadlased ning António Arroio Kunstikeskkooli ja Kuressaare Ametikooli multimeedia- ja disainieksperdid.",
        "s03": "Loodud õpikeskkonna ning käsiraamatu abil saavad õpetajad käsitleda tunnis ühiskondlikult tundlikke loodusteadustega seotud teemasid. Õpilased saavad uurida taoliste teemadega seotud müüte, sh hinnata infoallikate usaldusväärsust, tunda meediatekstides ära teaduse eitamise peamisi võtteid ja anda paremini edasi teavet enda poolt läbiviidud uurimistulemuste kohta. Iga õppemooduli juhatab sisse lavastatud lühifilm, mis läbi huumoriprisma näitlikustab populaarseid teemakohaseid arusaamu. Õppematerjalides on olulisel kohal ka moraalsete dilemmade lahendamise ning konsensuslike otsuste tegemise oskuste kujundamine – ilma nendeta poleks üleilmsete probleemide lahendamine arvatavasti mõeldav.",
        "s04": {
            "title": "Materjalide autorid:",
            "authors": "Katrin Vaino, Márcio Martins, Luís Simões, José Leitão, Céu Guarda, Bruno Santos, Alexandre Almeida, Delfim Ramos, João Ribeiro, João Duarte, José Pina, Luísa Mota, Konstantinos Korfiatis, Oleg Popov, Merit Karise, Oliver Maaker, Andreas Panayides, Filio Ioulianou, Stella Petrou, Vasiliki Vasileiou, Hans Orru, Anastasiya Astapova, Ana Valdmann, Triin Rosin, Jenny Hellgren, Marie Johanna Univer."
        },
        "s05": {
            "title": "Materjale aitasid katsetada ning tagasisidestada:",
            "authors-01": "Liis Rüütel ja Toomas Liivamägi (Luunja Keskkool) ning Marie Johanna Univer ja Ave Vitsut (Viljandi Gümnaasium), Anna Strid (Tegs Central Skola, Rootsi).",
            "authors-02": "Clélia Alves ja Maria Eduarda Alves de Oliveira (Agrupamento de Escolas Professor Armando de Lucena, Portugal).",
            "authors-03": "Helena Constantinou (Archagellos gymnasioum, Küpros) ja Andreas Panayides (Agias Filaxeos gymnasium, Küpros)."

        }
    },



    "el" : {
        "link": "https://drive.google.com/file/d/13dYVSz87H9pJ_Pdn9bAZ-oQph8zNz5kQ/view?usp=sharing",
        "download": "Κατεβάστε το βιβλίο ως αρχείο pdf",
        "description": "Το πρόγραμμα EVIDENCE (Erasmus+ project της ΕΕ) βασίζεται σε μια σύγχρονη προσέγγιση της επιστημονικής επάρκειας, η οποία, εκτός από την προσπάθεια ενίσχυσης της γνώσης του επιστημονικού περιεχομένου και των δεξιοτήτων διερέυνησης, εστιάζει επίσης στη διαμόρφωση δεξιοτήτων, στάσεων και αξιών για την εξεύρεση λύσεων στα προβλήματα της κοινωνίας που προκαλεί η μετα-αλήθεια. Ωστόσο, μπορεί να απαιτεί από τους εκπαιδευτικούς ικανότητες διαφορετικές από αυτές που απαιτούνται για τη διδασκαλία ως μέσο παροχής γνώσεων. Ο παρών οδηγός, «Καταρρίπτοντας τη Μετα-αλήθεια στην τάξη των Φυσικών Επιστημών», σε συνδυασμό με το εκπαιδευτικό υλικό του προγράμματος EVIDENCE (ομάδα-στόχος: μαθητές 15-18 ετών), προσπαθεί να καλύψει αυτό το κενό. Συγκεκριμένα, στοχεύει να βοηθήσει τους εκπαιδευτικούς, τους εκπαιδευτές και τους επόπτες τόσο του τυπικού όσο και του μη τυπικού τομέα της εκπαίδευσης, να αντιμετωπίσουν τις προκλήσεις της μετα-αλήθειας, να διαχειριστούν την παραπληροφόρηση, την άρνηση της επιστήμης, να αντιμετωπίσουν κοινωνικά ευαίσθητα θέματα που σχετίζονται με την επιστήμη, απέναντι στα οποία οι άνθρωποι μπορεί να έχουν αρκετά πολωμένες απόψεις, με απώτερο σκοπό να οικοδομήσουν την εμπιστοσύνη των μαθητών στην επιστήμη. Το τελευταίο είναι ζωτικής σημασίας αν θέλουμε να διαχειριστούμε παγκόσμια προβλήματα όπως η κλιματική αλλαγή, οι πανδημίες, η φτώχεια κλπ.",
        "title": "Οδηγός εκπαιδευτικού",
        "s01": "In the post-truth era, refuting misinformation spread in (social) media has become part of a teacher's daily work. This kind of information is often related to socially sensitive topics, such as viruses and vaccination, radiation, climate change, evolution, cannabis, etc.",
        "s02": "In order to solve the problem, in the project EVIDENCE (2020-2023) of the “Erasmus+” program of the European Union, scientists of nature, education, public health and culture from the University of Tartu, Umeå and Cyprus, as well as multimedia and design experts from the António Arroio Art Center and the Kuressaare Vocational School, have put their backs together.",
        "s03": "With the help of the created learning environment and the handbook, teachers can discuss socially sensitive topics related to natural sciences in class. Students can investigate myths related to such topics, including assessing the reliability of information sources, recognizing the main techniques of denying science in media texts and better conveying information about the research results they have conducted. Each learning module is introduced by a staged short film that illustrates popular concepts related to the topic through the lens of humor. Developing the skills of solving moral dilemmas and making consensus decisions is also an important part of the educational materials - without them, solving global problems would probably be unthinkable.",
        "s04": {
            "title": "Module authors:",
            "authors": "Katrin Vaino, Márcio Martins, Luís Simões, José Leitão, Céu Guarda, Bruno Santos, Alexandre Almeida, Delfim Ramos, João Ribeiro, João Duarte, José Pina, Luísa Mota, Konstantinos Korfiatis, Oleg Popov, Merit Karise, Oliver Maaker, Andreas Panayides, Filio Ioulianou, Stella Petrou, Vasiliki Vasileiou, Hans Orru, Anastasiya Astapova, Ana Valdmann, Triin Rosin, Jenny Hellgren, Marie Johanna Univer."
        },
        "s05": {
            "title": "They helped to test the materials and provide feedback:",
            "authors-01": "Liis Rüütel and Toomas Liivamägi (Luunja Keskkool, Estonia); Marie Johanna Univer and Ave Vitsut (Viljandi Gymnasium, Estonia), Anna Strid (Tegs Central Skola, Sweden).",
            "authors-02": "Clélia Alves and Maria Eduarda Alves de Oliveira (Agrupamento de Escolas Professor Armando de Lucena, Portugal).",
            "authors-03": "Helena Constantinou (Archagellos gymnasioum, Cyprus) ja Andreas Panayides (Agias Filaxeos gymnasium, Cyprus)."

        }
        
    },




    "sv" : {
        "link": "https://drive.google.com/file/d/1UWfPJNTOPUjff3O3HexWSTpv-iNRZiJO/view?usp=drive_link",
        "download": "Ladda ner boken som pdf-fil",
        "description": "The EU Erasmus+ project EVIDENCE is based on a contemporary approach to scientific competence which, besides attempting to foster science content knowledge and process skills, also focuses on the formation of skills, attitudes and values to find solutions to the problems in society caused by post-truth. However, it may require different competences from teachers than previously needed for teaching as knowledge delivery. The current guidebook, Busting Post-Truth in the Science Classroom, together with EVIDENCE learning materials (target group: 15-18 years old students), tries to fill this gap in order to help teachers, educators and supervisors of both formal and non-formal education sectors to meet post-truth challenges: to cope with mis- and disinformation and science denial, as well as tackling socially sensitive science-related issues towards which people may have quite polarised views, thus building students’ trust in science. This last point is crucial if we want to manage global problems such as climate change, pandemics, poverty and so forth.",
        "title": "Lärarhandbok",
        "s01": "In the post-truth era, refuting misinformation spread in (social) media has become part of a teacher's daily work. This kind of information is often related to socially sensitive topics, such as viruses and vaccination, radiation, climate change, evolution, cannabis, etc.",
        "s02": "In order to solve the problem, in the project EVIDENCE (2020-2023) of the “Erasmus+” program of the European Union, scientists of nature, education, public health and culture from the University of Tartu, Umeå and Cyprus, as well as multimedia and design experts from the António Arroio Art Center and the Kuressaare Vocational School, have put their backs together.",
        "s03": "With the help of the created learning environment and the handbook, teachers can discuss socially sensitive topics related to natural sciences in class. Students can investigate myths related to such topics, including assessing the reliability of information sources, recognizing the main techniques of denying science in media texts and better conveying information about the research results they have conducted. Each learning module is introduced by a staged short film that illustrates popular concepts related to the topic through the lens of humor. Developing the skills of solving moral dilemmas and making consensus decisions is also an important part of the educational materials - without them, solving global problems would probably be unthinkable.",
        "s04": {
            "title": "Module authors:",
            "authors": "Katrin Vaino, Márcio Martins, Luís Simões, José Leitão, Céu Guarda, Bruno Santos, Alexandre Almeida, Delfim Ramos, João Ribeiro, João Duarte, José Pina, Luísa Mota, Konstantinos Korfiatis, Oleg Popov, Merit Karise, Oliver Maaker, Andreas Panayides, Filio Ioulianou, Stella Petrou, Vasiliki Vasileiou, Hans Orru, Anastasiya Astapova, Ana Valdmann, Triin Rosin, Jenny Hellgren, Marie Johanna Univer."
        },
        "s05": {
            "title": "They helped to test the materials and provide feedback:",
            "authors-01": "Liis Rüütel and Toomas Liivamägi (Luunja Keskkool, Estonia); Marie Johanna Univer and Ave Vitsut (Viljandi Gymnasium, Estonia), Anna Strid (Tegs Central Skola, Sweden).",
            "authors-02": "Clélia Alves and Maria Eduarda Alves de Oliveira (Agrupamento de Escolas Professor Armando de Lucena, Portugal).",
            "authors-03": "Helena Constantinou (Archagellos gymnasioum, Cyprus) ja Andreas Panayides (Agias Filaxeos gymnasium, Cyprus)."

        }
        
    },




    "pt" : {
        "link": "https://drive.google.com/file/d/18fa7VY2yqedK_fGJihBFgV-CoYrssv9t/view?usp=sharing",
        "download": "Baixe o livro como arquivo pdf",
        "description": "O projeto europeu Erasmus+ EVIDENCE baseia-se numa abordagem contemporânea da competência científica que, para além de tentar promover o conhecimento do conteúdo científico e as competências processuais, também se centra na formação de competências, atitudes e valores para encontrar soluções para os problemas da sociedade causados pela pós-verdade. No entanto, pode exigir dos professores competências diferentes das anteriormente necessárias para o ensino como transmissão de conhecimentos. O presente guia, 'Busting Post-Truth in the Science Classroom', juntamente com os materiais didáticos EVIDENCE (grupo-alvo: alunos dos 15 aos 18 anos), tenta colmatar esta lacuna, a fim de ajudar os professores, educadores e supervisores dos sectores da educação formal e não formal a enfrentar os desafios da pós-verdade: lidar com a desinformação e a negação da ciência, bem como abordar questões relacionadas com a ciência socialmente sensíveis, em relação às quais as pessoas podem ter opiniões bastante polarizadas, reforçando assim a confiança dos alunos na ciência. Este último ponto é crucial se quisermos gerir problemas globais como as alterações climáticas, as pandemias, a pobreza, etc.",
        "title": "Guia do professor",
        "s01": "In the post-truth era, refuting misinformation spread in (social) media has become part of a teacher's daily work. This kind of information is often related to socially sensitive topics, such as viruses and vaccination, radiation, climate change, evolution, cannabis, etc.",
        "s02": "In order to solve the problem, in the project EVIDENCE (2020-2023) of the “Erasmus+” program of the European Union, scientists of nature, education, public health and culture from the University of Tartu, Umeå and Cyprus, as well as multimedia and design experts from the António Arroio Art Center and the Kuressaare Vocational School, have put their backs together.",
        "s03": "With the help of the created learning environment and the handbook, teachers can discuss socially sensitive topics related to natural sciences in class. Students can investigate myths related to such topics, including assessing the reliability of information sources, recognizing the main techniques of denying science in media texts and better conveying information about the research results they have conducted. Each learning module is introduced by a staged short film that illustrates popular concepts related to the topic through the lens of humor. Developing the skills of solving moral dilemmas and making consensus decisions is also an important part of the educational materials - without them, solving global problems would probably be unthinkable.",
        "s04": {
            "title": "Module authors:",
            "authors": "Katrin Vaino, Márcio Martins, Luís Simões, José Leitão, Céu Guarda, Bruno Santos, Alexandre Almeida, Delfim Ramos, João Ribeiro, João Duarte, José Pina, Luísa Mota, Konstantinos Korfiatis, Oleg Popov, Merit Karise, Oliver Maaker, Andreas Panayides, Filio Ioulianou, Stella Petrou, Vasiliki Vasileiou, Hans Orru, Anastasiya Astapova, Ana Valdmann, Triin Rosin, Jenny Hellgren, Marie Johanna Univer."
        },
        "s05": {
            "title": "They helped to test the materials and provide feedback:",
            "authors-01": "Liis Rüütel and Toomas Liivamägi (Luunja Keskkool, Estonia); Marie Johanna Univer and Ave Vitsut (Viljandi Gymnasium, Estonia), Anna Strid (Tegs Central Skola, Sweden).",
            "authors-02": "Clélia Alves and Maria Eduarda Alves de Oliveira (Agrupamento de Escolas Professor Armando de Lucena, Portugal).",
            "authors-03": "Helena Constantinou (Archagellos gymnasioum, Cyprus) ja Andreas Panayides (Agias Filaxeos gymnasium, Cyprus)."

        }
        
    }
}
</i18n>
