<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <UiPrintMessage />
        <!-- printing message -->

        <div class="prose prose-lg">
            
            
            <h1 class="mb-2">{{ t('inquiry.cc_myth2.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.cc_myth2.subtitle') }}</h3>
            <h3 class="my-8 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.cc_myth2.myth') }}</h3>
            
            <!-- argument 1 question 1 -->

            <h4 class="my-1">{{ t('inquiry.cc_myth2.a1.argument.argument') }}</h4>
            <h4 class="my-1">{{ t('inquiry.cc_myth2.a1.q1.title_1') }}</h4>
            
            <h4 class="mb-1 mt-6">{{ t('inquiry.cc_myth2.a1.q1.answer_1') }}</h4>
            
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth2.a1.q1.label_1') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMythTwoAnswers.a1.q1.t1 }}
            </p>
            <p class="my-1 font-bold">{{ t('inquiry.cc_myth2.a1.q1.label_2') }}</p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMythTwoAnswers.a1.q1.t2 }}
            </p>

            <!-- a1 q2 -->

            <h4 class="my-1">{{ t('inquiry.cc_myth2.a1.q2.title_1') }}</h4>

            <p><b>{{ t('inquiry.cc_myth2.a1.q2.txt_1') }}</b></p>
            
            <ToolsDynamicTableFull :tableStructure="tm('inquiry.cc_myth2.a1.q2.data_table')" :storeToUpdate="climateMythTwoAnswers" :keyToUpdate="climateMythTwoAnswers.a1.q2.datatable"
            :printMode="true" />
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth2.a1.q2.hypothesis') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMythTwoAnswers.a1.q2.hypothesis }}
            </p>

            <p class="mb-1"><b>{{ t('inquiry.cc_myth2.a1.q2.table2_title') }}</b></p>
            <ToolsDynamicTableFull :tableStructure="tm('inquiry.cc_myth2.a1.q2.table_2')" :storeToUpdate="climateMythTwoAnswers" :keyToUpdate="climateMythTwoAnswers.a1.q2.table2"
            :printMode="true" />

            <p class="mb-1"><b>{{ t('inquiry.cc_myth2.a1.q2.conclusions') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMythTwoAnswers.a1.q2.conclusions }}
            </p>
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth2.a1.q2.source_1.label_1') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMythTwoAnswers.a1.q2.source1 }}
            </p>
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth2.a1.q2.source_2.label_1') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMythTwoAnswers.a1.q2.source2 }}
            </p>
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth2.a1.q2.source_3.label_1') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMythTwoAnswers.a1.q2.source3 }}
            </p>

            
            <!-- argument 2 -->

            <hr />

            <h4 class="my-1">{{ t('inquiry.cc_myth2.a2.argument') }}</h4>
            <h4 class="mt-1 mb-6">{{ t('inquiry.cc_myth2.a2.q1.question') }}</h4>

            <p class="mb-1"><b>{{ t('inquiry.cc_myth2.a2.q1.source_1.label_1') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMythTwoAnswers.a2.q1.source1 }}
            </p>
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth2.a2.q1.label_2') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMythTwoAnswers.a2.q1.t1 }}
            </p>

            <p class="mb-1"><b>{{ t('inquiry.cc_myth2.reliability.label_1') }}</b></p>
            
            <ToolsReliabilityTable class="mb-8"
                :store-to-update="climateMythTwoAnswers" currentSources="inquiry.cc_myth2.sources" 
                :print-mode="true"
            />
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth2.conclusions') }}</b></p>
            <p class="whitespace-pre-wrap mt-1">
                {{ climateMythTwoAnswers.conclusions }}
            </p>
            
            <p class="mb-1"><b>{{ t('inquiry.cc_myth2.flicc_label') }}</b></p>
            <ToolsFlicc2Table 
                :store-to-update="climateMythTwoAnswers" :print-mode="true" 

            />


            <hr />

            
        </div>
    </div>
</template>



<script setup>
    import { useStudentClimateGuidedMyth2 } from '~~/store/useStudentClimateGuidedMyth2.js'; 
    const climateMythTwoAnswers = useStudentClimateGuidedMyth2();
    
    const { locale, t, tm} = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });

    // const printMe = () => {
    //     window.print();
    // }
</script>