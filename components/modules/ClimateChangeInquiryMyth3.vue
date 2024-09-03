<script setup>
    import { useStudentClimateGuidedMyth3 } from '~~/store/useStudentClimateGuidedMyth3.js'; 
    const climateMyth3Answers = useStudentClimateGuidedMyth3();

    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });

    const addSources = (arr) => {
        arr.forEach((el, index) => {
            climateMyth3Answers.changeFliccValue(index, 0, rt(el.name));
            climateMyth3Answers.changeReliabilityValue(index, 1, rt(el.name));
        })
    }
    addSources(tm('inquiry.cc_myth3.sources'));
</script>




<template>
    <UiYourAnswersButton url="../answers/myth3" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
            
            <UiButtonBack style="position:fixed; top:9rem; left:2rem; z-index:1000;" />

            <h1 class="mb-2">{{ t('inquiry.cc_myth3.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight">{{ t('inquiry.cc_myth3.subtitle') }}</h5>
        
            <h2 class="border-l-8 border-l-rose-400 pl-4">
                {{ t('inquiry.cc_myth3.myth') }}
            </h2>

            <label for="hypothesis" class="block mb-2">
                <b>{{ t('inquiry.cc_myth3.hypothesis') }}</b>
            </label>
            <textarea id="hypothesis" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.hypothesis"></textarea>
            
            
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
                    <a :href="t('inquiry.cc_myth3.sources[0].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth3.sources[0].name') }}</a>
                </template>
            </i18n-t>
            

            <UiCardInfo theme="slate-600" class="mb-8">
                <p>{{ t('inquiry.cc_myth3.source_1.txt_2') }}</p>
            </UiCardInfo>


            <UiContentImage src="https://evidence.onkel.ee/assets/c-change__myth3__img1.webp" source="https://gml.noaa.gov/ccgg/about.html" :elevated="true" class="mb-16">
                <template #caption>
                    {{ t('inquiry.cc_myth3.img_1.caption') }}
                </template>
            </UiContentImage>

            <hr />

            <label for="q1" class="block mb-2">
                <b>{{ t('inquiry.cc_myth3.q_1') }}</b>
            </label>
            <textarea id="q1" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.noaa1q1"></textarea>

            <label for="q2" class="block mb-2">
                <b>{{ t('inquiry.cc_myth3.q_2') }}</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.noaa1q2"></textarea>

            <label for="q3" class="block mb-2">
                <b>{{ t('inquiry.cc_myth3.q_3') }}</b>
            </label>
            <textarea id="q3" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.noaa1q3"></textarea>

            <label for="q4" class="block mb-2">
                <b>{{ t('inquiry.cc_myth3.q_4') }}</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
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


            <div class="e-card mb-16">
                <ToolsDynamicTableFull :tableStructure="tm('inquiry.cc_myth3.noaa1_table')" :storeToUpdate="climateMyth3Answers" :keyToUpdate="climateMyth3Answers.a1.q1.noaa1Table" />
            </div>


            <label for="q5" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth3.q_5') }}</b>
            </label>
            <textarea id="q5" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.noaa1q5"></textarea>

            <hr />


            <i18n-t tag="p" keypath="inquiry.cc_myth3.img_2.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth3.img_2.url_1')" trget="_blank" rel="noreferrer noopener">{{t('inquiry.cc_myth3.img_2.link_1')}}</a>
                </template>
            </i18n-t>


            <UiContentImage src="https://evidence.onkel.ee/assets/c-change__myth3__img2.webp" source="https://gml.noaa.gov/ccgg/about.html" :elevated="true" class="mb-16">
                <template #caption>
                    {{ t('inquiry.cc_myth3.img_2.caption') }}
                </template>
            </UiContentImage>


            <label for="q1conclusion" class="block mb-2 mt-8">
                <b>{{ t('inquiry.cc_myth3.img_2.conclusion') }}</b>
            </label>
            <textarea id="q1conclusion" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.a1.q1.noaa2conclusion"></textarea>

            <i18n-t tag="p" keypath="inquiry.reliability_table.txt_1" scope="global" class="font-bold">
                
                <template #link1>
                    <a :href="t('inquiry.reliability_table.url_1')" class="font-bold">
                        {{ t('inquiry.reliability_table.link_1') }}
                    </a>
                </template>
            
            </i18n-t>

            <div class="e-card mb-16">
                <ToolsReliabilityTable :storeToUpdate="climateMyth3Answers" currentSources="inquiry.cc_myth3.sources" key="ccmyth3rlblty" />
            </div>


            <hr />

            <label for="conclusion" class="block mb-2 mt-8">
                <b>{{ t('inquiry.cc_myth3.conclusion') }}</b>
            </label>
            <textarea id="conclusion" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth3Answers.conclusions"></textarea>

            <hr />

            <label><b>{{ t('inquiry.cc_myth3.flicc_label') }}</b></label>
            
            <!-- et content only -->
            <template v-if="locale=='et'">
                <i18n-t tag="p" keypath="inquiry.cc_extra.txt_1" scope="global">
                <template #link1>
                    <a href="https://www.uttv.ee/naita?id=34479" target="_blank" rel="noreferrer noopener">
                        {{ t('inquiry.cc_extra.link_1') }}
                    </a>
                </template>
                <template #link2>
                    <a href="https://evidence-erasmus.github.io/evidence/et/climate-change/background#s-4" target="_blank" rel="noreferrer noopener">
                        {{ t('inquiry.cc_extra.link_2') }}
                    </a>
                </template>
            </i18n-t>
            </template>
            <!-- /et content only -->

            <!-- <div style="transform:translateX(-5vw)" class="w-[90vw] e-card my-8">
                <ToolsFliccTable :storeToUpdate="climateMyth3Answers" key="ccmyth3flicc" />
            </div> -->
            <UiFullWidth class="e-card">
                <div>
                    <ClientOnly>
                        <ToolsFlicc2Table :storeToUpdate="climateMyth3Answers" key="ccmyth3flicc" />
                    </ClientOnly>
                </div>
            </UiFullWidth>
           
            
        </section>
    </div>
</template>