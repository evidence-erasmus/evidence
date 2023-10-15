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


        <section class="e-article print:not-prose" lang="sv" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <!-- <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" /> -->
            <h1 class="mb-0">Rymden</h1>
            <h5 class="font-normal uppercase leading-tight">Elevmaterial</h5>
        
            <section id="s-0">
                <h2 id="s-0-title">Introduktion</h2>

                <p>
                    Redan som liten var du kanske nyfiken på rymden och vad som finns där ute, om olika himlakroppar och rymdens oändlighet.  I denna modul ska du få möjlighet att reflektera över rymden och rymdutforskningar. Välj en <a href="https://www.youtube.com/watch?v=a95oKCDgIow" target="_blank" rel="noopener noreferrer">introduktionsvideo </a>, där några rymdrelaterade idéer, drömmar och myter tas upp och diskutera dem i grupper. I grupper ska ni välja en myt eller fråga att undersöka som kan utföras praktiskt eller med hjälp av s information från vetenskaplig litteratur och internet (se Figur 1). 
                </p>

                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-en.webp">
                    <template #caption>
                        <b>Figur 1.</b> Undersökande arbetssätt (Mythbusting Aktivitet)
                    </template>
                </UiContentImage>

                <p>
                    Resultatet av undersökningar och slutsatser ska ni presentera för klasskamraterna till exempel i form av videoinlägg eller PowerPoint-presentationer. Modulen avslutas med ett rollspel om rymdfärdsfrågor.
                </p>
            </section>        
            

            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s1">
                <h2 id="s1-title">
                    Aktivitet 1: Videointroduktion
                </h2>
            
                <p>
                    Se introduktionsvideon. Anteckna dina första tankar och känslor om det som presenteras.
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

        <section id="s2">
            <h2 id="s2t">Aktivitet 2: Gruppdiskussion</h2>
            
            <p>Efter att ha sett videon, diskutera ämnet i små grupper.</p>

            <ol>
                <li>Berätta om dina tankar och känslor gällande de frågor som presenteras i videon för de andra.</li>
                <li>Som grupp ska ni välja en av frågorna från introduktionsvideon eller andra myter och idéer (se nedan) för vidare utforskning.</li>
            </ol>
            
            <h3>
                Några myter och idéer om rymden
            </h3>
            
            <ul>
                <li><span class="text-rose-400 font-bold">Myt 1:</span> Astronauter som kretsar runt jorden är viktlösa eftersom de är långt från jorden.</li>
                <li><span class="text-rose-400 font-bold">Myt 2:</span> Att äta kräver gravitation för att maten ska komma ner till magsäcken. Astronauter behöver specialutbildning för att äta i mikrogravitation (i en rymdstation).</li>
                <li><span class="text-rose-400 font-bold">Myt 3:</span> Rymdresor kommer snart att stoppas av rymdskräp.</li>
                <li><span class="text-rose-400 font-bold">Myt 4:</span> Utomjordingar besöker jorden med oidentifierade flygande objekt (UFO), men regeringarna och astronauterna döljer UFO-bevis för oss</li>
                <li><span class="text-rose-400 font-bold">Myt 5:</span> Rymdfärder bidrar till luftföroreningar och global uppvärmning</li>
                <li><span class="text-rose-400 font-bold">Myt 6:</span> Människor borde kolonisera Mars för att säkerställa vår framtida överlevnad</li>
                <li><span class="text-rose-400 font-bold">Myt 7:</span> Det finns liv någon annanstans i universum</li>
                <li><span class="text-rose-400 font-bold">Myt 8:</span> Rymdavfall kan inte tas bort från rymden på ett säkert sätt</li>
                <li><span class="text-rose-400 font-bold">Myt 9:</span> För att ta sig till Mars, måste ett rymdskepp ha en raketmotor igång på hela vägen</li>
                <li><span class="text-rose-400 font-bold">Myt 10:</span> Raketer behöver luft (atmosfär) som skapar en motkraft för att fungera</li>
                <li><span class="text-rose-400 font-bold">Myt 11:</span> Den svaga gravitation (mikrogravitation) som är i rymdstationen ISS som kretsar runt jorden, är skadlig för astronauternas hälsa</li>
                <li><span class="text-rose-400 font-bold">Myt 12:</span> Den stora gravitation (hypergravitation) som sker under raketfarkostuppskjutning och landning är skadligt för astronauters hälsa</li>
                <li><span class="text-rose-400 font-bold">Myt 13:</span> Kosmisk strålning är farlig för astronauterna på ISS</li>
            </ul>

            <p>
                Någon annan myt om rymden som kanske kan undersökas? Kolla med läraren.
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
                    Aktivitet 3: Undersökning/ Mythbusting
                </h2>
                <ModulesSpaceStudentActivitySv />
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