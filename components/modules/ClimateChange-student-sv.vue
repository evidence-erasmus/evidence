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
            <UiTableOfContents class="w-full lg:max-w-[15rem] print:hidden" key="climatechange-student-sv" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="sv" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Klimatförändringar</h1>
            <h5 class="font-normal uppercase leading-tight">Elevmaterial</h5>
        
            <section id="s-1">
                <h2 id="s-1t">Introduktion</h2>

                <p>
                    I denna modul ska du motbevisa eller bekräfta en vanlig myt om klimatförändringar. Utgå från en <a href="#s2">introduktionsvideo</a> där några klimatförändringsrelaterade myter tas upp och diskutera dem i grupper. Gruppdiskussionen kommer att leda till en aktivitet där ni letar bevis för att motbevisa eller bekräfta en vald myt. Den här aktiviteten ska genomföras baserat på sökningar från olika källor t ex internet m fl. eller experimentellt (se Figur 1).
                </p>
                <UiContentImage class="my-10" :elevated="true" src="https://evidence.onkel.ee/assets/mythbusting-sv.webp">
                    <template #caption>
                        <b>Figur 1.</b> Mythbusting-aktiviteter
                    </template>
                </UiContentImage>
                <p>
                    Genom denna aktivitet lär du dig att bedöma tillförlitligheten hos informationskällor (vetenskaps- / forskningsdatabaser, populärvetenskap och andra medier). Du måste först ställa en testbar hypotes. Efter att ha dragit slutsatser kommer du att förbereda dig för att presentera dina resultat för dina klasskamrater (på ett relevant och övertygande sätt t.ex. i form av videoinlägg). Modulen avslutas med ett rollspel där du kan föreslå lösningar med hjälp av dina faktakunskaper och utifrån dina personliga och sociala värderingar.
                </p>
            </section>         

            


            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s2">
                <h2 id="s2t">Aktivitet 1: Videointroduktion</h2>
                <p>Titta på introduktionsvideon. Skriv ner dina första tankar och känslor om de problem som presenteras.</p>
                <UiYoutube video="CbJ7GmgEAAo" />
            </section>

            

<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />
            
            <section id="s3">
                <h2 id="s3t">Aktivitet 2: Gruppdiskussion</h2>
                
                <p>Efter att ha sett videon, diskutera ämnet i små grupper (4-6 medlemmar).</p>
                <ol>
                    <li>Berätta om dina första tankar om problemen som presenteras i videon, för dina klasskamrater.</li>
                    <li>Som grupp uppmanas ni att välja en av myterna eller frågorna för ytterligare bearbetning baserat på information som kan hittas från Internet, läroböcker etc.</li>
                </ol>
           

                <hr />

                <h3>Myter om klimatförändringar</h3>

                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth1">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myt 1:</span> Utrotning av arter är en naturlig process. Massutrotningar av arter har alltid förekommit.</h4>
                    <p>Utrotningen av arter är ett historiskt problem. Från förhistorisk tid har vi bevis på flera massutrotningar, framför allt utrotningen av dinosaurierna. Denna utrotning, som ägde rum för 66 000 000 år sedan, sägs bero på ett asteroidnedslag på jorden. Genom åren har vi andra välkända exempel, såsom utrotning av mammutar. Men orsakerna till utrotning som har registrerats varierar.</p>
                    <p>Förslaget om att mänskligheten är kapabel att påverka och störa krafter av sådan omfattning återspeglar också en självcentrerad arrogans som är bedrövande. Mänskligheten är en delmängd av naturen. Naturen är inte en delmängd av mänskligheten. Människor kan varken orsaka eller ingripa för att korrigera dessa processer (Financial Sense University).</p>
                    <p>
                        <a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
                    </p>
                    <!-- <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Open inquiry', url:'./inquiry/open', blank:false},
                        {text:'Guided inquiry: 1', url:'./inquiry/myth1', blank:false}
                    ]" /> -->
                </UiCardInfo>

                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth2">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myt 2:</span> Naturen kan anpassa sig till klimatförändringar.</h4>
                    <p>Jorden har en historia på 4,54 miljarder år. De väderförhållanden som har rått på planeten förändras ständigt. Därför tvingas de arter/organismer som lever på jorden att anpassa sig till nya förutsättningar för att överleva. På så sätt utvecklas arter.</p>
                    <p>Växter och djur har redan flera gånger anpassat sig till ogynnsamma förhållanden (klimatförändringar, meteoritfall, vulkanutbrott, etc.). Det gör att de kan anpassa sig till stigande temperaturer och den situation vi nu kallar klimatförändringar. Med andra ord är arter naturligt kapabla att överleva under nya förhållanden.</p>
                    <p>
                        <a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
                    </p>
                    <!-- <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Open inquiry', url:'./inquiry/open', blank:false},
                        {text:'Guided inquiry: 2', url:'./inquiry/myth2', blank:false}
                    ]" /> -->
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth3">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myt 3:</span> Vetenskapen om klimatförändringar är inte trovärdig.</h4>
                    <p>Meteorologiska stationer är belägna i områden där insamlade data inte är representativa för klimatförändringar och därför opålitliga för studier av det globala klimatet. Forskare riktar in sig på global terrorism för data som de skapar under de förhållanden de vill ha.</p>
                    <p class="pl-4 border-l border-blue-500">
                        <i>“Vi hittade väderstationer placerade bredvid frånluftsfläktar på luftkonditioneringsenheter, omgivna av asfalterade parkeringsplatser och vägar, på heta hustak och nära trottoarer och byggnader som absorberar och utstrålar värme.”</i>
                        <br />
                        <a href="http://wattsupwiththat.files.wordpress.com/2009/05/surfacestationsreport_spring09.pdf" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —Watts 2009
                        </a>
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/surface-temperature-measurements-basic.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/surface-temperature-measurements-basic.htm</a>
                    </p>
                    <!-- <UiNavButtonBar :buttons="[
                        {text:'Open inquiry', url:'./inquiry/open', blank:false},
                        {text:'Guided inquiry: 3', url:'./inquiry/myth3', blank:false}
                    ]" class="mb-6 font-Body"
                    /> -->
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth4">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myt 4:</span> Temperaturhöjningen är bra!</h4>
                    <p class="pl-4 border-l border-blue-500">
                        <i>“Förresten, om du ska rösta på något, rösta på uppvärmning. Mindre dödsfall på grund av kyla, regioner mer beboeliga… Det är bra!”</i>
                        <br />
                        <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&feature=youtu.be&t=353" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —John MacArthur
                        </a>
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/global-warming-positives-negatives.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/global-warming-positives-negatives.htm</a>
                    </p>
                    <!-- <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Open inquiry', url:'./inquiry/open', blank:false},
                        {text:'Guided inquiry: 4', url:'./inquiry/myth4', blank:false}
                    ]" /> -->
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth5">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myt 5:</span> Det finns inget samband mellan CO₂ och temperatur.</h4>
                    <p class="pl-4 border-l border-blue-500">
                        <i>“Det var efterkrigstidens industrialisering som orsakade den snabba ökningen av de globala CO₂-utsläppen, men 1945 när detta började var jorden redan i en avkylningsfas som startade runt 1942 och fortsatte fram till 1975. Med 32 år av snabbt ökande globala temperaturer och endast en mindre ökning av de globala CO₂-utsläppen, följt av 33 år av långsamt svalkande globala temperaturer med snabba ökningar av globala CO₂-utsläpp, var det bedrägligt av IPCC att göra något påstående om att CO₂-utsläppen var primärt ansvariga för den observerade globala uppvärmningen på 1900-talet.”</i>
                        <br />
                        <a href="https://archive.md/q3Tim" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —Norm Kalmanovitch
                        </a>
                    </p>
                    <p>
                        Viidatud: 
                        <br />
                        <a href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
                    </p>
                    <!-- <UiNavButtonBar :buttons="[
                        {text:'Öppna inquiry', url:'./inquiry/open', blank:false},
                        {text:'Guided inquiry: 5', url:'./inquiry/myth5', blank:false}
                    ]" class="mb-6 font-Body"
                    /> -->
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                            
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth6">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myt 6:</span> Klimatförändringar kommer att göra människor fattigare.</h4>
                    <p class="pl-4 border-l border-blue-500">
                        <i>“Klimatförändringar leder till större skördar, längre växtsäsong. Uppvärmning hjälper de fattiga.”</i>
                        <br />
                        <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&feature=youtu.be&t=353" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —John MacArthur
                        </a>
                    </p>
                    <!-- <UiNavButtonBar :buttons="[
                        {text:'Open inquiry', url:'./inquiry/open', blank:false},
                        {text:'Guided inquiry', url:'./inquiry/myth6', blank:false}
                    ]" class="mb-6 font-Body"
                    /> -->
                </UiCardInfo>
                
                <div class="divider my-6"></div>

                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth7">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">Myt 7:</span> Jordens klimat har alltid förändrats, och nu händer samma sak.</h4>
                    <p class="pl-4 border-l border-blue-500">
                        <i>“Klimatet förändras alltid. Vi har haft istider och varmare perioder då alligatorer hittades i Spitzbergen. Istider har förekommit i hundratusenårscykler under den senaste 700 000 åren. På senare tid har vi haft den så kallade medeltida värmeperioden och den lilla istiden.”</i>
                        <br />
                        <a href="http://www.quadrant.org.au/blogs/doomed-planet/2009/07/resisting-climate-hysteria" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —Richard Lindzen
                        </a>
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm</a>
                    </p>
                    <!-- <UiNavButtonBar :buttons="[
                        {text:'Open inquiry', url:'./inquiry/open', blank:false},
                        {text:'Guided inquiry', url:'./inquiry/myth7', blank:false}
                    ]" class="mb-6 font-Body"
                    /> -->
                </UiCardInfo>
            </section>






<!-- 
    333333 
        33
     33333
        33
    333333
 -->

            <hr class="mt-10 mb-40" />

            <section id="s4">
                <h2 id="s4t">
                    Aktivitet 3: Mythbusting
                </h2>

                <p>
                    Du ska begränsa myten till en testbar hypotes, planera ytterligare aktiviteter efter de fem stegen enligt figur 1. Du bör också fundera på om din myt kan testas experimentellt, bekräftas / motbevisas med hjälp av datormodeller och simuleringar eller med hjälp av sekundära bevis (förlita sig på vetenskaplig information t ex på redan genomförda experiment som har publicerats).
                </p>
                <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                    <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                        <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Aktivitet 3a:<br />Mythbusting baserat på experiment</button>
                            </Tab>
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                                :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Aktivitet 3b:<br />Mythbusting baserat på sekundära bevis</button>
                            </Tab>
                        </TabList>
                        <TabPanels class="mt-2">
                            <TabPanel class="focus:outline-none">
                                <ModulesClimateChangeStudentActivity3aSv />
                            </TabPanel>
                            <TabPanel class="focus:outline-none">
                                <ModulesClimateChangeStudentActivity3bSv />
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

            <section id="s-6">
                <h2 id="section-7">Aktivitet 6: Argumentationsspel</h2>

                <p>Följande argumentationsspel implementeras i slutet av klimatförändringsmodulen. Läs följande riktlinjer noggrant.</p>

                <h3>Spelinstruktioner:</h3>
                <ol>
                    <li>Spelarna delas in i grupper.</li>
                    <li>
                        Varje lag väljer ett grönt och ett blått kort. Gröna kort innehåller faktabaserade berättelser om klimatförändringar. Varje grönt kort har motsvarande blått informationskort relaterat till berättelsen. Det blå kortet innehåller utförlig kompletterande fakta.
                    </li>
                    <li>
                        Alla spelare i varje lag läser det gröna kortet. Sedan diskuterar spelarna sina berättelser med sina lag. Till exempel berättar det tredje gröna kortet en sann historia om en 16-årig isbjörnshanne som hittades död på Svalbard av svält. Därefter försöker lagspelarna förklara varför isbjörnen dog.
                    </li>
                    <li>
                        När varje grupp presenterar berättelsen i helklass försöker gruppen med motsvarande blått informationskort svara på manuset med sina egna argument. I detta skede delar spelarna sina åsikter med andra och förbättrar sina svar när de hör olika argument och åsikter. I det här fallet hävdar blåkortsteamet att björnen dog på grund av klimatförändringar.
                    </li>
                    <li>
                        I slutet av spelet kommer spelarna att länka berättelsekorten till infokort. Varje argument får 3 poäng. Laget med högst poäng vinner spelet.
                    </li>
                </ol>
                
                <hr />
                
                <h3>Spelkort</h3>
                <UiCardGamePrintMessage url="../tools/cards/climate-change" />
                <ToolsCardgameClimateChange :printMode="false" />
                <hr />
            </section>

        </section>
    </div>
</template>