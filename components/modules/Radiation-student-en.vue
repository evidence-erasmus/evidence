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



        <section class="e-article print:not-prose" lang="en" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <!-- <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" /> -->
            <h1 class="mb-0">Radiation</h1>
            <h5 class="font-normal uppercase leading-tight">Student material</h5>
        
            <h2 id="section-1">Introduction</h2>

            
            <!-- <section class="e-card e-module__meta">
                <p class="m-0 leading-tight font-bold">
                    You may find <a href="https://docs.google.com/document/d/1DAi745eJ9z4-Nky9xG8-qXZk5kiMgk_Ti8yDXuFU7tI/edit?usp=sharing" target="_blank">this Google Docs document</a> useful to write down your answers.
                </p>
            </section> -->


            <p>
                In this module, you are invited to reflect on existing fears and falsify or confirm myths concerning different forms of radiation. Depart from an introductory video where some radiation-related fears and myths are brought up and discuss them in groups. Group discussion will lead to selecting a myth-busting activity where you will look for evidence to falsify or confirm a chosen myth. This activity could be conducted experimentally or using secondary evidence, such as information from scientific literature and the internet. Through this activity, you will learn to assess the reliability of information sources (science databases, popular science, and other media). You have first to pose a testable hypothesis (see Figure 1).
            </p>

            mythbusting img here

            <p>
                After finding evidence and making conclusions, you will prepare a presentation of your results to your classmates (or other audiences) in a relevant and convincing manner (for example, in the form of video posts or PowerPoint presentations).  The module is finished with a role-play about radiation issues related to Nuclear Power where you can take positions and suggest solutions using scientific knowledge and personal values attributed to different roles.
            </p>
                        
            

            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-2">Activity 1: Presentation of the video introduction</h2>
            
            <p>Please watch the introductory video. Put down your initial thoughts and feelings about the issues presented.</p>

            <UiYoutube video="ccMo9WfKeOY" />

            



<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-3">Activity 2: Group discussion</h2>
            
            <p>After watching the video, you are invited to discuss the topic in small groups (4-6 members).</p>

            <ol class="leading-tight">
                <li>Please, express your initial thoughts and feelings about the issues presented in the video to your peers.</li>
                <li>As a group, you are invited to choose one of the fears, myths, or issues for further busting (falsifying) or confirming based on information that can be found from different sources: the internet, textbooks, etc.</li>
            </ol>
            
            <p>
                Alternatively, you can broaden your perspective on radiation-related myths and look at following other myths that interest you and your group members.
            </p>

            
            
            <h2 id="section-myths">

            </h2>
            
            <ul class="leading-tight">
                <li><span class="text-rose-400 font-bold">Myth 1:</span> Sunbathing is good for health, especially during winter.</li>
                <li><span class="text-rose-400 font-bold">Myth 2:</span> Microwave ovens send intense radiation, and it is dangerous to be near the oven when it works.</li>
                <li><span class="text-rose-400 font-bold">Myth 3:</span>  It is bad to sleep near a smartphone and be exposed to its radiation for a long time.</li>
                <li><span class="text-rose-400 font-bold">Myth 4:</span> Radiation emitted by 5G mobile communication masts is more dangerous for humans than that used in the previous generation networks: 2G, 3G and 4G.</li>
                <li><span class="text-rose-400 font-bold">Myth 5:</span> Indoor tanning in a solarium is safer than sunbathing outdoors</li>
                <li><span class="text-rose-400 font-bold">Myth 6:</span> Radiation from a dental X-ray causes severe headaches.</li>
                <li><span class="text-rose-400 font-bold">Myth 7:</span> We must avoid irradiated food because it is radioactive and dangerous.</li>
                <li><span class="text-rose-400 font-bold">Myth 8:</span> Radon is good for health in small doses.</li>
                <li><span class="text-rose-400 font-bold">Myth 9:</span> UV radiation can be blocked only by special UV-block-designed material (used for umbrellas or swimwear).</li>
                <li><span class="text-rose-400 font-bold">Myth 10:</span> After taking medical radiation treatment, a person becomes radioactive.</li>
            </ul>

            





<!-- 
    333333 
        33
     33333
        33
    333333
 -->            
            <h2 id="section-mythbusting">
                Activity 3: Mythbusting
            </h2>
            
            <p>
                You are now invited to narrow down the myth/issue into a testable hypothesis - a statement that can be tested or a question that can be answered through your research. Think about how a hypothesis is not just a guess – it should be based on existing knowledge. It also has to be testable, which means you can support or refute it as a result of your study.
            </p>

            <p>
                Plan your further activities following the cycle as given in Figure 1. You should think about whether your myth can be tested experimentally, confirmed/falsified using modern technology, for example, mobile phone Apps as measuring devices, computer models and simulations, or using secondary evidence (e.g. already conducted experiments that have been published or available in the form of YouTbe videos).  Based on that, you should choose Activity 3a or 3b for further study. You can use more than one of these methods, applying the so-called triangulation principle – increasing the validity of your findings through the convergence of information from different sources.
            </p>

            <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                    <Tab as="template" v-slot="{ selected }">
                        <button
                        class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                        :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                        >Activity 3a: Mythbusting based on experiment</button>
                    </Tab>
                    
                    <Tab as="template" v-slot="{ selected }">
                        <button
                        class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                        :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                        >Activity 3b: Mythbusting based on secondary sources</button>
                    </Tab>
                    
                    </TabList>
            
                    <TabPanels class="mt-2">
                        <TabPanel class="focus:outline-none">
                            <ModulesRadiationStudentActivity3aEn />
                        </TabPanel>
                        <TabPanel class="focus:outline-none">
                            <ModulesRadiationStudentActivity3bEn />
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






            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-7">Activity 6: Debate game – role-play</h2>

            <h4>
                In this activity, you are expected to:
            </h4>

            <ul>
                <li>Get familiar with the problems posed in role-playing and see them from different perspectives.</li>
                <li>Form or clarify your own opinion.</li>
                <li>Work towards a shared group vision.</li>
                <li>Present and defend your arguments.</li>
                <li>Vote on policy positions.</li>
            </ul>

            <p>
                The role-play could be formed as a television debate programme involving eight roles you would represent in teams of 3-4 players. Each team nominates one member as spokesperson, while others act as advisors. Two students in the class will be television debate moderators (programme presenters). Moderators will need time management during the debate and present summary remarks at the end of the role-play. They may invite participants to vote on policy positions.
            </p>


            
            <h3>
                Theme: Nuclear energy
            </h3>

            <p>
                The specific aim of working with this theme is to enable debate and argumentation to develop your critical thinking regarding nuclear energy. The debate is related to the myth that “Nuclear energy is not safe.” This theme has two positions: in favour and against nuclear power. Thus, the class is divided into two groups according to their attributed roles.
            </p>

            <div class="grid grid-cols-2 gap-4">
                <div class="bg-amber-200 rounded-lg">
                    <h4 class="m-0 p-4 text-center">
                        Position 1: In favour
                    </h4>
                </div>
                <div class="bg-amber-200 rounded-lg">
                    <h4 class="m-0 p-4 text-center">
                        Position 2: Against
                    </h4>
                </div>
            </div>




            <h3>Game Instructions:</h3>
            
            <ol>
                <li>Players are divided into equal groups.</li>
                <li>
                    <b>Choosing cards.</b> Each team chooses a green and a blue card. 
                    <ul>
                        <li>
                            <b>Green cards</b> record stories related to climate change. Stories are based on facts. 
                        </li>
                        <li>
                            Each green card corresponds to a <b>blue information card</b> related to the story it contains and gives the answer to it.
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Discussion in groups.</b> All players in each team read the green card. Then, the players discuss their stories with their teams. 
                    <br />
                    For example, the first green card tells a true story about a 16-year-old male polar bear found dead in Svalbard by starvation. Next, the team players try to explain why the polar bear died.
                </li>
                <li>
                    <b>Plenary discussion.</b> When each group presents the story in plenary, the group with the corresponding blue information card tries to respond to the script with its own arguments. 
                    <br />
                    At this stage, players share their views with others and improve their responses as they hear different arguments and opinions. In this case, the blue card team claims that the bear died due to climate change.
                </li>
                <li>
                    At the end of the game, players will link the story cards to info cards. Each argument gets 3 points. The team with the highest score wins the game.
                </li>
            </ol>

            
            <hr>
            
            <h3>The cards</h3>


            <!-- Lauamäng võiks pigem õpetaja materjalide all olla? -->

            <UiCardInfo>
                <div>
                    <p>Here the cards are fitting into the page layout and take as little space as their inner content demands. So this is just a preview. <b>If you want to see the cards as regular uniform size playing cards and print them out, please open the special "card-view" page.</b></p>
                    
                    <nuxt-link to="../tools/cards/climate-change" target="_blank" 
                    class="mb-3 px-4 py-2 inline-flex items-center gap-2 
                    bg-sky-600 text-md rounded text-white no-underline uppercase transition
                    hover:bg-sky-700
                    print:hidden">
                        <icon name="material-symbols:print-outline-rounded" />Open printable cards
                    </nuxt-link> (new tab)
                </div>
            </UiCardInfo>

            <ToolsCardgameClimateChange :printMode="false" />

            <hr>


        </section>
    </div>
</template>