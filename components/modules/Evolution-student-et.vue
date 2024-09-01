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
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="evolution-student-et" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="et" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Evolutsioon</h1>
            <h5 class="font-normal uppercase leading-tight">Õpilaste materjal</h5>
        
            <section id="s-1">
                <h2 id="s-1t">Sissejuhatus</h2>

                <p>
                    Selles moodulis palutakse teil ümber lükata või kinnitada levinud müüte ja arusaamu evolutsiooni kohta. Alustage <a href="#s2">sissejuhatavast videost</a>, kus tuuakse mõned neist ka välja, millele järgneb arutelu rühmades. Rühmaarutelu tulemusena tuleb teil välja valida üks müüt (väide), mille kohta otsida tõendusmaterjali, et see kas ümber lükata või kinnitada. Antud teema iseloomust lähtuvalt on see tegevus plaanis läbi viia erinevatest allikatest kogutud tõendite põhjal (otsingud raamatutest ja internetist, sh teadusuuringute andmebaasidest) (Vt joonis 1). Selle tegevuse käigus õpite te hindama ka infoallikate usaldusväärsust. Pärast järelduste tegemist peaksite te oma järeldusi klassikaaslastele ka asjakohaselt ja veenvalt (nt videopostitustena, posteri abil vmv) tutvustama. Esitluste ajal tuleks teil anda vastastikku konstruktiivset tagasisidet. Mooduli lõpetab juhtumiuuring.
                </p>
                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-et.webp">
                    <template #caption>
                        <b>Joonis 1.</b> Müüdimurdmise tegevused
                    </template>
                </UiContentImage>
            </section>         

            


            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s2">
                <h2 id="s2t">Tegevus 1: Sissejuhatava video vaatamine</h2>
                <p>Vaadake videot ning pange kirja oma mõtted, mis teil teema kohta tekkisid.</p>
                <UiYoutube video="9jusKTXoQak" />
            </section>

            

<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />
            
            <section id="s-3">
                <h2 id="s-3t">Tegevus 2: Rühmaarutelu</h2>
                
                <p>
                    Pärast videote vaatamist saate väikestes rühmades (4-6 liiget) teemat edasi arutada.
                </p>
                <ol>
                    <li>
                        Palun andke rühmas üksteisele ülevaade, millised esmased mõtted ja tunded teil tekkisid pärast video vaatamist.
                    </li>
                    <li>
                        Rühmana peate valima ühe müüdi, mida kas siis ümber lükata või kinnitada. Seda saate teha lisainformatsiooni põhjal, kasutades erinevaid materjale nt. internetiallikad, õpikud jne.
                    </li>
                    <li>
                        Leppige õpetajaga kokku, kas teostate oma müüdimurdmise avatud või juhitud  uurimuse vormis. 
                    </li>
                </ol>
            </section>

            
            
            
            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s4">
                <h2 id="s4t">Tegevus 3: Evolutsiooni müüdid</h2>

                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth1">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Müüt nr. 1:</span> 
                        “Evolutsioon on kõigest teooria.”
                    </h4>
                    <p>
                        Kui mõned inimesed väidavad, et evolutsioon on “lihtsalt teooria”, siis viib see Darwini idee tasemeni, mida see isegi ei vääri. Teooria tekkimine algab hüpoteesist, mis on eeldus selle kohta, miks me midagi üldse vaatleme ehk haritud oletus. Selle oletuse kontrollimiseks viivad teadlased läbi eksperimente, mis kas lükkavad ümber või kinnitavad püstitatud hüpoteesi. See tähendab, et kui paljude aastate jooksul ei ole püstitatud hüpoteesi ümber lükatud, siis on mõistlik väita, et püstitatud hüpotees on õige. Teooriad pole aga kivisse raiutud. Kui uus tehnoloogia võimaldab paremaid katseid läbi viia, siis võib juhtuda, et teooria lükatakse ümber.
                    </p>
                    <p>
                        Kaks probleemi ei lase evolutsiooni õigustatult teooriaks nimetada.  Esiteks pole olemas otsest jälgitavat katset, mida saaks kunagi läbi viia. Teadlased saavad mõõta luid, uurida mutatsioone, saavad kodeerida DNA-d, märgata sarnasusi organismide morfoloogias (loomade ja taimede vorm ja struktuur), kuid nad ei saa kunagi testida minevikus toimunud evolutsiooni sündmusi. Mõned viitavad looduslikule valikule, kui toimuvale evolutsioonile, kuid looduslik valik saab mõjutada ainult olemasolevaid geene.
                    </p>
                    <p>
                        See, mida me saame looduslikust valikust teada, sobib suurepäraselt uue looduga ning ei viita ühisele päritolule.  Teiseks, evolutsioon ei ole teooria, sest kõik nö  testid kinnitamaks darvinismi, ei pruugi sellele ideele vastata. Teisisõnu, igaühel on alternatiivne selgitus. Teooria nõuab, et kinnitavad katsed vastaksid ühele konkreetsele hüpoteesile. Vastasel juhul ei saa katse hüpoteesi kinnitada. Evolutsioonil ei ole sellist kinnitust. 
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Evolution: Not even a theory</a>
                    </p> -->
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Avatud uurimus 1', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus 1', url:'./inquiry/myth1', blank:false}
                    ]" />
                </UiCardInfo>

                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth2">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Müüt nr. 2:</span> 
                        “Evolutsioon ei ole teadus, sest seda ei saa testida ja ümber lükata. See teeb järeldusi sündmuste kohta, mida pole võimalik vaadelda ja mida ei saa kunagi taasluua.”
                    </h4>
                    <p>
                        Teadus on loodusnähtuste süstemaatiline uurimine, mis põhineb vaatlustel, määratlemistel, kirjeldamisel, katsetamisel ja teoreetilistel selgitustel.
                    </p>
                    <h4>
                        Tõelise teaduse olemus
                    </h4>
                    <ul class="leading-tight">
                        <li>
                            Omab terviklikkust − on töökindel, usaldusväärne.
                        </li>
                        <li>
                            Testitav – kas seda saab mõõta ja kontrollida.
                        </li>
                        <li>
                            Korratav – peaks saama korrata.
                        </li>
                    </ul>
                    <p>
                        Evolutsioon ei vasta teaduse rangele määratlusele. Seda ei saa  mõõta. Minevikus toimuvat evolutsiooni on äärmiselt raske vaadelda tundmatute muutujate tõttu, mis võisid minevikus esineda.
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Fallacies of Evolution</a>
                    </p> -->
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Avatud uurimus 2', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus 2', url:'./inquiry/myth2', blank:false}
                    ]" />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth3">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Müüt nr. 3:</span> 
                        “Evolutsioon järgib ettemääratud sirget teed.” (“Kui inimene arenes ahvidest, siis miks on veel ahvid olemas?”)
                    </h4>
                    <p>
                        “Kui evolutsioon oleks tõsi, siis tänapäeva inimene arenes ahvidest. (Me oleme näinud mitmeid teaduslikke jooniseid, kus kujutatakse ahve inimese eellastena). Ahvid ei muutunud inimesteks, sest nad eksisteerivad siiani ja  evolutsionistid on rumalad, kui nad ütlevad, et inimesed on arenenud ahvidest. Juhtum lahendatud!”
                    </p>
                    <UiNavButtonBar :buttons="[
                        {text:'Avatud uurimus 3', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus 3', url:'./inquiry/myth3', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth4">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Müüt nr. 4:</span> 
                        “Evolutsioon toodab ideaalselt kohanenud organisme.”
                    </h4>
                    <p>
                        Bioloogiline evolutsioon on oletatav protsess. Selle käigus arenes esimesest rakust elurikkus, mida me täna näeme. Looduslikku valikut ja mutatsioone peetakse selle liikumapanevaks jõuks. Hoolimata arvukatest protestidest  pole evolutsiooni kunagi täheldatud. Looduslik valik ja mutatsioonid ei saa anda teavet, mis on vajalik ühe organismi liigi muutmiseks teiseks. Ja selleks, et mõista, miks molekulidest-inimeseks evolutsioon on võimatu, pole vaja teaduskraadi.
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Evolution</a>
                    </p> -->
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Avatud uurimus 4', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus 4', url:'./inquiry/myth4', blank:false}
                    ]" />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth5">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Müüt nr. 5:</span> 
                        “Liigid on muutumatud.”
                    </h4>
                    <p>
                        Fossiilsed andmed näitavad uute eluvormide plahvatuslikku levikut Kambriumi perioodil, kuid ei näita jälgi nende oletatavatest evolutsioonilistest eelkäijatest. Lisaks on uute bioloogiliste vormide järsk ilmumine kogu elu ajaloos korduv nähtus. Fossiilid dokumenteerivad korduvalt uute eluvormide ootamatuid saabumisi. Selle kohta lisateabe saamiseks vaadake Günter Bechly ja Stephen Meyeri artiklit "The Fossil Record and Universal Common Ancestry", mis dokumenteerib 19 plahvatust või uute bioloogiliste vormide järsku ilmumist fossiilide registrisse. (raamatust “Theistic Evolution: A Scientific, Philosophical and Theological Critique”). 
                    </p>
                    <!-- <p>
                        <a href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
                    </p> -->
                    <UiNavButtonBar :buttons="[
                        {text:'Avatud uurimus 5', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus 5', url:'./inquiry/myth5', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                            
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth6">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Müüt nr. 6:</span> 
                        “Mingi organismi kehaosa kasutamine või mittekasutamine tema eluea jooksul võib päranduda järglastele ja see võib viia liikide muutumiseni.”
                    </h4>
                    <p>
                        Keskkonnast põhjustatud muutused isendis teatud kehaosa kasutamise või mittekasutamise tagajärjel tema eluea jooksul võib päranduda tema järglastele. See võib seeläbi tuua kaasa muutuse liigis.
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Understanding Evolution</a>
                    </p> -->
                    <UiNavButtonBar :buttons="[
                        {text:'Avatud uurimus 6', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus 6', url:'./inquiry/myth6', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
            </section>






<!-- 
    333333 
        33
     33333
        33
    333333
 -->


            



<!-- 
    44   44    5555555
    44   44    55
    4444444    5555555
         44         55
         44    5555555
-->
                



            <ModulesStudentActivity45Et />




<!-- 
    6666666
    66
    6666666
    66   66
    6666666
 -->






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s7">
                <h2 id="s7t">Tegevus 6: Juhtumiuuring</h2>

                <p>
                    Järgnevalt palutakse teil mõelda vastus kirjale, mille ühe õpilase (12. klass) vanemad saatsid Arenguvalla Gümnaasiumi direktorile nõudega vabastada nende laps evolutsiooni käsitlevatest bioloogia tundidest ning teema õppimisest, kuna nende kodus pidavat pooldatama maailma arengu <a href="https://et.wikipedia.org/wiki/Kreatsionism" target="_blank" rel="noopener noreferrer">kreatsionistlikku</a> käsitlust.  
                </p>
                <p>
                    Kuna tegemist on riiklikult akrediteeritud õppeasutusega, siis järgib see õppe läbiviimisel riiklikku õppekava, mis sisaldab ühtlasi kaasaegset teaduslikku evolutsioonikäsitlust. 
                </p>
                <p>
                    Aidake Arenguvalla Gümnaasiumi direktoril koostada vastus lapsevanematele, mis austaks nende religioosseid tõekspidamisi, kuid samas ei läheks vastuollu riikliku õppekava täitmisega, sh käesoleva aja teadusliku maailmavaatega. Kirja pikkus võiks olla 250-500 sõna. Püüdke välja tuua võimalikult veenvaid põhjendusi. Katsuge selgitada, miks oleks mitte ainult et kohustuslik, vaid ka kasulik nende lapsele evolutsiooniteooriat teada.
                </p>
            </section>

        </section>
    </div>
</template>