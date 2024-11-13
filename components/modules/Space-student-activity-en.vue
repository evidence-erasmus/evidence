<template>
    <div>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Group decision - We are going to examine the following myth or study the issue:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.myth" placeholder="✍"></textarea>

        <hr />

        <p>
            You are now invited to narrow down the myth/issue into a testable hypothesis - a statement that can be tested or a question that can be answered through your investigation. 
        </p>
        <p>
            Plan your further activities following the steps given in Figure 1. You should consider whether your myth/issue can be tested experimentally, confirmed/falsified using digital technology, for example, mobile phone Apps, computer models and simulations, or using secondary evidence (e.g., published information or available in the form of YouTube videos). You can use more than one of these methods, applying the so-called triangulation principle – increasing the validity of your findings through the convergence of information from different sources.
        </p>
        
        <h4>In this activity, you are expected to do the following:</h4>
        <ul class="leading-tight">
            <li>develop a testable hypothesis/ research question,</li>
            <li>plan your simple experiment or search for relevant information that will confirm or falsify your hypothesis/ answer your research question,</li>
            <li>present collected data in the form of tables, graphs, or similar,</li>
            <li>use your findings to draw a conclusion,</li>
            and finally…
            <li>make a video post or PowerPoint presentation of your main findings (this step is related to the activity 4).</li>
        </ul>
        
        <p>
            While doing this, please consider sharing the workload equally within your group. 
        </p>





        
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


        <!-- <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Define research variables:</label>
        <ToolsDynamicTableFull 
            :tableStructure="variableTable" 
            :storeToUpdate="studentInputs"
            :keyToUpdate="studentInputs.activity3a.activity3aVariables" 
            :newRow="['','','']" 
            :addRow="true" 
        />
        <label class="font-bold block mt-8">Your research results:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="✍"></textarea> -->

        <p>You are now expected to find evidence from secondary sources to confirm your own findings using the <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-neutral text-white no-underline"><Icon name="mdi:tools" size="20" />following tool</NuxtLink>.</p> 

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Based on the experiment, our conclusion(s) is/are:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.conclusions" placeholder="✍"></textarea>


        
    </div>
</template>




<script setup>
    import { useStudentSpace } from '~~/store/useStudentInputSpace.js';

    const studentInputs = useStudentSpace();

    // const variableTable = ref({
    //     header: [
    //         {thead: "Independent variable", tsubhead: "The one that is going to be altered"},
    //         {thead: "Dependent variable", tsubhead: "The one that is going to be measured"},
    //         {thead: "Control variables", tsubhead: "The ones that are going to be kept constant"},
    //     ]
    // });
</script>