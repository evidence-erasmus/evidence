<template>
    <div :lang="locale" 
        class="flex flex-col justify-start items-center relative
        border-4
        text-center
        rounded-lg shadow-md break-inside-avoid break-word
        print:shadow-none" 
        :class="props.border"
        style="hyphens:auto;"
    >
        <div v-if="props.image" 
            :style="`background:url(https://evidence.onkel.ee/assets/cards/${props.image}); background-size:cover; background-position:50% 50%;`" 
            class="h-[42mm] mb-0 w-full" >
        </div>
        <div v-else class="h-[14mm]"></div>

        <h3 v-if="props.title" 
        class="bg-white text-center text-[13pt] leading-none mt-0 mb-0 px-[2mm] py-[0.5mm] rounded-t"
        style="transform:translateY(-5mm)">
            {{ props.title }}
        </h3>

        <!-- <p 
        class="text-[9pt] m-0 leading-tight text-justify 
        px-[4mm] pb-[4mm] pt-[2mm]
        print:font-sans" 
        style="hyphens:auto; hyphenate-limit-chars: 5 2 2;">
            {{ props.story }}
        </p> -->

        <slot />
        
        <div v-if="props.label" 
        class="absolute top-0 left-[3mm] text-[8pt] bg-white px-1 rounded-b shadow">
            {{ props.label }}
        </div>
    </div>
</template>


<script setup>
    const props = defineProps({
        // size: {
        //     type: String,
        //     default: "MD" // SM, MD, LG
        // },
        image: {
            type: String,
            default: undefined
        },
        title: {
            type: String,
            default: undefined
        },
        story: {
            type: String,
            default: "..."
        },
        border: {
            type: String,
            default:"border-sky-400"
        },
        label: {
            type:String,
            default: undefined
        }
    });

    const { locale } = useI18n();
</script>