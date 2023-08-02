<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <UiPrintMessage />
        <!-- printing message -->

        <div class="prose prose-lg">
            
            
            <h1 class="mb-2">{{ t('inquiry.cc_myth4.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.cc_myth4.subtitle') }}</h3>
            <h3 class="my-8 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.cc_myth4.myth') }}</h3>
            

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.hypothesis') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.hypothesis }}
            </p>

            <h4 class="mt-1 mb-6 leading-tight">{{ t('inquiry.cc_myth4.a1.argument.argument') }}</h4>
            <h4 class="mt-1 mb-8 leading-tight">{{ t('inquiry.cc_myth4.a1.question') }}</h4>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a1.source_410.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a1.source410 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a1.source_411.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a1.source411 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a1.source_412.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a1.source412 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a1.conclusion') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a1.conclusion }}
            </p>


            <hr />


            <h4 class="mt-1 mb-6 leading-tight">{{ t('inquiry.cc_myth4.a2.argument') }}</h4>
            <h4 class="mt-1 mb-8 leading-tight">{{ t('inquiry.cc_myth4.a2.question') }}</h4>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a2.exp.title') }}</p>

            <ToolsDynamicTableFull  class="mb-8" :storeToUpdate="climateMyth4Answers"
            :key-to-update="climateMyth4Answers.a2.variableTable"
            :tableStructure="tm('inquiry.cc_myth4.a2.exp.variable_table.table')" 
            :title="t('inquiry.cc_myth4.a2.exp.variable_table.title')"
            :print-mode="true" />

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a2.exp.hypothesis') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a2.hypothesis }}
            </p>


            <ToolsDynamicTableFull  class="mb-8" :storeToUpdate="climateMyth4Answers"
            :key-to-update="climateMyth4Answers.a2.resultsTable"
            :tableStructure="tm('inquiry.cc_myth4.a2.exp.results_table.table')" 
            :title="t('inquiry.cc_myth4.a2.exp.results_table.title')"
            :print-mode="true" />


            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a2.exp.conclusion') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a2.conclusion }}
            </p>


            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a2.exp.islands') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a2.islands }}
            </p>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a2.source_421.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a2.source421 }}
            </p>


            <ToolsDynamicTableFull class="mb-8" :storeToUpdate="climateMyth4Answers"
            :key-to-update="climateMyth4Answers.a2.sealevelTable"
            :tableStructure="tm('inquiry.cc_myth4.a2.graph.sealevel_table.table')" 
            :print-mode="true" />

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a2.graph.sealevel_table.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a2.sealevelTableAnswer }}
            </p>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a2.conclusion') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a2.conclusion }}
            </p>


            <hr />



            <h4 class="mt-1 mb-6 leading-tight">{{ t('inquiry.cc_myth4.a3.argument') }}</h4>
            <h4 class="mt-1 mb-8 leading-tight">{{ t('inquiry.cc_myth4.a3.question') }}</h4>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a3.source_431.label_1') }}</p>
            <ToolsDynamicTableFull class="mb-8" :storeToUpdate="climateMyth4Answers"
            :key-to-update="climateMyth4Answers.a3.source431Table"
            :tableStructure="tm('inquiry.cc_myth4.a3.source_431.table')" 
            :print-mode="true" />

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a3.source_432.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a3.source432 }}
            </p>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a3.source_433.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a3.source433 }}
            </p>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a3.conclusion') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a3.conclusion }}
            </p>


            <hr />



            <h4 class="mt-1 mb-6 leading-tight">{{ t('inquiry.cc_myth4.a4.argument') }}</h4>
            <h4 class="mt-1 mb-8 leading-tight">{{ t('inquiry.cc_myth4.a4.question') }}</h4>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a4.source_441.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a4.source441 }}
            </p>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a4.source_442.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a4.source442 }}
            </p>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a4.source_442.table_label') }}</p>
            <ToolsDynamicTableFull class="mb-8" :storeToUpdate="climateMyth4Answers"
            :key-to-update="climateMyth4Answers.a4.insectTable"
            :tableStructure="tm('inquiry.cc_myth4.a4.source_442.table')" 
            :print-mode="true" />

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a4.conclusion') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a4.conclusion }}
            </p>


            <hr />


            <h4 class="mt-1 mb-6 leading-tight">{{ t('inquiry.cc_myth4.a5.argument') }}</h4>
            <h4 class="mt-1 mb-8 leading-tight">{{ t('inquiry.cc_myth4.a5.question') }}</h4>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a5.source_451.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a5.source451 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a5.source_451.label_2') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a5.q1 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a5.conclusion') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a5.conclusion }}
            </p>



            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a5.extra.q_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a5.extra1 }}
            </p>
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a5.extra.q_2') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a5.extra2 }}
            </p>
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth4.a5.extra.q_3') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.a5.extra3 }}
            </p>


            <p class="my-1 font-bold">{{ t('inquiry.reliability_table.txt_1') }}</p>
            <ToolsReliabilityTable class="mb-8"
                :store-to-update="climateMyth4Answers" currentSources="inquiry.cc_myth4.sources" 
                :print-mode="true"
            />

            <p class="mb-1"><b>{{ t('inquiry.cc_myth4.conclusions') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth4Answers.conclusions }}
            </p>
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth4.flicc_label') }}</b></p>
            <ToolsFlicc2Table 
                :store-to-update="climateMyth4Answers" :print-mode="true" 

            />


            <hr />
            
        </div>
    </div>
</template>



<script setup>
    import { useStudentClimateGuidedMyth4 } from '~~/store/useStudentClimateGuidedMyth4.js'; 
    const climateMyth4Answers = useStudentClimateGuidedMyth4();
    
    const { locale, t, tm} = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });

    // const printMe = () => {
    //     window.print();
    // }
</script>