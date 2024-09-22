<script setup>
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();
    // const showSpaceExplorationDebate = ref(false);
    
    const toggleModal = (modalName) => {
        userPrefs.toggleModal(modalName);
    }

</script>

<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <!-- <ClientOnly> -->
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="climatechange-et" />
        <!-- </ClientOnly> -->
        


        <section class="e-article print:not-prose" lang="en" style="hyphens: auto;">
            <Icon name="openmoji:teacher-light-skin-tone" class="float-right text-[6em] text-slate-300" />
            <h1 class="mb-0">Space</h1>
            <h5 class="font-normal uppercase leading-tight">Teacher material</h5>
            

            <section id="s-1">
            <h2 id="s-1-title">Module description</h2>
        
            <section class="e-card e-module__meta">
                <table class="m-0 leading-tight">
                    <tr>
                        <td><b>Target group:</b></td>
                        <td>This learning material is meant for 15-18 years age-old students of both general and vocational schools.</td>
                    </tr>
                    <tr>
                        <td><b>Anticipated time frame:</b></td>
                        <td>5-6 hours, á 45 min and some homework time.</td>
                    </tr>
                </table>
            </section>

            <p>
                Space captivates our imagination from earlier childhood. Questions about the infinity of the Universe, extra-terrestrial life and the possibility of space travel to other planets and beyond excite the minds of many youngsters. Children generally have an innate instinct to explore and a solid will to experience and understand. Some of them dream about being space explorers.
            </p>

            <p>
                Space travel has already become achievable for not professional astronauts. Some paying passengers went to the International Space Station (ISS), including Anousheh Ansari, the first Iranian and Muslim woman in space (2006). Commercial programs are established for suborbital flight at a height of about 100 km over the Earth's surface. Orbital tourist flights around the Earth require almost double the height and much more velocity and energy by the spaceship, but they are also envisioned soon. Among our students today may be future professional and amateur space explorers. 
            </p>

            <p>
                However, many misconceptions, myths and conspiracy theories about space travel circulate daily. UFOs that visit us from outer space and the never-mentioned human moon landing are just two examples of those that appear in the media. Incidences of such rumours are still around for a while as the public can observe different kinds of unusual drones more often nowadays, and new human moon landing programmes are announced. The current American "Artemis Project" and Chinese moon program called "Chang Project" seems to start competing to see who will land on the Moon first this time and attract once again public attention to this area. 
            </p>

            <p>
                Many of our students are familiar with spaceship functions through different space games for computers and smartphones and water rocket launching activities in schools or science centres. They know the feeling of short weightlessness from amusement parks or aeroplanes. Some of them probably experienced a tour of the International Space Station (ISS) with the help of a VR application released for free in the Oculus store or have seen a film about ISS in 3D theatre at science museums.
            </p>

            <p>
                The era of space exploration started in 1957 with the launch of the first satellite (Sputnik) to orbit around the Earth. Technology has developed enormously during these years; however, space exploration goes slower than predicted, entails many risks and uncertainties and is accompanied by different technology failures. A recent attempt (January 2023) to launch satellites, for the first time from British soil, using a rocket launch technology developed by Virgin Orbit company, failed to reach orbit, destroying the entire payload of nine satellites. The Virgin company's space tourism division, Virgin Galactic, which has promised since 2004 to begin regular suborbital flights for paying space tourists using similar launching technology, has yet to deliver on that pledge. Virgin's approach is to lift a spacecraft under the wing of a Boeing 747 to about 10000 m altitude and then fire it up. This recent Virgin failure shows once again that space exploration always carries significant risks, particularly in launching spacecraft and returning space missions to the Earth. The issues of dealing with risks and associated moral dilemmas of sending human missions to space are the focus of this module. 
            </p>

            <p>
                Working with this module, teachers can choose to do some practical activities and demonstrations to explain phenomena, debunk space-related myths or explore common misconceptions when school facilities provide for this. Otherwise, we suggest doing this through evidence collection from reliable sources of scientific and professional information. Students can also use different data collection methods, applying the so-called triangulation principle – increasing the validity of findings by converging information from different sources.
            </p>

            <p>
                In the <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">introductory videos</a> (teacher can select among  “Earth Calls Martha”, “3-2-1”, “Where are all the Aliens”, and “Flag in the Wind”), some ideas, conspiracy theories, misconceptions and myths are brought up which are suggested for further discussions in groups. Students are invited to select and explain common space-related myths or misconceptions. Group discussions are expected to lead to evidence collection from reliable data sources to gain deeper insight into a phenomenon and falsify or confirm a chosen myth. 
            </p>

            <p>
                Human space travel will probably attract the special attention of the students. Some biological effects of space travel, such as space motion sickness or Space Adaptation Syndrome (SAS), can be experienced practically on Earth through centrifugation (Sickness Induced by Centrifugation, SIC). However, few of us would probably like to be exposed to centrifuge and simultaneous rotations going from 1G to 3G (or higher) and back to 1G, a part of standard astronaut training. A light version of such an experience is available in some amusement parks as “Insanity Rides 360”. 
            </p>

            <p>
                Most activities suggested in this module will rely on secondary evidence gathered through literature searches and data collected from the internet. Through these activities, students learn to assess the reliability of information sources and make evidence-based arguments. After drawing conclusions, students prepare to present their findings to their classmates (or other audiences) in a relevant and convincing manner (e.g. video posts). The module is finished with a debate roleplay where students can make socio-scientific decisions using their scientific knowledge while incorporating it with personal, moral and social values.
            </p>

            <p>
                The module comprises teacher material (teaching suggestions, science background information) and student material (introductory video, interactive worksheets, fact videos, and a video tutorial).
            </p>

        </section>







            

            

            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-2">
            <h2 id="s-2-title">Learning objectives targeted by the module</h2>
            
            <ul>
                <li>
                    <b>Citizenship competence:</b> develop students’ knowledge and attitudes towards making responsible decisions related to human and robotic space explorations.
                </li>
                <li><b>Media competence:</b>
                    <ul class="my-0">
                        <li>develop students’ skills in assessing the reliability of information,  presenting the information in a manner relevant to a given audience,</li>
                        <li>reacting adequately and responsibly to fake news and conspiracy theories presented in (social)media.</li>
                    </ul>
                </li>
                <li>
                    <b>Digital competence:</b> develop students’ skills in using digital media while presenting their inquiry results to the other groups.
                </li>
                <li>
                    <b>Science competence:</b>
                    <ul class="my-0">
                        <li>develop students’ understanding of the ways how science knowledge is generated and why we should trust science;</li>
                        <li>develop further students’ knowledge about the pros and cons of human space explorations;</li>
                        <li>develop their ability to plan and devise procedures for testing the myth and interpret the findings.</li>
                    </ul>
                </li>
                <li>
                    <b>Social competence:</b> develop students’ argumentation skills and skills when finding group consensus on controversial space-related issues.
                </li>
            </ul>
        </section>

            

            <hr  class="mt-10 mb-40 print:my-10" />

        <section id="s-3">
            <h2 id="s-3-title">
                Potential obstacles to consider
            </h2>

            <p>
                Students are expected to have experience evaluating the reliability of information sources on the Internet. Otherwise, it might take extra teaching time to work on this issue.
            </p>
          </section>  





            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-4">
            <h2 id="s-4-title">Module structure</h2>
            
            <p>This module consists of 6 activities. The sequence of activities is given in Figure 1 and Table 1 (see below).</p>


            <ModulesModuleStructure />


            <p class="mt-20"><b>Table 1.</b> Learning activities of the Evidence modules</p>

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
                        <td>Presentation of an <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">introductory video</a> (select among  “Earth Calls Martha”, “3-2-1”, “Where are all the Aliens”, or “Flag in the Wind”) that raises an issue of human space exploration through exposing some ideas, dreams and myths. 
                        <br />
                        Teachers can also suggest getting insight into a broader spectrum of myths and beliefs related to space exploration.</td>
                    </tr>
                    <tr>
                        <td><b>Activity 2</b></td>
                        <td>
                            <ul>
                                <li>
                                    Discussion in groups:
                                    <br />
                                    Choosing a myth or a statement to be investigated
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Activity 3</b></td>
                        <td>
                            In groups:
                            <ul>
                                <li>Posing relevant hypothesis and research questions;</li>
                                <li>Searching for relevant information to confirm or falsify the posed hypothesis/research question;</li>
                                <li>Assessing the reliability of the found evidence;</li>
                                <li>Making conclusions.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Activity 4</b></td>
                        <td>Transforming evidence into a format of a short video or a PowerPoint presentation in which they explain their ideas.</td>
                    </tr>
                    <tr>
                        <td><b>Activity 5</b></td>
                        <td>Group presentations (coupled with peer assessment activities).</td>
                    </tr>
                    <tr>
                        <td><b>Activity 6</b></td>
                        <td>
                            Teacher suggests a specific issue concerning priorities in developing spaceflight capability and infrastructure (see as an example the <button class="btn btn-sm btn-accent" @click="toggleModal('space__swedish-case')"><Icon name="mdi:open-in-new" size="20" />case of Sweden</button>). Students discuss, produce arguments and make decisions in a debate game (role-play) format.
                            <br />
                            <button class="btn btn-sm btn-accent" @click="toggleModal('space__exploration-debate')"><Icon name="mdi:open-in-new" size="22" /> Space Exploration Debate</button> can be implemented just during one lesson as a shorter alternative.
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>










            <hr  class="mt-10 mb-40 print:my-10" />

        <section id="s-5">
            <h2 id="s-5-title">Requirements for physical environment</h2>
            
            <p>Smartphone, computer, internet, display equipment for demonstrating videos.</p>
        </section>  
            
            
            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />


        <section id="s-6">
            <h2 id="s-6-title">Assessment</h2>
                        
            <p>
                Students can be assessed in different ways throughout the module, including science process skills, general competencies, such as argumentation skills, and topic-related content knowledge. Assessments that could be applied in this module:
            </p>

            <p><b>Formative:</b></p>
            <ul>
                <li>Oral/written feedback from the teacher (based on observations, questions asked, etc.) throughout the module, during the experiments, and in other formats of individual/group work.</li>
                <li>Self- and peer assessment on the group presentation using the pre-determined criteria and the following <NuxtLink to="./tools/peer-feedback" target="_blank">tool</NuxtLink>.</li>
            </ul>
            
            <p><b>Summative:</b></p>
            <ul>
                <li>Grades assigned by the teacher on the group presentation (based on the students’ video product, poster, etc. and its performance and students’ ability to provide relevant answers/comments).</li>
                <li>Grades assigned by the teacher on group or individual worksheets.</li>
            </ul>
        </section>    
            
            
            
            
            
            
            

            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-7">
            <h2 id="s-7-title">Teaching suggestions</h2>

            <p>
                The module activities can be structured in two parts. The first part (Activities 1-5) concerns work with specific space-related myths, ideas, controversies and issues that could be identified in an <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">introductory video</a>, recalled by the students or suggested by the teacher. The second part (Activity 6) focuses on work with the socio-scientific topic of human space travels that is summed up with the help of a debate game/role-play (see student material moderated by the teacher).
            </p>
            <p>
                After a short introduction, as a warm-up activity, students can, in small groups, think about what questions they would like to ask an astronaut/space researcher if they had a chance (two-three questions per group to be presented). This will allow them to probe their interests and expectations concerning the subject raised in the module. 
            </p>
            <p>
                After watching and selecting an <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY"  target="_blank" rel="noopener noreferrer">introductory video</a> <b>(Activity 1)</b>, students can examine one of the identified myths, misconceptions or issues. Teachers can also introduce here other <NuxtLink to="./space/student#myths">myths and issues</NuxtLink> related to space. Students can be encouraged to recall existing understandings about space from their everyday life. The <a href="https://www.youtube.com/watch?v=a95oKCDgIow&list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">“fact videos”</a> can be used in this step to highlight and broaden space-related topics, concepts, and principles. Selected parts from scientific <NuxtLink to="./space/background">background information</NuxtLink> can recur when necessary. 
            </p>

            <p>
                <b>Activity 2</b> should help students to narrow down their chosen myth or issue into a hypothesis/research question that can be confirmed/answered during <b>Activity 3</b>. Activity 3 can be enacted in two ways: 
                <ol class="leading-tight">
                    <li>
                        through practical experience or 
                    </li>
                    <li>
                        through theoretical investigation based on secondary evidence. 
                    </li>
                </ol>
            </p>

            <h3>1. through practical experience</h3>

            <p>
                <b>Students who choose a myth/issue that can be tested practically</b> collect evidence through simple qualitative experiments. For example, let us consider a myth that “eating requires gravity for food to move to our stomach”.
            </p>

            <h4>
                Try it out with your body:
            </h4>

            <p>
                Take a mouthful of food, bend over until your head is below your stomach and swallow! You will find it is easy to do that despite the food going in the opposite direction to gravity. The passage of food through our bodies does not require gravity. A system of muscular gut contractions called “peristalsis” actively propels the food in the desired direction. 
            </p>
            <p>
                The system works that way also because our intestines loop around - sometimes going upwards instead of downwards. If gravity alone did the job, we would be unable to function. So, astronauts have no problems digesting food in a microgravity environment, as on ISS. We can also drink quite easily using a straw while hanging upside down. The hardest part of eating or drinking upside down is usually getting the food or drink to your mouth. Students can also be asked here to research astronauts' eating habits and space food.
            </p>

            <h4>
                Experience Rocket launches
            </h4>
            <p>
                (Activity can be done as a demonstration by the teacher).
                <br />
                This is related to principles or myths/misconceptions concerning rocket movement, for example, “Rockets need an atmosphere to push against to fly”. 
            </p>
            <p>
                A rocket creates thrust by expelling mass. When burned fuel flows out, the spaceship is accelerated in the opposite direction. This general principle of movement is the same as for a <button class="btn btn-sm btn-accent " @click="toggleModal('space__water-rocket')"><Icon name="mdi:open-in-new" size="20" /> water rocket</button> (Pressurised water with air is expelled from the PET bottle in the case of a water rocket). 
            </p>
            <h4>
                Virtual experiments: 
            </h4>
            <p>
                These experiments could help to collect evidence concerning several myths/misconceptions, for example, about rocket movement and gravity in outer space: 
                <ul class="leading-tight">
                    <li>
                        "A spaceship needs a rocket engine working all the time on orbit (or on the way to Mars)."
                    </li>
                    <li>
                        "There is no gravity in space."
                    </li>
                    <li>
                        "Astronauts orbiting Earth on the ISS are weightless because they are far from Earth."
                    </li>
                </ul>
                To name some.
            </p>

            <p>
                Teachers can choose what is more suitable for their class from various virtual experiments and simulations available on the Internet. We recommend materials from the <a href="https://phet.colorado.edu/" target="_blank" rel="noopener noreferrer">PhET Interactive Simulations project</a>, founded by Nobel Laureate Carl Wieman, that provides free simulations (PhET sims) to engage students to learn through exploration and discovery. For example, <a href="https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html" target="_blank" rel="noopener noreferrer">Gravity and Orbits</a> interactive simulation can help to 
                <ul class="leading-tight">
                    <li>
                        analyse the relationship between the Sun, Earth, Moon and space station;
                    </li>
                    <li>
                        illustrate how gravity controls the motion of our solar system;
                    </li>
                    <li>
                        explore the variables that affect the strength of gravity;
                    </li>
                    <li>
                        predict how the motion would change if gravity were stronger or weaker.
                    </li>
                </ul>
            </p>
            <p>
                Another virtual experiment that the students could test is <a href="https://play.google.com/store/apps/details?id=com.StefMorojna.SpaceflightSimulator&hl=en_US&gl=US&pli=1" target="_blank" rel="noopener noreferrer">Spaceflight Simulator</a> which seeks to represent a vessel's behaviour under the influence of the laws of physics. This app allows the construction of different models of rockets. Students can see how the number of stages increases lifting capacity to different orbits. 
            </p>

            <h3>
                2. through theoretical investigation based on secondary evidence
            </h3>

            <p>
                However, space-related myths and misconceptions can often <b>not be busted (debunked) experimentally</b> in the classroom. Therefore, <b>students are expected to gather evidence from secondary sources</b> to confirm or falsify their hypothesis/answer to their research question. By juxtaposing media/data sources and their content, students critically analyse their reliability and make justified conclusions based on the evidence. The student material is supplied with a <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20" /> tool</NuxtLink> that can be used for analysing the information. It would be good if the teacher could explain its use by demonstrating and analysing reliable and less reliable sources as examples before the students implement this tool on their own.
            </p>

            <p>
                To communicate their findings, students are guided to present their conclusions visually <b>(Activity 4)</b>. Video could be an exciting option. For this purpose, students can use a <a href="https://www.youtube.com/watch?v=_l8LgLhjLvc&list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" target="_blank" rel="noopener noreferrer">tutorial</a>. Alternatively, students could make a poster or slides to show their findings.
            </p>

            <p>
                Also, student material is provided with criteria (<NuxtLink to="./tools/peer-feedback" target="_blank">assessment tool</NuxtLink>) the visual presentation should fulfil when ready. These criteria can be used for self-assessment during the process and for peer assessment when presenting the results and answering the questions of their peers and the teacher <b>(Activity 5)</b>. 
                <!-- The teacher could provide each group with summary feedback on their video presentation (suggestion: each group could access only the feedback given to their production, not the others). The teacher can easily access the feedback from Google Forms using the "Responses" button. Please, make a copy of the file into the same folder; after that, please share the link of the copied file with your students (not the original file!). -->
            </p>

            <p>
                In the last activity <b>(Activity 6)</b>, socio-scientific issues and controversies related to space exploration will be debated <sup><span class="tooltip" data-tip="Design of a role-playing game about a socio-scientific problem related to space followed the role-play methodology developed by the science educators at Malaga University"><a href="http://www.encic.uma.es/" target="_blank" rel="noopener noreferrer">[1]</a></span></sup>. For decades, scientists and policymakers have argued whether space exploration is better suited to humans or robots (see, for example, a recent book: “The End of Astronauts” by Donald Goldsmith and Martin, Rees Belknap Press, 2022). In Europe's harsh economic situation, this issue became even more actualised, as manned space flights are significantly more expensive than robotic—suggested debate role-play presented in the student material concerns this issue.
            </p>

            <p>
                This activity allows students to think about why and how to explore Space. The activity supports students in debating a cross-disciplinary topic linked to physics, astronomy, biology, health and environmental studies and social sciences. This debate can provide students with insights into how scientists and professionals make and defend claims and deal with the uncertainty inherent in modern science and technology. Teachers can decide what kind of assessment to encourage the free expression of students’ ideas and arguments. The teacher can also serve as a moderator of the activity.
            </p>

            <p>
                Relevant information is presented in the Scientific background information. 
            </p>

            <p>
                Suppose the teacher experiences a shortage of time for full-scale role-play activity. In that case, we can suggest, as an alternative, a shorter version of the <button class="btn btn-sm btn-accent" @click="toggleModal('space__exploration-debate')"><Icon name="mdi:open-in-new" size="22" /> Space Exploration Debate</button> that could be implemented just during one lesson <sup><span class="tooltip" data-tip="This is an adopted version of activity from National Schools’ Observatory teaching resources prepared by colleagues from John Moores University in Liverpool.">[2]</span></sup>. 
            </p>

            <p>
                At the end of the module, the teacher can include a summing-up reflective activity about what the students have learned by participating in the module activities and how they collaborated, preparing arguments and presentations and providing feedback for the peers. Artistic reflections on Space by the art school students (see <NuxtLink to="https://photobookaa.000webhostapp.com/" target="_blank">photography books</NuxtLink> and <NuxtLink to="https://www.artsteps.com/view/640e83202e32550b524a52b1" target="_blank">virtual exhibition</NuxtLink>) can show alternative ways of exploring space-related phenomena. They could serve as a point of departure for discussing what the students would wish to learn more in this area. 
            </p>
        </section>


        </section>









<!--
    TTTTTTTTTTTTT
    TTTTTTTTTTTTT
         TTT
         TTT
         TTT
         TTT
         TTT
         TTT
-->





        <teleport to="#theEnd" v-if="userPrefs.modalOpen === true && userPrefs.modalName === 'space__exploration-debate'">
            
            <UiDrawer>

                <h2>
                    Space Exploration Debate
                </h2>

                <h3>
                    Introduction:
                </h3>
                <p>
                    Introduce the concept of a ‘debate’. Ask students to share their experience of debate-style events. Why do we need to argue and be persuasive?
                </p>
                <h3>
                    Warm-up activity:
                </h3>
                <ol>
                    <li>
                        Students get into groups of 4. Set the scene – they are going to space. They should decide on one thing each to take with them and tell their group what it is. This item is not critical to the mission but is something just for them.
                    </li>
                    <li>
                        We are in the rocket when we realise we don’t have enough fuel. We must scrap some supplies to reduce our weight. 
                    </li>
                    <li>
                        In their groups, students should choose only 1 of their group’s items to save.
                    </li>
                    <li>
                        Ask students to feedback to the other groups.
                    </li>
                </ol>
                <h3>
                    Debate topic:
                </h3>
                <p>
                    “How should we proceed with space exploration”
                </p>
                <h3>
                    Debate activity:
                </h3>
                <ol>
                    <li>
                        Read the debate topic
                    </li>
                    <li>
                        Allocate four corners or areas of the room as
                        <ul class="leading-tight">
                            <li>
                                “Space should be explored by humans, not robots”
                            </li>
                            <li>
                                ‘Only robots should explore space’
                            </li>
                            <li>
                                ‘Both humans and robots should explore space’
                            </li>
                            <li>
                                “We should not spend taxpayer's money on the space industry
                            </li>
                        </ul>
                    </li>
                    <li>
                        Ask students to decide individually what position they agree with and move to the area of the room that corresponds to their belief. If they do not have a strong opinion either way, get them to make an initial decision – but make it clear to everyone that they can change position at any time.
                    </li>
                    <li>
                        Once students have chosen their position, give them some time to discuss with others in their corner why they chose that position and how they could persuade others to join them.
                    </li>
                    <li>
                        Students nominate someone from their team to state their case.
                    </li>
                    <li>
                        The debate begins! You can decide whether students can talk openly between groups or if they should put their hands up and wait for you to call on them.
                    </li>
                </ol>
                <h3>
                    Wrap up:
                </h3>
                <p>
                    Summarise the main points from the debate and create a class pro and con list. Let the students know that this topic is continually under debate among scientists and politicians.
                </p>
                <h3>
                    Facilitation tips:
                </h3>
                <ul class="leading-tight">
                    <li>
                        Ensure students know there is no absolute right or wrong answer
                    </li>
                    <li>
                        Encourage students to give reasons for their opinions
                    </li>
                    <li>
                        Step in if the students go off topic
                    </li>
                    <li>
                        Ensure one or two students do not dominate the debate
                    </li>
                    <li>
                        Try not to influence the students’ opinions.
                    </li>
                </ul>
            </UiDrawer>
        </teleport>



        <teleport to="#theEnd" v-if="userPrefs.modalOpen === true && userPrefs.modalName === 'space__water-rocket'">
            <UiDrawer>
                <h2>
                    Building and launching a water rocket
                </h2>

                <p>
                    You have probably already built a water rocket from a PET bottle. 
                    <br />
                    Materials needed: 
                    <ul class="leading-tight">
                        <li>
                            a larger (1,5 l) PET bottle
                        </li>
                        <li>
                            wine cork (could be plastic)
                        </li>
                        <li>
                            bicycle valve
                        </li>
                        <li>
                            plastic hose that fits on the bicycle valve
                        </li>
                        <li>
                            possibly some steel wire and a powerful bicycle pump or foot pump 
                        </li>
                    </ul>
                </p>
                <p>
                    Carefully drill a hole through the cork, a little smaller in diameter than the hose. Push the hose through the hole so that it protrudes 1–2 cm on one side, and attach the bicycle valve to the other end of the hose. If the valve is loose, you can use the steel wire as a hose clamp – in that case, wrap it tightly with pliers. Next, it is necessary to manufacture a launch pad so that the rocket stands firmly. 
                </p>
                <p>
                    Fill the bottle to a third with water, insert the cork, place the rocket in the launch pad, and connect the pump to the valve and pump. Extra air pressure builds up in the bottle; it is the pump's energy that is stored. In the end, the pressure becomes so high that it overcomes the friction between the cork and the bottleneck, and the cork comes off. The stored energy is released, the water is pushed out with a huge force, and the rocket flies away. You can try to launch your rocket with different “fuel compositions” – much less water or just with air in the bottle and see how this will influence rocket flying capability.
                </p>
                <p>
                    <a href="https://www.scienceprojectideas.org/water-bottle-rocket.htm" target="_blank" rel="noopener noreferrer">DIY water rocket</a>
                </p>
            </UiDrawer>
        </teleport>


        <teleport to="#theEnd" v-if="userPrefs.modalOpen === true && userPrefs.modalName === 'space__swedish-case'">
            <UiDrawer>
                <h2>
                    A case of Swedish Space Programme
                </h2>

                <p>
                    Space exploration is an actively developing socio-scientific and technological area in Sweden. Technical development is conducted under the umbrella of the <a href="https://sscspace.com/about-ssc/ssc-company-presentations/" target="_blank" rel="noopener noreferrer">Swedish Space Corporation</a> (SSC) created more than fifty years ago (in 1972), which currently has business connections all around the globe. SSC provides communication links for satellite control, launch support, payload data services and teleports. Through SSC’s global network of ground stations, they give customers access to their spacecraft in most orbit altitudes and inclinations from <a href="https://en.wikipedia.org/wiki/Low_Earth_orbit" target="_blank" rel="noopener noreferrer">Low Earth Orbit</a> (LEO) to Lunar and deep space.
                </p>
                <p>
                    SSC provides support to parabolic aircraft flights for scientific and technological experiments in reduced gravity. This is a cost-efficient and flexible way to verify experiment functionality and parameter tuning before experiments are flown in space.
                </p>
                <p>
                    SSC operates Esrange Space Centre, located 40 km from Kiruna in the very north of Sweden, above the Arctic Circle, with access to a vast, unpopulated impact and recovery land area covering 5200 square kilometres. It also tests rocket engines and uncrewed aerial vehicles (UAV).
                </p>
                <p>
                    In January 2023, a new launch complex was inaugurated at the Spaceport Esrange capable of launching rockets to LEO with a payload of satellites and even human space missions. This is the mainland EU’s first orbital launch complex offering an independent European gateway to space. Europe’s initiative for reusable rocketry – the Themis program – commissioned by the European Space Agency ESA and led by ArianeGroup will be the first to start operation at Spaceport Esrange during 2023.
                </p>
                <p>
                    SSC has also indicated its interest in organising space tourism missions from Esrange, where tourists could fly up to see the Aurora Borealis. This could be complementary in many ways to southern spaceports.
                </p>
            </UiDrawer>
        </teleport>

    </div>
</template>

