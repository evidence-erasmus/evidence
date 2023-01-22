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

    const {locale} = useI18n();
    const localePath = useLocalePath();

</script>
<template>
    <NuxtLink :to="localePath(props.path, locale)" class="no-underline flex flex-col items-center text-center text-slate-500">
        <div class="shadow-md rounded-md p-4">
            <Icon :name="props.icon" size="64" class="text-blue-500" />
            <h3 class="text-2xl font-bold no-underline leading-6 mt-4">{{props.title}}</h3>
            <p class="text-sm leading-tight">{{props.description}}</p>
        </div>
    </NuxtLink>
</template>
