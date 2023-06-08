<template>
    <div>
        <h2 class="text-2xl mt-4">{{ t('storyCardsTitle') }}</h2>
        
        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            
            <ToolsCardgameCard v-for="(cardS, i) in tm('storyCards')" :key="`cardS${i}`"
                :title="rt(cardS.title)" :story="rt(cardS.story)" :label="`${t('storyCardsLabel')} ${i+1}`" border="border-green-500"
                :image="rt(cardS.image)" 
                class="print:w-[89mm] print:h-[146mm]"
                :class="props.printMode ? 'w-[89mm] h-[146mm]' : ''"
            />

        </section>
    
        <h2 class="text-2xl print:break-before-page">{{ t('infoCardsTitle') }}</h2>

        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            <ToolsCardgameCard v-for="(cardI, i) in tm('infoCards')" :key="`cardI${i}`"
                :title="rt(cardI.title)" :story="rt(cardI.story)" :label="`${t('infoCardsLabel')} ${i+1}`"
                border="border-blue-500"
                :image="rt(cardI.image)" 
                class="print:w-[89mm] print:h-[146mm]"
                :class="props.printMode ? 'w-[89mm] h-[146mm]' : ''"
            />
        </section>

    </div>
</template>


<script setup>
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


<i18n lang="json">
    {
      "en": {
        "storyCardsTitle" : "Story cards",
        "infoCardsTitle" : "Info cards",
        "storyCardsLabel" : "Story",
        "infoCardsLabel" : "Info",
        "storyCards" : [
        {
                "title": "Coral reef",
                "image": "card_c-change_coral-reefs.webp",
                "story": "Around 50% of Australia's Great Barrier Reef has died since the 1990s, according to a study published in the Proceedings of the Royal Society Journal. “The decline occurred in both shallow and deeper water, and across virtually all species — but especially in branching and table-shaped corals. These were the worst affected by record-breaking temperatures that triggered mass bleaching in 2016 and 2017,” said Professor Terry Hughes, co-author of the study. Loss of table-shaped corals will also reduce fish abundance. Hughes added that the Great Barrier Reef's ability to recover was compromised as there are fewer large breeding corals. “A vibrant coral population has millions of small, baby corals, as well as many large ones — the big mamas who produce most of the larvae,” he said. “Our results show the ability of the Great Barrier Reef to recover — its resilience — is compromised compared to the past, because there are fewer babies, and fewer large breeding adults,” he added."
            },
            {
                "title": "Polar bears",
                "image": "card_c-change_polar-bears.webp",
                "story": "A starved 16 year old male polar bear found dead in Svalbard. Dr Ian Stirling, who has studied the bears for almost 40 years and examined the animal said, “From his lying position in death the bear appears to simply have starved and died where he dropped. He had no external suggestion of any remaining fat, having been reduced to little more than skin and bone.” The bear had been examined by scientists from the Norwegian Polar Institute in April in the southern part of Svalbard, an Arctic island archipelago, and appeared healthy. The same bear had been captured in the same area in previous years, suggesting that the discovery of its body, 250 km away in northern Svalbard in July, represented an unusual movement away from its normal range. The bear probably followed the fjords inland as it trekked north, meaning it may have walked double or treble that distance. Douglas Richardson, head of living collections at the Highland Wildlife Park said 16 years was not particularly old for a wild male polar bear, which usually live into their early 20s. “There may have been some underlying disease, but I would be surprised if this was anything other than starvation,” he said."
            },
            {
                "title": "Baby turtles",
                "image": "card_c-change_turtles.webp",
                "story": "“In terms of sea turtle gender-ratio, the beaches at Playa Grande on Costa Rica’s Pacific coast are already producing nests that are 70 percent to 90 percent female, depending on the year. At Junquillal Beach on the Pacific coast, where it is often too hot for eggs to hatch at all, scientists have begun moving eggs to nurseries – essentially holes dug to a certain depth on cooler areas of the beach. When the hatchlings emerge, rangers chaperone them from the nest to the water, protecting them against human and animal predators alike.”"
            },
            {
                "title": "Floods",
                "image": "card_c-change_floods.webp",
                "story": "“Slowly, our house was going underwater. And one night, the water increased, and it went above my head.” 14-year-old Sathi's life turned upside down when her house in Kurigram, Bangladesh, flooded and she and her family had to move to a camp for displaced people. She lost her books and belongings in the floods, and living in the camps meant fearing for her life."
            },
            {
                "title": "Pests",
                "image": "card_c-change_pests.webp",
                "story": "Complaining about damage to the maize crop due to a pest attack, a large number of farmers have sought suitable compensation from the state government. Officials of the Agriculture Department have confirmed that nearly 30 per cent of the maize crop in the district has been affected. Sandeep Kumar, sarpanch of Jandla village near Anandpur Sahib, said farmers in his village had sown maize on nearly 100 acres. “The crop, however, was damaged due to pest attack despite spraying a pesticide repeatedly,” he added. Manohar Lal, another farmer from the village, said he had sown maize on three canals of land. When he noticed pests, he got a pesticide from the market and sprayed it thrice but still, a major portion of his crop had been damaged, he claimed."
            },
            {
                "title": "Four seasons",
                "image": "card_c-change_four-seasons.webp",
                "story": "In the United States, we usually experience four seasons each year. But some scientists predict that a changing climate will also change how our seasons are arranged. Instead of four seasons of equal length, the year will be dominated by just two seasons: winter and summer. Spring and fall will become short, transitional periods in April and October, with most of the year falling into more extreme hot and cold temperatures. Research has shown that seasonal warming happens at an uneven pace across the United States, with winter temperatures rising faster than summer temperatures. As the recent polar vortex shows, many cities still experience extremely low temperatures. However, the average number of days with below-freezing temperatures is decreasing each winter. Cities across the country, especially in the southern states and the Pacific Northwest, are predicted to lose up to two full months of sub-freezing temperatures by 2050."
            }
        ],
        "infoCards" : [
            {
                "title": "Coral reefs",
                "image": "card_c-change_coral-reefs.webp",
                "story": "Warm-water coral reefs host a wide variety of marine life and are very important for tropical fisheries and other marine and human systems. They are particularly vulnerable since they can suffer high mortalities when water temperatures persist above a threshold of between 1°C–2°C above the normal range. Such conditions occurred in many tropical seas between 2015 and 2017 and resulted in extensive coral bleaching when the coral animal hosts ejected the algal partners upon which they depend. After mass coral mortalities due to bleaching, reef recovery typically takes at least 10–15 years. Corals are also very sensitive to rising acidity, as it is difficult for them to create and maintain the skeletal structures needed for their support and protection. Corals provide vital fish spawning habitat and support for thousands of marine species. EPA’s Climate Change in the United States: Benefits of Global Action states that without action on climate change, dramatic loss of shallow coral cover is predicted to occur. For example, coral cover in Hawaii is projected to decline from 38% (current coral cover) to approximately 5% by 2050 without significant global action on climate change."
            },
            {
                "title": "Polar bears",
                "image": "card_c-change_polar-bears.webp",
                "story": "Polar bears give birth and hunt on sea ice and they need it to travel from one region to another. Survival of mothers and cubs in the spring depends on the mothers’ hunting success, which, in turn, depends on the stability and extent of sea ice. Less winter sea ice means that female polar bears have to go longer without food, which impacts their fat stores, and, in turn, their reproductive success. Complete loss of summer sea-ice cover, which may occur in the course of this century, could threaten the survival of polar bears as a species or force them to adopt a land-based summer lifestyle. Living on land would not be without risks due to competition with other predators, possible cross-breeding with brown or grizzly bears, and interactions with humans. Throughout the Arctic, polar bear populations are projected to decline by 30% by 2050, according to the World Wildlife Federation. A study published in 2020 took a detailed look at which polar bear populations are most at risk over this century. If greenhouse gas emissions remain high, cubs will be at risk in 12 out of the 13 bear populations that the researchers studied by the end of this century."
            },
            {
                "title": "Baby turtles",
                "image": "card_c-change_turtles.webp",
                "story": "Climate change affects, and will increasingly affect sea and land temperatures. This is particularly important to turtles as their development is intricately linked to temperature. The temperature of the sand at the nesting site affects the resultant sex of the baby turtle embryos: a temperature of ≤ 28˚C results in males; 30˚C means there are equal chances of the turtle being either male or female; and ≥ 32˚C results in females. As temperatures are predicted to rise, there is a growing concern, and already some evidence, that too many females will be born, skewing sex ratios and eventually reaching a situation whereby there are not enough males for the successful reproduction of the population. This phenomenon of skewed sex ratios is known, fittingly, as the ‘feminization’ of embryos. Another future scenario is one where the sand temperatures on the nesting beach are too high for the proper development of the embryos. Nest temperatures above 34˚C are considered to increase the probability of hatchling mutations, in many cases resulting in the hatchlings’ inability to reach adulthood."
            },
            {
                "title": "Floods",
                "image": "card_c-change_floods.webp",
                "story": "As climate change warms up the atmosphere, the air can hold 7% more water vapour for every one-degree Celsius rise in temperature. When this air rapidly cools, water vapour turns into droplets which join together to form heavy rainfall. Heavy rainfall over a short period of time can cause flash floods, or moderate rainfall over several days can overflow rivers or dams. Countries that have been dealing with high water levels for many years have had the time to adapt – for example, the Netherlands, which has created the world’s most sophisticated flood barriers. But historically, regions that haven't had to deal with such heavy rains may not have adapted, making them more vulnerable to dangerous flooding. Low-income countries with poor infrastructures may be less equipped to prepare for and prevent flooding such as Bangladesh, Haiti and Vietnam. Increasing temperatures are also melting polar ice caps, which pose significant threats to coastal towns and cities. Antarctica has lost about 3 trillion tonnes of ice in the last 25 years causing global seas to rise by 8mm. In the future, sea levels could rise as much as 5 metres."
            },
            {
                "title": "Pests",
                "image": "card_c-change_pests.webp",
                "story": "Climate change is one factor driving the spread of pests and diseases. Climate change can affect the population size, survival rate and geographical distribution of pests, and the intensity, development and geographical distribution of diseases. Temperature and rainfall are the big drivers of shifts in how and where pests and diseases spread, according to experts. «In general, an increase in temperature and precipitation levels favours the growth and distribution of most pest species by providing a warm and humid environment and providing necessary moisture for their growth,» says Tek Sapkota, agricultural systems and climate change scientist at the International Maize and Wheat Improvement Center. «However, when temperatures and precipitation levels get too high, this can slow the growth and reproduction of some pest species and destroy them by washing their eggs and larvae off the host plant», he explains. This would explain why many pests are moving away from the tropics towards more temperate areas. Pests like warmer temperatures – but up to a point. If it is too hot, populations grow more slowly. Since temperate regions are not currently at the optimal temperature for pests, populations are expected to grow more quickly in these areas as they warm up."
            },
            {
                "title": "Four seasons",
                "image": "card_c-change_four-seasons.webp",
                "story": "Summers in the Northern Hemisphere could last nearly six months by the year 2100 if global warming continues unchecked, according to a recent study that examined how climate change is affecting the pattern and duration of Earth's seasons. The study, published last month in the journal Geophysical Research Letters, found that climate change is making summers hotter and longer while shrinking the three other seasons. Scientists say the irregularities could have a range of serious implications, affecting human health and agriculture to the environment. “This is the biological clock for every living thing,” said the study's lead author, Yuping Guan. “People argue about a temperature rise of 2 degrees or 3 degrees, but global warming changing the seasons is something everyone can understand.” Guan and his colleagues combed through daily climate data from 1952 to 2011 to pinpoint the start and end of each season in the Northern Hemisphere. They found that over the nearly 60-year period, summers grew from an average of 78 to 95 days long. Winters, on average, shortened from 76 to 73 days, and the spring and autumn seasons similarly contracted. On average, the spring seasons shrank from 124 days to 115 days, and autumns shortened from 87 days to 82 days."
            }
        ]
      },
      "et": {
        "storyCardsTitle" : "Lookaardid",
        "infoCardsTitle" : "Infokaardid",
        "storyCardsLabel" : "Lugu",
        "infoCardsLabel" : "Info",
        "storyCards" : [
        {
                "title": "Korallid",
                "image": "card_c-change_coral-reefs.webp",
                "story": "Ajakirjas Proceedings of the Royal Society Journal avaldatud uuringu kohaselt on võrreldes 1990-ndate aastatega umbes pool Austraalia Suurest Vallrahust surnud. “Kahanemine toimus nii madalamas kui ka sügavamas vees ning praktiliselt kõikide liikide – aga eriti hargnevate ja lauakujuliste korallide puhul. Neid mõjutasid enim rekordilised temperatuurid, mis vallandasid 2016. ja 2017. aastal korallide massilise pleegitumise,” ütles professor Terry Hughes, uuringu kaasautor. Lauakujuliste korallide kadumine vähendab ka kalade arvukust. Hughes lisas, et Suure Vallrahu taastumisvõime on ohus, kuna suuri pesitsevaid koralle on vähem. “Elujõulises korallipopulatsioonis on miljoneid väikseid korallipopulatsioone, aga ka palju suuri - suuri emasid, kes toodavad enamiku vastseid,” ütles ta. “Meie tulemused näitavad, et Suure Vallrahu taastumisvõime - selle vastupidavus - on varasemaga võrreldes ohustatud, kuna seal on vähem noori koralle ja vähem suuri sigivaid täiskasvanuid,” lisas ta."
            },
            {
                "title": "Jääkarud",
                "image": "card_c-change_polar-bears.webp",
                "story": "Svalbardis leiti surnuks nälginud 16-aastane isane jääkaru. Dr Ian Stirling, kes on karusid peaaegu 40 aastat, sh  antud looma, uurinud, ütles: “Lamamisasendit vaadates näib karu olevat lihtsalt nälga jäänud ja surres sinna, kuhu ta kukkus. Tema kehal ei olnud võimalik tuvastada rasva, ainult luu ja nahk.” Norra polaarinstituudi teadlased uurisid karu aprillis Svalbardi lõunaosas, Arktika saarestiku saarestikus, ja ta näis siis veel olevat terve. Sama karu püüti samas piirkonnas ka varem, mis viitab sellele, et tema surnukeha avastamine juulikuus 250 km kaugusel Svalbardi põhjaosas kujutas endast ebatavalist liikumist tavapärasest levialast kaugemale. Tõenäoliselt liikus karu põhja poole piki fjordide serva, mis tähendab, et ta võis kokkuvõttes läbida isegi sellest 2-3 korda pikema vahemaa. Mägismaa metsloomapargi eluskollektsioonide juht Douglas Richardson ütles, et 16 aastat  pole metsiku isase jääkaru jaoks eriti kõrge vanus, sest ta elab tavaliselt 20-ndate eluaastate alguseni. “Selle taga võib olla mõni haigus, kuid ma oleksin üllatunud, kui see oleks midagi muud kui nälg,” ütles ta."
            },
            {
                "title": "Kilpkonnad",
                "image": "card_c-change_turtles.webp",
                "story": "Costa Rica Vaikse ookeani rannikul Playa Grande rannal pesitsevate merikilpkonnade pesades on olenevalt aastast 70–90 protsenti emaseid. Vaikse ookeani rannikul asuvas Junquillali rannas on sageli liiga kuum, et munad üldse saaksid kooruda. Seetõttu on teadlased hakanud mune viima tehislikesse pesadesse, mis on sisuliselt ranna jahedamates piirkondades teatud sügavusele kaevatud augud.Kui pojad kooruvad, saadavad töötajad neid pesast vette, kaitstes neid nii inimeste kui ka loomade sh teiste  kiskjate eest."
            },
            {
                "title": "Üleujutused",
                "image": "card_c-change_floods.webp",
                "story": "“Meie maja jäi aeglaselt vee alla. Ja ühel ööl vesi tõusis ja läks mu peast kõrgemale.” 14-aastase Sathi elu pöördus pea peale, kui tema maja Bangladeshis Kurigramis üleujutas ja ta pidi koos perega kolima ümberasustatud inimeste laagrisse. Ta kaotas üleujutustes oma kõik oma asjad ning laagrites elamine on tekitanud talle hirmu oma elu pärast."
            },
            {
                "title": "Kahjurid",
                "image": "card_c-change_pests.webp",
                "story": "Kaevates kahjurite rünnaku tõttu maisisaagile tekitatud kahju üle, on suur osa põllumehi taotlenud riigi valitsuselt sobivat hüvitist. Põllumajandusameti ametnike kinnitusel on kannatada saanud ligi 30 protsenti piirkonna maisisaagist. Anandpur Sahibi (Punjabi osariik, India) lähedal asuva Jandla küla vanem Sandeep Kumar ütles, et tema küla talupidajad on külvanud maisi ligi 100 aakrile. “Saak sai aga kahjurite tõttu kahjustatud, hoolimata pestitsiidide korduvast pritsimisest,” lisas ta. Teine talunik Manohar Lal ütles, et kui ta märkas kahjureid, hankis ta turult pestitsiidi ja pritsis  kolm korda, kuid sellele vaatamat kahjustus suur osa tema saagist."
            },
            {
                "title": "Aastaajad",
                "image": "card_c-change_four-seasons.webp",
                "story": "Tavaliselt kogetakse USA-s igal aastal tavaliselt nelja aastaaega, kuid mõned teadlased ennustavad, et muutuv kliima muudab ka aastaaegade paigutust. Nelja võrdse pikkusega aastaaja asemel hakkab aastas domineerima vaid kaks aastaaega: talv ja suvi. Kevad ja sügis muutuvad lühikeseks üleminekuperioodiks aprillis ja oktoobris, kusjuures suureme osa aastast  domineerivad äärmuslikumad kuumad ja külmad perioodid. Uuringud on näidanud, et hooajaline soojenemine toimub kogu Ameerika Ühendriikides ebaühtlase tempoga ning talvine temperatuur tõuseb kiiremini kui suvised temperatuurid. Näiteks tõi hiljutine jugavool paljudesse linnadesse kaasa äärmuslikult madalad temperatuurid. Küll aga väheneb iga talvega keskmine päevade arv, mil temperatuur langeb alla 0 kraadi. Ennustatakse, et 2050. aastaks väheneb selliste päevade arv kahe kuu ulatuses üle kogu riigi ning eriti lõunaosariikide ja Vaikse ookeani loodeosa linnades."
            }
        ],
        "infoCards" : [
            {
                "title": "Korallid",
                "image": "card_c-change_coral-reefs.webp",
                "story": "Soojavee korallriffidel on palju erinevaid merekooslusi ning need on väga olulised troopilise kalanduse ning muude mere- ja inimsüsteemide jaoks. Nad võivad kannatada suure suremuse all, kui veetemperatuur püsib 1–2°C üle normi. Sellised tingimused esinesid paljudes troopilistes meredes aastatel 2015–2017 ja põhjustasid ulatusliku korallide pleekimise, kui korallidelt (peremeesorganismid) kaovad ära vetikatest partnerid, millest nad sõltuvad. Pärast pleekimisest tingitud massilist korallide suremist võtab riffide taastumine tavaliselt aega vähemalt 10–15 aastat. Korallid on väga tundlikud ka vee kasvava happesuse suhtes, kuna neil on raske luua ja säilitada nende toetamiseks ja kaitseks vajalikke struktuure. Korallid pakuvad kaladele elutähtsat kudemispaika ja toetavad tuhandeid mereliike. USA Keskkonnakaitse Agentuur: Kui me midagi ette ei võta, siis madal korallkate kaob.  Näiteks prognoositakse, et sel juhul väheneb Hawaii korallkate 38 protsendilt (praegune korallikate) 2050. aastaks ligikaudu 5 protsendini."
            },
            {
                "title": "Jääkarud",
                "image": "card_c-change_polar-bears.webp",
                "story": "Jääkarud poegivad ja peavad jahti merejääl ning nad vajavad seda ühest piirkonnast teise liikumiseks. Emade ja poegade ellujäämine kevadel sõltub emade jahiedukusest, mis omakorda sõltub merejää püsivusest ja ulatusest. Vähem talvist merejääd tähendab, et emased jääkarud peavad kauem ilma toiduta olema, mis mõjutab nende rasvavarusid ja omakorda nende paljunemist. Suvise merejääkatte täielik kadumine, mis võib aset leida selle sajandi jooksul, võib ohustada jääkarude kui liigi püsimajäämist või sundida neid üle võtma maismaal põhineva suvise elustiili. Maal elamine ei oleks ilma riskideta, kuna sel juhul tuleb konkureerida teiste kiskjatega või toimuda ristumine pruun- või grislikaruga ning tuleb hakatasuhtlema inimestega. Maailma Metsiku Looduse Föderatsiooni andmetel peaks jääkarude populatsioon 2050. aastaks kogu Arktikas vähenema 30%. 2020. aastal avaldatud uuringus vaadeldi üksikasjalikult, millised jääkarude populatsioonid on sellel sajandil kõige enam ohustatud. Kui kasvuhoonegaaside heitkogused jäävad kõrgeks, on selle sajandi lõpuks uuritud 13 karupopulatsioonist järglased ohus 12-nel."
            },
            {
                "title": "Kilpkonnad",
                "image": "card_c-change_turtles.webp",
                "story": "Kliimamuutused mõjutavad oluliselt mere- ja maatemperatuuri. See on eriti oluline kilpkonnade jaoks, kuna nende areng on temperatuuriga tihedalt seotud. Pesitsuskoha liiva temperatuur mõjutab kilpkonnapoegade embrüote sugu: temperatuur ≤ 28˚C tekitab rohkem isasloomi; 30˚C juures on tõenäosus isase või emase kilpkonna sündimiseks võrdne ning ≥ 32˚C on suurem tõenäosus emaste kilpkonnade sündimiseks.Kuna ennustatakse temperatuuri tõusu, loob see järjest rohkem olukorra, kus sünnib liiga palju emasloomi, mis võib lõpuks viia olukorrani, kus isaseid pole populatsiooni edukaks paljunemiseks piisavalt. Seda kallutatud soolise tasakaalu nähtust tuntakse embrüote “feminiseerumisena”. Teine tulevikustsenaarium on selline, kus liiva temperatuur pesitsusrannas on embrüote õigeks arenguks liiga kõrge. Arvatakse, et pesa temperatuur üle 34˚ C suurendab koorunud poegade mutatsioonide tõenäosust, mille tulemuseks on koorunud poegade võimetus täiskasvanuks saada."
            },
            {
                "title": "Üleujutused",
                "image": "card_c-change_floods.webp",
                "story": "Kuna kliimamuutused soojendavad atmosfääri, mahutab õhk 7% rohkem veeauru iga ühekraadise temperatuuritõusu kohta. Kui see õhk kiiresti jahtub, muutub veeaur tilkadeks, mis ühinevad ja moodustavad tugeva vihmasaju. Tugev vihmasadu lühikese aja jooksul võib põhjustada äkilisi üleujutusi, samuti võib mitmepäevane mõõdukas sadu panna jõgesid ja tamme üle ujutama. Riikides, kus on aastaid olnud tegemist kõrge veetasemega, on olnud aega kohanemiseks. Näiteks Hollandis on loodud maailma kõige keerukamad üleujutustõkked. Kuid ajalooliselt ei pruugi kõik piirkonnad (näit. Bangladesh, Haiti ja Vietnam) olla üleujutusteks nii hästi kohanenud, muutes nad üleujutuste suhtes haavatavamaks. Temperatuuri tõus sulatab ka pooluste jäämütse, mis kujutavad endast märkimisväärset ohtu rannikuäärsetele linnadele. Antarktika on viimase 25 aasta jooksul kaotanud umbes 3 triljonit tonni jääd, mille tõttu maailmamere tõus on 8 mm. Tulevikus võib merevee tase tõusta kuni 5 meetrit."
            },
            {
                "title": "Kahjurid",
                "image": "card_c-change_pests.webp",
                "story": "Kliimamuutused on koos kasvava ülemaailmse kaubandusega oluliseks kahjurite ja haiguste levikut soodustavaks teguriks. Kliimamuutused võivad mõjutada kahjurite populatsiooni suurust, ellujäämismäära ja geograafilist levikut, samuti haiguste intensiivsust, arengut ja geograafilist levikut. “Üldiselt soodustab temperatuuri ja sademete taseme tõus enamiku kahjuriliikide kasvu ja levikut, pakkudes sooja ja niisket keskkonda ning pakkudes nende kasvuks vajalikku niiskust,” ütleb rahvusvahelise maisi põllumajandussüsteemide ja kliimamuutuste teadlane Tek Sapkota Rahvusvahelisest Maisi ja Nisu Täiustamise Keskusest (CIMMYT). “Kui aga temperatuur ja sademete hulk tõusebveelgi, võib see mõne kahjuriliigi kasvu ja paljunemise aeglustada ning hävitada, pestes nende munad ja vastsed peremeestaimelt maha,” selgitab ta. See seletaks ka, miks paljud kahjurid liiguvad troopikast parasvöötme poole. Kahjuritele meeldib soojem temperatuur, kuid kuni teatud piirini. Kui on liiga kuum või liiga külm, kasvab populatsioon aeglasemalt. Kuna parasvöötme piirkondades ei ole praegu kahjurite jaoks optimaalne temperatuur, eeldatakse, et populatsioonid kasvavad nendes piirkondades soojenemise korral  kiiremini."
            },
            {
                "title": "Aastaajad",
                "image": "card_c-change_four-seasons.webp",
                "story": "Hiljutise uuring käsitles kliimamuutuste mõju Maa aastaaegade mustrile ja kestusele. Kui globaalne soojenemine jätkub kontrollimatult, võivad suved põhjapoolkeral kesta 2100. aastaks peaaegu kuus kuud. Ajakirjas Geophysical Research Letters avaldatud uuring näitas, et kliimamuutused muudavad suved kuumemaks ja pikemaks, vähendades samal ajal kolme ülejäänud aastaaega. Teadlased ütlevad, et sellel võivad olla  tõsised tagajärjed tervisele ja põllumajandusele. “Aastaaegade vaheldumine on iga elusolendi bioloogiline kell,” ütles uuringu juhtiv autor Yuping Guan (Hiina). “Inimesed vaidlevad 2- või 3-kraadise keskmise temperatuuritõusu üle, kuid aastaaegade mustri muutumine on midagi, millest igaüks aru saab.” Guan ja tema kolleegid kammisid läbi igapäevaseid kliimaandmeid aastatest 1952–2011, et määrata kindlaks iga hooaja algus ja lõpp põhjapoolkeral. Nad leidsid, et peaaegu 60-aastase perioodi jooksul kasvasid suved keskmiselt 78 päevalt 95 päevale. Talved lühenesid keskmiselt 76 päevalt 73 päevale ning kevad- ja sügishooaeg lühenes samamoodi. Keskmiselt kahanesid kevadhooajad 124 päevalt 115 päevale ja sügised lühenesid 87 päevalt 82 päevale"
            }
        ]
      },
      "el": {
        "storyCardsTitle" : "Story cards EL",
        "infoCardsTitle" : "Info cards EL",
        "storyCardsLabel" : "Story EL",
        "infoCardsLabel" : "Info EL",
        "storyCards" : [
        {
                "title": "",
                "image": "card_c-change_coral-reefs.webp",
                "story": "Ajakirjas Proceedings of the Royal Society Journal avaldatud uuringu kohaselt on võrreldes 1990-ndate aastatega umbes pool Austraalia Suurest Vallrahust surnud. “Kahanemine toimus nii madalamas kui ka sügavamas vees ning praktiliselt kõikide liikide – aga eriti hargnevate ja lauakujuliste korallide puhul. Neid mõjutasid enim rekordilised temperatuurid, mis vallandasid 2016. ja 2017. aastal korallide massilise pleegitumise,” ütles professor Terry Hughes, uuringu kaasautor. Lauakujuliste korallide kadumine vähendab ka kalade arvukust. Hughes lisas, et Suure Vallrahu taastumisvõime on ohus, kuna suuri pesitsevaid koralle on vähem. “Elujõulises korallipopulatsioonis on miljoneid väikseid korallipopulatsioone, aga ka palju suuri - suuri emasid, kes toodavad enamiku vastseid,” ütles ta. “Meie tulemused näitavad, et Suure Vallrahu taastumisvõime - selle vastupidavus - on varasemaga võrreldes ohustatud, kuna seal on vähem noori koralle ja vähem suuri sigivaid täiskasvanuid,” lisas ta."
            },
            {
                "title": "",
                "image": "card_c-change_polar-bears.webp",
                "story": "Svalbardis leiti surnuks nälginud 16-aastane isane jääkaru. Dr Ian Stirling, kes on karusid peaaegu 40 aastat, sh  antud looma, uurinud, ütles: “Lamamisasendit vaadates näib karu olevat lihtsalt nälga jäänud ja surres sinna, kuhu ta kukkus. Tema kehal ei olnud võimalik tuvastada rasva, ainult luu ja nahk.” Norra polaarinstituudi teadlased uurisid karu aprillis Svalbardi lõunaosas, Arktika saarestiku saarestikus, ja ta näis siis veel olevat terve. Sama karu püüti samas piirkonnas ka varem, mis viitab sellele, et tema surnukeha avastamine juulikuus 250 km kaugusel Svalbardi põhjaosas kujutas endast ebatavalist liikumist tavapärasest levialast kaugemale. Tõenäoliselt liikus karu põhja poole piki fjordide serva, mis tähendab, et ta võis kokkuvõttes läbida isegi sellest 2-3 korda pikema vahemaa. Mägismaa metsloomapargi eluskollektsioonide juht Douglas Richardson ütles, et 16 aastat  pole metsiku isase jääkaru jaoks eriti kõrge vanus, sest ta elab tavaliselt 20-ndate eluaastate alguseni. “Selle taga võib olla mõni haigus, kuid ma oleksin üllatunud, kui see oleks midagi muud kui nälg,” ütles ta. “Kui jääkarud saavad täiskasvanuks, on nad tavaliselt peaaegu hävimatud, nad on kõvad kui raudpoldid.”"
            },
            {
                "title": "",
                "image": "card_c-change_turtles.webp",
                "story": "Costa Rica Vaikse ookeani rannikul Playa Grande rannal pesitsevate merikilpkonnade pesades on olenevalt aastast 70–90 protsenti emaseid. Vaikse ookeani rannikul asuvas Junquillali rannas on sageli liiga kuum, et munad üldse saaksid kooruda. Seetõttu on teadlased hakanud mune viima tehislikesse pesadesse, mis on sisuliselt ranna jahedamates piirkondades teatud sügavusele kaevatud augud.Kui pojad kooruvad, saadavad töötajad neid pesast vette, kaitstes neid nii inimeste kui ka loomade sh teiste  kiskjate eest."
            },
            {
                "title": "",
                "image": "card_c-change_floods.webp",
                "story": "“Meie maja jäi aeglaselt vee alla. Ja ühel ööl vesi tõusis ja läks mu peast kõrgemale.” 14-aastase Sathi elu pöördus pea peale, kui tema maja Bangladeshis Kurigramis üleujutas ja ta pidi koos perega kolima ümberasustatud inimeste laagrisse. Ta kaotas üleujutustes oma kõik oma asjad ning laagrites elamine on tekitanud talle hirmu oma elu pärast."
            },
            {
                "title": "",
                "image": "card_c-change_pests.webp",
                "story": "Kaevates kahjurite rünnaku tõttu maisisaagile tekitatud kahju üle, on suur osa põllumehi taotlenud riigi valitsuselt sobivat hüvitist. Põllumajandusameti ametnike kinnitusel on kannatada saanud ligi 30 protsenti piirkonna maisisaagist. Anandpur Sahibi (Punjabi osariik, India) lähedal asuva Jandla küla vanem Sandeep Kumar ütles, et tema küla talupidajad on külvanud maisi ligi 100 aakrile. “Saak sai aga kahjurite tõttu kahjustatud, hoolimata pestitsiidide korduvast pritsimisest,” lisas ta. Teine talunik Manohar Lal ütles, et kui ta märkas kahjureid, hankis ta turult pestitsiidi ja pritsis  kolm korda, kuid sellele vaatamat kahjustus suur osa tema saagist."
            },
            {
                "title": "",
                "image": "card_c-change_four-seasons.webp",
                "story": "Tavaliselt kogetakse USA-s igal aastal tavaliselt nelja aastaaega, kuid mõned teadlased ennustavad, et muutuv kliima muudab ka aastaaegade paigutust. Nelja võrdse pikkusega aastaaja asemel hakkab aastas domineerima vaid kaks aastaaega: talv ja suvi. Kevad ja sügis muutuvad lühikeseks üleminekuperioodiks aprillis ja oktoobris, kusjuures suureme osa aastast  domineerivad äärmuslikumad kuumad ja külmad perioodid. Uuringud on näidanud, et hooajaline soojenemine toimub kogu Ameerika Ühendriikides ebaühtlase tempoga ning talvine temperatuur tõuseb kiiremini kui suvised temperatuurid. Näiteks tõi hiljutine jugavool paljudesse linnadesse kaasa äärmuslikult madalad temperatuurid. Küll aga väheneb iga talvega keskmine päevade arv, mil temperatuur langeb alla 0 kraadi. Ennustatakse, et 2050. aastaks väheneb selliste päevade arv kahe kuu ulatuses üle kogu riigi ning eriti lõunaosariikide ja Vaikse ookeani loodeosa linnades."
            }
        ],
        "infoCards" : [
            {
                "title": "Korallid",
                "image": "card_c-change_coral-reefs.webp",
                "story": "Soojavee korallriffidel on palju erinevaid merekooslusi ning need on väga olulised troopilise kalanduse ning muude mere- ja inimsüsteemide jaoks. Nad võivad kannatada suure suremuse all, kui veetemperatuur püsib 1–2°C üle normi. Sellised tingimused esinesid paljudes troopilistes meredes aastatel 2015–2017 ja põhjustasid ulatusliku korallide pleekimise, kui korallidelt (peremeesorganismid) kaovad ära vetikatest partnerid, millest nad sõltuvad. Pärast pleekimisest tingitud massilist korallide suremist võtab riffide taastumine tavaliselt aega vähemalt 10–15 aastat. Korallid on väga tundlikud ka vee kasvava happesuse suhtes, kuna neil on raske luua ja säilitada nende toetamiseks ja kaitseks vajalikke struktuure. Korallid pakuvad kaladele elutähtsat kudemispaika ja toetavad tuhandeid mereliike. USA Keskkonnakaitse Agentuur: Kui me midagi ette ei võta, siis madal korallkate kaob.  Näiteks prognoositakse, et sel juhul väheneb Hawaii korallkate 38 protsendilt (praegune korallikate) 2050. aastaks ligikaudu 5 protsendini."
            },
            {
                "title": "Jääkaru",
                "image": "card_c-change_polar-bears.webp",
                "story": "Jääkarud poegivad ja peavad jahti merejääl ning nad vajavad seda ühest piirkonnast teise liikumiseks. Emade ja poegade ellujäämine kevadel sõltub emade jahiedukusest, mis omakorda sõltub merejää püsivusest ja ulatusest. Vähem talvist merejääd tähendab, et emased jääkarud peavad kauem ilma toiduta olema, mis mõjutab nende rasvavarusid ja omakorda nende paljunemist. Suvise merejääkatte täielik kadumine, mis võib aset leida selle sajandi jooksul, võib ohustada jääkarude kui liigi püsimajäämist või sundida neid üle võtma maismaal põhineva suvise elustiili. Maal elamine ei oleks ilma riskideta, kuna sel juhul tuleb konkureerida teiste kiskjatega või toimuda ristumine pruun- või grislikaruga ning tuleb hakatasuhtlema inimestega. Maailma Metsiku Looduse Föderatsiooni andmetel peaks jääkarude populatsioon 2050. aastaks kogu Arktikas vähenema 30%. 2020. aastal avaldatud uuringus vaadeldi üksikasjalikult, millised jääkarude populatsioonid on sellel sajandil kõige enam ohustatud. Kui kasvuhoonegaaside heitkogused jäävad kõrgeks, on selle sajandi lõpuks uuritud 13 karupopulatsioonist järglased ohus 12-nel."
            },
            {
                "title": "Kilpkonnad",
                "image": "card_c-change_turtles.webp",
                "story": "Kliimamuutused mõjutavad oluliselt mere- ja maatemperatuuri. See on eriti oluline kilpkonnade jaoks, kuna nende areng on temperatuuriga tihedalt seotud. Pesitsuskoha liiva temperatuur mõjutab kilpkonnapoegade embrüote sugu: temperatuur ≤ 28˚C tekitab rohkem isasloomi; 30˚C juures on tõenäosus isase või emase kilpkonna sündimiseks võrdne ning ≥ 32˚C on suurem tõenäosus emaste kilpkonnade sündimiseks.Kuna ennustatakse temperatuuri tõusu, loob see järjest rohkem olukorra, kus sünnib liiga palju emasloomi, mis võib lõpuks viia olukorrani, kus isaseid pole populatsiooni edukaks paljunemiseks piisavalt. Seda kallutatud soolise tasakaalu nähtust tuntakse embrüote “feminiseerumisena”. Teine tulevikustsenaarium on selline, kus liiva temperatuur pesitsusrannas on embrüote õigeks arenguks liiga kõrge. Arvatakse, et pesa temperatuur üle 34˚ C suurendab koorunud poegade mutatsioonide tõenäosust, mille tulemuseks on koorunud poegade võimetus täiskasvanuks saada."
            },
            {
                "title": "Üleujutus",
                "image": "card_c-change_floods.webp",
                "story": "Kuna kliimamuutused soojendavad atmosfääri, mahutab õhk 7% rohkem veeauru iga ühekraadise temperatuuritõusu kohta. Kui see õhk kiiresti jahtub, muutub veeaur tilkadeks, mis ühinevad ja moodustavad tugeva vihmasaju. Tugev vihmasadu lühikese aja jooksul võib põhjustada äkilisi üleujutusi, samuti võib mitmepäevane mõõdukas sadu panna jõgesid ja tamme üle ujutama. Riikides, kus on aastaid olnud tegemist kõrge veetasemega, on olnud aega kohanemiseks. Näiteks Hollandis on loodud maailma kõige keerukamad üleujutustõkked. Kuid ajalooliselt ei pruugi kõik piirkonnad (näit. Bangladesh, Haiti ja Vietnam) olla üleujutusteks nii hästi kohanenud, muutes nad üleujutuste suhtes haavatavamaks. Temperatuuri tõus sulatab ka pooluste jäämütse, mis kujutavad endast märkimisväärset ohtu rannikuäärsetele linnadele. Antarktika on viimase 25 aasta jooksul kaotanud umbes 3 triljonit tonni jääd, mille tõttu maailmamere tõus on 8 mm. Tulevikus võib merevee tase tõusta kuni 5 meetrit."
            },
            {
                "title": "Mais",
                "image": "card_c-change_pests.webp",
                "story": "Kliimamuutused on koos kasvava ülemaailmse kaubandusega oluliseks kahjurite ja haiguste levikut soodustavaks teguriks. Kliimamuutused võivad mõjutada kahjurite populatsiooni suurust, ellujäämismäära ja geograafilist levikut, samuti haiguste intensiivsust, arengut ja geograafilist levikut. “Üldiselt soodustab temperatuuri ja sademete taseme tõus enamiku kahjuriliikide kasvu ja levikut, pakkudes sooja ja niisket keskkonda ning pakkudes nende kasvuks vajalikku niiskust,” ütleb rahvusvahelise maisi põllumajandussüsteemide ja kliimamuutuste teadlane Tek Sapkota Rahvusvahelisest Maisi ja Nisu Täiustamise Keskusest (CIMMYT). “Kui aga temperatuur ja sademete hulk tõusebveelgi, võib see mõne kahjuriliigi kasvu ja paljunemise aeglustada ning hävitada, pestes nende munad ja vastsed peremeestaimelt maha,” selgitab ta. See seletaks ka, miks paljud kahjurid liiguvad troopikast parasvöötme poole. Kahjuritele meeldib soojem temperatuur, kuid kuni teatud piirini. Kui on liiga kuum või liiga külm, kasvab populatsioon aeglasemalt. Kuna parasvöötme piirkondades ei ole praegu kahjurite jaoks optimaalne temperatuur, eeldatakse, et populatsioonid kasvavad nendes piirkondades soojenemise korral  kiiremini."
            },
            {
                "title": "Aastaajad",
                "image": "card_c-change_four-seasons.webp",
                "story": "Hiljutise uuring käsitles kliimamuutuste mõju Maa aastaaegade mustrile ja kestusele. Kui globaalne soojenemine jätkub kontrollimatult, võivad suved põhjapoolkeral kesta 2100. aastaks peaaegu kuus kuud. Ajakirjas Geophysical Research Letters avaldatud uuring näitas, et kliimamuutused muudavad suved kuumemaks ja pikemaks, vähendades samal ajal kolme ülejäänud aastaaega. Teadlased ütlevad, et sellel võivad olla  tõsised tagajärjed tervisele ja põllumajandusele.“Aastaaegade vaheldumine on iga elusolendi bioloogiline kell,” ütles uuringu juhtiv autor Yuping Guan (Hiina). “Inimesed vaidlevad 2- või 3-kraadise keskmise temperatuuritõusu üle, kuid aastaaegade mustri muutumine on midagi, millest igaüks aru saab.” Guan ja tema kolleegid kammisid läbi igapäevaseid kliimaandmeid aastatest 1952–2011, et määrata kindlaks iga hooaja algus ja lõpp põhjapoolkeral. Nad leidsid, et peaaegu 60-aastase perioodi jooksul kasvasid suved keskmiselt 78 päevalt 95 päevale. Talved lühenesid keskmiselt 76 päevalt 73 päevale ning kevad- ja sügishooaeg lühenes samamoodi. Keskmiselt kahanesid kevadhooajad 124 päevalt 115 päevale ja sügised lühenesid 87 päevalt 82 päevale"
            }
        ]
      }
    }
</i18n>

<style scoped>
        
</style>