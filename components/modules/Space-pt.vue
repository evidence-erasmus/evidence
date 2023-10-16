<script setup>
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();
    // const showSpaceExplorationDebate = ref(false);
    
    const toggleModal = (modalName) => {
        userPrefs.toggleModal(modalName);
    }

</script>

<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <!-- <ClientOnly> -->
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="space-pt" />
        <!-- </ClientOnly> -->
        


        <section class="e-article print:not-prose" lang="pt" style="hyphens: auto;">
            <Icon name="openmoji:teacher-light-skin-tone" class="float-right text-[6em] text-slate-300" />
            <h1 class="mb-0">Espaço</h1>
            <h5 class="font-normal uppercase leading-tight">Material do professor</h5>
            

            <section id="s-1">
                <h2 id="s-1-title">Descrição do módulo</h2>
            
                <section class="e-card e-module__meta">
                    <table class="m-0 leading-tight">
                        <tr>
                            <td><b>Grupo alvo:</b></td>
                            <td>Este material didático destina-se a estudantes entre os 15 e os 18 anos de idade, tanto do ensino geral como do ensino profissional.</td>
                        </tr>
                        <tr>
                            <td><b>Prazo previsto:</b></td>
                            <td>5-6 horas, à 45 min e alguns trabalhos de casa.</td>
                        </tr>
                    </table>
                </section>

                <p>
                    O espaço cativa a nossa imaginação desde a infância. As perguntas sobre a infinidade do Universo, a vida extraterrestre e a possibilidade de viagens espaciais a outros planetas e mais além entusiasmam a mente de muitos jovens. Em geral, as crianças têm um instinto inato para explorar e uma grande vontade de experimentar e compreender. Algumas delas sonham em ser exploradores espaciais. 
                </p>

                <p>
                    Viajar para o espaço já se tornou possível para astronautas não profissionais. Alguns passageiros pagantes foram à Estação Espacial Internacional (ISS), incluindo Anousheh Ansari, a primeira mulher iraniana e muçulmana no espaço (2006). Os programas comerciais são estabelecidos para o voo suborbital a uma altura de cerca de 100 km sobre a superfície da Terra. Os voos turísticos orbitais à volta da Terra exigem quase o dobro da altura e muito mais velocidade e energia por parte da nave espacial, mas também estão previstos para um futuro próximo. Assim, entre os nossos alunos de hoje podem estar futuros exploradores espaciais profissionais e amadores.
                </p>

                <p>
                    No entanto, na nossa vida quotidiana, circula um vasto leque de ideias erradas, mitos e teorias da conspiração sobre as viagens espaciais. Os OVNI que nos visitam do espaço exterior e a aterragem humana na Lua que nunca aconteceu são apenas dois exemplos dos que aparecem nos meios de comunicação social. A incidência de tais rumores não está a desaparecer com o tempo, uma vez que, hoje em dia, diferentes tipos de drones invulgares podem ser observados pelo público com mais frequência e são anunciados novos programas de aterragem humana na Lua. O atual "projeto Artemis" americano e o programa lunar chinês denominado "projeto Chang" parecem começar a competir para ver quem aterrará primeiro na Lua desta vez e atrair mais uma vez a atenção do público para esta área. 
                </p>

                <p>
                    Muitos dos nossos alunos estão familiarizados com as funções das naves espaciais através de diferentes jogos espaciais para computadores e smartphones e de actividades de lançamento de foguetes de água em escolas ou centros de ciência. Conhecem a sensação de ausência de peso durante um curto período de tempo, através de parques de diversões ou aviões. Provavelmente, alguns deles experimentaram uma visita à Estação Espacial Internacional (ISS) com a ajuda de uma aplicação de realidade virtual que é lançada gratuitamente na loja Oculus ou viram um filme sobre a ISS num cinema 3D em museus de ciência.
                </p>

                <p>
                    A era da exploração espacial começou em 1957 com o lançamento do primeiro satélite (Sputnik) para a órbita da Terra. A tecnologia desenvolveu-se enormemente durante estes anos; no entanto, a exploração espacial é mais lenta do que se previa, implica muitos riscos e incertezas e é acompanhada por diversos fracassos tecnológicos. Uma tentativa recente (janeiro de 2023) de lançar satélites, pela primeira vez a partir de solo britânico, utilizando uma tecnologia de lançamento de foguetões desenvolvida pela empresa Virgin Orbit não conseguiu atingir a órbita, destruindo toda a carga útil de nove satélites. A divisão de turismo espacial da empresa Virgin, a Virgin Galactic, que prometeu desde 2004 iniciar voos suborbitais regulares para turistas espaciais pagantes utilizando uma tecnologia de lançamento semelhante, ainda não cumpriu essa promessa. A abordagem da Virgin consiste em elevar uma nave espacial sob a asa de um Boeing 747 até uma altitude de cerca de 10 000 m e, em seguida, dispará-la. Este recente fracasso da Virgin mostra mais uma vez que a exploração espacial comporta sempre riscos significativos, nomeadamente no processo de lançamento de naves espaciais e de regresso das missões espaciais à Terra. As questões relacionadas com a gestão dos riscos e os dilemas morais associados ao envio de missões humanas para o espaço estão no centro deste módulo.
                </p>

                <p>
                    Ao trabalhar com este módulo, os professores podem optar por realizar algumas atividades práticas e demonstrações para explicar fenómenos, desmistificar mitos relacionados com o espaço ou explorar ideias erradas comuns, quando as instalações da escola o permitirem. Caso contrário, sugerimos que o façam através da recolha de provas em fontes fiáveis de informação científica e profissional. Os alunos podem também utilizar diferentes métodos de recolha de dados, aplicando o chamado princípio da triangulação - aumentar a validade das conclusões através da convergência de informações de diferentes fontes.
                </p>

                <p>
                    Nos <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">vídeos de introdução</a> Ao trabalhar com este módulo, os professores podem optar por realizar algumas atividades práticas e demonstrações para explicar fenómenos, desmistificar mitos relacionados com o espaço ou explorar ideias erradas comuns, quando as instalações da escola o permitirem. Caso contrário, sugerimos que o façam através da recolha de provas em fontes fiáveis de informação científica e profissional. Os alunos podem também utilizar diferentes métodos de recolha de dados, aplicando o chamado princípio da triangulação - aumentar a validade das conclusões através da convergência de informações de diferentes fontes.
                </p>

                <p>
                    As viagens espaciais humanas atrairão provavelmente uma atenção especial dos estudantes. Alguns efeitos biológicos das viagens espaciais, como o enjoo espacial ou o Síndroma de Adaptação ao Espaço (SAS), podem ser sentidos na prática na Terra através da centrifugação (Doença Induzida por Centrifugação, SIC). No entanto, poucos de nós gostariam de ser expostos a uma centrifugação e a rotações simultâneas de 1G para 3G (ou superior) e de volta para 1G, o que faz parte de um treino comum para astronautas. Uma versão ligeira desta experiência está disponível em alguns parques de diversões sob a forma de "Insanity Rides 360".
                </p>

                <p>
                    A maioria das atividades sugeridas neste módulo baseia-se em provas secundárias recolhidas através de pesquisas bibliográficas e de dados recolhidos na Internet. Através destas atividades, os alunos aprendem a avaliar a fiabilidade das fontes de informação e a apresentar argumentos baseados em provas. Depois de tirarem conclusões, os alunos preparam-se para apresentar as suas descobertas aos colegas (ou a outras audiências) de uma forma relevante e convincente (por exemplo, mensagens de vídeo).  O módulo termina com uma dramatização de debate em que os alunos podem tomar decisões socio-científicas utilizando os seus conhecimentos científicos e incorporando-os em valores pessoais, morais e sociais.
                </p>

                <p>
                    O módulo é composto por material do professor (sugestões de ensino, informação de base sobre a ciência) e material do aluno (vídeo introdutório, fichas de trabalho interativas, vídeos de factos, vídeo tutorial).
                </p>

            </section>







            

            

                <hr  class="mt-10 mb-40 print:my-10" />

                <section id="s-2">
                <h2 id="s-2-title">Objetivos de aprendizagem visados pelo módulo</h2>
                
                <ul>
                    <li>
                        <b>Competência de cidadania:</b> desenvolver os conhecimentos e atitudes dos alunos no sentido de tomarem decisões responsáveis relacionadas com as explorações espaciais humanas e robóticas.
                    </li>
                    <li><b>Competência mediática:</b>
                        <ul class="my-0">
                            <li>desenvolver as capacidades dos alunos para avaliar a fiabilidade da informação, apresentando-a de forma relevante para um determinado público,</li>
                            <li>reagir de forma adequada e responsável às notícias falsas e às teorias da conspiração apresentadas nos media (sociais).</li>
                        </ul>
                    </li>
                    <li>
                        <b>Competência digital:</b> desenvolver as aptidões dos alunos na utilização de meios digitais enquanto apresentam os resultados da sua investigação aos outros grupos.
                    </li>
                    <li>
                        <b>Competência científica:</b>
                        <ul class="my-0">
                            <li>desenvolver a compreensão dos alunos sobre a forma como o conhecimento científico é gerado e porque é que devemos confiar na ciência;</li>
                            <li>aprofundar os conhecimentos dos alunos sobre os prós e os contras das explorações espaciais humanas;</li>
                            <li>desenvolver a sua capacidade de planear e conceber procedimentos para testar o mito e interpretar os resultados.</li>
                        </ul>
                    </li>
                    <li>
                        <b>Competência social</b> - desenvolver as capacidades de argumentação dos alunos e as suas aptidões para chegar a um consenso de grupo sobre questões controversas relacionadas com o espaço.
                    </li>
                </ul>
            </section>

            

            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-3">
                <h2 id="s-3-title">
                    Conhecimentos prévios esperados
                </h2>

                <ul>
                    <li>
                        Conhecimentos básicos sobre mecânica e gravitação
                    </li>
                    <li>
                        Propriedades dos gases e da atmosfera terrestre 
                    </li>
                    <li>
                        Diferentes formas de energia 
                    </li>
                    <li>
                        Estrutura do nosso sistema solar e do universo
                    </li>
                    <li>
                        Conhecimentos sobre programas nacionais e/ou comunitários de exploração espacial
                    </li>
                </ul>

                <h3>
                    Potenciais obstáculos a considerar
                </h3>
        
                <p>
                    Espera-se que os alunos tenham experiência para avaliar a fiabilidade das fontes de informação na Internet, caso contrário poderá ser necessário mais tempo de ensino para trabalhar esta questão.
                </p>
            </section>  







            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-4">
                <h2 id="s-4-title">Estrutura do módulo</h2>
                
                <p>Este módulo é composto por 6 atividades. A sequência das atividades é apresentada na Figura 1 e no Quadro 1 (ver abaixo).</p>


                <section>
                    <ModulesStructure>
                        <template #title>VIDEO INTRODUTÓRIO</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="material-symbols:youtube-tv-outline" class="text-white" />
                            </div>
                            <Icon name="mdi:arrow-right-thick" />
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:ouroboros" class="text-white" />
                            </div>
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:unicorn" class="text-white" />
                            </div>
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:all-seeing-eye" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>ESCOLHERO O MITO</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="mdi:frequently-asked-questions" class="text-white" />
                            </div>
                            <Icon name="mdi:check-bold" />
                            
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:unicorn" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>DESMISTIFICAR O MITO</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="tabler:zoom-question" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="tabler:microscope" class="text-white" />
                            </div>
                            <Icon name="fa6-solid:arrows-spin" />
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:horse-head" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>ATRIBUIR UM FORMATO RELEVANTE ÀS EVIDÊNCIAS</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded">
                                <Icon name="material-symbols:unknown-document-outline-rounded" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="mdi:laptop-account" class="text-white" />
                            </div>
                            <Icon name="mdi:check-bold" />
                            <div class="e-icon--rounded bg-slate-600">
                                <Icon name="game-icons:horse-head" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>APRESENTAR AS EVIDÊNCIAS E AS RESPETIVAS CONCLUSÕES</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="heroicons-outline:chat-bubble-left-right" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="carbon:group-presentation" class="text-white" />
                            </div>
                            <Icon name="mdi:check-bold" />
                            <div class="e-icon--rounded">
                                <Icon name="game-icons:horse-head" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                    <ModulesStructure>
                        <template #title>DECISÕES SÓCIO-CIENTIFICAS</template>
                        <template #icons>
                            <div class="e-icon--rounded ">
                                <Icon name="fa6-solid:people-group" class="text-white" />
                            </div>
                            <div class="e-icon--rounded ">
                                <Icon name="game-icons:rolling-dices" class="text-white" />
                            </div>
                            <!-- <Icon name="mdi:check-bold" /> -->
                            <div class="e-icon--rounded">
                                <Icon name="healthicons:group-discussion-meeting" class="text-white" />
                            </div>
                        </template>
                    </ModulesStructure>
                </section>

                <p>
                    A imagem apresenta uma sequência de atividades para investigar um mito, mas os mesmos passos são válidos para trabalhar com ideias erradas comuns e afirmações controversas que necessitam de uma análise mais aprofundada.
                </p>

                <p class="mt-20"><b>Tabela 1.</b> Sequencia de aprendizagem do módulo do Espaço.</p>

                <table>
                    <thead>
                        <tr>
                            <th class="w-1/5"><b>Atividade No</b></th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Atividade 1</b></td>
                            <td>Apresentação de um vídeo de introdução no link <a href="https://www.youtube.com/playlist?list=PLuC4DJElPQrP8BEpdGHT5MZR_30VrDVCY" target="_blank" rel="noopener noreferrer">introductory video</a> (selecionar entre "Earth Calls Martha", "3-2-1", "Where are all the Aliens", "Flag in the wind") que levante a questão da exploração espacial humana através da exposição de algumas ideias, sonhos e mitos.  
                            <br />
                            O professor pode também sugerir que se conheça um espetro mais alargado de mitos e ideias relacionados com a exploração espacial.</td>
                        </tr>
                        <tr>
                            <td><b>Atividade 2</b></td>
                            <td>
                                <ul>
                                    <li>
                                        Debate em grupos:
                                        <br />
                                        Seleção de um mito ou de uma afirmação a investigar
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Atividade 3</b></td>
                            <td>
                                Em grupos:
                                <ul>
                                    <li>Colocação de hipóteses e questões de investigação relevantes;</li>
                                    <li>Procurar informação relevante para confirmar ou falsificar a hipótese colocada/questão de investigação;</li>
                                    <li>Avaliar a fiabilidade das provas encontradas;</li>
                                    <li>Tirar conclusões.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Atividade 4</b></td>
                            <td>Transformar as provas num formato visual de um pequeno vídeo, um PowerPoint ou outras formas de apresentação visual em que explicam as suas ideias.</td>
                        </tr>
                        <tr>
                            <td><b>Atividade 5</b></td>
                            <td>Apresentações em grupo (associadas a atividades de avaliação pelos pares).</td>
                        </tr>
                        <tr>
                            <td><b>Atividade 6</b></td>
                            <td>
                                O professor sugere uma questão específica relativa a prioridades no desenvolvimento de capacidades e infraestruturas de voos espaciais (ver, por exemplo, o <button class="btn btn-sm btn-accent" @click="toggleModal('space__swedish-case')"><Icon name="mdi:open-in-new" size="20" />caso da Suécia</button>). Os alunos discutem, produzem argumentos e tomam decisões no formato de um jogo de debate (role-play). 
                                <br />
                                Como alternativa mais curta, o <button class="btn btn-sm btn-accent" @click="toggleModal('space__exploration-debate')"><Icon name="mdi:open-in-new" size="20" /> Debate sobre a Exploração Espacial</button> − pode ser implementado apenas durante uma aula.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>










            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-5">
                <h2 id="s-5-title">Requisitos para o ambiente físico</h2>
                
                <p>Telemóvel inteligente, computador, Internet, equipamento de visualização para demonstração de vídeos.</p>
            </section>  
            
            
            
            
            
            
            
            <hr  class="mt-10 mb-40 print:my-10" />


            <section id="s-6">
                <h2 id="s-6-title">Avaliação</h2>
                            
                <p>
                    Os alunos podem ser avaliados de diferentes formas ao longo do módulo, incluindo as aptidões do processo científico, as competências gerais, como a capacidade de argumentação, e o conhecimento do conteúdo relacionado com o tema. Avaliações que podem ser aplicadas neste módulo:
                </p>

                <p><b>Formativa:</b></p>
                <ul>
                    <li>Feedback oral/ escrito do professor (com base em observações, questões colocadas, etc.) ao longo do módulo, durante as experiências e outros formatos de trabalho individual/ grupo.</li>
                    <li>Autoavaliação e avaliação pelos pares sobre a apresentação do grupo usando os critérios pré-determinados e a seguinte ferramenta.</li>
                    <li>Feedback oral/escrito do professor sobre as  <NuxtLink to="./tools/peer-feedback" target="_blank">fichas de trabalho</NuxtLink> individuais/ grupo.</li>
                </ul>
                
                <p><b>Sumativa:</b></p>
                <ul>
                    <li>Notas atribuídas pelo professor à apresentação do grupo (com base no produto de vídeo dos alunos e no seu desempenho, e na capacidade dos alunos de fornecer respostas/comentários relevantes).</li>
                    <li>Notas atribuídas pelo professor às fichas de trabalho em grupo ou individuais.</li>
                </ul>

            </section>
            
            
            
            
            
            
            

            
            
            <hr  class="mt-10 mb-40 print:my-10" />

            <section id="s-7">
                <h2 id="s-7-title">Sugestões de ensino</h2>

                <p>
                    As atividades do módulo podem ser estruturadas em duas partes. A primeira parte (Atividades 1-5) diz respeito ao trabalho com mitos, ideias, controvérsias e questões específicas relacionadas com o espaço que podem ser identificadas num vídeo de introdução no link introductory video, Os temas são recordados pelos alunos ou sugeridos pelo professor. A segunda parte (Atividade 6) centra-se no trabalho com o tema socio-científico das viagens espaciais humanas, que é resumido com a ajuda de um jogo de debate / dramatização (ver <NuxtLink to="./space/student#s-6">material do aluno</NuxtLink>, moderado pelo professor).
                </p>
                <p>
                    Após uma breve introdução, como atividade de aquecimento, os alunos podem, em pequenos grupos, refletir sobre as perguntas que gostariam de fazer a um astronauta/investigador espacial se tivessem oportunidade (devem ser apresentadas duas ou três perguntas por grupo). Isto permitir-lhes-á sondar os seus interesses e expectativas relativamente ao tema abordado no módulo.
                </p>

                <p>
                    Depois de ver e selecionar um vídeo de introdução no link introductory video (Atividade 1), os alunos podem optar por examinar um dos mitos, ideias erradas ou questões identificados. Os professores podem também introduzir aqui outros mitos e questões relacionados com o espaço. Os alunos podem ser encorajados a recordar os conhecimentos que têm sobre o espaço na sua vida quotidiana. Os vídeos de factos no link “fact videos” podem ser utilizados nesta etapa para destacar e alargar os tópicos, conceitos e princípios relacionados com o espaço. Partes selecionadas da <NuxtLink to="./space/background">informação científica</NuxtLink> de base podem ser repetidas quando necessário.
                </p>
                
                <p>
                    A <b>Atividade 2</b> deve ajudar os alunos a reduzir o mito ou a questão escolhida a uma hipótese/questão de investigação que possa ser confirmada/respondida durante a atividade 3. Esta <b>Atividade 3</b> pode ser realizada de duas formas:
                    <ol class="leading-tight">
                        <li>
                            através de experiência prática ou
                        </li>
                        <li>
                            investigação teórica baseada em provas secundárias.
                        </li>
                    </ol>
                </p>

                <h3>1. através de experiência prática</h3>

                <p>
                    Quando os alunos escolhem um mito/questão que pode ser testado na prática, recolhem provas através de experiências qualitativas simples. Por exemplo, consideremos o mito de que "para comer é necessário que haja gravidade para que os alimentos cheguem ao nosso estômago".
                </p>

                <h4>
                    Experimente com o seu corpo:
                </h4>

                <p>
                    Coma um bocado de comida, depois incline-se até a cabeça ficar abaixo do estômago e engula! Verá que é fácil fazer isto, apesar de a comida ir na direção oposta à da gravidade. A passagem dos alimentos pelo nosso corpo não necessita da ação da gravidade. Um sistema de contrações musculares do intestino chamado "peristaltismo" impulsiona ativamente os alimentos na direção desejada. 
                </p>
                <p>
                    O sistema funciona desta forma também porque os nossos intestinos dão voltas - por vezes para cima em vez de para baixo. Se fosse apenas a gravidade a fazer o trabalho, não conseguiríamos funcionar. Assim, os astronautas não têm problemas em digerir os alimentos num ambiente de microgravidade, como na ISS. Também podemos beber facilmente com uma palhinha enquanto estamos pendurados de cabeça para baixo. A parte mais difícil de comer ou beber de cabeça para baixo é normalmente levar a comida ou a bebida à boca. Também se pode pedir aqui aos alunos que façam investigação sobre os hábitos alimentares dos astronautas e a comida espacial.
                </p>

                <h4>
                    Experiência de lançamento de foguetões 
                </h4>

                <p>
                    (A atividade pode ser realizada como uma demonstração pelo professor)
                    <br />
                    Esta questão está relacionada com princípios ou mitos/conceitos relativos ao movimento dos foguetões, como por exemplo, "os foguetões precisam de empurrar a atmosfera para voar".
                </p>
                <p>
                    Um foguetão cria impulso ao expelir massa. Quando o combustível queimado sai, a nave espacial é acelerada na direção oposta. Este princípio geral de movimento é o mesmo que para um <button class="btn btn-sm btn-accent" @click="toggleModal('space__water-rocket')"><Icon name="mdi:open-in-new" size="20" /> water rocket</button> foguete de água (No caso de um foguete de água, a água pressurizada com ar é expelida da garrafa PET).
                </p>
                <h4>
                    Experiências virtuais:
                </h4>
                <p>
                    Estas experiências podem ajudar a recolher provas em relação a vários mitos/mitos falsos, por exemplo, sobre o movimento dos foguetões e a gravidade no espaço exterior: 
                    <ul class="leading-tight">
                        <li>
                            "Uma nave espacial precisa de um motor de foguetão sempre a funcionar em órbita (ou a caminho de Marte)"
                        </li>
                        <li>
                            "Não há gravidade no espaço", 
                        </li>
                        <li>
                            "Os astronautas que orbitam a Terra na ISS não têm peso porque estão longe da Terra" 
                        </li>
                        para citar algumas.
                    </ul>
                </p>

                <p>
                    Os professores podem escolher o que é mais adequado para a sua turma de entre uma variedade de experiências e simulações virtuais disponíveis na Internet. Recomendamos materiais do sítio Web <a href="https://phet.colorado.edu/" target="_blank" rel="noopener noreferrer">PhET Interactive Simulations project</a>,  fundada pelo Prémio Nobel Carl Wieman, que disponibiliza simulações gratuitas (PhET sims) com o objetivo de levar os alunos a aprender através da exploração e da descoberta. Por exemplo, <a href="https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html" target="_blank" rel="noopener noreferrer">Gravity and Orbits</a> a simulação interativa também pode ajudar.
                    <ul class="leading-tight">
                        <li>
                            Analisar a relação entre o Sol, a Terra, a Lua e a estação espacial
                        </li>
                        <li>
                            Ilustrar como a gravidade controla o movimento do nosso sistema solar
                        </li>
                        <li>
                            Explorar as variáveis que afetam a força da gravidade
                        </li>
                        <li>
                            Prever como o movimento se alteraria se a gravidade fosse mais forte ou mais fraca
                        </li>
                    </ul>
                </p>

                <p>
                    Outras experiências virtuais que podem ser testadas pelos alunos são: <a href="https://play.google.com/store/apps/details?id=com.StefMorojna.SpaceflightSimulator&hl=en_US&gl=US&pli=1" target="_blank" rel="noopener noreferrer">Spaceflight Simulator</a> que procura representar o comportamento de uma nave sob a influência das leis da física. Esta aplicação permite a construção de diferentes modelos de foguetões. Os alunos podem ver como o número de fases aumenta a capacidade de elevação para diferentes órbitas.

                </p>

                <h3>
                    2. investigação teórica baseada em provas secundárias
                </h3>

                <p>
                    No entanto, muitas vezes, os mitos e os conceitos errados relacionados com o espaço não podem ser destruídos (desmascarados) experimentalmente na sala de aula. Por isso, espera-se que os alunos recolham provas de fontes secundárias para confirmar ou falsificar a sua hipótese/resposta à sua pergunta de investigação. Através da justaposição de fontes de dados/meios de comunicação e do seu conteúdo, os alunos analisam criticamente a sua fiabilidade e tiram conclusões justificadas, com base nas provas encontradas. O material do aluno é fornecido com uma ferramenta que pode ser <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20" /> utilizada</NuxtLink> para analisar a informação. Seria bom que o professor explicasse a sua utilização, demonstrando e analisando fontes fiáveis e menos fiáveis como exemplos, antes de os alunos começarem a aplicar esta ferramenta por si próprios.
                </p>

                <p>
                    Para comunicar as suas descobertas, os alunos são orientados a produzir uma apresentação visual das suas conclusões (<b>Atividade 4</b>). O vídeo pode ser uma opção interessante. Para o efeito, os alunos podem utilizar um <a href="https://www.youtube.com/watch?v=_l8LgLhjLvc&list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" target="_blank" rel="noopener noreferrer">tutorial</a>. Em alternativa, os alunos podem fazer um cartaz ou um diapositivo para mostrar as suas descobertas.
                </p>

                <p>
                    Além disso, o material do aluno é fornecido com critérios (assessment tool)  A apresentação visual deve cumprir quando estiver pronta. Estes critérios podem ser utilizados para a autoavaliação durante o processo e para a avaliação pelos pares quando apresentarem os resultados e responderem às perguntas dos seus pares e do professor (<b>Atividade 5</b>).

                    
                    <!-- Lisaks võib õpilase materjalidest leida kriteeriumid, mida saab kasutada nii õpilaste juhendamiseks, enesehindamiseks kui ka <NuxtLink to="./tools/peer-feedback" target="_blank">vastastikuseks hindamiseks</NuxtLink>, kui toimuvad rühmade esitlused ja kaaslaste ja õpetaja küsimustele vastamine <b>(Tegevus 5)</b>.  -->
                    
                </p>

                <p>
                    Na última atividade (Atividade 6), serão debatidas questões e controvérsias socio científicas relacionadas com a exploração espacial. Há décadas que cientistas e decisores políticos discutem se a exploração espacial é mais adequada a seres humanos ou a robots (ver, por exemplo, um livro recente: "The End of Astronauts" de Donald Goldsmith e Martin, Rees Belknap Press, 2022). Na atual situação económica difícil da Europa, esta questão tornou-se ainda mais atual, uma vez que os voos espaciais tripulados são significativamente mais caros do que os robóticos. Sugeriu <NuxtLink to="./space/student#s-6">debate role-play</NuxtLink> apresentada no material do aluno diz respeito a esta questão.
                </p>

                <p>
                    Esta atividade permite aos alunos refletir sobre as razões e a forma de explorar o espaço. A atividade ajuda os alunos a debater um tópico interdisciplinar ligado à física, astronomia, biologia, saúde e estudos ambientais e ciências sociais. Este debate pode proporcionar aos alunos conhecimentos sobre a forma como os cientistas e os profissionais fazem e defendem afirmações e como lidam com a incerteza inerente à ciência e à tecnologia modernas. Os professores podem decidir que tipo de avaliação utilizar para encorajar a livre expressão das ideias e argumentos dos alunos. O professor pode também servir de moderador da atividade. As informações pertinentes são apresentadas no <NuxtLink to="background">Informação Científica</NuxtLink>. 
                </p>

                <p>
                    Se o professor tiver falta de tempo para realizar uma atividade de role-play em grande escala, podemos sugerir, como alternativa, uma versão mais curta de <button class="btn btn-sm btn-accent" @click="toggleModal('space__exploration-debate')"><Icon name="mdi:open-in-new" size="22" /> Debate sobre a exploração espacial</button> que podem ser implementadas apenas durante uma aula.
                </p>

                <p>
                    No final do módulo, o professor pode incluir uma atividade de reflexão sobre o que os alunos aprenderam ao participarem nas atividades do módulo e sobre a forma como colaboraram uns com os outros na preparação de argumentos, apresentações e feedback para os colegas. Reflexões artísticas sobre o tema do Espaço pelos alunos da escola de arte (ver <a href="https://drive.google.com/drive/folders/1toVQDJLTrXVHy5BiOLWoGrVkbHSAN9Gy?usp=sharing" target="_blank" rel="noopener noreferrer">photography books</a> e a exposição virtual) pode mostrar formas alternativas de explorar fenómenos relacionados com o espaço e pode servir como ponto de partida para discutir o que os alunos gostariam de aprender mais nesta área no futuro. 
                </p>
            </section>


        </section>









<!--
    TTTTTTTTTTTTT
    TTTTTTTTTTTTT
         TTT
         TTT
         TTT
         TTT
         TTT
         TTT
-->





        <teleport to="#theEnd" v-if="userPrefs.modalOpen === true && userPrefs.modalName === 'space__exploration-debate'">
            
            <UiDrawer>

                <h2>
                    Debate sobre a exploração espacial
                </h2>

                <h3>
                    Introdução:
                </h3>
                <p>
                    <b>Introduzir o conceito de "debate".</b> Peça aos alunos que partilhem a sua experiência em eventos do tipo debate. Porque é que precisamos de argumentar e ser persuasivos?
                </p>
                <h3>
                    Atividade de aquecimento:
                </h3>
                <ol>
                    <li>
                        Os alunos reúnem-se em grupos de 4. Preparem o cenário - vão para o espaço. Devem escolher uma coisa para cada um levar consigo e dizer ao seu grupo o que é. Este item não é essencial para a missão, mas é algo só para eles.
                    </li>
                    <li>
                        Estamos no foguetão quando nos apercebemos que não temos combustível suficiente. Temos de deitar fora algumas provisões para reduzir o nosso peso. 
                    </li>
                    <li>
                        Nos seus grupos, os alunos devem escolher apenas 1 dos objetos do seu grupo para guardar.
                    </li>
                    <li>
                        Peça aos alunos que deem feedback aos outros grupos.
                    </li>
                </ol>
                <h3>
                    Tema do debate:
                </h3>
                <p>
                    "Como devemos proceder com a exploração espacial"
                </p>
                <h3>
                    Atividade de debate:
                </h3>
                <ol>
                    <li>
                        Ler o tema do debate
                    </li>
                    <li>
                        Distribuam quatro cantos ou áreas da sala como:
                        <ul class="leading-tight">
                            <li>
                                "O espaço deve ser explorado por humanos, não por robots"
                            </li>
                            <li>
                                "Só os robots devem explorar o espaço"
                            </li>
                            <li>
                                "Tanto os humanos como os robots devem explorar o espaço"
                            </li>
                            <li>
                                "Não devemos gastar o dinheiro dos contribuintes na indústria espacial".
                            </li>
                        </ul>
                    </li>
                    <li>
                        Peça aos alunos que decidam individualmente com que posição concordam e que se desloquem para a área da sala que corresponde à sua convicção. Se não tiverem uma opinião forte de qualquer dos lados, peça-lhes que tomem uma decisão inicial - mas deixe claro a todos que podem mudar de posição em qualquer altura.
                    </li>
                    <li>
                        Quando os alunos tiverem escolhido a sua posição, dê-lhes algum tempo para discutirem com os outros dar-lhes algum tempo para debaterem com os outros no seu canto porque é que escolheram essa posição e como é que podem persuadir os outros a juntarem-se a eles.
                    </li>
                    <li>
                        Os alunos nomeiam alguém da sua equipa para apresentar o seu caso.
                    </li>
                    <li>
                        O debate começa! Pode decidir se os alunos podem falar abertamente entre grupos ou se devem levantar as mãos e esperar que os chame.
                    </li>
                </ol>
                <h3>
                    Envolver:
                </h3>
                <p>
                    Faça um resumo dos principais pontos do debate e crie uma lista de prós e contras para a turma. Informe os alunos de que este tema está constantemente a ser debatido entre cientistas e políticos.
                </p>
                <h3>
                    Dicas de facilitação:
                </h3>
                <ul class="leading-tight">
                    <li>
                        Assegurar que os alunos sabem que não existe uma resposta absolutamente certa ou errada
                    </li>
                    <li>
                        Incentivar os alunos a justificarem as suas opiniões
                    </li>
                    <li>
                        Intervir se os alunos se desviarem do tema
                    </li>
                    <li>
                        Assegure-se de que o debate não é dominado por um ou dois alunos
                    </li>
                    <li>
                        Tentar não influenciar as opiniões dos alunos
                    </li>
                </ul>
            </UiDrawer>
        </teleport>





        <teleport to="#theEnd" v-if="userPrefs.modalOpen === true && userPrefs.modalName === 'space__water-rocket'">
            <UiDrawer>
                <h2>
                    Construir e lançar um foguetão de água
                </h2>

                <p>
                    Provavelmente já construiu um foguetão de água a partir de uma garrafa PET. 
                    <br />
                    Materiais necessários: 
                    <ul class="leading-tight">
                        <li>
                            uma garrafa PET maior (1,5 l), 
                        </li>
                        <li>
                            uma rolha de vinho (pode ser de plástico), 
                        </li>
                        <li>
                            uma válvula de bicicleta, 
                        </li>
                        <li>
                            uma mangueira de plástico que encaixe na válvula da bicicleta, 
                        </li>
                        <li>
                            possivelmente um pouco de fio de aço e uma bomba de bicicleta potente ou uma bomba de pé. 
                        </li>
                    </ul>
                </p>
                <p>
                    Faça cuidadosamente um furo na rolha, com um diâmetro um pouco mais pequeno do que o da mangueira. Empurre a mangueira através do buraco de modo a que sobressaia 1-2 cm de um lado e prenda a válvula da bicicleta à outra extremidade da mangueira. Se a válvula estiver solta, pode utilizar o fio de aço como braçadeira da mangueira - nesse caso, enrole-o firmemente com um alicate. Em seguida, é necessário fabricar uma rampa de lançamento para que o foguetão fique bem firme. 
                </p>
                <p>
                    Encher a garrafa até um terço com água, inserir a rolha, colocar o foguetão na plataforma de lançamento, ligar a bomba à válvula e bombear. A pressão extra do ar acumula-se na garrafa, é a energia da bomba que é armazenada. No final, a pressão torna-se tão elevada que ultrapassa a fricção entre a rolha e o gargalo da garrafa, e a rolha sai. A energia armazenada é libertada, a água é empurrada para fora com uma força enorme e o foguetão voa. Podes tentar lançar o teu foguetão com diferentes "composições de combustível" - muito menos água ou apenas com ar na garrafa - e ver como isso influencia a capacidade de voo do foguetão.
                </p>
                <p>
                    <a href="https://www.scienceprojectideas.org/water-bottle-rocket.htm" target="_blank" rel="noopener noreferrer">Construir um foguetão de água</a>
                </p>
            </UiDrawer>
        </teleport>


        <teleport to="#theEnd" v-if="userPrefs.modalOpen === true && userPrefs.modalName === 'space__swedish-case'">
            <UiDrawer>
                <h2>
                    Um caso do programa espacial sueco
                </h2>

                <p>
                    A exploração espacial é um domínio sócio científico e tecnológico em desenvolvimento ativo na Suécia. O desenvolvimento técnico é efetuado sob a égide do <a href="https://sscspace.com/about-ssc/ssc-company-presentations/" target="_blank" rel="noopener noreferrer">Swedish Space Corporation</a> (SSC) criada há mais de cinquenta anos (em 1972), que tem atualmente ligações comerciais em todo o mundo. A SSC fornece ligações de comunicação para controlo de satélites, apoio ao lançamento, serviços de dados de carga útil e teleportos. Através da rede global de estações terrestres da SSC, os clientes têm acesso às suas naves espaciais na maioria das altitudes e inclinações de órbita, desde <a href="https://en.wikipedia.org/wiki/Low_Earth_orbit" target="_blank" rel="noopener noreferrer">Low Earth Orbit</a> (LEO) para o espaço lunar e profundo.
                </p>
                <p>
                    O SSC presta apoio a voos de aeronaves parabólicas para experiências científicas e tecnológicas em gravidade reduzida. Trata-se de uma forma económica e flexível de verificar a funcionalidade das experiências e a afinação dos parâmetros antes de as experiências serem levadas para o espaço. 
                </p>
                <p>
                    A SSC opera o Centro Espacial de Esrange, situado a 40 km da cidade de Kiruna, no extremo norte da Suécia, acima do Círculo Polar Ártico, que tem acesso a uma vasta área terrestre de impacto e recuperação, despovoada, com 5200 quilómetros quadrados. É também utilizado para testar motores de foguetões e veículos aéreos não tripulados (UAV).
                </p>
                <p>
                    Em janeiro de 2023, foi inaugurado um novo complexo de lançamento no porto espacial de Esrange, capaz de lançar foguetões para LEO com uma carga útil de satélites e até missões espaciais humanas. Este é o primeiro complexo de lançamento orbital da UE continental, oferecendo uma porta de entrada europeia independente para o espaço. A iniciativa europeia de foguetões reutilizáveis - o programa Themis - encomendada pela Agência Espacial Europeia (ESA) e liderada pelo ArianeGroup será a primeira a entrar em funcionamento no porto espacial de Esrange em 2023.
                </p>
                <p>
                    A SSC também manifestou o seu interesse em organizar missões de turismo espacial a partir de Esrange, onde os turistas poderiam voar para ver a Aurora Boreal. Este projeto poderia ser complementar, em muitos aspetos, aos portos espaciais do Sul.
                </p>
            </UiDrawer>
        </teleport>


    </div>
</template>

