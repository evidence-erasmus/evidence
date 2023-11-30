<script setup>
    import { useUserPreferences } from '~~/store/useUserPreferences'; 
    const userPrefs = useUserPreferences();

</script>

<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="evolution-student-en" />
        </ClientOnly>


        <section class="e-article print:not-prose" lang="en" style="hyphens:auto;">
            <Icon name="openmoji:person-raising-hand-medium-light-skin-tone" class="float-right text-[5em] text-slate-300" />
            <Icon name="openmoji:person-shrugging" class="float-right text-[5em] text-slate-300" />
            <h1 class="mb-0">Evolution</h1>
            <h5 class="font-normal uppercase leading-tight">Student material</h5>
        
            <section id="s-1">
                <h2 id="s-1t">Introduction</h2>

                <p>
                    In this module, you are invited to falsify or confirm a common statement about Evolution. Depart from an <a href="#s2">introductory video</a> where some evolution-related statements are brought up and discuss them in groups. Group discussion will lead to selecting a myth-busting activity where you will look for evidence to falsify or confirm a chosen statement. Based on the nature of this topic, this activity will be conducted based on secondary evidence (searches from the internet) (see Figure 1). 
                </p>
                <UiContentImage class="e-card mt-10" src="https://evidence.onkel.ee/assets/mythbusting-en.webp">
                    <template #caption>
                        <b>Figure 1.</b> Mythbusting Activity
                    </template>
                </UiContentImage>
                <p>
                    Through this activity, you will learn to assess the reliability of information sources (science/research databases, popular science, and other media). After making conclusions, you will prepare to present your findings to your classmates (or other audiences) in a relevant and convincing manner (e.g. in the form of video posts). Furthermore, you will be asked to write an answer letter to a parent requesting to exempt their child from lessons on Evolution (activity 6).
                </p>
            </section>




            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s2">
                <h2 id="s2t">
                    Activity 1: Presentation of the video introduction
                </h2>
                <p>
                    Please watch the introductory video 1 - Evolution and/or introductory video 2 - Monkey Business. Put down your initial thoughts and feelings about the issues presented.
                </p>
                <UiYoutube video="cXS_uSqzwuM" />
                <hr />
                <UiYoutube video="9jusKTXoQak" />
            </section>

            

<!--
    222222
        22
    222222
    22
    222222
-->
            


            <hr class="mt-10 mb-40 print:my-10" />
            
            <section id="s-3">
                <h2 id="s-3t">Activity 2: Group discussion</h2>
                
                <p>
                    After watching the video, you are invited to discuss the topic in small groups (4-6 members). 
                </p>
                <ol>
                    <li>
                        Please express your initial thoughts and feelings about the issues presented in the video to your peers.
                    </li>
                    <li>
                        As a group, you are invited to choose one of the statements or issues for busting (falsifying) or confirming based on information that can be found on the internet, textbooks, etc.
                    </li>
                    <li>
                        After choosing the statement you want to investigate, decide whether to follow the open or guided inquiry and click on the corresponding link.
                    </li>
                </ol>
            </section>

            
            
            
            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s4">
                <h2 id="s4t">Activity 3: Evolution myths</h2>

                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth1">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myth 1:</span> 
                        “Evolution is just a theory”
                    </h4>
                    <p>
                        Although some people have attacked evolution as “just a theory,” that would be raising Darwin’s idea to a level it doesn’t deserve. 
                    </p>
                    <p>
                        A theory has its genesis in a hypothesis, which is a working assumption as to why we observe something—an educated guess. To test this assumption, scientists conduct experiments that either disprove or correlate with the hypothesis. Over time, if a hypothesis continues to stand up to scrutiny and many different experiments, the scientific community may begin referring to it as a “theory.” In essence, this means that because the hypothesis has not been disproved over many years and no other known hypothesis works, then we can be reasonably sure that it’s accurate. Theories, however, are not imperishable. If new technology allows better experimentation, for example, a theory may need to be discarded. 
                    </p>
                    <p>
                        Two problems prevent anyone from legitimately calling evolution a theory. First, there’s no direct, observable experiment that can ever be performed. Scientists can measure bones, study mutations, decode DNA, and notice similarities in morphology (the form and structure of animals and plants), but they can never test evolutionary events in the past. Some point to natural selection as a form of “evolution in action,” but natural selection can only act upon the genetic potential that already exists. What we do observe from natural selection fits perfectly with a recent creation and does not point to common descent. Secondly, and related to the above, evolution misses the mark as a theory because all the supposed “tests” to confirm Darwinism do not necessarily and distinctively correspond to the idea. In other words, each has an alternate and equally viable explanation. A theory requires that the confirming experiments correspond to one specific hypothesis. Otherwise, the experiment cannot establish legitimacy. Evolution has no such legitimacy.
                    </p>
                    <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Evolution: Not even a theory</a>
                    </p>
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Avatud uurimus', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus', url:'./inquiry/myth1', blank:false}
                    ]" />
                </UiCardInfo>

                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth2">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myth 2:</span> 
                        “Evolution is unscientific because it is not testable or falsifiable. It makes claims about events that were not observed and can never be re-created.”
                    </h4>
                    <p>
                        Science is a systematic study of natural phenomena based on observations, identification, description, experimental investigation and theoretical explanation.
                    </p>
                    <h4>
                        Nature of True Science
                    </h4>
                    <ul class="leading-tight">
                        <li>
                            Has integrity - is dependable, reliable and trustworthy
                        </li>
                        <li>
                            Testable - can it be measured and verified
                        </li>
                        <li>
                            Repeatable - should be able to duplicate
                        </li>
                    </ul>
                    <p>
                        Evolution does not fit the strict definition of science. It cannot be or measured. To observe evolution in the past is extremely difficult because of the unknown variables that may have been present in the past.
                    </p>
                    <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Fallacies of Evolution</a>
                    </p>
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Avatud uurimus', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus', url:'./inquiry/myth2', blank:false}
                    ]" />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth3">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myth 3:</span> 
                        “Evolution follows a preordained, straight path (or if human evolved from apes, why are there still apes?)”
                    </h4>
                    <p>
                        “If evolution were true, then modern humans descended from apes. (After all, we’ve seen many scientific charts showing apes as man’s ancestors). So, since apes still exist, they didn’t turn into humans, and evolutionists are being silly when they say apes evolved into humans. Case closed!”
                    </p>
                    <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">If Humans Evolved from Apes, Why Do Apes Exist Today?</a>
                    </p>
                    <UiNavButtonBar :buttons="[
                        {text:'Avatud uurimus', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus', url:'./inquiry/myth3', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth4">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myth 4:</span> 
                        “Evolution produces perfectly adapted creatures.”
                    </h4>
                    <p>
                        Biological evolution is the supposed process by which the first cell evolved into the diversity of life we see today. Natural selection and mutations are considered its driving force; however, evolution has never been observed despite numerous protestations to the contrary. Natural selection and mutations cannot add the information necessary to change one kind of organism into another. And it doesn’t take a science degree to understand why molecules-to-man evolution is impossible.
                    </p>
                    <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Evolution</a>
                    </p>
                    <UiNavButtonBar class="font-Body mb-6" :buttons="[
                        {text:'Avatud uurimus', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus', url:'./inquiry/myth4', blank:false}
                    ]" />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth5">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myth 5:</span> 
                        “Species are immutable.”
                    </h4>
                    <p>
                        The fossil record shows an explosion of new forms of life in the Cambrian period but shows no trace of their supposed evolutionary precursors. Further, the abrupt appearance of new biological forms is a recurring phenomenon throughout the history of life. The fossil record repeatedly documents sudden arrivals of new life forms. For more on this, see “The Fossil Record and Universal Common Ancestry,” an article by Günter Bechly and Stephen Meyer that documents 19 explosions or abrupt appearances of new biological forms in the fossil record. (from the book Theistic Evolution: A Scientific, Philosophical, and Theological Critique).
                    </p>
                    <!-- <p>
                        <a href="https://skepticalscience.com/co2-temperature-correlation.htm" target="_blank" rel="noopener noreferrer">https://skepticalscience.com/co2-temperature-correlation.htm</a>
                    </p> -->
                    <UiNavButtonBar :buttons="[
                        {text:'Avatud uurimus', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus', url:'./inquiry/myth5', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
                <div class="divider my-6"></div>
                            
                <UiCardInfo icon="game-icons:unicorn" theme="rose-400" id="myth6">
                    <h4 class="mt-8 mb-4 leading-tight">
                        <span class="text-rose-400">Myth 6:</span> 
                        “The use or disuse of a structure during one’s lifetime, could be inherited by its offspring and lead to a change in a species”
                    </h4>
                    <p>
                        Modifications in an individual caused by its environment, in other words, the use or disuse of a structure during its lifetime, could be inherited by its offspring and, thus, bring about change in a species.
                    </p>
                    <p>
                        <a class="bg-red-400" href="#" target="_blank" rel="noopener noreferrer">Understanding Evolution</a>
                    </p>
                    <UiNavButtonBar :buttons="[
                        {text:'Avatud uurimus', url:'./inquiry/open', blank:false},
                        {text:'Juhitud uurimus', url:'./inquiry/myth6', blank:false}
                    ]" class="mb-6 font-Body"
                    />
                </UiCardInfo>
                
            </section>






<!-- 
    333333 
        33
     33333
        33
    333333
 -->


            



<!-- 
    44   44    5555555
    44   44    55
    4444444    5555555
         44         55
         44    5555555
-->
                



            <ModulesStudentActivity45En />




<!-- 
    6666666
    66
    6666666
    66   66
    6666666
 -->






            <hr class="mt-10 mb-40 print:my-10" />

            <section id="s7">
                <h2 id="s7t">Activity 6: Case study</h2>

                <p>
                    In this activity, you are asked to think about the answer to the letter that the parents of one of the students (12th grade) sent to the principal of ________ High School with a request to exempt their child from lessons on the topic of Evolution and from studying it because the <a href="https://en.wikipedia.org/wiki/Creationism" target="_blank" rel="noopener noreferrer">creationist approach</a> to the origin of the Earth and life is advocated at home.
                </p>
                <p>
                    Similarly to any other accredited school in the country, the school follows the national curriculum, which includes the topic of Evolution, which is based on an up-to-date scientific understanding.
                </p>
                <p>
                    Help the principal of ________ High School prepare a response to the parents that respects their religious beliefs but at the same time does not conflict with the implementation of the national curriculum.
                </p>
                <p>
                    The length of the letter could be 250-500 words. Try to be polite and to devise as many scientific explanations as possible to justify your decision.
                </p>
            </section>

        </section>
    </div>
</template>