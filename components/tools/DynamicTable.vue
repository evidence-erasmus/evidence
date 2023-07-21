<template>
    <section class="e-card w-[90vw]">  
        <div 
            class="grid grid-cols-[1fr_1fr_1fr] ">
                <div v-for="cell in tableStructure" 
                    class="text-sm leading-none p-2 border border-slate-300">
                    <p class="font-bold m-0 p-0">
                        {{ cell.title.body.static }}
                    </p>
                    <p class="italic m-0 p-0 pt-1">
                        {{ cell.subtitle.body.static }}
                    </p>
                </div>
        </div>
        <div v-for="row, i in keyToUpdate" class="grid grid-cols-[1fr_1fr_1fr]">
            <div v-for="cell, j in row"
            class="text-sm leading-none p-2 border border-slate-300">
                <textarea v-model="keyToUpdate[i][j]" rows="1" class="textarea block w-full h-full py-1 px-2">
                </textarea>
            </div>
        </div>
        
        <button v-if="!printMode" @click="storeToUpdate.addDynamicRow(keyToUpdate)" class="btn btn-sm btn-neutral mt-3">{{ t('add-row') }}</button>
    </section>
</template>

<script setup>
    const props = defineProps({
        storeToUpdate: {},
        keyToUpdate: {},
        tableStructure: {},
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
        "add-row": "ADD ROW"
      },
      "et": {
        "add-row": "LISA RIDA"
      },
      "el": {
        "add-row": "ADD ROW"
      }
    }
</i18n>