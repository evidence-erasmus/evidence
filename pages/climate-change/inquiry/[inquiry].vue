<template>
    <div class="p-6 md:p-10">
        <Component :is="dynComp" :key="route.params.inquiry" />
        

        <!-- <template v-if="route.params.inquiry[1] === 'guided'">
            
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
        <template v-else-if="route.params.inquiry[1] === 'open'">
            <ModulesClimateChangeOpenInquiryEt 
                v-if="locale === 'et'" />
            <ModulesClimateChangeOpenInquiryEn 
                v-else-if="locale === 'en'" />
            <ModulesClimateChangeOpenInquiryEn 
                v-else />
        </template> -->
    </div>
</template>


<script setup>

    // import { ModulesClimateChangeInquiryOpen } from '#components'


    // const { locale } = useI18n({
    //     useScope: 'global'
    // });

    const route = useRoute();
    //console.log(route.query); 
    
    definePageMeta({
        layout: "content-left",
    });

    const dynCompName = computed (() => {
        const prm = route.params.inquiry;
        const name = `ModulesClimateChangeInquiry${prm.charAt(0).toUpperCase()+prm.slice(1)}`;
        return name;
    });

    
    const dynComp = ref();

    const resolveDynComp = () => {
        const prm = route.params.inquiry;
        switch (prm) {
            case "open": {
                dynComp.value = resolveComponent('ModulesClimateChangeInquiryOpen');
                break;
            }
            case "myth1": {
                dynComp.value = resolveComponent('ModulesClimateChangeInquiryMyth1');
                break;
            }
            case "myth2": {
                dynComp.value = resolveComponent('ModulesClimateChangeInquiryMyth2');
                break;
            }
            case "myth3": {
                dynComp.value = resolveComponent('ModulesClimateChangeInquiryMyth3');
                break;
            }
            case "myth4": {
                dynComp.value = resolveComponent('ModulesClimateChangeInquiryMyth4');
                break;
            }
            case "myth5": {
                dynComp.value = resolveComponent('ModulesClimateChangeInquiryMyth5');
                break;
            }
            case "myth6": {
                dynComp.value = resolveComponent('ModulesClimateChangeInquiryMyth6');
                break;
            }
            case "myth7": {
                dynComp.value = resolveComponent('ModulesClimateChangeInquiryMyth7');
                break;
            }
        }
    }

    resolveDynComp();

</script>