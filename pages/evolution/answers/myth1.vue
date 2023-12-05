<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <UiPrintMessage />
        <!-- printing message -->

        <div class="prose prose-lg">
            
            
            <h1 class="mb-2">{{ t('inquiry.ev_myth1.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.ev_myth1.subtitle') }}</h3>
            <h3 class="my-8 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.cc_myth1.myth') }}</h3>
                

            <section>
                <h4 class="my-1">{{ t('inquiry.cc_myth1.hypothesis') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ climateMythOneAnswers.hypothesis }}
                </p>
                
                <h4 class="my-1">{{ t('inquiry.cc_myth1.q_1') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ climateMythOneAnswers.q1 }}
                </p>

                <h4 class="my-1">{{ t('inquiry.cc_myth1.q_2') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q2 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc_myth1.q_3') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q3 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc_myth1.q_4') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q4 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc_myth1.q_5') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q5 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc_myth1.q_6.q_6') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q6 }}
                </p>
                
                
                <h4 class="my-1">{{ t('inquiry.cc_myth1.q_7.q_7') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q7 }}
                </p>
                
                <ClientOnly>
                    <ToolsReliabilityTable :storeToUpdate="climateMythOneAnswers" :printMode="true"
                    class="mb-8" />
                </ClientOnly>
                
                
                <h4 class="my-1">{{ t('inquiry.cc_myth1.q_8') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q8 }}
                </p>
                

                <h4 class="my-1">{{ t('inquiry.cc_myth1.q_9') }}</h4>
                <ClientOnly>
                    <ToolsFliccTable :storeToUpdate="climateMythOneAnswers" :printMode="true" />
                </ClientOnly>
            </section>
        </div>
    </div>
</template>



<script setup>
    import { useStudentClimateGuidedMyth1 } from '~~/store/useStudentClimateGuidedMyth1.js'; 
    const climateMythOneAnswers = useStudentClimateGuidedMyth1();
    
    const { locale, t} = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });

    // const printMe = () => {
    //     window.print();
    // }
</script>