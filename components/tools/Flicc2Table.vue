<template>
    <section class="w-full">
        <div 
        class="grid grid-cols-[1fr_100px_1fr]">
            <div class="text-sm font-bold leading-none p-3 border border-slate-300"> {{ t('col-1') }}</div>
            <div class="text-sm font-bold leading-none p-3 border border-slate-300">{{ t('col-2') }}</div>
            <div class="text-sm font-bold leading-none p-3 border border-slate-300">{{ t('col-3') }}</div>
        </div>    
        <div 
        class="grid grid-cols-[1fr_100px_1fr]">
            <div class="leading-tight p-2 border border-slate-300">
                <img src="http://evidence.onkel.ee/assets/flicc-c1.webp" class="w-20 md:w-28 my-2 print:w-10" />
                <p class="m-0 text-sm">
                    <b>{{ t('f1-title') }}</b>
                    <br />
                    <span class="print:hidden">{{ t('f1-description') }}</span>
                </p>
            </div>
            <div class="leading-tight p-2 border border-slate-300 flex items-center justify-center">
                <input v-if="printMode===false" type="checkbox" v-model="storeToUpdate.flicc2[0][0]" class="checkbox" />
                <Icon v-else-if="printMode===true && storeToUpdate.flicc2[0][0] === true" name="mdi:check-bold" />
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="2" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc2[0][1]"></textarea>
            </div>
        </div>
        <div 
        class="grid grid-cols-[1fr_100px_1fr]">
            <div class="leading-tight p-3 border border-slate-300">
                <img src="http://evidence.onkel.ee/assets/flicc-l-j.webp" class="w-20 md:w-28 my-2 print:w-10" />
                <p class="m-0 text-sm">
                    <b>{{ t('f2-title') }}</b>
                    <br />
                    <span class="print:hidden">{{ t('f2-description') }}</span>
                </p>
            </div>
            <div class="leading-tight p-2 border border-slate-300 flex items-center justify-center">
                <input v-if="printMode===false" type="checkbox" v-model="storeToUpdate.flicc2[1][0]" class="checkbox" />
                <Icon v-else-if="printMode===true && storeToUpdate.flicc2[1][0] === true" name="mdi:check-bold" />
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="2" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc2[1][1]"></textarea>
            </div>
        </div>
        <div 
        class="grid grid-cols-[1fr_100px_1fr]">
            <div class="leading-tight p-3 border border-slate-300">
                <img src="http://evidence.onkel.ee/assets/flicc-i.webp" class="w-20 md:w-28 my-2 print:w-10" />
                <p class="m-0 text-sm">
                    <b>{{ t('f3-title') }}</b>
                    <br />
                    <span class="print:hidden">{{ t('f3-description') }}</span>
                </p>
            </div>
            <div class="leading-tight p-2 border border-slate-300 flex items-center justify-center">
                <input v-if="printMode===false" type="checkbox" v-model="storeToUpdate.flicc2[2][0]" class="checkbox" />
                <Icon v-else-if="printMode===true && storeToUpdate.flicc2[2][0] === true" name="mdi:check-bold" />
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="2" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc2[2][1]"></textarea>
            </div>
        </div>
        <div 
        class="grid grid-cols-[1fr_100px_1fr]">
            <div class="leading-tight p-3 border border-slate-300">
                <img src="http://evidence.onkel.ee/assets/flicc-l-o.webp" class="w-20 md:w-28 my-2 print:w-10" />
                <p class="m-0 text-sm">
                    <b>{{ t('f4-title') }}</b>
                    <br />
                    <span class="print:hidden">{{ t('f4-description') }}</span>
                </p>
            </div>
            <div class="leading-tight p-2 border border-slate-300 flex items-center justify-center">
                <input v-if="printMode===false" type="checkbox" v-model="storeToUpdate.flicc2[3][0]" class="checkbox" />
                <Icon v-else-if="printMode===true && storeToUpdate.flicc2[3][0] === true" name="mdi:check-bold" />
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="2" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc2[3][1]"></textarea>
            </div>
        </div>
    </section>
</template>



<i18n lang="json">
    {
      "en": {
        "col-1": "Evidence / main conclusions / summary of the information relevant to the hypothesis",
        "col-2": "Yes / no",
        "col-3": "Comments",
        "f1-title": "Kirsside noppimine:",
        "f1-description": "Selektiivne andmete valimine, mis viib soovitud järelduseni, mis erineb kõigist saadaolevatest andmetest tulenevatest järeldustest.",
        "f2-title": "Kiirustamine järelduste tegemisel:",
        "f2-description": "Informatsiooni mittetundmine ja meelevaldne järeldus.",
        "f3-title": "Võimatud ootused:",
        "f3-description": "Ebarealistlike tõendite nõudmine või teadusliku määramatuse olemuse vale esitamine. Kuna teaduslikud teadmised on  tavaliselt tõenäosuslikud, on absoluutse teadusliku kindluse nõudmine tõhus meetod teaduslike väidete  kahtluse alla seadmiseks.",
        "f4-title": "Liigne lihtsustamine",
        "f4-description": "Andmete lihtsustamine määrani, et see viib ebaõigete järeldusteni."
      },
      "et": {
        "col-1": "Taktika",
        "col-2": "Jah / ei",
        "col-3": "Kommentaarid",
        "f1-title": "Kirsside noppimine:",
        "f1-description": "Selektiivne andmete valimine, mis viib soovitud järelduseni, mis erineb kõigist saadaolevatest andmetest tulenevatest järeldustest.",
        "f2-title": "Kiirustamine järelduste tegemisel:",
        "f2-description": "Informatsiooni mittetundmine ja meelevaldne järeldus.",
        "f3-title": "Võimatud ootused:",
        "f3-description": "Ebarealistlike tõendite nõudmine või teadusliku määramatuse olemuse vale esitamine. Kuna teaduslikud teadmised on  tavaliselt tõenäosuslikud, on absoluutse teadusliku kindluse nõudmine tõhus meetod teaduslike väidete  kahtluse alla seadmiseks.",
        "f4-title": "Liigne lihtsustamine",
        "f4-description": "Andmete lihtsustamine määrani, et see viib ebaõigete järeldusteni."
      },
      "el": {
        "col-1": "Evidence / main conclusions / summary of the information relevant to the hypothesis",
        "col-2": "Type and source of evidence",
        "col-3": "Reliability rate",
        "f1-title": "Kirsside noppimine:",
        "f1-description": "Selektiivne andmete valimine, mis viib soovitud järelduseni, mis erineb kõigist saadaolevatest andmetest tulenevatest järeldustest.",
        "f2-title": "Kiirustamine järelduste tegemisel:",
        "f2-description": "Informatsiooni mittetundmine ja meelevaldne järeldus.",
        "f3-title": "Võimatud ootused:",
        "f3-description": "Ebarealistlike tõendite nõudmine või teadusliku määramatuse olemuse vale esitamine. Kuna teaduslikud teadmised on  tavaliselt tõenäosuslikud, on absoluutse teadusliku kindluse nõudmine tõhus meetod teaduslike väidete  kahtluse alla seadmiseks.",
        "f4-title": "Liigne lihtsustamine",
        "f4-description": "Andmete lihtsustamine määrani, et see viib ebaõigete järeldusteni."
      }
    }
</i18n>


<script setup>
    const props = defineProps({
        storeToUpdate: {},
        printMode: {type:Boolean, default: false}
    });
    const { t } = useI18n({
        useScope: 'local'
    });
</script>