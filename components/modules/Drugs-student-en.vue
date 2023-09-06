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
            <h1 class="mb-0">Drugs</h1>
            <h5 class="font-normal uppercase leading-tight">Student material</h5>
        
            <h2 id="section-1">Introduction</h2>


            <p>
                In this module, you are invited to debunk a common drug myth. One drug proposed for further study is cannabis (also known as marijuana, among other names). The other is MMS (Miracle Mineral Solution) which is a branded name for an aqueous solution of chlorine dioxide, an industrial bleaching agent, that has been falsely promoted as a cure for illnesses including HIV, cancer, COVID-19, etc., in many countries. 
            </p>
            <p>
                In a video introduction, a few drugs-related beliefs are brought up, after which you are expected to express your opinion and discuss the topic within your group. Also, you are invited to opt out of one myth about drugs being busted based on secondary evidence (e.g., online information searches) (see Figure 1).
            </p>

            mythbusting img here

            <p>
                Through this activity, you learn to assess the reliability of information sources (research papers, popular science papers/books, other media sources). For that, you need to pose a testable hypothesis or a research question and then find evidence to falsify/confirm the hypothesis or answer your research question. After making conclusions, you are invited to prepare and present your findings to your classmates (or other audiences) in a relevant and convincing manner. The module is finished with a case study where you need to solve a moral dilemma on drug-related issues.
            </p>
                        
            

            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-2">Activity 1: Presentation of the video introduction</h2>
            
            <p>Please watch the video carefully. Put down your initial thoughts and feelings about the issues presented.</p>

            <UiYoutube video="cN5KV_WJubw" />

 


<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-3">Activity 2: Group discussion</h2>
            
            <p>After watching the video, you are invited to discuss the topic within your group (4-6 members).</p>

            <ol class="leading-tight">
                <li>Please, express your initial thoughts and feelings about the presented issue to the others.</li>
                <li>As a group, you are invited to choose one of the following myths for further debunking/busting based on information that can be found on the internet (fact videos, factsheets or brochures from trusted sources); you could choose between the following myths or define your own (in the last case, please consolidate the topic first, with your teacher):</li>
            </ol>
            

            <ul class="leading-tight">
                <li><span class="text-rose-400 font-bold">Myth 1:</span> Cannabis is not that dangerous to health</li>
                <li><span class="text-rose-400 font-bold">Myth 2:</span> Cannabis is okay for some youth</li>
                <li><span class="text-rose-400 font-bold">Myth 3:</span> Cannabis is a medical drug and, therefore, safe for everybody</li>
                <li><span class="text-rose-400 font-bold">Myth 4:</span> Cannabis helps one’s mood and promotes mental health</li>
                <li><span class="text-rose-400 font-bold">Myth 5:</span> Cannabis is not addictive</li>
                <li><span class="text-rose-400 font-bold">Myth 6:</span> Cannabis is a gateway drug</li>
                <li><span class="text-rose-400 font-bold">Myth 7:</span> You cannot overdose on cannabis</li>
                <li><span class="text-rose-400 font-bold">Myth 8:</span> Second-hand cannabis smoke is safe</li>
                <li><span class="text-rose-400 font-bold">Myth 9:</span> MMS cures COVID-19</li>
                <li><span class="text-rose-400 font-bold">Myth 10:</span> MMS cures autism</li>
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
                <b>In this activity, you are expected to do the following:</b>
            </p>
            
            <ul class="leading-tight">
                <li>
                    develop a testable hypothesis / research question,
                </li>
                <li>
                    plan your search for relevant information that will falsify or confirm your hypothesis / answer your research question,
                </li>
                <li>
                    assess the reliability of the gathered evidence;
                </li>
                <li>
                    use your findings to draw a conclusion;
                </li>
                <li>
                    present collected data in the form of tables, graphs, or similar.
                </li>
            </ul>

            <p>
                While doing this, you should think carefully about sharing the workload within your group. You could designate everybody to a different role, for example, to a leader who is organising the activities, to a secretary who is making notes and comments about the information found, to an investigator who is doing searches, to a critic who is scrutinising the reliability of the information, or otherwise.
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

            <div class="md:grid md:grid-cols-2 gap-4">
                <div class="border-4 border-green-400 rounded-lg p-3  text-center">
                    <h4 class="my-2">
                        Position 1: In favour
                    </h4>
                    <p>
                        The state must recognise that nuclear energy is safe and offers a "golden opportunity" to create a cleaner and more equitable world. The state must invest in creating a safe nuclear waste cemetery (final depository).
                    </p>
                </div>
                <div class="border-4 border-red-400 rounded-lg p-3  text-center">
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
                Each team is given (a selection method could be decided with your teacher) a role card containing a brief profile of the role the team will represent, along with the arguments supporting the perspective to be defended. In addition to the role cards, each team is given the worksheet they must complete during the role-play <span class="bg-red-300">(see worksheet)</span>.
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


            <!-- Lauamäng võiks pigem õpetaja materjalide all olla? -->

            <UiCardInfo>
                <div>
                    <p>Here the cards are fitting into the page layout and take as little space as their inner content demands. So this is just a preview. <b>If you want to see the cards as regular uniform size playing cards and print them out, please open the special "card-view" page.</b></p>
                    
                    <nuxt-link to="../tools/cards/radiation" target="_blank" 
                    class="mb-3 px-4 py-2 inline-flex items-center gap-2 
                    bg-sky-600 text-md rounded text-white no-underline uppercase transition
                    hover:bg-sky-700
                    print:hidden">
                        <icon name="material-symbols:print-outline-rounded" />Öppna utskrivbara kort
                    </nuxt-link> (ny flik)
                </div>
            </UiCardInfo>

            <ToolsCardgameRadiation :printMode="false" />

            <hr>


        </section>
    </div>
</template>