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
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="evolution-student-sv" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="sv" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Evolution</h1>
            <h5 class="font-normal uppercase leading-tight">Elevmaterial</h5>
        
            <section id="s-1">
                <h2 id="s-1t">Introduktion</h2>

                <p>
                    I den här modulen ska du motbevisa eller bekräfta ett vanligt påstående om evolution. Du utgår från en <a href="#s2">introduktionsvideo</a> där några evolutionsrelaterade påståenden tas upp och diskuterar dem sedan i grupper. Gruppdiskussionen kommer att leda till val av en myt-testande aktivitet där du kommer att leta efter belägg för att motbevisa eller bekräfta ett vald påstående. Utifrån ämnets karaktär är den här aktiviteten planerad att genomföras baserat på sekundära bevis (sökningar från olika källor och internet) (se Figur 1). 
                </p>
                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-sv.webp">
                    <template #caption>
                        <b>Figur 1.</b> Undersökande arbetssätt (Mythbusting Aktivitet)
                    </template>
                </UiContentImage>
                <p>
                    Genom denna aktivitet lär du dig att bedöma tillförlitligheten hos informationskällor (vetenskaps- / forskningsdatabaser, populärvetenskap, andra medier). Efter att ha dragit slutsatser kommer du att förbereda dig för att presentera dina resultat för klasskamraterna (eller annan publik) på ett relevant och övertygande sätt i någon visuell form. Alternativt / Dessutom kommer du att bli ombedd att skriva ett svarsbrev till en förälder som begär att få befria sitt barn från lektioner i ämnet Evolution (aktivitet 6).
                </p>
            </section>




            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s2">
                <h2 id="s2t">
                    Aktivitet 1: Videointroduktionen
                </h2>
                <p>
                    Se introduktionsvideo 1 Evolution och/eller introduktionsvideo 2 - Monkey Business. Anteckna dina första tankar och känslor om de problem som presenteras.
                </p>
                <UiYoutube video="cXS_uSqzwuM" />
                <hr />
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
                <h2 id="s-3t">Aktivitet 2: Gruppdiskussion</h2>
                
                <p>
                    Efter att ha sett videon ska ni diskutera ämnet i smågrupper (4-6 medlemmar).
                </p>
                <ol>
                    <li>
                        Berätta om dina första tankar om problemen som presenteras i videon, för dina klasskamrater.
                    </li>
                    <li>
                        Som grupp ska ni välja ett av påståendena / myter för att sedan utifrån  information som finns på internet, i läroböcker m.m, kunna motbevisa eller bekräfta det.
                    </li>
                    <li>
                        Efter att ha valt det uttalande du vill undersöka, bestäm om du vill följa den öppna eller guidade undersökningen och klicka på motsvarande länk 
                    </li>
                </ol>
            </section>

            
            
            
            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s4">
                <h2 id="s4t">Aktivitet 3: Myter om evolution</h2>

                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth1">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myt 1:</span> 
                        Att evolutionen har skett är bara en teori och inget som kunnat bevisas
                    </h4>
                    <p>
                        Although some people have attacked evolution as “just a theory,” that would be raising Darwin’s idea to a level it doesn’t deserve. 
                    </p>
                    <p>
                        A theory has its genesis in a hypothesis, which is a working assumption as to why we observe something—an educated guess. To test this assumption, scientists conduct experiments that either disprove or correlate with the hypothesis. Over time, if a hypothesis continues to stand up to scrutiny and many different experiments, the scientific community may begin referring to it as a “theory.” In essence, this means that because the hypothesis has not been disproved over many years and no other known hypothesis works, then we can be reasonably sure that it’s accurate. Theories, however, are not imperishable. If new technology allows better experimentation, for example, a theory may need to be discarded. 
                    </p>
                    <p>
                        Two problems prevent anyone from legitimately calling evolution a theory. First, there’s no direct, observable experiment that can ever be performed. Scientists can measure bones, study mutations, decode DNA, and notice similarities in morphology (the form and structure of animals and plants), but they can never test evolutionary events in the past. Some point to natural selection as a form of “evolution in action,” but natural selection can only act upon the genetic potential that already exists. What we do observe from natural selection fits perfectly with a recent creation and does not point to common descent. Secondly, and related to the above, evolution misses the mark as a theory because all the supposed “tests” to confirm Darwinism do not necessarily and distinctively correspond to the idea. In other words, each has an alternate and equally viable explanation. A theory requires that the confirming experiments correspond to one specific hypothesis. Otherwise, the experiment cannot establish legitimacy. Evolution has no such legitimacy.
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Evolution: Not even a theory</a>
                    </p> -->
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Öppen undersökning 1', url:'./inquiry/open', blank:false},
                        {text:'Guidad undersökning 1', url:'./inquiry/myth1', blank:false}
                    ]" />
                </UiCardInfo>

                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth2">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myt 2:</span> 
                        Evolutionsteori är ovetenskaplig eftersom den inte är testbar eller falsifierbar. Den gör påståenden om händelser som inte observerats och som aldrig kan återskapas.
                    </h4>
                    <p>
                        Science is a systematic study of natural phenomena based on observations, identification, description, experimental investigation and theoretical explanation.
                    </p>
                    <h4>
                        Nature of True Science
                    </h4>
                    <ul class="leading-tight">
                        <li>
                            Has integrity - is dependable, reliable and trustworthy
                        </li>
                        <li>
                            Testable - can it be measured and verified
                        </li>
                        <li>
                            Repeatable - should be able to duplicate
                        </li>
                    </ul>
                    <p>
                        Evolution does not fit the strict definition of science. It cannot be or measured. To observe evolution in the past is extremely difficult because of the unknown variables that may have been present in the past.
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Fallacies of Evolution</a>
                    </p> -->
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Öppen undersökning 2', url:'./inquiry/open', blank:false},
                        {text:'Guidad undersökning 2', url:'./inquiry/myth2', blank:false}
                    ]" />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth3">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myt 3:</span> 
                        Evolution följer en förutbestämd, rak väg (eller om människan utvecklats från apor, varför finns det fortfarande apor?)
                    </h4>
                    <p>
                        “If evolution were true, then modern humans descended from apes. (After all, we’ve seen many scientific charts showing apes as man’s ancestors). So, since apes still exist, they didn’t turn into humans, and evolutionists are being silly when they say apes evolved into humans. Case closed!”
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">If Humans Evolved from Apes, Why Do Apes Exist Today?</a>
                    </p> -->
                    <UiNavButtonBar :buttons="[
                        {text:'Öppen undersökning 3', url:'./inquiry/open', blank:false},
                        {text:'Guidad undersökning 3', url:'./inquiry/myth3', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth4">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myt 4:</span> 
                        Evolution producerar perfekt anpassade varelser.
                    </h4>
                    <p>
                        Biological evolution is the supposed process by which the first cell evolved into the diversity of life we see today. Natural selection and mutations are considered its driving force; however, evolution has never been observed despite numerous protestations to the contrary. Natural selection and mutations cannot add the information necessary to change one kind of organism into another. And it doesn’t take a science degree to understand why molecules-to-man evolution is impossible.
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Evolution</a>
                    </p> -->
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Öppen undersökning 4', url:'./inquiry/open', blank:false},
                        {text:'Guidad undersökning 4', url:'./inquiry/myth4', blank:false}
                    ]" />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth5">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myt 5:</span> 
                        “Arter är oföränderliga.”
                    </h4>
                    <p>
                        The fossil record shows an explosion of new forms of life in the Cambrian period but shows no trace of their supposed evolutionary precursors. Further, the abrupt appearance of new biological forms is a recurring phenomenon throughout the history of life. The fossil record repeatedly documents sudden arrivals of new life forms. For more on this, see “The Fossil Record and Universal Common Ancestry,” an article by Günter Bechly and Stephen Meyer that documents 19 explosions or abrupt appearances of new biological forms in the fossil record. (from the book Theistic Evolution: A Scientific, Philosophical, and Theological Critique).
                    </p>
                    <!-- <p>
                        <a href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
                    </p> -->
                    <UiNavButtonBar :buttons="[
                        {text:'Öppen undersökning 5', url:'./inquiry/open', blank:false},
                        {text:'Guidad undersökning 5', url:'./inquiry/myth5', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                            
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth6">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myt 6:</span> 
                        Användning eller icke användning av en kroppslig funktion under sin livstid kan ärvas av avkomman och leda till en förändring i en art.
                    </h4>
                    <p>
                        Modifications in an individual caused by its environment, in other words, the use or disuse of a structure during its lifetime, could be inherited by its offspring and, thus, bring about change in a species.
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Understanding Evolution</a>
                    </p> -->
                    <UiNavButtonBar :buttons="[
                        {text:'Öppen undersökning 6', url:'./inquiry/open', blank:false},
                        {text:'Guidad undersökning 6', url:'./inquiry/myth6', blank:false}
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
                



            <ModulesStudentActivity45Sv />




<!-- 
    6666666
    66
    6666666
    66   66
    6666666
 -->






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s7">
                <h2 id="s7t">Aktivitet 6: Fallstudie</h2>

                <p>
                    I den här aktiviteten ombeds ni att fundera på svaret till föräldrarna som skickade ett brev till rektorn med en begäran om att befria sina barn från lektioner inom Evolution eftersom de förespråkar det <a href="https://sv.wikipedia.org/wiki/Kreationism" target="_blank" rel="noopener noreferrer">kreationistiska</a> förhållningssättet till jordens och livets ursprung.
                </p>
                <p>
                    På samma sätt som alla andra ackrediterade skolor i landet följer skolan den nationella läroplanen, som inkluderar ämnet Evolution, som bygger på en vetenskaplig förståelse.
                </p>
                <p>
                    Hjälp rektorn att förbereda ett svar till föräldrarna som respekterar deras religiösa övertygelse men som samtidigt inte står i konflikt med genomförandet av den nationella läroplanen.
                </p>
                <p>
                    Brevets längd kan vara 250-500 ord. Försök att inte vara kränkande och att komma på så många vetenskapliga förklaringar som möjligt för att motivera ditt beslut.
                </p>
            </section>

        </section>
    </div>
</template>