<template>
    <div class="flex items-start">
        <UiTableOfContents class="order-2">
            <ol class="">
                <li class="">
                    <a href="#">Viruses versus bacteria</a>
                </li>
                <li>
                    <a href="#">Why do antibiotics not kill viruses?</a>
                </li>
            </ol>
        </UiTableOfContents>
        <section class="e-article">
            <h1>Viruses</h1>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2>1. Viruses versus bacteria</h2>
        
            <p class="font-bold">Bacteria and viruses can cause many common infections. But what are the differences between these two kinds of infectious organisms?</p>
        
            <p><span class="e-term e-font__special">Bacteria</span> are tiny microorganisms that are made up of a single cell. They're very diverse and can have many shapes and structural features. Bacteria can live in almost every conceivable environment, including in or on the human body. Only a handful of bacteria cause infections in humans. These bacteria are referred to as pathogenic bacteria.</p>
        
            <p><span class="e-term e-font__special">Viruses</span> are another type of tiny microorganism, even smaller than bacteria. Like bacteria, they're very diverse and have a variety of shapes and features. Viruses are parasitic. That means they require living cells or tissue in which to grow. Viruses can invade the cells of your body, using the components of your cells to grow and multiply. Some viruses even kill host cells as part of their life cycle. Differences between viruses and bacteria can be seen in figure 1 and found in table 1.</p>
        
            <!-- <nuxt-img
                provider="gumlet"
                src="/assets/viruses-04.webp"
                fit="contain"
                :modifiers="{ format: 'auto', compress: 'true' }"
            /> -->
            <UiContentImage
                src="https://evidence.onkel.ee/assets/viruses-01__bacteria-vs-virus.webp"
                caption="<b>Figure 1.</b> Structural differences between viruses and bacteria"
                credits="Source: https://inducoat.com/?attachment_id=24945&lang=en"
                :elevated="true"
            />
        
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
                        <th>
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
                        <th>Number of cells</th>
                        <td>Unicellular, one cell</td>
                        <td>No cells, not living</td>
                    </tr>
                    <tr>
                        <th>Repro&shy;duction</th>
                        <td>Split into 2</td>
                        <td>Invades a host cell and takes over the cell causing it to make copies of the viral DNA/RNA. Destroys the host cell releasing new viruses</td>
                    </tr>
                    <tr>
                        <th>Size</th>
                        <td>Bacteria are much bigger, ranging from 800 nm to 1000 nm. Bacteria can be seen under a light microscope.</td>
                        <td>The size of viruses is between 20 nm to 400 nm. Viruses are visible only under electron microscopes.</td>
                    </tr>
                    <tr>
                        <th>Benefits</th>
                        <td>Some bacteria are beneficial, e.g., certain bacteria are required in the gut).</td>
                        <td>Viruses are not beneficial. Viruses can be helpful in genetic engineering.</td>
                    </tr>
                    <tr>
                        <th>Infection</th>
                        <td>Bacterial infection is usually confined to a part of the body, described as a localized infection. Infections may be caused by bacteria or by toxins (endotoxins) produced.</td>
                        <td>A viral infection is systemic. Viruses infect a host cell and multiply by thousands, leaving the host cell and infecting other body cells.</td>
                    </tr>
                    <tr>
                        <th>Disease</th>
                        <td>Bacterial diseases include pneumonia, tuberculosis, tetanus, and food poisoning.</td>
                        <td>Systemic diseases caused by viral infection include influenza, measles, polio, AIDS, and COVID-19.</td>
                    </tr>
                    <tr>
                        <th>Treat&shy;ment</th>
                        <td>Antibiotics and vaccines prevent the disease.</td>
                        <td>Vaccines prevent the spread, and antiviral medications help to slow reproduction but cannot stop it completely.</td>
                    </tr>
                </tbody>
            </table>
            <UiCardInfo>
                Antibiotics can help the immune system to kill off bacterial infections but are useless against viral infections. Antiviral drugs work differently than antibiotics and are currently only effective against a few viral diseases, such as influenza, herpes, hepatitis B and C, and HIV. Viral infections can be much harder to kill than bacterial infections because the virus goes into human cells. The immune system can sometimes kill the infected cells before the virus can reproduce. However, as the virus reproduces, it often kills the infected cell by exploding out, which allows the virus to spread to other cells in the body.
            </UiCardInfo>
            <h3>References</h3>
            <ul class="text-sm break-words">
                <li><a href="https://courses.lumenlearning.com/suny-biology2xmaster/chapter/prevention-and-treatment-of-viral-infections/">https://courses.lumenlearning.com/suny-biology2xmaster/chapter/prevention-and-treatment-of-viral-infections/</a></li>
                    <li><a href="https://bodell.mtchs.org/OnlineBio/BIOCD/text/chapter16">https://bodell.mtchs.org/OnlineBio/BIOCD/text/chapter16</a></li>
                <li><a href="
                    http://www.hcrowder.com/disease-reading.html">
                    http://www.hcrowder.com/disease-reading.html</a></li>
            </ul>
            
            
            
            
            
            
            
            
            
            
            
            
            <!-- <h2 class="e-huge-number">2.</h2> -->
            <h2>2. Why do antibiotics not kill viruses?</h2>
            <p>Antibiotics target the growth machinery in bacteria (not viruses) to kill or inhibit those particular bacteria. Antibiotics cannot kill viruses because viruses have different structures and replicate differently than bacteria. Moreover, overuse and inappropriate prescribing of antibiotics worldwide are leading to the global healthcare issue of <a href="https://www.drugs.com/article/antibiotic-resistance.html" target="_blank">antibiotic resistance</a>. See Table 2 in which conditions antibiotics may be helpful (NB! the decision on its use will be made by your doctor).</p>
            <table class="leading-tight">
                <caption class="text-left pb-4"><b>Table 2.</b> Need for antibiotics by common respiratory infections</caption>
                <thead class="border text-center ">
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
                        <td colspan="5" class="p-1">
                            <p class="text-sm italic">* Studies shows that in otherwise healthy children and adults, antibiotics for bronchitis won't help patients feel better.</p>
                            <p class="text-xs text-slate-400">Source: https://www.cdc.gov/antibiotic-use/images/VirusOrBacteria-Original-1200by675.jpg</p>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <h3>References</h3>
            <ul class="text-sm break-words">
                <li>
                    <a href="https://www.drugs.com/article/antibiotics-and-viruses.html" target="_blank">https://www.drugs.com/article/antibiotics-and-viruses.html</a>
                </li>
                <li>
                    <a href="https://www.virology.ws/2009/10/19/ten-cool-facts-about-viruses/" target="_blank">https://www.virology.ws/2009/10/19/ten-cool-facts-about-viruses/</a>
                </li>
            </ul>
        
        
        </section>
    </div>
</template>