<script setup>
    const props = defineProps({
        src : {
            type: String,
            default: ""
        },
        // caption : {
        //     type: String
        // },
        zoom: {
            type:Boolean,
            default: true
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

    <figure class="not-prose m-0" :class="elevated ? 'border-slate-300 border bg-white shadow-md rounded-lg p-4 ' : ''">
            <nuxt-img 
                :src="src" 
                fit="contain"
                loading="lazy"
                class="block w-full" :class="zoom ? 'img-zoom' : ''"
            />
            <figcaption class="block text-sm text-center italic mt-4 w-full">
                <slot name="caption"></slot>
            </figcaption>
            <p v-if="credits != '.'" class="block text-xs w-full text-center text-slate-400 break-words">{{ credits }}</p>     
    </figure>
</template>
