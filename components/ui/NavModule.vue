<template>
    <section class="bg-stone-50 shadow-md ">
        <nav class="h-10 container px-4 flex justify-start items-center gap-8">
            <NuxtLink :to="localePath(`/${modules[locale].path}`)" class="flex items-center gap-2 uppercase font-bold transition-all"
            :class="activePart == 'teacher' ? 'border-b-4 border-b-slate-700 py-3' : ''">
                <span class="uppercase text-sm leading-none">{{ t('modules.for-teachers') }}</span>  
            </NuxtLink>
            <NuxtLink :to="localePath(`/${modules[locale].path}/${modules[locale].student}`)" class="flex items-center gap-2 font-bold transition-all"
            :class="activePart == 'student' ? 'border-b-4 border-b-slate-700 py-3' : ''">
                <span class="uppercase text-sm leading-none">{{ t('modules.for-students') }}</span>
            </NuxtLink>
            <NuxtLink :to="localePath(`/${modules[locale].path}/${modules[locale].info}`)" class="flex items-center gap-2 font-bold transition-all"
            :class="activePart == 'background' ? 'border-b-4 border-b-slate-700 py-3' : ''">
                <span class="uppercase text-sm leading-none">{{ t('modules.background-info') }}</span>  
            </NuxtLink>
            
            
        </nav>
    </section>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { locale, t } = useI18n({ useScope: 'global' });
    const localePath = useLocalePath();
    // const localeRoute = useLocaleRoute();
    const route = useRoute();

    // console.log(localeRoute.path);

    const modules = ref(
        {
            en: {
                path: 'climate-change',
                student: 'student',
                info: 'background'
            },
            et: {
                path: 'kliimamuutused',
                student: 'opilane',
                info: 'taustainfo'
            }
        }
    );

    // const activeModule = computed(() => {
    //     return `${route.path.split("/")[1]}/${route.path.split("/")[2]}`;
    // });
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