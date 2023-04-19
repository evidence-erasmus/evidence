<template>
    <div>
        <h2>Activity 3b: Mythbusting based on secondary sources</h2>


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Group decision - we are going to bust the following myth:</label>
        
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" v-model="studentInputs.activity3b.activity3bMyth"></textarea>

        <hr />

        <h3>In this activity, you are expected to:</h3>
        <ul class="leading-tight">
            <li>Narrow down your myth into a <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">testable hypothesis</a> / research question;</li>
            <li>plan your search for relevant information that will confirm or falsify your hypothesis / answer your research question;</li>
            <li>present collected data in the form of tables, graphs, or similar;</li>
            <li>assess the reliability of the gathered evidence;</li>
            <li>use your findings to draw a conclusion;</li>    
        </ul>
        
        <p>While doing this, you should think carefully about how to share the workload within your group. You could designate everybody to a different role, for example, to a leader who is organizing the activities, to a secretary who is making notes and comments about the information found, to an investigator who is doing searches, to a critic who is scrutinizing the reliability of the information.</p>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Our hypothesis / research question is:</label>

        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis"></textarea>


        <hr />


        <h3>Plan of activities</h3>
        <p class="italic mt-2">
            (you could indicate by which activities you are involved as a whole team and by which you are going to divide responsibilities, in this case, put down, please, who is responsible for what).
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Write your plan here:</label>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bPlan"></textarea>


        <hr />

        <h3>Realiability check</h3>
        <p>
            Please use these tools for searching for information and assessing its reliability.<br />
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Write a summary of your findings in the following table:</label>

        <section class="e-card w-[90vw] -ml-[3vw] sm:w-[90vw] sm:-ml-[3vw] lg:w-[92vw] lg:-ml-[7vw]">
            <div 
            class="grid grid-cols-[1fr_1fr_80px_1fr]">
                <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Evidence / main conclusions / summary of the information relevant to the hypothesis</div>
                <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Type and source of evidence</div>
                <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Reliability rate</div>
                <div class="text-sm font-bold leading-none p-2 border-x border-x-slate-300">Comments</div>
            </div>
            <div v-for="row, i in studentInputs.activity3b.activity3bReliability" 
            class="grid grid-cols-[1fr_1fr_80px_1fr]">
                <div v-for="cell, j in row"
                ><textarea v-model="studentInputs.activity3b.activity3bReliability[i][j]" rows="1" class="w-full object-fill h-full ring-1 ring-slate-300 p-2 leading-tight  focus:bg-amber-50"></textarea></div>
            </div>
            <button @click="studentInputs.addReliabilityRow" class="bg-slate-700 text-md text-slate-100 rounded-full px-4 mt-4">ADD ROW</button>
        </section>



    </div>
</template>

<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();

</script>