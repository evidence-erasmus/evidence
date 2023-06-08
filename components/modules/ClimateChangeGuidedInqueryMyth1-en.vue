<script setup>
    import { useStudentClimateGuidedMyth1 } from '~~/store/useStudentClimateGuidedMyth1.js'; 
    const studentClimateGuidedMyth1 = useStudentClimateGuidedMyth1();
</script>

<template>
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="../../answers-climate-change-guided-myth1/" target="_blank" class="text-lg font-bold uppercase">Your answers</nuxt-link>
    </section>
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" lang="et" style="hyphens:auto;">
            
            <NuxtLink to="../../student" style="transform: translateY(-4rem); position:absolute;">
                <Icon name="material-symbols:arrow-back-rounded" /> Back
            </NuxtLink>

            <h1 class="mb-0">Climate change</h1>
            <h5 class="font-normal uppercase leading-tight">Guided inquery; Myth 1</h5>
        
            <h2>
                Activity 3: Mythbusting
            </h2>

            <h3>
                Your team will deal with Myth 1: “The extinction of species is a natural process. Mass extinctions of species have always occurred”.
            </h3>

            

            <label for="q1" class="block mb-2">
                <b>Write down your testable hypothesis concerning Myth 1:</b>
            </label>
            <textarea id="q1" class="textarea textarea-bordered block w-full" placeholder="abc...✍️" rows="4"
            v-model="studentClimateGuidedMyth1.hypothesis"></textarea>
            <hr />

            <p>
                You are given the basic argument of Myth 1 and the question you must answer using the given scientific sources.
            </p>
            
            <UiCardInfo theme="blue">
                <h4 class="leading-tight my-2">Argument of Myth 1: The mass extinction of species is a natural process.</h4>
            </UiCardInfo>
            
            <p>
                <b>Question</b>: Is the mass extinction of species a natural process?
            </p>

            <p>
                Study <a href="http://mde-didaktiki.biol.uoa.gr/mde7/plexida/ordovician.html" target="_blank" rel="noopener noreferrer">source 1.1</a> and watch the video <a href="https://www.youtube.com/watch?v=nho73BtDQtE" target="_blank" rel="noopener noreferrer">Climate Change: Why are thousands of species facing extinction? - BBC News.</a>. Then, answer the following questions.
            </p>

            <label for="q2" class="block mb-2">
                <b>1. What do we mean by "mass extinction"?</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q1"></textarea>
            <hr />
            
            <label for="q3" class="block mb-2">
                <b>2. How many mass extinctions do you find happening?</b>
            </label>
            <textarea id="q3" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q2"></textarea>
            <hr />
            
            <label for="q4" class="block mb-2">
                <b>3. What were the causes of the mass extinctions?</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q3"></textarea>
            <hr />
            
            <label for="q5" class="block mb-2">
                <b>4. What were the consequences of the mass extinctions?</b>
            </label>
            <textarea id="q5" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q5"></textarea>
            <hr />
            
            <label for="q6" class="block mb-2">
                <b>5. Why should we worry about mass extinctions now?</b>
            </label>
            <textarea id="q6" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q6"></textarea>
            <hr />
            
            
            <p>
                Study <a href="https://docs.google.com/document/d/e/2PACX-1vTxM7SnO9h9ZC8wxVMEVwU8Ha2_AKh99vbYcBO-g8BxJy9w5oFeb5lUoxUbvTQnq35mtT9Fi7bCSf67/pub" target="_blank" rel="noopener noreferrer">source 1.2</a> and answer the following question.
            </p>

            <label for="q7" class="block mb-2">
                <b>6. What is the reason for the mass killing of penguins?</b>
            </label>
            <textarea id="q7" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateGuidedMyth1.q7"></textarea>
            <hr />
            


            <p>Please use this tool to assess the reliability of the sources used.</p>

            <p>
                <b>7. Write a summary of your findings in the following table.</b>
            </p>

            <ToolsReliabilityTable :storeToUpdate="studentClimateGuidedMyth1" />
            <hr />
            


            


            <p>
                <b>8. Based on the given evidence, our conclusion(s) concerning the myth “The extinction of species is a natural process. Mass extinctions of species have always occurred.” is (are):</b>
            </p>

            <section class="w-[90vw] -ml-[3vw] sm:w-[90vw] sm:-ml-[3vw] lg:w-[92vw] lg:-ml-[6vw]">
                <div 
                    class="grid grid-cols-[1fr_1fr_1fr]">
                    <div class="text-sm font-bold leading-none p-3 border border-slate-300">Fallacy</div>
                    <div class="text-sm font-bold leading-none p-3 border border-slate-300">Selection (yes/no)</div>
                    <div class="text-sm font-bold leading-none p-3 border border-slate-300">Comments</div>
                </div>    
                <div 
                    class="grid grid-cols-[1fr_1fr_1fr]">
                    <div class="leading-tight p-3 border border-slate-300">
                        <p class="m-0 text-sm">
                            <img src="http://evidence.onkel.ee/assets/flicc-c1.webp" class="w-20 md:w-28" />
                            <b>Cherry picking:</b>
                            <br />
                            This technique is defined as “selectively choosing data leading to the desired conclusion that differs from the conclusion arising from all the available data”.
                        </p>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                        v-model="studentClimateGuidedMyth1.flicc[0][0]"></textarea>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                        v-model="studentClimateGuidedMyth1.flicc[0][1]"></textarea>
                    </div>
                </div>
                <div 
                    class="grid grid-cols-[1fr_1fr_1fr]">
                    <div class="leading-tight p-3 border border-slate-300">
                        <p class="m-0 text-sm">
                            <img src="http://evidence.onkel.ee/assets/flicc-l-j.webp" class="w-20 md:w-28" />
                            <b>Jumping to conclusions:</b>
                            <br />
                            Ignorance of information and arbitrary conclusion.
                        </p>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                        v-model="studentClimateGuidedMyth1.flicc[1][0]"></textarea>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                        v-model="studentClimateGuidedMyth1.flicc[1][1]"></textarea>
                    </div>
                </div>
                <div 
                    class="grid grid-cols-[1fr_1fr_1fr]">
                    <div class="leading-tight p-3 border border-slate-300">
                        <p class="m-0 text-sm">
                            <img src="http://evidence.onkel.ee/assets/flicc-i.webp" class="w-20 md:w-28" />
                            <b>Impossible Expectations:</b>
                            <br />
                            This involves demanding unrealistic levels of proof or misrepresenting the nature of scientific uncertainty. As science is typically probabilistic, calls for absolute scientific certainty effectively cast doubt on scientific findings. This denialist technique is known as the “Scientific Certainty Argumentation Method”.
                        </p>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                        v-model="studentClimateGuidedMyth1.flicc[2][0]"></textarea>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                        v-model="studentClimateGuidedMyth1.flicc[2][1]"></textarea>
                    </div>
                </div>
                <div 
                    class="grid grid-cols-[1fr_1fr_1fr]">
                    <div class="leading-tight p-3 border border-slate-300">
                        <p class="m-0 text-sm">
                            <img src="http://evidence.onkel.ee/assets/flicc-l-o.webp" class="w-20 md:w-28" />
                            <b>Over-simplification</b>
                            <br />
                            Data simplification.
                        </p>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                        v-model="studentClimateGuidedMyth1.flicc[3][0]"></textarea>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                        v-model="studentClimateGuidedMyth1.flicc[3][1]"></textarea>
                    </div>
                </div>
            </section>

        </section>
    </div>
</template>