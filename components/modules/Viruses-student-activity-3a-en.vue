<template>
    <div>
        
        <h2>Activity 3a: Mythbusting based on  experiment</h2>

        
        
        <!-- <div contenteditable="true" class="ring-slate-600 ring-1 p-2 rounded" ref="studentInput3a">
            {{ studentInputs.activity3a }}
        </div> -->

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Group decision - we are going to bust the following myth:</label>
        
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" v-model="studentInputs.activity3a.activity3aMyth" placeholder="abc...✍"></textarea>

        <hr />

        

        <p>In case you think your myth can be tested experimentally, please read the following guidelines:</p>
        
        <h4>In this activity, you are expected to:</h4>
        <ul class="leading-tight">
            <li>Narrow down your myth into a <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">testable hypothesis</a>/research question.</li>
            <li>Design an experiment that will confirm or falsify your hypothesis/ answer your research question.</li>
            <li>Present your collected data in tables and graphs, and preferably, videotape your experiment as evidence
                <br />
                <a href="#" class="inline-block my-2 py-0.5 px-2 ring-2 ring-slate-700 rounded no-underline"
                target="_blank" rel="noopener noreferrer"><Icon name="material-symbols:youtube-tv-outline" /> look at the tutorial</a>
            </li>
            <li>Explain your results using scientific evidence.</li>
            <li>Use your results to form a conclusion.</li>
            <li>Estimate the plausibility of the chosen myth.</li>
            <li>Share workload within your group (e.g., through designating everybody to a different role - manager, secretary, supplier of materials).</li>
        </ul>
        
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Our hypothesis / research question is:</label>

        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="abc...✍"></textarea>


        <hr />
        
        

        <h3>Plan of activities</h3>
        
        <section class="e-card mb-8">
            <p class="italic my-0">Think carefully about how you will control all the other variables except the one you will manipulate. Also, you should think carefully about how to share the workload within your group. Please indicate by which activities (1), (2), (3) … you are involved as a whole team and by which you are going to divide responsibilities. In this case, write down in brackets, please, who is responsible for what</p>
        </section>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Define research variables:</label>

        <section>
            <div class="grid grid-cols-3 gap-2">
                <p class="text-sm font-bold">Independent variable</p>
                <p class="text-sm font-bold">Dependent variable</p>
                <p class="text-sm font-bold">Control variables</p>
            </div>
            <div v-for="row, i in studentInputs.activity3a.activity3aPlan" class="grid grid-cols-3 gap-2">
                <div v-for="variable, j in row"
                ><input v-model="studentInputs.activity3a.activity3aPlan[i][j]" class="w-full ring-1 ring-slate-300 px-1 rounded text-ellipsis overflow-hidden focus:bg-amber-50" placeholder="abc...✍" /></div>
            </div>

            <button @click="studentInputs.addVariableRow" class="bg-slate-700 text-md text-slate-100 rounded-full px-4 mt-4">ADD VARIABLES ROW</button>
        </section>

        <label class="font-bold block mt-8">Your research results:</label>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="abc...✍"></textarea>


        <hr />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Based on the experiment, our conclusion(s) is/are:</label>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="abc...✍"></textarea>


        <hr />

    
        <p>You are now expected to find evidence from secondary sources to confirm your own findings using the following tool. [[[LINK TO RELIABILITY TOOL]]]</p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Write a short summary of your findings here:</label>
        <p class="italic">
            Did secondary data confirm your findings? If not, what do you think why?<br />
            Please make a statement conclusion on whether the selected myth is confirmed or rejected based on your findings.
        </p>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aSecondary" placeholder="abc...✍"></textarea>

    </div>
</template>


<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';

    const studentInputs = useStudentInputStore();

</script>