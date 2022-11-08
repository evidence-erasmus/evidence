<template>
    <div>
        <h1>About us page</h1>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "content",
    });
    defineI18nRoute({
        paths: {
            en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
            fr: '/a-propos', // -> accessible at /fr/a-propos
            es: '/sobre'     // -> accessible at /es/sobre
        }
    })

</script>