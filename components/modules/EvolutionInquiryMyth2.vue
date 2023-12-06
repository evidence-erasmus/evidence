<script setup>
    import { useStudentEvolutionGuidedMyth2 } from '~~/store/useStudentEvolutionGuidedMyth2.js'; 
    const studentAnswers = useStudentEvolutionGuidedMyth2();

    const { locale, t, tm, rt } = useI18n({
        useScope: 'global'
    });
</script>




<template>
    <UiYourAnswersButton url="../answers/myth2/" />
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        
        <section class="e-article print:not-prose" :lang="locale" style="word-wrap: break-word;overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;">
            
            <UiButtonBack style="position:fixed; top:9rem; left:2rem; z-index:1000;" />

            <h1 class="mb-0">{{ t('inquiry.ev_myth2.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight">{{ t('inquiry.ev_myth2.subtitle') }}</h5>
        

            <UiCardInfo theme="rose-400" icon="game-icons:unicorn" class="my-16">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.ev_myth2.myth.text') }} {{ t('inquiry.ev_myth2.myth.myth') }}
                </h4>
            </UiCardInfo>

            
            <p>
                {{ t('inquiry.ev_myth2.justification.text') }}
            </p>

            <label for="q1" class="block mb-2">
                <b>{{ t('inquiry.ev_myth2.justification.label_1') }}</b>
            </label>
            <textarea id="q1" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="4"
            v-model="studentAnswers.q1"></textarea>
            

            <label for="q2" class="block mb-2">
                <b>{{ t('inquiry.ev_myth2.label_2') }}</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="4"
            v-model="studentAnswers.q2"></textarea>
            
            
            <label for="q3" class="block mb-2">
                <b>{{ t('inquiry.ev_myth2.label_3') }}</b>
            </label>
            <textarea id="q3" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="4"
            v-model="studentAnswers.q3"></textarea>
            

            <UiCardInfo icon="mdi:question-mark-circle" theme="sky-500">
                <h4 class="my-4 leading-tight">
                    {{ t('inquiry.ev_myth2.question') }}
                </h4>
            </UiCardInfo>
            

            <p>
                {{ t('inquiry.ev_myth2.sources_text') }}
            </p>
            <ol class="leading-tight mb-16">
                <li v-for="li in tm('inquiry.ev_myth2.sources')">
                    <a :href="rt(li.url)" target="_blank" rel="noopener noreferrer">{{ rt(li.label) }}</a>
                </li>
            </ol>

            <label for="q4" class="block mb-2">
                <b>{{ t('inquiry.ev_myth2.label_4') }}</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="4"
            v-model="studentAnswers.q4"></textarea>

            <hr />

            <ul class="leading-tight mb-8">
                <li v-for="li in tm('inquiry.ev_myth2.sources_2')">
                    {{ rt(li.text) }}
                    <a :href="rt(li.url)" target="_blank" rel="noopener noreferrer">{{ rt(li.label) }}</a>
                </li>
            </ul>

            <hr />
            
            <label for="q5" class="block mb-2">
                <b>{{ t('inquiry.ev_myth2.label_5') }}</b>
            </label>
            <textarea id="q5" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="4"
            v-model="studentAnswers.q5"></textarea>
            
            <label for="q6" class="block mb-2">
                <b>{{ t('inquiry.ev_myth2.label_6') }}</b>
            </label>
            <textarea id="q6" class="textarea textarea-bordered block w-full mb-16" placeholder="✍️" rows="4"
            v-model="studentAnswers.q6"></textarea>

            
            <i18n-t tag="p" keypath="inquiry.ev_myth1.reliability.text" scope="global">
                <template #link>
                    <NuxtLink to="../../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-neutral text-white no-underline"><Icon name="mdi:tools" size="18" />
                        {{ t('inquiry.ev_myth1.reliability.link') }}
                    </NuxtLink>
                </template>
            </i18n-t>
            
            <label class="block mb-2">
                <b>{{ t('inquiry.ev_myth1.reliability.label') }}</b>
            </label>
            <div class="e-card">
                <ClientOnly>
                    <ToolsReliabilityTable :storeToUpdate="studentAnswers"
                    :addRow="true" />
                </ClientOnly>
            </div>
            
        </section>
    </div>
</template>