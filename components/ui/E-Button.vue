<template>
        <button type="button" style="text-underline-offset:0.2em"
        :class="bStyles[props.bStyle]" 
        >
            <slot />
        </button>
</template>

<script setup>
    const props = defineProps({
        bStyle : {
            type: String,
            default: "fill"
        }
    });

    const bStyles = computed(() => {
        const classes =  {
            fill : `border-0 bg-slate-900 text-yellow-300`,
            outline : `bg-transparent border-[0.15em] border-current`,
            link : "bg-transparent underline"
        }
        return classes;
    });

    // const bColors = computed(() => {
    //     let colClass;
    //     if(props.bStyle === 'outline'){
    //         colClass = `!border-${props.bColor}`;
    //     } else if (props.bStyle === 'fill') {
    //         colClass = `!bg-${props.bColor}`;
    //     }
    //     return colClass;
    // });
</script>