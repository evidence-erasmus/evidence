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
            
            <h1 class="mb-0">Rymden</h1>
            <h5 class="font-normal uppercase leading-tight">Elevmaterial</h5>
        
            <section id="s-0">
                <h2 id="s-0-title">Introduktion</h2>

                <p>
                    Redan som liten var du kanske nyfiken på rymden och vad som finns där ute, om olika himlakroppar och rymdens oändlighet. I denna modul ska du få möjlighet att reflektera över rymden och rymdutforskningar. Välj och titta på en <a href="#s1">introduktionsvideo</a>, där några rymdrelaterade idéer, drömmar och myter tas upp och diskutera dem i grupper. I grupper ska ni välja en myt eller en fråga att undersöka som kan utföras praktiskt eller med hjälp av s information från vetenskaplig litteratur och internet (se Figur 1). 
                </p>

                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-sv.webp">
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
                    Välj och titta på en introduktionsvideo. Anteckna dina första tankar och känslor om det som presenteras.
                </p>
                <div class="grid grid-cols-1 gap-2 xl:grid-cols-2">
                    <UiYoutube video="a95oKCDgIow" />
                    <UiYoutube video="wlstnH27waw" />
                    <UiYoutube video="RvLdHwy4qMI" />
                    <UiYoutube video="d86JQpemSZ4" />
                </div>
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
                <li><span class="text-rose-400 font-bold">Myt 3:</span> Rymdresor kommer snart att stoppas pga rymdskräp.</li>
                <li><span class="text-rose-400 font-bold">Myt 4:</span> Utomjordingar besöker jorden med oidentifierade flygande objekt (UFO), men regeringarna och astronauterna döljer UFO-bevis för oss</li>
                <li><span class="text-rose-400 font-bold">Myt 5:</span> Rymdfärder bidrar till luftföroreningar och global uppvärmning</li>
                <li><span class="text-rose-400 font-bold">Myt 6:</span> Människor borde kolonisera Mars för att säkerställa vår framtida överlevnad</li>
                <li><span class="text-rose-400 font-bold">Myt 7:</span> Det finns liv någon annanstans i universum</li>
                <li><span class="text-rose-400 font-bold">Myt 8:</span> Rymdavfall kan inte tas bort från rymden på ett säkert sätt</li>
                <li><span class="text-rose-400 font-bold">Myt 9:</span> För att ta sig till Mars, måste ett rymdskepp ha en raketmotor igång under hela färden</li>
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

            <hr class="mt-10 mb-40 print:my-10" />
            
            <section id="s3">
                <h2 id="s3t">
                    Aktivitet 3: Undersökning / Mythbusting
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
                <h2 id="s-6-title">Aktivitet 6: Debatt – rollspel</h2>

                <h4>
                    I denna aktivitet förväntas du:
                </h4>

                <ul>
                    <li>Bekanta dig med de problem som ställs i rollspelet och se dem ur olika perspektiv</li>
                    <li>Forma eller förtydliga dina egna åsikter</li>
                    <li>Arbeta mot en gemensam gruppvision</li>
                    <li>Presentera och försvara dina argument</li>
                    <li>Rösta om politiska ståndpunkter</li>
                </ul>

                <p>
                    Rollspelet utformas som en debatt med totalt åtta roller som ni representerar i lag om 3-4 spelare. Varje team väljer en talesman, medan andra fungerar som rådgivare.
                </p>

                <h3>
                    Tema: Rymdresor
                </h3>

                <p>
                    Debatten är relaterad till kontroversen att “Human Spaceflight Program är ett onödigt slöseri med resurser som skulle behövas för mer akuta behov.”
                </p>
                <p>
                    Detta tema utgår från två ståndpunkter: för och emot utvecklingen av Human Spaceflight Program i ditt land (att sända egna astronauter till rymden). 
                </p>

                <div class="md:grid md:grid-cols-2 gap-4">
                    <div class="border-4 border-green-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Ståndpunkt 1 (för)
                        </h4>
                        <p>
                            Staten måste erkänna att rymdfärder med besättning erbjuder en stor möjlighet för mänskliga vetenskapliga framsteg och nationens utveckling. Staten måste investera i bemannade uppdrag i rymden.
                        </p>
                    </div>
                    <div class="border-4 border-red-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Ståndpunkt 2 (emot):
                        </h4>
                        <p>
                            Staten måste bara fokusera på obemannade rymdprogram eftersom de är mer ekonomiskt och ekologiskt hållbara, säkra och tillräckliga för att garantera  tekniska framsteg.
                        </p>
                    </div>
                </div>

                <h3>
                    Fas I (≈25 minuter)
                </h3>
                <p>
                    Varje lag får ett rollkort med en profil som laget ska representera. Du måste lägga fram välgrundade argument för din ståndpunkt. 
                </p>
                <p>
                    Som stödmaterial finns det flera infokort. (Se infokorten längre ner på webbsidan)
                </p>

                <div class="grid grid-cols-5 gap-2">
                    <div v-for="i in 4" class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">
                        Info {{ i }}
                    </div>
                    <div class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">...</div>
                </div>

                <p>
                    Ni söker också efter ytterligare information på Internet (välj tillförlitliga källor, som det gjordes tidigare i Aktivitet 3). 
                </p>


                <h3>
                    Fas II (≈20 minuter)
                </h3>
                <p>
                    Gruppdiskussion: Hitta på argument för att stödja er ståndpunkt. Inledande argument kan förberedas i en visuell form med hjälp av PowerPoint-presentationer.

                </p>

                <h3>
                    Fas III (≈45 minuter, tiden kan behöva förlängas)
                </h3>
                <p>
                    Debatten är uppdelat i två delar. I den första delen får talespersonen för varje team två-tre minuter på sig att presentera sin roll och inledande argument.
                </p>
                <p>
                    När vart och ett av de åtta lagen har presenterat sina argument görs en fem minuters paus för utveckling av motargument. 
                </p>
                <p>
                    Efter pausen, i den andra delen av rollspelet, diskuterar de olika talespersonerna med varandra och försöker motarbeta varandras argument och föra fram egen ståndpunkt. Uppgiften för rådgivare (andra teammedlemmar) är att stödja sin teamtalesperson genom att föreslå svar på de argument som lagts fram av teamen som representerar andra roller.
                </p>
                <p>
                    I slutet av debatten kan deltagarna rösta för eller emot att använda skattebetalarnas pengar för de bemannade eller robotiserade rymduppdragen.
                </p>


                <h3>
                    Spelkort
                </h3>

                <UiCardGamePrintMessage url="../tools/cards/space" />
            
                <ToolsCardgameSpace :printMode="false" />


            </section>

        </section>
    </div>
</template>