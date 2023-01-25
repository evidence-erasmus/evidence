<script setup>
    defineProps({
        video: {
            type: String
        },
        lang: {
            type: String,
            default: 'en'
        }
    });

    const { locale } = useI18n({
        useScope: 'global'
    })
</script>

<template>
    <div class="relative h-0 overflow-hidden pb-[56.25%]">
        <iframe 
            class="absolute left-0 top-0 h-full w-full "
            width="560" height="315" 
            :src="`//youtube.com/embed/${video}?cc_lang_pref=${locale}&cc_load_policy=1`" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<style scoped>
.video-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
.video-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}
</style>