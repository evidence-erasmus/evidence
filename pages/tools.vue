<template>
    <div>
        <h1>
            {{ t('title') }}
        </h1>

        <p>
            {{ t('description') }}
        </p>

        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <div class="e-card" v-for="module in tm('modules')">
                <h2 class="mt-0 mb-3 text-xxl">{{ rt(module.title) }}</h2>
                <h4 class="mt-0 mb-1 text-slate-500">{{ t('intro_videos') }}</h4>
                <ul>
                    <li v-for="introVideo in module.intro_videos" class="my-0">
                        <NuxtLink :to="rt(introVideo[1])" target="_blank">
                            {{ rt(introVideo[0]) }}
                        </NuxtLink>
                    </li>
                </ul>
                <h4 class="mt-0 mb-1 text-slate-500">{{ t('fact_videos') }}</h4>
                <ul>
                    <li v-for="factVideo in module.fact_videos" class="my-0">
                        <NuxtLink :to="rt(factVideo[1])" target="_blank">
                            {{ rt(factVideo[0]) }}
                        </NuxtLink>
                    </li>
                </ul>
                
                <template v-if="module.other">
                    <h4 class="mt-0 mb-1 text-slate-500">{{ t('other') }}</h4>
                    <ul>
                        <li v-for="other in module.other" class="my-0">
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
        "intro_videos": "Intro videos (staged)",
        "fact_videos": "Fact videos",
        "other": "Other",
        "tutorials_text": "Tutorials",
        "modules": [
            {
                "title": "Viruses",
                "intro_videos" : [
                    [ "Denial", "https://youtu.be/t4v-36h2noo" ]
                ],
                "fact_videos" : [
                    [ "Viruses", "https://www.youtube.com/watch?v=5QqdP291DqY" ]
                ]
             
            },
            {
                "title": "Radiation",
                "intro_videos" : [
                    [ "Radiation Hoax", "" ]
                ],
                "fact_videos" : [
                    [ "Viruses", "https://www.youtube.com/watch?v=5QqdP291DqY" ]
                ]
             
            },
            {
                "title": "Space",
                "intro_videos" : [
                    [ "Earth Calls Martha", "https://youtu.be/a95oKCDgIow" ],
                    [ "321", "https://youtu.be/wlstnH27waw" ],
                    [ "Flag in the Wind", "https://youtu.be/RvLdHwy4qMI" ],
                    [ "Where are All the Aliens", "https://youtu.be/d86JQpemSZ4" ]
                ],
                "fact_videos" : [
                    [ "Solar System", "https://www.youtube.com/watch?v=pCMU86sZUgc" ],
                    [ "Space Explorations", "https://www.youtube.com/watch?v=Sr6B1p-HV2I" ],
                    [ "Exploring Mars", "https://www.youtube.com/watch?v=IHi9sE0Ppkc" ],
                    [ "From the Earth to the Moon", "https://www.youtube.com/watch?v=K84sQveeJFg" ],
                    [ "Exploration outside the Solar System", "https://www.youtube.com/watch?v=dthYcrjs0DM" ],
                    [ "Space Exploration Timeline", "https://www.youtube.com/watch?v=Sr6B1p-HV2I" ],
                    [ "Space Debris", "https://www.youtube.com/watch?v=kvCIe_tevic" ],
                    [ "International Space Station (ISS)", "https://youtu.be/kvCIe_tevic" ]
                ],
                "other" : [
                    [ "Photography books", "https://photobookaa.000webhostapp.com/" ],
                    [ "Virtual photo exhibition", "https://www.artsteps.com/view/640e83202e32550b524a52b1" ]
                ]
            },{
                "title": "Drugs",
                "intro_videos" : [
                    [ "Drugs", "https://www.youtube.com/watch?v=cN5KV_WJubw&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=1" ]
                ],
                "fact_videos" : [
                    [ "Drug addiction", "https://youtu.be/lWCYOAL-PTY?list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI" ],
                    [ "Addiction is a bad choice", "https://www.youtube.com/watch?v=HBvYLmxKFx4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=3&pp=iAQB" ],
                    [ "Only drug addicts have a problem?", "https://www.youtube.com/watch?v=HBvYLmxKFx4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=3&pp=iAQB" ],
                    [ "All drugs are equally harmful?", "https://www.youtube.com/watch?v=ejCibyesOCA&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=5&pp=iAQB" ],
                    [ "“Miracle” drugs", "https://www.youtube.com/watch?v=0AsWzmp7Ru4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=6&pp=iAQB" ],
                    [ "The Pusher Myth", "https://youtu.be/7qXErzPzfvM?list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI" ],
                    [ "Alcohol is not a drug?", "https://www.youtube.com/watch?v=H8OM7aS-JD4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=8&pp=iAQB" ],                    [ "Medical Marijuana", "https://www.youtube.com/watch?v=P_m94ZtyRGM&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=9&t=1s&pp=iAQB" ],
                    [ "Drugs - The Portuguese Policy", "https://www.youtube.com/watch?v=BrZ8lDRMx4E&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=10&pp=iAQB" ]
                ]
            },
            {
                "title": "Climate change",
                "intro_videos" : [
                    [ "Climatic Lunch", "https://youtu.be/CbJ7GmgEAAo" ]
                ],
                "fact_videos" : [
                    [ "Fishing Planet", "https://www.youtube.com/watch?v=saUTXISSlBI" ],
                    [ "Ice Melting and Animals", "https://www.youtube.com/watch?v=mEgYnOaiJnU" ],
                    [ "Climate Change", "https://www.youtube.com/watch?v=VLALl1kRKRo" ],
                    [ "Climate and Wheather", "https://www.youtube.com/watch?v=_k0NgbXgQ_k" ],
                    [ "Deforestation", "https://www.youtube.com/watch?v=7y6zW02Lbtc" ],
                    [ "Green House Effect", "https://www.youtube.com/watch?v=ftG_PgwWeNQ" ]
                ],
                "other" : [
                    [ "Virtual photo exhibition", "https://www.artsteps.com/view/6411276082afca1aa133e268" ]
                ]
            },
            {
                "title": "Evolution",
                "intro_videos" : [
                    [ "Monkey Business", "https://www.youtube.com/watch?v=9jusKTXoQak" ],
                    [ "Theory of Evolution", "https://www.youtube.com/watch?v=cXS_uSqzwuM" ]
                ],
                "fact_videos" : [
                    [ "Theory of Evolution, Episode 1", "https://www.youtube.com/watch?v=4k4JLntDIzE" ],
                    [ "Theory of Evolution, Episode 2", "https://www.youtube.com/watch?v=O1Y3XyW9pEs" ],
                    [ "Theory of Evolution, Episode 3", "https://www.youtube.com/watch?v=9QwTCj817Sg" ],
                    [ "Theory of Evolution, Episode 4", "https://www.youtube.com/watch?v=FMHNxsInyEg" ]
                ]
            }
        ],
        "tutorials": [
            [ "Visual facilitation of the project-based learning", "https://www.youtube.com/watch?v=qo4zCqAGGug" ],
            [ "Visual facilitation templates", "https://photos.app.goo.gl/fyWMS5d39dksz8BU8" ],
            [ "How to make a video of your experiment", "https://www.youtube.com/playlist?list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" ],
            [ "How to assess the reliability of information", "https://evidence-erasmus.github.io/evidence/tools/reliability-assessment" ],
            [ "Recognising the Tactics of Science Denial in the Context of Climate Change", "https://docs.google.com/document/d/1NNKEVNlpKTG4xfP1N1vu7le_eJ1MyzxL/edit?usp=sharing&ouid=104421339666784640445&rtpof=true&sd=true" ]
        ]
    },



    "et" : {
        "title": "Tööriistad",
        "description": "Siit leiad ressursside ja tööriistade loetelu, mida moodulite läbimisel kasutatakse.",
        "intro_videos": "Sissejuhatavad videod (lavastatud)",
        "fact_videos": "Faktivideod",
        "other": "Muu",
        "tutorials_text": "Tutoorialid",
        "modules": [{
                "title": "Viirused",
                "intro_videos" : [
                    [ "Eitamine", "https://youtu.be/t4v-36h2noo" ]
                ],
                "fact_videos" : [
                    [ "Viirused", "https://www.youtube.com/watch?v=5QqdP291DqY" ]
                ]
             
            },
            {
                "title": "Kiirgus",
                "intro_videos" : [
                    [ "Kiirgus pettus", "" ]
                ],
                "fact_videos" : [
                    [ "Viirused", "https://www.youtube.com/watch?v=5QqdP291DqY" ]
                ]
             
            },
            {
                "title": "Kosmos",
                "intro_videos" : [
                    [ "Maa kutsub Martat", "https://youtu.be/a95oKCDgIow" ],
                    [ "321", "https://youtu.be/wlstnH27waw" ],
                    [ "Lipp tuules", "https://youtu.be/RvLdHwy4qMI" ],
                    [ "Kus kõik tulnukad on?", "https://youtu.be/d86JQpemSZ4" ]
                ],
                "fact_videos" : [
                    [ "Päikesesüsteem", "https://www.youtube.com/watch?v=pCMU86sZUgc" ],
                    [ "Kosmose uurimine", "https://www.youtube.com/watch?v=Sr6B1p-HV2I" ],
                    [ "Marsi uurimine", "https://www.youtube.com/watch?v=IHi9sE0Ppkc" ],
                    [ "Maast Kuule", "https://www.youtube.com/watch?v=K84sQveeJFg" ],
                    [ "Uurimine väljaspool Päikesesüsteemi", "https://www.youtube.com/watch?v=dthYcrjs0DM" ],
                    [ "Kosmose uurimise ajajoon", "https://www.youtube.com/watch?v=Sr6B1p-HV2I" ],
                    [ "Kosmoseprügi", "https://www.youtube.com/watch?v=kvCIe_tevic" ],
                    [ "Rahvusvaheline kosmosejaam (ISS)", "https://youtu.be/kvCIe_tevic" ]
                ],
                "other" : [
                    [ "Fotoalbumid", "https://photobookaa.000webhostapp.com/" ],
                    [ "Virtuaalne fotonäitus", "https://www.artsteps.com/view/640e83202e32550b524a52b1" ]
                ]
            },{
                "title": "Uimastid",
                "intro_videos" : [
                    [ "Uimastid", "https://www.youtube.com/watch?v=cN5KV_WJubw&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=1" ]
                ],
                "fact_videos" : [
                    [ "Uimasõltuvus", "https://youtu.be/lWCYOAL-PTY?list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI" ],
                    [ "Sõltuvus on halb valik", "https://www.youtube.com/watch?v=HBvYLmxKFx4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=3&pp=iAQB" ],
                    [ "Ainult narkomaanidel on probleem?", "https://www.youtube.com/watch?v=HBvYLmxKFx4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=3&pp=iAQB" ],
                    [ "Kas kõik uimastid on võrdselt kahjulikud?", "https://www.youtube.com/watch?v=ejCibyesOCA&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=5&pp=iAQB" ],
                    [ "Imerohud", "https://www.youtube.com/watch?v=0AsWzmp7Ru4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=6&pp=iAQB" ],
                    [ "Tõukuri müüt", "https://youtu.be/7qXErzPzfvM?list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI" ],
                    [ "Alkohol ei ole narkootikum?", "https://www.youtube.com/watch?v=H8OM7aS-JD4&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=8&pp=iAQB" ],                    [ "Meditsiiniline kanep", "https://www.youtube.com/watch?v=P_m94ZtyRGM&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=9&t=1s&pp=iAQB" ],
                    [ "Uimastid – Portugali poliitika", "https://www.youtube.com/watch?v=BrZ8lDRMx4E&list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI&index=10&pp=iAQB" ]
                ]
            },
            {
                "title": "Kliimamuutused",
                "intro_videos" : [
                    [ "Kliima lõunasöök", "https://youtu.be/CbJ7GmgEAAo" ]
                ],
                "fact_videos" : [
                    [ "Kalapüügi planeet", "https://www.youtube.com/watch?v=saUTXISSlBI" ],
                    [ "Jää sulamine ja loomad", "https://www.youtube.com/watch?v=mEgYnOaiJnU" ],
                    [ "Kliimamuutused", "https://www.youtube.com/watch?v=VLALl1kRKRo" ],
                    [ "Ilm ja kliima", "https://www.youtube.com/watch?v=_k0NgbXgQ_k" ],
                    [ "Raie", "https://www.youtube.com/watch?v=7y6zW02Lbtc" ],
                    [ "Kasvuhooneefekt", "https://www.youtube.com/watch?v=ftG_PgwWeNQ" ]
                ],
                "other" : [
                    [ "Virtuaalne fotonäitus", "https://www.artsteps.com/view/6411276082afca1aa133e268" ]
                ]
            },
            {
                "title": "Evolutsioon",
                "intro_videos" : [
                    [ "Ahvide värk", "https://www.youtube.com/watch?v=9jusKTXoQak" ],
                    [ "Evolutsiooniteooria", "https://www.youtube.com/watch?v=cXS_uSqzwuM" ]
                ],
                "fact_videos" : [
                    [ "Evolutsiooniteooria, osa 1", "https://www.youtube.com/watch?v=4k4JLntDIzE" ],
                    [ "Evolutsiooniteooria, osa 2", "https://www.youtube.com/watch?v=O1Y3XyW9pEs" ],
                    [ "Evolutsiooniteooria, osa 3", "https://www.youtube.com/watch?v=9QwTCj817Sg" ],
                    [ "Evolutsiooniteooria, osa 4", "https://www.youtube.com/watch?v=FMHNxsInyEg" ]
                ]
            }
        ],
        "tutorials": [
            [ "Projektipõhise õppe visuaalne hõlbustamine", "https://www.youtube.com/watch?v=qo4zCqAGGug" ],
            [ "Visuaalse hõlbustamise mall", "https://photos.app.goo.gl/fyWMS5d39dksz8BU8" ],            [ "Kuidas teha oma eksperimendi videot?", "https://www.youtube.com/playlist?list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" ],
            [ "Kuidas hinnata info usaldusväärsust?", "https://evidence-erasmus.github.io/evidence/et/tools/reliability-assessment" ],
            [ "Teaduse eitamise taktikate äratundmine kliimamuutuste kontekstis", "https://docs.google.com/document/d/1NNKEVNlpKTG4xfP1N1vu7le_eJ1MyzxL/edit?usp=sharing&ouid=104421339666784640445&rtpof=true&sd=true" ]


            
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