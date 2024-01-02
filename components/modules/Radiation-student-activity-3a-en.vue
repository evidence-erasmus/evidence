<template>
    <div class="border-l-2 border-l-sky-400 pl-6 pb-8">
        <UiYourAnswersButton url="answers/experiment" />
        <h2>Activity 3a: Mythbusting based on experiment</h2>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Group decision: We are going to bust the following myth or study the issue:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        <hr />

        
        
        <h4>In this activity, you are expected to do the following:</h4>
        <ul class="leading-tight">
            <li>Develop a testable hypothesis / research question.</li>
            <li>Plan your simple experiment that will confirm or falsify your hypothesis / answer your research question.</li>
            <li>Present collected data in tables, graphs, or similar.</li>
            <li>Use your findings to draw a conclusion.</li>
            <li>Estimate the plausibility of the chosen myth.</li>
            <li><i>And finally…</i>
                <br />
                Make a video post, presentation or similar of your main findings to inform the public (this step is related to activity 4). </li>
        </ul>
        
        <!-- <p>
            While doing this, you should think carefully about how to share the workload within your group. You could designate everybody to a different role, for example, to a leader who is organizing the activities, to a secretary who is making notes and comments about the information found, to an investigator who is doing searches, to a critic who is scrutinizing the reliability of the information.
        </p> -->




        <!-- hypothesis -->        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="font-bold block leading-tight my-2">Our hypothesis / research question is:</label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="4" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>

        <!-- work plan -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-2"><b>Work plan</b> <i>(Please indicate by which activities (1), (2), (3) … you are involved as a whole team and by which you are going to divide responsibilities. In this case, write down in brackets, please, who is responsible for what.)</i></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="5" v-model="studentInputs.activity3a.activity3aPlan" placeholder="✍"></textarea>
        
        
        <!-- independent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-2"><b>Independent variable</b> <i>(the one that is going to be altered):</i></label>
        <input type="text" class="input input-bordered w-full text-lg my-4" rows="1" v-model="studentInputs.activity3a.experimentVariables.independent" placeholder="✍" />
        
        <!-- dependent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-2"><b>Dependent variable</b> <i>(the one that is going to be measured):</i></label>
        <input type="text" class="input input-bordered w-full text-lg my-4" rows="1" v-model="studentInputs.activity3a.experimentVariables.dependent" placeholder="✍" />
        
        <!-- control variables -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-4"><b>Control variables</b> <i>(the ones that are going to be kept constant):</i></label>
        <ToolsDynamicTableFull class="e-card"
            :tableStructure = "controlTable" 
            :addRow = "true"
            addRowTitle = "Add variable"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.experimentVariables.control"
            :deleteRow = "true" 
            cellType = "input"
        />
        
        <!-- results table -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-4"><b>Results</b> <i>(provide the data collected during the experiment as a table and/or free text).</i></label> 
        <ToolsDynamicTableFull class="e-card"
            :tableStructure = "resultsTable" 
            :addRow = "true"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.activity3aResults"
            :deleteRow = "true"
            cellType = "input"
        />


        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight"><b>Circumstances that could reduce the reliability of the results of the experiment</b> <i>(please consider possible sources of error that may have affected the results of the experiment).</i></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aCredibility" placeholder="✍"></textarea>
        
        

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight"><b>Based on the results of the experiment, we came to the following conclusions:</b></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>

    
        <p>Look for further confirmation of the conclusions reached by using reliable secondary sources. For this you have to use the following tools.</p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight"><b>Summary of the study of secondary sources</b> <i>(Did reliable sources confirm your findings? If not, suggest possible reasons.)</i></label>

        <ToolsReliabilityTable class="my-4"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight"><b>An assessment of the validity of the selected myth</b> <i>(when answering, take into account the conclusions drawn from both the experiment and secondary sources)</i></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aSummary" placeholder="✍"></textarea>
        
    </div>
</template>




<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';
    const studentInputs = useStudentRadiation();

    const controlTable = ref({
        header: [
            {thead: "Variable", tsubhead: ""},
            {thead: "Value", tsubhead: ""}
        ]
    });
    
    const resultsTable = computed(() => {
        const variables = studentInputs.activity3a.experimentVariables;
        let structure = {
            header: [
                {thead: `${variables.independent}`, tsubhead: "Independent variable"},
                {thead: `${variables.dependent}`, tsubhead: "Dependent variable"},
            ]
        }
        // studentInputs.activity3a.experimentVariables.control.forEach( (variable) => {
        //     structure.header.push({thead: `${variable}`, tsubhead:"Kontrollmuutuja"});
        // } );
        return structure;
    });
</script>