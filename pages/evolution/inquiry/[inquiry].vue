<template>
    <div class="p-6 md:p-10">
        <Component :is="dynComp" :key="route.params.inquiry" />
    </div>
</template>

<script setup>

    const route = useRoute();
    
    definePageMeta({
        layout: "content-left",
    });

    // const dynCompName = computed (() => {
    //     const prm = route.params.inquiry;
    //     const name = `ModulesClimateChangeInquiry${prm.charAt(0).toUpperCase()+prm.slice(1)}`;
    //     return name;
    // });

    const dynComp = shallowRef();

    const resolveDynComp = () => {
        const prm = route.params.inquiry;
        switch (prm) {
            case "open": {
                dynComp.value = resolveComponent('ModulesEvolutionInquiryOpen');
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