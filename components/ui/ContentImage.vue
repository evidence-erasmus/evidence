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
            type: String
        },
        elevated: {
            type: Boolean,
            default: false
        }
    });

    const {locale} = useI18n();
    const localePath = useLocalePath();

</script>

<template>

    <figure class="elevated ? 'border-slate-900 border bg-white shadow-lg rounded-xl p-4 ' : ''">
            <nuxt-img 
                :src="src" 
                fit="contain"
                loading="lazy"
                class="block"
            />
            <caption class="block text-sm italic mt-4 w-full" v-html="caption" />
            <caption class="block text-xs w-full text-slate-400">{{ credits }}</caption>
            
    </figure>
</template>
