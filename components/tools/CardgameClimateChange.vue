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
                "title": "Korallid",
                "image": "card_c-change_coral-reefs.webp",
                "story": "Ajakirjas Proceedings of the Royal Society Journal avaldatud uuringu kohaselt on võrreldes 1990-ndate aastatega umbes pool Austraalia Suurest Vallrahust surnud. “Kahanemine toimus nii madalamas kui ka sügavamas vees ning praktiliselt kõikide liikide – aga eriti hargnevate ja lauakujuliste korallide puhul. Neid mõjutasid enim rekordilised temperatuurid, mis vallandasid 2016. ja 2017. aastal korallide massilise pleegitumise,” ütles professor Terry Hughes, uuringu kaasautor. Lauakujuliste korallide kadumine vähendab ka kalade arvukust. Hughes lisas, et Suure Vallrahu taastumisvõime on ohus, kuna suuri pesitsevaid koralle on vähem. “Elujõulises korallipopulatsioonis on miljoneid väikseid korallipopulatsioone, aga ka palju suuri - suuri emasid, kes toodavad enamiku vastseid,” ütles ta. “Meie tulemused näitavad, et Suure Vallrahu taastumisvõime - selle vastupidavus - on varasemaga võrreldes ohustatud, kuna seal on vähem noori koralle ja vähem suuri sigivaid täiskasvanuid,” lisas ta."
            },
            {
                "title": "Jääkarud",
                "image": "card_c-change_polar-bears.webp",
                "story": "Svalbardis leiti surnuks nälginud 16-aastane isane jääkaru. Dr Ian Stirling, kes on karusid peaaegu 40 aastat, sh  antud looma, uurinud, ütles: “Lamamisasendit vaadates näib karu olevat lihtsalt nälga jäänud ja surres sinna, kuhu ta kukkus. Tema kehal ei olnud võimalik tuvastada rasva, ainult luu ja nahk.” Norra polaarinstituudi teadlased uurisid karu aprillis Svalbardi lõunaosas, Arktika saarestiku saarestikus, ja ta näis siis veel olevat terve. Sama karu püüti samas piirkonnas ka varem, mis viitab sellele, et tema surnukeha avastamine juulikuus 250 km kaugusel Svalbardi põhjaosas kujutas endast ebatavalist liikumist tavapärasest levialast kaugemale. Tõenäoliselt liikus karu põhja poole piki fjordide serva, mis tähendab, et ta võis kokkuvõttes läbida isegi sellest 2-3 korda pikema vahemaa. Mägismaa metsloomapargi eluskollektsioonide juht Douglas Richardson ütles, et 16 aastat  pole metsiku isase jääkaru jaoks eriti kõrge vanus, sest ta elab tavaliselt 20-ndate eluaastate alguseni. “Selle taga võib olla mõni haigus, kuid ma oleksin üllatunud, kui see oleks midagi muud kui nälg,” ütles ta. “Kui jääkarud saavad täiskasvanuks, on nad tavaliselt peaaegu hävimatud, nad on kõvad kui raudpoldid.”"
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