<script setup>
    import { useStudentClimateGuidedMyth7 } from '~~/store/useStudentClimateGuidedMyth7.js'; 
    const climateMyth7Answers = useStudentClimateGuidedMyth7();

    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });

    const addSources = (arr) => {
        arr.forEach((el, index) => {
            climateMyth7Answers.changeFliccValue(index, 0, rt(el.name));
            climateMyth7Answers.changeReliabilityValue(index, 1, rt(el.name));
        })
    }
    // onMounted(()=>{
        addSources(tm('inquiry.cc_myth7.sources'));
    // })

</script>





<template>
    <UiYourAnswersButton url="../answers/myth7" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
            
            <UiButtonBack style="position:fixed; top:9rem; left:2rem; z-index:1000;" />

            <h1 class="mb-2">{{ t('inquiry.cc_myth7.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight">{{ t('inquiry.cc_myth7.subtitle') }}</h5>
        
            <h2 class="border-l-8 border-l-rose-400 pl-4">
                {{ t('inquiry.cc_myth7.myth') }}
            </h2>

            <label for="hypothesis" class="block mb-2">
                <b>{{ t('inquiry.cc_myth7.hypothesis') }}</b>
            </label>
            <textarea id="hypothesis" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth7Answers.hypothesis"></textarea>
            
            
            <p>{{ t('inquiry.cc_myth7.argument.txt_1') }}</p>

            <UiCardInfo theme="rose-400" icon="game-icons:unicorn">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth7.argument.argument') }}
                </h4>
            </UiCardInfo>

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth7.question') }}
                </h4>
            </UiCardInfo>

            
            <!-- sources -->

            <p>{{ t('inquiry.cc_myth7.source_txt') }}</p>

            <i18n-t tag="p" keypath="inquiry.cc_myth7.source_71.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.cc_myth7.sources[0].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth7.source_71.link_1') }}</a>
                </template>
            </i18n-t>

            <UiYoutube video="ftG_PgwWeNQ" />

            <label for="source71" class="block mb-2 mt-16">
                <b>{{ t('inquiry.cc_myth7.source_71.label_1') }}</b>
            </label>
            <textarea id="source71" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth7Answers.source71"></textarea>


            <i18n-t tag="p" keypath="inquiry.cc_myth7.source_72.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.cc_myth7.sources[1].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth7.source_72.link_1') }}</a>
                </template>
            </i18n-t>
            <label for="source72" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth7.source_72.label_1') }}</b>
            </label>
            <textarea id="source72" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth7Answers.source72"></textarea>


            <!-- years table -->

            <p class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth7.table_years.label_1') }}</b>
            </p>

            <div class="e-card mb-16">
                <ToolsDynamicTableFull 
                :storeToUpdate="climateMyth7Answers" 
                :keyToUpdate="climateMyth7Answers.yearsTable" 
                :tableStructure="tm('inquiry.cc_myth7.table_years.table')"
                :overwrite="true" />
            </div>

            <label for="years" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth7.years_max') }}</b>
            </label>
            <textarea id="years" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth7Answers.yearsMax"></textarea>

            <!-- source 3 -->

            <i18n-t tag="p" keypath="inquiry.cc_myth7.source_73.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.cc_myth7.sources[2].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth7.source_73.link_1') }}</a>
                </template>
            </i18n-t>
            <label for="source73" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth7.source_73.label_1') }}</b>
            </label>
            <textarea id="source73" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth7Answers.source73"></textarea>

            


            <hr />


            <i18n-t tag="p" keypath="inquiry.reliability_table.txt_1" scope="global" class="font-bold">
                <template #link1>
                    <a :href="t('inquiry.reliability_table.url_1')" target="_blank" rel="noreferrer noopener">
                        {{ t('inquiry.reliability_table.link_1') }}
                    </a>
                </template>
            </i18n-t>

            <div class="e-card mb-16">
                <ToolsReliabilityTable :storeToUpdate="climateMyth7Answers" currentSources="inquiry.cc_myth7.sources" key="ccmyth7rlblty" />
            </div>


            <hr />

            <label for="conclusion" class="block mb-2 mt-8">
                <b>{{ t('inquiry.cc_myth7.conclusion') }}</b>
            </label>
            <textarea id="conclusion" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="5"
            v-model="climateMyth7Answers.conclusions"></textarea>


            <hr />

            <label class="block mb-2"><b>{{ t('inquiry.cc_myth7.flicc_label') }}</b></label>
            
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

            <!-- <div class="e-card mb-16">
                    <ToolsFliccTable :storeToUpdate="climateMyth7Answers" key="ccmyth7flicc" />
            </div> -->

            <UiFullWidth class="e-card">
                <div>
                    <ClientOnly>
                        <ToolsFlicc2Table :storeToUpdate="climateMyth7Answers" key="ccmyth7flicc" />
                    </ClientOnly>
                </div>
            </UiFullWidth>
           
            
        </section>
    </div>
</template>