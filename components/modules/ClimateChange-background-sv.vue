<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="climatechange-bg-et" />
        </ClientOnly>



        <section class="e-article" lang="sv" style="hyphens: auto;">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Klimatförändringar</h1>
            <h5 class="font-normal uppercase leading-tight">Vetenskaplig bakgrundsinformation</h5>
        
            <section id="s-1">
                <h2 id="s-1t">1. Vad är klimatförändringar och vilka är dess orsaker?</h2>
                <p>
                    Klimatförändringar avser långsiktiga förändringar i temperaturer och vädermönster. 
                </p>
                <!-- <UiContentImage
                    src="https://evidence.onkel.ee/assets/c-change__the-greenhouse-effect.webp"
                    credits="From Le Treut et al., 2007"
                    :elevated="true">
                    <template #caption>
                        <b>Figure 1.</b> A simplified diagram illustrating the greenhouse effect
                    </template>
                </UiContentImage> -->
                <p>
                    Vi antar NASA:s definition av klimatförändringar som ”ett brett spektrum av globala fenomen skapade främst av förbränning av fossila bränslen, som tillför värmefångande gaser till jordens atmosfär. Dessa fenomen inkluderar de ökade temperaturtrenderna som beskrivs av global uppvärmning, men omfattar också förändringar som höjning av havsnivån; förlust av ismassa på Grönland, Antarktis, Arktis och bergsglaciärer över hela världen; skiftningar i växt blomning; och extrema väderhändelser”. Nuförtiden är många aktivister, vetenskapsmän, författare och politiker hävdar att vi bör ersätta termen "klimatförändringar" med termen 'klimatkris'.
                </p>
                <p>
                    Men hur sker klimatförändringarna? För att förklara det är nödvändigt att säga några ord om ”växthuseffekten”. Växthuseffekten är den naturliga processen som värmer jordens yta. Det kallas växthuseffekten på grund av utbytet av inkommande och utgående strålning som värmer planeten fungerar på samma sätt som ett växthus. Som ett växthus är konstruerad av glas, låter den solljus tränga igenom utsidan och värma luften och växter inuti. Värmen som inte absorberas av växter fångas av glaset och kan inte fly. Under dagen kommer solljus hela tiden genom glaset och tillför mer och mer energi så att insidan blir varmare och varmare (och fortsätter att hålla sig varm efter att solen gått ner). Jordens atmosfär fungerar på ett liknande sätt. Solen skiner genom jordens atmosfär och jordens yta värms upp. En del av solens energi reflekteras direkt tillbaka till rymden, resten absorberas av land, hav och atmosfären och förvandlas till värme. Värmen fångas av gaser som koldioxid, metan och andra "växthusgaser". Dessa gaser gör ett kritiskt jobb för att se till att atmosfären håller tillräckligt värme för att stödja alla slags liv på planeten. Utan dem skulle jorden förlora så mycket värme att livet som vi känner det skulle vara omöjligt. Även om växthuseffekten är ett naturligt förekommande fenomen, kan effekten förstärkas av utsläpp av växthusgaser till atmosfären till följd av mänsklig aktivitet. I det fallet fångar växthusgaserna för mycket av solens energi som värme och stör det naturliga system som reglerar vårt klimat. Saker och ting blir hetare och hetare och vi börjar se mer och mer extremt väder och andra effekter. Även små förändringar i den globala medeltemperaturen kan orsaka stora och farliga förändringar i klimatet. Tänk bara på skillnaden mellan 0 och 1 grad Celsius – att en grad betyder skillnaden mellan is och vatten.
                </p>
                <p>
                    <b>Gaser som bidrar till växthuseffekten inkluderar:</b>
                </p>
                <dl>
                    <dt class="font-bold">Vattenånga:</dt>
                    <dd>Den är viktigast av allt. Vattenånga ökar när jordens atmosfär värms upp, men den skapar också moln och nederbörd, som är några av de viktigaste regleringsmekanismerna till växthuseffekten.</dd>
                    <dt class="font-bold">Koldioxid (CO₂):</dt>
                    <dd>En mindre men mycket viktig komponent i atmosfären, koldioxid frigörs genom naturliga processer som andning och vulkanutbrott och genom mänskliga aktiviteter som avskogning och förbränning av fossila bränslen. Människor har ökat CO2 -koncentrationen i atmosfären med 48 % sedan den industriella revolutionen började. Detta är den viktigaste långlivade "pådrivningen" av klimatförändringarna.</dd>
                    <dt class="font-bold">Metan (CH₄):</dt>
                    <dd>En kolvätgas CH₄ som produceras både genom naturliga källor och mänskliga aktiviteter, inklusive nedbrytning av avfall i soptippar, jordbruk och särskilt risodling. Stor andel av metanutsläppen kommer från idisslarna (nötkreatur och får) vid deras fodersmältning. På molekyl-för-molekyl-basis är metan en mycket mer aktiv växthusgas än koldioxid, men också en som är mycket mindre förekommande i atmosfären.</dd>
                    <dt class="font-bold">Lustgas (dikväveoxid N₂O):</dt>
                    <dd>En kraftfull växthusgas som produceras av markberedningsmetoder, särskilt användningen av kommersiella och organiska gödningsmedel, förbränning av fossila bränslen, produktion av salpetersyra och förbränning av biomassa. I tillverkningen av konstgödsel sker också utsläpp av lustgas.</dd>
                    <dt class="font-bold">Klorfluorkolväten (CFC-d):</dt>
                    <dd>Syntetiska föreningar helt av industriellt ursprung som används i ett antal tillämpningar, men nu till stor del reglerade i produktion och utsläpp till atmosfären av internationella överenskommelse om deras förmåga att bidra till förstörelsen av ozonskiktet.</dd>
                </dl>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/c-change__greenhouse-gas-emission-75-20.webp"
                    credits="From NOAA Global Monitoring Laboratory"
                    :elevated="true" class="mt-8">
                    <template #caption>
                        <span class="bg-rose-100"><b>Joonis 2.</b> Kasvuhoonegaaside emissioon atmosfääri aastatel 1975-2020</span>
                    </template>
                </UiContentImage>
                <section class="e-card mt-8">
                    <h4 class="mt-2">Referenser:</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://climate.nasa.gov/causes/" target="_blank" rel="noopener noreferrer">https://climate.nasa.gov/causes/</a></li>
                        <li><a href="https://www.un.org/en/climatechange/what-is-climate-change" target="_blank" rel="noopener noreferrer">https://www.un.org/en/climatechange/what-is-climate-change</a></li>
                        <li><a href="https://gml.noaa.gov/about/networks.html" target="_blank" rel="noopener noreferrer">https://gml.noaa.gov/about/networks.html</a></li>
                        <li><a href="https://archive.ipcc.ch/publications_and_data/ar4/wg1/en/faq-1-3-figure-1.html" target="_blank" rel="noopener noreferrer">https://archive.ipcc.ch/publications_and_data/ar4/wg1/en/faq-1-3-figure-1.html</a></li>
                        <li><a href="https://www.youtube.com/watch?app=desktop&v=3JX-ioSmNW8 " target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?app=desktop&v=3JX-ioSmNW8</a></li>
                        <li><b>Ramanathan, V.</b>, <b>Feng, Y.</b> (2009). Luftföroreningar, växthusgaser och klimat   förändring: Globala och regionala perspektiv. Atmosfärisk miljö , 43(1), 37-50.</li>
                    </ul>
                </section>
            </section>
            
            <hr class="mt-10 mb-40" />

            <section id="s-2">
                <h2 id="s-2t">2. Vilka är effekterna av klimatförändringar?</h2>
                <p>
                    Intergovernmental Panel on Climate Change (IPCC), som omfattar mer än 1 300 forskare från olika länder hänvisar till att omfattningen av klimatförändringens effekter på enskilda regioner kommer att variera över tid och med förmågan hos olika samhälleliga och miljömässiga system att mildra eller anpassa sig till förändringar.
                </p>
                <p>
                    <b>Effekterna av klimatförändringar varierar och inkluderar:</b>
                </p>
                <ul>
                    <li>
                        Stigande global temperatur: Med tanke på de globala havens enorma storlek och värmekapacitet krävs det en enorm mängd värmeenergi för att höja jordens genomsnittliga årliga yttemperatur ens en liten mängd. Den ungefär 2 grader Fahrenheit (1 grad Celsius) ökningen av den globala genomsnittliga yttemperaturen som har inträffat sedan den förindustriella eran (1880-1900) kan tyckas liten, men det innebär en betydande ökning av ackumulerad värme.
                    </li>
                    <li>
                        Stigande havsnivåer
                        <UiContentImage
                            src="https://evidence.onkel.ee/assets/c-change__sea-level-rise.webp"
                            credits="From NOAA Climate.gov image based on analysis and data from Philip Thompson, University of Hawaii Sea Level Center"
                            :elevated="true" class="mt-8">
                            <template #caption>
                                <span class="bg-rose-100"><b>Joonis 3.</b> Meretaseme tõus aastast 1995-2020</span>
                            </template>
                        </UiContentImage>
                    </li>
                    <li>
                        Krympande bergsglaciärer
                    </li>
                    <li>
                        Is smälter snabbare än vanligt på Grönland, Antarktis och Arktis
                    </li>
                    <li>
                        Torka eller ökad nederbörd beroende på planetens region
                    </li>
                    <li>
                        Vissa laboratorieförsök tyder på att förhöjda CO₂-nivåer kan öka växternas tillväxt. Andra faktorer, såsom ändrade temperaturer, ozon och vatten- och näringsbegränsningar, kan dock motverka eventuella ökningar av skörden. Om optimala temperaturintervall för vissa grödor överskrids, kan tidigare möjliga skördevinster minska eller även tvärvända.
                    </li>
                    <li>
                        Extrema klimat, som torka, översvämningar och extrema temperaturer, kan leda till skördeförluster och hota livsmedelsförsörjningen i samhällen över hela världen. Beroende på gröda och ekosystem kan ogräs, skadedjur och svampar också frodas under varmare temperaturer och blötare klimat.
                    </li>
                    <li>
                        Forskning har visat att temperaturökning kan också minska näringsvärdet hos de flesta matgrödor genom att minska koncentrationerna av protein och viktiga mineraler i de flesta växtarter.
                    </li>
                    <li>
                        Förändringar i blom- och växternas blomningstider
                    </li>
                    <li>
                        Förändrade klimat orsakar direkt och indirekt stress för djur över hela världen. Många arter närmar sig – eller har redan nått – gränsen för vart de kan gå för att hitta gästvänliga klimat. I polarområdena kämpar nu djur som isbjörnar som lever på polarisen för att överleva när isen smälter.
                    </li>
                    <li>
                        Värmande havstemperaturer smälter polarisen, skiftar havsströmmar och fiskvandringar, vilket leder till korallblekning och att korallrev dör.
                    </li>
                </ul>
                <section class="e-card mt-8">
                    <h4 class="mt-2">Referenser:</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://climatekids.nasa.gov/climate-change-meaning/" target="_blank" rel="noopener noreferrer">https://climatekids.nasa.gov/climate-change-meaning/</a></li>
                        <li><a href="https://climate.nasa.gov/effects/" target="_blank" rel="noopener noreferrer">https://climate.nasa.gov/effects/</a></li>
                        <li><a href="https://www.un.org/en/climatechange/what-is-climate-change" target="_blank" rel="noopener noreferrer">https://www.un.org/en/climatechange/what-is-climate-change</a></li>
                        <li><a href="https://www.un.org/en/global-issues/climate-change" target="_blank" rel="noopener noreferrer">https://www.un.org/en/global-issues/climate-change</a></li>
                        <li><a href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature" target="_blank" rel="noopener noreferrer">https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature</a></li>
                        <li><a href="https://www.nature.org/en-us/what-we-do/our-priorities/tackle-climate-change/climate-change-stories/climate-change-frequently-asked-questions/#threats" target="_blank" rel="noopener noreferrer">https://www.nature.org/en-us/what-we-do/our-priorities/tackle-climate-change/climate-change-stories/climate-change-frequently-asked-questions/#threats</a></li>
                        <li><a href="https://www.ipcc.ch/sr15/chapter/chapter-3" target="_blank" rel="noopener noreferrer">https://www.ipcc.ch/sr15/chapter/chapter-3</a></li>
                        <li><a href="https://www.youtube.com/watch?v=rVjp3TO_juI&t=3s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=rVjp3TO_juI&t=3s</a></li>
                        <li><b>Ramanathan, V.</b>, <b>Feng, Y.</b> (2009). Luftföroreningar, växthusgaser och klimatförändringar: Globala och regionala perspektiv. Atmosfärisk miljö , 43 (1), 37-50.</li>
                    </ul>
                </section>
            </section>

            <!-- <hr class="mt-10 mb-40" />
            <h2 id="section-3">3. Klimatförändringar: En socio-vetenskaplig fråga</h2>
            <p>I vetenskapens historia har det funnits många exempel där motsägelsefulla åsikter om specifika vetenskapliga frågor spridits till allmänheten. Klimatförändringar är ett exempel där människor och grupper intar och försvarar olika ståndpunkter. Även om klimatvetenskapen nu har fastställt att den globala uppvärmningen sker, att mänskliga aktiviteter bidrar till denna uppvärmning och att nuvarande och framtida uppvärmning visar negativa effekter på både ekologiska och sociala system (National Research Council, 2010), en betydande del av Den amerikanska allmänheten förblir ambivalent eller obekymrad (Leiserowitz, Maibach, Roser-Renouf, & Hmielowski, 2012) och många beslutsfattare (särskilt i USA) förnekar nödvändigheten av att vidta åtgärder för att minska koldioxidutsläppen (Brownstein, 2010).</p>
            <p>Klimatvetenskapliga förnekelser accepterar inte bevis som stöder förekomsten av klimatförändringar, mänsklighetens roll i att orsaka den senaste tidens globala uppvärmning och/eller svårighetsgraden av klimatpåverkan. Skepsis, kontrarism, oliktänkande, tvivel eller anti-klimatförändringar är några av de termer som har använts för att karakterisera klimatvetenskapliga förnekelser (Cook, 2017).</p>
            <p>Desinformation om klimatet är orsaken till allmänhetens missuppfattningar om klimatförändringar (McCright och Dunlap, 2010). Därför är det många frågor, t.ex.</p>
            <ul>
                <li>
                    Orsakar en ökning av jordens temperatur en ökning av koldioxid eller orsakar en ökning av koldioxid en ökning av jordens temperatur?
                </li>
                <li>
                    Ger mänskliga aktiviteter lika, mindre eller mer koldioxid än naturliga processer?
                </li>
                <li>
                    Förändras klimatet över tiden? Om ja, är klimatförändringen en tillfällig förändring som de tidigare?
                </li>
                <li>
                    Är massutrotningen av arter nuförtiden ett resultat av klimatförändringar eller en vanlig företeelse under åren?
                </li>
            </ul>
            <p>
                Dessa frågor berör de medborgare som är oroliga för planetens framtid och de nya generationerna. Massmedia spelar en central roll i debatter om klimatvetenskap och policyskapande, som noteras i nästa bidrag. Maxwell Boykoff bygger på sin långa erfarenhet av att analysera hur media representerar klimatförändringar för att tillhandahålla en analys av de många faktorer som bidrar till att "outlier voices" – skeptiker, kontrarister och förnekare – får omotiverad mediesynlighet och därmed inflytande på politiska debatter.
            </p>
            <section class="e-card mt-8">
                <h4 class="mt-2">Referenser:</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.youtube.com/watch?app=desktop&v=u9KxE4Kv9A8" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?app=desktop&v=u9KxE4Kv9A8</a></li>
                    <li><a href="https://www.researchgate.net/publication/274306932_Climate_Change_Skepticism_and_Denial_An_Introduction" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/publication/274306932_Climate_Change_Skepticism_and_Denial_An_Introduction</a></li>
                    <li><b>Karakas, L. D.</b>, & <b>Mitra, D.</b> (2020). Troende vs förnekare: Klimatförändringar och miljöpolitisk polarisering . European Journal of Political Economy , 65, 101948.</li>
                    <li><b>Corry, O.</b>, & <b>Jørgensen, D.</b> Bortom "förnekare" och "troende": Mot en karta över klimatförändringarnas politik. Global Environmental Change , 32, 165-174.</li>
                    <li><b>Cook, J.</b> Förstå och motverka klimatvetenskapligt förnekande . Journal & Proceedings of the Royal Society of New South Wales, 150.</li>
                    <li><b>McCright, A. M.</b> & <b>Dunlap, R. E.</b> (2010). Antireflexivitet: Den amerikanska konservativa rörelsens framgång med att undergräva klimatvetenskap och politik. Theory, Culture & Society , 27(2-3), 100-133.</li>
                </ul>
            </section> -->



            <hr class="mt-10 mb-40" />

            <section id="s-3">
                <h2 id="s-3t">3. Tekniker för vetenskapsförnekande</h2>
                <p>
                    Cook (2020) har kategoriserat de olika argument som föreslås av klimatförändringsförnekare i fem huvudkategorier: “Fake Experts; Logical Fallacies; Impossible Expectations; Cherry Picking; Conspiracy Theories” som förklaras nedan.
                </p>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/c-change__flicc.webp"
                    credits=""
                    :elevated="true" class="mt-8">
                    <template #caption>
                    </template>
                </UiContentImage>
                <dl>
                    <dt class="font-bold">
                        Falska experter:
                    </dt>
                    <dd>
                        Det handlar om talespersoner som förmedlar intryck av expertis i ett ämne och ändå har lite relevant expertis. Global Warming Petition Project är den typiska formen av denna teknik inom klimatdesinformation, med 31 000 undertecknare av en online-petition som ifrågasätter människans orsakad global uppvärmning. Emellertid har 99,9 % av undertecknarna, medan de har en naturvetenskaplig examen, ingen expertis inom klimatvetenskap.
                    </dd>
                    <dt class="font-bold mt-4">
                        Logiska felaktigheter
                    </dt>
                    <dd>
                        Argument utformade för att övertyga människor består av en eller flera premisser, som inte leder logiskt till en slutsats.
                        <br />
                        Till exempel, argumentet att klimatet har förändrats naturligt tidigare, därför måste moderna klimatförändringar vara naturliga, innehåller det outtalade falska antagandet att eftersom naturliga faktorer har orsakat klimatförändringar i det förflutna, då måste de alltid vara orsaken till klimatförändringarna, när mänsklig påverkan också kan vara en faktor.
                    </dd>
                    <dt class="font-bold mt-4">
                        Omöjliga förväntningar:
                    </dt>
                    <dd>
                        Detta innebär att kräva orealistiska nivåer på bevis eller att felaktigt framställa innebörden av naturvetenskaplig osäkerhet. Eftersom vetenskap vanligtvis är probabilistisk är krav på absolut vetenskaplig säkerhet en effektiv metod för att tvivla på vetenskapliga rön.
                        <br />
                        Till exempel, efter att ha presenterats med data som visar att havsnivån ökar, kan klimattvivlare begära data som visar att havsnivåhöjningar har accelererats under de senaste åren!
                    </dd>
                    <dt class="font-bold mt-4">
                        Körsbärsplockning (Cherry picking):
                    </dt>
                    <dd>
                        Denna teknik definieras som "selektivt val av data som leder till en önskad slutsats som skiljer sig från slutsatsen som uppkommer från analys av alla tillgängliga data".
                        <br />
                        Till exempel, för att bevisa att klimatförändringar inte sker, är det vanligt att plocka data från år som var särskilt kalla eller blöta, samtidigt som man ignorerar data som visar trenden med temperaturförändringar under århundraden.
                    </dd>
                    <dt class="font-bold mt-4">
                        Konspirationsteorier:
                    </dt>
                    <dd>
                        involvera förslaget om hemliga planer för att genomföra skändliga komplott, och är ett vanligt tema inom desinformation om klimatet. Klimatvetenskapligexpertis karaktäriseras av förnekare som en "klimatkartell" av forskare, tillsynsmyndigheter, aktivister och affärsenheter.
                    </dd>
                </dl>
                <section class="e-card mt-8">
                    <h4 class="mt-2">Referenser:</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://www.youtube.com/watch?v=uNs2YMblqwU&ab_channel=JohnCook" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=uNs2YMblqwU</a></li>
                        <li><a href="https://www.youtube.com/watch?v=AqcUP0sDglg" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=AqcUP0sDglg</a></li>
                        <li><a href="https://www.youtube.com/watch?v=wXA777yUndQ" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=wXA777yUndQ</a></li>
                        <li><a href="http://www.petitionproject.org/" target="_blank" rel="noopener noreferrer">http://www.petitionproject.org</a></li>
                    </ul>
                </section>
            </section>
 


            <hr class="mt-10 mb-40" />


            <section id="s-4">
                <h2 id="s-4t" class="mt-40">4. Myter om klimatförändringar</h2>



                <h3><span class="text-rose-400">Myt 1:</span> Utrotning av arter är en naturlig process. Massutrotningar av arter har alltid förekommit.</h3>

                <p>Utrotningen av arter är ett historiskt problem. Från förhistorisk tid har vi bevis på ett antal massutrotningar, framför allt utrotningen av dinosaurierna. Denna utrotning, som ägde rum för 66 000 000 år sedan, sägs bero på ett asteroidnedslag på jorden. Andra välkända exempel är utrotning av mammutar. Men orsakerna till utrotning som har registrerats varierar.</p>
                <p>Förslaget om att mänskligheten är kapabel att påverka och störa krafter av sådan omfattning reflekterar också en självcentrerad arrogans som är bedrövande. Mänskligheten är en delmängd av naturen. Naturen är inte en delmängd av mänskligheten. Människor kan varken orsaka eller ingripa för att korrigera dessa processer (Financial Sense University).</p>
                <p><a class="break-all" href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a></p>
                



                <hr id="myth-2" class="mt-10 mb-40" />

                <h3><span class="text-rose-400">Myt 2:</span> Naturen kan anpassa sig till klimatförändringar.</h3>
                <p>Jorden har en historia på 4,54 miljarder år. De väderförhållanden som har rått på planeten förändras ständigt. Därför tvingades de arter/organismer som levde på jorden anpassa sig till nya förutsättningar för att överleva. På så sätt utvecklas arter. Växter och djur har redan flera gånger anpassat sig till ogynnsamma förhållanden (klimatförändringar, meteoritfall, vulkanutbrott, etc.). Det gör att de kan anpassa sig till stigande temperaturer och den situation vi nu kallar klimatförändringar. Med andra ord är arter naturligt kapabla att överleva under nya förhållanden.</p>
                <p><a class="break-all" href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a></p>
                <!-- <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                    <div>
                        <h3 class="mt-6 pt-3 mb-10">Teaduslik arusaam müüdi 2 paikapidavuse kohta:</h3>
                        <p class="text-2xl">Tänapäeval toimuvad väljasuremised sadu kordi kiiremini kui loomulikult. See on tingitud inimeste põhjustatud kliimamuutustest.</p>
                    </div>
                </UiCardInfo>
                <p>Õpilased, kes uurivad müüti 1 juhitud uurimuse vormis, uurivad tõendeid varasemate massiliste väljasuremiste kohta. Samuti uurivad nad uusimaid tõendeid konkreetsete kliimamuutustest põhjustatud väljasuremiste (nt Magellani pingviinide) kohta ja vaatavad BBC videot massiliste väljasuremiste kohta. Teise võimalusena koguvad õpilased avatud uurimuse vormis tõendeid teaduslikest allikatest, et oma hüpoteesi ümber lükata või kinnitada.</p>
                <p>Mõlema uurimisvormi korral tutvuvad õpilased teadusallikatega ning  teevad nende põhjal omad järeldused.</p>
                <p><b>Teaduslike arusaamade kohta leiab infot järgmistest allikatest:</b></p>
                <ul>
                    <li>
                        <a href="https://www.nationalgeographic.com/environment/article/many-animals-can-adapt-climate-change-just-not-fast-enough-" target="_blank" rel="noopener noreferrer">Some animals can adapt to climate change—just not fast enough</a>
                    </li>
                    <li>
                        <b>Visser, M. E.</b> (2008). Keeping up with a warming world; assessing the rate of adaptation to climate change. Proceedings of the Royal Society B: Biological Sciences, 275(1635), 649-659.
                    </li>
                </ul> -->

                <hr id="myth-3" class="mt-10 mb-40" />

                <h3><span class="text-rose-400">Myt 3:</span> Vetenskapen om klimatförändringar är inte trovärdig.</h3>
                <p>
                    Meteorologiska stationer är belägna i områden där insamlade data inte är representativa för klimatförändringar och därför opålitliga för studier av det globala klimatet. Forskare riktar in sig på global terrorism för data som de skapar under de förhållanden de vill ha.
                </p>
                <p>
                    <i>
                        “Vi hittade [amerikanska väderstationer] belägna bredvid luftkonditioneringsenheternas frånluftsfläktar, omgivna av asfalterade parkeringsplatser och vägar, på blixtrande heta hustak och nära trottoarer och byggnader som absorberar och utstrålar värme.”
                    </i>
                </p>
                <p>
                    <a class="break-all" href="http://wattsupwiththat.files.wordpress.com/2009/05/surfacestationsreport_spring09.pdf" target="_blank" rel="noopener noreferrer">Watts 2009</a>
                    <br />
                    <a class="break-all" href="https://skepticalscience.com/surface-temperature-measurements-basic.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/surface-temperature-measurements-basic.htm</a>
                </p>
                <!-- <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                    <div>
                        <h3 class="mt-6 pt-3 mb-10">Teaduslik arusaam müüdi 4 paikapidavuse kohta:</h3>
                        <p class="text-2xl">Kliimamuutustega seotud tõendid pärinevad aastakümneid kestnud intensiivsetest uuringutest ning põhinevad vaatlustel, väli- ja laborikatsetel ning simulatsioonimudelitel (Higgins, 2019). On meelevaldne arvata, et teaduslikud andmed kliimamuutuste kohta on ebausaldusväärsed.</p>
                    </div>
                </UiCardInfo>
                <p>Õpilased, kes uurivad müüti 4 juhendatud uurimuse vormis, uurivad NOAA-lt pärinevaid konkreetseid tõendeid (nt vaatlusjaamade asukohtade ja mõõtmiste kohta), et teha ise järeldusi nende usaldusväärsuse kohta. Teise võimalusena koguvad õpilased avatud uurimuse vormis teaduslikest allikatest tõendeid, et oma hüpoteesi kas ümber lükata või kinnitada.</p>
                <p>Mõlema uurimisvormi korral tutvuvad õpilased teadusallikatega ning  teevad nende põhjal omad järeldused.</p>
                <p><b>Teaduslikku arusaama antud müüdi kohta esindavad järgmised allikad:</b></p>
                <ul>
                    <li>
                        <a href="https://www.ametsoc.org/ams/assets/File/Climate_Assessment_Credibility_10-2019.pdf" target="_blank" rel="noopener noreferrer">Climate_Assessment_Credibility_10-2019.pdf (ametsoc.org)</a>
                    </li>
                    <li>
                        <a href="https://gml.noaa.gov/" target="_blank" rel="noopener noreferrer">NOAA ESRL Global Monitoring Laboratory</a>
                    </li>
                </ul> -->



                <hr id="myth-4" class="mt-10 mb-40" />
                <h3><span class="text-rose-400">Myt 4:</span> Temperaturökningen är bra!</h3>
                <p>
                    <i>"Förresten, om du ska rösta på något, rösta på uppvärmning. Mindre dödsfall på grund av kyla, regioner mer beboeliga ..... Det är bra!"</i>
                    (John MacArthur)
                </p>
                <p>
                    <a class="break-all" href="https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s</a>
                    <br />
                    <a class="break-all" href="https://skepticalscience.com/global-warming-positives-negatives.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/global-warming-positives-negatives.htm</a>
                </p>
                <!-- <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                    <div>
                        <h3 class="mt-6 pt-3 mb-10">Teaduslik arusaam müüdi nr 4 paikapidavuse kohta:</h3>
                        <p class="text-2xl">Müüt 4 põhineb ainult ülaltoodud John MacArthuri väitel. Teaduslikud tõendid näitavad täpselt vastupidist. Kliimamuutus (kuumus)suurendab otseselt inimeste surmade arvu. Kliimamuutused on üks ühiskonda, keskkonda, majandust ja rahvatervist mõjutavate globaalsete muutuste põhjuseid.</p>
                    </div>
                </UiCardInfo>
                <p>Õpilased, kes uurivad müüti 6 juhitud uurimuse vormis, uurivad Maailma Terviseorganisatsiooni konkreetseid tõendeid temperatuuri tõusu ja inimeste surmade kohta, hiljutisi tõendeid kliimamuutustest mõjutatud inimsurmade kohta, viivad läbi eksperimendi temperatuuri tõusu ja elamuks või harimiseks kasutatava maa seoste kohta. Õpilased pääsevad ligi teaduslikule allikale ja teevad oma järeldused. Teise võimalusena koguvad õpilased, kes uurivad müüti 6 avatud uurimuse vormis, teaduslikest allikatest tõendeid, et oma hüpoteesi ümber lükata või kinnitada.</p>
                <p>Mõlema uurimisvormi  korral tutvuvad õpilased teadusallikatega ning  teevad nende põhjal omad järeldused.</p>
                <p><b>Teaduslikku arusaama antud müüdi kohta esindavad järgmised allikad:</b></p>
                <ul>
                    <li>
                        <a href="https://www.epa.gov/climate-indicators/climate-change-indicators-heat-related-deaths#:~:text=Some%20statistical%20approaches%20estimate%20that,set%20shown%20in%20Figure%201" target="_blank" rel="noopener noreferrer">Climate Change Indicators: Heat-Related Deaths</a>
                    </li>
                    <li>
                        <a href="https://health2016.globalchange.gov/low/ClimateHealth2016_FullReport_small.pdf" target="_blank" rel="noopener noreferrer">The Impacts Of Climate Change On Human Health In The United States</a>
                    </li>
                    <li>
                        Ajakirjas Scientific American avaldatud 2009. aasta <a href="http://www.scientificamerican.com/article/global-warming-and-health/" target="_blank" rel="noopener noreferrer">artikli kohaselt</a> leidis Maailma Terviseorganisatsiooni (WHO) kliimamuutuste uurijate rühm, et "globaalne soojenemine on [vastutav] igal aastal umbes 150 000 surmajuhtumi eest kogu maailmas"; nad kartsid, et see arv kahekordistub aastaks 2030. 
                    </li>
                </ul> -->


                <hr id="myth-5" class="mt-10 mb-40" />

                <h3><span class="text-rose-400">Myt 5:</span> Det finns ingen korrelation mellan CO₂ och temperatur.</h3>
                <p>
                    <i>“Det var efterkrigstidens industrialiseringen som orsakade den snabba ökningen av de globala CO₂-utsläppen, men 1945 när detta började var jorden redan i en avkylningsfas som startade runt 1942 och fortsatte till 1975. Med 32 år av snabbt ökande globala temperaturer och endast en mindre ökning av de globala CO₂-utsläppen, följt av 33 år av långsamt svalnande globala temperaturer med snabba ökningar av globala CO₂-utsläpp, var det bedrägligt av IPCC att göra något påstående om att CO₂-utsläppen var primärt ansvariga för den observerade globala uppvärmningen på 1900-talet."</i>
                    <br />
                    (<a href="https://archive.md/q3Tim" target="_blank" rel="noopener noreferrer">Norm Kalmanovitch</a>)
                    <br />
                    <a class="break-all" href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
                </p>
                


                <hr id="myth-6" class="mt-10 mb-40" />

                <h3><span class="text-rose-400">Myt 6:</span> Åtgärder för att mildra klimatförändringarna kommer att göra människor fattigare.</h3>
                <p>
                    <i>
                        “Klimatförändringar leder till större skördar och längre växtsäsong. Uppvärmning hjälper de fattiga.”
                    </i>
                    <br />
                    (John MacArthur)
                </p>
                


                <hr id="myth-7" class="mt-10 mb-40" />

                <h3><span class="text-rose-400">Myt 7:</span> Jordens klimat har alltid förändrats, och nu händer samma sak.</h3>
                <p>
                    <i>
                        “Klimatet förändras alltid. Vi har haft istider och varmare perioder då alligatorer hittades i Spitzbergen. Istider har inträffat i hundratusen års cykler under de senaste 700 tusen åren, och det har tidigare förekommit perioder som verkar ha varit varmare än idag trots att CO₂-nivåerna var lägre än de är nu. På senare tid har vi haft den  så kallade medeltida värmeperioden och den lilla istiden.”
                    </i>
                    <br />
                    (<a class="break-all" href="http://www.quadrant.org.au/blogs/doomed-planet/2009/07/resisting-climate-hysteria" target="_blank" rel="noopener noreferrer">Richard Lindzen</a>)
                    <br />
                    <a class="break-all" href="https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm</a>
                </p>
                
            </section>


        </section>
    </div>
</template>