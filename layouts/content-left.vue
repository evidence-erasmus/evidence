<template>
    <div>
        
        <UiHeader />
        <!-- <UiNavModule class="md:pl-[3vw] lg:pl-[7vw] print:hidden" /> -->
        <div class="mt-28 md:pl-[3vw] lg:pl-[7vw]">
            <slot />
        </div>
        <UiLangSwitcher class="fixed right-0 bottom-10 print:invisible" />
    </div>
</template>

