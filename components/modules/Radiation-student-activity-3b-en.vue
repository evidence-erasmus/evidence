<template>
    <div class="border-r-2 border-r-sky-400 pr-8">
        <UiYourAnswersButton url="answers/secondary-sources" />
        <h2>Activity 3b: Mythbusting based on secondary sources</h2>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Group decision - we are going to bust the following myth:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3b.activity3bMyth"></textarea>


        <h3>In this activity, you are expected to:</h3>
        <ul class="leading-tight">
            <li>Narrow down your myth into a <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">testable hypothesis</a> / research question;</li>
            <li>plan your search for relevant information that will confirm or falsify your hypothesis / answer your research question;</li>
            <li>present collected data in the form of tables, graphs, or similar;</li>
            <li>assess the reliability of the gathered evidence;</li>
            <li>use your findings to draw a conclusion;</li>    
        </ul>
        
        <p>
            While doing this, you should think carefully about how to share the workload within your group. You could designate everybody to a different role, for example, to a leader who is organizing the activities, to a secretary who is making notes and comments about the information found, to an investigator who is doing searches, to a critic who is scrutinizing the reliability of the information.
        </p>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Our hypothesis / research question is:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis"></textarea>




        <h3>Plan of activities</h3>
        <p class="italic mt-2">
            (you could indicate by which activities you are involved as a whole team and by which you are going to divide responsibilities, in this case, put down, please, who is responsible for what).
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Write your plan here:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bPlan"></textarea>


       

        <h3>Reliability check</h3>
        <p>
            Please use these tools for searching for information and assessing its reliability.<br />
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Write a summary of your findings in the following table:</label>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
             />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Based on the given evidence, our conclusion(s) is/are:</label>
        <textarea class="textarea textarea-bordered w-full text-lg mb-8" rows="7" v-model="studentInputs.activity3b.activity3bConclusion"></textarea>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Based on your findings, make a statement on whether the selected myth is confirmed or rejected.</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bStatement"></textarea>


    </div>
</template>

<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';

    const studentInputs = useStudentRadiation();

</script>