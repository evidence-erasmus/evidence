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
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" />
        </ClientOnly>



        <section class="e-article print:not-prose" lang="et" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <!-- <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" /> -->
            <h1 class="mb-0">Kiirgused</h1>
            <h5 class="font-normal uppercase leading-tight">Õpilase materjal</h5>
            

            <section id="s1">
                <h2 id="s1t">Sissejuhatus</h2>

                <p>
                    Antud moodulis kutsutakse Sind mõtlema kiirgustega seoses levivate müütide üle ning neid kas ümber lükkama või kinnitama. Sissejuhatavas videos tuuakse välja mõned kiirgusega seotud hirmud, mille üle te võiksite rühmades järgnevalt arutleda. Rühmaarutelu tulemusena tuleb teil valida välja üks müüt ning viia läbi müüdimurdmise tegevus, mille käigus otsite tõendeid valitud müüdi ümberlükkamiseks või kinnitamiseks. Seda tegevust võib läbi viia eksperimentaalselt või sekundaarsete andmete/tõestusmaterjali (teaduskirjandus jm Internetist saadav info) abil (Vt. Joonis 1).
                </p>
                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-et.webp" />
                <p>
                    Selle käigus õpite te hindama infoallikate (teadusandmebaasid, populaarteaduslik kirjandus, muu meedia) usaldusväärsust. Esmalt peate püstitama kontrollitava hüpoteesi. Pärast tõendite leidmist ja järelduste tegemist valmistate ette oma tulemuste esitluse klassikaaslastele (või muule publikule) asjakohasel ja veenval viisil (näiteks videopostituse või slaidiesitluse vormis). Mooduli lõpetab rollimäng tuumaenergiaga seotud kiirgusprobleemidest, mille käigus tuleb võtta seisukoht ja pakkuda lahendusi, kasutades loodusteaduslikke teadmisi ja erinevatele rollidele omistatud väärtushinnanguid.
                </p>
            </section>
                        
            




            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s2">
                <h2 id="s2t">Tegevus 1: Sissejuhatava video vaatamine</h2>
                <p>Palun vaata ära sissejuhatav video ning pane sellega seoses kirja oma esialgsed mõtted ja tunded.</p>
                <UiYoutube video="ccMo9WfKeOY" />
            </section>
            


            




            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s3">
                <h2 id="s3t">Tegevus 2: Rühmaarutelu</h2>
                
                <p>Pärast video vaatamist arutlege rühmas (4-6 inimest) nähtud video üle.</p>

                <ol class="leading-tight">
                    <li>
                        Palun jaga teistega om esialgselt tekkinud mõtteid ja tundeid.
                    </li>
                    <li>
                        Valige seejärel välja üks müüt järgnevast loetelust, mida kas eksperimendi abil või interneti vm allikatele toetudes ümber lükata või kinnitada. Kui ükski neist ei paku huvi, siis pakkuge välja enda oma. Viimasel juhul rääkige oma valik kindlasti läbi õpetajaga.
                    </li>
                </ol>
            </section>
            
            







            <hr class="mt-10 mb-40 print:my-10" />
            
            <section id="s4">
                <h2 id="s4t">
                    Müüdid kiirguste kohta
                </h2>
                
                <ul class="leading-tight">
                    <li><span class="text-rose-400 font-bold">1. müüt:</span> Päevitamine on tervisele kasulik, eriti talvel.</li>
                    <li><span class="text-rose-400 font-bold">2. müüt:</span> Mikrolaineahjud toodavad tugevat kiirgust ja selle töötamise ajal on ahju läheduses viibimine ohtlik.</li>
                    <li><span class="text-rose-400 font-bold">3. müüt:</span> Nutitelefoni lähedal on halb magada või puutuda muul viisil sellega pikaaegselt kokku.</li>
                    <li><span class="text-rose-400 font-bold">4. müüt:</span> 5G mobiilsidemastide kiirgus on inimestele ohtlikum kui eelmise põlvkonna võrkudes: 2G, 3G ja 4G kasutatav kiirgus.</li>
                    <li><span class="text-rose-400 font-bold">5. müüt:</span> Solaariumis päevitamine siseruumides on ohutum kui õues päevitamine</li>
                    <li><span class="text-rose-400 font-bold">6. müüt:</span> Hambaröntgeni kiirgus põhjustab tugevaid peavalusid.</li>
                    <li><span class="text-rose-400 font-bold">7. müüt:</span> Me peame hoiduma kiiritatud toidust, sest see on radioaktiivne ja seega ohtlik.</li>
                    <li><span class="text-rose-400 font-bold">8. müüt:</span> Radoon on tervisele kasulik väikestes annustes, nt. radoonivannis.</li>
                    <li><span class="text-rose-400 font-bold">9. müüt:</span> UV-kiirgust saab tõkestada ainult spetsiaalse UV-kiirgust blokeeriva materjaliga (kasutatakse vihmavarjude või ujumisriiete jaoks).</li>
                    <li><span class="text-rose-400 font-bold">10. müüt:</span> Pärast kiiritusravi saamist muutub inimene radioaktiivseks.</li>
                </ul>
            </section>

            





<!-- 
    333333 
        33
     33333
        33
    333333
-->

            
            <section id="s5">
                <h2 id="s5t">
                    Tegevus 3: Müüdimurdmine
                </h2>
                
                <p>
                    Järgnevalt peaksite te oma valitud müüdi sõnastama (kitsendama / piiritlema) <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method." target="_blank" rel="noopener noreferrer">kontrollitava hüpoteesi</a> või vastatava uurimisküsimuse kujul ning planeerima järgnevad uurimistegevused nii, nagu on näidatud Joonisel 1. NB! hüpotees pole ainult arvamine - see peaks põhinema olemasolevatel teadmistel. See peab olema ka kontrollitav, mis tähendab, et saate seda oma uuringu tulemusel kinnitada või ümber lükata. Samuti võiksite mõelda, kas teie poolt valitud müüti saaks “murda” ka eksperimentaalselt (tänapäevase tehnoloogia, näiteks mobiilirakenduse, mõõtevahendite, arvutimudelite või simulatsioonide abil) või seda saaks kontrollida vaid tuginedes olemasolevale kirjandusele (sh läbiviidud uurimuste tulemustele). Vastavalt sellele valige kas <b>Tegevus 3a</b> või <b>3b</b>. Nendest meetoditest on võimalik kasutada rohkem kui üht, rakendades nn triangulatsiooni põhimõtet – suurendades oma järelduste paikapidavust kasutades erinevaid allikaid.
                </p>
                <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                    <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                        <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-4 px-2 text-slate-300"
                                :class="{ 'bg-sky-600 text-slate-50 ring-2 ring-slate-800 ring-offset-2 ring-offset-sky-300': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >
                                    Tegevus 3a<br/>
                                    <span class="text-sm">Müüdimurdmine eksperimendi abil</span>
                                </button>
                            </Tab>
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-4 px-2 text-slate-300 focus:outline-none focus:ring-4"
                                :class="{ 'bg-sky-600 text-slate-50 ring-2 ring-slate-800 ring-offset-2 ring-offset-sky-300': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >
                                    Tegevus 3b
                                    <br/>
                                    <span class="text-sm">Müüdimurdmine sekundaarsete allikate abil</span>
                                </button>
                            </Tab>
                        </TabList>
                
                        <TabPanels class="mt-2">
                            <TabPanel class="focus:outline-none">
                                <ModulesRadiationStudentActivity3aEt />
                            </TabPanel>
                            <TabPanel class="focus:outline-none">
                                <ModulesRadiationStudentActivity3bEt />
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
            
            <section id="s6">
                <h2 id="s6t">Tegevus 6: Väitlus – rollimäng</h2>

                <h4>
                    Sa oled oodatud:
                </h4>
                <ul>
                    <li>Tutvuma rollimängus püstitatud probleemidega ja vaatlema neid erinevatest vaatenurkadest.</li>
                    <li>Kujundama probleemi suhtes oma arvamust.</li>
                    <li>Töötama rühmas ühise nägemuse leidmise suunas.</li>
                    <li>Esitama ja kaitsma oma argumente.</li>
                    <li>Hääletama poliitiliste seisukohtade üle.</li>
                </ul>
                <p>
                    Rollimäng esitatakse TV väitlussaate kujul. Kokku hõlmab väitlus kaheksat erinevat rolli, millest igat esindab 3-4 mängijaga rühm. Iga rühm nimetab ühe liikme pressiesindajaks, teised osalevad nõustajatena. Kaks õpilast on televäitluse moderaatorid (saatejuhid). Moderaatorid peavad arutelu ajal aega juhtima ja rollimängu lõpus esitama kokkuvõtvad märkused (siinkohal on neile abiks <NuxtLink to="https://docs.google.com/document/d/1o0rw-ZY0C3aV1PxsiEU-uJamgimLh6XYndBnSw07XLM/edit?usp=drive_link" target="_blank">tööleht</NuxtLink>). Nad võivad kutsuda osalejaid hääletama poliitiliste seisukohtade üle.
                </p>
                
                <h3>
                    Teema: Tuumaenergia
                </h3>
                <p>
                    Selle teemaga töötamise konkreetne eesmärk on arendada arutelu ja põhjendamise kaudu Sinu kriitilist mõtlemist tuumaenergia küsimuses ning see on seotud müüdiga "tuumaenergia pole ohutu". Sellel teemal on kaks seisukohta: tuumaenergia poolt ja vastu. Seega on klass jagatud omakorda kahte suuremasse rühma vastavalt neile jagatud rollidele.
                </p>

                <div class="md:grid md:grid-cols-2 gap-4">
                    <div class="border-4 border-green-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Seisukoht 1: Poolt
                        </h4>
                        <p>
                            Riik peab tunnistama, et tuumaenergia on ohutu ja pakub "kuldset võimalust" puhtama ja õiglasema maailma loomiseks. Riik peab investeerima ohutu tuumajäätmete lõpphoidla loomisesse.
                        </p>
                    </div>
                    <div class="border-4 border-red-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Position 2: Vastu
                        </h4>
                        <p>
                            Riik peab sulgema kõik tuumareaktorid riigis aastaks 2030. Ohutu tuumajaam ja ohutu tuumajäätmete hoidla on illusioon.
                        </p>
                    </div>
                </div>


                <h3>
                    I osa (≈ 25 minutit)
                </h3>
                <p>
                    Igale rühma antakse rollikaart (valikumeetodi võiksite otsustada koos õpetajaga), mis sisaldab rühma poolt esindatava rolli lühikirjeldust koos argumentidega, mis toetavad kaitstavat seisukohta. Lisaks rollikaartidele antakse igale rühmale tööleht, mille nad peavad rollimängu ajal täitma (<NuxtLink to="https://docs.google.com/document/d/1oyrAt_U0Ur7Rs1z_cEwUw2J0hkQaxy1OhCd1zYLaFbw/edit?usp=sharing" target="_blank">vt töölehte</NuxtLink>).
                </p>
                <p>
                    Peate oma seisukoha toetamiseks esitama informeeritud argumente (väiteid).
                </p>
                <p>
                    Tuumaenergia teemat toetab mitu sellega seotud infokaarti.
                </p>

                <div class="grid grid-cols-5 gap-2">
                    <div v-for="i in 4" class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">
                        Info {{ i }}
                    </div>
                    <div class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">...</div>
                </div>

                <p>
                    Kõigil mängijatel on juurdepääs kõikidele infokaartidele. Iga meeskond valib need, mida ta peab oma rolli jaoks eriti asjakohaseks. Samuti otsivad nad Internetist lisateavet, pidades silmas usaldusväärsete allikate valimise tähtsust, nagu seda tehti varem <b>Tegevuses 3</b>.
                </p>


                <h3>
                    II osa (≈ 20 minutit)
                </h3>
                <h4>
                    Rühmaarutelu:
                </h4>
                <p>
                    Selles etapis jagavad õpilased rühmas teistega oma arvamusi ja täpsustavad ühiseid argumente. Mängijad kasutavad infokaarte ja muud teavet oma seisukoha toetamiseks.
                </p>
                <p>
                    I ja II osa võivad jätkuda kodutööna ja ettevalmistusena väitluseks (III osa), mis toimub järgmises tunnis. Esialgseid argumente saab ette valmistada täiustatud visuaalsel kujul, kasutades ettevalmistatud lühivideoid ja slaidiesitlusi.
                </p>


                <h3>
                    III osa (≈ 45 min., kuid võib minna ka rohkem)
                </h3>
                <p>
                    Arutelu ehk antud juhul rollimäng jaguneb kaheks osaks. Esimeses osas antakse iga rühma pressiesindajale kolm minutit aega, et esitada oma roll ja esialgsed argumendid, mis nad II osas töölehel üles kirjutasid (vt töölehe esimest veergu). See tööleht sisaldab ka veerge teiste rühmade  esitatud vastuargumentide ja nende ümberlükkamise kohta märkmete tegemiseks (vt töölehe teist ja kolmandat veergu), mida rollimängus edasi kasutada.
                </p>
                <p>
                    Kui kõik kaheksa rühma on oma argumendid esitanud, tehakse <b>viieminutiline paus</b>, et võimaldada mängijatel mõelda, kuidas lükata teiste väiteid ümber ning esitada vastuargumente.
                </p>
                <p>
                    Pärast viieminutilist vaheaega arutavad rollimängu teises osas erinevad kõneisikud omavahel, püüdes toetada oma seisukohta üksteise argumentidele. Nõustajate (teiste rühmaliikmete) ülesanne rollimängu selles osas on toetada oma rühma eestkõnelejat, jätkates teisi rolle esindavate rühmade  argumentide ümberlükkamist.
                </p>
                <p>
                    Väljendage julgelt oma argumente ja "professionaalseid" ideid.
                </p>
                <p>
                    Arutelu ajal modereerivad tegevust telesaadete saatejuhid. Arutelu lõpus teevad moderaatorid kokkuvõtte, tuues esile arutelu käigus esile kerkinud põhiteemad ja arvamused. Selles etapis kutsutakse mängijaid käsitlema küsimusi rühmana (kogu klass): poolt või vastu või et jõuda teise rühmaga  ühise arvamuseni.
                </p>
                <p>
                    Kui moderaatorid peavad seda vajalikuks, paluvad nad osalejatel hääletada tuumaenergia tootmise järkjärgulise lõpetamise poolt või vastu.
                </p>


                <h3>Kaardid</h3>

                <UiCardGamePrintMessage url="../tools/cards/radiation" />
                <ToolsCardgameRadiation :printMode="false" />
                <hr>
            </section>

        </section>
    </div>
</template>