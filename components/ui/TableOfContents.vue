<template>
    <div class="w-full px-8 py-6 border bg-white shadow sticky top-[4rem] max-h-screen max-h-[100dvh] overflow-y-auto 
        md:block" >
        <div class="flex items-center justify-between  text-md font-Body font-bold cursor-pointer" @click="toggleOpen">
            <slot name="title"></slot><Icon name="tabler:chevron-down" size="24" class="transition-all duration-300" :class="isOpen ? '-scale-y-100' : 'scale-y-100'" />
        </div>
        <div class="mt-3" :class="isOpen ? 'block' : 'hidden'">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script setup>
    const isOpen = tocOpen();
    const toggleOpen = () => {
        isOpen.value = !isOpen.value;
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