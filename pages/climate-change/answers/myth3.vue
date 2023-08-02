<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <UiPrintMessage />
        <!-- printing message -->

        <div class="prose prose-lg">
            
            
            <h1 class="mb-2">{{ t('inquiry.cc_myth3.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.cc_myth3.subtitle') }}</h3>
            <h3 class="my-8 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.cc_myth3.myth') }}</h3>
            

            <h4 class="mt-1 mb-6 leading-tight">{{ t('inquiry.cc_myth3.argument.argument') }}</h4>
            <h4 class="mt-1 mb-8 leading-tight">{{ t('inquiry.cc_myth3.question') }}</h4>
            
            

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth3.hypothesis') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth3Answers.a1.q1.hypothesis }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth3.q_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth3Answers.a1.q1.noaa1q1 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth3.q_2') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth3Answers.a1.q1.noaa1q2 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth3.q_3') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth3Answers.a1.q1.noaa1q3 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth3.q_4') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth3Answers.a1.q1.noaa1q4 }}
            </p>


            <ToolsDynamicTableFull :tableStructure="tm('inquiry.cc_myth3.noaa1_table')" :storeToUpdate="climateMyth3Answers" :keyToUpdate="climateMyth3Answers.a1.q1.noaa1Table"
            :print-mode="true" />

            <p class="my-1 font-bold">{{ t('inquiry.cc_myth3.q_5') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth3Answers.a1.q1.noaa1q5 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth3.img_2.conclusion') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth3Answers.a1.q1.noaa2conclusion }}
            </p>


            <p class="my-1 font-bold">{{ t('inquiry.reliability_table.txt_1') }}</p>
            <ToolsReliabilityTable class="mb-8"
                :store-to-update="climateMyth3Answers" currentSources="inquiry.cc_myth3.sources" 
                :print-mode="true"
            />

            <p class="mb-1"><b>{{ t('inquiry.cc_myth3.conclusion') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth3Answers.conclusions }}
            </p>
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth3.flicc_label') }}</b></p>
            <ToolsFlicc2Table 
                :store-to-update="climateMyth3Answers" :print-mode="true" 

            />

            <hr />
            
        </div>
    </div>
</template>



<script setup>
    import { useStudentClimateGuidedMyth3 } from '~~/store/useStudentClimateGuidedMyth3.js'; 
    const climateMyth3Answers = useStudentClimateGuidedMyth3();
    
    const { locale, t, tm} = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });

    // const printMe = () => {
    //     window.print();
    // }
</script>