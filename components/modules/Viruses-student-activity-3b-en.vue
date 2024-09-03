<template>
    <div>
        <h2>Activity 3b: Mythbusting based on secondary sources</h2>


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500"></Icon>
        <label class="font-bold block"> Group decision - we are going to bust the following myth:</label>
        
        <textarea class="textarea textarea-bordered text-lg block w-full leading-tight" v-model="studentInputs.activity3b.activity3bMyth" placeholder="✍️"></textarea>

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

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500"></Icon>
        <label class="font-bold block"> Our hypothesis / research question is:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis" placeholder="✍️"></textarea>


        <hr />


        <h3>Plan of activities</h3>
        <p class="mt-2">
            You could indicate by which activities you are involved as a whole team and by which you are going to divide responsibilities, in this case, put down, please, who is responsible for what.
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500"></Icon>
        <label class="font-bold block"> Write your plan here:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bPlan" placeholder="✍️"></textarea>


        <hr />

        <h3 style="color:var()">Realiability check</h3>
        <p>
            Please use <NuxtLink target="_blank" to="../tools/reliability-assessment"
            class="btn btn-accent btn-sm text-white no-underline"><Icon name="mdi:tools" size="18"></Icon> these tools</NuxtLink> for searching for information and assessing its reliability.<br />
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500"></Icon>
        <label class="font-bold block"> Write a summary of your findings in the following table:</label>

        <div class="e-card mb-8">
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