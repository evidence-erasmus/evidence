<template>
    <div class="w-full max-w-md px-2 py-16 sm:px-0">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
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
        </TabList>
  
        <TabPanels class="mt-2">
          <TabPanel
            :class="[
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            ]"
          >
            <h2>Panel, YO</h2>
          </TabPanel>
          <TabPanel
            :class="[
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            ]"
          >
            <h2>Panel 2, YOYO, mother!</h2>
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
  