<script setup>
    const props = defineProps({
        title : {
            type: String,
            default: "Module Name Here"
        },
        // description : {
        //     type: String,
        //     default: "This is a description for this Module. A sentence or so."
        // },
        icon : {
            type: String,
            default: "material-symbols:coronavirus-outline-sharp"
        },
        path: {
            type: String,
            default: ""
        }
    });

    const {locale} = useI18n({useScope:'global'});
    const localePath = useLocalePath();

</script>
<template>
    <NuxtLink :to="localePath(props.path, locale)" class="no-underline flex  items-center text-center text-slate-500">
        <div class="h-full flex items-center flex-col justify-center 
        shadow-md rounded-md px-2 py-6 w-full border border-slate-100 transition-all 
        hover:bg-yellow-50">
            <Icon :name="props.icon" size="64" class="text-blue-500" />
            <h3 class="text-3xl font-bold no-underline leading-6 mt-4 mb-3">{{props.title}}</h3>
            <!-- <p class="text-sm leading-tight my-0">{{props.description}}</p> -->
        </div>
    </NuxtLink>
</template>
