<template>
    <div class="p-6 md:p-10" :lang="locale" style="hyphens: auto;">
        <UiPrintMessage />
        <div class="prose prose-lg">
            <h1 class="mb-2">{{ t('inquiry.ev_open.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.ev_open.subtitle') }}</h3>
            <!-- <p class="italic mt-2 print:hidden">{{ t('print.hint') }}</p> -->
            <!-- <button @click="printMe" class="my-4 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white uppercase print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('print.print') }}</button> -->


            <section>
                <h4 class="my-1">{{ t('inquiry.ev_open.q1_title') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ studentAnswers.mythName }}
                </p>

                <h4 class="my-1">{{ t('inquiry.ev_open.q2.title') }}</h4>
                <p>
                    {{ studentAnswers.hypothesis }}
                </p>
                <!-- Plan -->
                <h4 class="my-1">{{ t('inquiry.ev_open.plan.label_1') }}</h4>
                <p>
                    {{ studentAnswers.plan }}
                </p>
                
                <!-- Reliability table -->
                <h4 class="my-1">{{ t('inquiry.ev_open.reliability.label_1') }}</h4>
                <ToolsReliabilityTable class="mb-8"
                    :storeToUpdate="studentAnswers"
                    :printMode="true"
                />

                <h4 class="my-1">{{ t('inquiry.ev_open.conclusions') }}</h4>
                <p>
                    {{ studentAnswers.conclusions }}
                </p>
            </section>
        </div>
        
        <!-- <button @click="printMe" class="mt-8 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white uppercase print:hidden"><icon name="material-symbols:print-outline-rounded" /> {{ t('print') }}</button> -->
    </div>
</template>



<script setup>
    import { useStudentEvolutionOpen } from '~~/store/useStudentEvolutionOpen.js'; 
    const studentAnswers = useStudentEvolutionOpen();
    
    const { locale, t } = useI18n({ useScope: 'global' });
    definePageMeta({
        layout: "base",
    });
</script>