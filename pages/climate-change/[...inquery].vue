<template>
    <div class="p-6 md:p-10">
        
        <ModulesClimateChangeOpenInqueryEt 
            v-if="route.params.inquery[1] === 'open' && locale === 'et'" />
        <ModulesClimateChangeOpenInqueryEt 
            v-else-if="route.params.inquery[1] === 'open' && locale === 'en'" />
        
    </div>
</template>


<script setup>
    // const { t } = useI18n({ useScope: 'local' });
    const { locale } = useI18n({
        useScope: 'global'
    });
    const route = useRoute();
    console.log(route.params); 

    
    definePageMeta({
        layout: "base",
    });

</script>