<script setup>
    import { useStudentClimateGuidedMyth7 } from '~~/store/useStudentClimateGuidedMyth7.js'; 
    const climateMyth7Answers = useStudentClimateGuidedMyth7();
    import { useStudentClimateGuidedMyth4 } from '~~/store/useStudentClimateGuidedMyth4.js'; 
    const climateMyth4Answers = useStudentClimateGuidedMyth4();

    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });

    // const addSources = (arr) => {
    //     arr.forEach((el, index) => {
    //         climateMyth4Answers.changeFliccValue(index, 0, rt(el.name));
    //         climateMyth4Answers.changeReliabilityValue(index, 1, rt(el.name));
    //     })
    // }
    // // onMounted(()=>{
    //     addSources(tm('inquiry.cc_myth4.sources'));
    // // })

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
                    <Icon name="material-symbols:arrow-back-rounded" /><span>{{t('ui.back')}}</span>
                </span>
            </NuxtLink>

            <h1 class="mb-0">{{ t('inquiry.cc_myth4.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight">{{ t('inquiry.cc_myth4.subtitle') }}</h5>
        
            <h2 class="border-l-8 border-l-rose-400 pl-4">
                {{ t('inquiry.cc_myth4.myth') }}
            </h2>

            <label for="hypothesis" class="block mb-2">
                <b>{{ t('inquiry.cc_myth4.hypothesis') }}</b>
            </label>
            <textarea id="hypothesis" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth4Answers.hypothesis"></textarea>
            
            
            <p>{{ t('inquiry.cc_myth4.a1.argument.txt_1') }}</p>

            <UiCardInfo theme="rose-400" icon="game-icons:unicorn">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth4.a1.argument.argument') }}
                </h4>
            </UiCardInfo>

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth4.a1.question') }}
                </h4>
            </UiCardInfo>

            
            <!-- sources -->

            <p>{{ t('inquiry.cc_myth4.a1.source_txt') }}</p>

            <i18n-t tag="p" keypath="inquiry.cc_myth4.a1.source_410.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.cc_myth4.sources[0].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth4.sources[0].name') }}</a>
                </template>
            </i18n-t>

            <!-- <UiYoutube video="ftG_PgwWeNQ" /> -->

            <label for="source410" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth4.a1.source_410.label_1') }}</b>
            </label>
            <textarea id="source71" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth4Answers.a1.source410"></textarea>




            <i18n-t tag="p" keypath="inquiry.cc_myth4.a1.source_411.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.cc_myth4.sources[1].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth4.sources[1].name') }}</a>
                </template>
            </i18n-t>

            <label for="source411" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth4.a1.source_411.label_1') }}</b>
            </label>
            <textarea id="source411" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth4Answers.a1.source411"></textarea>
            
            
            <i18n-t tag="p" keypath="inquiry.cc_myth4.a1.source_412.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.cc_myth4.sources[2].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth4.sources[2].name') }}</a>
                </template>
            </i18n-t>

            <label for="source412" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth4.a1.source_412.label_1') }}</b>
            </label>
            <textarea id="source412" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth4Answers.a1.source412"></textarea>



            <label for="a1conclusion" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth4.a1.conclusion') }}</b>
            </label>
            <textarea id="a1conclusion" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth4Answers.a1.conclusion"></textarea>






            <hr />
            
            
            
            <UiCardInfo theme="rose-400" icon="game-icons:unicorn">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth4.a2.argument') }}
                </h4>
            </UiCardInfo>

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth4.a2.question') }}
                </h4>
            </UiCardInfo>


            <p>{{ t('inquiry.cc_myth4.a2.txt_1') }}</p>

            <h3>{{ t('inquiry.cc_myth4.a2.exp.title') }}</h3>

            <div class="md:grid md:grid-cols-2 md:gap-8">
                
                <div>
                    <h4>{{ t('inquiry.cc_myth4.a2.exp.list_1.title') }}</h4>
                    <ol>
                        <li v-for="item in tm('inquiry.cc_myth4.a2.exp.list_1.list')" class="leading-tight">
                            {{ rt(item) }}
                        </li>
                    </ol>
                </div>
                <UiContentImage src="https://evidence.onkel.ee/assets/c-change__myth4__img1.webp" class="max-w-sm">
                    <template #caption>
                        {{ t('inquiry.cc_myth4.a2.exp.list_1.image_caption') }}
                    </template>
                </UiContentImage>
                
            </div>
            

            <h4>{{ t('inquiry.cc_myth4.a2.exp.list_2.title') }}</h4>
            <ol>
                <li v-for="item in tm('inquiry.cc_myth4.a2.exp.list_2.list')" class="leading-tight">
                    {{ rt(item) }}
                </li>
            </ol>

            
            <div class="e-card w-[90vw] mb-8" style="transform: translateX(-5vw);">
                <ToolsDynamicTableFull :storeToUpdate="climateMyth4Answers" :keyToUpdate="climateMyth4Answers.a2.variableTable" 
                :tableStructure="tm('inquiry.cc_myth4.a2.exp.variable_table.table')" 
                :title="t('inquiry.cc_myth4.a2.exp.variable_table.title')"
                :subtitle="t('inquiry.cc_myth4.a2.exp.variable_table.subtitle')"
                :addRow="true" />
            </div>
            

            <label for="a2hypothesis" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth4.a2.exp.hypothesis') }}</b>
            </label>
            <textarea id="a2hypothesis" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth4Answers.a2.hypothesis"></textarea>



            <div class="e-card w-[90vw] mb-8" style="transform: translateX(-5vw);">
                <ToolsDynamicTableFull :storeToUpdate="climateMyth4Answers" :keyToUpdate="climateMyth4Answers.a2.resultsTable" 
                :tableStructure="tm('inquiry.cc_myth4.a2.exp.results_table.table')" :overwrite="true"
                :title="t('inquiry.cc_myth4.a2.exp.results_table.title')" 
                :subtitle="t('inquiry.cc_myth4.a2.exp.results_table.subtitle')"
                 />
            </div>

            <label for="a2conclusion" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth4.a2.exp.conclusion') }}</b>
            </label>
            <textarea id="a2conclusion" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth4Answers.a2.conclusion"></textarea>
            
            
            <label for="a2islands" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth4.a2.exp.islands') }}</b>
            </label>
            <textarea id="a2islands" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth4Answers.a2.islands"></textarea>



            <i18n-t tag="p" keypath="inquiry.cc_myth4.a2.source_421.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.cc_myth4.sources[3].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth4.sources[3].name') }}</a>
                </template>
            </i18n-t>
            
            <i18n-t tag="p" keypath="inquiry.cc_myth4.a2.source_421.txt_2" scope="global" class="mb-0">
                <template #link2>
                    <a :href="t('inquiry.cc_myth4.sources[4].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth4.sources[4].name') }}</a>
                </template>
            </i18n-t>

            

            <label for="a2source421" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth4.a2.source_421.label_1') }}</b>
            </label>
            <textarea id="a2source421" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth4Answers.a2.source421"></textarea>


            <div class="e-card w-[90vw]" style="transform: translateX(-5vw);" >
                <p>{{ t('inquiry.cc_myth4.a2.graph.txt_1') }}</p>
                <div class="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    <UiContentImage :src="t('inquiry.cc_myth4.a2.graph.img_1.src')" :credits="t('inquiry.cc_myth4.a2.graph.img_1.credits')">
                        <template #caption>
                            {{t('inquiry.cc_myth4.a2.graph.img_1.caption')}}
                        </template>
                    </UiContentImage>
                    <UiContentImage :src="t('inquiry.cc_myth4.a2.graph.img_2.src')" :credits="t('inquiry.cc_myth4.a2.graph.img_2.credits')">
                        <template #caption>
                            {{t('inquiry.cc_myth4.a2.graph.img_2.caption')}}
                        </template>
                    </UiContentImage>
                </div>     
            </div>

            <div class="e-card w-[90vw] my-8" style="transform: translateX(-5vw);">
                <ToolsDynamicTableFull :storeToUpdate="climateMyth4Answers" :keyToUpdate="climateMyth4Answers.a2.sealevelTable" 
                :tableStructure="tm('inquiry.cc_myth4.a2.graph.sealevel_table.table')" 
                :subtitle="t('inquiry.cc_myth4.a2.graph.sealevel_table.subtitle')"
                :overwrite="true" />
           

            <label for="a2sealevel" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth4.a2.graph.sealevel_table.label_1') }}</b>
            </label>
            <textarea id="a2sealevel" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMyth4Answers.a2.sealevelTableAnswer"></textarea>

        </div>

        <label for="a2conclusion" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth4.a2.conclusion') }}</b>
        </label>
        <textarea id="a2conclusion" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
        v-model="climateMyth4Answers.a2.conclusion"></textarea>

        <hr />










        <UiCardInfo theme="rose-400" icon="game-icons:unicorn">
            <h4 class="leading-tight my-2">
                {{ t('inquiry.cc_myth4.a3.argument') }}
            </h4>
        </UiCardInfo>

        <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
            <h4 class="leading-tight my-2">
                {{ t('inquiry.cc_myth4.a3.question') }}
            </h4>
        </UiCardInfo>

        <i18n-t tag="p" keypath="inquiry.cc_myth4.a3.source_431.txt_1" scope="global">
            <template #link1>
                <a :href="t('inquiry.cc_myth4.sources[5].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth4.sources[5].name') }}</a>
            </template>
        </i18n-t>


        <p class="mb-2"><b>{{ t('inquiry.cc_myth4.a3.source_431.label_1') }}</b></p>
        <div class="e-card w-[90vw] mb-8" style="transform: translateX(-5vw);">
            <ToolsDynamicTableFull :storeToUpdate="climateMyth4Answers" :keyToUpdate="climateMyth4Answers.a3.source431Table" 
            :tableStructure="tm('inquiry.cc_myth4.a3.source_431.table')" 
            :subtitle="t('inquiry.cc_myth4.a3.source_431.table.subtitle')"
            :overwrite="true"
            :newRow="['','']"
            :addRow="true" />
        </div>


<hr />
<hr />
<hr />
<hr />
<hr />




            <i18n-t tag="p" keypath="inquiry.cc_myth7.source_72.txt_1" scope="global" class="mb-0">
                <template #link1>
                    <a :href="t('inquiry.cc_myth7.sources[1].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth7.source_72.link_1') }}</a>
                </template>
            </i18n-t>
            <label for="source72" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth7.source_72.label_1') }}</b>
            </label>
            <textarea id="source72" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth7Answers.source72"></textarea>


            <!-- years table -->

            <div class="e-card w-[90vw]" style="transform: translateX(-5vw);">
                <ToolsDynamicTableFull 
                :storeToUpdate="climateMyth7Answers" 
                :keyToUpdate="climateMyth7Answers.yearsTable" 
                :tableStructure="tm('inquiry.cc_myth7.table_years.table')"
                :overwrite="true" />
            </div>

            <label for="years" class="block mb-2 mt-2">
                <b>{{ t('inquiry.cc_myth7.years_max') }}</b>
            </label>
            <textarea id="years" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
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
            <textarea id="source73" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth7Answers.source73"></textarea>

            


            <hr />


            <i18n-t tag="p" keypath="inquiry.reliability_table.txt_1" scope="global" class="font-bold">
                <template #link1>
                    <a :href="t('inquiry.reliability_table.url_1')" target="_blank" rel="noreferrer noopener">
                        {{ t('inquiry.reliability_table.link_1') }}
                    </a>
                </template>
            </i18n-t>

            <div class="mb-8" style="transform:translateX(-5vw)">
                    <ToolsReliabilityTable :storeToUpdate="climateMyth7Answers" currentSources="inquiry.cc_myth7.sources" key="ccmyth7rlblty" />
            </div>


            <hr />

            <label for="conclusion" class="block mb-2 mt-8">
                <b>{{ t('inquiry.cc_myth7.conclusion') }}</b>
            </label>
            <textarea id="conclusion" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMyth7Answers.conclusions"></textarea>


            <hr />

            <label><b>{{ t('inquiry.cc_myth7.flicc_label') }}</b></label>
            
            <div style="transform:translateX(-5vw)" class="w-[90vw] e-card my-8">
                    <ModulesFlicc2Table :storeToUpdate="climateMyth7Answers" key="ccmyth7flicc" />
                    <!-- <ToolsFliccTable :storeToUpdate="climateMyth5Answers" key="ccmyth3flicc" /> -->
            </div>
           
            
        </section>
    </div>
</template>