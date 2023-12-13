<template>
    <div class="full-width">
        <slot></slot>
    </div>
</template>

<style scoped>
.full-width {
    width: calc(90vw - 25px);
    transform: translateX(-5vw);
    overflow-x: auto;
    /* position: relative; */
    /* left:0; */
    /* left: 50vw; */
    /* transform: translateX(-50vw); */
    /* width: 90vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -45vw;
    margin-right: -55vw; */
}
</style>