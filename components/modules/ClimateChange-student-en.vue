<script setup>
    // import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();

    // const changeTab = (index) => {
    //     userPrefs.setLearnPath("learnPathViruses", index);
    // } 
</script>

<template>
    <!-- <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="answers" target="_blank" class="text-lg font-bold uppercase">Sinu vastused</nuxt-link>
    </section> -->
    
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
            <h1 class="mb-0">Climate change</h1>
            <h5 class="font-normal uppercase leading-tight">Student material</h5>
        
            <h2 id="section-1">Introduction</h2>

            
            <!-- <section class="e-card e-module__meta">
                <p class="m-0 leading-tight font-bold">
                    You may find <a href="https://docs.google.com/document/d/1DAi745eJ9z4-Nky9xG8-qXZk5kiMgk_Ti8yDXuFU7tI/edit?usp=sharing" target="_blank">this Google Docs document</a> useful to write down your answers.
                </p>
            </section> -->


            <p>This module invites you to falsify or confirm a common myth about climate change. After watching <a href="#activity-1">the introductory video</a> on climate change-related myths, you will discuss them in groups and choose one myth. Group discussion will lead to a myth-busting activity where you will look for evidence to falsify or confirm a chosen myth (see Figure 1).</p>

            <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-en.webp" />

            <p>You could follow the open or guided inquiry option. In the first case (open inquiry), you will search for any scientific sources on the web (e.g. video, articles, webpages, animations) and apply your plan of activities to falsify or confirm your myth. In the 2nd case (guided inquiry), you will be involved in a specific suggested plan of activities (e.g. watch recommended video, read chosen articles, apply recommended experiments) in order to falsify or confirm your myth. Through the myth-busting activity, you will learn to assess the reliability of information sources (science/research databases, popular science, and other media). Of course, you have first to pose a testable hypothesis. After making conclusions, you will prepare to present your findings to your classmates (or different audiences) in a relevant and convincing manner (e.g. in the form of video posts). The module is finished with a role-play where you can suggest solutions using your scientific knowledge and departing from your personal and social values.</p>
                        
            

            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-2">Activity 1: Presentation of the video introduction</h2>
            
            <p>Please watch the introductory video. Put down your initial thoughts and feelings about the issues presented.</p>

            <UiYoutube video="CbJ7GmgEAAo" />

            



<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-3">Activity 2: Group discussion</h2>
            
            <p>After watching the video, you are invited to discuss the topic in small groups (4-6 members).</p>

            <ol>
                <li>Please, express your initial thoughts and feelings about the issues presented in the video to your peers.</li>
                <li>As a group, you are invited to choose one of the myths or issues for further busting (falsifying) or confirmation based on scientific sources.</li>
                <li>After choosing the myth you want to investigate, decide whether to follow the open or guided inquiry and click on the corresponding link</li>
            </ol>
            

            
            
            

            





<!-- 
    333333 
        33
     33333
        33
    333333
 -->            
            
            
            
            
            
            
            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-4">Myths about the climate change</h2>

            


            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myth 1:</span> The extinction of species is a natural process. Mass extinctions of species have always occurred.</h4>

                <p>The extinction of species is a historical problem. We have evidence of several mass extinctions from prehistoric times, most notably the extinction of the dinosaurs. This extinction, which took place 66,000,000 years ago, was attributed to the impact of an asteroid on Earth. Over the years, we have other well-known examples, such as the extinction of mammoths. However, the causes of extinction that have been recorded vary.</p>

                <p>Also, the suggestion that humanity can impact and disturb forces of such magnitude reflects a mind-numbing self-centred arrogance. Humanity is a subset of Nature. Nature is not a subset of humanity. People can neither cause nor intervene to correct these processes (Financial Sense University).</p>
                <p>
                    <a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
                </p>
                
                <UiNavButtonBar class="font-Body mb-6" :buttons="[
                    {text:'Open inquiry', url:'inquiry/open/'},
                    {text:'Guided inquiry', url:'inquiry/guided/myth-1'}
                ]" />

            </UiCardInfo>

            <div class="divider my-6"></div>
            
            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myth 2:</span> Organisms can adapt to climate change.</h4>
                
                <p>The earth has a history of 4.54 billion years. The weather conditions that prevailed from time to time on the planet changed. Therefore, the species/organisms living on earth were forced to adapt to the new conditions to survive and be preserved. In this way, the evolution of the species emerged.</p>

                <p>Plants and animals have already adapted several times to adverse conditions (climate change, meteorite falls, volcanic eruptions, etc.). This makes them able to adapt to rising temperatures and the situation we now call climate change. In other words, species are naturally capable of surviving in new conditions.</p>

                <p>
                    <a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
                </p>

                <UiNavButtonBar :buttons="[
                    // {text:'Juhised', url:''},
                    {text:'Avatud uurimus', url:'inquiry/open/'},
                    {text:'Juhitud uurimus', url:'/'}
                ]" class="mb-6 font-Body"
                />
                
            </UiCardInfo>
            
            <div class="divider my-6"></div>
            
            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myth 3:</span> The science of climate change is not credible.</h4>
                
                <p>Meteorological stations are located in areas where the data collected are not representative of climate change and, therefore, unreliable for the study of the global climate. Scientists target global terrorism for data they create under the conditions they want.</p>

                <p class="pl-4 border-l border-blue-500">
                    <i>“We found [U.S. weather] stations located next to the exhaust fans of air conditioning units, surrounded by asphalt parking lots and roads, on blistering-hot rooftops, and near sidewalks and buildings that absorb and radiate heat.”</i>
                    <br />
                    <a href="http://wattsupwiththat.files.wordpress.com/2009/05/surfacestationsreport_spring09.pdf" target="_blank" rel="noopener noreferrer" class="text-sm">
                        —Watts 2009
                    </a>
                </p>

                <p>
                    <a href="https://skepticalscience.com/surface-temperature-measurements-basic.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/surface-temperature-measurements-basic.htm</a>
                </p>
                
                <UiNavButtonBar :buttons="[
                    // {text:'Juhised', url:''},
                    {text:'Avatud uurimus', url:'inquiry/open/'},
                    {text:'Juhitud uurimus', url:'/'}
                ]" class="mb-6 font-Body"
                />
            </UiCardInfo>
            
            <div class="divider my-6"></div>
            
            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myth 4:</span> The temperature rise is for good.</h4>
                
                <p class="pl-4 border-l border-blue-500">
                    <i>“By the way, if you’re going to vote for something, vote for warming. Less deaths due to cold, regions more habitable, larger crops, longer growing season. That’s good. Warming helps the poor.”</i>
                    <br />
                    <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&feature=youtu.be&t=353" target="_blank" rel="noopener noreferrer" class="text-sm">
                        —John MacArthur
                    </a>
                </p>

                <p>
                    <a href="https://skepticalscience.com/global-warming-positives-negatives.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/global-warming-positives-negatives.htm</a>
                </p>
            </UiCardInfo>
            
            <div class="divider my-6"></div>
            
            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myth 5:</span> There is no correlation between CO₂ and temperature.</h4>
                
                <p class="pl-4 border-l border-blue-500">
                    <i>“It was the post-war industrialization that caused the rapid rise in global CO₂ emissions, but by 1945 when this began, the Earth was already in a cooling phase that started around 1942 and continued until 1975. With 32 years of rapidly increasing global temperatures and only a minor increase in global CO₂ emissions, followed by 33 years of slowly cooling global temperatures with rapid increases in global CO₂ emissions, it was deceitful for the IPCC to make any claim that CO₂ emissions were primarily responsible for observed 20th-century global warming.”</i>
                    <br />
                    <a href="https://archive.md/q3Tim" target="_blank" rel="noopener noreferrer" class="text-sm">
                        —Norm Kalmanovitch
                    </a>
                </p>

                <p>
                    <a href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
                </p>
            </UiCardInfo>
            
            <div class="divider my-6"></div>
                        
            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myth 6:</span> Climate change actions will make people poorer.</h4>

                <p class="pl-4 border-l border-blue-500">
                    <i>“By the way, if you’re going to vote for something, vote for warming. Less deaths due to cold, more habitable regions, larger crops, longer growing season. That’s good. Warming helps the poor.”</i>
                    <br />
                    <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&feature=youtu.be&t=353" target="_blank" rel="noopener noreferrer" class="text-sm">
                        —John MacArthur
                    </a>
                </p>
            
            </UiCardInfo>
            
            <div class="divider my-6"></div>

            <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myth 7:</span> The earth's climate has always changed, and now the same thing is happening.</h4>
                <p class="pl-4 border-l border-blue-500">
                    <i>“Climate is always changing. We have had ice ages and warmer periods when alligators were found in Spitzbergen. Ice ages have occurred in a hundred thousand-year cycle for the last 700 thousand years, and there have been previous periods that appear to have been warmer than the present despite CO₂ levels being lower than they are now. More recently, we have had the medieval warm period and the little ice age.”</i>
                    <br />
                    <a href="http://www.quadrant.org.au/blogs/doomed-planet/2009/07/resisting-climate-hysteria" target="_blank" rel="noopener noreferrer" class="text-sm">
                        —Richard Lindzen
                    </a>
                </p>
                <p>
                    <a href="https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm</a>
                </p>
            </UiCardInfo>













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
            <h2 id="section-7">Activity 6: Argumentation game</h2>


            <p>The following argumentation game is implemented at the end of the climate change module. Read the following guidelines carefully.</p>
            

            <h3>Game Instructions:</h3>
            
            <ol>
                <li>Players are divided into equal groups.</li>
                <li>
                    <b>Choosing cards.</b> Each team chooses a green and a blue card. 
                    <ul>
                        <li>
                            <b>Green cards</b> record stories related to climate change. Stories are based on facts. 
                        </li>
                        <li>
                            Each green card corresponds to a <b>blue information card</b> related to the story it contains and gives the answer to it.
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Discussion in groups.</b> All players in each team read the green card. Then, the players discuss their stories with their teams. 
                    <br />
                    For example, the first green card tells a true story about a 16-year-old male polar bear found dead in Svalbard by starvation. Next, the team players try to explain why the polar bear died.
                </li>
                <li>
                    <b>Plenary discussion.</b> When each group presents the story in plenary, the group with the corresponding blue information card tries to respond to the script with its own arguments. 
                    <br />
                    At this stage, players share their views with others and improve their responses as they hear different arguments and opinions. In this case, the blue card team claims that the bear died due to climate change.
                </li>
                <li>
                    At the end of the game, players will link the story cards to info cards. Each argument gets 3 points. The team with the highest score wins the game.
                </li>
            </ol>

            
            <hr>
            
            <h3>The cards</h3>


            <UiCardGamePrintMessage url="../tools/cards/climate-change" />

            <ToolsCardgameClimateChange :printMode="false" />

            <hr>


        </section>
    </div>
</template>