<template>
    <div>
        <!-- <header class="bg-yellow-400 py-4 px-4" >
            <div class="container mx-auto flex justify-between items-center">
                <NuxtLink :to="localePath('/')">
                    <LogoEvidence class="fill-slate-700 h-10" />
                </NuxtLink>
                <UiNavMain />
            </div>
        </header> -->
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