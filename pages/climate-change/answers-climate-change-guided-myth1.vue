<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <div class="e-card mb-8 md:fixed md:right-4 md:top-24 md:w-60 print:hidden">
            <p class="italic mt-2">{{ t('print.hint') }}</p>
            <button @click="printMe" class="my-4 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white uppercase"><icon name="material-symbols:print-outline-rounded" /> {{ t('print.print') }}</button>
        </div>
        <!-- printing message -->

        <div class="prose prose-lg">
            
            
            <h1 class="mb-2">{{ t('inquiry.cc-myth1.title') }}</h1>
            <p class="uppercase my-2">{{ t('inquiry.cc-myth1.subtitle') }}</p>
            <h3 class="mb-8 text-rose-400 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.cc-myth1.myth') }}</h3>
                

            <section>
                <h4 class="my-1">{{ t('inquiry.cc-myth1.hypothesis') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ climateMythOneAnswers.hypothesis }}
                </p>
                
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-1') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ climateMythOneAnswers.q1 }}
                </p>

                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-2') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q2 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-3') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q3 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-4') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q4 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-5') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q5 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-6.q-6') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q6 }}
                </p>
                
                
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-7.q-7') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q7 }}
                </p>
                
                <ClientOnly>
                    <ToolsReliabilityTable :storeToUpdate="climateMythOneAnswers" :printMode="true"
                    class="mb-8" />
                </ClientOnly>
                
                
                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-8') }}</h4>
                <p>
                    {{ climateMythOneAnswers.q8 }}
                </p>
                

                <h4 class="my-1">{{ t('inquiry.cc-myth1.q-9') }}</h4>
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

    const printMe = () => {
        window.print();
    }
</script>