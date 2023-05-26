<script setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useUserPreferences } from '~~/store/useUserPreferences'; 

    const userPrefs = useUserPreferences();

    const changeTab = (index) => {
        userPrefs.setLearnPath("learnPathViruses", index);
    } 
</script>

<template>
    <section class="fixed bottom-0 left-0 flex bg-amber-400 pt-2 pb-4 pl-6 pr-8 rounded-tr-xl z-50 ring-4 ring-slate-700">
        <Icon name="fa6-solid:people-group" class="absolute text-slate-800 w-10 h-10" style="transform: translateY(-3.75ch)" /> <nuxt-link href="answers" target="_blank" class="text-lg font-bold uppercase">Sinu vastused</nuxt-link>
    </section>
    
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <UiTableOfContents class="lg:max-w-xs" style="z-index:50">
            <template #title>Sisukord</template>
            <template #content>
                <ol>
                    <li>
                        <a href="#activity-1">Video vaatamine</a>
                    </li>
                    <li>
                        <a href="#activity-2">Rühmaarutelu</a>
                    </li>
                    <li>
                        <a href="#activity-3">Müüdid kliimamuutuste kohta</a>
                    </li>
                    <li>
                        <a href="#activity-4">Tõestusmaterjalile asjakohase vormi väljatöötamine</a>
                    </li>
                    <li>
                        <a href="#activity-5">Esitlused</a>
                    </li>
                    <li>
                        <a href="#activity-6">Argumenteerimismäng</a>
                    </li>
                </ol>
            </template>
        </UiTableOfContents>



        <section class="e-article print:not-prose" lang="et" style="hyphens:auto;">
            
            <h1 class="mb-0">Kliimamuutused</h1>
            <h5 class="font-normal uppercase leading-tight">Avatud uurimus</h5>
        
            <h2>
                Tegevus 3:  Müüdimurdmine
                <br />
                (avatud  uurimus)
            </h2>

            <p>
                <b>Meie hakkame uurima järgmist müüti:</b>
            </p>

            <textarea>
                addasdas
            </textarea>

            <p>
                Nüüd kitsendage oma müüt kontrollitavaks hüpoteesiks või uurimisküsimuseks.
            </p>

            <p>
                Meie hüpotees ja/või uurimisküsimus on:
            </p>
             
            <textarea>
                asdasd
            </textarea>
            
            <p>
                Tegevusplaan (palun märkige, milliste tegevustega olete kogu meeskonnana kaasatud ja mille puhul kavatsete töökohustusi jagada, antud juhul pange palun kirja, kes mille eest 0vastutab):
            </p>










 


        </section>
    </div>
</template>