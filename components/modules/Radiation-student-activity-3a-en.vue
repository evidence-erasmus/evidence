<template>
    <div class="border-l-2 border-l-sky-400 pl-6 pb-8">
        
        <h2>Activity 3a: Mythbusting based on experiment</h2>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Group decision - we are going to bust the following myth:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        <hr />

        
        
        <h4>In this activity, you are expected to do the following:</h4>
        <ul class="leading-tight">
            <li>Develop a testable hypothesis/research question.</li>
            <li>Plan your simple experiment or search for relevant information that will confirm or falsify your hypothesis/ answer your research question.</li>
            <li>Present collected data in tables, graphs, or similar.</li>
            <li>Use your findings to draw a conclusion.</li>
            <li>Estimate the plausibility of the chosen myth.</li>
            <li><i>And finally…</i>
                <br />
                Make a video post, PowerPoint  presentation or similar of your main findings to inform the public (this step is related to activity 4).</li>
        </ul>
        
        <p>
            While doing this, you should think carefully about how to share the workload within your group. You could designate everybody to a different role, for example, to a leader who is organizing the activities, to a secretary who is making notes and comments about the information found, to an investigator who is doing searches, to a critic who is scrutinizing the reliability of the information.
        </p>





        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">Our hypothesis / research question is:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>


        
        

        <h3>Plan of activities</h3>
        
        <section class="e-card mb-8">
            <p class="italic my-0">Think carefully about how you will control all the other variables except the one you will manipulate. Also, you should think carefully about how to share the workload within your group. Please indicate by which activities (1), (2), (3) … you are involved as a whole team and by which you are going to divide responsibilities. In this case, write down in brackets, please, who is responsible for what.</p>
        </section>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Define research variables:</label>


        <ToolsDynamicTableFull 
            :tableStructure="variableTable" 
            :storeToUpdate="studentInputs"
            :keyToUpdate="studentInputs.activity3a.activity3aVariables" 
            :newRow="['','','']" 
            :addRow="true" 
        />


        <label class="font-bold block mt-8">Your research results:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="✍"></textarea>




        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Based on the experiment, our conclusion(s) is/are:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>



    
        <p>You are now expected to find evidence from secondary sources to confirm your own findings using the following tool.</p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
             />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Write a short summary of your findings here:</label>
        <p class="italic">
            Did secondary data confirm your findings? If not, what do you think why?
            <br />
            Please make a conclusion on whether the selected myth is confirmed or rejected based on your findings.
        </p>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aSecondary" placeholder="✍"></textarea>
    </div>
</template>




<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';

    const studentInputs = useStudentRadiation();

    const variableTable = ref({
        header: [
            {thead: "Independent variable", tsubhead: "The one that is going to be altered"},
            {thead: "Dependent variable", tsubhead: "The one that is going to be measured"},
            {thead: "Control variables", tsubhead: "The ones that are going to be kept constant"},
        ]
    });
</script>