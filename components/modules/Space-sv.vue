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
        


        <section class="e-article print:not-prose" lang="sv" style="hyphens: auto;">
            <Icon name="openmoji:teacher-light-skin-tone" class="float-right text-[6em] text-slate-300" />
            <h1 class="mb-0">Rymden</h1>
            <h5 class="font-normal uppercase leading-tight">Lärarmaterial</h5>
            

            <section id="s1">
            <h2 id="s1t">Introduktion</h2>
        
            <section class="e-card e-module__meta">
                <table class="m-0 leading-tight">
                    <tr>
                        <td><b>Målgrupp:</b></td>
                        <td>Detta läromedel är avsett för elever i åldern 15-18 år från både allmän- och yrkesskolor.</td>
                    </tr>
                    <tr>
                        <td><b>Förväntad tidsram:</b></td>
                        <td>5-6 timmar, à 45 min och lite läxtid.</td>
                    </tr>
                </table>
            </section>

            <p>
                Rymden fängslar vår fantasi från tidig barndom. Frågor om universums oändlighet, utomjordiskt liv och möjlighet till rymdresor till andra planeter väcker många ungdomars intresse. I allmänhet har barn en medfödd instinkt att utforska och en stor vilja att uppleva och förstå. Några av dem drömmer om att bli rymdfarare.
            </p>

            <p>
                Resor till rymden har redan blivit möjliga för icke professionella astronauter. En del betalande passagerare kunde komma till den internationella rymdstationen (ISS), inklusive Anousheh Ansari, den första iranska och muslimska kvinnan i rymden (2006). Kommersiella program upprättas för suborbitala flygningar på en höjd av cirka 100 km över jordytan. Orbitala turistresor runt jorden kräver nästan dubbel höjd och mycket högre initial hastighet och energi av rymdskeppet, men de är också tänkta inom den närmaste framtiden. Så bland våra studenter idag kan det finnas framtida professionella - och amatörutforskare av rymden.
            </p>

            <p>
                I vår vardag cirkulerar ett brett spektrum av missuppfattningar, myter och konspirationsteorier om rymdresor. UFO:n som besöker oss från yttre rymden och månlandningar som aldrig hänt är bara två exempel på det som dyker upp i olika medier. Förekomsten av sådana rykten försvinner inte med tiden eftersom ovanliga drönare kan observeras av allmänheten oftare nuförtiden och nya mänskliga månlandningsprogram tillkännages. Det nuvarande amerikanska "Artemis-projektet" och det kinesiska månprogrammet kallat "Chang-projektet" verkar börja tävla om vem som kommer att landa på månen först den här gången och återigen lockar allmänhetens uppmärksamhet till detta område.
            </p>

            <p>
                Många av våra elever är bekanta med rymdskeppsfunktioner genom olika rymdspel för datorer och smarttelefoner, och vattenraketuppskjutning i skolor eller vetenskapscentra. De känner känslan av kort viktlöshet från nöjesparker eller flygplan. Några av dem har förmodligen upplevt en rundtur till den internationella rymdstationen (ISS) med hjälp av en VR-applikation eller har sett en film om ISS i 3D-teater på vetenskapsmuseer.
            </p>

            <p>
                Eran av rymdutforskning började år 1957 med lanseringen av den första satelliten (Sputnik) i omloppsbana runt jorden. Tekniken har utvecklats enormt under dessa år; rymdutforskningen går dock långsammare än det förutspåddes, medför många risker och åtföljs av olika tekniska misslyckanden. Det senaste försöket (januari 2023) att skjuta upp satelliter, för första gången från brittisk mark, med hjälp av en raketuppskjutningsteknik utvecklad av Virgin Orbit-företaget misslyckades och förstörde hela nyttolasten av nio satelliter. Virgin-företagets rymdturismdivision, Virgin Galactic, som sedan 2004 har lovat att påbörja regelbundna suborbitala flygningar för betalande rymdturister som använder liknande uppskjutningsteknik har ännu inte infriat det löftet. Virgin-metoden är att lyfta en rymdfarkost under vingen på en Boeing 747 till cirka 10 000 m höjd och sedan avfyra den. Det senaste Virginmisslyckandet visar återigen att rymdutforskning alltid medför betydande risker, särskilt i processen att skjuta upp rymdfarkoster och återföra astronauter tillbaka till jorden. Frågor om att hantera risker och tillhörande moraliska dilemman med att skicka mänskliga missioner till rymden är i fokus för denna modul.
            </p>

            <h3>Modulbeskrivning</h3>

            <p>
                När skolresurser tillåter kan lärare välja att göra några laborationer och demonstrationer för att förklara fenomen, avslöja rymdrelaterade myter eller utforska vanliga missuppfattningar. Annars föreslår vi att det görs genom bevisinsamling från tillförlitliga källor för vetenskaplig och professionell information. Eleverna kan också använda olika metoder för datainsamling, för att öka tillförlitligheten av insamlade bevis.
            </p>

            <p>
                I <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">introduktionsvideon</a> (läraren kan välja mellan  “Earth Calls Martha”, “3-2-1”, “Where are all the Aliens”, “Flag in the wind”) tas några idéer, konspirationsteorier, missuppfattningar och myter upp som ska diskuteras i grupper. Eleverna uppmanas att välja och förklara vanliga myter eller missuppfattningar som rör rymden. Gruppdiskussioner förväntas leda till bevisinsamling från tillförlitliga datakällor för att få djupare insikt om ett fenomen, motbevisa eller bekräfta en vald myt.
            </p>

            <p>
                Mänskliga rymdresor kommer förmodligen att väcka särskild uppmärksamhet hos eleverna. Vissa biologiska effekter av rymdresor som rymdsjuka eller Space Adaptation Syndrome (SAS) kan upplevas praktiskt taget på jorden genom centrifugering (Sickness Induced by Centrifugation, SIC). Få av oss skulle förmodligen vilja utsättas för centrifugering och samtidiga rotationer som går från 1G till 3G (eller högre) och tillbaka till 1G, vilket är en del av astronaututbildningen. Lätt version av sådan upplevelse finns tillgänglig i vissa nöjesparker i form av "Insanity Rides 360".
            </p>

            <p>
                De flesta aktiviteter som föreslås i denna modul kommer att förlita sig på sekundära bevis som samlats in genom litteratursökningar och från internet. Genom dessa aktiviteter lär sig eleverna att bedöma informationskällornas tillförlitlighet och att lägga fram evidensbaserade argument. Efter att ha dragit slutsatser förbereder sig eleverna för att presentera sina resultat för klasskamraterna på ett relevant och övertygande sätt (t.ex. i form av en kort video). Modulen avslutas med ett debattrollspel där eleverna kan fatta sociovetenskapliga beslut genom att använda sin naturvetenskapliga kunskap samt sina personliga, moraliska och sociala värderingar.
            </p>

            <p>
                Modulen består av lärarmaterial (undervisningsförslag, naturvetenskaplig bakgrundsinformation) och elevmaterial (introduktionsvideo, interaktiva arbetsblad, faktavideo, videohandledning).
            </p>
        </section>







            

            

            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-2">
            <h2 id="s-2-title">Lärandemål som modulen riktar in sig på</h2>
            
            <ul>
                <li>
                    <b>Medborgarkompetens:</b> utveckla elevernas kunskaper och attityder till att fatta ansvarsfulla beslut relaterade till mänskliga och robotiserade rymdutforskningar.
                </li>
                <li><b>Mediekompetens:</b>
                    <ul class="my-0">
                        <li>utveckla elevernas färdigheter i att bedöma informationens tillförlitlighet, presentera informationen på ett sätt som är relevant för en given publik,</li>
                        <li>att reagera adekvat och ansvarsfullt på falska nyheter och konspirationsteorier som presenteras i (sociala) medier.</li>
                    </ul>
                </li>
                <li>
                    <b>Digital kompetens:</b> utveckla elevernas färdigheter i att använda digitala medier för att visualisera och presentera sina resultat för de andra grupperna.
                </li>
                <li>
                    <b>Vetenskaplig kompetens:</b>
                    <ul class="my-0">
                        <li>utveckla elevernas förståelse för hur naturvetenskaplig kunskap genereras och varför vi ska lita på vetenskap;</li>
                        <li>utveckla ytterligare elevers kunskaper om för- och nackdelar med mänskliga rymdutforskningar;</li>
                        <li>utveckla förmåga att planera och utforma tillvägagångssätt för att pröva myter och tolka resultat.</li>
                    </ul>
                </li>
                <li>
                    <b>Social kompetens:</b> utveckla elevernas argumentationsförmåga och färdigheter att nå gruppkonsensus i kontroversiella rymdrelaterade frågor.
                </li>
            </ul>
        </section>

          





        <hr class="mt-10 mb-40 print:my-10" />

        <section id="s21">
            <h2 id="s21t">Förväntade förkunskaper om rymdresor</h2>

            <ul>
                <li>
                    Grundläggande kunskaper om mekanik och gravitation
                </li>
                <li>
                    Egenskaper hos gaser och jordens atmosfär
                </li>
                <li>
                    Olika former av energi
                </li>
                <li>
                    Strukturen i vårt solsystem och universum
                </li>
                <li>
                    Kunskap om nationella program för rymdutforskning
                </li>
            </ul>
        </section>







        <hr class="mt-10 mb-40 print:my-10" />

        <section id="s-3">
            <h2 id="s-3-title">
                Potentiella hinder att överväga
            </h2>

            <p>
                Det förväntas att eleverna har erfarenhet av att utvärdera tillförlitligheten hos informationskällor på Internet, annars kan det ta extra undervisningstid att arbeta med denna fråga.
            </p>
          </section>  





            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-4">
            <h2 id="s-4-title">Modulstruktur</h2>
            
            <p>Denna modul består av 6 aktiviteter. Sekvensen av aktiviteter ges i figur 1 och tabell 1 (se nedan).</p>


            <ModulesModuleStructure />

            <p>
                Bilden presenterar en sekvens av aktiviteter för att undersöka en myt, men samma steg är giltiga för att arbeta med vanliga missuppfattningar och kontroversiella påståenden som behöver undersökas djupare.
            </p>

            <p class="mt-20"><b>Tabell 1.</b> Inlärningssekvens för rymdmodulen</p>
            <table>
                <thead>
                    <tr>
                        <th class="w-1/5"><b>Aktivitet</b></th>
                        <th>Beskrivning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Aktivitet 1</b></td>
                        <td>Presentation av en <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">inledande video</a> (läraren kan välja mellan  “Earth Calls Martha”, “3-2-1”, “Where are all the Aliens”, “Flag in the wind”) som tar upp en fråga om mänsklig utforskning av rymden genom att exponera några idéer, drömmar och myter.
                        <br/>
                        Lärare kan också föreslå ett bredare spektrum av myter, frågor och kontroverser relaterade till rymdutforskning.</td>
                    </tr>
                    <tr>
                        <td><b>Aktivitet 2</b></td>
                        <td>
                            <ul>
                                <li>
                                    Diskussion i grupp:
                                    <br />
                                    Att välja en myt eller ett påstående som ska undersökas
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Aktivitet 3</b></td>
                        <td>
                            I grupper:
                            <ul>
                                <li>Ställa relevanta hypoteser och forskningsfrågor;</li>
                                <li>Söka efter relevant information för att bekräfta eller förkasta den ställda hypotesen/ forskningsfrågan;</li>
                                <li>Utvärdera tillförlitligheten hos de hittade bevisen;</li>
                                <li>Dra slutsatser.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Aktivitet 4</b></td>
                        <td>Att utforma bevis till ett visuellt format av en kort video eller en PowerPoint-presentation.</td>
                    </tr>
                    <tr>
                        <td><b>Aktivitet 5</b></td>
                        <td>Gruppresentationer (i kombination med kamratbedömning).</td>
                    </tr>
                    <tr>
                        <td><b>Aktivitet 6</b></td>
                        <td>
                            Läraren föreslår en specifik fråga om prioriteringar i utveckling av robotik vs. mänsklig rymdfärdskapacitet och infrastruktur i EU (se som exempel ett fall av Sverige)
                            <br />
                            Eleverna diskuterar, tar fram argument och fattar beslut i form av ett debattrollspel där inledande argument kan presenteras i form av en video, poster, PowerPoint-presentation eller en annan visuell form. 
                            <br />
                            Som ett kortare alternativ kan en Rymdutforskningsdebatt genomföras bara under en lektion
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>










            <hr  class="mt-10 mb-40 print:my-10" />

        <section id="s-5">
            <h2 id="s-5-title">Krav på fysisk miljö</h2>
            
            <p>Smarttelefon, dator, internet, displayutrustning för att demonstrera videor och PowerPoint-presentationer.</p>
        </section>  
            
            
            
            
            
            
            
        <hr class="mt-10 mb-40 print:my-10" />

        <section id="s-6">
            <h2 id="s-6-title">Bedömning</h2>
                        
            <p>
                Studenter kan bedömas på olika sätt genom hela modulen, inklusive det undersökande arbetssättet, allmänna kompetenser, såsom argumentationsförmåga och ämneskunskap. Bedömningar som kan tillämpas i denna modul:
            </p>

            <p><b>Formativ:</b></p>
            <ul>
                <li>Muntlig/skriftlig återkoppling från läraren (baserad på observationer, ställda frågor etc.) under hela modulen, under experimenten och andra former av individuellt/grupparbete.</li>
                <li>Peer-feedback (på gruppresentationen med hjälp av följande <NuxtLink to="../tools/peer-feedback" target="_blank">verktyg</NuxtLink> och självutvärdering efter det sista debattrollspelet).</li>
                <li>Muntlig/ skriftlig återkoppling från läraren på individuella/ grupparbetsblad.</li>
            </ul>
            
            <p><b>Summativ:</b></p>
            <ul>
                <li>Betyg sätts av läraren på gruppresentationen (baserat på elevernas visuell produkt och deras presentation samt elevernas förmåga att ge relevanta svar/kommentarer).</li>
                <li>Betyg sätts av läraren på grupp- eller individuella arbetsblad.</li>
            </ul>
        </section>    
            
            
            
            
            
            
            

            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-7">
                <h2 id="s-7-title">Undervisningsförslag</h2>

                <p>
                    Arbetet med denna modul kan ses som uppdelat i två delar. Den första delen (Aktivitet 1–5) är huvudsakligen relaterad till arbete med specifika rymdrelaterade idéer och myter som identifieras i en vald introduktionsvideo eller föreslås av eleverna och läraren. Den andra delen (Aktivitet 6) fokuserar på kontroverser kring mänskliga rymdresor som bearbetas med hjälp av ett debattrollspel (se elevmaterial).
                </p>
                <p>
                    Efter en kort introduktion kan eleverna delas i små grupper och, som en uppvärmningsaktivitet, fundera på vilka frågor de skulle vilja ställa till en astronaut/rymdforskare om de hade möjlighet (två-tre frågor per grupp ska presenteras). Detta ger möjlighet att få inblick i deras intressen och förväntningar angående ämnet som tas upp i modulen.
                </p>

                <p>
                    Därefter börjar modulen med presentation av en eller några <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">introduktionsvideo</a> för att öppna upp frågor och avslöja myter, risker, kontroverser och missuppfattningar om rymdutforskningar, till exempel kan några spin-off idéerfrån video vara:
                    <ul>
                        <li>
                            Utforskning av rymden kan erbjuda nästan oändliga möjligheter för mänsklig civilisation
                        </li>
                        <li>
                            Att ha en mänsklig bas på månen kan hjälpa oss att få nya material, energikällor och upptäcka allvarliga hot mot vår jord
                        </li>
                        <li>
                            Uppskjutningar av rymdskepp till månen kan förorena och skada jordens atmosfär
                        </li>
                    </ul>
                </p>

                <p>
                    <a href="https://www.youtube.com/watch?v=a95oKCDgIow" target="_blank" rel="noopener noreferrer">Introduktionsvideo</a> syftar till att väcka frågor och stimulera till reflektioner. Efter att ha valt en video för grupparbete <b>(Activity 1)</b>, kan eleverna undersöka en av de identifierade myterna eller frågorna relaterade till olika aspekter av mänsklig rymdfärd och utforska vanliga missuppfattningar, risker och rädslor.
                </p>
                <p>
                    Läraren kan här med fördel introducera raketmotorns funktion och relaterade miljöfrågor. En avsikt är att vidga elevernas syn på vetenskapen bakom rymdutforskning och få dem att uppmärksamma några myter och frågor relaterade till rymden. Aktiviteterna avser också att uppmuntra eleverna att ta vara på sina förkunskaper och dela sina föreställningar och åsikter om rymdutforskning med sina klasskamrater <b>(Aktivitet 2)</b>. <a href="https://www.youtube.com/watch?v=a95oKCDgIow&list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">Faktavideorna</a> kan demonstreras i detta steg för att lyfta fram och bredda elevernas uppfattningar av rymdrelaterade ämnen, koncept och principer. Utvalda delar från <NuxtLink to="./space/background">vetenskaplig bakgrundsinformation</NuxtLink> kan åberopas vid behov.
                </p>

                <p>
                    <b>Aktivitet 2</b> ska hjälpa eleverna att begränsa sin valda myt till en hypotes/forskningsfråga som kan motbevisas /bekräftas/besvaras under Aktivitet 3.  Denna aktivitet kan genomföras på två olika sätt: 
                    <ol class="leading-tight">
                        <li>
                            med hjälp av praktiska försök
                        </li>
                        <li>
                            genom insamling av sekundära bevis
                        </li>
                    </ol>
                </p>

                <h3>1. med hjälp av praktiska försök</h3>

                <p>
                    Eleverna kan välja en myt/fråga som kan testas praktiskt, samla bevis genom enkla kvalitativa experiment. Låt oss till exempel överväga en myt om att "att äta kräver gravitation för att maten ska förflyttas till vår mage".
                </p>

                <h4>
                    Gör försök med egen kropp:
                </h4>

                <p>
                    Ta en bit mat i munnen och böj dig sedan framåt tills huvudet är under magen - svälj! Det är lätt att göra det - trots att maten går i motsatt riktning mot gravitationen.
                </p>
                <p>
                    Passagen av mat genom våra kroppar kräver inte gravitation - ett system av muskelsammandragningar i matstrupen och i tarmen som kallas "peristaltik" driver maten aktivt i önskad riktning. Detta är viktigt eftersom vi kan äta mat och sedan gå och lägga oss direkt efteråt. Vid den punkten är matens väg ganska horisontell - och om det skulle kräva gravitation, skulle ingen matsmältning vara möjlig förrän man reste sig upp igen! Våra tarmar loopar runt - går uppåt och nedåt. Om gravitationen ensam gjorde jobbet skulle vi inte kunna fungera. Vi kan också dricka ganska lätt med ett sugrör medan vi hänger upp och ner. Det svåraste med att äta eller dricka upp och ner är att få maten eller drycken i munnen. 
                </p>
                <p>
                    Så i grunden har astronauter inga problem med att smälta mat i en mikrogravitationsmiljö, som på ISS. Eleverna kan också uppmanas här att göra undersökningar om astronauternas matvanor och rymdmat.
                </p>


                <h4>
                    Experimentera med raketuppskjutningar
                </h4>
                <p>
                    (Försöket kan genomföras som demonstration)
                    <br />
                    Detta är relaterat till myter/missuppfattningar om raketrörelser, som t.ex. "Raketer behöver luft (atmosfär) att trycka emot för att flyga".
                </p>
                <p>
                    En raket skapar dragkraft genom att driva ut massa. Farkosten accelereras i motsatt riktning. Denna allmänna rörelseprincip är densamma som för en <button class="btn btn-sm btn-accent" @click="toggleModal('space__water-rocket')"><Icon name="mdi:open-in-new" size="20" /> vattenraket</button> När bränt bränsle sprutar ut får raketen rörelseimpulsen i motsatt riktning. (I fallet av en vattenraket är det trycksatt vatten med luft i PET-flaskan som är ”bränsle”). En raket ger möjlighet att accelerera en rymdfarkost i vakuum.
                </p>
                <h4>
                    Virtuella experiment: 
                </h4>
                <p>
                    Dessa experiment skulle kunna hjälpa till att bearbeta flera myter/missuppfattningar, till exempel om raketrörelser och gravitation i yttre rymden: 
                    <ul class="leading-tight">
                        <li>
                            "Ett rymdskepp behöver en raketmotor påslagen hela tiden i omloppsbana (på väg till Mars)"
                        </li>
                        <li>
                            "Det finns ingen gravitation i rymden”
                        </li>
                        <li>
                            “Astronauter som kretsar runt jorden på ISS är viktlösa eftersom de är långt från jorden”
                        </li>
                    </ul>
                    för att nämna några.
                </p>
                <p>
                    Lärare kan välja vad som är lämpligt för deras klass bland olika virtuella experiment och simuleringar som finns tillgängliga på Internet. Vi rekommenderar material från <a href="https://phet.colorado.edu/" target="_blank" rel="noopener noreferrer">PhET Interaktive Simulations-projektet</a>, grundat av Nobelpristagaren i fysik Carl Wieman, som tillhandahåller gratis simuleringar (PHET- sims) som syftar till att engagera studenter att lära sig genom utforskning och upptäckt. Till exempel kan <a href="https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html" target="_blank" rel="noopener noreferrer">Gravity and Orbits</a> interaktiva simulering hjälpa till att 
                    <ul class="leading-tight">
                        <li>
                            analysera förhållandet mellan solen, jorden, månen och rymdstationen
                        </li>
                        <li>
                            illustrera hur gravitationen styr vårt solsystems rörelse
                        </li>
                        <li>
                            utforska de variablerna som påverkar tyngdkraften
                        </li>
                        <li>
                            förutsäga hur rörelsen skulle förändras om gravitationen var starkare eller svagare
                        </li>
                    </ul>
                </p>
                <p>
                    Eleverna kan testa andra virtuella experiment t ex <a href="https://play.google.com/store/apps/details?id=com.StefMorojna.SpaceflightSimulator&hl=en_US&gl=US&pli=1" target="_blank" rel="noopener noreferrer">Rymdfärdssimulator</a>. Det är ett simuleringsspel som försöker återspegla ett rymdfartygs beteende under påverkan av fysikens lagar. Denna app tillåter konstruktion av olika modeller av raketer. Eleverna kan se hur antalet drivsteg ökar lyftkapaciteten till olika banor.
                </p>

                <h3>
                    2. genom insamling av sekundära bevis
                </h3>

                <p>
                    Ofta kan de rymdrelaterade myterna och missuppfattningarna inte motbevisas experimentellt i klassrummet. Därför förväntas eleverna samla bevis från sekundära källor för att bekräfta eller motbevisa sin hypotes eller hitta ett svar på sin forskningsfråga. Eleverna sammanställer information från media/datakällor, analyserar kritiskt deras tillförlitlighet och drar berättigade slutsatser baserade på de bevis som hittats. Eftersom tillförlitlighetsbedömning kan vara en verklig utmaning för eleverna är elevmaterialet försett med ett <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20" /> verktyg</NuxtLink> som eleverna kan använda när de söker och analyserar information. Det skulle vara bra om läraren kunde förklara hur det används genom att demonstrera och analysera både tillförlitliga och mindre tillförlitliga källor innan eleverna börjar implementera detta verktyg på egen hand.
                </p>

                <p>
                    För att kommunicera sina resultat vägleds eleverna att producera en visuell presentation av sina slutsatser (Aktivitet 4). Video kan vara ett intressant alternativ. För detta ändamål kan eleverna använda en <a href="https://www.youtube.com/watch?v=_l8LgLhjLvc&list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" target="_blank" rel="noopener noreferrer">handledning</a>. Studentmaterialet är också försett med kriterier som visuell presentation ska uppfylla när den är klar.
                </p>

                <p>
                    Dessa kriterier kan användas för självbedömning under arbetsprocessen, och för kamratbedömning när resultat presenteras och diskuteras (Aktivitet 5). Eleverna kan använda följande (<NuxtLink to="../tools/peer-feedback" target="_blank">bedömningsverktyg</NuxtLink>) för att ge feedback till, eller få den från, de andra grupperna.
                </p>

                <p>
                    I den sista aktiviteten <b>(Aktivitet 6)</b> kommer socio-vetenskapliga frågor och kontroverser relaterade till rymdutforskning att diskuteras <sup><span class="tooltip" data-tip="Utformningen av ett rollspel om ett sociovetenskapligt problem relaterat till rymden följde rollspelsmetodik som utvecklats av forskare vid Malaga Universitet http://www.encic.uma.es/"><a href="http://www.encic.uma.es/" target="_blank" rel="noopener noreferrer">[1]</a></span></sup>. I decennier har forskare och beslutsfattare diskuterat huruvida rymdutforskning är bättre lämpad för människor eller robotar (se till exempel en ny bok: "The End of Astronauts" av Donald Goldsmith och Martin Rees, Belknap Press, 2022). I den rådande hårda ekonomiska situationen i Europa blev denna fråga ännu mer aktualiserad, eftersom bemannade rymdflygningar är betydligt dyrare än robotar. Förslaget på debattrollspel presenteras i elevmaterialet och berör denna fråga.
                </p>

                <p>
                    Denna aktivitet låter eleverna fundera över varför och hur rymden ska utforskas. Aktiviteten stödjer eleverna att debattera ett tvärvetenskapligt ämne kopplat till fysik, astronomi, medicin, miljövetenskap och samhällsvetenskap. Det här debattrollspelet kan ge eleverna insikter i hur forskare och experter lägger fram och försvarar sina idéer och hur de hanterar den osäkerhet som är inneboende i modern vetenskap och teknik. Läraren kan bestämma vilken typ av bedömning som ska användas för att uppmuntra fritt uttryck för elevernas idéer och argument. Läraren kan också vara ledaren/moderatorn för debattspelet. 
                </p>

                <p>
                    Relevant vetenskaplig information, begrepp och fakta presenteras i den vetenskapliga bakgrundsinformationen.
                </p>

                <p>
                    Om läraren upplever brist på tid för ett fullskaligt rollspel föreslås också ett kortare alternativ av <button class="btn btn-sm btn-accent" @click="toggleModal('space__exploration-debate')"><Icon name="mdi:open-in-new" size="22" /> Rymdutforskningsdebatt</button> som skulle kunna genomföras under ett lektionstillfälle <sup><span class="tooltip" data-tip="Detta är en adopterad version av aktivitet från National Schools Observatorys undervisningsresurser som utarbetats av kollegor från John Moores Universitet i Liverpool.">[2]</span></sup>. 
                </p>

                <p>
                    I slutet av modulen kan läraren inkludera en reflektionsaktivitet om vad eleverna har lärt sig genom att delta i modulaktiviteterna och hur de samarbetat med varandra när de förberedde argument, presentationer och gav feedback till klasskamraterna. Konstnärliga reflektioner kring Rymden av konstskoleeleverna (se <a href="https://drive.google.com/drive/folders/1toVQDJLTrXVHy5BiOLWoGrVkbHSAN9Gy?usp=sharing" target="_blank" rel="noopener noreferrer">fotoböcker</a>) kan visa alternativa sätt att utforska rymdrelaterade fenomen och kan tjäna som utgångspunkt för att diskutera vad eleverna skulle vilja lära sig mer inom detta område i framtiden.
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
                    Rymdutforskningsdebatt
                </h2>

                <h3>
                    Introduktion:
                </h3>
                <p>
                    Introducera begreppet "debatt". Be eleverna dela med sig av sina erfarenheter av debatter. Varför behöver vi argumentera och vara övertygande?
                </p>
                <h3>
                    Uppvärmningsaktivitet:
                </h3>
                <ol>
                    <li>
                        Eleverna delas in i grupper om 4. Beskriv scenen – de ska ut i rymden (De vinner en rymdresa till månen fram och tillbaka). De ska bestämma sig först individuellt:
                        <ul>
                            <li>
                                Skulle du följa med?  Varför?/ Varför inte?
                            </li>
                            <li>
                                Skulle du  kunna tänka dig att arbeta på månen om mänskligheten börjar med det? Varför?
                            </li>
                        </ul>
                    </li>
                    <li>
                        I sina grupper ska eleverna försöka motivera sina beslut.
                    </li>
                    <li>
                        Be eleverna att återkoppla till de andra grupperna.
                    </li>
                </ol>
                <h3>
                    Debattämne:
                </h3>
                <p>
                    ”Hur ska vi gå vidare med rymdutforskning” 
                </p>
                <h3>
                    Debattaktivitet:
                </h3>
                <ol>
                    <li>
                        Läs upp debattämnet
                    </li>
                    <li>
                        Tilldela fyra hörn eller områden i rummet som stå för:
                        <ul class="leading-tight">
                            <li>
                                ”Rymden ska utforskas av människor, inte robotar”
                            </li>
                            <li>
                                ”Endast robotar bör utforska rymden”
                            </li>
                            <li>
                                ”Både människor och robotar bör utforska rymden”
                            </li>
                            <li>
                                ”Vi bör inte spendera skattebetalarnas pengar på rymdindustrin”
                            </li>
                        </ul>
                    </li>
                    <li>
                        Be eleverna att individuellt bestämma vilken ståndpunkt de håller med om och flytta till den del av rummet som motsvarar deras övertygelse. Om de inte har en stark åsikt, få dem att fatta ett första beslut – men gör det klart för alla att de kan ändra sig när som helst.
                    </li>
                    <li>
                        När eleverna har valt sitt ställningstagande, ge dem lite tid att diskutera med andra i deras hörn varför de valde det ställningstagande och hur de skulle kunna övertala andra att komma till deras grupp.
                    </li>
                    <li>
                        Eleverna nominerar någon från sitt team för att uttala sig.
                    </li>
                    <li>
                        Debatten börjar! Du kan bestämma om eleverna ska prata öppet mellan grupperna eller om de ska räcka upp händerna och  att du ska fördela ordet.
                    </li>
                </ol>
                <h3>
                    Avsluta:
                </h3>
                <p>
                    Sammanfatta huvudpunkterna från debatten och skapa en hela klassens för- och nackdelslista. Låt eleverna veta att detta ämne ständigt diskuteras bland forskare och politiker. 
                </p>
                <h3>
                    Faciliteringstips:
                </h3>
                <ul class="leading-tight">
                    <li>
                        Se till att eleverna vet att det inte finns något absolut rätt eller fel svar
                    </li>
                    <li>
                        Uppmuntra eleverna att motivera sina åsikter
                    </li>
                    <li>
                        Gå in och korrigera om eleverna går utanför ämnet
                    </li>
                    <li>
                        Se till att debatten inte domineras av en eller två elever
                    </li>
                    <li>
                        Försök att inte påverka elevernas åsikter
                    </li>
                </ul>
            </UiDrawer>
        </teleport>



        <teleport to="#theEnd" v-if="userPrefs.modalOpen === true && userPrefs.modalName === 'space__water-rocket'">
            <UiDrawer>
                <h2>
                    Bygga och skjuta upp en vattenraket
                </h2>

                <p>
                    Du har förmodligen redan byggt en vattenraket av en PET-flaska. 
                    <br />
                    Material som behövs: 
                    <ul class="leading-tight">
                        <li>
                            en större (1,5 l) PET- flaska, 
                        </li>
                        <li>
                            vinkork (kan vara plast),
                        </li>
                        <li>
                            cykelventil, 
                        </li>
                        <li>
                            plastslang som passar på cykelventilen,
                        </li>
                        <li>
                            eventuellt lite ståltråd och en kraftfull cykelpump eller fotpump. 
                        </li>
                    </ul>
                </p>
                <p>
                    Borra försiktigt ett hål genom korken, lite mindre i diameter än slangen. Skjut slangen genom hålet så att den sticker ut 1–2 cm på ena sidan och fäst cykelventilen i andra änden av slangen. Om ventilen är lös kan du använda ståltråden som slangklämma – linda den i så fall tätt med en tång. Därefter är det nödvändigt att tillverka en startplatta så att raketen står stadigt. 
                </p>
                <p>
                    Fyll flaskan till en tredjedel med vatten, sätt i korken, placera raketen på startplattan, anslut pumpen till ventilen och pumpen. Extra lufttryck byggs upp i flaskan, det är pumpens energi som lagras. Till slut blir trycket så högt att det övervinner friktionen mellan korken och flaskhalsen, och korken lossnar. Den lagrade energin frigörs, vattnet trycks ut med en enorm kraft och raketen flyger iväg. Du kan försöka skjuta upp din raket med olika "bränslesammansättningar" - mycket mindre vatten eller bara med luft i flaskan och se hur detta kommer att påverka raketens flygförmåga.
                </p>
                <p>
                    <a href="https://www.scienceprojectideas.org/water-bottle-rocket.htm" target="_blank" rel="noopener noreferrer">DIY vattenraket</a>
                </p>
            </UiDrawer>
        </teleport>


    </div>
</template>

