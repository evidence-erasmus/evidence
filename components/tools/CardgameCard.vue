<template>
    <div class="flex flex-col justify-around
        p-4
        border-4 
        text-center
        rounded-lg shadow-md break-inside-avoid 
        print:shadow-none" 
        :class="props.border"
        style="hyphens: auto;"
    >
        <h3 v-if="props.emoji" class="text-center text-4xl my-4">{{ props.emoji }}</h3>
        <h3 v-if="props.title" class="text-center text-[12pt] leading-none mt-0 mb-2">{{ props.title }}</h3>
        <p class="text-[9pt] m-0 leading-tight print:font-sans">{{ props.story }}</p>
    </div>
</template>
<script setup>
    const props = defineProps({
        emoji: {
            type: String,
            default: undefined
        },
        title: {
            type: String,
            default: undefined
        },
        story: {
            type: String,
            default: "..."
        },
        border: {
            type: String,
            default:"border-sky-400"
        }
    });
</script>