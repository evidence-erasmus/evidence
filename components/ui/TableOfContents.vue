<template>
    <div class="w-full py-6 border shadow sticky top-[5rem] max-h-[100dvh] overflow-y-auto bg-yellow-50 z-10
        md:block" >
        <div class="flex items-center justify-between px-4 text-md font-Body font-bold cursor-pointer" @click="userPrefs.toggleToC()">
            <span>{{ t('modules.toc') }}</span><Icon name="tabler:chevron-down" size="24" class="transition-all duration-300" :class="userPrefs.tocOpen ? '-scale-y-100' : 'scale-y-100'" />
        </div>
        <div class="mt-3" :class="userPrefs.tocOpen ? 'block' : 'hidden'">
            <ol class="transition-all">
                <li v-for="link in tocH2" :key="`${route.name}-${link.id}`"
                    :id="`toc-${link.id}`" 
                    @click="onTocClick(link.id)"
                    class="leading-tight my-0 cursor-pointer p-2 border-l-[0.5rem] transition"
                    :class="activeTocId===link.id ? 'border-l-blue-400' : 'border-l-yellow-50'">{{ link.textContent }}</li>
            </ol>
        </div>
    </div>
</template>

<script setup>
    import { useUserPreferences } from '~~/store/useUserPreferences.js';
    const userPrefs = useUserPreferences();
    
    const {t} = useI18n();
    
    const router = useRouter();
    const route = useRoute();

    const onTocClick = (id) => {
        const el = document.getElementById(id)
        if (el) {
            router.push({ hash: `#${id}` })
            el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }
    
    const tocH2 = ref(null)
    const activeTocId = ref(null);
    const observer = ref(null);
    const observerOptions = reactive({
        // root: document.querySelector('.e-article'),
        rootMargin: "100px 0px -100px 0px",
        threshold: 0.5
    });

    // watchDebounced(
    //     () => activeTocId.value,
    //     (newActiveTocId) => {
    //         const h2Link = tocLinksH2.value.find((el) => el.id === `toc-${newActiveTocId}`)
    //         //h2Link.style.cssText += 'font-weight:bold';
    //     },
    //     { debounce: 200, immediate: true }
    // )

    onMounted(() => {
            observer.value = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute('id')
                    if (entry.isIntersecting) {
                        // console.log(id);
                        activeTocId.value = id
                    }
                })
            }, observerOptions)
            tocH2.value = document.querySelectorAll('.e-article h2[id]');
            tocH2.value.forEach((section) => {
                section.style.cssText += 'scroll-margin:10rem;';
                observer.value?.observe(section)
            }
        );
    })

    onBeforeUnmount(() => {
        tocH2.value = null
        observer.value?.disconnect()
        observer.value = null;
    })
</script>

<!-- <style scoped>
    /* :slotted(li) {
        line-height: 1.1;
        margin-bottom: 0.75rem;
    }
    :slotted(ol){
        list-style-type: decimal;
    }
    :slotted(li::marker) {
        color: gray;
    } */

    li {
        line-height: 1.1;
        margin-bottom: 0.75rem;
    }
    ol{
        list-style-type: decimal;
    }
    li::marker {
        color: gray;
    }
</style> -->