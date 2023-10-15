<script setup>
    import { useUserPreferences } from '~~/store/useUserPreferences'; 
    const userPrefs = useUserPreferences();

    // const toggleModal = (modalName) => {
    //     userPrefs.toggleModal(modalName);
    // }
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
            <h1 class="mb-0">Espaço</h1>
            <h5 class="font-normal uppercase leading-tight">Material do aluno</h5>
        
            <section id="s-0">
                <h2 id="s-0-title">Introdução</h2>

                <p>
                    Talvez já em criança tenhas tido curiosidade sobre o espaço e o que existe lá fora, sobre os diferentes corpos celestes e o infinito do espaço. Neste módulo, é convidado a refletir sobre as explorações espaciais humanas e a investigar diferentes mitos e questões relacionadas com o espaço. Partir de <a href="https://www.youtube.com/watch?v=a95oKCDgIow" target="_blank" rel="noopener noreferrer">introductory videos</a> onde são apresentadas algumas ideias, sonhos, riscos, medos e mitos relacionados com o espaço e debatê-los em grupos. A discussão em grupo conduzirá à seleção de uma atividade de exploração ou de destruição de mitos, na qual se procurarão provas para falsificar ou confirmar um mito escolhido, ou para clarificar um conceito errado existente. Esta atividade pode ser realizada na prática ou utilizando as chamadas provas secundárias (informação da literatura científica e da Internet). Como primeiro passo para trabalhar com um mito ou uma questão que se queira explorar, é necessário colocar uma hipótese testável (ver Figura 1).
                </p>

                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-pt.webp">
                    <template #caption>
                        <b>Figura 1.</b> Atividades de investigação / desmitificação
                    </template>
                </UiContentImage>

                <p>
                    Depois de encontrar provas para os seus resultados e tirar conclusões, preparará uma apresentação aos colegas de uma forma relevante e convincente (por exemplo, sob a forma de um pequeno vídeo, cartaz ou apresentação em PowerPoint). O módulo termina com uma dramatização sobre questões relacionadas com as viagens espaciais.
                </p>
            </section>        
            

            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s-1">
                <h2 id="s-1-title">
                    Atividade 1: Apresentação de um vídeo de introdução
                </h2>
            
                <p>
                    Vê o vídeo de introdução no link introductory video (Earth Calls Martha). Escreva os seus pensamentos e sentimentos iniciais sobre as questões apresentadas.
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
            <h2 id="s-2-title">Atividade 2: Grupo de discussão.</h2>
            
            <p>Depois de verem o vídeo, são convidados a debater o tema em pequenos grupos (3-4 membros).</p>

            <ol>
                <li>Por favor, expressem aos vossos colegas as vossas ideias e sentimentos sobre as questões apresentadas no vídeo.</li>
                <li>Em grupo, são convidados a escolher uma das questões (do vídeo introdutório) para aprofundar ou/e a analisar outros mitos, ideias e questões (ver abaixo) que possam ser do interesse do vosso grupo.</li>
            </ol>
            
            <h3>
                Alguns mitos e ideias sobre o espaço
            </h3>
            
            <ul>
                <li><span class="text-rose-400 font-bold">Mito 1:</span> Os astronautas em órbita da Terra não têm peso porque estão longe da Terra.</li>
                <li><span class="text-rose-400 font-bold">Mito 2:</span> Comer requer gravidade para que os alimentos cheguem ao nosso estômago. Os astronautas precisam de formação especial para comer em microgravidade (numa estação espacial).</li>
                <li><span class="text-rose-400 font-bold">Mito 3:</span> As viagens espaciais serão em breve interrompidas por detritos espaciais.</li>
                <li><span class="text-rose-400 font-bold">Mito 4:</span> Os extraterrestres visitam a Terra através de objetos voadores não identificados (OVNIs), mas os governos e os astronautas escondem-nos as provas da existência de OVNIs</li>
                <li><span class="text-rose-400 font-bold">Mito 5:</span> Os voos espaciais contribuem para a poluição atmosférica e o aquecimento global</li>
                <li><span class="text-rose-400 font-bold">Mito 6:</span> Os seres humanos devem colonizar Marte para garantir a nossa sobrevivência futura</li>
                <li><span class="text-rose-400 font-bold">Mito 7:</span> Existe vida noutras partes do Universo</li>
                <li><span class="text-rose-400 font-bold">Mito 8:</span> O lixo espacial não pode ser removido com segurança</li>
                <li><span class="text-rose-400 font-bold">Mito 9:</span> A nave espacial precisa de ter um motor de foguetão sempre a funcionar no caminho para Marte.</li>
                <li><span class="text-rose-400 font-bold">Mito 10:</span> Os foguetões precisam de ar (atmosfera) para fazer força.</li>
                <li><span class="text-rose-400 font-bold">Mito 11:</span> A microgravidade numa estação espacial em órbita da Terra é prejudicial para a saúde dos astronautas</li>
                <li><span class="text-rose-400 font-bold">Mito 12:</span> A hipergravidade durante o lançamento e a aterragem é prejudicial para a saúde dos astronautas</li>
                <li><span class="text-rose-400 font-bold">Mito 13:</span> A radiação cósmica é perigosa para os astronautas na ISS.</li>
            </ul>

            <p>
                Existe outro mito ou questão relacionada com o espaço que gostarias de explorar? Consulta o teu professor.
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
                    Atividade 3: Desmistificação / Investigação
                </h2>
                <ModulesSpaceStudentActivityPt />
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

            <section id="s-6">
                <h2 id="s-6-title">Atividade 6: Debate role-play</h2>

                <h4>
                    Nesta atividade, espera-se que:
                </h4>

                <ul>
                    <li>Familiarizar-se com os problemas colocados na dramatização e vê-los de diferentes perspetivas</li>
                    <li>Formar ou clarificar a sua própria opinião</li>
                    <li>Trabalhar no sentido de uma visão de grupo partilhada</li>
                    <li>Apresentar e defender os seus argumentos</li>
                    <li>Votar em posições políticas</li>
                </ul>

                <p>
                    A encenação é constituída por um debate que envolve um total de oito papéis que serão representados em equipas de 3-4 jogadores. Cada equipa nomeia um membro para atuar como porta-voz, enquanto os outros atuam como conselheiros.
                </p>

                <h3>
                    Tema: Viagens espaciais
                </h3>

                <p>
                    O debate está relacionado com a controvérsia de que "o Programa de Voos Espaciais Humanos é um desperdício desnecessário de recursos necessários para necessidades mais urgentes".
                </p>
                <p>
                    Este tema tem duas posições de acordo com os papéis atribuídos: a favor e contra o desenvolvimento do Programa de Voos Espaciais Humanos no teu país (envio de astronautas nacionais para o espaço).
                </p>

                <div class="md:grid md:grid-cols-2 gap-4">
                    <div class="border-4 border-green-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Posição 1 (A favor):
                        </h4>
                        <p>
                            O Estado deve reconhecer que os voos espaciais tripulados oferecem uma grande oportunidade para o progresso científico humano e o desenvolvimento nacional. O Estado deve investir no lançamento de missões tripuladas ao espaço.
                        </p>
                    </div>
                    <div class="border-4 border-red-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Position 2 (Contra):
                        </h4>
                        <p>
                            O Estado deve concentrar-se apenas em programas espaciais não tripulados, uma vez que são mais sustentáveis do ponto de vista económico e ecológico, seguros e asseguram o progresso tecnológico.
                        </p>
                    </div>
                </div>

                <h3>
                    Phase I (≈25 min.)
                </h3>
                <p>
                    Cada equipa recebe um cartão com um breve perfil da função que a equipa vai representar. Têm de apresentar argumentos para apoiar a perspetiva a defender. 
                </p>
                <p>
                    Como material de apoio para o debate do tema Espaço, são fornecidas várias fichas de informação.
                </p>

                <div class="grid grid-cols-5 gap-2">
                    <div v-for="i in 4" class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">
                        Info {{ i }}
                    </div>
                    <div class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">...</div>
                </div>

                <p>
                    Pode também procurar informações adicionais na Internet, tendo em conta a importância de escolher fontes fiáveis, tal como foi feito anteriormente na Atividade 3.
                </p>


                <h3>
                    Phase II (≈20 min.)
                </h3>
                <p>
                    Discussão em grupo: Nesta fase, partilham-se as opiniões da equipa e aperfeiçoam-se os argumentos comuns. Os argumentos iniciais podem ser preparados de forma visual, como apresentações em PowerPoint ou cartazes, utilizando técnicas de facilitação visual...
                </p>

                <h3>
                    Phase III (≈45 min.)
                </h3>
                <p>
                    O debate divide-se em duas partes. Na primeira parte, o porta-voz de cada equipa dispõe de três minutos para apresentar o seu papel e os seus argumentos iniciais. 
                </p>
                <p>
                    Depois de cada uma das oito equipas ter apresentado os seus argumentos, haverá um intervalo de cinco minutos, permitindo assim o desenvolvimento de refutações; os contra-argumentos apresentados por outras equipas, bem como as refutações dos mesmos. 
                </p>
                <p>
                    Após o intervalo, na segunda parte da dramatização, os vários porta-vozes debateram entre si, tentando contrariar os argumentos uns dos outros em apoio da sua própria posição. A tarefa dos conselheiros (outros membros da equipa) durante esta parte da dramatização é apoiar o porta-voz da sua equipa, continuando a propor refutações aos argumentos apresentados pelas equipas que representam outros papéis.
                </p>
                <p>
                    No final do debate, os participantes podem votar a favor ou contra a utilização do dinheiro dos contribuintes para as missões espaciais tripuladas ou robóticas.
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