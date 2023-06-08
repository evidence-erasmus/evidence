<template>
    <div class="p-6 md:p-10">
<!-- guided -->
        <template v-if="route.params.inquery[1] === 'guided'">
            <!-- estonian -->
            <template v-if="locale === 'et'">
                <ModulesClimateChangeGuidedInqueryMyth1Et 
                    v-if="route.params.inquery[2] === 'myth-1'" />
            </template>
            <template v-else-if="locale === 'en'">
                <ModulesClimateChangeGuidedInqueryMyth1En 
                    v-if="route.params.inquery[2] === 'myth-1'" />
            </template>
            <template v-else>
                <ModulesClimateChangeGuidedInqueryMyth1En 
                    v-if="route.params.inquery[2] === 'myth-1'" />
            </template>
        </template>
<!-- open -->
        <template v-else-if="route.params.inquery[1] === 'open'">
            <ModulesClimateChangeOpenInqueryEt 
                v-if="locale === 'et'" />
            <ModulesClimateChangeOpenInqueryEn 
                v-else-if="locale === 'en'" />
            <ModulesClimateChangeOpenInqueryEn 
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