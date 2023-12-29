<template>
    <div>
        <Html :class="overflow ? 'overflow-hidden' : 'overflow-auto'" />
        <UiHeader :navModule="false" />

        <!-- <UiHeader /> -->
        <div class="e-article container mx-auto mt-28 ">
            <slot />
        </div>

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