<script setup>
    const props = defineProps({
        src : {
            type: String,
            default: ""
        },
        caption : {
            type: String
        },
        credits : {
            type: String,
            default: "."
        },
        elevated: {
            type: Boolean,
            default: false
        }
    });

    // const {locale} = useI18n();
    // const localePath = useLocalePath();

</script>

<template>

    <figure class="not-prose m-0" :class="elevated ? 'border-slate-300 border bg-white shadow-lg rounded-xl p-4 ' : ''">
            <nuxt-img 
                :src="src" 
                fit="contain"
                loading="lazy"
                class="block"
            />
            <figcaption class="block text-sm text-center italic mt-4 w-full" v-html="caption" />
            <caption v-if="credits != '.'" class="block text-xs w-full text-slate-400">{{ credits }}</caption>     
    </figure>
</template>
