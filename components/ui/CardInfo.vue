<script setup>
    const props = defineProps({
        theme : {
            type: String,
            default: "yellow-400"
        },
        icon : {
            type: String,
            default: "material-symbols:info"
        }
    });
    
</script>
<template>
    <div class="shadow-md rounded-lg border bg-white px-8 py-4 border-l-8" :class="`border-${theme}`">
        <div class="md:grid md:grid-cols-[64px_auto]">
            <Icon :name="icon" size="48" class="md:mt-6" :class="`text-${theme}`" />
            <div class="font-Heading">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
