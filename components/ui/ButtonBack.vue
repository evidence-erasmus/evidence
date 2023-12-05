<template>
    <button @click="goBack()"
        class="btn btn-outline btn-neutral btn-sm leading-none bg-slate-50">
            <Icon name="material-symbols:arrow-back-rounded" /><span>{{t('ui.back')}}</span>
    </button>
</template>

<script setup>
    const {t} = useI18n();
    const router = useRouter();
    const goBack = () => {
        router.back();
    }
</script>