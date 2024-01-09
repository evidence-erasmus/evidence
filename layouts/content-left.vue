<template>
    <div>
        <Html :class="overflow ? 'overflow-hidden' : 'overflow-auto'" />
        <UiHeader :navModule="true" />
        
        <!-- <UiNavModule class="md:pl-[3vw] lg:pl-[7vw] print:hidden" /> -->
        <div class="mt-28">
            <slot />
        </div>
        <UiFooterEu />
        <div id="theEnd"></div>
    </div>
</template>

<script setup>
    import { useUserPreferences } from '~~/store/useUserPreferences';
    const userPrefs = useUserPreferences();

    const overflow = computed(() => {
        if(userPrefs.modalOpen === true) {
            return true;
        } else {
            return false;
        }
    });
</script>