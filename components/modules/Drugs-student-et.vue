<script setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();

    const changeTab = (index) => {
        userPrefs.setLearnPath("learnPathViruses", index);
    }
</script>

<template>
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
            <h1 class="mb-0">Kanep ja “imerohud”</h1>
            <h5 class="font-normal uppercase leading-tight">Õpilase materjal</h5>
        
            <section id="s1">
                <h2 id="s1t">Sissejuhatus</h2>

                <p>
                    Selles moodulis kutsutakse teid üles murdma levinud müüte kanepi ning sellise “imerohu” nagu MMS (Miracle Mineral Solution) kohta. Sissejuhatavas videos tuuakse välja mõned uimastite ja “imerohtudega” seotud uskumused, millele järgneb rühmaarutelu. Samuti palutakse teil välja valida üks müüt, mida purustada, tuginedes sekundaarsele materjalile (infootsing internetist). Selle tegevuse kaudu õpite hindama erinevate teabeallikate usaldusväärsust. Selleks peate püstitama testitava hüpoteesi või vastatava uurimisküsimuse ja seejärel leidma tõendeid hüpoteesi ümberlükkamiseks või kinnitamiseks või vastama oma uurimisküsimusele. Pärast järelduste tegemist palutakse teil oma järeldused asjakohasel ja veenval viisil ette valmistada ja klassikaaslastele (või muule publikule) esitada. Mooduli lõpetab juhtumiuuring, kus peate lahendama moraalse dilemma kanepi või MMS-i tarvitamisega  seotud küsimustes.
                </p>
            </section>
                        
 
            






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-2">
                <h2 id="s-2t">Tegevus 1: Sissejuhatava video vaatamine</h2>
                <p>Palun vaata hoolikalt videot. Pane kirja oma esialgsed mõtted ja muljed nähtu kohta.</p>
                <UiYoutube video="cN5KV_WJubw" />
            </section>

 


<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-3">
                <h2 id="s-3t">Tegevus 2: Rühmaarutelu</h2>

                <p>Pärast video vaatamist kutsutakse teid oma rühmas (4-6 liiget) teema üle arutlema.</p>
                <ol class="leading-tight">
                    <li>Palun avaldage teistele oma esialgsed mõtted ja emotsioonid nähtud video kohta.</li>
                    <li>Rühmana kutsutakse teid Internetist leitava teabe põhjal (usaldusväärsetest allikatest pärit teaduslik info, faktivideod, teabelehed ja brošüürid) uurima (ümber lükkkama) ühte järgnevates müütidest või pakkuma välja mõnda teist teemaga seotud müüti (viimasel juhul kooskõlastage oma müüt kõigepealt õpetajaga):</li>
                </ol>
                <ul class="leading-tight">
                    <li><span class="text-rose-400 font-bold">Müüt 1:</span> Kanep pole tervisele eriti ohtlik</li>
                    <li><span class="text-rose-400 font-bold">Müüt 2:</span> Mõnele noorele kanep sobib</li>
                    <li><span class="text-rose-400 font-bold">Müüt 3:</span> Kanep on meditsiiniline ravim ja seetõttu kõigile ohutu</li>
                    <li><span class="text-rose-400 font-bold">Müüt 4:</span> Kanep parandab tuju ja edendab vaimset tervist</li>
                    <li><span class="text-rose-400 font-bold">Müüt 5:</span> Kanep ei tekita sõltuvust</li>
                    <li><span class="text-rose-400 font-bold">Müüt 6:</span> Kanep on väravaks kangemate narkootikumide tarbimisele</li>
                    <li><span class="text-rose-400 font-bold">Müüt 7:</span> Kanepist ei ole võimalik saada üledoosi</li>
                    <li><span class="text-rose-400 font-bold">Müüt 8:</span> Kanepisuits on ohutu</li>
                    <li><span class="text-rose-400 font-bold">Müüt 9:</span> MMS ravib COVID-19</li>
                    <li><span class="text-rose-400 font-bold">Müüt 10:</span> MMS ravib autismi</li>
                    <li><span class="text-rose-400 font-bold">Müüt 11:</span> MMS aitab langetada kehakaalu</li>
                </ul>
            </section>

            





<!-- 
    333333 
        33
     33333
        33
    333333
 -->            



            <section id="s-4">
                <h2 id="s-4t">
                    Tegevus 3: Müüdimurdmine
                </h2>
                
                <UiContentImage src="https://evidence.onkel.ee/assets/mythbusting-et.webp" :elevated="true">
                    <template #caption>
                        <b>Joonis 1.</b>
                    </template>
                </UiContentImage>

                <ModulesDrugsStudentActivityEt />
                
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
                <h2 id="s5t">Tegevus 6: Juhtumiuuringud</h2>
                

                <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                    <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                        <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'text-slate-50 ring-4 ring-blue-400 ring-offset-2 ring-offset-blue-300': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >6a:<br />Juhtumiuuring 1</button>
                            </Tab>
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'text-slate-50 ring-4 ring-blue-400 ring-offset-2 ring-offset-blue-300': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >6b:<br />Juhtumiuuring 2</button>
                            </Tab>
                        </TabList>
                        <TabPanels class="mt-2">
                            <TabPanel class="focus:outline-none">
                                <ModulesDrugsStudentCasestudy1Et />
                            </TabPanel>
                            <TabPanel class="focus:outline-none">
                                <ModulesDrugsStudentCasestudy2Et />
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>

                


            </section>

        </section>
    </div>
</template>