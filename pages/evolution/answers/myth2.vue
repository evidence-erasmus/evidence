<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <UiPrintMessage />

        <div class="prose prose-lg">
            
            <h1 class="mb-2">{{ t('inquiry.ev_myth2.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.ev_myth2.subtitle') }}</h3>
            <h3 class="my-8 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.ev_myth2.myth.text') }} {{ t('inquiry.ev_myth2.myth.myth') }}</h3>
            
            <section>
                <h4 class="my-1">{{ t('inquiry.ev_myth2.justification.label_1') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ evolutionMythTwoAnswers.q1 }}
                </p>
                
                <h4 class="my-1">{{ t('inquiry.ev_myth2.label_2') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ evolutionMythTwoAnswers.q2 }}
                </p>

                <h4 class="my-1">{{ t('inquiry.ev_myth2.label_3') }}</h4>
                <p>
                    {{ evolutionMythTwoAnswers.q3 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.ev_myth2.label_4') }}</h4>
                <p>
                    {{ evolutionMythTwoAnswers.q4 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.ev_myth2.label_5') }}</h4>
                <p>
                    {{ evolutionMythTwoAnswers.q5 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.ev_myth2.label_6') }}</h4>
                <p>
                    {{ evolutionMythTwoAnswers.q6 }}
                </p>
                
                <h4 class="my-1">{{ t('inquiry.ev_myth2.reliability.label_1') }}</h4>
                <ClientOnly>
                    <ToolsReliabilityTable :storeToUpdate="evolutionMythTwoAnswers" :printMode="true"
                    class="mb-8" />
                </ClientOnly>
            </section>
        </div>
    </div>
</template>



<script setup>
    import { useStudentEvolutionGuidedMyth2 } from '~~/store/useStudentEvolutionGuidedMyth2.js'; 
    const evolutionMythTwoAnswers = useStudentEvolutionGuidedMyth2();
    
    const { locale, t} = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });
</script>