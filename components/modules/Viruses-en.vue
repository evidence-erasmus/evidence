<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <UiTableOfContents class="w-full lg:max-w-xs print:hidden">
            <template #title>Table of Contents</template>
            <template #content>
                <ol>
                    <li>
                        <a href="#top">Introduction</a>
                    </li>
                    <li>
                        <a href="#section-2">Learning objectives targeted by the module</a>
                    </li>
                    <li>
                        <a href="#section-3">Expected prior knowledge about viruses</a>
                    </li>
                    <li>
                        <a href="#section-4">Module structure</a>
                    </li>
                    <li>
                        <a href="#section-5">Requirements for the physical environment</a>
                    </li>
                    <li>
                        <a href="#section-6">Assessment</a>
                    </li>
                    <li>
                        <a href="#section-7">Teaching suggestions</a>
                    </li>
                </ol>
            </template>
        </UiTableOfContents>



        <section class="e-article print:not-prose">
            <Icon name="openmoji:teacher-light-skin-tone" class="float-right text-[6em] text-slate-300" />
            <h1 class="mb-0">Viruses</h1>
            <h5 class="font-normal uppercase leading-tight">Materials for teacher</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">Module description</h2>
        
            <section class="e-card e-module__meta">
                <table class="m-0 leading-tight">
                    <tr>
                        <td><b>Target group:</b></td>
                        <td>General and vocational school students 15-18 years old</td>
                    </tr>
                    <tr>
                        <td><b>Anticipated time frame:</b></td>
                        <td>4-6 hours, á 45 min</td>
                    </tr>
                </table>
            </section>

            <p>In this module, students are invited to falsify (“bust”) or confirm a common myth about viruses and vaccination. In an introductory video, the story of a boy who denies the existence of a virus that is spreading in his school is brought up, after which students are asked to reflect and share their first thoughts about it. In addition to simple denialism, there are many other opinions and beliefs (let us say “myths”) about viruses and vaccination in our society. After students are introduced to several of the most prevailing topic-related myths, they are challenged to pick up one myth to falsify or confirm. Based on the nature of this topic, this activity is planned to be conducted whether based on secondary evidence  (searches from the internet) or experimentally. Through this activity, students learn to assess the reliability of information/sources (from science/research databases, popular science, and other media) and/or develop further their experimentation skills. After making conclusions, students prepare to present their findings to their classmates (or other audiences) in a relevant and convincing manner (e.g. video posts). The module is finished with a board game where students can make socio-scientific decisions using their scientific knowledge while incorporating it with personal and social values.</p>
            <p>The module consists of teacher material (teaching suggestions and science background information) and student material (a video scenario, interactive worksheets, fact videos, and a video tutorial).</p>


            <!-- meta, vajab paremat lahendust -->
            

        
                
            

            <hr id="section-2" class="mt-10 mb-40 print:my-10" />
            <h2>Learning objectives targeted by the module</h2>
            
            <ul>
                <li><b>Citizenship competence:</b> develop students’ knowledge and attitudes towards responsible decisions related to viruses and vaccination.</li>
                <li><b>Media competence:</b>
                    <ul class="my-0">
                        <li>develop students’ skills in assessing the reliability of the information, presenting the evidence in a manner relevant to a given audience, </li>
                        <li>reacting adequately and responsibly to fake news and conspiracy theories presented in (social)media.</li>
                    </ul>
                </li>
                <li><b>Digital competence:</b> develop students’ skills in using digital media while presenting their inquiry results to the other groups.</li>
                <li>
                    <b>Science competence:</b>
                    <ul class="my-0">
                        <li>develop students’ understanding of the ways how science knowledge is generated and why we should trust science;</li>
                        <li>develop further students’ knowledge about viruses: their mechanism of action, the difference from bacteria, prevention of viral diseases, working mechanisms, and safety of vaccines;</li>
                        <li>develop students’ attitudes of honesty, objectivity, intellectual humility, and open-mindedness;</li>
                        <li>develop their ability to plan and devise procedures for testing hypotheses and interpreting the findings.</li>
                    </ul>
                </li>
                <li><b>Social competence:</b> – develop students’ argumentation skills and skills for finding group consensus in controversial virus- and vaccination-related issues.</li>
            </ul>


            
            
            





            



            <hr id="section-3" class="mt-10 mb-40 print:my-10" />
            <h2>Expected prior knowledge about viruses</h2>

            <ul class="leading-tight">
                <li>Structure and classification</li>
                <li>Properties and life cycles</li>
                <li>Most common diseases</li>
                <li>Treatment</li>
                <li>Mechanism of vaccination</li>
            </ul>




            
            
            
            
            
            
            
            <hr id="section-4" class="mt-10 mb-40 print:my-10" />
            <h2>Module structure</h2>
            <h4>Learning sequence of the EVIDENCE modules</h4>
            
            <p>This module consists of 6 activities. The sequence of activities is given below. </p>


            <div class="e-card flex flex-col items-center gap-4 pt-10 pb-20 bg-yellow-50 border-4 border-slate-300">
                                
                <h5 class="mb-0 pb-0 leading-none text-slate-400 uppercase font-normal font-Body">Stage 1</h5>
                
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
                
                <h5 class="mb-0 pb-0 mt-8 leading-none text-slate-400 uppercase font-normal font-Body">Stage 2</h5>

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
                

                <h5 class="mb-0 pb-0 mt-8 leading-none text-slate-400 uppercase font-normal font-Body">Stage 3</h5>
                
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
                
                
                <!-- Selection of icons -->
                
                <!--                 
                <hr /> 
                <Icon name="fluent-emoji-high-contrast:unicorn" />
                <Icon name="mdi:unicorn" />
                <Icon name="game-icons:unicorn" />
                <br />
                <Icon name="game-icons:witch-face" /> 
                <Icon name="game-icons:witch-flight" /> 
                <Icon name="game-icons:diablo-skull" /> 
                <Icon name="fa6-solid:book-skull" /> 
                <Icon name="fluent-emoji-high-contrast:skull-and-crossbones" /> 
                <Icon name="fa:user-secret" /> 
                <br />
                <Icon name="game-icons:all-seeing-eye" /> 
                <Icon name="fluent-emoji-high-contrast:love-you-gesture" /> 
                <Icon name="fluent-emoji-high-contrast:ok-hand" /> 
                <Icon name="game-icons:ouroboros" /> 
                <Icon name="game-icons:freemasonry" /> 
                <br />
                <Icon name="fa6-solid:people-group" /> 
                <Icon name="fluent:people-team-32-regular" /> 
                <Icon name="fluent:people-team-toolbox-24-regular" /> 
                <Icon name="material-symbols:groups-2" /> 
                <Icon name="fluent:presenter-24-filled" /> 
                <Icon name="carbon:group-presentation" /> 
                <br />
                <Icon name="healthicons:group-discussion-meeting" /> 
                <Icon name="heroicons-solid:chat-bubble-left-right" />
                <Icon name="heroicons-outline:chat-bubble-left-right" />
                <Icon name="mdi:frequently-asked-questions" />
                <br /> 
                <Icon name="game-icons:rolling-dices" /> 
                <Icon name="tabler:zoom-question" /> 
                <Icon name="mdi:laptop-account" />
                <Icon name="ic:baseline-ondemand-video" />
                <Icon name="material-symbols:youtube-tv-outline" />
                <br /> 
                <Icon name="material-symbols:unknown-document-outline-rounded" />
                <Icon name="mdi:graph-outline" />
                <Icon name="material-symbols:lab-research-outline" />
                <Icon name="healthicons:virus-lab-research-syringe" />
                <Icon name="mdi:flask" />
                <Icon name="game-icons:materials-science" />
                <Icon name="healthicons:virus-research" />
                <Icon name="tabler:microscope" /> -->

            </div>



            <p class="mt-20"><b>Table 1.</b> Learning activities of the “Viruses” module</p>

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
                            <p>In groups:</p>
                            <ul>
                                <li>Posing a testable hypothesis/research question;</li>
                                <li>Searching for relevant information (Activity 3b) AND/OR planning and conducting an experiment (Activity 3a) to confirm or falsify the posed hypothesis/research question;</li>
                                <li>Assessing the reliability of the found evidence;</li>
                                <li>Making conclusions.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Activity 4</b></td>
                        <td>Transforming evidence to a format relevant to a given audience (peers): using a tutorial, students learn how to produce a short video, poster or slideshow, after which they plan and execute their ideas.</td>
                    </tr>
                    <tr>
                        <td><b>Activity 5</b></td>
                        <td>Group presentations (coupled with peer assessment activities).</td>
                    </tr>
                    <tr>
                        <td><b>Activity 6</b></td>
                        <td>Students in groups discuss and make decisions in a board game format</td>
                    </tr>
                </tbody>
            </table>











            <hr id="section-5" class="mt-10 mb-40 print:my-10" />
            <h2>Requirements for the physical environment</h2>
            
            <p>Smartphone, computer, internet, display equipment for demonstrating videos. In case of busting myths experimentally, see “Teaching suggestions”.</p>
            
            
            
            
            
            
            
            
            <hr id="section-6" class="mt-10 mb-40 print:my-10" />
            <h2>Assessment</h2>
            
            
            <p>Students can be assessed differently throughout the module, including the science process skills, general competencies, such as argumentation skills, and topic-related content knowledge.</p>
            
            <p><b>Formative:</b></p>
            <ul>
                <li>Oral/written feedback from the teacher (e.g. based on observations, questions asked) throughout the module, during the experiments, and in other formats of individual/group work.</li>
                <li>Self- and peer assessment on the group presentation using the pre-determined criteria and the <a href="../../tools/peerfeedback" target="_blank">following tool</a>.</li>
                <li>Oral/written feedback from the teacher on individual/group worksheets.</li>
            </ul>
            
            <p><b>Summative:</b></p>
            <ul>
                <li>Grades assigned by the teacher on the group presentation (based on the students’ video product and its performance and students’ ability to provide relevant answers/comments).</li>
                <li>Grades assigned by the teacher on group or individual worksheets.</li>
            </ul>
            
            
            
            
            
            
            
            

            
            
            <hr id="section-7" class="mt-10 mb-40 print:my-10" />
            <h2>Teaching suggestions</h2>

            <p>The module starts with an introductory video for opening up the topic “Viruses” to raise further questions in students rather than giving them immediate answers. It is expected that after watching the <a href="https://youtu.be/t4v-36h2noo" target="_blank">video</a> (<b>Activity 1</b>), students in groups will feel intrinsically motivated to examine virus-related myths and beliefs more thoroughly. An intention is to involve students in committing to activities that relate to a better understanding of the issue – an issue seen by students as relevant to their lives, not simply to the curriculum. It also draws students’ attention to thinking about their prior knowledge and sharing their conceptions and views with peers (<b>Activity 2</b>). Within Activity 2, students are introduced to 10 myths about viruses, vaccination, and mask-wearing, from which they must choose one to be further busted. Activity 2 should help students narrow down their chosen myth into a hypothesis/research question that can be falsified/confirmed/answered (<b>Activity 3</b>). It may be that students need help when trying to pose it. Therefore, the teacher could help them by drawing examples of good (e.g. testable) and bad hypotheses/questions before they draw them themselves. The <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">following resource</a> could be helpful for that.</p>
            
            <p><a href="https://youtu.be/eMAn2mfqR3A" target="_blank">The "fact video"</a> can also be demonstrated in this step to recall the previously studied (e.g. earlier in this school year or earlier school years) virus-related concepts and principles. Also, selected chapters from <a href="/viruses">Scientific background information</a> can be used for this purpose.</p>

            <p>Further, <b>Activity 3</b> can be enacted in two ways:</p>
            <p>Students choose a myth that can be tested experimentally. From the given myths (see <a href="/viruses/student#activity-2">Activity 2</a>), only Myths 9 and 10 could be suitable for this purpose.</p>

            <ol>
                <li>
                    <p>The belief that <b>masks are pointless in preventing upper respiratory diseases</b> (e.g. COVID-19) can be developed further into a testable hypothesis or research question. It would be good to use different types of masks (e.g. textile masks, N95, surgical face masks) in this experiment to get more varied and exciting results. Practical examples of how it can be operationalized in the classroom - can be used if students are less experienced with the open inquiry format (there exist two versions, one open and the other in a guided / structured inquiry format).</p>
            
                    <p>Students may explore the permeability of different masks to find out which, from the given, is best for blocking the tiny liquid drops in exhaled (or inhaled) air by which upper respiratory viruses usually spread. Tiny water droplets stream can be produced, e.g. via an ordinary spray bottle which enables each press to control the droplets' amount relatively well. This assumption can be tested using electronic scales - at least, whether the weight of droplets remains stable throughout the tests.</p>
            
                    <p>The water could be sprayed through each mask material while holding the spray bottle directly against the material. The results can be monitored by qualitatively estimating the intensity of the droplet stream coming through the material (or not). Another option could be that the paper towel sheet is held behind the mask at a certain distance (or directly against the material), and the wet stain on the paper is estimated and compared visually or measured directly by weighing the mass of the paper before and after each spray. The spread water droplets can be made more visible on the paper towel by using baking soda water instead and holding paper (sprayed previously with, for example, phenolphthalein solution and dried after that) at a certain distance from the mask and spray bottle when spraying.</p>
            
                    <p>The other aspect that can be qualitatively studied is how much the mask leaks from the sides or above the nose because it also significantly impacts their efficiency.</p>
                </li>
                <li>
                    <p>Myth No 10 (<b>“Prolonged use of the mask produces hypoxia”</b>) can be tested, for example, by detecting finger pulse oximetry measures before and after prolonged wearing of a mask. Pulse oximeters (Fig. 2) can be bought from online stores and local pharmacy stores. Their prices start from a few euros, though it should be accepted that the cheapest oxymeters may remain unreliable for getting precise results.</p>
                    
                    Figure 2. Use of a pulse oximeter 
                    
                    <p>Before and throughout the testing, students should be encouraged to think about how to control the other variables than the type of mask. Students should analyze the potential sources of error and whether and how they can be avoided, or retrospectively after the experiment, how they could have been avoided. At the end of this activity, students are expected to try to find evidence from secondary sources to re-confirm their findings (they also enact <a href="/viruses/student#activity-3b">Activity 3b</a> in an abbreviated form).</p>
                </li>
            </ol>

            
            <p>In other cases, the virus-related myths cannot be busted (debunked) experimentally in the classroom. Therefore, students are expected to gather evidence from secondary sources to confirm or falsify their hypothesis/answer to their research question (<b>Activity 3b</b>). By juxtaposing information / data sources and their content, students critically analyze their reliability and make justified conclusions based on the evidence found. As reliability assessment can be a real challenge for students, the material is supplied with  tools for searching and analyzing the information. Also, the teacher could explain its use by demonstrating and analyzing both reliable and less reliable sources as learning examples before the students implement this tool.</p>
            
            <p>In order to learn to communicate their findings, students are guided to produce a video of their experiment as evidence or make a video of their conclusions based on secondary evidence (<b>Activity 4</b>). For this purpose, students can use a video tutorial. Alternatively, students could make a poster or slide to show of their findings.</p>
                
            <p>Also, student material is provided with criteria the video (poster, etc.) should fulfill. These criteria can be used formatively for self-assessment by students during the process and for peer assessment when presenting the video (poster, etc.) and answering the questions of their peers and the teacher (<b>Activity 5</b>). For the last, students can use the following <a href="../../tools/PeerFeedback" target="_blank">assessment tool</a> to give feedback to the other groups. The teacher could provide each group with summary feedback on their video presentation (suggestion: each group could access only the feedback given to their own presentation, not the others). The teacher can easily access the feedback from Google Forms using the "Responses" button.</p>

            <p>In the last activity (<b>Activity 6</b>), the storyline of the module returns to the introductory video and the presented myths. Based on the lessons learned from the earlier stages, students prepare to make decisions on an individual or group level in the format of a board game where they have an opportunity to juxtapose and reflect on their learned science knowledge and their personal and social values. Two themes can be used for playing. The theme "Vaccination" is meant for students who can handle more information and consider more aspects simultaneously. In comparison, "Wearing masks by upper respiratory infection pandemics" has less information to read through and can be used by younger students or students with less cognitive processing skills. Also, it is possible that the teacher her/himself, while knowing his students well, will omit some story or information cards to reduce their possible cognitive overload. The rules of play are given in student worksheets. Students need to be instructed shortly before the start to understand the game's general flow.</p>
            
            <p>All myths are backed up by <a href="/viruses">Scientific background information</a>, which explains the state-of-the-art science behind it and enables the teacher to get a quick overview of the science covered by the "Viruses" module but could also be used as learning material for students to recall virus-related knowledge. </p>







        </section>
    </div>
</template>