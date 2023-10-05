<script setup>
    import { useStudentClimateGuidedMyth2 } from '~~/store/useStudentClimateGuidedMyth2.js'; 
    const climateMythTwoAnswers = useStudentClimateGuidedMyth2();

    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });

    const addSources = (arr) => {
        arr.forEach((el, index) => {
            climateMythTwoAnswers.changeFliccValue(index, 0, rt(el.name));
            climateMythTwoAnswers.changeReliabilityValue(index, 1, rt(el.name));
        })
    }
    addSources(tm('inquiry.cc_myth2.sources'));

</script>





<template>
    <UiYourAnswersButton url="../answers/myth2" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
            
            <UiButtonBack style="position:fixed; top:9rem; left:2rem; z-index:1000;" />

            <h1 class="mb-0">{{ t('inquiry.cc_myth2.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight">{{ t('inquiry.cc_myth2.subtitle') }}</h5>
        
            <h2>
                {{ t('inquiry.cc_myth2.myth') }}
            </h2>

            <p>
                {{ t('inquiry.cc_myth2.a1.argument.txt_1') }}
            </p>
            
            <UiCardInfo theme="rose-400" icon="game-icons:unicorn">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth2.a1.argument.argument') }}
                </h4>
            </UiCardInfo>

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth2.a1.q1.title_1') }}
                </h4>
            </UiCardInfo>

            <!-- a1.q1 -->


            <!-- <h3><Icon name="tabler:zoom-question" size="48" /><br />{{ t('inquiry.cc_myth2.a1.q1.title_1') }}</h3> -->

            <i18n-t tag="p" keypath="inquiry.cc_myth2.a1.q1.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth2.sources[0].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth2.sources[0].name') }}</a>
                </template>
            </i18n-t>
            
            <label for="a1q1" class="block mb-2">
                <b>{{ t('inquiry.cc_myth2.a1.q1.label_1') }}</b>
            </label>
            <textarea id="a1q1" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q1.t1"></textarea>
            
            <label for="a1q1t2" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth2.a1.q1.label_2') }}</b>
            </label>
            <textarea id="a1q1t2" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q1.t2"></textarea>

            <hr />

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth2.a1.q2.title_1') }}
                </h4>
            </UiCardInfo>
            <!-- <h3><Icon name="tabler:zoom-question" size="48" />
                <br />
                {{ t('inquiry.cc_myth2.a1.q2.title_1') }}</h3> -->

            <h3>{{ t('inquiry.cc_myth2.a1.q2.txt_1') }}</h3>

            <h4>{{ t('inquiry.cc_myth2.a1.q2.list_1_title') }}</h4>

            <ul>
                <li v-for="item in tm('inquiry.cc_myth2.a1.q2.list_1')"
                class="leading-tight my-2">{{ rt(item)}}</li>
            </ul>



            <h4>{{ t('inquiry.cc_myth2.a1.q2.list_2_title') }}</h4>
            <ol>
                <li v-for="item in tm('inquiry.cc_myth2.a1.q2.list_2')"
                class="leading-tight my-2">{{ rt(item)}}</li>
            </ol>


            
            <div style="transform:translateX(-5vw)" class="e-card w-[90vw] mb-8">
                <ToolsDynamicTableFull :tableStructure="tm('inquiry.cc_myth2.a1.q2.data_table')" :storeToUpdate="climateMythTwoAnswers" :keyToUpdate="climateMythTwoAnswers.a1.q2.datatable"
                :add-row="true"
                :new-row="['','','']" />
            </div>
            



            <label for="a1q2hypothesis" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth2.a1.q2.hypothesis') }}</b>
            </label>
            <textarea id="a1q2hypothesis" class="textarea textarea-bordered block w-full mb-8" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q2.hypothesis"></textarea>




            <label for="table2" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth2.a1.q2.table2_title') }}</b>
            </label>


            <ToolsDynamicTableFull 
                :table-structure="tm('inquiry.cc_myth2.a1.q2.table_2')"
                :store-to-update="climateMythTwoAnswers"
                :key-to-update="climateMythTwoAnswers.a1.q2.table2" 
                :overwrite="true"
                
            />




            


            <label for="a1q2conclusions" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth2.a1.q2.conclusions') }}</b>
            </label>
            <textarea id="a1q2conclusions" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q2.conclusions"></textarea>
            
            
            
            
            <i18n-t tag="h4" keypath="inquiry.cc_myth2.a1.q2.source_1.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth2.sources[1].url')" >{{ t('inquiry.cc_myth2.a1.q2.source_1.link_1') }}</a>
                </template>
            </i18n-t>

            <label for="a1q2source1" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth2.a1.q2.source_1.label_1') }}</b>
            </label>
            <textarea id="a1q2source1" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q2.source1"></textarea>
            
            <i18n-t tag="h4" keypath="inquiry.cc_myth2.a1.q2.source_2.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth2.sources[2].url')" >{{ t('inquiry.cc_myth2.a1.q2.source_2.link_1') }}</a>
                </template>
            </i18n-t>

            <label for="a1q2source2" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth2.a1.q2.source_2.label_1') }}</b>
            </label>
            <textarea id="a1q2source2" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q2.source2"></textarea>
            
            <i18n-t tag="h4" keypath="inquiry.cc_myth2.a1.q2.source_3.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth2.sources[3].url')" >{{ t('inquiry.cc_myth2.sources[3].name') }}</a>
                </template>
            </i18n-t>

            <label for="a1q2source3" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth2.a1.q2.source_3.label_1') }}</b>
            </label>
            <textarea id="a1q2source3" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q2.source3"></textarea>










            <!-- Argument 2 -->


            <hr />

            <UiCardInfo theme="rose-400" icon="game-icons:unicorn" >
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth2.a2.argument') }}
                </h4>
            </UiCardInfo>



            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth2.a2.q1.question') }}
                </h4>
            </UiCardInfo>


             <i18n-t tag="h4" keypath="inquiry.cc_myth2.a2.q1.source_1.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth2.sources[4].url')" >{{ t('inquiry.cc_myth2.a2.q1.source_1.link_1') }}</a>
                </template>
            </i18n-t>

            <label for="a2q1source1" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth2.a2.q1.source_1.label_1') }}</b>
            </label>
            <textarea id="a2q1source1" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a2.q1.source1"></textarea>


            


            <label for="a2q1t1" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc_myth2.a2.q1.label_2') }}</b>
            </label>
            <textarea id="a2q1t1" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a2.q1.t1"></textarea>


           
            <hr />

            

            <i18n-t tag="p" keypath="inquiry.cc_myth2.reliability.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth2.reliability.url_1')">
                        {{ t('inquiry.cc_myth2.reliability.link_1') }}
                    </a>
                </template>
            </i18n-t>

            <p class="leading-tight">
                <b>{{ t('inquiry.cc_myth2.reliability.label_1') }}</b>
            </p>

            <div class="e-card w-[90vw] mb-8" style="transform:translateX(-5vw)">
                <!-- <ClientOnly> -->
                    <ToolsReliabilityTable :storeToUpdate="climateMythTwoAnswers" currentSources="inquiry.cc_myth2.sources" key="ccmyth2rlblty" />
                <!-- </ClientOnly> -->
            </div>


            <label for="conclusions" class="block mb-2 mt-4 leading-tight">
                <b>{{ t('inquiry.cc_myth2.conclusions') }}</b>
            </label>
            <textarea id="conclusions" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.conclusions"></textarea>

            <p class="leading-tight">
                <b>{{ t('inquiry.cc_myth2.flicc_label') }}</b>
            </p>

            <div style="transform:translateX(-5vw)" class="e-card w-[90vw] my-8">
                    <ToolsFlicc2Table :storeToUpdate="climateMythTwoAnswers" key="ccmyth2flicc" />
                    <!-- <ToolsFliccTable :storeToUpdate="climateMythTwoAnswers" key="ccmyth2flicc" /> -->
            </div>
            
        </section>
    </div>
</template>