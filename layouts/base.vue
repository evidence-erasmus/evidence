<template>
    <div>
        <header class="shadow-lg w-full" >
            <div class="flex items-center justify-between px-10 py-4 bg-yellow-400 shadow
                print:bg-white">
                <LogoEvidence class="fill-slate-700 transition-all h-10" />
            </div>
        </header>
        <div class="mx-auto mt-10">
            <slot />
        </div>
        <UiFooterEu />
        <!-- <UiLangSwitcher class="fixed right-0 bottom-10 print:invisible" /> -->
    </div>
</template>
