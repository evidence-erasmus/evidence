<template>
    <div>
         
        <p>
            <b>In this activity, you are expected to do the following:</b>
        </p>
        <ul class="leading-tight">
            <li>
                develop a testable hypothesis / research question,
            </li>
            <li>
                plan your search for relevant information that will falsify or confirm your hypothesis / answer your research question,
            </li>
            <li>
                assess the reliability of the gathered evidence;
            </li>
            <li>
                use your findings to draw a conclusion;
            </li>
            <li>
                present collected data in the form of tables, graphs, or similar.
            </li>
        </ul>
        <p>
            While doing this, you should think carefully about sharing the workload within your group. You could designate everybody to a different role, for example, to a leader who is organising the activities, to a secretary who is making notes and comments about the information found, to an investigator who is doing searches, to a critic who is scrutinising the reliability of the information, or otherwise.
        </p>    


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Group decision: We are going to bust the following myth:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.myth" placeholder="✍"></textarea>


        <hr />
        

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Our hypothesis / research question is:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.hypothesis" placeholder="✍"></textarea>


        <hr />
        

        <h3>Plan of activities</h3>
        <p>
            (you could indicate by which activities you are involved as a whole team and by which you are going to divide responsibilities, in this case, put down, please, who is responsible for what).
        </p>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500" />
        <label for="planOfActivities" class="block mb-2 mt-2">
            <b>Write your plan here:</b>
        </label>
        <textarea id="planOfActivities" class="textarea textarea-bordered block w-full text-lg mb-8" placeholder="✍️" rows="5"
        v-model="studentInputs.planOfActivities"></textarea>

        <hr />


        <p>You are now expected to find evidence from secondary sources to confirm your own findings using the following tool.</p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Based on the experiment, our conclusion(s) is/are:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.conclusions" placeholder="✍"></textarea>
        
        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Based on your findings, make a statement on whether the selected myth is confirmed or rejected:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.decision" placeholder="✍"></textarea>
        
    </div>
</template>




<script setup>
    import { useStudentDrugs } from '~~/store/useStudentInputDrugs.js';

    const studentInputs = useStudentDrugs();
</script>