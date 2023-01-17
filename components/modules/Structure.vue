<template>
    <section class="e-card">
        <h6 class="font-Body mb-2 text-xs text-center leading-none md:text-sm">
            <slot name="title"></slot>
        </h6>
        <div class="flex gap-1 items-center justify-center text-2xl 
                md:text-4xl md:gap-2 lg:text-5xl"
            >
            <slot name="icons"></slot>
        </div>
    </section>
</template>