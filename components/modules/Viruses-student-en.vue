<script setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();

    const changeTab = (index) => {
        userPrefs.setLearnPath("learnPathViruses", index);
    } 
</script>

<template>
    <!-- <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-6 px-10 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="answers" target="_blank" class="text-lg font-bold uppercase">Your answers</nuxt-link>
    </section> -->

    <UiYourAnswersButton url="answers" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="viruses-student-en" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="en" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Viruses</h1>
            <h5 class="font-normal uppercase leading-tight">Materials for students</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">Introduction</h2>

            
            <!-- <section class="e-card e-module__meta">
                <p class="m-0 leading-tight font-bold">
                    You may find <a href="https://docs.google.com/document/d/1DAi745eJ9z4-Nky9xG8-qXZk5kiMgk_Ti8yDXuFU7tI/edit?usp=sharing" target="_blank">this Google Docs document</a> useful to write down your answers.
                </p>
            </section> -->


            <p>
                This module invites you to falsify (“bust”) or confirm a common myth about viruses. In a video introduction, a few virus-related beliefs are brought up, after which you are expected to express your opinion and discuss the topic within your group. Also, you are invited to opt out of one myth about the viruses to be busted, whether based on secondary evidence (e.g., information searches from the internet) or experimentally. 
            </p>
            <p>
                Through this activity, you learn to assess the reliability of information sources (through science/research databases, by studying popular science and other media) and/or develop further your experimentation skills. In both cases, you need to pose a testable hypothesis or a research question and then find evidence to confirm / falsify the hypothesis / answer your research question. After making conclusions, you are invited to prepare and present your findings to your classmates (or other audiences) in a relevant and convincing manner through a short video post, poster, slideshow, etc. The module is finished with a board game where you must decide on virus-related issues.
            </p>
        
                
            

            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-1">Activity 1: Presentation of the video introduction</h2>
            

            <p>Please watch the video carefully. Write down your initial thoughts and feelings about the issues presented.</p>

            <UiYoutube video="t4v-36h2noo" /> 
            

            



<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-2">Activity 2: Group discussion</h2>
            
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
            
            <p>After watching the video, you are invited to discuss the topic within your group (4-6 members).</p>
            <ol>
                <li>Please, express your initial thoughts and feelings about the presented issue to the others.</li>
                <li>As a group, you are invited to choose one of the following myths for busting based on information found on the internet, (text)books, or/and, if possible, experimentally.</li>
            </ol>
            <p>You could choose between the following myths or define your own (in the last case, please consolidate the topic first with your teacher):</p>

            
            <h3><span class="text-rose-400">Myth 1:</span> Vaccines cause autism/ serious side effects</h3>
            <p>Some people believe that vaccines and their additives/preservatives can cause severe reactions in the organism; some include autism - a group of developmental disabilities that can cause significant social, communication, and behavioural challenges. Are those claims warranted?</p>

            <h3><span class="text-rose-400">Myth 2:</span> Infant immune systems cannot handle multiple vaccines.</h3>
            <p>A few days after the birth as well as some weeks/months later, several different vaccines are injected into a baby. The question is if this can be handled by an infant's body?</p>

            <h3><span class="text-rose-400">Myth 3:</span> Immunity acquired through a disease is a better choice than immunity acquired through vaccination.</h3>
            <p>Natural immunity is obtained from exposure to the disease through infection. Whereas vaccine-induced immunity is obtained by introducing a killed or weakened form of the disease organism or mRNA created in a laboratory to teach our cells how to make a protein or even just a piece of a protein or modified version of a virus that triggers an immune response. Which raises the question of whether they are equal or not.</p>

            <h3><span class="text-rose-400">Myth 4:</span> Vaccines contain life-threatening substances.</h3>
            <p>Sometimes it has been said that vaccines might contain additives or preservatives, some toxic as mercury, aluminium, formaldehyde, etc. Whether or to what extent are these claims valid?</p>

            <h3><span class="text-rose-400">Myth 5:</span> Better hygiene and sanitation are responsible for decreased infections, not vaccines.</h3>
            <p>The spread of the disease has been argued to be related to environmental conditions, sanitation, and personal hygiene. During the last two centuries, there has been improvement in all. Same time the number of infections has decreased, and vaccination has increased. But can we say that vaccines do not matter?</p>

            <h3><span class="text-rose-400">Myth 6:</span> Vaccines can infect the child with the disease it is trying to prevent.</h3>
            <p>Some vaccines (measles, chickenpox, etc.) use weakened forms of the disease organism (live-attenuated vaccines). The question is if this will infect the child?</p>

            <h3><span class="text-rose-400">Myth 7:</span> We do not need to vaccinate because many countries have low infection rates.</h3>
            <p>As very few people have diseases, there is a very low probability that I will be in contact with those people, or it is improbable that I will travel to areas with higher infection rates. Therefore, some believe we could abandon most vaccines routinely administered to children.</p>

            <h3><span class="text-rose-400">Myth 8:</span> Soap is as good as alcohol for killing certain viruses (e.g. COVID-19)</h3>
            <p>One option to disinfect is using alcohol, but the other is hashing hands with soap. But are they equally effective?</p>

            <h3><span class="text-rose-400">Myth 9:</span> Masks are pointless in preventing upper respiratory diseases (e.g. COVID-19).</h3>
            <p>There has been much discussion in society about the effectiveness of wearing masks for preventing droplet diseases. At the same time, this habit has been normality in some, e.g. Asian cultures. Still, what is the scientific evidence behind it? Or is it possible for you to test their effectiveness yourself?</p>
            
            <h3><span class="text-rose-400">Myth 10:</span> Prolonged use of the mask produces hypoxia/Masks can cause carbon dioxide poisoning.</h3>
            <p>It is believed that through the mask, you will get less oxygen. If it is true, then with a limited oxygen supply, there is an increased risk of oxygen lack, called hypoxia. Same time your body releases carbon dioxide that, in very high concentrations, can be toxic. But is this assumption actually true?</p>

            







<!-- 
    333333 
        33
     33333
        33
    333333
 -->


            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-3">Activity 3: Mythbusting</h2>

            <!-- <ModulesStructure>
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
            </ModulesStructure> -->


            <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-en.webp" />

            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:alt-route">
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






            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-6">Activity 6: Game</h2>

            <p class="text-sm italic">This game is adopted from, and modified based on the following source: <a href="https://playdecide.eu/playdecide-kits/167151" target="_blank" rel="noopener noreferrer">https://playdecide.eu/playdecide-kits/167151</a></p>

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

            <UiCardGamePrintMessage url="../tools/cards/viruses/theme1" />

            <ToolsCardgameVirusesTheme1 :printMode="false" />

            <hr>

            <h3>Game cards: Theme 2</h3>

            <UiCardGamePrintMessage url="../tools/cards/viruses/theme2" />

            <ToolsCardgameVirusesTheme2 :printMode="false" />







        </section>
    </div>
</template>