<script setup>
    import { useUserPreferences } from '~~/store/useUserPreferences'; 
    const userPrefs = useUserPreferences();
</script>

<template>
    <UiYourAnswersButton url="answers" />

    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="pt" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Alterações Climáticas</h1>
            <h5 class="font-normal uppercase leading-tight">Materiais para os alunos</h5>
        
            
            <section id="s-1">
                <h2 id="s-1t">Introdução</h2>
                <p>
                    Este módulo convida-o a contrariar ou confirmar um mito comum sobre as alterações climáticas. Depois de verem o vídeo introdutório sobre os mitos relacionados com as alterações climáticas, vão discuti-los em grupos e escolher um mito. A discussão em grupo conduzirá a uma atividade de desmistificação de mitos em que procurará provas para contrariar ou confirmar o mito escolhido (ver Figura 1). Pode seguir a opção de investigação aberta ou guiada. No primeiro caso (investigação aberta), procurará fontes científicas na Internet (por exemplo, vídeos, artigos, páginas Web, animações) e aplicará o seu plano de atividades para contrariar ou confirmar o seu mito. No segundo caso (investigação guiada), será envolvido num plano de atividades específico sugerido (por exemplo, ver vídeos recomendados, ler artigos escolhidos, aplicar experiências recomendadas) para contrariar ou confirmar o seu mito. Através da atividade de desmistificação de mitos, aprenderá a avaliar a fiabilidade das fontes de informação (bases de dados de ciência/investigação, ciência popular e outros meios de comunicação). É claro que, em primeiro lugar, tens de colocar uma hipótese testável. Depois de tirar conclusões, prepara-se para apresentar as suas descobertas aos seus colegas (ou a diferentes audiências) de uma forma relevante e convincente (por exemplo, sob a forma de publicações em vídeo). O módulo termina com uma dramatização em que podes sugerir soluções utilizando os teus conhecimentos científicos e partindo dos teus valores pessoais e sociais.
                </p>
                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-pt.webp" />
            </section>
            





            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-2">
                <h2 id="s-2t">Atividade 1: Apresentação do vídeo de introdução</h2>
                <p>
                    Por favor, assista ao vídeo introdutório. Em seguida, anote as suas ideias e impressões iniciais sobre as questões apresentadas.
                </p>
                <UiYoutube video="CbJ7GmgEAAo" />
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
                <h2 id="section-3">Atividade  2: Discussão em grupo</h2>
                <p>
                    Depois de assistir ao vídeo, os alunos são convidados a discutir o tema em pequenos grupos (4-6 alunos).
                </p>
                <ol>
                    <li>
                        Por favor, expressem aos vossos colegas as vossas ideias e sentimentos iniciais sobre as questões apresentadas no vídeo.
                    </li>
                    <li>
                        Em grupo, são convidados a escolher um dos mitos ou questões para ser desmontado (falsificado) ou confirmado, com base em fontes científicas.
                    </li>
                    <li>
                        Depois de escolherem o mito que querem investigar, decidam se querem seguir o inquérito aberto ou guiado e cliquem na ligação correspondente: Inquérito aberto ou Inquérito guiado <!--(Mito 1, Mito 2, Mito 3, Mito 4, Mito 5, Mito 6, Mito 7)-->
                    </li>
                </ol>
            </section>
            

            
            
            

            





<!-- 
    333333 
        33
     33333
        33
    333333
 -->            
            
            
            
            
            
            
            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-4">
                <h2 id="s-4t">Myths about the climate change</h2>

                <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">1º Mito:</span> A extinção de espécies é um processo natural. Extinções em massa de espécies sempre ocorreram.
                    </h4>
                    <p>
                        A extinção de espécies é um problema histórico. Temos provas de várias extinções em massa desde os tempos pré-históricos, nomeadamente a extinção dos dinossauros. Esta extinção, que ocorreu há 66.000.000 de anos, foi atribuída ao impacto de um asteroide na Terra. Ao longo dos anos, temos outros exemplos bem conhecidos, como a extinção dos mamutes. No entanto, as causas de extinção registadas variam.
                    </p>
                    <p>
                        Além disso, a sugestão de que a humanidade pode ter impacto e perturbar forças de tal magnitude reflete uma arrogância egocêntrica entorpecedora. A Humanidade é um subconjunto da Natureza. A Natureza não é um subconjunto da Humanidade. As pessoas não podem causar nem intervir para corrigir estes processos (Financial Sense University).
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
                    </p>
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Inquérito aberto', url:'./inquiry/open', blank:false},
                        {text:'Inquérito guiado', url:'./inquiry/guided/myth1', blank:false}
                    ]" />
                </UiCardInfo>

                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">2º Mito:</span> Os organismos podem adaptar-se às alterações climáticas.  
                    </h4>
                    <p>
                        A Terra tem uma história de 4,54 mil milhões de anos. As condições climatéricas que prevaleciam de tempos a tempos no planeta mudaram. Por isso, as espécies/organismos que viviam na Terra foram obrigadas a adaptar-se às novas condições para sobreviverem e se preservarem. Desta forma, surgiu a evolução das espécies.  
                    </p>
                    <p>
                        As plantas e os animais já se adaptaram várias vezes a condições adversas (alterações climáticas, queda de meteoritos, erupções vulcânicas, etc.). Isto torna-os capazes de se adaptarem ao aumento das temperaturas e à situação a que hoje chamamos alterações climáticas. Por outras palavras, as espécies são naturalmente capazes de sobreviver em novas condições.
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
                    </p>
                    <UiNavButtonBar :buttons="[
                        // {text:'Juhised', url:''},
                        {text:'Inquérito aberto', url:'./inquiry/open', blank:false},
                        {text:'Inquérito guiado', url:'./inquiry/guided/myth2', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>

                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">3º Mito:</span> A ciência das alterações climáticas não é credível.
                    </h4>
                    <p>
                        As estações meteorológicas estão localizadas em zonas onde os dados recolhidos não são representativos das alterações climáticas e, por conseguinte, não são fiáveis para o estudo do clima global. Os cientistas visam o terrorismo global para obter dados que criam nas condições que pretendem.
                    </p>
                    <p class="pl-4 border-l border-blue-500">
                        <i>“Encontrámos estações [meteorológicas dos EUA] localizadas junto aos exaustores de unidades de ar condicionado, rodeadas por parques de estacionamento e estradas de asfalto, em telhados escaldantes e perto de passeios e edifícios que absorvem e irradiam calor”</i>
                        <br />
                        <a href="http://wattsupwiththat.files.wordpress.com/2009/05/surfacestationsreport_spring09.pdf" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —Watts 2009
                        </a>
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/surface-temperature-measurements-basic.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/surface-temperature-measurements-basic.htm</a>
                    </p>
                    <UiNavButtonBar :buttons="[
                        {text:'Inquérito aberto', url:'./inquiry/open', blank:false},
                        {text:'Inquérito guiado', url:'./inquiry/guided/myth3', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">4º Mito:</span> O aumento da temperatura é para sempre.</h4>
                    <p class="pl-4 border-l border-blue-500">
                        <i>“Já agora, se vão votar em alguma coisa, votem no aquecimento. Menos mortes devido ao frio, regiões mais habitáveis, colheitas maiores, épocas de crescimento mais longas. Isso é bom. O aquecimento ajuda os pobres.”</i>
                        <br />
                        <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&feature=youtu.be&t=353" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —John MacArthur
                        </a>
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/global-warming-positives-negatives.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/global-warming-positives-negatives.htm</a>
                    </p>
                </UiCardInfo>

                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">5º Mito:</span> Não há correlação entre o dióxido de Carbono (CO₂) e a temperatura.</h4>
                    <p class="pl-4 border-l border-blue-500">
                        <i>“Foi a industrialização do pós-guerra que causou o rápido aumento das emissões globais de CO₂, mas, em 1945, quando começou, a Terra já estava numa fase de arrefecimento que começou por volta de 1942 e continuou até 1975. Com 32 anos de aumento rápido das temperaturas globais e apenas um pequeno aumento das emissões globais de CO₂, seguidos de 33 anos de arrefecimento lento das temperaturas globais com aumentos rápidos das emissões globais de CO₂, foi enganador para o IPCC afirmar que as emissões de CO₂ eram as principais responsáveis pelo aquecimento global observado no século XX.”</i>
                        <br />
                        <a href="https://archive.md/q3Tim" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —Norm Kalmanovitch
                        </a>
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
                    </p>
                </UiCardInfo>

                <div class="divider my-6"></div>
                            
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">6º Mito:</span> As ações destinadas a atenuar as alterações climáticas tornarão as pessoas mais pobres.</h4>
                    <p class="pl-4 border-l border-blue-500">
                        <i>“Já agora, se vão votar em alguma coisa, votem no aquecimento. Menos mortes devido ao frio, regiões mais habitáveis, colheitas maiores, épocas de crescimento mais longas. Isso é bom. O aquecimento ajuda os pobres.”</i>
                        <br />
                        <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&feature=youtu.be&t=353" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —John MacArthur
                        </a>
                    </p>
                </UiCardInfo>
                
                <div class="divider my-6"></div>

                <UiCardInfo icon="game-icons:unicorn" theme="rose-400">
                    <h4 class="mt-8 mb-4 leading-tight"><span class="text-rose-400">7º Mito:</span> O clima da Terra sempre mudou e agora está a acontecer a mesma coisa.</h4>
                    <p class="pl-4 border-l border-blue-500">
                        <i>“O clima está sempre a mudar. Já tivemos eras glaciares e períodos mais quentes em que foram encontrados crocodilos em Spitzbergen. As eras glaciares ocorreram num ciclo de cem mil anos nos últimos 700 mil anos, e houve períodos anteriores que parecem ter sido mais quentes do que o atual, apesar de os níveis de CO2 serem mais baixos do que são agora. Mais recentemente, tivemos o período quente medieval e a pequena idade do gelo.”</i>
                        <br />
                        <a href="http://www.quadrant.org.au/blogs/doomed-planet/2009/07/resisting-climate-hysteria" target="_blank" rel="noopener noreferrer" class="text-sm">
                            —Richard Lindzen
                        </a>
                    </p>
                    <p>
                        <a href="https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm</a>
                    </p>
                </UiCardInfo>
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

            <section id="s-5">
                <h2 id="s-6t">Atividade 6: Jogo de Argumentação</h2>
                <p>
                    <b>O seguinte jogo de argumentação é implementado no final do módulo sobre alterações climáticas. Leia atentamente as seguintes instruções.</b>
                </p>
                <h3>
                    Instruções do jogo:
                </h3>
                <ol>
                    <li>
                        Os jogadores são divididos em grupos iguais.
                    </li>
                    <li>
                        Cada equipa escolhe um cartão verde e um azul. Os cartões verdes registam histórias relacionadas com as alterações climáticas. As histórias são baseadas em factos. Cada carta verde corresponde a uma carta azul de informação relacionada com a história que contém e dá a resposta à mesma.
                    </li>
                    <li>
                        Todos os jogadores de cada equipa leem o cartão verde. Depois, os jogadores discutem as suas histórias com as suas equipas. Por exemplo, a primeira carta verde conta uma história verídica sobre um urso polar macho de 16 anos encontrado morto em Svalbard pela fome. Em seguida, os jogadores das equipas tentam explicar por que razão o urso polar morreu.
                    </li>
                    <li>
                        Quando cada grupo apresenta a história em assembleia, o grupo com o cartão de informação azul correspondente tenta responder ao guião com os seus próprios argumentos. Nesta fase, os jogadores partilham os seus pontos de vista com os outros e melhoram as suas respostas à medida que ouvem diferentes argumentos e opiniões. Neste caso, a equipa do cartão azul afirma que o urso morreu devido às alterações climáticas.
                    </li>
                    <li>
                        No final do jogo, os jogadores ligam as cartas de história às cartas de informação. Cada argumento recebe 3 pontos. A equipa com a pontuação mais elevada ganha o jogo. 
                    </li>
                </ol>
                
                <hr />
                
                <h3>The cards</h3>
                <UiCardGamePrintMessage url="../tools/cards/climate-change" />
                <ToolsCardgameClimateChange :printMode="false" />
                <hr />
            </section>

        </section>
    </div>
</template>