<template>
    <section class="w-full">  
        <div 
            class="grid grid-cols-[1fr_80px_80px_80px_80px_1fr] ">
            <div class="text-sm font-bold leading-none p-2 border border-slate-300 flex items-center">
                {{ t('col-1') }}
            </div>
            <div class="text-sm font-bold leading-none p-2 border border-slate-300">
                <div class="dropdown dropdown-top">
                    <label tabindex="0" class="cursor-pointer">{{ t('col-2') }} <br /><Icon name="fluent:question-circle-24-regular" size="24" /></label>
                    <div tabindex="0" class="dropdown-content z-[1] p-4 w-64 shadow-md bg-yellow-100 outline outline-2 outline-slate-400 rounded-box text-lg leading-tight font-normal">
                        {{ t('col-2-description') }}
                    </div>
                </div>
            </div>
            <div class="text-sm font-bold leading-none p-2 border border-slate-300">
                <div class="dropdown dropdown-top">
                    <label tabindex="0" class="cursor-pointer ">{{ t('col-3') }} <br /><Icon name="fluent:question-circle-24-regular" size="24"  /></label>
                    <div tabindex="0" class="dropdown-content z-[1] p-4 w-64 shadow-md bg-yellow-100 outline outline-2 outline-slate-400 rounded-box text-lg leading-tight font-normal">
                        {{ t('col-3-description') }}
                    </div>
                </div>
            </div>
            <div class="text-sm font-bold leading-none p-2 border border-slate-300">
                <div class="dropdown dropdown-top">
                    <label tabindex="0" class="cursor-pointer">{{ t('col-4') }} <br /><Icon name="fluent:question-circle-24-regular" size="24" /></label>
                    <div tabindex="0" class="dropdown-content z-[1] p-4 w-64 shadow-md bg-yellow-100 outline outline-2 outline-slate-400 rounded-box text-lg leading-tight font-normal">
                        {{ t('col-4-description') }}
                    </div>
                </div>
            </div>
            <div class="text-sm font-bold leading-none p-2 border border-slate-300">
                <div class="dropdown dropdown-top">
                    <label tabindex="0" class="cursor-pointer">{{ t('col-5') }} <br /><Icon name="fluent:question-circle-24-regular" size="24" /></label>
                    <div tabindex="0" class="dropdown-content z-[1] p-4 w-64 shadow-md bg-yellow-100 outline outline-2 outline-slate-400 rounded-box text-lg leading-tight font-normal">
                        {{ t('col-5-description') }}
                    </div>
                </div>
            </div>
            <div class="text-sm font-bold leading-none p-2 border border-slate-300 flex items-center">
                {{ t('col-6') }}
            </div>
        </div>
        
        <div v-for="row, i in storeToUpdate.flicc" 
            class="grid grid-cols-[1fr_80px_80px_80px_80px_1fr]">
            <div v-for="cell, j in row" class="border border-slate-300">
                <div v-if="j >= 1 && j < 5" class="flex justify-center items-center h-full">
                    <input v-if="printMode===false" type="checkbox" v-model="storeToUpdate.flicc[i][j]" class="checkbox checkbox-sm" />
                    <Icon v-else-if="printMode===true && storeToUpdate.flicc[i][j] === true" name="mdi:check-bold" />
                </div>
                <template v-else>
                    <textarea v-if="printMode===false"
                    v-model="storeToUpdate.flicc[i][j]" rows="1" class="textarea block w-full h-full py-1 px-2 leading-tight"></textarea>
                    <div v-else class="mx-2 my-1">{{ storeToUpdate.flicc[i][j] }}</div>
                </template>
            </div>
        </div>
        <button v-if="printMode == false" @click="storeToUpdate.addFliccRow" class="btn btn-sm btn-neutral mt-3">{{ t('add-row') }}</button>

    </section>
</template>

<script setup>
    const props = defineProps({
        storeToUpdate: {},
        printMode: {type:Boolean, default:false}
    });
    const { t } = useI18n({
        useScope: 'local'
    });
</script>

<i18n lang="json">
    {
      "en": {
        "col-1": "Source",
        "col-2": "Cherry picking",
        "col-2-description": "This technique is defined as “selectively choosing data leading to the desired conclusion that differs from the conclusion arising from all the available data”.",
        "col-3": "Slippery slope",
        "col-3-description": "Ignorance of information and arbitrary conclusion.",
        "col-4": "Unexpected expectations",
        "col-4-description": "This involves demanding unrealistic levels of proof or misrepresenting the nature of scientific uncertainty. As science is typically probabilistic, calls for absolute scientific certainty effectively cast doubt on scientific findings. This denialist technique is known as the “Scientific Certainty Argumentation Method”.",
        "col-5": "Over-simplification",
        "col-5-description": "Simplifying a situation in such a way as to distort understanding, leading to erroneous conclusions",
        "col-6": "Comments",
        "add-row": "ADD SOURCE"
      },
      "et": {
        "col-1": "Allikas",
        "col-2": "Kirsside noppimine",
        "col-2-description": "Selektiivne andmete valimine, mis viib soovitud järelduseni, mis erineb kõigist saadaolevatest andmetest tulenevatest järeldustest.",
        "col-3": "Kiirustamine järelduste tegemisel",
        "col-3-description": "Informatsiooni mittetundmine ja meelevaldne järeldus.",
        "col-4": "Võimatud ootused",
        "col-4-description": "Hõlmab ebarealistlike tõendite nõudmist või teadusliku määramatuse olemuse vale esitamist. Kuna teadus on  tavaliselt tõenäosuslik, on absoluutse teadusliku kindluse nõudmine tõhus meetod teaduslike leidude kahtluse alla seadmiseks.",
        "col-5": "Liigne lihtsustamine",
        "col-5-description": "Andmete lihtsustamine määrani, et see viib ebaõigete järeldusteni.",
        "col-6": "Kommentaar",
        "add-row": "LISA ALLIKAS"
      },
      "el": {
        "col-1": "Source",
        "col-2": "Cherry picking",
        "col-2-description": "This technique is defined as “selectively choosing data leading to the desired conclusion that differs from the conclusion arising from all the available data”.",
        "col-3": "Slippery slope",
        "col-3-description": "Ignorance of information and arbitrary conclusion.",
        "col-4": "Unexpected expectations",
        "col-4-description": "This involves demanding unrealistic levels of proof or misrepresenting the nature of scientific uncertainty. As science is typically probabilistic, calls for absolute scientific certainty effectively cast doubt on scientific findings. This denialist technique is known as the “Scientific Certainty Argumentation Method”.",
        "col-5": "Over-simplification",
        "col-5-description": "Simplifying a situation in such a way as to distort understanding, leading to erroneous conclusions",
        "col-6": "Comments",
        "add-row": "ADD SOURCE"
      },
      "pt": {
        "col-1": "Source",
        "col-2": "Cherry picking",
        "col-2-description": "This technique is defined as “selectively choosing data leading to the desired conclusion that differs from the conclusion arising from all the available data”.",
        "col-3": "Slippery slope",
        "col-3-description": "Ignorance of information and arbitrary conclusion.",
        "col-4": "Unexpected expectations",
        "col-4-description": "This involves demanding unrealistic levels of proof or misrepresenting the nature of scientific uncertainty. As science is typically probabilistic, calls for absolute scientific certainty effectively cast doubt on scientific findings. This denialist technique is known as the “Scientific Certainty Argumentation Method”.",
        "col-5": "Over-simplification",
        "col-5-description": "Simplifying a situation in such a way as to distort understanding, leading to erroneous conclusions",
        "col-6": "Comments",
        "add-row": "ADD SOURCE"
      },
      "sv": {
        "col-1": "Source",
        "col-2": "Cherry picking",
        "col-2-description": "This technique is defined as “selectively choosing data leading to the desired conclusion that differs from the conclusion arising from all the available data”.",
        "col-3": "Slippery slope",
        "col-3-description": "Ignorance of information and arbitrary conclusion.",
        "col-4": "Un-expected expectations",
        "col-4-description": "This involves demanding unrealistic levels of proof or misrepresenting the nature of scientific uncertainty. As science is typically probabilistic, calls for absolute scientific certainty effectively cast doubt on scientific findings. This denialist technique is known as the “Scientific Certainty Argumentation Method”.",
        "col-5": "Over-simplification",
        "col-5-description": "Simplifying a situation in such a way as to distort understanding, leading to erroneous conclusions",
        "col-6": "Comments",
        "add-row": "ADD SOURCE"
      }
    }
</i18n>