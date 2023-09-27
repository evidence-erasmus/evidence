<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" />
        </ClientOnly>



        <section class="e-article"  lang="pt" style="hyphens: auto;">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Alterações Climáticas</h1>
            <h5 class="font-normal uppercase leading-tight">Informação científica</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">1. O que são Alterações Climáticas e quais são as suas causas?</h2>
        
            <p>
                Em termos simples, as Alterações Climáticas podem ser definidas como o fenómeno global de transformação do clima, caracterizado pelas mudanças no clima habitual do planeta (no que diz respeito à temperatura, precipitação e vento) que são causadas especialmente pelas atividades humanas. Para uma definição mais científica, podemos adotar a definição de alterações climáticas da NASA como "uma vasta gama de fenómenos globais criados predominantemente pela queima de combustíveis fósseis, que adicionam gases que retêm o calor na atmosfera da Terra. Estes fenómenos incluem as tendências de aumento da temperatura descritas por aquecimento global, mas também abrangem alterações como a subida do nível do mar; a perda de massa de gelo na Gronelândia, na Antártida, no Ártico e nos glaciares de montanha em todo o mundo; alterações no florescimento das flores/plantas; e fenómenos meteorológicos extremos". Atualmente, muitos ativistas, cientistas, autores e políticos defendem que devemos substituir o termo "alterações climáticas" pelo termo "crise climática", no sentido em que "já não se considera que as alterações climáticas reflitam com exatidão a gravidade da situação global; em vez disso, deveríamos usar emergência climática ou crise climática para descrever o impacto mais amplo das alterações climáticas" (Sophie Zeldin O-Neil, cronista do jornal "The Guardian").
            </p>

            <p>
                Mas, como é que as alterações climáticas estão a acontecer? Para o explicar, é necessário dizer algumas palavras sobre o "efeito de estufa". O efeito de estufa é o processo natural que aquece a superfície da Terra. Chama-se efeito de estufa porque a troca de radiação que entra e sai e que aquece o planeta funciona de forma semelhante a uma estufa. Como uma estufa é construída em vidro, permite que a luz solar atravesse o exterior e aqueça o ar e as plantas no interior. O calor que não é absorvido pelas plantas é retido pelo vidro e não pode escapar.  Durante o dia, a luz do sol continua a entrar pelo vidro, adicionando cada vez mais energia térmica, o que faz com que o interior fique cada vez mais quente (e continue a ficar quente depois de o sol se pôr).
            </p>

            <p>
                A Terra e o Sol funcionam de forma semelhante (numa escala muito mais maciça e com um processo físico diferente). O Sol brilha através da atmosfera terrestre e a superfície da Terra aquece. Parte da energia do Sol é refletida diretamente para o espaço, a restante é absorvida pela terra, pelos oceanos e pela atmosfera e é transformada em calor. O calor que gases como o dióxido de carbono, o metano e outros "gases com efeito de estufa" retêm, de outra forma escaparia à atmosfera da Terra. Na proporção correta, estes gases desempenham um papel fundamental para garantir que a atmosfera retém calor suficiente para suportar todos os tipos de vida no planeta. Sem eles, a Terra perderia tanto calor que a vida tal como a conhecemos seria impossível. Embora o efeito de estufa seja um fenómeno natural, o efeito pode ser intensificado pela emissão de gases com efeito de estufa para a atmosfera resultantes da atividade humana. Nesse caso, os gases com efeito de estufa retêm demasiada energia solar sob a forma de calor e perturbam os sistemas naturais que regulam o nosso clima. As coisas ficam cada vez mais quentes e começamos a assistir a fenómenos meteorológicos cada vez mais extremos e a outros impactos. Mesmo pequenas alterações na temperatura média global podem causar mudanças importantes e perigosas no clima e no tempo. Basta considerar a diferença entre 0 e 1 grau Celsius - um grau significa a diferença entre gelo e água.
            </p>
            
            <!-- 
                <p>AS alterações climáticas referem-se a mudanças de longo prazo nas temperaturas e nos padrões climáticos. Essas mudanças podem ser naturais, como por exemplo através de variações no ciclo solar, mas desde 1800, as atividades humanas têm sido o principal fator para as alterações climáticas, principalmente devido à queima de combustíveis fósseis como carvão, petróleo e gás. A queima de combustíveis fósseis gera emissões de gases de efeito estufa que agem como um cobertor envolvendo a Terra, retendo o calor do sol e elevando as temperaturas. Especificamente, o CO₂ retém a radiação de onda longa emitida pelo planeta. O aprisionamento da radiação de onda longa é ditado pela mecânica quântica. Os dois átomos de oxigênio no CO₂ vibram com o átomo de carbono no centro, e a frequência dessa vibração coincide com alguns dos comprimentos de onda infravermelhos da radiação de onda longa. Quando a frequência da radiação da superfície da Terra e da atmosfera coincide com a frequência da vibração do CO₂, a radiação é absorvida pelo CO₂, convertida em calor por colisão com outras moléculas de ar e depois retorna à superfície. Como resultado desse aprisionamento, a radiação de onda longa que sai é reduzida pelo aumento do CO₂. Não escapa tanto calor para equilibrar a radiação solar líquida recebida. Como resultado, há excesso de energia térmica no planeta, ou seja, o sistema está desequilibrado energeticamente. Como o CO₂ está a aumentar com o tempo, a camada de infravermelhos está a ficar mais espessa e o planeta está a acumular esse excesso de energia.</p>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/c-change__the-greenhouse-effect.webp"
                credits="From Le Treut et al., 2007"
                :elevated="true">
                <template #caption>
                    <b>Figure 1.</b> A simplified diagram illustrating the greenhouse effect
                </template>
            </UiContentImage> 
        -->
        
            <p><b>Eis algumas informações sobre os gases mais comuns que contribuem para o efeito de estufa:</b></p>
            <dl>
                <dt class="font-bold">Vapor de água:</dt>
                <dd>O vapor de água é o gás que mais contribui para o efeito de estufa. No entanto, quase todo o vapor de água na atmosfera provém de processos naturais.</dd>
                <dt class="font-bold">Dióxido de carbono (CO₂):</dt>
                <dd>Componente menor, mas essencial, da atmosfera, o dióxido de carbono é libertado através de processos naturais como a respiração e as erupções vulcânicas, mas também por atividades humanas como a desflorestação, as alterações na utilização dos solos e, sobretudo, a queima de combustíveis fósseis. Os seres humanos aumentaram a concentração de CO₂ na atmosfera em 48% desde o início da Revolução Industrial.</dd>
                <dt class="font-bold">Metano:</dt>
                <dd>É produzido através de fontes naturais e de actividades humanas, incluindo a decomposição de resíduos em aterros, a agricultura (por exemplo, a cultura do arroz), bem como a digestão de ruminantes e a gestão do estrume associado à criação de gado doméstico. É um gás com efeito de estufa muito mais ativo do que o dióxido de carbono, mas também muito menos abundante na atmosfera.</dd>
                <dt class="font-bold">Óxido nitroso:</dt>
                <dd>É produzido por práticas de cultivo do solo, fertilizantes comerciais e orgânicos, combustão de combustíveis fósseis, produção de ácido nítrico e queima de biomassa.</dd>
                <dt class="font-bold">Clorofluorcarbonetos (CFCs):</dt>
                <dd>Compostos sintéticos inteiramente de origem industrial com diversas aplicações, mas agora amplamente regulamentados por normas internacionais, no que diz respeito à produção e libertação para a atmosfera e pela sua capacidade de contribuir para a destruição da camada de ozono. Também eles são gases de efeito estufa.</dd>
            </dl>

            <!-- <UiContentImage
                src="https://evidence.onkel.ee/assets/c-change__greenhouse-gas-emission-75-20.webp"
                credits="From NOAA Global Monitoring Laboratory"
                :elevated="true" class="mt-8">
                <template #caption>
                    <b>Figure 2.</b> Greenhouse gas emissions into the atmosphere from 1975-2020
                </template>
            </UiContentImage> -->
            
        
            
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
            
            <p>O Painel Intergovernamental sobre Alterações Climáticas (IPCC), que inclui mais de 1.300 cientistas dos Estados Unidos e de outros países, refere que a extensão dos efeitos das Alterações Climáticas em cada uma das regiões irá variar ao longo do tempo e em função da capacidade dos diferentes sistemas sociais e ambientais para atenuar ou adaptar-se às alterações.</p>
            
            <p>
                <b>Os efeitos das alterações climáticas incluem:</b>
            </p>
            
            
            <ul>
                <li>
                    <b>Aumento da temperatura global:</b> Dada a enorme dimensão e capacidade de aquecimento dos oceanos, é necessária uma elevada energia térmica para aumentar a temperatura média anual da superfície da Terra, mesmo que seja apenas uma pequena quantidade. O aumento de cerca de 2 graus Fahrenheit (1 grau Celsius) na temperatura média global à superfície que se registou desde a era pré-industrial (1880-1900) pode parecer pequeno, mas significa um aumento significativo do calor acumulado.
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
                    Diminuição os glaciares nas montanha.
                </li>
                <li>
                    Derretimento do gelo a um ritmo mais rápido do que o habitual na Gronelândia, na Antártida e no Ártico.
                </li>
                <li>
                    Secas ou aumento da precipitação, consoante a região do planeta.
                </li>
                <li>
                    Algumas experiências de laboratório sugerem que níveis elevados de CO2 podem aumentar o crescimento das plantas. No entanto, outros fatores, como a alteração das temperaturas, o ozono e as limitações de água e nutrientes, podem contrariar qualquer potencial aumento de produção. Se os intervalos de temperatura ideais para algumas culturas forem ultrapassados, os possíveis ganhos de rendimento anteriores podem ser reduzidos ou completamente invertidos.
                </li>
                <li>
                    Os fenómenos climáticos extremos, como secas, inundações e temperaturas extremas, podem conduzir a perdas de colheitas e ameaçar a subsistência dos produtores agrícolas e a segurança alimentar das comunidades em todo o mundo. Dependendo da cultura e do ecossistema, as ervas daninhas, as pragas e os fungos podem também desenvolver-se com temperaturas mais quentes, climas mais húmidos, etc.
                </li>
                <li>
                    A investigação demonstrou que o aumento da temperatura pode também reduzir o valor nutricional da maioria das culturas alimentares, reduzindo as concentrações de proteínas e minerais essenciais na maioria das espécies vegetais.
                </li>
                <li>
                    Alterações nas épocas de floração das flores e plantas.
                </li>
                <li>
                    As alterações climáticas, direta e indiretamente, causam stress aos animais em todo o mundo. Muitas espécies estão a aproximar-se - ou já atingiram - o limite de onde podem ir para encontrar climas habitáveis. Nas regiões polares, animais como os ursos polares que vivem no gelo polar, estão agora a lutar para sobreviver à medida que esse gelo derrete.
                </li>
                <li>
                    Os ecossistemas oceânicos já estão a sofrer mudanças em larga escala, prevendo-se que os limiares críticos sejam atingidos a 1,5°C e a níveis mais elevados de aquecimento global.
                </li>
                <li>
                    As alterações climáticas, direta e indiretamente, causam stress aos animais em todo o mundo. Muitas espécies estão a aproximar-se - ou já atingiram - o limite de onde podem ir para encontrar climas hospitaleiros. Nas regiões polares, animais como ursos polares que vivem no gelo polar, lutam para sobreviver à medida que o gelo derrete.
                </li>
                <li>
                    O aumento das temperaturas nos oceanos está a derreter o gelo polar, a alterar as correntes oceânicas e as migrações dos peixes, levando ao branqueamento e extinção de corais. Devido ao papel vital dos oceanos na regulação do clima da Terra, ao absorverem as emissões de gases com efeito de estufa, estão a ser diretamente afetados pelas alterações climáticas.
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

        
        






            <!-- <hr  class="mt-10 mb-40" />
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
            </section> -->


             







            <hr  class="mt-10 mb-40" />
            <h2 id="section-4">3. Técnicas de Negacionismo Científico</h2>

            
            <p>
                Cook (2020) classificou os diferentes argumentos propostos pelos negacionistas das alterações climáticas em cinco categorias principais: Peritos falsos; Falácias lógicas; Expectativas impossíveis; Seleção seletiva; Teorias da conspiração.
            </p>

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
                    São porta-vozes que transmitem a impressão de serem especialistas num assunto, embora possuam pouca ou nenhuma experiência relevante. O Global Warming Petition Project (Projeto de Petição sobre o Aquecimento Global) é o exemplo mais prevalente desta técnica no âmbito da desinformação sobre o clima, apresentando 31.000 signatários de uma petição online que discorda do aquecimento global causado pelo homem. No entanto, 99,9% dos signatários, apesar de possuírem uma licenciatura em ciências, não possuem conhecimentos especializados em ciências climáticas.
                </dd>
                <dt class="font-bold mt-4">
                    Falácias lógicas:
                </dt>
                <dd>
                    São argumentos em que as premissas ou os pressupostos iniciais não conduzem logicamente à conclusão.  Os argumentos dos negacionistas do clima contêm normalmente falhas lógicas graves. Por exemplo, o argumento de que o clima se alterou naturalmente no passado, pelo que as alterações climáticas modernas devem ser naturais, contém o falso pressuposto implícito de que, como os fatores naturais causaram alterações climáticas no passado, devem ser sempre a causa das alterações climáticas, quando a influência humana também pode ser um fator.
                </dd>
                <dt class="font-bold mt-4">
                    Expectativas impossíveis:
                </dt>
                <dd>
                    Isto implica exigir provas irrealistas ou deturpar a natureza da incerteza científica. Por exemplo, depois de serem apresentados dados que demonstram que o nível do mar está a aumentar, as pessoas que duvidam das alterações climáticas podem pedir dados que demonstrem que o fenómeno da subida do nível do mar acelerou nos últimos anos!
                </dd>
                <dt class="font-bold mt-4">
                    Seleção seletiva:
                </dt>
                <dd>
                    Esta técnica é definida como "a escolha seletiva de dados que conduzem à conclusão desejada, que difere da conclusão resultante de todos os dados disponíveis". Por exemplo, para provar que as alterações climáticas não estão a ocorrer, é prática comum escolher dados de anos particularmente frios ou húmidos, ignorando os dados que mostram a tendência de alteração da temperatura ao longo de muitos séculos.
                </dd>
                <dt class="font-bold mt-4">
                    Teorias da conspiração:
                </dt>
                <dd>
                    envolvem a sugestão de planos secretos para implementar esquemas nefastos e são um tema comum na desinformação sobre o clima. Os especialistas em ciência climática têm sido caracterizados pelos negacionistas como um "cartel climático" de cientistas, reguladores, ativistas e entidades empresariais
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
 
 



















            <h1 class="mt-40">
                4. Mitos sobre as Alterações Climáticas
            </h1>

            <hr class="mt-10 mb-40" />
            <h2 id="section-5">
                <span class="text-rose-400">Mito 1:</span> A extinção de espécies é um processo natural. Extinções em massa de espécies sempre ocorreram.
            </h2>

            <p>A extinção de espécies é um problema histórico. Desde os tempos pré-históricos, temos evidências de várias extinções em massa, principalmente a extinção dos dinossauros. Essa extinção, que ocorreu há 66 milhões de anos, foi atribuída ao impacto de um asteroide na Terra. Ao longo dos anos, temos outros exemplos bem conhecidos, como a extinção dos mamutes. No entanto, as causas de extinção registadas variam.</p>
            <p>Além disso, a sugestão de que a humanidade é capaz de ter impacto e perturbar forças de tal magnitude é reflexo de uma arrogância egocêntrica que entorpece a mente. A humanidade é um subconjunto da Natureza. A natureza não é um subconjunto da humanidade. As pessoas não podem causar nem intervir para corrigir esses processos (Financial Sense University).</p>
            <p><a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a></p>





            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Visão Científica considerando o Mito 1:</h3>
                    <p class="font-Heading text-2xl"><i>“Atualmente, as extinções estão a ocorrer centenas de vezes mais depressa do que aconteceria naturalmente. Isto deve-se às alterações climáticas causadas pelo homem.”</i></p>
                </div>
            </UiCardInfo>
            

            <p>
                Os alunos que investigam o Mito 1 durante a opção de Inquérito Orientado analisam as provas sobre as extinções em massa anteriores.  Também investigam as provas mais recentes sobre extinções específicas (por exemplo, pinguins de Magalhães) causadas pelas alterações climáticas e veem um vídeo da BBC sobre extinções em massa. Em alternativa, os alunos que investigam o Mito 1 seguindo o Inquérito Aberto, recolhem provas de fontes científicas para alterar/ou confirmar a sua hipótese.
            </p>
            
            <p>
                Em ambas as opções de inquérito, os alunos acedem às fontes científicas e chegam às suas conclusões. 
            </p>


            <p><b>Clique nas seguintes hiperligações para obter a visão científica:</b></p>
            <ul class="leading-tight">
                <li>
                    <a href="https://www.nationalgeographic.com/science/article/mass-extinction" target="_blank" rel="noopener noreferrer">Factos e informações sobre a extinção em massa da National Geographic</a>
                </li>
                <li>
                    <a href="https://www.nationalgeographic.com/animals/article/vanishing-what-we-lose-when-an-animal-goes-extinct-feature" target="_blank" rel="noopener noreferrer">What we lose when animals go extinct</a>
                </li>
            </ul>








            

            









            <hr id="myth-2" class="mt-10 mb-40" />
            <h2 id="section-6">
                <span class="text-rose-400">Mito 2:</span> Mito 2: Espécies/organismos podem adaptar-se às Alterações Climáticas.
            </h2>

            <p>
                A Terra tem uma história de 4,54 mil milhões de anos. As condições climáticas que prevaleciam de tempos em tempos no planeta mudaram. Assim, as espécies/organismos que vivem na terra foram obrigadas a adaptar-se às novas condições para sobreviver e se preservarem. Desta forma, surgiu a evolução da espécie.
            </p>
            <p>
                As plantas e os animais já se adaptaram várias vezes a condições adversas (mudanças climáticas, quedas de meteoritos, erupções vulcânicas, etc.). Isto torna-os capazes de se adaptarem ao aumento das temperaturas e à situação a que hoje chamamos alterações climáticas. Por outras palavras, as espécies são naturalmente capazes de sobreviver em novas condições.
            </p>
            <p>
                <a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a>
            </p>


            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Visão Científica considerando o Mito 2:</h3>
                    <p class="text-2xl">
                        <i>“Nem todas as espécies se podem adaptar às alterações climáticas.  Algumas espécies (por exemplo, as aves) podem adaptar-se às alterações climáticas de diferentes formas (por exemplo, alterar a época de migração ou de reprodução).  No entanto, nem todas as espécies (por exemplo, os mamíferos) o podem fazer.  Além disso, nem todos os tipos de adaptações podem ser conseguidos rapidamente (por exemplo, alterar as características morfológicas).”</i>
                    </p>
                    <p>
                        De um modo geral, a evolução nem sempre pode acontecer demasiado depressa - por vezes é um processo mais lento. Por outras palavras, a taxa de adaptação é insuficiente (Visser, 2008).
                    </p>
                </div>
            </UiCardInfo>

            <p>
                Os alunos que investigam o Mito 2 durante a opção de Inquérito Orientado estudam evidências sobre como as espécies se adaptam às alterações climáticas (por exemplo, o caso dos corais), envolvem-se numa experiência específica sobre a massa dos corais e estudam provas recentes sobre o efeito das alterações climáticas nos mamíferos. Os alunos acedem às fontes científicas e tiram as suas conclusões. Em alternativa, os alunos que investigam o Mito 2 seguindo o Inquérito Aberto, recolhem evidências de fontes científicas para alterar / ou confirmar a sua hipótese. 
            </p>
            <p>
                Em ambas as opções de inquérito, os alunos acedem às fontes científicas e apresentam as suas conclusões.
            </p>


            <p><b>Clique na seguinte hiperligação para obter a vista científica:</b></p>
            <ul class="leading-tight">
                <li>
                    <a href="https://www.nationalgeographic.com/environment/article/many-animals-can-adapt-climate-change-just-not-fast-enough-" target="_blank" rel="noopener noreferrer">Some animals can adapt to climate change—just not fast enough</a>
                </li>
                <li>
                    <b>Visser, M. E.</b> (2008). Keeping up with a warming world; assessing the rate of adaptation to climate change. Proceedings of the Royal Society B: Biological Sciences, 275(1635), 649-659.
                </li>
            </ul>













            <hr id="myth-3" class="mt-10 mb-40" />
            <h2 id="section-7">
                <span class="text-rose-400">Mito 3:</span> A ciência das alterações climáticas não é credível.
            </h2>


            <p>
                As estações meteorológicas estão localizadas em zonas onde os dados recolhidos não são representativos das alterações climáticas e, por conseguinte, não são fiáveis para o estudo do clima global. Os cientistas têm como alvo o terrorismo global para obterem os dados que criam nas condições que pretendem.
            </p>

            <p>
                <i>"Encontrámos estações [meteorológicas dos EUA] localizadas junto aos exaustores de aparelhos de ar condicionado, rodeadas por parques de estacionamento e estradas de asfalto, em telhados escaldantes e perto de passeios e edifícios que absorvem e irradiam calor."</i> (Watts 2009)
                <br />
                <a href="https://skepticalscience.com/surface-temperature-measurements-basic.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/surface-temperature-measurements-basic.htm</a>
            </p>


            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Visão científica considerando o mito 3:</h3>
                    <p class="text-2xl">As evidências relacionadas com as alterações climáticas provêm de décadas de investigação intensiva e baseiam-se em observações, experiências de campo e de laboratório e simulações de modelos (Higgins, 2019).  É arbitrário acreditar que os dados científicos sobre as alterações climáticas não são fiáveis.</p>
                </div>
            </UiCardInfo>

            <p>Os alunos que investigam o Mito 3 durante a opção de Inquérito Orientado estão a estudar provas específicas (por exemplo, a localização das estações de observação e as medições) provenientes da organização NOAA, a fim de criticarem por si próprios se essas provas são fiáveis ou não.  Em alternativa, os alunos que investigam o Mito 3 seguindo o Inquérito Aberto, recolhem provas de fontes científicas para alterar/ou confirmar a sua hipótese.</p>
            <p>Em ambas as opções de investigação, os alunos acedem às fontes científicas e chegam às suas conclusões.</p>


            <p><b>Clique na seguinte hiperligação para obter a vista científica:</b></p>
            <ul class="leading-tight">
                <li>
                    <a href="https://www.ametsoc.org/ams/assets/File/Climate_Assessment_Credibility_10-2019.pdf" target="_blank" rel="noopener noreferrer">Climate_Assessment_Credibility_10-2019.pdf (ametsoc.org)</a>
                </li>
                <li>
                    <a href="https://gml.noaa.gov/" target="_blank" rel="noopener noreferrer">NOAA ESRL Global Monitoring Laboratory</a>
                </li>
            </ul>
















            <hr id="myth-4" class="mt-10 mb-40" />
            <h2 id="section-8"><span class="text-rose-400">Mito 4:</span> O aumento da temperatura é para sempre.</h2>
            
            <p><i>"Já agora, se vão votar em alguma coisa, votem no aquecimento. Menos mortes devido ao frio, regiões mais habitáveis, colheitas maiores, épocas de crescimento mais longas. Isso é bom. O aquecimento ajuda os pobres."</i> (John MacArthur)</p>

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
                    <h3 class="mt-6 pt-3 mb-10">Visão Científica considerando o Mito 4:</h3>
                    <p class="text-2xl">O Mito 4 baseia-se apenas na afirmação de John MacArthur. A evidência científica relata exatamente o contrário. As alterações climáticas (calor) afectam positivamente o número de mortes humanas. As alterações climáticas são uma das razões das mudanças globais que afectam a sociedade, o ambiente, a economia e a saúde pública.</p>
                </div>
            </UiCardInfo>

            <p>Os alunos que investigam o Mito 4 durante a opção de Inquérito Orientado estudam provas específicas da Organização Mundial de Saúde sobre o aumento da temperatura e as mortes humanas, provas recentes sobre mortes humanas afectadas pelas alterações climáticas, fazem uma investigação experimental sobre o aumento da temperatura e a terra utilizada para habitação ou cultivo, etc. Os alunos acedem à fonte científica e tiram as suas conclusões. Em alternativa, os alunos que investigam o Mito 4 seguindo o Inquérito Aberto, recolhem evidências de fontes científicas para alterar/ou confirmar a sua hipótese.</p>
            <p>Em ambas as opções de inquérito, os alunos acedem às fontes científicas e apresentam as suas conclusões.</p>

            <p><b>Clique nas seguintes hiperligações para ver as fontes científicas:</b></p>
            <ul class="leading-tight">
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
            <h2 id="section-9"><span class="text-rose-400">Mito 5:</span> Não há correlação entre o CO₂ e a temperatura.</h2>
            
            <p>
                <i>"Foi a industrialização do pós-guerra que causou o rápido aumento das emissões globais de CO₂, mas, em 1945, quando começou, a Terra já estava numa fase de arrefecimento que começou por volta de 1942 e continuou até 1975. Com 32 anos de aumento rápido das temperaturas globais e apenas um pequeno aumento das emissões globais de CO₂, seguidos de 33 anos de arrefecimento lento das temperaturas globais com aumentos rápidos das emissões globais de CO₂, foi enganador para o IPCC afirmar que as emissões de CO₂ eram as principais responsáveis pelo aquecimento global observado no século XX."</i>
                <br />
                (<a href="https://archive.md/q3Tim" target="_blank" rel="noopener noreferrer">Norm Kalmanovitch</a>)
                <br />
                <a href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
            </p>

            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Visão Científica considerando o Mito 5:</h3>
                    <p class="text-2xl">
                        <i>“Os dados paleoclimáticos dos últimos 800.000 anos ou mais mostram que a ligação entre a temperatura e o CO₂ está bem estabelecida. Os cientistas descobriram o papel do CO₂ no aquecimento do planeta em meados do século XIX”, observou James Renwick, Professor da Victoria University of Wellington, numa revisão anterior de uma afirmação semelhante. “Ao longo dos últimos 2,6 milhões de anos, o período das recentes eras glaciares, o dióxido de carbono subiu e desceu a par da temperatura, atingindo o mínimo de cerca de 180 partes por milhão num profundo "máximo glaciar" e um pico de cerca de 280 partes por milhão nos períodos interglaciares mais quentes, afirmou na revisão. “Se recuarmos mais, os níveis de CO₂ eram certamente mais elevados do que atualmente, mas as temperaturas também o eram”. Os cientistas estão confiantes na conclusão de que o aumento das concentrações de CO₂ está a provocar o aumento da temperatura da Terra. À medida que o CO₂ e outros gases com efeito de estufa são emitidos para a atmosfera, retêm mais energia do sol, provocando o aquecimento. “É inequívoco que a influência humana aqueceu a atmosfera, os oceanos e a terra”, afirma o IPCC no seu Sexto Relatório de Avaliação.</i>
                    </p>
                </div>
            </UiCardInfo>
            
            <p>
                Os alunos que investigam o Mito 5 durante a opção de inquérito Orientado estão a estudar provas sobre como o carbono afeta o clima e a vida na Terra. Também se envolvem num procedimento experimental para investigar como o dióxido de carbono afeta a temperatura na Terra. Acedem a essas fontes científicas e chegam às suas conclusões finais. Em alternativa, os alunos que investigam o Mito 5 seguindo o Inquérito Aberto, recolhem evidências de fontes científicas para alterar/ou confirmar a sua hipótese.
                <br />
                Em ambas as opções de inquérito, os alunos acedem às fontes científicas e apresentam as suas conclusões.
            </p>

            <p><b>Clique nas seguintes hiperligações para ver as fontes científicas:</b></p>
            <ul class="leading-tight">
                <li>
                    <a href="https://climatefeedback.org/claimreview/link-between-co2-earth-temperature-well-established-despite-claims-fox-news-tom-harris/" target="_blank" rel="noopener noreferrer">https://climatefeedback.org/claimreview/link-between-co2-earth-temperature-well-established-despite-claims-fox-news-tom-harris/</a>
                </li>
                <li>
                    <a href="https://cires.colorado.edu/outreach/resources/lesson/how-does-increase-co2-cause-increase-temperature" target="_blank" rel="noopener noreferrer">https://cires.colorado.edu/outreach/resources/lesson/how-does-increase-co2-cause-increase-temperature</a>
                </li>
            </ul>



            








            <hr id="myth-6" class="mt-10 mb-40" />
            <h2 id="section-10"><span class="text-rose-400">Mito 6:</span> As ações destinadas a atenuar as alterações climáticas tornarão as pessoas mais pobres.</h2>

            <p>
                <i>"Já agora, se vão votar em alguma coisa, votem no aquecimento. Menos mortes devido ao frio, regiões mais habitáveis, colheitas maiores, épocas de crescimento mais longas. Isso é bom. O aquecimento ajuda os pobres"</i>
                <br />
                (John MacArthur)
                <br />
                <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s</a>
            </p>

            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Visão Científica considerando o Mito 6:</h3>
                    <p class="text-2xl">
                        A pobreza aumenta com as alterações climáticas e não com as ações para as mitigar.
                    </p>
                    <p class="text-2xl">
                        <i>“Os impactos das alterações climáticas e a vulnerabilidade das comunidades pobres às alterações climáticas variam muito, mas, em geral, as alterações climáticas sobrepõem-se às vulnerabilidades existentes. As alterações climáticas reduzirão ainda mais o acesso à água potável, afetarão negativamente a saúde das pessoas pobres e constituirão uma ameaça real à segurança alimentar em muitos países de África, da Ásia e da América Latina. Em algumas zonas onde as opções de subsistência são limitadas, onde a diminuição das colheitas ameaça os que já pouco ou nenhum acesso têm a comida ou onde se prevê a perda de terreno nas zonas costeiras, a migração poderá ser a única solução. Os custos macroeconómicos dos impactos das alterações climáticas são altamente incertos, mas muito provavelmente têm o potencial de ameaçar o desenvolvimento em muitos países. Por conseguinte, a tarefa que se avizinha consiste em aumentar a capacidade de adaptação das comunidades e países pobres afetados.</i>
                        <br />
                        Esta decisão focada na adaptação é deliberada e é tomada com o entendimento de que a adaptação não pode substituir os esforços de atenuação. A magnitude e o ritmo das alterações climáticas dependerão fortemente dos esforços para reduzir as concentrações de gases com efeito de estufa (GEE) na atmosfera. Quanto mais elevadas forem as concentrações de GEE, maior será a probabilidade de danos irreversíveis e graves para os sistemas humanos e biológicos. Por conseguinte, a adaptação é apenas uma parte da solução. Atenuar as alterações climáticas através da limitação das concentrações de gases com efeito de estufa na atmosfera é a outra parte indispensável."
                    </p>
                </div>
            </UiCardInfo>

            <p>
                Os alunos que investigam o Mito 6 durante a opção de Inquérito Orientado estudam evidências sobre os benefícios económicos da mudança para a utilização de eletricidade renovável, os efeitos iminentes da utilização de diferentes fontes de energia e, finalmente, a informação dada sobre os empregos que resultarão da exploração de fontes de energia renováveis. Os alunos acedem a essas evidências e tiram as suas conclusões. Em alternativa, os alunos que investigam o Mito 6 seguindo o Inquérito Aberto, recolhem evidências de fontes científicas para alterar/confirmar a sua hipótese.
                <br />
                Em ambas as opções de inquérito, os alunos acedem às fontes científicas e apresentam as suas conclusões.
            </p>


            <p><b>Clique nas seguintes hiperligações para ver as fontes científicas:</b></p>
            <ul class="leading-tight">
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










            <hr id="myth-7" class="mt-10 mb-40" />
            <h2 id="section-11">Myth 7: O clima da Terra sempre mudou e agora está a acontecer a mesma coisa.</h2>

            <p>
                <i>
                    “O clima está sempre a mudar. Já tivemos eras glaciares e períodos mais quentes em que foram encontrados crocodilos em Spitzbergen. As eras glaciares ocorreram num ciclo de cem mil anos nos últimos 700 mil anos, e houve períodos anteriores que parecem ter sido mais quentes do que o atual, apesar de os níveis de CO₂ serem mais baixos do que são agora. Mais recentemente, tivemos o período quente medieval e a pequena idade do gelo”
                </i>
                <br />
                (<a href="http://www.quadrant.org.au/blogs/doomed-planet/2009/07/resisting-climate-hysteria" target="_blank" rel="noopener noreferrer">Richard Lindzen</a>)
                <br />
                <a href="https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/climate-change-little-ice-age-medieval-warm-period.htm</a>
            </p>
            
            
            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Visão Científica considerando o Mito 7:</h3>
                    <p class="text-2xl">
                        <i>“As maiores variações climáticas à escala global no passado geológico recente da Terra são os ciclos da idade do gelo, que são períodos glaciares frios seguidos de períodos quentes mais curtos. Os últimos destes ciclos naturais têm-se repetido aproximadamente a cada 100 000 anos. O CO₂ aumentou mais de 40% apenas nos últimos 200 anos, em grande parte desde a década de 1970, contribuindo para a alteração humana do orçamento energético do planeta que, até à data, aqueceu a Terra em cerca de 1 °C (1,8 °F). Se o aumento do CO₂ continuar sem controlo, pode esperar-se um aquecimento da mesma magnitude que o aumento da idade do gelo até ao final deste século ou pouco depois. Esta velocidade de aquecimento é mais de dez vezes superior à do final de uma idade do gelo, a mais rápida mudança natural sustentada conhecida à escala global”</i>
                    </p>
                </div>
            </UiCardInfo>

            <p>
                Os alunos que investigam o Mito 7 durante a opção de Inquérito Orientado estão a estudar a temperatura na Terra (evidência da NASA) e comparam a mudança de temperatura de vinte em vinte anos. Descobrem os maiores aumentos de temperatura e registam informações específicas sobre eles. Os alunos acedem à fonte científica e tiram as suas conclusões. Em alternativa, os alunos que investigam o Mito 7 seguindo o Inquérito Aberto, recolhem evidências de fontes científicas para altear / ou confirmar a sua hipótese.
                <br />
                Em ambas as opções de inquérito, os alunos acedem às fontes científicas e apresentam as suas conclusões.
            </p>

            <p>
                Clique nas seguintes hiperligações para ver as fontes científicas:
            </p>

            <ul class="leading-tight">
                <li>
                    <a href="https://royalsociety.org/topics-policy/projects/climate-change-evidence-causes/question-6/" target="_blank" rel="noopener noreferrer" class="break-all">
                        https://royalsociety.org/topics-policy/projects/climate-change-evidence-causes/question-6/
                    </a>
                </li>
            </ul>
 


        </section>
    </div>
</template>