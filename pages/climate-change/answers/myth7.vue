<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <UiPrintMessage />
        <!-- printing message -->

        <div class="prose prose-lg">
            
            
            <h1 class="mb-2">{{ t('inquiry.cc_myth7.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.cc_myth7.subtitle') }}</h3>
            <h2 class="my-8 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.cc_myth7.myth') }}</h2>
            

            <h4 class="mt-1 mb-6 leading-tight">{{ t('inquiry.cc_myth7.argument.argument') }}</h4>
            <h4 class="mt-1 mb-8 leading-tight">{{ t('inquiry.cc_myth7.question') }}</h4>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth7.hypothesis') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth7Answers.hypothesis }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth7.source_71.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth7Answers.source71 }}
            </p>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth7.source_72.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth7Answers.source72 }}
            </p>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth7.table_years.label_1') }}</p>
            <ToolsDynamicTableFull class="mb-8"
                :storeToUpdate="climateMyth7Answers" 
                :keyToUpdate="climateMyth7Answers.yearsTable" 
                :tableStructure="tm('inquiry.cc_myth7.table_years.table')"
                :print-mode="true"
            />

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth7.years_max') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth7Answers.yearsMax }}
            </p>

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth7.source_73.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth7Answers.source73 }}
            </p>

            <p class="my-1 font-bold">{{ t('inquiry.reliability_table.txt_1') }}</p>
            <ToolsReliabilityTable class="mb-8"
                :store-to-update="climateMyth7Answers" currentSources="inquiry.cc_myth7.sources" 
                :print-mode="true"
            />

            <p class="mb-1"><b>{{ t('inquiry.cc_myth7.conclusion') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth7Answers.conclusions }}
            </p>
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth7.flicc_label') }}</b></p>
            <ToolsFlicc2Table 
                :store-to-update="climateMyth7Answers" :print-mode="true" 

            />



            <!-- <p class="my-1 font-bold">{{ t('inquiry.cc_myth7.source_61.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth6Answers.source61 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth7.source_62.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth6Answers.source62 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth7.source_63.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth6Answers.source63 }}
            </p>



            <p class="my-1 font-bold">{{ t('inquiry.reliability_table.txt_1') }}</p>
            <ToolsReliabilityTable class="mb-8"
                :store-to-update="climateMyth6Answers" currentSources="inquiry.cc_myth7.sources" 
                :print-mode="true"
            />

            <p class="mb-1"><b>{{ t('inquiry.cc_myth7.conclusion') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth6Answers.conclusions }}
            </p>
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth7.flicc_label') }}</b></p>
            <ToolsFlicc2Table 
                :store-to-update="climateMyth6Answers" :print-mode="true" 

            /> -->


            <hr />
            
        </div>
    </div>
</template>



<script setup>
    import { useStudentClimateGuidedMyth7 } from '~~/store/useStudentClimateGuidedMyth7.js'; 
    const climateMyth7Answers = useStudentClimateGuidedMyth7();
    
    const { locale, t, tm} = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });

    // const printMe = () => {
    //     window.print();
    // }
</script>