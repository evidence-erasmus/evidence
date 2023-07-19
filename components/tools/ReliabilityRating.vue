<template>
   <!-- <p class="text-red-400">{{ rating }}</p> -->
   <div class="rating">
        <input type="radio" :name="`rating-${idx}`" class="mask mask-cross bg-red-400" 
            checked  
            @click="storeToUpdate.changeReliabilityValue(idx, 2, '0')" style="transform:scale(0.8) translateY(0.1rem)" />
        <input type="radio" :name="`rating-${idx}`" class="mask mask-star-2 bg-blue-500" 
            :checked="rating == '1'"
            @click="storeToUpdate.changeReliabilityValue(idx, 2, '1')" />
        <input type="radio" :name="`rating-${idx}`"  class="mask mask-star-2 bg-blue-500"       
            :checked="rating == '2'"
            @click="storeToUpdate.changeReliabilityValue(idx, 2, '2')" />
        <input type="radio" :name="`rating-${idx}`"  class="mask mask-star-2 bg-blue-500" 
            :checked="rating == '3'"
            @click="storeToUpdate.changeReliabilityValue(idx, 2, '3')" />
    </div>
</template>

<script setup>
    const props = defineProps({
        idx:{},
        storeToUpdate: {},
        rating: {default:'0', type:String},
    });
</script>