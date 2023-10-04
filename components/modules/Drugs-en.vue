<script setup>
    const localePath = useLocalePath();
</script>

<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="climatechange-et" />
        </ClientOnly>
        


        <section class="e-article print:not-prose" lang="en" style="hyphens: auto;">
            <Icon name="openmoji:teacher-light-skin-tone" class="float-right text-[6em] text-slate-300" />
            <h1 class="mb-0">Drugs</h1>
            <h5 class="font-normal uppercase leading-tight">Teacher materials</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">Module description</h2>
        
            <section class="e-card e-module__meta">
                <table class="m-0 leading-tight">
                    <tr>
                        <td><b>Target group:</b></td>
                        <td>This learning material is meant for 15-18 years age-old students from both general and vocational schools.</td>
                    </tr>
                    <tr>
                        <td><b>Anticipated time frame:</b></td>
                        <td>4-6 hours, á 45 min.</td>
                    </tr>
                </table>
            </section>

            <p>
                Students are invited to debunk common myths about drugs in this module. In an introductory video, the story of a boy is brought up, after which students are asked to reflect and share their first thoughts about it. After students are introduced to several of the most prevailing topic-related myths, they are challenged to pick up one myth to be busted. Based on the nature of this topic, this activity is planned to be conducted only based on secondary evidence (searches from the internet). Through this activity, students learn to assess the reliability of information/sources (science/research databases, popular science, and other media) and further develop their inquiry skills. After making conclusions, students prepare to present their findings to their classmates (or other audiences) in a relevant and convincing manner (e.g. through video posts, posters, or presentations). The module is finished with a case study where students can solve a moral dilemma using their topic-related knowledge while incorporating it with personal, social, and moral values. It is up to the teacher whether to use both topics, cannabis and MMS, in the module or not; it is possible to follow only a single pathway if decided so.
            </p>
            <p>
                The module consists of teacher material (teaching suggestions and science background information) and student material (a video scenario, interactive worksheets, fact videos, and a video tutorial). Also, students can use the “reliability tool” to assess the reliability of found information and tutorials to present their findings and conclusions.
            </p>





            



            

            

            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="section-2">Learning objectives targeted by the module</h2>
            
            <ul class="leading-tight">
                <li>
                    <b>Citizenship competence:</b> develop students' knowledge and attitudes towards making responsible decisions about cannabis use and/or the “miracle drugs”.
                </li>
                <li><b>Media competence:</b>
                    <ul class="my-0">
                        <li>ddevelop students' skills in assessing the reliability of the information, presenting the evidence in a manner relevant to a given audience,</li>
                        <li>reacting adequately and responsibly to the misinformation presented in (social)media.</li>
                    </ul>
                </li>
                <li>
                    <b>Digital competence:</b> develop students' skills in using digital media while presenting their inquiry results to the other groups.
                </li>
                <li>
                    <b>Science competence:</b>
                    <ul class="my-0">
                        <li>develop students' understanding of science as a way to know, as a social practice, and why we should trust science;</li>
                        <li>develop students' attitudes of honesty, objectivity, intellectual humility, and open-mindedness;</li>
                        <li>develop their ability to plan and devise procedures for testing hypotheses and interpreting the findings;</li>
                        <li>develop further students' knowledge about cannabis: mechanism of action, differences between chemical and biological aspects of different types of cannabis; OR/AND</li>
                        <li>develop an understanding of MMS's chemical and biological properties and the severe health risks of its use as a drug.</li>
                    </ul>
                </li>
                <li>
                    <b>Social competence:</b> develop students'...
                    <ul>
                        <li>
                            improved understanding of the personal and social risks associated with cannabis use, incl of its legislative aspects;
                        </li>
                        <li>
                            enhanced understanding of the importance of personal choices and values related to cannabis in managing personal well-being.
                        </li>
                    </ul>
                </li>
            </ul>


            
            
            





            



            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="section-3">Expected prior knowledge</h2>

            <ul class="leading-tight">
                <li>Prior understanding of the structure of organic compounds.</li>
                <li>Properties of waves</li>
                <li>Light as a form of energy from the sun</li>
                <li>Natural and artificial radiation sources</li>
                <li>Structure of an atom</li>
                <li>Prior knowledge of psychological and social impacts of narcotics use.</li>
            </ul>



            
            
            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="section-4">Module structure</h2>
            
            <p>This module consists of 6 activities. The sequence of activities is given in Figure 1 and Table 1 (see below).</p>


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



            <p class="mt-20"><b>Table 1.</b> Learning sequence of the “Drugs” module</p>

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
                        <td>Presentation of an introductory video</td>
                    </tr>
                    <tr>
                        <td><b>Activity 2</b></td>
                        <td>
                            Discussion in groups<br />
                            Choosing a myth to be busted
                        </td>
                    </tr>
                    <tr>
                        <td><b>Activity  3</b></td>
                        <td>
                            In groups:
                            <ul>
                                <li>Posing a testable hypothesis / research question;</li>
                                <li>Searching for relevant information (Activity 3) to confirm or falsify the posed hypothesis/research question;</li>
                                <li>Assessing the reliability of the found evidence;</li>
                                <li>Making conclusions.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Activity 4</b></td>
                        <td>Transforming evidence to a format relevant to a given audience (peers): using a tutorial. Students learn how to produce a short video or use other visualisation methods instead, after which they plan and execute their ideas.</td>
                    </tr>
                    <tr>
                        <td><b>Activity 5</b></td>
                        <td>Group presentations (coupled with peer assessment activities).</td>
                    </tr>
                    <tr>
                        <td><b>Activity 6</b></td>
                        <td>Students, individually and in groups, consider a moral dilemma related to cannabis (6a) or MMS (6b).</td>
                    </tr>
                </tbody>
            </table>











            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="section-5">Requirements for physical environment</h2>
            
            <p>Smartphone, computer, internet, display equipment for demonstrating videos. A3 or A2 paper, markers of different colours.</p>
            
            
            
            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="section-6">Assessment</h2>
            
            
            <p>Students can be assessed differently throughout the module, including science process skills, general competencies, such as argumentation skills, and topic-related content knowledge. Types of assessments will include formative assessments based on observation, individual/group worksheets and summative assessments based on group presentations.</p>

            <p><b>formative:</b></p>
            <ul>
                <li>Oral / written feedback from the teacher (based on observations, questions asked, etc.) on individual / group work throughout the module.</li>
                <li>Peer feedback (on the group presentation using the following <NuxtLink to="../tools/peer-feedback" target="_blank">tool</NuxtLink> and self-assessment within the case study).</li>
            </ul>
            
            <p><b>Summative:</b></p>
            <ul>
                <li>Grades assigned by the teacher on the group presentation (based on the students’ presentation and the student’s ability to provide relevant answers / comments).</li>
                <li>Grades assigned by the teacher on group or individual worksheets.</li>
            </ul>
            
            
            
            
            
            
            
            

            
            
            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="section-7">Teaching suggestions</h2>

            <UiCardInfo>
                NB! Considering the topic's sensitivity (i.e. cannabis), teachers are expected to promote a safe, non-judgmental environment in this module, where all students can participate. Teachers should also have sound subject knowledge and be confident using suitable learning methodologies. (And be ready to reflect on their own assumptions about cannabis if students ask about it.)
            </UiCardInfo>

            <p>
                This module could also be part of a school drug and risk behaviour prevention programme. The teacher must be familiar with that programme and/or collaborate with other professionals (e.g., school counsellors, youth workers, etc.) in case personal situations related to consumption arises during the module and students might need support. The teacher should remember that students' confidentiality should be respected except when there is evidence or suspicion that someone is at risk.
            </p>

            
            <p>
                The module starts with an <a href="https://www.youtube.com/watch?v=cN5KV_WJubw" target="_blank" rel="noopener noreferrer">introductory video</a> for opening up the topic "Drugs" to raise further questions in students rather than giving them immediate answers. It is expected that after watching the video (<b>Activity 1</b>), students in groups will feel intrinsically motivated to examine drug-related myths and beliefs more thoroughly. The intention is to involve students in committing to activities that relate to a better understanding of the issue – an issue seen by students as relevant to their lives, not simply to the curriculum. It also draws students' attention to thinking about their prior knowledge and sharing their conceptions and views with peers (<b>Activity 2</b>). In Activity 2, students are introduced to 8 myths about cannabis and three myths about a "miracle" drug such as MMS, from which they must choose one to be further busted. Activity 2 should help students narrow down their chosen myth into a hypothesis/research question that can be falsified / confirmed / answered (<b>Activity 3</b>). It may be that students need help when trying to pose it. Therefore, the teacher could help them by drawing examples of good (e.g. testable) and bad hypotheses / questions before they pose them themselves. The <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method." target="_blank" rel="noopener noreferrer">following resource</a> could be helpful for that.
            </p>
            <p>
                The <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI" target="_blank" rel="noopener noreferrer">"fact videos"</a> can also be demonstrated in this step to recall or study drug-related facts. Also, selected chapters from Scientific background information can be used for this purpose. 
            </p>
            <p>
                The drugs-related myths cannot be busted (debunked) experimentally in the classroom. Therefore, students are expected to gather evidence from secondary sources to confirm or falsify their hypothesis / answer to their research question (<b>Activity 3</b>). By juxtaposing media/data sources and their content, students critically analyse their reliability and make justified conclusions based on the evidence. As reliability assessment can be a real challenge for students, the student is supplied with a <span class="bg-rose-100">tool</span> for searching and analysing the information. Also, the teacher could explain its use by demonstrating and analysing reliable and less reliable sources as learning examples before the students implement this independently. 
            </p>


            <p>
                To learn how to communicate their findings, students are guided to produce a video or other types of visualisation to present their conclusions (<b>Activity 4</b>). For this purpose, students can use different tutorials. Also, student material is provided with criteria the presentation should fulfil. These criteria can be used formatively for self-assessment by students during the process and for peer assessment when presenting the video and answering the questions of their peers and the teacher (<b>Activity 5</b>). For the last, students can use the following assessment tool to give feedback to the other groups.
            </p>
            <p class="bg-rose-100">
                Please, do not use the original questionnaire, but make a copy to the same folder to share with your students.<br />
            </p>
            <p>
                The teacher could provide each group with summary feedback on their video presentation (suggestion: each group could access only their own feedback, not the others). The teacher can easily access the feedback from Google Forms using the "Responses" button.
            </p>            
            <p>
                In the last activity (<b>Activity 6</b>), the storyline of the module returns to the introductory video and the presented myths. Based on the lessons learned from the earlier stages, students prepare to make decisions on an individual or group level in the format of a case study where they have an opportunity to juxtapose and reflect on their learned science knowledge but also on their personal and social values. 
            </p>
            <p>
                All myths are backed up by <NuxtLink :to="localePath('/drugs/background')">Scientific background information</NuxtLink>, which explains the state-of-the-art science behind them and enables the teacher to get a quick overview of the science covered by the "Drugs" module.
            </p>
            <p>
                The intro video and follow-up activities are intended to inspire reflection on decision-making related to cannabis use and the various consequences that may result from particular decisions. They encourage the viewer to consider different options during the decision-making process and how cannabis-related choices might affect or impact existing relationships. There is support in educational literature acknowledging how young people are more likely to learn when encouraged to think things through in a supportive manner.  
            </p>

            <p>
                A <b>moral dilemma</b> presented at the end of the module (<b>Activity 6</b>) should make students think about their and other people's choices and the consequences of these choices to different stakeholders involved in a given situation. The potential decisions and reasoning behind them are mainly based on the Kohlbergian framework of moral reasoning, which includes the following (examples to illustrate the levels are taken from activity 6, NB! other interpretations deviating from the given are also possible):
            </p>

            <h3>
                Level 1 (Pre-Conventional)
            </h3>

            <ol>
                <li>
                    <b>Obedience and punishment orientation.</b> Individuals focus on the direct consequences of their actions on themselves. An action is perceived as morally wrong because the perpetrator is punished. Common in children. Rules are fixed and absolute. The main question is, "how can I avoid punishment?
                    <br />
                    <i>E.g. Cris should not keep it because this could result in a criminal record for him/her, which means (s)he is a bad person.</i>
                </li>
                <li>
                    <b>Self-interest</b> (instrumental-relativist) orientation: Paying for a benefit. Right behaviour is defined by whatever the individual believes to be in their best interest, or whatever is "convenient," but understood in a narrow way which does not consider one's reputation or relationships to groups of people. Reasoning shows a limited interest in the needs of others, but only to a point where it might further the individual's own interests.
                    <br />
                    <i>E.g., Cris should keep it because Marcus has done many kind things to Cris in the past. Now (s)he can "pay" it back.</i>
                    <br />
                    <i>Cris should return it to Marcus because such a criminal friend will be useless.</i>
                </li>
            </ol>

            <h3>
                Level 2 (Conventional)
            </h3>
            <ol start="3">
                <li>
                    <b>Interpersonal accord and conformity with social norms.</b> Individuals are receptive to approval or disapproval from others as it reflects society's views. They try to be a "good boy" or "good girl" to live up to these expectations, having learned that being regarded as good benefits the self. Stage three reasoning may judge the morality of an action by evaluating its consequences in terms of a person's relationships, which now begin to include things like respect, gratitude, and the "golden rule". Ability to recognise good or bad intentions. The good boy/girl attitude.
                    <br />
                    <i>E.g. Cris should keep it because (s)he cannot disappoint his long-term friend.</i>
                    <br />
                    <i>E.g. Cris should give it back not to disappoint his/her parents in case (s)he gets caught with drugs by police.</i>
                </li>
                <li>
                    <b>Authority and social-order maintaining orientation:</b> Law and order morality, ability to see abstract normative systems ("Do your duty"). It is important to obey laws, <a href="https://en.wikipedia.org/wiki/Dictum" target="_blank" rel="noopener noreferrer">dicta</a>, and <a href="https://en.wikipedia.org/wiki/Social_convention" target="_blank" rel="noopener noreferrer">social conventions</a> because of their importance in maintaining a functioning society. Moral reasoning in stage four is thus beyond the need for individual approval exhibited in stage three. A central ideal or ideals often prescribe what is right and wrong. If one person violates a law, perhaps everyone would—thus, there is an obligation and a duty to uphold laws and rules. When someone does violate a law, it is morally wrong.
                    <br />
                    <i>E.g. Cris should give it back to Marcus because owning and consuming weed is forbidden and, therefore, illegal.</i>
                </li>
            </ol>

            <h3>
                Level 3 (Post-Conventional)
            </h3>

            <ol start="5">
                <li>
                    <b>Social contract orientation</b> - different opinions, rights, and values should be mutually respected as unique to each person or community. Laws are regarded as <a href="https://en.wikipedia.org/wiki/Social_contract" target="_blank" rel="noopener noreferrer">social contracts</a> rather than rigid edicts. Personal rights are important. This is achieved through majority decision and inevitable compromise. Democratic government is supposedly based on stage five reasoning.
                    <br />
                    <i>E.g. Cris should keep it to avoid his/her friend from getting a criminal penalty, which may lead him even deeper into his personal downfall.</i>
                    <br />
                    <i>E.g. Cris should give it back, as trying to keep Marcus from being convicted for a small amount of narcotics may pull him into a more significant narcotics-related affair. He could get a life lesson to avoid dealing drugs.</i>
                    <br />
                    <i>E.g. Cris should not keep it as this could result in a criminal record for him/her and prevent him/her from entering the military academy.</i>
                    <br />
                    <i>E. g. Cris should give it back as acting otherwise would not be fair towards him/her being punished for the act that (s)he has not committed.</i>
                </li>
                <li>
                    <b>Universal ethical principles</b> - moral reasoning is based on <a href="https://en.wikipedia.org/wiki/Abstraction" target="_blank" rel="noopener noreferrer">abstract reasoning</a> using universal ethical principles. The resulting consensus is the action taken. The individual acts because it is right and not because it avoids punishment, is in their best interest, is expected, is legal, or previously agreed upon.
                    <br />
                    <i>E.g. Cris should give it back and let Marcus take all the responsibility for what he has done. Narcotics have ruined many people's lives. It is just not right to support their use and propagation.</i>
                </li>
            </ol>

            <hr />

            <p>
                Through activity 6, students are expected to develop a broader understanding of the issue while considering different perspectives and consequences of one or another decision. Also, it is hoped that as a result of phase 4 (answering the following questions):
            </p>
            <ul class="leading-tight">
                <li>
                    Which option will produce the most good and do the least harm?
                </li>
                <li>
                    Which option best respects the rights of all who have a stake?
                </li>
                <li>
                    Which option best serves the community, not just some members?
                </li>
                <li>
                    Which option leads me to act as the person I want to be? (can be left for individual consideration), will help students to reach higher levels of moral reasoning than otherwise. Also, reminding the students to follow the RICE approach during the discussion is essential. Phase 4 could be assigned as homework as well.
                </li>
            </ul>


        </section>
    </div>
</template>

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