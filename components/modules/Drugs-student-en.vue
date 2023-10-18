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
        
            <section id="s1">
                <h2 id="s1t">Introduction</h2>

                <p>
                    In this module, you are invited to debunk a common drug myth. One drug proposed for further study is cannabis (also known as marijuana, among other names). The other is MMS (Miracle Mineral Solution) which is a branded name for an aqueous solution of chlorine dioxide, an industrial bleaching agent, that has been falsely promoted as a cure for illnesses including HIV, cancer, COVID-19, etc., in many countries. 
                </p>
                <p>
                    In a video introduction, a few drugs-related beliefs are brought up, after which you are expected to express your opinion and discuss the topic within your group. Also, you are invited to opt out of one myth about drugs being busted based on secondary evidence (e.g., online information searches) (see Figure 1).
                </p>

                <UiContentImage src="https://evidence.onkel.ee/assets/mythbusting-en.webp" :elevated="true">
                    <template #caption>
                        <b>Figure 1.</b> Mythbusting activities
                    </template>
                </UiContentImage>

                <p>
                    Through this activity, you learn to assess the reliability of information sources (research papers, popular science papers/books, other media sources). For that, you need to pose a testable hypothesis or a research question and then find evidence to falsify/confirm the hypothesis or answer your research question. After making conclusions, you are invited to prepare and present your findings to your classmates (or other audiences) in a relevant and convincing manner. The module is finished with a case study where you need to solve a moral dilemma on drug-related issues.
                </p>
            </section>
                        
 
            






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-2">
                <h2 id="s-2t">Activity 1: Presentation of the video introduction</h2>
                <p>Please watch the video carefully. Put down your initial thoughts and feelings about the issues presented.</p>
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
                <h2 id="s-3t">Activity 2: Group discussion</h2>

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
                    Activity 3: Mythbusting
                </h2>
                
                <ModulesDrugsStudentActivityEn />
                
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
                <h2 id="s5t">Activity 6: Case studies</h2>
                

                <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                    <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                        <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'text-slate-50 ring-4 ring-blue-400 ring-offset-2 ring-offset-blue-300': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Case study 1</button>
                            </Tab>
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'text-slate-50 ring-4 ring-blue-400 ring-offset-2 ring-offset-blue-300': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Case study 2</button>
                            </Tab>
                        </TabList>
                        <TabPanels class="mt-2">
                            <TabPanel class="focus:outline-none">
                                <ModulesDrugsStudentCasestudy1En />
                            </TabPanel>
                            <TabPanel class="focus:outline-none">
                                <ModulesDrugsStudentCasestudy2En />
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>

                


            </section>

        </section>
    </div>
</template>