<script setup>
    
    import { useStudentClimateOpen } from '~~/store/useStudentClimateOpen.js'; 
    const studentClimateOpen = useStudentClimateOpen();
    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });
</script>


<template>
    
    <UiYourAnswersButton url="../../answers/open" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">

        <section class="e-article print:not-prose" :lang="locale" style="hyphens:auto;">
            
            <UiButtonBack style="position:fixed; top:9rem; left:2rem; z-index:1000;" />


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
                <b>4. {{ t('inquiry.reliability_table.label_1') }}</b>
            </p>
            <i18n-t tag="p" keypath="inquiry.reliability_table.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.reliability_table.url_1')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.reliability_table.link_1') }}</a>
                </template>
            </i18n-t>


            <div class="e-card">
                <ToolsReliabilityTable :storeToUpdate="studentClimateOpen" :addRow="true" key="ccOpenrlblty" />
            </div>
            <hr />
            


            <label for="q4" class="block mb-2">
                <b>{{ t('inquiry.cc_open.q4_title') }}</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="studentClimateOpen.q4"></textarea>
            <hr />


            <p>
                <b>{{ t('inquiry.cc_open.q5_title') }}</b>
            </p>

            <div class="e-card w-[90vw]" style="transform:translateX(-5vw)">
                <ToolsFliccTable :storeToUpdate="studentClimateOpen" />
            </div>


        </section>
    </div>
</template>