<script setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();

    const changeTab = (index) => {
        userPrefs.setLearnPath("learnPathViruses", index);
    } 
</script>

<template>
    <UiYourAnswersButton url="answers" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="viruses-student-en" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="sv" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Virus</h1>
            <h5 class="font-normal uppercase leading-tight">Elevmaterial</h5>
        

            <section id="s1">
                <h2 id="s1t">Introduktion</h2>

                <p>
                    I den här modulen uppmanas du att motbevisa (”bust”) eller bekräfta en vanlig myt om virus. I en videointroduktion tas några virusrelaterade föreställningar upp, varefter du förväntas uttrycka din åsikt om och diskutera ämnet inom din grupp. Du erbjuds också att välja en myt om virus som motbevisas genom användning av sekundära källor (t.ex. informationssökningar på internet) eller experimentellt (se figur 1). 
                </p>
                <UiContentImage class="mt-10" src="https://evidence.onkel.ee/assets/mythbusting-sv.webp" />
                <p>
                    Genom denna aktivitet lär du dig källkritik (att bedöma tillförlitligheten hos olika informationskällor: vetenskapliga, populärvetenskapliga och andra medier) och/eller vidareutveckla dina laborativa färdigheter. I båda fallen måste du ställa en testbar hypotes eller en undersökningsfråga och sedan hitta bevis för att bekräfta/motbevisa hypotesen eller besvara din forskningsfråga. Efter att ha gjort slutsatser uppmanas du att förbereda och presentera dina resultat för klasskamraterna (eller annan publik) på ett relevant och övertygande sätt genom ett kort videoinlägg, poster,  bildspel, etc. Modulen avslutas med ett kortspel där du behöver fatta beslut om virusrelaterade frågor.
                </p>
            </section>

            

                
            

            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s2">
                <h2 id="s2t">Aktivitet 1: Presentation av videointroduktionen</h2>
            
                <p>Titta noga på videon. Skriv ner dina första tankar om och upplevelser av de problem som presenteras.</p>
                <UiYoutube video="t4v-36h2noo" /> 
            </section>
            






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s3">
                <h2 id="s3t">Aktivitet 2: Gruppdiskussion</h2>
                            
                <p>
                    Efter att ha sett videon diskutera ämnet inom din grupp (4-6 medlemmar).
                </p>
                <ol>
                    <li>Berätta om dina första tankar och känslor om den presenterade frågan för de andra.</li>
                    <li>Som grupp uppmanas ni att välja en av följande presenterade myter för vidare bearbetning baserat på information som kan hittas på internet, i (läro)böcker eller/och om möjligt experimentellt.</li>
                </ol>
                <p>
                    Du kan välja mellan följande myter, eller definiera dina egna (i det sista fallet, avtala ämnet först med din lärare):
                </p>
                
                <h3><span class="text-rose-400">Myt 1:</span> Vacciner orsakar autism/allvarliga biverkningar</h3>
                <p>Vissa människor tror att själva vaccinet och deras tillsatser / konserveringsmedel kan orsaka allvarliga reaktioner i organismen, några av dem inkluderar autism - en grupp utvecklingsstörningar som kan orsaka betydande sociala, kommunikations- och beteendemässiga utmaningar. Är dessa påståenden berättigade?</p>

                <h3><span class="text-rose-400">Myt 2:</span> Spädbarns immunsystem kan inte hantera multipla vacciner.</h3>
                <p>Några dagar efter förlossningen samt några veckor/månader senare injiceras flera olika vacciner i ett barn. Frågan är om alla dessa vacciner kan hanteras av en spädbarnskropp?</p>

                <h3><span class="text-rose-400">Myt 3:</span> Naturlig immunitet är bättre än vaccinförvärvad immunitet.</h3>
                <p>Naturlig immunitet förvärvas genom exponering för infektion av den faktiska sjukdomen. Medan vaccininducerad immunitet förvärvas genom införandet av en dödad eller försvagad form av virus eller mRNA skapat i ett laboratorium för att lära våra celler hur man gör ett protein som utlöser ett immunsvar. Dessa väcker frågan om de är likvärdiga.</p>

                <h3><span class="text-rose-400">Myt 4:</span> Vaccin innehåller gifter.</h3>
                <p>Ibland har det sagts att vacciner kan innehålla tillsatser eller konserveringsmedel, vissa av dem är giftiga som kvicksilver, aluminium, formaldehyd etc. I vilken utsträckning är dessa påståenden sanna?</p>

                <h3><span class="text-rose-400">Myt 5:</span> Bättre hygien och sanitet är huvudorsaken till minskade infektioner, inte vacciner.</h3>
                <p>Smittspridning har hävdats vara relaterad till miljöförhållanden, sanitet och personlig hygien. Under de senaste två århundradena har det skett en förbättring i allt. Samtidigt har antalet infektioner minskat och vaccinationerna ökat. Men kan vi säga att vaccin inte spelar någon roll?</p>

                <h3><span class="text-rose-400">Myt 6:</span> Vacciner kan infektera mitt barn med sjukdomen det försöker förebygga.</h3>
                <p>Vissa av vaccinerna (mässling, vattkoppor etc) använder försvagat smittämnet (levande försvagade vacciner /live-attenuated vaccines). Frågan är om detta kommer att smitta mitt barn?</p>

                <h3><span class="text-rose-400">Myt 7:</span> Vi behöver inte vaccinera eftersom infektionssiffrorna ändå är låga i många länder.</h3>
                <p>Eftersom väldigt få människor har sjukdom är det mycket låg sannolikhet att jag kommer i kontakt med dessa personer eller så är det osannolikt att jag kommer att resa till områden med högre infektionsfrekvens. Därför tror vissa människor att vi skulle kunna överge de flesta vacciner som rutinmässigt ges till barn.</p>

                <h3><span class="text-rose-400">Myt 8:</span> Tvål är lika bra som alkohol för att döda vissa virus (t.ex. COVID-19)</h3>
                <p>Ett alternativ för att desinficera är att använda alkohol, men ett annat är att tvätta händerna med tvål. Men är de lika effektiva?</p>

                <h3><span class="text-rose-400">Myt 9:</span> Medicinska masker /munskydd är meningslösa för att förebygga sjukdomar i övre luftvägarna (t.ex. covid-19).</h3>
                <p>Det har varit mycket diskussion i samhället om effektiviteten av att bära mask för att förebygga droppsmittan. Samtidigt har denna vana varit en normalitet i vissa t.ex. asiatiska kulturer. Ändå, vad är det vetenskapliga beviset bakom? Eller skulle det vara möjligt för dig att testa deras effektivitet själv?</p>
                
                <h3><span class="text-rose-400">Myt 10:</span> Långvarig användning av masken ger syrebrist (hypoxi) / Masker kan orsaka koldioxidförgiftning.</h3>
                <p>Man tror att genom mask/munskydd får du mindre syre. Om det är sant, finns det med begränsad syretillförsel en ökad risk för syrebrist, kallad hypoxi. Samtidigt frigör din kropp koldioxid som i mycket höga koncentrationer kan vara giftig. Men är detta antagande verkligen sant?</p>
            </section>
            



<!-- 
    333333 
        33
     33333
        33
    333333
 -->


            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s4">
                <h2 id="s4t">Aktivitet 3: Mythbusting</h2>

                <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:alt-route">
                    <div>
                        Fundera nu på om din hypotes kan testas endast baserat på sekundära bevis (förlitar sig på publicerat material från redan utförda experiment) eller baserat på eget experiment. Utifrån det bör du välja Aktivitet 3a eller 3b för vidare studier.
                    </div>
                </UiCardInfo>

                <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                    <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                        <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Activity 3a: Mythbusting baserat på experiment</button>
                            </Tab>
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Activity 3b: Mythbusting baserat på sekundära bevis</button>
                            </Tab>
                        </TabList>
                
                        <TabPanels class="mt-2">
                            <TabPanel class="focus:outline-none">
                                <ModulesVirusesStudentActivity3aSv />
                            </TabPanel>
                            <TabPanel class="focus:outline-none">
                                <ModulesVirusesStudentActivity3bSv />
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </section>



<!-- 
    44   44    5555555
    44   44    55
    4444444    5555555
         44         55
         44    5555555
-->
                



            <ModulesStudentActivity45Sv />




<!-- 
    6666666
    66
    6666666
    66   66
    6666666
 -->






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s5">
                <h2 id="activity-6">Aktivitet 6: Spel</h2>

                <p class="text-sm italic">Detta spel är adopterat från och modifierat baserat på följande källa: <a href="https://playdecide.eu/playdecide-kits/167151" target="_blank" rel="noopener noreferrer">https://playdecide.eu/playdecide-kits/167151</a></p>
                <p>I följande aktivitet ska du spela ett kortspel tillsammans med dina grupp- / klasskamrater och träna på att föra faktabaserade gruppdiskussioner som förväntas efterlikna sociovetenskapliga beslutsprocesser i vårt samhälle. Spelet ger dig möjlighet att utforska ett område på djupet och reflektera över alternativa tankar och åsikter.</p>
                <p class="font-bold">Mer exakt förväntas du att:</p>
                <ul class="leading-tight">
                    <li>Bekanta dig med de problem som ställs inom ramen för vaccination/bärande av munskydd/ansiktsmasker och se på dem ur olika perspektiv.</li>
                    <li>Forma eller förtydliga din egen åsikt</li>
                    <li>Arbeta mot ett gemensamt ställningstagande</li>
                    <li>Rösta på politiska ståndpunkter, dela dina resultat och jämför dem med åsikterna från andra som spelade samma spel (och hade samma tema).</li>
                </ul>
                
                <hr>
                
                <p>Spelet spelas i grupper (á 4 spelare).</p>

                <h3>Fas I (≈ 20 minuter)</h3>
                <p>Varje grupp kommer att välja ett temakort för vidare spel.</p>
                <div class="grid grid-cols-2 gap-2">
                    <div class="e-card text-center">
                        <p class="my-2">Tema 1</p>
                        <h4 class="my-1 leading-none">Vaccination</h4>
                    </div>
                    <div class="e-card text-center">
                        <p class="my-2">Tema 2</p>
                        <h4 class="my-1 leading-none">Att bära munskydd/masker vid pandemier med övre luftvägsinfektioner</h4>
                    </div>
                </div>

                <p>Båda teman har flera fall (berättelsekort) relaterade till temat.</p>
                <div class="flex flex-wrap gap-2">
                    <div class="e-card text-center">Berättelse 1</div>
                    <div class="e-card text-center">Berättelse 2</div>
                    <div class="e-card text-center">Berättelse 3</div>
                    <div class="e-card text-center">Berättelse 4</div>
                    <div class="e-card text-center">Berättelse ...</div>
                </div>
                
                <p>Varje spelare läser igenom berättelsekorten. Var och en väljer ett kort som de fastnat för (finner betydelsefull). Varje spelare sammanfattar kort sitt berättelsekort för resten av gruppen.</p>
                <p>Båda teman (vaccination och att bära ansiktsmasker) har ett antal infokort relaterade till var och en.</p>
                <div class="flex flex-wrap gap-2">
                    <div class="e-card text-center">Info 1</div>
                    <div class="e-card text-center">Info 2</div>
                    <div class="e-card text-center">Info 3</div>
                    <div class="e-card text-center">Info 4</div>
                    <div class="e-card text-center">Info 5</div>
                    <div class="e-card text-center">Info ...</div>
                </div>

                <p>Alla spelare byter och läser infokort. De väljer var och en två som de personligen finner viktiga. Varje spelare sammanfattar kort sina valda infokort till gruppen.</p>


                <h3>Fas II (≈ 20 min)</h3>
                <p>Diskussion: I detta skede delar spelarna sina åsikter med andra och förfinar sin synpunkt när de hör olika argument och perspektiv. Spelare använder korten som samlades in i fas I för att stödja sina argument. Spelare kan anteckna och strukturera upp sina idéer kring teman som speglar gruppens vision.</p>


                <h3>Fas III (≈ 20 min)</h3>
                <p>Spelare kommer att läsa igenom olika Ställningstagandekort och förbereda sig för att rösta på ett av de ställningstagande som bäst representerar deras åsikt (i slutet av spelet).</p>
                <div class="flex flex-wrap gap-2">
                    <div class="e-card text-center">Ställningstagande 1</div>
                    <div class="e-card text-center">Ställningstagande 2</div>
                    <div class="e-card text-center">Ställningstagande 3</div>
                    <div class="e-card text-center">Ställningstagande 4</div>
                </div>
                <p>
                    Ett delat gruppsvar: Här uppmanas spelarna att reflektera som en grupp: vilka åsikter finns i gruppen? Kan ni enas (nå en konsensus) om ett ställningstagande?
                    <br />
                    Denna etapp avslutas genom att rösta för ett visst Ställningstagande (1-4).
                </p>
                <p><b>Detta kan genomföras med hjälp av följande aktiviteter:</b></p>
                <ol>
                    <li class="my-4 leading-tight">
                        Läs igenom ställningstagande 1-4.
                    </li>
                    <li class="my-4 leading-tight">
                        Försök att hitta en gemensam grund. Finns det en politisk ståndpunkt ni alla kan leva med? Om inte, försök som grupp att formulera ert eget "femte ställningstagande". 
                    </li>
                    <li class="my-4 leading-tight">
                        Alla spelare röstar individuellt i tur och ordning på alla Ställningstagande. 
                    </li>
                    <li class="my-4 leading-tight">
                        Rösterna registreras på röstningsbladet som ger en visuell sammanfattning och låter dig jämföra din grupps resultat med andra spelares.
                    </li>
                </ol>


                <h3>Tema 1: Vaccination</h3>
                <UiCardGamePrintMessage url="../tools/cards/viruses/theme1" />
                <ToolsCardgameVirusesTheme1 :printMode="false" />
                <hr />

                <h3>Tema 2: Att bära munskydd/masker vid övre luftvägsinfektion pandemiutbrott</h3>
                <UiCardGamePrintMessage url="../tools/cards/viruses/theme2" />
                <ToolsCardgameVirusesTheme2 :printMode="false" />
            </section>

        </section>
    </div>
</template>