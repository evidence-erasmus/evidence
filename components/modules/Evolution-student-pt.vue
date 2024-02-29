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
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="evolution-student-pt" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="pt" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Evolução</h1>
            <h5 class="font-normal uppercase leading-tight">Material do aluno</h5>
        
            <section id="s-1">
                <h2 id="s-1t">Introdução</h2>

                <p>
                    Neste módulo, és convidado a desmistificar ou a confirmar uma afirmação comum sobre a evolução. A partir de um <a href="#a1">vídeo introdutório</a>, onde são apresentadas algumas afirmações relacionadas com a evolução, discute-as em grupos. A discussão em grupo levará à seleção de uma atividade de desmistificação de mitos, onde procurará provas para desmistificar ou confirmar uma afirmação escolhida. Com base na natureza deste tópico, esta atividade está planeada para ser realizada com base em provas secundárias (pesquisas em diferentes fontes e na Internet) (ver Figura 1). 
                </p>
                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-pt.webp">
                    <template #caption>
                        <b>Figura 1.</b> Mythbusting Activity
                    </template>
                </UiContentImage>
                <p>
                    Através desta atividade, aprenderás a avaliar a fiabilidade das fontes de informação (bases de dados de ciência/investigação, ciência popular, outros meios de comunicação). Primeiro, tens de colocar uma hipótese testável. Depois de tirares conclusões, prepara-te para apresentar os teus resultados aos colegas de turma (ou outras audiências) de forma relevante e convincente (por exemplo, sob a forma de publicações em vídeo).
                </p>
            </section>




            <hr class="mt-10 mb-40 print:my-10" />

            <section id="a1">
                <h2 id="a1t">
                    Atividade 1: Apresentação do vídeo de introdução
                </h2>
                <p>
                    Por favor, veja o vídeo de introdução 1 e/ou introdução de vídeo 2. Escreva os seus pensamentos e sentimentos iniciais sobre as questões apresentadas.
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
            
            <section id="a2">
                <h2 id="a2t">Atividade 2: Grupo de discussão</h2>
                
                <p>
                    Depois de verem o vídeo, são convidados a debater o tema em pequenos grupos (4-6 pessoas).
                </p>
                <ol>
                    <li>
                        Por favor, exprimam aos vossos colegas as vossas primeiras ideias e sentimentos sobre as questões apresentadas no vídeo.
                    </li>
                    <li>
                        Em grupo, são convidados a escolher uma das afirmações ou questões para serem desmentidas (desmistificadas) ou confirmadas com base em informações que podem ser encontradas na Internet, em manuais escolares, etc.
                    </li>
                </ol>
            </section>

            
            
            
            <hr class="mt-10 mb-40 print:my-10" />

            <section id="a3">
                <h2 id="a3t">Atividade 3: Destruição de mitos</h2>

                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth1">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">1ª Afirmação:</span> 
                        “A evolução é apenas uma teoria”
                    </h4>
                    <p>
                        Embora algumas pessoas tenham atacado a evolução como “apenas uma teoria”, isso seria elevar a ideia de Darwin a um nível que ela não merece.
                    </p>
                    <p>
                        Uma teoria tem sua gênese numa hipótese, que é uma suposição de trabalho sobre por que observamos algo - um palpite fundamentado. Para testar essa suposição, os cientistas realizam experiências que refutam ou se correlacionam com a hipótese. Com o tempo, se uma hipótese continuar a resistir ao escrutínio e a muitas experiências diferentes, a comunidade científica pode começar a referir –se a ela como uma “teoria”. Em essência, isso significa que, como a hipótese não foi refutada por muitos anos e nenhuma outra hipótese conhecida funciona, podemos ter certeza razoável de que ela é precisa. As teorias, no entanto, não são imperecíveis. Se uma nova tecnologia permite uma melhor experimentação, por exemplo, uma teoria pode precisar ser descartada.
                    </p>
                    <p>
                        Dois problemas impedem alguém de legitimamente chamar a evolução de teoria. Primeiro, não há experiência direta e observável que possa ser realizada. Os cientistas podem medir ossos, estudar mutações, descodificar o DNA e notar semelhanças na morfologia (a forma e estrutura de animais e plantas), mas nunca podem testar eventos evolutivos no passado. Alguns apontam a seleção natural como uma forma de “evolução em ação”, mas a seleção natural só pode atuar sobre o potencial genético que já existe. O que observamos da seleção natural se encaixa perfeitamente com uma criação recente e não aponta para uma descendência comum. Em segundo lugar, e relacionado ao anterior, a evolução erra o alvo como teoria porque todos os supostos “testes” para confirmar o darwinismo não correspondem necessária e distintamente à ideia. Em outras palavras, cada um tem uma explicação alternativa e igualmente viável. Uma teoria requer que as experiências de confirmação correspondam a uma hipótese específica. Caso contrário, a experiência não pode estabelecer legitimidade. A evolução não tem tal legitimidade (Evolução: não é uma teoria).
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Evolution: Not even a theory</a>
                    </p> -->
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Inquérito aberto 1', url:'./inquiry/open', blank:false},
                        {text:'Inquérito guiado 1', url:'./inquiry/myth1', blank:false}
                    ]" />
                </UiCardInfo>

                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth2">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">2ª Declaração:</span> 
                        “A evolução não é científica porque não é testável ou desmistificada. Faz afirmações sobre eventos que não foram observados e nunca podem ser recriados.”
                    </h4>
                    <p>
                        A ciência é um estudo sistemático de fenômenos naturais com base em observações, identificação, descrição, investigação experimental e explicação teórica.
                    </p>
                    <h4>
                        Natureza da Verdadeira Ciência
                    </h4>
                    <ul class="leading-tight">
                        <li>
                            Tem integridade - é confiável, confiável e confiável
                        </li>
                        <li>
                            Testável - pode ser medido e verificado
                        </li>
                        <li>
                            Repetível - deve ser capaz de duplicar
                        </li>
                    </ul>
                    <p>
                        A evolução não se encaixa na definição estrita de ciência. Não pode ser medido. Observar a evolução no passado é extremamente difícil por causa das variáveis desconhecidas que podem ter estado presentes no passado. (Falácias da Evolução).
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Fallacies of Evolution</a>
                    </p> -->
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Inquérito aberto 2', url:'./inquiry/open', blank:false},
                        {text:'Inquérito guiado 2', url:'./inquiry/myth2', blank:false}
                    ]" />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth3">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">3ª Afirmação:</span> 
                        “A evolução segue um caminho direto predeterminado (ou se o ser humano evoluiu do macaco, por que ainda existem macacos?)”
                    </h4>
                    <p>
                        “Se a evolução fosse verdade, então os humanos modernos descendiam dos macacos. (Afinal, vimos muitos gráficos científicos mostrando os macacos como ancestrais do homem). Então, como os macacos ainda existem, eles não se transformaram em humanos, e os evolucionistas estão sendo tolos quando dizem que os macacos evoluíram para humanos. Caso encerrado!" (Se os humanos evoluíram dos macacos, por que os macacos existem hoje?)
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">If Humans Evolved from Apes, Why Do Apes Exist Today?</a>
                    </p> -->
                    <UiNavButtonBar :buttons="[
                        {text:'Inquérito aberto 3', url:'./inquiry/open', blank:false},
                        {text:'Inquérito guiado 3', url:'./inquiry/myth3', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth4">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">4ª Afirmação:</span> 
                        “A evolução produz criaturas perfeitamente adaptadas.”
                    </h4>
                    <p>
                        A evolução biológica é o suposto processo pelo qual a primeira célula evoluiu para a diversidade de vida que vemos atualmente. A seleção natural e as mutações são consideradas a sua força motriz; no entanto, a evolução nunca foi observada, apesar de numerosos protestos em contrário. A seleção natural e as mutações não podem acrescentar a informação necessária para transformar um tipo de organismo noutro. E não é preciso ser licenciado em ciências para perceber porque é que a evolução das moléculas para o homem é impossível. (Evolução).
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Evolution</a>
                    </p> -->
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Inquérito aberto 4', url:'./inquiry/open', blank:false},
                        {text:'Inquérito guiado 4', url:'./inquiry/myth4', blank:false}
                    ]" />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth5">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">5ª Afirmação:</span> 
                        “Species are immutable.”
                    </h4>
                    <p>
                        O registro fóssil mostra uma explosão de novas formas de vida no período Cambriano, mas não mostra nenhum traço de seus supostos precursores evolutivos. Além disso, o aparecimento abrupto de novas formas biológicas é um fenômeno recorrente ao longo da história da vida. O registro fóssil documenta repetidamente chegadas repentinas de novas formas de vida. Para saber mais sobre isso, consulte “The Fossil Record and Universal Common Ancestry”, um artigo de Günter Bechly e Stephen Meyer que documenta 19 explosões ou aparições abruptas de novas formas biológicas no registro fóssil. (do livro Theistic Evolution: A Scientific, Philosophical, and Theological Critique).
                    </p>
                    <UiNavButtonBar :buttons="[
                        {text:'Inquérito aberto 5', url:'./inquiry/open', blank:false},
                        {text:'Inquérito guiado 5', url:'./inquiry/myth5', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                            
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth6">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">6ª Declaração:</span> 
                        “O uso ou desuso de uma estrutura durante a vida de alguém, pode ser herdado por seus descendentes e levar a uma mudança em uma espécie.”
                    </h4>
                    <p>
                        Modificações num indivíduo causadas pelo seu ambiente, ou seja, o uso ou desuso de uma estrutura durante sua vida, podem ser herdadas por seus descendentes e, assim, provocar mudanças em uma espécie. (Compreendendo a Evolução).
                    </p>
                    <!-- <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Understanding Evolution</a>
                    </p> -->
                    <UiNavButtonBar :buttons="[
                        {text:'Inquérito aberto 6', url:'./inquiry/open', blank:false},
                        {text:'Inquérito guiado 6', url:'./inquiry/myth6', blank:false}
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
                



            <ModulesStudentActivity45Pt />




<!-- 
    6666666
    66
    6666666
    66   66
    6666666
 -->






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="a6">
                <h2 id="a6t">Activity 6: Case study</h2>

                <p>
                    In this activity, you are asked to think about the answer to the letter that the parents of one of the students (12th grade) sent to the principal of ________ High School with a request to exempt their child from lessons on the topic of Evolution and from studying it because the <a href="https://en.wikipedia.org/wiki/Creationism" target="_blank" rel="noopener noreferrer">creationist approach</a> to the origin of the Earth and life is advocated at home.
                </p>
                <p>
                    Similarly to any other accredited school in the country, the school follows the national curriculum, which includes the topic of Evolution, which is based on an up-to-date scientific understanding.
                </p>
                <p>
                    Help the principal of ________ High School prepare a response to the parents that respects their religious beliefs but at the same time does not conflict with the implementation of the national curriculum.
                </p>
                <p>
                    The length of the letter could be 250-500 words. Try to be polite and to devise as many scientific explanations as possible to justify your decision.
                </p>
            </section>

        </section>
    </div>
</template>