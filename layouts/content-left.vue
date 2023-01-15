<template>
    <div>
        <!-- <header class="bg-yellow-400 py-4 px-4 print:bg-white" >
            <div class="container mx-auto flex items-center justify-between">
                <NuxtLink :to="localePath('/')">
                    <LogoEvidence class="fill-slate-700 h-10" />
                </NuxtLink>
                <UiNavMain class="print:invisible" />
            </div>
        </header> -->
        <UiHeader />
        <div class="md:pl-[3vw] lg:pl-[7vw]">
            <slot />
        </div>
        <UiLangSwitcher class="print:invisible" />
    </div>
</template>

