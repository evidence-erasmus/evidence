<template>
    <nav class="hidden px-8 py-6 border bg-white shadow-md sticky top-[7rem] max-h-screen overflow-y-auto 
        md:block">
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