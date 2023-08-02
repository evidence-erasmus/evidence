<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <UiPrintMessage />
        <!-- printing message -->

        <div class="prose prose-lg">
            
            
            <h1 class="mb-2">{{ t('inquiry.cc_myth6.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.cc_myth6.subtitle') }}</h3>
            <h2 class="my-8 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.cc_myth6.myth') }}</h2>
            

            <h4 class="mt-1 mb-6 leading-tight">{{ t('inquiry.cc_myth6.argument.argument') }}</h4>
            <h4 class="mt-1 mb-8 leading-tight">{{ t('inquiry.cc_myth6.question') }}</h4>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth6.hypothesis') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth6Answers.hypothesis }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth6.source_61.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth6Answers.source61 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth6.source_62.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth6Answers.source62 }}
            </p>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth6.source_63.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth6Answers.source63 }}
            </p>



            <p class="my-1 font-bold">{{ t('inquiry.reliability_table.txt_1') }}</p>
            <ToolsReliabilityTable class="mb-8"
                :store-to-update="climateMyth6Answers" currentSources="inquiry.cc_myth6.sources" 
                :print-mode="true"
            />

            <p class="mb-1"><b>{{ t('inquiry.cc_myth6.conclusion') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMyth6Answers.conclusions }}
            </p>
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth6.flicc_label') }}</b></p>
            <ToolsFlicc2Table 
                :store-to-update="climateMyth6Answers" :print-mode="true" 

            />


            <hr />
            
        </div>
    </div>
</template>



<script setup>
    import { useStudentClimateGuidedMyth6 } from '~~/store/useStudentClimateGuidedMyth6.js'; 
    const climateMyth6Answers = useStudentClimateGuidedMyth6();
    
    const { locale, t, tm} = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });

    // const printMe = () => {
    //     window.print();
    // }
</script>