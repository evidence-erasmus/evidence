<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="drugs-bg-en" />
        </ClientOnly>

        <section class="e-article" lang="et" style="hyphens: auto;">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Kanep ja “imerohud”</h1>
            <h5 class="font-normal uppercase leading-tight">Teaduslik taustainfo</h5>
        
            
            <section id="s1">
                <h2 id="s1t">Sissejuhatus</h2>
                
                <p class="mt-20">
                    Moodul keskendub peamiselt kanepile ning sellest toodetud narkootikumitele. Alternatiivne tegevusliin, mida selles moodulis uurida, on skandaalne aine nimega MMS (Miracle Mineral Solution), mis on kloordioksiidi vesilahuse kaubamärgi nimetus, mida ühtlasi kasutatakse tööstusliku pleegitusainena, mida aga on ekslikult reklaamitud mitmete haiguste, sealhulgas HIV-i, vähi, COVID-19, külmetushaiguste aga ka autismi ravimina.
                </p>
                <p>
                    Allpoololevast tekstist leiab selgitused järgmistele probleemidele / väidetele / müütidele.
                </p>
                <h4>
                    <a href="#s2">Mis on kanep?</a>
                </h4>
                <ul class="leading-tight">
                    <li class="my-0">
                        <a href="#myth-1">Müüt nr 1: Kanep ei ole tervisele eriti ohtlik</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth2">Müüt nr 2: Mõnele noorele kanep sobib</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-3">Müüt nr 3. Kanep on meditsiinis kasutatav ravim ja seetõttu kõigile ohutu</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-4">Müüt nr 4: Marihuaana parandab meeleolu ja edendab vaimset tervist</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth5">Müüt nr 5: Kanep ei tekita sõltuvust</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-6">Müüt nr 6: Kanep on väravaks kangematele narkootikumidele</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-7">Müüt nr 7: Kanepiga ei saa üledoosi</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-8">Müüt nr 8: Kanepisuits on ohutu</a>
                    </li>
                </ul>

                <h4>
                    <a href="#s3">Mis on MMS?</a>
                </h4>
                <ul class="leading-tight">
                    <li class="my-0">
                        <a href="#safety">Ohutus</a>
                    </li>
                    <li class="my-0">
                        <a href="#miracle-drug">MMS-i kui “imeravimi” turundamine</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-9">MMS ja valeväited COVID-19 ravi kohta</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-10">MMS ja valeväited tema muude ravivõimete kohta</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-11">Müüt nr 11: MMS aitab langetada kehakaalu</a>
                    </li>
                </ul>
            </section>







            <section id="s2">
                <h2 id="s2t">Mis on kanep?</h2>
            
                <p>
                    Kanep (või marihuaana) viitab kolmest psühhoaktiivsete omadustega taimest koosnevale rühmale: <i>Cannabis sativa</i>, <i>Cannabis indica</i> ning <i>Cannabis ruderalis</i>. Kui nende taimede õied korjata ja kuivatada, on tulemuseks üks maailma levinumaid narkootikume. Kanep koosneb enam kui 120 ainest, mida tuntakse kannabinoididena. Kaks kõige tuntumat kannabinoidi on kannabidiool (CBD) ja delta-9-tetrahüdrokannabinool (THC). CBD on kanepis leiduv keemiline ühend, leviku poolest teisel kohal ning on viimasel ajal muutunud alternatiivse ravivahendina populaarseks mitmete haigusseisundite korral. Seda võib saada kanepist <sup><span class="tooltip" data-tip="Termin “kanep” tähendab kanepit, mille THC sisaldus on 0,3 protsenti või vähem kuivkaalust">[1]</span></sup>. THC on kanepi peamine psühhoaktiivne koostisosa, THC aktiveerib aju tasustamissüsteemi, andes ajule märku keemilise signaali - dopamiini vabastamiseks <a href="https://nida.nih.gov/publications/research-reports/marijuana/how-does-marijuana-produce-its-effects" target="_blank" rel="noopener noreferrer"><sup>[2]</sup></a>.
                </p>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/drugs__cannabis.webp"
                    credits="Pixabay: https://pixabay.com/photos/marijuana-herbal-cannabis-hemp-5858148/"
                    :elevated="true">
                    <template #caption>
                        <b>Joonis 1.</b> Kanepitaimed
                    </template>
                </UiContentImage>
                <p>
                    Ilmselt ei tekita ükski teine taim nii palju arutelusid ja väärarusaamu kui kanep. Selle kasutamine ja populaarsus läbi aegade on viinud selleni, et mõned on seda tembeldanud superravimiks, teised aga häbimärgistavad kui “kurja juurt”, pluss paljud teised vaatenurgad nende kahe vahel. Viimasel kümnendil on uimastite legaliseerimine mitmetes riikides lõõgastumise eesmärgil ja levitatav teave selle kasulikkuse kohta suurendanud väärarusaamu veelgi enam. Eestis kasutamise kohta vt. siit <a href="https://drive.google.com/file/d/1gX2od53KWaygwney13ijwXzu0wc3mK9W/view?usp=share_link" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Veterinaar- ja Toiduamet. (2019). Kanepi ekstraktid ja kannabidiool (CBD)."><sup>[3]</sup></a> . Tarvitamisega seotud riskide kohta on saadaval palju infot, aga samuti samuti selle tarvitamisega seotud kasude kohta. Sageli esitatakse info ilma korralike viideteta. Järgnevalt vaatame, mida on teadlastel ja meditsiinitöötajatel öelda enamlevinud kanepitarvitamisega seotud müütide kohta, viidates seejuures vastavatele teadusuuringutele.
                </p>
                <p>
                    Rohkem infot kanepitarvitamise tervisemõjude kohta <a class="break-all" href="https://docs.google.com/document/d/1kxisOjHc0qINFXhWvmdmMAJyjp7V9JmgfWXDhCKeuyk/preview" target="_blank" rel="noopener noreferrer">võib leida siit</a>.
                </p>
            </section>








            <section id="s3">
                <h2 id="s3t">Müüdid kanepi kohta</h2>

                <h3 id="myth-1">
                    <span class="text-rose-400">Müüt nr 1:</span> Kanep ei ole tervisele eriti ohtlik
                </h3>
                <p>
                    On väidetud, et kanep ei ole tervisele ohtlik, vaid isegi kasulik. See müüt on laialt levinud, kuna mitmes riigis on levinud arusaam, et teised uimastid on palju mürgisemad ning kanep on kasutusel ravieesmärkidel alternatiivse ravimina.
                </p>
                <p>
                    Teaduslike tõendite kohaselt on kanepit seostatud suure hulga tervisemõjudega (Joonis 2). Kõige olulisemad tagajärjed hõlmavad vaimuhaigusi <sup><span class="tooltip" data-tip="Paruk S & Burns JK. 2016. Kanep ja vaimuhaigused noorukitel: ülevaade. Lõuna-Aafrika perepraktika, 58:sup1, S18-S21.">[4]</span></sup>, südame-veresoonkonna haigusi <sup><span class="tooltip" data-tip="Thomas G et al. 2014. Marihuaana sissehingamise kahjulikud kardiovaskulaarsed, tserebrovaskulaarsed ja perifeersed vaskulaarsed mõjud: Mida kardioloogid peavad teadma. American Journal of Cardiology 113 (1): 187-190.">[5]</span></sup>, kopsuhaigusi <sup><span class="tooltip" data-tip="Joshi M et al. 2014. Marihuaana ja kopsuhaigused. Current Opinios of Pulmonary Medicine 20(2):173-179.">[6]</span></sup> ning hingamisteede ja munandivähki <sup><span class="tooltip" data-tip="Riiklikud Teaduste, Inseneriteaduste ja Meditsiini Akadeemiad. 2017. Kanepi ja kannabinoidide mõju tervisele: tõendite praegune seis ja soovitused uuringuteks. Washington, DC: National Academies Press.">[7]</span></sup>. Mõned riskirühmad, nagu teismelised ja rasedad naised, on kanepitarbimise suhtes eriti haavatavad. Samuti on oluline mõista passiivse suitsetamisega seotud ohtusid, kuna kanepisuits (ka passiivne) on füüsikaliste ja keemiliste omaduste poolest väga sarnane tubakasuitsuga <sup><span class="tooltip" data-tip="Graves BM et al. 2020. Peavoolu marihuaana ja tubakasuitsu põhjalik iseloomustus. Scientific Reports 10(1):7160.">[8]</span></sup>. Veelgi enam, kanepitarbimine on seotud sõltuvusega, see suurendab teiste uimastite tarvitamise riski ning on teatatud ka üledoosidest.

                </p>
                <UiContentImage elevated src="https://evidence.onkel.ee/assets/drugs__cannabis-medical-effects.webp">
                    <template #caption>
                        <b>Joonis 2.</b> Kanepi mõju tervisele.
                    </template>
                </UiContentImage>


                <h3 id="myth-2">
                    <span class="text-rose-400">Müüt nr 2:</span> Mõnele noorele kanep sobib
                </h3>
                <p>
                    Kuna paljud noored kasutavad kanepit, on kasvanud veendumus, et selle kasutamine on okei. Uuringute kohaselt võib kanepitarbimine, eriti noorukieas ja varases täiskasvanueas, kahjustada õppimise ja mäluga seotud ajuosa <sup><a href="http://venturacountylimits.org.s94613.gridserver.com//resources/ article/E413A9/marijuana-and-your-kids-brain-video" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Ventura maakond. 2015. Marihuaana ja teie lapse aju. Marihuaana Ventura maakonnas: värav aruteluks, Ventura maakonna käitumistervis.">[9]</a></sup>. Mõned uuringud näitavad, et regulaarne marihuaana kasutamine noorukieas on seotud aju muutunud närviühenduste ja aju teatud piirkondade mahu vähenemisega, mis on seotud täidesaatvate funktsioonidega, nagu mälu, õppimine ja impulsside juhtimine <sup><span class="tooltip" data-tip="Batalla A et al. 2013. Krooniliste kanepitarbijate struktuursed ja funktsionaalsed pildiuuringud: süstemaatiline ülevaade noorukite ja täiskasvanute leidudest. PloS One 8(2): e55821.">[10]</span></sup>. Kõige olulisem on see, et uuringute kohaselt võib regulaarne kanepitarbimine noorukieas kaasa tuua koolis kehvema hakkamasaamise ja suurema koolist väljalangemise <sup><span class="tooltip" data-tip="Fergusson, DM et al. 2010. Kanep ja haridusalased saavutused: kolme Austraalia kohordiuuringu tulemused. Narko- ja alkoholisõltuvus, 110, 3.">[11]</span></sup>. On leitud, et noorukite ja noorte täiskasvanute kanepitarbimisest põhjustatud aju struktuursed muutused on püsivad (sh IQ tulemused vähenevad) ja neid ei saa vanuse kasvades taastada <sup><span class="tooltip" data-tip="Meier MH et al. 2012. Püsivad kanepitarvitajad näitavad neuropsühholoogilist allakäiku lapsepõlvest keskeani. Ameerika Ühendriikide riikliku teaduste akadeemia toimetised, 109:E2657-2664">[12]</span></sup>.
                </p>


                <h3 id="myth-3">
                    <span class="text-rose-400">Müüt nr 3.</span> Kanep on meditsiinis kasutatav ravim ja seetõttu kõigile ohutu
                </h3>
                <p>
                    Praegu on kanepile ning kanepist saadud toodetele olemas kolm tunnustatud kasutusviisi: seda määratakse keemiaraviga seotud iivelduse ja oksendamise vastu, HIV-i / AIDS-iga seotud isutuse vastu ja paari haruldase lapseea epilepsia tüübi korral <sup><span class="tooltip" data-tip="National Academies of Sciences, Engineering and Medicine, 2017. Kanepi ja kannabinoidide terapeutiline toime. sisseKanepi ja kannabinoidide mõju tervisele: tõendite praegune seis ja soovitused uuringuteks. National Academies Press (USA)">[13]</span></sup>. Kõigi muude haiguste, sealhulgas psühhiaatriliste seisundite korral, ei ole kanep laialdaselt heaks kiidetud. Varasemate andmete põhjal võivad kannabinoiditeraapiad (sisaldavad peamiselt CBD-d) pakkuda sobivamat ravi ärevushäirega inimestele või võimaliku abistava toimena ärevuse või stressiga seotud häirete ravis <sup><span class="tooltip" data-tip="Sharpe L et al. 2020. Kanep, ärevuse põhjus? Anksiogeensete ja anksiolüütiliste omaduste kriitiline hinnang. Journal of Translational Medicine, 18:374.">[14]</span></sup>. Teatud uuringud on siiski näidanud, et see võib ise tekitada ärevust, paanikat, paranoiat ja psühhoosi.

                </p>
                <p>
                    Kui kanep on tervendavatel eesmärkidel heaks kiidetud, on suure tõenäosusega tegemist spetsiifilise tootega, milles on fikseeritud kontsentratsioon spetsiifilisi kannabinoide nagu kannabidiool (CBD) ja delta-9-tetrahüdrokannabinool (THC) (Joonis 3). Lisaks on arutatud CBD/THC suhte olulisuse üle. On leitud, et ravikanepis mängib see suhe otsustavat rolli ajuvähiga patsientide füüsilise ja funktsionaalse heaolu parandamisel <sup><span class="tooltip" data-tip="Schloss J et al. 2021. 2. faasi randomiseeritud kliiniline uuring, milles hinnatakse kahe erineva ravikanepi vahekorra talutavust kõrge astme glioomiga patsientidel. Frontiers in Oncology, 11:649555.">[15]</span></sup>. Ainult kontrollitud (meditsiini)toodetes saab CBD ja THC kontsentratsiooni ja annuseid kontrollida.
                </p>
                <UiContentImage elevated src="https://evidence.onkel.ee/assets/drugs__cannabis-products.webp">
                    <template #caption>
                        <b>Joonis 3.</b> Kanep ja tooted, mis sisaldavad teatud kontsentratsioonis kannabinoide.
                    </template>
                </UiContentImage>


                <h3 id="myth-4">
                    <span class="text-rose-400">Müüt nr 4:</span> Marihuaana parandab meeleolu ja edendab vaimset tervist
                </h3>
                <p>
                    On hästi teada, et kanepis sisalduv TBC tekitab narkojoobe. See võib panna inimest tundma õnnelikuna, lõdvestunult, jutukamana või naerma rohkem kui tavaliselt. Võib juhtuda, et värvid ja muusika on heledamad ja teravamad. Täpne mõju meeleolule on inimeseti väga erinev, kuid üldiselt on emotsioonid liialdatud sarnaselt alkoholi joobeseisundiga <sup><span class="tooltip" data-tip="Gruber SA et al., 2009. Muutunud afektiivne reaktsioon marihuaana suitsetajatel: FMRI uuring. Drug and Alcohol Dependence, 105(1-2), 139-153.">[16]</span></sup>.
                </p>
                <p>
                    Need "positiivsed" mõjud ilmnevad aga lühiajaliselt, samas kui pikaajaline kasutamine on seotud suure hulga negatiivsete mõjudega vaimsele tervisele. Nagu alkohol, on ka marihuaana ja sellega seotud THC-d sisaldavad tooted joovastavad ained ning võivad aidata kaasa otsustusvõime halvenemisele ja suurenenud vastuvõtlikkusele vaimse tervise probleemidele, sealhulgas depressioon, unetus ja paranoilised luulud <a href="http://www2.nami.org/Content/NavigationMenu/Hearts_and_ Minds/Smoking_Cessation/Marijuana_and_Mental_Illness.htm" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="National Alliance on Mental Illness (2013) Marihuaana ja vaimuhaiguste teabeleht. Duckworth, K., Freedman, J., arvustajad."><sup>[17]</sup></a>. Psühhootiliste häiretega inimestel on märkimisväärne oht sümptomite ägenemiseks või süvenemiseks <sup><span class="tooltip" data-tip="D’Souza DR. 2015. Meditsiiniline marihuaana: kas vanker on enne hobust? Journal of the American Medical Association, 313(24), 2431-2432">[18]</span></sup>. Regulaarne marihuaana tarbimine on seotud ärevuse, depressiooni ja psühhootiliste haigustega inimeste suurenenud riski ja/või sümptomite halvenemisega <sup><span class="tooltip" data-tip=" Hill, K. 2015. Meditsiiniline marihuaana kroonilise valu ja muude meditsiiniliste ja psühhiaatriliste probleemide raviks: kliiniline ülevaade. Journal of the American Medical Association, 313(24), 2474-2483">[19]</span></sup>. On tõendeid, mis näitavad seost tugeva kanepi kasutamise ja psühhootiliste haiguste, sealhulgas skisofreenia vahel, kuid tõendeid on endiselt vähe ja mehhanisme ei mõisteta täielikult <sup><span class="tooltip" data-tip=" Patel S. 2020. Seos kanepitarbimise ja skisofreenia vahel: põhjus või ravi? Süstemaatiline ülevaade. Cureus Journal of Medical Science, 12(7), e9309.">[20]</span></sup>.
                </p>


                <h3 id="myth-5">
                    <span class="text-rose-400">Müüt nr 5:</span> Kanep ei tekita sõltuvust
                </h3>
                <p>
                    Müüt põhineb tõsiasjal, et kõigist marihuaanat kasutavatest inimestest vastab mingil eluperioodil sõltuvuse kriteeriumidele vaid umbes 9%. Kui aga vaadata inimesi, kes hakkavad marihuaanat tarvitama noorukieas (kui aju alles areneb ja on üsna haavatav), siis on neil neli kuni seitse korda suurem tõenäosus jääda kanepisõltuvusse kui täiskasvanutel <sup><span class="tooltip" data-tip=" Winters KC ja Lee C-YS. 2008. Alkoholi- ja kanepitarbimise häire tekkimise tõenäosus nooruses: seos hiljutise tarbimise ja vanusega. Drug and Alcohol Dependence, 92(1-3), 239-247">[21]</span></sup>. Värskeimad andmed viitavad sellele, et 30%-l regulaarselt kanepit tarvitajatest võib esineda sõltuvushäireid <sup><span class="tooltip" data-tip="Hasin DS et al. 2015. Marihuaana tarvitamise häirete levimus Ameerika Ühendriikides aastatel 2001-2002 ja 2012-2013. JAMA Psychiatry, 72(12), 1235-1242">[22]</span></sup>.
                </p>
                <p>
                    Samuti on näidatud, et tänapäevased THC tüved on tugevamad – tekitavad füsioloogilist sõltuvust ja võõrutusnähtusi <sup><span class="tooltip" data-tip=" Copeland J, Swift W. 2009. Kanepitarbimise häire: epidemioloogia ja juhtimine. International Review of Psychiatry, 21(2), 96-103">[23]</span></sup>, mis nõuavad juba spetsiaalset võõrustusravi. Kui kroonilised kanepitarbijad üritavad ravi järsult katkestada, on võõrutusnähud – rahutus, ärrituvus, hüperaktiivsus, unetus, iiveldus, krambid, söögiisu vähenemine, higistamine ja sagenenud unenäod, sagedased <sup><span class="tooltip" data-tip="Bonnet U & Preuss UW. 2017. Kanepi võõrutussündroom: praegused arusaamad. Ainete kuritarvitamine ja rehabilitatsioon, 8, 9-37">[24]</span></sup>.
                </p>


                <h3 id="myth-6">
                    <span class="text-rose-400">Müüt nr 6:</span> Kanep on “väravaks” kangematele narkootikumidele
                </h3>
                <p>
                    Siinkohal on teaduslikud tõendid ebamäärased ja põhjuslikku seost ei ole otseselt kinnitatud, kuid kui vaadata kõiki teisi narkootikume tarvitavaid inimesi, siis enamik neist on alustanud kanepist. Sellegi poolest ei tähenda see, et kui keegi tarvitab kanepit, siis hakkab ta tingimata kasutama kangemaid narkootikume, nagu kokaiin. Kuid teatud protsent kanepitarbijatest teeb seda. Kui võrrelda kanepitarbimist muu uimastitarbimisega, siis enamikus riikides on kanep palju levinum <a href=" https://www.emcdda.europa.eu/data/stats2021/gps_en" target="_blank" rel="noopener noreferrer"><sup>[25]</sup></a>. Kuid ainuüksi levimuse põhjal ei saa me luua seoseid pikaajalise kasutamise ja “väravaks” olemise hüpoteesiga.
                </p>
                <p>
                    25 aastat kestnud longituuduuring on leidnud, et marihuaana tarvitamise sagedus on märkimisväärne teiste ebaseaduslike kuritarvitamise ja sõltuvust tekitavate uimastite seas – eriti noorukieas <sup><span class="tooltip" data-tip=" Fergusson DM et al. 2006. Kanepitarbimine ja muu ebaseaduslik uimastitarbimine: kanepivärava hüpoteesi testimine. Sõltuvus, 101(4), 556-569">[26]</span></sup>. Kahes eraldi uuringus kaksikutega on võrreldud, kas kanepi varajane tarvitamine näitab hilisemat kuritarvitamist või sõltuvust teistest ebaseaduslikest uimastitest. Leiud näitasid kaks kuni viis korda suuremat riski kui kaksikul, kes ei kasutanud marihuaanat <sup><span class="tooltip" data-tip=" Lynskey MT et al. 2003. Narkootikumide tarvitamise eskaleerumine varajase algusega kanepitarbijatel vs kaas-kaksikute kontrollid. JAMA, 289(4), 427-433.">[27]</span></sup><sup><span class="tooltip" data-tip=" Agrawal A et al. 2004. Kanep ja muud ebaseaduslikud uimastid: kaasnev tarbimine ja kuritarvitamine/sõltuvus meestel ja naistel. Behavior Genetics, 34(3), 217-228.">[28]</span></sup>.
                </p>
                <p>
                    Teine seletus muu narkotarbimise “väravaks” olemise ja sõltuvuse kohta põhineb aju neurobioloogial – vähenenud tasutundlikkus ja suurenenud ootustundlikkus võtavad üle aju juhtimisahela <sup><span class="tooltip" data-tip="Volkow ND et al. 2010. Sõltuvus: vähenenud tundlikkus tasu eest ja suurenenud ootustundlikkus võivad aju juhtimisahela üle koormata. Bioesseys, 32(9), 748-755.">[29]</span></sup>. Teisisõnu, mäluahela ajamid tasuvad meie ootusi ja suurendavad motivatsiooni uimastit tarbida. Kokkuvõtteks: tõendid on vastuolulised, kuid seos näib olevat paljude kanepitarbijate lõikes olemas.
                </p>


                <h3 id="myth-7">
                    <span class="text-rose-400">Müüt nr 7:</span> Kanepiga ei saa üledoosi
                </h3>
                <p>
                    Otseselt kanepitarbimisse surra ei saa, aga on võimalus üleannustada, mis toob kaasa füüsilised kannatused (iiveldus, oksendamine), äärmise ärevuse, paranoia ja lühiajalise psühhoosi (kaob kontakt reaalsusega). Nende mõjude kadumiseks võib kuluda mitu tundi. Kanepi üledoosi ei saada just väga sageli, kuid risk on olemas, kui tarbitakse mitteametlikke kanepitooteid. See võib juhtuda, kuna tavaliselt ei saa tarvitaja oma annust ja kannabinoidide sisaldust täpselt mõõta. Kuna kanepitarvitamine on enamikes riikides palju suurem kui teiste uimastite tarbimine, on kanepi kõrvaltoimed toonud kaasa palju rohkem erakorralise meditsiini osakonna külastusi kui teiste narkootikumide puhul <a href=" https://www.samhsa.gov/data/sites/default/files/DAWN2k11ED/DAWN2k11ED/DAWN2k11ED.pdf" target="_blank" rel="noopener noreferrer"><sup>[30]</sup></a>.
                </p>
                <p>
                    Üleannustamise tagajärjeks võib olla ka psühhiaatrilise seisundi halvenemine, eriti psühhoos: see väljendub paranoias, asjade nägemises, kuulmises, luululise mõtlemises. Kanepis sisalduv kannabinoid - THC võib seda halvendada. Mõnikord antakse neile inimestele antipsühhootilisi ravimeid, et sümptomeid leevendada ja neid ennast mugavamalt tundma panna. Teine asi, mille pärast inimesed kiirabisse võivad sattuda, on kanepi hüperemeedi sündroom (CHS) <a href="https://my.clevelandclinic.org/health/diseases/21665-cannabis-hyperemesis-syndrome" target="_blank" rel="noopener noreferrer"><sup>[31]</sup></a>. CHS on seisund, mis on põhjustatud pikaajalisest kanepitarbimisest. Inimesed, kellel on CHS, kogevad korduvaid iivelduse, oksendamise, dehüdratsiooni ja kõhuvalu episoode,  külastades sageli erakorralise meditsiini osakonda.
                </p>
                <p>
                    Lõõgastumise eesmärgil tarbitud kanepi ägedat toksilisust on uuritud ka USA-s Alaskal <sup><span class="tooltip" data-tip="Noble MJ et al. 2019. Äge kanepi mürgisus. Clinical Toxicology, 57(8), 735-742.">[32]</span></sup>. Neurotoksilisus on tavaline pärast ägedat kokkupuudet kanepiga. Lapsed kogesid tahtmatut kokkupuudet, eriti kodus, ja mõnikord ka tõsiste kahjulike tagajärgedega. Kontsentreeritud tooteid, nagu vaigud ja vedelad kontsentraadid, seostati teiste kanepitoodetega võrreldes suurema mürgisusega. Teine teaduskirjanduses käsitletav aspekt on meditsiinilise kanepi mõju opioidide (manustatud näiteks valu vaigistamiseks vähihaigetel) üleannustamisele ja suremusele. Samas on tõendid segased <sup><span class="tooltip" data-tip="Shover CL et al. 2019. Seos meditsiinilise kanepi seaduste ja opioidide üleannustamise suremuse vahel on aja jooksul pöördunud. Proceedings of the National Academy of Sciences of the United States, 116(26), 12624-12626.">[33]</span></sup>. 
                </p>
                <p>
                    Kokkuvõtteks näib seos kehtivat (esineb korrelatsioon), kuid põhjuslik seos pole selge.
                </p>


                <h3 id="myth-8">
                    <span class="text-rose-400">Müüt nr 8:</span> Kanepisuits on ohutu
                </h3>
                <p>
                    Nagu mis tahes muu passiivse suitsu puhul, võivad lapsed kanepi passiivses suitsus sisalduvaid mürgiseid aineid ja kantserogeene kergesti sisse hingata. Selles on palju samu kemikaale, mis tubakasuitsus <sup><span class="tooltip" data-tip="Graves B.M. et al. 2020. Peavoolu marihuaana ja tubakasuitsu põhjalik iseloomustus. Scientific Reports 10(1):7160.">[34]</span></sup>, sealhulgas neid, mis on seotud kopsuvähiga.
                </p>
                <p>
                    Kasutatud marihuaanasuits sisaldab ka THC-d, ühendit, mis vastutab enamiku kanepi psühhoaktiivsete mõjude eest. See võib levida imikutele ja lastele passiivse suitsetamise kaudu ning passiivse kanepisuitsuga kokkupuutuvad inimesed võivad kogeda psühhoaktiivseid mõjusid, näiteks kõrgendatud enesetunnet <sup><span class="tooltip" data-tip="Wilson KM et al. 2017. Kasutatud marihuaanasuitsu biomarkerite tuvastamine väikelastel. Pediatric Research, 81(4), 589-592.">[35]</span></sup>. Hiljutised uuringud on leidnud tugeva seose teadete vahel, et kodus on keegi, kes kasutab marihuaanat (nt vanem, sugulane või hooldaja) ning lapsel tuvastatava THC taseme vahel <sup><span class="tooltip" data-tip="Moore C et al. 2011. Kannabinoidid suuvedelikus pärast passiivset kokkupuudet marihuaanasuitsuga. Forensic Science International, 212(1-3), 227-230.">[36]</span></sup>. On näidatud, et imikutel, kes puutuvad kokku passiivse marihuaanasuitsuga, on oht imikute äkksurma sündroomi (teise nimega SIDS) esinemisele <sup><span class="tooltip" data-tip="Reece-Stremtan S & Marinelli KA. 2015. ABM-i kliiniline protokoll nr 21: imetamise ja ainete kasutamise või ainete kasutamise häire juhised, läbivaadatud 2015. Breastfeeding Medicine, 10(3), 135-141.">[37]</span></sup>.
                </p>
                <p>
                    Neid fakte arvesse võttes põhjustab kanepisuits selgelt terviseriske. Sageli aga järeldavad mitmed veebilehed, et see tõenäoliselt ei mõjuta inimesi, kes puutuvad sellega kokku hästi ventileeritavas keskkonnas. Teaduslike faktide põhjal ei vasta see tõele, eriti siseruumide puhul.
                </p>

                <h3>
                    Muud usaldusväärsed allikad
                </h3>
                <p>
                    <a class="break-all" href="https://www.unodc.org/documents/drug-prevention-and-treatment/cannabis_review.pdf " target="_blank" rel="noopener noreferrer">https://www.unodc.org/documents/drug-prevention-and-treatment/cannabis_review.pdf</a>
                </p>
            </section>


            <hr />



            <section id="s4">
                <h2 id="s4t">
                    Mis on MMS?
                </h2>

                <p>
                    Miracle Mineral Solution, ka Master Mineral Solution (MMS) on kloordioksiidi (ClO₂) vesilahuse kaubamärgi kohta esinevad nimetused; sisuliselt on tegemist tööstusliku valgendiga, mida arvatakse ekslikult ravivat selliseid haigusi nagu HIV, vähk ja külmetus <a href="https://en.wikipedia.org/w/index.php?title=Miracle_Mineral_Supplement&oldid=1130854435" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Wikipedia kaastöölised. (2022). Miracle mineraalne toidulisand."><sup>[38]</sup></a> <a href="https://www.terviseamet.ee/et/uudised/mms-kloordioksiidil-pohinev-tervisele-kahjulik-lahus" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Eesti Ravimiamet. (2018). MMS on kloordioksiidil põhinev tervisele kahjulik lahus."><sup>[39]</sup></a>. Selle nimetuse mõtles välja endine saientoloog Jim Humble oma 2006. aastal ilmunud raamatus "The Miracle Mineral Solution of the 21st Century" <a href="https://uk.news.yahoo.com/parents-making-children-drink-bleach-160057178.html" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Newsweek/Yahoo News. (28. jaanuar 2018). Vanemad panevad oma lapsi jooma valgendit, et neid autismist ravida."><sup>[40]</sup></a>. Humble väidab, et lahus võib ravida HIV-i, malaariat, hepatiidi viirust, gripiviirust H1N1, külmetushaigusi, autismi, aknet, vähki ja muid haigusi. Nende väidete tõestuseks puuduvad kliinilised uuringud <a href="https://www.terviseamet.ee/et/uudised/mms-kloordioksiidil-pohinev-tervisele-kahjulik-lahus" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Estonian Drug Administration (Eesti Ravimiamet). (20. juulil2018).MMS on kloordioksiidil põhinev tervisele kahjulik lahus."><sup>[41]</sup></a> <a href="https://www.fda.gov/consumers/consumer-updates/danger-dont-drink-miracle-mineral-solution-or-similar-products" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="USA Toidu- ja Ravimiamet. (8. detsember 2019).Oht: ärge jooge Miracle’i mineraallahust ega sarnaseid tooteid."><sup>[42]</sup></a>, need pärinevad ainult üksikjuhtumite kirjeldustest ja Humble'i raamatust <a href="https://en.wikipedia.org/w/index.php?title=Miracle_Mineral_Supplement&oldid=1130854435" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Wikipedia kaastöölised. (2022).Miracle mineraalne toidulisand. Vikipeedia, vaba entsüklopeedia."><sup>[43]</sup></a>. Vaatamata puuduvatele teaduslikele tõenditele on MMS-i propageerinud erinevad inimesed ja organisatsioonid üle maailma.
                </p>
                <p>
                    MMS valmistatakse naatriumkloriti (NaClO₂) vesilahuse segamisel happega (N: soolhape, tsitrusviljamahl, äädikas): 
                </p>
                <h4 class="mt-0" style="font-variant-numeric:lining-nums;"><span class="break-keep whitespace-nowrap">5NaCl0₂ + 4HCl</span> → <span class="break-keep whitespace-nowrap">5NaCl + 4ClO₂ + 2H₂O</span></h4>
                <p>
                    Selle tulemusena tekib kloordioksiid, mürgine kemikaal, mis võib põhjustada iiveldust, oksendamist, kõhulahtisust ja dehüdratsioonist tingitud eluohtlikult madalat vererõhku <a href="https://web.archive.org/web/20190814102219/https://www.fda.gov/news-events/press-announcements/fda-warns-consumers-about-dangerous-and-potentially-life-threating-side-effects-miracle-mineral" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Toidu- ja Ravimiamet (2019).FDA hoiatab tarbijaid Miracle Mineral Solutioni ohtlike ja potentsiaalselt eluohtlike kõrvalmõjude eest .fda.gov."><sup>[44]</sup></a>. Naatriumklorit on kloordioksiidi peamine lähteaine ja on mürgine allaneelamisel <a href="https://web.archive.org/web/20070710214037/http://www.emea.europa.eu/pdfs/vet/mrls/sodiumchlorite.pdf" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Euroopa Ravimiamet. (2007). Naatriumkloriit – Euroopa Ravimihindamisameti kokkuvõtlik aruanne – Veterinaarravimite hindamisüksus (PDF)."><sup>[45]</sup></a>. Suured annused võivad põhjustada ägedat neerupuudulikkust. Väikesed annused (ligikaudu 1 gramm) võivad põhjustada iiveldust, oksendamist, soolepõletikku ja olla isegi eluohtlikud glükoos-6-fosfaatdehüdrogenaasi puudulikkusega patsientidel <a href="https://doi.org/10.3109%2F08860229309069417" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip=" Lin J.L. & Lim, P.S. (1993). Neerupuudulikkusega seotud äge naatriumkloriti mürgistus.Ren Fail.15(5): 645–8.doi:10.3109/08860229309069417.PMID 8290712."><sup>[46]</sup></a>.
                </p>
                <p>
                    Kloordioksiidi on kasutatud ka joogivee desinfitseerimisvahendina <sup><span class="tooltip" data-tip="Block, Seymour Stanton (2001). Desinfitseerimine, steriliseerimine ja säilitamine (5. väljaanne). Lippincott, Williams ja Wilkins. lk. 215. ISBN 0-683-30740-1.">[47]</span></sup>. Euroopa Komisjoni direktiiv <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A31998L0083" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="NÕUKOGU DIREKTIIV 98/83/EÜ, 3. november 1998, olmevee kvaliteedi kohta"><sup>[48]</sup></a> kehtestab kloordioksiidi maksimaalseks lubatud kontsentratsiooniks joogivees mitte rohkem kui 0,2 miljondikosa (ppm), samas kui USA Keskkonnakaitseagentuur (EPA) on määranud selleks 0,8 (ppm) <a href="https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=581&toxid=108" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Toksiliste ainete ja haiguste registri agentuur – ToxFAQs™: kloordioksiid ja kloriit. www.atsdr.cdc.gov."><sup>[49]</sup></a>.
                </p>
                <h3 id="safety">
                    Ohutus
                </h3>
                <p>
                    Meditsiiniline nõuanne on, et igaüks, kellel on see toode, peaks selle kasutamise kohe lõpetama ja minema viskama <a href="https://www.terviseamet.ee/et/uudised/mms-kloordioksiidil-pohinev-tervisele-kahjulik-lahus" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Estonian Drug Administration (Eesti Ravimiamet). (20. juulil 2018). MMS on kloordioksiidil põhinev tervisele kahjulik lahus."><sup>[50]</sup></a> <a href="https://www.fda.gov/consumers/consumer-updates/danger-dont-drink-miracle-mineral-solution-or-similar-products" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="USA Toidu- ja Ravimiamet. (8. detsember 2019). Oht: ärge jooge Miracle’i mineraallahust ega sarnaseid tooteid."><sup>[51]</sup></a>. Riiklikud agentuurid paljudes riikides <a href="http://www.food.gov.uk/news-updates/news/2012/jul/cdswarning#.UJ8EzIawUzQ" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Ühendkuningriik Toidustandardite amet. (3. juuli 2012). Agentuuri hoiatus kloorilahuste kohta"><sup>[52]</sup></a> <a href="https://web.archive.org/web/20120520125838/http://food.gov.uk/news/newsarchive/2010/sep/mms" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Toidustandardite Agentuur. (2012). Hoiatus Miracle Mineral Solutioni tarbimise eest"><sup>[53]</sup></a>, on hoiatanud MMS-i mõjude eest: "MMS on 28% naatriumkloriti lahus, mis on samaväärne tööstusliku tugevusega pleegitusainega. Kui seda kasutatakse vastavalt juhistele, võib see põhjustada tugevat iiveldust, oksendamist ja kõhulahtisus, mis võib põhjustada dehüdratsiooni  ja alandada vererõhku. Kui lahust lahjendatakse ettenähtust vähem, võib see kahjustada soolestikku ja punaseid vereliblesid, mis võib põhjustada hingamispuudulikkust." Ka lahjemad versioonid võivad kahjustada, kuigi see on vähem tõenäoline. Müüjad seostavad oksendamist, iiveldust ja kõhulahtisust toote ravitoimega, kuid tegelikult on selle põhjuseks toote mürgisus <a href="https://web.archive.org/web/20130606115516/http://moh.gov.ms/?p=803" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Montserrat: tervishoiuministeerium. (6. juuni 2013) Toote hoiatus: Miracle Mineral Solution."><sup>[54]</sup></a>.
                </p>
                <p>
                    MMS-i ei ole heaks kiidetud ühegi haiguse raviks ja krooniline kokkupuude kloordioksiidi väikeste annustega võib põhjustada reproduktiiv- ja neuroarengukahjustusi <a href="https://cfpub.epa.gov/ncea/iris/iris_documents/documents/subst/0648_summary.pdf" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Kloriit (naatriumisool) (CASRN 7758-19-2) | IRIS | USA EPA (PDF). Epa.gov. Ameerika Ühendriikide Keskkonnakaitseagentuur."><sup>[55]</sup></a>. 
                </p>
                <h3 id="miracle-drug">
                    MMS-i kui “imeravimi” turundamine
                </h3>
                <p>
                    Turundajate valeväidete kohaselt ravib imelahuse tilkade manustamine kiiresti paljud või kõik haigused ja vaevused, sealhulgas vähk, AIDS, gripp, autism jne. Turunduses on põhiliseks meetodiks võrkturundus ja avalikkusele suletud kogukonnad sotsiaalvõrgustikes. Tarbijale suunatud kommunikatsioon hõlmab  sõnavara, mis seostub tervislike eluviisidega (mõisted "öko" jms), kasutab ära haavatavate tarbijate teadmatust ja meeleheidet ning sageli ka vastumeelsust tavameditsiini vastu <a href="https://et.wikipedia.org/wiki/MMS" target="_blank" rel="noopener noreferrer"><sup>[56]</sup></a>.
                </p>


                <h3 id="myth-9">
                    <span class="text-rose-400">Müüt nr 9:</span> MMS ja valeväited COVID-19 ravi kohta
                </h3>
                <p>
                    Kuigi väitel, et MMS võib ravida COVID-19 või mõnda muud haigust, pole teaduslikku alust 
                    <a href="https://www.mysuncoast.com/2020/07/08/federal-agencies-hazmat-crews-respond-bradenton-church-selling-covid-miracle-solution/" target="_blank" rel="noopener noreferrer"><sup>[57]</sup></a> 
                    <a href="https://www.thedailybeast.com/qanon-conspiracy-theorists-magic-cure-for-coronavirus-is-drinking-lethal-bleach" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Sommer, Will (28. jaanuar 2020). QAnon-ersi maagiline ravim koroonaviiruse vastu: jooge lihtsalt valgendit!. Daily Beast. Arhiveeritud originaalist 10. veebruaril 2020."><sup>[58]</sup></a> 
                    <a href="https://www.youtube.com/watch?v=QEZpb4an8eM" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Halperin, Dan (30. jaanuar 2020). QAnoni YouTube'i kasutajad käsivad inimestel koroonaviiruse tõrjumiseks juua valgendit. Youtube. Veerev kivi."><sup>[59]</sup></a>

                    , siis COVID-19 pandeemia ajal hakkasid paljud varasemad MMS-i propageerijad, nagu QAnoni toetaja Jordan Sather ja USA Genesis II Tervise ja Tervendamise kirik, propageerima seda kui COVID-19 ravimit. Nt. 2019. aasta suve alguses korraldas Genesis II Tervise ja Tervendamise Kirik MMS-i levitamiseks seminare Tšiilis, Ecuadoris, Lõuna-Aafrikas ja Uus-Meremaal 
                    <a href="https://www.theguardian.com/us-news/2019/aug/16/bleach-based-miracle-cure-group-seminar-new-york" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Pilkington, Ed (2019-08-16). Rühm, kes tutvustab New Yorgi osariigi seminaril valgendipõhist imeravimit. Eestkostja. Vaadatud 2019-08-16."><sup>[60]</sup></a>
                    . 2020. aastal sai USA Florida lõunapiirkonna advokaadibüroo ettekirjutuse kiriku teise haru vastu, kes turustas MMS-i spetsiaalselt COVID-19 ravivahendina, kasutades anonüümseid edulugusid ja viidates vandenõuteooriatele 
                    <a href="https://www.cbsnews.com/news/florida-church-coronavirus-bleaching-agent-cure-covid-19/" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Quinn, Melissa; Siduma, siduma; Hymes, Clare (17. aprill 2020), Feds otsib Florida kirikut, kes müüb COVID-19 raviks pleegitusainet, CBS uudised."><sup>[61]</sup></a>
                    . Kohus andis korralduse sulgeda kõik MMS-i müüvad veebisaidid, takistada kirikul uute veebisaitide loomist ja konfiskeerida kõik MMS-i tegemiseks kasutatud materjalid. Samuti tehti kirikule ülesandeks teavitada kliente, et toote levitamine on olnud ebaseaduslik 
                    <a href="https://web.archive.org/web/20160415120703/http://www.ethicalagents.co.nz/ProductPDF/Tristel-Trio-Wipe-System.pdf" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Triseli salvrätikute süsteemi tooteteave (PDF). Eetilised agendid. Arhiveeritud alatesoriginaal (PDF) 15. aprillil 2016."><sup>[62]</sup></a>
                    . 
                </p>
                <p>
                    Boliivias propageerisid Cochabamba ametnikud MMS-i kui ravi COVID-19 vastu ja kongress võttis vastu seaduseelnõu, millega lubatakse "kloordioksiidi lahuse tootmine, turustamine, tarnimine ja kasutamine koroonaviiruse ennetamiseks ja raviks". Selle tagajärjel sai mürgituse vähemalt 15 inimest <a href="https://www.theguardian.com/world/2020/jul/17/bolivia-coronavirus-toxic-bleach-chlorine-dioxide" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Cochabamba, Associated Press (17. juuli 2020). Meeleheitel boliivlased otsivad mürgist pleegitajat, mida on ekslikult reklaamitud kui Covid-19 ravi. Eestkostja. Välja vaadatud 2. veebruaril 2021."><sup>[63]</sup></a>.
                </p>

                <h3 id="myth-10">
                    <span class="text-rose-400">Müüt nr 10:</span> MMS ja valeväited tema muude ravivõimete kohta
                </h3>
                <p>
                    ABC uudised ja KABC-TV USA-s uurisid 2016. aastal MMS-i fenomeni ja avastasid Lõuna-California ümber koondunud "maa-aluse võrgustiku", mis propageerib MMS-i haiguste, sealhulgas vähi, Parkinsoni tõve ja laste autismi raviks <a href="https://tervis.postimees.ee/6853276/need-on-2019-aasta-koige-ohtlikumad-tervisemuudid" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Vanemad panevad oma lapsi jooma valgendit, et neid autismist ravida. Newsweek/Yahoo News. 28. jaanuar 2018."><sup>[64]</sup></a>.
                </p>
                <p>
                    Nii tegi ka nt. Kerri Rivera (USA), kes andis lapsevanematele põhjendamatuid ja ebaprofessionaalseid meditsiinilisi ja tervisealaseid nõuandeid MMS-i kasutamiseks autismi ja muude tõsiste haiguste "ravimiseks". Hiljem esitati talle kriminaalsüüdistus. Rivera haldas aga Facebooki lehte ja veebisaiti, mis propageerisid ohtlikku MMS-klistiiri kui autismiravi ja väitis, et laste soolestiku koetükid on tegelikult parasiidid ("paelussid") <a href="https://en.wikipedia.org/wiki/Intestinal_epithelium" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Köie ussid (või köieussid) on pseudoteaduslik termin pikkade õhukeste kahjustatud tükkide kohtasoole epiteel või muu soolesisaldus, mis on valesti tuvastatud kui inimese parasiit-ussid."><sup>[65]</sup></a>, mis oli ilmselgelt vale <a href="https://www.autism.com/statement_mms" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Hoiatus kloordioksiidi kasutamise eest. Autismi uurimisinstituut. Vaadatud 24. septembril 2016."><sup>[66]</sup></a>.
                </p>
                
                <h3 id="myth-11">
                    Müüt nr 11: MMS aitab langetada kehakaalu
                </h3>
                <p>
                    Eesti erinevates sotsiaalmeedia portaalides on hakanud viimastel aastatel levitama info MMS-ist kui tõhusast kaalulangetajast. Sellelele on aidanud hoogsalt kaasa ka näiteks portaal telegram.ee (Vt näiteks: <a href="https://www.telegram.ee/toit-ja-tervis/mms-ravib-vahki-ja-teised-edulood-eestist" target="_blank" rel="noopener noreferrer">https://www.telegram.ee/toit-ja-tervis/mms-ravib-vahki-ja-teised-edulood-eestist</a>)
                </p>
                <p>
                    Kui kellelgi üldse peaks pähe tulema taoline mõte, siis tasuks eelkõige meenutada MMS-i tarvitamise kõrvaltoimeid, mis isegi vastavalt juhistele tarvitades, võivad põhjustada tugevat iiveldust, oksendamist ja kõhulahtisust, mis omakorda võib põhjustada dehüdratsiooni ja alandada vererõhku. Veidi kangemal kujul võib see kahjustada aga juba soolestikku ja punaseid vereliblesid ning põhjustada hingamispuudulikkust. Krooniline kokkupuude kloordioksiidi väikeste annustega võib põhjustada reproduktiiv- ja neuroarengukahjustusi <a href="https://cfpub.epa.gov/ncea/iris/iris_documents/documents/subst/0648_summary.pdf" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Chlorite (sodium salt)(CASRN 7758-19-2) | IRIS | USA EPA (PDF).Epa.gov. U.S. Environmental Protection Agency. National Center for Environmental Assessment"><sup>[67]</sup></a>. Seega pole ime, kui MMS-i üheks kõrvaltoimeks on ka kaalulangus, sest toit ei jää lihtsalt organismi püsima. Toitainete ja mineraalide puudus organismis oksendamise ning kõhulahtisuse ning hullemal juhul soolestiku kahjustumise tagajärjel on liiga kõrge hind võimalikule (kuigi vastavad uuringud puuduvad) kaalulangusele. 
                </p>


                <h3>
                    Rohkem viiteid MMS-i ja selle tervisemõjude kajastuse kohta:
                </h3>

                <ul>
                    <li>
                        <a href="https://tervis.postimees.ee/6853276/need-on-2019-aasta-koige-ohtlikumad-tervisemuudid" target="_blank" rel="noopener noreferrer">https://tervis.postimees.ee/6853276/need-on-2019-aasta-koige-ohtlikumad-tervisemuudid</a>
                    </li>
                    <li>
                        <a href="https://ekspress.delfi.ee/artikkel/120051408/eksperiment-huva-nou-mms-i-grupist-jata-koer-janusse-kull-ta-mmsiga-segatud-vett-lopuks-jooma-hakkab" target="_blank" rel="noopener noreferrer">https://ekspress.delfi.ee/artikkel/120051408/eksperiment-huva-nou-mms-i-grupist-jata-koer-janusse-kull-ta-mmsiga-segatud-vett-lopuks-jooma-hakkab</a>
                    </li>
                    <li>
                        <a href="https://www.delfi.ee/artikkel/93002771/fotod-viljandi-bussipeatustes-reklaamitakse-koroonaviiruse-raviks-mms-i" target="_blank" rel="noopener noreferrer">https://www.delfi.ee/artikkel/93002771/fotod-viljandi-bussipeatustes-reklaamitakse-koroonaviiruse-raviks-mms-i</a> 
                    </li>
                </ul>

            </section>



        </section>
    </div>
</template>