<script setup>
    import { useStudentClimateGuidedMyth2 } from '~~/store/useStudentClimateGuidedMyth2.js'; 
    const climateMythTwoAnswers = useStudentClimateGuidedMyth2();

    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });

    const addSources = (arr) => {
        arr.forEach((el, index) => {
            climateMythTwoAnswers.changeFliccValue(index, 0, el.name.body.static);
            climateMythTwoAnswers.changeReliabilityValue(index, 0, el.name.body.static);
        })
    }
    addSources(tm('inquiry.cc-myth2.flicc-sources'));

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

            <h1 class="mb-0">{{ t('inquiry.cc-myth2.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight">{{ t('inquiry.cc-myth2.subtitle') }}</h5>
        
            <h2>
                {{ t('inquiry.cc-myth2.myth') }}
            </h2>

            <p>
                {{ t('inquiry.cc-myth2.a1.argument.txt-1') }}
            </p>
            
            <UiCardInfo theme="rose-400" icon="game-icons:unicorn">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc-myth2.a1.argument.argument') }}
                </h4>
            </UiCardInfo>

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc-myth2.a1.q1.title-1') }}
                </h4>
            </UiCardInfo>

            <!-- a1.q1 -->


            <!-- <h3><Icon name="tabler:zoom-question" size="48" /><br />{{ t('inquiry.cc-myth2.a1.q1.title-1') }}</h3> -->

            <i18n-t tag="p" keypath="inquiry.cc-myth2.a1.q1.txt-1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc-myth2.flicc-sources[0].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc-myth2.flicc-sources[0].name') }}</a>
                </template>
            </i18n-t>
            
            <label for="a1q1" class="block mb-2">
                <b>{{ t('inquiry.cc-myth2.a1.q1.label-1') }}</b>
            </label>
            <textarea id="a1q1" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q1.t1"></textarea>
            
            <label for="a1q1" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc-myth2.a1.q1.label-2') }}</b>
            </label>
            <textarea id="a1q1" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q1.t2"></textarea>

            <hr />

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc-myth2.a1.q2.title-1') }}
                </h4>
            </UiCardInfo>
            <!-- <h3><Icon name="tabler:zoom-question" size="48" />
                <br />
                {{ t('inquiry.cc-myth2.a1.q2.title-1') }}</h3> -->

            <h3>{{ t('inquiry.cc-myth2.a1.q2.txt-1') }}</h3>

            <h4>{{ t('inquiry.cc-myth2.a1.q2.list-1-title') }}</h4>

            <ul>
                <li v-for="item in tm('inquiry.cc-myth2.a1.q2.list-1')"
                class="leading-tight my-2">{{ rt(item)}}</li>
            </ul>

            <h4>{{ t('inquiry.cc-myth2.a1.q2.list-2-title') }}</h4>

            <ol>
                <li v-for="item in tm('inquiry.cc-myth2.a1.q2.list-2')"
                class="leading-tight my-2">{{ rt(item)}}</li>
            </ol>


            
            <div style="transform:translateX(-6vw)">
                <ToolsDynamicTable :tableStructure="tm('inquiry.cc-myth2.a1.q2.data-table')" :storeToUpdate="climateMythTwoAnswers" :keyToUpdate="climateMythTwoAnswers.a1.q2.datatable" />
            </div>
            



            <label for="a1q2hypothesis" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc-myth2.a1.q2.hypothesis') }}</b>
            </label>
            <textarea id="a1q2hypothesis" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q2.hypothesis"></textarea>

            <h1 class="bg-rose-600 text-yellow-100">TABLE HERE</h1>            

            <label for="a1q2conclusions" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc-myth2.a1.q2.conclusions') }}</b>
            </label>
            <textarea id="a1q2conclusions" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q2.conclusions"></textarea>
            
            
            
            
            <i18n-t tag="h4" keypath="inquiry.cc-myth2.a1.q2.source-1.txt-1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc-myth2.flicc-sources[1].url')" >{{ t('inquiry.cc-myth2.a1.q2.source-1.link-1') }}</a>
                </template>
            </i18n-t>

            <label for="a1q2source1" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc-myth2.a1.q2.source-1.label-1') }}</b>
            </label>
            <textarea id="a1q2source1" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q2.source1"></textarea>
            
            <i18n-t tag="h4" keypath="inquiry.cc-myth2.a1.q2.source-2.txt-1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc-myth2.flicc-sources[2].url')" >{{ t('inquiry.cc-myth2.a1.q2.source-2.link-1') }}</a>
                </template>
            </i18n-t>

            <label for="a1q2source2" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc-myth2.a1.q2.source-2.label-1') }}</b>
            </label>
            <textarea id="a1q2source2" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q2.source2"></textarea>
            
            <i18n-t tag="h4" keypath="inquiry.cc-myth2.a1.q2.source-3.txt-1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc-myth2.flicc-sources[3].url')" >{{ t('inquiry.cc-myth2.flicc-sources[3].name') }}</a>
                </template>
            </i18n-t>

            <label for="a1q2source3" class="block mb-2 mt-4">
                <b>{{ t('inquiry.cc-myth2.a1.q2.source-3.label-1') }}</b>
            </label>
            <textarea id="a1q2source3" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="5"
            v-model="climateMythTwoAnswers.a1.q2.source3"></textarea>













            <hr />

            <UiCardInfo theme="rose-400" icon="game-icons:unicorn" >
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc-myth2.a2.argument') }}
                </h4>
            </UiCardInfo>




            <!-- <label for="q3" class="block mb-2">
                <b>{{ t('inquiry.cc-myth2.q-2') }}</b>
            </label>
            <textarea id="q3" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythTwoAnswers.q2"></textarea>

            <hr />
            
            <label for="q4" class="block mb-2">
                <b>{{ t('inquiry.cc-myth2.q-3') }}</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythTwoAnswers.q3"></textarea>

            <hr />
            
            <label for="q5" class="block mb-2">
                <b>{{ t('inquiry.cc-myth2.q-4') }}</b>
            </label>
            <textarea id="q5" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythTwoAnswers.q4"></textarea>

            <hr />
            
            <label for="q6" class="block mb-2">
                <b>{{ t('inquiry.cc-myth2.q-5') }}</b>
            </label>
            <textarea id="q6" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythTwoAnswers.q5"></textarea>

            <hr />
            
            <i18n-t keypath="inquiry.cc-myth2.q-6.txt-1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc-myth2.flicc-sources[2].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc-myth2.q-6.link-1') }}</a> 
                </template>
            </i18n-t>

            <label for="q7" class="block mb-2">
                <b>{{ t('inquiry.cc-myth2.q-6.q-6') }}</b>
            </label>
            <textarea id="q7" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythTwoAnswers.q6"></textarea>
            
            <hr />

            <i18n-t tag="p" keypath="inquiry.cc-myth2.q-7.txt-1" scope="global">
                <template #link1>
                    <a href="https://docs.google.com/document/d/12ABQ5rgwb418f47KKdg1yPQbMUn7n6N0h4fEJLhJzbg/edit?usp=share_link" target="_blank" rel="noreferrer noopener">
                        {{ t('inquiry.cc-myth2.q-7.link-1') }}
                    </a>
                </template>
            </i18n-t>

            <p>
                <b>{{ t('inquiry.cc-myth2.q-7.q-7') }}</b>
            </p>

            <div style="transform:translateX(-6vw)">
                <ClientOnly>
                    <ToolsReliabilityTable :storeToUpdate="climateMythTwoAnswers" key="ccmyth2rlblty" />
                </ClientOnly>
            </div>

            <hr />

            <label for="q8" class="block mb-2">
                <b>{{ t('inquiry.cc-myth2.q-8') }}</b>
            </label>
            <textarea id="q8" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythTwoAnswers.q8"></textarea>

            <hr />

            <p>
                <b>{{ t('inquiry.cc-myth2.q-9') }}</b>
            </p> -->

            <div style="transform:translateX(-6vw)">
                    <ToolsFliccTable :storeToUpdate="climateMythTwoAnswers" key="ccmyth2flicc" />
                <!-- </ClientOnly> -->
            </div>
            
        </section>
    </div>
</template>