<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="drugs-bg-en" />
        </ClientOnly>

        <section class="e-article" lang="pt" style="hyphens: auto;">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Drogas</h1>
            <h5 class="font-normal uppercase leading-tight">Informação Científica de Base</h5>
        
            
            <section id="s-1">
                <h2 id="s-1t">Introduction</h2>
                
                <p class="mt-20">
                    Este módulo foca-se principalmente na canábis (também conhecida como marijuana, haxixe ou erva, entre outras designações), que é uma droga psicoativa extraída da planta cannabis. 
                </p>
                <p>
                    No texto abaixo, encontra informação para desmistificar mitos comuns acerca da canábis e clarificar as principais questões que lhes estão associadas (o professor / dinamizador da atividade deve ter estas informações presentes ao dinamizar as sessões).
                </p>
                
                <h4>
                    <a href="#s2">O que é a canábis?</a>
                </h4>
                <ul class="leading-tight">
                    <li class="my-0">
                        <a href="#myth-1">Mito nº 1: A canábis não é assim tão perigosa para a saúde</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth2">Mito nº 2: A maioria dos jovens pode consumir canábis sem problemas</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-3">Mito nº 3. A canábis tem usos medicinais, por isso é uma substância segura para todos</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-4">Mito nº 4: A canábis melhora o humor e a saúde mental </a>
                    </li>
                    <li class="my-0">
                        <a href="#myth5">Mito nº 5: A canábis não provoca dependência</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-6">Mito nº 6: A canábis é uma droga de entrada para outras drogas</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-7">Mito nº 7: Não se pode ter uma overdose de canábis.</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-8">Mito nº 8: O fumo passivo de canábis é seguro</a>
                    </li>
                    <li class="my-0">
                        <a href="#myth-9">Mito nº 9: A canábis está legalizada em Portugal</a>
                    </li>
                </ul>
            </section>







            <section id="s2">
                <h2 id="s2t">What is cannabis?</h2>
            
                <p>
                    <span class="e-term">Canábis</span> (ou marijuana) refere-se a um grupo de três plantas com propriedades psicoativas, conhecidas como Cannabis sativa, Cannabis indica e Cannabis ruderalis. Quando as flores dessas plantas são colhidas e secas, obtém-se uma das drogas mais comuns do mundo. A canábis é composta por mais de 120 compostos, conhecidos como canabinóides. Os dois canabinóides mais conhecidos são o canabidiol (CBD) e o delta-9-tetrahidrocanabinol (THC). O CBD é o segundo composto químico mais prevalente encontrado na cannabis e recentemente tornou-se popular como tratamento alternativo para algumas condições de saúde. Pode ser derivado do <span class="e-term tooltip underline" data-tip="TO termo cânhamo (hemp) é usado para designar canábis que contem 0.3 porcento ou menos de THC">cânhamo</span> ou da canábis. O THC é o principal ingrediente psicoativo da canábis. O THC ativa o sistema de recompensa do cérebro ativando a libertação da dopamina química do <a class="e-term" href="https://nida.nih.gov/publications/research-reports/marijuana/how-does-marijuana-produce-its-effects" target="_blank" rel="noopener noreferrer">cérebro</a>.
                </p>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/drugs__cannabis.webp"
                    credits="Pixabay: https://pixabay.com/photos/marijuana-herbal-cannabis-hemp-5858148/"
                    :elevated="true">
                    <template #caption>
                        <b>Figura 1.</b> Plantas de canábis
                    </template>
                </UiContentImage>
                <p>
                    Talvez nenhuma outra planta cause tanto debate e equívocos públicos como a canábis. O seu uso e popularidade ao longo dos tempos levaram a que fosse considerada um super medicamento por alguns, estigmatizada como mal na sociedade por outros; e muitos outros pontos de vista dentro deste espectro. Na última década, a legalização da droga para uso recreativo em muitos países e a ampla disponibilidade de informações sobre os benefícios aumentaram ainda mais os equívocos públicos. Existe um grande conjunto de informações disponíveis sobre os seus riscos e também sobre os seus benefícios. Muitas vezes, as informações são dadas na Internet sem as devidas referências. Mais à frente, veremos o que os cientistas e os profissionais de saúde têm a dizer sobre os mitos mais comuns sobre o uso de canábis fundamentados em estudos científicos.
                </p>
                <p>
                    More information about the health effects of cannabis can be found from:
                    <a class="break-all" href="https://docs.google.com/document/d/1kxisOjHc0qINFXhWvmdmMAJyjp7V9JmgfWXDhCKeuyk/edit" target="_blank" rel="noopener noreferrer">https://docs.google.com/document/d/1kxisOjHc0qINFXhWvmdmMAJyjp7V9JmgfWXDhCKeuyk/edit</a>
                </p>
            </section>








            <section id="s-3">
                <h2 id="s-3t">Myths about drugs</h2>

                <h3 id="myth-1">
                    <span class="text-rose-400">Mito nº 1:</span> A canábis não é perigosa para a saúde
                </h3>
                <p>
                    Tem sido argumentado que a canábis não é assim tão perigosa para a saúde, ou mesmo que é benéfica. Este mito está amplamente difundido, tendo como principais explicações as ideias de que as outras drogas são muito mais tóxicas e de que a canábis para fins medicinais está a ser usada como medicamento alternativo em vários países.
                </p>
                <p>
                    No entanto, de acordo com evidências científicas, a canábis tem sido associada a muitos impactos negativos na saúde (Figura 2). Os riscos mais importantes incluem doenças mentais <sup><span class="tooltip" data-tip="Paruk S & Burns JK. 2016. Cannabis and mental illness in adolescents: a review. South African Family Practice, 58:sup1, S18-S21.">[3]</span></sup>, doenças cardiovasculares <sup><span class="tooltip" data-tip="Thomas G et al. 2014. Adverse cardiovascular, cerebrovascular, and peripheral vascular effects of marijuana inhalation: what cardiologists need to know. American Journal of Cardiology 113(1):187-190.">[4]</span></sup>, doenças pulmonares <sup><span class="tooltip" data-tip="Joshi M et al. 2014. Marijuana and lung diseases. Current Opinions of Pulmonary Medicine 20(2):173-179.">[5]</span></sup> e cancro dos pulmões e dos testículos <sup><span class="tooltip" data-tip="Joshi M et al. 2014. Marijuana and lung diseases. Current Opinions of Pulmonary Medicine 20(2):173-179.">[6]</span></sup>. Alguns grupos de risco, como os adolescentes e as mulheres grávidas, são especialmente vulneráveis ao uso de canábis. Além disso, o fumo passivo é prejudicial, pois o fumo passivo de canábis é muito semelhante ao fumo do tabaco em termos de propriedades físicas e químicas <sup><span class="tooltip" data-tip="Graves BM et al. 2020. Comprehensive characterization of mainstream marijuana and tobacco smoke. Scientific Reports 10(1):7160.">[7]</span></sup>. O uso de canábis está também relacionado com dependência, aumenta o risco de uso de outras drogas e foram relatadas overdoses.
                </p>
                <UiContentImage elevated src="https://evidence.onkel.ee/assets/drugs__cannabis-medical-effects.webp">
                    <template #caption>
                        <b>Figura 2.</b> Cannabis health effects.
                    </template>
                </UiContentImage>


                <h3 id="myth-2">
                    <span class="text-rose-400">Mito nº 2:</span> A maioria dos jovens pode consumir canábis sem problemas
                </h3>
                <p>
                    Como muitos jovens usam canábis, há uma forte crença de que o seu uso não traz riscos. No entanto, de acordo com diversos estudos, o uso de canábis, especialmente durante a adolescência e início da idade adulta, pode danificar a zona do cérebro associada à aprendizagem e à memória <sup><span class="tooltip" data-tip="Ventura County. 2015. Marijuana and Your Kid’s Brain.” Marijuana in Ventura County: A Gateway for Discussion, Ventura County Behavioral Health. http://venturacountylimits.org.s94613.gridserver.com//resources/article/E413A9/marijuana-and-your-kids-brain-video.">[8]</span></sup>. Alguns estudos sugerem que o uso regular de canábis na adolescência está associado a alterações na conectividade e redução de volume de regiões cerebrais específicas, envolvidas numa ampla gama de funções executivas, como a memória, a aprendizagem e o controle de impulsos, em comparação com pessoas que não usam <sup><span class="tooltip" data-tip="Batalla A et al. 2013. Structural and functional imaging studies in chronic cannabis users: a systematic review of adolescent and adult findings. PloS One 8(2):e55821.">[9]</span></sup>. Igualmente importante, de acordo com estudos, o uso regular de canábis durante a adolescência pode levar a um desempenho escolar pior e a taxas mais altas de abandono escolar <sup><span class="tooltip" data-tip="Fergusson, DM et al. 2010. Cannabis and Educational Achievement: Findings from Three Australian Cohort Studies. Drug and Alcohol Dependence, 110, 3.">[10]</span></sup>. Foi demonstrado que as alterações cerebrais estruturais causadas pelo uso de canábis por adolescentes e jovens adultos são permanentes – os pontos de QI que são perdidos não são recuperados com a idade <sup><span class="tooltip" data-tip="Meier MH et al. 2012. Persistent cannabis users show neuropsychological decline from childhood to midlife. Proceedings of the National Academy of Sciences of the United States of America, 109:E2657-2664">[11]</span></sup>. O risco do consumo de canábis provocar danos é tanto maior quanto menor a idade de início do consumo e quanto maior a frequência de consumo, bem como a dose e a potência da substância <sup><span class="tooltip" data-tip="Fergusson, D. M., Horwood, L. J., & Swain‐Campbell, N. (2002). Cannabis use and psychosocial adjustment in adolescence and young adulthood. Addiction, 97(9), 1123-1135.">[12]</span></sup>. A idade é um factor importante pois o funcionamento cognitivo parece ficar mais prejudicado em adolescentes que são consumidores frequentes do que adultos. <sup><span class="tooltip" data-tip="Gorey, C., Kuhns, L., Smaragdi, E., Kroon, E., & Cousijn, J. (2019).">[13]</span></sup>
                </p>


                <h3 id="myth-3">
                    <span class="text-rose-400">Mito nº 3:</span> Se a canábis tem usos medicinais, então é uma substância segura para todos
                </h3>
                <p>
                    Com base em estudos realizados, as terapias com canabinóides (principalmente contendo CBD) podem ter um papel coadjuvante no controle da ansiedade ou dos distúrbios de stress <sup><span class="tooltip" data-tip="Sharpe L et al. 2020. Cannabis, a cause for anxiety? A critical appraisal of the anxiogenic and anxiolytic properties. Journal of Translational Medicine, 18:374">[14]</span></sup>. No entanto, algumas pesquisas também mostraram que pode produzir sentimentos de ansiedade, pânico, paranóia e psicose. Existem atualmente mais três usos reconhecidos para a canábis ou produtos derivados da canábis: náuseas e vómitos relacionados com quimioterapia, anorexia relacionada com fases avançadas do HIV e alguns tipos raros de epilepsia infantil <sup><span class="tooltip" data-tip="National Academies of Sciences, Engineering, and Medicine, 2017. Therapeutic effects of cannabis and cannabinoids. In The health effects of cannabis and cannabinoids: The current state of evidence and recommendations for research. National Academies Press (US)">[15]</span></sup>. Não há consenso sobre os benefícios para outras situações de saúde, incluindo para doenças psiquiátricas. Está melhor?
                </p>
                <p>
                    Quando aprovada para fins medicinais, a canábis é um produto específico com concentrações fixas de determinados canabinóides, como canabidiol (CBD) e delta-9-tetrahidrocanabinol (THC) (Figura 3). Além disso, tem vindo a ser discutida a importância da relação CBD/THC. Na canábis medicinal, foi demonstrado que a proporção desempenha um papel crucial na melhoria do bem-estar físico e funcional de pacientes com cancro cerebral <sup><span class="tooltip" data-tip="Schloss J et al. 2021. A phase 2 randomised clinical trial assessing the tolerability of two different ratios of medicinal cannabis in patients with high grade gliomas. Frontiers in Oncology, 11:649555.">[16]</span></sup>. Apenas em produtos sujeitos a controlo farmacêutico a concentração e as doses de CBD e THC podem ser reguladas.
                </p>
                <UiContentImage elevated src="https://evidence.onkel.ee/assets/drugs__cannabis-products.webp">
                    <template #caption>
                        <b>Figura 3.</b> Canábis e produtos contendo certas concentrações de canabinóides.
                    </template>
                </UiContentImage>


                <h3 id="myth-4">
                    <span class="text-rose-400">Mito nº 4:</span> A canábis melhora o humor e promove a saúde mental
                </h3>
                <p>
                    É sabido que o THC da canábis deixa quem a consome num estado alterado. Pode levar a que o consumidor se sinta feliz, relaxado, a falar ou rir mais do que o normal. Pode achar que as cores e a música são mais brilhantes e nítidas. Os efeitos exatos sobre o humor variam muito de uma pessoa para outra, mas geralmente as emoções são exageradas de uma forma semelhante aos efeitos de intoxicação por álcool <sup><span class="tooltip" data-tip="Gruber SA et al., 2009. Altered affective response in marijuana smokers: An FMRI study. Drug and Alcohol Dependence, 105(1-2), 139-153.">[17]</span></sup>.
                </p>
                <p>
                    Esses efeitos “positivos” surgem a curto prazo, enquanto o seu uso a longo prazo está associado a um grande número de efeitos negativos sobre a saúde mental. Tal como o álcool, a canábis e os produtos que contêm THC são intoxicantes e podem contribuir para o comprometimento do raciocínio e aumentar a suscetibilidade a problemas de saúde mental, incluindo depressão, insónia e delírio <sup><a class="tooltip" data-tip="National Alliance on Mental Illness (2013) Marijuana and Mental Illness Fact Sheet. Duckworth, K., Freedman, J., reviewers." href="http://www2.nami.org/Content/NavigationMenu/Hearts_and_ Minds/Smoking_Cessation/Marijuana_and_Mental_Illness.htm" target="_blank" rel="noopener noreferrer">[18]</a></sup>. Existe um risco significativo de recaída ou agravamento dos sintomas para indivíduos com transtornos psicóticos <sup><span class="tooltip" data-tip="D’Souza DR. 2015. Medical marijuana: Is the cart before the horse? Journal of the American Medical Association, 313(24), 2431-2432.">[19]</span></sup>. O uso regular de canábis está correlacionado com um risco aumentado e/ou o agravamento dos sintomas em indivíduos com ansiedade, depressão e doença psicótica <sup><span class="tooltip" data-tip="Hill, K. 2015. Medical marijuana for treatment of chronic pain and other medical and psychiatric problems: A clinical review. Journal of the American Medical Association, 313(24), 2474-2483.">[20]</span></sup>. Existem algumas evidências que mostram uma ligação entre o uso de canábis mais forte e doenças psicóticas, incluindo esquizofrenia, mas as evidências ainda são escassas e os mecanismos não são totalmente compreendidos <sup><span class="tooltip" data-tip="Patel S. 2020. The association between cannabis use and schizophrenia: causative or curative? A systematic review. Cureus Journal of Medical Science, 12(7), e9309.">[21]</span></sup>.
                </p>


                <h3 id="myth-5">
                    <span class="text-rose-400">Mito nº 5:</span> A canábis não provoca dependência
                </h3>
                <p>
                    Este mito é baseado no facto de apenas cerca de 9% dos utilizadores de canábis preencherem  os critérios para dependência em algum momento da vida. No entanto, se observarmos as pessoas que começam a usar canábis  na adolescência (quando o cérebro ainda está em desenvolvimento e é bastante vulnerável), verifica-se que têm quatro a sete vezes mais probabilidade de desenvolver um distúrbio do que os adultos <sup><span class="tooltip" data-tip="Winters KC & Lee C-YS. 2008. Likelihood of developing an alcohol and cannabis use disorder during youth: Association with recent use and age. Drug and Alcohol Dependence, 92(1-3), 239-247.">[22]</span></sup>. Dados recentes sugerem que 30% dos indivíduos que usam canábis regularmente podem desenvolver algum grau de perturbação associada ao seu uso <sup><span class="tooltip" data-tip="Hasin DS, et al. 2015. Prevalence of marijuana use disorders in the United States between 2001-2002 and 2012-2013. JAMA Psychiatry, 72(12), 1235-1242.">[23]</span></sup>.
                </p>
                <p>
                    Também foi demonstrado que as variedades atuais de THC são mais fortes, originando dependência fisiológica e síndrome de abstinência, requerendo tratamento específico para abuso de substâncias <sup><span class="tooltip" data-tip="Copeland J, Swift W. 2009. Cannabis use disorder: epidemiology and management. International Review of Psychiatry, 21(2), 96-103.">[24]</span></sup>. Quando utilizadores crónicos de canábis tentam parar abruptamente, os sinais da síndrome de abstinência são comuns: inquietação, irritabilidade, agitação, hiperatividade, insónia, náusea, cólicas, diminuição do apetite, sudorese e aumento dos sonhos <sup><span class="tooltip" data-tip="Bonnet U & Preuss UW. 2017. The cannabis withdrawal syndrome: current insights. Substance Abuse and Rehabilitation, 8, 9-37.">[25]</span></sup>.
                </p>


                <h3 id="myth-6">
                    <span class="text-rose-400">Mito nº 6:</span> Canábis é uma droga de entrada para outras drogas
                </h3>
                <p>
                    Aqui, as evidências são pouco claras e a causalidade não está confirmada, mas observa-se que a maioria das pessoas que usam outras drogas começou com canábis. No entanto, isso não significa que quem usa canábis passará a usar outras drogas, mas uma certa percentagem de utilizadores de canábis irá fazê-lo. Se compararmos a prevalência de consumidores de canábis com consumidores de outras drogas, a canábis é muito mais frequente na maioria dos países <sup><a href="https://www.emcdda.europa.eu/data/stats2021/gps_en" target="_blank" rel="noopener noreferrer">[26]</a></sup>. No entanto, com base apenas na prevalência, não podemos estabelecer conexões entre o uso de longo prazo e a hipótese da porta de entrada para outras drogas.
                </p>
                <p>
                    Um estudo longitudinal de 25 anos descobriu que o uso de canábis está significativamente associado ao abuso e dependência de outras drogas ilícitas, particularmente quando o início é na adolescência <sup><span class="tooltip" data-tip="Fergusson DM, et al. 2006. Cannabis use and other illicit drug use: testing the cannabis gateway hypothesis. Addiction, 101(4), 556-569.">[27]</span></sup>. Dois estudos diferentes com gémeos investigaram se o consumo precoce de canábis tem ou não relação com o abuso ou dependência subsequente de outras drogas ilícitas. Os resultados mostraram um risco duas a cinco vezes maior do gémeo que usava canábis, comparativamente com o que não o fazia <sup><span class="tooltip" data-tip="Lynskey MT, et al. 2003. Escalation of drug use in early-onset cannabis users vs co-twin controls. JAMA, 289(4), 427-433.">[28]</span>, <span class="tooltip" data-tip="Agrawal A et al. 2004. Cannabis and other illicit drugs: comorbid use and abuse/dependence in males and females. Behavior Genetics, 34(3), 217-228.">[29]</span></sup>.
                </p>
                <p>
                    Outra explicação é baseada na neurobiologia cerebral: a diminuição da sensibilidade à recompensa e o aumento da sensibilidade à expectativa sobrecarregam o circuito de controle do cérebro <sup><span class="tooltip" data-tip="Volkow ND, et al. 2010. Addiction: decreased reward sensitivity and increased expectation sensitivity conspire to overwhelm the brain's control circuit. Bioessays, 32(9), 748-755.">[30]</span></sup>. Por outras palavras, os circuitos de memória recompensam a expectativa e aumentam a motivação para consumir a droga. Em conclusão, as provas são contraditórias, mas a associação parece existir para muitos consumidores de canábis.
                </p>


                <h3 id="myth-7">
                    <span class="text-rose-400">Mito nº 7:</span> Não se pode ter uma overdose com canábis
                </h3>
                <p>
                    Não se morre diretamente de canábis, no entanto é possível ter overdose, ficar fisicamente doente (náuseas, vómitos) e experimentar extrema ansiedade, paranóia e psicose de curto prazo (perda de contacto com a realidade). Estes efeitos podem demorar várias horas a desaparecer. Uma overdose de canábis não acontece com frequência, mas o risco existe quando se consomem produtos não regulados, em que não se pode medir com precisão a dosagem e conteúdo de canabinóides. Como a prevalência do consumo de canábis na maioria dos países é muito mais elevada do que em relação a outras drogas, os efeitos secundários da canábis originam muito mais idas às urgências do que outras substâncias <sup><a href=" https://www.samhsa.gov/data/sites/default/files/DAWN2k11ED/DAWN2k11ED/DAWN2k11ED.pdf" target="_blank" rel="noopener noreferrer">[31]</a></sup>.
                </p>
                <p>
                    A overdose também pode resultar no agravamento de uma condição psiquiátrica, particularmente psicose: paranoia, ver e ouvir coisas e pensamentos delirantes. O canabinoide THC da canábis pode piorar esses sintomas, podendo ser necessária medicação antipsicótica para reduzir os sintomas. Um outro motivo para a ida ao serviço de urgência é a Síndrome da Hiperemese por Canabinóides (CHS) <sup><a href="https://my.clevelandclinic.org/health/diseases/21665-cannabis-hyperemesis-syndrome" target="_blank" rel="noopener noreferrer">[32]</a></sup>, uma condição causada pelo consumo prolongado de canábis e que provoca episódios recorrentes de náuseas, vómitos, desidratação e dor abdominal.
                </p>
                <p>
                    A toxicidade aguda por consumo recreativo de canábis foi estudada no Alasca <sup><span class="tooltip" data-tip="Noble MJ et al. 2019. Acute cannabis toxicity. Clinical Toxicology, 57(8), 735-742.">[33]</span></sup>. A  neurotoxicidade é comum após exposições agudas à cannabis. Crianças que estiveram expostas não intencionalmente dentro de casa tiveram, em alguns casos, reações fortemente adversas. Produtos concentrados, como resinas e concentrados líquidos (óleo), foram associados a maior toxicidade do que outros produtos de canábis. Um outro aspeto discutido na literatura científica são os efeitos da canábis medicinal na overdose e mortalidade por opiáceos. Aqui as evidências são realmente mistas e recentemente a associação tem sido questionada <sup><span class="tooltip" data-tip="Shover CL et al. 2019. Association between medical cannabis laws and opioid overdose mortality has reversed over time. Proceedings of the National Academy of Sciences of the United States of America, 116(26), 12624-12626.">[34]</span></sup>.
                </p>
                <p>
                    Em conclusão, a associação parece existir para vários consumidores de canábis; Mas, novamente, estes são estudos de associação e a causalidade não é clara.
                </p>


                <h3 id="myth-8">
                    <span class="text-rose-400">Mito nº 8:</span> O fumo passivo de canábis é seguro
                </h3>
                <p>
                    Como acontece com qualquer outro tipo de fumo passivo <sup><span class="tooltip" data-tip="Graves B.M. et al. 2020. Comprehensive characterization of mainstream marijuana and tobacco smoke. Scientific Reports 10(1):7160.">[35]</span></sup>, as substâncias tóxicas e cancerígenas do fumo passivo de canábis podem ser facilmente inaladas por crianças. Tem muitos produtos químicos, como o fumo do tabaco, incluindo aqueles associados ao cancro de pulmão.
                </p>
                <p>
                    O fumo passivo da canábis também contém THC, o composto responsável pela maioria dos seus efeitos psicoativos. O THC pode ser transmitido a bebés e crianças através do fumo passivo, e as pessoas expostas ao fumo passivo podem experimentar efeitos psicoativos <sup><span class="tooltip" data-tip="Wilson KM, et al. 2017. Detecting biomarkers of secondhand marijuana smoke in young children. Pediatric Research, 81(4), 589-592.">[36]</span></sup>. Estudos recentes encontraram fortes associações entre relatos de ter alguém em casa que consome canábis (por exemplo, um pai, parente ou cuidador) e a criança ter níveis detectáveis de THC <sup><span class="tooltip" data-tip="Moore C, et al. 2011. Cannabinoids in oral fluid following passive exposure to marijuana smoke. Forensic Science International, 212(1-3), 227-230.">[37]</span></sup>. Foi demonstrado que bebés expostos ao fumo passivo correm o risco de desenvolver a síndrome da morte súbita infantil (também conhecida como SIDS) <sup><span class="tooltip" data-tip="Reece-Stremtan S & Marinelli KA. 2015. ABM clinical protocol #21: guidelines for breastfeeding and substance use or substance use disorder, revised 2015. Breastfeeding Medicine, 10(3), 135-141.">[38]</span></sup>.
                </p>
                <p>
                    Considerando esses factos, o fumo passivo de canábis causa riscos à saúde. No entanto, parece ser improvável que afete pessoas que experimentam exposição limitada em ambientes bem ventilados.
                </p>

                <h3 id="myth-8">
                    <span class="text-rose-400">Mito nº 9:</span> A cannabis é legal em Portugal
                </h3>
                <p>
                    O consumo de drogas, incluindo a canábis, é ilegal em Portugal e punido por lei. A lei da descriminalização, Lei nº 30/2000, proíbe e penaliza o consumo de drogas. Descriminalização não significa liberalização, nem tão pouco legalização, a descriminalização significa que o consumo de substâncias ilícitas não é um crime punível com pena de prisão. O consumidor de drogas não é encarado como um criminoso e não vai para a prisão pelo ato de consumir.
                </p>
                <p>
                    Contudo, sendo o consumo de drogas ilegal, é uma contra-ordenação, punível com as medidas e sanções adequadas ao perfil do consumidor indiciado, como a coima (pagamento de uma multa), proibição de se ausentar para o estrangeiro, apreensão de objectos pessoais, trabalho a favor da comunidade, entre outras medidas.
                </p>
                <p>
                    Quando uma pessoa é apanhada a consumir canábis, se for maior de 16 anos, a autoridade policial notifica-a para se apresentar na Comissão para a Dissuasão da Toxicodependência (CDT) da área de residência. É instaurado um processo de contra-ordenação em relação ao qual o indiciado consumidor terá de responder, comparecendo na CDT sempre que for notificado, ficando com registo do processo de contra-ordenação por consumo de drogas e decide-se da medida ou sanção a aplicar. Quando se tem menos de 16 anos a polícia encarrega-se de chamar os pais ou representantes legais e de encaminhar o caso para as Comissões de Protecção de Menores. <a href="https://www.sicad.pt/PT/Cidadao/Tu-alinhas/ComportamentosAditivos/Paginas/detalhe.aspx?itemId=1&lista=HistoriaLegislacao&bkUrl=/BK/Cidadao/Tu-alinhas/ComportamentosAditivos" target="_blank" rel="noopener noreferrer"><sup>[39]</sup></a>
                </p>
                <p>
                    Produtos com cannabis para fins medicinais são legais desde que prescritos por médicos e vendidos em farmácias. <a href="https://www.infarmed.pt/web/infarmed/canabis-medicinal" target="_blank" rel="noopener noreferrer"><sup>[40]</sup></a>
                </p>
                <p>
                    Os <b>alimentos derivados da planta Cannabis sativa L autorizados</b> para ser comercializados na União Europeia, e que apresentam histórico de consumo seguro e significativos, são os provenientes <b>exclusivamente das sementes do cânhamo, nomeadamente óleo de sementes, proteína de cânhamo, farinha de cânhamo,</b> e sempre com a premissa que sejam provenientes de variedades de <i>Cannabis sativa</i> L contendo THC inferior a 0,2% (w/w) e <b>desde que não apresentem na sua rotulagem / publicidade alegações de saúde e propriedades terapêuticas.</b> <a href="https://www.asae.gov.pt/newsletter2/asaenews-n-124-novembro-2021/uso.aspx" target="_blank" rel="noopener noreferrer"><sup>[41]</sup></a>
                </p>

                <h3>
                    Outras fontes fiáveis
                </h3>
                <p>
                    <a class="break-all" href="https://www.unodc.org/documents/drug-prevention-and-treatment/cannabis_review.pdf " target="_blank" rel="noopener noreferrer">https://www.unodc.org/documents/drug-prevention-and-treatment/cannabis_review.pdf</a>
                </p>
            </section>


        </section>
    </div>
</template>