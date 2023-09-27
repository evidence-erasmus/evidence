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
            <h1 class="mb-0">Climate change</h1>
            <h5 class="font-normal uppercase leading-tight">Scientific background information</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">1. What is Climate Change, and which are its causes?</h2>
        
            <p>
                In simple terms, Climate Change can be defined as the global phenomenon of climate transformation, characterized by the changes in the usual climate of the planet (regarding temperature, precipitation, and wind) that are especially caused by human activities. For a more scientific definition, we can adopt NASA’s definition of climate change as “a broad range of global phenomena created predominantly by burning fossil fuels, which add heat-trapping gases to Earth’s atmosphere. These phenomena include the increased temperature trends described by global warming, but also encompass changes such as sea-level rise; ice mass loss in Greenland, Antarctica, the Arctic and mountain glaciers worldwide; shifts in flower/plant blooming; and extreme weather events”. Nowadays, many activists, scientists, authors and politicians argue that we should substitute the term ‘climate change’ with the term ‘climate crisis’, in these sense that “Climate change is no longer considered to accurately reflect the seriousness of the overall situation; We sould use climate emergency or climate crisis instead to describe the broader impact of climate change” (Sophie Zeldin O-Neil, columnist in ‘The Guardian’ newspaper).
            </p>
            <p>
                Bu, how climate change is happening? To explain it, is necessary to say few words about the “greenhouse effect”.
            </p>
            <p>
                Greenhouse effect it is the natural process that warms the Earth’s surface. It is called the greenhouse effect because the exchange of incoming and outgoing radiation that warms the planet works in a similar way to a greenhouse. As a greenhouse is constructed of glass, it allows sunlight to penetrate the exterior and warm the air and plants inside. The heat that isn’t absorbed by plants is trapped by the glass and can’t escape. Throughout daylight hours, sunlight keeps coming through the glass, adding more and more heat energy so the inside gets warmer and warmer (and continues to stay warm after the sun sets).
            </p>
            <p>
                The Earth and the Sun work in a similar fashion (on a much more massive scale and a different physical process). The sun shines through the Earth’s atmosphere and the earth’s surface warms up. Some of the Sun’s energy is reflected directly back to space, the rest is absorbed by land, ocean, and the atmosphere and it is transformed into heat. The heat that gases such as carbon dioxide, methane, and other “greenhouse gases” trap would otherwise escape Earth’s atmosphere. In the right proportion, these gases do a critical job ensuring the atmosphere holds onto enough heat to support every kind of life on the planet. Without them, the Earth would lose so much heat that life as we know it would be impossible. Although the greenhouse effect is a naturally occurring phenomenon, the effect could be intensified by the emission of greenhouse gases into the atmosphere as the result of human activity. In that case the greenhouse gases trap too much of the sun’s energy as heat and upset the natural systems that regulate our climate. Things keep getting hotter and hotter and we start seeing more and more extreme weather and other impacts. Even small changes in the global average temperature can cause major and dangerous shifts in climate and weather. Just consider the difference between 0 and 1 degrees Celsius– that one degree means the difference between ice and water.
            </p>

            <!-- <UiContentImage
                src="https://evidence.onkel.ee/assets/c-change__the-greenhouse-effect.webp"
                credits="From Le Treut et al., 2007"
                :elevated="true">
                <template #caption>
                    <b>Figure 1.</b> A simplified diagram illustrating the greenhouse effect
                </template>
            </UiContentImage> -->
        
            <p><b>Here is some information of the most common greenhouse gases:</b></p>
            <dl>
                <dt class="font-bold">Water vapor:</dt>
                <dd>Water vapour is the biggest overall contributor to the greenhouse effect. However, almost all the water vapour in the atmosphere comes from natural processes. </dd>
                <dt class="font-bold">Carbon dioxide (CO₂):</dt>
                <dd>A minor but essential component of the atmosphere, carbon dioxide is released through natural processes such as respiration and volcano eruptions  but also from human activities such as deforestation, land use changes, and most importantly fossil fuels burning. Humans have increased atmospheric CO₂ concentration by 48% since the Industrial Revolution began.</dd>
                <dt class="font-bold">Methane:</dt>
                <dd>It is produced through natural sources and human activities, including the decomposition of wastes in landfills, agriculture (e.g. rice cultivation), and especially rice cultivation, as well as ruminant digestion and manure management associated with domestic livestock.  It is a far more active greenhouse gas than carbon dioxide, but also one which is much less abundant in the atmosphere.</dd>
                <dt class="font-bold">Nitrous oxide:</dt>
                <dd> It is produced by soil cultivation practices, commercial and organic fertilizers, fossil fuel combustion, nitric acid production, and biomass burning.</dd>
                <dt class="font-bold">Chlorofluorocarbons (CFCs):</dt>
                <dd>Synthetic compounds entirely of industrial origin used in several applications but now largely regulated in production and release to the atmosphere by international agreement for their ability to contribute to the destruction of the ozone layer. They are also greenhouse gases.</dd>
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
                <h4 class="mt-2">References</h4>
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
            <h2 id="section-2">2. What are the effects of Climate Change?</h2>
            
            <p>The Intergovernmental Panel on Climate Change (IPCC), which includes more than 1,300 scientists from the United States and others, refer that the extent of climate change effects on individual regions will vary over time and with the ability of different societal and environmental systems to mitigate or adapt to change.</p>
            
            <p>
                <b>The effects of climate change vary and include the following:</b>
            </p>
            
            
            <ul>
                <li>
                    Rising global temperature: Given the enormous size and heat capacity of the global oceans, it takes massive heat energy to raise Earth’s average yearly surface temperature by even a small amount. The roughly 2-degree Fahrenheit (1 degree Celsius) increase in global average surface temperature that has occurred since the pre-industrial era (1880-1900) might seem small, but it means a significant increase in accumulated heat.
                </li>
                <li>
                    Rising sea levels
                    <UiContentImage
                        src="https://evidence.onkel.ee/assets/c-change__sea-level-rise.webp"
                        credits="From NOAA Climate.gov image based on analysis and data from Philip Thompson, University of Hawaii Sea Level Center"
                        :elevated="true" class="mt-8">
                        <template #caption>
                            <b>Figure 2.</b> Sea level rise from 1995-2020
                        </template>
                    </UiContentImage>
                </li>
                <li>
                    Shrinking mountain glaciers.
                </li>
                <li>
                    Ice melting at a faster rate than usual in Greenland, Antarctica and the Arctic.
                </li>
                <li>
                    Droughts or increased rainfall depending on the region of the planet.
                </li>
                <li>
                    Some laboratory experiments suggest that elevated CO₂ levels can increase plant growth. However, other factors, such as changing temperatures, ozone, and water and nutrient constraints, may more than counteract any potential increase in yield. If optimal temperature ranges for some crops are exceeded, earlier possible gains in yield may be reduced or reversed altogether.
                </li>
                <li>
                    Climate extremes, such as droughts, floods and extreme temperatures, can lead to crop losses and threaten the livelihoods of agricultural producers and the food security of communities worldwide. Depending on the crop and ecosystem, weeds, pests, and fungi can also thrive under warmer temperatures, wetter climates.
                </li>
                <li>
                    Research has shown that temperature increase can also reduce the nutritional value of most food crops by reducing the concentrations of protein and essential minerals in most plant species.
                </li>
                <li>
                    Changes in flower and plant blooming times.
                </li>
                <li>
                    Changing climates, directly and indirectly, cause stress to animals across the world. Many species are approaching—or have already reached—the limit of where they can go to find hospitable climates. In the polar regions, animals like polar bears that live on polar ice are now struggling to survive as that ice melts.
                </li>
                <li>
                    Warming ocean temperatures are melting polar ice, shifting ocean currents and fish migrations, leading to coral bleaching and die-off. Because of oceans’ vital role in regulating Earth’s climate by absorbing greenhouse gas emissions, they’re taking a direct hit from climate change.
                </li>
            </ul>


            <section class="e-card mt-8">
                <h4 class="mt-2">References</h4>
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

        
        










            <!-- 
                <hr  class="mt-10 mb-40" />
            <h2 id="section-3">3. Climate Change: A socio-scientific and controversial issue</h2>

            <p>In the history of Science, there have been, and there are many examples where contradictory views on specific scientific issues were spread to the general population. Climate change is one example where people and groups take and defend different positions on it. Even though climate science has now firmly established that global warming is occurring, that human activities contribute to this warming, and that current and future warming portend negative impacts on both ecological and social systems (National Research Council, 2010), a significant portion of the American public remains ambivalent or unconcerned (Leiserowitz, Maibach, Roser-Renouf, & Hmielowski, 2012) and many policymakers (especially in the United States) deny the necessity of taking steps to reduce carbon emissions (Brownstein, 2010).</p>

            <p>Climate science denials do not accept evidence supporting climate change, humanity's role in causing recent global warming, and/or the severity of climate impacts. Scepticism, contrarianism, dismissal, dissent, doubt, or anti-climate change are some terms that have been used to characterize climate science denials (Cook, 2017).</p>

            <p>Climate misinformation is the reason for public misconceptions about climate change (McCright and Dunlap, 2010). Therefore, many questions (e.g. (1) Is an increase in the Earth's temperature causing an increase in carbon dioxide or is an increase in carbon dioxide causing an increase in the Earth's temperature? (2) Do human activities produce equal, less or more carbon dioxide than natural processes? (3) Does the climate change over time? If yes, is climate change a temporary change like the previous ones? (4) Are the mass extinctions of species nowadays a result of climate change or a common occurrence over the years?) that concern the citizens who are worried about the future of the planet and the new generations.  As noted in the next contribution, the mass media play a central role in debates over climate science and policy making. Maxwell Boykoff draws on his long experience in analyzing how the media represent climate change to provide an analysis of the multiple factors that contribute to "outlier voices"—sceptics, contrarians, and denialists—receiving unwarranted media visibility and thus influencing policy debates.</p>


            <section class="e-card mt-8">
                <h4 class="mt-2">References</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.youtube.com/watch?app=desktop&v=u9KxE4Kv9A8" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?app=desktop&v=u9KxE4Kv9A8</a></li>
                    <li><a href="https://www.researchgate.net/publication/274306932_Climate_Change_Skepticism_and_Denial_An_Introduction" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/publication/274306932_Climate_Change_Skepticism_and_Denial_An_Introduction</a></li>
                    
                    <li><b>Karakas, L. D.</b>, & <b>Mitra, D.</b> (2020). Believers vs. deniers: Climate change and environmental policy polarization. European Journal of Political Economy, 65, 101948.</li>
                    <li><b>Corry, O.</b>, & <b>Jørgensen, D.</b> (2015). Beyond ‘deniers’ and ‘believers’: Towards a map of the politics of climate change. Global Environmental Change, 32, 165-174.</li>
                    <li><b>Cook, J.</b> (2017). Understanding and countering climate science denial. Journal & Proceedings of the Royal Society of New South Wales, 150.</li>
                    <li><b>McCright, A. M.</b> & <b>Dunlap, R. E.</b> (2010). Anti-reflexivity: The American conservative movement’s success in undermining climate science and policy. Theory, Culture & Society, 27(2-3), 100-133.</li>
                </ul>
            </section> -->


             
















            <hr class="mt-10 mb-40" />
            <h2 id="section-4">3. Techniques of Science Denial</h2>

            
            <p>Cook (2020) has categorized the different arguments proposed by climate change deniers into five main categories: Fake Experts; Logical Fallacies; Impossible Expectations; Cherry Picking; Conspiracy Theories.</p>

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
                    Fake experts:
                </dt>
                <dd>
                    This involves spokespeople who convey the impression of expertise on a topic while possessing little to no relevant expertise. The Global Warming Petition Project is the most prevalent example of this technique within climate misinformation, featuring 31,000 signatories of an online petition dissenting against human-caused global warming. However, 99.9% of the signatories, while holding a science degree, possess no expertise in climate science.
                </dd>
                <dt class="font-bold mt-4">
                    Logical fallacies:
                </dt>
                <dd>
                    These are arguments where the premises or starting assumptions do not logically lead to the conclusion. Climate denialists’ arguments typically contain fatal logical flaws. For example, the argument that climate has changed naturally in the past, therefore modern climate change must be natural, contains the unspoken false assumption that because natural factors have caused climate change in the past, then they must always be the cause of climate change, when human influence may also be a factor.
                </dd>
                <dt class="font-bold mt-4">
                    Impossible expectations:
                </dt>
                <dd>
                    This involves demanding unrealistic levels of proof or misrepresenting the nature of scientific uncertainty. For example, after being presented with data demonstrating that sea level is increasing, climate change doubters may request data demonstrating that the phenomena of sea level rising have accelerated in recent years! 
                </dd>
                <dt class="font-bold mt-4">
                    Cherry picking:
                </dt>
                <dd>
                    This technique is defined as “selectively choosing data leading to the desired conclusion that differs from the conclusion arising from all the available data”. For example, in order to prove that climate change is not occurring, it is common practice to cherry-pick data from years that were particularly cold or wet, while ignoring data that show the trend of temperature change over many centuries. 
                </dd>
                <dt class="font-bold mt-4">
                    Conspiracy theories:
                </dt>
                <dd>
                    involve the suggestion of secret plans to implement nefarious schemes, and are a common theme in climate misinformation. Climate science expertise has been characterized by deniers as a “climate cartel” of scientists, regulators, activists, and business entities
                </dd>
            </dl>

 
            <section class="e-card mt-8">
                <h4 class="mt-2">References</h4>
                <ul class="text-sm break-all">
                    <li>Cook, J. (2020). Deconstructing Climate Science Denial. In Holmes, D. & Richardson, L. M. (Eds.) Edward Elgar Research Handbook in Communicating Climate Change. Cheltenham: Edward Elgar.</li>
                    <li><a href="https://www.youtube.com/watch?v=uNs2YMblqwU&ab_channel=JohnCook" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=uNs2YMblqwU</a></li>
                    <li><a href="https://www.youtube.com/watch?v=AqcUP0sDglg" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=AqcUP0sDglg</a></li>
                    <li><a href="https://www.youtube.com/watch?v=wXA777yUndQ" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=wXA777yUndQ</a></li>
                    <li><a href="http://www.petitionproject.org/" target="_blank" rel="noopener noreferrer">http://www.petitionproject.org</a></li>
                </ul>
            </section>
 
 



















            <h1 class="mt-40">Myths about Climate Change</h1>

            <hr class="mt-10 mb-40" />
            <h2 id="section-5">Myth 1: The extinction of species is a natural process. Mass extinctions of species have always occurred.</h2>

            <p>The extinction of species is a historical problem. From prehistoric times we have evidence of several mass extinctions, most notably the extinction of the dinosaurs. This extinction, which took place 66,000,000 years ago, was attributed to the impact of an asteroid on Earth. Over the years, we have other well-known examples, such as the extinction of mammoths. However, the causes of extinction that have been recorded vary.</p>
            <p>Also, the suggestion that humanity is capable of impacting and disturbing forces of such magnitude is reflective of a self-centered arrogance that is mind-numbing. Humanity is a subset of Nature. Nature is not a subset of humanity. People can neither cause nor intervene to correct these processes (Financial Sense University).</p>
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
            <h2 id="section-6">Myth 2: Species / Organisms can adapt to climate change.</h2>

            <p>The earth has a history of 4.54 billion years. The weather conditions that prevailed from time to time on the planet changed. Therefore, the species/organisms living on earth were forced to adapt to the new conditions to survive and be preserved. In this way, the evolution of the species emerged.</p>
            <p>Plants and animals have already adapted several times to adverse conditions (climate change, meteorite falls, volcanic eruptions, etc.). This makes them able to adapt to rising temperatures and the situation we now call climate change. In other words, species are naturally capable of surviving in new conditions.</p>
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
            <h2 id="section-7">Myth 3: The science of climate change is unreliable.</h2>


            <p>Meteorological stations are located in areas where the data collected is not representative of climate change and therefore unreliable for the study of the global climate. Scientists target global terrorism for data they create under the conditions they want.</p>

            <p>
                <i>"We found [U.S. weather] stations located next to the exhaust fans of air conditioning units, surrounded by asphalt parking lots and roads, on blistering-hot rooftops, and near sidewalks and buildings that absorb and radiate heat."</i> (Watts 2009)
                <br />
                <a href="https://skepticalscience.com/surface-temperature-measurements-basic.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/surface-temperature-measurements-basic.htm</a>
            </p>


            <UiCardInfo class="my-8" theme="sky-500" icon="tabler:microscope">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">Scientific View considering Myth 3:</h3>
                    <p class="text-2xl">The evidence relating to climate change comes from decades of intensive research and is based on observations, field and laboratory experiments, and model simulations (Higgins, 2019). It is arbitrary to believe that the scientific data on climate change is unreliable.</p>
                </div>
            </UiCardInfo>

            <p>Students investigating Myth 3 during the Guided Inquiry option are studying specific evidence (e.g., the location of the observatory stations and measurements) coming from the NOAA organization in order to criticize on their own if that evidence is reliable or no. Alternatively, students investigating Myth 3 following the Open Inquiry, collect evidence from scientific sources in order to falsify/or confirm their hypothesis.</p>
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
            <h2 id="section-8">Myth #4: The rise in temperature is for good.</h2>
            
            <p><i>"By the way, if you’re going to vote for something, vote for warming. Less deaths due to cold, regions more habitable, larger crops, longer growing season. That’s good. Warming helps the poor."</i> (John MacArthur)</p>

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

            <p>Students investigating Myth 4 during the Guided Inquiry option are studying specific evidence from the World Health Organization about the rise temperature and human deaths, recent evidence about human deaths affected from climate change, make an experimental investigation about the rise of the temperature and the land used for housing or cultivation etc. Students access the scientific source and come up with their conclusions. Alternatively, students investigating Myth 4 following the Open Inquiry, collect evidence from scientific sources in order to falsify or confirm their hypothesis.</p>
            <p>In both inquiry options, students access the scientific sources and come up with their conclusions.</p>

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
            <h2 id="section-9">Myth 5: There's no correlation between CO₂ and temperature.</h2>
            
            <p>
                <i>“It was the post-war industrialization that caused the rapid rise in global CO₂ emissions, but by 1945 when this began, the Earth was already in a cooling phase that started around 1942 and continued until 1975. With 32 years of rapidly increasing global temperatures and only a minor increase in global CO₂ emissions, followed by 33 years of slowly cooling global temperatures with rapid increases in global CO₂ emissions, it was deceitful for the IPCC to make any claims that CO₂ emissions were primarily responsible for observed 20th-century global warming."</i>
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
                Students investigating Myth 5 during the Guided Inquiry option are studying evidence about how Carbon affects climate and life on Earth. They are also getting involved into an experimental procedure investigating how carbon dioxide affect temperature on Earth. They access those scientific sources and come up with their final conclusions. Alternatively, students investigating Myth 5 following the Open Inquiry, collect evidence from scientific sources in order to falsify/or confirm their hypothesis.
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
            <h2 id="section-10">Myth 6: Actions to mitigate climate change will make people poorer.</h2>

            <p>
                <i>“Fossil fuels have powered vehicles, factories and technology, allowing people in the last century to do things at a scale and speed that would have been impossible before. This enabled people to make, sell and buy more things and become richer. Therefore, stopping the use of coal will make people poorer. Efforts to reduce greenhouse gas emissions will have consequences. Fossil fuels are essential for global development. Therefore, limiting their use will inevitably hinder this growth and increase the cost of living, hurting the poorest.”</i>
                <br />
                (David Montgomery)
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
                    “Climate is always changing. We have had ice ages and warmer periods when alligators were found in Spitzbergen (an island in the Arctic Ocean). Ice ages have occurred in a hundred thousand year cycle for the last 700 thousand years, and there have been previous periods that appear to have been warmer than the present despite CO₂ levels being lower than they are now. More recently, we have had the medieval warm period and the little ice age.”
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

            <hr />

            <p>
                Click the following link for the scientific view: <a href="https://royalsociety.org/topics-policy/projects/climate-change-evidence-causes/question-6/" target="_blank" rel="noopener noreferrer" class="break-all">https://royalsociety.org/topics-policy/projects/climate-change-evidence-causes/question-6/</a>
            </p>
 


        </section>
    </div>
</template>