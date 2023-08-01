<template>
    <section class="w-full">  
        
        <div class="grid grid-cols-[1fr_1fr_110px_1fr]">
            <div v-for="thead in tm('inquiry.reliability_table.cols')" class="font-bold leading-tight text-sm border border-slate-300 px-2 py-1">
                {{ rt(thead) }}
            </div>
        </div>
        


        <div v-for="row, i in storeToUpdate.reliability" 
            class="grid grid-cols-[1fr_1fr_110px_1fr]">
            <div v-for="cell, j in row" class="border border-slate-300">
                <template v-if="j === 1 && i < tm(currentSources).length ">
                    <div class="px-2 py-1 text-sm">
                        <a v-if="tm(currentSources)[i].url" :href="rt( tm(currentSources)[i].url)" target="_blank" rel="noopener noreferrer">
                            {{ rt( tm(currentSources)[i].name ) }}
                        </a>
                        <span v-else>
                            {{ rt( tm(currentSources)[i].name ) }}
                        </span>
                    </div>
                </template>
                
                <template v-else-if="j === 2">
                    <div class="flex justify-center items-center h-full">
                        <ClientOnly>
                            <ToolsReliabilityRating :storeToUpdate="storeToUpdate" :idx="i" :rating="storeToUpdate.reliability[i][2]" :printMode="printMode" :key="storeToUpdate.$id+i+j"  />
                        </ClientOnly>
                    </div>
                </template>
                
                <template v-else>
                    <textarea v-if="printMode === false" 
                        v-model="storeToUpdate.reliability[i][j]" rows="1" class="textarea block w-full h-full py-1 px-2 leading-tight"></textarea>
                    <div v-else class="leading-tight px-2 py-2">
                        {{ storeToUpdate.reliability[i][j] }} +
                    </div>
                </template>
            </div>
        </div>

        <button v-if="addButton" @click="storeToUpdate.addReliabilityRow" class="btn btn-sm btn-neutral mt-3">{{ t('inquiry.reliability_table.add_row') }}</button>
    </section>
</template>

<script setup>
    const props = defineProps({
        currentSources: {default: {}},
        storeToUpdate: {},
        printMode: {
            type:Boolean,
            default: false
        },
        addRow: {
            type: Boolean,
            default: false
        }
    });
    
    // console.log(props.currentSources);

    const { t, tm, rt } = useI18n({
        useScope: 'global'
    });
   
    const addButton = computed(()=>{
        if(!props.addRow || props.printMode){
            return false;
        } else {
            return true;
        }
    });

</script>
