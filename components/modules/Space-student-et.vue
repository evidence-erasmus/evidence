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


        <section class="e-article print:not-prose" lang="et" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <!-- <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" /> -->
            <h1 class="mb-0">Kosmos</h1>
            <h5 class="font-normal uppercase leading-tight">Õpilase materjal</h5>
        
            <section id="s-0">
                <h2 id="s-0-title">Sissejuhatus</h2>

                <p>
                    Võib-olla tundsite juba lapsena uudishimu kosmose ja seal leiduva, erinevate taevakehade ja kosmose lõputuse vastu. Selles moodulis kutsutakse teid mõtisklema inimeste kosmoseuuringute üle ning uurima erinevaid kosmosega seotud müüte ja küsimusi. <a href="https://www.youtube.com/watch?v=a95oKCDgIow" target="_blank" rel="noopener noreferrer">Sissejuhatavas videos</a>tuuakse välja mõned kosmosealased ideed, unistused, riskid, hirmud ja müüdid ning arutatakse neid rühmades. Rühmaarutelu tulemusel valitakse müüt, mida põhjalikumalt uurida otsides tõendeid selle kummutamiseks või kinnitamiseks. Seda tegevust saab läbi viia eksperimentaalselt või kasutades sekundaarseid allikaid (teave teaduskirjandusest ja Internetist). Esimese sammuna peaksite püstitama kontrollitava hüpoteesi (vt joonis 1).
                </p>

                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-en.webp">
                    <template #caption>
                        <b>Joonis 1.</b> Müüdimurdmise / uurimistegevused
                    </template>
                </UiContentImage>

                <p>
                    Pärast oma hüpoteesi toetavate või ümberlükkavate tõendite leidmist ja järelduste tegemist valmistate te selle kohta klassikaaslastele asjakohase ja veenva esitluse (näiteks lühikese videopostituse, plakati või slaidiesitluse). Mooduli lõpetab rollimäng kosmosereiside teemadel.
                </p>
            </section>        
            

            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-1">
                <h2 id="s-1-title">
                    Tegevus 1: Sissejuhatava video vaatamine
                </h2>
            
                <p>
                    Vaata tähelepanelikult järgnevat videot. Pane kirja oma esialgsed mõtted ja tunded, mida nähtu Sinus tekitab.
                </p>
    
                <UiYoutube video="a95oKCDgIow" />
            </section>


<!--
    222222
        22
    222222
    22
    222222
-->
            


        <hr class="mt-10 mb-40 print:my-10" />

        <section id="s-2">
            <h2 id="s-2-title">Tegevus 2: Arutelu rühmades</h2>
            
            <p>Pärast video vaatamist kutsutakse teid teemat arutama väiksemates rühmades (3-4 liiget).</p>

            <ol>
                <li>Palun avaldage oma mõtteidja tundeid videos oma kaaslastele esitatud probleemide kohta.</li>
                <li>Rühmana palutakse teil valida üks müüt või probleem, mida edasi uurida kas sissejuhatavas videos väljatoodutest või  mõni alljärgnevatest:</li>
            </ol>
            
            <h3>
                Müüdid kosmose kohta:
            </h3>
            
            <ul>
                <li><span class="text-rose-400 font-bold">Müüt 1:</span> Maa ümber tiirlevad astronaudid on kaalutud, kuna asuvad Maast kaugel.</li>
                <li><span class="text-rose-400 font-bold">Müüt 2:</span> Söömine nõuab gravitatsiooni, et toit liiguks meie kõhtu. Astronaudid vajavad mikrogravitatsiooni tingimustes (kosmosejaamas) söömiseks spetsiaalset väljaõpet.</li>
                <li><span class="text-rose-400 font-bold">Müüt 3:</span> Kosmoseprügi peatab peagi kosmosereisid.</li>
                <li><span class="text-rose-400 font-bold">Müüt 4:</span> Tulnukad külastavad Maad tundmatute lendavate objektide (UFO-de) abil, kuid valitsused ja astronaudid varjavad seda meie eest.</li>
                <li><span class="text-rose-400 font-bold">Müüt 5:</span> Kosmoselennud soodustavad õhusaastet ja globaalset soojenemist.</li>
                <li><span class="text-rose-400 font-bold">Müüt 6:</span> Inimesed peaksid Marsi koloniseerima, et tagada meie tulevane ellujäämine.</li>
                <li><span class="text-rose-400 font-bold">Müüt 7:</span> Elu on ka mujal Universumis.</li>
                <li><span class="text-rose-400 font-bold">Müüt 8:</span> Kosmoseprügi ei saa ohutult eemaldada.</li>
                <li><span class="text-rose-400 font-bold">Müüt 9:</span> Kosmoselaev vajab teel Marsile pidevalt töötavat raketimootorit.</li>
                <li><span class="text-rose-400 font-bold">Müüt 10:</span> Raketid vajavad õhku (atmosfääri), mille pealt ennast edasi tõugata.</li>
                <li><span class="text-rose-400 font-bold">Müüt 11:</span> Mikrogravitatsioon Maa ümber tiirlevas kosmosejaamas kahjustab astronautide tervist.</li>
                <li><span class="text-rose-400 font-bold">Müüt 12:</span> Hüpergravitatsioon stardi ja maandumise ajal kahjustab astronautide tervist.</li>
                <li><span class="text-rose-400 font-bold">Müüt 13:</span> Kosmiline kiirgus on rahvusvahelise kosmosejaama (ISS) astronautidele ohtlik.</li>
            </ul>

            <p>
                Kas on veel mõni kosmosega seotud müüt või probleem, mida tahaksite uurida? Kooskõlastage valik ka oma õpetajaga.
            </p>
        </section>





<!-- 
    333333 
        33
     33333
        33
    333333
 -->        

            <section id="s-3">
                <h2 id="s-3-title">
                    Tegevus 3: Müüdimurdmine / uurimine
                </h2>
                <ModulesSpaceStudentActivityEt />
            </section>
            
            
            





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

            <section id="s-6">
                <h2 id="s-6-title">Tegevus 6: Väitlus-rollimäng</h2>

                <h4>
                    Selle tegevusega eeldatakse, et te:
                </h4>

                <ul>
                    <li>Tutvute rollimängus püstitatud probleemidega ja analüüsite neid erinevatest vaatenurkadest.</li>
                    <li>Kujundate ning  täpsustate oma arvamust.</li>
                    <li>Töötate ühise rühmanägemuse nimel.</li>
                    <li>Esitate ja kaitsete oma väiteid.</li>
                    <li>Hääletate poliitiliste seisukohtade üle.</li>
                </ul>

                <p>
                    Rollimäng on üles ehitatud väilusena, mis hõlmab kokku kaheksat rolli, mida esindakse 3-4 mängijaga rühmadena. Iga rühm nimetab ühe liikme kõneisikuks, teised aga nõustajateks.
                </p>

                <h3>
                    Teema: Kosmosereisid
                </h3>

                <p>
                    Väilus on seotud väitega: "Mehitatud kosmoselendude programm on riigi ressursside mõttetu raiskamine".
                </p>
                <p>
                    Väite suhtes on kaks seisukohta: mehitatud kosmoselendude programmi arendamise poolt ja vastu, kusjuures silmas tuleks pidada oma riiki (riiklike astronautide kosmosesse saatmist).
                </p>

                <div class="md:grid md:grid-cols-2 gap-4">
                    <div class="border-4 border-green-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Seisukoht 1 (poolt):
                        </h4>
                        <p>
                            Riik peaks investeerima meeskonnaga kosmoseprogrammidesse, kuna need pakuvad suurepäraseid võimalusi teaduse ja riigi arenguks.
                        </p>
                    </div>
                    <div class="border-4 border-red-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Seisukoht 2 (vastu):
                        </h4>
                        <p>
                            Riik peaks investeerima ainult mehitamata kosmoseprogrammidesse, kuna need on majanduslikult ja ökoloogiliselt jätkusuutlikumad, turvalisemad ning tagavad ühtlasi tehnoloogilise progressi.
                        </p>
                    </div>
                </div>

                <h3>
                    I osa (≈ 25 minutit)
                </h3>
                <p>
                    Iga rühm saab rollikaardi, millel on lühike ülevaade rollist, mida rühm esindab. Peate esitama argumendid, mis toetavad kaitstavat seisukohta.
                </p>
                <p>
                    Kosmoseteemadel arutlemiseks on kaasas mitu toetavat infokaarti.
                </p>

                <div class="grid grid-cols-5 gap-2">
                    <div v-for="i in 4" class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">
                        Info {{ i }}
                    </div>
                    <div class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">...</div>
                </div>

                <p>
                    Täiendavat infot saate otsida ka Internetist, pidades silmas usaldusväärsete allikate valimise olulisust, nagu seda tehti varem Tegevuses 3.
                </p>


                <h3>
                    II osa (≈20 minutit).
                </h3>
                <p>
                    Rühmaarutelu: selles etapis jagate oma rühmas vastastikku arvamusi ja täpsustate ühiseid argumente. Esialgseid argumente võib näiteks kirja panna kasutades visuaalset lihtsustamist.
                </p>

                <h3>
                    III osa (≈ 45 min., vajadusel pikendada).
                </h3>
                <p>
                    Väitlus jaguneb kaheks: Esmalt antakse iga rühma kõneisikule kolm minutit oma rolli ja esialgsete argumentide esitamiseks.
                </p>
                <p>
                    Kui kõik kaheksa rühma on oma argumendid esitanud, tehakse viieminutiline paus, mis võimaldab välja arendada ning esitada vastuargumendid ning soovi korral lükata omakorda vastuargumendid ümber.
                </p>
                <p>
                    Pärast vaheaega arutavad rollimängu kõneisikud omavahel, püüdes kaitsta oma seisukohta ning pareerida vastaspoole seisukohti. Nõustajate (teiste rühmaliikmete) ülesanne rollimängu selles osas on toetada oma rühma eestkõnelejat, jätkates teisi rolle esindavate rühmade argumentide ümberlükkamist.
                </p>
                <p>
                    Debati lõpus saavad osalejad hääletada kas mehitatud või robotite abil läbiviidavate kosmosemissioonide jaoks maksumaksja raha kasutamises.
                </p>



                <h3>
                    Kaardid
                </h3>

                <UiCardGamePrintMessage url="../tools/cards/space" />
            
                <ToolsCardgameSpace :printMode="false" />

            </section>

        </section>
    </div>
</template>