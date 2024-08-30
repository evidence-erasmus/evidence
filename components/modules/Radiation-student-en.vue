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



        <section class="e-article print:not-prose" lang="en" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <!-- <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" /> -->
            <h1 class="mb-0">Radiation</h1>
            <h5 class="font-normal uppercase leading-tight">Student material</h5>
            
            <section id="s1">
                <h2 id="s1t">Introduction</h2>

                <p>
                    In this module, you are invited to reflect on existing fears and falsify or confirm myths concerning different forms of radiation. Depart from an introductory video where some radiation-related fears and myths are brought up and discuss them in groups. Group discussion will lead to selecting a myth-busting activity where you will look for evidence to falsify or confirm a chosen myth. This activity could be conducted experimentally or using secondary evidence, such as information from scientific literature and the internet. Through this activity, you will learn to assess the reliability of information sources (science databases, popular science, and other media). You have first to pose a testable hypothesis (see Figure 1).
                </p>
                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-en.webp" />
                <p>
                    After finding evidence and making conclusions, you will prepare a presentation of your results to your classmates (or other audiences) in a relevant and convincing manner (for example, in the form of video posts or PowerPoint presentations). The module is finished with a role-play about radiation issues related to Nuclear Power where you can take positions and suggest solutions using scientific knowledge and personal values attributed to different roles.
                </p>
            </section>
                        
            





            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s2">
                <h2 id="s2t">Activity 1: Presentation of the video introduction</h2>
                <p>Please watch the introductory video. Put down your initial thoughts and feelings about the issues presented.</p>
                <UiYoutube video="ccMo9WfKeOY" />
            </section>
            



<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s3">
                <h2 id="s3t">Activity 2: Group discussion</h2>
                
                <p>After watching the video, you are invited to discuss the topic in small groups (4-6 members).</p>

                <ol class="leading-tight">
                    <li>Please, express your initial thoughts and feelings about the issues presented in the video to your peers.</li>
                    <li>As a group, you are invited to choose one of the fears, myths, or issues for further busting (falsifying) or confirming based on information that can be found from different sources: the internet, textbooks, etc.</li>
                </ol>
                <p>
                    Alternatively, you can broaden your perspective on radiation-related myths and look at following other myths that interest you and your group members.
                </p>
                
                <ul class="leading-tight">
                    <li><span class="text-rose-400 font-bold">Myth 1:</span> Sunbathing is good for health, especially during winter.</li>
                    <li><span class="text-rose-400 font-bold">Myth 2:</span> Microwave ovens send intense radiation, and it is dangerous to be near the oven when it works.</li>
                    <li><span class="text-rose-400 font-bold">Myth 3:</span> It is bad to sleep near a smartphone and be exposed to its radiation for a long time.</li>
                    <li><span class="text-rose-400 font-bold">Myth 4:</span> Radiation emitted by 5G mobile communication masts is more dangerous for humans than that used in the previous generation networks: 2G, 3G and 4G.</li>
                    <li><span class="text-rose-400 font-bold">Myth 5:</span> Indoor tanning in a solarium is safer than sunbathing outdoors</li>
                    <li><span class="text-rose-400 font-bold">Myth 6:</span> Radiation from a dental X-ray causes severe headaches.</li>
                    <li><span class="text-rose-400 font-bold">Myth 7:</span> We must avoid irradiated food because it is radioactive and dangerous.</li>
                    <li><span class="text-rose-400 font-bold">Myth 8:</span> Radon is good for health in small doses.</li>
                    <li><span class="text-rose-400 font-bold">Myth 9:</span> UV radiation can be blocked only by special UV-block-designed material (used for umbrellas or swimwear).</li>
                    <li><span class="text-rose-400 font-bold">Myth 10:</span> After taking medical radiation treatment, a person becomes radioactive.</li>
                </ul>
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
                <h2 id="s4t">
                    Activity 3: Mythbusting
                </h2>
                
                <p>
                    You are now invited to narrow down the myth/issue into a testable hypothesis - a statement that can be tested or a question that can be answered through your research. Think about how a hypothesis is not just a guess – it should be based on existing knowledge. It also has to be testable, which means you can support or refute it as a result of your study. 
                </p>
                <p>
                    Plan your further activities following the cycle as given in Figure 1. You should think about whether your myth can be tested experimentally, confirmed/falsified using modern technology, for example, mobile phone Apps as measuring devices, computer models and simulations, or using secondary evidence (e.g. already conducted experiments that have been published or available in the form of YouTbe videos). Based on that, you should choose Activity 3a or 3b for further study. You can use more than one of these methods, applying the so-called triangulation principle – increasing the validity of your findings through the convergence of information from different sources.
                </p>
                <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                    <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                        <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-4 px-2 text-slate-300  focus:outline-none focus:ring-4"
                                :class="{ 'bg-sky-600 text-slate-50 ring-2 ring-slate-800 ring-offset-2 ring-offset-sky-200': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >
                                    Activity 3a<br/>
                                    <span class="text-sm">Mythbusting based on experiment</span>
                                </button>
                            </Tab>
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-4 px-2 text-slate-300  focus:outline-none focus:ring-4"
                                :class="{ 'bg-sky-600 text-slate-50 ring-2 ring-slate-800 ring-offset-2 ring-offset-sky-200': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >
                                    Activity 3b<br/>
                                    <span class="text-sm">Mythbusting based on secondary sources</span>
                                </button>
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
            </section>
            
            
            





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

            <section id="s5">
                <h2 id="s5t">Activity 6: Debate game – role-play</h2>

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
                    The role-play could be formed as a television debate programme involving eight roles you would represent in teams of 3-4 players. Each team nominates one member as spokesperson, while others act as advisors. Two students in the class will be television debate moderators (programme presenters). Moderators will need time management during the debate and present <NuxtLink to="https://docs.google.com/document/d/1vjM6qy2dr6UtgK6oQD2G7mBY1ugwSF-zVJS66O4PPmo/edit?usp=drive_link" target="_blank">summary remarks</NuxtLink> at the end of the role-play. They may invite participants to vote on policy positions.
                </p>

                
                <h3>
                    Theme: Nuclear energy
                </h3>
                <p>
                    The specific aim of working with this theme is to enable debate and argumentation to develop your critical thinking regarding nuclear energy. The debate is related to the myth that “Nuclear energy is not safe.” This theme has two positions: in favour and against nuclear power. Thus, the class is divided into two groups according to their attributed roles.
                </p>

                <div class="md:grid md:grid-cols-2 gap-4">
                    <div class="border-4 border-green-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Position 1: In favour
                        </h4>
                        <p>
                            The state must recognise that nuclear energy is safe and offers a "golden opportunity" to create a cleaner and more equitable world. The state must invest in creating a safe nuclear waste cemetery (final depository).
                        </p>
                    </div>
                    <div class="border-4 border-red-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Position 2: Against
                        </h4>
                        <p>
                            The state must close all nuclear reactors in the country by 2030. A safe nuclear station and a safe waste cemetery are an illusion.
                        </p>
                    </div>
                </div>


                <h3>
                    Phase I (≈ 25 minutes)
                </h3>
                <p>
                    Each team is given (a selection method could be decided with your teacher) a role card containing a brief profile of the role the team will represent, along with the arguments supporting the perspective to be defended. In addition to the role cards, each team is given the worksheet they must complete during the role-play (<NuxtLink to="https://docs.google.com/document/d/10LJHc2pPW-Qb6cUpO4Bihz3pIBPp2bzeOak9GL8mDj8/edit?usp=sharing" target="_blank">see worksheet</NuxtLink>).
                </p>
                <p>
                    You will need to present informed arguments for your position.
                </p>
                <p>
                    The nuclear energy theme has several info cards related to it.
                </p>

                <div class="grid grid-cols-5 gap-2">
                    <div v-for="i in 4" class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">
                        Info {{ i }}
                    </div>
                    <div class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">...</div>
                </div>

                <p>
                    All players have access to all info cards. Each team chooses those they find especially relevant for their role. They also search for additional information on the Internet, considering the importance of choosing reliable sources, as done previously in Activity 3.
                </p>


                <h3>
                    Phase II (≈ 20 minutes)
                </h3>
                <h4>
                    Group discussion:
                </h4>
                <p>
                    In this stage, students share their opinions with others and refine common arguments within their teams. Players use the info cards and other information to support their position.
                </p>
                <p>
                    Phases I and II can continue as homework and preparation for debate <b>(phase III)</b> that will take place in the following teaching occasion. Initial arguments can be prepared in enhanced visual form using prepared short videos and PowerPoint presentations
                </p>


                <h3>
                    Phase III (≈ 45 min., time might need to be extended)
                </h3>
                <p>
                    Debate or actual role-play is divided into two parts. In the first part, the spokesperson of each team is given three minutes to present their role and initial arguments, which they also listed on the worksheet in phase II (see the first column in the worksheet). This worksheet also included columns for noting down the counter arguments put forward by other teams, as well as refutations of these (see second and third columns of worksheet) that would be used further in the role play. Once each of the eight teams has presented its arguments, there will be a five-minute break, thus allowing refutations to be developed; the counter arguments put forward by other teams, and the refutations of these.
                </p>
                <p>
                    Following the five-minute break, in the second part of the role-play, the various spokespersons debated with one another, attempting to counter each other's arguments in support of their position. During this part of the role play, advisors (other team members) are tasked to support their team spokesperson by proposing refutations of the arguments put forward by the teams representing other roles.
                </p>
                <p>
                    Feel free to express your arguments and "professional" ideas.
                </p>
                <p>
                    During the debate, the TV programme presenters moderate the activity. At the end of the debate, the moderators provide a summing-up, highlighting key themes and opinions that had emerged during the discussion. This stage invites players to take the issues as a group (whole class): in favour or against, or reaching other shared group opinions.
                </p>
                <p>
                    If moderators consider it necessary, they ask participants to vote in favour or against the proposed phasing out of nuclear energy production.
                </p>


                <h3>The cards</h3>

                <UiCardGamePrintMessage url="../tools/cards/radiation" />
                <ToolsCardgameRadiation :printMode="false" />
                <hr />
            </section>


        </section>
    </div>
</template>