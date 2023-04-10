<template>
    <div class="w-full px-2 py-16 sm:px-0">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-slate-200 p-1">
          <Tab
            as="template"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full rounded-lg py-2 text-md font-medium text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-slate-600 hover:bg-white/[0.12] hover:text-white',
              ]"
            >
            
              Essor
            </button>
          </Tab>
         
          <Tab
            as="template"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              ]"
            >
              Tessor
            </button>
          </Tab>
          <Tab
            as="template"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              ]"
            >
              Kossormaatik
            </button>
          </Tab>
        </TabList>
  
        <TabPanels class="mt-2">
          <TabPanel class="focus:outline-none">
            <ModulesVirusesEn />
          </TabPanel>
          <TabPanel class="focus:outline-none">
            <ModulesVirusesBackgroundEn />
          </TabPanel>
          <TabPanel class="focus:outline-none">
            <h2>Kolmas sisu ja siin on seda juba kõvasti rohkem, oi kuite ainult teaskite kui palju rohkem... nojah, ütleme lausa mitu rida!</h2>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </template>
  

  <script setup>
  
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  definePageMeta({
        layout: "content",
    });
  </script>
  