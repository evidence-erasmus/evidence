<template>
    <div class="full-width">
        <slot />
    </div>
</template>

<style scoped>
.full-width {
    /* position: relative;
    left: 50vw;
    transform: translateX(-50vw); */
    position: relative;
    /* width: 90vw; */
    left: 0;
    /* transform:translate(calc(-45vw - 25px)); */
    background: yellow;
}
</style>