<script setup>
    const props = defineProps({
        title : {
            type: String
        },
        icon : {
            type: String,
            default: "material-symbols:info"
        }
    });

</script>
<template>
    
    <div class="shadow-lg rounded-lg border bg-white px-8 py-4 border-l-8 border-yellow-400">
        <div>
            <Icon :name="icon" size="64" class="text-yellow-400 float-left mr-4 " />
            <p class="e-font__special">
                <slot></slot>
            </p>
            </div>
        </div>
</template>
