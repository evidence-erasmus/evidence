<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <UiPrintMessage />

        <div class="prose prose-lg">
            
            <h1 class="mb-2">{{ t('inquiry.ev_myth5.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.ev_myth5.subtitle') }}</h3>
            <h3 class="my-8 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.ev_myth5.myth.text') }} {{ t('inquiry.ev_myth5.myth.myth') }}</h3>
            
            <section>
                <h4 class="my-1">{{ t('inquiry.ev_myth5.justification.label_1') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ evolutionMythFiveAnswers.q1 }}
                </p>
                
                <h4 class="my-1">{{ t('inquiry.ev_myth5.label_2') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ evolutionMythFiveAnswers.q2 }}
                </p>

                <h4 class="my-1">{{ t('inquiry.ev_myth5.label_3') }}</h4>
                <p>
                    {{ evolutionMythFiveAnswers.q3 }}
                </p>
                
                <h4 class="my-1">{{ t('inquiry.ev_myth5.label_4') }}</h4>
                <p>
                    {{ evolutionMythFiveAnswers.q4 }}
                </p>

                               
                <h4 class="my-1">{{ t('inquiry.ev_myth5.reliability.label_1') }}</h4>
                <ClientOnly>
                    <ToolsReliabilityTable :storeToUpdate="evolutionMythFiveAnswers" :printMode="true"
                    class="mb-8" />
                </ClientOnly>
            </section>
        </div>
    </div>
</template>



<script setup>
    import { useStudentEvolutionGuidedMyth5 } from '~~/store/useStudentEvolutionGuidedMyth5.js'; 
    const evolutionMythFiveAnswers = useStudentEvolutionGuidedMyth5();
    
    const { locale, t} = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });
</script>