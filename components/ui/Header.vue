<template>
    <header class="shadow fixed w-full top-0" style="z-index:5000">
        <div class="flex items-center justify-end gap-4 md:gap-14 px-4 bg-yellow-400 shadow z-10 transition-all
            md:px-8
            print:bg-white" 
            :class="smallHeader ? 'py-1' : 'py-4'">
            <NuxtLink :to="localePath('/')" class="mr-auto">
                <LogoEvidence class="fill-slate-800 h-12 transition-all" 
                 :small="smallHeader" />
            </NuxtLink>
            <UiNavMain class="print:hidden" />
            <UiLangDropdown />
    
        </div>

        <UiNavModule v-if="localePath" class="md:pl-[3vw] lg:pl-[7vw] print:hidden" />
    </header>
</template>

<script setup>
    const localePath = useLocalePath();

    const smallHeader = ref(false);

    const updateScroll = () => {
        //console.log(smallHeader.value);
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
