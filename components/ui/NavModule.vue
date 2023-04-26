<template>
    <section class="bg-stone-50 shadow-md ">
        <nav class="h-10 container px-4 flex justify-start items-center gap-8">
            <NuxtLink to="/viruses" class="flex items-center gap-2 uppercase font-bold transition-all"
            :class="activePart == 'teacher' ? 'border-b-4 border-b-slate-700 py-3' : ''">
                <!-- <Icon name="material-symbols:spatial-audio-off-outline" class="text-xl leading-0" /> -->
                <span class="uppercase text-sm leading-none">{{ t('modules.for-teachers') }}</span>  
            </NuxtLink>
            <NuxtLink :to="localePath('/viruses/student')" class="flex items-center gap-2 font-bold transition-all"
            :class="activePart == 'student' ? 'border-b-4 border-b-slate-700 py-3' : ''">
                <!-- <Icon name="material-symbols:spatial-tracking-outline" class="text-xl -scale-x-100" /> -->
                <span class="uppercase text-sm leading-none">{{ t('modules.for-students') }}</span>
            </NuxtLink>
            <NuxtLink :to="localePath('/viruses/background')" class="flex items-center gap-2 font-bold transition-all"
            :class="activePart == 'background' ? 'border-b-4 border-b-slate-700 py-3' : ''">
                <!-- <Icon name="material-symbols:info-outline" class="text-xl leading-0" /> -->
                <span class="uppercase text-sm leading-none">{{ t('modules.background-info') }}</span>  
            </NuxtLink>
        </nav>
    </section>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({ useScope: 'global' });
    const localePath = useLocalePath();
    const route = useRoute();
    const activePart = computed(() => {
        if(route.path.includes('background')){
            return 'background';
        } else if(route.path.includes('student')) {
            return 'student';
        } else {
            return 'teacher';
        }
    });
</script>