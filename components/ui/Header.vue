<template>
    <header class="shadow fixed w-full top-0" style="z-index:5000">
        <div 
        class="flex flex-wrap items-center justify-end gap-4 px-4 bg-yellow-400 shadow z-10 transition-all
        md:px-8 md:gap-14
        print:bg-white" 
        :class="smallHeader ? 'py-1' : 'py-4'">
            <NuxtLink :to="localePath('/')" class="mr-auto">
                <LogoEvidence class="fill-slate-800 h-12 transition-all" 
                 :small="smallHeader" />
            </NuxtLink>
            
            <UiLangDropdown class="order-2" />
            
            <button class="order-3 md:hidden" @click="showNav = !showNav">
                <Icon name="mdi:menu" size="32"  />
            </button>
            
            <UiNavMain class="order-4 mb-3 w-full md:w-auto md:order-1 md:mb-0  print:hidden" 
            :class="showNav === true ? 'block' : 'hidden md:block'"
            />
        </div>

        <UiNavModule v-if="navModule" class="md:pl-[3vw] lg:pl-[7vw] print:hidden" />
    </header>
</template>

<script setup>
    const localePath = useLocalePath();
    const props = defineProps({
        navModule: {
            type: Boolean,
            default: false
        }
    });

    const showNav = ref(false);

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
