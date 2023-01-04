<template>
    <div>
        <header class="bg-yellow-400 py-4 px-4" >
            <div class="container mx-auto flex justify-between items-center">
                <NuxtLink :to="localePath('/')">
                    <LogoEvidence class="fill-slate-700 h-10" />
                </NuxtLink>
                <UiNavMain />
            </div>
        </header>
        <div class=" w-full">
            <slot />
        </div>
        <UiLangSwitcher />
    </div>
</template>

<script setup>
    const localePath = useLocalePath();
</script>

