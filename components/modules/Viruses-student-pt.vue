<script setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();

    const changeTab = (index) => {
        userPrefs.setLearnPath("learnPathViruses", index);
    } 
</script>

<template>
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-6 px-10 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="answers" target="_blank" class="text-lg font-bold uppercase">Your answers</nuxt-link>
    </section>
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="viruses-student-pt" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="pt" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Vírus</h1>
            <h5 class="font-normal uppercase leading-tight">Material do aluno</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">Introdução</h2>

            
            <p>
                Este módulo convida-o a desmistificar ou a confirmar um mito comum sobre vírus. Numa introdução em vídeo, são apresentadas algumas crenças relacionadas com o vírus, após as quais é esperado que expresse a sua opinião e discuta o tema dentro do seu grupo. Além disso, é convidado a optar por um mito sobre os vírus a serem desmistificados, quer com base em provas secundárias (por exemplo, pesquisas de informação a partir da Internet) quer experimentalmente f. 
            </p>
            <p>
                Através desta atividade, aprende-se a avaliar a fiabilidade das fontes de informação (através de bases de dados científicas / de investigação, do estudo da ciência cidadã e outros meios de comunicação) e/ou desenvolver ainda mais as suas competências de experimentação. Em ambos os casos, precisa colocar uma hipótese testável ou uma questão de pesquisa e, em seguida, encontrar evidências para confirmar / refutar a hipótese/responder à sua pergunta de pesquisa (veja a Figura 1).
            </p>
            
            <p>
                Depois de tirar conclusões, é convidado a preparar e apresentar as suas descobertas aos colegas de turma (ou outros públicos) de forma relevante e convincente através de um pequeno post de vídeo, um cartaz, uma apresentação, etc. O módulo é terminado com um jogo de tabuleiro onde deve decidir sobre questões relacionadas com o vírus.
            </p>
                
            

            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-1">Atividade 1: Apresentação da introdução em vídeo</h2>
            
            <!-- <ModulesStructure>
                    <template #title>Activity 1<br />OUTLINING THE MOST COMMON TOPIC-RELATED MYTHS</template>
                    <template #icons>
                        <div class="e-icon--rounded ">
                            <Icon name="material-symbols:youtube-tv-outline" class="text-white" />
                        </div>
                        <Icon name="mdi:arrow-right-thick" />
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:ouroboros" class="text-white" />
                        </div>
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:unicorn" class="text-white" />
                        </div>
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:all-seeing-eye" class="text-white" />
                        </div>
                    </template>
                </ModulesStructure> -->

            <p>Por favor, veja o vídeo com cuidado. Escreva os seus pensamentos e sentimentos iniciais sobre os assuntos apresentados.</p>

            <UiYoutube video="t4v-36h2noo" /> 
            

            



<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-2">Atividade 2: Discussão em grupo</h2>
            
            <!-- <ModulesStructure>
                    <template #title>Activity 2<br />CHOOSING A MYTH</template>
                    <template #icons>
                        <div class="e-icon--rounded ">
                            <Icon name="fa6-solid:people-group" class="text-white" />
                        </div>
                        <div class="e-icon--rounded ">
                            <Icon name="mdi:frequently-asked-questions" class="text-white" />
                        </div>
                        <Icon name="mdi:check-bold" />
                        
                        <div class="e-icon--rounded bg-rose-400">
                            <Icon name="game-icons:unicorn" class="text-white" />
                        </div>
                    </template>
                </ModulesStructure> -->
            
            <p>Depois de ver o vídeo, é convidado a discutir o tema dentro do seu grupo (4-6 membros).</p>
            <ol>
                <li>Por favor, expresse os seus pensamentos e sentimentos iniciais sobre a questão apresentada aos outros.</li>
                <li>Como grupo, é convidado a escolher um dos seguintes mitos para desmistificar com base em informações encontradas na internet, (texto)livros ou/e, se possível, experimentalmente.</li>
            </ol>
            <p>Como grupo, é convidado a escolher um dos seguintes mitos para desmistificar com base em informações encontradas na internet, (texto)livros ou/e, se possível, experimentalmente.</p>

            
            <h3><span class="text-rose-400">Mito 1:</span> Vacinas causam autismo/efeitos colaterais graves</h3>
            <p>Algumas pessoas acreditam que as vacinas e os seus aditivos/conservantes podem causar reações graves no organismo; algumas incluem o autismo - um grupo de deficiências de desenvolvimento que podem causar desafios sociais, de comunicação e comportamentais significativos. Estas alegações são justificadas?</p>

            <h3><span class="text-rose-400">Mito 2:</span> Os sistemas imunológicos infantis não conseguem lidar com várias vacinas.</h3>
            <p>Alguns dias após o nascimento, bem como algumas semanas / meses depois, várias vacinas diferentes são injetadas num bebé. A questão é se isto pode ser tratado pelo corpo de uma criança?</p>

            <h3><span class="text-rose-400">Mito 3:</span> A imunidade adquirida através de uma doença é uma escolha melhor do que a imunidade adquirida através da vacinação.</h3>
            <p>A imunidade natural é obtida pela exposição à doença através de infeção. Enquanto a imunidade induzida pela vacina é obtida introduzindo uma forma morta ou enfraquecida do organismo da doença ou mRNA criada em laboratório para ensinar as nossas células a fazer uma proteína ou mesmo apenas um pedaço de uma proteína ou versão modificada de um vírus que desencadeia uma resposta imune. O que levanta a questão de saber se são iguais ou não.</p>

            <h3><span class="text-rose-400">Mito 4:</span> As vacinas contêm substâncias que podem pôr a vida em risco.</h3>
            <p>Por vezes tem-se dito que as vacinas podem conter aditivos ou conservantes, alguns tóxicos como mercúrio, alumínio, formaldeído, etc. Se estas alegações são ou em que medida estas alegações são válidas?</p>

            <h3><span class="text-rose-400">Mito 5:</span> Uma melhor higiene e um melhor saneamento são responsáveis pela diminuição das infeções, não as vacinas.</h3>
            <p>A propagação da doença tem sido comprovada que está relacionada com condições ambientais, saneamento e higiene pessoal. Durante os últimos dois séculos, houve melhorias em todos estes fatores. Ao mesmo tempo, o número de infeções diminuiu e a vacinação aumentou. Mas podemos dizer que as vacinas não importam?</p>

            <h3><span class="text-rose-400">Mito 6:</span> As vacinas podem infetar a criança com a doença que está a tentar prevenir.</h3>
            <p>Algumas vacinas (sarampo, varicela, etc.) utilizam formas enfraquecidas do organismo da doença (vacinas atenuadas vivamente). A questão é se isto vai infetar a criança?</p>

            <h3><span class="text-rose-400">Mito 7:</span> Não precisamos de vacinar porque muitos países têm baixas taxas de infeção.</h3>
            <p>Como muito poucas pessoas têm doenças, há uma probabilidade muito baixa de eu estar em contacto com essas pessoas, ou é improvável que eu viaje para áreas com taxas de infeção mais elevadas. Portanto, alguns acreditam que poderíamos abandonar a maioria das vacinas administradas rotineiramente a crianças.</p>

            <h3><span class="text-rose-400">Mito 8:</span> O sabão é tão bom quanto o álcool para matar certos vírus (por exemplo, COVID-19)</h3>
            <p>Uma opção para desinfetar é usar álcool, mas a outra é lavar as mãos com sabão. Mas são igualmente eficazes?</p>

            <h3><span class="text-rose-400">Mito 9:</span> As máscaras são inúteis na prevenção de doenças respiratórias superiores (por exemplo, COVID-19).</h3>
            <p>Tem-se discutido muito na sociedade sobre a eficácia do uso de máscaras para prevenir doenças causadas por gotículas. Ao mesmo tempo, este hábito tem sido prática corrente em algumas culturas asiáticas. Ainda assim, qual é a evidência científica por trás disso? Ou é possível testar a sua eficácia?</p>
            
            <h3><span class="text-rose-400">Mito 10:</span> O uso prolongado da máscara produz hipoxia/Máscaras podem causar envenenamento por dióxido de carbono.</h3>
            <p>Acredita-se que através da máscara, terá menos oxigénio. Se for verdade, então com um fornecimento limitado de oxigénio, há um risco acrescido de falta de oxigénio, chamado hipoxia. Ao mesmo tempo, o seu corpo liberta dióxido de carbono que, em concentrações muito elevadas, pode ser tóxico. Mas esta suposição é verdadeira?</p>

            







<!-- 
    333333 
        33
     33333
        33
    333333
 -->


            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-3">Atividade 3: Desmitificar Mitos</h2>

            <!-- <ModulesStructure>
                <template #title>Activity 3<br />MYTHBUSTING</template>
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
            </ModulesStructure> -->


            <UiContentImage class="mt-10" src="https://evidence.onkel.ee/assets/viruses__mythbusting--tp.webp" />

            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:alt-route">
                <div>
                    Agora, considere se a sua hipótese pode ser testada com base apenas em evidências secundárias (confiando no material publicado, resultado de experiências já realizadas) ou na sua própria experiência. Com base nisso, deve escolher a Atividade 3a ou 3b para estudos adicionais.
                </div>
            </UiCardInfo>

            




            <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                    <Tab as="template" v-slot="{ selected }">
                        <button
                        class="w-full rounded py-3 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                        :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                        >Atividade 3a: Desmistificação de mitos baseada em experiências</button>
                    </Tab>
                    
                    <Tab as="template" v-slot="{ selected }">
                        <button
                        class="w-full rounded py-3 text-xl font-bold text-slate-400  focus:outline-none focus:ring-4"
                        :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                        >Atividade 3b: Desmistificação baseada em fontes secundárias</button>
                    </Tab>
                    
                    </TabList>
            
                    <TabPanels class="mt-2">
                        <TabPanel class="focus:outline-none">
                            <ModulesVirusesStudentActivity3aPt />
                        </TabPanel>
                        <TabPanel class="focus:outline-none">
                            <ModulesVirusesStudentActivity3bPt />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
                </div>



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






            <hr  class="mt-10 mb-40 print:my-10" />
            <h2 id="activity-6">Atividade 6: Jogo</h2>

            <p class="text-sm italic">Este jogo é adotado e modificado com base na seguinte fonte: <a href="https://playdecide.eu/playdecide-kits/167151" target="_blank" rel="noopener noreferrer">https://playdecide.eu/playdecide-kits/167151</a></p>

            <!-- <ModulesStructure>
                    <template #title>Activity 6<br />SOCIO-SCIENTIFIC DECISION-MAKING</template>
                    <template #icons>
                        <div class="e-icon--rounded ">
                            <Icon name="fa6-solid:people-group" class="text-white" />
                        </div>
                        <div class="e-icon--rounded ">
                            <Icon name="game-icons:rolling-dices" class="text-white" />
                        </div>
                        <div class="e-icon--rounded">
                            <Icon name="healthicons:group-discussion-meeting" class="text-white" />
                        </div>
                    </template>
            </ModulesStructure> -->

            <p>Na seguinte atividade, é convidado a jogar um jogo de cartas com o seu grupo/colegas de turma para praticar uma discussão de grupo simples, respeitosa e baseada em factos, que se espera que defina os processos de tomada de decisões socio científicas na nossa sociedade. O jogo permite-lhe explorar um tópico em profundidade de forma informal e informativa, refletir sobre pensamentos e opiniões que seriam difíceis de chegar e expressá-los de outras formas.</p>
            
            <p class="font-bold">Mais precisamente, espera-se que:</p>
            <ul class="leading-tight">
                <li>Familiarize-se com os problemas colocados no contexto da vacinação/uso de máscaras e analise-os de diferentes perspetivas.</li>
                <li>Formar ou clarificar a sua própria opinião.</li>
                <li>Trabalhar para uma visão de grupo partilhada.</li>
                <li>Vote em posições políticas, partilhe os seus resultados e compare-os com as opiniões de outros que jogaram o mesmo jogo (e tiveram o mesmo tema).</li>
            </ul>

            
            <hr>
            
            <p>O jogo é disputado em grupos (até 4 jogadores).</p>

            <h3>Fase I (≈20 minutos)</h3>

            <p>Cada grupo escolherá uma carta temática para continuar a jogar.</p>

            <div class="grid grid-cols-2 gap-2">
                <div class="e-card text-center">
                    <p class="my-2">Tema 1</p>
                    <h4 class="my-1 leading-none">Vacinação</h4>
                </div>
                <div class="e-card text-center">
                    <p class="my-2">Tema 2</p>
                    <h4 class="my-1 leading-none">Usar máscaras por pandemias de infeção respiratória superior</h4>
                </div>
            </div>


            <p>Ambos os temas têm vários casos (cartões de história) relacionados com o tema.</p>

            <div class="flex flex-wrap gap-2">
                <div class="e-card text-center">História 1</div>
                <div class="e-card text-center">História 2</div>
                <div class="e-card text-center">História 3</div>
                <div class="e-card text-center">História 4</div>
                <div class="e-card text-center">História ...</div>
            </div>

            
            <p>Cada jogador lê os cartões da história. Cada um escolhe um que considera pessoalmente significativo. Cada jogador resume brevemente o seu cartão de história para o resto do grupo.</p>

            <p>Ambos os temas (vacinação e uso de máscaras) têm vários cartões de informação relacionados com cada.</p>

            <div class="flex flex-wrap gap-2">
                <div class="e-card text-center">Info 1</div>
                <div class="e-card text-center">Info 2</div>
                <div class="e-card text-center">Info 3</div>
                <div class="e-card text-center">Info 4</div>
                <div class="e-card text-center">Info 5</div>
                <div class="e-card text-center">Info 6</div>
                <div class="e-card text-center">Info ...</div>
            </div>

            <p>Todos os jogadores trocam e leem os cartões de informação. Cada um escolhe dois que consideram pessoalmente significativo. Cada jogador resume brevemente os seus cartões de informação escolhidos para o grupo.</p>



            <h3>Fase II (≈20 min)</h3>
            
            <p><b>Discussão:</b> Nesta fase, os jogadores partilham a sua opinião(s) com os outros e refinam os seus pontos de vista à medida que ouvem diferentes argumentos e perspetivas. Os jogadores usam as cartas reunidas na fase I para apoiar as suas opiniões. Os jogadores podem gravar a discussão fazendo clusters em torno dos temas que refletem a visão do grupo. Todos os tipos de cartões podem ser usados para criar um cluster.</p>
            


            <h3>Fase III (≈20 min)</h3>

            <p>Os jogadores lerão através de diferentes cartas de posição e preparar-se-ão para votar numa posição que melhor representa a sua opinião (no final do jogo).</p>

            <div class="flex flex-wrap gap-2">
                <div class="e-card text-center">Posição 1</div>
                <div class="e-card text-center">Posição 2</div>
                <div class="e-card text-center">Posição 3</div>
                <div class="e-card text-center">Posição 4</div>
            </div>

            <p>
                Uma resposta partilhada em grupo: Esta fase convida os jogadores a olharem para as questões em grupo: que opiniões estão presentes no seu grupo? Consegue chegar a um consenso positivo sobre uma posição?
                <br />
                Esta fase será terminada votando para uma determinada posição (I-IV). 
            </p>

            <p><b>Esta fase pode ser conduzida pelas seguintes atividades:</b></p>
            <ol>
                <li class="my-4 leading-tight">
                    Leia as posições políticas 1-4.
                </li>
                <li class="my-4 leading-tight">
                    Tente procurar um terreno comum. Há alguma posição política com a qual todos possam viver? Caso contrário, tente formular a sua própria "quinta política" como um grupo.  
                </li>
                <li class="my-4 leading-tight">
                    Todos os jogadores votam individualmente em todas as políticas. 
                </li>
                <li class="my-4 leading-tight">
                    Os votos são registados na folha de votação, o que proporciona um excelente resumo visual e permite comparar os resultados do seu grupo com os de outros jogadores.
                </li>
            </ol>





            <h3>Tema 1: Vacinação</h3>

            <UiCardInfo>
                <div>
                    <p>Aqui os cartões se ajustam ao layout da página e ocupam tão pouco espaço quanto seu conteúdo interno exige. Portanto, esta é apenas uma prévia. <b>Se você quiser ver as cartas como cartas de tamanho uniforme e imprimi-las, abra a página especial "visualização de cartas".</b></p>
                    
                    <nuxt-link to="../tools/cards/viruses/theme1" target="_blank" 
                    class="mb-3 px-4 py-2 inline-flex items-center gap-2 
                    bg-sky-600 text-md rounded text-white no-underline uppercase transition
                    hover:bg-sky-700
                    print:hidden">
                        <icon name="material-symbols:print-outline-rounded" />Abra cartões imprimíveis
                    </nuxt-link> (abre em uma nova aba)
                </div>
            </UiCardInfo>

            <ToolsCardgameVirusesTheme1 :printMode="false" />

            <hr>

            <h3>Tema 2 Usar máscaras por explosão pandémica de infeção respiratória superior</h3>

            <UiCardInfo>
                <div>
                    <p>Aqui os cartões se ajustam ao layout da página e ocupam tão pouco espaço quanto seu conteúdo interno exige. Portanto, esta é apenas uma prévia. <b>Se você quiser ver as cartas como cartas de tamanho uniforme e imprimi-las, abra a página especial "visualização de cartas".</b></p>
                    
                    <nuxt-link to="../tools/cards/viruses/theme2" target="_blank" 
                    class="mb-3 px-4 py-2 inline-flex items-center gap-2 
                    bg-sky-600 text-md rounded text-white no-underline uppercase transition
                    hover:bg-sky-700
                    print:hidden">
                        <icon name="material-symbols:print-outline-rounded" />Abra cartões imprimíveis
                    </nuxt-link> (abre em uma nova aba)
                </div>
            </UiCardInfo>

            <ToolsCardgameVirusesTheme2 :printMode="false" />







        </section>
    </div>
</template>