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
            <div style="transform:translateX(-6vw)" class="mb-8">
                <ToolsDynamicTable 
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

            <div class="e-card w-[90vw]" style="transform: translateX(-5vw);">
                <div class="grid grid-cols-11 text-sm">
                    <div v-for="cell in tm('inquiry.cc_myth5.exp_1.table_2.header')" class="flex justify-center items-center leading-tight border border-slate-300 py-1 px-2">
                        <b>{{ rt(cell) }}</b>
                    </div>
                </div>

                <div class="grid grid-cols-11 text-sm leading-tight">
                    <div v-for="cell,i in tm('inquiry.cc_myth5.exp_1.table_2.header')" class="border border-slate-300 flex justify-center items-center">
                        <template v-if="i === 0">
                            <div class="py-1 px-2 font-bold"> {{ t('inquiry.cc_myth5.exp_1.table_2.col1_row1') }}</div>
                        </template>
                        <template v-else>
                            <input type="text" maxlength="10" v-model="climateMyth5Answers.exp.tempTable[0][i]" rows="1" class="input  block w-full leading-tight" />
                        </template>
                    </div>
                </div>

                <div class="grid grid-cols-11 text-sm leading-tight">
                    <div v-for="cell,j in tm('inquiry.cc_myth5.exp_1.table_2.header')" class="border border-slate-300 flex justify-center items-center">
                        <template v-if="j === 0">
                            <div class="py-1 px-2 font-bold">{{ t('inquiry.cc_myth5.exp_1.table_2.col1_row2') }}</div>
                        </template>
                        <template v-else>
                            <input type="text" maxlength="10" v-model="climateMyth5Answers.exp.tempTable[1][j]" rows="1" class="input  block w-full leading-tight" />
                        </template>
                    </div>
                </div>
            </div>



            <!-- table 3 - temperatures -->


            <h4>{{ t('inquiry.cc_myth5.exp_1.table_3.title') }}</h4>
            <p>{{ t('inquiry.cc_myth5.exp_1.table_3.txt_1') }}</p>

            <div class="e-card w-[90vw] mb-8" style="transform: translateX(-5vw);">
                <div class="grid grid-cols-3 text-sm">
                    <div v-for="cell in tm('inquiry.cc_myth5.exp_1.table_3.header')" class="flex justify-center items-center leading-tight border border-slate-300 py-3 px-2">
                        <b>{{ rt(cell) }}</b>
                    </div>
                </div>

                <div class="grid grid-cols-3 text-sm leading-tight">
                    <div v-for="cell,i in tm('inquiry.cc_myth5.exp_1.table_3.header')" class="border border-slate-300 flex justify-center items-center">
                        <template v-if="i === 0">
                            <div class="py-1 px-2 font-bold"> {{ t('inquiry.cc_myth5.exp_1.table_3.col1_row1') }}</div>
                        </template>
                        <template v-else>
                            <input type="text" maxlength="10" v-model="climateMyth5Answers.exp.dataTable[0][i]" rows="1" class="input  block w-full leading-tight" />
                        </template>
                    </div>
                </div>

                <div class="grid grid-cols-3 text-sm leading-tight">
                    <div v-for="cell,j in tm('inquiry.cc_myth5.exp_1.table_3.header')" class="border border-slate-300 flex justify-center items-center">
                        <template v-if="j === 0">
                            <div class="py-1 px-2 font-bold">{{ t('inquiry.cc_myth5.exp_1.table_3.col1_row2') }}</div>
                        </template>
                        <template v-else>
                            <input type="text" maxlength="10" v-model="climateMyth5Answers.exp.dataTable[1][j]" rows="1" class="input  block w-full leading-tight" />
                        </template>
                    </div>
                </div>
                <div class="grid grid-cols-3 text-sm leading-tight">
                    <div v-for="cell,k in tm('inquiry.cc_myth5.exp_1.table_3.header')" class="border border-slate-300 flex justify-center items-center">
                        <template v-if="k === 0">
                            <div class="py-1 px-2 font-bold">{{ t('inquiry.cc_myth5.exp_1.table_3.col1_row3') }}</div>
                        </template>
                        <template v-else>
                            <input type="text" maxlength="10" v-model="climateMyth5Answers.exp.dataTable[2][k]" rows="1" class="input  block w-full leading-tight" />
                        </template>
                    </div>
                </div>
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

            <div class="mb-8" style="transform:translateX(-5vw)">
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
                    <ModulesFlicc2Table :storeToUpdate="climateMyth5Answers" key="ccmyth3flicc" />
                    <!-- <ToolsFliccTable :storeToUpdate="climateMyth5Answers" key="ccmyth3flicc" /> -->
            </div>
           
            
        </section>
    </div>
</template>