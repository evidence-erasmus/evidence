<template>
    <nav class="px-8 py-6 border shadow-md sticky top-0 max-h-screen overflow-y-auto">
        <slot></slot>
    </nav>
</template>

<style scoped>
    :slotted(li) {
        line-height: 1.1;
        margin-bottom: 0.75rem;
    }
    :slotted(ol){
        list-style-type: decimal;
    }
    :slotted(li::marker) {
        color: gray;
        /* content: "⁕ "; */
    }
</style>