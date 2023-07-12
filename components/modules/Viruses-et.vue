<script setup>
    const { locale } = useI18n({ useScope: 'global' });
</script>
<template>
    <div>
        <h1>Viirused eesti keeles</h1>

        <h2>Testvideo</h2>
        <p>Kas tulevad eesti subtiitrid?</p>
        
        <UiYoutube video="t4v-36h2noo" /> 

        <a href="/et/tools/peerfeedback" target="_blank">Edasi</a>
    </div>
</template>