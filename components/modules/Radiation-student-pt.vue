<script setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();

    const changeTab = (index) => {
        userPrefs.setLearnPath("learnPathViruses", index);
    }
</script>

<template>
    <UiYourAnswersButton 
        :url="userPrefs.learnPathViruses === 0 ? 'answers/experiment' : 'answers/secondary-sources'" />

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
            <h1 class="mb-0">Radiação</h1>
            <h5 class="font-normal uppercase leading-tight">Materiais para alunos</h5>
            

            <section id="s1">
                <h2 id="s1t">Introdução</h2>

                <p>
                    Neste módulo, é convidado a refletir sobre os medos existentes e desmistificar ou confirmar mitos sobre diferentes formas de radiação. Parta de um vídeo introdutório onde alguns medos e mitos relacionados com a radiação são criados e discuta-os em grupos. A discussão em grupo levará à seleção de uma atividade de desmistificação de mitos onde procurará evidências para desmistificar ou confirmar um mito escolhido. Esta atividade poderá ser conduzida experimentalmente ou utilizando provas secundárias (informações da literatura científica e da internet). Através desta atividade, aprenderá a avaliar a fiabilidade das fontes de informação (bases de dados científicas, ciência cidadã e outros meios de comunicação). Tem que colocar uma hipótese testável (veja a Figura 1).
                </p>
                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-pt.webp" />
                <p>
                    Depois de encontrar provas e tirar conclusões, irá preparar uma apresentação dos seus resultados aos seus colegas (ou outros públicos) de forma relevante e convincente (por exemplo, sob a forma de posts/publicações de vídeo ou apresentações de PowerPoint). O módulo termina com um role-play sobre questões de radiação relacionadas com a Energia Nuclear onde pode tomar posições e sugerir soluções usando conhecimento científico e valores pessoais atribuídos a diferentes papéis.
                </p>
            </section>       
            






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s2">
                <h2 id="s2t">Atividade 1: Apresentação do vídeo introdutório</h2>
                
                <p>Por favor, veja o vídeo introdutório. Coloque os seus pensamentos e sentimentos iniciais sobre os assuntos apresentados.</p>
                <UiYoutube video="ccMo9WfKeOY" />
            </section>








            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s3">
                <h2 id="s3t">Atividade 2: Discussão em grupo</h2>
                
                <p>Depois de ver o vídeo, é convidado a discutir o tema em pequenos grupos (4-6 membros).</p>
                <ol class="leading-tight">
                    <li>Por favor, expresse os seus pensamentos e sentimentos iniciais sobre os problemas apresentados no vídeo aos seus pares.</li>
                    <li>O grupo é convidado a escolher um dos medos, mitos ou questões para mais desmistificação ou confirmação com base em informações que podem ser encontradas de em diferentes fontes: internet, manuais escolares, etc.</li>
                </ol>
                <p>
                    Em alternativa, pode alargar a sua perspetiva sobre mitos relacionados com a radiação e olhar para outros mitos que interessam aos membros do seu grupo.
                </p>
            </section>
            
            




            <section id="s4">
                <h2 id="s4t">
                    Outros mitos sobre a radiação
                </h2>
                
                <ul class="leading-tight">
                    <li><span class="text-rose-400 font-bold">Mito 1:</span> Tomar banho de sol faz bem à saúde, principalmente no inverno.</li>
                    <li><span class="text-rose-400 font-bold">Mito 2:</span> Fornos de micro-ondas enviam radiação intensa e é perigoso ficar perto do forno quando ele estiver a funcionar.</li>
                    <li><span class="text-rose-400 font-bold">Miito 3:</span> Faz mal dormir perto de um smartphone e ficar muito tempo exposto à sua radiação.</li>
                    <li><span class="text-rose-400 font-bold">Mito 4:</span> A radiação emitida pelos postes de comunicação móvel 5G é mais perigosa para os humanos do que a usada nas redes da geração anterior: 2G, 3G e 4G.</li>
                    <li><span class="text-rose-400 font-bold">Mito 5:</span> Bronzear-se num solário é mais seguro do que tomar sol ao ar livre.</li>
                    <li><span class="text-rose-400 font-bold">Mito 6:</span> A radiação de um raio X dentário causa fortes dores de cabeça.</li>
                    <li><span class="text-rose-400 font-bold">Mito 7:</span> Devemos evitar alimentos irradiados porque são radioativos e perigosos.</li>
                    <li><span class="text-rose-400 font-bold">Mito 8:</span> O radão é bom para a saúde em pequenas doses.</li>
                    <li><span class="text-rose-400 font-bold">Mito 9:</span> A radiação UV pode ser bloqueada apenas por um material especial projetado para bloquear UV (usado para guarda-chuvas ou roupas de banho).</li>
                    <li><span class="text-rose-400 font-bold">Mito 10:</span> Depois de fazer tratamento médico com radiação, uma pessoa torna-se radioativa.</li>
                </ul>
            </section>

            





<!-- 
    333333 
        33
     33333
        33
    333333
 -->            
            
 
            <section id="s5">
                <h2 id="s5t">
                    Atividade 3: Caçar Mitos
                </h2>
                
                <p>
                    Agora está convidado a reduzir o mito/questão a uma hipótese testável - uma afirmação que pode ser testada ou uma pergunta que pode ser respondida através de uma pesquisa. Pense que uma hipótese não é apenas uma suposição – ela deve ser baseada no conhecimento existente. Também deve ser testável, o que significa que pode ser negado ou confirmado conforme resultado do seu estudo.
                </p>
                <p>
                    Planeie as suas futuras atividades seguindo o ciclo mostrado na Figura 1. Deve refletir se o mito escolhido pode ser testado experimentalmente, confirmado/negado recorrendo a novas tecnologias, por exemplo, aplicações para telemóvel, como dispositivos de medição, modelos de computador e simulações, ou usando outras aplicações ou experiências já realizadas que foram publicadas na forma de vídeos do YouTube. Com base nisso, deve escolher a Atividade 3a ou 3b para um estudo mais aprofundado. Pode usar mais do que um desses métodos, aplicando o chamado princípio da triangulação – aumentando a validade das suas descobertas através da convergência de informações de diferentes fontes.
                </p>
                <div class="w-full px-2 py-16 sm:px-0" id="activity-3ab">
                    <TabGroup :selectedIndex="userPrefs.learnPathViruses" @change="changeTab">
                        <TabList class="flex space-x-1 rounded-lg bg-slate-700 p-1">
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400 focus:outline-none focus:ring-4"
                                :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Atividade 3a: Desmitificação baseada em experiências</button>
                            </Tab>
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                class="w-full rounded py-3 px-2 text-xl font-bold text-slate-400 focus:outline-none focus:ring-4"
                                :class="{ 'bg-blue-500 text-slate-50 ring-4 ring-amber-400 ring-offset-2 ring-offset-amber-50': selected, 'hover:bg-white/[0.12] hover:text-white': !selected }"
                                >Atividade 3b: Desmitificação baseada em fontes secundárias</button>
                            </Tab>
                        </TabList>
                
                        <TabPanels class="mt-2">
                            <TabPanel class="focus:outline-none">
                                <ModulesRadiationStudentActivity3aPt />
                            </TabPanel>
                            <TabPanel class="focus:outline-none">
                                <ModulesRadiationStudentActivity3bEn />
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
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

            <section ID="s6">

                <h2 id="s6t">Atividade 6: Jogo de debate – role-play</h2>

                <h4>
                    Nesta atividade, espera-se que o aluno:
                </h4>
                <ul>
                    <li>Familiarize-se com os problemas apresentados na encenação e veja-os de diferentes perspectivas.</li>
                    <li>Forme ou esclareça a sua própria opinião.</li>
                    <li>Trabalhe para uma visão de grupo compartilhada.</li>
                    <li>Apresente e defenda os seus argumentos.</li>
                    <li>Vote em posições políticas.</li>
                </ul>
                <p>
                    A encenação / Role-Play pode ser formada como um programa de debate na televisão envolvendo oito funções que podem ser representadas em equipas de 3-4 jogadores. Cada equipa nomeia um membro como porta-voz, enquanto os outros atuam como conselheiros. Dois alunos da turma serão moderadores de debates televisivos (apresentadores de programas). Os moderadores têm de gerir o tempo durante o debate e apresentar comentários resumidos no final da encenação. Estes podem ainda convidar os participantes a votar em posições políticas.
                </p>


                <h3>
                    Tema: Energia Nuclear
                </h3>
                <p>
                    O objetivo específico de trabalhar com esse tema é possibilitar o debate e a argumentação para desenvolver o seu pensamento crítico em relação à energia nuclear. O debate está relacionado ao mito de que “a energia nuclear não é segura”. Este tema tem duas posições: a favor e contra a energia nuclear. Assim, a turma é dividida em dois grupos de acordo com os papéis atribuídos.
                </p>
                <div class="md:grid md:grid-cols-2 gap-4">
                    <div class="border-4 border-green-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Posição 1: a Favor
                        </h4>
                        <p>
                            O Estado deve reconhecer que a energia nuclear é segura e oferecer uma "oportunidade de ouro" para criar um mundo mais limpo e igualitário. O estado deve investir na criação de um cemitério seguro de resíduos nucleares (depósito final).
                        </p>
                    </div>
                    <div class="border-4 border-red-400 rounded-lg p-3 text-center">
                        <h4 class="my-2">
                            Posição 2: Contra
                        </h4>
                        <p>
                            O estado deve fechar todos os reatores nucleares do país até 2030. Uma estação nuclear segura e um cemitério de lixo seguro são uma ilusão.
                        </p>
                    </div>
                </div>


                <h3>
                    Fase I (≈ 25 min.)
                </h3>
                <p>
                    Cada equipa recebe (um método de seleção pode ser decidido com o professor) um cartão de papel contendo um breve perfil do papel que a equipa representará, juntamente com os argumentos que sustentam a perspetiva a ser defendida. Além dos cartões de papéis, cada equipa recebe a informação que deve defender durante o role-play (<NuxtLink to="https://docs.google.com/document/d/1YYi4biMXtvh8x5VHn9I2i1ZKs6GbMn_uvmimhF714hs/edit?usp=sharing" target="_blank">encenação</NuxtLink>).
                </p>
                <p>
                    O aluno terá de apresentar argumentos informados referentes ao seu papel.
                </p>
                <p>
                    O tema da energia nuclear tem vários cartões de informações relacionados com o tópico.
                </p>
                <div class="grid grid-cols-5 gap-2">
                    <div v-for="i in 4" class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">
                        Informação {{ i }}
                    </div>
                    <div class="bg-blue-700 text-blue-50 text-center py-2 rounded-lg">...</div>
                </div>
                <p>
                    Todos os jogadores têm acesso a todos os cartões de informações. Cada equipa escolhe aqueles que considera especialmente relevantes para a sua função. Eles também podem procurar informação adicional na Internet, considerando a importância da escolha de fontes confiáveis, como feito anteriormente na Atividade 3.
                </p>


                <h3>
                    Fase II (≈ 20 min.)
                </h3>
                <h4>
                    Discussão em grupo:
                </h4>
                <p>
                    Nesta fase, os alunos partilham as suas opiniões com os outros e apuram os argumentos comuns dentro das suas equipas. Os jogadores usam as cartas de informações e outras informações para apoiar sua posição.
                </p>
                <p>
                    As Fases I e II podem continuar como trabalhos de casa e preparação para o debate (fase III) que terá lugar no próximo momento letivo. Argumentos iniciais podem ser aprimorados de forma visual usando vídeos curtos e apresentações em PowerPoint
                </p>


                <h3>
                    Fase III (≈ 45 min., o tempo pode precisar de ser prolongado)
                </h3>
                <p>
                    O debate ou dramatização real é dividido em duas partes. Na primeira parte, o porta-voz de cada equipa tem três minutos para apresentar o seu papel e argumentos iniciais, que também elencaram na tabela da fase II (ver a primeira coluna da tabela). Esta folha de trabalho também inclui colunas para anotar os contra-argumentos apresentados por outras equipas, bem como refutações destes (ver segunda e terceira colunas da folha de trabalho) que serão usados posteriormente na representação (jogo de papéis). Após cada uma das oito equipas apresentar os seus argumentos, haverá um intervalo de cinco minutos, permitindo assim o desenvolvimento de refutações; os contra-argumentos apresentados por outras equipas e as refutações destes.
                </p>
                <p>
                    Após o intervalo de cinco minutos, na segunda parte do role-play, os vários porta-vozes debatem-se entre si, tentando contrariar os argumentos uns dos outros em apoio das suas posições. Durante esta parte da representação, os conselheiros (outros membros da equipa) têm a tarefa de apoiar o porta-voz da sua equipa, propondo refutações dos argumentos apresentados pelas equipas que representam outras funções.
                </p>
                <p>
                    Sinta-se à vontade para expressar os seus argumentos e ideias "profissionais".
                </p>
                <p>
                    Durante o debate, os apresentadores do programa de TV moderam a atividade. No final do debate, os moderadores fazem um resumo, destacando os principais temas e opiniões que surgiram durante a discussão. Esta etapa convida os jogadores a abordar as questões em grupo (toda a turma): a favor ou contra, ou chegar a outras opiniões compartilhadas pelo grupo.
                </p>
                <p>
                    Se os moderadores considerarem necessário, pedem aos participantes que votem a favor ou contra a proposta de eliminação progressiva da produção de energia nuclear.
                </p>


                <h2>Cartas de jogar</h2>

                <UiCardGamePrintMessage url="../tools/cards/radiation" />
                <ToolsCardgameRadiation :printMode="false" />
                <hr />
            </section>


        </section>
    </div>
</template>