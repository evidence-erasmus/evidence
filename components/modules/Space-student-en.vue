<script setup>
    import { useUserPreferences } from '~~/store/useUserPreferences'; 
    const userPrefs = useUserPreferences();
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
            <h1 class="mb-0">Space</h1>
            <h5 class="font-normal uppercase leading-tight">Student material</h5>
        
            <section id="s-0">
                <h2 id="s-0-title">Introduction</h2>

                <p>
                    As a child, you were perhaps curious about space and what is out there, about different celestial bodies and the infinity of space. This module invites you to reflect on human space explorations and investigate various space-related myths and issues. Depart from the <a href="https://www.youtube.com/watch?v=a95oKCDgIow" target="_blank" rel="noopener noreferrer">introductory video</a>, where some space-related ideas, dreams, risks, fears and myths are brought up and discussed in groups. Group discussion will lead to selecting a myth-busting or exploration activity where you will look for evidence to falsify or confirm a chosen myth or clarify existing misconceptions. This activity could be conducted practically or using secondary evidence (information from science literature and the internet). As a first step in working with a myth or issue you want to explore, you have to pose a testable hypothesis (see Figure 1). 
                </p>

                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-en.webp">
                    <template #caption>
                        <b>Figure 1.</b> Mythbusting/investigation activities
                    </template>
                </UiContentImage>

                <p>
                    After finding evidence for your results and making conclusions, you will prepare a presentation to your classmates in a relevant and convincing manner (for example, in the form of a short video post, poster or PowerPoint presentation).  The module is finished with a role-play about space travel issues.
                </p>
            </section>        
            

            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-1">
                <h2 id="s-1-title">
                    Activity 1: Presentation of the video introduction
                </h2>
            
                <p>
                    Please watch an introductory video (Earth Calls Martha). Write down your initial thoughts and feelings about the issues presented.
                </p>
    
                <UiYoutube video="a95oKCDgIow" />
            </section>


<!--
    222222
        22
    222222
    22
    222222
-->
            


        <hr class="mt-10 mb-40 print:my-10" />

        <section id="s-2">
            <h2 id="s-2-title">Activity 2: Group discussion</h2>
            
            <p>After watching the video, you are invited to discuss the topic in small groups (3-4 members).</p>

            <ol>
                <li>Please, express your thoughts and feelings about the issues presented in the video to your peers.</li>
                <li>As a group, you are invited to choose one of the issues (from the introductory video) for further exploration or/and look at other myths, ideas and issues (see below) that could be of interest to your group.</li>
            </ol>
            
            <h3 id="myths">
                Some myths and ideas about space
            </h3>
            
            <ul>
                <li><span class="text-rose-400 font-bold">Myth 1:</span> Astronauts orbiting Earth are weightless because they are far from Earth.</li>
                <li><span class="text-rose-400 font-bold">Myth 2:</span> Eating requires gravity for food to move to our stomach. Astronauts need special training to eat in microgravity (in a space station).</li>
                <li><span class="text-rose-400 font-bold">Myth 3:</span> Space travel will soon be stopped by space debris.</li>
                <li><span class="text-rose-400 font-bold">Myth 4:</span> Aliens visit the Earth with unidentified flying objects (UFOs), but the governments and astronauts hide UFO evidence from us</li>
                <li><span class="text-rose-400 font-bold">Myth 5:</span> Space flights contribute to atmospheric pollution and global warming</li>
                <li><span class="text-rose-400 font-bold">Myth 6:</span> Humans should colonise Mars to ensure our future survival</li>
                <li><span class="text-rose-400 font-bold">Myth 7:</span> There is life elsewhere in the Universe</li>
                <li><span class="text-rose-400 font-bold">Myth 8:</span> Space waste cannot be safely removed</li>
                <li><span class="text-rose-400 font-bold">Myth 9:</span> A spaceship needs a rocket engine working all the time on the way to Mars.</li>
                <li><span class="text-rose-400 font-bold">Myth 10:</span> Rockets need air (atmosphere) to push against.</li>
                <li><span class="text-rose-400 font-bold">Myth 11:</span> Microgravity in a space station orbiting Earth damages astronauts' health.</li>
                <li><span class="text-rose-400 font-bold">Myth 12:</span> Hypergravity during launch and landing damages the astronauts' health.</li>
                <li><span class="text-rose-400 font-bold">Myth 13:</span> Cosmic radiation is dangerous for astronauts on the ISS.</li>
            </ul>

            <p>
                Is there another space-related myth or issue that you would like to explore? Check with your teacher.
            </p>
        </section>





<!-- 
    333333 
        33
     33333
        33
    333333
 -->        

            <section id="s-3">
                <h2 id="s-3-title">
                    Activity 3: Mythbusting/ Investigation
                </h2>
                <ModulesSpaceStudentActivityEn />
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

            <section id="s-6">
                <h2 id="s-6-title">Activity 6: Debate role-play</h2>

                <h4>
                    In this activity, you are expected to:
                </h4>

                <ul>
                    <li>Get familiar with the problems posed in the role-play and see them from different perspectives</li>
                    <li>Form or clarify your own opinion</li>
                    <li>Work towards a shared group vision</li>
                    <li>Present and defend your arguments</li>
                    <li>Vote on policy positions</li>
                </ul>

                <p>
                    The role-play is formed as a debate involving a total of eight roles that you would represent in teams of 3-4 players. Each team nominates one member as spokesperson, while others act as advisors.
                </p>

                <h3>
                    Theme: Space travels
                </h3>

                <p>
                    The debate concerns the controversy that the “Human Spaceflight Programme is an unnecessary waste of resources needed for more urgent needs.”
                </p>
                <p>
                    This theme has two positions according to attributed roles: in favour and against developing the Human Spaceflight Programme in your country (sending national astronauts to space). 
                </p>

                <div class="md:grid md:grid-cols-2 gap-4">
                    <div class="border-4 border-green-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Position 1: In favour
                        </h4>
                        <p>
                            The state must recognise that crewed spaceflights offer an excellent opportunity for human scientific progress and national development. The state must invest in launching manned missions to space.
                        </p>
                    </div>
                    <div class="border-4 border-red-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Position 2: Against
                        </h4>
                        <p>
                            The state must focus only on unmanned space programmes as they are more economically and ecologically sustainable, safe, and assure technological progress.
                        </p>
                    </div>
                </div>

                <h3>
                    Phase I (≈ 25 minutes)
                </h3>
                <p>
                    Each team gets a role card with a brief profile of the role the team will represent.  You have to provide arguments in support of the perspective to be defended. 
                </p>
                <p>
                    Several info cards are provided as support material for debating Space topic.
                </p>

                <div class="grid grid-cols-5 gap-2">
                    <div v-for="i in 4" class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">
                        Info {{ i }}
                    </div>
                    <div class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">...</div>
                </div>

                <p>
                    You can also search for additional information on the Internet, taking in mind the importance of choosing reliable sources, as was done previously in Activity 3. 
                </p>


                <h3>
                    Phase II (≈ 20 minutes)
                </h3>
                <p>
                    Group discussion: In this stage, you share opinions and refine common arguments within your team. Initial arguments can be prepared in visual form as PowerPoint presentations or posters using visual facilitation technique.
                </p>

                <h3>
                    Phase III (≈ 45 min., time might need to be extended)
                </h3>
                <p>
                    Debate is divided into two parts. In the first part, the spokesperson of each team is given three minutes to present their role and initial arguments. 
                </p>
                <p>
                    Once each of the eight teams has presented its arguments, there will be a five-minute break, thus allowing refutations to be developed, the counterarguments put forward by other teams, and the refutations of these. 
                </p>
                <p>
                    Following the break, in the second part of the role-play, the various spokespersons debated, attempting to counter each other's arguments in support of their position. During this part of the role-play, the task for advisors (other team members) is to support their team spokesperson by continuing to propose refutations of the arguments put forward by the teams representing different roles.
                </p>
                <p>
                    At the end of the debate, participants can vote in favour or against using tax-payers' money for crewed or robotic space missions—roles.
                </p>



                <h3>
                    The cards
                </h3>

                <UiCardGamePrintMessage url="../tools/cards/space" />
            
                <ToolsCardgameSpace :printMode="false" />


            </section>

        </section>
    </div>
</template>