<template>
    <div class="p-6 md:p-10" :lang="locale" style="hyphens:auto;">
        <div class="prose prose-lg">
            <h1 class="mb-2">{{ t('inquiry.cc_open.title') }}</h1>
            <h3 class="uppercase my-2">{{ t('inquiry.cc_open.subtitle') }}</h3>
            
            <UiPrintMessage />

            <section>
                <h4 class="my-1">{{ t('inquiry.cc_open.q1_title') }}</h4>
                <p class="whitespace-pre-wrap">
                    {{ studentClimateOpen.mythName }}
                </p>

                <h4 class="my-1">{{ t('inquiry.cc_open.q2_title') }}</h4>
                <p>
                    {{ studentClimateOpen.q2 }}
                </p>
                <!-- Plan -->
                <h4 class="my-1">{{ t('inquiry.cc_open.plan.label_1') }}</h4>
                <p>
                    {{ studentClimateOpen.q3 }}
                </p>
                
                <!-- Reliability table -->
                <h4 class="my-1">{{ t('inquiry.cc_open.reliability.label_1') }}</h4>
                <ToolsReliabilityTable class="mb-8"
                    :storeToUpdate="studentClimateOpen"
                    :printMode="true"
                />

                <h4 class="my-1">{{ t('inquiry.cc_open.q4_title') }}</h4>
                <p>
                    {{ studentClimateOpen.q4 }}
                </p>
                
                <!-- flicc table -->
                <h4 class="my-1">{{ t('inquiry.cc_open.q5_title') }}</h4>
                <ToolsFliccTable 
                    :store-to-update="studentClimateOpen"
                    :print-mode="true"
                />
                
            </section>
        </div>
    </div>
</template>

<script setup>
    import { useStudentClimateOpen } from '~~/store/useStudentClimateOpen.js'; 
    const studentClimateOpen = useStudentClimateOpen();
    
    const { locale, t } = useI18n({ useScope: 'global' });
    definePageMeta({
        layout: "base",
    });

    // const printMe = () => {
    //     // console.log("printing");
    //     window.print();
    // }
</script>