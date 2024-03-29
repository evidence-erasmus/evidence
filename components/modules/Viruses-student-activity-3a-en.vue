<template>
    <div>
        
        <h2>Activity 3a: Mythbusting based on  experiment</h2>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500"></Icon>
        <label class="font-bold block"> Group decision - we are going to bust the following myth:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        <hr />

        <p>In case you think your myth can be tested experimentally, please read the following guidelines:</p>
        
        <h4>In this activity, you are expected to:</h4>
        <ul class="leading-tight">
            <li>
                Narrow down your myth into a <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">testable hypothesis</a> / research question.
            </li>
            <li>
                Design an experiment that will confirm or falsify your hypothesis/ answer your research question.
            </li>
            <li>
                Present your collected data in tables and graphs, and preferably, videotape your experiment as evidence 
                <br />
                look at <a href="https://www.youtube.com/watch?v=_l8LgLhjLvc&list=PLuC4DJElPQrOEMp2nLj1Q3h-_r8q7fzp0" class="e-btn-outline no-underline"
                target="_blank" rel="noopener noreferrer"><Icon name="material-symbols:youtube-tv-outline" size="20" /> the tutorial</a>
            </li>
            <li>
                Explain your results using scientific evidence.
            </li>
            <li>
                Use your results to form a conclusion.
            </li>
            <li>
                Estimate the plausibility of the chosen myth.
            </li>
            <li>
                Share workload within your group (e.g., through designating everybody to a different role - manager, secretary, supplier of materials).
            </li>
        </ul>
        
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500"></Icon>
        <label class="font-bold block"> Our hypothesis / research question is:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full" rows="7" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>

        <hr />
        

        <h3>Plan of activities</h3>
        
        <section class="e-card mb-8">
            <p class="italic my-0">Think carefully about how you will control all the other variables except the one you will manipulate. Also, you should think carefully about how to share the workload within your group. Please indicate by which activities (1), (2), (3) … you are involved as a whole team and by which you are going to divide responsibilities. In this case, write down in brackets, please, who is responsible for what</p>
        </section>

        <h4>Defining the variables:</h4>

        <!-- independent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Changed factor</b> (will be changed):</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="1" v-model="studentInputs.activity3a.experimentVariables.independent" placeholder="✍"></textarea>
        
        <!-- dependent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Measured factor</b> (will be measured):</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="1" v-model="studentInputs.activity3a.experimentVariables.dependent" placeholder="✍"></textarea>
        
        <!-- control variables -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Constants</b> (will not change):</label>

        <ToolsDynamicTableFull class="e-card mb-8"
            :tableStructure = "controlTable" 
            :addRow = "true"
            addRowTitle = "Add constant"
            :newRow = "['']"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.experimentVariables.control"
            :deleteRow = "true"
        />
        


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500 mt-4"></Icon>
        <label class="block leading-tight my-2"><b>Results</b></label> 
        <ToolsDynamicTableFull class="e-card mb-8"
            :tableStructure = "resultsTable" 
            :addRow = "true" 
            addRowTitle = "Add constant"
            :newRow = "new Array(2 + studentInputs.activity3a.experimentVariables.control.length)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.activity3aResults"
            :deleteRow = "true"
        />

        <hr />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-sky-500"></Icon>
        <label class="font-bold block"> Based on the experiment, our conclusion(s) is/are:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>

        <hr />


        
        <p>You are now expected to find evidence from secondary sources to confirm your own findings using <NuxtLink to="../tools/reliability-assessment" target="_blank" class="e-btn-outline no-underline"><Icon name="mdi:tools" /> this tool</NuxtLink></p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Write a short summary of your findings here:</label>
        <p class="italic mt-0">
            Did secondary data confirm your findings? If not, what do you think why?<br />
            Please make a statement conclusion on whether the selected myth is confirmed or rejected based on your findings.
        </p>
        <textarea class="textarea textarea-bordered text-lg block w-full" rows="7" v-model="studentInputs.activity3a.activity3aSecondary" placeholder="✍"></textarea>

    </div>
</template>


<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();
    const {tm} = useI18n({scope:"global"});

    const controlTable = ref({
        header: [
            {thead: "", tsubhead: "Add each control variable to a separate row"}
        ]
    });
    
    const resultsTable = computed(() => {
        
        const variables = studentInputs.activity3a.experimentVariables;

        let structure = {
            header: [
                {thead: `${variables.independent}`, tsubhead: "Changed factor"},
                {thead: `${variables.dependent}`, tsubhead: "Measured factor"},
            ]
        }

        studentInputs.activity3a.experimentVariables.control.forEach( (variable) => {
            structure.header.push({thead: `${variable}`, tsubhead:"Constants"});
        } );

        return structure;
    });
</script>