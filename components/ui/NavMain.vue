<template>
    <nav class="flex justify-end md:flex-row md:gap-2">
        <NuxtLink :to="localePath( 'about', locale ) " class="px-2 md:py-1 uppercase">{{t('menu.about')}}</NuxtLink>
        <NuxtLink :to="localePath( 'modules', locale )" class="px-2 md:py-1 uppercase"
        :class="isActiveClass"
        >{{t('menu.modules')}}</NuxtLink>
        <NuxtLink :to="localePath( 'book', locale ) " class="px-2 md:py-1 uppercase">{{t('menu.book')}}</NuxtLink>
    </nav>

</template>

<script setup>
    const { locale, t } = useI18n({
        useScope: 'global'
    });
    const localePath = useLocalePath()
    const route = useRoute();

    
    const isActiveClass = computed(() => {
        if(
            route.name.includes('viruses') || 
            route.name.includes('climate-change') ||
            route.name.includes('radiation') ||
            route.name.includes('drugs') ||
            route.name.includes('space') ||
            route.name.includes('evolution')
             ){
            return 'router-link-active router-link-exact-active'
        }
    });

    
</script>



<style scoped>
    a.router-link-active {
        font-weight: 700;
        text-decoration: underline;
        text-underline-offset: 0.5ch;
        /* border-bottom:1px solid black !important; */
    }
</style>