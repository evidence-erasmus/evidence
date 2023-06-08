<script setup>
    
    import { useUserPreferences } from '~~/store/useUserPreferences'; 
    import { useStudentClimateOpen } from '~~/store/useStudentClimateOpen.js'; 

    const userPrefs = useUserPreferences();
    const studentClimateOpen = useStudentClimateOpen();

    const myths = ref(
        [
            "The extinction of species is a natural process.",
            "Organisms can adapt to climate change.",
            "The science of climate change is not credible.",
            "The temperature rise is for good.",
            "There is no correlation between CO₂ and temperature.",
            "Climate change actions will make people poorer.",
            "The earth's climate has always changed, and now the same thing is happening."
        ]
    );
</script>

<template>
    
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" />
        <nuxt-link href="../../answers-climate-change-open" target="_blank" class="text-lg font-bold uppercase">Your answers</nuxt-link>
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
            <h5 class="font-normal uppercase leading-tight">Open inquery</h5>
        
            <h2>
                Activity 3:  Mythbusting
                <br />
                (open inquery)
            </h2>

            <label for="q1" class="block mb-2">
                <b>1. We are going to bust the following myth:</b>
            </label>
            <select id="q1" class="select select-bordered w-full max-w-sm block" v-model="studentClimateOpen.mythName">
                <option disabled selected>Choose a myth</option>
                <option v-for="myth in myths">{{ myth }}</option>
            </select>
            <hr />


            <p>
                You are now invited to narrow down the myth into a <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method." target="_blank" rel="noopener noreferrer">testable hypothesis</a> / research question.
            </p>

            <label for="q2" class="block mb-2">
                <b>2. Our hypothesis / research question is:</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full" placeholder="abc...✍️" rows="4"
            v-model="studentClimateOpen.q2"></textarea>
            <hr />

            <label for="q3" class="block mb-2">
                <b>Plan of activities</b> (think carefully about how you will control all the other variables except the one you are going to manipulate; please indicate by which activities you are involved as a whole team and by which you are going to divide responsibilities, in this case, put down, who is responsible for what):
            </label>
            <textarea id="q3" class="textarea textarea-bordered block w-full" placeholder="abc...✍️" rows="5"
            v-model="studentClimateOpen.q3"></textarea>
            <hr />



            <p>Using the following tool, you are now expected to find evidence from secondary sources to re-confirm your findings.</p>

            <p>
                <b>3. Write a summary of your findings here:</b>
            </p>

            <ToolsReliabilityTable :storeToUpdate="studentClimateOpen" />
            <hr />
            


            <label for="q4" class="block mb-2">
                <b>4. Based on the given evidence, our conclusions concerning the myth are:</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full" placeholder="kirjutage oma vastus siia...✍️" rows="10"
            v-model="studentClimateOpen.q4"></textarea>
            <hr />


            <p>
                <b>5. According to the data you collected, where do you owe the error of this myth?</b>
            </p>

            <section class="w-[90vw] -ml-[3vw] sm:w-[90vw] sm:-ml-[3vw] lg:w-[92vw] lg:-ml-[6vw]">
                <div 
                    class="grid grid-cols-[1fr_1fr_1fr]">
                    <div class="text-sm font-bold leading-none p-3 border border-slate-300">Fallacy</div>
                    <div class="text-sm font-bold leading-none p-3 border border-slate-300">Selection(yes/no)</div>
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
                        v-model="studentClimateOpen.flicc[0][0]"></textarea>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2" 
                        v-model="studentClimateOpen.flicc[0][1]"></textarea>
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
                        v-model="studentClimateOpen.flicc[1][0]"></textarea>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2" 
                        v-model="studentClimateOpen.flicc[1][1]"></textarea>
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
                        v-model="studentClimateOpen.flicc[2][0]"></textarea>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2" 
                        v-model="studentClimateOpen.flicc[2][1]"></textarea>
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
                        v-model="studentClimateOpen.flicc[3][0]"></textarea>
                    </div>
                    <div class="leading-tight p-2 border border-slate-300">
                        <textarea rows="4" class="textarea block w-full h-full py-1 px-2" 
                        v-model="studentClimateOpen.flicc[3][1]"></textarea>
                    </div>
                </div>
            </section>


        </section>
    </div>
</template>