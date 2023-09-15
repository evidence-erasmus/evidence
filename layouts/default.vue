<template>
    <div class="relative">
        <UiLangDropdown class="absolute right-10 top-10" />
            
        <UiHero />
        <slot />
        <!-- <UiLangSwitcher class="fixed right-0 bottom-10 print:invisible" /> -->
    </div>
</template>
<script>
    // import { useI18n } from 'vue-i18n';
    // const { t } = useI18n({ useScope: 'global' });
    // const localePath = useLocalePath();
</script>
