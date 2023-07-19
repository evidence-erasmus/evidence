<template>
    <section class="e-card w-[90vw]">  
        <div 
            class="grid grid-cols-[1fr_1fr_100px_1fr] border-t border-t-slate-300">
                <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">{{ t('col-1') }}</div>
                <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">{{ t('col-2') }}</div>
                <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">{{ t('col-3') }}</div>
                <div class="text-sm font-bold leading-none p-2 border-x border-x-slate-300">{{ t('col-4') }}</div>
        </div>
        <div v-for="row, i in storeToUpdate.reliability" 
            class="grid grid-cols-[1fr_1fr_100px_1fr]">
            <div v-for="cell, j in row" class="border border-slate-300">
                <template v-if="j === 2">
                    <div class="flex justify-center items-center h-full">
                        <ClientOnly>
                            <ToolsReliabilityRating :storeToUpdate="storeToUpdate" :idx="i" :rating="storeToUpdate.reliability[i][2]" />
                        </ClientOnly>
                    </div>
                </template>
                <template v-else>
                    <textarea v-if="!printMode" 
                        v-model="storeToUpdate.reliability[i][j]" rows="1" class="textarea block w-full h-full py-1 px-2"></textarea>
                    <div v-else class="text-sm leading-tight px-2 py-1">
                        {{ storeToUpdate.reliability[i][j] }}
                    </div>
                </template>
            </div>
        </div>
        <button v-if="!printMode" @click="storeToUpdate.addReliabilityRow" class="btn btn-sm btn-neutral mt-3">{{ t('add-row') }}</button>
    </section>
</template>

<script setup>
    const props = defineProps({
        storeToUpdate: {},
        printMode: {
            type:Boolean,
            default: false
        }
    });
    const { t } = useI18n({
        useScope: 'local'
    });
</script>

<i18n lang="json">
    {
      "en": {
        "col-1": "Evidence / main conclusions / summary of the information relevant to the hypothesis",
        "col-2": "Type and source of evidence",
        "col-3": "Reliability rate",
        "col-4": "Comments",
        "add-row": "ADD ROW"
      },
      "et": {
        "col-1": "Tõendid / peamised järeldused / kokkuvõte hüpoteesist",
        "col-2": "Tõendite tüüp ja allikas",
        "col-3": "Hinnang usaldusväärsusele",
        "col-4": "Kommentaarid",
        "add-row": "LISA RIDA"
      },
      "el": {
        "col-1": "Evidence / main conclusions / summary of the information relevant to the hypothesis",
        "col-2": "Type and source of evidence",
        "col-3": "Reliability rate",
        "col-4": "Comments",
        "add-row": "ADD ROW"
      }
    }
</i18n>