<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="drugs-bg-en" />
        </ClientOnly>

        <section class="e-article" lang="sv" style="hyphens: auto;">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Droger</h1>
            <h5 class="font-normal uppercase leading-tight">Vetenskaplig bakgrundsinformation</h5>
        
            
            <section id="s-1">
                <h2 id="s-1t">Introduktion</h2>
                
                <p class="mt-20">
                    Modulen är inriktad på cannabis (även känd som marijuana, bland andra namn), som är en psykoaktiv drog från cannabisväxten. 
                </p>
                <p>
                    I texten nedan hittar du förklaringar till följande fakta, myter och missuppfattningar:
                </p>
                <h4>
                    <a href="#s2">Vad är cannabis?</a>
                </h4>
                <ul class="leading-tight">
                    <li class="my-0">
                        <a href="#myth-1">Myt nr 1: Cannabis är inte så farligt för hälsan</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth2">Myt nr 2: Cannabis är okej för vissa ungdomar</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-3">Myt nr 3: Cannabis är en medicinsk drog och därför säker för alla</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-4">Myt nr 4: Marijuana hjälper ens humör och främjar mental hälsa</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth5">Myt nr 5: Cannabis är inte beroendeframkallande</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-6">Myt nr 6: Cannabis är en gatewaydrog</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-7">Myt nr 7: Du kan inte överdosera cannabis</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-8">Myt nr 8: Passiv cannabisrökning är ofarlig</a>
                    </li>
                </ul>
            </section>







            <section id="s2">
                <h2 id="s2t">Vad är cannabis?</h2>
            
                <p>
                    <span class="e-term">Cannabis</span> Cannabis (eller marijuana) hänvisar till en grupp av tre växter: Cannabis sativa, Cannabis indica och Cannabis ruderalis. När blommorna av dessa växter skördas och torkas, får man en av de vanligaste drogerna i världen. Cannabis består av mer än 120 komponenter, som är kända som cannabinoider. De två mest kända cannabinoiderna är cannabidiol (CBD) och delta-9-tetrahydrocannabinol (THC). CBD är den näst vanligaste kemiska föreningen som finns i cannabis och har nyligen blivit mer populär som en alternativ behandling för ett antal hälsotillstånd. Det kan härröra från <span class="e-term">hampa</span> <sup><span class="tooltip" data-tip="Termen 'hampa' används för att betyda cannabis som innehåller 0,3 procent eller mindre THC i torrvikt">[1]</span></sup> eller från cannabis. THC är den huvudsakliga psykoaktiva ingrediensen i cannabis. THC aktiverar hjärnans belöningssystem genom att signalera frisättningen av hjärnkemikalien <span class="e-term">dopamin</span> <a href="https://nida.nih.gov/publications/research-reports/marijuana/how-does-marijuana-produce-its-effects" target="_blank" rel="noopener noreferrer"><sup>[2]</sup></a>.
                </p>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/drugs__cannabis.webp"
                    credits="Pixabay: https://pixabay.com/photos/marijuana-herbal-cannabis-hemp-5858148/"
                    :elevated="true">
                    <template #caption>
                        <b>Figur 1.</b> Cannabisväxter
                    </template>
                </UiContentImage>
                <p>
                    Ingen annan växt orsakar så mycket debatt och offentliga missuppfattningar som cannabis. Dess användning och popularitet genom tiderna har lett till att det blivit stämplat som en supermedicin av vissa och betraktat som ond i samhället av andra. Under det senaste decenniet har legaliseringen av drogen för medicinskbruk i många länder ökat allmänhetens missuppfattningar. Det finns en stor mängd information tillgänglig om dess risker och vice versa om dess fördelar. Ofta ges informationen på Internet utan ordentliga referenser. Därefter kommer vi att titta på vad forskare och medicinsk personal har att säga om de vanligaste myterna om cannabisanvändning med hänvisning till vetenskapliga studier.
                </p>
                <p>
                    <b>Mer information om hälsoeffekterna av cannabis kan hittas på:</b>
                    <br />
                    <a class="break-all" href="https://docs.google.com/document/d/1TN0kES-b9hDdiZEfVYaftIgjO9G0YoiGleZR04SdvQA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">https://docs.google.com/document/d/1TN0kES-b9hDdiZEfVYaftIgjO9G0YoiGleZR04SdvQA/edit?usp=sharing</a>
                </p>
            </section>








            <section id="s-3">
                <h2 id="s-3t">Myter om drogar</h2>

                <h3 id="myth-1">
                    <span class="text-rose-400">Myt nr 1:</span> Cannabis är inte så farligt för hälsan
                </h3>
                <p>
                    Det har hävdats att cannabis inte är så farligt för hälsan. Denna myt är allmänt spridd, med de främsta förklaringarna till att andra droger är mycket giftigare och cannabis används i helande syfte i flera länder.
                </p>
                <p>
                    Men enligt vetenskapliga bevis har cannabis förknippats med många hälsoeffekter (Figur 2). De viktigaste effekterna är psykisk ohälsa <sup><span class="tooltip" data-tip="Paruk S & Burns JK. 2016. Cannabis och psykisk ohälsa hos ungdomar: en recension. Sydafrikansk familjepraktik, 58:sup1, S18-S21.">[3]</span></sup>, hjärt- och kärlsjukdomar <sup><span class="tooltip" data-tip="Thomas G et al. 2014. Skadliga kardiovaskulära, cerebrovaskulära och perifera vaskulära effekter av marijuanainhalation: vad kardiologer behöver veta. American Journal of Cardiology 113(1):187-190.">[4]</span></sup>, lungsjukdomar <sup><span class="tooltip" data-tip="Joshi M et al. 2014. Marijuana och lungsjukdomar. Current Opinions of Pulmonary Medicine 20(2):173-179.">[5]</span></sup> samt luftvägs- och testikelcancer <sup><span class="tooltip" data-tip="National Academy of Sciences, Engineering and Medicine. 2017. Hälsoeffekterna av cannabis och cannabinoider: det aktuella bevisläget och rekommendationer för forskning. Washington, DC: National Academies Press.">[6]</span></sup>. Vissa riskgrupper som tonåringar och gravida kvinnor är särskilt utsatta för cannabisanvändning. Passiv rökning är också avgörande eftersom rök av cannabis är mycket lik tobaksrök när det gäller fysiska och kemiska egenskaper <sup><span class="tooltip" data-tip="Graves BM et al. 2020. Omfattande karakterisering av vanliga marijuana- och tobaksrök. Scientific Reports 10(1):7160.">[7]</span></sup>. Dessutom är cannabisbruk relaterat till missbruk, det ökar risken för att använda andra droger och överdoser har rapporterats.
                </p>
                <UiContentImage elevated src="https://evidence.onkel.ee/assets/drugs__cannabis-medical-effects.webp">
                    <template #caption>
                        <b>Figur 2.</b> Cannabis hälsoeffekter
                    </template>
                </UiContentImage>


                <h3 id="myth-2">
                    <span class="text-rose-400">Myt nr 2:</span> Cannabis är okej för vissa ungdomar
                </h3>
                <p>
                    I takt med att många unga använder cannabis, finns det en ökande tro på att det är okej att bli brukare. Men enligt studier kan cannabisanvändning, särskilt under tonåren och tidig vuxen ålder, skada den del av hjärnan som är förknippad med inlärning och minne. Vissa studier tyder på att regelbunden användning av marijuana i tonåren är förknippad med förändrad anslutning och minskad volym av specifika hjärnregioner som är involverade i ett brett spektrum av funktioner som minne <a href="http://venturacountylimits.org.s94613.gridserver.com//resources/article/E413A9/marijuana-and-your-kids-brain-video" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="Ventura County. 2015. Marijuana och ditt barns hjärna.” Marijuana i Ventura County: A Gateway for Discussion, Ventura County Behavioral Health."><sup>[8]</sup></a>, inlärning och impulskontroll jämfört med personer som inte använder det <sup><span class="tooltip" data-tip="Batalla A et al. 2013. Strukturella och funktionella avbildningsstudier hos kroniska cannabisanvändare: en systematisk genomgång av ungdoms- och vuxendata. PloS One 8(2):e 55821.">[9]</span></sup>. Viktigast av allt, enligt studier, kan regelbunden cannabisanvändning under tonåren leda till sämre skolprestationer och högre avhopp från skolan <sup><span class="tooltip" data-tip="Fergusson, DM et al. 2010. Cannabis och utbildningsresultat: Resultat från tre australiska kohortstudier. Drog- och alkoholberoende, 110, 3.">[10]</span></sup>. Det har visat sig att de strukturella förändringar i hjärnan som orsakas av cannabisanvändning av ungdomar och unga vuxna är permanenta – IQ-poäng går förlorade och kan inte återställas med åldern <sup><span class="tooltip" data-tip="Meier MH et al. 2012. Ihållande cannabisanvändare visar neuropsykologisk nedgång från barndomen till mitten av livet. Proceedings of the National Academy of Sciences of the United States of America, 109:E 2657-2664">[11]</span></sup>.
                </p>


                <h3 id="myth-3">
                    <span class="text-rose-400">Myt nr 3.</span> Cannabis är en medicinsk drog och därför säker för alla
                </h3>
                <p>
                    Det finns för närvarande tre erkända medicinska användningsområden för cannabis eller produkter som härrör från cannabis: illamående och kräkningar relaterade till kemoterapi, anorexi relaterad till framskriden hiv/aids och ett par sällsynta typer av epilepsi i barndomen <sup><span class="tooltip" data-tip="National Academies of Sciences, Engineering, and Medicine, 2017. Terapeutiska effekter av cannabis och cannabinoider. I Hälsoeffekterna av cannabis och cannabinoider: Det aktuella läget för bevis och rekommendationer för forskning. National Academies Press (USA)">[12]</span></sup>. Baserat på tidiga data kan cannabinoidterapier (som i första hand innehåller CBD) ges för behandling av ångest eller stressrelaterade störningar <sup><span class="tooltip" data-tip="Sharpe L et al. 2020. Cannabis, en orsak till ångest? En kritisk bedömning av de anxiogena och anxiolytiska egenskaperna. Journal of Translational Medicine, 18:374.">[13]</span></sup>. Men viss forskning har också visat att det kan ge känslor av ångest, panik, paranoia och psykos.
                </p>
                <p>
                    Om cannabis är godkänt för helande syfte är det med största sannolikhet en specifik produkt med fasta koncentrationer av specifika cannabinoider som cannabidiol (CBD) och delta-9-tetrahydrocannabinol (THC) (Figur 3). Dessutom har det diskuterats att förhållandet mellan CBD och THC spelar roll. I medicinsk cannabis har det visat sig att ratio spelar en avgörande roll för att förbättra det fysiska och funktionella välbefinnandet hos hjärncancerpatienter <sup><span class="tooltip" data-tip="Schloss J et al. 2021. En randomiserad klinisk prövning i fas 2 som utvärderar tolerabiliteten av två olika kvoter av medicinsk cannabis hos patienter med höggradiga gliom. Frontiers in Oncology, 11:649555.">[14]</span></sup>. Endast i kontrollerade (medicinska) produkter kan CBD- och THC-koncentration och doser kontrolleras.
                </p>
                <UiContentImage elevated src="https://evidence.onkel.ee/assets/drugs__cannabis-products.webp">
                    <template #caption>
                        <b>Figur 3.</b> Cannabis och produkter som innehåller vissa koncentrationer av cannabinoider.
                    </template>
                </UiContentImage>


                <h3 id="myth-4">
                    <span class="text-rose-400">Myt nr 4:</span> Marijuana hjälper ens humör och främjar mental hälsa
                </h3>
                <p>
                    Det är välkänt att TBC i cannabis gör en "hög". Detta kan få en att känna sig glad, avslappnad, pratsam eller skratta mer än vanligt. Man kan upptäcka att färger och musik är ljusare och skarpare. De exakta effekterna på humöret varierar mycket från en person till en annan, men i allmänhet överdrivs känslor på ett liknande sätt som alkoholens berusningseffekter <sup><span class="tooltip" data-tip="Gruber SA et al., 2009. Ändrad affektiv respons hos marijuanarökare: En FMRI-studie. Drug and Alcohol Dependence, 105(1-2), 139-153.">[15]</span></sup>.
                </p>
                <p>
                    Dessa "positiva" effekter verkar dock vara kortsiktiga, medan långvarig användning är relaterad till ett stort antal negativa effekter på mental hälsa. Liksom alkohol är marijuana och tillhörande THC-innehållande produkter berusande och kan bidra till nedsatt omdöme och ökad mottaglighet för psykiska problem, inklusive depression, sömnlöshet och paranoida vanföreställningar <a href="http://www2.nami.org/Content/NavigationMenu/Hearts_and_Minds/Smoking_Cessation/Marijuana_and_Mental_Illness.htm" target="_blank" rel="noopener noreferrer" class="tooltip" data-tip="National Alliance on Mental Illness (2013) Faktablad om marijuana och psykisk ohälsa. Duckworth, K., Freedman, J., reviewers."><sup>[16]</sup></a>. Det finns en betydande risk för återfall eller förvärrade symtom för personer med psykotiska störningar <sup><span class="tooltip" data-tip="D'Souza DR. 2015. Medicinsk marijuana: Står vagnen före hästen? Journal of the American Medical Association, 313(24), 2431-2432">[17]</span></sup>. Regelbunden användning av marijuana är korrelerad med en ökad risk och/eller försämring av symtomen för individer med ångest, depression och psykotiska sjukdomar <sup><span class="tooltip" data-tip="Hill, K. 2015. Medicinsk marijuana för behandling av kronisk smärta och andra medicinska och psykiatriska problem: En klinisk översikt. Journal of the American Medical Association, 313(24), 2474-2483.">[18]</span></sup>. Det finns vissa bevis på ett samband mellan användningen av starkare cannabis och psykotiska sjukdomar, inklusive schizofreni, men bevisen är fortfarande knappa och mekanismerna är inte helt klarlagda <sup><span class="tooltip" data-tip="Patel S. 2020. Sambandet mellan cannabisanvändning och schizofreni: orsakande eller botande? En systematisk review. Cureus Journal of Medical Science, 12(7), e9309">[19]</span></sup>.
                </p>


                <h3 id="myth-5">
                    <span class="text-rose-400">Myt nr 5:</span> Cannabis är inte beroendeframkallande
                </h3>
                <p>
                    Av alla människor som använder marijuana kommer endast cirka 9% att uppfylla kriterierna för missbruk någon gång i livet. Men om du tittar på personer som börjar använda marijuana som tonåringar (när hjärnan fortfarande utvecklas och är ganska sårbar), så har de fyra till sju gånger större risk att utveckla en cannabisberoende än vuxna <sup><span class="tooltip" data-tip="Winters KC & Lee C-YS. 2008. Sannolikhet att utveckla en alkohol- och cannabismissbruksstörning under ungdom: Samband med nyligen användande och ålder. Drug and Alcohol Dependence, 92(1-3), 239-247">[20]</span></sup>. Nya uppgifter tyder på att 30 % av dem som använder cannabis regelbundet kan ha en viss grad av störning <sup><span class="tooltip" data-tip="Hasin DS, et al. 2015. Prevalensen av marijuanamissbruk i USA mellan 2001-2002 och 2012-2013. JAMA Psychiatry, 72(12), 1235-1242">[21]</span></sup>.
                </p>
                <p>
                    Det har också visat sig att dagens stammar av THC är starkare – och nu producerar fysiologiskt beroende och abstinens som kräver missbruksbehandling <sup><span class="tooltip" data-tip="Copeland J, Swift W. 2009. Cannabisanvändningsstörning: epidemiologi och hantering. International Review of Psychiatry, 21(2), 96-103">[22]</span></sup>. När kroniska cannabisanvändare försöker abrupt avbryta behandlingen är tecknen på abstinenssyndrom – rastlöshet, irritabilitet, hyperaktivitet, sömnlöshet, illamående, kramper, minskad aptit, svettning och ökat drömmande – vanliga <sup><span class="tooltip" data-tip="Motorhuv U & Preuss UW. 2017. Cannabisabstinenssyndromet: aktuella insikter. Missbruk och rehabilitering, 8, 9-37">[23]</span></sup>.
                </p>


                <h3 id="myth-6">
                    <span class="text-rose-400">Myt nr 6:</span> Cannabis är en gatewaydrog
                </h3>
                <p>
                    Här, kausaliteten är inte bekräftad, men om vi tittar på alla personer som använder andra droger så har de flesta börjat med cannabis. Det betyder dock inte att om du använder cannabis kommer du att fortsätta att använda starkare droger som kokain. Men en viss procentandel av cannabisanvändarna kommer att göra det. Om vi jämför förekomsten av cannabis med andra droganvändare är cannabis mycket vanligare i de flesta länder <a href="https://www.emcdda.europa.eu/data/stats2021/gps_en" target="_blank" rel="noopener noreferrer"><sup>[24]</sup></a>. Men baserat på enbart prevalens kan vi inte dra samband mellan långvarig användning och gateway-hypotesen.
                </p>
                <p>
                    En 25-årig longitudinell studie har emellertid funnit att frekvensen av marijuanaanvändning är signifikant jämfört med andra olagliga droger för missbruk och beroende - särskilt hos tonåringar <sup><span class="tooltip" data-tip="Fergusson DM, et al. 2006. Cannabisanvändning och annan olaglig droganvändning: testa cannabis gateway-hypotesen. Beroende, 101(4), 556-569.">[25]</span></sup>. Två separata studier av tvillingar har jämfört huruvida tidig cannabisanvändning ledde till efterföljande missbruk eller beroende av andra olagliga droger. Resultaten visade två till fem gånger större risk än för en tvilling som inte använde marijuana. <sup><span class="tooltip" data-tip="Lynskey MT, et al. 2003. Upptrappning av droganvändning hos cannabisanvändare som börjar tidigt kontra tvillingkontroller. JAMA, 289(4), 427-433.">[26]</span></sup> <sup><span class="tooltip" data-tip="Agrawal A et al. 2004. Cannabis och andra olagliga droger: komorbid användning och missbruk/beroende hos män och kvinnor. Behavior Genetics, 34(3), 217-228">[27]</span></sup>
                </p>
                <p>
                    En annan förklaring av gateways och beroenden är baserad på hjärnans neurobiologi – minskad belöningskänslighet och ökad förväntningskänslighet överväldigar hjärnans kontrollkrets <sup><span class="tooltip" data-tip="Volkow ND, et al. 2010. Beroende: minskad belöningskänslighet och ökad förväntningskänslighet konspirerar för att överväldiga hjärnans kontrollkrets. Bioessays, 32(9), 748-755">[28]</span></sup>. Med andra ord, minnet driver våra förväntningar och ökar motivationen att konsumera drogen. Sammanfattningsvis, bevisen är blandade, men det verkar finnas ökad risk för missbruk av andra droger för många cannabisanvändare.
                </p>


                <h3 id="myth-7">
                    <span class="text-rose-400">Myt nr 7:</span> Du kan inte överdosera cannabis
                </h3>
                <p>
                    Man kan inte dö direkt av cannabis; dock kan man överdosera, bli fysiskt sjuk (illamående, kräkningar) och uppleva extrem ångest, paranoia och kortvarig psykos (förlust av kontakt med verkligheten). Dessa effekter kan ta flera timmar att försvinna. En överdos av cannabis händer inte ofta, men risken finns om du konsumerar inofficiella cannabisprodukter. Som vanligt kan man inte exakt mäta din dosering och innehåll av cannabinoider. Ändå, eftersom prevalensen av cannabisanvändning i de flesta länder är mycket högre än andra droger, har biverkningarna av cannabis lett till mycket fler akutbesök än andra substanser <a href="https://www.samhsa.gov/data/sites/default/files/DAWN2k11ED/DAWN2k11ED/DAWN2k11ED.pdf" target="_blank" rel="noopener noreferrer"><sup>[29]</sup></a>.
                </p>
                <p>
                    Överdosen kan också resultera i försämring av brukarnas psykiatriska tillstånd, särskilt psykos: detta återspeglas i paranoia, se saker, höra saker, vanföreställningar. Cannabinoiden THC i cannabis kan göra det värre. Ibland blir vi tvungna att ge dessa människor antipsykotiska mediciner för att minska symtomen. Det andra som människor kan hamna på akuten för är cannabis hyperemesis syndrome (CHS) <a href="https://my.clevelandclinic.org/health/diseases/21665-cannabis-hyperemesis-syndrome" target="_blank" rel="noopener noreferrer"><sup>[30]</sup></a>. CHS är ett tillstånd som orsakas av långvarigt cannabisbruk. Personer som har CHS upplever återkommande episoder av illamående, kräkningar, uttorkning och buksmärtor, med täta besök på akutmottagningen.
                </p>
                <p>
                    Akut toxicitet av fritids cannabis har också studerats i Alaska, USA <sup><span class="tooltip" data-tip="Noble MJ et al. 2019. Akut cannabistoxicitet. Clinical Toxicology, 57(8), 735-742">[31]</span></sup> Neurotoxicitet är vanlig efter akuta cannabisexponeringar. Barn upplevde oavsiktlig exponering, särskilt i hemmet och ibland med allvarliga negativa resultat. Koncentrerade produkter som hartser och flytande koncentrat var förknippade med större toxicitet än andra cannabisprodukter. En annan aspekt som diskuteras i den vetenskapliga litteraturen är medicinska cannabiseffekter på opioidöverdos och dödlighet. Här är bevisningen riktigt blandad. <sup><span class="tooltip" data-tip="Shover CL et al. 2019. Sambandet mellan medicinsk cannabislagstiftning och dödlighet i opioidöverdos har vänt över tiden. Proceedings of the National Academy of Sciences of the United States of America, 116(26), 12624-12626">[32]</span></sup>
                </p>
                


                <h3 id="myth-8">
                    <span class="text-rose-400">Myt nr 8:</span> Passiv cannabisrökning är ofarlig
                </h3>
                <p>
                    Som med alla andra typer av passiv rökning kan <sup><span class="tooltip" data-tip="Graves BM et al. 2020. Omfattande karakterisering av vanliga marijuana- och tobaksrök. Scientific Reports 10(1):7160">[33]</span></sup> de giftiga ämnena och cancerframkallande ämnena i cannabis rök lätt inandas av barn. Det har många kemikalier som tobaksrök, inklusive de som är kopplade till lungcancer. Marijuana rök innehåller också THC, den förening som ansvarar för de flesta av cannabiss psykoaktiva effekter. Det kan överföras till spädbarn och barn genom passiv rökning, och personer som utsätts för passiv cannabisrök kan uppleva psykoaktiva effekter, som att känna sig hög <sup><span class="tooltip" data-tip="Wilson KM, et al. 2017. Upptäcker biomarkörer för begagnad marijuanarök hos små barn. Pediatric Research, 81(4), 589-592">[34]</span></sup>. Nyligen genomförda studier har funnit starka samband mellan rapporter om att någon i hemmet använder marijuana (t.ex. en förälder, släkting eller vårdnadshavare) och att barnet har påvisbara nivåer av THC <sup><span class="tooltip" data-tip="Moore C, et al. 2011. Cannabinoider i munvätska efter passiv exponering för marijuanarök. Forensic Science International, 212(1-3), 227-230">[35]</span></sup>. Det har visat sig att spädbarn som utsätts för passiv marijuanarök löper risk att drabbas av plötslig spädbarnsdöd (alias SIDS). <sup><span class="tooltip" data-tip="Reece- Stremtan S & Marinelli KA. 2015. ABM clinical protocol #21: guidelines for breastfeeding and drug use or drug use disorder, revised 2015. Breastfeeding Medicine, 10(3), 135-141">[35]</span></sup>
                </p>
                <p>
                    Med dessa fakta orsakar passiv rökning hälsorisker. Men flera webbsidor drar ofta slutsatsen att det är osannolikt att det påverkar människor under begränsad exponering i en välventilerad miljö. Baserat på vetenskapliga fakta är detta inte sant, särskilt inte i en inomhusmiljö.
                </p>
                

                <h3>
                    Andra pålitliga källor
                </h3>
                <p>
                    <a class="break-all" href="https://www.unodc.org/documents/drug-prevention-and-treatment/cannabis_review.pdf " target="_blank" rel="noopener noreferrer">https://www.unodc.org/documents/drug-prevention-and-treatment/cannabis_review.pdf</a>
                </p>
            </section>


        </section>
    </div>
</template>