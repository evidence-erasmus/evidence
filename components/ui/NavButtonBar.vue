<template>
    <div class="inline-flex flex-col sm:flex-row gap-2 border border-slate-300 p-3 items-center shadow rounded-xl " >
        <template v-for="b in buttons">
            <span v-if="b.url.length < 1" 
            class="text-center">{{b.text}}</span>
            <!-- <NuxtLink v-else
                :to="b.url">
                <button class="btn btn-secondary font-normal text-lg">{{ b.text }}</button>
            </NuxtLink> -->
            <NuxtLink v-else
                :to="b.url" :target="b.blank === true ? '_blank' : '_self'" class="btn btn-secondary text-white no-underline">
                {{ b.text }}
            </NuxtLink>
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
    const localePath = useLocalePath();
</script>