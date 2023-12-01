<script setup>
    
    import { useStudentEvolutionOpen } from '~~/store/useStudentEvolutionOpen.js'; 
    const studentEvolutionOpen = useStudentEvolutionOpen();
    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });
</script>


<template>

    <UiYourAnswersButton url="../answers/open" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">

        <section class="e-article print:not-prose" :lang="locale" style="hyphens:auto;">
            
            <UiButtonBack style="position:fixed; top:9rem; left:2rem; z-index:1000;" />

            <h1 class="mb-0">
                {{ t('inquiry.ev_open.title') }}
            </h1>
            <h5 class="font-normal uppercase leading-tight mb-10">
                {{ t('inquiry.ev_open.subtitle') }}
            </h5>
        

            <label for="q1" class="block mb-2">
                <b>{{ t('inquiry.ev_open.q1_title') }}</b>
            </label>
            
            <select id="q1" class="select select-bordered w-full max-w-sm block" v-model="studentEvolutionOpen.mythName">
                <option disabled selected>{{ t('inquiry.ev_open.choose') }}</option>
                <option v-for="myth in tm('inquiry.ev_open.myths')">{{ rt(myth) }}</option>
            </select>
            
            <hr />
            
            <h4>
                {{ t('inquiry.ev_open.expectations.title') }}
            </h4>
            <ul class="leading-tight">
                <li v-for="item in tm('inquiry.ev_open.expectations.items')">{{ rt(item) }}</li>
            </ul>
            
            <i18n-t keypath="inquiry.ev_open.q2.txt" tag="p" scope="global">
                <template #q2Link>
                    <a href='https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100' target='_blank' rel='noopener noreferrer'>{{ t('inquiry.ev_open.q2.link') }}</a>
                </template>
            </i18n-t>

            
            <label for="q2" class="block mb-2">
                <b>{{ t('inquiry.ev_open.q2.title') }}</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="4"
            v-model="studentEvolutionOpen.hypothesis"></textarea>

            <hr />

            <label for="q3" class="block mb-2 font-bold">
                {{t('inquiry.ev_open.plan.label_1')}}
            </label>
            <p>{{ t('inquiry.ev_open.plan.txt_1') }}</p>
            <textarea id="q3" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="studentEvolutionOpen.plan"></textarea>

            <hr />

            <p>
                <b>{{ t('inquiry.ev_open.reliability.label_1') }}</b>
            </p>
            <i18n-t tag="p" keypath="inquiry.reliability_table.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.reliability_table.url_1')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.reliability_table.link_1') }}</a>
                </template>
            </i18n-t>
            <div class="e-card">
                <ToolsReliabilityTable :storeToUpdate="studentEvolutionOpen" :addRow="true" currentSources="inquiry.ev_open.sources" key="ccOpenrlblty" />
            </div>
            
            <hr />
            
            <label for="q4" class="block mb-2">
                <b>4. Kogutud tõenditest lähtudes on meie järeldused järgmised:</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="studentEvolutionOpen.conclusions"></textarea>

            

        </section>
    </div>
</template>