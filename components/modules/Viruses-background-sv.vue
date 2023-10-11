<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <UiTableOfContents class="w-full lg:max-w-xs print:hidden" />
        


        <section class="e-article" lang="sv" style="hyphens:auto">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Virus</h1>
            <h5 class="font-normal uppercase leading-tight">Vetenskaplig bakgrundsinformation</h5>
        
            <section id="s1">
                <h2 id="s1t">1. Virus kontra bakterier</h2>
            
                <p class="font-bold">Bakterier och virus kan orsaka många vanliga infektioner. Men vad är skillnaden mellan dessa två typer av smittsamma organismer?</p>
                <p><span class="e-term font-Heading">Bakterier</span>  är små mikroorganismer som består av en enda cell. De är väldigt olika och kan ha många former och strukturella egenskaper. Bakterier kan leva i nästan alla tänkbara miljöer, inklusive i eller på människokroppen. Endast en handfull bakterier orsakar infektioner hos människor. Dessa bakterier kallas patogena bakterier.</p>
                <p><span class="e-term font-Heading">Virus</span> är en annan typ av små mikroorganismer, till och med mindre än bakterier. Liksom bakterier är de väldigt olika och har en mängd olika former och egenskaper. Virus är parasitära. Det betyder att de kräver levande celler eller vävnad att växa i. Virus kan invadera cellerna i din kropp och använda komponenterna i dina celler för att växa och föröka sig. Vissa virus dödar till och med värdceller som en del av deras livscykel. Skillnader mellan virus och bakterier kan ses i figur 1 och finns i tabell 1.</p>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-01__bacteria-vs-virus.webp"
                    credits="Källa: https://inducoat.com/?attachment_id=24945&lang=en"
                    :elevated="true">
                    <template #caption>
                        <b>Figur 1.</b>  Strukturella skillnader mellan virus och bakterier
                    </template>
                </UiContentImage>
            
                <table class="mt-20">
                    <caption class="text-left pb-4"><b>Tabell 1.</b> Skillnader mellan bakterier och virus</caption>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Bakterie</th>
                            <th>Virus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="align-baseline">
                                Levande
                            </th>
                            <td>
                                <b>Levande organism.</b><br />Bakterier är levande organismer med en enda cell som kan generera energi, röra sig och föröka sig (vanligtvis genom binär fission). Detta gör att bakterier kan leva på många ställen – jord, vatten, växter och människokroppen – och tjäna många syften.<br />Bakterier inkluderar både parasiter och icke-parasiter.
                            </td>
                            <td>
                                <b>Icke levande.</b><br />Virus växer och fortplantar sig bara inuti värdcellerna som infekteras. När virus hittas utanför dessa levande celler är virus vilande. Deras "liv" kräver därför kapning av en levande cells biokemiska aktiviteter.<br />Alla virus är intracellulära parasiter.
                            </td>
                        </tr>
                        <tr>
                            <th class="align-baseline">Antal celler</th>
                            <td>Encellig, en cell</td>
                            <td>Inga celler, inte levande</td>
                        </tr>
                        <tr>
                            <th class="align-baseline">Fortplantning</th>
                            <td>Delas upp i 2</td>
                            <td>Invaderar en värdcell och tar över cellen och gör kopior av virusets DNA/RNA. Förstör värdcellen och släpper ut nya virus</td>
                        </tr>
                        <tr>
                            <th class="align-baseline">Storlek</th>
                            <td>Bakterier är mycket större än virus, från 800 nm till 1000 nm. Bakterier kan ses i ljusmikroskop.</td>
                            <td>Storleken på virus är mellan 20 nm och 400 nm. Virus är bara synliga i elektronmikroskop.</td>
                        </tr>
                        <tr>
                            <td class="align-baseline">Vissa bakterier kan vara nyttiga, t.ex. vissa bakterier behövs i tarmen.</td>
                            <td>Virus är inte nyttiga för kroppen. Virus kan vara till hjälp vid genteknik.</td>
                        </tr>
                        <tr>
                            <th class="align-baseline">Infektion</th>
                            <td>Bakteriell infektion är vanligtvis begränsad till en del av kroppen, beskriven som en lokaliserad infektion. Infektioner kan orsakas av bakterier eller av toxiner (endotoxiner) som produceras.</td>
                            <td>En virusinfektion är systemisk (som drabbar hela kroppen). Virus infekterar en värdcell och förökar sig i tusental, lämnar värdcellen och infekterar andra kroppsceller.</td>
                        </tr>
                        <tr>
                            <th class="align-baseline">Sjukdom</th>
                            <td>Bakteriesjukdomar inkluderar lunginflammation, tuberkulos, stelkramp och matförgiftning.</td>
                            <td>Systemiska sjukdomar orsakade av virusinfektion inkluderar influensa, mässling, polio, AIDS och covid-19.</td>
                        </tr>
                        <tr>
                            <th class="align-baseline">Behandling</th>
                            <td>Antibiotika och vacciner förebygger sjukdomen.</td>
                            <td>Vacciner förhindrar spridningen och antivirala läkemedel hjälper till att bromsa reproduktionen men kan inte stoppa den helt.</td>
                        </tr>
                    </tbody>
                </table>

                <UiCardInfo class="mb-8" >
                    Antibiotika kan hjälpa immunsystemet att döda bakterieinfektioner men rår ej på virusinfektioner. Antivirala läkemedel fungerar annorlunda än antibiotika och är för närvarande endast effektiva mot ett fåtal virussjukdomar, såsom influensa, herpes, hepatit B och C samt HIV. Virusinfektioner kan vara mycket svårare att döda än bakterieinfektioner eftersom viruset går in i mänskliga celler. Immunsystemet kan ibland döda de infekterade cellerna innan viruset kan fortplanta sig. Men eftersom viruset förökar sig dödar det ofta den infekterade cellen genom att cellen exploderar, vilket gör att viruset kan spridas till andra celler i kroppen.
                </UiCardInfo>
                
                <section class="e-card">
                    <h4 class="mt-4">Referenser</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://courses.lumenlearning.com/suny-biology2xmaster/chapter/prevention-and-treatment-of-viral-infections/">https://courses.lumenlearning.com/suny-biology2xmaster/chapter/prevention-and-treatment-of-viral-infections/</a></li>
                            <li><a href="https://bodell.mtchs.org/OnlineBio/BIOCD/text/chapter16">https://bodell.mtchs.org/OnlineBio/BIOCD/text/chapter16</a></li>
                        <li><a href="
                            http://www.hcrowder.com/disease-reading.html">
                            http://www.hcrowder.com/disease-reading.html</a></li>
                    </ul>
                </section>
            </section>
            
            
            
            
            
            
            
            
            <hr class="mt-10 mb-40" />

            <section id="s2">
                <h2 id="s2t">2. Varför dödar inte antibiotika virus?</h2>
                
                <p>Antibiotika riktar in sig på tillväxtmaskineriet i bakterier (inte virus) för att döda eller hämma just dessa bakterier. Antibiotika kan inte döda virus eftersom virus har olika strukturer och replikerar annorlunda än bakterier. Dessutom leder överanvändning av antibiotika över hela världen till ökningen av den globala <a href="https://www.drugs.com/article/antibiotic-resistance.html" target="_blank" rel="noopener noreferrer">antibiotikaresistensen</a>. Se Tabell 2 under vilka tillstånd antibiotika kan vara till hjälp (OBS! Beslutet om dess användning tas av behandlande läkare).</p>
                
                <table class="leading-tight e-card">
                    <caption class="text-left pb-4">
                        <b>Tabell 2.</b> Behov av antibiotika vid vanliga luftvägsinfektioner
                    </caption>
                    <thead class="border text-center">
                        <tr>
                            <th rowspan="2" class="border p-1">Common respi&shy;ratory infections</th>
                            <th colspan="3" class="border p-1">Common cause</th>
                            <th rowspan="2" class="border p-1">Are<br />anti&shy;biotics needed</th>
                        </tr>
                        <tr>
                            <th class="border p-1">Virus</th>
                            <th class="border p-1">Virus or bacteria</th>
                            <th class="border p-1">Bacteria</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <tr>
                            <td class="border p-1">Common cold / runny nose</td>
                            <td class="border p-1">Yes</td>
                            <td class="border p-1"></td>
                            <td class="border p-1"></td>
                            <td class="border p-1">No</td>
                        </tr>
                        <tr>
                            <td class="border p-1">Sore throat (except strep)</td>
                            <td class="border p-1">Yes</td>
                            <td class="border p-1"></td>
                            <td class="border p-1"></td>
                            <td class="border p-1">No</td>
                        </tr>
                        <tr>
                            <td class="border p-1">COVID-19</td>
                            <td class="border p-1">Yes</td>
                            <td class="border p-1"></td>
                            <td class="border p-1"></td>
                            <td class="border p-1">No</td>
                        </tr>
                        <tr>
                            <td class="border p-1">Flu</td>
                            <td class="border p-1">Yes</td>
                            <td class="border p-1"></td>
                            <td class="border p-1"></td>
                            <td class="border p-1">No</td>
                        </tr>
                        <tr>
                            <td class="border p-1">Bronchitis / chest cold<br /><span class="text-sm italic">(in otherwise healthy children and adults)</span> *</td>
                            <td class="border p-1"></td>
                            <td class="border p-1">Yes</td>
                            <td class="border p-1"></td>
                            <td class="border p-1">No *</td>
                        </tr>
                        <tr>
                            <td class="border p-1">Middle ear infection</td>
                            <td class="border p-1"></td>
                            <td class="border p-1">Yes</td>
                            <td class="border p-1"></td>
                            <td class="border p-1">Maybe</td>
                        </tr>
                        <tr>
                            <td class="border p-1">Sinus infection</td>
                            <td class="border p-1"></td>
                            <td class="border p-1">Yes</td>
                            <td class="border p-1"></td>
                            <td class="border p-1">Maybe</td>
                        </tr>
                        <tr>
                            <td class="border p-1">Strep throat</td>
                            <td class="border p-1"></td>
                            <td class="border p-1"></td>
                            <td class="border p-1">Yes</td>
                            <td class="border p-1">Yes</td>
                        </tr>
                        <tr>
                            <td class="border p-1">Whooping couch</td>
                            <td class="border p-1"></td>
                            <td class="border p-1"></td>
                            <td class="border p-1">Yes</td>
                            <td class="border p-1">Yes</td>
                        </tr>
            
                    </tbody>
                    <tfoot class="border text-center">
                        <tr>
                            <td colspan="5" class="py-0 px-3">
                                <p class="text-sm italic">* Studies shows that in otherwise healthy children and adults, antibiotics for bronchitis won't help patients feel better.</p>
                                <p class="text-xs text-slate-400">Källa: https://www.cdc.gov/antibiotic-use/images/VirusOrBacteria-Original-1200by675.jpg</p>
                            </td>
                        </tr>
                    </tfoot>
                </table>

                <section class="e-card">
                    <h4 class="mt-0">Referens</h4>
                    <ul class="text-sm break-all">
                        <li>
                            <a href="https://www.drugs.com/article/antibiotics-and-viruses.html" target="_blank" rel="noopener noreferrer">https://www.drugs.com/article/antibiotics-and-viruses.html</a>
                        </li>
                        <li>
                            <a href="https://www.virology.ws/2009/10/19/ten-cool-facts-about-viruses/" target="_blank" rel="noopener noreferrer">https://www.virology.ws/2009/10/19/ten-cool-facts-about-viruses/</a>
                        </li>
                    </ul>
                </section>
            </section>
        
        







            <hr class="mt-10 mb-40" />

            <section id="s3">
                <h2 id="s3t">3. Hur vacciner fungerar</h2>

                <h3>Kroppens naturliga svar</h3>
                <p>En <span class="e-term font-Heading">patogen</span> är en bakterie, virus, parasit eller svamp som kan orsaka sjukdom i kroppen. Varje patogen består av flera delar, vanligtvis unika för den specifika patogenen och sjukdom den orsakar. Den del av en patogen som orsakar bildandet av antikroppar kallas antigen. Antikropparna som produceras som svar på patogenens antigen är väsentliga för immunsystemet. Du kan betrakta antikroppar som soldaterna i din kropps försvarssystem. Varje antikropp, eller soldat, i vårt system, är tränad att känna igen ett specifikt antigen. Vi har tusentals olika antikroppar i våra kroppar. När människokroppen exponeras för ett antigen för första gången tar det tid för immunsystemet att svara och producera antikroppar specifika mot det antigenet (fig. 2).</p>
                <p>Antikroppar mot en patogen skyddar i allmänhet inte mot en annan patogen förutom när två patogener är väldigt lika varandra, som kusiner. När de antigenspecifika antikropparna väl har producerats arbetar de med resten av immunsystemet för att förstöra patogenen och stoppa sjukdomen. När kroppen väl producerar antikroppar i sitt primära svar på ett antigen, skapar den också antikroppsproducerande minnesceller, som förblir vid liv även efter att antikropparna besegrat patogenen. Anta att kroppen utsätts för samma patogen mer än en gång. I så fall är antikroppssvaret mycket snabbare och mer effektivt än första gången eftersom minnescellerna är redo att pumpa ut antikroppar mot det antigenet. Detta innebär att om personen utsätts för en farlig patogen i framtiden, kommer immunförsvaret att kunna reagera omedelbart och skydda personen mot sjukdomar.</p>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-03.webp"
                    credits="Källa: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html"
                    :elevated="true">
                    <template #caption>
                        <b>Figur 2.</b> För varje nytt antigen behöver vår kropp bygga en specifik antikropp
                    </template>
                </UiContentImage>

                <h3>Hur hjälper vacciner?</h3>
                <p>Vacciner minskar riskerna för att få en sjukdom genom att arbeta med din kropps naturliga försvar för att bygga skydd. När du får ett vaccin svarar ditt immunförsvar.</p>
                <p>Vaccin innehåller försvagade eller inaktiva delar av en viss organism (antigen) som utlöser ett immunsvar i kroppen (fig. 3). Nyare vacciner innehåller ”ritningen” för att producera antigener snarare än själva antigenet. Oavsett om vaccinet består av själva antigenet eller ritningen så att kroppen ska producera antigenet, kommer denna försvagade version inte att orsaka sjukdomen hos den som får vaccinet. Det kommer dock att få deras immunsystem att svara ungefär som det skulle ha gjort på sin första reaktion på den faktiska patogenen.</p>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-04.webp"
                    credits="Källa: https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work"
                    :elevated="true">
                    <template #caption>
                        <b>Figur 3.</b> Antikroppsutveckling genom vaccination
                    </template>
                </UiContentImage>
                <p>Vaccin fungerar genom att introducera/utsätta dina vita blodkroppar för det främmande proteinet i ett virus. När din kropp har stött på ett virus och byggt upp ett immunsvar (producerat B- och T-celler) mot viruset, sparas B- och T-celler så att om samma virus eller bakterier någonsin infekterar kroppen igen, kan immunsystemet snabbt komma igång och förhindra att patogenen gör dig sjuk.</p>

                <h3>Immunisering och relaterade utmaningar</h3>
                <p>Vi har nu vacciner för att förhindra spridningen av mer än 20 livshotande sjukdomar, vilket hjälper människor i alla åldrar att leva längre och hälsosammare liv. Immunisering förhindrar för närvarande 2-3 miljoner dödsfall årligen från sjukdomar som difteri, stelkramp, kikhosta, influensa och mässling.</p>
                <p>Vi har vaccinationer mot många allvarliga virusinfektioner (mässling, påssjuka, hepatit A, hepatit B och vissa virus – som de som orsakar förkylning). Ändå kvarstår problemet att virus kan mutera från en person till en annan. När viruset muterar förändras det tillräckligt mycket för att immunsystemet inte längre känner igen det. Immuncellerna som lagras för att döda viruset känner inte längre igen det som samma sjukdom och vet inte hur de ska förgöra det. Det är så en infektion med ursprungligen samma men aningen muterat virus kan fortsätta att undvika immunförsvaret. Vaccination mot dessa virus är svårt eftersom de redan har ändrat sin uppbyggnad när vaccinerna utvecklas.</p>
                <section class="e-card">
                    <h4 class="mt-0">Referenser</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work" target="_blank" rel="noopener noreferrer">https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work</a></li>
                        <li><a href="https://www.nytimes.com/interactive/2020/health/pfizer-biontech-covid-19-vaccine.html" target="_blank" rel="noopener noreferrer">https://www.nytimes.com/interactive/2020/health/pfizer-biontech-covid-19-vaccine.html</a></li>
                        <li><a href="https://media.nature.com/original/magazine-assets/d41586-021-03552-w/d41586-021-03552-w.pdf" target="_blank" rel="noopener noreferrer">https://media.nature.com/original/magazine-assets/d41586-021-03552-w/d41586-021-03552-w.pdf</a></li>
                        <li><a href="https://opentextbc.ca/biology/chapter/12-1-viruses/" target="_blank" rel="noopener noreferrer">https://opentextbc.ca/biology/chapter/12-1-viruses/</a></li>
                    </ul>
                </section>
            </section>








            <hr class="mt-10 mb-40" />

            <section id="s4">
                <h2 id="s4t">4. Vaccinutveckling och vaccin säkerhet</h2>

                <h3>Utveckling</h3>
                <p>Vaccinutveckling börjar vanligtvis i ett forskningslaboratorium beläget på ett universitet, vårdcentral eller ett bioteknikföretag. Under vaccinutvecklingsprocessen utvecklar forskare olika reagenser för att testa och mäta deras effekt (eller brist på sådan). Ofta behövs flera år av forskning för att hitta idéer som fungerar.</p>
                <p>Olika forskare eller forskargrupper kan arbeta mot samma mål under vaccinutvecklingen. Arbetets framsteg presenteras i olika möten och refereegranskade artiklar i tidskrifter. Om något arbete verkar lovande, kan läkemedelsforskare vända sig till dem som arbetar med det för att utöka sin forskning mot produktutveckling.</p>

                <h3>Testning</h3>
                <p>Om en lovande vaccinkandidat har hittats måste den testas på djur. Detta kallas den prekliniska fasen. Först används små djur som möss, råttor, kaniner och andra. Om vaccinkandidaten visar effekt på små djur, måste effekten vanligtvis bevisas på större djur som apor. Om vaccinet utlöser ett immunsvar testas det i tre faser i kliniska prövningar på människor (WHO, 2021).</p>
                <p>I fas 1 ges vaccinet till några frivilliga för att bedöma dess säkerhet, bekräfta att det genererar ett immunsvar och man behöver bestämma rätt dos. Generellt i denna fas testas vacciner på en liten grupp unga, friska vuxna frivilliga.</p>
                <p>I fas 2 ges vaccinet till flera hundra frivilliga för att bedöma dess säkerhet och förmåga att ytterligare generera ett immunsvar. Deltagare i denna fas har samma egenskaper (såsom ålder och kön) som de som vaccinet är avsett för. Det finns vanligtvis flera försök i denna fas för att utvärdera olika åldersgrupper (äldre, vuxna, barn). En grupp som inte får vaccinet brukar också inkluderas i bedömningen om förändringarna i den vaccinerade gruppen tillskrivs vaccinet eller har skett av en slump.</p>
                <p>I fas 3 ges vaccinet till tusentals frivilliga – jämfört med en liknande grupp människor som inte fick vaccinet utan fick placebo. Detta syftar till att avgöra om vaccinet är effektivt mot sjukdomen det är designat för att skydda mot. Det syftar också till att studera dess säkerhet i en mycket större grupp människor. Fas 3-prövningar genomförs ofta över flera länder och platser inom ett land för att säkerställa att resultaten av vaccinets prestanda gäller många olika populationer.</p>
                <p>Under fas 2- och 3-prövningar vet inte de frivilliga och inte heller forskarna som genomför studien  vilka frivilliga som hade fått det vaccin som testas eller en placebo. Detta kallas "blindning" och är nödvändigt för att säkerställa att varken frivilliga eller forskarna påverkas i sin bedömning av effektivitet eller säkerhet genom att veta vem som fick vilken produkt.</p>
                <section class="e-card">
                    <h4 class="mt-0">Referens</h4>
                    <ul class="text-sm break-all">
                        <li>
                            <a href="https://www.who.int/news-room/feature-stories/detail/how-are-vaccines-developed" target="_blank" rel="noopener noreferrer">https://www.who.int/news-room/feature-stories/detail/how-are-vaccines-developed</a>
                        </li>
                    </ul>
                </section>

                <h3>Auktorisation och övervakning</h3>
                <p>När resultaten av alla dessa kliniska prövningar är tillgängliga krävs en rad steg. Tjänstemän vid Europeiska läkemedelsmyndigheten och senare i varje land granskar noggrant studiedata och beslutar om vaccinet ska godkännas. Alla försök måste vara korrekt utförda och väldokumenterade. Ett vaccin måste bevisas säkert och effektivt i en bred population innan det godkänns. Ribban för vaccinets säkerhet och effektivitet är exceptionellt hög. Detta inkluderar granskning av effektivitet och säkerhet för godkännanden av regulatoriska och folkhälsopolicyer.</p>
                <p>Ytterligare övervakning av säkerhet och effektivitet sker under användningen av vacciner. Detta gör det möjligt för forskare att hålla reda på vaccinets effekt och säkerhet även om de används av många människor under en lång tidsram. Dessa data används för att justera policyerna för vaccinanvändning.</p>
                <section class="e-card">
                    <h4 class="mt-0">Referens</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://www.worldscientific.com/doi/pdf/10.1142/S2529732521400034" target="_blank" rel="noopener noreferrer">https://www.worldscientific.com/doi/pdf/10.1142/S2529732521400034</a></li>
                    </ul>
                </section>
            </section>








            <hr class="mt-10 mb-40" />

            <section id="s5">
                <h2 id="s5t">5. Ansiktsmasker mot virus och bakterier</h2>

                <p>Ansiktsmasker används ofta för att skydda mot virus och bakterier. Dess användning ökade betydligt eftersom de användes som skydd mot SARS-CoV-2-viruset. Bland olika typer av ansiktsmasker är kirurgiska ansiktsmasker bland de mest använda ansiktsskydden i COVID-19-pandemin. Vanligtvis är de blåfärgade från ena sidan, vilket är det yttre lagret (fig. 4). Huvudsyftet med kirurgiska ansiktsmasker är att skydda patienter från potentiell kontakt med bakterier och virus som andas ut av bäraren. De förhindrar väl spridningen av coronaviruset genom luften men är mindre effektivt på att skydda bäraren från viruset.</p>
                <p>FFP2- eller FFP3-masker (ofta kallade andningsskydd) bör användas för att filtrera och bättre andas in luft. Numreringssystemet (FFP1, FPP2, FFP3) indikerar dessa enheters filtreringseffektivitet (certifierade enligt EN 149-2001-standarden). FFP2 och FPP3 har en filtreringseffektivitet för luftburna partiklar (inklusive de som innehåller viruset) på 92 % respektive 98 %. Båda maskerna har även litet inåtläckage: &lt;8% respektive &lt;2%. I FFP2 används ofta specialgummi på andningsskyddets yttre skikt. Om en ventil (som underlättar utandning) i yrkesmiljöer har tillåtits, i fallet med SARS-CoV-2, bör endast andningsskydd utan ventil användas för att även filtrera utandningsluft.</p>
                <p>Med covid-19-pandemin har en ny ansiktsmask introducerats: filtreringsmasken. Denna typ av mask är gjord av flerskiktstyg (ett måste vara ett nanofiberfilter som garanterar en bakteriell och skadlig finfilterkapacitet på minst 90%). Denna mask kombinerar hög filtreringskapacitet med återanvändbarhet då den kan tvättas i maskin i 60 grader.</p>

                <div class="grid gap-3 my-15 md:grid-cols-2 e-card">
                    <UiContentImage
                        src="https://evidence.onkel.ee/assets/viruses-06__mask-01.webp"
                    >
                        <template #caption>
                            Kirurgisk mask
                        </template>
                    </UiContentImage>
                    <UiContentImage
                        src="https://evidence.onkel.ee/assets/viruses-06__mask-02.webp"
                        caption="">
                        <template #caption>
                            FFP2 mask (respirator)
                        </template>
                    </UiContentImage>
                    <UiContentImage
                        src="https://evidence.onkel.ee/assets/viruses-06__mask-03.webp">
                        <template #caption>
                            FFP3-mask (respirator) med ventil
                        </template>
                    </UiContentImage>
                    <UiContentImage
                        src="https://evidence.onkel.ee/assets/viruses-06__mask-04.webp">
                        <template #caption>
                            Filtrerande mask
                        </template>
                    </UiContentImage>
                </div>

                <p><i><b>Figur 4</b>. Olika typer av ansiktsmasker</i></p>

                <p>Ansiktsmaskernas effektivitet har testats i speciella laboratorier, t.ex. i exponeringskammaren. I dessa studier, bär en person på virus. Därefter fyller partikelkoncentrationerna bakom partikelgeneratorn exponeringskammaren med små partiklar; i likhet med aerosoler mäts maskerna och jämförs med koncentrationen i den allmänna atmosfären i exponeringskammaren.</p>
                <p>Det starkaste beviset är dock baserat på epidemiologiska data från verkliga situationer. Till exempel avtar den dagliga tillväxttakten för COVID-19 efter krav på ansiktsmask i 15 delstater och District of Columbia i USA. En annan studie undersökte dödsfall i coronavirus i 198 länder och fann att de med kulturella normer eller regeringspolitik som gynnar användning av ansiktsmasker hade lägre dödsfrekvens.</p>
                <p>Många Facebook- och sociala medieranvändare har delat vilseledande inlägg angående långvarig användning av ansiktsmasker som orsakar syrebrist i kroppen - hypoxi. Ändå antyder forskningsartiklar och experter att sådana symtom är osannolikt förekommande hos de flesta människor om inte bäraren har redan existerande luftvägssjukdomar som astma eller kronisk obstruktiv lungsjukdom (KOL). Risken för hypoxi och hyperkapni (att ha för mycket koldioxid i blodomloppet ) är osannolikt med tyg- och kirurgiska ansiktsmasker eftersom de inte sitter tätt. Ändå varnas det för att ansiktsmasker inte ska placeras på små barn under två år, de med andningssvårigheter eller vid träning.</p>
                <section class="e-card">
                    <h4 class="mt-0">Referenser</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9" target="_blank" rel="noopener noreferrer">https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9</a></li>
                        <li><a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2774266" target="_blank" rel="noopener noreferrer">https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2774266</a></li>
                        <li><a href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00818" target="_blank" rel="noopener noreferrer">https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00818</a></li>
                        <li><a href="https://www.ajtmh.org/view/journals/tpmd/103/6/article-p2400.xml" target="_blank" rel="noopener noreferrer">https://www.ajtmh.org/view/journals/tpmd/103/6/article-p2400.xml</a></li>
                        <li><a href="https://www.epa.gov/sciencematters/epa-researchers-test-effectiveness-face-masks-disinfection-methods-against-covid-19" target="_blank" rel="noopener noreferrer">https://www.epa.gov/sciencematters/epa-researchers-test-effectiveness-face-masks-disinfection-methods-against-covid-19</a></li>
                        <li><a href="https://journals.asm.org/doi/full/10.1128/mSphere.00637-20" target="_blank" rel="noopener noreferrer">https://journals.asm.org/doi/full/10.1128/mSphere.00637-20</a></li>
                        <li><a href="https://pubmed.ncbi.nlm.nih.gov/33626065/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/33626065/</a></li>
                    </ul>
                </section>

                <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                    <div>
                        <h3 class="mt-6 pt-3 mb-10">För elever att studera vidare</h3>
                        <ul class="leading-tight break-all">
                            <li><a href="https://www.youtube.com/watch?v=npXP 5wqNzaI&ab_channel=BeSmart" target="_blank" rel="noopener noreferrer">För att förklara många av de presenterade myterna kan man se på film under några minuter: 3:24 - 6:39</a></li>
                            <li>
                                <a href="https://drive.google.com/file/d/1ziN9u4ukz-FZR3jz5JSBxZPSnnBzZgWK/view?usp=drive_link" target="_blank" rel="noopener noreferrer">https://drive.google.com/file/d/1ziN9u4ukz-FZR3jz5JSBxZPSnnBzZgWK/view?usp=drive_link</a> - om effektiviteten hos maskerna för att filtrera partiklar
                            </li>
                            <li>
                                <a href="https://drive.google.com/file/d/1ZXOhGczMUQ4Ec5spEjx24MYcRj4GR1xz/view?usp=drive_link" target="_blank" rel="noopener noreferrer">https://drive.google.com/file/d/1ZXOhGczMUQ4Ec5spEjx24MYcRj4GR1xz/view?usp=drive_link</a> - om maskernas effektivitet för att förebygga sjukdomar
                            </li>
                            <li>
                                <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/n95-respirators-surgical-masks-face-masks-and-barrier-face-coverings#s3" target="_blank" rel="noopener noreferrer">https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/n95-respirators-surgical-masks-face-masks-and-barrier-face-coverings#s3</a>
                            </li>
                            <li>
                                <a href="https://www.sciencedirect.com/science/article/pii/S2452199X20301481" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/pii/S2452199X20301481</a>
                            </li>
                            <li>
                                <a href="https://www.weforum.org/agenda/2020/10/covid-19-coronavirus-disease-size-compairson-zika-health-air-pollution/" target="_blank" rel="noopener noreferrer">https://www.weforum.org/agenda/2020/10/covid-19-coronavirus-disease-size-compairson-zika-health-air-pollution/</a>
                            </li>
                        </ul>
                    </div>
                </UiCardInfo>
            </section>









            <hr class="mt-10 mb-40" />

            <section id="s6">
                <h2 id="s6t">6. Virus och handhygien</h2>

                <h3>Handdesinfektionsmedel eller tvål?</h3>
                <p>Våra händer kan vara en viktig faktor för överföring av infektioner. När de appliceras på händerna och noggrant <a href="https://www.cdc.gov/handwashing/when-how-handwashing.html" target="_blank" rel="noopener noreferrer">skrubbas i minst 20 sekunder</a>, kommer alkoholbaserade handdesinfektionsmedel och tvål att stoppa coronaviruset. Tvål stör dock det klibbiga bandet mellan patogener och din hud, vilket gör att patogenerna kan direkt glida av huden. Du neutraliserar inte bara viruset, utan du får också fysiskt bort det från dina händer. Att utöva god handhygien är en enkel förebyggande strategi som de flesta enkelt kan genomföra, och många studier har visat effektiviteten av handhygien för att förhindra överföring av smittsamma patogener, inklusive coronavirus som SARS-CoV-2.</p>
                <section class="e-card">
                    <h4 class="mt-0">Referens</h4>
                    <ul class="text-sm break-all">
                        <li>
                            <a href="https://www.uchealth.org/today/why-soap-and-water-work-better-than-hand-sanitizer-to-remove-the-coronavirus/" target="_blank" rel="noopener noreferrer">https://www.uchealth.org/today/why-soap-and-water-work-better-than-hand-sanitizer-to-remove-the-coronavirus/</a>
                        </li>
                    </ul>
                </section>

                <h3>Försvagar coronaviruset med tvål</h3>
                <p>Coronaviruset har fått sitt namn från "corona"- proteintopparna som är inbäddade på virusets yta. Spikarna, som är ansvariga för att infektera värden, är förankrade i ett membran. Membranet är virusets "skal" och virusets svaga punkt.</p>
                <p>Tvålens molekyler har två kemiskt distinkta delar: ett hydrofilt (”vattenälskande”) 'huvud' och en hydrofob (”vattenhatande”) 'svans'. Huvudet hjälper tvålen att blandas med vatten, medan svansen kan interagera med andra hydrofoba molekyler som lipider.</p>
                <p>Lyckligtvis består coronavirusets membran huvudsakligen av lipidmolekyler. De hålls samman av svaga kemiska interaktioner mellan enskilda molekyler. De hydrofoba (vattenhatande) "svansarna" av tvålens molekyler kan bryta interaktionerna mellan lipidmolekylerna i coronavirusmembranet (se fig. 5).</p>
                <p>Tvålens svans kan störa de svaga interaktionerna mellan lipidmolekyler i membranet och slita isär det. Antag att viruset bryts upp innan det skyddas säkert i en värdcell. I så fall kommer det inte längre att kunna spridas till andra celler.  Tvålmolekyler omger sedan virusfragmentet med alla svansar vända inåt. Detta kluster kallas en micell (se fig. 6). De utåtvända hydrofila huvudena gör att micellen kan sköljas ner i avloppet med vatten. Enbart vatten räcker inte.</p>

                <div class="grid gap-2 md:grid-cols-2 e-card">
                    <UiContentImage
                        src="https://evidence.onkel.ee/assets/viruses-07.webp"
                        credits="Källa: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html">
                        <template #caption>
                            <b>Figur 5.</b> Tvålmolekyler som förstör viruset
                        </template>
                    </UiContentImage>
                    <UiContentImage
                        src="https://evidence.onkel.ee/assets/viruses-08.webp"
                        credits="Källa: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html">
                        <template #caption>
                            <b>Figur 6.</b> Micell bestående av tvålmolekyler och virusfragment
                        </template>
                    </UiContentImage>
                </div>

                <p>Den givna informationen gäller även för andra höljeförsedda virus (influensa, hepatit B och C och Ebolavirus) eftersom deras hölje består av fosfolipider.</p>

                <section class="e-card">
                    <h4 class="mt-0">Referens</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://www.science.org.au/curious/people-medicine/hand-sanitiser-or-soap-making-informed-choice-covid-19" target="_blank" rel="noopener noreferrer">https://www.science.org.au/curious/people-medicine/hand-sanitiser-or-soap-making-informed-choice-covid-19</a></li>
                    </ul>
                </section>

                <h3>Att välja handsprit</h3>
                <p>Världshälsoorganisationen (WHO) rekommenderar alkoholbaserade handdesinfektionsmedel om du inte har tvål till hands.</p>
                <p><b>Alkoholbaserade handdesinfektionsmedel tros fungera genom att förhindra normal funktionalitet hos proteiner från mikrober – inklusive bakterier och vissa virus. Handdesinfektionsmedel med hög alkoholhalt kan också förstöra lipidskalet som omger coronaviruset.</b> För att vara effektivt måste handsprit innehålla minst 60 procent alkohol. Tillsatser i desinfektionsmedlet kan hindra alkoholen från att avdunsta för snabbt, vilket gör att viruset kan dränkas längre.</p>
                <p>Det finns dock vissa risker med att använda alkoholbaserade handdesinfektionsmedel. Det finns en ökad risk för alkoholförgiftning hos barn, och frekvent användning av handsprit kan resultera i antimikrobiell resistens. Det finns alternativa alkoholfria handdesinfektionsmedel, där bensalkonium är vanligast. Nyligen genomförda studier har visat att alkoholfritt handdesinfektionsmedel fungerar lika bra och inte orsakar den välbekanta svidande känslan man känner vid användande av alkoholhandsprit.</p>
                
                <section class="e-card">
                    <h4 class="mt-0">Referenser</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0048969720340833?via%3Dihub" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/abs/pii/S0048969720340833?via%3Dihub</a></li>
                        <li><a href="https://www.journalofhospitalinfection.com/article/S0195-6701(20)30547-8/fulltext#secsectitle0040" target="_blank" rel="noopener noreferrer">https://www.journalofhospitalinfection.com/article/S0195-6701(20)30547-8/fulltext#secsectitle0040</a></li>
                    </ul>
                </section>
            </section>










            <hr class="mt-10 mb-40" />

            <section id="s7">
                <h2 id="s7t" class="mt-40 text-5xl">7. Vaccinmyter</h2>

                <h3><span class="text-rose-400">Myt 1:</span> Vacciner orsakar autism/allvarliga biverkningar.</h3>
                <p>Den utbredda rädslan för att vacciner ökar risken för autism har sitt ursprung i en studie från 1997 publicerad av den brittiske kirurgen Andrew Wakefield. Artikeln publicerades i The Lancet, en prestigefylld medicinsk tidskrift, som tyder på att vaccinet mot mässling, påssjuka och röda hund (MMR) ökade autism hos brittiska barn.</p>
                <p>Uppsatsen har sedan dess misskrediterats grundligt på grund av allvarliga procedurfel, med endast 12 deltagare i studien, hemliga ekonomiska intressekonflikter och etiska kränkningar. Andrew Wakefield förlorade sin medicinska licens och artikeln drogs tillbaka från The Lancet.</p>
                <p>För närvarande, mot teorin om autism-vaccination, har flera studier nu identifierat symtom på autism hos barn långt innan de får MMR-vaccinet. Dessutom ger ny forskning bevis för att autism utvecklas i livmodern, långt innan ett barn föds eller får vaccinationer. Ingen av de senare studierna har rapporterat ett samband mellan något vaccin och sannolikheten för att utveckla autism.</p>
                <section class="e-card">
                    <h4 class="mt-0">Referenser</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(97)11096-0/fulltext" target="_blank" rel="noopener noreferrer">https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(97)11096-0/fulltext</a></li>
                        <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home" target="_blank" rel="noopener noreferrer">https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home</a></li>
                    </ul>
                </section>
                <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                    <div>
                        <h3 class="mt-6 pt-3 mb-10">För ytterligare studie</h3>
                        <ul class="leading-tight">
                            <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect/after.html" target="_blank" rel="noopener noreferrer">Possible Side Effects After Getting a COVID-19 Vaccine</a></li>
                            <li><a href="https://www.bbc.com/news/health-55932832" target="_blank" rel="noopener noreferrer">Study reveals extent of Covid vaccine side-effects</a></li>
                            <li><a href="https://www.nature.com/articles/d41586-021-00290-x" target="_blank" rel="noopener noreferrer">COVID vaccines and safety: what the research says</a></li>
                            <li><a href="https://health.clevelandclinic.org/covid-19-vaccine-side-effects/" target="_blank" rel="noopener noreferrer">Here’s What to Know About the COVID-19 Vaccine Side Effects</a></li>
                            <li><a href="https://www.who.int/news-room/q-a-detail/coronavirus-disease-(covid-19)-vaccines-safety" target="_blank" rel="noopener noreferrer">Coronavirus disease (COVID-19): Vaccines safety</a></li>
                            <li><a href="https://www.historyofvaccines.org/content/articles/vaccine-side-effects-and-adverse-events" target="_blank" rel="noopener noreferrer">Vaccine Side Effects and Adverse Events</a></li>
                            <li><a href="https://www.bbc.com/news/health-56375307" target="_blank" rel="noopener noreferrer">Vaccine side effects: My experience of them and what they mean</a></li>
                            <li><a href="https://vk.ovg.ox.ac.uk/vk/vaccine-side-effects" target="_blank" rel="noopener noreferrer">Vaccine side effects and adverse reactions</a></li>
                            <li>📺<a href="https://www.youtube.com/watch?v=F6NKbQzo4aE" target="_blank" rel="noopener noreferrer">Vaccine side effects are actually a good thing</a></li>
                            <li>📺<a href="https://www.youtube.com/watch?v=Atrx1P2EkiQ" target="_blank" rel="noopener noreferrer">Vaccines and the Immune Response: How Vaccines Work</a></li>
                        </ul>
                    </div>
                </UiCardInfo>

                




                <h3><span class="text-rose-400">Myt 2:</span> Spädbarns immunsystem kan inte hantera flera vacciner</h3>
                <p>Barn får vaccin i unga år eftersom de löper störst risk att bli sjuka eller dö om de får dessa sjukdomar. Även nyfödda barn är immuna mot vissa sjukdomar (t.ex. vattkoppor) eftersom de får antikroppar från sina mödrar; denna immunitet varar bara några månader. Dessutom får de flesta spädbarn inte skyddande antikroppar mot difteri, kikhosta, polio, stelkramp, hepatit B eller Hib från sina mödrar.</p>
                <p>För att minska antalet sprutor ett barn får vid ett läkarbesök erbjuds vissa vacciner som en kombination (två eller flera olika vacciner har kombinerats till en enda spruta). Exempel på kombinationsvaccin är difteri-stelkramp-kikhosta (DTap) och mässling-påssjuka-röda hund (MMR).</p>
                <p>Vetenskapliga data visar att få flera vacciner samtidigt inte orsakar några hälsoproblem. Spädbarns immunförsvar är tuffare än man tror. Baserat på antalet antikroppar som finns i blodet, skulle ett barn teoretiskt ha förmåga att svara på ett mycket större antal vacciner än vad som någonsin använts (frågan är om det skulle vara 1 000, 10 000 eller 100 000 på en gång). Även om alla ~10 (beroende på nationell vaccinationsplan) schemalagda vacciner gavs på en gång, skulle det bara använda en bråkdel av ett barns immunförsvar. I verkligheten utsätts spädbarn för otaliga bakterier och virus varje dag, och immuniseringar är försumbara i jämförelse. Studier har inte heller visat att exponering för flera vacciner under de första 23 levnadsmånaderna skulle vara associerad med en ökad risk för infektioner som inte riktas mot vaccin.</p>
                <section class="e-card">
                    <h4 class="mt-0">Referenser</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home" target="_blank" rel="noopener noreferrer">https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home</a></li>
                        <li><a href="https://www.bmj.com/content/364/bmj.l1481/rr-11" target="_blank" rel="noopener noreferrer">https://www.bmj.com/content/364/bmj.l1481/rr-11</a></li>
                        <li><a href="https://pubmed.ncbi.nlm.nih.gov/11773551/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/11773551/</a></li>
                    </ul>
                </section>




                <h3><span class="text-rose-400">Myt 3:</span> Immunitet förvärvad genom en sjukdom är bättre än immunitet förvärvad genom vaccination</h3>
                <p>Det är sant att en naturlig infektion nästan alltid resulterar i en starkare immunitet mot sjukdomen än en vaccination. Farorna med detta tillvägagångssätt överväger dock vida de relativa fördelarna. Priset för immunitet efter naturlig infektion kan vara lunginflammation från vattkoppor eller pneumokocker, intellektuell funktionsnedsättning från Haemophilus influenzae typ b (Hib), fosterskador från röda hund, levercancer från hepatit B-virus, död i mässling, etc. Om du önskade få immunitet mot exempelvis mässling, genom att insjukna i sjukdomen, skulle du ha en chans på 1 på 500 att dö av dina symtom. Däremot är antalet personer som har haft svåra allergiska reaktioner från ett MMR-vaccin mindre än en på en miljon.</p>
                <p>Ändå är det få vaccin som inducerar ett bättre immunsvar än naturlig infektion. Till exempel innehåller humant papillomvirus(HPV)-vaccinet en hög renhet av det specifika proteinet, vilket leder till ett bättre immunsvar än naturlig infektion. Andra exempel inkluderar stelkramp, Haemophilus influenzae typ b (Hib) och pneumokockvaccin.</p>
                <p>När det gäller covid-19 måste vissa saker klargöras. Det har visat sig att ett permanent skydd efter infektion är osannolikt. Även om coronapatienter fick "avsevärt immunminne" som involverade alla fyra viktiga delar av immunsystemet: minnes B-celler, antikroppar, minnes CD4+ T-celler och minnes CD8+ T-celler, började skyddet minska efter ett halvår. Dessutom har forskare visat ett "massivt dynamiskt område" i immunsvaret mellan individer, med en 200-faldig skillnad i antikroppsnivåer.</p>
                <p>Andra studier har visat att frivilliga som fick Moderna-vaccinet (mRNA) hade fler antikroppar – en markör för immunsvar – i blodet än personer som hade varit sjuka med covid-19. Detta faktum kan dock modifieras av sjukdomens svårighetsgrad eftersom det finns en korrelation mellan sjukdomens svårighetsgrad och bestående immunsvar – de flesta asymtomatiska patienter hade mycket få antikroppar efter sex månaders infektion. Således är den naturliga immuniteten som genereras från en SARS-CoV-2-infektion ofta oförutsägbar. Antikropparna som framkallades av mRNA-vaccinet riktade sig dessutom mot ett bredare spektrum av platser på den receptorbindande domänen (RBD) än de som framkallades av naturlig infektion.</p>
                <section class="e-card">
                    <h4 class="mt-0">Referenser</h4>
                    <ul class="text-sm break-all">
                        <li>
                            <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00675-9/fulltext" target="_blank" rel="noopener noreferrer">https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00675-9/fulltext</a>
                        </li>
                        <li>
                            <a href="https://science.sciencemag.org/content/371/6529/eabf4063" target="_blank" rel="noopener noreferrer">https://science.sciencemag.org/content/371/6529/eabf4063</a>
                        </li>
                        <li>
                            <a href="https://www.nejm.org/doi/full/10.1056/NEJMc2032195" target="_blank" rel="noopener noreferrer">https://www.nejm.org/doi/full/10.1056/NEJMc2032195</a>
                        </li>
                        <li>
                            <a href="https://www.researchsquare.com/article/rs-612205/v1" target="_blank" rel="noopener noreferrer">https://www.researchsquare.com/article/rs-612205/v1</a>
                        </li>
                        <li>
                            <a href="https://stm.sciencemag.org/content/13/600/eabi9915" target="_blank" rel="noopener noreferrer">https://stm.sciencemag.org/content/13/600/eabi9915</a>
                        </li>
                    </ul>
                </section>





                <h3><span class="text-rose-400">Myt 4:</span> Vacciner innehåller livshotande ämnen.</h3>
                <p>Människor är oroade över förekomsten av formaldehyd, kvicksilver eller aluminium i vacciner. Å ena sidan är dessa kemikalier giftiga för människokroppen i vissa nivåer. Å andra sidan kan endast små mängder av dessa kemikalier hittas i vacciner. Dessa mängder är mindre än vad vi får naturligt från näring eller den formaldehyd som produceras i högre hastighet av våra egna metabola system.</p>
                <p>Vissa grundämnen, såsom aluminiumsalter, tillsätts i vacciner eftersom de fungerar som en adjuvans, vilket innebär att deras närvaro ökar immunsvaret när du vaccineras. Dessutom innehåller endast vissa vacciner aluminiumsalter, och nya covid-19-vacciner innehåller dem inte alls. Ett fåtal vacciner har innehållit tiomersal som konserveringsmedel; dock innehåller inget av de vacciner som används till barn för närvarande detta. Tiomersal innehåller etylkvicksilver, som snabbt avlägsnas från människokroppen jämfört med metylkvicksilver, som bioackumuleras – så det är också skillnad i vilken form den giftiga metallen finns.  Ändå innehåller covid-19-vaccin inte gifter (t.ex.).</p>
                <section class="e-card">
                    <h4 class="mt-0">Referenser</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://stm.sciencemag.org/content/13/600/eabi9915" target="_blank" rel="noopener noreferrer">https://stm.sciencemag.org/content/13/600/eabi9915</a></li>
                        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6373706/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6373706/</a></li>
                        <li><a href="https://www.cdc.gov/vaccines/hcp/conversations/downloads/vacsafe-thimerosal-color-office.pdf" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/vaccines/hcp/conversations/downloads/vacsafe-thimerosal-color-office.pdf</a></li>
                        <li><a href="https://www.technologyreview.com/2020/12/09/1013538/what-are-the-ingredients-of-pfizers-covid-19-vaccine/" target="_blank" rel="noopener noreferrer">https://www.technologyreview.com/2020/12/09/1013538/what-are-the-ingredients-of-pfizers-covid-19-vaccine/</a></li>
                    </ul>
                </section>
                <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                    <div>
                        <h3 class="mt-6 pt-3 mb-10">För vidare studier</h3>
                        <ul class="leading-tight">
                            <li><a href="https://www.publichealth.org/public-awareness/understanding-vaccines/goes-vaccine/" target="_blank" rel="noopener noreferrer">What Goes Into A Vaccine?</a></li>
                            <li>📺<a href="https://www.youtube.com/watch?v=Atrx1P2EkiQ" target="_blank" rel="noopener noreferrer">Vaccines and the Immune Response: How Vaccines Work</a></li>
                            <li><a href="https://www.cdc.gov/vaccines/vac-gen/additives.htm" target="_blank" rel="noopener noreferrer">What’s in Vaccines?</a></li>
                        </ul>
                    </div>
                </UiCardInfo>






                <h3><span class="text-rose-400">Myt 5:</span> Bättre hygien och sanitet leder till minskade infektioner, inte vacciner</h3>
                <p>Det är delvis sant att vacciner inte förtjänar all ära för att minska eller eliminera andelen infektionssjukdomar. Det har visat sig att bättre sanitet, näring och utveckling av antibiotika har hjälpt till mycket. Infektioner som tyfus och kolera som överförs av förorenat vatten, en viktig orsak till sjukdom och död i början av 1900-talet, har minskat dramatiskt genom bättre sanitet. En nyligen genomförd granskning drog slutsatsen att handtvätt bidrar till att avvärja infektionssjukdomar. Ytterligare ett nytt bevis kommer från covid-19-karantän (lockdown) och förbättrad hygien med dramatiskt minskade säsongsinfluensafrekvenser.</p>
                <p>Men när dessa faktorer isoleras och antalet infektionssjukdomar analyseras kan vaccinernas roll inte förnekas. Ett exempel är mässling i USA. När det första mässlingsvaccinet introducerades 1963 hade infektionssiffrorna legat konstant på cirka 400 000 fall per år. Och även om hygieniska vanor och sanitet inte förändrades mycket under det följande decenniet, sjönk frekvensen av mässlingsinfektioner hastigt efter vaccinets introduktion, med endast cirka 25 000 fall 1970. Ett annat exempel är Hib-sjukdomen. Enligt CDC-data sjönk incidensen för denna sjukdom från 20 000 1990 till cirka 1 500 1993 efter vaccinets introduktion.</p>
                <p>Ytterligare ett bevis kommer från de senaste decennierna. Det har inte skett några förändringar i hygienen i den utvecklade världen, men det har skett en minskning av vaccinationsfrekvensen. Nu ser flera länder, såsom Storbritannien, USA, Tyskland, Spanien, etc., ett ökande antal mässling och andra sjukdomar som kan förebyggas med vaccin, identifierade som en framväxande sjukdom "hot spots".</p>
                <section class="e-card">
                    <h4 class="mt-0">Referenser</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://jptcp.com/index.php/jptcp/article/view/711" target="_blank" rel="noopener noreferrer">https://jptcp.com/index.php/jptcp/article/view/711</a></li>
                        <li><a href="https://www.nature.com/articles/d41586-020-01538-8" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/d41586-020-01538-8</a></li>
                        <li><a href="https://www.nature.com/articles/d41586-020-03519-3" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/d41586-020-03519-3</a></li>
                        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3222407/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3222407/</a></li>
                    </ul>
                </section>





                <h3><span class="text-rose-400">Myt 6:</span> Vacciner kan infektera barnet med sjukdomen det försöker förebygga</h3>
                <p>Vissa av vaccinerna är levande vacciner som innehåller levande försvagade mikroorganismer/virus, som fortfarande kan replikera i den vaccinerade värden. Mikroorganismerna är "försvagade", vilket betyder att de har förlorat det mesta av sin sjukdomsframkallande förmåga men har fortfarande immunogena egenskaper. Det är alltså alltid mycket mindre allvarligt än om ett barn skulle bli infekterat med själva det sjukdomsframkallande viruset. Levande försvagade vacciner är för vaccin mot mässling, påssjuka, röda hund (MMR-kombinerat vaccin), rotavirus, smittkoppor, vattkoppor och gula febern. I de flesta fall visar levande vacciner signifikant högre immunogenicitet än inaktiverade vacciner eftersom naturlig infektion imiteras nästan perfekt genom att framkalla ett mer omfattande spektrum av immunologiska svar. Dessa vacciner är dock inte gynnade för barn med försvagat immunförsvar, såsom de som behandlas för cancer.</p>
                <p>Levande vacciner kan verkligen orsaka milda symtom som liknar den sjukdom de skyddar mot. De som tagit vaccin upplever dock kroppens immunsvar mot vaccinet, inte själva sjukdomen. Det finns bara ett registrerat fall där ett vaccin visade sig orsaka sjukdom. Detta var det orala poliovaccinet (OPV) som inte längre används och för närvarande ersätts med en dödad virusform som kallas det inaktiverade poliovaccinet (IPV).</p>
                <section class="e-card">
                    <h4 class="mt-0">Referens</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://www.sciencedirect.com/science/article/pii/B9781455710768000090" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/pii/B9781455710768000090</a></li>
                    </ul>
                </section>




                <h3><span class="text-rose-400">Myt 7:</span> Vi behöver inte vaccinera eftersom många länder har låga infektionsfrekvenser</h3>
                <p>Flockimmunitet uppstår när en stor del av ett samhälle (flocken) blir immun mot en sjukdom, vilket gör osannolikt att sjukdomen sprids från person till person. Tack vare "flockimmunitet" ser många människor inte behovet av vaccination. Så länge en stor majoritet av människor är immuniserade i någon befolkning, kommer den oimmuniserade minoriteten också att skyddas. Detta är viktigt eftersom det finns en del av befolkningen – spädbarn, gravida kvinnor, äldre och de med försvagat immunförsvar – som så ofta inte kan få vaccin. Anta dock att många människor inte vaccinerar sig själva eller sina barn. I så fall försvinner "flockimmuniteten", vilket öppnar möjligheter för virus och bakterier att etablera sig och sprida sig. Med så många människor som är resistenta kommer en infektionssjukdom aldrig att få en chans att etablera sig och spridas.</p>
                <p>Dessutom bär internationella resenärer ofta på sjukdom från utlandet, och en ovaccinerad individ löper mycket större risk att bli sjuk eller att människor har blivit smittade under resan. Den ökade incidensen av mässling illustrerar detta i USA de senaste åren. Så länge sjukdomen existerar riskerar vi att bli smittade.</p>
                <section class="e-card">
                    <h4 class="mt-0">Referenser</h4>
                    <ul class="text-sm break-all">
                        <li><a href="https://www.cdc.gov/mmwr/volumes/68/wr/mm6819a4.htm" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/mmwr/volumes/68/wr/mm6819a4.htm</a></li>
                        <li><a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9" target="_blank" rel="noopener noreferrer">https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9</a></li>
                    </ul>
                </section>
                <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                    Fler covid-19-myter och relaterad vetenskaplig forskning kan hittas från: <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/science-in-5/episode-8---myth-vs-science" target="_blank" rel="noopener noreferrer">
                        WHO - Myt vs Vetenskap
                    </a>
                </UiCardInfo>
            </section>


        </section>
    </div>
</template>