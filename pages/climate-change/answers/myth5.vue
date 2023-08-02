<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <UiPrintMessage />
        <!-- printing message -->

        <div class="prose prose-lg">
            
            
            <h1 class="mb-2">{{ t('inquiry.cc_myth5.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.cc_myth5.subtitle') }}</h3>
            <h2 class="my-8 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.cc_myth5.myth') }}</h2>
            

            <h4 class="mt-1 mb-6 leading-tight">{{ t('inquiry.cc_myth5.argument.argument') }}</h4>
            <h4 class="mt-1 mb-8 leading-tight">{{ t('inquiry.cc_myth5.question') }}</h4>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth5.hypothesis') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth5Answers.hypothesis }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth5.source_1.txt_2') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth5Answers.videoNotes }}
            </p>
            
            <hr />

            <h4 class="mt-1 mb-8 font-bold">{{ t('inquiry.cc_myth5.exp_1.question') }}</h4>

            <h4 class="my-1 font-bold">{{ t('inquiry.cc_myth5.exp_1.title') }}</h4>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth5.exp_1.table_1.label') }}</p>
            <ToolsDynamicTableFull class="mb-8"
                :tableStructure="tm('inquiry.cc_myth5.exp_1.table_1.table')" 
                :storeToUpdate="climateMyth5Answers" 
                :keyToUpdate="climateMyth5Answers.exp.variableTable"
                :print-mode="true" 
            />

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth5.exp_1.hypothesis') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth5Answers.exp.hypothesis }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth5.exp_1.table_2.title') }}</p>
            <ToolsDynamicTableFull class="mb-8"
                :store-to-update="climateMyth5Answers"
                :key-to-update="climateMyth5Answers.exp.tempTable"
                :table-structure="tm('inquiry.cc_myth5.exp_1.table_2')"
                :print-mode="true"
            />

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth5.exp_1.table_3.title') }}</p>
            <ToolsDynamicTableFull class="mb-8"
                :store-to-update="climateMyth5Answers"
                :key-to-update="climateMyth5Answers.exp.dataTable"
                :table-structure="tm('inquiry.cc_myth5.exp_1.table_3')"
                :print-mode="true"
            />

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth5.exp_1.collected_data') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth5Answers.exp.collectedData }}
            </p>

            <hr />



            <p class="my-1 font-bold">{{ t('inquiry.reliability_table.txt_1') }}</p>
            <ToolsReliabilityTable class="mb-8"
                :store-to-update="climateMyth5Answers" currentSources="inquiry.cc_myth5.sources" 
                :print-mode="true"
            />

            <p class="mb-1"><b>{{ t('inquiry.cc_myth5.conclusion') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth5Answers.conclusions }}
            </p>
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth5.flicc_label') }}</b></p>
            <ToolsFlicc2Table 
                :store-to-update="climateMyth5Answers" :print-mode="true" 

            />

            <hr />
            
        </div>
    </div>
</template>



<script setup>
    import { useStudentClimateGuidedMyth5 } from '~~/store/useStudentClimateGuidedMyth5.js'; 
    const climateMyth5Answers = useStudentClimateGuidedMyth5();
    
    const { locale, t, tm} = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });

    // const printMe = () => {
    //     window.print();
    // }
</script>