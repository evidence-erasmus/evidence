<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <UiPrintMessage />

        <div class="prose prose-lg">
            
            <h1 class="mb-2">{{ t('inquiry.ev_myth1.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.ev_myth1.subtitle') }}</h3>
            <h3 class="my-8 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.ev_myth1.myth.text') }} {{ t('inquiry.ev_myth1.myth.myth') }}</h3>
            
            <section>
                <h4 class="my-1">{{ t('inquiry.ev_myth1.justification.label_1') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ evolutionMythOneAnswers.q1 }}
                </p>
                
                <h4 class="my-1">{{ t('inquiry.ev_myth1.label_2') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ evolutionMythOneAnswers.q2 }}
                </p>

                <h4 class="my-1">{{ t('inquiry.ev_myth1.label_3') }}</h4>
                <p>
                    {{ evolutionMythOneAnswers.q3 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.ev_myth1.label_4') }}</h4>
                <p>
                    {{ evolutionMythOneAnswers.q4 }}
                </p>
                <h4 class="my-1">{{ t('inquiry.ev_myth1.label_5') }}</h4>
                <p>
                    {{ evolutionMythOneAnswers.q5 }}
                </p>
                
                <h4 class="my-1">{{ t('inquiry.ev_myth1.reliability.label_1') }}</h4>
                <ClientOnly>
                    <ToolsReliabilityTable :storeToUpdate="evolutionMythOneAnswers" :printMode="true"
                    class="mb-8" />
                </ClientOnly>
            </section>
        </div>
    </div>
</template>



<script setup>
    import { useStudentEvolutionGuidedMyth1 } from '~~/store/useStudentEvolutionGuidedMyth1.js'; 
    const evolutionMythOneAnswers = useStudentEvolutionGuidedMyth1();
    
    const { locale, t} = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });
</script>