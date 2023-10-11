<script setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();

    const changeTab = (index) => {
        userPrefs.setLearnPath("learnPathViruses", index);
    } 
</script>

<template>
    <UiYourAnswersButton 
        :url="userPrefs.learnPathViruses === 0 ? 'answers/experiment' : 'answers/secondary-sources'" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden z-10" key="viruses-student-et" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="et" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Viirused</h1>
            <h5 class="font-normal uppercase leading-tight">Õpilase materjal</h5>
        



            <section id="s1">
                <h2 id="s1t">Sissejuhatus</h2>
                <p>
                    Antud moodulis kutsume Sind “murdma” viirustega seotud müüte, millest mõned tuuakse välja ka sissejuhatavas videos. Pärast video vaatamist ja rühmaarutelu peaksite te valima välja ühe müüdi, mida eksperimendi abil või internetiallikatele  tuginedes kas ümber lükata või kinnitada. Seejärel peaksite te püstitama kontrollitava hüpoteesi või uurimisküsimuse ning otsima selle kinnitamiseks (sellele vastamiseks) tõestusmaterjali (Joonis 1).
                </p>
                <p>
                    Ühtlasi õpid Sa selle käigus otsima infot andmebaasidest, hindama leitud nfo usaldusväärsust ning arendama edasi oma uurimuslikke oskusi. Pärast järelduste tegemist hüpoteesi kehtivuse üle, peaksite te esitama oma uurimistulemused veenvalt teistele, töötades välja videopostituse, postri vms. Moodul lõpeb lauamänguga rühmades, mille lõpuks peaksite ideaalis jõudma rühmakonsensuseni ühes vastuolulistes viirustega seotud küsimuses.
                </p>
            </section>
                
            





            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s2">
                <h2 id="s2t">Tegevus 1: Sissejuhatava video vaatamine</h2>
                <p>Vaata tähelepanelikult järgnevat videot. Pane kirja oma esialgsed mõtted ja tunded, mida nähtu Sinus tekitab.</p>
                <UiYoutube video="t4v-36h2noo" lang="et" />
            </section>
            
            


            



            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s3">
                <h2 id="s3t">Tegevus 2: Arutelu rühmades</h2>
                
                <p>Pärast video vaatamist arutlege rühmas (4-6 inimest) nähtud video üle.</p>
                <ol>
                    <li>Palun jaga teistega oma esialgseid mõtteid, mida nähtud video Sinus tekitas.</li>
                    <li>Valige välja üks müüt järgnevast loetelust, mida kas eksperimendi abil või interneti vm allikatele toetudes ümber lükata või kinnitada.</li>
                </ol>
                <p>Teil on valida järgnevate müütide vahel või kui ükski neist ei paku huvi, siis pakkuge välja enda oma. Viimasel juhul rääkige oma valik kindlasti läbi õpetajaga.</p>
                
                <h3><span class="text-rose-400">Müüt nr 1:</span>  Vaktsiinid põhjustavad autismi / tõsiseid kõrvalmõjusid</h3>
                <p>Osa inimesi usub, et vaktsiinid ise ning/või nendes sisalduvad lisa- ja säilitusained  põhjustavad tõsiseid reaktsioone organismis, näiteks lastel autismi. Viimane kujutab endast arenguhäirete rühma, mis põhjustavad lastel ning hiljem ka täiskasvanutel olulisi suhtlemis- ning käitumuslikke häireid. Autism on aga vaid üks probleem, millega mõned inimesed vaktsiinide kasutamist seostavad. Kas niisugustel väidetel on alust?</p>
                <h3><span class="text-rose-400">Müüt nr 2:</span> Vastsündinu organism ei suuda taluda korraga mitut vaktsiini.</h3>
                <p>Mõned päevad pärast sündi ning pärast mõnda nädalat ning kuud manustatakse vastsündinutele erinevaid vaktsiine, enamasti mitu korraga. Mõnede inmiseste hulgas tekitab see küsimusi, kas vastsündinu tõepoolest talub nii mitut vaktsiini korraga.</p>
                <h3><span class="text-rose-400">Müüt nr 3:</span> Haiguse läbipõdemise teel omandatud immuunsus on parem kui vaktsineerimisel saadud immuunsus.</h3>
                <p>Immuunsus omandatakse, kui organism puutub kokku haigustekitajaga. Vaktsineerimisel kutsutakse immuunsus esile laboris toodetud surmatud või nõrgestatud haigustekitajate poolt, nende poolt toodetud toksiiniga, mis on muudetud mittetoksiliseks või mõne nende pinnal oleva valguga. Mis omakorda tõstatab küsimuse, kas saavutatud immuunsus on mõlemal puhul võrdse tugevusega või mitte.</p>
                <h3><span class="text-rose-400">Müüt nr 4:</span> Vaktsiinid sisaldavad toksiine (mürgiseid aineid).</h3>
                <p>Mõnikord räägitakse, et vaktsiinid sisaldavad lisa- ja säilitusaineid, selliseid nagu elavhõbe, alumiinium, formaldehüüd jm. Kas ja mil määral on niisugused väited tõesed?</p>
                <h3><span class="text-rose-400">Müüt nr 5:</span> Parem hügieen ning sanitaartingimused on põhjusteks, miks nakkushaigused on maailmas vähenenud, mitte vaktsiinid.</h3>
                <p>Nakkushaiguste järjest väiksema leviku põhjuseks terves maailmas peetakse paremaid keskkonna- ja sanitaartingimusi ning inimeste isiklikke hügieeniharjumusi. Viimase kahe sajandi jooksul on toimunud positiivsed arengud kõigis neis valdkondades. Samal ajal on vaktsineerimiste arv maailmas tõusnud. Kuid kas me saame öelda, et vaktsiinidel pole enam tähtsust?</p>
                <h3><span class="text-rose-400">Müüt nr 6:</span> Vaktsiinid võivad nakatada lapse haigusega, mida see püüab ära hoida.</h3>
                <p>Mõned vaktsiinid (leetrid, tuulerõuged, jm.) sisaldavad haigustekitajate nõrgestatud vorme. Mis tõstatab küsimuse, ega see äkki ei või last nakatada?</p>
                <h3><span class="text-rose-400">Müüt nr 7:</span> Me ei vaja vaktsiine, sest nakatumise näitajad maailmas on niikuinii madalad.</h3>
                <p>Kuna vaid vähesed inimesed on nakatunud, siis on väga väike tõenäosus, et satutakse kontakti nendega, kes on nakatunud. Eriti kui pole kavas reisida nendesse piirkondadesse, kus näitajad on kõrged. Seetõttu arvavad mõned, et võiks lõpetada lastele vaktsiinide rutiinse manustamise. Mida räägivad meile aga faktid?</p>
                <h3><span class="text-rose-400">Müüt nr 8:</span> Seep on teatud viiruste nagu näiteks SARS-CoV-2 (põhjustab COVID-19) tapmiseks sama hea kui etüülalkohol</h3>
                <p>Üks võimalus viiruste desaktiveerimiseks on töödelda käsi alkoholiga. Teised eelistavad aga pesemist tavalise seebiga. Kuid kas nad on võrdselt tõhusad?</p>
                <h3><span class="text-rose-400">Müüt nr 9:</span> Maskidest pole mingit kasu ülemiste hingamisteede viirushaiguste (nagu näiteks COVID-19) ärahoidmisel.</h3>
                <p>Palju on ühiskonnas vaieldud maskide kandmise tõhususe või mittetõhususe üle - et kas nad aitavad vältida viiruste levikut piisknakkuse teel nakatunud inimeselt mittenakatunule. Samas on mõnedes kultuurides (näiteks Aasias) see olnud normaalseks käitumisviisiks juba aastaid. Mida räägivad maskide tõhususest aga läbiviidud uurimused? Või on võimalik seda ka ise katseliselt kontrollida?</p>
                <h3><span class="text-rose-400">Müüt nr 10:</span> Maski kandmine põhjustab organismis hüpoksiat (hapnikuvaegust) /Maski kandmine põhjustab organismi  süsihappegaasimürgistust.</h3>
                <p>Mitmed inimesed usuvad, et läbi maski hingates saab organism vähem hapnikku. Kui see on tõsi, siis peaks see esile kutsuma organismis hapnikupuuduse, mida nimetatakse hüpoksiaks. Samal ajal vabastab meie keha pidevalt süsihappegaasi, mille sisalduse suurenemine organismis peaks esile kutsuma mürgistuse. Kuid kas need eeldused on tegelikult õiged?</p>
            </section>







<!-- 
    333333 
        33
     33333
        33
    333333
 -->


            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s4">
                <h2 id="s4t">Tegevus 3: Müüdimurdmine</h2>

                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-et.webp" />
                <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:alt-route">
                    <div>
                        Nüüd võiksite te mõelda, kas teie poolt valitud müüti saaks “murda” ka <b>eksperimentaalselt</b> või saaks seda kontrollida vaid tuginedes <b>olemasolevale kirjandusele</b> (sh. läbiviidud uurimuste tulemustele). Vastavalt sellele valige kas Tegevus 3a või 3b.
                    </div>
                </UiCardInfo>

                <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                    <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                        <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Tegevus 3a</button>
                            </Tab>
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Tegevus 3b</button>
                            </Tab>
                        </TabList>
                
                        <TabPanels class="mt-2">
                            <TabPanel class="focus:outline-none">
                                <ModulesVirusesStudentActivity3aEt />
                            </TabPanel>
                            <TabPanel class="focus:outline-none">
                                <ModulesVirusesStudentActivity3bEt />
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                    </div>
                </section>



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

            <section id="s5">
                <h2 id="s5t">Tegevus 6: Lauamäng</h2>

                <p class="text-sm italic">Antud mäng on adapteeritud ja modifitseeritud tuginedes järgmisele allikale. <a href="https://playdecide.eu/playdecide-kits/167151" target="_blank" rel="noopener noreferrer">https://playdecide.eu/playdecide-kits/167151</a></p>
                <p>Antud tegevuse käigus kutsutakse Sind osalema kaardimängus koos oma rühmakaaslastega, et harjutada lihtsat, üksteist arvestavat ning faktipõhist rühmaarutelu, mis peaks modelleerima ühiskondlikke/poliitilisi otsustusprotsesse. Mäng võimaldab Sul uurida teemat sügavuti sundimatul viisil, väljendada oma mõtteid ja arvamusi.</p>
                
                <p class="font-bold">Sa oled oodatud:</p>
                <ul class="leading-tight">
                    <li><b>Tutvuma probleemiga</b> ja vaatlema seda erinevatest vaatenurkadest.</li>
                    <li>Kujundama probleemi suhtes oma <b>arvamust</b>.</li>
                    <li>Töötama rühmas koos <b>ühise nägemuse</b> leidmise suunas.</li>
                    <li><b>Hääletama</b> ühe väljapakutud poliitilise seisukoha poolt etteantud neljast ning <b>jagama oma tulemusi</b> teistega.</li>
                </ul>
                
                <hr>
                
                <p>Mängu mängitakse rühmades (igas umbes 4 mängijat).</p>

                <h3>I osa - teema valimine (≈20 minutit)</h3>
                <p>On 2 teemat:</p>
                <div class="grid grid-cols-2 gap-2">
                    <div class="e-card text-center">
                        <p class="my-2">1. teema</p>
                        <h4 class="my-1 leading-none">Vaktsineerimise kohustus või vabadus mitte vaktsineerida</h4>
                    </div>
                    <div class="e-card text-center">
                        <p class="my-2">2. teema</p>
                        <h4 class="my-1 leading-none"> Maskikandmise kohustus või vabadus mitte maske kanda ülemiste hingamisteede nakkushaguse pandeemia korral </h4>
                    </div>
                </div>
                <p>Mõlemad teemad koosnevad mitmetest juhtumitest (“lugude” kaardid), mis on antud teemaga seotud:</p>
                <div class="flex flex-wrap gap-2">
                    <div class="e-card text-center">Lugu 1</div>
                    <div class="e-card text-center">Lugu 2</div>
                    <div class="e-card text-center">Lugu 3</div>
                    <div class="e-card text-center">Lugu 4</div>
                    <div class="e-card text-center">Lugu ...</div>
                </div>
                <p>Iga mängija loeb läbi lugude kaardid ning valib enda jaoks välja ühe, mida ta peab enda jaoks mingis mõttes tähenduslikuks. Seejärel tutvustab ta teistele lühidalt kaardi sisu.</p>
                <p>Mõlema teemaga on seotud terve rida infokaarte:</p>
                <div class="flex flex-wrap gap-2">
                    <div class="e-card text-center">Info 1</div>
                    <div class="e-card text-center">Info 2</div>
                    <div class="e-card text-center">Info 3</div>
                    <div class="e-card text-center">Info 4</div>
                    <div class="e-card text-center">Info 5</div>
                    <div class="e-card text-center">Info 6</div>
                    <div class="e-card text-center">Info ...</div>
                </div>
                <p>Mängijad loevad läbi ja vahetavad omavahel infokaarte. Igaüks valib välja kaks, mida ta peab valitud looga seoses tähenduslikuks. Iga mängija teeb mõlemast kaardist teistele lühikokkuvõtte.</p>


                <h3>II osa - Arutelu (≈20 min)</h3>
                <p>Arutelu: Antud osas jagavad mängijad oma arvamust teistega kasutades  infokaarte oma seisukohtade põhjendamiseks. Samuti mõtlevad nad teiste arvamuste valguses järele omaenda seisukohtade üle. Mängijad  võiksid oma arutelu jäädvustada niimoodi, et teema kohta moodustatakse nii lugudest kui ka infokaartidest  kobaraid, mis peegeldavad kokkuvõttes rühma seisukohta.</p>

                <h3>III osa - Seisukohad (≈20 min)</h3>
                <p>Mängijad loevad läbi erinevad poliitilised seisukohad antud teema kohta:</p>
                <div class="flex flex-wrap gap-2">
                    <div class="e-card text-center">Seisukoht 1</div>
                    <div class="e-card text-center">Seisukoht 2</div>
                    <div class="e-card text-center">Seisukoht 3</div>
                    <div class="e-card text-center">Seisukoht 4</div>
                </div>
                <p>Rühma jagatud seisukoht: Mängu antud osa kutsub mängijaid mõtlema, millised seisukohad on rühmas esindatud ning kas oleks võimalik jõuda rühmas konsensuseni (ühiselt jagatud/heakskiidetud seisukohani).</p>
                <p><b>Selle võiks läbi viia järgnevalt:</b></p>
                <ol>
                    <li class="my-4 leading-tight">
                        Loe läbi seisukohad 1-4.
                    </li>
                    <li class="my-4 leading-tight">
                        Proovige leida ühisosa: kas leidub seisukoht, millega te kõik suudate leppida? Kui ei, siis äkki on võimalik sõnastada ühine seisukoht, mida nende nelja hulgas kirjas veel pole? 
                    </li>
                    <li class="my-4 leading-tight">
                        Kõik mängijad hääletavad individuaalselt, kasutades mõnda digirakendust. 
                    </li>
                    <li class="my-4 leading-tight">
                        Votes are recorded on the voting sheet, which provides an excellent visual summary and allows you to compare your group’s results with that of other players.
                    </li>
                </ol>

                <h3>Mängu kaardid: Teema 1</h3>
                <UiCardGamePrintMessage url="../tools/cards/viruses/theme1" />
                <ToolsCardgameVirusesTheme1 :printMode="false" />
                <hr />

                <h3>Mängu kaardid: Teema 2</h3>
                <UiCardGamePrintMessage url="../tools/cards/viruses/theme2" />
                <ToolsCardgameVirusesTheme2 :printMode="false" />
            </section>


        </section>
    </div>
</template>