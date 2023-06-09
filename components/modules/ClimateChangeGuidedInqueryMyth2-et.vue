<script setup>
    
    import { useStudentClimateGuidedMyth2 } from '~~/store/useStudentClimateGuidedMyth2.js'; 

    const studentClimateGuidedMyth2 = useStudentClimateGuidedMyth2();
</script>

<template>
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="../../answers-climate-change-guided-myth2/" target="_blank" class="text-lg font-bold uppercase">Sinu vastused</nuxt-link>
    </section>
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" lang="et" style="hyphens:auto;">
            
            <NuxtLink to="../../student" style="transform: translateY(-4rem); position:absolute;">
                <Icon name="material-symbols:arrow-back-rounded" /> Tagasi
            </NuxtLink>

            <h1 class="mb-0">Kliimamuutused</h1>
            <h5 class="font-normal uppercase leading-tight">Juhitud uurimus, müüt 2</h5>
        
            <h2>
                Tegevus 3: Müüdimurdmine
            </h2>

            <h3>
                Sinu rühm hakkab uurima müüti nr 2: “Liigid suudavad kliimamuutustega kohaneda.”
            </h3>

            

            <p>
                Teile esitatakse müüdi nr. 2 põhiargumendid ja küsimused, millele peate vastama viidatud allikate abil.
            </p>


            <UiCardInfo theme="blue">
                <h4 class="leading-tight my-2">Müüdi 2 argument 1: Liigid on ebasoodsate tingimustega korduvalt kohanenud nii, et nad suudavad uutes kliimatingimustes ellu jääda.</h4>
            </UiCardInfo>
            
            <p>
                <b>Uurimisküsimus:</b> Kas kliimamuutus mõjutab liikide kohanemisvõimet?
            </p>
            <p>
                Vaadake animatsiooni <a href="https://youtu.be/saUTXISSlBI" target="_blank" rel="noopener noreferrer">Mere ökosüsteem – korallide juhtum</a> hoolikalt.
            </p>

            <label for="a1q1" class="block mb-2">
                <b>1. Millest see räägib? Mis selle muutuse põhjustab?</b>
            </label>
            <textarea id="a1q1" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth2.a1q1"></textarea>
            <hr />
            
            <label for="a1q2" class="block mb-2">
                <b>2. Millised on selle muudatuse tagajärjed?</b>
            </label>
            <textarea id="a1q2" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth2.a1q2"></textarea>
            <hr />
            
            




            <h2>Allikas: Eksperiment "Teravnevad ookeanid"</h2>

            <h4>Uurimisküsimus: Kas merevesi mõjutab korallide massi?</h4>

            <p><b>Vahendid ja materjalid:</b></p>

            <ul>
                <li class="my-2 leading-tight
                ">
                    Teokarbid (samas suuruses ja hästi puhastatud)
                </li>
                <li class="my-2 leading-tight
                ">
                    4,5%-line Äädikhappe lahus (50g)
                </li>
                <li class="my-2 leading-tight
                ">
                    Merevesi 400g või soolvesi, mis simuleerib 35‰  Suure Korallrahu juures olevat merevett
                </li>
                <li class="my-2 leading-tight
                ">
                    2 plastkarpi koos kaanega
                </li>
                <li class="my-2 leading-tight
                ">
                    Mõõtsilindrid 
                </li>
                <li class="my-2 leading-tight
                ">
                    Metallsõel vms
                </li>
                <li class="my-2 leading-tight
                ">
                    Veekeetja
                </li>
                <li class="my-2 leading-tight
                ">
                    Kuum vesi
                </li>
                <li class="my-2 leading-tight
                ">
                    Kleebitavad etiketid
                </li>
            </ul>
            
            <p><b>Katse käik:</b></p>

            <ol>
                <li class="my-2 leading-tight">
                    Kaalu teokarbid. Pane saadud massid kirja. Jaotage teokarbid kaheks osaks nii, et need oleksid sama massiga.
                </li>
                <li class="my-2 leading-tight">
                    Pane kahte identsesse anumasse 200 g merevett. Lisa esimesse anumasse 50 grammi äädikat.
                </li>
                <li class="my-2 leading-tight">
                    Aseta mõlemasse anumasse sama massiga kogus teokarpe.
                </li>
                <li class="my-2 leading-tight">
                    Kata anumad ning hoia neid 40 minutit samades tingimustes.
                </li>
                <li class="my-2 leading-tight">
                    Keeda teokarbid (kumbki osa eraldi) kuumas vees ja jäta 15 minutiks seisma.
                </li>
                <li class="my-2 leading-tight">
                    Puhasta iga kest eraldi. Lase neil väga hästi kuivada.
                </li>
                <li class="my-2 leading-tight">
                    Kaalu kumbki osa eraldi ja pane nende uued massid kirja.
                </li>
            </ol>




            <p class="text-red-500">siia tabel</p>
            
            
            <label for="a1hypothesis" class="block mb-2">
                <b>Hüpotees:</b>
            </label>
            <textarea id="a1hypothesis" class="textarea textarea-bordered block w-full" placeholder="abc...✍️" rows="4"
            v-model="studentClimateGuidedMyth2.a1hypothesis"></textarea>
            <hr />
            
            
            <p><b>Kogutud andmed</b></p>
            
            <p class="text-red-500">siia tabel</p>
            
            


            <label for="a1conclusions" class="block mb-2">
                <b>Järeldused</b>
            </label>
            <textarea id="a1conclusions" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth2.a1conclusions"></textarea>
            <hr />

            
            <p>Uuri <a href="https://drive.google.com/file/d/1dsgBLIsNaDFpB7y2AMamJgC41GEDHpt3/view?usp=share_link" target="_blank" rel="noopener noreferrer">allikat 2.2.</a> </p>


            <label for="a1q3" class="block mb-2">
                <b>Miks on korallide pleekimine murettekitav?</b>
            </label>
            <textarea id="a1q3" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth2.a1q3"></textarea>
            <hr />
            
            
            <p>Uuri <a href="https://drive.google.com/file/d/1iVTPAHaL8bbUWskgKFvJfrRLjoQsQCde/view?usp=share_link" target="_blank" rel="noopener noreferrer">allikat 2.3.</a> </p>


            <label for="a1q4" class="block mb-2">
                <b>Millest allikas räägib? Kuidas on omavahel seotud kliimamuutused ning viiruste ja haiguste levimine?</b>
            </label>
            <textarea id="a1q4" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth2.a1q4"></textarea>
            <hr />
            
            
            <p>Vaata animatsiooni: <a href="https://drive.google.com/file/d/1lWsUBROccNiK_UsiGhZI6imHjhG6NpkC/view?usp=share_link" target="_blank" rel="noopener noreferrer">Kliimamuutused: Jää sulamine ja loomad</a> </p>


            <label for="a1q5" class="block mb-2">
                <b>Kuidas kliimamuutused mõjutavad jääkarude populatsioone?</b>
            </label>
            <textarea id="a1q5" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth2.a1q5"></textarea>
            <hr />
            
            
            
            
            


            <p>Kasuta järgmist tööriista informatsiooni otsimiseks ning selle usaldusväärsuse hindamiseks</p>
            <p>
                <b>7. Kirjuta kokkuvõte uuritud materjalist alljärgnevasse tabelisse.</b>
            </p>

            <ToolsReliabilityTable :storeToUpdate="studentClimateGuidedMyth2" />
            <hr />
            

            <p>
                <b>8. Tuginedes kogutud andmetele, milliseid teaduse eitamise taktikaid tuvastasite loetud tekstides?</b>
            </p>

            <ModulesFliccTable :storeToUpdate="studentClimateGuidedMyth2" />

        </section>
    </div>
</template>