<script setup>
    import { useStudentClimateGuidedMyth1 } from '~~/store/useStudentClimateGuidedMyth1.js'; 
    const climateMythOneAnswers = useStudentClimateGuidedMyth1();

    const { locale, t, tm } = useI18n({
        useScope: 'global'
    });

    
    const addSources = (arr) => {
        arr.forEach((el, index) => {
            climateMythOneAnswers.changeFliccValue(index, 0, el.name.body.static);
            climateMythOneAnswers.changeReliabilityValue(index, 0, el.name.body.static);
        })
    }
    addSources(tm('inquiry.cc-myth1.flicc-sources'));

    // console.log("Messages" , i18n);
    
    // const loopMessages = (arr) => {
    //     arr.forEach((el, index) => {
    //         // console.log(el);
    //     })
    // }
    // loopMessages(tm('flicc-sources'));
    
    // console.log("Messages" , tm(''));

</script>







<!-- <i18n lang="json">
    {
        "en": {
            "back": "Back",
            "title": "Climate change",
            "subtitle": "Guided inquiry; Myth 1",
            "myth": "“The extinction of species is a natural process. Mass extinctions of species have always occurred”.",
            "hypothesis": "Write down your testable hypothesis concerning Myth 1:",
            "argument": {
                "txt-1": "You are given the basic argument of Myth 1 and the question you must answer using the given scientific sources.",
                "argument": "Argument of Myth 1: The mass extinction of species is a natural process."
            },
            "question": {
                "question": "Question: Is the mass extinction of species a natural process?",
                "txt-1": "Study {link1} and watch the video {link2}. Then, answer the following questions.",
                "link-1": "source 1.1",
                "link-2": "Climate Change: Why are thousands of species facing extinction? - BBC News."
            },
            "q-1": "1. What do we mean by  „mass extinction”?",
            "q-2": "2. How many mass extinctions do you find happening?",
            "q-3": "3. What were the causes of the mass extinctions?",
            "q-4": "4. What were the consequences of the mass extinctions?",
            "q-5": "5. Why should we worry about mass extinctions now?",
            "q-6": {
                "txt-1": "Study {link1} and answer the following question.",
                "link-1": "source 1.2",
                "q-6": "6. What is the reason for the mass killing of penguins?"
            },
            "q-7": {
                "txt-1": "Please use {link1} to assess the reliability of the sources used.",
                "link-1": "this tool",
                "q-7": "7. Write a summary of your findings in the following table."
            },
            "q-8": "8. Based on the given evidence, our conclusion(s) concerning the myth “The extinction of species is a natural process. Mass extinctions of species have always occurred.” is (are):",
            "q-9": "According to the data you collected, where do you owe the error of this myth?",
            "flicc-sources": [
                {
                    "name": "Source 1.1",
                    "url": "http://mde-didaktiki.biol.uoa.gr/mde7/plexida/ordovician.html"
                },
                {
                    "name": "Video",
                    "url": "https://www.youtube.com/watch?v=nho73BtDQtE"
                },
                {
                    "name": "Source 1.2",
                    "url": "https://docs.google.com/document/d/e/2PACX-1vTxM7SnO9h9ZC8wxVMEVwU8Ha2_AKh99vbYcBO-g8BxJy9w5oFeb5lUoxUbvTQnq35mtT9Fi7bCSf67/pub"
                }
            ]
        },
        "et": {
            "back": "Tagasi",
            "title": "Kliimamuutused",
            "subtitle": "Juhitud uurimus, müüt 1",
            "myth": "Liikide väljasuremine on looduslik protsess. Massiline liikide väljasuremine on alati toimunud.",
            "hypothesis": "Püstitage selle kohta oma hüpotees:",
            "argument": {
                "txt-1": "Teile antakse müüdi nr. 1 põhiargument ja küsimus, millele peate vastama etteantud allikate abil.",
                "argument": "Müüdi 1 põhiargument: Liikide massiline väljasuremine on loomulik protsess."
            },
            "question": {
                "question": "Uurimisküsimus: Kas liikide massiline väljasuremine on loomulik protsess?",
                "txt-1": "Uurige {link1} ja {link2} ning vastake järgnevatele küsimustele.",
                "link-1": "allikat 1.1",
                "link-2": "vaadake videot"
            },
            "q-1": "1. Mida me mõtleme „massilise väljasuremise” all?",
            "q-2": "2. Kui palju massilist väljasuremist teie arvates toimub?",
            "q-3": "3. Millised olid massilise väljasuremise põhjused?",
            "q-4": "4. Millised olid massilise väljasuremise tagajärjed?",
            "q-5": "5. Miks me peaksime praegu muretsema massilise väljasuremise pärast?",
            "q-6": {
                "txt-1": "Uurige {link1} ning vastake järgmisele küsimusele:",
                "link-1": "allikat 1.2",
                "q-6": "6. Mis on pingviinide massilise hukkumise põhjus?"
            },
            "q-7": {
                "txt-1": "Palun hinnake järgmise {link1} abil kasutatud infoallikate usaldusväärsust.",
                "link-1": "tööriista",
                "q-7": "7. Kirjuta kokkuvõte uuritud materjalist alljärgnevasse tabelisse."
            },
            "q-8": "8. Esitatud tõendite põhjal on meie järeldus(ed) müüdi “Liikide väljasuremine on looduslik protsess. Massiline liikide väljasuremine on alati toimunud”, paikapidavuse kohta järgmine (järgmised):",
            "q-9": "Tuginedes kogutud teadmistele, mis on teie seisukoht, millise teaduse eitamise taktika tõttu see müüt on tekkinud?",
            "flicc-sources": [
                {
                    "name": "Allikas 1.1",
                    "url": "http://mde-didaktiki.biol.uoa.gr/mde7/plexida/ordovician.html"
                },
                {
                    "name": "Video",
                    "url": "https://www.youtube.com/watch?v=nho73BtDQtE"
                },
                {
                    "name": "Allikas 1.2",
                    "url": "https://docs.google.com/document/d/e/2PACX-1vTxM7SnO9h9ZC8wxVMEVwU8Ha2_AKh99vbYcBO-g8BxJy9w5oFeb5lUoxUbvTQnq35mtT9Fi7bCSf67/pub"
                }
            ]
        }, 
        "el": {
            "back": "Back el"
        }
    }
</i18n> -->











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
                    <Icon name="material-symbols:arrow-back-rounded" /><span>{{t('inquiry.cc-myth1.back')}}</span>
                </span>
            </NuxtLink>

            <h1 class="mb-0">{{ t('inquiry.cc-myth1.title') }}</h1>
            <h5 class="font-normal uppercase leading-tight">{{ t('inquiry.cc-myth1.subtitle') }}</h5>
        
            <!-- <h2>
                Tegevus 3: Müüdimurdmine
            </h2> -->

            <h3>
                {{ t('inquiry.cc-myth1.myth') }}
            </h3>

            <label for="q1" class="block mb-2">
                <b>{{ t('inquiry.cc-myth1.hypothesis') }}</b>
            </label>
            <textarea id="q1" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="4"
            v-model="climateMythOneAnswers.hypothesis"></textarea>
            <hr />

            <p>
                {{ t('inquiry.cc-myth1.argument.txt-1') }}
            </p>
            
            <UiCardInfo theme="rose-400" icon="game-icons:unicorn">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc-myth1.argument.argument') }}
                </h4>
            </UiCardInfo>

            <UiCardInfo theme="sky-400" icon="tabler:zoom-question" class="mt-6">
                <h4 class="leading-tight my-2">
                    {{ t('inquiry.cc-myth1.question.question') }}
                </h4>
            </UiCardInfo>
            
            <i18n-t tag="p" keypath="inquiry.cc-myth1.question.txt-1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc-myth1.flicc-sources[0].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc-myth1.question.link-1') }}</a>
                </template>
                <template #link2>
                    <a :href="t('inquiry.cc-myth1.flicc-sources[1].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc-myth1.question.link-2') }}</a>
                </template>
            </i18n-t>
            
            <label for="q2" class="block mb-2">
                <b>{{ t('inquiry.cc-myth1.q-1') }}</b>
            </label>
            <textarea id="q2" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q1"></textarea>

            <hr />
            
            <label for="q3" class="block mb-2">
                <b>{{ t('inquiry.cc-myth1.q-2') }}</b>
            </label>
            <textarea id="q3" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q2"></textarea>

            <hr />
            
            <label for="q4" class="block mb-2">
                <b>{{ t('inquiry.cc-myth1.q-3') }}</b>
            </label>
            <textarea id="q4" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q3"></textarea>

            <hr />
            
            <label for="q5" class="block mb-2">
                <b>{{ t('inquiry.cc-myth1.q-4') }}</b>
            </label>
            <textarea id="q5" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q4"></textarea>

            <hr />
            
            <label for="q6" class="block mb-2">
                <b>{{ t('inquiry.cc-myth1.q-5') }}</b>
            </label>
            <textarea id="q6" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q5"></textarea>

            <hr />
            
            <i18n-t keypath="inquiry.cc-myth1.q-6.txt-1" scope="global">
                <template #link1>
                    <a :href="t('inquiry.cc-myth1.flicc-sources[2].url')" target="_blank" rel="noopener noreferrer">{{ t('inquiry.cc-myth1.q-6.link-1') }}</a> 
                </template>
            </i18n-t>

            <label for="q7" class="block mb-2">
                <b>{{ t('inquiry.cc-myth1.q-6.q-6') }}</b>
            </label>
            <textarea id="q7" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q6"></textarea>
            
            <hr />

            <i18n-t tag="p" keypath="inquiry.cc-myth1.q-7.txt-1" scope="global">
                <template #link1>
                    <a href="https://docs.google.com/document/d/12ABQ5rgwb418f47KKdg1yPQbMUn7n6N0h4fEJLhJzbg/edit?usp=share_link" target="_blank" rel="noreferrer noopener">
                        {{ t('inquiry.cc-myth1.q-7.link-1') }}
                    </a>
                </template>
            </i18n-t>

            <p>
                <b>{{ t('inquiry.cc-myth1.q-7.q-7') }}</b>
            </p>

            <div style="transform:translateX(-6vw)">
                <ToolsReliabilityTable :storeToUpdate="climateMythOneAnswers" />
            </div>

            <hr />

            <label for="q8" class="block mb-2">
                <b>{{ t('inquiry.cc-myth1.q-8') }}</b>
            </label>
            <textarea id="q8" class="textarea textarea-bordered block w-full" placeholder="✍️" rows="10"
            v-model="climateMythOneAnswers.q8"></textarea>

            <hr />

            <p>
                <b>{{ t('inquiry.cc-myth1.q-9') }}</b>
            </p>

            <ToolsFliccTable :storeToUpdate="climateMythOneAnswers" />
            
        </section>
    </div>
</template>