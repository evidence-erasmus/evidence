<script setup>
    // import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 
    const userPrefs = useUserPreferences();

    

    // const changeTab = (index) => {
    //     userPrefs.setLearnPath("learnPathViruses", index);
    // } 
</script>

<template>
    <!-- <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="answers" target="_blank" class="text-lg font-bold uppercase">Sinu vastused</nuxt-link>
    </section> -->
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="climatechange-student-et" />
        </ClientOnly>



        <section class="e-article print:not-prose" lang="et" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Kliimamuutused</h1>
            <h5 class="font-normal uppercase leading-tight">Õpilaste materjal</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">Sissejuhatus</h2>

            
            <!-- <section class="e-card e-module__meta">
                <p class="m-0 leading-tight font-bold">
                    You may find <a href="https://docs.google.com/document/d/1DAi745eJ9z4-Nky9xG8-qXZk5kiMgk_Ti8yDXuFU7tI/edit?usp=sharing" target="_blank">this Google Docs document</a> useful to write down your answers.
                </p>
            </section> -->


            <p>Selles moodulis palutakse teil ümber lükata või kinnitada mõnda levinud müüti kliimamuutuste kohta. <a href="#activity-1">Sissejuhatavas videos</a>  tuuakse välja mõned kliimamuutustega seotud arusaamad (uskumused). Rühmaarutelu tulemusel peaksite valima välja müüdi, mida ümber lükata või kinnitada (Joonis 1).</p>

            mythbusting img here

            <p>Seda on võimalik teha nii eksperimentaalselt kui ka sekundaarsete allikate uurimise kaudu. Viimase kaudu õpite ühtlasi hindama infoallikate (teaduskirjandus, populaarteaduslik kirjandus, muud allikad) usaldusväärsust. Pärast järelduste tegemist peate te esitlema oma järeldusi  asjakohaselt ja veenvalt klassikaaslastele (või muule publikule). Mooduli lõpetab argumentatsioonimäng, kus saate kasutada oma loodusteaduslikke teadmisi ning kõrvutada neid isiklike ja  sotsiaalsetest väärtustega.</p>
                        
            

            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-2">Tegevus 1:  Video vaatamine</h2>
            
            <!-- <ModulesStructure>
                    <template #title>Activity 1<br />OUTLINING THE MOST COMMON TOPIC-RELATED MYTHS</template>
                    <template #icons>
                        <div class="e-icon--rounded ">
                            <Icon name="material-symbols:youtube-tv-outline" class="text-white" />
                        </div>
                        <Icon name="mdi:arrow-right-thick" />
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:ouroboros" class="text-white" />
                        </div>
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:unicorn" class="text-white" />
                        </div>
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:all-seeing-eye" class="text-white" />
                        </div>
                    </template>
                </ModulesStructure> -->

            <p>Vaadake videot ning pange kirja oma mõtted, mis teil teema kohta tekkisid.</p>

            <UiYoutube video="CbJ7GmgEAAo" />

            



<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-3">Tegevus 2: Rühmaarutelu</h2>
            
            <!-- <ModulesStructure>
                    <template #title>Activity 2<br />CHOOSING A MYTH</template>
                    <template #icons>
                        <div class="e-icon--rounded ">
                            <Icon name="fa6-solid:people-group" class="text-white" />
                        </div>
                        <div class="e-icon--rounded ">
                            <Icon name="mdi:frequently-asked-questions" class="text-white" />
                        </div>
                        <Icon name="mdi:check-bold" />
                        
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:unicorn" class="text-white" />
                        </div>
                    </template>
                </ModulesStructure> -->
            
            <p>Pärast video vaatamist moodustage väikesed rühmad (3-4 liiget) ning arutage teemat.</p>

            <p>Jagage rühmakaaslastele oma esialgseid mõtteid video kohta:</p>

            <ol>
                <li>Millised arusaamad selles peegeldusid ning mida nendest arvate?</li>
                <li>Valige edasiseks tööks järgnevast loetelust üks müüt, mille paikapidavust lähemalt uurida.</li>
                <li>Leppige õpetajaga kokku, kas teostate oma müüdimurdmise avatud või juhitud uurimuse vormis.</li>
            </ol>
            

            
            
            
            
            
            
            
            
            
            
            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-4">Tegevus 3: Kliimamuutuste müüdid</h2>

            

            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Müüt nr. 1:</span> Liikide väljasuremine on looduslik protsess. Massiline liikide väljasuremine on alati toimunud.</h4>

                <p>Liikide väljasuremine on toimunud läbi Maa ajaloo. Eelajaloolistest aegadest on meil tõendeid mitme massilise väljasuremise kohta, eriti dinosauruste väljasuremise kohta. See väljasuremine, mis leidis aset 66 000 000 aastat tagasi, oli tingitud asteroidi kokkupõrkest Maale. Aastate jooksul on meil teisigi tuntud näiteid, näiteks mammutite väljasuremine. Registreeritud väljasuremise põhjused on aga erinevad.</p>
                <p>Ka vihje, et inimkond on võimeline mõjutama ja häirima sellise ulatusega jõude, peegeldab inimeste enesekeskset ülbust. Inimkond on looduse osa. Loodus ei ole inimkonna osa. Inimesed ei saa neid protsesse parandada ega sellesse sekkuda (Financial Sense University).</p>

                <p>
                    Viidatud: 
                    <br />
                    <a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
                </p>
                
                <UiNavButtonBar class="font-Body mb-6" :buttons="[
                    {text:'Avatud uurimus', url:'../climate-change/inquiry/open/'},
                    {text:'Juhitud uurimus', url:'inquiry/guided/myth-1'}
                ]" />

            </UiCardInfo>

            <div class="divider my-6"></div>
            
            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Müüt nr. 2:</span> Liigid suudavad kliimamuutustega kohaneda.</h4>
                
                <p>Maa ajalugu hinnatakse 4,54 miljardile aastale. Läbi aegade on planeedil valitsenud ilmastikutingimused muutunud. Seetõttu on Maal elavad liigid/organismid sunnitud ellujäämiseks ja säilimiseks uute tingimustega kohanema. Nii tekkis liikide evolutsioon.</p>
                <p>Taimed ja loomad on juba mitu korda ebasoodsate tingimustega (kliimamuutused, meteoriidid, vulkaanipursked jne) kohanenud. See võimaldab neil kohaneda kasvavate temperatuuride ja olukorraga, mida me praegu nimetame kliimamuutusteks. Teisisõnu, liigid on looduslikult võimelised uutes tingimustes ellu jääma.</p>
                <p>
                    Viidatud: 
                    <br />
                    <a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
                </p>

                <UiNavButtonBar :buttons="[
                    // {text:'Juhised', url:''},
                    {text:'Avatud uurimus', url:'../inquiry/open/'},
                    {text:'Juhitud uurimus', url:'/'}
                ]" class="mb-6 font-Body"
                />
                
            </UiCardInfo>
            
            <div class="divider my-6"></div>
            
            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Müüt nr. 3:</span> Kliimamuutuste alane teadus ei ole usaldusväärne.</h4>
                
                <p>Meteoroloogiajaamad asuvad piirkondades, kus kogutud andmed ei kajasta kliimamuutusi ega ole seetõttu globaalse kliima uurimiseks usaldusväärsed.</p>
                
                <p class="pl-4 border-l border-blue-500">
                    <i>“Leidsime [USA ilma]jaamad, mis asuvad kliimaseadmete väljatõmbeventilaatorite kõrval, mis on ümbritsetud asfaltkattega parklate ja teedega, kuumadel katustel ning kõnniteede ja hoonete läheduses, mis neelavad ja kiirgavad soojust.”</i>
                    <br />
                    <a href="http://wattsupwiththat.files.wordpress.com/2009/05/surfacestationsreport_spring09.pdf" target="_blank" rel="noopener noreferrer" class="text-sm">
                        —Watts 2009
                    </a>
                </p>

                <p>
                    Viidatud: 
                    <br />
                    <a href="https://skepticalscience.com/surface-temperature-measurements-basic.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/surface-temperature-measurements-basic.htm</a>
                </p>
                
                <UiNavButtonBar :buttons="[
                    // {text:'Juhised', url:''},
                    {text:'Avatud uurimus', url:'inquiry/open/'},
                    {text:'Juhitud uurimus', url:'/'}
                ]" class="mb-6 font-Body"
                />
            </UiCardInfo>
            
            <div class="divider my-6"></div>
            
            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Müüt nr. 4:</span> Globaalne soojenemine on kasulik.</h4>
                
                <p class="pl-4 border-l border-blue-500">
                    <i>“Muide, kui kavatsete millegi poolt hääletada, hääletage soojenemise poolt. Vähem külma tõttu hukkunuid, piirkonnad elamiskõlblikumad, suuremad põllukultuurid, pikem kasvuperiood. See on hea. Soojenemine aitab vaeseid.”</i>
                    <br />
                    <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&feature=youtu.be&t=353" target="_blank" rel="noopener noreferrer" class="text-sm">
                        —John MacArthur
                    </a>
                </p>
                
                <p>
                    Viidatud: 
                    <br />
                    <a href="https://skepticalscience.com/global-warming-positives-negatives.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/global-warming-positives-negatives.htm</a>
                </p>
            </UiCardInfo>
            
            <div class="divider my-6"></div>
            
            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Müüt nr. 5:</span> Seos CO₂ ja temperatuuri tõusu vahel puudub.</h4>
                
                <p class="pl-4 border-l border-blue-500">
                    <i>“Just sõjajärgne industrialiseerimine põhjustas ülemaailmse CO₂ heitkoguste kiire tõusu, kuid 1945. aastaks, kui see algas, oli Maa juba jahtumisfaasis, mis algas 1942. aasta paiku ja kestis kuni 1975. aastani. 32 aastat kestnud kiiresti tõusnud globaalsetele temperatuuridele ja vaid vähesel määral globaalsete CO₂ heitkoguste suurenemisele järgnesid 33 aastat aeglaselt langevaid globaalseid temperatuure koos globaalse CO₂ heitkoguste kiire kasvuga. Järelikult oli IPCC jaoks petlik väita, et CO₂ heitkogused on peamiselt vastutavad 20. sajandi globaalse soojenemise eest.”</i>
                    <br />
                    <a href="https://archive.md/q3Tim" target="_blank" rel="noopener noreferrer" class="text-sm">
                        —Norm Kalmanovitch
                    </a>
                </p>
                
                <p>
                    Viidatud: 
                    <br />
                    <a href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
                </p>
            </UiCardInfo>
            
            <div class="divider my-6"></div>
                        
            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Müüt nr. 6:</span> Kliimamuutustega seotud meetmed muudavad inimesed vaesemaks.</h4>

                <p class="pl-4 border-l border-blue-500">
                    <i>“Muide, kui kavatsete millegi poolt hääletada, hääletage soojenemise poolt. Vähem külma tõttu hukkunuid, piirkonnad elamiskõlblikumad, suuremad põllukultuurid, pikem kasvuperiood. See on hea. Soojenemine aitab vaeseid.”</i>
                    <br />
                    <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&feature=youtu.be&t=353" target="_blank" rel="noopener noreferrer" class="text-sm">
                        —John MacArthur
                    </a>
                </p>
            
            </UiCardInfo>
            
            <div class="divider my-6"></div>

            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Müüt nr. 7:</span> Maa kliima on alati muutunud ning see jätkab muutumist.</h4>
                <p class="pl-4 border-l border-blue-500">
                    <i>“Kliima muutub alati. Meil on olnud jääaegu ja soojemaid perioode, mil Teravmägedest leiti alligaatoreid. Jääajad on toimunud saja tuhande aastase tsükliga viimase 700 tuhande aasta jooksul ning varasemad perioodid on olnud praegusest soojemad, kuigi CO₂ tase on praegusest madalam. Viimasel ajal on meil olnud keskaegne soe periood ja väike jääaeg.”</i>
                    <br />
                    <a href="http://www.quadrant.org.au/blogs/doomed-planet/2009/07/resisting-climate-hysteria" target="_blank" rel="noopener noreferrer" class="text-sm">
                        —Richard Lindzen
                    </a>
                </p>
                <p>
                    Viidatud: 
                    <br />
                    <a href="https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm</a>
                </p>
            </UiCardInfo>












<!-- 
    333333 
        33
     33333
        33
    333333
 -->


            <!-- <hr id="activity-35" class="mt-10 mb-40 print:my-10" />
            <h2>Tegevus 3: Mythbusting</h2>

            <ModulesStructure>
                <template #title>Activity 3<br />MYTHBUSTING</template>
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


            <UiContentImage class="mt-10" src="https://evidence.onkel.ee/assets/viruses__mythbusting--tp.webp" />

            <UiCardInfo class="my-8" theme="blue" icon="material-symbols:alt-route">
                <div>
                    Now, consider whether your hypothesis can be tested based only <b>on secondary evidence</b> (relying on published material of already conducted experiments) or <b>on your own experiment</b>. Based on that, you should choose <b>Activity 3a</b> or <b>Activity 3b</b> from below for further study.
                </div>
            </UiCardInfo>

            




            <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                    <Tab as="template" v-slot="{ selected }">
                        <button
                        class="w-full rounded py-3 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                        :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                        >Activity 3a</button>
                    </Tab>
                    
                    <Tab as="template" v-slot="{ selected }">
                        <button
                        class="w-full rounded py-3 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                        :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                        >Activity 3b</button>
                    </Tab>
                    
                    </TabList>
            
                    <TabPanels class="mt-2">
                        <TabPanel class="focus:outline-none">
                            <ModulesVirusesStudentActivity3aEn />
                        </TabPanel>
                        <TabPanel class="focus:outline-none">
                            <ModulesVirusesStudentActivity3bEn />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
                </div> -->



<!-- 
    44   44    5555555
    44   44    55
    4444444    5555555
         44         55
         44    5555555
-->
                



            <ModulesStudentActivity45Et />




<!-- 
    6666666
    66
    6666666
    66   66
    6666666
 -->






            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-7">Tegevus 6: Argumenteerimismäng</h2>

            <!-- <p class="text-sm italic">Antud mäng on adapteeritud ja modifitseeritud tuginedes järgmisele allikale.s <a href="https://playdecide.eu/playdecide-kits/167151" target="_blank" rel="noopener noreferrer">https://playdecide.eu/playdecide-kits/167151</a></p> -->

            <!-- <ModulesStructure>
                    <template #title>Activity 6<br />SOCIO-SCIENTIFIC DECISION-MAKING</template>
                    <template #icons>
                        <div class="e-icon--rounded ">
                            <Icon name="fa6-solid:people-group" class="text-white" />
                        </div>
                        <div class="e-icon--rounded ">
                            <Icon name="game-icons:rolling-dices" class="text-white" />
                        </div>
                        <div class="e-icon--rounded">
                            <Icon name="healthicons:group-discussion-meeting" class="text-white" />
                        </div>
                    </template>
            </ModulesStructure> -->

            <p>Kliimamuutuste mooduli lõpus rakendatakse järgmist argumentatsioonimängu. Lugege hoolikalt järgmisi juhiseid.</p>
            

            <h3>Mängu juhised:</h3>
            
            <ol>
                <li>Mängijad jagunevad võrdsetesse rühmadesse.</li>
                <li>
                    <b>Lugude valik.</b> Iga võistkond valib 1 rohelise ja 1 sinise kaardi. 
                    <ul>
                        <li>
                            <b>Rohelised kaardid</b> tutvustavad kliimamuutustega seotud lugusid. Lood põhinevad faktidel. 
                        </li>
                        <li>
                            <b>Sinistel infokaartidel</b> on vastused vastavale rohelisele loole, aga rohelise kaardi meeskonnal vastavat sinist vastusekaarti ei ole.
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Arutelu meeskonnas.</b> Kõik mängijad meeskonnas loevad lugu roheliselt kaardilt. Seejärel arutatakse lugu omavahel. 
                    <br />
                    Näiteks räägib esimene roheline kaart tõestisündinud loo 16-aastasest isasest jääkarust, kes leiti Svalbardis nälga surnuna. Meeskonna mängijad püüavad välja selgitada miks jääkaru suri.
                </li>
                <li>
                    <b>Ühisarutelu.</b> Peale arutelu meeskonnas toimub seisukohtade esitlemine ühisarutelu käigus kõigi gruppide vahel.
                    <br />
                    Kui rühm esitleb oma lugu paneelarutelul, püüab vastava sinise infokaardiga rühm neile oma argumentidega vastata.
                    <br />
                    Selles etapis jagavad mängijad oma seisukohti teistega ja parandavad oma vastuseid, kui kuulevad erinevaid argumente ja arvamusi.</li>
                <li>
                    Mängu lõpus võrdlevad mängijad lugude kaarte infokaartidega. Iga tõene argument saab 3 punkti. Mängu võidab kõige suurema punktisumma saanud meeskond.
                </li>
            </ol>

            
            <hr>
            
            <h3>Mängukaardid</h3>

            <!-- Lauamäng võiks pigem õpetaja materjalide all olla? -->

            <UiCardInfo>
                <div>
                    <p>Siin võtavad kaardid ruumi just nii palju kui on vaja brauseri aknasse sobitumiseks <b>Kui soovid kaarte välja printida, on seda parem teha eraldi printimise vaates.</b></p>
                    
                    <nuxt-link to="../tools/cards/climate-change" target="_blank" 
                    class="mb-3 px-4 py-2 inline-flex items-center gap-2 
                    bg-sky-600 text-md rounded text-white no-underline uppercase transition
                    hover:bg-sky-700
                    print:hidden">
                        <icon name="material-symbols:print-outline-rounded" />Ava prinditavad kaardid
                    </nuxt-link> (uues aknas)
                </div>
            </UiCardInfo>

            <ToolsCardgameClimateChange :printMode="false" />

            <hr>


        </section>
    </div>
</template>