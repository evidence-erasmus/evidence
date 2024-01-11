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
            <h1 class="mb-0">Rymden</h1>
            <h5 class="font-normal uppercase leading-tight">Vetenskaplig bakgrundsinformation</h5>
        
            
            <section id="s-1">
            <h2 id="s-1-title">Introduktion</h2>
        
            <p>
                Rymdåldern började med uppskjutningen av Sputnik 1 i oktober 1957 och nådde onekligen sin klimax 1969 när människan tog första steget på månen. Utforskning av rymden drevs av konkurrens mellan två länder USA och Sovjetunionen – ledare för kapitalistiska och socialistiska block. Så rymdutforskningen stod i frontlinjen av konkurrens mellan två olika sociala system.
            </p>

            <p>
                För närvarande bedriver privata företag stora rymdaktiviteter. De har skapat sin egen satellitarkitektur runt vår planet (se <a href="https://en.wikipedia.org/wiki/Starlink" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Starlink</a>)  för kommersiell kommunikation och navigering. Satelliter och rymdbaserad teknik hjälper flygplan att flyga säkert i överbelastat luftrum, fartyg att navigera i haven och öka deras effektivitet. Rymdteknologin hjälper oss redan att tackla klimatförändringarna på jorden, övervaka utsläpp i olika ekonomiska sektorer och mäta globala koldioxidutsläpp. När ny teknik implementeras utan tillräckligt ordentliga utredningar, åtföljs det alltid av problem. Rymdföroreningar från rymdskräp är t ex ett problem som måste tacklas på rätt sätt och åtgärdas genom ett rigoröst och genomtänkt regelverk. Vi måste inse att rymden – precis som vår planet – behöver skyddas för framtida generationer.
            </p>

            <p>
                Onekligen är rymdteknik en del av vårt dagliga liv. Forskningen visar dock (Inmarsat, 2022) att de flesta människor inte verkar förstå vilken roll rymden redan spelar i våra vardagliga liv, och inte heller dess potential att leverera en ljusare framtid för mänskligheten. Av de 20 000 personer som utfrågades i 11 länder var det bara 8 % som associerade rymden med navigerings- och kommunikationssatelliter och bara 38 % önskade att de visste mer om den. Det fanns en överväldigande känsla av rädsla för rymden, där 97 % såg den som ett hot. Deras största oro var rymdskräp och kollisioner, förorening av rymden och skada på jordens atmosfär. Yngre människor är mer nyfikna över rymdteknologier och önskar att de visste mer om rymden, vilket denna modul vill tillgodose.
            </p>

        </section>



        <section id="s-2">

            <h2 id="s-2-title">
                Hur satelliter rör sig runt jorden: Hastighet och altitud
            </h2>

            <p>
                När en raket med en satellit skjuts upp från jordens yta måste den nå en hastighet på minst 7,9 kilometer per sekund för att nå rymden. rymden. Detta kallas för den första kosmiska hastigheten, vilket är den hastighet som behövs för att uppnå balans mellan gravitationens dragkraft på satelliten och trögheten i satellitens rörelse - satellitens tendens att fortsätta sin rörelse framåt. Om satelliten går för långsamt kommer gravitationen att dra tillbaka den mot jorden. Vid rätt omloppshastighet balanserar gravitationen exakt satellitens tröghet, och drar ner den mot jordens centrum precis tillräckligt för att satelliten ska gå i en omloppsbana runt jordens yta, snarare än att den ska flyga iväg i en rak linje.
            </p>
            <p>
                Satellitens omloppshastighet beror på dess höjd över jorden. Ju närmare jorden, desto snabbare omloppshastighet krävs. På 200 kilometers höjd är den nödvändiga omloppshastigheten cirka 7,6 km/s (27 400 km/h). För att upprätthålla en bana som är 35 786 kilometer över jorden måste satelliten kretsa med en hastighet av cirka 3,13 km/s (11 300 km/h). Den omloppshastigheten och det avståndet tillåter satelliten att göra ett varv på 24 timmar. Eftersom jorden också roterar ett varv på 24 timmar, kommer en satellit på denna höjd hålla sig i en fast position i förhållande till en punkt på jordens yta. Denna typ av omloppsbana kallas "geostationär". Geostationära banor är idealiska för vädersatelliter och kommunikationssatelliter.
            </p>
            <p>
                I allmänhet gäller regeln att ju högre upp en satellits omloppsbana är, desto längre kan satelliten stanna i den. Vid lägre höjder åker satelliten in i gränsen till jordens atmosfär, vilket skapar motstånd. Detta motstånd minskar omloppsbanan tills satelliten helt åker in i atmosfären och brinner upp. På högre höjder, där rymdens vakuum nästan är fullständigt, finns det nästan inget motstånd och en satellit som månen kan stanna i omloppsbana i århundraden.
            </p>
            <p>
                Satelliter kan klassificeras baserat på deras höjd över jordens yta.
            </p>
            <ul>
                <li>
                    <b>Low-Earth omloppsbanor (LEO)</b> – LEO-satelliter upptar ett område i rymden från cirka 180 kilometer till 2 000 kilometer över jorden. Satelliter som rör sig nära jordens yta är idealiska för att göra observationer, för militära ändamål och för att samla in väderdata.
                </li>
                <li>
                    <b>Geosynkrona omloppsbanor (GEO)</b> – GEO-satelliter kretsar runt jorden på en höjd av cirka 36 000 kilometer eller högre och deras omloppsperiod är densamma som jordens rotationsperiod: 24 timmar. Inkluderade i denna kategori är geostationära (GSO) satelliter, som förblir i omloppsbana ovanför en fast plats på jorden. Geostationära satelliter måste flyga över jordens ekvator för att stanna kvar på en fast plats ovanför jorden. Flera hundra TV-, kommunikations- och vädersatelliter använder alla geostationära banor.
                </li>
                <li>
                    <b>Medium-Earth omloppsbanor (MEO)</b> — Dessa satelliter finns mellan de låga och höga omloppsbanorna, dvs från cirka 2000 kilometer till 36000 kilometer över jordens yta. Navigationssatelliter, som den typ som används av vår bils GPS, fungerar bra på denna höjd.
                </li>
            </ul>

            <UiContentImage src="https://evidence.onkel.ee/assets/space__leo-geo-satellite.webp" credits="(Zhang et al, 2019) https://www.researchgate.net/publication/336166223_Efficient_topology_control_for_time-varying_spacecraft_networks_with_unreliable_links" :elevated="true">
                <template #caption>
                    <b>Figur 1.</b> Hybrid LEO/GEO satellitarkitektur 
                </template>
            </UiContentImage>

            <p>
                <a href="https://www.geospatialworld.net/videos/how-many-satellites-are-orbiting-around-earth-in-2022/" target="_blank" rel="noopener noreferrer">How Many Satellites are orbiting around Earth in 2022?</a>
            </p>

        </section>




        <section id="s-3">
            <h2 id="s-3-title">
                Raketuppskjutningar
            </h2>

            <p>
                En raket ger möjlighet att accelerera en rymdfarkost. Ur fysiksynvinkel fungerar raketen på grund av lagen om rörelsemängdens bevarande. Rörelsemängd definieras som massan av ett föremål gånger dess hastighet. En raket rör sig i rymden eftersom avgaserna får fart när de drivs ut ur raketmotorn. När avgaserna går i en riktning går raketen i den andra för att hålla systemets totala rörelsemängd konstant. Denna rörelsemängd av gaser ger raketen en &quot;push&quot; att gå framåt. Vi kallar detta för raketens dragkraft, dvs kraften som utövas på raketen. En raket skapar dragkraft genom att driva ut massa. Rymdfarkosten accelereras i motsatt riktning. Denna allmänna rörelseprincip är densamma som för vattenraketer.
            </p>

            <h3>
                <span class="text-rose-400">Myt:</span> Raketen behöver luft att trycka emot.
            </h3>

            <p>
                Kraften som orsakar raketacceleration kan också förklaras med hjälp av Newtons tredje lag, som säger att för varje <b>aktion</b> (kraft) i naturen finns en lika och motsatt <b>reaktion</b>. Med andra ord, krafter härrör från interaktioner. En raket trycker mot gaserna inuti den. När dessa gaser trycks ut i en riktning finns det en reaktionskraft som trycker raketen åt andra hållet. För sin rörelse behöver inte raketen atmosfär.
            </p>
            <p>
                För närvarande utvecklar Europa och Japan lågkostnads- och högeffektiva raketer. Dessutom utvecklar många nystartade företag runt om i världen ultrasmå bärraketer som kan skjuta upp nanosatelliter. 
            </p>
            <p>
                Sydkorea bevisade 2022 förmågan att skjuta upp rymdraketer med hjälp av egenutvecklad teknik.
            </p>

            <UiContentImage src="https://evidence.onkel.ee/assets/space__countries-rocket-capability.webp" credits="Buchholz / Statista - https://www.statista.com/chart/27792/countries-capable-of-launching-space-rockets/" :elevated="true">
                <template #caption>
                    <b>Figur 2.</b> Historik om raketuppskjutningsförmåga
                </template>
            </UiContentImage>

            <p>
                Många olika länder och privata företag är nu aktiva i rymden, och en stor del av världen är beroende av rymdbaserade tjänster. Men vi måste se till att robusta policyer finns på plats för att bevara både säkerheten och hållbarheten för utforskningen av rymden.
            </p>
        </section>






        <section id="s-4">
            <h2 id="s-4-title">
                Människor i rymden
            </h2>

            <p>
                Den första människan i rymden var den sovjetiske kosmonauten Yuri Gagarin, som gjorde ett varv runt jorden den 12 april 1961, på en flygning som varade i 108 minuter. Lite mer än tre veckor senare skickade NASA astronauten Alan Shepard ut i rymden, inte på en omloppsflygning, utan på en suborbital bana – en flygning ut i rymden men inte hela vägen runt jorden. Shepards suborbitala flygning varade drygt 15 minuter.
            </p>

            <p>
                För närvarande etableras kommersiella program för den suborbitala flygningen på en höjd av cirka 100 km över jordytan (se 
                <br />
                <a href="https://www.spacex.com/" target="_blank" rel="noopener noreferrer">https://www.spacex.com/</a>, 
                <br />
                <a href="https://www.blueorigin.com/" target="_blank" rel="noopener noreferrer">https://www.blueorigin.com/</a>, 
                <br />
                <a href="https://www.virgingalactic.com/" target="_blank" rel="noopener noreferrer">https://www.virgingalactic.com/</a>). 
            </p>

            
            

            <UiCardInfo icon="mdi:comment-quote-outline" theme="blue-500">
                <p class="font-Body">
                    <b>Jan Wörner</b>, generaldirektören för Europeiska rymdorganisationen (ESA) gav följande argument om betydelsen <a href="https://ec.europa.eu/research-and-innovation/en/horizon-magazine/qa-human-spaceflight-risk-worth-taking-says-esa-head" target="_blank" rel="noopener noreferrer">betydelsen av mänskliga uppdrag i rymden</a>:
                </p>
                <div class="italic">
                    <p>
                        Med astronauter i rymden kan vi göra saker vi inte kan göra med robotar. Vi kan inte analysera blodtrycket, humöret och sinnena hos en robot. Vi får mycket information från astronauter som gör experimentet på sig själva som kan användas på jorden. Det bästa är när robotarnas kapacitet förstärker de mänskliga aktiviteterna. Mänskliga uppdrag har specifika fördelar och specifika begränsningar. Robotuppdrag är mycket billigare än någon mänsklig rymdfärd. Vissa skulle kunna föreslå &quot;istället för att göra en mänsklig rymdfärd, gör vi 10 robotuppdrag.&quot; Jag är övertygad om att vi borde göra båda. Det är inte alls dyrt. I ESA spenderar vi (motsvarande) ungefär en euro – för mänskliga rymduppdrag per år – per medborgare, alltså en mycket liten summa.
                    </p>
                    <p>
                        Det finns alltid risker med mänskliga rymdfärder, men om vi inte tar risker kommer vi inte att ha någon fortsatt utveckling. Det är en del av utvecklingen av vår förståelse, att ta risker för att nå längre fram. Detta gäller allt vi gör i livet. Det är en balans mellan risker och möjligheter. Jag tror att mänskliga rymdfärder förvisso är mycket svåra och mycket farliga, men det är värt besväret också att ta risker. Det ligger i människans natur.
                    </p>
                    <p class="font-Body text-sm text-right">
                        (10 april 2020, ec.europa.eu)
                    </p>
                </div>
            </UiCardInfo>

            <h3>
                ISS och nya rymdstationer
            </h3>

            <p>
                Den internationella rymdstationen (ISS) lanserades 1998 och utvecklades gradvis hela tiden. Den 450 ton tunga internationella rymdstationen har mer än 837 kubikmeter trycksatt utrymme – tillräckligt med utrymme för sin besättning på sex personer och ett brett spektrum av vetenskapliga experiment.
            </p>
            <p>
                ISS upprätthåller vanligtvis en omloppsbana med en genomsnittlig höjd på 400 kilometer över jorden, men på grund av atmosfäriskt motstånd kan stationen förlora höjd upp till 100 meter per dag. Därför krävs regelbundna omloppsjusteringar, vanligtvis ungefär en gång i månaden. Dessa kallas reloads eller reboost -manövrar och görs med hjälp av motorerna i Zvezda Service Module eller en besökande rymdfarkost. Det finns inget fast schema för det, eftersom densiteten i jordens atmosfär förändras ständigt beroende på hur mycket energi solen tillför den. Därför är nedstigningshastigheten inte ett konstant värde. ISS sjunker snabbare ner mot jorden än andra satelliter på liknande höjd på grund av dess enorma storlek och yta. ISS kretsar runt jorden på ungefär 93 minuter och genomför 15,5 omlopp runt jorden per dag. Vi kan följa ISS bana med hjälp av <a href="https://spotthestation.nasa.gov/tracking_map.cfm" target="_blank" rel="noopener noreferrer">Live Space Station Tracking Map</a>.
            </p>

            <UiContentImage src="https://evidence.onkel.ee/assets/space__iss.webp" credits="Credits: ESA - European Space Agency (Paolo Nespoli) & NASA Copyright: ESA, CC BY-SA 3.0 IGO / https://www.flickr.com/photos/europeanspaceagency/5811265766" :elevated="true">
                <template #caption>
                    <b>Figur 3.</b> Den internationella rymdstationen ISS
                </template>
            </UiContentImage>

            <p>
                Stationen fungerar som ett mikrogravitations- och rymdmiljöforskningslaboratorium där vetenskaplig forskning bedrivs inom astrobiologi, astronomi, meteorologi, fysik och andra områden. 
            </p>
            <p>
                Europa, som arbetar genom ESA, är för närvarande ansvarig för det europeiska Columbus-laboratoriet vid ISS. Columbus är ett multifunktionslaboratorium som är specialiserat på forskning inom vätskors fysik, materialvetenskap och biovetenskap. Europa bidrar till NASA:s besättningsfarkost Orion, som kommer att transportera astronauter till rymden.
            </p>
            <p>
                Kinas rymdstation Tiangong är i omloppsbana och Kina tillkännager också möjligheter för rymdturism där. Tiangong (som betyder ”Himmelska Palatset”), är landets första rymdstation. Till skillnad från den internationella rymdstationen (ISS) som existerar tack vare ett konglomerat av många länder och deras rymdorganisationer, är Tiangong den enda oberoende nationella rymdstationen. Förmågan att skapa och stödja en sådan struktur i omloppsbana är en återspegling av en nations totala globala makt och inflytande. Detta är ett exempel på hur rymdvetenskap har blivit sammanflätad med utveckling, inklusive Kinas nationella säkerhet, ekonomiska framsteg och deras offentliga vetenskaps- och utbildningsinitiativ.
            </p>


            <h3 class="border-l-rose-400 border-l-4 pl-4">
                <span class="text-rose-400">Tre vanliga sammanhängande myter:</span>
                <ol class="leading-tight">
                    <li>
                        Att fara till rymden gör dig viktlös 
                    </li>
                    <li>
                        Det finns ingen gravitation i rymden
                    </li>
                    <li>
                        Astronauter som kretsar runt jorden upplever noll gravitation eftersom de är långt från jorden.
                    </li>
                </ol>
            </h3>

            <p>
                Att passera 100 km i altitud, gör dig inte magiskt viktlös. Om du var i en accelererande raket skulle du känna jordens gravitation många gånger om. Det är först när du börjar falla fritt som du känner dig viktlös. Astronauter är i fritt fall när de kretsar runt jorden, men de dras kraftigt mot jorden.
            </p>
            <p>
                Tyngdkraften är den ömsesidiga attraktionen mellan alla föremål som har massa. Här på jorden upplever vi gravitationen som vår vikt, det vill säga attraktionen mellan vår egen kropps massa och jordens. När en raket befinner sig i rymden påverkas farkosten och astronauterna av planetens gravitation. Om det inte fanns någon gravitation i rymden, skulle det inte vara möjligt att kretsa runt jorden. På höjden 400 km (ISS) är gravitationspåverkan från jorden 8,75 m/s². Det är bara cirka 11 % mindre än de 9,81 m/s² på jordens yta.
            </p>
            <p>
                På rymdstationen faller astronauter (och själva stationen) mot jordens centrum, men eftersom de också rör sig snabbt, i sidled, missar de hela tiden jorden. Så de faller tekniskt sett runt jorden. Astronauterna är viktlösa eftersom de inte upplever att stationen trycker tillbaka mot dem. Astronauten faller och det gör deras rymdfarkost också. Om båda faller, finns det ingen kraft från den ena mot den andra och därmed ingen känsla av vikt. Således är ISS och dess besättning i fritt fall i omloppsbanan.
            </p>
            <p>
                På Mars skulle astronauter behöva leva i tre åttondelar av jordens gravitationskraft. Tyngdkraften på Mars är 3/8 av den på jorden. På vägen mellan jorden och Mars kommer upptäcktsresande att uppleva total viktlöshet när raketmotorerna stängs av.
            </p>

        </section>





        <section id="s-5">
            <h2 id="s-5-title">
                Föroreningar av rymden
            </h2>

            <h3>
                Rymdskräp
            </h3>

            <p>
                Det finns 100 miljoner bitar av orbitalt skräp mindre än 1 centimeter, 500 000 bitar i intervallet 1–10 centimeter och cirka 21 000 föremål som är större än 10 centimeter.
            </p>
            <p>
                Orbitalt skräp kan komma från många källor:
            </p>
            <ul>
                <li>
                    Exploderade raketer – Detta lämnar efter sig mest skräp i rymden.
                </li>
                <li>
                    Ett borttappat verktyg – Om en astronaut reparerar något i rymden och tappar en skiftnyckel, är det borta för alltid. Skiftnyckeln går sedan i omloppsbana, troligen med en hastighet av nästan 10 kilometer per sekund. Om skiftnyckeln träffar någon farkost som har en mänsklig besättning kan resultatet bli katastrofalt. Större objekt som en rymdstation utgör ett större mål för rymdskräp och de löper därför större risk att bli träffade.
                </li>
                <li>
                    Övergivna föremål – Delar av rymdfordon, kameralinsskydd och så vidare.
                </li>
            </ul>
            <p>
                Rymdskrot utgör ett hot mot aktiva, väl fungerande satelliter och bemannade rymdskepp (se <a href="https://www.youtube.com/watch?v=yS1ibDImAYU" target="_blank" rel="noopener noreferrer">visuell presentation om det här problemet</a>.)
            </p>

            <h3>
                Partikelförorening av atmosfären under raketuppskjutningar
            </h3>

            <p>
                Raketuppskjutningar är en del av vår värld. Det är uppenbart att raketmotorer spyr ut föroreningar i atmosfären, som alla former av förbränningsdrivna farkoster. Föroreningar orsakade av raketutsläpp kan också verka obetydliga jämfört med de andra utmaningar världen står inför, och de fördelar som rymdindustrin medför för oss. Faktum är att andelen fossila bränslen som förbränns av rymdindustrin är bara cirka 1 % av den som förbränns av konventionellt flyg. Flygplan släpper ut sina föroreningar i troposfären och den nedre stratosfären, medan raketer släpper ut sina föroreningar hela vägen från jordens yta till mesosfären, och när föroreningar släpps ut i de övre lagren varar det längre än från jordbundna källor. För närvarande injicerar raketer cirka 1000 ton sot per år i de annars orörda övre lagren av jordens atmosfär. Det råder också en stor osäkerhet om <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021EF002612" target="_blank" rel="noopener noreferrer">effekterna av raketutsläpp på olika skikt av atmosfären</a>.
            </p>

            <p>
                Rocket Propellant-1, eller RP-1, högraffinerad form av fotogen är ett av de mest populära raketbränslena. Den används för raketer som Saturn, Delta, Atlas, Soyuz och SpaceX Falcon 9. RP-1 är populärt eftersom det är relativt billigt, stabilt i rumstemperatur och inte är farligt explosivt. Nu pågår en kapplöpning för att utveckla alternativa bränslen. Flytande metan verkar vara en favorit. Flera nya raketmotorer, inklusive SpaceX:s Raptor och Europeiska rymdorganisationens Prometheus-motor, har designats för att använda denna gas som bränsle eftersom den har högre prestanda än andra bränslen, vilket innebär att raketen kan vara mindre och producera mindre sot när den avfyras. Metan är dock kontroversiellt eftersom det är en av de värsta gaserna när det gäller den globala uppvärmningen. Den ger cirka 80 gånger mer uppvärmning än koldioxid under sin livstid.
            </p>

            <p>
                Vad kan vi göra mer för att stoppa rymdfarkosternas förorenande avgasers påskyndande av klimatförändringarna? Forskare fruktar att rymdindustrin har små incitament att förändras på grund av frånvaron av regler, en ovilja att överge säker och beprövad teknik och det faktum att nya drivmedel innebär dyra nya motorer och långa tester.
            </p>
        </section>




            <section id="s-6">
            <h2 id="s-6-title">
                Hur påverkas människor av tyngdlöshet?
            </h2>

            <p>
                Efter en raketstart från jorden på cirka 8 och en halv minut stängs raketmotorn av, astronauterna kommer in i yttre rymden och upplever tyngdlöshet. Tyngdlöshet kallas mer korrekt för mikrogravitation. Astronauter befinner sig faktiskt i ett tillstånd av fritt fall. Efter att motorn stängts av rör sig raketen horisontellt med mycket hög hastighet på cirka 8 kilometer per sekund. Den faller också fritt och rör sig därmed runt jorden.
            </p>
            <p>
                När människor först utsätts för mikrogravitation har de följande upplevelser: Illamående, desorientering, huvudvärk, aptitlöshet, trängsel, vilket kallas rymdsjuka. Ju längre vistelse i mikrogravitation desto mer försvagas muskler och ben. Erfarenheter från hundratals rymdfärder visar hur människokroppen reagerar på tyngdlöshet. Vi presenterar nedan en beskrivning av några fysiologiska effekter som din kropp skulle uppleva i rymden.
            </p>

            <h3>
                Rymdsjuka
            </h3>

            <p>
                Rymdsjuka orsakas av motstridig information som din hjärna tar emot från dina ögon och balansorganet (vestibulära systemet) i ditt inneröra. Illamåendet och desorienteringen du känner är som den sjunkande känslan i magen du upplever i ett fritt fall på en berg-och dalbana. I rymden har du den känslan konstant i flera dagar.
            </p>
            <p>
                Dina ögon kan se vad som är upp och ner inne i kabinen, men eftersom ditt balansorgan förlitar sig på gravitationens nedåtgående dragning för att tala om för dig vad som är upp och ner och i vilken riktning du rör dig, fungerar det inte under påverkan av mikrogravitation. Dina ögon kan berätta för din hjärna att du är upp och ner, men din hjärna tar inte emot några tolkningsbara intryck från dina balansorgan. Din förvirrade hjärna orsakar illamående och desorientering, vilket i sin tur kan leda till kräkningar och aptitlöshet. Efter några dagar, anpassar sig vår hjärna vanligtvis till situationen genom att enbart förlita sig på de visuella intrycken, och du börjar må bättre.
            </p>

            <h3>
                Pösigt ansikte och fågelben
            </h3>
            <p>
                Under påverkan av mikrogravitation kommer ditt ansikte att kännas svullet och dina bihålor kommer att kännas överbelastade, vilket kan bidra till huvudvärk och rymdsjuka. Du känner på samma sätt på jorden när du böjer dig framåt eller står upp och ner, eftersom blodet rusar till ditt huvud.
            </p>
            <p>
                På jorden drar gravitationen i vårt blod, vilket gör att betydande volymer samlas i benens vener. När du utsätts för mikrogravitation flyttas blodet från dina ben till bröstet och huvudet. Ditt ansikte tenderar att bli svullet och dina bihålor svullnar. Vätskeskiftet krymper också omfånget på dina ben.
            </p>

            <h3>
                Förändringar i ditt blod och kroppsvätskor
            </h3>
            <p>
                När blodet flyttas till bröstet ökar ditt hjärta i storlek och pumpar mer blod för varje slag. Dina njurar svarar på detta ökade blodflöde genom att producera mer urin, ungefär som de gör efter att du har druckit ett stort glas vatten. Ökningen av blod och vätska minskar utsöndringen av antidiuretisk hormon (ADH) från hypofysen, vilket gör dig mindre törstig. Därför dricker du inte så mycket vatten som du skulle kunna på jorden. Sammantaget hjälper dessa två faktorer till att befria ditt bröst och huvud från överflödig vätska, och på några dagar är din kropps vätskenivåer lägre än vad de var på jorden. Även om du fortfarande har lite svullet ansikte och täppta bihålor är det inte lika illa efter de första dagarna. När du återvänder till jorden kommer gravitationen att dra tillbaka dessa vätskor ner till dina ben och bort från ditt huvud, vilket gör att du känner dig svimfärdig när du reser dig upp. Men du kommer också att börja dricka mer och dina vätskenivåer återgår till det normala inom ett par dagar.
            </p>

            <h3>
                Svaga muskler
            </h3>
            <p>
                När du påverkas av mikrogravitation antar din kropp en &quot;fosterställning&quot; - du hukar lätt, med armarna och benen halvböjda framför dig. I den här positionen använder du inte många av dina muskler, särskilt de muskler som hjälper dig att stå och behålla hållningen (antigravitationsmuskler). Dina musklers massa minskar. Ju längre du vistas i rymden, desto mindre muskelmassa kommer du att ha. Denna förlust av muskelmassa gör dig svagare, vilket orsakar problem för långvariga rymdflygningar och när du återvänder hem till jordens gravitation.
            </p>

            <h3>
                Benskörhet
            </h3>
            <p>
                Under mikrogravitation behöver dina ben inte stödja din kropp, så alla dina ben, särskilt de viktbärande benen i dina höfter, lår och nedre delen av ryggen, används mycket mindre än på jorden. Resultatet är att storleken och massan av dessa ben fortsätter att minska så länge du förblir i mikrogravitation, med en hastighet av cirka 1 procent per månad. Dessa förändringar i benmassa gör dina ben svaga och mer benägna att brytas när du återvänder till jordens gravitation. Benförlusten kan återhämtas vid återkomst till jorden.
            </p>
            <p>
                Förutom svaga ben, ökar ditt blods kalciumkoncentration och njurarna gör sig av med överskottet av kalcium genom att bilda njursten som ofta är smärtsamt.
            </p>
            <p>
                För att delvis övervinna dessa problem måste astronauter träna minst två timmar varje dag på speciellt anpassade maskiner för tyngdlöshet (löpband, roddmaskin, cykel).
            </p>
        </section>







        <section id="s-7">
            <h2 id="s-7-title">
                Referenser
            </h2>

            <ul class="leading-tight text-sm">
                <li>
                    5 faror med mänsklig rymdfärd. <a class="break-all" href="https://www.nasa.gov/hrp/5-hazards-of-human-spaceflight" target="_blank" rel="noopener noreferrer">https://www.nasa.gov/hrp/5-hazards-of-human-spaceflight</a> 
                </li>
                <li>
                    Buchholz, Katharina (2019) The Countries Capable of Launching Space Rockets. Statista. <a class="break-all" href="https://www.statista.com/chart/27792/countries-capable-of-launching-space-rockets/" target="_blank" rel="noopener noreferrer">https://www.statista.com/chart/27792/countries-capable-of-launching-space-rockets/</a>
                </li>
                <li>
                    Harrison, T., Nahmyo, T. (2016). NASA i den andra rymdåldern: Utforskning, partnerskap och säkerhet . Strategiska studier kvartalsvis. Vol. 10, nr 4 (VINTERN 2016), s. 2- 13 . Air University press <a class="break-all" href="https://www.jstor.org/stable/26271527#metadata_info_tab_contents" target="_blank" rel="noopener noreferrer">https://www.jstor.org/stable/26271527#metadata_info_tab_contents</a>
                </li>
                <li>
                    Inmarsat (2022) Vad i hela friden är värdet av rymden? <a class="break-all" href="https://www.inmarsat.com/content/dam/inmarsat/corporate/documents/corporate/insights/Inmarsat_Value_of_Space_Report.pdf.gc.pdf" target="_blank" rel="noopener noreferrer">https://www.inmarsat.com/content/dam/inmarsat/corporate/documents/corporate/insights/Inmarsat_Value_of_Space_Report.pdf.gc.pdf</a>
                </li>
                <li>
                    Inverkan av raketuppskjutning och rymdskräp luftföroreningar på stratosfäriskt ozon och det globala klimatet. <a class="break-all" href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021EF002612" target="_blank" rel="noopener noreferrer">https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021EF002612</a>
                </li>
                <li>
                    The New Space Age: Beyond Global Order <a class="break-all" href="https://global.upenn.edu/sites/default/files/perry-world-house/The%20New%20Space%20Age%20-%20Beyond%20Global%20Order%20Report.pdf" target="_blank" rel="noopener noreferrer">https://global.upenn.edu/sites/default/files/perry-world-house/The%20New%20Space%20Age%20-%20Beyond%20Global%20Order%20Report.pdf</a>
                </li>
                <li>
                    Utforskning av rymden <a class="break-all" href="https://www.britannica.com/science/space-exploration/Space-applications" target="_blank" rel="noopener noreferrer">https://www.britannica.com/science/space-exploration/Space-applications</a> 
                </li>
                <li>
                    Space Launch Vehicle. <a class="break-all" href="https://www.kari.re.kr/eng/sub03_04.do" target="_blank" rel="noopener noreferrer">https://www.kari.re.kr/eng/sub03_04.do</a> 
                </li>
                <li>
                    FN:s kontor för yttre rymdfrågor (UNOOSA). Fördelarna med utrymme för mänskligheten.  <a class="break-all" href="https://www.unoosa.org/oosa/en/benefits-of-space/benefits.html" target="_blank" rel="noopener noreferrer">https://www.unoosa.org/oosa/en/benefits-of-space/benefits.html</a>
                </li>
                <li>
                    Zhang Wei, Ma Hong, Wu Tao, Shi Xueshu and Jiao Yiwen (2019) Efficient topology control for time-varying spacecraft networks with unreliable links. International Journal of Distributed Sensor Networks 2019, Vol. 15 (9) <a class="break-all" href="https://www.researchgate.net/publication/336166223_Efficient_topology_control_for_time-varying_spacecraft_networks_with_unreliable_links" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/publication/336166223_Efficient_topology_control_for_time-varying_spacecraft_networks_with_unreliable_links</a>
                </li>
                <li>
                    <a class="break-all" href="https://spacenews.com/" target="_blank" rel="noopener noreferrer">https://spacenews.com/</a>
                </li>
                <li>
                    <a class="break-all" href="https://www.thespacereview.com/" target="_blank" rel="noopener noreferrer">https://www.thespacereview.com/</a>
                </li>
                <li>
                    <a class="break-all" href="https://www.geospatialworld.net/" target="_blank" rel="noopener noreferrer">https://www.geospatialworld.net/</a>
                </li>
            </ul>
        </section>



        </section>
    </div>
</template>