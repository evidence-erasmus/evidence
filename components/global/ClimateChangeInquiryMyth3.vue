<script setup>
    import { useStudentClimateGuidedMyth3 } from '~~/store/useStudentClimateGuidedMyth3.js'; 
    const climateMyth3Answers = useStudentClimateGuidedMyth3();

    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });

    const addSources = (arr) => {
        arr.forEach((el, index) => {
            climateMyth3Answers.changeFliccValue(index, 0, el.name.body.static);
            // console.log(el.name.body.static);
            climateMyth3Answers.changeReliabilityValue(index, 1, el.name.body.static);
            // climateMythTwoAnswers.changeReliabilityValue(3, 0, "Rullu");
        })
    }
    addSources(tm('inquiry.cc_myth3.flicc_sources'));

</script>





<template>
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="../../answers-climate-change-guided-myth1/" target="_blank" class="text-lg font-bold uppercase">Sinu vastused</nuxt-link>
    </section>
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
            
            <NuxtLink to="../student#section-4" 
                style="transform: translateY(-4rem); position:absolute;">
                <span class="btn btn-outline btn-neutral btn-sm leading-none">
                    <Icon name="material-symbols:arrow-back-rounded" /><span>{{t('inquiry.cc-myth2.back')}}</span>
                </span>
            </NuxtLink>

            <h1 class="mb-0">{{ t('inquiry.cc_myth3.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight">{{ t('inquiry.cc_myth3.subtitle') }}</h5>
        
            <h2 class="border-l-8 border-l-rose-400 pl-4">
                {{ t('inquiry.cc_myth3.myth') }}
            </h2>

            <label for="hypothesis" class="block mb-2">
                <b>{{ t('inquiry.cc_myth3.hypothesis') }}</b>
            </label>
            <textarea id="hypothesis" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.hypothesis"></textarea>
            
            
            <p>{{ t('inquiry.cc_myth3.argument.txt_1') }}</p>

            <UiCardInfo theme="rose-400" icon="game-icons:unicorn">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth3.argument.argument') }}
                </h4>
            </UiCardInfo>

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth3.question') }}
                </h4>
            </UiCardInfo>

            



            <i18n-t tag="p" keypath="inquiry.cc_myth3.source_1.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth3.flicc_sources[0].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth3.flicc_sources[0].name') }}</a>
                </template>
            </i18n-t>
            

            <UiCardInfo theme="slate-600" class="mb-8">
                <p>{{ t('inquiry.cc_myth3.source_1.txt_2') }}</p>
            </UiCardInfo>


            <UiContentImage src="https://evidence.onkel.ee/assets/c-change__myth3__img1.webp" source="https://gml.noaa.gov/ccgg/about.html" :elevated="true">
                <template #caption>
                    {{ t('inquiry.cc_myth3.img_1.caption') }}
                </template>
            </UiContentImage>

            <hr />

            <label for="q1" class="block mb-2">
                <b>{{ t('inquiry.cc_myth3.q_1') }}</b>
            </label>
            <textarea id="q1" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.noaa1q1"></textarea>

            <label for="q2" class="block mb-2">
                <b>{{ t('inquiry.cc_myth3.q_2') }}</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.noaa1q2"></textarea>

            <label for="q3" class="block mb-2">
                <b>{{ t('inquiry.cc_myth3.q_3') }}</b>
            </label>
            <textarea id="q3" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.noaa1q3"></textarea>

            <label for="q4" class="block mb-2">
                <b>{{ t('inquiry.cc_myth3.q_4') }}</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.noaa1q4"></textarea>

            <hr />

            <i18n-t tag="p" keypath="inquiry.cc_myth3.noaa_stations.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth3.noaa_stations.url_1')" target="_blank" rel="noopener noreferrer">
                        {{ t('inquiry.cc_myth3.noaa_stations.link_1') }}
                    </a>
                </template>
                <template #source31>
                    <a :href="t('inquiry.cc_myth3.noaa_stations.source_31.url')" target="_blank" rel="noopener noreferrer">
                        {{ t('inquiry.cc_myth3.noaa_stations.source_31.link') }}
                    </a>
                </template>
                <template #source32>
                    <a :href="t('inquiry.cc_myth3.noaa_stations.source_32.url')" target="_blank" rel="noopener noreferrer">
                        {{ t('inquiry.cc_myth3.noaa_stations.source_32.link') }}
                    </a>
                </template>
                <template #source33>
                    <a :href="t('inquiry.cc_myth3.noaa_stations.source_33.url')" target="_blank" rel="noopener noreferrer">
                        {{ t('inquiry.cc_myth3.noaa_stations.source_33.link') }}
                    </a>
                </template>
                <template #source34>
                    <a :href="t('inquiry.cc_myth3.noaa_stations.source_34.url')" target="_blank" rel="noopener noreferrer">
                        {{ t('inquiry.cc_myth3.noaa_stations.source_34.link') }}
                    </a>
                </template>
            </i18n-t>



            <div style="transform:translateX(-5vw)" class="mb-8">
                <ToolsDynamicTable :tableStructure="tm('inquiry.cc_myth3.noaa1_table')" :storeToUpdate="climateMyth3Answers" :keyToUpdate="climateMyth3Answers.a1.q1.noaa1Table" />
            </div>


            
            
            <label for="q5" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth3.q_5') }}</b>
            </label>
            <textarea id="q5" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.noaa1q5"></textarea>

            <hr />


            <i18n-t tag="p" keypath="inquiry.cc_myth3.img_2.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth3.img_2.url_1')" trget="_blank" rel="noreferrer noopener">{{t('inquiry.cc_myth3.img_2.link_1')}}</a>
                </template>
            </i18n-t>




            <UiContentImage src="https://evidence.onkel.ee/assets/c-change__myth3__img2.webp" source="https://gml.noaa.gov/ccgg/about.html" :elevated="true">
                <template #caption>
                    {{ t('inquiry.cc_myth3.img_2.caption') }}
                </template>
            </UiContentImage>



            <label for="q1conclusion" class="block mb-2 mt-8">
                <b>{{ t('inquiry.cc_myth3.img_2.conclusion') }}</b>
            </label>
            <textarea id="q1conclusion" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.noaa2conclusion"></textarea>






            <div class="mb-8" style="transform:translateX(-5vw)">
                    <ToolsReliabilityTable :storeToUpdate="climateMyth3Answers" key="ccmyth3rlblty" />
            </div>


            <hr />

            <label for="conclusion" class="block mb-2 mt-8">
                <b>{{ t('inquiry.cc_myth3.conclusion') }}</b>
            </label>
            <textarea id="conclusion" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.conclusions"></textarea>


            <hr />

            <label><b>{{ t('inquiry.cc_myth3.flicc_label') }}</b></label>
            
            <div style="transform:translateX(-5vw)" class="w-[90vw] e-card my-8">
                    <ModulesFlicc2Table :storeToUpdate="climateMyth3Answers" key="ccmyth3flicc" />
                    <!-- <ToolsFliccTable :storeToUpdate="climateMyth3Answers" key="ccmyth3flicc" /> -->
            </div>
           
            
        </section>
    </div>
</template>