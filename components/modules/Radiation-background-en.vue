<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="climatechange-bg-et" />
        </ClientOnly>



        <section class="e-article" lang="et" style="hyphens: auto;">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Radiation</h1>
            <h5 class="font-normal uppercase leading-tight">Scientific background information</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">1. Radiation is part of our daily lives</h2>
        
            <p>
                Radiation is all around us and has been present since the birth of this planet. We are routinely exposed to naturally occurring (background) radiation from outer space, the sun, the ground, and even from within our bodies.
            </p>

            <p>
                Radiation is energy in the form of waves or particles. This commonly includes:
            </p>

            <ol>
                <li class="leading-tight">
                    electromagnetic radiation, such as radio waves, microwaves, infrared, visible light, ultraviolet, x-rays, and gamma radiation;
                </li>
                <li class="leading-tight">
                    particle radiation, such as alpha radiation (α), beta radiation (β), proton radiation and neutron radiation (see Figure 1).
                </li>
            </ol>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/radiation__em-spectrum-properties.webp"
                credits="https://commons.wikimedia.org/wiki/File:EM_Spectrum_Properties_edit.svg"
                :elevated="true">
                <template #caption>
                    <b>Figure 1.</b> Electromagnetic Spectrum
                </template>
            </UiContentImage>
            
            <p>
                Täpsemalt, CO₂ püüab kinni planeedi eralduva pikalainelise kiirguse. Pikalainelise kiirguse püüdmise määrab kvantmehaanika. CO₂ kaks hapnikuaatomit koos nende vahel oleva süsinikuaatomiga vibreerivad ja selle vibratsiooni sagedus langeb kokku mõne pikalainelise kiirguse infrapuna lainepikkusega. Kui Maa pinnalt ja atmosfäärist lähtuva kiirguse sagedus langeb kokku CO₂ vibratsiooni sagedusega, neelatakse see CO₂ molekulide poolt ja muudetakse kokkupõrkel teiste õhumolekulidega soojuseks ning antakse seejärel pinnale tagasi. Seega kui CO₂ sisaldus atmosfääris suureneb, siis väheneb atmosfäärist väljuva pikalainelise kiirguse hulk ehk sisse tuleb rohkem energiat kui väljub, mis tähendab, et süsteemi energia on tasakaalust väljas. 
            </p>

            <p><b>Kasvuhooneefekti soodustavad gaasid (kasvuhoonegaasid) on järgmised:</b></p>
            <dl>
                <dt class="font-bold">Veeaur:</dt>
                <dd>kõige levinum kasvuhoonegaas, kuid oluline on see, mida see Maa kliimale tähendab. Maa atmosfääri soojenedes suureneb veeauru hulk, kuid samuti suureneb pilvede ja sademete võimalus ehk tegemist on kasvuhooneefekti ühe kõige olulisema mehhanismiga.</dd>
                
                <dt class="font-bold">Süsinikdioksiid (CO₂):</dt>
                <dd>väikese osakaaluga sisalduselt, kuid väga oluline atmosfääri komponent. Süsinikdioksiid eraldub looduslike protsesside tullemusena, nagu hingamine ja vulkaanipursked. Lisaks inimtegevuse tõttu nagu metsade hävitamine, maakasutuse muutused ja fossiilkütuste põletamine. Inimesed on pärast tööstusrevolutsiooni algust suurendanud atmosfääri CO₂ kontsentratsiooni 48% võrra. See on kliimamuutuste kõige olulisem pikemaajalisem tõukejõud.</dd>
                
                <dt class="font-bold">Metaan (CH₄):</dt>
                <dd>lenduv süsivesinik, mis eraldub nii looduslikest allikatest kui ka inimtegevuse tõttu, sh jäätmete lagundamisest prügilates, põllumajandusest ja eriti riisikasvatusest, samuti mäletsejaliste metabolismi ja koduloomadega seotud sõnnikukäitlemise tulemusena. Metaan molekulina on palju aktiivsem kasvuhoonegaas kui süsinikdioksiid, kuid teda leidub atmosfääris palju vähem.</dd>
                
                <dt class="font-bold">Dilämmastikoksiid (N₂O):</dt>
                <dd>võimas kasvuhoonegaas, mis tekib mullaharimisel, eriti mineraalsete ja orgaaniliste väetiste kasutamisel, fossiilkütuste põletamisel, lämmastikhappe tootmisel ja biomassi põletamisel.</dd>

                <dt class="font-bold">Klorofluorosüsivesinikud (CFC-d):</dt>
                <dd>täielikult tööstuslikk päritolu sünteetilised ühendid, mida kasutatakse paljudes valdkondades, kuid nüüd on nende tootmine ja atmosfääri paiskamine rahvusvaheliselt suures osas reguleeritud. Kokkuleppe aluseks ning regulatsioonide kehtestamise vajalikkus tõstatati nende võimest osoonikihi hävimisele kaasa aidata. Kuid klorofluorosüsivesinikud on tuntud ka kui kasvuhoonegaasid.</dd>
            </dl>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/c-change__greenhouse-gas-emission-75-20.webp"
                credits="From NOAA Global Monitoring Laboratory"
                :elevated="true" class="mt-8">
                <template #caption>
                    <b>Joonis 2.</b> Kasvuhoonegaaside emissioon atmosfääri aastatel 1975-2020
                </template>
            </UiContentImage>
            
        
            
            <section class="e-card mt-8">
                <h4 class="mt-2">Kasutatud allikad:</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://climate.nasa.gov/causes/" target="_blank" rel="noopener noreferrer">https://climate.nasa.gov/causes/</a></li>
                    <li><a href="https://www.un.org/en/climatechange/what-is-climate-change" target="_blank" rel="noopener noreferrer">https://www.un.org/en/climatechange/what-is-climate-change</a></li>
                    <li><a href="https://gml.noaa.gov/about/networks.html" target="_blank" rel="noopener noreferrer">https://gml.noaa.gov/about/networks.html</a></li>
                    <li><a href="https://archive.ipcc.ch/publications_and_data/ar4/wg1/en/faq-1-3-figure-1.html" target="_blank" rel="noopener noreferrer">https://archive.ipcc.ch/publications_and_data/ar4/wg1/en/faq-1-3-figure-1.html</a></li>
                    <li><a href="https://www.youtube.com/watch?app=desktop&v=3JX-ioSmNW8 " target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?app=desktop&v=3JX-ioSmNW8</a></li>
                    <li><b>Ramanathan, V.</b>, <b>Feng, Y.</b> (2009). Air pollution, greenhouse gases and climate change: Global and regional perspectives. Atmospheric environment, 43(1), 37-50.</li>
                </ul>
            </section>
            
            
            
             



            
            
            
            
            
            
            
            
            
            
            <hr class="mt-10 mb-40" />
            <h2 id="section-2">2. Mis on kliimamuutuste tagajärjed?</h2>
            
            <p>Valitsustevaheline kliimamuutuste nõukogu (IPCC), kuhu kuulub rohkem kui 1300 teadlast Ameerika Ühendriikidest ja teistest riikidest, viitab asjaolule, et kliimamuutuste mõju ulatus üksikutele piirkondadele on ajas erinev, mis sõltub ühtlasi erinevate ühiskonna- ja keskkonnasüsteemide võimest neid leevendada ja muutustega kohaneda.</p>
            
            <p>
                <b>Kliimamuutuste mõjud on erinevad ja hõlmavad järgmist:</b>
            </p>
            
            
            <ul>
                <li>
                    Globaalne temperatuuritõus: arvestades maailma ookeanide tohutut suurust ja soojusmahtuvust, kulub Maa  aastase keskmise pinnatemperatuuri kasvõi väheseks tõstmiseks tohutul hulgal soojusenergiat. Ligikaudu 2 kraadi Fahrenheiti (1 kraadi Celsiuse järgi) tõus võib tunduda väike tõus globaalses keskmises pinnatemperatuuris, mis on toimunud alates tööstuslikust ajastust (1880-1900), kuid see tähendab akumuleeritud soojuse märkimisväärset suurenemist.
                </li>
                <li>
                    Meretaseme tõus
                    <UiContentImage
                        src="https://evidence.onkel.ee/assets/c-change__sea-level-rise.webp"
                        credits="From NOAA Climate.gov image based on analysis and data from Philip Thompson, University of Hawaii Sea Level Center"
                        :elevated="true" class="mt-8">
                        <template #caption>
                            <b>Joonis 3.</b> Meretaseme tõus aastast 1995-2020
                        </template>
                    </UiContentImage>
                </li>
                <li>
                    Kahanevad/sulavad mägiliustikud.
                </li>
                <li>
                    Jää sulab tavapäraselt kiiremini nii Gröönimaal, Antarktikas kui ka Arktikas.
                </li>
                <li>
                    Põuad või suurenenud sademete hulk olenevalt piirkonnast.
                </li>
                <li>
                    Mõned laborikatsed näitavad, et kõrgenenud CO₂ tase võib taimede kasvu kiirendada. Kuid muud tegurid, nagu muutuv temperatuur, osoon ning piirangud veele ja toitainetele, võivad takistada saagikuse võimalikku suurenemist. Kui mõne põllukultuuri optimaalseid temperatuurivahemikke ületatakse, võib võimalik saagikuse kasv hoopis väheneda või saagikus hoopis väheneda.
                </li>
                <li>
                    Äärmuslikud kliimatingimused, nagu põuad, üleujutused ja äärmuslikud temperatuurid, võivad põhjustada saagikadu ning ohustada põllumajandustootjate elatist ja kogukondade toiduga kindlustatust kogu maailmas. Sõltuvalt põllukultuurist ja ökosüsteemist võivad soojemate temperatuuride juures hakata kiiremini arenema ka umbrohud, kahjurid ja seened. Niiskem kliima ja suurenenud CO₂ tase loovad head tingimused ka umbrohtude ja ka kahjurite arvukuse suureneminele.
                </li>
                <li>
                    Uuringud on näidanud, et kliimamuutused võivad vähendada ka enamiku toidukultuuride toiteväärtust, vähendades valgu ja oluliste mineraalide kontsentratsiooni enamikus taimeliikides.
                </li>
                <li>
                    Muutused lillede ja taimede õitsemise aegades.
                </li>
                <li>
                    Ookeani ökosüsteemides toimuvad juba ulatuslikud muutused ja kriitilised läved saavutatakse eeldatavasti globaalse soojenemise 1,5°C ja kõrgema taseme juures.
                </li>
                <li>
                    Muutuv kliima põhjustab otseselt ja kaudselt stressi loomadele kogu maailmas. Paljud liigid lähenevad või on juba jõudnud kriitilise piirini. Polaaraladel on sellisteks loomadeks jääkarud, kellel on juba praegu raskusi ellujäämisega, kuna jää (nende elupaik) sulab.
                </li>
                <li>
                    Ookeani temperatuuri tõus sulatab polaarjääd, nihutab ookeanihoovusi, mõjutab kalade rännet ning põhjustab korallide pleekimist ja suremist. Kuna ookeanid mängivad olulist rolli Maa kliima reguleerimisel ning kasvuhoonegaaside neeldumisel, mõjutavad kliimamuutused neid otseselt ning suurel määral.
                </li>
                <li>
                    Kohalike liikide kadumine ja sellest tulenevalt liikide väljasuremise oht on 1,5°C ja 2°C soojema maa temperatuuri tõusu juures väike.
                </li>
                <li>
                    Igasugune globaalne temperatuuri tõus (nt +0,5°C) mõjutab eeldatavasti inimeste tervist negatiivselt.
                </li>
                <li>
                    Kliimamuutuste mõjudest tulenevad globaalse majanduskasvu riskid on prognooside kohaselt selle sajandi lõpuks temperatuuril 1,5°C madalamad kui 2°C juures.
                </li>
            </ul>


            <section class="e-card mt-8">
                <h4 class="mt-2">Kasutatud allikad:</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://climatekids.nasa.gov/climate-change-meaning/" target="_blank" rel="noopener noreferrer">https://climatekids.nasa.gov/climate-change-meaning/</a></li>
                    <li><a href="https://climate.nasa.gov/effects/" target="_blank" rel="noopener noreferrer">https://climate.nasa.gov/effects/</a></li>
                    <li><a href="https://www.un.org/en/climatechange/what-is-climate-change" target="_blank" rel="noopener noreferrer">https://www.un.org/en/climatechange/what-is-climate-change</a></li>
                    <li><a href="https://www.un.org/en/global-issues/climate-change" target="_blank" rel="noopener noreferrer">https://www.un.org/en/global-issues/climate-change</a></li>
                    <li><a href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature" target="_blank" rel="noopener noreferrer">https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature</a></li>
                    <li><a href="https://www.nature.org/en-us/what-we-do/our-priorities/tackle-climate-change/climate-change-stories/climate-change-frequently-asked-questions/#threats" target="_blank" rel="noopener noreferrer">https://www.nature.org/en-us/what-we-do/our-priorities/tackle-climate-change/climate-change-stories/climate-change-frequently-asked-questions/#threats</a></li>
                    <li><a href="https://www.ipcc.ch/sr15/chapter/chapter-3" target="_blank" rel="noopener noreferrer">https://www.ipcc.ch/sr15/chapter/chapter-3</a></li>
                    <li><a href="https://www.youtube.com/watch?v=rVjp3TO_juI&t=3s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=rVjp3TO_juI&t=3s</a></li>
                    <li><b>Ramanathan, V.</b>, <b>Feng, Y.</b> (2009). Air pollution, greenhouse gases and climate change: Global and regional perspectives. Atmospheric environment, 43(1), 37-50.</li>
                </ul>
            </section>

        
        










            <hr class="mt-10 mb-40" />
            <h2 id="section-3">3. Kliimamuutus: Sotsiaalteaduslik ja vastuoluline probleem</h2>

            <p>Teaduse ajaloos on olnud palju näiteid, kus laiema elanikkonnani levisid/levivad vastuolulised seisukohad konkreetsetes teadusalastes küsimustes. Kliimamuutused on üks selline näide. Kuigi kliimateadus on nüüdseks kindlalt kinnitanud, et globaalne soojenemine toimub ning et inimtegevusel on selles oluline roll avaldades  negatiivset mõju nii ökoloogilistele kui ka sotsiaalsetele süsteemidele (National Research Council, 2010). Majanduslikult edukatest riikidest on USA avalikkus eniselt ambivalentne või siis muretu (Leiserowitz, Maibach, Roser-Renouf, & Hmielowski, 2012) ning ka paljud poliitikakujundajad (eriti USA-s) eitavad vajadust astuda samme süsinikdioksiidi heitkoguse vähendamiseks (Brownstein, 2010).</p>

            <p>Kliimateaduse eitajad ei aktsepteeri tõendeid, mis toetavad kliimamuutuste olemasolu, inimkonna rolli globaalse soojenemise põhjustamisel ja/või kliimamõjude tõsidust. Skeptisism, polariseeritus, eriarvamused, kahtlused või kliimamuutuste vastane suhtumine on mõned terminid, mida on kasutatud kliimateaduse eituste iseloomustamiseks (Cook, 2017).</p>

            <p>Kliimaalast väärinfot põhjustavad avalikkuses esinevad väärarusaamad kliimamuutuste olemuse kohta (McCright and Dunlap, 2010). Sellest tingitult  ringleb kliimamuutustega seoses mitmeid küsimusi nt:</p>

            <ul>
                <li>
                    Kas Maa temperatuuri tõus põhjustab süsihappegaasi tõusu või süsihappegaasi tõus põhjustab Maa temperatuuri tõusu?
                </li>
                <li>
                    Kas inimtegevuse tulemusena tekib sama suur kogus, vähem või rohkem süsihappegaasi kui looduslike protsesside läbi?
                </li>
                <li>
                    Kas kliima muutub aja jooksul? Kui jah, siis kas kliimamuutus on ajutine muutus nagu on olnud varasemad?
                </li>
                <li>
                    Kas liikide massiline väljasuremine on tänapäeval kliimamuutuste tagajärg või tavaline nähtus aastate jooksul, mis puudutab inimesi, kes on mures maa tuleviku ja järgmiste põlvkondade pärast?
                </li>
            </ul>

            <p>
                Igal juhul mängib massimeedia kliimamuutuste debatis keskset roll mõjutades  nii poliitilisi arutelusid kui ka kokkuvõttes, kliimateadusi.
            </p>

            <section class="e-card mt-8">
                <h4 class="mt-2">KAsutatud allikad</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.youtube.com/watch?app=desktop&v=u9KxE4Kv9A8" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?app=desktop&v=u9KxE4Kv9A8</a></li>
                    <li><a href="https://www.researchgate.net/publication/274306932_Climate_Change_Skepticism_and_Denial_An_Introduction" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/publication/274306932_Climate_Change_Skepticism_and_Denial_An_Introduction</a></li>
                    
                    <li><b>Karakas, L. D.</b>, & <b>Mitra, D.</b> (2020). Believers vs. deniers: Climate change and environmental policy polarization. European Journal of Political Economy, 65, 101948.</li>
                    <li><b>Corry, O.</b>, & <b>Jørgensen, D.</b> (2015). Beyond ‘deniers’ and ‘believers’: Towards a map of the politics of climate change. Global Environmental Change, 32, 165-174.</li>
                    <li><b>Cook, J.</b> (2017). Understanding and countering climate science denial. Journal & Proceedings of the Royal Society of New South Wales, 150.</li>
                    <li><b>McCright, A. M.</b> & <b>Dunlap, R. E.</b> (2010). Anti-reflexivity: The American conservative movement’s success in undermining climate science and policy. Theory, Culture & Society, 27(2-3), 100-133.</li>
                </ul>
            </section>


             
















            <hr class="mt-10 mb-40" />
            <h2 id="section-4">4. Teaduse eitamise taktikad</h2>

            
            <p>Erinevate liikumiste hulgas, mis üritavad kummutada teaduslikku konsensust, täheldatakse viit teaduse eitamise taktikat:</p>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/c-change__flicc.webp"
                credits=""
                :elevated="true" class="mt-8">
                <template #caption>
                </template>
            </UiContentImage>
            

            <dl>
                <dt class="font-bold">
                    Võltseksperdid:
                </dt>
                <dd>
                    Selle all mõeldakse kõneisikuid, kes jätavad mulje, et on antud teemal asjatundjad, kuid tegelikult seda pole. Globaalse soojenemise petitsiooniprojekt, milles koguti 31 000 allkirja online-petitsioonile, väljendamaks eriarvamust inimtekkeliste kliimamuutuste suhtes, on selle strateegia kõige eredam naäide.  Nimelt oli 99,9% allakirjutanutest küll teaduskraad, kuid mitte kliimateadustes. See petitsioon on katseliselt leitud olevat üks tõhusamaid klöiimamuutuste eituse  alaseid liikumisi, millel oli reaalne mõju ühiskondliku arvamuse kujunemisele. 
                </dd>
                <dt class="font-bold mt-4">
                    Loogikavead:
                </dt>
                <dd>
                    Inimeste veenmiseks mõeldud argumendid koosnevad ühest või mitmest eeldusest,  mis viivad järeldusteni. Teaduse eitamise argumendid sisaldavad tavaliselt olulisi loogilisi vigu:
                    <ul>
                        <li>
                            eeldused on järelduse jaoks ebaolulised, 
                        </li>
                        <li>
                            kõiki asjakohaseid tõendeid ei võeta arvesse ning 
                        </li>
                        <li>
                            kui argument sisaldab valesid eeldusi.
                        </li>
                    </ul>
                </dd>
                <dt class="font-bold mt-4">
                    Võimatud ootused:
                </dt>
                <dd>
                    See hõlmab ebarealistlike tõendite nõudmist või ebaõiget arusaamist teadusliku määramatuse olemusest. Kuna teadus on tavaliselt tõenäosuslik, on absoluutse teadusliku kindluse nõudmine tõhus meetod teadusliku tõestusmaterjali kahtluse alla seadmiseks. 
                </dd>
                <dt class="font-bold mt-4">
                    Kirsside noppimine:
                </dt>
                <dd>
                    Seda strateegiat määratletakse kui “selektiivset andmete valimist, mis viib soovitud järelduseni, mis erineb kõigist saadaolevatest andmetest tulenevatest järeldustest”. 
                </dd>
                <dt class="font-bold mt-4">
                    Vandenõuteooriad:
                </dt>
                <dd>
                    Umbes 20% USA avalikkusest usub, et kliimamuutused on teaduslik pettus. Vandenõuteooriatel on mitmeid negatiivseid mõjusid, isegi kui need inimesi ei veena. Need võivad vähendada toetust kliimameetmetele, vähendada kavatsust vähendada oma süsinikujalajälge ja vähendada usaldust valitsuse vastu.
                </dd>
            </dl>

 
            <section class="e-card mt-8">
                <h4 class="mt-2">KAsutatud allikad</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.youtube.com/watch?v=uNs2YMblqwU&ab_channel=JohnCook" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=uNs2YMblqwU</a></li>
                    <li><a href="https://www.youtube.com/watch?v=AqcUP0sDglg" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=AqcUP0sDglg</a></li>
                    <li><a href="https://www.youtube.com/watch?v=wXA777yUndQ" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=wXA777yUndQ</a></li>
                    <li><a href="http://www.petitionproject.org/" target="_blank" rel="noopener noreferrer">http://www.petitionproject.org</a></li>
                </ul>
            </section>
 
 



















            <h1 class="mt-40">Kliimamuutustega seotud müüdid</h1>

            <hr id="myth-1" class="mt-10 mb-40" />
            <h2 id="section-5">Müüt 1: Liigid suudavad kliimamuutustega kohaneda.</h2>

            <p>Ilmastikutingimused on meie planeedil olnud pidevas muutumises. Seetõttu on maa peal elanud organismid sunnitud ellujäämiseks uute tingimustega kohanema. Tulemuseks on liikide evolutsioon ning areng.</p>
            <p>Taimed ja loomad on juba mitu korda ebasoodsate tingimustega (nt. kliimamuutus, meteoriidi langemine, vulkaanipursked jne) kohanenud. See võimaldab neil kohaneda tõusvate temperatuuridega ja olukorraga, mida me praegu nimetame kliimamuutusteks. Teisisõnu, liigid on looduslikult võimelised uutes tingimustes ellu jääma.  Korallid, puud, linnud, imetajad ja liblikad kohanevad hästi kliimamuutustega (Hudsoni instituut).</p>
            <p><a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a></p>





            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Teaduslik arusaam müüdi 1 paikapidavuse kohta:</h3>
                    <p class="font-Heading text-2xl"><i>“Kõik liigid ei suuda kliimamuutustega kohaneda. Mõned liigid (nt linnud) võivad kliimamuutustega kohaneda erineval viisil (nt muuta rände- või pesitsusaega). Kuid mitte kõik liigid (nt imetajad) ei saa seda teha. Samuti ei ole võimalik kiiresti saavutada igasuguseid muutusi (nt morfoloogiliste omaduste muutumine). Üldiselt ei saa evolutsioon kiiresti toimudaehk liikide kohanemise määr on enamasti ebapiisav. 
                    <br />
                    (Visser, 2008)”</i></p>
                </div>
            </UiCardInfo>
            


            

            <p>Õpilased, kes uurivad müüti 1 juhendatud uurimuse vormis, uurivad tõendeid selle kohta, kuidas liigid kliimamuutustega kohanevad (nt korallijuhtum), nad osalevad konkreetses korallide massimuutusi uurivas katses ning vaatlevad hiljutisi tõestusmaterjale kliimamuutuste mõju kohta imetajatele. Õpilased uurivad teadusallikaid ja teevad oma järeldused. Teise võimalusena koguvad õpilased, kes uurivad müüti 1 avatud uurimuse vormis, teaduslikest allikatest tõendeid, et oma hüpoteesi ümber lükata või kinnitada.</p>
            
            <p>Mõlema uurimisvormi puhul tutvuvad õpilased teadusallikatega ning  teevad nende põhjal omad järeldused.</p>


            <p><b>Teaduslikku arusaama antud müüdi kohta esindavad järgmised allikad:</b></p>
            <ul>
                <li>
                    <a href="https://www.nationalgeographic.com/science/article/mass-extinction" target="_blank" rel="noopener noreferrer">Mass extinction facts and information from National Geographic</a>
                </li>
                <li>
                    <a href="https://www.nationalgeographic.com/animals/article/vanishing-what-we-lose-when-an-animal-goes-extinct-feature" target="_blank" rel="noopener noreferrer">What we lose when animals go extinct</a>
                </li>
            </ul>








            

            









            <hr id="myth-2" class="mt-10 mb-40" />
            <h2 id="section-6">Müüt 2: Liikide väljasuremine on loomulik protsess. Liikide massiline väljasuremine on alati toimunud.</h2>

            <p>Liikide väljasuremine on ajalooline probleem. eelajaloolistest aegadest on meil tõendeid mitme massilise väljasuremise kohta, eriti dinosauruste väljasuremise kohta. See väljasuremine, mis leidis ased 66000000 aastata tagasi, oli tingitud asteroidi kokkupõrkest Maaga. Aastate jooksul on meil teisigi tuntuid näiteid, nagu mammutite väljasuremine. Väljasuremise põhjused on erinevad.</p>
            <p>Ka vihje sellele, et inimkond on võimeline mõjutama ja häirima sellise ulatusega jõude, peegeldab vaid inimeste enesekeskset ülbust. Inimkond on looduse osa. Loodus ei ole inimese osa. Inimesed ei saa neid protsesse parandada ega neisse sekkuda.</p>
            <p><a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a></p>


            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Teaduslik arusaam müüdi 2 paikapidavuse kohta:</h3>
                    <p class="text-2xl">Tänapäeval toimuvad väljasuremised sadu kordi kiiremini kui loomulikult. See on tingitud inimeste põhjustatud kliimamuutustest.</p>
                </div>
            </UiCardInfo>

            <p>Õpilased, kes uurivad müüti 1 juhitud uurimuse vormis, uurivad tõendeid varasemate massiliste väljasuremiste kohta. Samuti uurivad nad uusimaid tõendeid konkreetsete kliimamuutustest põhjustatud väljasuremiste (nt Magellani pingviinide) kohta ja vaatavad BBC videot massiliste väljasuremiste kohta. Teise võimalusena koguvad õpilased avatud uurimuse vormis tõendeid teaduslikest allikatest, et oma hüpoteesi ümber lükata või kinnitada.</p>
            <p>Mõlema uurimisvormi korral tutvuvad õpilased teadusallikatega ning  teevad nende põhjal omad järeldused.</p>


            <p><b>Teaduslike arusaamade kohta leiab infot järgmistest allikatest:</b></p>
            <ul>
                <li>
                    <a href="https://www.nationalgeographic.com/environment/article/many-animals-can-adapt-climate-change-just-not-fast-enough-" target="_blank" rel="noopener noreferrer">Some animals can adapt to climate change—just not fast enough</a>
                </li>
                <li>
                    <b>Visser, M. E.</b> (2008). Keeping up with a warming world; assessing the rate of adaptation to climate change. Proceedings of the Royal Society B: Biological Sciences, 275(1635), 649-659.
                </li>
            </ul>













            <hr id="myth-3" class="mt-10 mb-40" />
            <h2 id="section-7">Müüt 3: Kliimamuutuste alane teadus ei ole usaldusväärne.</h2>


            <p>
                <i>
                    “Mudelid on täis tegureid, mis on kohandatud olemasoleva kliimaga, seega mudelid enam-vähem nõustuvad vaadeldavate andmetega. Kuid pole põhjust arvata, et samad võltstegurid käituksid õigesti maailmas, mille atmosfääris on suurenenud CO2 sisaldus.”
                </i>
                <br />
                (Freeman Dyson)
            </p>

            <p>
                <i>
                    “Leidsime [USA] ilmajaamad, mis asuvad kliimaseadmete väljatõmbeventilaatorite kõrval, mis on ümbritsetud asfaltparklate ja teedega, kuumadel katustel ning kõnniteede ja hoonete läheduses, mis neelavad ja kiirgavad soojust. Leidsime 68 ilmajaama, mis asuvad reoveepuhastitega samal aadressil, kus jäätmete kääritamise protsess põhjustab ümbritsevate piirkondadega võrreldes kõrgemat temperatuuri.
                    <br />
                    Tegelikult leidsime, et 89 protsenti ilmajaamadest - peaaegu 9 kümnest - ei vasta riiklikult kehtestatud asukoha nõuetele, mille kohaselt peavad ilmajaamad olema 30 meetri (umbes 100 jalga) või kaugemal kunstlikust kütte- või kiirgavast/peegeldavast allikast/soojusallikast.”</i> (Watts 2009)
                    <br />
                <a href="https://skepticalscience.com/surface-temperature-measurements-basic.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/surface-temperature-measurements-basic.htm</a>
            </p>


            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Teaduslik arusaam müüdi 4 paikapidavuse kohta:</h3>
                    <p class="text-2xl">Kliimamuutustega seotud tõendid pärinevad aastakümneid kestnud intensiivsetest uuringutest ning põhinevad vaatlustel, väli- ja laborikatsetel ning simulatsioonimudelitel (Higgins, 2019). On meelevaldne arvata, et teaduslikud andmed kliimamuutuste kohta on ebausaldusväärsed.</p>
                </div>
            </UiCardInfo>

            <p>Õpilased, kes uurivad müüti 4 juhendatud uurimuse vormis, uurivad NOAA-lt pärinevaid konkreetseid tõendeid (nt vaatlusjaamade asukohtade ja mõõtmiste kohta), et teha ise järeldusi nende usaldusväärsuse kohta. Teise võimalusena koguvad õpilased avatud uurimuse vormis teaduslikest allikatest tõendeid, et oma hüpoteesi kas ümber lükata või kinnitada.</p>
            <p>Mõlema uurimisvormi korral tutvuvad õpilased teadusallikatega ning  teevad nende põhjal omad järeldused.</p>


            <p><b>Teaduslikku arusaama antud müüdi kohta esindavad järgmised allikad:</b></p>
            <ul>
                <li>
                    <a href="https://www.ametsoc.org/ams/assets/File/Climate_Assessment_Credibility_10-2019.pdf" target="_blank" rel="noopener noreferrer">Climate_Assessment_Credibility_10-2019.pdf (ametsoc.org)</a>
                </li>
                <li>
                    <a href="https://gml.noaa.gov/" target="_blank" rel="noopener noreferrer">NOAA ESRL Global Monitoring Laboratory</a>
                </li>
            </ul>
















            <hr id="myth-4" class="mt-10 mb-40" />
            <h2 id="section-8">Müüt 4: Globaalne soojenemine on kasulik.</h2>
            
            <p><i>"Kui kavatsete millegi poolt hääletada, siis hääletage soojenemise poolt. Vähem külma tõttu hukkunuid, piirkonnad on elamiskõlblikumad, suurem saak ja pikem kasvuperiood. See on hea. Soojenemine aitab vaeseid."</i> (John MacArthur)</p>

            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s</a>
                </li>
                <li>
                    <a href="https://skepticalscience.com/global-warming-positives-negatives.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/global-warming-positives-negatives.htm</a>
                </li>
            </ul>

             
            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Teaduslik arusaam müüdi nr 4 paikapidavuse kohta:</h3>
                    <p class="text-2xl">Müüt 4 põhineb ainult ülaltoodud John MacArthuri väitel. Teaduslikud tõendid näitavad täpselt vastupidist. Kliimamuutus (kuumus)suurendab otseselt inimeste surmade arvu. Kliimamuutused on üks ühiskonda, keskkonda, majandust ja rahvatervist mõjutavate globaalsete muutuste põhjuseid.</p>
                </div>
            </UiCardInfo>

            <p>Õpilased, kes uurivad müüti 6 juhitud uurimuse vormis, uurivad Maailma Terviseorganisatsiooni konkreetseid tõendeid temperatuuri tõusu ja inimeste surmade kohta, hiljutisi tõendeid kliimamuutustest mõjutatud inimsurmade kohta, viivad läbi eksperimendi temperatuuri tõusu ja elamuks või harimiseks kasutatava maa seoste kohta. Õpilased pääsevad ligi teaduslikule allikale ja teevad oma järeldused. Teise võimalusena koguvad õpilased, kes uurivad müüti 6 avatud uurimuse vormis, teaduslikest allikatest tõendeid, et oma hüpoteesi ümber lükata või kinnitada.</p>
            <p>Mõlema uurimisvormi  korral tutvuvad õpilased teadusallikatega ning  teevad nende põhjal omad järeldused.</p>

            <p><b>Teaduslikku arusaama antud müüdi kohta esindavad järgmised allikad:</b></p>
            <ul>
                <li>
                    <a href="https://www.epa.gov/climate-indicators/climate-change-indicators-heat-related-deaths#:~:text=Some%20statistical%20approaches%20estimate%20that,set%20shown%20in%20Figure%201" target="_blank" rel="noopener noreferrer">Climate Change Indicators: Heat-Related Deaths</a>
                </li>
                <li>
                    <a href="https://health2016.globalchange.gov/low/ClimateHealth2016_FullReport_small.pdf" target="_blank" rel="noopener noreferrer">The Impacts Of Climate Change On Human Health In The United States</a>
                </li>
                <li>
                    Ajakirjas Scientific American avaldatud 2009. aasta <a href="http://www.scientificamerican.com/article/global-warming-and-health/" target="_blank" rel="noopener noreferrer">artikli kohaselt</a> leidis Maailma Terviseorganisatsiooni (WHO) kliimamuutuste uurijate rühm, et "globaalne soojenemine on [vastutav] igal aastal umbes 150 000 surmajuhtumi eest kogu maailmas"; nad kartsid, et see arv kahekordistub aastaks 2030. 
                </li>
            </ul>

 
     














            <hr id="myth-5" class="mt-10 mb-40" />
            <h2 id="section-9">Müüt 5: CO₂ ning temperatuuri vahel puudub seos.</h2>
            
            <p>
                <i>“Kahekümnenda sajandi globaalne soojenemine algas alles 1910. aastal. Selleks ajaks oli süsinikdioksiidi heitkogus juba tõusnud tööstusrevolutsiooni käivitatud söe laialdasest kasutamisest ja heitkogused kasvasid aeglaselt 3,5 gigatonnilt 1910. aastal alla 4 gigatonnini Teise Maailmasõja lõpuks.
                <br />
                Just sõjajärgne industrialiseerimine põhjustas globaase CO₂ heitkoguse kiire tõusu, kuid 1945. aastaks oli Maa juba jahtumisfaasis, mis algas umbes 1942. aasta paiku ja kestis kuni 1975. aastani. 32 aastat kestnud kiirele globaalsele temperatuuri tõusule ja vaid väikesele CO₂ heitkoguse suurenemisele järgnes 33 aastat aeglast globaalse temperatuuri langust koos CO₂ heitkoguse kiire suurenemisega. Järelikult oli IPCC poolt petlik väita, et CO₂ heitkoguste suurenemine oli 20. sajandi globaalse soojenemise peamiseks põhjuseks."</i>
                <br />
                (<a href="https://archive.md/q3Tim" target="_blank" rel="noopener noreferrer">Norm Kalmanovitch</a>)
                <br />
                <a href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
            </p>

            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Teaduslik arusaam müüdi nr 5 paikapidavuse kohta:</h3>
                    <p class="text-2xl">
                        <i>“Viimase 800 000+ aasta paleoklima andmed näitavad, et seos temperatuuri ja CO₂ vahel on selgelt tuvastatav. Wellingtoni Victoria ülikooli professori James Renwick’i sõnul on teadlased avastanud CO₂ rolli planeedi soojendamises juba 19. sajandi keskel. Viimase 2,6 miljoni aasta jooksul, viimaste jääaegade perioodi jooksul, on süsinikdioksiidi sisaldus tõusnud ja langenud koos temperatuuriga, saavutades põhja umbes 180 ppm-i jääaja maksimumi sügavustes ja haripunkti umbes 280 ppm-i juures soojematel interglatsiaalsetel perioodidel, ütleb ta ülevaates. "Kui minna tagasi, siis CO₂ tase oli kindlasti praegusest kõrgem, aga ka temperatuurid." Teadlased on kindlad, et suurenenud CO₂ kontsentratsioon põhjustab Maa temperatuuri tõusu. Kuna CO₂ ja muud kasvuhoonegaasid paisatakse atmosfääri, püüavad need kinni suurema osa päikeseenergiast, põhjustades soojenemist. "On selge, et inimmõju on atmosfääri, ookeani ja maad soojendanud,”</i> märgib IPCC oma kuuendas hindamisaruandes.
                    </p>
                </div>
            </UiCardInfo>
            
            <p>
                Õpilased, kes uurivad müüti 5 juhitud uurimuse vormis, uurivad tõendeid selle kohta, kuidas süsinik mõjutab kliimat ja elu Maal. Nad viivad ka läbi eksperimendi, milles uuritakse, kuidas süsinikdioksiid mõjutab temperatuuri Maal. Teise võimalusena koguvad õpilased avatud uurimuse vormis teaduslikest allikatest tõendeid, et oma hüpoteesi ümber lükata või kinnitada. 
                <br />
                Mõlema uurimisvormi korral tutvuvad õpilased teadusallikatega ning  teevad nende põhjal omad järeldused. 
            </p>

            <p><b>Click the following links for the scientific view:</b></p>
            <ul>
                <li>
                    <a href="https://climatefeedback.org/claimreview/link-between-co2-earth-temperature-well-established-despite-claims-fox-news-tom-harris/" target="_blank" rel="noopener noreferrer">https://climatefeedback.org/claimreview/link-between-co2-earth-temperature-well-established-despite-claims-fox-news-tom-harris/</a>
                </li>
                <li>
                    <a href="https://cires.colorado.edu/outreach/resources/lesson/how-does-increase-co2-cause-increase-temperature" target="_blank" rel="noopener noreferrer">https://cires.colorado.edu/outreach/resources/lesson/how-does-increase-co2-cause-increase-temperature</a>
                </li>
            </ul>



            








            <hr id="myth-6" class="mt-10 mb-40" />
            <h2 id="section-10">Müüt 6: Kliimamuutustega seotud meetmed muudavad inimesed vaesemaks.</h2>

            <p>
                <i>
                    “Eitajad kahtlevad, kas kasvuhoonegaaside heitkoguste vähendamise jõupingutused fossiilkütuste kasutamise vähendamiseks on ülemaailmse arengu jaoks hädavajalikud. See on levinud arvamus, et taastuvenergia on kallis. Tuuleenergia on kalleim viis energia tootmiseks kui alternatiivid.”
                </i>
                <br />
                (David Montgomery)
            </p>

            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Teaduslik arusaam antud müüdi 6 kohta:</h3>
                    <p class="text-2xl">
                        Vaesust suurendavad kliimamuutused, mitte meetmed selle leevendamiseks.
                    </p>
                    <p class="text-2xl">
                        Kliimamuutuste mõjud ja vaeste kogukondade haavatavus kliimamuutuste suhtes võib olla väga mitut liiki. Kliimamuutused vähendavad veelgi juurdepääsu joogiveele, mõjutavad negatiivselt vaeste inimeste tervist ja kujutavad endast reaalset ohtu toiduga kindlustatusele paljudes Aafrika, Aasia ja Ladina-Ameerika riikides. Mõnes piirkonnas, kus elatusvahendite valikud on piiratud, ähvardab saagikuse vähenemine näljahäda ning seal, kus rannikualadel on oodata maa kadumist, võib ränne olla ainus lahendus. Kliimamuutuste mõjude makromajanduslikud kulud on väga ebakindlad, kuid tõenäoliselt võivad need ohustada paljude riikide arengut. Seetõttu on eesseisev ülesanne suurendada mõjutatud vaeste kogukondade ja riikide kohanemisvõimet.
                        <br />
                        Otsus keskenduda kohanemisele on tahtlik ja tehtud arusaamisega, et kohanemine ei saa asendada leevendamispüüdlusi. Kliimamuutuste ulatus ja kiirus sõltuvad suuresti jõupingutustest vähendada kasvuhoonegaaside (KHG) kontsentratsiooni atmosfääris. Mida kõrgem on kasvuhoonegaaside kontsentratsioon, seda suurem on inimeste ja bioloogiliste süsteemide pöördumatute ja tõsiste kahjustuste tõenäosus. Seetõttu on kohanemine vaid üks osa lahendusest. Teine asendamatu osa on kliimamuutuste leevendamine kasvuhoonegaaside kontsentratsiooni piiramisega atmosfääris.
                    </p>
                </div>
            </UiCardInfo>

            <p>
                Õpilased, kes uurivad müüti 5 juhitud uurimuse vormis, otsivad tõendeid taastuvelektri kasutamisele ülemineku majandusliku kasu, erinevate energiaallikate kasutamise eelseisvate mõjude ja taastuvate energiaallikate kasutamisega kaasnevate töökohtade kohta. Teise võimalusena koguvad õpilased, kes uurivad müüti 5 avatud uurimuse vormis, teaduslikest allikatest tõendeid, et oma hüpoteesi ümber lükata või kinnitada.
                <br />
                Mõlema uurimisvormi korral tutvuvad õpilased teadusallikatega ning  teevad nende põhjal omad järeldused.
            </p>


            <p><b>Teaduslikku arusaama antud müüdi kohta esindavad järgmised allikad:</b></p>
            <ul>
                <li>
                    <a href="https://www.oecd.org/env/cc/2502872.pdf" target="_blank" rel="noopener noreferrer">https://www.oecd.org/env/cc/2502872.pdf</a>
                </li>
                <li>
                    <a href="https://ec.europa.eu/research-and-innovation/en/horizon-magazine/climate-actions-lift-people-out-poverty-are-often-most-cost-effective" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/research-and-innovation/en/horizon-magazine/climate-actions-lift-people-out-poverty-are-often-most-cost-effective</a>
                </li>
                <li>
                    <a href="https://www.actionaid.org.uk/our-work/emergencies-disasters-humanitarian-response/climate-change-and-poverty" target="_blank" rel="noopener noreferrer">https://www.actionaid.org.uk/our-work/emergencies-disasters-humanitarian-response/climate-change-and-poverty</a>
                </li>
            </ul>


            












            <hr id="myth-7" class="mt-10 mb-40" />
            <h2 id="section-11">Müüt 7: Maa kliima on alati muutunud ja nüüd kordub see taas.</h2>

            <p>
                <i>
                    “Kliima muutub alati. Meil on olnud jääaegu ja soojemaid perioode, mil Teravmägedest leiti alligaatoreid. Jääajad on toimunud saja tuhande aastase tsükliga viimase 700 tuhande aasta jooksul ning varasemad perioodid on olnud praegusest soojemad, kuigi  CO₂ tase on praegusest madalam. viimasel ajal on meil olnud keskaegne soe periood ja väike jääaeg.”
                </i>
                <br />
                (<a href="http://www.quadrant.org.au/blogs/doomed-planet/2009/07/resisting-climate-hysteria" target="_blank" rel="noopener noreferrer">Richard Lindzen</a>)
                <br />
                <a href="https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm</a>
            </p>
            
            
            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Teaduslik arusaam müüdi nr. 7 paikapidavuse kohta:</h3>
                    <p class="text-2xl">
                        Suurimad globaalsed kliimamuutused Maa lähimas geoloogilises minevikus on jääaja tsüklid, millele järgnevad lühemad soojaperioodid. Mõned viimased neist looduslikest tsüklitest on kordunud ligikaudu iga 100 000 aasta tagant. CO2 sisaldus on viimase 200 aastaga tõusnud enam kui 40%, millest suur osa alates 1970. aastatest, põhjustades inimtekkelist energiabilansi muutumist Maal  1 °C võrra  (1,8 °F). Kui CO2 kasv jätkub pidurdamatult, võib selle sajandi lõpuks või varsti pärast seda oodata soojenemist, mis on sama suur, kui jääajast väljuv tõus. Selline soojenemise kiirus on üle kümne korra suurem kui see oli jääaja lõpus, mis on maailma mastaabis kiireim teadaolev looduslik püsiv muutus.
                    </p>
                </div>
            </UiCardInfo>

            <p>
                Õpilased, kes uurivad müüti 7 juhitud uurimuse vormis, uurivad Maa temperatuuri (NASA tõendid) ja võrdlevad temperatuuri muutusi iga kahekümne aasta tagant. Nad selgitavad välja suurimad temperatuuritõusud ja salvestavad nende kohta konkreetset teavet. Teise võimalusena koguvad õpilased avatud uurimuse vormis teaduslikest allikatest tõendeid, et oma hüpoteesi ümber lükata või kinnitada.
                <br />
                Mõlema uurimisvõimaluse puhul pääsevad õpilased juurde teaduslikele allikatele ja teevad oma järeldused.
            </p>

            
 


        </section>
    </div>
</template>