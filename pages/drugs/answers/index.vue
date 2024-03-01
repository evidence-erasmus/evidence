<template>
    <div class="p-6 md:p-10" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
        
        <!-- printing message -->
        <UiPrintMessage />

        <div class="prose prose-lg">
            
            <h1 class="mb-2">{{ t('inquiry.drugs.title') }}</h1>
            <h3 class="uppercase mt-2 mb-6">{{ t('inquiry.drugs.subtitle') }}</h3>
            <!-- <h3 class="my-8 border-l-4 border-l-rose-400 pl-4">{{ t('inquiry.ev_myth1.myth.text') }} {{ t('inquiry.ev_myth1.myth.myth') }}</h3> -->
            
            <section>
                <h4 class="my-1">{{ t('inquiry.drugs.label_1') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ drugsAnswers.myth }}
                </p>
                
                <h4 class="my-1">{{ t('inquiry.drugs.label_2') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ drugsAnswers.hypothesis }}
                </p>

                <h4 class="my-1">{{ t('inquiry.drugs.label_3') }}</h4>
                <p>
                    {{ drugsAnswers.planOfActivities }}
                </p>

                <h4 class="my-1">{{ t('inquiry.ev_myth1.reliability.label_1') }}</h4>
                <ClientOnly>
                    <ToolsReliabilityTable :storeToUpdate="drugsAnswers" :printMode="true"
                    class="mb-8" />
                </ClientOnly>

                <h4 class="my-1">{{ t('inquiry.drugs.label_4') }}</h4>
                <p>
                    {{ drugsAnswers.conclusions }}
                </p>
                <h4 class="my-1">{{ t('inquiry.drugs.label_5') }}</h4>
                <p>
                    {{ drugsAnswers.decision }}
                </p>
                
                
            </section>
        </div>
    </div>
</template>



<script setup>
    import { useStudentDrugs } from '~~/store/useStudentInputDrugs.js'; 
    const drugsAnswers = useStudentDrugs();
    
    const { locale, t} = useI18n({ useScope: 'global' });
    
    definePageMeta({
        layout: "base",
    });
</script>