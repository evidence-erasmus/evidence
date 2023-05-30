<template>
   <section class="e-card w-[90vw] -ml-[3vw] sm:w-[90vw] sm:-ml-[3vw] lg:w-[92vw] lg:-ml-[6vw]">
                <div 
                class="grid grid-cols-[1fr_1fr_100px_1fr]">
                    <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Tõendid / peamised järeldused / kokkuvõte hüpoteesist</div>
                    <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Tõendite tüüp ja allikas</div>
                    <div class="text-sm font-bold leading-none p-2 border-l border-l-slate-300">Hinnang usaldusväärsusele</div>
                    <div class="text-sm font-bold leading-none p-2 border-x border-x-slate-300">Kommentaarid</div>
                </div>
                <div v-for="row, i in storeToUpdate.reliability" 
                class="grid grid-cols-[1fr_1fr_100px_1fr]">
                    <div v-for="cell, j in row" class="border border-slate-300">
                        <div v-if="j === 2" class="flex justify-center items-center h-full">
                            <ToolsReliabilityRating :storeToUpdate="storeToUpdate" :idx="i" :rating="storeToUpdate.reliability[i][2]" />
                        </div>
                        <textarea v-else 
                        v-model="storeToUpdate.reliability[i][j]" rows="1" class="textarea block w-full h-full py-1 px-2"></textarea>
                    </div>
                </div>
                <button @click="storeToUpdate.addReliabilityRow" class="bg-slate-700 text-md text-slate-100 rounded-full px-4 mt-4">LISA RIDA</button>
            </section>
</template>

<script setup>
    const props = defineProps({
        storeToUpdate: {}
    });
</script>