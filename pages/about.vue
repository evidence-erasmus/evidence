<template>
    <div>
        <h1>{{$t('about.title')}}</h1>

        <p>{{$t('about.01')}}</p>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({ useScope: 'global' });
    definePageMeta({
        layout: "content",
    });

    // defineI18nRoute({
    //     paths: {
    //         en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
    //         fr: '/a-propos', // -> accessible at /fr/a-propos
    //         es: '/sobre'     // -> accessible at /es/sobre
    //     }
    // })

</script>