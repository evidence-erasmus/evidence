<template>
   <div class="rating">
        <input type="radio" :name="`rating-${idx}`"  class="mask mask-star-2 bg-blue-500" checked  
            @click="storeToUpdate.changeReliabilityValue(idx, '⭐')" />
        <input type="radio" :name="`rating-${idx}`"  class="mask mask-star-2 bg-blue-500" 
            @click="storeToUpdate.changeReliabilityValue(idx, '⭐⭐')" />
        <input type="radio" :name="`rating-${idx}`"  class="mask mask-star-2 bg-blue-500" 
            @click="storeToUpdate.changeReliabilityValue(idx, '⭐⭐⭐')" />
    </div>
</template>

<script setup>
    const props = defineProps({
        idx:{},
        storeToUpdate: {}
    });
</script>