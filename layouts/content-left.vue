<template>
    <div>
        <UiHeader />
        <div class="mt-28 md:pl-[3vw] lg:pl-[7vw]">
            <slot />
        </div>
        <UiLangSwitcher class="print:invisible" />
    </div>
</template>

