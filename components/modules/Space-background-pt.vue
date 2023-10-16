<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="space-bg-pt" />
        </ClientOnly>



        <section class="e-article" lang="pt" style="hyphens: auto;">
            <Icon name="openmoji:astronaut" class="float-right text-[5em]" />
            <h1 class="mb-0">Espaço</h1>
            <h5 class="font-normal uppercase leading-tight">Informação científica de base</h5>
        
            
            <section id="s-1">
                <h2 id="s-1-title">Introdução</h2>
            
                <p>
                    A Era Espacial começou com o lançamento do Sputnik 1 em 1957 e atingiu inegavelmente o seu clímax em 1969, quando o homem deu o primeiro passo na Lua. A exploração espacial foi impulsionada pela concorrência entre dois países, os EUA e a URSS - líderes dos blocos capitalista e socialista. Assim, a exploração espacial esteve na linha da frente da concorrência entre dois sistemas sociais diferentes. 
                </p>
                <p>
                    Atualmente, as empresas privadas iniciaram vastas atividades espaciais e criaram a sua própria arquitetura de satélites em torno do nosso planeta (ver <a href="https://en.wikipedia.org/wiki/Starlink" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Starlink</a>) para fins de comunicação e navegação comerciais. Os satélites e as tecnologias espaciais ajudam os aviões a voar em segurança num espaço aéreo congestionado, os navios a navegar nos oceanos e a aumentar a sua eficiência e as tecnologias do quotidiano, como os caixas automáticos, a televisão por satélite e os sistemas de navegação por satélite para automóveis. A tecnologia espacial já está a ajudar-nos a combater as alterações climáticas na Terra, monitorizando as emissões em diferentes sectores da economia e medindo as emissões globais de carbono. No entanto, sempre houve problemas quando as novas tecnologias são implantadas na Terra sem o devido cuidado e escrutínio. A poluição espacial por detritos espaciais é uma questão de longo prazo que precisa de ser devidamente compreendida e abordada através de uma regulamentação sólida e aplicável. Temos de compreender que o espaço - tal como o nosso planeta - precisa de ser protegido para as gerações futuras.
                </p>
                <p>
                    É inegável que a tecnologia espacial faz parte da nossa vida quotidiana. No entanto, a investigação mostra (Inmarsat, 2022) que a maioria das pessoas não parece compreender o papel que o espaço já desempenha na nossa vida quotidiana, nem o seu potencial para proporcionar um futuro melhor para a humanidade. Das 20 000 pessoas inquiridas em 11 países, apenas 8% associam o espaço a satélites de conetividade e comunicação e apenas 38% gostariam de saber mais sobre ele. A sensação de medo em relação ao espaço foi esmagadora, com 97% a considerá-lo uma ameaça. As suas principais preocupações são os detritos espaciais e as colisões, a poluição do espaço e os danos na atmosfera da Terra. Os mais jovens estão mais entusiasmados com o potencial do espaço do que os mais velhos. Do mesmo modo, os jovens tendem a desejar saber mais sobre o espaço. Este módulo pretende contribuir para este objetivo.
                </p>
            </section>



            <section id="s-2">

                <h2 id="s-2-title">
                    Como é que os satélites se deslocam à volta da Terra: Velocidades e altitudes
                </h2>

                <p>
                    Quando um foguete com satélite é lançado da superfície da Terra, precisa atingir uma velocidade de pelo menos 7,9 quilômetros por segundo para chegar ao espaço. Isso é chamado de primeira velocidade cósmica necessária para alcançar o equilíbrio entre a atração da gravidade no satélite e a inércia do movimento do satélite - a tendência do satélite de continuar. Se o satélite for muito lento, a gravidade o puxará de volta para a Terra. Na velocidade orbital correta, a gravidade equilibra exatamente a inércia do satélite, puxando para baixo em direção ao centro da Terra apenas o suficiente para manter o caminho do satélite curvando-se ao redor da superfície da Terra, em vez de voar em linha reta. (Orbitar algo é cair para sempre em torno desse objeto. A lua ao redor da Terra, a Terra ao redor do sol, o sistema solar ao redor do centro da Via Láctea.) 
                </p>
                <p>
                    A velocidade orbital do satélite depende de sua altitude acima da Terra. Quanto mais próximo da Terra, mais rápida a velocidade orbital necessária. A uma altitude de 200 quilômetros, a velocidade orbital necessária é de cerca de 7,6 km/s (27.400 km/h). Para manter uma órbita de 35.786 quilômetros acima da Terra, o satélite deve orbitar a uma velocidade de cerca de 3,13 km/s (11.300 km/h). Essa velocidade orbital e distância permitem que o satélite faça uma revolução em 24 horas. Como a Terra também gira uma vez a cada 24 horas, um satélite nessa altitude permanece em uma posição fixa em relação a um ponto na superfície da Terra. Esse tipo de órbita é chamado de "geoestacionário". Órbitas geoestacionárias são ideais para satélites meteorológicos e satélites de comunicações.
                </p>
                <p>
                    Em geral, quanto maior a órbita, mais tempo o satélite pode permanecer em órbita. Em altitudes mais baixas, um satélite encontra traços da atmosfera da Terra, o que cria arrasto. O arrasto faz com que a órbita decaia até que o satélite caia de volta na atmosfera e queime. Em altitudes mais elevadas, onde o vácuo do espaço é quase completo, quase não há arrasto e um satélite como a lua pode permanecer em órbita por séculos.
                </p>
                <p>
                    Os satélites podem ser classificados com base em sua altura acima da superfície da Terra.
                </p>
                <ul>
                    <li>
                        <b>Órbitas baixas da Terra (LEO)</b> — Os satélites LEO ocupam uma região do espaço de cerca de 180 quilômetros a 2.000 quilômetros acima da Terra. Os satélites que se movem perto da superfície da Terra são ideais para fazer observações, para fins militares e para recolher dados meteorológicos.
                    </li>
                    <li>
                        <b>Órbitas geossíncronas (GEO)</b> – os satélites GEO orbitam a Terra a uma altitude de cerca de 36.000 quilômetros ou mais e seu período orbital é o mesmo que o período de rotação da Terra: 24 horas. Incluídos nesta categoria estão os satélites geoestacionários (GSO), que permanecem em órbita acima de um ponto fixo na Terra. Os satélites geoestacionários precisam voar acima do equador da Terra para permanecer em um ponto fixo acima da Terra. Várias centenas de satélites de televisão, comunicações e meteorológicos usam órbitas geoestacionárias.

                    </li>
                    <li>
                        <b>Órbitas médias da Terra (MEO)</b> — Esses satélites estacionam entre os voos baixos e altos, de cerca de 2.000 quilômetros a 36.000 quilômetros. Satélites de navegação, como os usados pelo GPS, funcionam bem nessa altitude.
                    </li>
                </ul>

                <UiContentImage src="https://evidence.onkel.ee/assets/space__leo-geo-satellite.webp" credits="(Zhang et al, 2019) https://www.researchgate.net/publication/336166223_Efficient_topology_control_for_time-varying_spacecraft_networks_with_unreliable_links" :elevated="true">
                    <template #caption>
                        <b>Figura 1.</b> Hybrid LEO/GEO arquitetura de satélite (Zhang et al, 2019)
                    </template>
                </UiContentImage>

                <p>
                    <a href="https://www.geospatialworld.net/videos/how-many-satellites-are-orbiting-around-earth-in-2022/" target="_blank" rel="noopener noreferrer">Quantos satélites orbitam a Terra?</a>
                </p>

            </section>




            <section id="s-3">
                <h2 id="s-3-title">
                    Foguetes
                </h2>

                <p>
                    Um foguete fornece os meios para acelerar uma espaçonave. Do ponto de vista da física, o foguete funciona por causa da lei da conservação do momento linear. A lei da conservação do momento linear é muito importante na física. O momento é definido como a massa de um objeto vezes a sua velocidade. Um foguete move-se no espaço porque os gases recebem impulso quando são expelidos pelo motor do foguete. À medida que os gases de escape vão numa direção, o foguete vai na outra para manter o momento total do sistema constante. Essa mudança de momento dos gases dá ao foguete o "empurrão" para seguir em frente. Chamamos esse empurrão de empuxo do foguete, ou seja, a força exercida sobre o foguete. Um foguete cria impulso expelindo massa. O veículo é acelerado na direção oposta. Este princípio geral de movimento é o mesmo que para foguetes de água.
                </p>

                <h3>
                    <span class="text-rose-400">Mito:</span> O foguete precisa de ar para empurrar.
                </h3>

                <p>
                    A força que causa a aceleração do foguete também pode ser explicada usando a 3ª lei de Newton, que afirma que para cada ação (força) na natureza há uma reação igual e oposta. Em outras palavras, as forças resultam de interações. Um foguete está empurrando os gases dentro dele. Como esses gases são empurrados em uma direção, há uma força de reação que empurra o foguete na outra direção. Para seu movimento, o foguete não precisa de atmosfera.
                </p>
                <p>
                    Atualmente, a Europa e o Japão estão desenvolvendo veículos de lançamento de baixo custo e alta eficiência. Além disso, muitas start-ups em todo o mundo estão desenvolvendo veículos de lançamento ultrapequenos capazes de lançar nanosatélites.
                </p>
                <p>
                    A Coreia do Sul provou em 2022 a capacidade de lançar foguetes espaciais usando tecnologia doméstica.
                </p>

                <UiContentImage src="https://evidence.onkel.ee/assets/space__countries-rocket-capability.webp" credits="Buchholz / Statista - https://www.statista.com/chart/27792/countries-capable-of-launching-space-rockets/" :elevated="true">
                    <template #caption>
                        <b>Figura 2.</b> História da capacidade de lançamento de foguetes em órbita (Buchholz/Statista)
                    </template>
                </UiContentImage>

                <p>
                    Muitos países diferentes e empresas privadas estão agora ativas no espaço, e grande parte do mundo depende de serviços baseados no espaço. No entanto, devemos garantir que políticas robustas sejam implementadas para preservar a segurança e a sustentabilidade da exploração espacial.
                </p>
            </section>






            <section id="s-4">
                <h2 id="s-4-title">
                    Humanos no espaço
                </h2>

                <p>
                    O primeiro ser humano no espaço foi o cosmonauta soviético Yuri Gagarin, que fez uma órbita ao redor da Terra em 12 de abril de 1961, em um voo que durou 108 minutos. Pouco mais de três semanas depois, a NASA lançou o astronauta Alan Shepard ao espaço, não em um voo orbital, mas em uma trajetória suborbital – um voo que vai para o espaço, mas não dá uma volta completa na Terra. O voo suborbital de Shepard durou pouco mais de 15 minutos.
                </p>

                <p>
                    Atualmente, programas comerciais são estabelecidos para o voo suborbital a uma altura de cerca de 100 km sobre a superfície da Terra (consulte  
                    <br />
                    <a href="https://www.spacex.com/" target="_blank" rel="noopener noreferrer">https://www.spacex.com/</a>, 
                    <br />
                    <a href="https://www.blueorigin.com/" target="_blank" rel="noopener noreferrer">https://www.blueorigin.com/</a>, 
                    <br />
                    <a href="https://www.virgingalactic.com/" target="_blank" rel="noopener noreferrer">https://www.virgingalactic.com/</a>). 
                </p>

                
                

                <UiCardInfo icon="mdi:comment-quote-outline" theme="blue-500">
                    <p class="font-Body">
                        Jan Wörner, o Diretor Geral da Agência Espacial Europeia (ESA) deu os seguintes argumentos sobre <a href="https://ec.europa.eu/research-and-innovation/en/horizon-magazine/qa-human-spaceflight-risk-worth-taking-says-esa-head" target="_blank" rel="noopener noreferrer"> importância de missões humanas no espaço</a>:
                    </p>
                    <div class="italic" style="font-size:120%">
                        <p>
                            Com astronautas no espaço, podemos fazer coisas que não podemos fazer com robôs. Não podemos medir a pressão sanguínea de um robô e o sistema de humor de um robô. Recebemos muitas informações dos astronautas como sendo a própria experiência a ser usada na Terra. E o melhor é quando as capacidades robóticas são mescladas com as atividades humanas. As missões humanas têm vantagens específicas e condições de fronteiras específicas. As missões robóticas são muito mais baratas do que qualquer voo espacial humano. Alguém poderia dizer 'em vez de fazer um voo espacial humano, fazemos 10 missões robóticas'. Estou convencido de que devemos fazer as duas coisas. Não é nada caro. Na ESA gastamos (o equivalente a) cerca de um euro – por missão espacial humana por ano – por cidadão, portanto uma quantia muito pequena.
                        </p>
                        <p>
                            Há Sempre riscos em voos espaciais tripulados, mas se não corrermos riscos, não teremos mais desenvolvimento. Faz parte do nosso entendimento arriscar para ir mais longe. Isso está em cada um e em tudo que fazemos na vida. É um equilíbrio entre risco e oportunidade. Acredito que o voo espacial humano é com certeza muito difícil e muito perigoso, mas também vale a pena correr o risco. Está na natureza dos humanos.
                        </p>
                        <p class="font-Body text-sm text-right">
                            (10 de abril de 2020, ec.europa.eu)
                        </p>
                    </div>
                </UiCardInfo>

                <h3>
                    ISS e novas estações espaciais
                </h3>

                <p>
                    A Estação Espacial Internacional (ISS) foi lançada em 1998 e desenvolveu-se gradualmente. A Estação Espacial Internacional de 450 toneladas tem mais de 837 metros cúbicos de espaço pressurizado – espaço suficiente para sua tripulação de seis pessoas e uma vasta gama de experiências científicas.
                </p>
                <p>
                    A ISS costuma manter uma órbita com altitude média de 400 quilômetros acima da Terra. Mas devido à resistência atmosférica, a estação pode perder altitude até 100 metros por dia. Portanto, ajustes regulares de órbita são necessários, geralmente cerca de uma vez por mês. Estas são chamadas de manobras de recarga ou reboost e são feitas usando os motores do Módulo de Serviço Zvezda ou uma espaçonave visitante. Não há um cronograma de recarga fixo, porque a densidade da atmosfera da Terra muda constantemente, dependendo da quantidade de energia que o Sol fornece. Portanto, a velocidade de descida não é um valor constante. Mas a ISS desce para a Terra mais rapidamente do que outros satélites em altitude semelhante devido ao seu enorme tamanho e área de superfície. A ISS orbita a Terra em aproximadamente 93 minutos, completando 15,5 órbitas por dia. Podemos seguir a trilha da ISS com a ajuda de <a href="https://spotthestation.nasa.gov/tracking_map.cfm" target="_blank" rel="noopener noreferrer">Live Space Station Tracking Map</a>.
                </p>

                <UiContentImage src="https://evidence.onkel.ee/assets/space__iss.webp" credits="Credits: ESA - European Space Agency (Paolo Nespoli) & NASA Copyright: ESA, CC BY-SA 3.0 IGO / https://www.flickr.com/photos/europeanspaceagency/5811265766" :elevated="true">
                    <template #caption>
                        <b>Figura 3.</b> A Estação Espacial Internacional. 
                    </template>
                </UiContentImage>

                <p>
                    A estação serve como um laboratório de pesquisa em microgravidade e ambiente espacial no qual pesquisas científicas são conduzidas em astrobiologia, astronomia, meteorologia, física e outros campos.
                </p>
                <p>
                    A Europa, trabalhando através da ESA, é atualmente responsável pelo laboratório europeu Columbus na ISS. Columbus é um laboratório multifuncional especializado em pesquisa em física de fluidos, ciência de materiais e ciências da vida. A Europa contribui para o veículo da tripulação Orion da NASA, que servirá como veículo de exploração que levará astronautas ao espaço, fornecerá capacidade de paragem de emergência, sustentará a tripulação durante a viagem espacial e fornecerá reentrada segura a partir de velocidades de retorno do espaço profundo.
                </p>
                <p>
                    A estação espacial Tiangong da China está em órbita e a China também anuncia oportunidades para o turismo espacial. Tiangong (que se traduz por Palácio Celestial) o primeiro posto avançado espacial do país. Ao contrário da Estação Espacial Internacional (ISS), que existe graças a um conglomerado de muitos países e das suas agências espaciais, Tiangong é a única estação espacial nacional independente. A capacidade de criar e sustentar tal estrutura em órbita é um reflexo do poder e influência global total de uma nação. Este é um exemplo de como a ciência espacial se tornou entrelaçada com o desenvolvimento, incluindo a segurança nacional da China, o progresso econômico e suas iniciativas públicas de ciência e educação.
                </p>


                <h3 class="border-l-rose-400 border-l-4 pl-4">
                    <span class="text-rose-400">Três mitos inter-relacionados comuns:</span>
                    <ol class="leading-tight">
                        <li>
                            Ir para o espaço deixa você sem peso 
                        </li>
                        <li>
                            Não há gravidade no espaço 
                        </li>
                        <li>
                            Os astronautas que orbitam a Terra  experimentam gravidade zero porque estão longe da Terra.
                        </li>
                    </ol>
                </h3>

                <p>
                    Ultrapassar os 100 km de altura não o torna magicamente leve. Se estivesse num foguete em aceleração, sentiria muitas vezes a gravidade da Terra. É só quando começa a cair que se sente leve. Os astronautas estão em queda livre enquanto orbitam a Terra, mas são fortemente puxados em direção à Terra.
                </p>
                <p>
                    A gravidade é a atração mútua entre quaisquer objetos que tenham massa. Aqui na Terra, experimentamos a gravidade como sendo o nosso peso, ou seja, a atração entre a nossa própria massa e a Terra. Quando um foguete está no espaço, o veículo e os astronautas carregados por ele ainda sentem a força da gravidade do planeta. Se não houvesse gravidade no espaço, não seria possível orbitar a Terra. Na altitude de 400 km (ISS), a influência gravitacional da Terra é de 8,75 m/s². Isso é apenas cerca de 11% menor do que os 9,81 m/s² sentidos na superfície da Terra.
                </p>
                <p>
                    Na estação espacial, os astronautas (e a própria estação) estão caindo em direção ao centro da Terra, mas como também estão se movendo rapidamente, de lado, continuam errando a Terra. Então, eles estão caindo tecnicamente ao redor da Terra. Os astronautas não têm peso porque não sentem a estação a empurrar de volta. O astronauta está caindo e a espaçonave também. Se ambos estão caindo, não há força de um contra o outro e, portanto, nenhuma sensação de peso. Assim, a ISS e sua tripulação estão em queda livre na órbita.
                </p>
                <p>
                    Em Marte, os astronautas precisariam viver em três oitavos da atração gravitacional da Terra. A gravidade em Marte é 3/8 da da Terra. Mas na jornada entre a Terra e os exploradores de Marte experimentarão total ausência de peso, quando os motores dos foguetes forem desligados.
                </p>

            </section>





            <section id="s-5">
                <h2 id="s-5-title">
                    Poluição ambiental causada pela exploração espacial
                </h2>

                <h3>
                    Poluição de detritos do espaço
                </h3>

                <p>
                    Existem 100 milhões de pedaços de detritos orbitais menores que 1 centímetro, 500.000 pedaços na faixa de 1 a 10 centímetros e aproximadamente 21.000 itens maiores que 10 centímetros.
                </p>
                <p>
                    Detritos orbitais podem vir de muitas fontes:
                </p>
                <ul>
                    <li>
                        Foguetes explodindo – Isso deixa para trás a maior parte dos detritos no espaço.
                    </li>
                    <li>
                        O lapso da mão de um astronauta – Se um astronauta consertar algo no espaço e deixar cair uma chave inglesa, ela perde-se para sempre. A chave então entra em órbita, provavelmente a uma velocidade de quase 10 quilômetros por segundo. Se a chave atingir qualquer veículo que transporte uma tripulação humana, os resultados podem ser desastrosos. Objetos maiores, como uma estação espacial, tornam-se um alvo maior para o lixo espacial e, portanto, correm maior risco.
                    </li>
                    <li>
                        Itens alijados – Partes de recipientes de lançamento, tampas de lentes de câmaras e assim por diante. Os detritos espaciais representam uma ameaça para satélites ativos e em funcionamento adequado e naves espaciais tripuladas (consulte a apresentação visual sobre <a href="https://www.youtube.com/watch?v=yS1ibDImAYU" target="_blank" rel="noopener noreferrer">esse problema</a>.)
                    </li>
                </ul>
                

                <h3>
                    Poluição da atmosfera por partículas durante lançamentos de foguetes
                </h3>

                <p>
                    Os lançamentos de foguetes são parte integrante do nosso mundo. É óbvio que os motores de foguetes emitem poluição na atmosfera, como qualquer forma de propulsão movida a combustão. A poluição causada pelas emissões de foguetes também pode parecer insignificante em comparação com os outros desafios que o mundo enfrenta e os benefícios que a indústria espacial traz para o mundo do século XXI. De fato, a percentagem de combustíveis fósseis queimados pela indústria espacial é apenas cerca de 1% do queimado pela aviação convencional. No entanto, as aeronaves libertam poluentes dentro da troposfera e da estratosfera inferior, enquanto os foguetes estão libertando poluentes desde a superfície da Terra até a mesosfera, e quando a poluição é libertada nas camadas superiores, dura mais tempo do que a terrestre. Atualmente, os foguetes injetam cerca de 1.000 toneladas de fuligem por ano nas camadas superiores intocadas da atmosfera da Terra. Há também muita incerteza quanto à <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021EF002612" target="_blank" rel="noopener noreferrer">efeitos das emissões de foguetes em diferentes camadas da atmosfera</a>.
                </p>

                <p>
                    Rocket Propellant-1, ou RP-1, forma altamente refinada de querosene é um dos combustíveis de foguetes mais populares. Ajudou a lançar foguetes como o Saturn, Delta, Atlas, Soyuz e o Falcon 9 da SpaceX e o foguete lançado horizontalmente da Virgin Orbit no espaço. O RP-1 é popular porque é mais barato, estável à temperatura ambiente e não é perigosamente explosivo. Agora há uma corrida para desenvolver alternativas aos combustíveis existentes, como o RP-1, e o metano líquido parece estar na liderança. Vários novos motores de foguetes, incluindo o Raptor da SpaceX e o motor Prometheus da Agência Espacial Européia, foram projetados para usar esse gás como combustível porque tem um desempenho superior a outros combustíveis, o que significa que o foguete pode ser menor e produzir menos fumo quando é lançado. No entanto, o metano é controverso porque é um dos piores gases no que diz respeito ao aquecimento global. É cerca de 80 vezes mais quente do que o dióxido de carbono ao longo de sua vida.
                </p>

                <p>
                    Mas o que podemos fazer mais para impedir que os escapamentos poluentes das espaçonaves acelerem as mudanças climáticas? Os pesquisadores temem que a indústria espacial tenha pouco incentivo para mudar por causa da ausência de regulamentos, relutância em abandonar tecnologias seguras e comprovadas e o fato de que novos propulsores significam novos motores caros e testes demorados.
                </p>
            </section>




            <section id="s-6">
                <h2 id="s-6-title">
                    Como os humanos experimentam a ausência de peso?
                </h2>

                <p>
                    Após um foguete partir da Terra em cerca de 8 minutos e meio, o motor do foguete desliga, os astronautas entrando no espaço sideral e experimentando a ausência de peso. A ausência de peso é mais corretamente denominada microgravidade. Os astronautas estão realmente em estado de queda livre. O foguete depois de desligar o motor está se movendo horizontalmente com uma velocidade muito alta de cerca de 8 quilômetros por segundo e também cai livremente, contornando a Terra.
                </p>
                <p>
                    Quando as pessoas sentem pela primeira vez a microgravidade, elas têm as seguintes sensações: Náusea, Desorientação, Dor de cabeça, Perda de apetite, Congestão, que é chamada de mal do espaço. Quanto mais tempo ficar em microgravidade, mais os músculos e os ossos enfraquecem. A experiência de centenas de voos espaciais mostra como o corpo humano responde à ausência de peso. Apresentamos a seguir uma descrição de alguns efeitos fisiológicos que seu corpo experimentaria no espaço.
                </p>

                <h3>
                    Doença espacial
                </h3>

                <p>
                    A náusea e a desorientação que  sente são como aquela sensação de aperto no estômago quando experimenta uma queda numa montanha-russa, só que  tem essa sensação constantemente por vários dias. Esta é a sensação de enjôo espacial, ou enjôo do movimento espacial, causada por informações conflituantes que o cérebro recebe dos olhos e dos órgãos vestibulares localizados no ouvido interno.
                </p>
                <p>
                    Os olhos podem ver o caminho para cima e para baixo dentro da cabine. No entanto, como o sistema vestibular depende da força da gravidade para dizer qual o caminho é para cima ou para baixo e em que direção se move, ele não funciona na microgravidade. Assim, os olhos podem dizer ao cérebro que está de cabeça para baixo, mas o cérebro não recebe nenhuma entrada interpretável dos órgãos vestibulares. O cérebro confuso produz náusea e desorientação, que por sua vez podem levar a vômitos e perda de apetite. Felizmente, depois de alguns dias, o cérebro geralmente se adapta à situação confiando apenas nas informações visuais.
                </p>

                <h3>
                    Cara Inchada e Pernas de Pássaro
                </h3>
                <p>
                    Na microgravidade, o rosto parecerá cheio e os seios da face ficarão congestionados, o que pode contribuir para dores de cabeça e também para o enjoo espacial. Sente da mesma forma na Terra quando se curva ou fica de cabeça para baixo, porque o sangue sobe à cabeça.
                </p>
                <p>
                    Na Terra, a gravidade puxa o sangue, fazendo com que volumes significativos se acumulem nas veias de nossas pernas. Depois de encontrar a microgravidade, o sangue muda das pernas para o peito e a cabeça. O rosto tende a ficar inchado e seios faciais incham. A mudança fluida também diminui o tamanho das pernas.
                </p>

                <h3>
                    Mudanças no sangue e fluidos corporais
                </h3>
                <p>
                    Quando o sangue se desloca para o peito, o coração aumenta de tamanho e bombeia mais sangue a cada batida. Os rins respondem a esse aumento do fluxo sanguíneo produzindo mais urina, da mesma forma que fazem depois de beber um copo grande de água. Além disso, o aumento de sangue e fluido diminui a secreção do hormônio antidiurético (ADH) pela glândula pituitária, o que faz com que tenha menos sede. Portanto, não bebe tanta água como na Terra. No geral, esses dois fatores combinam-se para ajudar a livrar o peito e a cabeça do excesso de fluido e, em poucos dias, os níveis de fluido do corpo são menores do que eram na Terra. Embora ainda tenha a cabeça ligeiramente inchada e os seios nasais entupidos, não é tão mau depois dos primeiros dias. Ao retornar à Terra, a gravidade puxará esses fluidos de volta para as pernas e para longe da cabeça, o que fará com que sinta fraqueza ao se levantar. Mas também começará a beber mais e os níveis de fluido voltarão ao normal em alguns dias.
                </p>

                <h3>
                    Músculos fracos
                </h3>
                <p>
                    Quando está em microgravidade, o corpo adota uma postura "fetal" - agacha-se ligeiramente, com os braços e as pernas meio dobrados à sua frente. Nesta posição, não usa muitos os músculos, principalmente os músculos que o ajudam a ficar em pé e manter a postura (músculos anti gravitacionais). A massa dos músculos diminui. Quanto mais tempo ficar no espaço, menos massa muscular terá. Essa perda de massa muscular faz ficar mais fraco, apresentando problemas para voos espaciais de longa duração e no retorno à gravidade da Terra.
                </p>

                <h3>
                    Ossos frágeis
                </h3>
                <p>
                    Na microgravidade, os ossos não precisam sustentar o corpo, então todos os ossos, especialmente os ossos de sustentação de peso nos quadris, coxas e região lombar, são usados muito menos do que na Terra. O resultado é que o tamanho e a massa desses ossos continuam a diminuir enquanto permanecer na microgravidade, a uma taxa de aproximadamente 1% ao mês. Essas mudanças na massa óssea tornam os ossos fracos e mais propensos a quebrar quando retornar à gravidade da Terra. A perda óssea é recuperável após o retorno à Terra.
                </p>
                <p>
                    Além de ossos fracos, a concentração de cálcio no sangue aumenta e os rins devem se livrar do excesso de cálcio, o que os torna suscetíveis à formação de cálculos renais dolorosos.
                </p>
                <p>
                    Para superar parcialmente esses problemas, os astronautas devem se exercitar pelo menos duas horas por dia em máquinas especialmente adaptadas para a ausência de peso (esteira, máquina de remo, bicicleta).
                </p>
            </section>






            <section id="s-7">
                <h2 id="s-7-title">
                    Referências
                </h2>

                <ul class="leading-tight text-sm">
                    <li>
                        5 perigos do voo espacial tripulado. <a class="break-all" href="https://www.nasa.gov/hrp/5-hazards-of-human-spaceflight" target="_blank" rel="noopener noreferrer">https://www.nasa.gov/hrp/5-hazards-of-human-spaceflight</a> 
                    </li>
                    <li>
                        Buchholz, Katharina (2019) Os países capazes de lançar foguetes espaciais. Statista. <a class="break-all" href="https://www.statista.com/chart/27792/countries-capable-of-launching-space-rockets/" target="_blank" rel="noopener noreferrer">https://www.statista.com/chart/27792/countries-capable-of-launching-space-rockets/</a>
                    </li>
                    <li>
                        Harrison, T., Nahmyo, T. (2016). NASA na Segunda Era Espacial: Exploração, Parceria e Segurança. Estudos Estratégicos Trimestralmente. Vol. 10, nº 4 (INVERNO 2016), pp. 2-13. Imprensa da Universidade Aérea <a class="break-all" href="https://www.jstor.org/stable/26271527#metadata_info_tab_contents" target="_blank" rel="noopener noreferrer">https://www.jstor.org/stable/26271527#metadata_info_tab_contents</a>
                    </li>
                    <li>
                        Inmarsat (2022) Qual é o valor do espaço na Terra? <a class="break-all" href="https://www.inmarsat.com/content/dam/inmarsat/corporate/documents/corporate/insights/Inmarsat_Value_of_Space_Report.pdf.gc.pdf" target="_blank" rel="noopener noreferrer">https://www.inmarsat.com/content/dam/inmarsat/corporate/documents/corporate/insights/Inmarsat_Value_of_Space_Report.pdf.gc.pdf</a>
                    </li>
                    <li>
                        Impacto do lançamento de foguetes e das emissões de poluentes atmosféricos de detritos espaciais no ozônio estratosférico e no clima global. <a class="break-all" href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021EF002612" target="_blank" rel="noopener noreferrer">https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021EF002612</a>
                    </li>
                    <li>
                        A Nova Era Espacial: Além da Ordem Global <a class="break-all" href="https://global.upenn.edu/sites/default/files/perry-world-house/The%20New%20Space%20Age%20-%20Beyond%20Global%20Order%20Report.pdf" target="_blank" rel="noopener noreferrer">https://global.upenn.edu/sites/default/files/perry-world-house/The%20New%20Space%20Age%20-%20Beyond%20Global%20Order%20Report.pdf</a>
                    </li>
                    <li>
                        Exploração espacial <a class="break-all" href="https://www.britannica.com/science/space-exploration/Space-applications" target="_blank" rel="noopener noreferrer">https://www.britannica.com/science/space-exploration/Space-applications</a> 
                    </li>
                    <li>
                        Veículo lançador espacial. <a class="break-all" href="https://www.kari.re.kr/eng/sub03_04.do" target="_blank" rel="noopener noreferrer">https://www.kari.re.kr/eng/sub03_04.do</a> 
                    </li>
                    <li>
                        Escritório das Nações Unidas para Assuntos Espaciais Exteriores (UNOOSA). Benefícios do Espaço para a Humanidade <a class="break-all" href="https://www.unoosa.org/oosa/en/benefits-of-space/benefits.html" target="_blank" rel="noopener noreferrer">https://www.unoosa.org/oosa/en/benefits-of-space/benefits.html</a>
                    </li>
                    <li>
                        Zhang Wei, Ma Hong, Wu Tao, Shi Xueshu e Jiao Yiwen (2019) Controle de topologia eficiente para redes de espaçonaves variáveis no tempo com links não confiáveis. Jornal Internacional de Redes de Sensores Distribuídos 2019, vol. 15 (9) <a class="break-all" href="https://www.researchgate.net/publication/336166223_Efficient_topology_control_for_time-varying_spacecraft_networks_with_unreliable_links" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/publication/336166223_Efficient_topology_control_for_time-varying_spacecraft_networks_with_unreliable_links</a>
                    </li>
                    <li>
                        <a class="break-all" href="https://spacenews.com/" target="_blank" rel="noopener noreferrer">https://spacenews.com/</a>
                    </li>
                    <li>
                        <a class="break-all" href="https://www.thespacereview.com/" target="_blank" rel="noopener noreferrer">https://www.thespacereview.com/</a>
                    </li>
                    <li>
                        <a class="break-all" href="https://www.geospatialworld.net/" target="_blank" rel="noopener noreferrer">https://www.geospatialworld.net/</a>
                    </li>
                </ul>
            </section>



        </section>
    </div>
</template>