<template>
       <!-- <span class="text-red-400">{{ rating }}</span> -->
       <div class="rating">
            <input type="radio" :name="`rating-${idx}`" class="mask mask-cross bg-red-400"
                :class="printMode ? 'cursor-default' : 'cursor-pointer'"
                checked :disabled="printMode === true"
                @click="clickHandler(0)" style="transform:scale(0.8) translateY(0.1rem)" />
            <input type="radio" :name="`rating-${idx}`" class="mask mask-star-2 bg-blue-500"
                :class="printMode ? 'cursor-default' : 'cursor-pointer'"
                :checked="rating.toString() == '1'" :disabled="printMode === true"
                @click="clickHandler(1)" />
            <input type="radio" :name="`rating-${idx}`"  class="mask mask-star-2 bg-blue-500"
                :class="printMode ? 'cursor-default' : 'cursor-pointer'"
                :checked="rating.toString() == '2'" :disabled="printMode === true"
                @click="clickHandler(2)" />
            <input type="radio" :name="`rating-${idx}`"  class="mask mask-star-2 bg-blue-500"
                :class="printMode ? 'cursor-default' : 'cursor-pointer'"
                :checked="rating.toString() == '3'" :disabled="printMode === true"
                @click="clickHandler(3)" />
        </div>
</template>

<script setup>
    const props = defineProps({
        idx:{},
        storeToUpdate: {},
        rating: {},
        printMode: {type:Boolean, default:false}
    });
    const clickHandler = (value) => {
        if(props.printMode === false){
            props.storeToUpdate.changeReliabilityValue(props.idx, 2, value)
        } else {
            return;
        }
    }
</script>