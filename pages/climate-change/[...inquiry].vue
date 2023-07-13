<template>
    <div class="p-6 md:p-10">
<!-- guided -->
        <template v-if="route.params.inquiry[1] === 'guided'">
            <!-- estonian -->
            <template v-if="locale === 'et'">
                <ModulesClimateChangeGuidedInquiryMyth1Et 
                    v-if="route.params.inquiry[2] === 'myth-1'" />
                <ModulesClimateChangeGuidedInquiryMyth2Et 
                    v-else-if="route.params.inquiry[2] === 'myth-2'" />
            </template>
            <template v-else-if="locale === 'en'">
                <ModulesClimateChangeGuidedInquiryMyth1En 
                    v-if="route.params.inquiry[2] === 'myth-1'" />
            </template>
            <template v-else>
                <ModulesClimateChangeGuidedInquiryMyth1En 
                    v-if="route.params.inquiry[2] === 'myth-1'" />
            </template>
        </template>
<!-- open -->
        <template v-else-if="route.params.inquiry[1] === 'open'">
            <ModulesClimateChangeOpenInquiryEt 
                v-if="locale === 'et'" />
            <ModulesClimateChangeOpenInquiryEn 
                v-else-if="locale === 'en'" />
            <ModulesClimateChangeOpenInquiryEn 
                v-else />
        </template>
    </div>
</template>


<script setup>
    const { locale } = useI18n({
        useScope: 'global'
    });
    const route = useRoute();
    console.log(route.params); 

    
    definePageMeta({
        layout: "content-left",
    });

</script>