<template>
    <section class="w-full">
        <div 
            class="grid" :style="`grid-template-columns:repeat(${tableStructure.length}, 1fr)`">
                <div v-for="cell in tableStructure" 
                    class="text-sm leading-none p-2 border border-slate-300">
                    <p class="font-bold m-0 p-0">
                        {{ rt(cell.thead) }}
                    </p>
                    <p v-if="cell.tsubhead" class="italic m-0 p-0 pt-1">
                        {{ rt(cell.tsubhead) }}
                    </p>
                </div>
        </div>
        <div v-for="row, i in keyToUpdate" :key="`r${i}-${keyToUpdate.length}`" class="grid" :style="`grid-template-columns:repeat(${tableStructure.length}, 1fr)`">
            <div v-for="cell, j in row"
            class="text-sm leading-none border border-slate-300">
                <textarea v-model="keyToUpdate[i][j]" rows="1" class="textarea block w-full h-full py-1 px-2" :key="`ta-${i}-${j}-${keyToUpdate.length}`">
                </textarea>
            </div>
        </div>
        
        <button v-if="addButton" @click="addRow" class="btn btn-sm btn-neutral mt-3">{{ t('inquiry.add_row') }}</button>
    </section>
</template>

<script setup>
    const props = defineProps({
        storeToUpdate: {},
        keyToUpdate: {},
        tableStructure: {},
        newRow: {
            type:Array,
            default: [""]
        },
        printMode: {
            type:Boolean,
            default: false
        },
        addRow: {
            type: Boolean,
            default: false
        }
    });
    
    const { t, rt } = useI18n({
        useScope: 'global'
    });



    const dynCols = computed(()=>{
        return `grid-cols-${props.tableStructure.length}`;
    });

    const addButton = computed(()=>{
        if(!props.addRow || props.printMode){
            return false;
        } else {
            return true;
        }
    });

    const addRow = () => {
        const row = new Array(...props.newRow);
         props.storeToUpdate.addDynamicRow(props.keyToUpdate, row);
    }
</script>