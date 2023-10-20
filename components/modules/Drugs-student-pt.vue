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



        <section class="e-article print:not-prose" lang="pt" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <!-- <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" /> -->
            <h1 class="mb-0">Drogas</h1>
            <h5 class="font-normal uppercase leading-tight">Material para os alunos</h5>
        
            <section id="s1">
                <h2 id="s1t">Introdução</h2>

                <p>
                    Neste módulo, és convidado/a a desmistificar um mito comum sobre drogas. A droga proposta para um estudo mais aprofundado é a canábis (também conhecida como marijuana, entre outros nomes).
                </p>
                <p>
                    No vídeo introdutório são abordadas algumas crenças relacionadas com as drogas, depois de o visualizares espera-se que expresses a tua opinião e discutas o tema no teu grupo. Depois o grupo é convidado a escolher um mito sobre drogas e a desmenti-lo com base em evidências secundárias (por exemplo, pesquisas de informação online) (ver Figura 1).
                </p>

                <UiContentImage src="https://evidence.onkel.ee/assets/mythbusting-pt.webp" :elevated="true">
                    <template #caption>
                        <b>Figura 1.</b> Actividades para caçar mitos
                    </template>
                </UiContentImage>

                <p>
                    Com esta atividade, aprendes a avaliar a fiabilidade das fontes de informação (artigos de investigação, artigos/livros de divulgação científica, outras fontes de comunicação social). Para isso é necessário que coloquem uma hipótese testável ou uma questão de investigação e, em seguida, encontrar provas para invalidar ou confirmar a hipótese ou responder à questão de investigação. Depois de tirarem conclusões, são desafiados a preparar e apresentar as vossas conclusões aos colegas (ou a outras audiências) de uma forma relevante e convincente. O módulo termina com um estudo de caso em que é necessário resolver um dilema moral sobre questões relacionadas com a droga.
                </p>
            </section>
                        
 
            






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-2">
                <h2 id="s-2t">Atividade 1: Apresentação do vídeo introdutório</h2>
                <p>Por favor, vê o vídeo introdutório. Anota os teus pensamentos e sentimentos iniciais sobre os assuntos apresentados.</p>
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
                <h2 id="s-3t">Atividade 2: Discussão em grupo</h2>

                <p>Depois de veres o vídeo, discute o tema em pequenos grupos (4-6 membros).</p>
                <ol class="leading-tight">
                    <li>Por favor, partilha os teus pensamentos e sentimentos iniciais sobre os problemas apresentados no vídeo com os teus colegas.</li>
                    <li>Em grupo, escolham um dos seguintes mitos para desmistificar/ desmentir, com base em informações que podem ser encontradas na Internet (artigos de investigação, fact videos, fichas informativas ou brochuras de fontes fidedignas); podem escolher entre os seguintes mitos ou definir os vossos próprios mitos (neste último caso, é favor verificar primeiro o tópico com o vosso professor):</li>
                </ol>
                <p>
                    Decisão do grupo: Vamos desmistificar o seguinte mito:
                </p>
                <ul class="leading-tight">
                    <li><span class="text-rose-400 font-bold">Mito nº 1:</span> A canábis não é assim tão perigosa para a saúde</li>
                    <li><span class="text-rose-400 font-bold">Mito nº 2:</span> A maioria dos jovens pode consumir canábis sem problemas</li>
                    <li><span class="text-rose-400 font-bold">Mito nº 3:</span> A canábis tem usos medicinais, por isso é uma substância segura para todos</li>
                    <li><span class="text-rose-400 font-bold">Mito nº 4:</span> A canábis melhora o humor e a saúde mental</li>
                    <li><span class="text-rose-400 font-bold">Mito nº 5:</span> A canábis não provoca dependência</li>
                    <li><span class="text-rose-400 font-bold">Mito nº 6:</span> Canábis é uma droga de entrada para outras drogas</li>
                    <li><span class="text-rose-400 font-bold">Mito nº 7:</span> Não se pode ter uma overdose de canábis</li>
                    <li><span class="text-rose-400 font-bold">Mito nº 8:</span> O fumo passivo de canábis é seguro</li>
                    <li><span class="text-rose-400 font-bold">Mito nº 9:</span> A canábis está legalizada em Portugal</li>
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
                    Atividade 3: Caçar Mitos
                </h2>
                
                <ModulesDrugsStudentActivityPt />
                
            </section>
            
            






<!-- 
    44   44    5555555
    44   44    55
    4444444    5555555
         44         55
         44    5555555
-->
                



            <ModulesStudentActivity45Pt />




<!-- 
    6666666
    66
    6666666
    66   66
    6666666
 -->




            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s5">
                <h2 id="s5t">Atividade 6: Estudo de caso</h2>
                
                <ModulesDrugsStudentCasestudy1Pt />



            </section>

        </section>
    </div>
</template>