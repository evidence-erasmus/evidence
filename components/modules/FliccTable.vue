<template>
    <!-- <section class="w-[90vw] -ml-[3vw] sm:w-[90vw] sm:-ml-[3vw] lg:w-[92vw] lg:-ml-[6vw]">
        <div 
        class="grid grid-cols-[1fr_1fr_1fr]">
            <div class="text-sm font-bold leading-none p-3 border border-slate-300"> {{ t('col-1') }}</div>
            <div class="text-sm font-bold leading-none p-3 border border-slate-300">{{ t('col-2') }}</div>
            <div class="text-sm font-bold leading-none p-3 border border-slate-300">{{ t('col-3') }}</div>
        </div>    
        <div 
        class="grid grid-cols-[1fr_1fr_1fr]">
            <div class="leading-tight p-3 border border-slate-300">
                <p class="m-0 text-sm">
                    <img src="http://evidence.onkel.ee/assets/flicc-c1.webp" class="w-20 md:w-28" />
                    <b>{{ t('f1-title') }}</b>
                    <br />
                    {{ t('f1-description') }}
                </p>
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc[0][0]"></textarea>
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc[0][1]"></textarea>
            </div>
        </div>
        <div 
        class="grid grid-cols-[1fr_1fr_1fr]">
            <div class="leading-tight p-3 border border-slate-300">
                <p class="m-0 text-sm">
                    <img src="http://evidence.onkel.ee/assets/flicc-l-j.webp" class="w-20 md:w-28" />
                    <b>{{ t('f2-title') }}</b>
                    <br />
                    {{ t('f2-description') }}
                </p>
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc[1][0]"></textarea>
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc[1][1]"></textarea>
            </div>
        </div>
        <div 
        class="grid grid-cols-[1fr_1fr_1fr]">
            <div class="leading-tight p-3 border border-slate-300">
                <p class="m-0 text-sm">
                    <img src="http://evidence.onkel.ee/assets/flicc-i.webp" class="w-20 md:w-28" />
                    <b>{{ t('f3-title') }}</b>
                    <br />
                    {{ t('f3-description') }}
                </p>
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc[2][0]"></textarea>
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc[2][1]"></textarea>
            </div>
        </div>
        <div 
        class="grid grid-cols-[1fr_1fr_1fr]">
            <div class="leading-tight p-3 border border-slate-300">
                <p class="m-0 text-sm">
                    <img src="http://evidence.onkel.ee/assets/flicc-l-o.webp" class="w-20 md:w-28" />
                    <b>{{ t('f4-title') }}</b>
                    <br />
                    {{ t('f4-description') }}
                </p>
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc[3][0]"></textarea>
            </div>
            <div class="leading-tight p-2 border border-slate-300">
                <textarea rows="4" class="textarea block w-full h-full py-1 px-2"
                    v-model="storeToUpdate.flicc[3][1]"></textarea>
            </div>
        </div>
    </section> -->
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
      },
      "et": {
        "col-1": "Taktika",
        "col-2": "Jah/ei",
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