<script setup>
    const props = defineProps({
        theme : {
            type: String,
            default: ""
        },
        icon : {
            type: String,
            default: "material-symbols:info"
        }
    });
    
</script>
<template>
    
    <div class="shadow-lg rounded-lg border bg-white px-8 py-4 border-l-8" :class="theme=='blue' ? 'border-sky-500' : 'border-yellow-400'">
        <div>
            <Icon :name="icon" size="64" class="float-left mr-4" :class="theme=='blue' ? 'text-sky-500' : 'text-yellow-400'" />
            <div class="font-Heading">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
