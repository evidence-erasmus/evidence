<template>
    <section class="e-card w-[90vw] -ml-[3vw] sm:w-[90vw] sm:-ml-[3vw] lg:w-[92vw] lg:-ml-[6vw]">  
        <div 
            class="grid grid-cols-[1fr_80px_80px_80px_80px_1fr] ">
            <div class="text-sm font-bold leading-none p-2 border border-slate-300">
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
                    <label tabindex="0" class="cursor-pointer">{{ t('col-3') }} <br /><Icon name="fluent:question-circle-24-regular" size="24" /></label>
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
            <div class="text-sm font-bold leading-none p-2 border border-slate-300">
                {{ t('col-6') }}
            </div>
        </div>
        <div v-for="row, i in storeToUpdate.flicc" 
            class="grid grid-cols-[1fr_80px_80px_80px_80px_1fr]">
            <div v-for="cell, j in row" class="border border-slate-300">
                <div v-if="j >= 1 && j < 5" class="flex justify-center items-center h-full">
                    <input type="checkbox" v-model="storeToUpdate.flicc[i][j]" class="checkbox checkbox-sm" 
                     />
                </div>
                <textarea v-else 
                    v-model="storeToUpdate.flicc[i][j]" rows="1" class="textarea block w-full h-full py-1 px-2"></textarea>
            </div>
        </div>
        <button @click="storeToUpdate.addFliccRow" class="btn btn-sm btn-neutral mt-3">{{ t('add-row') }}</button>
    </section>
</template>

<script setup>
    const props = defineProps({
        storeToUpdate: {}
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
        "col-3": "Slippery slope",
        "col-4": "Unexpected expectations",
        "col-5": "Oversimplification",
        "col-6": "Comments",
        "add-row": "ADD ROW"
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
        "add-row": "LISA RIDA"
      },
      "el": {
        "col-1": "Source",
        "col-2": "Cherry picking",
        "col-3": "Slippery slope",
        "col-4": "Unexpected expectations",
        "col-5": "Oversimplification",
        "col-6": "Comments",
        "add-row": "ADD ROW"
      }
    }
</i18n>