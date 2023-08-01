<script setup>
    
    import { useStudentClimateOpen } from '~~/store/useStudentClimateOpen.js'; 
    const studentClimateOpen = useStudentClimateOpen();
    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });
    const router = useRouter();

    const goBack = () => {
        router.back();
    }

</script>


<template>
    
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" />
        <nuxt-link href="../../answers-climate-change-open" target="_blank" class="text-lg font-bold uppercase">Sinu vastused</nuxt-link>
    </section>
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">

        <section class="e-article print:not-prose" :lang="locale" style="hyphens:auto;">
            

            <button @click="goBack" 
                style="transform: translateY(-4rem); position:absolute;">
                <span class="btn btn-outline btn-neutral btn-sm leading-none">
                    <Icon name="material-symbols:arrow-back-rounded" /><span>{{t('ui.back')}}</span>
                </span>
            </button>


            <h1 class="mb-0">{{ t('inquiry.cc_open.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight mb-10">{{ t('inquiry.cc_open.subtitle') }}</h5>
        

            <label for="q1" class="block mb-2">
                <b>{{ t('inquiry.cc_open.q1_title') }}</b>
            </label>
            
            <select id="q1" class="select select-bordered w-full max-w-sm block" v-model="studentClimateOpen.mythName">
                <option disabled selected>{{ t('inquiry.cc_open.choose') }}</option>
                <option v-for="myth in tm('inquiry.cc_open.myths')">{{ rt(myth) }}</option>
            </select>
            <hr />

            <i18n-t keypath="inquiry.cc_open.q2_txt" tag="p" scope="global">
                <template #q2Link>
                    <a href='https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method.' target='_blank' rel='noopener noreferrer'>{{ t('inquiry.cc_open.q2_link') }}</a>
                </template>
            </i18n-t>

            
            <label for="q2" class="block mb-2">
                <b>{{ t('inquiry.cc_open.q2_title') }}</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="4"
            v-model="studentClimateOpen.q2"></textarea>
            <hr />

            <label for="q3" class="block mb-2 font-bold">
                {{t('inquiry.cc_open.plan.label_1')}}
            </label>
            <p>{{ t('inquiry.cc_open.plan.txt_1') }}</p>
            <textarea id="q3" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="studentClimateOpen.q3"></textarea>
            <hr />



            

            <p>
                <b>{{ t('inquiry.cc_open.reliability.label_1') }}</b>
            </p>


            <i18n-t tag="p" keypath="inquiry.reliability_table.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.reliability_table.url_1')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.reliability_table.link_1') }}</a>
                </template>
            </i18n-t>


            <div class="e-card w-[90vw]" style="transform: translateX(-5vw);">
                <ToolsReliabilityTable :storeToUpdate="studentClimateOpen" :addRow="true" currentSources="inquiry.cc_open.sources" key="ccOpenrlblty" />
            </div>
            
            <hr />
            


            <label for="q4" class="block mb-2">
                <b>4. Kogutud tõenditest lähtudes on meie järeldused järgmised:</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="studentClimateOpen.q4"></textarea>
            <hr />


            <p>
                <b>5. Tuginedes kogutud andmetele, milliseid teaduse eitamise taktikaid tuvastasite loetud tekstides?</b>
            </p>

            <div class="e-card w-[90vw]" style="transform:translateX(-5vw)">
                <ToolsFliccTable :storeToUpdate="studentClimateOpen" />
            </div>


        </section>
    </div>
</template>