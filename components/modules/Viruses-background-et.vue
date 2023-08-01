<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="viruses-bg-et" />
        </ClientOnly>


        <section class="e-article" lang="et" style="hyphens:auto;">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Viirused</h1>
            <h5 class="font-normal uppercase leading-tight">Viirused: teadusinfo</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">1. Viirused versus bakterid</h2>
        
            <p class="font-bold">Bakterid ja viirused võivad põhjustada paljusid tuntud nakkushaigusi. Kuid millised on erinevused nende kahe nakkusetekitaja vahel?</p>
        
            <p><span class="e-term font-Heading">Bakterid</span> on üliväikesed mikroorganismid, mis koosnevad ühest rakust. Nad on väga mitmekesised ja võivad olla erineva kuju ja struktuuriga.Bakterid võivad elada peaaegu igas mõeldavas keskkonnas, sealhulgas inimkehas või selle pinnal, kuid vaid käputäis baktereid põhjustab inimestel infektsioone. Neid baktereid nimetatakse <i>patogeenseteks</i>.</p>
        
            <p><span class="e-term font-Heading">Viirused</span> on isegi väiksemad kui bakterid. Nagu bakterid, on nad väga mitmekesised ning erineva kuju ja tunnustega. Viirused on parasiidid. See tähendab, et nad vajavad kasvamiseks elusaid rakke või kudesid. Viirused võivad tungida keharakkudesse, kasutades rakkude komponente kasvamiseks ja paljunemiseks. Mõned viirused tapavad peremeesrakke oma elutsükli osana. Erinevused viiruste ja bakterite vahel on näha joonisel 1 ja tabelis 1.</p>
        
            <UiContentImage
                src="https://evidence.onkel.ee/assets/viruses-01__bacteria-vs-virus.webp"
                credits="Source: https://inducoat.com/?attachment_id=24945&lang=en"
                :elevated="true">
                <template #caption>
                    <b>Joonis 1.</b> Viiruse ja bakteri struktuurierinevused
                </template>
            </UiContentImage>
        
            <table class="mt-20">
                <caption class="text-left pb-4"><b>Tabel 1.</b> Erinevused bakterite ja viiruste vahel</caption>
                <thead>
                    <tr>
                        <th></th>
                        <th>Bakterid</th>
                        <th>Viirused</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="align-baseline">
                            Elus või eluta?
                        </th>
                        <td>
                            <b>Elusorganism.</b><br>
                            Bakterid on elusorganismid, mis koosnevad ühest rakust, mis suudab toota energiat, teha ise toitu, liikuda ja paljuneda (tavaliselt jagunemise teel). See võimaldab bakteritel elada paljudes kohtades – pinnases, vees, taimedes ja inimkehas – ning teenida mitmeid eesmärke.
                            <br />
                            Bakterite hulka kuuluvad nii parasiidid kui ka mitteparasiidid.
                        </td>
                        <td>
                            <b>Elusa ja eluta looduse piirimail.</b><br />Viirused kasvavad ja paljunevad ainult peremeesrakkudes, mida nad nakatavad. Väljaspool neid elusrakke leiduvad viirused on uinuvad. Nende "elu" nõuab seetõttu elusraku biokeemilise tegevuse ülevõtmist.<br />Kõik viirused on rakusisesed parasiidid.
                        </td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Rakulisus</th>
                        <td>Koosneb ühest rakust.</td>
                        <td>Ei koosne rakkudest.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Paljunemine</th>
                        <td>Jaguneb kaheks</td>
                        <td>Tungib peremeesrakku ja võtab raku üle, põhjustades viiruse DNA/RNA koopiate tegemise. Hävitab peremeesraku, vabastades uusi viirusi.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Suurus</th>
                        <td>Bakterid on palju suuremad, nende suurus jääb vahemikku 800 nm kuni 1000 nm. Baktereid saab näha valgusmikroskoobi abil.</td>
                        <td>Viiruste suurus on vahemikus 20 nm kuni 400 nm. Viirused on nähtavad ainult elektronmikroskoobi all.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Kasu</th>
                        <td>Paljud bakterid on kasulikud. N: teatud bakterid on vajalikud soolestikus.</td>
                        <td>Viirused ei ole üldjuhul kasulikud, kuid leiavad rakendust geenitehnoloogias.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Infektsioon</th>
                        <td>Bakteriaalne infektsioon piirdub tavaliselt mõne kehaosaga, mida kirjeldatakse kui lokaliseeritud infektsiooni. Infektsioonid võivad olla põhjustatud bakteritest või bakterite poolt toodetud toksiinidest (endotoksiinidest).</td>
                        <td>Viirusinfektsioon on süsteemne. Viirused nakatavad peremeesrakku ja paljunevad seejärel tuhandetes, lahkudes peremeesrakust ja nakatades teisi keharakke.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Haigus</th>
                        <td>Bakteriaalsete haiguste hulka kuuluvad kopsupõletik, tuberkuloos, teetanus ja toidumürgitus.</td>
                        <td>Viirusinfektsioonist põhjustatud süsteemsete haiguste hulka kuuluvad gripp, leetrid, lastehalvatus, AIDS ja COVID-19.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Ravi</th>
                        <td>Antibiootikumid, ennetavad vaktsiinid.</td>
                        <td>Vaktsiinid takistavad levikut ja viirusevastased ravimid aitavad paljunemist aeglustada, kuid ei suuda seda täielikult peatada.</td>
                    </tr>
                </tbody>
            </table>

            <UiCardInfo class="mb-8" >
                <b>Antibiootikumid</b> võivad aidata immuunsüsteemil hävitada bakteriaalset nakkust, kuid on kasutud viirusnakkuste vastu. <b>Viirusevastased ravimid</b> toimivad teisiti kui antibiootikumid ja on praegu tõhusad vaid mõne viirushaiguse, näiteks gripi, herpese, B- ja C-hepatiidi ning HIV-viiruse vastu. Viirusnakkusi võib olla palju raskem tappa kui bakteriaalseid nakkusi, kuna viirus siseneb organismi rakkudesse. <b>Immuunsüsteem</b> võib nakatunud rakud tappa enne, kui viirus on võimeline paljunema. Viiruse paljunedes aga rakk lõhkeb, mis võimaldab viirusel levida teistesse keharakkudesse.
            </UiCardInfo>

            
            <section class="e-card">
                <h4 class="mt-4">Viited</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://courses.lumenlearning.com/suny-biology2xmaster/chapter/prevention-and-treatment-of-viral-infections/" target="_blank" rel="noopener noreferrer">https://courses.lumenlearning.com/suny-biology2xmaster/chapter/prevention-and-treatment-of-viral-infections/</a></li>
                    <li><a href="https://bodell.mtchs.org/OnlineBio/BIOCD/text/chapter16" target="_blank" rel="noopener noreferrer">https://bodell.mtchs.org/OnlineBio/BIOCD/text/chapter16</a></li>
                    <li><a href="http://www.hcrowder.com/disease-reading.html" target="_blank" rel="noopener noreferrer" >
                        http://www.hcrowder.com/disease-reading.html</a></li>
                </ul>
            </section>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            <hr class="mt-10 mb-40" />
            <h2 id="section-2">2. Miks antibiootikumid ei tapa viiruseid?</h2>
            
            <p>Antibiootikumid ei saa tappa viirusi, kuna viirustel on teistsugune struktuur ja paljunemine kui bakteritel. Antibiootikumid avaldavad toimet bakterite (mitte viiruste) kasvumehhanismidele, et tappa või pärssida konkreetseid baktereid.</p>
            
            <p>Veelgi enam, antibiootikumide ülekasutamine või ebaõige kasutamine on tekitanud ülemaailmse tervishoiuprobleemi, nn <a href="https://www.drugs.com/article/antibiotic-resistance.html" target="_blank" rel="noopener noreferrer">antibiootikumiresistentsuse</a>. Vaata tabelist 2, millistel juhtudel võivad antibiootikumid abiks olla ja millistel mitte (NB! otsuse antibiootikumi kasutamise kohta teeb igal juhul arst).</p>
            
            
            <table class="leading-tight e-card">
                <caption class="text-left pb-4">
                    <b>Tabel 2.</b> Vajadus antibiootikumide järele ülemiste hingamisteede nakkushaiguste korral
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
                            <p class="text-xs text-slate-400">Source: <a href="https://www.cdc.gov/antibiotic-use/images/VirusOrBacteria-Original-1200by675.jpg" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/antibiotic-use/images/VirusOrBacteria-Original-1200by675.jpg</a></p>
                        </td>
                    </tr>
                </tfoot>
            </table>


            <section class="e-card">
                <h4 class="mt-0">Viited</h4>
                <ul class="text-sm break-all">
                    <li>
                        <a href="https://www.drugs.com/article/antibiotics-and-viruses.html" target="_blank" rel="noopener noreferrer">https://www.drugs.com/article/antibiotics-and-viruses.html</a>
                    </li>
                    <li>
                        <a href="https://www.virology.ws/2009/10/19/ten-cool-facts-about-viruses/" target="_blank" rel="noopener noreferrer">https://www.virology.ws/2009/10/19/ten-cool-facts-about-viruses/</a>
                    </li>
                </ul>
            </section>
        
        










            <hr class="mt-10 mb-40" />
            <h2 id="section-3">3. Kuidas vaktsiinid toimivad</h2>

            <h3>Organismi loomulik vastus</h3>

            <p><span class="e-term font-Heading">Patogeen</span> on bakter, viirus, parasiit või seen, mis võib põhjustada organismis haigusi. Iga patogeen koosneb mitmest osast, mis on tavaliselt konkreetsele patogeenile ainulaadsed. Patogeeni osa, mis põhjustab antikehade moodustumist, nimetatakse antigeeniks. Patogeeni antigeenile vastuseks toodetud antikehad on immuunsüsteemi oluline osa. Antikehi võib pidada seetõtt keha kaitsesüsteemi “sõduriteks”. Iga meie immuunsüsteemi antikeha on “koolitatud” ära tundma ühte kindlat antigeeni. Meie kehas on tuhandeid erinevaid antikehi. Kui inimkeha puutub esimest korda kokku antigeeniga, kulub immuunsüsteemil aega, et reageerida ja toota antigeenile spetsiifilisi antikehi (Joonis 2).</p>

            <p>Kui antigeenspetsiifilised antikehad on toodetud, töötavad nad koos ülejäänud immuunsüsteemiga patogeeni hävitamiseks ja haiguse peatamiseks. Ühe patogeeni vastased antikehad ei kaitse üldiselt teise patogeeni eest, välja arvatud juhul, kui kaks patogeeni on üksteisega väga sarnased. Kui keha toodab antikehi oma esmase vastusena antigeenile, loob see ka antikehi tootvad mälurakud, mis jäävad ellu ka pärast seda, kui antikehad patogeeni hävitavad. Kui keha puutub sama patogeeniga kokku rohkem kui üks kord, on antikeha vastus palju kiirem ja tõhusam kui esimesel korral, kuna mälurakkude abil toodetakse kiiresti selle antigeeni vastaseid antikehi. See tähendab, et kui inimene puutub tulevikus kokku ohtliku patogeeniga, suudab tema immuunsüsteem koheselt reageerida, kaitstes teda haiguste eest.</p>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/viruses-03.webp"
                credits="Allikas: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html"
                :elevated="true">
                <template #caption>
                    <b>Joonis 2.</b> Iga uue antigeeni jaoks peab meie keha looma spetsiifilise antikeha
                </template>
            </UiContentImage>

            <h3>Mil moel vaktsiinid toimivad?</h3>

            <p>Vaktsiinid vähendavad haigestumisriski, aktiveerides keha loomulikud kaitsemehhanismid.</p>
            <p>Vaktsiinid sisaldavad teatud antigeeni nõrgestatud või mitteaktiivseid osi, mis käivitavad organismis immuunvastuse (Joonis 3). Uuemad vaktsiinid sisaldavad pigem antigeenide tootmise “juhiseid” kui antigeeni ennast. Olenemata sellest, kas vaktsiin koosneb antigeenist endast või juhistest, et organism hakkaks antigeeni (N: viiruse ühte valku) tootma, ei põhjusta see inimesel haigust, vaid paneb tema immuunsüsteemi sellele reageerima, nagu oleks see esmane reaktsioon tegelikule patogeenile.</p>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/viruses-04.webp"
                credits="Allikas: https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work"
                :elevated="true">
                <template #caption>
                    <b>Joonis 3.</b> Antikehade arendamine vaktsineerimise kaudu
                </template>
            </UiContentImage>

            <p>Kui keha on juba viirusega kokku puutunud ja viirusele immuunvastuse andnud (tootes B- ja T-rakud), salvestab see B- ja T-rakud, nii et kui sama viirus või bakter kunagi uuesti keha nakatab, asub immuunsüsteem kaitsele, et vältida haigestumist patogeeniga.</p>

            <h3>Vaktsineerimine ja sellega seotud väljakutsed</h3>

            <p>Meil ​​on olemas vaktsiinid enam kui 20 eluohtliku haiguse ennetamiseks, aidates igas vanuses inimestel elada kauem ja tervemalt. Vaktsineerimine hoiab praegu igal aastal ära 2–3 miljoni surmajuhtumi sellistesse haigustesse nagu difteeria, teetanus, läkaköha, gripp ja leetrid.</p>

            <p>Kuigi meil on vaktsiiinid paljude tõsiste viirusnakkuste, nagu leetrid, mumps, A- ja B-hepatiit, vastu, suudavad mõned viirused – näiteks need, mis põhjustavad külmetushaigusi, muteeruda. Kui viirus muteerub, muutub see piisavalt nii, et immuunsüsteem ei pruugi seda enam ära tunda, st ta ei tea, kuidas seda tappa. Nii võib viirus nakatada organismi, kuna see “hiilib” immuunsüsteemist kõrvale. Seega on seda tüüpi viiruste vastu vaktsineerimine keerulisem.</p>

            <section class="e-card">
                <h4 class="mt-0">Viited</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work" target="_blank" rel="noopener noreferrer">https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work</a></li>
                    <li><a href="https://www.nytimes.com/interactive/2020/health/pfizer-biontech-covid-19-vaccine.html" target="_blank" rel="noopener noreferrer">https://www.nytimes.com/interactive/2020/health/pfizer-biontech-covid-19-vaccine.html</a></li>
                    <li><a href="https://media.nature.com/original/magazine-assets/d41586-021-03552-w/d41586-021-03552-w.pdf" target="_blank" rel="noopener noreferrer">https://media.nature.com/original/magazine-assets/d41586-021-03552-w/d41586-021-03552-w.pdf</a></li>
                    <li><a href="https://opentextbc.ca/biology/chapter/12-1-viruses/" target="_blank" rel="noopener noreferrer">https://opentextbc.ca/biology/chapter/12-1-viruses/</a></li>
                </ul>
            </section>















            <hr  class="mt-10 mb-40" />
            <h2 id="section-4">4. Vaktsiinide väljatöötamise protsess, vaktsiinide ohutus</h2>

            <h3>Väljatöötamine</h3>

            <p>Vaktsiinide väljatöötamine algab tavaliselt uurimislaboris, mis võib asuda ülikoolis, meditsiinikeskuses või väikeses biotehnoloogiaettevõttes. Vaktsiini väljatöötamise käigus töötavad teadlased välja erinevaid vaktsiinikandidaate, et testida ja mõõta nende mõju (või selle puudumist). Töötavate ideede leidmiseks on sageli vaja aastaid uurimistööd.</p>
            <p>Vaktsiini väljatöötamise ajal võivad mitu erinevat teadlast või uurimisrühma töötada samade eesmärkide nimel. Töö edenemist tutvustatakse erinevatel kohtumistel (N: konverentsidel) ja eelretsenseeritavate ajakirjade artiklites. Kui mõni töö tundub paljutõotav, võidakse kaasata ka farmaatsiateadlased, et laiendada uurimistööd tootearenduse suunas.</p>


            <h3>Testimine</h3>

            <p>Kui leitakse paljutõotav vaktsiinikandidaat, tuleb seda katsetada loomadel. Seda nimetatakse eelkliiniliseks faasiks. Kõigepealt kasutatakse väikseid loomi, nagu hiired, rotid, küülikud jne. Kui vaktsiinikandidaat avaldab mõju väikestele loomadele, tuleb seda tavaliselt tõestada suuremate loomade, näiteks ahvide puhul. Kui vaktsiin käivitab immuunvastuse, testitakse seda inimkatsetes kolmes etapis (WHO, 2021).</p>
            <p>1. etapis antakse vaktsiini väikesele arvule vabatahtlikele, et hinnata selle ohutust, veenduda, et see tekitab immuunvastuse ja määrata õige annus. Üldiselt testitakse selles etapis vaktsiine väikeses noorte tervete täiskasvanud vabatahtlike rühmas.</p>
            <p>2. etapis antakse vaktsiin juba mitmesajale vabatahtlikule, et hinnata täiendavalt selle ohutust ja võimet tekitada immuunvastust. Selles etapis osalejatel on samad omadused (nagu vanus, sugu), kui inimestel, kellele vaktsiin on mõeldud. Selles faasis on tavaliselt mitu katset, et hinnata erinevaid vanuserühmi (eakad, täiskasvanud, lapsed) ja vaktsiini erinevaid koostisi. Tavaliselt kaasatakse ka rühm, kes ei saa vaktsiini, et teha kindlaks, kas muutused vaktsineeritute rühmas on tingitud vaktsiinist või on saadud juhuslikult.</p>
            <p>3. etapis manustatakse vaktsiini tuhandetele vabatahtlikele ja seda võrreldakse sarnase inimeste rühmaga, kes ei saanud vaktsiini, kuid said võrdlustoote. Selle eesmärk on kindlaks teha, kas vaktsiin on tõhus haiguse vastu, mille eest see on loodud kaitsma. Samuti on eesmärgiks uurida selle ohutust palju suuremas inimrühmas. 3. etapi uuringud viiakse sageli läbi mitmes riigis, sh ühe riigi mitmes regioonis, et tagada vaktsiini tõhusate tulemuste kehtivus erinevate populatsioonide peal.</p>
            <p>2. ja 3. etapi uuringute ajal on vabatahtlikud ja uuringut läbi viivad teadlased olukorras, kus nad ei tea, millised vabatahtlikud on saanud testitavat vaktsiini või millised võrdluspreparaati. Seda nimetatakse pimekatseks ja see on vajalik, et tagada tulemuste objektiivsus, st et ei vabatahtlikud ega ka teadlased poleks mõjutatud ootustest vaktsiini suhtes ei selle tõhususe ega ohutuse mõttes.</p>


            <section class="e-card">
                <h4 class="mt-0">Viide</h4>
                <ul class="text-sm break-all">
                    <li>
                        <a href="https://www.who.int/news-room/feature-stories/detail/how-are-vaccines-developed" target="_blank" rel="noopener noreferrer">https://www.who.int/news-room/feature-stories/detail/how-are-vaccines-developed</a>
                    </li>
                </ul>
            </section>

            <h3>Autoriseerimine ja jälgimine</h3>
            
            <p>Kui kõigi nende kliiniliste uuringute tulemused on kätte saadud, on vaja teha rida edasisi samme. Euroopa Ravimiamet ja hiljem iga riigi vastav ametkond vaatavad uuringute andmed hoolikalt läbi ja otsustavad, kas anda vaktsiinile kasutusluba. Kõik katsed peavad olema korrektselt tehtud ja korralikult dokumenteeritud. Enne vaktsiini heakskiitmist peab olema tõestatud, et vaktsiin on ohutu ja tõhus paljudele inimestele. Vaktsiini ohutuse ja tõhususe tase peab seejuures olema äärmiselt kõrge.</p>
            <p>Vaktsiinide kasutamise ajal toimub nende täiendav ohutuse ja tõhususe jälgimine. See võimaldab teadlastel jälgida vaktsiinide mõju ja ohutust isegi siis, kui neid kasutatakse suurel hulgal inimestel ja pika aja jooksul. Neid andmeid kasutatakse vaktsiini kasutamise eeskirjade kohandamiseks.</p>

            <section class="e-card">
                <h4 class="mt-0">Viide</h4>
                
                <ul class="text-sm break-all">
                    <li><a href="https://www.worldscientific.com/doi/pdf/10.1142/S2529732521400034" target="_blank" rel="noopener noreferrer">https://www.worldscientific.com/doi/pdf/10.1142/S2529732521400034</a></li>
                </ul>
            </section>

















            <hr class="mt-10 mb-40" />
            <h2 id="section-5">5. Maskid viiruste ja bakterite vastu</h2>

            <p>Maske kasutatakse tihti kaitseks viiruste ja bakterite eest. Need on muutunud eriti tavaliseks SARS-CoV-2 viiruse eest kaitsmisel. Erinevat tüüpi maskide hulgas on <b>kirurgilised näomaskid</b> olnud COVID-19 pandeemia ajal kõige sagedamini kasutatavateks näokateteks. Tavaliselt on need ühelt poolt sinist värvi, mida tuleks hoida väliskihina (Joonis 4). Kirurgiliste maskide peamine eesmärk on kaitsta patsiente võimaliku kokkupuute eest kandja poolt väljahingatavate bakterite ja viirustega. Maskid takistavad hästi koroonaviiruse levikut õhu kaudu, kuid ei ole nii tõhusad vahendid kandja enda kaitsmiseks viiruse eest. On leitud näiteks, et inimeste poolt hingamisel, rääkimisel ja aevastamisel tekitatud vedelikuosakeste läbimõõt algab 1.6 mikromeetrist ja võib ulatuda kuni paarisaja mikromeetrini</p>
            <p>Et filtreerida sissehingatavat õhku paremini, tuleks kasutada <b>FFP2 või FFP3 maski</b> (mida sageli nimetatakse ka <b>respiraatoriteks</b>). Sertifitseeritud numeratsioon (FFP1, FPP2, FFP3 (vastavalt standardile EN 149-2001)), näitab nende filtreerimise tõhusust. FFP2 ja FPP3 filtreerimise tõhusus õhus lendlevate (kaasa arvatud viirust sisaldavate) osakeste  suhtes on vastavalt 92% ja 98%. Mõlemal maskil on ka küllaltki väike leke külgedelt: vastavalt &lt;8% ja &lt;2%. FFP2 väliskihil kasutatakse sageli spetsiaalset polümeeri. Kui töökeskkonnas (näiteks tolmu kaitseks) kasutatavate respiraatorite puhul on lubatud ventiil (mis teeb väljahingamise lihtsamaks), siis SARS-CoV-2 puhul tuleks kasutada ainult klapita respiraatoreid, et filtreerida ka väljahingatava õhku.</p>
            <p>COVID-19 pandeemiaga võeti kasutusele uut tüüpi näomaskid: <b>filtreeriv mask</b>. Seda tüüpi mask on valmistatud mitmekihilisest kangast (üks neist peab olema nanokiudfilter, mis tagab bakterite ja kahjuliku peentolmu filtreerimisvõime vähemalt 90%). See mask ühendab endas suure filtreerimisvõime ja korduvkasutatavuse, kuna seda saab masinas pesta 60 kraadi juures.</p>

            <div class="grid gap-3 my-15 md:grid-cols-2 e-card">
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-01.webp"
                >
                    <template #caption>
                        Kirurgiline mask
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-02.webp"
                    caption="">
                    <template #caption>
                        FFP2 mask (respiraator)
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-03.webp">
                    <template #caption>
                        FFP3 mask (respiraator) klapiga
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-04.webp">
                    <template #caption>
                        Filteeriv mask
                    </template>
                </UiContentImage>
            </div>

            <p class="italic">Joonis 4. Erinevad maskitüübid</p>

            <p><b>Maskide tõhusust testitakse</b> pidevalt spetsiaalsetes laborites ehk nn. ekspositsioonikambrites. Nendes uuringutes täidab osakeste generaator kambri sama suurte aerosooliosakestega, mille abil viirus tavaliselt levib. Järgnvalt mõõdetakse osakeste kontsentratsiooni maski taga ja võrreldakse kontsentratsiooniga väljaspool seda ehk siis  ekspositsioonikambris üldiselt.</p>
            <p>Maskikandmise tõhusust tõendavad kõige veenvamalt epidemioloogilised andmed, mis on võetud  nö päris elust. Lyu ja Wehby (2020) poolt läbiviidud uurimus näitas, et koroonasse nakatumise kasv aeglustus kohe, kui 15 USA osariigis ning Columbia ringkonnas kehtestatid maskikandmise kohustus.  Ühes uurimuses (Leffler jt. 2020) vaadeldi koroonaga seotud surmajuhtumite statistikat kokku 198 riigis. Selle tulemusena leiti, et nendes riikides, kus oli kas sotsiaalseks normiks kanda maski või kus ametlikult nõuti pandeemia ajal maski kandmist, oli ka surmajuhtumite määr tunduvalt väiksem muudest  riikidest.</p>
            <p>Mitmed Facebooki jm sotsiaalmeedia kasutajad on jaganud eksitavaid postitusi näomaski pikaajalise kasutamise kohta, mis nende väitel põhjustab kehas hapnikuvaegust – hüpoksiat. Samas näitavad teadusartiklid ja ekspertide analüüsid, et selliseid sümptomeid ei esine enamikul inimestel, välja arvatud juhul, kui kasutajal on eelnevalt olnud hingamisteede haigusi, nagu astma või krooniline obstruktiivne kopsuhaigus. Riide ja kirurgiliste maskide puhul on hüpoksia ja hüperkapnia (liigse süsinikdioksiidi sisaldus vereringes) oht veelgi ebatõenäolisem, kuna need ei liibu näo ümber. Siiski hoiatatakse, et näomaski ei tohi kasutada alla kahe aastaste või hingamisraskustega laste puhul ning trenni tehes.</p>

            <section class="e-card">
                <h4 class="mt-0">Viited</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9" target="_blank" rel="noopener noreferrer">https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9</a></li>
                    <li><a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2774266" target="_blank" rel="noopener noreferrer">https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2774266</a></li>
                    <li><a href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00818" target="_blank" rel="noopener noreferrer">https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00818</a></li>
                    <li><a href="https://www.ajtmh.org/view/journals/tpmd/103/6/article-p2400.xml" target="_blank" rel="noopener noreferrer">https://www.ajtmh.org/view/journals/tpmd/103/6/article-p2400.xml</a></li>
                    <li><a href="" target="_blank">https://www.epa.gov/sciencematters/epa-researchers-test-effectiveness-face-masks-disinfection-methods-against-covid-19 </a></li>
                    <li><a href="https://journals.asm.org/doi/full/10.1128/mSphere.00637-20" target="_blank" rel="noopener noreferrer">https://journals.asm.org/doi/full/10.1128/mSphere.00637-20</a></li>
                    <li><a href="https://pubmed.ncbi.nlm.nih.gov/33626065/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/33626065/</a></li>
                </ul>
            </section>



            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Õpilastele edasiseks uurimiseks</h3>
                    <ul class="leading-tight">
                        <li><a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/n95-respirators-surgical-masks-face-masks-and-barrier-face-coverings#s3" target="_blank" rel="noopener noreferrer">N95 Respirators, Surgical Masks, Face Masks, and Barrier Face Coverings</a></li>
                        <li><a href="https://www.sciencedirect.com/science/article/pii/S2452199X20301481" target="_blank" rel="noopener noreferrer">An overview of filtration efficiency through the masks: Mechanisms of the aerosols penetration</a></li>
                        <li><a href="https://www.weforum.org/agenda/2020/10/covid-19-coronavirus-disease-size-compairson-zika-health-air-pollution/" target="_blank" rel="noopener noreferrer">This is how coronavirus compares to the world's smallest particles</a></li>
                    </ul>
                </div>
            </UiCardInfo>














            <hr  class="mt-10 mb-40" />
            <h2 id="section-6">6. Viirused ja käte hügieen</h2>

            <h3>Käte desinfitseerimisvahend või seep?</h3>
            
            <p>Meie käed võivad olla nakkuste edasikandumisel kriitiliseks teguriks. Põhjalikult kätele kandes ja <a href="https://www.cdc.gov/handwashing/when-how-handwashing.html" target="_blank" rel="noopener noreferrer">vähemalt 20 sekundit küürides</a>, peatavad nii alkoholipõhised kätepuhastusvahendid kui ka seep koroona tüüpi viiruse leviku. Nii seep kui alkohol lõhuvad viiruse membraani. Seep vähendab ka patogeenide kleepumist naha külge, võimaldades patogeenid sealt veega maha pesta. See mitte ainult ei neutraliseeri viirust, vaid ka võimaldab selle kätelt eemaldamist. Üldiselt on hea kätehügieen lihtne ennetusmeede, mida enamik saab väikese vaevaga teha. Paljud uuringud on näidanud kätehügieeni tõhusust nakkuslike patogeenide, sealhulgas koroonaviiruste nagu SARS-CoV-2, edasikandumise ärahoidmisel.</p>

            <section class="e-card">
                <h4 class="mt-0">Viide</h4>
                
                <ul class="text-sm break-all">
                    <li>
                        <a href="https://www.uchealth.org/today/why-soap-and-water-work-better-than-hand-sanitizer-to-remove-the-coronavirus/" target="_blank" rel="noopener noreferrer">https://www.uchealth.org/today/why-soap-and-water-work-better-than-hand-sanitizer-to-remove-the-coronavirus/</a>
                    </li>
                </ul>
            </section>

            <h3>Koroonaviiruse nõrgendamine seebiga</h3>
            
            <p>Koronaviirused on saanud oma nime viirust ümbritseva "krooni" järgi, mille moodustavad selle membraanile kinnitunud valgu piigid, mis vastutavad peremeesorganismi nakatamise eest. Membraan on viiruse "kest" ja viiruse nõrk koht.</p>
            <p>Seebimolekulidel on hüdrofiilne (vett armastav) "pea" ja hüdrofoobne (vett tõrjuv) "saba". “Pea” aitab seebil veega seguneda, samas kui “saba” võib interakteeruda (seguneda) hüdrofoobsete molekulidega, näiteks lipiididega (rasvadega).</p>
            <p>Meie õnneks koosneb koroonaviiruse membraan enamasti lipiididest. Neid hoiavad koos molekulidevahelised nõrgad keemilised vastasmõjud. Seebimolekulide hüdrofoobsed (vett vihkavad) "sabad" võivad katkestada lipiidimolekulide vastasmõju koroonaviiruse membraanis (vt Joonis 5).</p>
            <p>Seega häirib “saba” membraani lipiidimolekulide vahelist nõrka vastasmõju, rebides need lahti. Kui viirus lõhutakse enne, kui see on peremeesrakku turvaliselt varjunud, ei saa see enam oma nakatavat tööd teha – nagu masin, mille osad on välja kukkunud. Seejärel ümbritsevad seebimolekulid viiruse osi nii, et kõik sabad on suunatud sissepoole. Sellist kobarat nimetatakse mitselliks (vt Joonis 6). Seebiosakeste väljapoole suunatud hüdrofiilsed pead võimaldavad mitselli veega kätelt maha pesta. Ainult veest seega ei piisa.</p>
            


            <div class="grid gap-2 md:grid-cols-2 e-card">
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-07.webp"
                    credits="Allikas: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html">
                    <template #caption>
                        <b>Joonis 5.</b> Seebi molekulid hävitamas viirust
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-08.webp"
                    credits="Allikas: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html">
                    <template #caption>
                        <b>Joonis 6.</b> Seebi molekulidest ja viiruse osast koosnev mitsell
                    </template>
                </UiContentImage>
            </div>

            <p>Antud teave kehtib ka teiste ümbrisega viiruste kohta (gripp, B- ja C-hepatiit ning Ebola), kuna nende ümbrised koosnevad samuti fosfolipiididest.</p>

            <section class="e-card">
                <h4 class="mt-0">Allikas</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.science.org.au/curious/people-medicine/hand-sanitiser-or-soap-making-informed-choice-covid-19" target="_blank" rel="noopener noreferrer">https://www.science.org.au/curious/people-medicine/hand-sanitiser-or-soap-making-informed-choice-covid-19</a></li>
                </ul>
            </section>

            <h3>Käte desinfitseerimisvahendi valimine</h3>

            <p>Kui pole käepärast seepi, soovitab Maailma Tervishoiu Organisatsioon (WHO) alkoholipõhiseid kätepuhastusvahendeid.</p>
            
            <p><b>Arvatakse, et alkoholipõhised kätepuhastusvahendid takistavad mikroobide, sh bakterite ja mõnede viiruste, valkude normaalset funktsioneerimist. Suure alkoholisisaldusega kätepuhastusvahendid võivad samuti lammutada koroonaviirust ümbritsevat lipiidkesta.</b> Et kätepuhastusvahendid oleksid tõhusad, peavad need sisaldama vähemalt 60 protsenti alkoholi. Desinfitseerimisvahendis olevad lisandid võivad takistada alkoholi liiga kiiret aurustumist, võimaldades sellel kauem viirust leotada.</p>
            <p>Siiski on alkoholipõhiste kätepuhastusvahendite kasutamisega seotud ka teatud riskid. Lastel on suurenenud alkoholimürgituse oht ja kätepuhastusvahendite sagedane kasutamine võib põhjustada antimikroobse resistentsuse. On olemas alternatiivsed alkoholivabad kätepuhastusvahendid, kus kõige sagedamini kasutatakse bensalkooniumi. Hiljutised uuringud on näidanud, et alkoholivaba kätepuhastusvahend toimib sama hästi ega põhjusta alkoholiga kätepuhastusvahendi kasutamisel tuttavat "põletustunnet".</p>
            
            <section class="e-card">
                <h4 class="mt-0">Viited</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0048969720340833?via%3Dihub" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/abs/pii/S0048969720340833?via%3Dihub</a></li>
                    <li><a href="https://www.journalofhospitalinfection.com/article/S0195-6701(20)30547-8/fulltext#secsectitle0040" target="_blank" rel="noopener noreferrer">https://www.journalofhospitalinfection.com/article/S0195-6701(20)30547-8/fulltext#secsectitle0040</a></li>
                </ul>
            </section>

            









            <hr  class="mt-20 mb-40" />

            <h2 id="section-7">7. Vaktsiinidega seotud müüdid</h2>

            <h3 id="myth-1"><span class="text-rose-400">Müüt nr 1:</span> Vaktsiinid põhjustavad autismi</h3>

            <p>Laialt levinud hirm, et vaktsiinid suurendavad lastel autismiriski, sai alguse Briti kirurgi Andrew Wakefieldi 1997. aastal avaldatud uuringust. Artikkel avaldati mainekas meditsiiniajakirjas The Lancet, mis viitas sellele, et leetrite, mumpsi ja punetiste (MMR) vaktsiin võib olla põhjustanud Briti lastel autismi.</p>
            <p>Sellest ajast alates on artikkel täielikult ümber lükatud tõsiste protseduuriliste vigade, valimi ebapiisavuse (uuriti vaid 12 last), rahaliste huvide konflikti ja eetikareeglite rikkumiste tõttu. Andrew Wakefield kaotas oma arstilitsentsi ja artikkel võeti The Lancetist tagasi.</p>
            <p>Ükski hilisematest uuringutest ei ole näidanud seost vaktsiinide manustamise ja autismi väljakujunemise vahel. Praeguseks on mitmed autismi ja vaktsineerimise vaheliste võimalike seoste uuringud välja selgitanud, et autismi sümptomid esinevad lastel juba enne MMR-vaktsiini saamist. Veelgi uuemad uuringud annavad tõendeid selle kohta, et autism areneb välja emakas, palju enne lapse sündi või vaktsineerimist.</p>

            <section class="e-card">
                <h4 class="mt-0">Viited</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(97)11096-0/fulltext" target="_blank" rel="noopener noreferrer">https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(97)11096-0/fulltext</a></li>
                    <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home" target="_blank" rel="noopener noreferrer">https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home</a></li>
                </ul>
            </section>


            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Edasiseks uurimiseks</h3>
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

            









            <hr  class="mt-10 mb-40" />
            <h3 id="myth-2"><span class="text-rose-400">Müüt nr 2:</span> Imikute immuunsüsteem ei talu korraga mitut vaktsiini</h3>

            <p>Põhjus, miks lastele antakse vaktsiine noores eas, on see, et neil on kõrgeim risk haigestuda või surra, kui nad haigestuvad nendesse haigustesse. Kuigi vastsündinud on immuunsed mõne haiguse (nt tuulerõuged) suhtes, kuna neil on emalt saadud antikehad, kestab see immuunsus vaid paar kuud. Pealegi ei saa enamik imikuid oma emadelt difteeria, läkaköha, lastehalvatuse, teetanuse, B-hepatiidi ega Hib-i vastu kaitsvaid antikehi.</p>
            <p>Et vähendada lapsele arstivisiidil tehtavate süstide arvu, pakutakse mõnda vaktsiini kombineeritud vaktsiinina (üheks süstiks on kombineeritud kaks või enam erinevat vaktsiini). Kombineeritud vaktsiinid on näiteks difteeria-teetanuse-läkaköha ja leetrite-mumpsi-punetiste vaktsiinid.</p>
            <p>Teadusuuringute tulemused näitavad, et mitme vaktsiini samaaegne saamine ei põhjusta terviseprobleeme. Imikute immuunsüsteem on tugevam, kui võiks arvata. Veres leiduvate antikehade arvu põhjal oleks beebil teoreetiliselt võime reageerida palju suuremale arvule vaktsiinidele (jääb ainult küsimus, kas see on korraga 1000, 10 000 või 100 000). Isegi kui kõik ~10 (olenevalt riiklikust vaktsineerimiskavast) plaanitud vaktsiini manustatakse korraga, kasutaks see vaid murdosa beebi immuunvõimest. Tegelikkuses puutuvad imikud iga päev kokku lugematute bakterite ja viirustega ning immuniseerimine on sellega võrreldes tühine. Samuti ei ole uuringud näidanud, et kokkupuude mitme vaktsiiniga esimese 23 elukuu jooksul oleks seotud suurenenud riskiga nakatuda muudesse infektsioonidesse, mis ei ole vaktsiinide sihtmärgiks.</p>

            <section class="e-card">
                <h4 class="mt-0">Viited</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home" target="_blank" rel="noopener noreferrer">https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home</a></li>
                    <li><a href="https://www.bmj.com/content/364/bmj.l1481/rr-11" target="_blank" rel="noopener noreferrer">https://www.bmj.com/content/364/bmj.l1481/rr-11</a></li>
                    <li><a href="https://pubmed.ncbi.nlm.nih.gov/11773551/" target="_blank">https://pubmed.ncbi.nlm.nih.gov/11773551/</a></li>
                </ul>
            </section>











            <hr class="mt-10 mb-40" />
            <h3 id="myth-3"><span class="text-rose-400">Müüt nr 3:</span> Loomulikul teel omandatud immuunsus on parem kui vaktsiiniga omandatud immuunsus</h3>


            <p>On tõsi, et loomulik nakatumine annab peaaegu alati tugevama immuunsuse haiguse vastu kui vaktsineerimine. Selle lähenemisviisi ohud kaaluvad siiski üles suhtelise kasu. Loodusliku nakatumise järgse immuunsuse eest makstavaks hinnaks võib olla tuulerõugete või pneumokokkide põhjustatud kopsupõletik, Haemophilus influenzae b (Hib) põhjustatud intellektuaalne puue, ema punetistest põhjustatud sünnidefektid, B-hepatiidi viiruse tagajärjel saadud maksavähk, surm leetrite tõttu jne. Näiteks leetritesse haigestudes on teil võimalus oma sümptomite tõttu surra 1:500. Seevastu inimeste arv, kellel on MMR-vaktsiini saanud raskeid allergilisi reaktsioone, on alla 1:1000000.</p>
            <p>Sellegipoolest on vähe vaktsiine, mis kutsuvad esile parema immuunvastuse kui loomulikud infektsioonid. Näiteks sisaldab inimese papilloomiviiruse (HPV) vaktsiin kõrge puhtusastmega spetsiifilist valku, mis annab parema immuunvastuse kui loomulik infektsioon. Teised sarnased näited on teetanuse, Haemophilus influenzae tüüp b (Hib) ja pneumokoki vaktsiinid.</p>
            <p>Seoses COVID-19-ga on andmed selles suhtes ebaselged. On näidatud, et püsiv kaitse pärast nakatumist on ebatõenäoline. Leiti, et koroonaviirusega patsientidel tekkis oluline “immuunmälu" - immuunsüsteemi reaktsioon tellis kõigis neljas olulises immuunsüsteemi osas: aktiveerides mälu B-rakud, antikehad, mälu CD4+ T-rakud ja mälu CD8+ T-rakud, kusjuures kaitse hakkas vähenema poole aasta pärast. Samuti on teadlased näidanud immuunvastuse suurt erinevust inimeste vahel - antikehade tasemete erinevus võib populatsiooni lõikes erineda 200 korda.</p>
            <p>Teised uuringud näitasid aga, et Moderna vaktsiini (mRNA) saanud vabatahtlike veres oli rohkem antikehi, kui inimestel, kes olid põdenud COVID-19. Seda asjaolu võib aga muuta haiguse tõsidus, kuna haiguse tõsiduse ja kestva immuunvastuse vahel on seos – enamikul asümptomaatilistel patsientidel oli pärast 6-kuulist nakatumist väga vähe antikehi. Seega on SARS-CoV-2 infektsioonist tekkiv loomulik immuunsus sageli ettearvamatu. Veelgi enam, mRNA vaktsiini poolt esile kutsutud antikehad olid suunatud retseptori sidumisdomeeni (RBD) laiemale hulgale kohtadele kui need, mis tekkisid loomuliku infektsiooniga.</p>


            <section class="e-card">
                <h4 class="mt-0">Viited</h4>
                
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













            <hr  class="mt-10 mb-40" />
            <h3 id="myth-4"><span class="text-rose-400">Müüt nr 4:</span> Vaktsiinid sisaldavad eluohtlikke toksiine</h3>
            
            
            <p>Inimesed tunnevad muret formaldehüüdi, elavhõbeda või alumiiniumi kasutamise pärast vaktsiinides. Ühest küljest on tõsi, et need kemikaalid on teatud tasemel inimkehale mürgised. Teisest küljest on vaktsiinides kasutatu kemikaalide väga väikesi koguseid ja need kogused on väiksemad kui toitumisest saadavad või formaldehüüdi toodavad meie enda ainevahetussüsteemid kiiremini.</p> 
            <p>Põhjused, miks teatud elemendid, näiteks alumiiniumsoolad, lisatakse vaktsiinidele, on see, et need toimivad adjuvandina, mis tähendab, et selle olemasolu suurendab vaktsineerimisel immuunvastust. Samuti sisaldavad alumiiniumsoolasid ainult teatud vaktsiinid, uued COVID-19 vaktsiinid neid näiteks ei sisalda. Väike osa vaktsiinidest on sisaldanud säilitusainena timerosaali, kuid ükski lastel kasutatavatest vaktsiinidest ei sisalda seda praegu. Thimerosal sisaldab etüülelavhõbedat, mis eritub inimkehast kiiresti, võrreldes bioakumuleeruva metüülelavhõbedaga – seega on suur erinevus, mis kujul mürgine metall esineb. Sellest hoolimata ei sisalda COVID-19 vaktsiinid toksiine.</p>

            <section class="e-card">
                <h4 class="mt-0">Viited</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://stm.sciencemag.org/content/13/600/eabi9915" target="_blank" rel="noopener noreferrer">https://stm.sciencemag.org/content/13/600/eabi9915</a></li>
                    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6373706/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6373706/</a></li>
                    <li><a href="https://www.cdc.gov/vaccines/hcp/conversations/downloads/vacsafe-thimerosal-color-office.pdf" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/vaccines/hcp/conversations/downloads/vacsafe-thimerosal-color-office.pdf</a></li>
                    <li><a href="https://www.technologyreview.com/2020/12/09/1013538/what-are-the-ingredients-of-pfizers-covid-19-vaccine/" target="_blank" rel="noopener noreferrer">https://www.technologyreview.com/2020/12/09/1013538/what-are-the-ingredients-of-pfizers-covid-19-vaccine/</a></li>
                </ul>
            </section>



            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Edasiseks uurimiseks</h3>
                    <ul class="leading-tight">
                        <li><a href="https://www.publichealth.org/public-awareness/understanding-vaccines/goes-vaccine/" target="_blank" rel="noopener noreferrer">What Goes Into A Vaccine?</a></li>
                        <li>📺<a href="https://www.youtube.com/watch?v=Atrx1P2EkiQ" target="_blank" rel="noopener noreferrer">Vaccines and the Immune Response: How Vaccines Work</a></li>
                        <li><a href="https://www.cdc.gov/vaccines/vac-gen/additives.htm" target="_blank" rel="noopener noreferrer">What’s in Vaccines?</a></li>
                    </ul>
                </div>
            </UiCardInfo>














            <hr  class="mt-10 mb-40" />
            <h3 id="myth-5"><span class="text-rose-400">Müüt nr 5:</span> Nakatumiste arvu vähenemise põhjuseks maailmas on parem hügieen ja kanalisatsioon, mitte vaktsiinid.</h3>
            
            <p>See on osaliselt tõsi, et vaktsiinid ei vääri kogu tunnustust nakkushaiguste esinemissageduse vähendamise või kõrvaldamise eest. On näidatud, et palju on aidanud ka parem kanalisatsioon, toitumine ja antibiootikumide väljatöötamine. Saastunud vee kaudu levivad sellised nakkused, nagu tüüfus ja koolera, mis olid 20. sajandi alguses peamised haiguste ja surma põhjustajad. Paremate sanitaartingimuste tõttu on nende esinemine kindlasti oluliselt vähenenud. Hiljutine ülevaade jõudis järeldusele, et käte pesemine aitab ära hoida nakkushaigusi. Veel üks hiljutine tõend pärineb COVID-19 pandeemia ajast, mis näitas, et paranenud hügieen koos muude ohutusnõuetega, on  järsult vähendanud ka hooajalise gripi esinemissagedust.</p>
            <p>Kui need tegurid aga uuringutes eraldada ja nakkushaiguste esinemissagedust analüüsida, ei saa vaktsiinide rolli eitada. Üks näide on leetrid Ameerika Ühendriikides. Kui 1963. aastal võeti kasutusele esimene leetrite vaktsiin, püsis nakatumise määr ligikaudu 400 000 juhtumi juures aastas. Kuigi hügieenilised harjumused ja sanitaartingimused ei muutunud järgmisel kümnendil palju, langes leetritesse nakatumise määr pärast vaktsiini kasutuselevõttu järsult, 1970. aastaks oli ainult ligikaudu 25 000 juhtu. Teine näide on Hib-tõbi. Andmete kohaselt langes selle haiguse esinemissagedus pärast vaktsiini kasutuselevõttu 20 000-lt 1990. aastal ligikaudu 1500-le 1993. aastal.</p>
            <p>Veel üks tõend pärineb viimastest aastakümnetest. Hügieenis ei ole arenenud maailmas muudatusi toimunud, küll aga on vähenenud vaktsineerimise määr. Nüüd täheldatakse mitmetes riikides, nagu Ühendkuningriik, USA, Saksamaa, Hispaania jne, üha rohkem leetreid ja muid vaktsiinivälditavaid haigusi.</p>

            <section class="e-card">
                <h4 class="mt-0">Viited</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://jptcp.com/index.php/jptcp/article/view/711" target="_blank" rel="noopener noreferrer">https://jptcp.com/index.php/jptcp/article/view/711</a></li>
                    <li><a href="https://www.nature.com/articles/d41586-020-01538-8" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/d41586-020-01538-8</a></li>
                    <li><a href="https://www.nature.com/articles/d41586-020-03519-3" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/d41586-020-03519-3</a></li>
                    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3222407/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3222407/</a></li>
                </ul>
            </section>












            <hr  class="mt-10 mb-40" />
            <h3 id="myth-6"><span class="text-rose-400">Müüt nr 6:</span> Vaktsiinid võivad nakatada inimesi haigusega, mida see püüab ära hoida</h3>

            <p>Mõned vaktsiinid on elusvaktsiinid, mis sisaldavad elusaid, kuid nõrgestatud mikroorganisme/viirusi, mis on endiselt võimelised peremeesorganismis paljunema. Mikroorganismid on nõrgestatud, mis tähendab, et nad on kaotanud suurema osa oma haigust põhjustavatest võimetest, kuid neil on endiselt olemas immunogeensed omadused. Seega on see alati palju kergem variant kui siis, kui laps nakatub haigust põhjustavasse “päris” viirusesse. Nõrgestatud elusvaktsiinideks on leetrite, mumpsi ja punetiste kombineeritud vaktsiin ning rotaviiruse, rõugete, tuulerõugete ja kollapalaviku vaktsiinid. Enamikul juhtudel on elusvaktsiinidel oluliselt suurem immunogeensus kui inaktiveeritud vaktsiinidel, kuna loomulikku infektsiooni imiteeritakse peaaegu täiuslikult, kutsudes esile laiema immunoloogilise vastuse. Kuid nõrgenenud immuunsüsteemiga lastele, näiteks vähiravi saavatele lastele, neid vaktsiine ei eelistata.</p>
            <p>On tõsi, et elusvaktsiinid võivad põhjustada kergeid sümptomeid, mis sarnanevad selle haigusega, mille eest nad kaitsevad. Vaktsiini saajad kogevad aga organismi immuunvastust vaktsiinile, mitte haigust ennast. On registreeritud ainult üks juhtum, kus vaktsiin põhjustas haigust. See oli suukaudne poliomüeliidi vaktsiin (OPV), mida enam ei kasutata ja mis on praegu asendatud tapetud viiruse vormiga, mida tuntakse inaktiveeritud poliomüeliidi vaktsiinina (IPV).</p>

            <section class="e-card">
                <h4 class="mt-0">Viide</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.sciencedirect.com/science/article/pii/B9781455710768000090" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/pii/B9781455710768000090</a></li>
                </ul>
            </section>












            <hr  class="mt-10 mb-40" />
            <h3 id="myth-7"><span class="text-rose-400">Müüt nr 7:</span> Me ei pea enam vaktsineerima, sest nakatumise määr mitmetesse nakkushaigustesse on paljudes riikides nniikuinii madal</h3>
            <p>Tänu karjaimmuunsusele ei näe paljud inimesed vaktsineerimise järele enam vajadust. Karjaimmuunsus tekib siis, kui suur osa kogukonnast (“kari”) muutub haiguse suhtes immuunseks, mistõttu on haiguse levik inimeselt inimesele ebatõenäoline. Niikaua kui suurem osa inimestest on immuniseeritud mis tahes populatsioonis, on kaitstud ka immuniseerimata vähemus. See on oluline, sest teatud osa elanikkonnast – imikud, rasedad naised, eakad ja nõrgenenud immuunsüsteemiga inimesed – ei saa mõnikord/mõndasid vaktsiine. Kui aga paljud inimesed iseennast ega oma lapsi enam ei vaktsineeri, kaob karjaimmuunsus, mis annab võimaluse viirustele ja bakteritele end levitada. Sageli tuuakse mõni haigus kaasa rahvusvahelistelt reisidelt. Vaktsineerimata inimesel on sel juhul palju suurem risk haigestuda või reisimise ajal nakatuda. Seda illustreerib leetrite esinemissageduse tõus USA-s viimastel aastatel. Kuni haigused eksisteerivad, on meil oht nakatuda.</p>
            
            <section class="e-card">
                <h4 class="mt-0">Viited</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.cdc.gov/mmwr/volumes/68/wr/mm6819a4.htm" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/mmwr/volumes/68/wr/mm6819a4.htm</a></li>
                    <li><a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9" target="_blank" rel="noopener noreferrer">https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9</a></li>
                </ul>
            </section>



            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                Rohkem COVID-19 müüte ja sellega seotud teadusuuringuid leiate aadressilt: <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/science-in-5/episode-8---myth-vs-science" target="_blank" rel="noopener noreferrer">
                    WHO - Myth vs Science
                </a>
            </UiCardInfo>

 


        </section>
    </div>
</template>