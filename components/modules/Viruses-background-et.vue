<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <UiTableOfContents class="w-full lg:max-w-xs print:hidden" />



        <section class="e-article">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Viruses</h1>
            <h5 class="font-normal uppercase leading-tight">Viirused: teadusinfo</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">1. Viirused vs bakterid</h2>
        
            <p class="font-bold">Bacteria and viruses can cause many common infections. But what are the differences between these two kinds of infectious organisms?</p>
        
            <p><span class="e-term font-Heading">Bacteria</span> are tiny microorganisms that are made up of a single cell. They're very diverse and can have many shapes and structural features. Bacteria can live in almost every conceivable environment, including in or on the human body. Only a handful of bacteria cause infections in humans. These bacteria are referred to as pathogenic bacteria.</p>
        
            <p><span class="e-term font-Heading">Viruses</span> are another type of tiny microorganism, even smaller than bacteria. Like bacteria, they're very diverse and have a variety of shapes and features. Viruses are parasitic. That means they require living cells or tissue in which to grow. Viruses can invade the cells of your body, using the components of your cells to grow and multiply. Some viruses even kill host cells as part of their life cycle. Differences between viruses and bacteria can be seen in figure 1 and found in table 1.</p>
        
            <UiContentImage
                src="https://evidence.onkel.ee/assets/viruses-01__bacteria-vs-virus.webp"
                credits="Source: https://inducoat.com/?attachment_id=24945&lang=en"
                :elevated="true">
                <template #caption>
                    <b>Figure 1.</b> Structural differences between viruses and bacteria
                </template>
            </UiContentImage>
        
            <table class="mt-20">
                <caption class="text-left pb-4"><b>Table 1.</b> Differences between bacteria and viruses</caption>
                <thead>
                    <tr>
                        <th></th>
                        <th>Bacteria</th>
                        <th>Viruses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="align-baseline">
                            Living
                        </th>
                        <td>
                            <b>Living organism.</b><br>Bacteria are living organisms with a single cell that can generate energy, make their own food, move and reproduce (typically by binary fission). This allows bacteria to live in many places - soil, water, plants, and the human body - and serve many purposes.<br>Bacteria include both parasites and non-parasites.
                        </td>
                        <td>
                            <b>Nonliving.</b><br />Viruses only grow and reproduce inside the host cells they infect. When found outside of these living cells, viruses are dormant. Their “life,” therefore, requires the hijacking of the biochemical activities of a living cell.<br />All viruses are intracellular parasites.
                        </td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Number of cells</th>
                        <td>Unicellular, one cell</td>
                        <td>No cells, not living</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Repro&shy;duction</th>
                        <td>Split into 2</td>
                        <td>Invades a host cell and takes over the cell causing it to make copies of the viral DNA/RNA. Destroys the host cell releasing new viruses</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Size</th>
                        <td>Bacteria are much bigger, ranging from 800 nm to 1000 nm. Bacteria can be seen under a light microscope.</td>
                        <td>The size of viruses is between 20 nm to 400 nm. Viruses are visible only under electron microscopes.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Benefits</th>
                        <td>Some bacteria are beneficial, e.g., certain bacteria are required in the gut).</td>
                        <td>Viruses are not beneficial. Viruses can be helpful in genetic engineering.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Infection</th>
                        <td>Bacterial infection is usually confined to a part of the body, described as a localized infection. Infections may be caused by bacteria or by toxins (endotoxins) produced.</td>
                        <td>A viral infection is systemic. Viruses infect a host cell and multiply by thousands, leaving the host cell and infecting other body cells.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Disease</th>
                        <td>Bacterial diseases include pneumonia, tuberculosis, tetanus, and food poisoning.</td>
                        <td>Systemic diseases caused by viral infection include influenza, measles, polio, AIDS, and COVID-19.</td>
                    </tr>
                    <tr>
                        <th class="align-baseline">Treat&shy;ment</th>
                        <td>Antibiotics and vaccines prevent the disease.</td>
                        <td>Vaccines prevent the spread, and antiviral medications help to slow reproduction but cannot stop it completely.</td>
                    </tr>
                </tbody>
            </table>

            <UiCardInfo class="mb-8" >
                Antibiotics can help the immune system to kill off bacterial infections but are useless against viral infections. Antiviral drugs work differently than antibiotics and are currently only effective against a few viral diseases, such as influenza, herpes, hepatitis B and C, and HIV. Viral infections can be much harder to kill than bacterial infections because the virus goes into human cells. The immune system can sometimes kill the infected cells before the virus can reproduce. However, as the virus reproduces, it often kills the infected cell by exploding out, which allows the virus to spread to other cells in the body.
            </UiCardInfo>

            
            <section class="e-card">
                <h4 class="mt-4">References</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://courses.lumenlearning.com/suny-biology2xmaster/chapter/prevention-and-treatment-of-viral-infections/">https://courses.lumenlearning.com/suny-biology2xmaster/chapter/prevention-and-treatment-of-viral-infections/</a></li>
                        <li><a href="https://bodell.mtchs.org/OnlineBio/BIOCD/text/chapter16">https://bodell.mtchs.org/OnlineBio/BIOCD/text/chapter16</a></li>
                    <li><a href="
                        http://www.hcrowder.com/disease-reading.html">
                        http://www.hcrowder.com/disease-reading.html</a></li>
                </ul>
            </section>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            <hr id="section-2" class="mt-10 mb-40" />
            <h2>2. Why do antibiotics not kill viruses?</h2>
            
            <p>Antibiotics target the growth machinery in bacteria (not viruses) to kill or inhibit those particular bacteria. Antibiotics cannot kill viruses because viruses have different structures and replicate differently than bacteria. Moreover, overuse and inappropriate prescribing of antibiotics worldwide are leading to the global healthcare issue of <a href="https://www.drugs.com/article/antibiotic-resistance.html" target="_blank">antibiotic resistance</a>. See Table 2 in which conditions antibiotics may be helpful (NB! the decision on its use will be made by your doctor).</p>
            
            
            <table class="leading-tight e-card">
                <caption class="text-left pb-4">
                    <b>Table 2.</b> Need for antibiotics by common respiratory infections
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
                            <p class="text-xs text-slate-400">Source: https://www.cdc.gov/antibiotic-use/images/VirusOrBacteria-Original-1200by675.jpg</p>
                        </td>
                    </tr>
                </tfoot>
            </table>


            <section class="e-card">
                <h4 class="mt-0">References</h4>
                <ul class="text-sm break-all">
                    <li>
                        <a href="https://www.drugs.com/article/antibiotics-and-viruses.html" target="_blank">https://www.drugs.com/article/antibiotics-and-viruses.html</a>
                    </li>
                    <li>
                        <a href="https://www.virology.ws/2009/10/19/ten-cool-facts-about-viruses/" target="_blank">https://www.virology.ws/2009/10/19/ten-cool-facts-about-viruses/</a>
                    </li>
                </ul>
            </section>
        
        










            <hr id="section-3" class="mt-10 mb-40" />
            <h2>3. How vaccines work</h2>

            <h3>The body's natural response</h3>

            <p>A <span class="e-term font-Heading">pathogen</span> is a bacterium, virus, parasite, or fungus that can cause disease within the body. Each pathogen is made up of several subparts, usually unique to that specific pathogen and the disease it causes. The subpart of a pathogen that causes the formation of antibodies is called an antigen. The antibodies produced in response to the pathogen's antigen are essential to the immune system. You can consider antibodies as the soldiers in your body's defense system. Each antibody, or soldier, in our system, is trained to recognize one specific antigen. We have thousands of different antibodies in our bodies. When the human body is exposed to an antigen for the first time, it takes time for the immune system to respond and produce antibodies specific to that antigen (Fig. 2). </p>

            <p>Antibodies to one pathogen generally do not protect against another pathogen except when two pathogens are very similar to each other, like cousins. Once the antigen-specific antibodies are produced, they work with the rest of the immune system to destroy the pathogen and stop the disease. Once the body produces antibodies in its primary response to an antigen, it also creates antibody-producing memory cells, which remain alive even after the antibodies defeat the pathogen. Suppose the body is exposed to the same pathogen more than once. In that case, the antibody response is much faster and more effective than the first time because the memory cells are ready to pump antibodies against that antigen. This means that if the person is exposed to a dangerous pathogen in the future, their immune system will be able to respond immediately, protecting against disease. </p>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/viruses-03.webp"
                credits="Source: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html"
                :elevated="true">
                <template #caption>
                    <b>Figure 2.</b> For every new antigen, our body needs to build a specific antibody
                </template>
            </UiContentImage>

            <h3>How vaccines help?</h3>

            <p>Vaccines reduce the risks of getting a disease by working with your body's natural defenses to build protection. When you get a vaccine, your immune system responds.</p>
            <p>Vaccines contain weakened or inactive parts of a particular organism (antigen) that triggers an immune response within the body (Fig. 3). Newer vaccines contain the blueprint for producing antigens rather than the antigen itself. Regardless of whether the vaccine is made up of the antigen itself or the blueprint so that the body will produce the antigen, this weakened version will not cause the disease in the person receiving the vaccine. However, it will prompt their immune system to respond much as it would have on its first reaction to the actual pathogen.</p>

            <UiContentImage
                src="https://evidence.onkel.ee/assets/viruses-04.webp"
                credits="Source: https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work"
                :elevated="true">
                <template #caption>
                    <b>Figure 3.</b> Antibody development through vaccination
                </template>
            </UiContentImage>

            <p>Vaccines work by exposing your white blood cells to the foreign protein in a virus. Once your body has encountered a virus and performed an immune response (making B and T cells) to the virus, it saves the B and T cells so that if the same virus or bacteria ever infects the body again, the immune system can stage and all-out war, preventing the pathogen from ever making you feel sick. Vaccines introduce the body to the virus so that the body can save up B and T cells without ever making you sick.</p>

            <h3>Immunization  and related challenges</h3>

            <p>We now have vaccines to prevent more than 20 life-threatening diseases, helping people of all ages live longer, healthier lives. Immunization currently prevents 2-3 million deaths yearly from diseases like diphtheria, tetanus, pertussis, influenza, and measles.</p>

            <p>We have vaccinations against many serious viral infections (measles, mumps, hepatitis A, hepatitis B, and some viruses - such as those that cause the common cold). Still, the problem remains that they can mutate from one person to the next. When the virus mutates, it changes enough that the immune system no longer recognizes it. The immune cells stored for killing the virus no longer recognize it as the same disease and do not know how to kill it. This is how an infection with the same virus can keep dodging the immune system. Vaccination for these viruses is difficult because they have already changed their format by the time vaccines are develop</p>

            <section class="e-card">
                <h4 class="mt-0">References</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work" target="_blank">https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work</a></li>
                    <li><a href="" target="_blank">https://www.nytimes.com/interactive/2020/health/pfizer-biontech-covid-19-vaccine.html </a></li>
                    <li><a href="" target="_blank">https://media.nature.com/original/magazine-assets/d41586-021-03552-w/d41586-021-03552-w.pdf </a></li>
                    <li><a href="" target="_blank">https://opentextbc.ca/biology/chapter/12-1-viruses/ </a></li>
                </ul>
            </section>















            <hr id="section-4" class="mt-10 mb-40" />
            <h2>4. The process of developing vaccines, vaccines safety</h2>

            <h3>Development</h3>
            <p>Vaccine development typically begins in a research laboratory located in a university, medical center, or small biotech company. During vaccine development, scientists develop different reagents to test and measure their effect (or lack thereof). Often years of research are needed to find ideas that work.</p>
            <p>Different scientists or research groups may work toward the same goals during vaccine development. The progress of the work is presented in different meetings and peer-reviewed articles in journals. If any work seems promising, pharmaceutical scientists may approach those working on it to expand their research toward product development.</p>


            <h3>Testing</h3>

            <p>If a promising vaccine candidate has been found, it has to be tested on animals. This is called the pre-clinical phase. First small animals like mice, rats, rabbits, and others are used. If the candidate affects small animals, the effect has to be usually proven on larger animals like monkeys. If the vaccine triggers an immune response, it is tested in three phases in human clinical trials (WHO, 2021).</p>
            <p>In Phase 1, the vaccine is given to a few volunteers to assess its safety, confirm it generates an immune response, and determine the proper dosage. Generally, in this phase, vaccines are tested in a small group of young, healthy adult volunteers.</p>
            <p>In phase 2, the vaccine is given to several hundred volunteers to assess its safety and ability further to generate an immune response. Participants in this phase have the same characteristics (such as age and sex) as those for whom the vaccine is intended. There are usually multiple trials in this phase to evaluate various age groups (elderly, adults, children) and different vaccine formulations. Also, a group that does not get the vaccine is usually included in determining whether the changes in the vaccinated group are attributed to the vaccine or have happened by chance.</p>
            <p>In phase 3, the vaccine is given to thousands of volunteers – compared to a similar group of people who did not get the vaccine but received a comparator product. This aims to determine if the vaccine is effective against the disease it is designed to protect against. Also, it aims to study its safety in a much larger group of people. Phase 3 trials are often conducted across multiple countries and sites within a country to ensure the findings of the vaccine performance apply to many different populations. </p>
            <p>During phase 2 and 3 trials, the volunteers and the scientists conducting the study are shielded from knowing which volunteers had received the vaccine being tested or the comparator product. This is called “blinding” and is necessary to ensure that neither the volunteers nor the scientists are influenced in their assessment of effectiveness or safety by knowing who got which product.</p>


            <section class="e-card">
                <h4 class="mt-0">References</h4>
                <ul class="text-sm break-all">
                    <li>
                        <a href="https://www.who.int/news-room/feature-stories/detail/how-are-vaccines-developed" target="_blank">https://www.who.int/news-room/feature-stories/detail/how-are-vaccines-developed</a>
                    </li>
                </ul>
            </section>

            <h3>Authorization and monitoring</h3>
            
            <p>When the results of all these clinical trials are available, a series of steps are required. Officials in European Medicines Agency and later in each country closely review the study data and decide whether to authorize the vaccine. All the trials have to be correctly done and well documented. A vaccine must be proven safe and effective across a broad population before it is approved. The bar for vaccine safety and efficacy is exceptionally high. This includes reviews of efficacy and safety for regulatory and public health policy approvals. </p>
            <p>Further monitoring of safety and effectiveness takes place during the use of vaccines. This enables scientists to keep track of vaccine impact and safety even as they are used in many people over a long time frame. These data are used to adjust the policies for vaccine usage. </p>

            <section class="e-card">
                <h4 class="mt-0">References</h4>
                
                <ul class="text-sm break-all">
                    <li><a href="https://www.worldscientific.com/doi/pdf/10.1142/S2529732521400034" target="_blank">https://www.worldscientific.com/doi/pdf/10.1142/S2529732521400034</a></li>
                </ul>
            </section>

















            <hr id="section-5" class="mt-10 mb-40" />
            <h2>5. Masks against viruses and bacteria</h2>

            <p>Masks are often used to protect against viruses and bacteria. They had become widespread in the sense of protection against the SARS-CoV-2 virus. Among different types of masks, surgical face masks are among the most commonly used face coverings in the COVID-19 pandemic. Typically, they are blue colored from one side, which should be kept as an outer layer (Fig. 4). The main aim of surgical masks is to protect patients from potential contact with bacteria and viruses exhaled by the wearer. So, they well prevent the spread of the coronavirus through the air but are less effective means of protecting the wearer from the virus.</p>
            <p>FFP2 or FFP3 masks (often called respirators) should be used to filter and better inhale air. The numbering system (FFP1, FPP2, FFP3) indicates these devices' filtration efficiency (certified as meeting the EN 149-2001 standard). FFP2 and FPP3 have a filtration efficiency for airborne particles (including those that contain the virus) of 92% and 98%, respectively. Both masks also have small inward leakage: &lt;8% and &lt;2%, respectively. In FFP2, special rubber is often used on the outer layer of the respirator. If in occupational environments, a valve (that makes exhaling easier) has been allowed, in the case of SARS-CoV-2, only non-valve respirators should be used in order to filter also exhaled air.  </p>
            <p>With the COVID-19 pandemic, a new face mask has been introduced: the filtering mask. This type of mask is made of multilayer fabric (one has to be a nanofibre filter that guarantees a bacterial and harmful fine dust filtering capacity of at least 90%). This mask combines high filtration capacity with reusability as it can be machine washed at 60 degrees.</p>

            <div class="grid gap-3 my-15 md:grid-cols-2 e-card">
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-01.webp"
                >
                    <template #caption>
                        Surgical mask
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-02.webp"
                    caption="">
                    <template #caption>
                        FFP2 mask (respirator)
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-03.webp">
                    <template #caption>
                        FFP3 mask (respirator) with valve
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-06__mask-04.webp">
                    <template #caption>
                        Filtering mask
                    </template>
                </UiContentImage>
            </div>

            <p>The efficiency of the masks has been tested in special laboratories, e.g., in the exposure chamber. In those studies, a carrying the viruses. Subsequently, particle concentrations behind the particle generator fill the exposure chamber with small particles; similar to aerosols, the masks are measured and compared to the concentration in the general atmosphere of the exposure chamber.</p>
            <p>However, the strongest evidence is based on epidemiologic data from real-life situations. For instance, the daily COVID-19 growth rate is slowdown after mask mandates in 15 states and the District of Columbia in the US. Another study examined coronavirus deaths across 198 countries and found that those with cultural norms or government policies favoring mask-wearing had lower death rates.</p>
            <p>Many Facebook and social media users have shared misleading posts regarding the prolonged use of face masks causing oxygen deficiency in the body - hypoxia. Nevertheless, research articles and experts suggest that such symptoms are unlikely to occur in most people unless the wearer has pre-existing respiratory illnesses such as asthma or chronic obstructive pulmonary disease (COPD). The risk of hypoxia and hypercapnia (having excessive carbon dioxide in the bloodstream) are unlikely to occur with cloth and surgical masks as they are not tight-fitting. Still, it is warned that face masks should not be placed on young children under two years old, those with breathing difficulty, or when exercising.</p>

            <section class="e-card">
                <h4 class="mt-0">References</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9" target="_blank">https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10652-9</a></li>
                    <li><a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2774266" target="_blank">https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2774266</a></li>
                    <li><a href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00818" target="_blank">https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00818</a></li>
                    <li><a href="https://www.ajtmh.org/view/journals/tpmd/103/6/article-p2400.xml" target="_blank">https://www.ajtmh.org/view/journals/tpmd/103/6/article-p2400.xml</a></li>
                    <li><a href="" target="_blank">https://www.epa.gov/sciencematters/epa-researchers-test-effectiveness-face-masks-disinfection-methods-against-covid-19 </a></li>
                    <li><a href="https://journals.asm.org/doi/full/10.1128/mSphere.00637-20" target="_blank">https://journals.asm.org/doi/full/10.1128/mSphere.00637-20</a></li>
                    <li><a href="" target="_blank">https://pubmed.ncbi.nlm.nih.gov/33626065/ </a></li>
                </ul>
            </section>



            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">For further study</h3>
                    <ul class="leading-tight">
                        <li><a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/n95-respirators-surgical-masks-face-masks-and-barrier-face-coverings#s3" target="_blank">N95 Respirators, Surgical Masks, Face Masks, and Barrier Face Coverings</a></li>
                        <li><a href="https://www.sciencedirect.com/science/article/pii/S2452199X20301481" target="_blank">An overview of filtration efficiency through the masks: Mechanisms of the aerosols penetration</a></li>
                        <li><a href="https://www.weforum.org/agenda/2020/10/covid-19-coronavirus-disease-size-compairson-zika-health-air-pollution/" target="_blank">This is how coronavirus compares to the world's smallest particles</a></li>
                    </ul>
                </div>
            </UiCardInfo>














            <hr id="section-6" class="mt-10 mb-40" />
            <h2>6. Viruses and hand hygiene</h2>

            <h3>Hand sanitiser or soap?</h3>
            
            <p>Our hands can be a critical vector in the transmission of infections. When applied to hands thoroughly and scrubbed for at least 20 seconds, alcohol-based hand sanitizers and soap will stop the coronavirus. However, soap disrupts the sticky bond between pathogens and your skin, allowing the pathogens to slide right off. Not only are you neutralizing the virus, but you are also physically knocking it off your hands. Practicing good hand hygiene is a simple preventative strategy that most people can easily undertake, and many studies have demonstrated the effectiveness of hand hygiene in preventing the transmission of infectious pathogens, including coronaviruses such as SARS-CoV-2.</p>

            <section class="e-card">
                <h4 class="mt-0">References</h4>
                
                <ul class="text-sm break-all">
                    <li>
                        <a href="https://www.uchealth.org/today/why-soap-and-water-work-better-than-hand-sanitizer-to-remove-the-coronavirus/" target="_blank">https://www.uchealth.org/today/why-soap-and-water-work-better-than-hand-sanitizer-to-remove-the-coronavirus/</a>
                    </li>
                </ul>
            </section>

            <h3>Weakening the corona virus with soap</h3>
            
            <p>Coronaviruses get their name from the "corona" surrounding the virus— the protein spikes embedded in its surface. The spikes, which are responsible for infecting the host, are anchored into a membrane. The membrane is the "shell" of the virus and the virus's weak point. </p>
            <p>Soap molecules have two chemically distinct parts: a hydrophilic (water-loving) "head" and a hydrophobic (water-hating) "tail". The head helps the soap mix with water, while the tail can interact with other hydrophobic molecules like lipids.</p>
            <p>Luckily, the coronavirus's membrane is mainly made up of lipid molecules. They are held together by weak chemical interactions between individual molecules. The hydrophobic (water-hating) "tails" of soap molecules can break interactions between lipid molecules in the coronavirus membrane (see Fig. 5).</p>
            <p>The soap's tail can disrupt the weak interactions between lipid molecules in the membrane, tearing it apart. Suppose the virus is broken up before being safely sheltered in a host cell. In that case, it will no longer be able to do its infectious job — like a machine with its parts falling out. Soap molecules then surround virus fragments with all tails facing inside. This cluster is called a micelle (see Fig. 6). The outward-facing hydrophilic heads allow the micelle to be washed down the drain with water. Water alone will not do.</p>


            <div class="grid gap-2 md:grid-cols-2 e-card">
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-07.webp"
                    credits="Source: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html">
                    <template #caption>
                        <b>Figure 5.</b> Soap molecules destroying the virus
                    </template>
                </UiContentImage>
                <UiContentImage
                    src="https://evidence.onkel.ee/assets/viruses-08.webp"
                    credits="Source: https://www.nytimes.com/2020/03/13/health/soap-coronavirus-handwashing-germs.html">
                    <template #caption>
                        <b>Figure 6.</b> Micelle consisting of soap molecules and virus fragment
                    </template>
                </UiContentImage>
            </div>

            <p>The given information is also valid for the other enveloped viruses (Influenza, Hepatitis B and C, and Ebola Virus Disease) as their envelopes consist of phospholipids.</p>

            <section class="e-card">
                <h4 class="mt-0">Reference</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.science.org.au/curious/people-medicine/hand-sanitiser-or-soap-making-informed-choice-covid-19" target="_blank">https://www.science.org.au/curious/people-medicine/hand-sanitiser-or-soap-making-informed-choice-covid-19</a></li>
                </ul>
            </section>

            <h3>Choosing hand sanitizer</h3>

            <p>The World Health Organization (WHO) recommends alcohol-based hand sanitizers if you have no soap on hand. </p>
            
            <p><b>Alcohol-based hand sanitizers are thought to work by preventing the proteins of microbes—including bacteria and some viruses—from functioning normally. Hand sanitizers with a high alcohol content might also interfere with the lipid shell surrounding the coronavirus.</b> To be effective, hand sanitizers must contain at least 60 percent alcohol. The additives in the sanitizer can keep the alcohol from evaporating too fast, allowing the virus to be drenched for longer. </p>
            <p>However, there are also certain risks related to using alcohol-based hand sanitizers. There is an increased alcohol poisoning risk for children, and frequent usage of hand sanitizers could result in antimicrobial resistance. There are alternative alcohol-free hand sanitizers, where benzalkonium is most commonly used. Recent studies have indicated that alcohol-free hand sanitizer works just as well and does not cause the familiar "burn" feeling known from using alcohol hand sanitizer.</p>
            
            <section class="e-card">
                <h4 class="mt-0">References</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0048969720340833?via%3Dihub" target="_blank">https://www.sciencedirect.com/science/article/abs/pii/S0048969720340833?via%3Dihub</a></li>
                    <li><a href="https://www.journalofhospitalinfection.com/article/S0195-6701(20)30547-8/fulltext#secsectitle0040" target="_blank">https://www.journalofhospitalinfection.com/article/S0195-6701(20)30547-8/fulltext#secsectitle0040</a></li>
                </ul>
            </section>













            <h1 class="mt-40">Vaccine myths</h1>

            <hr id="myth-1" class="mt-10 mb-40" />
            <h2>Myth 1: Vaccines cause autism/serious side effects.</h2>

            <p>The widespread fear that vaccines increase the risk of autism originated with a 1997 study published by Andrew Wakefield, a British surgeon. The article was published in The Lancet, a prestigious medical journal, suggesting that the measles, mumps, and rubella (MMR) vaccine increased autism in British children.</p>
            <p>The paper has since been thoroughly discredited due to serious procedural errors, having only 12 participants in the study, undisclosed financial conflicts of interest, and ethical violations. Andrew Wakefield lost his medical license, and the paper was retracted from The Lancet.</p>
            <p>Currently, against the autism-vaccination link theory, several studies have now identified symptoms of autism in children well before they receive the MMR vaccine. Moreover, recent research provides evidence that autism develops in utero, well before a baby is born or receives vaccinations. None of the latter studies has reported a link between any vaccine and the likelihood of developing autism.</p>

            <section class="e-card">
                <h4 class="mt-0">References</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(97)11096-0/fulltext" target="_blank">https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(97)11096-0/fulltext</a></li>
                    <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home" target="_blank">https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home</a></li>
                </ul>
            </section>


            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">For further study</h3>
                    <ul class="leading-tight">
                        <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect/after.html" target="_blank">Possible Side Effects After Getting a COVID-19 Vaccine</a></li>
                        <li><a href="https://www.bbc.com/news/health-55932832" target="_blank">Study reveals extent of Covid vaccine side-effects</a></li>
                        <li><a href="https://www.nature.com/articles/d41586-021-00290-x" target="_blank">COVID vaccines and safety: what the research says</a></li>
                        <li><a href="https://health.clevelandclinic.org/covid-19-vaccine-side-effects/" target="_blank">Here’s What to Know About the COVID-19 Vaccine Side Effects</a></li>
                        <li><a href="https://www.who.int/news-room/q-a-detail/coronavirus-disease-(covid-19)-vaccines-safety" target="_blank">Coronavirus disease (COVID-19): Vaccines safety</a></li>
                        <li><a href="https://www.historyofvaccines.org/content/articles/vaccine-side-effects-and-adverse-events" target="_blank">Vaccine Side Effects and Adverse Events</a></li>
                        <li><a href="https://www.bbc.com/news/health-56375307" target="_blank">Vaccine side effects: My experience of them and what they mean</a></li>
                        <li><a href="https://vk.ovg.ox.ac.uk/vk/vaccine-side-effects" target="_blank">Vaccine side effects and adverse reactions</a></li>
                        <li>📺<a href="https://www.youtube.com/watch?v=F6NKbQzo4aE" target="_blank">Vaccine side effects are actually a good thing</a></li>
                        <li>📺<a href="https://www.youtube.com/watch?v=Atrx1P2EkiQ" target="_blank">Vaccines and the Immune Response: How Vaccines Work</a></li>
                    </ul>
                </div>
            </UiCardInfo>

            









            <hr id="myth-2" class="mt-10 mb-40" />
            <h2>Myth 2: Infant immune systems cannot handle multiple vaccines</h2>

            <p>Children are given vaccines at a young age because they are at the highest risk of getting sick or dying if they get these diseases. Even newborn babies are immune to some diseases (e.g., chickenpox) because they get antibodies from their mothers; this immunity lasts only a few months. Moreover, most babies do not get protective antibodies against diphtheria, whooping cough, polio, tetanus, hepatitis B, or Hib from their mothers.</p>
            <p>To reduce the number of shots a child receives in a doctor's visit, some vaccines are offered as a combination (two or more different vaccines have been combined into a single shot). Examples of combination vaccines are diphtheria-tetanus-pertussis (DTap) and measles-mumps-rubella (MMR). </p>
            <p>Scientific data show that getting several vaccines simultaneously does not cause any health problems. Infant immune systems are tougher than you might think. Based on the number of antibodies present in the blood, a baby would theoretically have the ability to respond to a far larger number of vaccines than are ever shot (the question has risen if it is 1,000, 10,000, or 100,000 at one time). Even if all ~10 (depending on national vaccination plan) scheduled vaccines were given at once, it would only use a fraction of a baby's immune capacity. In reality, babies are exposed to countless bacteria and viruses every day, and immunisations are negligible in comparison. Also, studies have not shown that exposure to multiple vaccines through the first 23 months of life would be associated with an increased risk for infections not targeted by vaccines.</p>

            <section class="e-card">
                <h4 class="mt-0">References</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home" target="_blank">https://www.nejm.org/doi/full/10.1056/NEJMoa1307491?query=featured_home</a></li>
                    <li><a href="https://www.bmj.com/content/364/bmj.l1481/rr-11" target="_blank">https://www.bmj.com/content/364/bmj.l1481/rr-11</a></li>
                    <li><a href="https://pubmed.ncbi.nlm.nih.gov/11773551/" target="_blank">https://pubmed.ncbi.nlm.nih.gov/11773551/</a></li>
                </ul>
            </section>











            <hr id="myth-3" class="mt-10 mb-40" />
            <h2>Myth 3: Immunity acquired through a disease is better than immunity acquired through vaccination</h2>


            <p>It is true that natural infection almost always results in a stronger immunity to the disease than a vaccination. However, the dangers of this approach far outweigh the relative benefits. The price for immunity after natural infection might be pneumonia from chickenpox or pneumococcus, intellectual disability from Haemophilus influenzae type b (Hib), birth defects from rubella, liver cancer from hepatitis B virus, death from measles, etc. If you wanted to gain immunity to measles, for example, by contracting the disease, you would face a 1 in 500 chance of death from your symptoms. In contrast, the number of people who have had severe allergic reactions from an MMR vaccine is less than one-in-one million.</p>
            <p>Nevertheless, few vaccines induce a better immune response than natural infection. For instance, the Human papillomavirus (HPV) vaccine contains a high purity of the specific protein, leading to a better immune response than natural infection. Other examples include tetanus, Haemophilus influenzae type b (Hib), and pneumococcal vaccine.</p>
            <p>Regarding COVID-19, it needs to be clarified. It has been shown that permanent protection after infection is unlikely. Even though coronavirus patients gained “substantial immune memory” that involved all four significant parts of the immune system: memory B cells, antibodies, memory CD4+ T cells, and memory CD8+ T cells, the protection started to reduce after half a year. Also, scientists have shown a “massive dynamic range” in the immune response between individuals, with a 200-fold difference in antibody levels.</p>
            <p>Other studies have shown that volunteers who received the Moderna vaccine (mRNA) had more antibodies — one marker of immune response — in their blood than did people who had been sick with COVID-19. However, this fact can be modified by the severity of the disease as there is a correlation between disease severity and lasting immune response – most asymptomatic patients had very few antibodies after six months of infection. Thus, the natural immunity generated from a SARS-CoV-2 infection is often unpredictable. Moreover, the antibodies elicited by the mRNA vaccine targeted a broader range of places on the Receptor Binding Domain (RBD) than those elicited by natural infection.</p>


            <section class="e-card">
                <h4 class="mt-0">References</h4>
                
                <ul class="text-sm break-all">
                    <li>
                        <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00675-9/fulltext" target="_blank">https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00675-9/fulltext</a>
                    </li>
                    <li>
                        <a href="https://science.sciencemag.org/content/371/6529/eabf4063" target="_blank">https://science.sciencemag.org/content/371/6529/eabf4063</a>
                    </li>
                    <li>
                        <a href="https://www.nejm.org/doi/full/10.1056/NEJMc2032195" target="_blank">https://www.nejm.org/doi/full/10.1056/NEJMc2032195</a>
                    </li>
                    <li>
                        <a href="https://www.researchsquare.com/article/rs-612205/v1" target="_blank">https://www.researchsquare.com/article/rs-612205/v1</a>
                    </li>
                    <li>
                        <a href="https://stm.sciencemag.org/content/13/600/eabi9915" target="_blank">https://stm.sciencemag.org/content/13/600/eabi9915</a>
                    </li>
                </ul>
            </section>













            <hr id="myth-4" class="mt-10 mb-40" />
            <h2>Myth #4: Vaccines contain life-threatening substances.</h2>
            
            
            <p>People are concerned about using formaldehyde, mercury, or aluminium in vaccines. On the one hand, these chemicals are toxic to the human body at certain levels. On the other hand, only tiny amounts of these chemicals can be found in vaccines. Those amounts are smaller than we get from nutrition or formaldehyde is produced at higher rates by our own metabolic systems.</p>
            <p>Certain elements, such as aluminium salts, are added to vaccines because they work as an adjuvant, which means their presence boosts the immune response when you are vaccinated. Also, only certain vaccines contain aluminium salts, and new COVID-19 vaccines do not contain them. A few vaccines have contained thimerosal as a preservative; however, none of the vaccines used in children currently contains this. Thimerosal contains ethylmercury, which is cleared from the human body quickly compared to methylmercury, which bioaccumulates – so there is also a difference in which form toxic metal is. Nevertheless, COVID-19 vaccines do not contain toxins (e.g.).</p>

            <section class="e-card">
                <h4 class="mt-0">References</h4>
                <ul class="text-sm break-all">
                    <li><a href="https://stm.sciencemag.org/content/13/600/eabi9915" target="_blank">https://stm.sciencemag.org/content/13/600/eabi9915</a></li>
                    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6373706/" target="_blank">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6373706/</a></li>
                    <li><a href="https://www.cdc.gov/vaccines/hcp/conversations/downloads/vacsafe-thimerosal-color-office.pdf" target="_blank">https://www.cdc.gov/vaccines/hcp/conversations/downloads/vacsafe-thimerosal-color-office.pdf</a></li>
                    <li><a href="https://www.technologyreview.com/2020/12/09/1013538/what-are-the-ingredients-of-pfizers-covid-19-vaccine/" target="_blank">https://www.technologyreview.com/2020/12/09/1013538/what-are-the-ingredients-of-pfizers-covid-19-vaccine/</a></li>
                </ul>
            </section>



            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                <div>
                    <h3 class="mt-6 pt-3 mb-10">For further study</h3>
                    <ul class="leading-tight">
                        <li><a href="https://www.publichealth.org/public-awareness/understanding-vaccines/goes-vaccine/" target="_blank">What Goes Into A Vaccine?</a></li>
                        <li>📺<a href="https://www.youtube.com/watch?v=Atrx1P2EkiQ" target="_blank">Vaccines and the Immune Response: How Vaccines Work</a></li>
                        <li><a href="https://www.cdc.gov/vaccines/vac-gen/additives.htm" target="_blank">What’s in Vaccines?</a></li>
                    </ul>
                </div>
            </UiCardInfo>














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



            <UiCardInfo class="my-8" theme="sky-500" icon="material-symbols:edit-document">
                More COVID-19 myths and related scientific research can be found from: <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/science-in-5/episode-8---myth-vs-science" target="_blank">
                    WHO - Myth vs Science
                </a>
            </UiCardInfo>

 


        </section>
    </div>
</template>