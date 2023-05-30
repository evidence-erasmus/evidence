<template>
   <div class="rating">
        <input type="radio" :name="`rating-${idx}`"  class="mask mask-star-2 bg-blue-500" checked  
            @click="storeToUpdate.changeReliabilityValue(idx, '1')" />
        <input type="radio" :name="`rating-${idx}`"  class="mask mask-star-2 bg-blue-500" :checked="rating == '2'"
            @click="storeToUpdate.changeReliabilityValue(idx, '2')" />
        <input type="radio" :name="`rating-${idx}`"  class="mask mask-star-2 bg-blue-500" :checked="rating == '3'"
            @click="storeToUpdate.changeReliabilityValue(idx, '3')" />
    </div>
</template>

<script setup>
    const props = defineProps({
        idx:{},
        storeToUpdate: {},
        rating: {default:1},
    });
</script>