<script setup>
    import { useStudentClimateGuidedMyth6 } from '~~/store/useStudentClimateGuidedMyth6.js'; 
    const climateMyth6Answers = useStudentClimateGuidedMyth6();

    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });

    const addSources = (arr) => {
        arr.forEach((el, index) => {
            climateMyth6Answers.changeFliccValue(index, 0, rt(el.name));
            climateMyth6Answers.changeReliabilityValue(index, 1, rt(el.name));
        })
    }
    // onMounted(()=>{
        addSources(tm('inquiry.cc_myth6.sources'));
    // })

</script>





<template>
    <UiYourAnswersButton url="../answers/myth6" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
            
            <UiButtonBack style="position:fixed; top:9rem; left:2rem; z-index:1000;" />

            <h1 class="mb-2">{{ t('inquiry.cc_myth6.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight">{{ t('inquiry.cc_myth6.subtitle') }}</h5>
        
            <h2 class="border-l-8 border-l-rose-400 pl-4">
                {{ t('inquiry.cc_myth6.myth') }}
            </h2>

            <label for="hypothesis" class="block mb-2">
                <b>{{ t('inquiry.cc_myth6.hypothesis') }}</b>
            </label>
            <textarea id="hypothesis" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth6Answers.hypothesis"></textarea>
            
            
            <p>{{ t('inquiry.cc_myth6.argument.txt_1') }}</p>

            <UiCardInfo theme="rose-400" icon="game-icons:unicorn">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth6.argument.argument') }}
                </h4>
            </UiCardInfo>

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth6.question') }}
                </h4>
            </UiCardInfo>

            
            <p>{{ t('inquiry.cc_myth6.source_txt') }}</p>

            <i18n-t tag="p" keypath="inquiry.cc_myth6.source_61.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.cc_myth6.sources[0].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth6.source_61.link_1') }}</a>
                </template>
            </i18n-t>
            <label for="source61" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth6.source_61.label_1') }}</b>
            </label>
            <textarea id="source61" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth6Answers.source61"></textarea>


            <i18n-t tag="p" keypath="inquiry.cc_myth6.source_62.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.cc_myth6.sources[1].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth6.source_62.link_1') }}</a>
                </template>
                <template #i1>
                    <i>{{ t('inquiry.cc_myth6.source_62.i_1') }}</i>
                </template>
            </i18n-t>
            <label for="source62" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth6.source_62.label_1') }}</b>
            </label>
            <textarea id="source62" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth6Answers.source62"></textarea>

            <i18n-t tag="p" keypath="inquiry.cc_myth6.source_63.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.cc_myth6.sources[2].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth6.source_63.link_1') }}</a>
                </template>
            </i18n-t>
            <label for="source63" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth6.source_63.label_1') }}</b>
            </label>
            <textarea id="source63" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth6Answers.source63"></textarea>

            


            <hr />


            <i18n-t tag="p" keypath="inquiry.reliability_table.txt_1" scope="global" class="font-bold">
                <template #link1>
                    <a :href="t('inquiry.reliability_table.url_1')" target="_blank" rel="noreferrer noopener">
                        {{ t('inquiry.reliability_table.link_1') }}
                    </a>
                </template>
            </i18n-t>

            <div class="e-card mb-16">
                <ToolsReliabilityTable :storeToUpdate="climateMyth6Answers" currentSources="inquiry.cc_myth6.sources" key="ccmyth6rlblty" />
            </div>


            <hr />

            <label for="conclusion" class="block mb-2 mt-8">
                <b>{{ t('inquiry.cc_myth6.conclusion') }}</b>
            </label>
            <textarea id="conclusion" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth6Answers.conclusions"></textarea>


            <hr />

            <label><b>{{ t('inquiry.cc_myth6.flicc_label') }}</b></label>
            
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
                <ToolsFliccTable :storeToUpdate="climateMyth6Answers" key="ccmyth6flicc" />
            </div> -->

            <UiFullWidth class="e-card">
                <div>
                    <ClientOnly>
                        <ToolsFlicc2Table :storeToUpdate="climateMyth6Answers" key="ccmyth6flicc" />
                    </ClientOnly>
                </div>
            </UiFullWidth>
           
            
        </section>
    </div>
</template>