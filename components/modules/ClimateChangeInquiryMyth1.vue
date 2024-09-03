<script setup>
    import { useStudentClimateGuidedMyth1 } from '~~/store/useStudentClimateGuidedMyth1.js'; 
    const climateMythOneAnswers = useStudentClimateGuidedMyth1();

    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });

    const addSources = (arr) => {
        arr.forEach((el, index) => {
            climateMythOneAnswers.changeFliccValue(index, 0, rt(el.name));
            climateMythOneAnswers.changeReliabilityValue(index, 1, rt(el.name));
        })
    }
    addSources(tm('inquiry.cc_myth1.sources'));

</script>




<template>
    <UiYourAnswersButton url="../answers/myth1/" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" :lang="locale" style="word-wrap: break-word; overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
            
            <UiButtonBack style="position:fixed; top:9rem; left:2rem; z-index:1000;" />

            <h1 class="mb-2">{{ t('inquiry.cc_myth1.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight">{{ t('inquiry.cc_myth1.subtitle') }}</h5>
        
            <h3>
                {{ t('inquiry.cc_myth1.myth') }}
            </h3>

            <label for="q1" class="block mb-2">
                <b>{{ t('inquiry.cc_myth1.hypothesis') }}</b>
            </label>
            <textarea id="q1" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="4"
            v-model="climateMythOneAnswers.hypothesis"></textarea>
            <hr />

            <p>
                {{ t('inquiry.cc_myth1.argument.txt_1') }}
            </p>
            
            <UiCardInfo theme="rose-400" icon="game-icons:unicorn">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth1.argument.argument') }}
                </h4>
            </UiCardInfo>

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc_myth1.question.question') }}
                </h4>
            </UiCardInfo>
            
            <i18n-t tag="p" keypath="inquiry.cc_myth1.question.txt_1" scope="global" class="mt-12">
                <template #link1>
                    <a :href="t('inquiry.cc_myth1.sources[0].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth1.question.link_1') }}</a>
                </template>
                <!-- <template #link2>
                    <a :href="t('inquiry.cc_myth1.sources[1].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth1.question.link_2') }}</a>
                </template> -->
            </i18n-t>
            
            <label for="q2" class="block mb-2">
                <b>{{ t('inquiry.cc_myth1.q_1') }}</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q1"></textarea>

            <hr />
            
            <label for="q3" class="block mb-2">
                <b>{{ t('inquiry.cc_myth1.q_2') }}</b>
            </label>
            <textarea id="q3" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q2"></textarea>

            <hr />
            
            <label for="q4" class="block mb-2">
                <b>{{ t('inquiry.cc_myth1.q_3') }}</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q3"></textarea>

            <hr />
            
            <label for="q5" class="block mb-2">
                <b>{{ t('inquiry.cc_myth1.q_4') }}</b>
            </label>
            <textarea id="q5" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q4"></textarea>

            <hr />
            
            <label for="q6" class="block mb-2">
                <b>{{ t('inquiry.cc_myth1.q_5') }}</b>
            </label>
            <textarea id="q6" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q5"></textarea>

            <hr />
            
            <i18n-t keypath="inquiry.cc_myth1.q_6.txt_1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc_myth1.sources[1].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc_myth1.q_6.link_1') }}</a> 
                </template>
            </i18n-t>

            <label for="q7" class="block mb-2">
                <b>{{ t('inquiry.cc_myth1.q_6.q_6') }}</b>
            </label>
            <textarea id="q7" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q6"></textarea>
            
            <hr />

            <i18n-t tag="p" keypath="inquiry.reliability_table.txt_1" scope="global">
                <template #link1>
                    <a href="../../tools/reliability-assessment" target="_blank" rel="noreferrer noopener">
                        {{ t('inquiry.reliability_table.link_1') }}
                    </a>
                </template>
            </i18n-t>

            <p>
                <b>{{ t('inquiry.cc_myth1.q_7.q_7') }}</b>
            </p>

            <div class="e-card w-[90vw]" style="transform:translateX(-6vw)">
                <ClientOnly>
                    <ToolsReliabilityTable :storeToUpdate="climateMythOneAnswers" currentSources="inquiry.cc_myth1.sources" />
                </ClientOnly>
            </div>

            <hr />

            <label for="q8" class="block mb-2">
                <b>{{ t('inquiry.cc_myth1.q_8') }}</b>
            </label>
            <textarea id="q8" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q8"></textarea>

            <hr />

            <p>
                <b>{{ t('inquiry.cc_myth1.q_9') }}</b>
            </p>

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

            <UiFullWidth class="e-card">
                <div>
                    <ClientOnly>
                        <ToolsFliccTable :storeToUpdate="climateMythOneAnswers" 
                        class="min-w-xl" />
                    </ClientOnly>
                </div>
            </UiFullWidth>
            
            <hr />

        </section>
    </div>
</template>