<template>
    <div class="e-card mb-8 md:fixed md:right-4 md:top-24 md:w-60 print:hidden">
        <p class="italic mt-2">{{ t('print.hint') }}</p>
            <button @click="printMe" class="my-4 px-4 py-2 flex items-center gap-2 bg-blue-500 text-lg rounded text-white uppercase"><icon name="material-symbols:print-outline-rounded" /> {{ t('print.print') }}</button>
        </div>
</template>

<script setup>
    const {t} = useI18n();
    const printMe = () => {
        window.print();
    }
</script>