<script setup>
    const props = defineProps({
        title : {
            type: String,
            default: "Module Name Here"
        },
        description : {
            type: String,
            default: "This is a description for this Module. A sentence or so."
        },
        icon : {
            type: String,
            default: ""
        },
        path: {
                type: String,
                default: "material-symbols:coronavirus-outline-sharp"
            }
    });
</script>
<template>
    <div class="shadow-md rounded-md p-4">
        <NuxtLink :to="props.path" class="no-underline flex flex-col items-center text-center">
            <!-- <img :src="props.img" /> -->
            <Icon :name="props.icon" size="64" class="text-blue-500" />
            <h3 class="text-2xl font-bold no-underline leading-6 mt-4">{{props.title}}</h3>
            <p class="text-md leading-6">{{props.description}}</p>
        </NuxtLink>
    </div>
</template>
