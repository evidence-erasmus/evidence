<template>
    <nav class="px-8 py-6 border shadow-md">
        <h3 class="text-lg e-font__normal mb-3">Table of Contents</h3>
        <slot></slot>
    </nav>
</template>

<style scoped>
    /* :slotted(li) { */
        /* list-style-type: disc; */
    /* } */
    :slotted(ol){
        list-style-type: decimal;
    }
    :slotted(li::marker) {
        color: gray;
        /* content: "⁕ "; */
    }
    :slotted(a) {
        /* text-decoration:underline; */
        /* text-decoration-skip-ink: all; */
    }
</style>