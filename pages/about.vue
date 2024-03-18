<template>
    <div>
        <div class="flex flex-col-reverse sm:flex-row justify-between">
            <h1>{{ t('title') }}</h1>
            <NuxtLink target="_blank" to="https://erasmus-plus.ec.europa.eu/projects/search/details/2020-1-EE01-KA201-078008">
                <img
                class="block w-40 md:w-60 max-w-[15rem] m-0 -translate-y-3"
                src="https://evidence.onkel.ee/assets/erasmus-eu-logo__opt.svg"  />
            </NuxtLink>
        </div>
        
        <p>{{ t('s01') }}</p>
        <p>{{ t('s02') }}</p>
        <p>{{ t('s03') }}</p>
    
        <h3>{{ t('s04.title') }}</h3>
        <p>{{ t('s04.authors') }}</p>
    
        <h3>{{ t('s05.title') }}</h3>
        <p>{{ t('s05.authors-01')}}</p>
        <p>{{ t('s05.authors-02') }}</p>
        <p>{{ t('s05.authors-03') }}</p>
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
        "title": "About this project",
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
        "title": "Projektist",
        "s01": "Tõejärgsel ajastul on (sotsiaal)meedias leviva väärinfo ümberlükkamine saanud õpetaja igapäevatöö osaks. Tihti on sedalaadi info seotud ühiskondlikult tundlike teemadega, nagu viirused ja vaktsineerimine, kiirgused, kliimamuutused, evolutsioon, kanep jpm.",
        "s02": "Probleemi lahendamiseks on Euroopa Liidu programmi „Erasmus+“ projektis EVIDENCE (2020–2023) pannud seljad kokku Tartu, Umeå ja Küprose ülikooli loodus-, haridus-, rahvatervise- ja kultuuriteadlased ning António Arroio Kunstikeskkooli ja Kuressaare Ametikooli multimeedia- ja disainieksperdid.",
        "s03": "Loodud õpikeskkonna ning käsiraamatu abil saavad õpetajad käsitleda tunnis ühiskondlikult tundlikke loodusteadustega seotud teemasid. Õpilased saavad uurida taoliste teemadega seotud müüte, sh hinnata infoallikate usaldusväärsust, tunda meediatekstides ära teaduse eitamise peamisi võtteid ja anda paremini edasi teavet enda poolt läbiviidud uurimistulemuste kohta. Iga õppemooduli juhatab sisse lavastatud lühifilm, mis läbi huumoriprisma näitlikustab populaarseid teemakohaseid arusaamu. Õppematerjalides on olulisel kohal ka moraalsete dilemmade lahendamise ning konsensuslike otsuste tegemise oskuste kujundamine – ilma nendeta poleks üleilmsete probleemide lahendamine arvatavasti mõeldav.",
        "s04": {
            "title": "Materjalide autorid:",
            "authors": "Katrin Vaino, Márcio Martins, Konstantinos Korfiatis, Oleg Popov, Merit Karise, Oliver Maaker, Stella Petrou, Vasiliki Vasileiou, Rafaella Maloupa, Andreas Panayides, Luís Simões, José Leitão, Céu Guarda, Bruno Santos, Alexandre Almeida, Delfim Ramos, João Ribeiro, João Duarte, José Pina, Luísa Mota, Filio Ioulianou, Stella Petrou, Vasiliki Vasileiou, Hans Orru, Anastasiya Astapova, Anna Strid, Ana Valdmann, Triin Rosin, Jenny Hellgren, Marie Johanna Univer, Helin Semilarski, Helen Semilarski."
        },
        "s05": {
            "title": "Materjale aitasid katsetada ning tagasisidestada:",
            "authors-01": "Liis Rüütel ja Toomas Liivamägi (Luunja Keskkool) ning Marie Johanna Univer ja Ave Vitsut (Viljandi Gümnaasium), Anna Strid (Tegs Central Skola, Rootsi).",
            "authors-02": "Clélia Alves ja Maria Eduarda Alves de Oliveira (Agrupamento de Escolas Professor Armando de Lucena, Portugal).",
            "authors-03": "Helena Constantinou (Archagellos gymnasioum, Küpros) ja Andreas Panayides (Agias Filaxeos gymnasium, Küpros)."

        }
    },



    "el" : {
        "title": "About this project",
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
        "title": "About this project",
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
        "title": "About this project",
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
