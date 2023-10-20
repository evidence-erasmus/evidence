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
            <h1 class="mb-0">Droger</h1>
            <h5 class="font-normal uppercase leading-tight">Elevmaterial</h5>
        
            <section id="s1">
                <h2 id="s1t">Introduktion</h2>

                <p>
                    I den här modulen uppmanas du att reflektera över några vanliga myter om droger. I en introduktionsvideo tas några drogrelaterade föreställningar upp som ska diskuteras inom din grupp. Ni ska välja en myt om droger som ska motbevisas med hjälp av informationssökningar från internet (Se figur 1 nedan).
                </p>
                
                <UiContentImage src="https://evidence.onkel.ee/assets/mythbusting-sv.webp" :elevated="true">
                    <template #caption>
                        <b>Figur 1.</b> Mythbustings aktivitetscirkel
                    </template>
                </UiContentImage>

                <p>
                    Genom denna aktivitet bedöms också tillförlitligheten hos olika informationskällor. Ni ska ställa en testbar hypotes eller en forskningsfråga och sedan hitta bevis för att bekräfta / förkasta hypotesen eller svara på din forskningsfråga. Efter att ha dragit slutsatser uppmanas ni att förbereda och presentera era resultat för klasskamraterna på ett relevant och övertygande sätt. Modulen avslutas med en fallstudie där ni behöver lösa ett moraliskt dilemma i drogrelaterade frågor.
                </p>
            </section>
                        
 
            






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-2">
                <h2 id="s-2t">Aktivitet 1: Presentation av videointroduktionen</h2>
                <p>Titta noga på videon. Anteckna dina första tankar om och upplevelserna av de problem som presenteras.</p>
                <UiYoutube video="cN5KV_WJubw" />
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

                <p>Efter att ha sett videon, diskutera ämnet inom din grupp (4-6 medlemmar).</p>
                <ol class="leading-tight">
                    <li>Berätta om dina första tankar och känslor om problemen som presenteras i videon för dina klasskamrater.</li>
                    <li>Som grupp uppmanas ni att välja en av följande myter för vidare bearbetning baserat på information som kan hittas från internet, läroböcker, faktablad eller broschyrer från pålitliga källor:</li>
                </ol>
                <ul class="leading-tight">
                    <li><span class="text-rose-400 font-bold">Myt 1:</span> Cannabis är inte så farligt för hälsan</li>
                    <li><span class="text-rose-400 font-bold">Myt 2:</span> Cannabis är okej för vissa ungdomar</li>
                    <li><span class="text-rose-400 font-bold">Myt 3:</span> Cannabis är en drog som kan användas inom medicin</li>
                    <li><span class="text-rose-400 font-bold">Myt 4:</span> Cannabis hjälper höja humören och främjar den mentala hälsan</li>
                    <li><span class="text-rose-400 font-bold">Myt 5:</span> Cannabis är inte beroendeframkallande</li>
                    <li><span class="text-rose-400 font-bold">Myt 6:</span> Cannabis är en inkörsport till andra droger (en sk gatewaydrog)</li>
                    <li><span class="text-rose-400 font-bold">Myt 7:</span> Du kan inte överdosera cannabis</li>
                    <li><span class="text-rose-400 font-bold">Myt 8:</span> Passiv rökning av marijuana är inte farlig</li>
                </ul>
            </section>

            





<!-- 
    333333 
        33
     33333
        33
    333333
 -->            



            <section id="s-4">
                <h2 id="s-4t">
                    Aktivitet 3: Mythbusting
                </h2>
                
                <ModulesDrugsStudentActivitySv />
                
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

            <section id="s5">
                <h2 id="s5t">Aktivitet 6: Fallstudie</h2>
                
                <ModulesDrugsStudentCasestudy1Sv />

            </section>

        </section>
    </div>
</template>