<template>
    <div class="e-card my-8 md:my-0 md:fixed md:right-4 md:top-24 md:w-60 print:hidden">
        <p class="italic mt-0 p-0">{{ t('print.hint') }}</p>
        <button @click="printMe" class="mt-4 btn btn-rounded btn-secondary text-white uppercase no-underline"><icon name="material-symbols:print-outline-rounded" /> {{ t('print.print') }}</button>
    </div>
</template>

<script setup>
    const {t} = useI18n();
    const printMe = () => {
        window.print();
    }
</script>