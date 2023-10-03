<template>
    <div>
        <UiHeader />
        <div class="e-article container mx-auto mt-28 ">
            <slot />
        </div>
        <!-- <UiLangSwitcher class="fixed right-0 bottom-10 print:invisible" /> -->
    </div>
</template>

<script setup>
    const localePath = useLocalePath();
</script>