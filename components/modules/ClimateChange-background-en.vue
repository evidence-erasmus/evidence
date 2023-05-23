<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <!-- <ClientOnly>
            <Teleport to="#TOC"> -->
                <UiTableOfContents class="lg:max-w-xs">
                    <template #title>Table of Contents</template>
                    <template #content>
                        <ol>
                            <li>
                                <a href="#top">What is Climate Change and which are its’ causes?</a>
                            </li>
                            <li>
                                <a href="#section-2">What are the effects of Climate Change?</a>
                            </li>
                            <li>
                                <a href="#section-3">Climate Change: A socio-scientific and controversial issue</a>
                            </li>
                            <li>
                                <a href="#section-4">Techniques of Science Denials</a>
                            </li>
                        </ol>
                        <h3 class="text-md my-3 font-Body">Myths about Climate Change</h3>
                        <ol>
                            <li>
                                <a href="#myth-1">Myth 1: The extinction of species is a natural process. Mass extinctions of species have always occurred.</a>
                            </li>
                            <li>
                                <a href="#myth-2">Myth 2: Species can adapt to climate change.</a>
                            </li>
                            <li>
                                <a href="#myth-3">Myth 3: There's no correlation between CO2 and temperature.</a>
                            </li>
                            <li>
                                <a href="#myth-4">Myth 4: The science of climate change is unreliable.</a>
                            </li>
                            <li>
                                <a href="#myth-5">Myth 5: Climate change actions will make people poorer.</a>
                            </li>
                            <li>
                                <a href="#myth-6">Myth 6: Global warming is for good.</a>
                            </li>
                            <li>
                                <a href="#myth-7">Myth 7: The earth's climate has always changed and now the same thing is happening.</a>
                            </li>
                        </ol>
                    </template>
                </UiTableOfContents>
            <!-- </Teleport>
        </ClientOnly> -->



        <section class="e-article">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Climate change</h1>
            <h5 class="font-normal uppercase leading-tight">Scientific background information</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">1. What is Climate Change, and which are its causes?</h2>
        
            <p>Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, such as through variations in the solar cycle. But since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun’s heat and raising temperatures (Figure 1). Specifically, CO2 traps the longwave radiation given off by the planet. The trapping of the long wave radiation is dictated by quantum mechanics. The two oxygen atoms in CO2 vibrate with the carbon atom in the center, and the frequency of this vibration coincides with some of the infrared wavelengths of the long wave radiation. When the frequency of the radiation from the Earth’s surface and the atmosphere coincides with the frequency of CO2 vibration, the radiation is absorbed by CO2, converted to heat by collision with other air molecules, and then returned to the surface. As a result of this trapping, the outgoing longwave radiation is reduced by increasing CO2. Not as much heat is escaping to balance the net incoming solar radiation. As a result, there is excess heat energy on the planet, i.e., the system is out of energy balance. As CO2 is increasing with time, the infrared blanket is becoming thicker, and the planet is accumulating this excess energy.</p>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/c-change__the-greenhouse-effect.webp"
                credits="From Le Treut et al., 2007"
                :elevated="true">
                <template #caption>
                    <b>Figure 1.</b> A simplified diagram illustrating the greenhouse effect
                </template>
            </UiContentImage>
        
            <p><b>Gases that contribute to the greenhouse effect include:</b></p>
            <dl>
                <dt class="font-bold">Water vapor:</dt>
                <dd>The most abundant greenhouse gas, but importantly, it acts as feedback to the climate. Water vapor increases as the Earth's atmosphere warms, but so does the possibility of clouds and precipitation, making these some of the most important feedback mechanisms to the greenhouse effect.</dd>
                <dt class="font-bold">Carbon dioxide (CO2):</dt>
                <dd>A minor but essential component of the atmosphere, carbon dioxide is released through natural processes such as respiration and volcano eruptions and human activities such as deforestation, land use changes, and burning fossil fuels. Humans have increased atmospheric CO2 concentration by 48% since the Industrial Revolution began. This is the most important long-lived "forcing" of climate change.</dd>
                <dt class="font-bold">Methane:</dt>
                <dd>A hydrocarbon gas produced through natural sources and human activities, including the decomposition of wastes in landfills, agriculture, and especially rice cultivation, as well as ruminant digestion and manure management associated with domestic livestock. On a molecule-for-molecule basis, methane is a far more active greenhouse gas than carbon dioxide, but also one which is much less abundant in the atmosphere.</dd>
                <dt class="font-bold">Nitrous oxide:</dt>
                <dd>A powerful greenhouse gas produced by soil cultivation practices, primarily commercial and organic fertilizers, fossil fuel combustion, nitric acid production, and biomass burning. Chlorofluorocarbons (CFCs): Synthetic compounds entirely of industrial origin used in several applications but now largely regulated in production and release to the atmosphere by international agreement for their ability to contribute to the destruction of the ozone layer. They are also greenhouse gases.</dd>
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
            
            
            
             



            
            
            
            
            
            
            
            
            
            
            <hr id="section-2" class="mt-10 mb-40" />
            <h2>2. What are the effects of Climate Change?</h2>
            
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
                            <b>Figure 3.</b> Sea level rise from 1993-2020
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
                    Some laboratory experiments suggest that elevated CO2 levels can increase plant growth. However, other factors, such as changing temperatures, ozone, and water and nutrient constraints, may more than counteract any potential increase in yield. If optimal temperature ranges for some crops are exceeded, earlier possible gains in yield may be reduced or reversed altogether.
                </li>
                <li>
                    Climate extremes, such as droughts, floods and extreme temperatures, can lead to crop losses and threaten the livelihoods of agricultural producers and the food security of communities worldwide. Depending on the crop and ecosystem, weeds, pests, and fungi can also thrive under warmer temperatures, wetter climates, and increased CO2 levels, and climate change will likely increase weeds and pests.
                </li>
                <li>
                    Research has shown that it can also reduce the nutritional value of most food crops by reducing the concentrations of protein and essential minerals in most plant species.
                </li>
                <li>
                    Changes in flower and plant blooming times.
                </li>
                <li>
                    Constraining global warming to 1.5°C, rather than 2°C and higher, is projected to have many benefits for terrestrial and wetland ecosystems and the preservation of their services to humans.
                </li>
                <li>
                    Ocean ecosystems are already experiencing large-scale changes, and critical thresholds are expected to be reached at 1.5°C and higher levels of global warming.
                </li>
                <li>
                    Changing climates, directly and indirectly, cause stress to animals across the world. Many species are approaching—or have already reached—the limit of where they can go to find hospitable climates. In the polar regions, animals like polar bears that live on polar ice are now struggling to survive as that ice melts.
                </li>
                <li>
                    Warming ocean temperatures are melting polar ice, shifting ocean currents and fish migrations, leading to coral bleaching and die-off. Because of oceans’ vital role in regulating Earth’s climate by absorbing greenhouse gas emissions, they’re taking a direct hit from climate change.
                </li>
                <li>
                    Risks of local species losses and, consequently, risks of extinction are much less in a 1.5°C versus a 2°C warmer world.
                </li>
                <li>
                    Any increase in global temperature (e.g., +0.5°C) is projected to affect human health, with primarily negative consequences.
                </li>
                <li>
                    Risks to global aggregated economic growth due to climate change impacts are projected to be lower at 1.5°C than at 2°C by the end of this century.
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

        
        










            <hr id="section-3" class="mt-10 mb-40" />
            <h2>3. Climate Change: A socio-scientific and controversial issue</h2>

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
            </section>


             
















            <hr id="section-4" class="mt-10 mb-40" />
            <h2>4. Techniques of Science Denials</h2>

            
            <p>Among the various movements that reject a scientific consensus, five characteristics or techniques of science denial are observed:</p>


            <img />

            <dl>
                <dt class="font-bold">
                    Fake experts:
                </dt>
                <dd>
                    This involves spokespeople who convey the impression of expertise on a topic yet possess little relevant expertise. The Global Warming Petition Project is the most prevalent form of this technique within climate misinformation, featuring 31,000 signatories of an online petition dissenting against human-caused global warming. However, 99.9% of the signatories, while holding a science degree, possess no expertise in climate science. This petition has been found experimentally to be one of the most effective denialist arguments in lowering the acceptance of climate change. 
                </dd>
                <dt class="font-bold mt-4">
                    Logical fallacies:
                </dt>
                <dd>
                    Arguments that persuade people to consist of one or more premises, leading to a conclusion. Climate denialist arguments typically contain fatal logical flaws. There are three classes of logical fallacies found in climate misinformation:
                    <ul>
                        <li>
                            fallacies of relevance (where the premises are irrelevant to the conclusion), 
                        </li>
                        <li>
                            scope (where not all relevant evidence is considered), and 
                        </li>
                        <li>
                            presumption (where the argument contains false premises).
                        </li>
                    </ul>
                </dd>
                <dt class="font-bold mt-4">
                    Impossible expectations:
                </dt>
                <dd>
                    This involves demanding unrealistic levels of proof or misrepresenting the nature of scientific uncertainty. As science is typically probabilistic, calls for absolute scientific certainty effectively cast doubt on scientific findings. This denialist technique is known as the “Scientific Certainty Argumentation Method”. 
                </dd>
                <dt class="font-bold mt-4">
                    Cherry picking:
                </dt>
                <dd>
                    This technique is defined as “selectively choosing data leading to the desired conclusion that differs from the conclusion arising from all the available data”. 
                </dd>
                <dt class="font-bold mt-4">
                    Conspiracy theories:
                </dt>
                <dd>
                    Around 20% of the U.S. public believe climate change is a scientific hoax. Conspiracy theories have several adverse effects, even when people are not convinced by them. They can lower support for climate action, decrease one’s intent to reduce one’s carbon footprint, and decrease trust in government.
                </dd>
            </dl>

 
            <section class="e-card mt-8">
                <h4 class="mt-2">References</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.youtube.com/watch?v=uNs2YMblqwU&ab_channel=JohnCook" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=uNs2YMblqwU</a></li>
                    <li><a href="https://www.youtube.com/watch?v=AqcUP0sDglg" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=AqcUP0sDglg</a></li>
                    <li><a href="https://www.youtube.com/watch?v=wXA777yUndQ" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=wXA777yUndQ</a></li>
                    <li><a href="http://www.petitionproject.org/" target="_blank" rel="noopener noreferrer">http://www.petitionproject.org</a></li>
                </ul>
            </section>
 
 



















            <h1 class="mt-40">Myths about Climate Change</h1>

            <hr id="myth-1" class="mt-10 mb-40" />
            <h2>Myth 1: The extinction of species is a natural process. Mass extinctions of species have always occurred.</h2>

            <p>The extinction of species is a historical problem. From prehistoric times we have evidence of several mass extinctions, most notably the extinction of the dinosaurs. This extinction, which took place 66,000,000 years ago, was attributed to the impact of an asteroid on Earth. Over the years, we have other well-known examples, such as the extinction of mammoths. However, the causes of extinction that have been recorded vary.</p>
            <p>Also, the suggestion that humanity is capable of impacting and disturbing forces of such magnitude is reflective of a self-centered arrogance that is mind-numbing. Humanity is a subset of Nature. Nature is not a subset of humanity. People can neither cause nor intervene to correct these processes (Financial Sense University).</p>
            <p><a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a></p>





            <UiCardInfo class="my-8" theme="blue" icon="tabler:microscope">
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
            <h2>Myth 2: Species / Organisms can adapt to climate change.</h2>

            <p>The earth has a history of 4.54 billion years. The weather conditions that prevailed from time to time on the planet changed. Therefore, the species/organisms living on earth were forced to adapt to the new conditions to survive and be preserved. In this way, the evolution of the species emerged.</p>
            <p>Plants and animals have already adapted several times to adverse conditions (climate change, meteorite falls, volcanic eruptions, etc.). This makes them able to adapt to rising temperatures and the situation we now call climate change. In other words, species are naturally capable of surviving in new conditions.</p>
            <p><a href="https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/Can-animals-and-plants-adapt-to-global-warming.htm</a></p>


            <UiCardInfo class="my-8" theme="blue" icon="tabler:microscope">
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
            <h2>Myth 3: The science of climate change is unreliable.</h2>


            <p>Meteorological stations are located in areas where the data collected are not representative of climate change and therefore unreliable for the study of the global climate. Scientists target global terrorism for data they create under the conditions they want.</p>

            <p>
                <i>"We found [U.S. weather] stations located next to the exhaust fans of air conditioning units, surrounded by asphalt parking lots and roads, on blistering-hot rooftops, and near sidewalks and buildings that absorb and radiate heat."</i> (Watts 2009)
                <br />
                <a href="https://skepticalscience.com/surface-temperature-measurements-basic.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/surface-temperature-measurements-basic.htm</a>
            </p>


            <UiCardInfo class="my-8" theme="blue" icon="tabler:microscope">
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
            <h2>Myth #4: The rise in temperature is for good.</h2>
            
            <p><i>"By the way, if you’re going to vote for something, vote for warming. Less deaths due to cold, regions more habitable, larger crops, longer growing season. That’s good. Warming helps the poor."</i> (John MacArthur)</p>

            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=ZTlYl8E_B14&t=353s</a>
                </li>
                <li>
                    <a href="https://skepticalscience.com/global-warming-positives-negatives.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/global-warming-positives-negatives.htm</a>
                </li>
            </ul>

             
            <UiCardInfo class="my-8" theme="blue" icon="tabler:microscope">
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
            <h2>Myth 5: Better hygiene and sanitation are responsible for decreased infections, not vaccines</h2>
            
            <p>This is partly true that vaccines do not deserve all the credit for reducing or eliminating rates of infectious diseases. It has been shown that better sanitation, nutrition, and the development of antibiotics have also helped a lot. Infections such as typhoid and cholera transmitted by contaminated water, a major cause of illness and death early in the 20th century, have been reduced dramatically by better sanitation. A recent review concluded that handwashing in averting infectious diseases. Another recent evidence comes from the COVID-19 lockdown and improved hygiene with dramatically reduced seasonal flu rates.</p>
            <p>However, when these factors are isolated, and infectious disease rates are analysed, the role of vaccines cannot be denied. One example is measles in the United States. When the first measles vaccine was introduced in 1963, infection rates had been steady at around 400,000 cases a year. And while hygienic habits and sanitation did not change much over the following decade, the rate of measles infections dropped precipitously following the vaccine's introduction, with only around 25,000 cases by 1970. Another example is Hib disease. According to CDC data, the incidence rate for this malady plummeted from 20,000 in 1990 to around 1,500 in 1993 following the vaccine's introduction.</p>
            <p>Another piece of evidence comes from recent decades. There have not been changes in hygiene in the developed world, but there has been a decrease in vaccination rates. Now several countries, such as the UK, the USA, Germany, Spain, etc., are seeing increasing numbers of measles, and other vaccine-preventable diseases, identified as an emerging disease "hot spots".</p>

            <section class="e-card">
                <h4 class="mt-0">References</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://jptcp.com/index.php/jptcp/article/view/711" target="_blank">https://jptcp.com/index.php/jptcp/article/view/711</a></li>
                    <li><a href="https://www.nature.com/articles/d41586-020-01538-8" target="_blank">https://www.nature.com/articles/d41586-020-01538-8</a></li>
                    <li><a href="https://www.nature.com/articles/d41586-020-03519-3" target="_blank">https://www.nature.com/articles/d41586-020-03519-3</a></li>
                    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3222407/" target="_blank">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3222407/</a></li>
                </ul>
            </section>












            <hr id="myth-6" class="mt-10 mb-40" />
            <h2>Myth 6: Vaccines can infect the child with the disease it is trying to prevent</h2>

            <p>Some of the vaccines are live vaccines that contain live attenuated microorganisms/viruses, which are still capable of replicating within the host (vaccinee). The microorganisms are 'weakened', meaning they have lost most of their disease-causing capacity but still possess immunogenic properties. Thus, it is always much less severe than if a child became infected with the disease-causing virus itself. Live-attenuated vaccines are for measles, mumps, rubella (MMR combined vaccine), rotavirus, smallpox, chickenpox, and yellow fever vaccine. In most cases, live vaccines show significantly higher immunogenicity than inactivated vaccines since natural infection is imitated almost perfectly by eliciting a more comprehensive range of immunologic responses. However, these vaccines are not favoured for kids with weakened immune systems, such as those being treated for cancer.</p>
            <p>Live vaccines can indeed cause mild symptoms resembling the disease they protect against. However, the vaccine recipients are experiencing a body's immune response to the vaccine, not the disease itself. There is only one recorded instance in which a vaccine was shown to cause disease. This was the Oral Polio Vaccine (OPV) which is no longer used and currently replaced with a killed virus form known as the inactivated polio vaccine (IPV).</p>

            <section class="e-card">
                <h4 class="mt-0">Reference</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.sciencedirect.com/science/article/pii/B9781455710768000090" target="_blank">https://www.sciencedirect.com/science/article/pii/B9781455710768000090</a></li>
                </ul>
            </section>












            <hr id="myth-7" class="mt-10 mb-40" />
            <h2>Myth 7: We do not need to vaccinate because many countries have low infection rates</h2>
            <p>Herd immunity occurs when a large portion of a community (the herd) becomes immune to a disease, making the spread of disease from person to person unlikely. Thanks to "herd immunity," many people do not see the need for vaccination. As long as a large majority of people are immunised in any population, the unimmunised minority will also be protected. This is important because there is a portion of the population – infants, pregnant women, the elderly, and those with weakened immune systems – that cannot sometimes receive vaccines. However, suppose many people do not vaccinate themselves or their children. In that case, the "herd immunity" disappears, opening up opportunities for viruses and bacteria to establish themselves and spread. With so many people resistant, an infectious disease will never get a chance to establish itself and spread. </p>
            <p>Moreover, international travel often carries a disease from abroad, and an unvaccinated individual will be at far greater risk of getting sick or people have got infected while travelling. The increased measles incidence illustrates this in the US in recent years. As long as disease exists, we are at risk of getting infected. </p>
            
            <section class="e-card">
                <h4 class="mt-0">References</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.cdc.gov/mmwr/volumes/68/wr/mm6819a4.htm" target="_blank">https://www.cdc.gov/mmwr/volumes/68/wr/mm6819a4.htm</a></li>
                    <li><a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9" target="_blank">https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9</a></li>
                </ul>
            </section>



            <UiCardInfo class="my-8" theme="blue" icon="material-symbols:edit-document">
                More COVID-19 myths and related scientific research can be found from: <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/science-in-5/episode-8---myth-vs-science" target="_blank">
                    WHO - Myth vs Science
                </a>
            </UiCardInfo>

 


        </section>
    </div>
</template>