<template>
    <div>
        <h2>Activity 3b: Mythbusting based on secondary sources</h2>


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Group decision - we are going to bust the following myth:</label>
        
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" v-model="studentInputs.activity3b.activity3bMyth" placeholder="✍️"></textarea>

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

        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis" placeholder="✍️"></textarea>


        <hr />


        <h3>Plan of activities</h3>
        <p class="italic mt-2">
            (you could indicate by which activities you are involved as a whole team and by which you are going to divide responsibilities, in this case, put down, please, who is responsible for what).
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Write your plan here:</label>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bPlan" placeholder="✍️"></textarea>


        <hr />

        <h3>Realiability check</h3>
        <p>
            Please use these tools for searching for information and assessing its reliability.<br />
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Write a summary of your findings in the following table:</label>

        <div class="e-card w-[90vw] mb-8" style="transform: translateX(-5vw);">
            <ToolsReliabilityTable
                :storeToUpdate="studentInputs"
                :addRow="true" 
            />
        </div>


    </div>
</template>

<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();

</script>