<template>
    <section class="e-card w-[90vw]">  
        <div 
            class="grid" :style="`grid-template-columns:repeat(${tableStructure.length}, 1fr)`">
                <div v-for="cell in tableStructure" 
                    class="text-sm leading-none p-2 border border-slate-300">
                    <p class="font-bold m-0 p-0">
                        {{ cell.thead.body.static }}
                    </p>
                    <p v-if="cell.tsubhead" class="italic m-0 p-0 pt-1">
                        {{ cell.tsubhead.body.static }}
                    </p>
                </div>
        </div>
        <div v-for="row, i in keyToUpdate" class="grid" :style="`grid-template-columns:repeat(${tableStructure.length}, 1fr)`">
            <div v-for="cell, j in row"
            class="text-sm leading-none border border-slate-300">
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
    
    const dynCols = computed(()=>{
        return `grid-cols-${props.tableStructure.length}`;
    })

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