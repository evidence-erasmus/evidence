<template>
    <div class="grid gap-2 border border-slate-300 p-2 items-center content-center shadow-md rounded-lg " :class="`grid-cols-${buttons.length}`">
        
        <template v-for="b in buttons">
            <span v-if="b.url.length < 1" 
            class="text-center">{{b.text}}</span>
            <NuxtLink v-else
            :to="b.url"
            class="px-4 py-2 text-center no-underline bg-slate-500 text-white rounded">{{ b.text }}</NuxtLink>
        </template>
        
    </div>
</template>

<script setup>
    const props = defineProps({
        buttons : {
            type: [Array, Object],
            default: [{text:"Button", url:"#"}]
        }
    });
</script>