<template>
        <button type="button" style="padding:0.3em 0.75em; border-radius:0.3em; text-underline-offset:0.2em"
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
            fill : `border-0`,
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