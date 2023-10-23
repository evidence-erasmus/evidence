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
        
        <section class="e-article print:not-prose" lang="sv" style="hyphens: auto;">
            <Icon name="openmoji:teacher-light-skin-tone" class="float-right text-[6em] text-slate-300" />
            <h1 class="mb-0">Droger</h1>
            <h5 class="font-normal uppercase leading-tight">Lärarmaterial</h5>
        
            
            <section id="s-1">
                <h2 id="s-1t">Modulbeskrivning</h2>
            
                <section class="e-card e-module__meta">
                    <table class="m-0 leading-tight">
                        <tr>
                            <td><b>Målgrupp:</b></td>
                            <td>Detta läromedel är avsett för 15-18-åriga elever från både allmänna och yrkesskolor.</td>
                        </tr>
                        <tr>
                            <td><b>Förväntad tidsram:</b></td>
                            <td>4-6 timmar, á 45 min.</td>
                        </tr>
                    </table>
                </section>
                <p>
                    Studenter uppmanas här att motbevisa / undersöka vanliga myter om droger <sup><span class="tooltip" data-tip="Droger – substanser som har en fysiologisk effekt vid intag eller på annat sätt infört i kroppen.">[1]</span></sup>. I en introduktionsvideo presenteras en berättelse om en killes situation i mötes med droger, varefter eleverna uppmanas att reflektera och dela med sig av sina första tankar kring den. Efter att eleverna har introducerats till flera av de rådande myterna, ska de välja och bearbeta en myt. Baserat på ämnesområdets karaktär ska läraktiviteterna utgå från sekundära bevis (sökningar från internet). Eleverna ska bedöma tillförlitligheten hos informationskällor och vidareutveckla sin källkritik. Efter genomförda analyser och dragna slutsatser förbereder sig eleverna för att presentera sina resultat för klasskamrater på ett relevant och övertygande sätt (t.ex. genom videoinlägg, poster eller PowerPoint presentationer). Modulen avslutas med en fallstudie där eleverna kan lösa ett moraliskt dilemma genom att använda sina ämneskunskaper integrerade med personliga, sociala och moraliska värderingar. I den här svenska versionen väljer vi att fokusera på drogen cannabis medan i den engelska versionen presenteras möjlighet att arbeta med andra ”mirakeldroger” (se länk till engelska versionen).
                </p>
                <p>
                    Modulen består av lärarmaterial (undervisningsförslag och naturvetenskaplig bakgrundsinformation) och elevmaterial (interaktiva arbetsblad, faktavideor och en videohandledning). Eleverna kan också använda "tillförlitlighetsverktyget" för källkritik och tips för visuell presentation av sina resultat och slutsatser.                   
                </p>
            </section>



            

            

            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-2">
                <h2 id="s-2t">Lärandemål som modulen riktar in sig på</h2>
                
                <ul class="leading-tight">
                    <li>
                        <b>Medborgarskapskompetens:</b> utveckla elevernas kunskaper och attityder till att fatta ansvarsfulla beslut relaterade till cannabisbruk och/eller de så kallade "mirakeldrogerna".
                    </li>
                    <li><b>Mediekompetens:</b>
                        <ul class="my-0">
                            <li>utveckla elevernas färdigheter i att bedöma informationens tillförlitlighet, presentera resultat på ett passande sätt för en given publik</li>
                            <li>eagera adekvat och ansvarsfullt på den felaktiga information som presenteras i (sociala) medier.</li>
                        </ul>
                    </li>
                    <li>
                        <b>Digital kompetens:</b> utveckla elevernas färdigheter i att använda digitala medier samtidigt som de presenterar sina undersökningsresultat för de andra grupperna.
                    </li>
                    <li>
                        <b>Vetenskaplig kompetens:</b>
                        <ul class="my-0">
                            <li>utveckla elevernas förståelse för vetenskapens sociala dimensioner och varför vi ska lita på vetenskap;</li>
                            <li>utveckla elevernas strävan efter objektivitet och öppenhet;</li>
                            <li>utveckla sin förmåga att planera och utforma undersökningar för att testa hypoteser och tolka resultaten;</li>
                            <li>utveckla ytterligare elevers kunskaper om cannabis: verkningsmekanism, skillnader mellan kemiska och biologiska aspekter av olika typer av cannabis;</li>
                        </ul>
                    </li>
                    <li>
                        <b>Social kompetens:</b> utveckla elevernas förståelse för...
                        <ul>
                            <li>
                                de personliga och sociala riskerna med cannabisanvändning
                            </li>
                            <li>
                                vikten av personliga val och värderingar relaterade till cannabis för att hantera personligt välbefinnande.
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>


            
            



            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-3">
                <h2 id="s-3t">Förväntade förkunskaper</h2>

                <ul class="leading-tight">
                    <li>Förkunskaper om strukturen hos organiska föreningar.</li>
                    <li>Förkunskaper om psykologiska och sociala effekter av narkotikaanvändning.</li>
                </ul>
            </section>



            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-4">
                <h2 id="s-4t">Modulstruktur</h2>
                
                <p>Denna modul består av 6 aktiviteter. Sekvensen av aktiviteter ges i figur 1 och tabell 1 (se nedan).</p>

                <ModulesModuleStructure />

                <p class="mt-20">
                    <b>Tabell 1.</b> Inlärningssekvens för modulen "Droger".
                </p>
                <table>
                    <thead>
                        <tr>
                            <th class="w-1/5"><b>Aktivitet Nr</b></th>
                            <th>Beskrivning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Aktivitet 1</b></td>
                            <td>Presentation av en introduktionsvideo</td>
                        </tr>
                        <tr>
                            <td><b>Aktivitet 2</b></td>
                            <td>
                                Diskussion i grupp
                                <br />
                                Att välja en myt som ska analyseras
                            </td>
                        </tr>
                        <tr>
                            <td><b>Aktivitet 3</b></td>
                            <td>
                                I grupper:
                                <ul>
                                    <li>Ställa en testbar hypotes / forskningsfråga;</li>
                                    <li>Söka efter relevant information (Aktivitet 3) att bekräfta eller motbevisa den ställda hypotesen/forskningsfrågan;</li>
                                    <li>Utvärdera tillförlitligheten hos de hittade bevisen;</li>
                                    <li>Dra slutsatser.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Aktivitet 4</b></td>
                            <td>Presentera sina resultat för en given publik (klasskamrater): med hjälp av en handledning lär sig eleverna hur man producerar en kort video eller använder andra visualiseringsmetoder för att presentera sina idéer.</td>
                        </tr>
                        <tr>
                            <td><b>Aktivitet 5</b></td>
                            <td>Gruppresentationer (i kombination med kamratbedömning aktiviteter).</td>
                        </tr>
                        <tr>
                            <td><b>Aktivitet 6</b></td>
                            <td>Studenter, individuellt och i grupp, överväger ett moraliskt dilemma relaterat till cannabis.</td>
                        </tr>
                    </tbody>
                </table>
            </section>






            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-5">
                <h2 id="s-5t">
                    Utrustning
                </h2>
                <p>
                    Smarttelefon, dator, internet, projektor eller annan utrustning för att visa video. A3 eller A2 papper, markörer i olika färger.
                </p>
            </section>
            
            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-6">
                <h2 id="s-6t">Bedömning</h2>
                
                <p>Studenter kan bedömas på olika sätt under hela modulen, inklusive det undersökande arbetssättet, allmänna kompetenser såsom argumentationsförmåga och ämneskunskaper. Två typer av bedömningar kommer att inkluderas: formativa bedömningar baserade på observationer, individuella / grupparbetsblad och summativa bedömningar baserade på gruppresentationer.</p>
                <p>
                    <b>Bedömningar som kan tillämpas i denna modul:</b>
                </p>
                <p><b>Formativ:</b></p>
                <ul>
                    <li>Muntlig / skriftlig återkoppling från läraren (baserat på observationer, ställda frågor etc.) under hela modulen, och i andra format av individuellt / grupparbete.</li>
                    <li>Peer feedback (på gruppresentationen med hjälp av följande <NuxtLink to="../tools/peer-feedback" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20"></Icon> verktyg</NuxtLink> och självvärdering efter fallstudien).</li>
                    <li>
                        Muntlig / skriftlig feedback från läraren på individuella / grupparbetsblad.
                    </li>
                </ul>
                <p><b>Summativ:</b></p>
                <ul>
                    <li>Betyg sätts av läraren på gruppresentationen (baserat på elevernas videoproduktion och dess prestation samt elevens förmåga att ge relevanta svar / kommentarer).</li>
                    <li>Betyg tilldelas av läraren på grupp- eller individuella arbetsblad.</li>
                </ul>
            </section>
            
            
            

            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-7">
                <h2 id="s-7t">Undervisningsförslag</h2>

                <UiCardInfo>
                    OBS! I diskussioner kring känsliga frågor (t ex om cannabis) förväntas lärare främja en säker, icke-dömande miljö där alla elever kan delta. Lärare bör också ha goda sakkunskaper och vara redo att reflektera över sina egna antaganden om cannabis om eleverna frågar om dem. Denna modul kan också vara en del av ett program för förebyggande av drog- och riskbeteende i skolan där läraren kan samarbeta med skolkuratorer och fritidsledare. Läraren bör komma ihåg att elevernas sekretess bör respekteras utom när det finns bevis eller misstanke om att någon är i riskzonen, då det drogförebyggande teamet skall informeras.
                </UiCardInfo>
                <p>
                    Modulen börjar med en <a href="https://www.youtube.com/watch?v=cN5KV_WJubw" target="_blank" rel="noopener noreferrer">introduktionsvideo</a> för att introducera ämnet "Droger" för att väcka frågor och stimulera reflektioner snarare än att ge eleverna omedelbara svar. Det förväntas att eleverna i grupper efter att ha sett videon <b>(Aktivitet 1)</b> kommer att känna sig motiverade att undersöka drogrelaterade myter och föreställningar mer ingående. Avsikten är att engagera eleverna i aktiviteter som relaterar till en bättre förståelse av frågan – en fråga som eleverna ser som relevant för deras liv, inte bara för läroplanen. Den syftar också till att uppmärksamma eleverna på att tänka på sina förkunskaper och dela sina föreställningar och åsikter med klasskamrater <b>(Aktivitet 2)</b>. I Aktivitet 2 introduceras eleverna för 8 myter om cannabis från vilken de måste välja en för att bearbeta. Aktivitet 2 ska hjälpa eleverna att begränsa sin valda myt till en hypotes / forskningsfråga som kan förkastas / bekräftas / besvaras <b>(Aktivitet 3)</b>. Det kan vara så att eleverna behöver hjälp när de försöker formulera en hypotes. Därför skulle läraren kunna hjälpa dem genom att ge exempel på bra (testbara) och dåliga hypoteser / frågor. Följande <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method." target="_blank" rel="noopener noreferrer">resurs</a> kan vara till hjälp för det.
                </p>
                <p>
                    <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrOmTPUWRrZh_W5VtuNTDsdI" target="_blank" rel="noopener noreferrer">"Faktavideorna"</a> kan också visas i detta steg för att lyfta upp några drogrelaterade fakta. Dessutom kan utvalda delar från a <NuxtLink to="./drugs/background">vetenskaplig bakgrundsinformation</NuxtLink> användas för detta ändamål.
                </p>
                <p>
                    De drogrelaterade myterna kan inte prövas experimentellt i klassrummet. Därför förväntas eleverna samla bevis från sekundära källor för att bekräfta eller motbevisa sin hypotes / forskningsfråga <b>(Aktivitet 3)</b>. Genom att sammanställa media / datakällor och deras innehåll, analyserar eleverna kritiskt deras tillförlitlighet och drar slutsatser baserat på bevisen. Eftersom tillförlitlighetsbedömning kan vara en verklig utmaning för eleverna kan de använda ett <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20" /> verktyg</NuxtLink> för att analysera informationskällor. Läraren skulle också kunna förklara användningen genom att demonstrera och analysera både tillförlitliga och mindre tillförlitliga källor som inlärningsexempel innan eleverna implementerar detta på egen hand.
                </p>
                <p>
                    För att lära sig att presentera sina resultat vägleds eleverna att producera en visuell presentation av sina slutsatser <b>(Aktivitet 4)</b>. Om man väljer videopresentation kan eleverna använda en <a href="https://www.youtube.com/watch?v=_l8LgLhjLvc&list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" target="_blank" rel="noopener noreferrer">videohandledning</a>. Studentmaterialet är också försett med kriterier som presentationen ska uppfylla. Dessa kriterier kan användas formativt för självbedömning under processen och för kamratbedömning när videon presenteras <b>(Aktivitet 5)</b>. Eleverna kan använda t ex följande <NuxtLink to="../tools/peer-feedback" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20"></Icon> bedömningsverktyg</NuxtLink> för att ge feedback till de andra grupperna i Google Formulär.  
                </p>
                
                <p>
                    I den sista aktiviteten <b>(Aktivitet 6)</b> förbereder sig eleverna för att fatta beslut på individ- eller gruppnivå i en fallstudie där de har en möjlighet reflektera och använda sina kunskaper och värderingar.
                </p>
                <p>
                    Fakta relaterade till dessa myter om "Droger" presenteras i den <NuxtLink :to="localePath('/drugs/background')">Vetenskaplig bakgrundsinformationen</NuxtLink>, som inkluderar relevanta vetenskapliga rön.
                </p>
                <p>
                    Introvideon och uppföljningsaktiviteterna uppmuntrar tittaren att överväga olika alternativ under beslutsprocessen och att fundera över hur olika beslut kan påverkas av eller kan påverka befintliga relationer. 
                </p>
                <p>
                    <b>Ett moraliskt dilemma</b> som presenteras i slutet av modulen <b>(Aktivitet 6)</b> ska få eleverna att tänka på sina och andras val och konsekvenserna av dessa val för andra. De potentiella besluten och resonemangen bakom baseras huvudsakligen på det <b>kohlbergska teoretiska ramverket om moraliskt resonemang</b> <a href="https://en.wikipedia.org/wiki/Lawrence_Kohlberg%27s_stages_of_moral_development" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Kohlberg, Lawrence; Charles Levine; Alexandra Hewer (1983). Moraliska stadier: en aktuell formulering och ett svar på kritiker. Basel, NY: ISBN 978 3 8055 37162 / Lawrence Kohlbergs stadier av moralisk utveckling. (2022, 28 december). I Wikipedia."><sup>[2]</sup></a> som inkluderar följande (exempel för att illustrera nivåerna och stadierna är hämtade från fallstudien - aktivitet 6, OBS! Andra tolkningar är möjliga. Personen Cris i fallstudien kan väljas att vara en kille eller en tjej):
                </p>

                <h3>
                    Nivå 1 (pre-konventionell)
                </h3>
                <ol>
                    <li>
                        <b>Lydnads- och strafforientering.</b> Individer fokuserar på de direkta konsekvenserna av sina handlingar på sig själva. En handling uppfattas som moraliskt felaktig eftersom gärningspersonen straffas. Vanligt hos barn. Reglerna är fasta och absoluta. Huvudfrågan är "hur kan jag undvika straff?
                        <br />
                        <i>T.ex. Cris bör inte behålla det (gräset, marijuana) eftersom detta kan resultera i brottsregister vilket betyder att hen är en dålig person.</i>
                    </li>
                    <li>
                        <b>Egenintresse (instrumentell-relativistisk) orientering:</b> Rätt beteende definieras av vad individen tror är i deras bästa intresse, eller vad som är "bekvämt", men förstås på ett snävt sätt som inte tar hänsyn till ens rykte eller relationer till grupper av människor. Resonemang visar ett begränsat intresse för andras behov, men bara till en punkt där det kan främja individens egna intressen.
                        <br />
                        <i>T.ex. Cris borde behålla det eftersom Marcus har gjort många vänliga saker mot Cris tidigare. Nu kan hen återgälda detta.</i>
                        <br />
                        <i>Cris borde ge tillbaka det till Marcus eftersom det inte finns något värde av en sådan kriminell vän i framtiden.</i>
                    </li>
                </ol>
                <h3>
                    Nivå 2 (konventionell)
                </h3>
                <ol start="3">
                    <li>
                        <b>Konfrontationsundvikande och acceptans av rådande sociala normer.</b> Individer är mottagliga för gillande eller ogillande från andra eftersom det speglar samhällets åsikter. De försöker vara en "bra kille" eller "bra tjej" för att leva upp till dessa förväntningar, efter att ha lärt sig att det gynnar sig själv att ses som bra. Resonemang i steg tre kan bedöma moralen i en handling genom att utvärdera dess konsekvenser i termer av en persons relationer, som nu börjar inkludera saker som respekt, tacksamhet och "den gyllene regeln". Förmåga att känna igen goda eller dåliga avsikter.
                        <br />
                        <i>T.ex. Cris borde behålla drogen för att han inte kan göra sin långvariga vän besviken.</i>
                        <br />
                        <i>Cris bör t.ex. ge tillbaka det för att inte göra sina föräldrar besvikna om han blir ertappad med droger av polisen.</i>
                    </li>
                    <li>
                        <b>Auktoritet och social ordningsupprätthållande orientering:</b> Lag och ordningsmoral, förmåga att se abstrakta normativa system ("Gör din plikt"). Det är viktigt att lyda lagar, <a href="https://en.wikipedia.org/wiki/Dictum" target="_blank" rel="noopener noreferrer">diktum</a> och <a href="https://en.wikipedia.org/wiki/Social_convention" target="_blank" rel="noopener noreferrer">sociala konventioner</a> på grund av deras betydelse för att upprätthålla ett fungerande samhälle. Moraliska resonemang i steg fyra ligger alltså bortom det behov av individuellt godkännande som uppvisas i steg tre. Ett centralt ideal föreskriver ofta vad som är rätt och fel. Om en person bryter mot en lag, kanske alla skulle göra det – det finns alltså en skyldighet och en plikt att upprätthålla lagar och regler. När någon bryter mot en lag är det moraliskt fel.
                        <br />
                        <i>Cris borde ge tillbaka det till Marcus eftersom att äga och konsumera ogräs är förbjudet och därför olagligt.</i>
                    </li>
                </ol>
                <h3>
                    Nivå 3 (postkonventionell)
                </h3>
                <ol start="5">
                    <li>
                        <b>Social kontraktsorientering</b> - olika åsikter, rättigheter och värderingar bör respekteras ömsesidigt som unika för varje person eller gemenskap. Lagar betraktas som sociala kontrakt snarare än stela påbud. Personliga rättigheter är viktiga. Detta uppnås genom majoritetsbeslut och oundvikliga kompromisser.
                        <br />
                        <i>Cris bör t.ex. behålla drogen för att undvika att hans/hennes vän får straff, vilket kan leda honom ännu djupare in i ett destruktivt beteende.</i>
                        <br />
                        <i>T.ex. Cris borde ge tillbaka det, eftersom att försöka hålla Marcus borta från att bli dömd för en liten mängd narkotika kan dra honom in i en större narkotikarelaterad affär i framtiden.</i>
                        <br />
                        <i>T.ex. Cris bör inte behålla det eftersom detta kan resultera i ett brottsregister och hindra honom/henne från att komma in på militärakademin.</i>
                        <br />
                        <i>T.ex. Cris bör ge tillbaka det eftersom att agera på annat sätt inte skulle vara rättvist, att han/hon straffas för den handling som han/hon inte har begått.</i>
                    </li>
                    <li>
                        <b>Universella etiska principer</b> - moraliskt resonemang bygger på abstrakta resonemang med hjälp av universella etiska principer. Det resulterande samförståndet är de åtgärder som vidtas. Individen agerar för att det är rätt, och inte för att undvika straff eller att det är i deras bästa intresse.
                        <br />
                        <i>T.ex. Cris borde ge tillbaka det och låta Marcus ta allt ansvar för det han har gjort. Narkotika har förstört många människors liv. Det är helt enkelt inte rätt att stödja användningen och spridningen.</i>
                    </li>
                </ol>

                <p>
                    Det förväntas att eleverna genom aktivitet 6 utvecklar en bredare förståelse för frågan samtidigt som de överväger olika perspektiv och konsekvenser av ett eller annat beslut. Det förväntas också att efter fas IV av fallstudien (efter att besvara följande frågor):
                </p>
                <ul class="leading-tight">
                    <li>
                        Vilket alternativ åstadkommer mest nytta och gör minst skada?
                    </li>
                    <li>
                        Vilket alternativ respekterar bäst rättigheterna för alla involverade?
                    </li>
                    <li>
                        Vilket alternativ tjänar bäst samhället som helhet, inte bara vissa medlemmar?
                    </li>
                    <li>
                        Vilket alternativ får mig att agera som den typ av person jag vill vara? (kan lämnas för individuell bedömning) kommer att hjälpa eleverna att nå högre nivåer av moraliskt resonemang. Det är också viktigt att påminna eleverna om att följa RICE-metoden (RESE) under diskussionen. Fas IV kan också tilldelas som hemläxa.
                    </li>
                </ul>
            </section>

        </section>
    </div>
</template>
