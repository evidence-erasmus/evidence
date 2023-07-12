<template>
    <div class="inline-flex gap-2 border border-slate-300 p-2 items-center shadow rounded-lg " >
    <!-- <div class="jin"> -->
        <template v-for="b in buttons">
            <span v-if="b.url.length < 1" 
            class="text-center">{{b.text}}</span>
            <NuxtLink v-else
                :to="b.url">
                <button class="btn btn-lg btn-neutral font-normal">{{ b.text }}</button>
            </NuxtLink>
        </template>
        <!-- class="px-4 py-2 text-center no-underline bg-slate-500 text-white rounded transition duration-300 -->
        
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