<template>
    <details class="w-full px-8 py-6 border bg-white shadow-md sticky top-[4rem] max-h-screen overflow-y-auto 
        md:block" :open="isOpen ? false : true">
        <summary class="-ml-4 text-md font-Body font-bold cursor-pointer" 
        @click="toggleOpen">
            <slot name="title"></slot>
            {{ isOpen }}
        </summary>
        <div class="mt-3">
            <slot name="content"></slot>
        </div>
    </details>
</template>
<script setup>
    const isOpen = useState('tocOpen');

    const toggleOpen = () => {
        isOpen.value = !isOpen.value;
        useState('tocOpen', () => isOpen.value);
    }
</script>
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