<script setup>
import StudentActivity45En from './Student-activity45-en.vue';


</script>
<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <UiTableOfContents class="md:max-w-xs">
            <template #title>Table of Contents</template>
            <template #content>
                <ol>
                    <li>
                        <a href="#activity-1">Presentation of the video introduction</a>
                    </li>
                    <li>
                        <a href="#activity-2">Group discussion</a>
                    </li>
                    <li>
                        <a href="#activity-3">Mythbusting</a>
                    </li>
                    <li>
                        <a href="#activity-4">Transforming evidence to a suitable format</a>
                    </li>
                    <li>
                        <a href="#activity-5">Group presentations</a>
                    </li>
                    <li>
                        <a href="#activity-6">Game</a>
                    </li>
                </ol>
            </template>
        </UiTableOfContents>



        <section class="e-article print:not-prose">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Viruses</h1>
            <h5 class="font-normal uppercase leading-tight">Materials for students</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">Introduction</h2>

            
            <section class="e-card e-module__meta">
                <p class="m-0 leading-tight font-bold">
                    You may find <a href="https://docs.google.com/document/d/1DAi745eJ9z4-Nky9xG8-qXZk5kiMgk_Ti8yDXuFU7tI/edit?usp=sharing" target="_blank">this Google Docs document</a> useful to write down your answers.
                </p>
            </section>
            <p>This module invites you to falsify (“bust”) or confirm a common myth about viruses. In a video introduction, a few virus-related beliefs are brought up, after which you are expected to express your opinion and discuss the topic within your group. Also, you are invited to opt out of one myth about the viruses to be busted, whether based on secondary evidence (e.g., information searches from internet) or experimentally. Through this activity, you learn to assess the reliability of information sources (science/research databases, popular science, other media) and/or develop further your experimentation skills. In both cases, you need to pose a testable hypothesis or a research question and then find evidence to confirm/falsify the hypothesis/answer your research question. After making conclusions, you are invited to prepare and present your findings to the classmates (or other audiences) in a relevant and convincing manner through a short video post. The module is finished with a board game where you must decide on virus-related issues.</p>
        
                
            

            <hr id="activity-1" class="mt-10 mb-40 print:my-10" />
            <h2>Activity 1: Presentation of the video introduction</h2>
            
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

            <p>Please watch the video carefully. Put down your initial thoughts and feelings about the issues presented.</p>

            <UiYoutube video="t4v-36h2noo" /> 
            
            <!-- <label class="text-sm font-bold">Find Activity 1 inWrite your answer here:</label> -->
            <!-- <textarea rows="3" class="px-4 py-2 border border-slate-400 shadow w-full rounded"></textarea> -->

            
            
            
            




            <hr id="activity-2" class="mt-10 mb-40 print:my-10" />
            <h2>Activity 2: Group discussion</h2>
            
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
            
            <p>After watching the video, you are invited to discuss the topic within your group (4-6 members).</p>
            <ol>
                <li>Please, express your initial thoughts and feelings about the presented issue to the others.</li>
                <li>As a group, you are invited to choose one of the following myths for busting based on information found on the internet, (text)books, or/and, if possible, experimentally.</li>
            </ol>
            <p>You could choose between the following myths or define your own (in the last case, please consolidate the topic first with your teacher):</p>

            
            <h3>Myth 1: Vaccines cause autism/ serious side effects</h3>
            <p>Some people believe that vaccines and their additives/preservatives can cause severe reactions in the organism; some include autism - a group of developmental disabilities that can cause significant social, communication, and behavioral challenges. Are those claims warranted?</p>

            <h3>Myth 2: Infant immune systems cannot handle multiple vaccines.</h3>
            <p>A few days after the birth as well as some weeks/months later, several different vaccines are injected into a baby. The question is if this can be handled by an infant's body?</p>

            <h3>Myth 3: Immunity acquired through a disease is a better choice than immunity acquired through vaccination.</h3>
            <p>Natural immunity is obtained from exposure to the disease through infection. Whereas vaccine-induced immunity is obtained by introducing a killed or weakened form of the disease organism or mRNA created in a laboratory to teach our cells how to make a protein or even just a piece of a protein or modified version of a virus that triggers an immune response. Which raises the question of whether they are equal or not.</p>

            <h3>Myth 4: Vaccines contain life-threatening substances.</h3>
            <p>Sometimes it has been said that vaccines might contain additives or preservatives, some toxic as mercury, aluminum, formaldehyde, etc. Whether or to what extent are these claims valid?</p>

            <h3>Myth 5: Better hygiene and sanitation are responsible for decreased infections, not vaccines.</h3>
            <p>The spread of the disease has been argued to be related to environmental conditions, sanitation, and personal hygiene. During the last two centuries, there has been improvement in all. Same time the number of infections has decreased, and vaccination has increased. But can we say that vaccines do not matter?</p>

            <h3>Myth 6: Vaccines can infect the child with the disease it is trying to prevent.</h3>
            <p>Some vaccines (measles, chickenpox, etc.) use weakened forms of the disease organism (live-attenuated vaccines). The question is if this will infect the child?</p>

            <h3>Myth 7: We do not need to vaccinate because many countries have low infection rates.</h3>
            <p>As very few people have diseases, there is a very low probability that I will be in contact with those people or it is improbable that I will travel to areas with higher infection rates. Therefore, some believe we could abandon most vaccines routinely administered to children.</p>

            <h3>Myth 8: Soap is as good as alcohol for killing certain viruses (e.g. COVID-19)</h3>
            <p>One option to disinfect is using alcohol, but the other is hashing hands with soap. But are they equally effective?</p>

            <h3>Myth 9: Masks are pointless in preventing upper respiratory diseases (e.g. COVID-19).</h3>
            <p>There has been much discussion in society about the effectiveness of wearing masks for preventing droplet diseases. At the same time, this habit has been normality in some, e.g. Asian cultures. Still, what is the scientific evidence behind it? Or is it possible for you to test their effectiveness yourself?</p>
            
            <h3>Myth 10: Prolonged use of the mask produces hypoxia/Masks can cause carbon dioxide poisoning.</h3>
            <p>It is believed that through the mask, you will get less oxygen. If it is true, then with a limited oxygen supply, there is an increased risk of oxygen lack, called hypoxia. Same time your body releases carbon dioxide that, in very high concentrations, can be toxic. But is this assumption actually true?</p>

            <!-- <h3>Group decision:</h3>
            
            <label class="font-bold text-sm">We are going to bust the following myth:</label>
            <textarea class="p-3 border border-slate-4 shadow rounded w-full"></textarea> -->
            
            
            









            <hr id="activity-3" class="mt-10 mb-40 print:my-10" />
            <h2>Activity 3: Mythbusting</h2>

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

            <p>You are now invited to narrow down the myth into a <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank">testable hypothesis</a> (research question), plan further activities following the cycle as given in Figure 2, and share the responsibilities within your group. Also, you should consider whether your hypothesis can be tested based only on secondary evidence (relying on published material of already conducted experiments) or on your own experiment.</p>

            <UiContentImage src="https://evidence.onkel.ee/assets/viruses__mythbusting--tp.webp" />

            <h3>Activity 3a</h3>
            <p class="e-card italic"><Icon name="material-symbols:warning-outline-rounded" class="text-3xl" /> (you can skip this step and move directly to Activity 3b in case you do not test your myth experimentally)</p>
            <p>In case you think your myth can be tested experimentally, please read the following guidelines:</p>

            <h4>You are expected to:</h4>
            <ul class="leading-tight">
                <li>Develop a testable hypothesis/research question.</li>
                <li>Design an experiment that will confirm or falsify your hypothesis/ answer your research question.</li>
                <li>Present your collected data in tables and graphs, and preferably, videotape your experiment as evidence (look at the tutorial).</li>
                <li>Explain your results using scientific evidence.</li>
                <li>Use your results to form a conclusion.</li>
                <li>Estimate the plausibility of the chosen myth.</li>
                <li>Share workload within your group (e.g., through designating everybody to a different role - manager, secretary, supplier of materials).</li>
            </ul>

            <label class="text-sm font-bold">Our hypothesis/research question is:</label>
            <textarea class="w-full p-3 border border-slate-400 shadow rounded" rows="5"></textarea>

            <h3>Plan of activities</h3>
            
            <section class="e-card">
                <p class="italic my-0">Think carefully about how you will control all the other variables except the one you will manipulate. Also, you should think carefully about how to share the workload within your group. Please indicate by which activities (1), (2), (3) … you are involved as a whole team and by which you are going to divide responsibilities. In this case, write down in brackets, please, who is responsible for what</p>
            </section>


            <h1>[[[VAHETABEL]]]</h1>

            <label class="text-sm font-bold">Based on the experiment, our conclusion(s) is/are:</label>
            <textarea class="w-full p-3 border border-slate-400 shadow rounded" rows="5"></textarea>

            <p>You are now expected to find evidence from secondary sources to confirm your own findings using the following tool. [[[LINK TO RELIABILITY TOOL]]]</p>



            <hr id="activity-3b" class="mt-10 mb-40" />

            <h3>Activity 3b</h3>

            <p>In case you find it challenging to test your myth experimentally, you are expected to do the following:</p>
            <ul class="leading-tight">
                <li>plan your search for relevant information that will confirm or falsify your hypothesis/ answer your research question,</li>
                <li>develop a testable hypothesis/research question,</li>
                <li>present collected data in the form of tables, graphs, or similar,</li>
                <li>assess the reliability of the gathered evidence;</li>
                <li>use your findings to draw a conclusion;</li>    
            </ul>
            
            <p>While doing this, you should think carefully about how to share the workload within your group. You could designate everybody to a different role, for example, to a leader who is organizing the activities, to a secretary who is making notes and comments about the information found, to an investigator who is doing searches, to a critic who is scrutinizing the reliability of the information.</p>

            <label class="text-sm font-bold">Our hypothesis/research question is:</label>
            <textarea class="w-full p-3 border border-slate-400 shadow rounded" rows="5"></textarea>

            <p>
                <b>Plan of activities</b>  &nbsp;
                <span class="italic">(you could indicate by which activities you are involved as a whole team and by which you are going to divide responsibilities, in this case, put down, please, who is responsible for what).</span>
            </p>



            <StudentActivity45En />







            












            <hr id="activity-6" class="mt-10 mb-40 print:my-10" />
            <h2>Activity 6: Game</h2>

            <p class="text-sm italic">This game is adopted from, and modified based on the following source: <a href="https://playdecide.eu/playdecide-kits/167151" target="_blank" rel="noopener noreferrer">https://playdecide.eu/playdecide-kits/167151</a></p>

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

            <p>In the following activity, you are invited to play a card game with your group/classmates to practice simple, respectful, and fact-based group discussion that is expected to model socio-scientific decision-making processes in our society. The game enables you to explore a topic in-depth in an informal and informative way, reflect on thoughts and opinions that would be difficult to get to and express them in other ways.</p>
            
            <p class="font-bold">More precisely, you are expected to:</p>
            <ul class="leading-tight">
                <li><b>Get familiar</b> with the problems posed within the context of vaccination/wearing masks and look at them from different perspectives.</li>
                <li>Form or clarify your <b>own opinion</b></li>
                <li>Work towards a shared <b>group vision</b></li>
                <li><b>Vote</b> on policy positions, <b>share</b> your results, and <b>compare</b> them with the opinions of others who played the same game (and had the same theme).</li>
            </ul>

            
            <a href="../tools/cardgame" target="_blank" class="my-6 px-4 py-2 inline-flex items-center gap-2 bg-sky-600 text-md rounded text-white no-underline uppercase transition
            hover:bg-sky-700
            print:hidden">
                <icon name="material-symbols:print-outline-rounded" />Open printable cards
            </a> (opens in new tab)
            
            <ToolsCardgameVirusesTheme1 />







        </section>
    </div>
</template>