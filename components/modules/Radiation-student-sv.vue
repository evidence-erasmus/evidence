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
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" />
        </ClientOnly>



        <section class="e-article print:not-prose" lang="sv" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <!-- <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" /> -->
            <h1 class="mb-0">Strålning </h1>
            <h5 class="font-normal uppercase leading-tight">Elevmaterial</h5>
        
            <h2 id="section-1">Introduktion</h2>

            
            <p>
                I denna modul uppmanas du att reflektera över strålningsrelaterade rädslor och motbevisa eller bekräfta myter om olika former av strålning. Utgå från en introduktionsvideo där några strålningsrelaterade rädslor och myter tas upp och diskutera dem i grupp. Gruppdiskussion kommer att leda till val av en nybearbetningsaktivitet där du kommer att leta efter bevis för att motbevisa eller bekräfta en vald myt. Denna aktivitet kan utföras experimentellt eller med hjälp av så kallade sekundära bevis (information från vetenskaplig litteratur och pålitliga källor on the internet). Genom denna aktivitet lär du dig att bedöma tillförlitligheten hos informationskällor (vetenskapliga databaser, populärvetenskap, andra medier). Du måste först ställa en testbar hypotes (se Figur 1). 
            </p>

            <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-en.webp" />

            <p>
                Efter att ha hittat bevis och dragit slutsatser kommer du att förbereda en presentation av dina resultat för klasskamraterna (eller annan publik) på ett relevant och övertygande sätt (till exempel i form av videoinlägg eller PowerPoint-presentation). Modulen avslutas med ett rollspel om strålningsfrågor relaterade till kärnkraft där du kan ta ställning och föreslå lösningar med hjälp av vetenskaplig kunskap och personliga värderingar som tillskrivs till olika roller i spelet.
            </p>
                        
            

            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-2">Aktivitet 1: Videointroduktion</h2>
            
            <p>
                Se introduktionsvideon och anteckna dina första tankar om och upplevelser av de problem som presenteras.
            </p>

            <UiYoutube video="ccMo9WfKeOY" />

            



<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="section-3">Aktivitet 2: Gruppdiskussion</h2>
            
            <p>
                Efter att ha sett videon diskutera ämnet inom din grupp (4-6 medlemmar).
            </p>

            <ol class="leading-tight">
                <li>
                    Berätta om dina första tankar och känslor om problemen som presenteras i videon för dina klasskamrater.
                </li>
                <li>
                    Som grupp uppmanas ni att välja en av rädslorna, myterna eller frågorna för vidare bearbetning baserat på information som kan hittas från olika källor: internet, läroböcker, etc. eller/och om möjligt experimentellt.
                </li>
            </ol>
            
            <p>
                Som ett alternativ kan du vidga ditt perspektiv på strålningsrelaterade myter och titta på andra myter som kan vara av intresse för dina gruppmedlemmar.
            </p>
            
            
            <h2 id="section-myths">
                Andra myter och missuppfattningar om strålning
            </h2>
            
            <ul class="leading-tight">
                <li><span class="text-rose-400 font-bold">Myt 1:</span> Sola är bra för hälsan, särskilt under vintersäsongen.</li>
                <li><span class="text-rose-400 font-bold">Myt 2:</span> Mikrovågsugnar sänder stark strålning, och det är farligt att vara nära ugnen när den fungerar.</li>
                <li><span class="text-rose-400 font-bold">Myt 3:</span> Det är dåligt att sova nära en smartphone och utsättas för dess strålning under lång tid.</li>
                <li><span class="text-rose-400 font-bold">Myt 4:</span> Strålning som sänds ut av 5G mobilkommunikationsmaster är farligare för människor än den som används i den tidigare generationens nätverk: 2G, 3G och 4G.</li>
                <li><span class="text-rose-400 font-bold">Myt 5:</span> Solning inomhus i solarium är säkrare än att sola utomhus.</li>
                <li><span class="text-rose-400 font-bold">Myt 6:</span> Strålning från en tandröntgen ger svår huvudvärk.</li>
                <li><span class="text-rose-400 font-bold">Myt 7:</span> Vi måste hålla oss borta från bestrålad mat eftersom den är radioaktiv och farlig.</li>
                <li><span class="text-rose-400 font-bold">Myt 8:</span> Radon är bra för hälsa i små doser, eg. i radonbadet.</li>
                <li><span class="text-rose-400 font-bold">Myt 9:</span> UV-strålning kan endast blockeras av speciellt UV-block designat material (används för paraplyer eller badkläder).</li>
                <li><span class="text-rose-400 font-bold">Myt 10:</span> Efter att ha tagit medicinsk strålbehandling blir en person radioaktiv.</li>
            </ul>

            





<!-- 
    333333 
        33
     33333
        33
    333333
 -->            
            <h2 id="section-mythbusting">
                Aktivitet 3: Mythbusting
            </h2>
            
            <p>
                Du ska nu snäva till myten/frågan till en testbar hypotes - ett påstående som kan testas eller en fråga som kan besvaras genom din forskning. Tänk på att en hypotes inte bara är en gissning – den bör baseras på befintlig kunskap. Den måste också vara testbar, vilket innebär att du kan stödja eller motbevisa den som ett resultat av din studie.
            </p>

            <p>
                Planera dina fortsatta aktiviteter efter en cyklisk process enligt figur 2. Du bör fundera på om din myt kan testas experimentellt, bekräftas/motbevisas med hjälp av modern teknik, till exempel mobiltelefoner som mätinstrument, datormodeller och simuleringar, eller med hjälp av sekundära bevis (t ex redan utförda experiment som har publicerats eller tillgängliga i form av YouTube-videor). Utifrån det bör du välja Aktivitet 3a eller 3b för vidare studier. Du kan använda mer än en av dessa metoder genom att tillämpa den så kallade trianguleringsprincipen – öka trovärdigheten av dina bevis genom prövning av överensstämmelse av information från olika källor.
            </p>

            <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                    <Tab as="template" v-slot="{ selected }">
                        <button
                        class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                        :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                        >Aktivitet 3a: Mythbusting baserat på experiment</button>
                    </Tab>
                    
                    <Tab as="template" v-slot="{ selected }">
                        <button
                        class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                        :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                        >Aktivitet 3b: Mythbusting baserat på sekundära bevis</button>
                    </Tab>
                    
                    </TabList>
            
                    <TabPanels class="mt-2">
                        <TabPanel class="focus:outline-none">
                            <ModulesRadiationStudentActivity3aSv />
                        </TabPanel>
                        <TabPanel class="focus:outline-none">
                            <ModulesRadiationStudentActivity3bSv />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
            
            
            






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
            <h2 id="section-7">Aktivitet 6: Rollspel</h2>

            <h4>
                I denna aktivitet förväntas du:
            </h4>

            <ul>
                <li>Bekanta dig med de problem som ställs i rollspelet och se dem ur olika perspektiv</li>
                <li>Forma eller förtydliga din egen åsikt</li>
                <li>Arbeta mot en gemensam gruppvision</li>
                <li>Presentera och försvara dina argument</li>
                <li>Rösta på politiska ståndpunkter och dela dina åsikter</li>
            </ul>

            <p>
                Rollspelet skulle kunna utformas som ett tv-debattprogram med totalt åtta roller som man skulle representera i lag om 3–4 spelare. Varje team nominerar en medlem att fungera som talesman, medan andra fungerar som rådgivare. Två elever i klassen kommer att vara tv-debattmoderatorer (programledare). Moderatorer kommer att behöva göra tidshantering under debatten och presentera sammanfattande kommentarer i slutet av rollspelet. De kan bjuda in deltagare att rösta om politiska ståndpunkter.
            </p>


            
            <h3>
                Tema 1: Kärnenergi
            </h3>

            <p>
                Det specifika syftet för arbete med detta tema är att utveckla ditt kritiska tänkande och argumentationsförmåga när det gäller frågan om kärnenergi.
                <br />
                Debatten är relaterad till myten att <i><b>"Kärnenergi är inte säker"</b></i>.
                <br />
                Detta tema har två positioner: för och emot kärnkraft. Således delas klassen in i två grupper efter deras tilldelade roller.
            </p>

            <div class="md:grid md:grid-cols-2 gap-4">
                <div class="border-4 border-green-400 rounded-lg p-3  text-center">
                    <h4 class="my-2">
                        Position 1: För
                    </h4>
                    <p>
                        Staten måste erkänna att kärnenergi är säker och erbjuder en "gyllene möjlighet" att skapa en renare och mer rättvis värld. Staten måste investera i att skapa en säker kärnavfallskyrkogård (slutförvaring).
                    </p>
                </div>
                <div class="border-4 border-red-400 rounded-lg p-3  text-center">
                    <h4 class="my-2">
                        Position 2: Emot
                    </h4>
                    <p>
                        Staten måste stänga alla kärnreaktorer i landet till 2030. Säker kärnkraftsstation och säker avfallskyrkogård är en illusion.
                    </p>
                </div>
            </div>


            <h3>
                Fas I (≈ 25 minuter)
            </h3>

            <p>
                Varje lag får (en urvalsmetod kan bestämmas tillsammans med din lärare) ett rollkort som innehåller en kort profil över den roll laget ska representera, tillsammans med argumenten till stöd för det perspektiv som ska försvaras. Utöver rollkorten får varje lag ett arbetsblad de ska fylla i under rollspelet ( <span class="bg-red-300">se arbetsblad )</span>.
            </p>

            <p>
                Du måste lägga fram välgrundade argument för din ståndpunkt / position.
            </p>

            <p>
                Kärnenergitema har flera infokort relaterade till det.
            </p>

            <div class="grid grid-cols-5 gap-2">
                <div v-for="i in 4" class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">
                    Info {{ i }}
                </div>
                <div class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">...</div>
            </div>

            <p>
                Alla spelare har tillgång till alla infokort. Varje team väljer de som de tycker är särskilt relevanta för deras roll. De söker också efter ytterligare information på Internet med tanke på vikten av att välja tillförlitliga källor, som det gjordes tidigare i Aktivitet 3.
            </p>





            <h3>
                Fas II (≈ 20 minuter)
            </h3>

            <h4>
                Gruppdiskussion:
            </h4>

            <p>
                I detta skede delar eleverna sina åsikter med andra och förfinar sina synpunkter och argument. Spelare använder informationskorten och annan information för att stödja sin position.
            </p>

            <p>
                Fas I och II kan fortsätta som en hemläxa och en förberedelse för debatt (fas III) som kommer att ske vid följande undervisningstillfälle. Inledande argument kan förberedas i förbättrad visuell form med hjälp av korta videor och PowerPoint-presentationer
            </p>





            <h3>
                Fas III (≈ 45 min., tiden kan behöva förlängas)
            </h3>

            <p>
                Debatt eller egentligt rollspel är uppdelat i två delar. I den första delen får talespersonen för varje team tre minuter på sig att presentera sin roll och inledande argument, som de också listade på arbetsbladet i fas II (se första kolumnen i arbetsbladet). Detta arbetsblad inkluderar också kolumner för att notera de motargument som förts fram av andra team, såväl som bemötanden av dessa (se andra och tredje kolumnen i arbetsbladet) som skulle användas vidare i rollspelet. När vart och ett av de åtta lagen har presenterat sina argument kommer det att finnas en fem minuters paus, vilket gör att motargument kan utvecklas såväl som vederläggningarna av dessa.
            </p>

            <p>
                Efter den fem minuter långa pausen, i den andra delen av rollspelet, diskuterar de olika talespersonerna med varandra och försöker motarbeta varandras argument till stöd för sin egen ståndpunkt. Uppgiften för rådgivare (andra teammedlemmar) under denna del av rollspelet är att stödja sin teamtalesperson genom att fortsätta att föreslå vederläggningar av de argument som lagts fram av teamen som representerar andra roller.
            </p>

            <p>
                Dina argument och "professionella" idéer är viktiga i debatten!
            </p>

            <p>
                Under debatten modererar TV-programledarna aktiviteten. I slutet av debatten ger moderatorerna en sammanfattning av teman och åsikter som hade framkommit under diskussionen.
            </p>

            <p>
                Om moderatorer anser det nödvändigt ber de deltagarna att rösta för eller emot den föreslagna utfasningen av kärnenergiproduktionen.
            </p>







            <h3>Spelkort</h3>



            <UiCardGamePrintMessage url="../tools/cards/radiation" />

            <ToolsCardgameRadiation :printMode="false" />

            <hr>


        </section>
    </div>
</template>