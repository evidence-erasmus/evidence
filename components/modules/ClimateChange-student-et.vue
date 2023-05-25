<script setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();

    const changeTab = (index) => {
        userPrefs.setLearnPath("learnPathViruses", index);
    } 
</script>

<template>
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="answers" target="_blank" class="text-lg font-bold uppercase">Sinu vastused</nuxt-link>
    </section>
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <UiTableOfContents class="lg:max-w-xs">
            <template #title>Sisukord</template>
            <template #content>
                <ol>
                    <li>
                        <a href="#activity-1">Video vaatamine</a>
                    </li>
                    <li>
                        <a href="#activity-2">Rühmaarutelu</a>
                    </li>
                    <li>
                        <a href="#activity-3">Müüdid</a>
                    </li>
                    <li>
                        <a href="#activity-4">Transforming evidence to a suitable format</a>
                    </li>
                    <li>
                        <a href="#activity-5">Group presentations</a>
                    </li>
                    <li>
                        <a href="#activity-6">Card game</a>
                    </li>
                </ol>
            </template>
        </UiTableOfContents>



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
                        
            

            <hr id="activity-1" class="mt-10 mb-40 print:my-10" />
            <h2>Tegevus 1:  Video vaatamine</h2>
            
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
            


            <hr id="activity-2" class="mt-10 mb-40 print:my-10" />
            <h2>Tegevus 2: Rühmaarutelu</h2>
            
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
            

            
            
            
            
            
            
            
            
            
            
            <hr id="activity-3" class="mt-10 mb-40 print:my-10" />
            <h2>Kliimamuutuste müüdid</h2>

            
            <h3><span class="text-rose-400">Müüt nr. 1:</span> Liikide väljasuremine on looduslik protsess. Massiline liikide väljasuremine on alati toimunud.</h3>

            <p>Liikide väljasuremine on toimunud läbi Maa ajaloo. Eelajaloolistest aegadest on meil tõendeid mitme massilise väljasuremise kohta, eriti dinosauruste väljasuremise kohta. See väljasuremine, mis leidis aset 66 000 000 aastat tagasi, oli tingitud asteroidi kokkupõrkest Maale. Aastate jooksul on meil teisigi tuntud näiteid, näiteks mammutite väljasuremine. Registreeritud väljasuremise põhjused on aga erinevad.</p>

            <p>Ka vihje, et inimkond on võimeline mõjutama ja häirima sellise ulatusega jõude, peegeldab inimeste enesekeskset ülbust. Inimkond on looduse osa. Loodus ei ole inimkonna osa. Inimesed ei saa neid protsesse parandada ega sellesse sekkuda (Financial Sense University).</p>

            <p>
                Viidatud: 
                <br />
                <a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
            </p>
            
            <UiNavButtonBar :buttons="[
                {text:'Juhised', url:''},
                {text:'Avatud uurimus', url:'/'},
                {text:'Juhitud uurimus', url:'/'}
                ]" 
            />

            <hr />

            <h3><span class="text-rose-400">Müüt nr. 2:</span> Liigid suudavad kliimamuutustega kohaneda.</h3>

            <p>Maa ajalugu hinnatakse 4,54 miljardile aastale. Läbi aegade on planeedil valitsenud ilmastikutingimused muutunud. Seetõttu on Maal elavad liigid/organismid sunnitud ellujäämiseks ja säilimiseks uute tingimustega kohanema. Nii tekkis liikide evolutsioon.</p>

            <p>Taimed ja loomad on juba mitu korda ebasoodsate tingimustega (kliimamuutused, meteoriidid, vulkaanipursked jne) kohanenud. See võimaldab neil kohaneda kasvavate temperatuuride ja olukorraga, mida me praegu nimetame kliimamuutusteks. Teisisõnu, liigid on looduslikult võimelised uutes tingimustes ellu jääma.</p>

            <p>
                Viidatud: 
                <br />
                <a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
            </p>







<!-- 
    333333 
        33
     33333
        33
    333333
 -->


            <hr id="activity-35" class="mt-10 mb-40 print:my-10" />
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
                </div>



<!-- 
    44   44    5555555
    44   44    55
    4444444    5555555
         44         55
         44    5555555
-->
                



            <ModulesStudentActivity45En />




<!-- 
    6666666
    66
    6666666
    66   66
    6666666
 -->






            <hr id="activity-6" class="mt-10 mb-40 print:my-10" />
            <h2>Tegevus 6: Game</h2>

            <p class="text-sm italic">This game is adopted from, and modified based on the following source: <a href="https://playdecide.eu/playdecide-kits/167151" target="_blank" rel="noopener noreferrer">https://playdecide.eu/playdecide-kits/167151</a></p>

            <ModulesStructure>
                    <template #title>Activity 6<br />SOCIO-SCIENTIFIC DECISION-MAKING</template>
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

            <p>In the following activity, you are invited to play a card game with your group/classmates to practice simple, respectful, and fact-based group discussion that is expected to model socio-scientific decision-making processes in our society. The game enables you to explore a topic in-depth in an informal and informative way, reflect on thoughts and opinions that would be difficult to get to and express them in other ways.</p>
            
            <p class="font-bold">More precisely, you are expected to:</p>
            <ul class="leading-tight">
                <li><b>Get familiar</b> with the problems posed within the context of vaccination/wearing masks and look at them from different perspectives.</li>
                <li>Form or clarify your <b>own opinion</b></li>
                <li>Work towards a shared <b>group vision</b></li>
                <li><b>Vote</b> on policy positions, <b>share</b> your results, and <b>compare</b> them with the opinions of others who played the same game (and had the same theme).</li>
            </ul>

            
            <hr>
            
            <p>The game is played in groups (á 4 players).</p>

            <h3>Phase I - Choosing a story (≈20 minutes)</h3>

            <p>There are two themes:</p>

            <div class="grid grid-cols-2 gap-2">
                <div class="e-card text-center">
                    <p class="my-2">Theme 1</p>
                    <h4 class="my-1 leading-none">Vaccination</h4>
                </div>
                <div class="e-card text-center">
                    <p class="my-2">Theme 2</p>
                    <h4 class="my-1 leading-none">Wearing masks by upper respiratory infection pandemics</h4>
                </div>
            </div>


            <p>Both themes have several cases (story cards) related to the theme.</p>

            <div class="flex flex-wrap gap-2">
                <div class="e-card text-center">Story 1</div>
                <div class="e-card text-center">Story 2</div>
                <div class="e-card text-center">Story 3</div>
                <div class="e-card text-center">Story 4</div>
                <div class="e-card text-center">Story ...</div>
            </div>

            
            <p>Each player reads through the story cards. They each choose one they find personally significant (meaningful). Each player briefly summarizes his/her story card to the rest of the group.</p>

            <p>Both themes (vaccination and wearing masks) have several info cards related to each.</p>

            <div class="flex flex-wrap gap-2">
                <div class="e-card text-center">Info 1</div>
                <div class="e-card text-center">Info 2</div>
                <div class="e-card text-center">Info 3</div>
                <div class="e-card text-center">Info 4</div>
                <div class="e-card text-center">Info 5</div>
                <div class="e-card text-center">Info 6</div>
                <div class="e-card text-center">Info ...</div>
            </div>

            <p>All players exchange and read info cards. They each choose two they find personally significant (meaningful). Each player briefly summarizes their chosen info cards to the group.</p>



            <h3>Phase II - Discussion (≈20 min)</h3>
            
            <p>Discussion: In this stage, players share their opinion(s) with others and refine their points of view as they hear different arguments and perspectives. Players use the cards gathered in phase I to support their opinions. Players can record the discussion by making clusters around the themes that reflect the group’s vision. All types of cards can be used to create a cluster.</p>
            


            <h3>Phase III - Opinions (≈20 min)</h3>

            <p>Players will read through different position cards and prepare to vote for one position that best represents their opinion (at the end of the game).</p>

            <div class="flex flex-wrap gap-2">
                <div class="e-card text-center">Position 1</div>
                <div class="e-card text-center">Position 2</div>
                <div class="e-card text-center">Position 3</div>
                <div class="e-card text-center">Position 4</div>
            </div>

            <p>A shared group response: This stage invites players to look at issues as a group: what opinions are present in your group? Can you reach a positive consensus on a position?<br /></p>

            <p><b>This stage can be conducted by the following activities:</b></p>
            <ol>
                <li class="my-4 leading-tight">
                    Read through policy positions 1-4.
                </li>
                <li class="my-4 leading-tight">
                    Try to look for common ground. Is there a policy position you can all live with? If not, try to formulate your own “fifth policy” as a group. 
                </li>
                <li class="my-4 leading-tight">
                    All players vote individually in turn on all policies. 
                </li>
                <li class="my-4 leading-tight">
                    Votes are recorded on the voting sheet, which provides an excellent visual summary and allows you to compare your group’s results with that of other players.
                </li>
            </ol>





            <h3>Game cards: Theme 1</h3>

            <UiCardInfo>
                <div>
                    <p>Here the cards are fitting into the page layout and take as little space as their inner content demands. So this is just a preview. <b>If you want to see the cards as regular uniform size playing cards and print them out, please open the special "card-view" page.</b></p>
                    
                    <nuxt-link to="../tools/cards/viruses/theme1" target="_blank" 
                    class="mb-3 px-4 py-2 inline-flex items-center gap-2 
                    bg-sky-600 text-md rounded text-white no-underline uppercase transition
                    hover:bg-sky-700
                    print:hidden">
                        <icon name="material-symbols:print-outline-rounded" />Open printable cards
                    </nuxt-link> (opens in new tab)
                </div>
            </UiCardInfo>

            <ToolsCardgameVirusesTheme1 :printMode="false" />

            <hr>

            <h3>Game cards: Theme 2</h3>

            <UiCardInfo>
                <div>
                    <p>Here the cards are fitting into the page layout and take as little space as their inner content demands. So this is just a preview. <b>If you want to see the cards as regular uniform size playing cards and print them out, please open the special "card-view" page.</b></p>
                    
                    <nuxt-link to="../tools/cards/viruses/theme2" target="_blank" 
                    class="mb-3 px-4 py-2 inline-flex items-center gap-2 
                    bg-sky-600 text-md rounded text-white no-underline uppercase transition
                    hover:bg-sky-700
                    print:hidden">
                        <icon name="material-symbols:print-outline-rounded" />Open printable cards
                    </nuxt-link> (opens in new tab)
                </div>
            </UiCardInfo>

            <ToolsCardgameVirusesTheme2 :printMode="false" />







        </section>
    </div>
</template>