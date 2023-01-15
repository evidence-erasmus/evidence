<template>
    <header class="shadow-lg sticky w-full top-0" style="z-index:5000" >
        <div class="flex items-center justify-between px-10 bg-yellow-400 shadow z-10 transition-all
            print:bg-white" 
            :class="smallHeader ? 'py-2' : 'py-4'">
            <NuxtLink :to="localePath('/')">
                <LogoEvidence class="fill-slate-700 transition-all" 
                :class="smallHeader ? 'h-6' : 'h-10'" />
            </NuxtLink>
            <UiNavMain class="print:hidden" />
        </div>
        <UiNavModule class="md:pl-[3vw] lg:pl-[7vw] print:hidden" />
        <!-- <div id="TOC"></div> -->
    </header>
</template>

<script setup>
    const localePath = useLocalePath();

    const smallHeader = ref(false);

    const updateScroll = () => {
        console.log(smallHeader.value);
        if(window.scrollY < 50){
            smallHeader.value = false;
        } else {
            smallHeader.value = true;
        }
    };
    
    onMounted(() => {
        window.addEventListener('scroll', updateScroll);
    });

</script>
