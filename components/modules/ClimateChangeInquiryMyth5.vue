<script setup>
    import { useStudentClimateGuidedMyth5 } from '~~/store/useStudentClimateGuidedMyth5.js'; 
    const climateMyth5Answers = useStudentClimateGuidedMyth5();

    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });

    const addSources = (arr) => {
        arr.forEach((el, index) => {
            climateMyth5Answers.changeFliccValue(index, 0, rt(el.name));
            climateMyth5Answers.changeReliabilityValue(index, 1, rt(el.name));
        })
    }
    // onMounted(()=>{
        addSources(tm('inquiry.cc_myth5.sources'));
    // })

</script>





<template>
    <UiYourAnswersButton url="../answers/myth5" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
            
            <UiButtonBack style="position:fixed; top:9rem; left:2rem; z-index:1000;" />

            <h1 class="mb-0">{{ t('inquiry.cc_myth5.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight">{{ t('inquiry.cc_myth5.subtitle') }}</h5>
        
            <h2 class="border-l-8 border-l-rose-400 pl-4">
                {{ t('inquiry.cc_myth5.myth') }}
            </h2>

            <label for="hypothesis" class="block mb-2">
                <b>{{ t('inquiry.cc_myth5.hypothesis') }}</b>
            </label>
            <textarea id="hypothesis" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth5Answers.hypothesis"></textarea>
            
            
            <p>{{ t('inquiry.cc_myth5.argument.txt_1') }}</p>

            <UiCardInfo theme="rose-400" icon="game-icons:unicorn">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth5.argument.argument') }}
                </h4>
            </UiCardInfo>

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth5.question') }}
                </h4>
            </UiCardInfo>

            
            <i18n-t tag="p" keypath="inquiry.cc_myth5.source_1.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth5.sources[0].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth5.sources[0].name') }}</a>
                </template>
            </i18n-t>

            <label for="q1" class="block mb-2">
                <b>{{ t('inquiry.cc_myth5.source_1.txt_2') }}</b>
            </label>
            <textarea id="q1" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
                v-model="climateMyth5Answers.videoNotes">
            </textarea>



            <h2>{{ t('inquiry.cc_myth5.exp_1.title') }}</h2>

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth5.exp_1.question') }}
                </h4>
            </UiCardInfo>

            <UiCardInfo class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth5.exp_1.formula') }}
                </h4>
            </UiCardInfo>

            
            <!-- lists -->
            
            <h4>{{ t('inquiry.cc_myth5.exp_1.list_1.title') }}</h4>
            <ul>
                <li v-for="item in tm('inquiry.cc_myth5.exp_1.list_1.list')" class="my-1 leading-tight">{{ rt(item) }}</li>
            </ul>

            <h4>{{ t('inquiry.cc_myth5.exp_1.list_2.title') }}</h4>
            <ol>
                <li v-for="item in tm('inquiry.cc_myth5.exp_1.list_2.list')" class="my-1 leading-tight">{{ rt(item) }}</li>
            </ol>


            <!-- Variables table -->

            <label>
                <b>{{ t('inquiry.cc_myth5.exp_1.table_1.label') }}</b>
            </label>
            <div style="transform:translateX(-5vw)" class="e-card w-[90vw] mb-8">
                <ToolsDynamicTableFull 
                    :tableStructure="tm('inquiry.cc_myth5.exp_1.table_1.table')" 
                    :storeToUpdate="climateMyth5Answers"
                    :keyToUpdate="climateMyth5Answers.exp.variableTable" 
                    :newRow="['','','']" 
                    :addRow="true" />
            </div>



            <label for="expHypothesis" class="mb-2">
                <b>{{ t('inquiry.cc_myth5.exp_1.hypothesis') }}</b>
            </label>
            <textarea id="expHypothesis" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
                v-model="climateMyth5Answers.exp.hypothesis">
            </textarea>


            <!-- table 2 - temperatures -->


            <h4>{{ t('inquiry.cc_myth5.exp_1.table_2.title') }}</h4>
            <p>{{ t('inquiry.cc_myth5.exp_1.table_2.txt_1') }}</p>
            <div class="e-card w-[90vw] transform -translate-x-[5vw]" >
                <ToolsDynamicTableFull
                    :store-to-update="climateMyth5Answers"
                    :key-to-update="climateMyth5Answers.exp.tempTable"
                    :table-structure="tm('inquiry.cc_myth5.exp_1.table_2')"
                    :overwrite="true"
                />
            </div>
            


            <h4>{{ t('inquiry.cc_myth5.exp_1.table_3.title') }}</h4>
            <p>{{ t('inquiry.cc_myth5.exp_1.table_3.txt_1') }}</p>
            <div class="e-card w-[90vw] transform -translate-x-[5vw] mb-8" >
                <ToolsDynamicTableFull 
                    :storeToUpdate="climateMyth5Answers"
                    :keyToUpdate="climateMyth5Answers.exp.dataTable"
                    :table-structure="tm('inquiry.cc_myth5.exp_1.table_3')"
                    :overwrite="true"
                />
            </div>



            


            
            



          

            <label for="expColl" class="mb-2">
                <b>{{ t('inquiry.cc_myth5.exp_1.collected_data') }}</b>
            </label>
            <textarea id="expColl" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
                v-model="climateMyth5Answers.exp.collectedData">
            </textarea>

            


            <hr />


            <i18n-t tag="p" keypath="inquiry.reliability_table.txt_1" scope="global" class="font-bold">
                <template #link1>
                    <a :href="t('inquiry.reliability_table.url_1')" target="_blank" rel="noreferrer noopener">
                        {{ t('inquiry.reliability_table.link_1') }}
                    </a>
                </template>
            </i18n-t>

            <div class="e-card w-[90vw] mb-8" style="transform:translateX(-5vw)">
                <ToolsReliabilityTable :storeToUpdate="climateMyth5Answers" currentSources="inquiry.cc_myth5.sources" key="ccmyth3rlblty" />
            </div>


            <hr />

            <label for="conclusion" class="block mb-2 mt-8">
                <b>{{ t('inquiry.cc_myth5.conclusion') }}</b>
            </label>
            <textarea id="conclusion" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth5Answers.conclusions"></textarea>


            <hr />

            <label><b>{{ t('inquiry.cc_myth5.flicc_label') }}</b></label>
            
            <div style="transform:translateX(-5vw)" class="w-[90vw] e-card my-8">
                <ToolsFlicc2Table :storeToUpdate="climateMyth5Answers" key="ccmyth3flicc" />
                <!-- <ToolsFliccTable :storeToUpdate="climateMyth5Answers" key="ccmyth3flicc" /> -->
            </div>
           
            
        </section>
    </div>
</template>