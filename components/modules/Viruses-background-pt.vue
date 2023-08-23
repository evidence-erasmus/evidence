<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <UiTableOfContents class="w-full lg:max-w-xs print:hidden" />
        


        <section class="e-article" lang="pt" style="hyphens:auto">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Vírus</h1>
            <h5 class="font-normal uppercase leading-tight">INFORMAÇÃO CIENTÍFICA</h5>
        


            <h2 id="section-1">1. Vírus versus bactérias</h2>
        
            <p class="font-bold">
                Bactérias e vírus podem causar muitas infeções comuns. Mas quais são as diferenças entre estes dois tipos de organismos infeciosos?
            </p>
        
            <p>
                <span class="e-term font-Heading">Bactérias</span> são pequenos microrganismos que são compostos por uma única célula. As bactérias são microorganismos minúsculos constituídos por uma única célula. São muito diversas e podem ter muitas formas e características estruturais. As bactérias podem viver em quase todos os ambientes possíveis, incluindo dentro ou sobre o corpo humano. Apenas um pequeno número de bactérias causa infecções nos seres humanos. Estas bactérias são designadas por bactérias patogénicas.
            </p>
        
            <p>
                Os <span class="e-term font-Heading">virus</span> são outro tipo de microorganismo minúsculo, ainda mais pequeno do que as bactérias. Tal como as bactérias, são muito diversos e têm uma diversidade de formas e características. Os vírus são parasitas. Isto significa que necessitam de células ou tecidos vivos para se desenvolverem. Os vírus podem invadir as células do seu corpo, utilizando os componentes das suas células para crescer e multiplicar-se. Alguns vírus chegam mesmo a matar as células hospedeiras como parte do seu ciclo de vida. As diferenças entre vírus e bactérias podem ser vistas na figura 1 e encontradas na tabela 1.
            </p>
        
            <UiContentImage
                src="https://evidence.onkel.ee/assets/viruses-01__bacteria-vs-virus.webp"
                credits="Fonte: https://inducoat.com/?attachment_id=24945&lang=en"
                :elevated="true">
                <template #caption>
                    <b>Figura 1.</b> Diferenças estruturais entre vírus e bactérias
                </template>
            </UiContentImage>
        
            <table class="mt-20">
                <caption class="text-left pb-4"><b>Tabela 1.</b> Diferenças entre bactérias e vírus</caption>
                <thead>
                    <tr>
                        <th></th>
                        <th>Bactéria</th>
                        <th>Vírus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="align-baseline">
                            Viver
                        </th>
                        <td>
                            <b>Organismo vivo.</b><br />As bactérias são organismos vivos com uma única célula que pode gerar energia, fazer os seus próprios alimentos, mover-se e reproduzir-se (tipicamente por fissão binária). Isto permite que as bactérias vivam em muitos lugares – solo, água, plantas e o corpo humano e servem muitos propósitos.
                            <br />
                            As bactérias incluem parasitas e não parasitas.
                        </td>
                        <td>
                            <b>Sem vida.</b>
                            <br />
                            Os vírus só crescem e reproduzem-se dentro das células hospedeiras que infetam. Quando encontrados fora destas células vivas, os vírus estão adormecidos. A sua "vida", portanto, requer o sequestro das atividades bioquímicas de uma célula viva.
                            <br />
                            Todos os vírus são parasitas intracelulares.
                        </td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Número de células</th>
                        <td>Unicelular, uma célula</td>
                        <td>Sem células, não vive</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Reprodução</th>
                        <td>Divide-se em 2</td>
                        <td>Invade uma célula hospedeira e toma conta da célula fazendo com que faça cópias do ADN/RNA viral. Destrói a célula hospedeira libertando novos vírus</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Tamanho</th>
                        <td>As bactérias são muito maiores, variando de 800 nm a 1000 nm. As bactérias podem ser vistas sob um microscópio leve.</td>
                        <td>O tamanho dos vírus é entre 20 nm a 400 nm. Os vírus só são visíveis ao microscópio electrónico</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Benefícios</th>
                        <td>Algumas bactérias são benéficas, por exemplo, certas bactérias são necessárias no intestino.</td>
                        <td>Os vírus não são benéficos. Vírus podem ser úteis na engenharia genética.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Infeção</th>
                        <td>A infeção bacteriana é geralmente confinada a uma parte do corpo, descrita como uma infeção localizada. As infeções podem ser causadas por bactérias ou por toxinas (endotoxinas) produzidas.</td>
                        <td>Uma infeção viral é sistémica. Os vírus infetam uma célula hospedeira e multiplicam-se aos milhares, deixando a célula hospedeira e infetando outras células do corpo.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Doença</th>
                        <td>As doenças bacterianas incluem pneumonia, tuberculose, tétano e intoxicação alimentar.</td>
                        <td>As doenças sistémicas causadas por infeções virais incluem a gripe, o sarampo, a poliomielite, a SIDA e o COVID-19.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Tratamento</th>
                        <td>Antibióticos e vacinas previnem a doença.</td>
                        <td>As vacinas previnem a propagação e os medicamentos antivirais ajudam a retardar a reprodução, mas não podem detê-lo completamente.</td>
                    </tr>
                </tbody>
            </table>

            <UiCardInfo class="mb-8">
                Os antibióticos podem ajudar o sistema imunológico a eliminar infeções bacterianas, mas são inúteis contra infeções virais. Os fármacos antivirais funcionam de forma diferente dos antibióticos e atualmente só são eficazes contra algumas doenças virais, tais como a gripe, herpes, hepatite B e C, e HIV. Infeções virais podem ser muito mais difíceis de matar do que infeções bacterianas porque o vírus vai para as células humanas. O sistema imunológico pode por vezes matar as células infetadas antes que o vírus se reproduza. No entanto, à medida que o vírus se reproduz, muitas vezes mata a célula infetada explodindo, o que permite que o vírus se espalhe para outras células do corpo.
            </UiCardInfo>

            
            <section class="e-card">
                <h4 class="mt-4">Referências</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://courses.lumenlearning.com/suny-biology2xmaster/chapter/prevention-and-treatment-of-viral-infections/">https://courses.lumenlearning.com/suny-biology2xmaster/chapter/prevention-and-treatment-of-viral-infections/</a></li>
                        <li><a href="https://bodell.mtchs.org/OnlineBio/BIOCD/text/chapter16">https://bodell.mtchs.org/OnlineBio/BIOCD/text/chapter16</a></li>
                    <li><a href="
                        http://www.hcrowder.com/disease-reading.html">
                        http://www.hcrowder.com/disease-reading.html</a></li>
                </ul>
            </section>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            <hr class="mt-10 mb-40" />
            <h2 id="section-2">2. Porque é que os antibióticos não matam os vírus?</h2>
            
            <p>
                Os antibióticos visam a maquinaria de crescimento em bactérias (não vírus) para matar ou inibir essas bactérias em particular. Os antibióticos não podem matar vírus porque os vírus têm estruturas diferentes e replicam-se de forma diferente das bactérias. Além disso, o uso excessivo e a prescrição inadequada de antibióticos em todo o mundo estão a levar ao problema global de saúde da <a href="https://www.drugs.com/article/antibiotic-resistance.html" target="_blank" rel="noopener noreferrer">resistência aos antibióticos</a>. Consulte o quadro 2 em que condições os antibióticos podem ser úteis (NB! A decisão sobre a sua utilização será tomada pelo seu médico).
            </p>
            
            
            <table class="leading-tight e-card">
                <caption class="text-left pb-4">
                    <b>Tabela 2.</b> Necessidade de antibióticos por infeções respiratórias comuns
                </caption>
                <thead class="border text-center">
                    <tr>
                        <th rowspan="2" class="border p-1">Common respi&shy;ratory infections</th>
                        <th colspan="3" class="border p-1">Common cause</th>
                        <th rowspan="2" class="border p-1">Are<br />anti&shy;biotics needed</th>
                    </tr>
                    <tr>
                        <th class="border p-1">Virus</th>
                        <th class="border p-1">Virus or bacteria</th>
                        <th class="border p-1">Bacteria</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr>
                        <td class="border p-1">Common cold / runny nose</td>
                        <td class="border p-1">Yes</td>
                        <td class="border p-1"></td>
                        <td class="border p-1"></td>
                        <td class="border p-1">No</td>
                    </tr>
                    <tr>
                        <td class="border p-1">Sore throat (except strep)</td>
                        <td class="border p-1">Yes</td>
                        <td class="border p-1"></td>
                        <td class="border p-1"></td>
                        <td class="border p-1">No</td>
                    </tr>
                    <tr>
                        <td class="border p-1">COVID-19</td>
                        <td class="border p-1">Yes</td>
                        <td class="border p-1"></td>
                        <td class="border p-1"></td>
                        <td class="border p-1">No</td>
                    </tr>
                    <tr>
                        <td class="border p-1">Flu</td>
                        <td class="border p-1">Yes</td>
                        <td class="border p-1"></td>
                        <td class="border p-1"></td>
                        <td class="border p-1">No</td>
                    </tr>
                    <tr>
                        <td class="border p-1">Bronchitis / chest cold<br /><span class="text-sm italic">(in otherwise healthy children and adults)</span> *</td>
                        <td class="border p-1"></td>
                        <td class="border p-1">Yes</td>
                        <td class="border p-1"></td>
                        <td class="border p-1">No *</td>
                    </tr>
                    <tr>
                        <td class="border p-1">Middle ear infection</td>
                        <td class="border p-1"></td>
                        <td class="border p-1">Yes</td>
                        <td class="border p-1"></td>
                        <td class="border p-1">Maybe</td>
                    </tr>
                    <tr>
                        <td class="border p-1">Sinus infection</td>
                        <td class="border p-1"></td>
                        <td class="border p-1">Yes</td>
                        <td class="border p-1"></td>
                        <td class="border p-1">Maybe</td>
                    </tr>
                    <tr>
                        <td class="border p-1">Strep throat</td>
                        <td class="border p-1"></td>
                        <td class="border p-1"></td>
                        <td class="border p-1">Yes</td>
                        <td class="border p-1">Yes</td>
                    </tr>
                    <tr>
                        <td class="border p-1">Whooping couch</td>
                        <td class="border p-1"></td>
                        <td class="border p-1"></td>
                        <td class="border p-1">Yes</td>
                        <td class="border p-1">Yes</td>
                    </tr>
        
                </tbody>
                <tfoot class="border text-center">
                    <tr>
                        <td colspan="5" class="py-0 px-3">
                            <p class="text-sm italic">* Studies shows that in otherwise healthy children and adults, antibiotics for bronchitis won't help patients feel better.</p>
                            <p class="text-xs text-slate-400">Fonte: https://www.cdc.gov/antibiotic-use/images/VirusOrBacteria-Original-1200by675.jpg</p>
                        </td>
                    </tr>
                </tfoot>
            </table>


            <section class="e-card">
                <h4 class="mt-0">Referência</h4>
                <ul class="text-sm break-all">
                    <li>
                        <a href="https://www.drugs.com/article/antibiotics-and-viruses.html" target="_blank" rel="noopener noreferrer">https://www.drugs.com/article/antibiotics-and-viruses.html</a>
                    </li>
                    <li>
                        <a href="https://www.virology.ws/2009/10/19/ten-cool-facts-about-viruses/" target="_blank" rel="noopener noreferrer">https://www.virology.ws/2009/10/19/ten-cool-facts-about-viruses/</a>
                    </li>
                </ul>
            </section>
        
        










            <hr class="mt-10 mb-40" />
            <h2 id="section-3">3. Como funcionam as vacinas</h2>

            <h3>A resposta natural do corpo</h3>

            <p>
                Um <span class="e-term font-Heading">agente patogénico</span> é uma bactéria, vírus, parasita ou fungo que pode causar doenças dentro do corpo. Cada agente patogénico é composto por várias subpartes, geralmente únicas a esse agente patogénico específico e à doença que causa. A subparte de um agente patogénico que causa a formação de anticorpos é chamada de antigénio. Os anticorpos produzidos em resposta ao antigénio do agente patogénico são essenciais para o sistema imunitário. Pode considerar os anticorpos como soldados no sistema de defesa do seu corpo. Cada anticorpo, ou soldado, no nosso sistema, é treinado para reconhecer um antigénio específico. Temos milhares de anticorpos diferentes nos nossos corpos. Quando o corpo humano é exposto a um antigénio pela primeira vez, leva tempo para o sistema imunológico responder e produzir anticorpos específicos desse antigénio (Fig. 2). 
            </p>

            <p>
                Os anticorpos de um agente patogénico geralmente não protegem contra outro agente patogénico, exceto quando dois agentes patogénicos são muito semelhantes uns aos outros, como primos. Uma vez produzidos os anticorpos específicos do antigénio, trabalham com o resto do sistema imunitário para destruir o agente patogénico e parar a doença. Uma vez que o corpo produz anticorpos na sua resposta primária a um antígeno, também cria células de memória produtoras de anticorpos, que permanecem vivas mesmo após os anticorpos derrotarem o agente patogénico. Suponha que o corpo seja exposto ao mesmo agente patogénico mais de uma vez. Nesse caso, a resposta do anticorpo é muito mais rápida e eficaz do que a primeira vez, porque as células de memória estão prontas para bombear anticorpos contra esse antigénio. Isto significa que se a pessoa for exposta a um agente patogénico perigoso no futuro, o seu sistema imunológico será capaz de responder imediatamente, protegendo contra doenças.
            </p>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/viruses-03.webp"
                credits="Fonte: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html"
                :elevated="true">
                <template #caption>
                    <b>Figura 2.</b> Para cada novo antigénio, o nosso corpo precisa de construir um anticorpo específico.
                </template>
            </UiContentImage>

            <h3>Como as vacinas ajudam?</h3>

            <p>
                As vacinas reduzem os riscos de obter uma doença trabalhando com as defesas naturais do seu corpo para construir proteção. Quando se recebe uma vacina, o seu sistema imunológico responde.
            </p>
            <p>
                As vacinas contêm partes enfraquecidas ou inativas de um determinado organismo (antígeno) que desencadeia uma resposta imune dentro do corpo (Fig. 3). As vacinas mais recentes contêm a planta para produzir antigénios em vez do próprio antigénio. Independentemente de a vacina ser constituída pelo próprio antigénio ou pela planta para que o corpo produza o antigénio, esta versão enfraquecida não causará a doença na pessoa que recebe a vacina. No entanto, vai levar o seu sistema imunológico a responder tanto quanto teria na sua primeira reação ao agente patogénico real.
            </p>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/viruses-04.webp"
                credits="Fonte: https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work"
                :elevated="true">
                <template #caption>
                    <b>Figura 3.</b> Desenvolvimento de anticorpos através da vacinação
                </template>
            </UiContentImage>

            <p>
                As vacinas funcionam expondo os seus glóbulos brancos à proteína estranha de um vírus. Depois de o corpo ter encontrado um vírus e ter dado uma resposta imunitária (produzindo células B e T) ao vírus, guarda as células B e T para que, se o mesmo vírus ou bactéria voltar a infetar o corpo, o sistema imunitário possa encenar uma guerra total, impedindo que o agente patogénico volte a fazer-nos sentir doentes. As vacinas apresentam o vírus ao organismo para que este possa poupar as células B e T sem nunca ficar doente.
            </p>

            <h3>Imunização e desafios relacionados</h3>

            <p>
                Temos agora vacinas para prevenir mais de 20 doenças que ameaçam a vida, ajudando pessoas de todas as idades a viverem vidas mais longas e saudáveis. Atualmente, a imunização previne 2 a 3 milhões de mortes por ano de doenças como difteria, tétano, pertússis/tosse convulsa, gripe e sarampo.
            </p>

            <p>
                Temos vacinação contra muitas infeções virais graves (sarampo, papeira, hepatite A, hepatite B e alguns vírus – como aqueles que causam a constipação comum). Ainda assim, o problema continua a ser que podem mudar de uma pessoa para outra. Quando o vírus sofre mutações, muda o suficiente para que o sistema imunológico já não o reconheça. As células imunitárias armazenadas para matar o vírus, já não o reconhecem como a mesma doença e não sabem como matá-lo. É assim que uma infeção com o mesmo vírus pode continuar a esquivar-se do sistema imunitário. A vacinação para estes vírus é difícil porque já mudaram o seu formato até ao momento em que as vacinas são desenvolvidas. 
            </p>

            <section class="e-card">
                <h4 class="mt-0">Referências</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work" target="_blank" rel="noopener noreferrer">https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work</a></li>
                    <li><a href="https://www.nytimes.com/interactive/2020/health/pfizer-biontech-covid-19-vaccine.html" target="_blank" rel="noopener noreferrer">https://www.nytimes.com/interactive/2020/health/pfizer-biontech-covid-19-vaccine.html</a></li>
                    <li><a href="https://media.nature.com/original/magazine-assets/d41586-021-03552-w/d41586-021-03552-w.pdf" target="_blank" rel="noopener noreferrer">https://media.nature.com/original/magazine-assets/d41586-021-03552-w/d41586-021-03552-w.pdf</a></li>
                    <li><a href="https://opentextbc.ca/biology/chapter/12-1-viruses/" target="_blank" rel="noopener noreferrer">https://opentextbc.ca/biology/chapter/12-1-viruses/</a></li>
                </ul>
            </section>















            <hr class="mt-10 mb-40" />
            <h2 id="section-4">4. Processo de desenvolvimento de vacinas, segurança das vacinas</h2>

            <h3>Desenvolvimento</h3>
            <p>
                O desenvolvimento da vacina começa normalmente num laboratório de investigação localizado numa universidade, num centro médico ou numa pequena empresa de biotecnologia. Durante o desenvolvimento da vacina, os cientistas desenvolvem diferentes reagentes para testar e medir o seu efeito (ou falta dele). Muitas vezes são necessários anos de investigação para encontrar ideias que funcionem.
            </p>
            <p>
                Diferentes cientistas ou grupos de investigação podem trabalhar para os mesmos objetivos durante o desenvolvimento da vacina. O progresso do trabalho é apresentado em diferentes reuniões e artigos publicados em revistas científicas, revistos pelos pares. Se algum trabalho parecer promissor, os cientistas farmacêuticos podem contactar os que estão a trabalhar nele para expandir a sua investigação para o desenvolvimento de fármacos.
            </p>


            <h3>Ensaios/testes</h3>

            <p>
                Se for encontrada uma vacina candidata promissora, tem de ser testada em animais. Esta é a chamada fase pré-clínica. Primeiro são usados pequenos animais como ratos, coelhos e outros. Se a vacina candidata afetar pequenos animais, normalmente o efeito tem de ser comprovado em animais maiores, como macacos. Se a vacina desencadear uma resposta imunitária, é testada em três fases de ensaios clínicos em seres humanos (OMS, 2021). 
            </p>
            <p>
                Na fase 1, a vacina é inoculada em alguns voluntários para avaliar a sua segurança, confirmar que gera uma resposta imune, e determinar a dose adequada. Geralmente, nesta fase, as vacinas são testadas num pequeno grupo de jovens voluntários adultos saudáveis.
            </p>
            <p>
                Na fase 2, a vacina é dada a várias centenas de voluntários para avaliar a sua segurança e capacidade para gerar uma resposta imune. Os participantes nesta fase têm as mesmas características (como a idade e o sexo) que aqueles para os quais a vacina se destina. Geralmente existem múltiplos ensaios nesta fase para avaliar várias faixas etárias (idosos, adultos, crianças) e diferentes formulações de vacinas. Além disso, um grupo que não recebe a vacina é geralmente incluído para determinar se as alterações no grupo vacinado são atribuídas à vacina ou se ocorreram por acaso.
            </p>
            <p>
                Na fase 3, a vacina é administrada a milhares de voluntários – comparada com um grupo semelhante de pessoas que não receberam a vacina mas receberam um produto de comparação. Isto visa determinar se a vacina é eficaz contra a doença que se destina a proteger. Além disso, pretende estudar a sua segurança num grupo muito maior de pessoas. Os ensaios de fase 3 são frequentemente realizados em países e vários locais dentro dos países, para garantir que os resultados do desempenho da vacina se aplicam a populações diferentes. 
            </p>
            <p>
                Durante os ensaios de fase 2 e 3, os voluntários e os cientistas que conduzem o estudo são impedidos de saber quais os voluntários que receberam a vacina em teste ou o produto de comparação. A isto chama-se “ensaio cego” e é necessário para garantir que nem os voluntários nem os cientistas sejam influenciados na sua avaliação de eficácia ou segurança por saberem quem recebeu qual produto.
            </p>


            <section class="e-card">
                <h4 class="mt-0">Referências</h4>
                <ul class="text-sm break-all">
                    <li>
                        <a href="https://www.who.int/news-room/feature-stories/detail/how-are-vaccines-developed" target="_blank" rel="noopener noreferrer">https://www.who.int/news-room/feature-stories/detail/how-are-vaccines-developed</a>
                    </li>
                </ul>
            </section>

            <h3>Autorização e monitorização</h3>
            
            <p>
                Quando os resultados de todos estes ensaios clínicos estão disponíveis, é necessária uma série de passos. Os funcionários da Agência Europeia de Medicamentos e, mais tarde, em cada país, analisam de perto os dados do estudo e decidem se autorizam a vacina. Todos os ensaios têm de ser correctamente realizados e bem documentados. Antes de ser aprovada, uma vacina tem de ser comprovadamente segura e eficaz numa população alargada. A fasquia para a segurança e eficácia das vacinas é excecionalmente elevada. Isto inclui análises de eficácia e segurança para aprovações regulamentares e políticas de saúde pública. 
            </p>
            <p>
                Durante a utilização das vacinas, é efectuada uma monitorização adicional da segurança e da eficácia. Isto permite aos cientistas acompanhar o impacto e a segurança das vacinas, mesmo quando estas são utilizadas em muitas pessoas durante um longo período de tempo. Estes dados são utilizados para ajustar as políticas de utilização das vacinas.
            </p>

            <section class="e-card">
                <h4 class="mt-0">Referências</h4>
                
                <ul class="text-sm break-all">
                    <li><a href="https://www.worldscientific.com/doi/pdf/10.1142/S2529732521400034" target="_blank" rel="noopener noreferrer">https://www.worldscientific.com/doi/pdf/10.1142/S2529732521400034</a></li>
                </ul>
            </section>

















            <hr class="mt-10 mb-40" />
            <h2 id="section-5">5. Máscaras contra vírus e bactérias</h2>

            <p>
                As máscaras são frequentemente usadas para proteger contra vírus e bactérias. Elas espalharam-se no sentido de proteção contra o vírus SARS-CoV-2. Entre os diferentes tipos de máscaras, as máscaras cirúrgicas estão entre as coberturas faciais mais usadas na pandemia de COVID-19. Normalmente, são de cor azul de um lado, que deve ser mantido como uma camada externa (Fig. 4). O principal objetivo das máscaras cirúrgicas é proteger os doentes de um potencial contato com bactérias e vírus exalados por quem usa a máscara. Portanto, eles impedem a propagação do coronavírus pelo ar, mas são meios menos eficazes para proteger o portador do vírus.
            </p>
            <p>
                As máscaras FFP2 ou FFP3 (frequentemente designadas por respiradores) devem ser utilizadas para filtrar e inalar melhor o ar. O sistema de numeração (FFP1, FPP2, FFP3) indica a eficiência de filtragem destes dispositivos (certificados como cumprindo a norma EN 149-2001). FFP2 e FPP3 têm uma eficiência de filtragem de partículas transportadas pelo ar (incluindo as que contêm o vírus) de 92% e 98%, respetivamente. Ambas as máscaras têm também uma pequena fuga para o interior: &lt;8% e &lt;2%, respetivamente. Na FFP2, é frequentemente utilizada borracha especial na camada exterior da máscara. Se, em ambientes profissionais, foi permitida uma válvula (que facilita a expiração), no caso do SARS-CoV-2, apenas devem ser utilizados respiradores sem válvula para filtrar também o ar expirado. 
            </p>
            <p>
                Com a pandemia de COVID-19, foi introduzida uma nova máscara facial: a máscara filtrante. Este tipo de máscara é feito de tecido multicamadas (uma delas tem de ser um filtro de nanofibras que garante uma capacidade de filtragem de bactérias e poeiras finas nocivas de, pelo menos, 90%). Esta máscara combina uma elevada capacidade de filtragem com a possibilidade de reutilização, uma vez que pode ser lavada na máquina a 60 graus.
            </p>

            <div class="grid gap-3 my-15 md:grid-cols-2 e-card">
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-01.webp"
                >
                    <template #caption>
                        Máscara cirúrgica
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-02.webp"
                    caption="">
                    <template #caption>
                        Máscara FFP2 (respirador)
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-03.webp">
                    <template #caption>
                        Máscara FFP3 (respirador) com válvula
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-04.webp">
                    <template #caption>
                        Máscara de filtragem
                    </template>
                </UiContentImage>
            </div>

            <p>
                <i><b>Figura 4.</b> Diferentes tipos de máscaras</i>
            </p>

            <p>
                A eficácia das máscaras foi testada em laboratórios especiais, por exemplo, na câmara de exposição. Nesses estudos, um transportador de vírus. Subsequentemente, as concentrações de partículas por detrás do gerador de partículas enchem a câmara de exposição com pequenas partículas; à semelhança dos aerossóis, as máscaras são medidas e comparadas com a concentração na atmosfera geral da câmara de exposição.
            </p>
            <p>
                No entanto, as evidências mais fortes baseiam-se em dados epidemiológicos de situações da vida real. Por exemplo, a taxa de crescimento diária do COVID-19 está a abrandar após imosição de máscaras em 15 estados e no distrito de Columbia nos EUA. Um outro estudo analisou as mortes de coronavírus em 198 países e concluiu que os países com normas culturais ou políticas governamentais que favorecem o uso de máscaras tinham taxas de mortalidade mais baixas.
            </p>
            <p>
                Muitos utilizadores do Facebook e das redes sociais têm partilhado publicações enganosas sobre a utilização prolongada de máscaras faciais que provocam uma deficiência de oxigénio no corpo - hipoxia. No entanto, artigos de investigação e especialistas sugerem que é pouco provável que esses sintomas ocorram na maioria das pessoas, a menos que o utilizador tenha doenças respiratórias pré-existentes, como asma ou doença pulmonar obstrutiva crónica (DPOC). O risco de hipoxia e hipercapnia (excesso de dióxido de carbono na corrente sanguínea) é improvável com as máscaras de tecido e cirúrgicas, uma vez que não são justas. No entanto, alerta-se para o facto de as máscaras faciais não deverem ser colocadas em crianças com menos de dois anos de idade, em pessoas com dificuldades respiratórias ou durante a prática de exercício físico.
            </p>

            <section class="e-card">
                <h4 class="mt-0">Referências</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9" target="_blank" rel="noopener noreferrer">https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9</a></li>
                    <li><a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2774266" target="_blank" rel="noopener noreferrer">https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2774266</a></li>
                    <li><a href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00818" target="_blank" rel="noopener noreferrer">https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00818</a></li>
                    <li><a href="https://www.ajtmh.org/view/journals/tpmd/103/6/article-p2400.xml" target="_blank" rel="noopener noreferrer">https://www.ajtmh.org/view/journals/tpmd/103/6/article-p2400.xml</a></li>
                    <li><a href="https://www.epa.gov/sciencematters/epa-researchers-test-effectiveness-face-masks-disinfection-methods-against-covid-19" target="_blank" rel="noopener noreferrer">https://www.epa.gov/sciencematters/epa-researchers-test-effectiveness-face-masks-disinfection-methods-against-covid-19</a></li>
                    <li><a href="https://journals.asm.org/doi/full/10.1128/mSphere.00637-20" target="_blank" rel="noopener noreferrer">https://journals.asm.org/doi/full/10.1128/mSphere.00637-20</a></li>
                    <li><a href="https://pubmed.ncbi.nlm.nih.gov/33626065/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/33626065/</a></li>
                </ul>
            </section>



            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Para mais estudo</h3>
                    <ul class="leading-tight break-all">
                        <li><a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/n95-respirators-surgical-masks-face-masks-and-barrier-face-coverings#s3" target="_blank" rel="noopener noreferrer">N95 Respirators, Surgical Masks, Face Masks, and Barrier Face Coverings</a></li>
                        <li><a href="https://www.sciencedirect.com/science/article/pii/S2452199X20301481" target="_blank">An overview of filtration efficiency through the masks: Mechanisms of the aerosols penetration</a></li>
                        <li><a href="https://www.weforum.org/agenda/2020/10/covid-19-coronavirus-disease-size-compairson-zika-health-air-pollution/" target="_blank" rel="noopener noreferrer">This is how coronavirus compares to the world's smallest particles</a></li>
                    </ul>
                </div>
            </UiCardInfo>














            <hr class="mt-10 mb-40" />
            <h2 id="section-6">6. Vírus e higiene das mãos</h2>

            <h3>Desinfetante para as mãos ou sabonete?</h3>
            
            <p>
                As nossas mãos podem ser um elemento crítico na transmissão de infeções. Quando aplicados nas mãos cuidadosamente e esfregados durante pelo menos 20 segundos, os desinfectantes para as mãos à base de álcool e o sabão travam o coronavírus. No entanto, o sabão rompe a ligação entre os agentes patogénicos e a sua pele, permitindo que os agentes patogénicos deslizem imediatamente. Não só está a neutralizar o vírus, como também o está a eliminar fisicamente das suas mãos. A prática de uma boa higiene das mãos é uma estratégia preventiva simples que a maioria das pessoas pode facilmente adotar, e muitos estudos demonstraram a eficácia da higiene das mãos na prevenção da transmissão de agentes patogénicos infecciosos, incluindo coronavírus como o SARS-CoV-2.
            </p>

            <section class="e-card">
                <h4 class="mt-0">Referências</h4>
                
                <ul class="text-sm break-all">
                    <li>
                        <a href="https://www.uchealth.org/today/why-soap-and-water-work-better-than-hand-sanitizer-to-remove-the-coronavirus/" target="_blank" rel="noopener noreferrer">https://www.uchealth.org/today/why-soap-and-water-work-better-than-hand-sanitizer-to-remove-the-coronavirus/</a>
                    </li>
                </ul>
            </section>

            <h3>Enfraquecer o corona vírus com sabão</h3>
            
            <p>
                Os coronavírus recebem o seu nome da "coroa" que rodeia o vírus - os picos de proteínas incorporados na sua superfície. Os picos, responsáveis pela infeção do hospedeiro, estão ancorados numa membrana. A membrana é o "invólucro" do vírus e o seu ponto fraco. 
            </p>
            <p>
                As moléculas de sabão têm duas partes quimicamente distintas: uma "cabeça" hidrofílica (que adora água) e uma "cauda" hidrofóbica (que odeia água). A cabeça ajuda o sabão a misturar-se com a água, enquanto a cauda pode interagir com outras moléculas hidrofóbicas, como os lípidos. 
            </p>
            <p>
                Felizmente, a membrana do coronavírus é constituída principalmente por moléculas de lípidos. Estas são mantidas juntas por interacções químicas fracas entre moléculas individuais. As "caudas" hidrofóbicas (que odeiam a água) das moléculas de sabão podem quebrar as interacções entre as moléculas lipídicas na membrana do coronavírus (ver Fig. 5).
            </p>
            <p>
                A “cauda” do sabão pode romper as interacções fracas entre as moléculas lipídicas da membrana, rasgando-a. Suponhamos que o vírus se fragmenta antes de ser abrigado em segurança numa célula hospedeira. Nesse caso, o vírus deixa de ser capaz de fazer o seu trabalho infecioso - como uma máquina cujas peças se desintegram. As moléculas de sabão envolvem então os fragmentos de vírus com todas as caudas viradas para o interior. Este aglomerado é designado por micela (ver Fig. 6). As cabeças hidrofílicas voltadas para o exterior permitem que a micela seja levada pela água. A água, por si só, não é suficiente.
            </p>


            <div class="grid gap-2 md:grid-cols-2 e-card">
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-07.webp"
                    credits="Fonte: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html">
                    <template #caption>
                        <b>Figura 5.</b> Moléculas de sabão a destruir o vírus 
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-08.webp"
                    credits="Fonte: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html">
                    <template #caption>
                        <b>Figura 6.</b> Micela composta por moléculas de sabão e fragmento de vírus
                    </template>
                </UiContentImage>
            </div>

            <p>
                A informação dada também é válida para os outros vírus envolvidos (Gripe, Hepatite B e C e Doença do Vírus do Ébola) uma vez que na sua estrutura também têm fosfolípidos.
            </p>

            <section class="e-card">
                <h4 class="mt-0">Referência</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.science.org.au/curious/people-medicine/hand-sanitiser-or-soap-making-informed-choice-covid-19" target="_blank" rel="noopener noreferrer">https://www.science.org.au/curious/people-medicine/hand-sanitiser-or-soap-making-informed-choice-covid-19</a></li>
                </ul>
            </section>

            <h3>Escolher desinfetante para as mãos</h3>

            <p>
                A Organização Mundial de Saúde (OMS) recomenda desinfetantes à base de álcool se não tiver sabão à mão. 
            </p>
            
            <p>
                <b>Acredita-se que os desinfetantes para as mãos à base de álcool funcionem impedindo que as proteínas dos micróbios – incluindo bactérias e alguns vírus – funcionem normalmente. Desinfetantes para as mãos com alto teor de álcool também podem interferir na camada lipídica que envolve o coronavírus.</b> Para serem eficazes, os desinfetantes para as mãos devem conter pelo menos 60% de álcool. Os aditivos no desinfetante podem impedir que o álcool evapore muito rápido, permitindo que o vírus fique encharcado por mais tempo.
            </p>
            <p>
                No entanto, existem também certos riscos relacionados com a utilização de desinfetantes manuais à base de álcool. Existe um aumento do risco de intoxicação alcoólica para as crianças, e o uso frequente de desinfetantes manuais pode resultar em resistência antimicrobiana. Existem desinfetantes manuais alternativos sem álcool, onde o benzalcónio é mais utilizado. Estudos recentes indicaram que o desinfetante manual sem álcool funciona tão bem e não causa a sensação familiar de "queimadura" conhecida pelo uso de desinfetante de mãos alcoólicas.
            </p>
            
            <section class="e-card">
                <h4 class="mt-0">Referências</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0048969720340833?via%3Dihub" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/abs/pii/S0048969720340833?via%3Dihub</a></li>
                    <li><a href="https://www.journalofhospitalinfection.com/article/S0195-6701(20)30547-8/fulltext#secsectitle0040" target="_blank" rel="noopener noreferrer">https://www.journalofhospitalinfection.com/article/S0195-6701(20)30547-8/fulltext#secsectitle0040</a></li>
                </ul>
            </section>













            <h2 id="section-7" class="mt-40 text-5xl">7. Mitos da Vacina</h2>

            <hr class="mt-10 mb-40" />
            <h2><span class="text-rose-400">Mito 1:</span> As vacinas causam autismo/efeitos secundários graves.</h2>

            <p>
                O medo generalizado de que as vacinas aumentam o risco de autismo teve origem num estudo de 1997 publicado por Andrew Wakefield, um cirurgião britânico. O artigo foi publicado na The Lancet, uma prestigiada revista médica, sugerindo que a vacina contra o sarampo, a papeira e a rubéola (MMR) aumentava o autismo nas crianças britânicas.
            </p>
            <p>
                Desde então, o artigo foi completamente desacreditado devido a erros processuais graves, ao facto de o estudo ter contado com apenas 12 participantes, a conflitos de interesses financeiros não revelados e a violações éticas. Andrew Wakefield perdeu a sua licença médica e o artigo foi retirado da revista The Lancet.
            </p>
            <p>
                Atualmente, contra a teoria da ligação entre autismo e vacinação, vários estudos identificaram sintomas de autismo em crianças muito antes de estas receberem a vacina MMR. Além disso, investigações recentes fornecem provas de que o autismo se desenvolve no útero, muito antes de um bebé nascer ou receber vacinas. Nenhum dos últimos estudos relatou uma ligação entre qualquer vacina e a probabilidade de desenvolver autismo.
            </p>

            <section class="e-card">
                <h4 class="mt-0">Referências</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(97)11096-0/fulltext" target="_blank" rel="noopener noreferrer">https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(97)11096-0/fulltext</a></li>
                    <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home" target="_blank" rel="noopener noreferrer">https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home</a></li>
                </ul>
            </section>


            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Para mais estudo</h3>
                    <ul class="leading-tight">
                        <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect/after.html" target="_blank" rel="noopener noreferrer">Possible Side Effects After Getting a COVID-19 Vaccine</a></li>
                        <li><a href="https://www.bbc.com/news/health-55932832" target="_blank" rel="noopener noreferrer">Study reveals extent of Covid vaccine side-effects</a></li>
                        <li><a href="https://www.nature.com/articles/d41586-021-00290-x" target="_blank">COVID vaccines and safety: what the research says</a></li>
                        <li><a href="https://health.clevelandclinic.org/covid-19-vaccine-side-effects/" target="_blank" rel="noopener noreferrer">Here’s What to Know About the COVID-19 Vaccine Side Effects</a></li>
                        <li><a href="https://www.who.int/news-room/q-a-detail/coronavirus-disease-(covid-19)-vaccines-safety" target="_blank" rel="noopener noreferrer">Coronavirus disease (COVID-19): Vaccines safety</a></li>
                        <li><a href="https://www.historyofvaccines.org/content/articles/vaccine-side-effects-and-adverse-events" target="_blank" rel="noopener noreferrer">Vaccine Side Effects and Adverse Events</a></li>
                        <li><a href="https://www.bbc.com/news/health-56375307" target="_blank">Vaccine side effects: My experience of them and what they mean</a></li>
                        <li><a href="https://vk.ovg.ox.ac.uk/vk/vaccine-side-effects" target="_blank" rel="noopener noreferrer">Vaccine side effects and adverse reactions</a></li>
                        <li>📺<a href="https://www.youtube.com/watch?v=F6NKbQzo4aE" target="_blank" rel="noopener noreferrer">Vaccine side effects are actually a good thing</a></li>
                        <li>📺<a href="https://www.youtube.com/watch?v=Atrx1P2EkiQ" target="_blank" rel="noopener noreferrer">Vaccines and the Immune Response: How Vaccines Work</a></li>
                    </ul>
                </div>
            </UiCardInfo>

            









            <hr class="mt-10 mb-40" />
            <h2><span class="text-rose-400">Mito 2:</span> Os sistemas imunológicos infantis não conseguem lidar com várias vacinas</h2>

            <p>
                As crianças recebem vacinas em tenra idade porque correm o maior risco de adoecer ou morrer se contraírem estas doenças. Mesmo os recém-nascidos são imunes a algumas doenças (por exemplo, varicela) porque recebem anticorpos das mães; esta imunidade dura apenas alguns meses. Além disso, a maioria dos bebés não obtém anticorpos protetores contra difteria, tosse convulsa, poliomielite, tétano, hepatite B ou Hib das suas mães.
            </p>
            <p>
                Para reduzir o número de vacinas que uma criança recebe numa visita ao médico, algumas vacinas são oferecidas como uma combinação (duas ou mais vacinas diferentes foram combinadas numa única injeção). Exemplos de vacinas combinadas são difteria-tétano-pertussis (DTap) e o sarampo-papeira-rubéola (MMR). 
            </p>
            <p>
                Dados científicos demonstram que a administração de várias vacinas em simultâneo não causa quaisquer problemas de saúde. O sistema imunológico infantil é mais resistente do que se possa pensar. Com base no número de anticorpos presentes no sangue, um bebé teria, teoricamente a capacidade de responder a um número muito maior de vacinas do que as que são administradas (a questão que se coloca é se são 1.000, 10.000 ou 100.000 de uma só vez). Mesmo que todas as cerca de 10 (dependendo do plano nacional de vacinação) vacinas programadas fossem administradas de uma só vez, isso utilizaria apenas uma fração da capacidade imunitária de um bebé. Na realidade, os bebés estão expostos a inúmeras bactérias e vírus todos os dias, e as imunizações são insignificantes em comparação. Além disso, os estudos não demonstraram que a exposição a múltiplas vacinas durante os primeiros 23 meses de vida estaria associada a um risco acrescido de infecções não visadas pelas vacinas.
            </p>

            <section class="e-card">
                <h4 class="mt-0">Referências</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home" target="_blank" rel="noopener noreferrer">https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home</a></li>
                    <li><a href="https://www.bmj.com/content/364/bmj.l1481/rr-11" target="_blank" rel="noopener noreferrer">https://www.bmj.com/content/364/bmj.l1481/rr-11</a></li>
                    <li><a href="https://pubmed.ncbi.nlm.nih.gov/11773551/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/11773551/</a></li>
                </ul>
            </section>











            <hr class="mt-10 mb-40" />
            <h2><span class="text-rose-400">Mito 3:</span> A imunidade adquirida através de uma doença é melhor do que a imunidade adquirida através da vacinação</h2>

            <p>
                É verdade que a infeção natural resulta quase sempre numa imunidade mais forte à doença do que uma vacinação. No entanto, os perigos desta abordagem superam em muito os benefícios relativos. O preço da imunidade após a infeção natural pode ser pneumonia de varicela ou pneumococcus, incapacidade intelectual de Haemophilus influenzae tipo b (Hib), defeitos congénitos de rubéola, cancro do fígado devido ao vírus da hepatite B, morte por sarampo, etc. Se quisesse ganhar imunidade ao sarampo, por exemplo, ao contrair a doença, enfrentaria uma em cada 500 hipóteses de morte devido aos seus sintomas. Em contraste, o número de pessoas que tiveram reações alérgicas severas de uma vacina MMR é inferior a um em um milhão.
            </p>
            <p>
                No entanto, poucas vacinas induzem uma melhor resposta imunológica do que a infeção natural. Por exemplo, a vacina do papilomavírus humano (HPV) contém uma alta pureza da proteína específica, conduzindo a uma melhor resposta imunológica do que a infeção natural. Outros exemplos incluem o tétano, o haemophilus influenzae tipo b (Hib) e a vacina pneumocócica.
            </p>
            <p>
                No que diz respeito ao COVID-19, tem de ser esclarecido. Foi demonstrado que a proteção permanente após a infeção é improvável. Apesar de os doentes com coronavírus terem adquirido uma "memória imunitária substancial" que envolveu as quatro partes significativas do sistema imunitário: células B da memória, anticorpos, células CD4+ T de memória e células CD8+ T de memória, a proteção começou a reduzir após meio ano. Além disso, os cientistas mostraram uma "gama dinâmica massiva" na resposta imunitária entre indivíduos, com uma diferença de 200 vezes nos níveis de anticorpos.
            </p>
            <p>
                Outros estudos mostraram que os voluntários que receberam a vacina Moderna (mRNA) tinham mais anticorpos - um marcador de resposta imune - no sangue do que as pessoas que estavam doentes com COVID-19. No entanto, este facto pode ser modificado pela gravidade da doença, uma vez que existe uma correlação entre a gravidade da doença e a resposta imunológica duradoura – a maioria dos pacientes assintomáticos tinha muito poucos anticorpos após seis meses de infeção. Assim, a imunidade natural gerada por uma infeção SARS-CoV-2 é muitas vezes imprevisível. Além disso, os anticorpos provocados pela vacina do mRNA tinham como alvo uma gama mais ampla de locais no Domínio de Ligação ao Recetor (do inglês Receptor Binding Domain, RBD) do que os provocados por infeções naturais.
            </p>


            <section class="e-card">
                <h4 class="mt-0">Referências</h4>
                
                <ul class="text-sm break-all">
                    <li>
                        <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00675-9/fulltext" target="_blank" rel="noopener noreferrer">https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00675-9/fulltext</a>
                    </li>
                    <li>
                        <a href="https://science.sciencemag.org/content/371/6529/eabf4063" target="_blank" rel="noopener noreferrer">https://science.sciencemag.org/content/371/6529/eabf4063</a>
                    </li>
                    <li>
                        <a href="https://www.nejm.org/doi/full/10.1056/NEJMc2032195" target="_blank" rel="noopener noreferrer">https://www.nejm.org/doi/full/10.1056/NEJMc2032195</a>
                    </li>
                    <li>
                        <a href="https://www.researchsquare.com/article/rs-612205/v1" target="_blank" rel="noopener noreferrer">https://www.researchsquare.com/article/rs-612205/v1</a>
                    </li>
                    <li>
                        <a href="https://stm.sciencemag.org/content/13/600/eabi9915" target="_blank" rel="noopener noreferrer">https://stm.sciencemag.org/content/13/600/eabi9915</a>
                    </li>
                </ul>
            </section>













            <hr class="mt-10 mb-40" />
            <h2><span class="text-rose-400">Mito 4:</span> As vacinas contêm substâncias que podem pôr a vida em risco.</h2>
            
            
            <p>
                As pessoas estão preocupadas com o uso de formaldeído, mercúrio ou alumínio nas vacinas. Por um lado, estes químicos são tóxicos para o corpo humano a certos níveis. Por outro lado, apenas pequenas quantidades destes produtos químicos podem ser encontradas em vacinas. Essas quantidades são menores do que obtemos da nutrição ou o formaldeído é produzido a taxas mais elevadas pelos nossos próprios sistemas metabólicos.
            </p>
            <p>
                Certos elementos, como sais de alumínio, são adicionados às vacinas porque funcionam como adjuvantes, o que significa que sua presença aumenta a resposta imune quando você é vacinado. Além disso, apenas algumas vacinas contêm sais de alumínio e as novas vacinas COVID-19 não os contêm. Algumas vacinas contêm timerosal como conservante; no entanto, nenhuma das vacinas usadas em crianças atualmente contém isso. O timerosal contém etilmercúrio, que é eliminado do corpo humano rapidamente em comparação com o metilmercúrio, que se bioacumula - portanto, também há uma diferença na forma de metal tóxico. No entanto, as vacinas COVID-19 não contêm toxinas (por exemplo).
            </p>

            <section class="e-card">
                <h4 class="mt-0">Referências</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://stm.sciencemag.org/content/13/600/eabi9915" target="_blank" rel="noopener noreferrer">https://stm.sciencemag.org/content/13/600/eabi9915</a></li>
                    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6373706/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6373706/</a></li>
                    <li><a href="https://www.cdc.gov/vaccines/hcp/conversations/downloads/vacsafe-thimerosal-color-office.pdf" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/vaccines/hcp/conversations/downloads/vacsafe-thimerosal-color-office.pdf</a></li>
                    <li><a href="https://www.technologyreview.com/2020/12/09/1013538/what-are-the-ingredients-of-pfizers-covid-19-vaccine/" target="_blank" rel="noopener noreferrer">https://www.technologyreview.com/2020/12/09/1013538/what-are-the-ingredients-of-pfizers-covid-19-vaccine/</a></li>
                </ul>
            </section>



            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Para mais estudo</h3>
                    <ul class="leading-tight">
                        <li><a href="https://www.publichealth.org/public-awareness/understanding-vaccines/goes-vaccine/" target="_blank" rel="noopener noreferrer">What Goes Into A Vaccine?</a></li>
                        <li>📺<a href="https://www.youtube.com/watch?v=Atrx1P2EkiQ" target="_blank" rel="noopener noreferrer">Vaccines and the Immune Response: How Vaccines Work</a></li>
                        <li><a href="https://www.cdc.gov/vaccines/vac-gen/additives.htm" target="_blank" rel="noopener noreferrer">What’s in Vaccines?</a></li>
                    </ul>
                </div>
            </UiCardInfo>














            <hr class="mt-10 mb-40" />
            <h2><span class="text-rose-400">Mito 5:</span> Uma melhor higiene e um melhor saneamento são responsáveis pela diminuição das infeções, não as vacinas</h2>
            
            <p>
                Em parte, é verdade que as vacinas não merecem todo o crédito pela redução ou eliminação das taxas de doenças infecciosas. Está provado que a melhoria do saneamento básico, da nutrição e o desenvolvimento de antibióticos também ajudaram muito. Infecções como a febre tifoide e a cólera, transmitidas por água contaminada, uma das principais causas de doença e morte no início do século XX, foram drasticamente reduzidas por um melhor saneamento. Uma análise recente concluiu que a lavagem das mãos contribui para evitar doenças infecciosas. Outra prova recente vem do confinamento devido à COVID-19 e da melhoria da higiene, com uma redução drástica das taxas de gripe sazonal.
            </p>
            <p>
                No entanto, quando estes fatores são isolados e as taxas de doenças infeciosas são analisadas, o papel das vacinas não pode ser negado. Um exemplo é o sarampo nos Estados Unidos. Quando a primeira vacina contra o sarampo foi introduzida em 1963, as taxas de infeção tinham sido constantes em cerca de 400.000 casos por ano. E embora os hábitos higiénicos e o saneamento não tenham mudado muito na década seguinte, a taxa de infeções por sarampo diminuiu precipitadamente após a introdução da vacina, com apenas cerca de 25.000 casos até 1970. Outro exemplo é a doença hib. De acordo com os dados do CDC, a taxa de incidência desta doença baixou de 20.000 em 1990 para cerca de 1.500 em 1993, após a introdução da vacina.
            </p>
            <p>
                Outra prova vem das últimas décadas. Não houve alterações na higiene no mundo desenvolvido, mas houve uma diminuição das taxas de vacinação. Além disso, vários países, como o Reino Unido, os EUA, a Alemanha, a Espanha, etc., estão a assistir a um aumento do número de sarampo, e outras doenças evitáveis pela vacinação, identificadas como uma doença emergente "pontos quentes".
            </p>

            <section class="e-card">
                <h4 class="mt-0">Referência</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://jptcp.com/index.php/jptcp/article/view/711" target="_blank" rel="noopener noreferrer">https://jptcp.com/index.php/jptcp/article/view/711</a></li>
                    <li><a href="https://www.nature.com/articles/d41586-020-01538-8" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/d41586-020-01538-8</a></li>
                    <li><a href="https://www.nature.com/articles/d41586-020-03519-3" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/d41586-020-03519-3</a></li>
                    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3222407/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3222407/</a></li>
                </ul>
            </section>












            <hr class="mt-10 mb-40" />
            <h2><span class="text-rose-400">Mito 6:</span> As vacinas podem infetar a criança com a doença que está a tentar prevenir</h2>

            <p>
                Algumas das vacinas são vacinas vivas que contêm microrganismos/vírus atenuados vivos, que ainda são capazes de se replicar dentro do hospedeiro (vacina). Os microrganismos estão "enfraquecidos", o que significa que perderam a maior parte da sua capacidade causadora de doenças, mas ainda possuem propriedades imunogénicas. Assim, é sempre muito menos grave do que se uma criança for infetada com o vírus causador da doença em si. As vacinas vivas atenuadas são para o sarampo, papeira, rubéola (vacina combinada MMR), rotavírus, varíola, varicela e febre amarela. Na maioria dos casos, as vacinas vivas mostram uma imunogenicidade significativamente maior do que as vacinas inativadas, uma vez que a infeção natural é imitada quase na perfeição, provocando uma gama mais abrangente de respostas imunológicas. No entanto, estas vacinas não são recomendadas para crianças com sistemas imunitários enfraquecidos, como as que estão a ser tratadas com cancro.
            </p>
            <p>
                As vacinas vivas podem, de facto, causar sintomas leves que se assemelham à doença contra a qual protegem. No entanto, os recetores da vacina estão a experimentar a resposta imune do corpo à vacina, e não à doença em si. Há apenas um caso registado em que se demonstrou que uma vacina causa doenças. Esta foi a Vacina contra a Poliomielite Oral (OPV) que já não é utilizada e atualmente é substituída por uma forma de vírus morto conhecida como a vacina contra a poliomielite inativada (IPV).
            </p>

            <section class="e-card">
                <h4 class="mt-0">Referência</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.sciencedirect.com/science/article/pii/B9781455710768000090" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/pii/B9781455710768000090</a></li>
                </ul>
            </section>












            <hr class="mt-10 mb-40" />
            <h2><span class="text-rose-400">Mito 7:</span> Não precisamos de vacinar porque muitos países têm baixas taxas de infeção</h2>

            <p>
                A imunidade de grupo ocorre quando uma grande parte de uma comunidade (o grupo) se torna imune a uma doença, tornando improvável a propagação da doença de pessoa para pessoa. Graças à "imunidade de grupo", muitas pessoas não vêem a necessidade de vacinação. Desde que uma grande maioria de pessoas esteja imunizada numa população, a minoria não imunizada também estará protegida. Isto é importante porque há uma parte da população - bebés, mulheres grávidas, idosos e pessoas com sistemas imunitários enfraquecidos - que por vezes não pode receber vacinas. No entanto, suponhamos que muitas pessoas não se vacinam nem vacinam os seus filhos. Nesse caso, a "imunidade de grupo" desaparece, abrindo oportunidades para que os vírus e as bactérias se estabeleçam e se espalhem. Com tantas pessoas resistentes, uma doença infecciosa nunca terá hipótese de se estabelecer e propagar. 
            </p>
            <p>
                Além disso, as viagens internacionais transportam muitas vezes uma doença do estrangeiro e um indivíduo não vacinado corre um risco muito maior de ficar doente ou as pessoas que foram infectadas durante a viagem. O aumento da incidência do sarampo ilustra este facto nos EUA nos últimos anos. Enquanto existirem doenças, corremos o risco de ser infectados.
            </p>
            
            <section class="e-card">
                <h4 class="mt-0">Referências</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.cdc.gov/mmwr/volumes/68/wr/mm6819a4.htm" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/mmwr/volumes/68/wr/mm6819a4.htm</a></li>
                    <li><a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9" target="_blank" rel="noopener noreferrer">https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9</a></li>
                </ul>
            </section>



            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                Mais mitos COVID-19 e investigação científica relacionada podem ser encontrados a partir de: <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/science-in-5/episode-8---myth-vs-science" target="_blank" rel="noopener noreferrer">
                    WHO - Myth vs Science
                </a>
            </UiCardInfo>

        </section>
    </div>
</template>