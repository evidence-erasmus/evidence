<template>
    <section class="bg-yellow-300 shadow-md ">
        <nav class="h-10 container flex justify-start items-center gap-8">
            <NuxtLink :to="localePath('/viruses')" class="flex items-center gap-2 font-bold">
                <!-- <Icon name="material-symbols:info-outline" class="text-xl leading-0" /> -->
                <span class="uppercase text-sm leading-none">{{ t('modules.background-info') }}</span>  
            </NuxtLink>
            <NuxtLink to="/viruses/teacher" class="flex items-center gap-2 uppercase font-bold">
                <!-- <Icon name="material-symbols:spatial-audio-off-outline" class="text-xl leading-0" /> -->
                <span class="uppercase text-sm leading-none">{{ t('modules.for-teachers') }}</span>  
            </NuxtLink>
            <NuxtLink :to="localePath('/viruses/student')" class="flex items-center gap-2 font-bold">
                <!-- <Icon name="material-symbols:spatial-tracking-outline" class="text-xl -scale-x-100" /> -->
                <span class="uppercase text-sm leading-0">{{ t('modules.for-students') }}</span>
            </NuxtLink>
        </nav>
    </section>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({ useScope: 'global' });
    const localePath = useLocalePath();
</script>