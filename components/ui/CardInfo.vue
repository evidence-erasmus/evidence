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
        <div class="lg:grid lg:grid-cols-[64px_auto]">
            <Icon :name="icon" size="48" class="float-left mr-4 mt-0 lg:mt-6 lg:mr-0" :class="`text-${theme}`" />
            
            <div class="font-Heading">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
