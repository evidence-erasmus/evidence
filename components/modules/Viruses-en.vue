<template>
    <div>
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

        
        <p class="mt-20"><b>Table 1.</b> Differences between bacteria and viruses</p>

        <table>
            <thead>
                <tr>
                    <td>

                    </td>
                    <td>Bacteria</td>
                    <td>Viruses</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <b>Living</b>
                    </td>
                    <td>
                        <b>Living organism.</b><br>Bacteria are living organisms with a single cell that can generate energy, make their own food, move and reproduce (typically by binary fission). This allows bacteria to live in many places - soil, water, plants, and the human body - and serve many purposes.<br>Bacteria include both parasites and non-parasites.
                    </td>
                    <td>
                        <b>Nonliving.</b><br />Viruses only grow and reproduce inside the host cells they infect. When found outside of these living cells, viruses are dormant. Their “life,” therefore, requires the hijacking of the biochemical activities of a living cell.<br />All viruses are intracellular parasites.
                    </td>
                </tr>
                <tr>
                    <td><b>Number of cells</b></td>
                    <td>Unicellular, one cell</td>
                    <td>No cells, not living</td>
                </tr>
                <tr>
                    <td><b>Repro&shy;duction</b></td>
                    <td>Split into 2</td>
                    <td>Invades a host cell and takes over the cell causing it to make copies of the viral DNA/RNA. Destroys the host cell releasing new viruses</td>
                </tr>
                <tr>
                    <td><b>Size</b></td>
                    <td>Bacteria are much bigger, ranging from 800 nm to 1000 nm. Bacteria can be seen under a light microscope.</td>
                    <td>The size of viruses is between 20 nm to 400 nm. Viruses are visible only under electron microscopes.</td>
                </tr>
                <tr>
                    <td><b>Benefits</b></td>
                    <td>Some bacteria are beneficial, e.g., certain bacteria are required in the gut).</td>
                    <td>Viruses are not beneficial. Viruses can be helpful in genetic engineering.</td>
                </tr>
                <tr>
                    <td><b>Infection</b></td>
                    <td>Bacterial infection is usually confined to a part of the body, described as a localized infection. Infections may be caused by bacteria or by toxins (endotoxins) produced.</td>
                    <td>A viral infection is systemic. Viruses infect a host cell and multiply by thousands, leaving the host cell and infecting other body cells.</td>
                </tr>
                <tr>
                    <td><b>Disease</b></td>
                    <td>Bacterial diseases include pneumonia, tuberculosis, tetanus, and food poisoning.</td>
                    <td>Systemic diseases caused by viral infection include influenza, measles, polio, AIDS, and COVID-19.</td>
                </tr>
                <tr>
                    <td><b>Treat&shy;ment</b></td>
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


    </div>
</template>