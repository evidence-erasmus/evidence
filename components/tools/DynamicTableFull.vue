<template>
    <section class="w-full">
        <h5 v-if="title" style="font-size:120%" class="mt-2 mb-0 leading-tight">{{ title }}</h5>
        <p v-if="subtitle" class="italic mt-0 mb-2 leading-tight">{{ subtitle }}</p>
        <div 
            class="grid" :style="`grid-template-columns:repeat(${tableStructure.header.length}, 1fr)`">
                <div v-for="cell in tableStructure.header" 
                    class="text-sm leading-none px-2 py-4 border border-slate-300">
                    <p class="font-bold m-0 p-0">
                        {{ rt(cell.thead) }}
                    </p>
                    <p v-if="cell.tsubhead" class="italic m-0 p-0">
                        {{ rt(cell.tsubhead) }}
                    </p>
                </div>
        </div>
        <div v-for="row, i in keyToUpdate" :key="`r${i}-${keyToUpdate.length}`" class="grid relative" :style="`grid-template-columns:repeat(${tableStructure.header.length}, 1fr)`">
            <div v-for="cell, j in row"
            class="text-sm leading-none ">
                <p v-if="overwrite && j === overwritePos || printMode === true" class="text-sm m-2 leading-none">
                    {{ keyToUpdate[i][j] }}
                </p>
                <textarea v-else v-model="keyToUpdate[i][j]" rows="1" class="textarea textarea-bordered block w-full h-full py-1 px-2 leading-tight" :key="`ta-${i}-${j}-${keyToUpdate.length}`">
                </textarea>
            </div>
            <button v-if="deleteButton" class="absolute -right-2 top-1 text-red-500" @click="deleteRow(i)"><Icon name="material-symbols:cancel" size="24" /></button>
        </div>
        
        <button v-if="addButton" @click="addRow" class="btn btn-sm btn-neutral mt-3">{{ addRowTitle ? addRowTitle : t('inquiry.add_row') }}</button>
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
        },
        deleteRow: {
            type: Boolean,
            default: false
        },
        addRowTitle: {
            type: String
        },
        overwrite: {
            type: Boolean,
            default: false
        },
        overwritePos: {
            // which column in a row to overwrite, default: first [0]
            type: Number,
            default: 0
        },
        title: {type:String},
        subtitle: {type:String},
    });
    
    const { t, tm, rt } = useI18n({
        useScope: 'global'
    });

    // Let user add rows to the table
    const addButton = computed(()=>{
        if(!props.addRow || props.printMode){
            return false;
        } else {
            return true;
        }
    });
    const deleteButton = computed(()=>{
        if(!props.deleteRow || props.printMode){
            return false;
        } else {
            return true;
        }
    });

    const addRow = () => {
        // const dynRow = props.keyToUpdate
        const row = new Array(...props.newRow);
        props.storeToUpdate.addDynamicRow(props.keyToUpdate, row);
    }

    const deleteRow = (row) => {
        props.storeToUpdate.deleteDynamicRow(props.keyToUpdate, row);
    }

    // Overwrite rows to storeToUpdate object?
    const overwriteRows = () => {
        
        props.tableStructure.rows.forEach((el, index) => {
            const overwriteValue = rt(el[props.overwritePos]);
            // console.log(row);
            props.storeToUpdate.changeDynamicRow(
                props.keyToUpdate, 
                index, 
                props.overwritePos,
                overwriteValue
            );
        })
    }
    if(props.overwrite === true){
        overwriteRows();
    }
</script>