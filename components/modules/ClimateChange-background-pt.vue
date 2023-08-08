<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" />
        </ClientOnly>



        <section class="e-article"  lang="en" style="hyphens: auto;">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Alterações Climáticas</h1>
            <h5 class="font-normal uppercase leading-tight">Informação científica</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">1. O que são Alterações Climáticas e quais são as suas causas?</h2>
        
            <p>AS alterações climáticas referem-se a mudanças de longo prazo nas temperaturas e nos padrões climáticos. Essas mudanças podem ser naturais, como por exemplo através de variações no ciclo solar, mas desde 1800, as atividades humanas têm sido o principal fator para as alterações climáticas, principalmente devido à queima de combustíveis fósseis como carvão, petróleo e gás. A queima de combustíveis fósseis gera emissões de gases de efeito estufa que agem como um cobertor envolvendo a Terra, retendo o calor do sol e elevando as temperaturas. Especificamente, o CO₂ retém a radiação de onda longa emitida pelo planeta. O aprisionamento da radiação de onda longa é ditado pela mecânica quântica. Os dois átomos de oxigênio no CO₂ vibram com o átomo de carbono no centro, e a frequência dessa vibração coincide com alguns dos comprimentos de onda infravermelhos da radiação de onda longa. Quando a frequência da radiação da superfície da Terra e da atmosfera coincide com a frequência da vibração do CO₂, a radiação é absorvida pelo CO₂, convertida em calor por colisão com outras moléculas de ar e depois retorna à superfície. Como resultado desse aprisionamento, a radiação de onda longa que sai é reduzida pelo aumento do CO₂. Não escapa tanto calor para equilibrar a radiação solar líquida recebida. Como resultado, há excesso de energia térmica no planeta, ou seja, o sistema está desequilibrado energeticamente. Como o CO₂ está a aumentar com o tempo, a camada de infravermelhos está a ficar mais espessa e o planeta está a acumular esse excesso de energia.</p>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/c-change__the-greenhouse-effect.webp"
                credits="From Le Treut et al., 2007"
                :elevated="true">
                <template #caption>
                    <b>Figure 1.</b> A simplified diagram illustrating the greenhouse effect
                </template>
            </UiContentImage>
        
            <p><b>Os gases que contribuem para o efeito estufa incluem:</b></p>
            <dl>
                <dt class="font-bold">Vapor de água:</dt>
                <dd>O gás de efeito estufa mais abundante, mas o mais importante, atua como resposta para o clima. O vapor de água aumenta à medida que a atmosfera da Terra aquece, mas também aumenta a possibilidade de nuvens e precipitação, tornando-os alguns dos mecanismos de resposta mais importantes para o efeito estufa.</dd>
                <dt class="font-bold">Dióxido de carbono (CO₂):</dt>
                <dd>Um componente menor, mas essencial da atmosfera, o dióxido de carbono é libertado por meio de processos naturais, como a respiração e erupções vulcânicas e atividades humanas, como desmatamento, mudanças no uso da terra e queima de combustíveis fósseis. Os seres humanos aumentaram a concentração atmosférica de CO₂ em 48% desde o início da Revolução Industrial. Este é o mais importante "forçar" de longa duração das alterações climáticas.</dd>
                <dt class="font-bold">Metano:</dt>
                <dd>Um gás de hidrocarboneto produzido por fontes naturais e atividades humanas, incluindo a decomposição de resíduos em aterros, agricultura e, especialmente, cultivo de arroz, bem como digestão de ruminantes e a utilização de esterco associado ao gado doméstico. Numa base molécular, o metano é um gás de efeito estufa muito mais ativo do que o dióxido de carbono, mas também muito menos abundante na atmosfera.</dd>
                <dt class="font-bold">Óxido nitroso:</dt>
                <dd>Um poderoso gás de efeito estufa produzido por práticas de cultivo do solo, principalmente fertilizantes comerciais e orgânicos, combustão de combustíveis fósseis, produção de ácido nítrico e queima de biomassa. Clorofluorcarbonetos (CFCs): Compostos sintéticos inteiramente de origem industrial usados em diversas aplicações, mas agora amplamente regulamentados em produção e libertação para a atmosfera por normas internacionais de acordo com a sua capacidade de contribuir para a destruição da camada de ozono. Também eles são gases de efeito estufa.</dd>
            </dl>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/c-change__greenhouse-gas-emission-75-20.webp"
                credits="From NOAA Global Monitoring Laboratory"
                :elevated="true" class="mt-8">
                <template #caption>
                    <b>Figure 2.</b> Greenhouse gas emissions into the atmosphere from 1975-2020
                </template>
            </UiContentImage>
            
        
            
            <section class="e-card mt-8">
                <h4 class="mt-2">Referências</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://climate.nasa.gov/causes/" target="_blank" rel="noopener noreferrer">https://climate.nasa.gov/causes/</a></li>
                    <li><a href="https://www.un.org/en/climatechange/what-is-climate-change" target="_blank" rel="noopener noreferrer">https://www.un.org/en/climatechange/what-is-climate-change</a></li>
                    <li><a href="https://gml.noaa.gov/about/networks.html" target="_blank" rel="noopener noreferrer">https://gml.noaa.gov/about/networks.html</a></li>
                    <li><a href="https://archive.ipcc.ch/publications_and_data/ar4/wg1/en/faq-1-3-figure-1.html" target="_blank" rel="noopener noreferrer">https://archive.ipcc.ch/publications_and_data/ar4/wg1/en/faq-1-3-figure-1.html</a></li>
                    <li><a href="https://www.youtube.com/watch?app=desktop&v=3JX-ioSmNW8 " target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?app=desktop&v=3JX-ioSmNW8</a></li>
                    <li><b>Ramanathan, V.</b>, <b>Feng, Y.</b> (2009). Air pollution, greenhouse gases and climate change: Global and regional perspectives. Atmospheric environment, 43(1), 37-50.</li>
                </ul>
            </section>
            
            
            
             



            
            
            
            
            
            
            
            
            
            
            <hr  class="mt-10 mb-40" />
            <h2 id="section-2">2. Quais são os efeitos das Alterações Climáticas?</h2>
            
            <p>O Painel Intergovernamental sobre Alterações Climáticas (IPCC), que inclui mais de 1.300 cientistas dos Estados Unidos e outros, refere que a extensão dos efeitos das Alterações Climáticas em cada uma das regiões irá variar ao longo do tempo e com a capacidade de diferentes sistemas sociais e ambientais de mitigar ou adaptar-se à mudança.</p>
            
            <p>
                <b>Os efeitos das alterações climáticas variam e incluem o seguinte:</b>
            </p>
            
            
            <ul>
                <li>
                    Aumento da temperatura global: Dado o enorme tamanho e capacidade de calor dos oceanos globais, é necessária uma enorme energia térmica para aumentar a temperatura média anual da superfície da Terra, mesmo que seja uma pequena quantidade. O aumento de aproximadamente 2 graus Fahrenheit (1 grau Celsius) na temperatura média global da superfície que ocorreu desde a era pré-industrial (1880-1900) pode parecer pequeno, mas significa um aumento significativo no calor acumulado.
                </li>
                <li>
                    Aumento do nível do mar
                    <UiContentImage
                        src="https://evidence.onkel.ee/assets/c-change__sea-level-rise.webp"
                        credits="From NOAA Climate.gov image based on analysis and data from Philip Thompson, University of Hawaii Sea Level Center"
                        :elevated="true" class="mt-8">
                        <template #caption>
                            <b>Figura 3.</b> Subida do nível do mar entre 1995 e 2020
                        </template>
                    </UiContentImage>
                </li>
                <li>
                    Diminuem os glaciares da montanha.
                </li>
                <li>
                    O gelo derrete a um ritmo mais rápido do que o habitual na Gronelândia, na Antártida e no Ártico.
                </li>
                <li>
                    Secas ou aumento da precipitação dependendo da região do planeta.
                </li>
                <li>
                    Algumas experiências laboratoriais sugerem que níveis elevados de CO₂ podem aumentar o crescimento das plantas. No entanto, outros fatores, como a alteração das temperaturas, o ozono e as restrições de água e nutrientes, podem mais do que contrariar qualquer potencial aumento na produção. Se forem ultrapassados os intervalos de temperatura ideais para algumas culturas, os ganhos de produção anteriores podem ser reduzidos ou invertidos.
                </li>
                <li>
                    Os climas extremos, como secas, inundações e temperaturas extremas, podem levar a perdas de colheitas e ameaçar o sustento dos produtores agrícolas e a segurança alimentar das comunidades em todo o mundo. Dependendo da cultura e do ecossistema, as infestações, pragas e fungos também podem prosperar sob temperaturas mais quentes, climas mais húmidos, CO₂ mais elevado e as alterações climáticas provavelmente aumentarão as ervas daninhas e pragas.
                </li>
                <li>
                    A investigação demonstrou que também pode reduzir o valor nutricional da maioria das culturas alimentares, reduzindo as concentrações de proteínas e minerais essenciais na maioria das espécies vegetais.
                </li>
                <li>
                    Mudanças nos tempos de florescimento das flores e plantas.
                </li>
                <li>
                    A limitação do aquecimento global a 1,5°C, em vez de 2°C e superior, deverá ter muitos benefícios para os ecossistemas terrestres e húmidos e para a preservação dos seus serviços aos seres humanos.
                </li>
                <li>
                    Os ecossistemas oceânicos já estão a sofrer mudanças em larga escala, prevendo-se que os limiares críticos sejam atingidos a 1,5°C e a níveis mais elevados de aquecimento global.
                </li>
                <li>
                    As alterações climáticas, direta e indiretamente, causam stress aos animais em todo o mundo. Muitas espécies estão a aproximar-se - ou já atingiram - o limite de onde podem ir para encontrar climas hospitaleiros. Nas regiões polares, animais como ursos polares que vivem no gelo polar, lutam para sobreviver à medida que o gelo derrete.
                </li>
                <li>
                    O aquecimento das temperaturas dos oceanos está a derreter o gelo polar, a deslocar as correntes oceânicas e as migrações de peixes, levando ao branqueamento de corais. Devido ao papel vital dos oceanos na regulação do clima da Terra, absorvendo as emissões de gases com efeito de estufa, estão a ser atingidos diretamente pelas alterações climáticas.
                </li>
                <li>
                    Os riscos de perda de espécies locais e, consequentemente, os riscos de extinção são muito menores num mundo de 1,5°C contra um mundo mais quente de 2°C.
                </li>
                <li>
                    Prevê-se que qualquer aumento da temperatura global (por exemplo, +0,5°C) afete a saúde humana, com consequências essencialmente negativas.
                </li>
                <li>
                    Prevê-se que os riscos para o crescimento económico global agregado devido aos impactos das alterações climáticas sejam inferiores a 1,5ºC do que a 2ºC até ao final deste século.
                </li>
            </ul>


            <section class="e-card mt-8">
                <h4 class="mt-2">Referências</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://climatekids.nasa.gov/climate-change-meaning/" target="_blank" rel="noopener noreferrer">https://climatekids.nasa.gov/climate-change-meaning/</a></li>
                    <li><a href="https://climate.nasa.gov/effects/" target="_blank" rel="noopener noreferrer">https://climate.nasa.gov/effects/</a></li>
                    <li><a href="https://www.un.org/en/climatechange/what-is-climate-change" target="_blank" rel="noopener noreferrer">https://www.un.org/en/climatechange/what-is-climate-change</a></li>
                    <li><a href="https://www.un.org/en/global-issues/climate-change" target="_blank" rel="noopener noreferrer">https://www.un.org/en/global-issues/climate-change</a></li>
                    <li><a href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature" target="_blank" rel="noopener noreferrer">https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature</a></li>
                    <li><a href="https://www.nature.org/en-us/what-we-do/our-priorities/tackle-climate-change/climate-change-stories/climate-change-frequently-asked-questions/#threats" target="_blank" rel="noopener noreferrer">https://www.nature.org/en-us/what-we-do/our-priorities/tackle-climate-change/climate-change-stories/climate-change-frequently-asked-questions/#threats</a></li>
                    <li><a href="https://www.ipcc.ch/sr15/chapter/chapter-3" target="_blank" rel="noopener noreferrer">https://www.ipcc.ch/sr15/chapter/chapter-3</a></li>
                    <li><a href="https://www.youtube.com/watch?v=rVjp3TO_juI&t=3s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=rVjp3TO_juI&t=3s</a></li>
                    <li><b>Ramanathan, V.</b>, <b>Feng, Y.</b> (2009). Air pollution, greenhouse gases and climate change: Global and regional perspectives. Atmospheric environment, 43(1), 37-50.</li>
                </ul>
            </section>

        
        










            <hr  class="mt-10 mb-40" />
            <h2 id="section-3">3. Alterações Climáticas: Uma questão socio científica e controversa</h2>

            <p>Na história da Ciência, houve e há muitos exemplos em que visões contraditórias sobre questões científicas específicas se espalharam para a população em geral. A mudança climática é um exemplo em que pessoas e grupos assumem e defendem diferentes posições sobre ela. Embora a ciência do clima tenha estabelecido firmemente que o aquecimento global está a acontecer, que as atividades humanas contribuem para esse aquecimento e que o aquecimento atual e futuro prevê impactos negativos nos sistemas ecológico e social (National Research Council, 2010), uma parte significativa do público americano permanece ambivalente ou despreocupado (Leiserowitz, Maibach, Roser-Renouf e Hmielowski, 2012) e muitos decisores políticos (especialmente nos Estados Unidos) negam a necessidade de tomar medidas para reduzir as emissões de carbono (Brownstein, 2010).</p>

            <p>Os negacionistas das ciência climáticas não aceitam evidências que apoiem a mudança climática, o papel da humanidade em causar o aquecimento global recente e/ou a gravidade dos impactos climáticos. Ceticismo, rejeição, dissidência, dúvida ou mudança anti climática são alguns termos que têm sido usados para caracterizar o negacionismo da ciência climática (Cook, 2017).</p>

            <p>A desinformação sobre o clima é a razão para os equívocos públicos sobre as Alterações Climáticas (McCright e Dunlap, 2010). Portanto, muitas perguntas (por exemplo, (1) Um aumento na temperatura da Terra está a causar um aumento no dióxido de carbono ou um aumento no dióxido de carbono está a causar um aumento na temperatura da Terra? (2) As atividades humanas produzem igual, menor ou maior quantidade de dióxido de carbono do que processos naturais? (3) O clima muda ao longo do tempo?) que inquietam os cidadãos preocupados com o futuro do planeta e das novas gerações. Conforme podemos observar no próximo ponto, os mass media desempenham um papel central nos debates sobre a ciência do clima e a formulação de políticas. Maxwell Boykoff baseia-se na sua longa experiência em analisar como os media representam as alterações climática para disponibilizar uma análise dos múltiplos fatores que contribuem para que as "vozes dissidentes" — céticos, e negacionistas — recebam visibilidade mediática injustificada e, assim, influenciem os debates políticos.</p>


            <section class="e-card mt-8">
                <h4 class="mt-2">Referências:</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.youtube.com/watch?app=desktop&v=u9KxE4Kv9A8" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?app=desktop&v=u9KxE4Kv9A8</a></li>
                    <li><a href="https://www.researchgate.net/publication/274306932_Climate_Change_Skepticism_and_Denial_An_Introduction" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/publication/274306932_Climate_Change_Skepticism_and_Denial_An_Introduction</a></li>
                    <li><b>Karakas, L. D.</b>, & <b>Mitra, D.</b> (2020). Believers vs. deniers: Climate change and environmental policy polarization. European Journal of Political Economy, 65, 101948.</li>
                    <li><b>Corry, O.</b>, & <b>Jørgensen, D.</b> (2015). Beyond ‘deniers’ and ‘believers’: Towards a map of the politics of climate change. Global Environmental Change, 32, 165-174.</li>
                    <li><b>Cook, J.</b> (2017). Understanding and countering climate science denial. Journal & Proceedings of the Royal Society of New South Wales, 150.</li>
                    <li><b>McCright, A. M.</b> & <b>Dunlap, R. E.</b> (2010). Anti-reflexivity: The American conservative movement’s success in undermining climate science and policy. Theory, Culture & Society, 27(2-3), 100-133.</li>
                </ul>
            </section>


             
















            <hr  class="mt-10 mb-40" />
            <h2 id="section-4">4. Técnicas de Negacionismo Científico</h2>

            
            <p>Entre os vários movimentos que rejeitam um consenso científico, observam-se cinco características ou técnicas de negação da ciência:</p>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/c-change__flicc.webp"
                credits=""
                :elevated="false" class="my-8">
                <template #caption>
                    5 Characteristics of Science Denial
                </template>
            </UiContentImage>

            <dl>
                <dt class="font-bold">
                    Especialistas falsos:
                </dt>
                <dd>
                    envolve porta-vozes que transmitem a impressão de conhecimento sobre um tópico, mas possuem pouco conhecimento relevante. O Global Warming Petition Project é a forma mais prevalente dessa técnica dentro da desinformação climática, apresentando 31.000 signatários de uma petição online dissidente contra o aquecimento global causado pelo homem. No entanto, 99,9% dos signatários, apesar de serem formados em ciências, não possuem especialização em ciência do clima. Esta petição foi considerada experimentalmente como um dos argumentos negacionistas mais eficazes para diminuir a aceitação das alterações climáticas.
                </dd>
                <dt class="font-bold mt-4">
                    Falácias lógicas:
                </dt>
                <dd>
                    Argumentos que convencem as pessoas a acreditarem em uma ou mais premissas, levando-as a uma conclusão. Argumentos negacionistas do clima geralmente contêm falhas lógicas fatais. Existem três classes de falácias lógicas encontradas na desinformação climática:
                    <ul>
                        <li>
                            falácias de relevância (onde as premissas são irrelevantes para a conclusão), 
                        </li>
                        <li>
                            Alcance (onde nem todas as evidências relevantes são consideradas) e 
                        </li>
                        <li>
                            presunção (onde o argumento contém premissas falsas).
                        </li>
                    </ul>
                </dd>
                <dt class="font-bold mt-4">
                    Expectativas impossíveis:
                </dt>
                <dd>
                    envolve exigir níveis irrealistas de prova ou deturpar a natureza da incerteza científica. Como a ciência é tipicamente probabilística, os pedidos de certezas absolutas lançam dúvidas sobre as descobertas científicas. Essa técnica negacionista é conhecida como “Método de Argumentação da Certeza Científica”.
                </dd>
                <dt class="font-bold mt-4">
                    Cherry picking:
                </dt>
                <dd>
                    Esta técnica é definida como “escolha seletiva de dados que levam à conclusão desejada que difere da conclusão decorrente de todos os dados disponíveis”.
                </dd>
                <dt class="font-bold mt-4">
                    Teorias da conspiração:
                </dt>
                <dd>
                    cerca de 20% do público dos EUA acredita que as alterações climáticas são uma farsa científica. As teorias da conspiração têm vários efeitos adversos, mesmo quando as pessoas não são convencidas por elas. Eles podem diminuir o apoio à ação climática, diminuir a intenção de reduzir a pegada de carbono e diminuir a confiança no governo.
                </dd>
            </dl>

 
            <section class="e-card mt-8">
                <h4 class="mt-2">Referências</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.youtube.com/watch?v=uNs2YMblqwU&ab_channel=JohnCook" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=uNs2YMblqwU</a></li>
                    <li><a href="https://www.youtube.com/watch?v=AqcUP0sDglg" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=AqcUP0sDglg</a></li>
                    <li><a href="https://www.youtube.com/watch?v=wXA777yUndQ" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=wXA777yUndQ</a></li>
                    <li><a href="http://www.petitionproject.org/" target="_blank" rel="noopener noreferrer">http://www.petitionproject.org</a></li>
                </ul>
            </section>
 
 



















            <h1 class="mt-40">Mitos sobre as Alterações Climáticas</h1>

            <hr class="mt-10 mb-40" />
            <h2 id="section-5"><span class="text-rose-400">Mito 1:</span> A extinção de espécies é um processo natural. Extinções em massa de espécies sempre ocorreram.</h2>

            <p>A extinção de espécies é um problema histórico. Desde os tempos pré-históricos, temos evidências de várias extinções em massa, principalmente a extinção dos dinossauros. Essa extinção, que ocorreu há 66 milhões de anos, foi atribuída ao impacto de um asteroide na Terra. Ao longo dos anos, temos outros exemplos bem conhecidos, como a extinção dos mamutes. No entanto, as causas de extinção registradas variam.</p>
            <p>Além disso, a sugestão de que a humanidade é capaz de ter impacto e perturbar forças de tal magnitude é reflexo de uma arrogância egocêntrica que entorpece a mente. A humanidade é um subconjunto da Natureza. A natureza não é um subconjunto da humanidade. As pessoas não podem causar nem intervir para corrigir esses processos (Financial Sense University).</p>
            <p><a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a></p>





            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Scientific View considering Myth 1:</h3>
                    <p class="font-Heading text-2xl"><i>“Today, extinctions are occurring hundreds of times faster than they would naturally. This is due to the human caused climate change.”</i></p>
                </div>
            </UiCardInfo>
            


            

            <p>Students investigating Myth 1 during the Guided Inquiry option are studying evidence about previous mass extinctions. They also study newest evidence about specific extinctions (e.g., Magellanic penguins) caused from climate change and watch a video from BBC about mass extinctions. Alternatively, students investigating Myth 1 following the Open Inquiry, collect evidences from scientific sources in order to falsify/or confirm their hypothesis.</p>
            
            <p>In both inquiry options, students access the scientific sources and come up with their conclusions.</p>


            <p><b>Click the following links for the scientific view:</b></p>
            <ul>
                <li>
                    <a href="https://www.nationalgeographic.com/science/article/mass-extinction" target="_blank" rel="noopener noreferrer">Mass extinction facts and information from National Geographic</a>
                </li>
                <li>
                    <a href="https://www.nationalgeographic.com/animals/article/vanishing-what-we-lose-when-an-animal-goes-extinct-feature" target="_blank" rel="noopener noreferrer">What we lose when animals go extinct</a>
                </li>
            </ul>








            

            









            <hr id="myth-2" class="mt-10 mb-40" />
            <h2 id="section-6"><span class="text-rose-400">Mito 2:</span> Espécies/organismos podem adaptar-se às Alterações Climáticas.</h2>

            <p>A Terra tem uma história de 4,54 bilhões de anos. As condições climáticas que prevaleciam de tempos em tempos no planeta mudaram. Portanto, as espécies/organismos que vivem na terra foram forçados a adaptar-se às novas condições para sobreviver e serem preservados. Desta forma, surgiu a evolução da espécie.</p>
            <p>Plantas e animais já se adaptaram várias vezes a condições adversas (mudanças climáticas, quedas de meteoritos, erupções vulcânicas, etc.). Isso torna-os capazes de se adaptar ao aumento das temperaturas e à situação que agora chamamos de alterações climáticas. Por outras palavras, as espécies são naturalmente capazes de sobreviver em novas condições.</p>
            <p><a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a></p>


            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Scientific View considering Myth 2:</h3>
                    <p class="text-2xl"><i>“Not all species can adapt to climate change.  Some species (e.g., birds) can adapt to climate change in different ways (e.g., change the time of migration or breeding).  However, not all species (e.g., mammals) can do this.  Also, not all kinds of adaptations can be achieved fast (e.g., changing morphological characteristics).”</i></p>
                    <p>Generally, evolution cannot always happen too fast- sometimes is a slower process. In other words, the rate of adaptation is insufficient (Visser, 2008).</p>
                </div>
            </UiCardInfo>

            <p>Students investigating Myth 2 during the Guided Inquiry option are studying evidence about how species adapt in climate change (e.g., the coral case), they are getting involved into a specific experiment about the mass of corals and study recent evidence about the climate change affect to mammals. Students access the scientific sources and come up with their conclusions. Alternatively, students investigating Myth 2 following the Open Inquiry, collect evidences from scientific sources in order to falsify/or confirm their hypothesis.
            </p>
            <p>
            In both inquiry options, students access the scientific sources and come up with their conclusions.</p>


            <p><b>Click the following links for the scientific view:</b></p>
            <ul>
                <li>
                    <a href="https://www.nationalgeographic.com/environment/article/many-animals-can-adapt-climate-change-just-not-fast-enough-" target="_blank" rel="noopener noreferrer">Some animals can adapt to climate change—just not fast enough</a>
                </li>
                <li>
                    <b>Visser, M. E.</b> (2008). Keeping up with a warming world; assessing the rate of adaptation to climate change. Proceedings of the Royal Society B: Biological Sciences, 275(1635), 649-659.
                </li>
            </ul>













            <hr id="myth-3" class="mt-10 mb-40" />
            <h2 id="section-7"><span class="text-rose-400">Mito 3:</span> A ciência da mudança climática não é confiável.</h2>


            <p>As estações meteorológicas estão localizadas em áreas onde os dados recolhidos não são representativos das alterações climáticas e, portanto, pouco confiáveis ​​para o estudo do clima global. Os cientistas visam o terrorismo global em busca de dados que criam nas condições que desejam.</p>

            <p>
                <i>"Encontramos estações meteorológicas [dos EUA] localizadas próximas aos exaustores de unidades de ar condicionado, cercadas por estacionamentos e estradas asfaltadas, em telhados extremamente quentes e perto de calçadas e edifícios que absorvem e irradiam calor."</i> (Watts 2009)
                <br />
                <a href="https://skepticalscience.com/surface-temperature-measurements-basic.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/surface-temperature-measurements-basic.htm</a>
            </p>


            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Scientific View considering Myth 3:</h3>
                    <p class="text-2xl">The evidence relating to climate change comes from decades of intensive research and is based on observations, field and laboratory experiments, and model simulations (Higgins, 2019). It is arbitrary to believe that the scientific data on climate change is unreliable.</p>
                </div>
            </UiCardInfo>

            <p>Students investigating Myth 3 during the Guided Inquiry option are studying specific evidence (e.g., the location of the observatory stations and measurements) coming from the NOAA organization in order to criticize on their own if that evidence are reliable or no.  Alternatively, students investigating Myth 3 following the Open Inquiry, collect evidences from scientific sources in order to falsify/or confirm their hypothesis.</p>
            <p>In both inquiry options, students access the scientific sources and come up with their conclusions.</p>


            <p><b>Click the following links for the scientific view:</b></p>
            <ul>
                <li>
                    <a href="https://www.ametsoc.org/ams/assets/File/Climate_Assessment_Credibility_10-2019.pdf" target="_blank" rel="noopener noreferrer">Climate_Assessment_Credibility_10-2019.pdf (ametsoc.org)</a>
                </li>
                <li>
                    <a href="https://gml.noaa.gov/" target="_blank" rel="noopener noreferrer">NOAA ESRL Global Monitoring Laboratory</a>
                </li>
            </ul>
















            <hr id="myth-4" class="mt-10 mb-40" />
            <h2 id="section-8"><span class="text-rose-400">Mito 4:</span> O aumento da temperatura é para sempre</h2>
            
            <p><i>"A propósito, se vai votar em algo, vote no aquecimento. Menos mortes por frio, regiões mais habitáveis, colheitas maiores, estação de cultivo mais longa. Isso é bom. O aquecimento ajuda os pobres."</i> (John MacArthur)</p>

            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s</a>
                </li>
                <li>
                    <a href="https://skepticalscience.com/global-warming-positives-negatives.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/global-warming-positives-negatives.htm</a>
                </li>
            </ul>

             
            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Scientific View considering Myth 4:</h3>
                    <p class="text-2xl">Myth 4 is based only on the above statement of John MacArthur.  Scientific evidence reports exactly the opposite.  That climate change (heat) affects the number of human deaths positively. Climate change is one of the reasons of global changes affecting society, the environment, the economy, and public health.</p>
                </div>
            </UiCardInfo>

            <p>Students investigating Myth 4 during the Guided Inquiry option are studying specific evidence from the World Health Organization about the rise temperature and human deaths, recent evidence about human deaths affected from climate change, make an experimental investigation about rise temperature and land used for housing or cultivation etc.  Students access the scientific source and come up with their conclusions.  Alternatively, students investigating Myth 4 following the Open Inquiry, collect evidences from scientific sources in order to falsify/or confirm their hypothesis.</p>
            <p>In both inquiry options, students access the scientific sources and come up with their conclusions. </p>

            <p><b>Click the following links for the scientific view:</b></p>
            <ul>
                <li>
                    <a href="https://www.epa.gov/climate-indicators/climate-change-indicators-heat-related-deaths#:~:text=Some%20statistical%20approaches%20estimate%20that,set%20shown%20in%20Figure%201" target="_blank" rel="noopener noreferrer">Climate Change Indicators: Heat-Related Deaths</a>
                </li>
                <li>
                    <a href="https://health2016.globalchange.gov/low/ClimateHealth2016_FullReport_small.pdf" target="_blank" rel="noopener noreferrer">The Impacts Of Climate Change On Human Health In The United States</a>
                </li>
                <li>
                    According to a 2009 article in Scientific American, a team of climate change researchers from the World Health Organization (WHO) found that "global warming is [responsible] for some 150,000 deaths each year around the world"; they feared this number would double by the year 2030. 
                </li>
            </ul>

 
     














            <hr id="myth-5" class="mt-10 mb-40" />
            <h2 id="section-9"><span class="text-rose-400">Mito 5:</span> Não há correlação entre CO₂ e temperatura.</h2>
            
            <p>
                <i>"Foi a industrialização do pós-guerra que causou o rápido aumento das emissões globais de CO₂, mas em 1945, quando isso começou, a Terra já estava numa fase de arrefecimento que começou por volta de 1942 e continuou até 1975. Com 32 anos de rápido aumento das temperaturas globais e apenas um pequeno aumento nas emissões globais de CO₂, seguido por 33 anos de arrefecimento lento das temperaturas globais com rápidos aumentos nas emissões globais de CO₂, foi enganoso para o IPCC fazer qualquer afirmação de que as emissões de CO₂ foram as principais responsáveis pelo aquecimento global observado no século XX."</i>
                <br />
                (<a href="https://archive.md/q3Tim" target="_blank" rel="noopener noreferrer">Norm Kalmanovitch</a>)
                <br />
                <a href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
            </p>

            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Scientific View considering Myth 5:</h3>
                    <p class="text-2xl">
                        <i>“Paleoclimate data from the last 800,000-plus years show that the link between temperature and CO₂ is well-established. Scientists discovered CO₂’s role in warming the planet in the mid-19th century, noted James Renwick, Professor, Victoria University of Wellington, in a previous review of a similar claim. “Through the past 2.6 million years, the period of recent ice ages, carbon dioxide has gone up and down in step with temperature, bottoming out at around 180 parts per million in the depths of a “glacial maximum” and peaking at around 280 parts per million in the warmer interglacial periods, he said in the review. “Going back further, CO₂ levels were certainly higher than present, but so were temperatures.” Scientists are confident in the finding that increased CO₂ concentrations are causing Earth’s temperature to rise. As CO₂ and other greenhouse gases are emitted into the atmosphere, they trap more of the sun’s energy, leading to warming. “It is unequivocal that human influence has warmed the atmosphere, ocean and land,” the IPCC notes in its Sixth Assessment Report.”</i>
                    </p>
                </div>
            </UiCardInfo>
            
            <p>
                Students investigating Myth 5 during the Guided Inquiry option are studying evidence about how Carbon affects climate and life on Earth. They are also getting involved into an experimental procedure investigating how carbon dioxide affect temperature on Earth. They access those scientific sources and come up with their final conclusions. Alternatively, students investigating Myth 5 following the Open Inquiry, collect evidences from scientific sources in order to falsify/or confirm their hypothesis.
                <br />
                In both inquiry options, students access the scientific sources and come up with their conclusions. 
            </p>

            <p><b>Click the following links for the scientific view:</b></p>
            <ul>
                <li>
                    <a href="https://climatefeedback.org/claimreview/link-between-co2-earth-temperature-well-established-despite-claims-fox-news-tom-harris/" target="_blank" rel="noopener noreferrer">https://climatefeedback.org/claimreview/link-between-co2-earth-temperature-well-established-despite-claims-fox-news-tom-harris/</a>
                </li>
                <li>
                    <a href="https://cires.colorado.edu/outreach/resources/lesson/how-does-increase-co2-cause-increase-temperature" target="_blank" rel="noopener noreferrer">https://cires.colorado.edu/outreach/resources/lesson/how-does-increase-co2-cause-increase-temperature</a>
                </li>
            </ul>



            








            <hr id="myth-6" class="mt-10 mb-40" />
            <h2 id="section-10"><span class="text-rose-400">Mito 6:</span> O clima da Terra sempre mudou e agora está a acontecer a mesma coisa.</h2>

            <p>
                <i>"By the way, if you’re going to vote for something, vote for warming. Less deaths due to cold, more habitable regions, larger crops, longer growing season. That’s good. Warming helps the poor."</i>
                <br />
                (John MacArthur)
                <br />
                <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s</a>
            </p>

            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Scientific View considering Myth 6:</h3>
                    <p class="text-2xl">
                        Poverty is increased by climate change and not by the actions to mitigate it.
                    </p>
                    <p class="text-2xl">
                        <i>“The impacts of climate change, and the vulnerability of poor communities to climate change, vary greatly, but generally, climate change is superimposed on existing vulnerabilities. Climate change will further reduce access to drinking water, negatively affect the health of poor people, and will pose a real threat to food security in many countries in Africa, Asia, and Latin America. In some areas where livelihood choices are limited, decreasing crop yields threaten famines, or where loss of landmass in coastal areas is anticipated, migration might be the only solution. The macroeconomic costs of the impacts of climate change are highly uncertain, but very likely have the potential to threaten development in many countries. Therefore, the task ahead is to increase the adaptive capacity of affected poor communities and countries.
                        <br />
                        This decision to focus on adaptation is deliberate and is taken with the understanding that adaptation cannot replace mitigation efforts. The magnitude and rate of climate change will strongly depend on efforts to reduce greenhouse gas (GHG) concentrations in the atmosphere. The higher the concentrations of GHGs, the higher the likelihood of irreversible and grave damage to human and biological systems. Therefore, adaptation is only one part of the solution. Mitigation of climate change by limiting greenhouse gas concentrations in the atmosphere is the indispensable other part.”</i>
                    </p>
                </div>
            </UiCardInfo>

            <p>
                Students investigating Myth 6 during the Guided Inquiry option are studying evidence about the economic benefits switching to the use of renewable electricity, the impending effects of using different energy sources and finally the information given about the jobs that will result from the exploitation of renewable energy sources.  Students access those evidence and come up with their conclusions. Alternatively, students investigating Myth 6 following the Open Inquiry, collect evidences from scientific sources in order to falsify/or confirm their hypothesis.
                <br />
                In both inquiry options, students access the scientific sources and come up with their conclusions.
            </p>


            <p><b>Click the following links for the scientific view:</b></p>
            <ul>
                <li>
                    <a href="https://www.oecd.org/env/cc/2502872.pdf" target="_blank" rel="noopener noreferrer">https://www.oecd.org/env/cc/2502872.pdf</a>
                </li>
                <li>
                    <a href="https://ec.europa.eu/research-and-innovation/en/horizon-magazine/climate-actions-lift-people-out-poverty-are-often-most-cost-effective" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/research-and-innovation/en/horizon-magazine/climate-actions-lift-people-out-poverty-are-often-most-cost-effective</a>
                </li>
                <li>
                    <a href="https://www.actionaid.org.uk/our-work/emergencies-disasters-humanitarian-response/climate-change-and-poverty" target="_blank" rel="noopener noreferrer">https://www.actionaid.org.uk/our-work/emergencies-disasters-humanitarian-response/climate-change-and-poverty</a>
                </li>
            </ul>


            <p><b>Click the following links for the scientific view:</b></p>
            <ul>
                <li>
                    <a href="https://www.oecd.org/env/cc/2502872.pdf" target="_blank" rel="noopener noreferrer">https://www.oecd.org/env/cc/2502872.pdf</a>
                </li>
                <li>
                    <a href="https://ec.europa.eu/research-and-innovation/en/horizon-magazine/climate-actions-lift-people-out-poverty-are-often-most-cost-effective" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/research-and-innovation/en/horizon-magazine/climate-actions-lift-people-out-poverty-are-often-most-cost-effective</a>
                </li>
                <li>
                    <a href="https://royalsociety.org/topics-policy/projects/climate-change-evidence-causes/question-6/" target="_blank" rel="noopener noreferrer">https://royalsociety.org/topics-policy/projects/climate-change-evidence-causes/question-6/</a>
                </li>
            </ul>












            <hr id="myth-7" class="mt-10 mb-40" />
            <h2 id="section-11">Myth 7: The earth’s climate has always changed, and now the same thing is happening.</h2>

            <p>
                <i>
                    “Climate is always changing. We have had ice ages and warmer periods when alligators were found in Spitzbergen. Ice ages have occurred in a hundred thousand year cycle for the last 700 thousand years, and there have been previous periods that appear to have been warmer than the present despite CO₂ levels being lower than they are now. More recently, we have had the medieval warm period and the little ice age.”
                </i>
                <br />
                (<a href="http://www.quadrant.org.au/blogs/doomed-planet/2009/07/resisting-climate-hysteria" target="_blank" rel="noopener noreferrer">Richard Lindzen</a>)
                <br />
                <a href="https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm</a>
            </p>
            
            
            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Scientific View considering Myth 7:</h3>
                    <p class="text-2xl">
                        <i>“The largest global-scale climate variations in Earth’s recent geological past are the ice age cycles, which are cold glacial periods followed by shorter warm periods.The last few of these natural cycles have recurred roughly every 100,000 years. CO₂ has risen more than 40% in just the past 200 years, much of this since the 1970s, contributing to human alteration of the planet’s energy budget that has so far warmed Earth by about 1 °C (1.8 °F).  If the rise in CO₂ continues unchecked, warming of the same magnitude as the increase out of the ice age can be expected by the end of this century or soon after. This speed of warming is more than ten times that at the end of an ice age, the fastest known natural sustained change on a global scale.”</i>
                    </p>
                </div>
            </UiCardInfo>

            <p>
                Students investigating Myth 7 during the Guided Inquiry option are studying temperature on Earth (evidence from NASA) and compare the change in temperature every twenty years.  They find out the biggest temperature rises and record specific information regarding them.  Students access the scientific source and come up with their conclusions. Alternatively, students investigating Myth 7 following the Open Inquiry, collect evidences from scientific sources in order to falsify/or confirm their hypothesis.
                <br />
                In both inquiry options, students access the scientific sources and come up with their conclusions.
            </p>

            
 


        </section>
    </div>
</template>