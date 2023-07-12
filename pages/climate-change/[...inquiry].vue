<template>
    <div class="p-6 md:p-10">
<!-- guided -->
        <template v-if="route.params.inquiry[1] === 'guided'">
            <!-- estonian -->
            <template v-if="locale === 'et'">
                <ModulesClimateChangeGuidedinquiryMyth1Et 
                    v-if="route.params.inquiry[2] === 'myth-1'" />
                <ModulesClimateChangeGuidedinquiryMyth2Et 
                    v-else-if="route.params.inquiry[2] === 'myth-2'" />
            </template>
            <template v-else-if="locale === 'en'">
                <ModulesClimateChangeGuidedinquiryMyth1En 
                    v-if="route.params.inquiry[2] === 'myth-1'" />
            </template>
            <template v-else>
                <ModulesClimateChangeGuidedinquiryMyth1En 
                    v-if="route.params.inquiry[2] === 'myth-1'" />
            </template>
        </template>
<!-- open -->
        <template v-else-if="route.params.inquiry[1] === 'open'">
            <ModulesClimateChangeOpeninquiryEt 
                v-if="locale === 'et'" />
            <ModulesClimateChangeOpeninquiryEn 
                v-else-if="locale === 'en'" />
            <ModulesClimateChangeOpeninquiryEn 
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