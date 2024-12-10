<template>
    <div>
        <h1>
            {{ t('title') }}
        </h1>

        <p>
            {{ t('description') }}
        </p>

        <div class="e-card">
            <h3 class="mt-0 mb-3">{{ t('tutorials_text') }}</h3>
            <ul>
                <li v-for="tutorial in tm('tutorials')" class="my-0 leading-snug">
                    <NuxtLink :to="rt(tutorial[1])" target="_blank">
                        {{ rt(tutorial[0]) }}
                    </NuxtLink></li>
            </ul>
        </div>

        <h2 class="mt-8 mb-5">{{ t('videos') }}</h2>

        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            
            
            
            <div class="e-card" v-for="module in tm('modules')">
                <h3 class="mt-0 mb-3">{{ rt(module.title) }}</h3>
                <h4 class="mt-0 mb-1 text-slate-500 font-Body text-lg leading-tight">{{ t('intro_videos') }}</h4>
                <ul>
                    <li v-for="introVideo in module.intro_videos" class="my-0 leading-snug">
                        <NuxtLink :to="rt(introVideo[1])" target="_blank">
                            {{ rt(introVideo[0]) }}
                        </NuxtLink>
                    </li>
                </ul>
                <h4 class="mt-0 mb-1 text-slate-500 font-Body text-lg leading-tight">{{ t('fact_videos') }}</h4>
                <ul>
                    <li v-for="factVideo in module.fact_videos" class="my-0 leading-snug">
                        <NuxtLink :to="rt(factVideo[1])" target="_blank">
                            {{ rt(factVideo[0]) }}
                        </NuxtLink>
                    </li>
                </ul>
                
                <template v-if="module.other">
                    <h4 class="mt-0 mb-1 text-slate-500 font-Body text-lg leading-tight">{{ t('other') }}</h4>
                    <ul>
                        <li v-for="other in module.other" class="my-0 leading-snug">
                            <NuxtLink :to="rt(other[1])" target="_blank">
                                {{ rt(other[0]) }}
                            </NuxtLink>
                        </li>
                    </ul>
                </template>
            </div>
            
        </div>

    </div>

</template>

<script setup>
    // greek book > "https://drive.google.com/file/d/13dYVSz87H9pJ_Pdn9bAZ-oQph8zNz5kQ/view?usp=sharing"
    const { t, tm, rt } = useI18n({ useScope: 'local' });

    definePageMeta({
        layout: "content-pages",
    });
</script>


<i18n lang="json">
{
    "en" : {
        "title": "Tools",
        "description": "Here you can find a list of resources and tools, that are used thourough the modules.",
        "videos": "Videos",
        "intro_videos": "Intro videos (staged)",
        "fact_videos": "Fact videos",
        "other": "Other",
        "tutorials_text": "Tutorials",
        "modules": [
            {
                "title": "Space",
                "intro_videos" : [
                    [ "Earth Calls Martha",         "https://www.youtube.com/embed/a95oKCDgIow?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "321",                        "https://www.youtube.com/embed/wlstnH27waw?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Flag in the Wind",           "https://www.youtube.com/embed/RvLdHwy4qMI?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Where are All the Aliens",   "https://www.youtube.com/embed/d86JQpemSZ4?cc_load_policy=1&cc_lang_pref=en" ]
                ],
                "fact_videos" : [
                    [ "Solar System",                           "https://www.youtube.com/embed/pCMU86sZUgc?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Space Explorations",                     "https://www.youtube.com/embed/Sr6B1p-HV2I?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Exploring Mars",                         "https://www.youtube.com/embed/IHi9sE0Ppkc?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "From the Earth to the Moon",             "https://www.youtube.com/embed/K84sQveeJFg?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Exploration outside the Solar System",   "https://www.youtube.com/embed/dthYcrjs0DM?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Space Exploration Timeline",             "https://www.youtube.com/embed/Sr6B1p-HV2I?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Space Debris",                           "https://www.youtube.com/embed/kvCIe_tevic?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "International Space Station (ISS)",      "https://www.youtube.com/embed/kvCIe_tevic?cc_load_policy=1&cc_lang_pref=en" ]
                ],
                "other" : [
                    [ "Photography books", "https://photobookaa.000webhostapp.com/" ],
                    [ "Virtual photo exhibition", "https://www.artsteps.com/view/640e83202e32550b524a52b1" ]
                ]
            },
            {
                "title": "Drugs",
                "intro_videos" : [
                    [ "Drugs",                              "https://www.youtube.com/embed/cN5KV_WJubw?cc_load_policy=1&cc_lang_pref=en" ]
                ],
                "fact_videos" : [
                    [ "Drug addiction",                     "https://www.youtube.com/embed/lWCYOAL-PTY?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Addiction is a bad choice",          "https://www.youtube.com/embed/HBvYLmxKFx4?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Only drug addicts have a problem?",  "https://www.youtube.com/embed/HBvYLmxKFx4?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "All drugs are equally harmful?",     "https://www.youtube.com/embed/ejCibyesOCA?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "“Miracle” drugs",                    "https://www.youtube.com/embed/0AsWzmp7Ru4?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "The Pusher Myth",                    "https://www.youtube.com/embed/7qXErzPzfvM?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Alcohol is not a drug?",             "https://www.youtube.com/embed/H8OM7aS-JD4?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Medical Marijuana",                  "https://www.youtube.com/embed/P_m94ZtyRGM?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Drugs - The Portuguese Policy",      "https://www.youtube.com/embed/BrZ8lDRMx4E?cc_load_policy=1&cc_lang_pref=en" ]
                ]
            },
            {
                "title": "Climate change",
                "intro_videos" : [
                    [ "Climatic Lunch",             "https://www.youtube.com/embed/CbJ7GmgEAAo?cc_load_policy=1&cc_lang_pref=en" ]
                ],
                "fact_videos" : [
                    [ "Fishing Planet",             "https://www.youtube.com/embed/saUTXISSlBI?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Ice Melting and Animals",    "https://www.youtube.com/embed/mEgYnOaiJnU?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Climate Change",             "https://www.youtube.com/embed/VLALl1kRKRo?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Climate and Wheather",       "https://www.youtube.com/embed/_k0NgbXgQ_k?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Deforestation",              "https://www.youtube.com/embed/7y6zW02Lbtc?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Green House Effect",         "https://www.youtube.com/embed/ftG_PgwWeNQ?cc_load_policy=1&cc_lang_pref=en" ]
                ],
                "other" : [
                    [ "Virtual photo exhibition", "https://www.artsteps.com/view/6411276082afca1aa133e268" ]
                ]
            },
            {
                "title": "Evolution",
                "intro_videos" : [
                    [ "Monkey Business",        "https://www.youtube.com/embed/9jusKTXoQak?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Theory of Evolution",    "https://www.youtube.com/embed/cXS_uSqzwuM?cc_load_policy=1&cc_lang_pref=en" ]
                ],
                "fact_videos" : [
                    [ "Theory of Evolution, Episode 1", "https://www.youtube.com/embed/4k4JLntDIzE?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Theory of Evolution, Episode 2", "https://www.youtube.com/embed/O1Y3XyW9pEs?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Theory of Evolution, Episode 3", "https://www.youtube.com/embed/9QwTCj817Sg?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Theory of Evolution, Episode 4", "https://www.youtube.com/embed/FMHNxsInyEg?cc_load_policy=1&cc_lang_pref=en" ]
                ]
            },
            {
                "title": "Radiation",
                "intro_videos" : [
                    [ "Radiation Hoax", "https://www.youtube.com/embed/ccMo9WfKeOY?cc_load_policy=1&cc_lang_pref=en" ]
                ],
                "fact_videos" : [
                    [ "General Radiation",          "https://www.youtube.com/embed/R-m95tG1cys?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Mobile Phones Radiation 5G", "https://www.youtube.com/embed/wPGwBycOlx0?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Natural Radiation",          "https://www.youtube.com/embed/FqRqNw5jJ0Y?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Radiation Sickness",         "https://www.youtube.com/embed/WehXQltBF_c?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Radioactive Waste",          "https://www.youtube.com/embed/oa1dTCLvPok?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Radon Gas",                  "https://www.youtube.com/embed/xVZHeX1jv_w?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Home Radiation",             "https://www.youtube.com/embed/jF6ISxofwI4?cc_load_policy=1&cc_lang_pref=en" ],
                    [ "Medical Radiation",          "https://www.youtube.com/embed/4uYni8N0UQI?cc_load_policy=1&cc_lang_pref=en" ]
                ]
            },
            {
                "title": "Viruses",
                "intro_videos" : [
                    [ "Denial",                     "https://www.youtube.com/embed/t4v-36h2noo?cc_load_policy=1&cc_lang_pref=en" ]
                ],
                "fact_videos" : [
                    [ "Viruses",                    "https://www.youtube.com/embed/5QqdP291DqY?cc_load_policy=1&cc_lang_pref=en" ]
                ]
             
            }
        ],
   
        "tutorials": [
            [ "Visual facilitation of the project-based learning",  "https://www.youtube.com/embed/qo4zCqAGGug?cc_load_policy=1&cc_lang_pref=en" ],
            [ "Visual facilitation templates",                      "https://photos.app.goo.gl/fyWMS5d39dksz8BU8" ],
            [ "How to make a video of your experiment",             "https://www.youtube.com/playlist?list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" ],
            [ "How to assess the reliability of information",       "https://evidence-erasmus.github.io/evidence/en/tools/reliability-assessment" ],
            [ "Recognising the Tactics of Science Denial in the Context of Climate Change", "https://drive.google.com/file/d/1WTVMOztMUAINI-T2c7ZBNQEscpyBm6H6/view?usp=drive_link" ]
        ]
    },



    "et" : {
        "title": "Tööriistad",
        "description": "Siit leiad ressursside ja tööriistade loetelu, mida moodulite läbimisel kasutatakse.",
        "videos": "Videod",
        "intro_videos": "Sissejuhatavad videod (lavastatud)",
        "fact_videos": "Faktivideod",
        "other": "Muu",
        "tutorials_text": "Õpetused",
        "modules": [
            
            {
                "title": "Kosmos",
                "intro_videos" : [
                    [ "Maa kutsub Martat",      "https://www.youtube.com/embed/a95oKCDgIow?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "321",                    "https://www.youtube.com/embed/wlstnH27waw?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Lipp tuules",            "https://www.youtube.com/embed/RvLdHwy4qMI?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Kus kõik tulnukad on?",  "https://www.youtube.com/embed/d86JQpemSZ4?cc_load_policy=1&cc_lang_pref=et" ]
                ],
                "fact_videos" : [
                    [ "Päikesesüsteem",                         "https://www.youtube.com/embed/pCMU86sZUgc?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Kosmose uurimine",                       "https://www.youtube.com/embed/Sr6B1p-HV2I?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Marsi uurimine",                         "https://www.youtube.com/embed/IHi9sE0Ppkc?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Maast Kuule",                            "https://www.youtube.com/embed/K84sQveeJFg?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Uurimine väljaspool Päikesesüsteemi",    "https://www.youtube.com/embed/dthYcrjs0DM?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Kosmose uurimise ajajoon",               "https://www.youtube.com/embed/Sr6B1p-HV2I?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Kosmoseprügi",                           "https://www.youtube.com/embed/kvCIe_tevic?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Rahvusvaheline kosmosejaam (ISS)",       "https://www.youtube.com/embed/kvCIe_tevic?cc_load_policy=1&cc_lang_pref=et" ]
                ],
                "other" : [
                    [ "Fotoalbumid", "https://photobookaa.000webhostapp.com/" ],
                    [ "Virtuaalne fotonäitus", "https://www.artsteps.com/view/640e83202e32550b524a52b1" ]
                ]
            },{
                "title": "Uimastid",
                "intro_videos" : [
                    [ "Uimastid",                               "https://www.youtube.com/embed/cN5KV_WJubw?cc_load_policy=1&cc_lang_pref=et" ]
                ],
                "fact_videos" : [
                    [ "Uimasõltuvus",                               "https://www.youtube.com/embed/lWCYOAL-PTY?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Sõltuvus on halb valik",                     "https://www.youtube.com/embed/HBvYLmxKFx4?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Ainult narkomaanidel on probleem?",          "https://www.youtube.com/embed/HBvYLmxKFx4?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Kas kõik uimastid on võrdselt kahjulikud?",  "https://www.youtube.com/embed/ejCibyesOCA?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Imerohud",                                   "https://www.youtube.com/embed/0AsWzmp7Ru4?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Tõukuri müüt",                               "https://www.youtube.com/embed/7qXErzPzfvM?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Alkohol ei ole narkootikum?",                "https://www.youtube.com/embed/H8OM7aS-JD4?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Meditsiiniline kanep",                       "https://www.youtube.com/embed/P_m94ZtyRGM?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Uimastid – Portugali poliitika",             "https://www.youtube.com/embed/BrZ8lDRMx4E?cc_load_policy=1&cc_lang_pref=et" ]
                ]
            },
            {
                "title": "Kliimamuutused",
                "intro_videos" : [
                    [ "Kliimalõuna",       "https://www.youtube.com/embed/CbJ7GmgEAAo?cc_load_policy=1&cc_lang_pref=en" ]
                ],
                "fact_videos" : [
                    [ "Kalapüük",               "https://www.youtube.com/embed/saUTXISSlBI?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Jää sulamine ja loomad", "https://www.youtube.com/embed/mEgYnOaiJnU?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Kliimamuutused",         "https://www.youtube.com/embed/VLALl1kRKRo?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Ilm ja kliima",          "https://www.youtube.com/embed/_k0NgbXgQ_k?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Metsaraie",              "https://www.youtube.com/embed/7y6zW02Lbtc?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Kasvuhooneefekt",        "https://www.youtube.com/embed/ftG_PgwWeNQ?cc_load_policy=1&cc_lang_pref=et" ]
                ],
                "other" : [
                    [ "Virtuaalne fotonäitus", "https://www.artsteps.com/view/6411276082afca1aa133e268" ]
                ]
            },
            {
                "title": "Evolutsioon",
                "intro_videos" : [
                    [ "Monkey business",                "https://www.youtube.com/embed/9jusKTXoQak?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Evolutsiooniteooria",        "https://www.youtube.com/embed/cXS_uSqzwuM?cc_load_policy=1&cc_lang_pref=et" ]
                ],
                "fact_videos" : [
                    [ "Evolutsiooniteooria, osa 1", "https://www.youtube.com/embed/4k4JLntDIzE?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Evolutsiooniteooria, osa 2", "https://www.youtube.com/embed/O1Y3XyW9pEs?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Evolutsiooniteooria, osa 3", "https://www.youtube.com/embed/9QwTCj817Sg?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Evolutsiooniteooria, osa 4", "https://www.youtube.com/embed/FMHNxsInyEg?cc_load_policy=1&cc_lang_pref=et" ]
                ]
            },
            {
                "title": "Viirused",
                "intro_videos" : [
                    [ "Eitamine",                   "https://www.youtube.com/embed/t4v-36h2noo?cc_load_policy=1&cc_lang_pref=et" ]
                ],
                "fact_videos" : [
                    [ "Viirused",                   "https://www.youtube.com/embed/5QqdP291DqY?cc_load_policy=1&cc_lang_pref=et" ]
                ]
             
            },
            {
                "title": "Kiirgus",
                "intro_videos" : [
                    [ "Kiirguspettus",             "https://www.youtube.com/embed/ccMo9WfKeOY?cc_load_policy=1&cc_lang_pref=et" ]
                ],
                "fact_videos" : [
                    [ "Üldine kiirgus",                 "https://www.youtube.com/embed/R-m95tG1cys?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Mobiiltelefonide kiirgus 5G",    "https://www.youtube.com/embed/wPGwBycOlx0?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Looduslik kiirgus",              "https://www.youtube.com/embed/FqRqNw5jJ0Y?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Kiirgushaigus",                  "https://www.youtube.com/embed/WehXQltBF_c?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Radioaktiivsed jäätmed",         "https://www.youtube.com/embed/oa1dTCLvPok?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Radoon gaas",                    "https://www.youtube.com/embed/xVZHeX1jv_w?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Kodune kiirgus",                 "https://www.youtube.com/embed/jF6ISxofwI4?cc_load_policy=1&cc_lang_pref=et" ],
                    [ "Meditsiiniline kiirgus",         "https://www.youtube.com/embed/4uYni8N0UQI?cc_load_policy=1&cc_lang_pref=et" ]
                ]
            }
        ],

        "tutorials": [
            [ "Projektipõhise õppe visuaalne hõlbustamine", "https://www.youtube.com/watch?v=qo4zCqAGGug" ],
            [ "Visuaalse hõlbustamise mall", "https://photos.app.goo.gl/fyWMS5d39dksz8BU8" ],
            [ "Kuidas teha oma eksperimendist video?", "https://www.youtube.com/playlist?list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" ],
            [ "Kuidas hinnata info usaldusväärsust?", "https://evidence-erasmus.github.io/evidence/et/tools/reliability-assessment" ],
            [ "Teaduse eitamise taktikate äratundmine kliimamuutuste kontekstis", "https://drive.google.com/file/d/1WTVMOztMUAINI-T2c7ZBNQEscpyBm6H6/view?usp=drive_link" ]
        ]
    },




    "el" : {
        "title": "Tools",
        "description": "Here you can find a list of resources and tools, that are used thourough the modules.",
        "videos": "Videos",
        "intro_videos": "Intro videos (staged)",
        "fact_videos": "Fact videos",
        "other": "Other",
        "tutorials_text": "Tutorials",
        "modules": [
            {
                "title": "Space",
                "intro_videos" : [
                    [ "Earth Calls Martha",         "https://www.youtube.com/embed/a95oKCDgIow?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "321",                        "https://www.youtube.com/embed/wlstnH27waw?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Flag in the Wind",           "https://www.youtube.com/embed/RvLdHwy4qMI?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Where are All the Aliens",   "https://www.youtube.com/embed/d86JQpemSZ4?cc_load_policy=1&cc_lang_pref=el" ]
                ],
                "fact_videos" : [
                    [ "Solar System",                           "https://www.youtube.com/embed/pCMU86sZUgc?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Space Explorations",                     "https://www.youtube.com/embed/Sr6B1p-HV2I?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Exploring Mars",                         "https://www.youtube.com/embed/IHi9sE0Ppkc?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "From the Earth to the Moon",             "https://www.youtube.com/embed/K84sQveeJFg?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Exploration outside the Solar System",   "https://www.youtube.com/embed/dthYcrjs0DM?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Space Exploration Timeline",             "https://www.youtube.com/embed/Sr6B1p-HV2I?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Space Debris",                           "https://www.youtube.com/embed/kvCIe_tevic?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "International Space Station (ISS)",      "https://www.youtube.com/embed/kvCIe_tevic?cc_load_policy=1&cc_lang_pref=el" ]
                ],
                "other" : [
                    [ "Photography books", "https://photobookaa.000webhostapp.com/" ],
                    [ "Virtual photo exhibition", "https://www.artsteps.com/view/640e83202e32550b524a52b1" ]
                ]
            },
            {
                "title": "Drugs",
                "intro_videos" : [
                    [ "Drugs",                              "https://www.youtube.com/embed/cN5KV_WJubw?cc_load_policy=1&cc_lang_pref=el" ]
                ],
                "fact_videos" : [
                    [ "Drug addiction",                     "https://www.youtube.com/embed/lWCYOAL-PTY?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Addiction is a bad choice",          "https://www.youtube.com/embed/HBvYLmxKFx4?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Only drug addicts have a problem?",  "https://www.youtube.com/embed/HBvYLmxKFx4?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "All drugs are equally harmful?",     "https://www.youtube.com/embed/ejCibyesOCA?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "“Miracle” drugs",                    "https://www.youtube.com/embed/0AsWzmp7Ru4?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "The Pusher Myth",                    "https://www.youtube.com/embed/7qXErzPzfvM?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Alcohol is not a drug?",             "https://www.youtube.com/embed/H8OM7aS-JD4?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Medical Marijuana",                  "https://www.youtube.com/embed/P_m94ZtyRGM?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Drugs - The Portuguese Policy",      "https://www.youtube.com/embed/BrZ8lDRMx4E?cc_load_policy=1&cc_lang_pref=el" ]
                ]
            },
            {
                "title": "Climate change",
                "intro_videos" : [
                    [ "Climatic Lunch",             "https://www.youtube.com/embed/CbJ7GmgEAAo?cc_load_policy=1&cc_lang_pref=el" ]
                ],
                "fact_videos" : [
                    [ "Fishing Planet",             "https://www.youtube.com/embed/saUTXISSlBI?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Ice Melting and Animals",    "https://www.youtube.com/embed/mEgYnOaiJnU?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Climate Change",             "https://www.youtube.com/embed/VLALl1kRKRo?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Climate and Wheather",       "https://www.youtube.com/embed/_k0NgbXgQ_k?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Deforestation",              "https://www.youtube.com/embed/7y6zW02Lbtc?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Green House Effect",         "https://www.youtube.com/embed/ftG_PgwWeNQ?cc_load_policy=1&cc_lang_pref=el" ]
                ],
                "other" : [
                    [ "Virtual photo exhibition", "https://www.artsteps.com/view/6411276082afca1aa133e268" ]
                ]
            },
            {
                "title": "Evolution",
                "intro_videos" : [
                    [ "Monkey Business",        "https://www.youtube.com/embed/9jusKTXoQak?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Theory of Evolution",    "https://www.youtube.com/embed/cXS_uSqzwuM?cc_load_policy=1&cc_lang_pref=el" ]
                ],
                "fact_videos" : [
                    [ "Theory of Evolution, Episode 1", "https://www.youtube.com/embed/4k4JLntDIzE?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Theory of Evolution, Episode 2", "https://www.youtube.com/embed/O1Y3XyW9pEs?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Theory of Evolution, Episode 3", "https://www.youtube.com/embed/9QwTCj817Sg?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Theory of Evolution, Episode 4", "https://www.youtube.com/embed/FMHNxsInyEg?cc_load_policy=1&cc_lang_pref=el" ]
                ]
            },
            {
                "title": "Radiation",
                "intro_videos" : [
                    [ "Radiation Hoax", "https://www.youtube.com/embed/ccMo9WfKeOY?cc_load_policy=1&cc_lang_pref=el" ]
                ],
                "fact_videos" : [
                    [ "General Radiation",          "https://www.youtube.com/embed/R-m95tG1cys?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Mobile Phones Radiation 5G", "https://www.youtube.com/embed/wPGwBycOlx0?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Natural Radiation",          "https://www.youtube.com/embed/FqRqNw5jJ0Y?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Radiation Sickness",         "https://www.youtube.com/embed/WehXQltBF_c?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Radioactive Waste",          "https://www.youtube.com/embed/oa1dTCLvPok?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Radon Gas",                  "https://www.youtube.com/embed/xVZHeX1jv_w?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Home Radiation",             "https://www.youtube.com/embed/jF6ISxofwI4?cc_load_policy=1&cc_lang_pref=el" ],
                    [ "Medical Radiation",          "https://www.youtube.com/embed/4uYni8N0UQI?cc_load_policy=1&cc_lang_pref=el" ]
                ]
            },
            {
                "title": "Viruses",
                "intro_videos" : [
                    [ "Denial",                     "https://www.youtube.com/embed/t4v-36h2noo?cc_load_policy=1&cc_lang_pref=el" ]
                ],
                "fact_videos" : [
                    [ "Viruses",                    "https://www.youtube.com/embed/5QqdP291DqY?cc_load_policy=1&cc_lang_pref=el" ]
                ]
             
            }
        ],
   
        "tutorials": [
            [ "Visual facilitation of the project-based learning",  "https://www.youtube.com/embed/qo4zCqAGGug?cc_load_policy=1&cc_lang_pref=el" ],
            [ "Visual facilitation templates",                      "https://photos.app.goo.gl/fyWMS5d39dksz8BU8" ],
            [ "How to make a video of your experiment",             "https://www.youtube.com/playlist?list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" ],
            [ "How to assess the reliability of information",       "https://evidence-erasmus.github.io/evidence/el/tools/reliability-assessment" ],
            [ "Recognising the Tactics of Science Denial in the Context of Climate Change", "https://drive.google.com/file/d/1WTVMOztMUAINI-T2c7ZBNQEscpyBm6H6/view?usp=drive_link" ]
        ]
    },


    "pt" : {
        "title": "Tools",
        "description": "Here you can find a list of resources and tools, that are used thourough the modules.",
        "videos": "Videos",
        "intro_videos": "Intro videos (staged)",
        "fact_videos": "Fact videos",
        "other": "Other",
        "tutorials_text": "Tutorials",
        "modules": [
            {
                "title": "Space",
                "intro_videos" : [
                    [ "Earth Calls Martha",         "https://www.youtube.com/embed/a95oKCDgIow?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "321",                        "https://www.youtube.com/embed/wlstnH27waw?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Flag in the Wind",           "https://www.youtube.com/embed/RvLdHwy4qMI?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Where are All the Aliens",   "https://www.youtube.com/embed/d86JQpemSZ4?cc_load_policy=1&cc_lang_pref=pt" ]
                ],
                "fact_videos" : [
                    [ "Solar System",                           "https://www.youtube.com/embed/pCMU86sZUgc?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Space Explorations",                     "https://www.youtube.com/embed/Sr6B1p-HV2I?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Exploring Mars",                         "https://www.youtube.com/embed/IHi9sE0Ppkc?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "From the Earth to the Moon",             "https://www.youtube.com/embed/K84sQveeJFg?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Exploration outside the Solar System",   "https://www.youtube.com/embed/dthYcrjs0DM?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Space Exploration Timeline",             "https://www.youtube.com/embed/Sr6B1p-HV2I?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Space Debris",                           "https://www.youtube.com/embed/kvCIe_tevic?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "International Space Station (ISS)",      "https://www.youtube.com/embed/kvCIe_tevic?cc_load_policy=1&cc_lang_pref=pt" ]
                ],
                "other" : [
                    [ "Photography books", "https://photobookaa.000webhostapp.com/" ],
                    [ "Virtual photo exhibition", "https://www.artsteps.com/view/640e83202e32550b524a52b1" ]
                ]
            },
            {
                "title": "Drugs",
                "intro_videos" : [
                    [ "Drugs",                              "https://www.youtube.com/embed/cN5KV_WJubw?cc_load_policy=1&cc_lang_pref=pt" ]
                ],
                "fact_videos" : [
                    [ "Drug addiction",                     "https://www.youtube.com/embed/lWCYOAL-PTY?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Addiction is a bad choice",          "https://www.youtube.com/embed/HBvYLmxKFx4?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Only drug addicts have a problem?",  "https://www.youtube.com/embed/HBvYLmxKFx4?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "All drugs are equally harmful?",     "https://www.youtube.com/embed/ejCibyesOCA?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "“Miracle” drugs",                    "https://www.youtube.com/embed/0AsWzmp7Ru4?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "The Pusher Myth",                    "https://www.youtube.com/embed/7qXErzPzfvM?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Alcohol is not a drug?",             "https://www.youtube.com/embed/H8OM7aS-JD4?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Medical Marijuana",                  "https://www.youtube.com/embed/P_m94ZtyRGM?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Drugs - The Portuguese Policy",      "https://www.youtube.com/embed/BrZ8lDRMx4E?cc_load_policy=1&cc_lang_pref=pt" ]
                ]
            },
            {
                "title": "Climate change",
                "intro_videos" : [
                    [ "Climatic Lunch",             "https://www.youtube.com/embed/CbJ7GmgEAAo?cc_load_policy=1&cc_lang_pref=pt" ]
                ],
                "fact_videos" : [
                    [ "Fishing Planet",             "https://www.youtube.com/embed/saUTXISSlBI?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Ice Melting and Animals",    "https://www.youtube.com/embed/mEgYnOaiJnU?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Climate Change",             "https://www.youtube.com/embed/VLALl1kRKRo?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Climate and Wheather",       "https://www.youtube.com/embed/_k0NgbXgQ_k?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Deforestation",              "https://www.youtube.com/embed/7y6zW02Lbtc?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Green House Effect",         "https://www.youtube.com/embed/ftG_PgwWeNQ?cc_load_policy=1&cc_lang_pref=pt" ]
                ],
                "other" : [
                    [ "Virtual photo exhibition", "https://www.artsteps.com/view/6411276082afca1aa133e268" ]
                ]
            },
            {
                "title": "Evolution",
                "intro_videos" : [
                    [ "Monkey Business",        "https://www.youtube.com/embed/9jusKTXoQak?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Theory of Evolution",    "https://www.youtube.com/embed/cXS_uSqzwuM?cc_load_policy=1&cc_lang_pref=pt" ]
                ],
                "fact_videos" : [
                    [ "Theory of Evolution, Episode 1", "https://www.youtube.com/embed/4k4JLntDIzE?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Theory of Evolution, Episode 2", "https://www.youtube.com/embed/O1Y3XyW9pEs?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Theory of Evolution, Episode 3", "https://www.youtube.com/embed/9QwTCj817Sg?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Theory of Evolution, Episode 4", "https://www.youtube.com/embed/FMHNxsInyEg?cc_load_policy=1&cc_lang_pref=pt" ]
                ]
            },
            {
                "title": "Radiation",
                "intro_videos" : [
                    [ "Radiation Hoax", "https://www.youtube.com/embed/ccMo9WfKeOY?cc_load_policy=1&cc_lang_pref=pt" ]
                ],
                "fact_videos" : [
                    [ "General Radiation",          "https://www.youtube.com/embed/R-m95tG1cys?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Mobile Phones Radiation 5G", "https://www.youtube.com/embed/wPGwBycOlx0?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Natural Radiation",          "https://www.youtube.com/embed/FqRqNw5jJ0Y?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Radiation Sickness",         "https://www.youtube.com/embed/WehXQltBF_c?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Radioactive Waste",          "https://www.youtube.com/embed/oa1dTCLvPok?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Radon Gas",                  "https://www.youtube.com/embed/xVZHeX1jv_w?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Home Radiation",             "https://www.youtube.com/embed/jF6ISxofwI4?cc_load_policy=1&cc_lang_pref=pt" ],
                    [ "Medical Radiation",          "https://www.youtube.com/embed/4uYni8N0UQI?cc_load_policy=1&cc_lang_pref=pt" ]
                ]
            },
            {
                "title": "Viruses",
                "intro_videos" : [
                    [ "Denial",                     "https://www.youtube.com/embed/t4v-36h2noo?cc_load_policy=1&cc_lang_pref=pt" ]
                ],
                "fact_videos" : [
                    [ "Viruses",                    "https://www.youtube.com/embed/5QqdP291DqY?cc_load_policy=1&cc_lang_pref=pt" ]
                ]
             
            }
        ],
   
        "tutorials": [
            [ "Visual facilitation of the project-based learning",  "https://www.youtube.com/embed/qo4zCqAGGug?cc_load_policy=1&cc_lang_pref=pt" ],
            [ "Visual facilitation templates",                      "https://photos.app.goo.gl/fyWMS5d39dksz8BU8" ],
            [ "How to make a video of your experiment",             "https://www.youtube.com/playlist?list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" ],
            [ "How to assess the reliability of information",       "https://evidence-erasmus.github.io/evidence/pt/tools/reliability-assessment" ],
            [ "Recognising the Tactics of Science Denial in the Context of Climate Change", "https://drive.google.com/file/d/1WTVMOztMUAINI-T2c7ZBNQEscpyBm6H6/view?usp=drive_link" ]
        ]
    },


    "sv" : {
        "title": "Tools",
        "description": "Here you can find a list of resources and tools, that are used thourough the modules.",
        "videos": "Videos",
        "intro_videos": "Intro videos (staged)",
        "fact_videos": "Fact videos",
        "other": "Other",
        "tutorials_text": "Tutorials",
        "modules": [
            {
                "title": "Space",
                "intro_videos" : [
                    [ "Earth Calls Martha",         "https://www.youtube.com/embed/a95oKCDgIow?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "321",                        "https://www.youtube.com/embed/wlstnH27waw?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Flag in the Wind",           "https://www.youtube.com/embed/RvLdHwy4qMI?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Where are All the Aliens",   "https://www.youtube.com/embed/d86JQpemSZ4?cc_load_policy=1&cc_lang_pref=sv" ]
                ],
                "fact_videos" : [
                    [ "Solar System",                           "https://www.youtube.com/embed/pCMU86sZUgc?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Space Explorations",                     "https://www.youtube.com/embed/Sr6B1p-HV2I?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Exploring Mars",                         "https://www.youtube.com/embed/IHi9sE0Ppkc?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "From the Earth to the Moon",             "https://www.youtube.com/embed/K84sQveeJFg?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Exploration outside the Solar System",   "https://www.youtube.com/embed/dthYcrjs0DM?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Space Exploration Timeline",             "https://www.youtube.com/embed/Sr6B1p-HV2I?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Space Debris",                           "https://www.youtube.com/embed/kvCIe_tevic?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "International Space Station (ISS)",      "https://www.youtube.com/embed/kvCIe_tevic?cc_load_policy=1&cc_lang_pref=sv" ]
                ],
                "other" : [
                    [ "Photography books", "https://photobookaa.000webhostapp.com/" ],
                    [ "Virtual photo exhibition", "https://www.artsteps.com/view/640e83202e32550b524a52b1" ]
                ]
            },
            {
                "title": "Drugs",
                "intro_videos" : [
                    [ "Drugs",                              "https://www.youtube.com/embed/cN5KV_WJubw?cc_load_policy=1&cc_lang_pref=sv" ]
                ],
                "fact_videos" : [
                    [ "Drug addiction",                     "https://www.youtube.com/embed/lWCYOAL-PTY?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Addiction is a bad choice",          "https://www.youtube.com/embed/HBvYLmxKFx4?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Only drug addicts have a problem?",  "https://www.youtube.com/embed/HBvYLmxKFx4?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "All drugs are equally harmful?",     "https://www.youtube.com/embed/ejCibyesOCA?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "“Miracle” drugs",                    "https://www.youtube.com/embed/0AsWzmp7Ru4?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "The Pusher Myth",                    "https://www.youtube.com/embed/7qXErzPzfvM?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Alcohol is not a drug?",             "https://www.youtube.com/embed/H8OM7aS-JD4?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Medical Marijuana",                  "https://www.youtube.com/embed/P_m94ZtyRGM?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Drugs - The Portuguese Policy",      "https://www.youtube.com/embed/BrZ8lDRMx4E?cc_load_policy=1&cc_lang_pref=sv" ]
                ]
            },
            {
                "title": "Climate change",
                "intro_videos" : [
                    [ "Climatic Lunch",             "https://www.youtube.com/embed/CbJ7GmgEAAo?cc_load_policy=1&cc_lang_pref=sv" ]
                ],
                "fact_videos" : [
                    [ "Fishing Planet",             "https://www.youtube.com/embed/saUTXISSlBI?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Ice Melting and Animals",    "https://www.youtube.com/embed/mEgYnOaiJnU?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Climate Change",             "https://www.youtube.com/embed/VLALl1kRKRo?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Climate and Wheather",       "https://www.youtube.com/embed/_k0NgbXgQ_k?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Deforestation",              "https://www.youtube.com/embed/7y6zW02Lbtc?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Green House Effect",         "https://www.youtube.com/embed/ftG_PgwWeNQ?cc_load_policy=1&cc_lang_pref=sv" ]
                ],
                "other" : [
                    [ "Virtual photo exhibition", "https://www.artsteps.com/view/6411276082afca1aa133e268" ]
                ]
            },
            {
                "title": "Evolution",
                "intro_videos" : [
                    [ "Monkey Business",        "https://www.youtube.com/embed/9jusKTXoQak?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Theory of Evolution",    "https://www.youtube.com/embed/cXS_uSqzwuM?cc_load_policy=1&cc_lang_pref=sv" ]
                ],
                "fact_videos" : [
                    [ "Theory of Evolution, Episode 1", "https://www.youtube.com/embed/4k4JLntDIzE?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Theory of Evolution, Episode 2", "https://www.youtube.com/embed/O1Y3XyW9pEs?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Theory of Evolution, Episode 3", "https://www.youtube.com/embed/9QwTCj817Sg?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Theory of Evolution, Episode 4", "https://www.youtube.com/embed/FMHNxsInyEg?cc_load_policy=1&cc_lang_pref=sv" ]
                ]
            },
            {
                "title": "Radiation",
                "intro_videos" : [
                    [ "Radiation Hoax", "https://www.youtube.com/embed/ccMo9WfKeOY?cc_load_policy=1&cc_lang_pref=sv" ]
                ],
                "fact_videos" : [
                    [ "General Radiation",          "https://www.youtube.com/embed/R-m95tG1cys?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Mobile Phones Radiation 5G", "https://www.youtube.com/embed/wPGwBycOlx0?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Natural Radiation",          "https://www.youtube.com/embed/FqRqNw5jJ0Y?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Radiation Sickness",         "https://www.youtube.com/embed/WehXQltBF_c?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Radioactive Waste",          "https://www.youtube.com/embed/oa1dTCLvPok?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Radon Gas",                  "https://www.youtube.com/embed/xVZHeX1jv_w?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Home Radiation",             "https://www.youtube.com/embed/jF6ISxofwI4?cc_load_policy=1&cc_lang_pref=sv" ],
                    [ "Medical Radiation",          "https://www.youtube.com/embed/4uYni8N0UQI?cc_load_policy=1&cc_lang_pref=sv" ]
                ]
            },
            {
                "title": "Viruses",
                "intro_videos" : [
                    [ "Denial",                     "https://www.youtube.com/embed/t4v-36h2noo?cc_load_policy=1&cc_lang_pref=sv" ]
                ],
                "fact_videos" : [
                    [ "Viruses",                    "https://www.youtube.com/embed/5QqdP291DqY?cc_load_policy=1&cc_lang_pref=sv" ]
                ]
             
            }
        ],
   
        "tutorials": [
            [ "Visual facilitation of the project-based learning",  "https://www.youtube.com/embed/qo4zCqAGGug?cc_load_policy=1&cc_lang_pref=sv" ],
            [ "Visual facilitation templates",                      "https://photos.app.goo.gl/fyWMS5d39dksz8BU8" ],
            [ "How to make a video of your experiment",             "https://www.youtube.com/playlist?list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" ],
            [ "How to assess the reliability of information",       "https://evidence-erasmus.github.io/evidence/sv/tools/reliability-assessment" ],
            [ "Recognising the Tactics of Science Denial in the Context of Climate Change", "https://drive.google.com/file/d/1WTVMOztMUAINI-T2c7ZBNQEscpyBm6H6/view?usp=drive_link" ]
        ]
    }



    
}
</i18n>



<!-- Content structure -->

<!--

Viruses
    Intro video (staged)
        Denial https://youtu.be/t4v-36h2noo 
    Fact video
        Viruses  https://www.youtube.com/watch?v=5QqdP291DqY 
Radiation
    Intro video (staged)
        Radiation Hoax  https://www.youtube.com/watch?v=ccMo9WfKeOY 
    Fact videos
        General Radiation: https://www.youtube.com/watch?v=R-m95tG1cys 
        Mobile Phones Radiation 5G: https://www.youtube.com/watch?v=wPGwBycOlx0 
        Natural Radiation: https://www.youtube.com/watch?v=FqRqNw5jJ0Y 
        Radiation Sickness: https://www.youtube.com/watch?v=WehXQltBF_c 
        Radioactive Waste: https://www.youtube.com/watch?v=oa1dTCLvPok 
        Radon Gas: https://www.youtube.com/watch?v=xVZHeX1jv_w 
        Home Radiation: https://www.youtube.com/watch?v=jF6ISxofwI4 
        Medical Radiation: https://www.youtube.com/watch?v=4uYni8N0UQI 
Space
    Intro videos (staged)
        Earth Calls Martha: https://youtu.be/a95oKCDgIow
        321: https://youtu.be/wlstnH27waw
        Flag in the Wind: https://youtu.be/RvLdHwy4qMI
        Where are All the Aliens: https://youtu.be/d86JQpemSZ4 
    Fact videos
        Solar System  https://www.youtube.com/watch?v=pCMU86sZUgc 
        Space Explorations https://www.youtube.com/watch?v=Sr6B1p-HV2I 
        Exploring Mars https://www.youtube.com/watch?v=IHi9sE0Ppkc 
        From the Earth to the Moon https://www.youtube.com/watch?v=K84sQveeJFg 
        Exploration outside the Solar System  https://www.youtube.com/watch?v=dthYcrjs0DM 
        Space Exploration Timeline  https://www.youtube.com/watch?v=Sr6B1p-HV2I 
        Space Debris https://www.youtube.com/watch?v=kvCIe_tevic 
        International Space Station (ISS) https://youtu.be/kvCIe_tevic 
    Other
        Photography  books: https://photobookaa.000webhostapp.com/  
        Virtual photo exhibition: https://www.artsteps.com/view/640e83202e32550b524a52b1 
    Drugs
        Intro video (staged)
            https://www.youtube.com/watch?v=cN5KV_WJubw&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=1 
    Fact videos
        Drug addiction: https://youtu.be/lWCYOAL-PTY?list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI
        Addiction is a bad choice https://www.youtube.com/watch?v=HBvYLmxKFx4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=3&pp=iAQB 
        Only drug addicts have a problem? https://www.youtube.com/watch?v=HBvYLmxKFx4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=3&pp=iAQB 
        All drugs are equally harmful? https://www.youtube.com/watch?v=ejCibyesOCA&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=5&pp=iAQB 
        “Miracle” drugs https://www.youtube.com/watch?v=0AsWzmp7Ru4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=6&pp=iAQB 
        The Pusher Myth https://youtu.be/7qXErzPzfvM?list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI 
        Alcohol is not a drug? https://www.youtube.com/watch?v=H8OM7aS-JD4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=8&pp=iAQB 
        Medical Marijuana https://www.youtube.com/watch?v=P_m94ZtyRGM&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=9&t=1s&pp=iAQB 
        Drugs - The Portuguese Policy https://www.youtube.com/watch?v=BrZ8lDRMx4E&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=10&pp=iAQB 
Climate change
    Intro video (staged)
        Climatic Lunch  https://youtu.be/CbJ7GmgEAAo 
    Fact videos: 
        Fishing Planet  https://www.youtube.com/watch?v=saUTXISSlBI 
        Ice Melting and Animals https://www.youtube.com/watch?v=mEgYnOaiJnU 
        Climate Change https://www.youtube.com/watch?v=VLALl1kRKRo 
        Climate and Wheather: https://www.youtube.com/watch?v=_k0NgbXgQ_k 
        Deforestation: https://www.youtube.com/watch?v=7y6zW02Lbtc
        Green House Effect: https://www.youtube.com/watch?v=ftG_PgwWeNQ
    Other
        Virtual photo exhibition: https://www.artsteps.com/view/6411276082afca1aa133e268 
Evolution
    Intro videos (staged)
        Monkey Business https://www.youtube.com/watch?v=9jusKTXoQak  
        Theory of Evolution https://www.youtube.com/watch?v=cXS_uSqzwuM 
    Fact videos
        Theory of Evolution, Episode 1  https://www.youtube.com/watch?v=4k4JLntDIzE 
        Theory of Evolution, Episode 2 https://www.youtube.com/watch?v=O1Y3XyW9pEs 
        Theory of Evolution, Episode 3 https://www.youtube.com/watch?v=9QwTCj817Sg 
        Theory of Evolution, Episode 4 https://www.youtube.com/watch?v=FMHNxsInyEg 

Tutorials
    Visual facilitation of the project-based learning: https://www.youtube.com/watch?v=qo4zCqAGGug 
    Visual facilitation templates: https://photos.app.goo.gl/fyWMS5d39dksz8BU8 
    How to make a video of your experiment: https://www.youtube.com/playlist?list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0 
    How to assess the reliability of information: 
        English: https://evidence-erasmus.github.io/evidence/el/tools/reliability-assessment
        Estonian: https://evidence-erasmus.github.io/evidence/et/tools/reliability-assessment 
        Greek: https://evidence-erasmus.github.io/evidence/el/tools/reliability-assessment 
        Portuguese: https://evidence-erasmus.github.io/evidence/tools/reliability-assessment 
    Recognising the Tactics of Science Denial in the Context of Climate Change https://docs.google.com/document/d/1NNKEVNlpKTG4xfP1N1vu7le_eJ1MyzxL/edit?usp=sharing&ouid=104421339666784640445&rtpof=true&sd=true 

-->