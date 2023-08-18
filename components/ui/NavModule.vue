<template>
    <section class="bg-stone-50 shadow-md ">
        <nav class="h-10 container px-4 flex justify-start items-center gap-8">
            <a :href="`/${activeModule}`" class="flex items-center gap-2 uppercase font-bold transition-all"
            :class="activePart == 'teacher' ? 'border-b-4 border-b-slate-700 py-3' : ''">
                <span class="uppercase text-sm leading-none">{{ t('modules.for_teachers') }}</span>  
            </a>
            <NuxtLink :to="`/${activeModule}/student`" class="flex items-center gap-2 font-bold transition-all"
            :class="activePart == 'student' ? 'border-b-4 border-b-slate-700 py-3' : ''">
                <span class="uppercase text-sm leading-none">{{ t('modules.for_students') }}</span>
            </NuxtLink>
            <a :href="`/${activeModule}/background`" class="flex items-center gap-2 font-bold transition-all"
            :class="activePart == 'background' ? 'border-b-4 border-b-slate-700 py-3' : ''">
                <span class="uppercase text-sm leading-none">{{ t('modules.background_info') }}</span>  
            </a>
            
        </nav>
    </section>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { locale, t } = useI18n({ useScope: 'global' });
    const localePath = useLocalePath();
    // const localeRoute = useLocaleRoute();
    const route = useRoute();
    
    // console.log(route.matched);
    // console.log(localePath);
    // console.log(localeRoute.path);



    const activeModule = computed(() => {
        return `${route.path.split("/")[2]}`;
    });

    const activePart = computed(() => {
        if(route.name.includes('background')){
            return 'background';
        } else if(route.name.includes('student') || route.name.includes('inquiry')) {
            return 'student';
        } else {
            return 'teacher';
        }
    });
</script>