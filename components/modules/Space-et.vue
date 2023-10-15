<script setup>
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();
    // const showSpaceExplorationDebate = ref(false);
    
    const toggleModal = (modalName) => {
        userPrefs.toggleModal(modalName);
    }

</script>

<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <!-- <ClientOnly> -->
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="space-et" />
        <!-- </ClientOnly> -->
        


        <section class="e-article print:not-prose" lang="et" style="hyphens: auto;">
            <Icon name="openmoji:teacher-light-skin-tone" class="float-right text-[6em] text-slate-300" />
            <h1 class="mb-0">Kosmos</h1>
            <h5 class="font-normal uppercase leading-tight">Õpetaja materjal</h5>
            

            <section id="s-1">
            <h2 id="s-1-title">Mooduli kirjeldus</h2>
        
            <section class="e-card e-module__meta">
                <table class="m-0 leading-tight">
                    <tr>
                        <td><b>Sihtgrupp:</b></td>
                        <td>Antud õppematerjal on mõeldud nii üld- kui ka kutsekoolide 15–18-aastastele õpilastele.</td>
                    </tr>
                    <tr>
                        <td><b>Eeldatav ajakulu:</b></td>
                        <td>5-6 tundi, à 45 min ja veidi aega kodutöödeks.</td>
                    </tr>
                </table>
            </section>

            <p>
                Kosmos köidab meie kujutlusvõimet juba varasest lapsepõlvest. Küsimused Universumi lõpmatuse, maavälise elu ja kosmosereiside võimalikkuse kohta teistele planeetidele ja kaugemale, erutavad paljusid noori. Üldiselt on lastel kaasasündinud uurimisinstinkt ning suur tahe kogeda ja mõista. Mõned unistavad saada ka kosmoseuurijateks.
            </p>

            <p>
                Kosmosesse reisimine on muutunud harrastusastronautide jaoks juba kättesaadavaks. Mõned kosmoseturistid on käinud Rahvusvahelises Kosmosejaamas (ISS), sealhulgas Anousheh Ansari, kes oli esimeseks Iraani ja moslemi naiseks kosmoses (2006). Kommertsprogrammid on loodud suborbitaalseks lennuks umbes 100 km kõrgusel Maa pinnast. Turistide orbitaallennud ümber Maa nõuavad kosmoselaevalt peaaegu kahekordset kõrgust ning palju rohkem kiirust ja energiat võrreldes eelmistega, kuid neid nähakse ette ka lähitulevikus. Seega võib ka meie tänaste õpilaste seas olla tulevasi professionaalseid ja amatöörastronaute.
            </p>

            <p>
                Meie igapäevaelus levib kosmoselendude kohta suur hulk väärarusaamu, müüte ja vandenõuteooriaid. UFOd, mis meid avakosmosest külastavad ja inimeste Kuule maandumine, mida kunagi pole juhtunud, on vaid kaks teemat mitmetest, mis aeg-ajalt meediasse ilmuvad. Selliste kuulujuttude esinemissagedus ei kao ajaga, sest tänapäeval võib avalikkus sagedamini jälgida ebatavalisi droone ja avaldatakse uusi inimeste Kuule lähetamise programme. Praegune Ameerika “Artemise” projekt ja Hiina kuuprogramm nimega “Chang project” paistavad olevat hakanud võistlema, kes seekord esimesena Kuule maandub ning taas avalikkuse tähelepanu sellega äratab.
            </p>

            <p>
                Paljud meie õpilased tunnevad kosmoselaevade funktsioone tänu arvutimängudele ning koolides või teaduskeskustes kogetud veerakettide startimiskatsetustele. Lühiajalist kaaluta oleku tunnet teavad nad lõbustusparkidest või lennukitest. Tõenäoliselt on mõned neist “käinud” VR-rakenduse abil Rahvusvahelises Kosmosejaamas (ISS) või on näinud viimasest 3D-filmi mõnes teadusmuuseumis.
            </p>

            <p>
                Kosmoseuuringute ajastu algas 1957. aastal esimese satelliidi (Sputnik) Maa ümber orbiidile saatmisega. Tehnoloogia on nende aastate jooksul tohutult arenenud; kosmoseuuringud kulgevad aga prognoositust aeglasemalt, sellega kaasneb palju riske, ebakindlust ja erinevaid tehnikarikked. Hiljutine katse (jaanuar 2023) viia satelliite esimest korda üles Suurbritannia pinnalt, kasutades ettevõtte Virgin Orbit välja töötatud raketiheite tehnoloogiat, ei viinud sihile – hävisid kõik üheksa satelliiti.  Virgini ettevõtte kosmoseturismi divisjon Virgin Galactic, mis on alates 2004. aastast lubanud alustada regulaarseid suborbitaalseid lende kosmoseturistidele, kasutades sarnast starditehnoloogiat, pole seda lubadust veel täitnud. Virgini lähenemine on tõsta kosmoselaev Boeing 747 tiiva all umbes 10 000 m kõrgusele ja seejärel tulistada. See hiljutine Virgini ebaõnnestumine näitab taas, et kosmoseuuringutega kaasnevad alati märkimisväärsed riskid, eriti kosmoselaevade käivitamise ja kosmosemissioonide Maale naasmise käigus. 
            </p>

            <p>
                Selle õppemooduli keskmes ongi inimeste kosmosesse saatmise riskidega seotud küsimused ja nendega seotud moraalsed dilemmad. Selle mooduliga töötades saavad õpetajad teha praktilisi tegevusi ja demonstratsioone, et selgitada nähtusi, kummutada kosmosega seotud müüte või uurida levinud väärarusaamu, kui kooliruumid seda võimaldavad. Vastasel juhul soovitame seda teha tõendite kogumise kaudu usaldusväärsetest teaduslikest ja muudest professionaalsetest teabeallikatest. Õpilased saavad kasutada ka erinevaid andmekogumismeetodeid, rakendades nn triangulatsiooni põhimõtet – tõestusmaterjali valiidsuse suurendamist erinevatest allikatest pärineva info kõrvutamise kaudu.
            </p>

            <p>
                <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">Sissejuhatavas videos</a> tuuakse välja mõningad ideed, väärarusaamad ja müüdid, mida õpilased võiksid rühmades edasi arutada. Õpilasi kutsutakse valima ja selgitama levinumaid kosmosega seotud müüte või väärarusaamu. Eeldatakse, et arutelud viivad usaldusväärsetest allikatest tõendite kogumiseni, et saada põhjalikum ülevaade nähtusest, et kummutada või kinnitada valitud müüdi kehtivust.
            </p>

            <p>
                Inimeste kosmosereisid köidavad ilmselt õpilaste tähelepanu. Mõnda kosmosereiside bioloogilist mõju, nagu kosmoses kohanemise sündroomi (SAS), saab praktiliselt kogeda Maal tsentrifuugimise abil (Sickness Induced by Centrifugation, SIC). Kuid vähesed meist tahaksid ilmselt kokku puutuda tsentrifuugi ja samaaegse pöörlemisega 1G-lt 3G-le (või enam) ja tagasi 1G-le, mis on osa astronautide tavapärasest koolitusest. Sellise kogemuse kerge versioon on saadaval mõnes lõbustuspargis "Insanity Rides 360" kujul.
            </p>

            <p>
                Enamik selles moodulis soovitatud tegevusi tugineb sekundaarsetele tõenditele, mis hangitakse kirjanduse ja Inetiotsingute abil. Nende tegevuste kaudu õpivad õpilased hindama teabeallikate usaldusväärsust ja esitama tõenduspõhiseid argumente. Pärast järelduste tegemist valmistuvad õpilased oma järeldusi klassikaaslastele (või muule publikule) asjakohasel ja veenval viisil (nt videopostituse abil) tutvustama. Mooduli lõpetab rollimäng, kus õpilased peavad tegema sotsiaalteaduslikke otsuseid, kasutades oma loodusteaduslikke teadmisi, ühendades need samal ajal isiklike, moraalsete ja sotsiaalsete väärtustega.
            </p>

            <p>
                Moodul koosneb õpetaja materjalist (õpetamissoovitused, loodusteaduslik taustainfo) ja õpilase materjalist (sissejuhatav video, interaktiivsed töölehed, faktivideod, videoõpetused).
            </p>

        </section>







            

            

            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-2">
            <h2 id="s-2-title">Mooduliga taotletavad õppe-eesmärgid</h2>
            
            <ul>
                <li>
                    <b>Kodanikupädevus:</b> arendada õpilaste teadmisi ja hoiakuid, mis aitavad neil teha vastutustundlikke otsuseid seoses inimeste ja robotite kosmoseuuringutega.
                </li>
                <li><b>Meediapädevus:</b>
                    <ul class="my-0">
                        <li>hinnata teabe usaldusväärsust ning esitada teavet antud auditooriumi jaoks asjakohasel viisil,</li>
                        <li>reageerida asjakohaselt ja vastutustundlikult (sotsiaal)meedias levivatele võltsuudistele ja vandenõuteooriatele.</li>
                    </ul>
                </li>
                <li>
                    <b>Digipädevus:</b> arendada õpilastes digimeedia kasutamise oskusi oma uurimistulemuste tutvustamise kaudu.
                </li>
                <li>
                    <b>Loodusteaduslik pädevus:</b>
                    <ul class="my-0">
                        <li>arendada õpilaste arusaama sellest, kuidas loodusteaduslikud teadmised on tekkinud ja miks me peaksime teadust usaldama;</li>
                        <li>täiendada õpilaste teadmisi kosmoseuuringute plussidest ja miinustest;</li>
                        <li>arendada nende planeerimisoskusi valitud müüdi kontrollimisel ja tulemuste tõlgendamisel.</li>
                    </ul>
                </li>
                <li>
                    <b>Sotsiaalne pädevus:</b> arendada õpilaste argumenteerimisoskusi ja oskust leida rühmas konsensust vastuolulistes kosmosega seotud küsimustes.
                </li>
            </ul>
        </section>

            

        <hr  class="mt-10 mb-40 print:my-10" />

        <section id="s-3">
            <h2 id="s-3-title">
                Eeldatavad eelteadmised
            </h2>

            <ul>
                <li>
                    põhiteadmised mehaanikast ja gravitatsioonist
                </li>
                <li>
                    gaaside ja Maa atmosfääri omadused
                </li>
                <li>
                    erinevad energiavormid
                </li>
                <li>
                    meie Päikesesüsteemi ja Universumi ehitus
                </li>
                <li>
                    teadmised riiklike ja/või ELi kosmoseuuringute programmide kohta
                </li>
            </ul>

            <h3>
                Võimalikud takistused, mida kaaluda
            </h3>
    
            <p>
                Eeldatakse, et õpilastel on Internetis leiduvate teabeallikate usaldusväärsuse hindamise kogemus, vastasel juhul võib selle õpetamine võtta lisaaega.
            </p>
        </section>  







            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-4">
            <h2 id="s-4-title">Mooduli struktuur</h2>
            
            <p>See moodul koosneb 6 tegevusest. Tegevuste järjestus on toodud joonisel 1 ja tabelis 1 (vt allpool).</p>


            <section>
                                
                <ModulesStructure>
                        <template #title>Tegevus 1<br />KÕIGE LEVINUMATE MÜÜTIDE TUTVUSTAMINE</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="material-symbols:youtube-tv-outline" class="text-white" />
                            </div>
                            <Icon name="mdi:arrow-right-thick" />
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:ouroboros" class="text-white" />
                            </div>
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:unicorn" class="text-white" />
                            </div>
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:all-seeing-eye" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>Tegevus 2<br />MÜÜDI VÄLJA VALIMINE</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="mdi:frequently-asked-questions" class="text-white" />
                            </div>
                            <Icon name="mdi:check-bold" />
                            
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:unicorn" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>Tegevus 3<br />MÜÜDIMURDMINE</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="tabler:zoom-question" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="tabler:microscope" class="text-white" />
                            </div>
                            <Icon name="fa6-solid:arrows-spin" />
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:horse-head" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>Tegevus 4<br />TÕESTUSMATERJALILE SOBIVA VORMI VÄLJATÖÖTAMINE</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded">
                                <Icon name="material-symbols:unknown-document-outline-rounded" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="mdi:laptop-account" class="text-white" />
                            </div>
                            <Icon name="mdi:check-bold" />
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:horse-head" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>Tegevus 5<br />TÕESTUSMATERJALIDE JA TEHTUD JÄRELDUSTE TUTVUSTAMINE</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="heroicons-outline:chat-bubble-left-right" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="carbon:group-presentation" class="text-white" />
                            </div>
                            <Icon name="mdi:check-bold" />
                            <div class="e-icon--rounded">
                                <Icon name="game-icons:horse-head" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>Tegevus 6<br />SOTSIAAl-TEADUSLIKU OTSUSE LANGETAMINE</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="game-icons:rolling-dices" class="text-white" />
                            </div>
                            <!-- <Icon name="mdi:check-bold" /> -->
                            <div class="e-icon--rounded">
                                <Icon name="healthicons:group-discussion-meeting" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                
            </section>



            <p class="mt-20"><b>Tabel 1.</b> Mooduli “Kosmos” ülesehitus</p>

            <table>
                <thead>
                    <tr>
                        <th class="w-1/5"><b>Tegevus</b></th>
                        <th>Kirjeldus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Tegevus 1</b></td>
                        <td><a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">Sissejuhatava video</a>  mis avab mõningaid kosmoseuuringutega seotud ideid, unistusi ja müüte, vaatamine. 
                        <br />
                        Lisaks võib õpetaja põgusalt tutvustada ka teisi kosmosega seotud müüte ja ideid.</td>
                    </tr>
                    <tr>
                        <td><b>Tegevus 2</b></td>
                        <td>
                            <ul>
                                <li>
                                    Arutelu rühmades:
                                    <br />
                                    Uuritava müüdi või väite välja valimine.
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Tegevus 3</b></td>
                        <td>
                            Rühmades:
                            <ul>
                                <li>Asjakohaste hüpoteeside ja uurimisküsimuste püstitamine;</li>
                                <li>asjakohase teabe otsimine müüdi kinnitamiseks või kummutamiseks;</li>
                                <li>tõestusmaterjalide usaldusväärsuse hindamine;</li>
                                <li>järelduste tegemine.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Tegevus 4</b></td>
                        <td>Tõendusmaterjalile asjakohase formaadi väljatöötamine: õpivideo abil luuakse lühivideo, poster või slaidiesitlus, mis sobib antud auditooriumile (N: eakaaslased).</td>
                    </tr>
                    <tr>
                        <td><b>Tegevus 5</b></td>
                        <td>Rühmaesitlused (koos vastastikuse tagasisidestamisega).</td>
                    </tr>
                    <tr>
                        <td><b>Tegevus 6</b></td>
                        <td>
                            Kosmoselendude võimekust ja infrastruktuuri arendamise prioriteete puudutava probleemi uurimine (vt Rootsi juhtum). Õpilased arutavad, esitavad argumente ja langetavad otsuseid väitlusmängu (rollimängu) vormis.
                            <br />
                            Lühema alternatiivi − <button class="btn btn-sm btn-accent" @click="toggleModal('space__exploration-debate')"><Icon name="mdi:open-in-new" size="20" /> Kosmoseuuringute arutelu</button> − saab läbi viia ühe õppetunni jooksul.
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>










            <hr  class="mt-10 mb-40 print:my-10" />

        <section id="s-5">
            <h2 id="s-5-title">Nõuded füüsilisele keskkonnale</h2>
            
            <p>Nutitelefon, arvuti, internet, kuvaseadmed videote demonstreerimiseks.</p>
        </section>  
            
            
            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />


        <section id="s-6">
            <h2 id="s-6-title">Hindamine</h2>
                        
            <p>
                Õpilasi saab hinnata erinevatel viisidel terve mooduli jooksul, k.a uurimuslikke oskusi, üldpädevusi, sh põhjendamisoskusi ning teemaga seotud loodusteaduslikke teadmisi.
            </p>

            
            <p><b>Diagnostiliselt:</b></p>
            <ul>
                <li>
                    sissejuhatava video vaatamise ning sellele järgneva arutelu käigus selgitab õpetaja välja õpilaste teemakohased eelteadmised;
                </li>
            </ul>
            
            
            <p><b>Kujundavalt:</b></p>
            <ul>
                <li>õpetaja suuline või kirjalik tagasiside, mis põhineb vaatlusel ning individuaalsete või rühmatöö käigus valmivate töölehtede jooksval analüüsil;</li>
                <li>õpilaste enesehindamine, mis põhineb etteantud kriteeriumitele (hindamismudelile);</li>
                <li>klassikaaslased annavad vastastikku hinnangu rühmaesitlusele, kasutades näiteks järgmist <NuxtLink to="./tools/peer-feedback" target="_blank">tagasiside küsimustikku</NuxtLink>.</li>
            </ul>
            

            <p><b>Kokkuvõtvalt:</b></p>
            <ul>
                <li>õpetaja hindab valmis töölehti, rühmavideot (posterit, slaide vms.) ja selle esitlust (sh küsimustele vastamise oskust).</li>
            </ul>
        </section>    
            
            
            
            
            
            
            

            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-7">
            <h2 id="s-7-title">Õpetamissoovitused</h2>

            <p>
                Mooduli tegevused võib jagada tinglikult kaheks. Esimene osa (tegevused 1–5) käsitleb konkreetseid kosmosega seotud müüte, ideid, küsimusi ja probleeme, mida demonstreerib ka sissejuhatav video. Teine osa (Tegevus 6) keskendub sotsiaalteaduslikele küsmustele, mis on seotud inimese rändamisega kosmosesse ning võetakse kokku väitlusmängu / rollimängu vormis (vt õpilase materjale).
            </p>
            <p>
                Pärast lühikest sissejuhatust võiksid õpilased soojenduseks väikestes rühmades mõelda, milliseid küsimusi nad sooviksid võimaluse korral astronaudile/kosmoseuurijale esitada (kaks-kolm küsimust rühma kohta). See võimaldab neil uurida probleeme lähtuvalt isiklikest huvidest ja ootustest seoses moodulis tõstatatud teemaga.
            </p>

            <p>
                Pärast tutvustava video vaatamist (Tegevus 1), otsustavad õpilased, millist tuvastatud müüti, väärarusaama või probleemi põhjalikumaks uurimiseks valida. Õpetaja saab siinkohal tutvustada ka muid kosmosega seotud müüte ja probleeme. Õpilasi võib julgustada meenutama omaenda arusaamu kosmose kohta. "Faktivideoid” saab selles etapis kasutada kosmosega seotud teemade, mõistete ja põhimõtete meenutamiseks ja avardamiseks. Õpetaja võib ka vajadusel koos õpilastega mõnda teemat <NuxtLink to="./background">loodusteadusliku taustainfo</NuxtLink> teemast üle korrata.
            </p>
            
            <p>
                <b>Tegevus 2</b> peaks aitama õpilastel kitsendada valitud müüti või probleemi hüpoteesiks/uurimisküsimuseks, mida tuleb kinnitada või ümber lükata Tegevuses 3.  Tegevust 3 saab ellu viia kahel viisil:
                <ol class="leading-tight">
                    <li>
                        praktilise kogemuse kaudu või
                    </li>
                    <li>
                        sekundaarsete allikate uurimise kaudu.
                    </li>
                </ol>
            </p>

            <h3>1. praktilise kogemuse kaudu</h3>

            <p>
                Kui õpilased valivad müüdi / probleemi, mida saab praktiliselt testida / uurida, koguvad nad tõendeid lihtsate kvalitatiivsete katsete abil. Vaatleme näiteks müüti, "söömine nõuab gravitatsiooni, et toit liiguks meie kõhtu":
            </p>

            <h4>
                Proovige oma kehaga:
            </h4>

            <p>
                Võtke suutäis toitu, seejärel kummarduge, kuni pea on kõhust allpool ja neelake alla! Leiate, et seda on lihtne teha hoolimata sellest, et toit läheb gravitatsioonile vastupidises suunas. Toidu läbimine läbi meie keha ei vaja gravitatsiooni. Soolestiku lihaste kokkutõmmete süsteem, mida nimetatakse "peristaltikaks", suunab toidu aktiivselt soovitud suunas. Süsteem töötab nii ka seetõttu, et meie sooled liiguvad ringi – mõnikord liiguvad nad alla, mitte ülespoole. Kui  ainuüksi raskusjõud peaks selle töö tegema, ei saaks me toimida. Seega pole astronautidel probleeme toidu seedimisega mikrogravitatsioonikeskkonnas, nagu see on rahvusvahelises kosmosejaamas ISS. Saame ka üsna lihtsalt juua kasutades kõrt tagurpidi rippudes. Tagurpidi söömise või joomise kõige raskem osa on tavaliselt toidu või joogi suhu viimine. Samuti võib siin paluda õpilastel teha uuringuid astronautide toitumisharjumuste ja kosmosetoidu kohta.
            </p>

            <h4>
                Proovige raketiheiteid:
            </h4>

            <p>
                (Tegevust saab teha demonstratsioonkatsena)
                <br />
                See on seotud rakettide liikumist puudutavate põhimõtete ning nendega seotud müütide ning eksiarvamustega, nagu näiteks "Raketid vajavad lendamiseks õhku, millelt ennast tõugata".
            </p>
            <p>
                Tegelikult loob rakett tõukejõu massi väljutamisega. Kütuse põlemisel eralduvad gaasid kiirendavad kosmoselaeva liikumist vastassuunas. See üldine liikumise põhimõte on sama, mis <button class="btn btn-sm btn-accent" @click="toggleModal('space__water-rocket')"><Icon name="mdi:open-in-new" size="20" /> veeraketil</button> (plastpudelist väljutatakse veeraketi puhul survevesi koos õhuga). 
            </p>
            <h4>
                Virtuaalsed katsed:
            </h4>
            <p>
                Need katsed võivad aidata koguda tõendeid mitme müüdi/eksiarvamuse kohta, näiteks rakettide liikumise ja gravitatsiooni kohta avakosmoses:
                <ul class="leading-tight">
                    <li>
                        "Kosmoselaev vajab raketimootorit, mis töötaks kogu aeg orbiidil (või teel Marsile)"
                    </li>
                    <li>
                        "Kosmoses pole gravitatsiooni"
                    </li>
                    <li>
                        "Maa ümber ISSil tiirlevad astronaudid on kaalutud, kuna asuvad Maast kaugel",
                    </li>
                    kui nimetada neist mõnda.
                </ul>
            </p>

            <p>
                Õpetajad saavad Internetis saadaolevate erinevate virtuaalsete katsete ja simulatsioonide hulgast valida oma õpilaste jaoks sobivaimad. Soovitame Nobeli preemia laureaadi Carl Wiemani algatatud <a href="https://phet.colorado.edu/" target="_blank" rel="noopener noreferrer">PhET interaktiivsete simulatsioonide projekti</a>, materjale, mille eesmärgiks on kaasata õpilasi õppima läbi uurimise ja avastamise. Näiteks, interaktiivne simulatsioon <a href="https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html" target="_blank" rel="noopener noreferrer">raskusjõud ja orbiidid</a> võib aidata
                <ul class="leading-tight">
                    <li>
                        õpilastel analüüsida suhteid Päikese, Maa, Kuu ja kosmosejaama vahel;
                    </li>
                    <li>
                        illustreerida, kuidas gravitatsioon juhib meie Päikesesüsteemi liikumist;
                    </li>
                    <li>
                        uurida muutujaid, mis mõjutavad gravitatsiooni tugevust; 
                    </li>
                    <li>
                        ennustada, kuidas liikumine muutuks, kui gravitatsioon oleks tugevam või nõrgem.
                    </li>
                </ul>
            </p>

            <p>
                Teised virtuaalsed simulatsioonid, millega õpilased saavad katsetada, on järgmised: <a href="https://play.google.com/store/apps/details?id=com.StefMorojna.SpaceflightSimulator&hl=en_US&gl=US&pli=1" target="_blank" rel="noopener noreferrer">Kosmoselendude simulaator</a> püüab kujutada laeva käitumist füüsikaseaduste mõjul. See rakendus võimaldab ehitada erinevaid rakettide mudeleid. Õpilased võivad näha, kuidas raketi astmete arvu suurenedes suureneb tema kandevõime lennul erinevatele orbiitidele.
            </p>

            <h3>
                2. sekundaarsete allikate uurimise kaudu
            </h3>

            <p>
                Sageli ei saa kosmosega seotud müüte ja väärarusaamu klassiruumis siiski eksperimentaalselt kummutada. Seetõttu eeldatakse, et õpilased koguvad tõendeid sekundaarsetest allikatest, et kinnitada või ümber lükata püstitatud hüpotees või saada vastus oma uurimisküsimusele. Meedia/andmeallikate ja nende sisu kõrvutamise kaudu analüüsivad õpilased kriitiliselt nende usaldusväärsust ning teevad leitud tõendite põhjal põhjendatud järeldusi. Õpilase materjal on varustatud <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20" /> tööriistaga</NuxtLink>, mida saab kasutada allika usaldusväärsuse hindamiseks. Oleks hea, kui õpetaja selgitaks selle kasutamist, näidates ja analüüsides nii usaldusväärseid kui ka vähem usaldusväärseid allikaid näidetena, enne kui õpilased seda tööriista iseseisvalt kasutama hakkavad.
            </p>

            <p>
                Oma järelduste tutvustamiseks juhendatakse õpilasi oma järeldusi visuaalselt veenval moel esitlema <b>(Tegevus 4)</b>. Üheks variandiks võib olla video. Selle loomiseks saavad õpilased kasutada vastavat <a href="https://www.youtube.com/watch?v=_l8LgLhjLvc&list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" target="_blank" rel="noopener noreferrer">videoõpetust</a>. Teise variandina võivad õpilased oma tulemuste tutvustamiseks teha postri või slaidid.
            </p>

            <p>
                Lisaks võib õpilase materjalidest leida kriteeriumid, mida saab kasutada nii õpilaste juhendamiseks, enesehindamiseks kui ka <NuxtLink to="./tools/peer-feedback" target="_blank">vastastikuseks hindamiseks</NuxtLink>, kui toimuvad rühmade esitlused ja kaaslaste ja õpetaja küsimustele vastamine <b>(Tegevus 5)</b>. 
                <!-- The teacher could provide each group with summary feedback on their video presentation (suggestion: each group could access only the feedback given to their production, not the others). The teacher can easily access the feedback from Google Forms using the "Responses" button. Please, make a copy of the file into the same folder; after that, please share the link of the copied file with your students (not the original file!). -->
            </p>

            <p>
                Viimases tegevuses <b>(Tegevus 6)</b>, arutatakse kosmoseuuringutega seotud sotsiaalteaduslike küsimuste üle <a href="http://www.encic.uma.es/" target="_blank" rel="noopener noreferrer"><sup><span class="tooltip" data-tip="Kosmosega seotud sotsiaalteaduslikku probleemi käsitleva rollimängu väljatöötamisel kasutati Malaga ülikooli loodusteaduste õpetajate välja töötatud rollimängu metoodikat http://www.encic.uma.es/">[1]</span></sup></a>. Aastakümneid on teadlased ja poliitikud vaielnud selle üle, kas kosmoseuuringud sobivad paremini inimestele või robotitele (vt näiteks hiljutist Donald Goldsmithi ja Martini raamatut "The End of Astronauts", Rees Belknap Press, 2022). Euroopa praeguses karmis majandusolukorras muutus see teema veelgi päevakajalisemaks, kuna mehitatud kosmoselennud on robotist oluliselt kallimad. Väljapakutud arutelu-rollimäng õpilase materjalides käsitleb seda teemat.
            </p>

            <p>
                Viimane võimaldab õpilastel mõelda, miks ja kuidas kosmost uurida. Tegevus toetab õpilaste arutelu transdistsiplinaarse teema üle, hõlmates füüsikat, astronoomiat, bioloogiat, tervise- ja keskkonnauuringuid ning sotsiaalteadusi. See arutelu võib anda õpilastele ülevaate sellest, kuidas teadlased ja spetsialistid väiteid esitavad ja kaitsevad ning kuidas nad tegelevad määramatusega kaasaegses teaduses ja tehnoloogias. Õpetajad saavad otsustada, millist hindamist kasutada, et soodustada õpilaste ideede ja põhjenduste vaba väljendamist. Õpetaja võib olla ka tegevuse moderaator.
            </p>

            <p>
                Teemaga seotud teave on esitatud <NuxtLink to="background">loodusteadusliku taustainfo</NuxtLink> teemas.
            </p>

            <p>
                Kui õpetajal napib aega täismahus rollimängu läbiviimiseks, võib alternatiivina soovitada lühemat versiooni: <button class="btn btn-sm btn-accent" @click="toggleModal('space__exploration-debate')"><Icon name="mdi:open-in-new" size="22" /> kosmoseuuringute arutelu</button> saab rakendada ühe õppetunni jooksul <sup><span class="tooltip" data-tip="See on Liverpooli John Mooresi ülikooli kolleegide koostatud National Schools’ Observatory õppematerjalide tegevuse vastuvõetud versioon.">[2]</span></sup> (vt allpool). 
            </p>

            <p>
                Mooduli lõppu võib õpetaja lisada kokkuvõtva reflektiivse tegevuse selle kohta, mida õpilased on mooduli tegevustes osaledes õppinud ja kuidas nad omavahel koostööd tegid, valmistades ette argumente, esitlusi ja andsid  kaaslastele tagasisidet. Kunstikooli õpilaste loomingulisi mõtisklusi kosmose ja ruumi teemadel (vt <a href="https://drive.google.com/drive/folders/1toVQDJLTrXVHy5BiOLWoGrVkbHSAN9Gy?usp=sharing" target="_blank" rel="noopener noreferrer">fotograafia raamatud</a> ) võib kasutada huvi tekitamiseks kosmosega seotud nähtuste suhtes olles lähtepunktiks arutelule sellest, mida õpilased sooviksid antud valdkonnas tulevikus veel teada saada. 
            </p>
        </section>


        </section>









<!--
    TTTTTTTTTTTTT
    TTTTTTTTTTTTT
         TTT
         TTT
         TTT
         TTT
         TTT
         TTT
-->





        <teleport to="#theEnd" v-if="userPrefs.modalOpen === true && userPrefs.modalName === 'space__exploration-debate'">
            
            <UiDrawer>

                <h2>
                    Kosmoseuuringute arutelu
                </h2>

                <h3>
                    Sissejuhatus:
                </h3>
                <p>
                    Tutvustage mõistet "arutelu". Paluge õpilastel jagada oma kogemusi väitluslaadsete meetodite kohta. Miks me peame vaidlema ja olema veenvad?                </p>
                <h3>
                    Soojendustegevus:
                </h3>
                <ol>
                    <li>
                        Õpilased jagunevad 4-liikmelistesse rühmadesse. Tutvustage olukorda – nad on minemas kosmosesse. Nad peaksid otsustama ühe asja, mida endaga kaasa võtta ja ütlema oma rühmale, mis see on. Soojendustegevus ei ole missiooni kui tervikut silmas pidades kriitiline, kuid on teemasse sisseelamiseks sobiv.
                    </li>
                    <li>
                        Oleme raketis, kui mõistame, et meil pole piisavalt kütust. Peame loobuma osast varustusest, et oma kaalu vähendada.
                    </li>
                    <li>
                        Oma rühmades peaksid õpilased valima allesjätmiseks ainult ühe oma rühma eseme.
                    </li>
                    <li>
                        Paluge õpilastel teistele rühmadele tagasisidet anda.
                    </li>
                </ol>
                <h3>
                    Arutelu teema:
                </h3>
                <p>
                    “Kuidas peaksime kosmoseuuringuid jätkama”
                </p>
                <h3>
                    Arutelutegevus:
                </h3>
                <ol>
                    <li>
                        Lugege läbi väitlusteema
                    </li>
                    <li>
                        Jaotage ruumi neli nurka või ala järgmiselt:
                        <ul class="leading-tight">
                            <li>
                                “Kosmost peaksid uurima inimesed mitte robotid”
                            </li>
                            <li>
                                “Ainult robotid peaksid kosmost uurima”
                            </li>
                            <li>
                                “Nii inimesed kui ka robotid peaksid kosmost uurima”
                            </li>
                            <li>
                                “Me ei peaks kulutama maksumaksja raha kosmosetööstusele”
                            </li>
                        </ul>
                    </li>
                    <li>
                        Paluge õpilastel individuaalselt otsustada, millise seisukohaga nad nõustuvad, ja liikuda ruumis nende veendumustele vastavasse piirkonda. Kui neil pole kindlat arvamust, paluge neil teha esialgne otsus – kuid tehke kõigile selgeks, et nad võivad muuta seisukohta igal ajahetkel.
                    </li>
                    <li>
                        Kui õpilased on oma seisukoha valinud, andke neile aega teistega arutlemiseks oma nurgas, miks nad selle koha valisid ja kuidas nad saaksid teisi veenda nendega liituma.
                    </li>
                    <li>
                        Õpilased nimetavad oma meeskonnast kellegi, kes oma seisukohta väljendab.
                    </li>
                    <li>
                        Arutelu algab! Õpetaja võib otsustada, kas õpilased saavad vabalt rääkida või peaksid nad käe tõstma ja ootama, kuni neile sõna antakse.
                    </li>
                </ol>
                <h3>
                    Lõpetamine:
                </h3>
                <p>
                    Tehke kokkuvõte arutelu põhipunktidest ja koostage klassi poolt- ja vastuargumentide loend. Andke õpilastele teada, et see teema on teadlaste ja poliitikute seas pidevalt arutelu all.
                </p>
                <h3>
                    Soovitused:
                </h3>
                <ul class="leading-tight">
                    <li>
                        Veenduge, et õpilased teaksid, et antud küsimuses pole absoluutselt õiget ega valet vastust.
                    </li>
                    <li>
                        Julgustage õpilasi oma arvamust põhjendama.
                    </li>
                    <li>
                        Sekkuge, kui õpilased lähevad teemast kõrvale.
                    </li>
                    <li>
                        Veenduge, et arutelus ei domineeriks vaid üks või kaks õpilast.
                    </li>
                    <li>
                        Püüdke mitte mõjutada õpilaste arvamusi.
                    </li>
                </ul>
            </UiDrawer>
        </teleport>





        <teleport to="#theEnd" v-if="userPrefs.modalOpen === true && userPrefs.modalName === 'space__water-rocket'">
            <UiDrawer>
                <h2>
                    Veeraketi ehitamine ja väljalaskmine
                </h2>

                <p>
                    Tõenäoliselt olete juba PET-pudelist veeraketi ehitanud.
                    <br />
                    Vajalikud materjalid: 
                    <ul class="leading-tight">
                        <li>
                            suurem (1,5 l) PET pudel
                        </li>
                        <li>
                            veinikork (võib olla plast)
                        </li>
                        <li>
                            jalgratta klapp
                        </li>
                        <li>
                            plastvoolik, mis sobib jalgratta klapile
                        </li>
                        <li>
                            võimalik, et mõni terastraat ja võimas jalgrattapump või jalgpump
                        </li>
                    </ul>
                </p>
                <p>
                    Puurige ettevaatlikult läbi korgi auk, mille läbimõõt on veidi väiksem kui voolik. Lükake voolik läbi augu nii, et see ulatuks ühelt poolt 1–2 cm välja ja kinnitage jalgratta ventiil vooliku teise otsa. Kui klapp on lahti, võite terastraati kasutada voolikuklambrina – sel juhul keerake see tangidega tihedalt kinni. Järgmiseks on vaja valmistada stardiplatvorm nii, et rakett seisaks kindlalt.
                </p>
                <p>
                    Täitke pudel kolmandiku osas veega, sisestage kork, asetage rakett stardiplatvormile, ühendage pump ventiiliga ja pumbake. Pudelisse tekib ülerõhk. Sinna on salvestunud pumba töö energia kujul. Lõpuks läheb rõhk nii suureks, et ületab korgi ja pudelikaela hõõrdumise ning kork tuleb ära. Salvestatud energia vabaneb, vesi surutakse tohutu jõuga välja ja rakett lendab minema. Võite proovida oma raketti käivitada erineva "kütuse koostisega" - palju vähem vett või lihtsalt pudelis oleva õhuga ja vaadata, kuidas see raketi lennuvõimet mõjutab.
                </p>
                <p>
                    <a href="https://www.scienceprojectideas.org/water-bottle-rocket.htm" target="_blank" rel="noopener noreferrer">Veeraketi ehitamine</a>
                </p>
            </UiDrawer>
        </teleport>


    </div>
</template>

