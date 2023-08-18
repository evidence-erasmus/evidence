<template>
    <div >
        <h2 class="mt-8">{{ t('roleCardsFavourTitle') }}</h2>
        
        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            
            <ToolsCardgameCard v-for="(cardR, i) in tm('roleCardsFavour')" :key="`cardR${i}`"
                :title="rt(cardR.title)" :story="rt(cardR.story)" :label="`${t('roleCardsLabel')} ${i+1}`" border="border-green-400"
                :image="rt(cardR.image)" 
                :class="props.printMode ? `w-[${cardSize.w}mm] h-[${cardSize.h}mm]` : `print:w-[${cardSize.w}mm] print:h-[${cardSize.h}mm]`"
            />

        </section>

        <h2 class="mt-8">{{ t('roleCardsAgainstTitle') }}</h2>
        
        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            
            <ToolsCardgameCard v-for="(cardR, i) in tm('roleCardsAgainst')" :key="`cardR${i}`"
                :title="rt(cardR.title)" :story="rt(cardR.story)" :label="`${t('roleCardsLabel')} ${i+1}`" border="border-red-400"
                :image="rt(cardR.image)" 
                :class="props.printMode ? `w-[${cardSize.w}mm] h-[${cardSize.h}mm]` : `print:w-[${cardSize.w}mm] print:h-[${cardSize.h}mm]`"
            />
        </section>
    
        <h2 class="print:break-before-page">{{ t('infoCardsTitle') }}</h2>

        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            <ToolsCardgameCard v-for="(cardI, i) in tm('infoCards')" :key="`cardI${i}`"
                :title="rt(cardI.title)" :story="rt(cardI.story)" :label="`${t('infoCardsLabel')} ${i+1}`"
                border="border-blue-500"
                :class="props.printMode ? `w-[${cardSize.w}mm] h-[${cardSize.h}mm]` : `print:w-[${cardSize.w}mm] print:h-[${cardSize.h}mm]`"
            />
        </section>

    </div>
</template>


<script setup>

    // sizes: 64x89  ///   70x120   ///   89x146  /// 

    const cardSize = ref({w:70, h:120});

    const { t, tm, rt } = useI18n({
        useScope: 'local'
    });
    const props = defineProps({
        "printMode" : {
            type: Boolean,
            default: false
        }
    });
</script>


<i18n lang="js">
{
    en: {
        roleCardsFavourTitle : "Roles in favour of Position 1",
        roleCardsAgainstTitle : "Roles in favour of Position 2",
        infoCardsTitle : "Info cards",
        roleCardsLabel : "Position",
        infoCardsLabel : "Info",
        roleCardsFavour : [
            {
                title: "Government politician",
                image: "card_c-change_coral-reefs.webp",
                story: "As a politician in the current government, you have electoral interests and want to increase the employment rate. Your party supports nuclear energy as a feasible, economical, and sustainable energy solution. You defend the job creation resulting from installing a nuclear power plant or a nuclear cemetery and decreasing energy and waste management dependence on other countries.",
                story2: "You seek arguments in favour of nuclear energy to confront your political adversary."
            },
            {
                title: "Manager of a nuclear cemetery",
                image: "card_c-change_polar-bears.webp",
                story: "You are in favour of nuclear energy and try to defend your company's economic interests. You try to sell your project to build and manage a nuclear cemetery as a facility linked to a nuclear power plant operation.",
                story2: "You appeal to the safety provided by such cemeteries. It must be supported by evidence justifying that it is necessary to manage the nuclear waste produced in operating plants so that it does not have to be sent to other countries."
            },
            {
                title: "Nuclear scientist",
                image: "card_c-change_turtles.webp",
                story: "You are a person who is researching new methods to reuse uranium in power plants so that the waste is less hazardous for a shorter period after disposal.",
                story2: "You should seek information to make a case for installing more nuclear power plants and/or nuclear burial sites based on scientific evidence of research into these new techniques.  You seek arguments in favour of nuclear energy."
            },
            {
                title: "Worker from a nuclear plant",
                image: "card_c-change_floods.webp",
                story: "As a worker in a nuclear power plant, you are in favour of the operation of this industry. In your town, many people got jobs because of the demand for labour at the nuclear power plant. So you have a very favourable opinion of this type of company.",
                story2: "You have to look for evidence to demonstrate the benefits of the jobs generated by a nuclear power plant or nuclear cemetery in your country or EU."
            }
        ],
        roleCardsAgainst : [
            {
                title: "Green activist",
                image: "card_c-change_coral-reefs.webp",
                story: "You have a radically negative view of nuclear energy and, of course, do not envisage the possibility of more installations. You are in favour of renewable energies, even if you know that they also have an impact on the environment. You are for the closure of the country's nuclear power plants and graveyards.",
                story2: "You must look for evidence concerning favouring nature and the environment, positioning yourself against nuclear energy, and favouring renewable energies."
            },
            {
                title: "Politician from the opposition",
                image: "card_c-change_polar-bears.webp",
                story: "As a politician from the opposition, you have electoral interests and must be against your political opponent. Your party supports renewable energies as an alternative to traditional and nuclear energy sources, arguing that it is possible to reduce energy dependence on other countries. However, you consider that it is not feasible to close all nuclear power plants in the short term and also argue that the nuclear waste generated should be treated (which could be an economic opportunity for the country), so you do not entirely disagree with the installation of the cemetery.",
                story2: "Look for arguments against nuclear energy and in favour of renewables to confront your political adversary."
            },
            {
                title: "Renewable energy scientist",
                image: "card_c-change_turtles.webp",
                story: "You are an expert in renewable energies and convinced that it is possible to meet a country's energy demand with alternative energies alone, without the need to use nuclear energy. You are against the installation of nuclear power plants and cemeteries, although you do not advocate the closure of the existing ones, as a transitional energy option towards a more sustainable model.",
                story2: "You will have to look for scientific arguments to convince you that it is possible to supply a country only with renewable energy."
            },
            {
                title: "Wind energy entrepreneur",
                image: "card_c-change_floods.webp",
                story: "You are against using nuclear energy and want to sell your project to create an off-shore wind park to replace nuclear power plants. You are driven by economic and business interests and argue that renewable energies are totally environmentally friendly.",
                story2: "You must look for economical, labour, and environmental evidence to support the positions against the use of nuclear energy."
            }
        ],
        infoCards : [
            {
                title: "Challenges",
                story: "Three major challenges to hinder the nuclear industry from making its full potential contribution towards sustainable development and combating climate change: financing, perception, and regulation. The nuclear sector needs to be part of “green financing classifications.” There has been growing recognition amongst policymakers and the public of the low-carbon attributes and high reliability of nuclear power. The licensing of reactor designs needs to be done across national borders."
            },
            {
                title: "A leading national example",
                story: "In the USA, nearly 20 reactors have been saved from needless premature closure in the last years - closures that would increase greenhouse gas emissions and undermine energy independence and result in lethal air pollution. Extending the life of the current fleet of reactors as long as feasible is also considered vitally important for many local communities whose economy depends on these reactors."
            },
            {
                title: "Stop global warming",
                story: "Meeting the 1.5°C temperature rise target in a cost-effective and socially equitable manner will require the rapid deployment of much more nuclear energy. Nuclear energy is essential for avoiding the emission of air pollutants and greenhouse gases, ensuring that the transition to a low-carbon future is done equitably, and providing people worldwide with a high-powered and sustainable future."
            },
            {
                title: "Decarbonisation",
                story: "Nuclear power enables rapid decarbonisation on a massive scale, and it has the track record to prove it. Nuclear technologies can generate electricity for large grids and small communities, provide district heating and cooling, supply process heat to industry, produce hydrogen, and so much more. This is the only energy source that can produce low-carbon electricity and heat, and it can be a game changer for the deep decarbonisation of the entire global economy."
            },
            {
                title: "Sustainability",
                story: "More than 1200 GW of nuclear generation must be installed by 2050 to meet the world's sustainable development needs. This means the construction of 30 new reactors annually. This has been done before, but we have not yet reached that level today."
            },
            {
                title: "New developments",
                story: "There is an urgent need to accelerate the development and deployment of small modular reactors (SMRs) and advanced nuclear technologies. SMRs and advanced nuclear projects will play an essential role in further diversifying the nuclear sector and bringing nuclear to new markets and applications."
            },
            {
                title: "Radiation",
                story: "Radiation is a natural part of our life. We are all exposed to radiation daily, on average receiving 2-3 millisieverts (mSv) per year. Most of this radiation comes from radon gas. The nuclear industry is responsible for a tiny part of radiation exposure to the public. On average, living near a nuclear power plant exposes the local population to 0.00009 mSv/year. To put this into perspective, eating ten bananas or two Brazil nuts results in the same radiation dose as living nearby a nuclear power plant for a year. Humans are also naturally radioactive, and the radiation dose from sleeping next to someone else each night for a year is ten times higher than the exposure from living near a nuclear power plant for the same period."
            },
            {
                title: "Mortality caused by air pollution",
                story: "Fossil fuels currently account for about 80% of the total energy supply, which causes a significant level of emissions in terms of both greenhouse gases and air pollutants. Over 8,5 million people are dying worldwide prematurely because of air pollution."
            },
            {
                title: "Lethal accidents",
                story: "Hydropower is the deadliest electricity generator, primarily due to collapsing dams and the consequences of flooding. The Banqiao Dam failure in China in 1975 led to at least 26,000 people drowning and as many as 150,000 deaths resulting from the secondary effects of the accident. In comparison, radiation exposure following Chernobyl caused 54 deaths (including 28 firefighters exposed to lethal amounts of radiation during the accident night and 15 fatal cases of thyroid cancer), while no casualties due to radiation are likely to occur from the accident at Fukushima Daiichi in Japan. United Nations Scientific Committee on the Effects of Radiation. (Source)"
            },
            {
                title: "Radon gas",
                story: "Radioactive radon gas inhalation is a major cause of lung cancer worldwide and is a consequence of the built environment. Alpha particle ionising radiation from radon-222 (222Rn) and its decay progenies, such as polonium (218Po) and (214Po), damages lung cell DNA to produce genetic mutations that promote cancer. Alpha particles from radon and its progeny are measured in Becquerels (Bq) per cubic meter (m3), equivalent to one particle emission per second per cubic metre of air. 100 Bq/m3 marks an exposure above which an increased relative lifetime risk of lung cancer is statistically significant. There is an additive 16% increase in the relative lifetime risk of lung cancer for every 100 Bq/m3 of long-term radon exposure. (Source)"
            },
            {
                title: "Nuclear cemetery",
                story: "The Swedish government approved in January 2022 the development of the final Swedish repository (nuclear cemetery) for radioactive waste from the Swedish nuclear power plants, despite heavy criticisms from independent scientists. The case is being referred to as Sweden’s largest environmental case ever, as the spent nuclear fuel should be stored safely for at least 100,000 years."
            },
            {
                title: "Example of France",
                story: "Nuclear accounts for almost 75% of France's power production. In February 2022, France announced that it would construct six new nuclear power reactors, consider building a further eight and push ahead with the development of small modular reactors. The operation of all existing reactors should also be extended without compromising safety."
            },
            {
                title: "New developments",
                story: "The world's first High-Temperature gas-cooled Reactor (HTGR) is connected to the grid in China. HTGRs are used for power generation, heat supply, seawater desalination, etc. China plans to accelerate the massive deployment of HTGR technology while establishing an advanced nuclear industry."
            },
            {
                title: "Greenpeace",
                story: "Greenpeace contends that nuclear energy would cost too much to deliver too little and too late while adding to the risk to global security. Greenpeace points to nuclear power’s high investments, regular cost overruns, long construction periods, massive subsidies, operational risks, radioactive waste production and security issues involving proliferation and terrorism."
            },
            {
                title: "Ionising radiation",
                story: "Ionising radiation can damage living tissue by changing cell structure and damaging DNA. The damage depends on the type of radiation, exposure pathway, energy, and the total amount of radiation absorbed. The effect from minor or even moderate exposure may not be noticeable. Most cellular damage is repaired. However, some cells may not recover as well as others and could become damaged or cancerous. Children are more sensitive to ionising radiation than adults because children are still in the process of growing. More cells are dividing, and a greater opportunity for radiation to disrupt the growth process."
            },
            {
                title: "Medical radiation",
                story: "Medical radiation (x-ray) produces a picture that can help find broken bones, tumours and foreign objects in the body and is also used for Computed Tomography (CT scans), mammograms and fluoroscopy. Medical x-rays, dental x-rays, and mammograms use relatively low amounts of ionising radiation. CT scans and fluoroscopic procedures result in higher radiation doses due to the need for multiple images and/or a longer exposure time. CT scans expose a body to several hundred times more radiation than a conventional x-ray."
            },
            {
                title: "Risk perception",
                story: "A considerable amount of psychological research dedicated to understanding why we often ignore some of the statistically most significant risks (e.g. driving, smoking) whilst fearing some of the smallest (e.g. nuclear power) has concluded that factors such as emotions, mental imagery, and trust, are central to the way we assess risks. Few risks elicit as strong a response as radiation, especially in connection with nuclear power, largely thanks to its invisibility, links with cancer, and media portrayals."
            },
            {
                title: "Nuclear power",
                story: "The nuclear industry claims that nuclear power, as a low-carbon source, needs to be part of the energy mix and solution. Nuclear energy is crucial to meeting the world’s ever-increasing demand for energy, thanks to its ability to supply affordable, reliable, and sustainable electricity and heat. Despite the many benefits of nuclear energy, its deployment is hindered in some parts of the world due to long-standing misconceptions about its risks. Even with its safety record – unmatched by any other energy source – the perception of nuclear power as uniquely dangerous endures. People need to be educated about the risks and benefits of nuclear energy."
            },
            {
                title: "Radiation phobia",
                story: "By looking at radiation risks in isolation, we have created something akin to a “radiation phobia” that both directly and indirectly harms people worldwide. For instance, it is well established that the vast majority of Chernobyl and Fukushima Daiichi health impacts were not radiological but rather psychosocial. There has been an observable and dramatic increase in depression, PTSD, substance abuse, and suicides following these events, which can be significantly attributed to the dissonance between the actual and perceived risks of radiation and the stigmatisation they caused."
            },
            {
                title: "Radiation sources",
                story: "The human population is continuously exposed to ionising radiation from several natural sources that can be classified into two broad categories: high energy cosmic rays incident on the Earth’s atmosphere and releasing secondary radiation (cosmic contribution); and radioactive nuclides generated during the formation of the Earth and still present in the Earth’s crust (terrestrial contribution). The terrestrial contribution is mainly composed of the radionuclides of the uranium and thorium decay chains and radioactive potassium. In most circumstances, radon, a noble gas produced in the radioactive decay of uranium, is the most crucial contributor to radiation exposure."
            },
            {
                title: "After Chernobyl",
                story: "The studies of the effects of the Chernobyl accident have shown that the initial fears of radiation effects were highly exaggerated. In addition to 38 deaths of emergency workers in the early stage of the accident, there have been 16 deaths of people due to thyroid cancer. Still, otherwise, there has been no increase in solid cancers, leukaemia or genital malformations, and no genetic effects have been detected. The decisions to evacuate people and include several millions of inhabitants in the list of “Chernobyl victims” were unjustified and would not be taken in the light of present knowledge. (Source)"
            },
            {
                title: "Renewables",
                story: "The wind is a clean, renewable energy source and is one of the most cost-effective sources of electricity. It is entirely renewable and will never run out. However, wind turbines can be noisy and unappealing aesthetically and can sometimes adversely impact the physical environment around them. Like solar power, wind power is also intermittent, meaning that turbines are reliant on weather and therefore aren’t capable of generating electricity 24/7. Wind farms or individual turbines can be expensive to install. However, once up and running, operating costs are relatively low; their fuel (wind) is free, and the turbines don’t require too much maintenance throughout their lifetime."
            },
            {
                title: "Wind turbines",
                story: "One of the most significant downsides of wind energy is noise and visual pollution. Wind turbines can be noisy when operating due to both the mechanical operation and the wind vortex created when the blades are rotating. Additionally, because wind turbines need to be built up high enough to capture a good amount of wind, the turbines can often interrupt otherwise scenic landscapes, such as mountain ranges, lakes, oceans, and more. A wind turbine's blades are huge and rotate at very high speeds. Unfortunately, their blades can harm and kill species that fly into them, like birds and bats. The construction of wind farms can also disrupt local species' natural habitats if not conducted sustainably. However, these problems can be solved to some extent with technological advancements and properly-siting wind farms. In many cases, turbines and generation sites may be located quite far from the population centres where electricity is needed. Therefore, transmission lines are an additional infrastructure that must be built."
            }
        ]
      },



      et: {
        roleCardsFavourTitle : "Rollid, mis toetavad 1. seiskohta (Poolt)",
        roleCardsAgainstTitle : "Rollid, mis toetavad 2. seisukohta (Vastu)",
        infoCardsTitle : "Infokaardid",
        roleCardsLabel : "Roll",
        infoCardsLabel : "Info",
        roleCardsFavour : [
            {
                title: "Valitsuse poliitik",
                image: "card_c-change_coral-reefs.webp",
                story: "Praeguse valitsuse poliitikuna on teil valimishuvid ja soovite tõsta tööhõivet. Teie erakond toetab tuumaenergiat kui teostatavat, säästlikku ja säästvat energialahendust. Kaitsete töökohtade loomist, mis tuleneks tuumajaama või tuumajäätmete hoidla rajamisest ning energia- ja jäätmekäitlussõltuvuse vähenemisest teistest riikidest.",
                story2: "Otsite argumente tuumaenergia kasuks, et astuda vastu oma poliitilisele vastasele."
            },
            {
                title: "Tuumajäätmete hoidla mänedžer",
                image: "card_c-change_polar-bears.webp",
                story: "Pooldate tuumaenergiat ja proovite kaitsta oma ettevõtte majandushuve. Püüate müüa oma projekti tuumakalmistu rajamiseks ja haldamiseks kui rajatist, mis on seotud tuumajaama tööga. Apelleerite selliste hoidlate turvalisusele.",
                story2: "Seda tuleb toetada tõenditega, et töötavates jaamades tekkivaid tuumajäätmeid on vaja käidelda nii, et neid ei peaks saatma teistesse riikidesse."
            },
            {
                title: "Tuumateadlane",
                image: "card_c-change_turtles.webp",
                story: "Olete teadlane, kes uurib uusi meetodeid uraani taaskasutamiseks elektrijaamades, et jäätmed oleksid lühema aja jooksul pärast kõrvaldamist vähem ohtlikud.",
                story2: "Peaksite otsima teavet, et toetada rohkemate tuumaelektrijaamade ja/või tuumajäätmete matmispaikade ehitamist, tuginedes uute tehnikate kohta käivatele teaduslikele tõenditele. Otsite argumente tuumaenergia toetamiseks."
            },
            {
                title: "Tuumajaama töötaja",
                image: "card_c-change_floods.webp",
                story: "Tuumaelektrijaama töötajana pooldate selle tööstuse toimimist. Teie linnas said paljud inimesed tööd tuumaelektrijaama tööjõuvajaduse tõttu. Seega on teil seda tüüpi ettevõtte kohta väga positiivne arvamus.",
                story2: "Peate otsima tõendeid, mis näitavad teie riigis või ELis asuva tuumaelektrijaama või tuumajäätmete hoidlate loomisega tekitatud töökohtade eeliseid."
            }
        ],
        roleCardsAgainst : [
            {
                title: "Ökoloog",
                image: "card_c-change_coral-reefs.webp",
                story: "Te suhtute tuumaenergiasse täiesti negatiivselt ja loomulikult ei näe te ette uute tuumarajatiste võimalust. Pooldate taastuvenergiat, isegi kui teate, et need mõjutavad samuti keskkonda. Olete kõigi riigi tuumaelektrijaamade ja tuumajäätmejaamade sulgemise poolt.",
                story2: "Peate otsima tõendeid looduse ja keskkonna säilitamise ning taastuvenergia poolt ning tuumaenergia vastu."
            },
            {
                title: "Opositsioonipoliitik",
                image: "card_c-change_polar-bears.webp",
                story: "Opositsioonipoliitikuna on teil  valimishuvid ning seega olete oma poliitilise vastase vastu. Teie erakond toetab taastuvenergiat kui alternatiivi traditsioonilistele energiaallikatele ja tuumaenergiale, väites, et energiasõltuvust teistest riikidest on võimalik vähendada. Siiski arvate, et kõigi tuumaelektrijaamade kiire sulgemine ei ole otstarbekas. Samuti väidate, et tekkivaid tuumajäätmeid tuleks käidelda (mis võib olla riigi jaoks majanduslikult kasulik), mistõttu ei ole te täielikult tuumajäätmehoidlate hoidlate rajamise vastu.",
                story2: "Otsige argumente tuumaenergia vastu ja taastuvate energiaallikate poolt, et astuda vastu oma poliitilisele vastasele."
            },
            {
                title: "Taastuvenergia teadlane",
                image: "card_c-change_turtles.webp",
                story: "Olete taastuvenergia ekspert ja veendunud, et riigi energiavajadust on võimalik rahuldada ainuüksi alternatiivsete energiaallikatega, ilma et oleks vaja kasutada tuumaenergiat. Olete tuumajaamade ja -hoidlate rajamise vastu, kuigi te ei poolda olemasolevate sulgemist kui energia üleminekuvarianti säästvama mudeli suunas.",
                story2: "Peate otsima teaduslikke argumente veenmaks, et riiki on võimalik varustada ainult taastuvenergiaga."
            },
            {
                title: "Tuuleenergia ettevõtja",
                image: "card_c-change_floods.webp",
                story: "Olete tuumaenergia kasutamise vastu ja soovite müüa oma projekti tuumaelektrijaamade asendamiseks loodava avamere tuulepargiga. Teid juhivad majanduslikud ja ärihuvid ning väidate, et taastuvenergia on täiesti keskkonnasõbralik.",
                story2: "Peate otsima majandus-, töö- ja keskkonnatõendeid, mis toetaksid tuumaenergia kasutamise vastast seisukohta."
            }
        ],
        infoCards : [
            {
                title: "Väljakutsed",
                story: "Tuumatööstusel on kolm peamist väljakutset, mis takistavad tema täielikku panust säästvasse arengusse ja kliimamuutustega võitlemisse: rahastamine, avalik arvamus ja reguleerimine. Tuumasektor peab olema osa “rohelise rahastamise klassifikaatoritest”. Poliitikakujundajad ja avalikkus on üha enam tunnustanud tuumaenergia vähese CO₂-heitega omadusi ja kõrget töökindlust. Reaktorite projekteerimise litsentsimine peab toimuma riigipiiride üleselt."
            },
            {
                title: "Ühe riigi (USA) näide",
                story: "USA-s on viimastel aastatel päästetud ligi 20 reaktorit tarbetust enneaegsest sulgemisest – sulgemised ei suurendaks mitte üksnes kasvuhoonegaaside emissiooni, vaid ka energiasõltuvust ja põhjustaksid surmava õhusaaste. Praeguse reaktoripargi eluea pikendamist nii kaua kui võimalik peetakse eluliselt oluliseks ka paljude kohalike kogukondade jaoks, kelle majandus sõltub nendest reaktoritest."
            },
            {
                title: "Peatage globaalne soojenemine",
                story: "Temperatuuritõusu eesmärgi (1,5 °C) täitmine kulutõhusal ja sotsiaalselt õiglasel viisil nõuab palju suurema hulga tuumaenergia kiiret kasutuselevõttu. Tuumaenergia on hädavajalik õhusaasteainete ja kasvuhoonegaaside heitkoguste vähendamiseks, et tagada üleminek vähese CO₂-heitega tulevikule. Samuti, et see toimuks õiglasel moel pakkudes inimestele üle maailma energia ja jätkusuutlik tulevik."
            },
            {
                title: "Dekarboniseerimine",
                story: "(süsihappegaasiheitmest vabastamine) Tuumaenergia võimaldab massiliselt kiiret dekarboniseerimist ja seda on tõestatud. Tuumatehnoloogiad võivad toota elektrit nii suurtele võrkudele kui ka väikestele kogukondadele, pakkudes kaugkütet ja -jahutust, varustades tööstust protsessisoojust, tootdes vesinikku ja palju muud. See on ainuke energiaallikas, mis suudab toota vähese CO2-heitega elektrit ja vähese süsinikdioksiidiheitega soojust, see võib olla mängumuutus kogu maailmamajanduse süsihappegaasist vabastamisel."
            },
            {
                title: "Jätkusuutlikkus",
                story: "Maailma säästva arengu vajaduste rahuldamiseks tuleb 2050. aastaks paigaldada rohkem kui 1200 GW tuumaenergiat. See tähendab 30 uue reaktori ehitamist aastas. Seda on varemgi tehtud, aga tänaseks pole me veel sellele tasemele jõudnud."
            },
            {
                title: "Uued arengud",
                story: "On vaja kiirendada väikeste modulaarsete reaktorite (SMR) ja kõrgtehnoloogiliste tuumatehnoloogiate väljatöötamist ja kasutuselevõttu. SMR-idel ja täiustatud tuumaenergialahendustel on oluline roll tuumasektori edasisel mitmekesistamisel ning tuumaenergia toomisel uute turgude ja rakenduste jaoks."
            },
            {
                title: "Kiirgus on meie elu loomulik osa",
                story: "Me kõik puutume iga päev kokku kiirgusega, saades keskmiselt 2-3 millisiivertit (mSv) aastas. Suurem osa sellest kiirgusest pärineb radoonist. Tuumatööstus vastutab väga väikese osa inimeste  kiirgusega kokkupuute eest. Tuumaelektrijaama läheduses elamine ohustab kohalikku elanikkonda keskmiselt 0,00009 mSv aastas. Seda perspektiivi silmas pidades annab 10 banaani või kahe brasiilia pähkli söömine sama kiirgusdoosi, kui elades aasta aega tuumajaama läheduses. Inimene on ka oma olemuselt radioaktiivne ja ühe aasta jooksul kellegi teise kõrval magamisel tekkiv kiirgusdoos on kümme korda suurem kui sama aja jooksul tuumajaama läheduses elades saadav kiiritus."
            },
            {
                title: "Õhusaaste põhjustatud suremus",
                story: "Fossiilkütused moodustavad praegu ligikaudu 80% kogu energiavarustusest, mis põhjustab nii kasvuhoonegaaside kui ka õhusaasteainete heitkoguseid. Õhusaaste tõttu sureb maailmas enneaegselt üle 8,5 miljoni inimese."
            },
            {
                title: "Surmavad õnnetused",
                story: "Hüdroenergia on surmavaim elektritootja, seda peamiselt tammide kokkuvarisemise ja üleujutuste tagajärgede tõttu. Banqiao tammi purunemine Hiinas 1975. aastal viis vähemalt 26 000 inimese uppumiseni ja õnnetuse teiseste tagajärgede tõttu hukkus kuni 150 000 inimest. Võrdluseks põhjustas Tšernobõli järgne kiirgusega kokkupuude 54 surmaga (sh 28 tuletõrjujat, kes puutusid õnnetuse ööl kokku surmava koguse kiirgusega, ja 15 surmaga lõppenud kilpnäärme- vähi juhtumit), samas kui kiirguse tõttu kannatanuid tõenäoliselt ei olnud Fukushima tuumaelektrijaama õnnetuses Jaapanis."
            },
            {
                title: "Radoon",
                story: "Radioaktiivse radooni sissehingamine on kopsuvähi peamine põhjus kogu maailmas ja on inimese ehitatud keskkonna tagajärg. Radoon-222 (222Rn) ja selle lagunemissaaduste, nagu poloonium (218Po) ja (214Po) alfaosakeste ioniseeriv kiirgus kahjustab kopsurakkude DNA-d, tekitades vähi teket soodustavaid geneetilisi mutatsioone. Radooni ja selle saadusi - alfaosakesi mõõdetakse bekerellides (Bq) kuupmeetri (m³) kohta, mis võrdub ühe osakese emissiooniga sekundis kuupmeetri õhu kohta. 100 Bq/m³ tähistab kokkupuudet, mille ületamisel on suurenenud suhteline eluaegne risk haigestuda kopsuvähki; statistiliselt oluliselt suureneb kopsuvähi suhteline risk kogu elu jooksul 16%3 pikaajalise radooniga kokkupuute tõttu."
            },
            {
                title: "Tuumajäätmehoidlad",
                story: "Rootsi valitsus kiitis 2022. aasta jaanuaris heaks Rootsi tuumaelektrijaamade radioaktiivsete jäätmete Rootsi lõpphoidla (tuumakalmistu) arendamise, hoolimata sõltumatute teadlaste suurest kriitikast. Juhtumit nimetatakse Rootsi kõigi aegade suurimaks keskkonnajuhtumiks, kuna kasutatud tuumkütust tuleks ohutult säilitada vähemalt 100 000 aastat."
            },
            {
                title: "Prantsusmaa näide",
                story: "Tuumaenergia moodustab peaaegu 75% Prantsusmaa elektritoodangust. 2022. aasta veebruaris teatas Prantsusmaa, et ehitab kuus uut tuumareaktorit, kaalub veel kaheksa ehitamist ja jätkab väikeste modulaarsete reaktorite arendamist. Samuti tuleks laiendada kõigi olemasolevate reaktorite tööd, ilma et see kahjustaks ohutust."
            },
            {
                title: "Uued arengud",
                story: "Maailma esimene kõrge temperatuuriga gaasjahutusega reaktor (HTGR) on Hiinas võrku ühendatud. HTGR-i kasutatakse elektritootmiseks, soojusvarustuseks, merevee magestamiseks jne. Hiina kavatseb kiirendada HTGR-tehnoloogia massilist kasutuselevõttu, luues samas arenenud tuumatööstuse."
            },
            {
                title: "Greenpeace",
                story: "Greenpeace väidab, et tuumaenergia maksaks liiga palju, et tarnida liiga vähe ja liiga hilja, suurendades samas ohtu ülemaailmsele julgeolekule. Greenpeace juhib tähelepanu tuumaenergia suurtele investeeringutele, regulaarsetele kulude ületamisele, pikkadele ehitusperioodidele, tohututele toetustele, tegevusriskidele, radioaktiivsete jäätmete tootmisele ja julgeoleku- probleemidele, mis on seotud tuumarelvade leviku ja terrorismiga."
            },
            {
                title: "Ioniseeriv kiirgus",
                story: "Ioniseeriv kiirgus võib kahjustada eluskudesid, muutes rakustruktuuri ja kahjustades DNA-d. Kahju suurus sõltub kiirguse liigist, kokkupuute rajast, kiirguse energiast ja neeldunud kiirguse koguhulgast. Väikese või isegi mõõduka kokkupuute mõju ei pruugi olla märgatav. Enamik rakukahjustusi on paranevad.  Kuid mõned rakud ei pruugi taastuda nii hästi kui teised ja võivad kahjustuda või muutuda vähkkasvajaks. Lapsed on ioniseeriva kiirguse suhtes tundlikumad kui täiskasvanud, sest lapsed on alles kasvamisjärgus. Seal on rohkem rakke jagunemas ja kiirgusel suurem võimalus  kasvuprotsessi häirida."
            },
            {
                title: "Meditsiiniline kiirgus",
                story: "Meditsiiniline kiirgus (röntgen) tekitab pildi, mis aitab leida luumurrud, kasvajad ja võõrkehad kehas ning seda kasutatakse ka kompuutertomograafias (CT-skaneeringud), mammograafias ja fluoroskoopias. Meditsiinilises röntgenikiirguses, hambaröntgenis ja mammogrammis kasutatakse suhteliselt väikeses koguses ioniseerivat kiirgust. CT-skaneerimine ja fluoroskoopilised protseduurid toovad kaasa suuremad kiirgusdoosid, kuna on vaja teha mitu pilti ja/või on pikem kokkupuuteaeg. CT-skaneerimine kiirgab kehale kuni mitusada korda rohkem kiirgust kui tavaline röntgenikiirgus."
            },
            {
                title: "Riski tajumine",
                story: "Märkimisväärne hulk psühholoogilisi uuringuid, mille eesmärk on mõista, miks me sageli ignoreerime mõningaid statistiliselt suurimaid riske (nt autojuhtimine, suitsetamine), samas kui kardame mõnda kõige väiksemat (nt tuumaenergia), on jõudnud järeldusele, et sellised tegurid nagu emotsioonid, vaimsed kujutluspildid ja usaldus, on riskide hindamisel kesksel kohal. Vähesed riskid kutsuvad esile nii tugeva vastuse kui kiirgus, eriti kui see on seotud tuumaenergiaga, seda suuresti tänu selle nähtamatusele, seostele vähiga ja meedias kuvatavatele piltidele."
            },
            {
                title: "Tuumaenergia",
                story: "Tuumatööstus väidab, et tuumaenergia kui vähese süsinikdioksiidiheitega allikas peab olema osa energiaallikate valikust ja lahendusest. Tuumaenergia on maailma üha kasvava energianõudluse rahuldamiseks ülioluline tänu selle võimele pakkuda taskukohast, usaldusväärset ja säästvat elektrit ja soojust. Vaatamata tuumaenergia paljudele eelistele, on selle kasutuselevõtt mõnes maailma paigas takistatud pikaajaliste väärarusaamade tõttu selle riskide kohta. Isegi selle ohutusrekordi juures – millele pole võrreldav ükski teine ​​energiaallikas – jääb tuumaenergia ainuohtlikkuse tajumine püsima. Inimesi tuleb harida tuumaenergia riskide ja eeliste kohta."
            },
            {
                title: "Kiirgusfoobia",
                story: "Vaadeldes kiirgusriske eraldiseisvalt, oleme loonud midagi kiirgusfoobia sarnast, mis nii otseselt kui ka kaudselt kahjustab inimesi kogu maailmas. Näiteks on hästi tõestatud, et suurem osa Tšernobõli ja Fukushima Daiichi tervisemõjudest ei olnud radioloogilised, vaid pigem psühhosotsiaalsed. on täheldatav ja järsult suurenenud depressioon, PTSH (posttraumaatiline stressihäire), ainete kuritarvitamine ja enesetappude arv, mida võib olulisel määral seostada ebakõlaga  tegelike ja tajutavate kiirgusriskide ning nende stigmatiseerimise vahel."
            },
            {
                title: "Kiirgusallikad",
                story: "Inimpopulatsioon puutub pidevalt kokku mitmest looduslikust allikast pärineva ioniseeriva kiirgusega, mille võib liigitada kahte suurde kategooriasse: suure energiaga kosmilised kiired, mis langevad Maa atmosfääri ja eraldavad sekundaarset kiirgust (kosmiline panus); ja Maa tekke käigus tekkinud radioaktiivsed nukliidid, mis on siiani maakoores (maapealne panus). Maapealne panus koosneb peamiselt uraani ja tooriumi lagunemisahelate radionukliididest koos radioaktiivse kaaliumiga. Enamikul juhtudel on radoon, uraani radioaktiivsel lagunemisel tekkiv väärisgaas, kõige olulisem kiirgusega kokkupuude."
            },
            {
                title: "Pärast Tšernobõli",
                story: "Tšernobõli avarii mõjude uuringud on näidanud, et esialgsed hirmud kiirgusmõjude ees olid tugevalt liialdatud. Lisaks 38 kiirabitöötajate surmale õnnetuse varajases staadiumis on kilpnäärmevähi tõttu surnud 16 inimest, kuid muidu pole sagenenud haigestumine vähkkasvajatesse,  leukeemiasse  ega esinenud  suguelundite väärarenguid ning pärilikke tagajärgi. Inimeste evakueerimise ja mitme miljoni elaniku Tšernobõli ohvrite nimekirja kandmise otsused olid põhjendamatud ja seda ei tehtaks praeguste teadmiste valguses."
            }
        ]
      }
    }
</i18n>

