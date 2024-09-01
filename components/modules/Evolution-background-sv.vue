<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" />
        </ClientOnly>



        <section class="e-article" lang="sv" style="hyphens: auto;">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Evolution</h1>
            <h5 class="font-normal uppercase leading-tight">Vetenskaplig bakgrundsinformation</h5>
        
            <section id="s1">
                <h2 id="s1t">Vad är evolution?</h2>
                <p>
                    <a href="https://www.nrm.se/faktaomnaturenochrymden/evolution.1298.html" target="_blank" rel="noopener noreferrer"><span class="e-term">Evolution</span></a> syftar på de processer, mer eller mindre gradvisa, som har förvandlat livet på jorden från dess tidigaste form till den mångfald som kännetecknar det liv som finns idag. De första primitiva levande organismerna dateras så långt tillbaka som 3800 miljoner år sedan. Faktum är att allt i universum utvecklas, ingenting står stilla. Vi kan prata om evolutionen av en stjärna, evolutionen av litosfären ... och evolutionen av levande organismer. Det verkar uppenbart att levande varelser har dykt upp och försvunnit under geologisk tid, och att många arter, nuförtiden med olika egenskaper, har gemensamma förfäder. Det är känt att det finns arter som funnits tidigare och nu är utrotade, och andra som inte existerade i äldre geologisk tid men som finns idag. Generellt sett är evolutionär förändring baserad på interaktionen mellan populationer av organismer och deras miljö. Eftersom det har skett förändringar i miljön har olika egenskaper behövts för att anpassa sig till sådana förändringar.
                </p>
            </section>
            
             
            
            <hr  class="mt-10 mb-40" />

            <section id="s2">
                <h2 id="s2t">
                    Evolutionsteorier
                </h2>
                <h3>
                    Lamarcks evolutionsteori
                </h3>
                <ol>
                    Lamarcks teori bygger på:
                    <li>
                        Evolution drivs av en medfödd tendens mot högre och större komplexitet, mot perfektion. (livskraft).
                    </li>
                    <li>
                        Denna medfödda tendens till perfektion påverkas av miljöförändringar och organismerna blir därför bättre anpassade till deras miljöer.  Dessa miljöförändringar skulle skapa "nya behov" hos organismer, som behöver använda vissa organ eller egenskaper mer än andra.
                    </li>
                    <li>
                        Denna användning och obruk av vissa organ gör att de organ som används oftare klarar sig bättre med miljön, vilket gör att de blir större och starkare, medan de som inte används försämras. Med andra ord: funktionen ”skapar” organen. Så organismer kan förvärva vissa egenskaper under sin livstid och förlora andra.
                    </li>
                    <li>
                        Lamarck trodde att de modifikationer som en organism förvärvar under sin livstid överförs till dess avkomma.
                    </li>
                    <li>
                        En art kan inte förvandlas till någon annan art, utan bara till en liknande där arten utvecklas gradvis. Lamarck fastställde evolutionens faktum, men hans teori hade flera brister:
                        <ul>
                            <li>
                                Förvärvade egenskaper ärvs inte. Vi vet alla att fysisk träning kommer att få våra muskler att utvecklas, men sådana förvärvade fysiska egenskaper (som inte är genetiska) överförs inte till avkomman. Sådana förvärvade egenskaper produceras av miljöfaktorer och utveckling, men inte av gener. Endast de karaktärsdrag som regleras av gener är ärftliga, och endast om sådana gener finns i  könscellerna. Vad som än händer med somatiska celler på grund av att de används eller inte används kommer inte att påverka generna i könscellerna, därför kommer det inte att vara ärftligt. August Weissmann (1834-1914) genomförde följande experiment för att motbevisa Lamarcks teori: Han skar av svansen på femtonhundra möss, upprepade gånger under 20 generationer, och rapporterade att ingen mus någonsin föddes utan svans. Enligt Lamarck och hans teori borde avskaffandet av svansen ha gett avkomma utan svans eller med outvecklad svans, dock var det aldrig fallet.
                            </li>
                        </ul>
                    </li>
                </ol>

                <h3>
                    Darwin-Wallaces evolutionsteori
                </h3>
                <p>
                    Charles Darwin var 22 år när han seglade från England med Beagle i december 1831; en resa jorden runt som skulle pågå i fem år. Under expeditionen samlade Darwin in tusentals exemplar av exotiska och oerhört olika fauna och floror på olika platser. Han kunde också observera de olika anpassningarna av växter och djur som fanns i så olika miljöer.
                </p>
                <ul>
                    Även om Darwin inte visste något om arvsmekanismen, var han mycket medveten om många andra aspekter av levande organismer. Bland dessa betonas särskilt:
                    <li>
                        De arter som lever på jorden idag är inte samma arter som fanns förr, även om de liknar dem. Denna aspekt av evolutionen var mycket uppenbar för Darwin från studier av fossiler.
                    </li>
                    <li>
                        Varje art har ett antal karaktärsdrag som anpassar individer inom den arten till deras sätt att leva och deras speciella miljö. Mycket av The Origin of Species ägnas åt detaljerade beskrivningar av individuella arters anpassningar, till exempel de olika näbbformerna hos finkar på Galapagosöarna.
                    </li>
                    <li>
                        Selektiv förädling av inhemska arter kan producera karaktärsdrag i en mängd olika former. Till exempel har hunduppfödare producerat många raser som skiljer sig åt i egenskaper såsom t ex beteende, pälsens utseende och benens längd.
                    </li>
                </ul>
                <p>
                    En annan naturforskare, Alfred Wallace som arbetade i Ostindien, skickade ett manuskript till Darwin där han utvecklade en teori om naturligt urval som var nästan identisk med Darwins.
                </p>
                <p>
                    1858 publicerade de tillsammans sin evolutionsteori, som ersatte Lamarcks evolutionsteori. I boken The Origin of Species (Om arternas uppkomst) förklarade Darwin sin teori om evolution genom naturligt urval
                </p>
                <ul>
                    <li>
                        Darwins teori om naturligt urval kan uttryckas som fyra påståenden:Inom en given art produceras fler individer genom reproduktion än vad som kan överleva inom de begränsningar (t.ex. matförsörjning) som artens miljö ställer.
                    </li>
                    <li>
                        Följaktligen finns det en <i>kamp för tillvaron</i>, på grund av skillnaden mellan antalet avkommor efter reproduktion och antalet individer som kan överleva.
                    </li>
                    <li>
                        Individer inom en art uppvisar variation; Det finns inte två individer som är exakt likadana. De med mest fördelaktiga karaktärer har större sannolikhet att överleva, och därför också att reproducera sig, i kampen för tillvaron.
                    </li>
                    <li>
                        Individer producerar avkomma som tenderar att likna sina föräldrar (principen om <i>arv</i>). Förutsatt att de fördelaktiga karaktärerna som främjar överlevnad ärvs av avkommor, kommer individer som har dessa karaktärer att bli allt vanligare i populationen under kommande generationer eftersom de har större chans att överleva och producera avkomma i nästa generation än individer som inte har dessa karaktärer.
                    </li>
                </ul>

                <p>
                    Kärnan i Darwins teori är att naturligt urval kommer att ske om tre förutsättningar är uppfyllda: <i>en kamp för tillvaron</i>, <i>variation</i> och <i>arv</i>.
                </p>
                <h4>
                    Några förtydliganden om denna teori:
                </h4>
                <ul>
                    <li>
                        Enligt Darwin är evolutionen gradvis, långsam och kontinuerlig: det finns inga plötsliga eller bryska förändringar.
                    </li>
                    <li>
                        Miljöfaktorer driver det naturliga urvalet. Med tiden försvinner individer med egenskaper som är mindre anpassade till sin miljö medan de med gynnsamma variationer överlever. (Den starkaste överlever).
                    </li>
                    <li>
                        Under långa tidsperioder, och alltid på grund av miljöfaktorer, kan en grupp individer samla en avsevärd mängd gynnsamma egenskaper som ger upphov till en ny art som skiljer sig från den ursprungliga populationen.
                    </li>
                    <li>
                        Mendel tillkännagav ärftlighetslagarna sex år efter att Darwin publicerade sin bok, men Mendels arbete erkändes inte förrän 30 år senare, vilket avsevärt saktade ner förståelsen av evolutionära mekanismer.
                    </li>
                </ul>

                <h3>
                    Neodarwinismen
                </h3>
                <p>
                    En omfattande evolutionsteori som blev känd som Neodarwinismen (även Den moderna syntesen) tog form i början av 1940-talet. Denna teori är inte ett verk av en utan av många vetenskapsmän. Den integrerar upptäckter och idéer från många olika områden, inklusive populationsgenetik, paleontologi, taxonomi, etc. Den sammanför Charles Darwins teori om arternas uppkomst genom naturligt urval med Gregor Mendels teori om genetik som grund för biologiskt arv.
                </p>
                <p>
                    Här definieras evolutionen som det naturliga urvalet, resultatet av mutationer eller sexuell rekombination som uppträder bland medlemmarna i en population.
                </p>
                <ul>
                    Några viktiga aspekter av denna definition är:
                    <li>
                        Några viktiga aspekter av denna definition är: En population är en lokaliserad grupp av individer som tillhör samma art, där individerna korsar sig sinsemellan och ibland med medlemmar av andra populationer.
                    </li>
                    <li>
                        Som ett resultat av denna slutna sexuella interaktion i en population skapas ett genflöde (det vill säga att de olika individernas gener cirkulerar inom populationen och kan överföras till hela populationen).
                    </li>
                    <li>
                        De genetiska variationerna mellan individer kan bero på:
                        <ul>
                            <li>
                                <b>mutationer</b> (dessa variationer kan ske hos individer med båda typerna av reproduktion, asexuell och sexuell); och
                            </li>
                            <li>
                                <b>meiotisk eller sexuell rekombination</b> (äger rum under meiosen - celldelningsprocessen som ger nya könsceller, vilket därför bara kan hända hos individer med sexuell reproduktion).
                            </li>
                        </ul>
                    </li>
                    <li>
                        På grund av mutationer och meiotiska rekombinationer föds ständigt individer med nya egenskaper. Om dessa individer överlever och får avkomma, kommer deras nya egenskaper att stanna inom populationens genpool eller grupp av gener. I på varandra följande generationer kan dessa genetiska variationer överföras till många (eller alla) medlemmar av populationen.
                    </li>
                    <li>
                        Om ovanstående skulle hända eller inte beror på naturligt urval (vissa individer har fler avkommor än andra). De organismer som är bäst anpassade till en given miljö kommer med största sannolikhet att överleva till reproduktiv ålder och få avkommor. Organismer som är framgångsrika i sina miljöer kommer att vara mer benägna att vara framgångsrika i reproduktion, och därför kommer de bättre anpassade organismerna att föröka sig i högre takt än de mindre välanpassade organismerna. Därför kommer generna hos de som reproducerar sig mer att dominera i populationens genpool. Detta är känt som differentiell reproduktion.
                    </li>
                    <li>
                        Det är viktigt att förstå att det inte bara är hur väl anpassade individer är, utan hur väl de kan föra vidare de nya karaktärsdragen. Det kan till exempel vara så att en individ är väldigt väl anpassad till sin omgivning, men att den har en mutation som gör den steril. Skulle denna individ ha någon inverkan på utvecklingen av sin befolkning?
                    </li>
                    <li>
                        Evolutionsprocessen har därför två steg:
                        <ul>
                            <li>
                                genetisk variation måste uppstå på grund av mutationer och/eller meiotiska rekombinationer;
                            </li>
                            <li>
                                dessa variationer måste spridas över hela befolkningen genom differentiell reproduktion (naturligt urval) i kommande generationer.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Individer utvecklas inte genetiskt, utan det gör populationer. De genetiska egenskaperna hos en individ ändras vanligtvis inte under dess livstid och när den väl dör försvinner de. Men om individen reproducerar sig sexuellt kan den introducera genetiska variationer till sin avkomma.
                    </li>
                    <li>
                        Evolutionsprocessen följer inte ett fast mönster, eftersom genetiska variationer sker slumpmässigt. Detta betyder inte att evolutionen saknar en drivkraft: eftersom de individer som är mest framgångsrika i reproduktion är de som är bäst anpassade, är evolutionens drivkraft naturligt urval. – Därför verkar naturliga urval med hjälp av differentiell reproduktion, och inte genom kampen för överlevnad.
                    </li>
                </ul>

                <h2>
                    Exempel
                </h2>

                <h3>
                    Giraffens evolution enligt Lamarck:
                </h3>
                <p>
                    Giraffens förfäder (med kort hals och korta ben) åt löv. När de nedre löven åts upp, var den tvungen att sträcka på halsen för att äta löven som fanns högre upp. Lamarck resonerade att den långa halsen och benen som dagens giraffer har, utvecklades gradvis som den kumulativa produkt av många generationer av förfäder som sträckte sig högre och högre upp och ärvdes vidare av avkommorna.
                </p>
                <h3>
                    Giraffens evolution enligt Darwin:
                </h3>
                <p>
                    Variabiliteten som uppträdde i giraffpopulationer i varje generation (en del sträckte på nacken eller benen mer än andra) gav upphov till att vissa individer inom populationen uppträdde med längre ben och en längre hals. Dessa karaktärer överfördes till deras avkomma. Till en början var detta inte till någon fördel för individen, eftersom det fanns tillräckligt med låga löv på träden. Men när de nedre löven blev färre kunde bara individerna med längre hals och längre ben nå de högre löven, vilket gjorde att de kunde överleva genom generationerna och få fler avkommor. Med tiden blev det den enda typen av giraff som fanns.
                </p>
                <h3>
                    Giraffens evolution enligt Neodarwinism:
                </h3>
                <p>
                    Förfäderna till dagens giraffer hade inte lång hals eller långa framben. Genom mutationer och/eller genetiska rekombinationer uppträdde nya individer med lång hals och/eller långa ben i en population. De nya individerna var bättre anpassade till miljön. De åt mer, hittade lättare parningspartners och förökade sig därför oftare. Med tiden blev de de enda existerande girafferna. De individer som hade kort hals och korta ben (båda negativa egenskaper) reproducerade sig inte lika framgångsrikt som de välanpassade girafferna. Så småningom försvann de mindre gynnsamma generna från giraffpopulationen.
                </p>
            </section>
        
            <hr class="mt-10 mb-40" />





            <section id="s3">
                <h2 id="s3t">
                    Evolution: myter och missuppfattningar
                </h2>

                <h3>
                    <span class="text-rose-400">
                        Myt 1:
                    </span>
                    Evolution producerar perfekt anpassade varelser
                </h3>
                <p>
                    Det finns många anledningar till att naturligt urval inte kan producera "perfekt konstruerade" egenskaper. Till exempel består levande varelser av egenskaper som är ett resultat av en komplicerad uppsättning kompromisser– att ändra en egenskap till det bättre kan innebära att en annan förändras till det sämre (t.ex. en fågel med den "perfekta" stjärtfjäderdräkten för att attrahera en partner kanske blir särskilt sårbar för rovdjur). Eftersom organismer har uppstått genom komplexa evolutionära händelser är deras framtida evolution ofta begränsad av egenskaper som de redan har utvecklat. Till exempel, även om det vore fördelaktigt för en insekt att utvecklas på något annat sätt än genom metamorfos (larv, puppa etc) så kunde det helt enkelt inte ske eftersom metamorfos är inbäddad i insekters genetiska sammansättning på många nivåer. När allt kommer omkring behöver du inte vara perfekt anpassad för att överleva, du måste bara vara lika väl anpassad som dina konkurrenter.
                </p>
                <p>
                    Det finns många anledningar till varför naturligt urval kanske inte ger en "perfekt konstruerad" egenskap. Till exempel kan du föreställa dig att geparder skulle kunna fånga fler byten och få fler avkommor om de bara sprang lite snabbare. Här är några anledningar till varför naturligt urval kanske inte ger perfektion eller snabbare geparder:
                </p>
                <ul>
                    <li>
                        <b>
                            Brist på nödvändig genetisk variation
                        </b>
                        <br />
                        Selektion kan endast verka på den tillgängliga genetiska variationen. En gepard skulle kunna springa snabbare om den hade "snabbare" alleler - men om snabbare alleler inte finns i populationen från mutation eller genflöde, kommer evolution i denna riktning inte att ske.
                    </li>
                    <li>
                        <b>
                            Begränsningar på grund av historien
                        </b>
                        <br />
                        Kanske skulle en annan typ av benmuskler och skelettben producera geparder som springer snabbare - dock är den grundläggande kroppsformen för däggdjur redan utlagd i deras gener att det är osannolikt att det kommer att förändras.
                    </li>
                    <li>
                        <b>Kompromisser</b>
                        <br />
                        Att ändra en funktion till det bättre kan förändra en annan till det sämre. Kanske finns det snabbare alleler i gepardpopulationen - men det finns en avvägning förknippad med dem: allelerna producerar geparder med längre ben (och därmed snabbare), men dessa långa ben är ömtåligare. Även om längre ben ökar stegen, ökar deras chanser att misslyckas på grund av belastningar också. I det här fallet kanske ingen nettoökning i kondition skulle bli resultatet av de snabbare allelerna.
                    </li>
                </ul>

                <hr />
                <h3>
                    <span class="text-rose-400">
                        Myt 2:
                    </span>
                    Evolutionen är bara en teori.
                </h3>
                <p>
                    Inom vetenskapen är en teori en förklaring till ett fenomen som kan testas och verifieras med vetenskaplig metod. Den innehåller flera beviskällor som byggs upp i ett ramverk av förståelse som kan förändras över tid för att ta hänsyn till nya upptäckter och nya bevis.
                </p>
                <p>
                    Teorier är de förklaringar som vetenskapen söker hitta. I dagligt bruk är ordet något mindre konkret.
                </p>
                <p>
                    Missuppfattningen att "Evolution är bara en teori" härrör från en sammanblandning mellan vardaglig och vetenskaplig användning av ordet teori. I vardagsspråket används teori ofta för en idé med litet bevisstöd. "Vetenskaplig teori" å andra sidan innebär inte mycket osäkerhet. För att bli accepterad av det vetenskapliga samfundet måste en teori ha starkt stöd av många olika bevis. När det gäller evolutionsteorin kan nämnas följande bevis:
                </p>
                <ul>
                    <li>
                        Livet dök upp på jorden för mer än två miljarder år sedan;
                    </li>
                    <li>
                        Livsformer har förändrats och diversifierats under livets historia;
                    </li>
                    <li>
                        Arter är besläktade från en eller några få gemensamma förfäder;
                    </li>
                    <li>
                        Naturligt urval är en viktig faktor som påverkar hur arter förändras.
                    </li>
                </ul>
                <p>
                    Evolutionsteorin har användbara tillämpningar inom epidemiologi, skadedjursbekämpning, läkemedelsupptäckter och andra områden.
                </p>
                <p>
                    Förutom teorin finns det evolutionens faktum, observationen att livet har förändrats mycket över tiden. Faktumet om evolution var erkänt redan före Darwins teori. Evolutionsteorin förklarar faktumet.
                </p>
                <p>
                    Med uttrycket "bara en teori" borde någon också förkasta gravitationsteorin, atomteorin, bakterieteorin om sjukdomar etc. Evolutionsteorin är inte mindre giltig än någon av dessa. Även gravitationsteorin får fortfarande ifrågasättanden. Ändå är gravitationsfenomenet, liksom evolutionen, fortfarande ett faktum.
                </p>
                <p>
                    Evolution är en väl underbyggd och brett accepterad vetenskaplig teori; det är inte "bara" en idé.
                </p>


                <hr />
                <h3>
                    <span class="text-rose-400">
                        Myt 3:
                    </span> 
                    Evolutionen följer en förutbestämd, rak väg (eller om människan utvecklats från apor, varför finns det fortfarande apor?)
                </h3>
                <p>
                    En annan missuppfattning är att evolution är en strikt linjär process - det vill säga att den sker i en rak linje från primitiva individer till mer avancerade.
                </p>
                <UiContentImage src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Cladogram_Amniota_B.png" :elevated="true" credits="Källa: https://en.wikipedia.org/wiki/Cladogram">
                    <template #caption>
                        <b>Figur 1.</b> Kladogram: Fågelgrenen av Amniota-kladen
                    </template>
                </UiContentImage>
                <p>
                    Med ursprung i Platon och Aristoteles var den traditionella synen på hur världen var organiserad genom en "progression i perfektion". Detta koncept är explicit i idén om "scala naturae": Alla varelser på jorden, levande och livlösa, skulle kunna organiseras enligt en ökande skala av perfektion från svampar längst ner, vidare till humrar och kaniner, hela vägen till människor i toppen. Denna uppfattning innehåller tre huvudsakliga fel:
                </p>
                <ul>
                    <li>
                        Den hävdar att naturen är organiserad hierarkiskt. Det är inte ett slumpmässigt urval av varelser.
                    </li>
                    <li>
                        Den utgår från två organiseringsprinciper: saker går från enkelt till perfekt och från primitivt till modernt.
                    </li>
                    <li>
                        Den antar att det inte finns några mellanliggande stadier mellan nivåerna i denna hierarki. Varje nivå är ett vattentätt fack av liknande komplexitet. Ingen är halvvägs mellan två steg.
                    </li>
                </ul>
                <p>
                    Sanningen är att vi inte har utvecklats från något av de djur som lever idag. Människor har inte utvecklats från gorillorna eller schimpanserna vi ser i djurparken och det är en vanlig missuppfattning att apor är ett steg bort från att bli människor. Enligt Darwin är alla nuvarande organismer lika utvecklade och alla påverkas fortfarande av naturligt urval. Så, en sjöstjärna och en människa ligger båda i framkant av utvecklingen av sina specifika byggnadsplaner och de råkar ha en gemensam förfader som levde för cirka 580 miljoner år sedan. Det betyder att människor härstammar från förfäder (som är nu utdöda) som levde för miljoner år sedan. Slutsatsen är att människor har apförfäder och som sådana är alla människor släkt med andra apor.
                </p>
                <p>
                    Darwins teori förutsätter ingen speciell riktning i evolutionen utan gradvis förändring och diversifiering. Eftersom evolutionen fortfarande fungerar idag, är alla närvarande organismer de mest utvecklade av sitt slag.
                </p>
                

                <hr />
                <h3>
                    <span class="text-rose-400">
                        Myt 4:
                    </span>
                    Evolutionen är ovetenskaplig eftersom den inte är testbar eller falsifierbar. Den hänvisar till händelser som inte kunnat observerats och som aldrig kan återskapas.
                </h3>
                <p>
                    Evolutionsvetenskapen är uppdelad i minst två områden: mikroevolution och makroevolution.
                </p>
                <ul>
                    <li>
                        <b>Mikroevolution</b> tittar på förändringar inom arter över tid som kan vara starten på artbildning, ursprunget till nya arter.
                    </li>
                    <li>
                        <b>Makroevolution</b> studerar hur taxonomiska grupper över artnivån förändras. Dess bevis hämtas ofta från fossilregistret och DNA-jämförelser för att rekonstruera hur olika organismer kan vara släkt.
                    </li>
                </ul>
                <p>
                    Nuförtiden erkänner även de flesta kreationister att mikroevolutionen har upprätthållits av tester i laboratoriet (som i studier av celler, växter och fruktflugor) och i fält (som i Grants studier av utvecklandet av Galapagosfinkarnas olika näbbformer). Naturligt urval och andra mekanismer (kromosomförändringar, symbios och hybridisering) kan driva på djupgående förändringar i populationer över tid.
                </p>
                <p>
                    Makroevolutionära studier involverar slutsatser från studiet av fossiler och DNA snarare än direkt observation. Men inom de historiska vetenskaperna (som inkluderar astronomi, geologi och arkeologi, såväl som evolutionsbiologi), kan hypoteser fortfarande testas genom att kontrollera om de överensstämmer med fysiska bevis och om de leder till verifierbara förutsägelser om framtida upptäckter. Till exempel innebär evolutionen att man mellan de tidigaste kända förfäderna till människor (ungefär fem miljoner år gamla) och utseendet på anatomiskt moderna människor (för ungefär 200 000 år sedan), bör hitta en följd av hominider med drag som gradvis blir mindre aplika och mer moderna , vilket verkligen är vad fossilregistret visar. Man borde inte hitta (och har inte hittat) moderna mänskliga fossiler inbäddade i skikt från juraperioden (65 miljoner år sedan). Evolutionsbiologin gör rutinmässigt förutsägelser som är mycket mer raffinerade och exakta än så här, och forskare testar dem ständigt.
                </p>

                <hr />
                <h3>
                    <span class="text-rose-400">
                        Myt 5:
                    </span>
                    Arter är oföränderliga.
                </h3>
                <p>
                    Uppfattningen att levande arter av djur och växter är oföränderliga är förmodligen lika gammal som mänskligheten. Vid en första anblick ger kanske inte den naturliga världen intrycket av att arter utvecklas. Detta beror på att mänskliga livslängder är för korta för att bevittna dessa händelser direkt. Artbildning kan ta århundraden. Dessutom kan det vara svårt att känna igen en ny art under ett formationsskede eftersom biologer ibland är oense om hur man bäst definierar en art.
                </p>
                <p>
                    Ändå innehåller den vetenskapliga litteraturen rapporter om uppenbara artbildningar hos växter, insekter och maskar. I de flesta av dessa experiment utsatte forskare organismer för olika typer av urval – för anatomiska skillnader, parningsbeteenden, habitatpreferenser och andra egenskaper – och fann att de hade skapat populationer av organismer som inte förökade sig med utomstående.
                </p>
                <p>
                    Vad gäller organismer med korta generationstider (t. ex. bakterier eller fruktflugor) kan vi faktiskt observera evolution under loppet av ett experiment. Se <a href="https://www.youtube.com/watch?v=plVk4NVIUh8" target="_blank" rel="noopener noreferrer">Utvecklingen av bakterier på en "mega-platta" petriskål</a>. I ett annat exempel visade William R. Rice från University of New Mexico och George W. Salt från University of California, Davis, att om de sorterade en grupp fruktflugor efter deras preferens för vissa miljöer och födde upp dessa flugor separat över 35 generationer, skulle de resulterande flugorna inte föröka sig med dem från en helt annan miljö. I vissa fall har biologer observerat evolution som sker i naturen (t.ex. myggpopulationer som utvecklar snabb resistens mot DDT, antibiotikaresistenta bakterier och läkemedelsresistent HIV.)
                </p>

                <hr />
                <h3>
                    <span class="text-rose-400">
                        Myt 6:
                    </span>
                    Användning eller obruk av ett organ under ens livstid, kan ärvas av dess avkomma och leda till en förändring i en art.
                </h3>

                <p>
                    Lamarck föreslog en evolutionsteori baserad på principen att fysiska förändringar i organismer under deras livstid – såsom större utveckling av ett organ eller en del av ett organ genom ökad användning – skulle kunna överföras till deras avkomma.
                </p>
                <p>
                    Biologer definierar en förvärvad egenskap som en egenskap som har utvecklats under en individs liv i de somatiska cellerna (kroppscellerna), vanligtvis som ett direkt svar på någon yttre förändring i miljön eller genom att en del används eller inte används. Nedärvningen av en sådan egenskap innebär att den återkommer hos en eller flera individer i nästa eller i efterföljande generationer, men det finns inga bevis som stöder detta fall.
                </p>
            </section>





            <hr class="mt-10 mb-40" />

            <section id="s4">
                <h2 id="s4t">
                    Felaktiga uppfattningar
                </h2>

                <p>
                    Alla lärare, även de i samhällen som stödjer undervisning i evolution, bör komma ihåg att vissa elever uppfattar evolution som oförenlig med religiös tro. Även om många religiösa åsikter är förenliga med evolutionsteorin och även om många religiösa organisationer stödjer undervisning om evolution, kan eleverna vara omedvetna om dessa fakta.
                </p>
                <p>
                    Uppfattningen om en krock mellan vetenskap och elevers övertygelse kan orsaka obehag i klassen. För att göra dessa elever mer bekväma kan lärare hjälpa dem att förstå att evolution, liksom all vetenskap, försöker förklara naturliga saker genom naturliga orsaker. Det behöver inte anses vara oförenligt med deras tro eftersom vetenskapen inte förlitar sig på, och inte kan utvärdera eller testa, övernaturliga förklaringar. Samtidigt bör din undervisning spegla det faktum att evolution är den enda vetenskapligt giltiga och accepterade teorin som förklarar våra observationer av den biologiska världen. Alternativa "teorier" som har föreslagits för att infogas i den naturvetenskapliga läroplanen har inte fått stöd av giltig vetenskap.
                </p>
                <p>
                    Nedan presenteras några av de vanliga missuppfattningarna om evolution och hur lärare kan hantera dem.
                </p>

                <h3>
                    <span class="text-rose-400">
                        Missuppfattning 1:
                    </span>
                    Evolutionen är en teori om livets ursprung.
                </h3>
                <p>
                    Evolutionsteorin omfattar idéer och bevis angående livets ursprung (t.ex. om det hände nära ett djuphavshål eller inte, vilka organiska molekyler som kom först, etc.), men detta är inte det centrala fokuset för evolutionsteorin. Det mesta av evolutionsbiologin handlar om hur livet förändrades efter dess uppkomst. Oavsett hur livet började förgrenades det efteråt och diversifierades, och de flesta studier av evolution fokuserar på dessa processer.
                </p>

                <hr />
                <h3>
                    <span class="text-rose-400">
                        Missuppfattning 2:
                    </span>
                    Evolutionsteorin antyder att livet utvecklades (och fortsätter att utvecklas) slumpmässigt eller av en slump.
                </h3>
                <p>
                    Vissa viktiga evolutionsmekanismer är icke-slumpmässiga och dessa gör den övergripande processen icke-slumpmässig.
                </p>
                <p>
                    Till exempel resulterar naturligt urval i anpassningar (t.ex. fladdermössens förmåga att ekolokalisera). Sådana fantastiska anpassningar kom uppenbarligen inte till "av en slump". De utvecklades via en kombination av slumpmässiga och icke-slumpmässiga processer.
                </p>
                <p>
                    Mutationsprocessen, som genererar genetisk variation, är slumpmässig, men urvalet är icke-slumpmässigt. Urvalet gynnar varianter som bättre kan överleva och reproducera sig (t.ex. att navigera i mörkret). Under många generationer av slumpmässiga mutationer och icke-slumpmässigt urval utvecklas komplexa anpassningar.
                </p>

                <hr />
                <h3>
                    <span class="text-rose-400">
                        Missuppfattning 3:
                    </span>
                    Enskilda organismer kan utvecklas genom mutationer under en enda livslängd.
                </h3>
                <p>
                    Evolutionär förändring är baserad på förändringar i den genetiska sammansättningen av populationer över tid. Populationer, inte enskilda organismer, utvecklas genom mutationer. Nya genvarianter (dvs alleler) produceras genom slumpmässig mutation, och under loppet av många generationer kan naturligt urval gynna fördelaktiga varianter, vilket gör att de blir vanligare i populationen.
                </p>
                

                <h3>
                    <span class="text-rose-400">
                        Missuppfattning 4:
                    </span>
                    Eftersom evolutionen går långsamt kan människor inte påverka den.
                </h3>
                <p>
                    Eftersom människor orsakar stora förändringar i miljön, är vi ofta initiativtagare till andra organismers evolution. Några exempel på evolution orsakad av människan:
                </p>
                <ul>
                    <li>
                        Insekter såsom vägglöss och växtskadegörare har utvecklat resistens mot bekämpningsmedel.
                    </li>
                    <li>
                        Bakterier, HIV, malaria och cancerceller har utvecklat resistens mot mediciner.
                    </li>
                </ul>

                <hr />
                <h3>
                    <span class="text-rose-400">
                        Missuppfattning 5:
                    </span>
                    Människor utvecklas inte för närvarande.
                </h3>
                <p>
                    Vi har uppfunnit medicinska behandlingar, jordbruksmetoder och ekonomiska strukturer som väsentligt förändrar utmaningarna för reproduktion och överlevnad som moderna människor står inför. Vissa har hävdat att sådana tekniska framsteg gör att vi har slutat utvecklas.
                </p>
                <p>
                    Så är dock inte fallet. Människor står fortfarande inför utmaningar för överlevnad och reproduktion, bara inte samma som vi gjorde för 20 000 år sedan. Riktningen, men inte det faktum att vår evolution har förändrats. Till exempel, moderna människor som bor i tätbefolkade områden står inför större risker för epidemiska sjukdomar än våra jägare-samlande förfäder (som inte kom i nära kontakt med så många människor dagligen) - och denna situation gynnar spridningen av gener som skyddar mot dessa sjukdomar. Forskare har upptäckt många sådana fall i den senaste mänskliga evolutionen. Utforska dessa länkar för att lära dig mer om:
                </p>
                <ul>
                    <li>
                        <a href="https://evolution.berkeley.edu/evo-news/evolving-altitude-aptitude/" target="_blank" rel="noopener noreferrer">
                            Anpassningar till hög altitud
                        </a>
                    </li>
                    <li>
                        <a href="https://evolution.berkeley.edu/evo-news/ghosts-of-epidemics-past/" target="_blank" rel="noopener noreferrer">
                            Tidigare epidemiers spöken
                        </a>
                    </li>
                    <li>
                        <a href="https://evolution.berkeley.edu/evo-news/got-lactase/" target="_blank" rel="noopener noreferrer">
                            Utveckling av laktostolerans hos människor
                        </a>
                    </li>
                </ul>

                <hr />
                <h3>
                    <span class="text-rose-400">
                        Missuppfattning 6:
                    </span>
                    Naturligt urval involverar organismer som försöker anpassa sig.
                </h3>
                <p>
                    Naturligt urval leder till anpassning av arter över tid, men processen innebär inte ansträngning, försök eller vilja. Naturligt urval är ett naturligt resultat av genetisk variation i en population och det faktum att vissa av dessa varianter kanske kan lämna fler avkommor i nästa generation än andra varianter. Den genetiska variationen genereras av slumpmässig mutation - en process som är opåverkad av vad organismer i befolkningen vill ha eller vad de "försöker" göra. Antingen har en individ gener som är tillräckligt bra för att överleva och föröka sig, eller så har den inte; den kan inte få rätt gener genom att "försöka".
                </p>
                <p>
                    Till exempel utvecklar bakterier inte resistens mot våra antibiotika eftersom de "försöker" så mycket. Istället utvecklas resistens eftersom slumpmässig mutation råkar generera vissa individer som bättre kan överleva antibiotika, och dessa individer kan reproducera sig mer än andra och lämnar efter sig mer resistenta bakterier.
                </p>

                <hr />
                <h3>
                    <span class="text-rose-400">
                        Missuppfattning 7:
                    </span>
                    De mest anpassade organismerna i en population är de som är starkast, friskast, snabbast och/eller störst.
                </h3>
                <p>
                    I evolutionära termer har fitness en helt annan betydelse än ordets vardagliga betydelse. En organisms evolutionära kondition indikerar inte dess hälsa, utan snarare dess förmåga att få in sina gener till nästa generation. Ju mer fertil avkomma en organism lämnar i nästa generation, desto bättre är den. Detta korrelerar inte alltid med styrka, hastighet eller storlek.
                </p>
                <p>
                    Till exempel kan en liten hanfågel med ljusa stjärtfjädrar lämna efter sig fler avkommor än en starkare, mattare hane, och en spinkig växt med stora fröskidor kan lämna efter sig fler avkommor än ett större exemplar - vilket betyder att den ynka fågeln och den spinkiga plantan har högre evolutionär kondition än sina starkare, större motsvarigheter.
                </p>
                

                <hr />
                <h3>
                    <span class="text-rose-400">
                        Missuppfattning 8:
                    </span>
                    Luckor i fossilregistret motbevisar evolutionen.
                </h3>
                <p>
                    Även om det är sant att det finns luckor i fossilregistret, utgör detta inte bevis mot evolutionsteorin. Forskare utvärderar hypoteser och teorier genom att ta reda på vad vi skulle förvänta oss att observera om en viss idé var sann och sedan se om dessa förväntningar stämmer. Om evolutionsteorin var sann, skulle vi förvänta oss att det skulle ha funnits övergångsformer som förbinder gamla arter med deras förfäder och ättlingar.
                </p>
                <p>
                    Denna förväntning har infriats. Paleontologer har hittat många fossil med övergångsegenskaper, och nya fossil upptäcks hela tiden. Men om evolutionsteorin vore sann, skulle vi inte förvänta oss att alla dessa former skulle bevaras i fossilregistret. Många organismer har inga kroppsdelar som fossiliserar bra, miljöförhållandena för att bilda bra fossiler är sällsynta, och naturligtvis har vi bara upptäckt en liten andel av fossilerna som kan bevaras någonstans på jorden. Så forskare förväntar sig att det för många evolutionära övergångar kommer att finnas luckor i fossilregistret.
                </p>

                <hr />
                <h3>
                    <span class="text-rose-400">
                        Missuppfattning 9:
                    </span>
                    Evolution och religion är oförenliga.
                </h3>
                <p>
                    På grund av att vissa individer och grupper ivrigt deklarerar sin tro är det lätt att få intrycket att vetenskapen (som inkluderar evolution) och religionen är i krig. Men tanken att man alltid måste välja mellan vetenskap och religion är felaktig. Människor med många olika trosuppfattningar och nivåer av vetenskaplig expertis ser ingen som helst motsättning mellan vetenskap och religion. För många av dessa människor handlar vetenskap och religion helt enkelt om olika världar. Vetenskapen handlar om naturliga orsaker till naturfenomen, medan religion handlar om föreställningar som ligger bortom den naturliga världen. Naturligtvis motsäger vissa religiösa övertygelser uttryckligen vetenskapen (t.ex. tron att världen och allt liv på den skapades bokstavligen på sex dagar står i konflikt med evolutionsteorin); dock har de flesta religiösa grupper ingen konflikt med evolutionsteorin eller andra vetenskapliga rön. Faktum är att många religiösa människor, inklusive teologer, känner att en djupare förståelse av att naturen faktiskt berikar deras tro. Dessutom finns det i det vetenskapliga samfundet tusentals vetenskapsmän som är religiösa och som också accepterar evolutionen.
                </p>
            </section>


            <hr class="mt-10 mb-40" />



            <section id="s5">
                <h2 id="s5t">
                    Användbara länkar
                </h2>
                <ul>
                    <li>
                        <a href="https://www.youtube.com/watch?v=hOfRN0KihOU&list=RDLVmZt1Gn0R22Q&index=4" target="_blank" rel="noopener noreferrer">
                            How Evolution works
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=0SCjhI86grU" target="_blank" rel="noopener noreferrer">
                            What is Natural Selection?
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=XyTcINLKq4c" target="_blank" rel="noopener noreferrer">
                            Four billion years of evolution in six minutes
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=mZt1Gn0R22Q" target="_blank" rel="noopener noreferrer">
                            Myths and misconceptions about evolution
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=w4sLAQvEH-M" target="_blank" rel="noopener noreferrer">
                            The Longest-Running Evolution Experiment
                        </a>
                    </li>
                </ul>
            </section>


            <hr class="mt-10 mb-40" />


            <section id="s6">
                <h2 id="s6t">
                    Referenser:
                </h2>
                <ul>
                    <li>
                        <a href="https://www.sciencesfp.com/evolutionary-theories.html" target="_blank" rel="noopener noreferrer">
                            Evolutionary Theories
                        </a>
                    </li>
                    <li>
                        <a href="https://www.open.edu/openlearn/nature-environment/natural-history/evolution-through-natural-selection/content-section-0?intro=1" target="_blank" rel="noopener noreferrer">
                            Evolution through natural selection
                        </a>
                    </li>
                    <li>
                        <a href="https://evolution.berkeley.edu/" target="_blank" rel="noopener noreferrer">
                            Understanding Evolution
                        </a>
                    </li>
                    <li>
                        <a href="https://www.newscientist.com/article/dn13640-evolution-myths-evolution-produces-perfectly-adapted-creatures/" target="_blank" rel="noopener noreferrer">
                            Evolution myths: Evolution produces perfectly adapted creatures
                        </a>
                    </li>
                    <li>
                        <a href="https://blogs.scientificamerican.com/science-sushi/evolution-a-game-of-chance-observations/" target="_blank" rel="noopener noreferrer">
                            Evolution: A Game of Chance | Observations
                        </a>
                    </li>
                    <li>
                        <a href="https://undsci.berkeley.edu/article/0_0_0/howscienceworks_19" target="_blank" rel="noopener noreferrer">
                            Understanding Science
                        </a>
                    </li>
                    <li>
                        <a href="http://www.talkorigins.org/faqs/evolution-fact.html" target="_blank" rel="noopener noreferrer">
                            Evolution is a Fact and a Theory
                        </a>
                    </li>
                    <li>
                        <a href="http://www.talkorigins.org/faqs/faq-misconceptions.html" target="_blank" rel="noopener noreferrer">
                            Five Major Misconceptions about Evolution
                        </a>
                    </li>
                    <li>
                        <a href="https://labs.minutelabs.io/evolution-simulator/#/s/50/viewer?intro=1" target="_blank" rel="noopener noreferrer">
                            Evolution Simulator
                        </a>
                    </li>
                    <li>
                        <a href="https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_en.html" target="_blank" rel="noopener noreferrer">
                            Natural Selection Simulation
                        </a>
                    </li>
                    <li>
                        <a href="https://www.sciencefocus.com/comment/evolution-is-most-certainly-a-theory-but-certainly-not-just-a-theory/" target="_blank" rel="noopener noreferrer">
                            15 answers to creationists
                        </a>
                    </li>
                    <li>
                        <a href="https://www.scientificamerican.com/article/15-answers-to-creationist/" target="_blank" rel="noopener noreferrer">
                            15 answers to creationists
                        </a>
                    </li>
                    <li>
                        <a href="https://home.csulb.edu/~cwallis/100/evolution/evolution_and_creationism.html" target="_blank" rel="noopener noreferrer">
                            Evolution and Creationism From Core Questions in Philosophy: A Text With Readings
                        </a>
                    </li>
                    <li>
                        <a href="https://www.biologysimulations.com/evolution" target="_blank" rel="noopener noreferrer">
                            Evolution Simulation
                        </a>
                    </li>
                    <li>
                        <a href="https://www.evoinfo.org/weasel.html" target="_blank" rel="noopener noreferrer">
                            Evolutionary Informatics Lab
                        </a>
                    </li>
                    <li>
                        <a href="http://www.evogeneao.com/evo-gene.html" target="_blank" rel="noopener noreferrer">
                            Evogeneao
                        </a>
                    </li>
                    <li>
                        <a href="http://www.evogeneao.com/en/explore/tree-of-life-explorer" target="_blank" rel="noopener noreferrer">
                            Evogeneao - Tree of Life
                        </a>
                    </li>
                    <li>
                        <a href="http://tolweb.org/tree/" target="_blank" rel="noopener noreferrer">
                            Tree of Life - Web project
                        </a>
                    </li>
                    <li>
                        <a href="https://www.britannica.com/science/Lamarckism/Experimental-testing-of-Lamarckism" target="_blank" rel="noopener noreferrer">
                            Experimental testing of Lamarckism
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=x73bsC7WIsE" target="_blank" rel="noopener noreferrer">
                            Theories of evolution Lamarck vs Darwin
                        </a>
                    </li>
                    <li>
                        <a href="https://www.cornell.edu/video/darwinian-revolutions-3-lamarcks-theory" target="_blank" rel="noopener noreferrer">
                            Lamarck's Theory
                        </a>
                    </li>
                    <li>
                        <a href="https://blogs.iu.edu/sciu/2017/09/26/why-are-there-still-apes/" target="_blank" rel="noopener noreferrer">
                            Conversations in Science at Indiana University
                        </a>
                    </li>
                    <li>
                        <a href="http://pages.nbb.cornell.edu/websterlab/10%20Misunderstandings%20-%20SHORT.pdf" target="_blank" rel="noopener noreferrer">
                            Ten Misunderstandings About Evolution
                        </a>
                    </li>
                    <li>
                        <a href="https://www.irishtimes.com/opinion/evidence-does-not-support-the-theory-of-evolution-1.318354" target="_blank" rel="noopener noreferrer">
                            Evidence does not support the theory of evolution
                        </a>
                    </li>
                </ul>
            </section>
            

        </section>
    </div>
</template>