<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" />
        </ClientOnly>
        

        <section class="e-article print:not-prose" lang="sv" style="hyphens: auto;">

            <Icon name="openmoji:teacher-light-skin-tone" class="float-right text-[6em] text-slate-300" />
            <h1 class="mb-0">Climate change på Svensk</h1>
            <h5 class="font-normal uppercase leading-tight">Materials for teacher</h5>
        

            <section id="s-2">
                <h2 id="s-1t">Module description</h2>
            
                <section class="e-card e-module__meta">
                    <table class="m-0 leading-tight">
                        <tr>
                            <td><b>Target group:</b></td>
                            <td>This learning material is meant for 15-17 years age-old students.</td>
                        </tr>
                        <tr>
                            <td><b>Anticipated time frame:</b></td>
                            <td>About 4-11 hours, á 45 min.</td>
                        </tr>
                    </table>
                </section>

                <p>In this module, students are invited to falsify (“bust”) or confirm a common myth about climate change. In an introductory video, several climate change-related myths are brought up, which are further discussed in groups. Group discussion leads to a myth-busting activity where students look for evidence to falsify or confirm a chosen myth.</p>
                <p>Two options for the myth-busting activity (Activity 3) are recommended: the open-inquiry option and the guided-inquiry option. The open-inquiry option encourages students to conduct an open investigation of the chosen myth. Students search for any scientific sources and apply their plan of activities to falsify or confirm their myth. The guided-inquiry option involves students to a specific suggested plan of activities, scientific sources to investigate and come up with their findings and conclusions.</p>
                <p>After investigating their myth, students learn to assess the reliability of information/sources (from science/research databases, popular science, and other media) and/or develop further their experimentation skills. After making conclusions, students prepare to present their findings to their classmates (or different audiences) in a relevant and convincing manner (e.g. by video posts). The module is finished with an argumentation game where students can make socio-scientific decisions using their scientific knowledge while incorporating it with personal and social values.</p>
                <p>The module consists of the teacher material (teaching suggestions and science background information), the student open-inquiry material (interactive worksheets, tutorials), and the student guided-inquiry material -different for each myth- (videos scenario, specific scientific sources, interactive worksheets, tutorials).</p>
            </section>
            

        
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-2">
                <h2 id="section-2">Learning objectives targeted by the module</h2>
                
                <ul>
                    <li><b>Citizenship competence:</b> develop students’ knowledge and attitudes towards making responsible decisions related to climate change.</li>
                    <li><b>Media competence:</b>
                        <ul class="my-0">
                            <li>develop students’ skills in assessing the reliability of the information, presenting the evidence in a manner relevant to a given audience</li>
                            <li>reacting adequately and responsibly to fake news and conspiracy theories presented in (social)media.</li>
                        </ul>
                    </li>
                    <li><b>Digital competence:</b> develop students’ skills in using digital media while presenting their inquiry results to the other groups.</li>
                    <li>
                        <b>Science competence:</b>
                        <ul class="my-0">
                            <li>develop students’ understanding of the ways how science knowledge is generated and why we should trust science;</li>
                            <li>develop further students’ knowledge about climate change;</li>
                            <li>develop their ability to plan and devise procedures for testing hypotheses and interpreting the findings;</li>
                        </ul>
                    </li>
                    <li><b>Social competence:</b> – develop students’ argumentation skills and skills when finding group consensus on controversial climate change-related issues.</li>
                </ul>
            </section>









            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-3">
                <h2 id="s-3t">Expected prior knowledge about climate change</h2>

                <p>Students can discuss on the following topics:</p>

                <ul class="leading-tight">
                    <li>What is climate change?</li>
                    <li>What are the factors that cause climate change?</li>
                    <li>What are the consequences of climate change?</li>
                    <li>Why is climate change considered an environmental problem?</li>
                </ul>
            </section>




            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-4">
                <h2 id="s-4t">Module structure</h2>
                <h4>Learning sequence of the EVIDENCE modules</h4>
                
                <p>This module consists of 6 activities. The sequence of activities is given below. </p>

                <section>
                    <ModulesStructure>
                        <template #title>Activity 1<br />OUTLINING THE MOST COMMON TOPIC-RELATED MYTHS</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="material-symbols:youtube-tv-outline" class="text-white" />
                            </div>
                            <Icon name="mdi:arrow-right-thick" />
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:ouroboros" class="text-white" />
                            </div>
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:unicorn" class="text-white" />
                            </div>
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:all-seeing-eye" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>Activity 2<br />CHOOSING A MYTH</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="mdi:frequently-asked-questions" class="text-white" />
                            </div>
                            <Icon name="mdi:check-bold" />
                            
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:unicorn" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
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
                    <ModulesStructure>
                        <template #title>Activity 4<br />GIVING EVIDENCE A RELEVANT FORMAT</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded">
                                <Icon name="material-symbols:unknown-document-outline-rounded" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="mdi:laptop-account" class="text-white" />
                            </div>
                            <Icon name="mdi:check-bold" />
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:horse-head" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>Activity 5<br />COMMUNICATING EVIDENCE AND CONCLUSIONS MADE</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="heroicons-outline:chat-bubble-left-right" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="carbon:group-presentation" class="text-white" />
                            </div>
                            <Icon name="mdi:check-bold" />
                            <div class="e-icon--rounded">
                                <Icon name="game-icons:horse-head" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
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
                </section>

                <p class="mt-20"><b>Table 1.</b> Learning activities of the “Climate Change” module</p>
                <table>
                    <thead>
                        <tr>
                            <th class="w-1/5"><b>Activity No</b></th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Activity 1</b></td>
                            <td>Presentation of the motivating introductory video.</td>
                        </tr>
                        <tr>
                            <td><b>Activity 2</b></td>
                            <td>
                                <ul>
                                    <li>Discussion in groups.</li>
                                    <li>Choosing a myth to be busted.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Activity 3</b></td>
                            <td>
                                Students in groups:
                                <ul>
                                    <li>Pose a testable hypothesis/research question.</li>
                                    <li><b>Option 1: Open inquiry</b>
                                        <ul>
                                            <li>Make their action plan by searching for relevant scientific information about their chosen myth.</li>
                                            <li>Assess the reliability of the found evidence.</li>
                                            <li>Make conclusions.</li>
                                            <li>Confirm or falsify the posed hypothesis.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Option 2: Guided inquiry</b>
                                        <ul>
                                            <li>Students study scientific sources and/or conduct given experiments, and answer posed questions. </li>
                                            <li>Assess the reliability of the found evidence.</li>
                                            <li>Make conclusions.</li>
                                            <li>Confirm or falsify the posed hypothesis.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Activity 4</b></td>
                            <td>Transforming evidence to a format relevant to a given audience (peers): using a tutorial, students learn how to produce a short video, after which they plan and execute their ideas.</td>
                        </tr>
                        <tr>
                            <td><b>Activity 5</b></td>
                            <td>Group presentations (coupled with peer assessment activities).</td>
                        </tr>
                        <tr>
                            <td><b>Activity 6</b></td>
                            <td>Students in groups discuss and make decisions in a board game format.</td>
                        </tr>
                    </tbody>
                </table>
            </section>







            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-5">
                <h2 id="s-5t">
                    Requirements for the physical environment
                </h2>
                <p>
                    Smartphone, computer, internet, display equipment for demonstrating videos. In case of busting myths experimentally, see “Teaching suggestions”.
                </p>
            </section>
            
            
            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-6">
                <h2 id="s-6t">Assessment</h2>
                
                <p>
                    Students can be assessed differently throughout the module, including science process skills, general competencies, such as argumentation skills, and topic-related content knowledge.
                </p>
                <p>
                    Assessments that could be applied in this module:
                </p>
                <p>
                    <b>Formative:</b>
                </p>
                <ul>
                    <li>
                        Oral/written feedback from the teacher (based on observations, questions asked, etc.) throughout the module, during the experiments, and in other formats of individual / group work.
                    </li>
                    <li>
                        Peer feedback (on the group presentation using the following <a href="/tools/peer-feedback" target="_blank">following tool</a> and self-assessment after the game).
                    </li>
                    <li>
                        Oral/written feedback from the teacher on individual / group worksheets.
                    </li>
                </ul>
                <p>
                    <b>Summative:</b>
                </p>
                <ul>
                    <li>
                        Grades assigned by the teacher on the group presentation (based on the students’ video, poster,  or similar and its performance and students’ ability to provide relevant answers/comments).
                    </li>
                    <li>
                        Grades assigned by the teacher on group or individual worksheets.
                    </li>
                </ul>
            </section>
            
            
            

            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-7">
                <h2 id="s-7t">Teaching suggestions</h2>

                <p>
                    The module starts with an introductory video opening up a few myths about climate change to raise further questions in students rather than giving them immediate answers. It is expected that after watching the video (Activity 1), students in groups will feel intrinsically motivated to examine one myth in depth. An intention is to involve students in committing to activities that relate to a better understanding of the issue – an issue seen by students as relevant to their lives, not simply to the curriculum. It draws students' attention to thinking about their prior knowledge and sharing their conceptions and views with peers (Activity 2).
                    <br>
                    Also, selected chapters from <NuxtLink to="/climate-change/background">Scientific background information</NuxtLink> can be used for this purpose. In Activity 2, students have to narrow down their chosen myth into a hypothesis that can be falsified/confirmed.
                </p>
                <p>
                    <b>Activity 3</b> is the myth-busting activity. Two alternative options are proposed for implementing Activity 3 (Figure 2).
                </p>
                <section class="e-flow__chart">
                    <div class="e-flow__box"><b>Alternative options for Activity 3</b></div>
                    <div class="e-flow__connector"></div>
                    <div class="e-flow__connector-fork e-flow__connector-fork--down"></div>
                    <div class="e-flow__boxes">
                        <div class="e-flow__box">
                            <p class="m-0 leading-tight mb-4"><b>Open-Inquiry Option</b></p>
                            <p class="m-0 leading-tight">Students make up their plan of action to obtain the necessary information. Different kinds of scientific sources are acceptable (e.g. experiments, scientific articles, etc.)</p>
                        </div>
                        <div class="e-flow__box">
                            <p class="m-0 leading-tight mb-4"><b>Guided-Inquiry Option</b></p>
                            <p class="m-0 leading-tight">Students study specifically given scientific sources (e.g. texts, videos, graphs, webpages, animations, maps, experimental procedures, etc.) and involve in specific activities answering specific questions.</p>
                        </div>
                    </div>
                    <div class="e-flow__connector-fork e-flow__connector-fork--up"></div>
                    <div class="e-flow__connector"></div>
                    <div class="e-flow__box">
                        <ul class="m-0">
                            <li class="my-0 leading-tight">Students assess the reliability of specific sources using a specific tool.</li>
                            <li class="my-0 leading-tight">Students make justified conclusions based on the evidence found.</li>
                            <li class="my-0 leading-tight">Students come to the confirmation or falsification of their hypothesis.</li>
                        </ul>
                    </div>
                </section>
                <p>
                    The teacher could choose which option of Activity 3 students will use by considering their students' cognitive skills and the available teaching time. However, the open-inquiry option is considered the most challenging option for students.
                </p>
                <p>
                    As reliability assessment can be a real challenge for students, the material is supplied with a tool for searching and analysing the information. Also, the teacher could explain its use by demonstrating and analysing reliable and less reliable sources as learning examples before the students implement this tool independently.
                </p>
                <p>
                    To learn how to communicate their findings, students are guided to produce a video of their experiment as evidence or make a video of their conclusions based on secondary evidence (Activity 4). Student material is provided with criteria the video should fulfil. These criteria can be used formatively for self-assessment by students during the process and for peer assessment when presenting the video and answering the questions of their peers and the teacher (Activity 5). For the last, students can use the following assessment tool to give feedback to the other groups. The teacher could provide each group with summary feedback on their video presentation (suggestion: each group could access only their feedback, not the others). The teacher can easily access the feedback from Google Forms using the "Responses" button.
                </p>
                <p>
                    In the last activity (Activity 6), the storyline of the module returns to the introductory video and the presented myths. Based on the lessons learned from the earlier stages, students prepare to make decisions on an individual or group level in a board game with cards where they have an opportunity to juxtapose and reflect on their learned science knowledge and their personal and social values. The rules of play are given in student worksheets. Students need to be instructed shortly before the start to understand the game's general flow.
                </p>
                <p>
                    All myths are backed up by Scientific background information, which explains the state-of-the-art science behind them and enables the teacher to get a quick overview of the science covered by the "Climate Change" module but could also be used as learning material for students to recall climate change-related knowledge.
                </p>
            </section>


        </section>
    </div>
</template>

<script setup>
    const localePath = useLocalePath();
</script>

<style scoped>
   .e-flow__chart {
      @apply flex flex-col items-center;
    }
    .e-flow__boxes {
      @apply flex gap-4;
    }
    .e-flow__box {
      @apply border-2 border-slate-400 p-4;
    }
    .e-flow__connector {
      @apply border-x h-6 border-slate-400 grow-0;
    }
    .e-flow__connector-fork {
      @apply border-x-2 h-6 border-slate-400 grow-0 w-1/2;
    }
    .e-flow__connector-fork--up {
      @apply border-b-2;
    }
    .e-flow__connector-fork--down {
      @apply border-t-2;
    }
</style>