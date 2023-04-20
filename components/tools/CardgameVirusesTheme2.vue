<template>
    <div>
        <h2 class="text-2xl mt-4">{{ t('storyCardsTitle') }}</h2>
        
        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            
            <ToolsCardgameCard v-for="(cardS, i) in tm('storyCards')" :key="`cardS${i}`"
                :image="rt(cardS.image)" :story="rt(cardS.story)" :label="`${t('storyCardsLabel')} ${i+1}`" border="border-blue-600"
                class="print:w-[70mm] print:h-[121mm]"
                :class="props.printMode ? 'w-[70mm] h-[121mm]' : ''"
            />

        </section>
    
        <h2 class="text-2xl print:break-before-page">{{ t('infoCardsTitle') }}</h2>

        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            <ToolsCardgameCard v-for="(cardI, i) in tm('infoCards')" :key="`cardI${i}`"
                :title="rt(cardI.title)" :story="rt(cardI.story)" :label="`${t('infoCardsLabel')} ${i+1}`"
                class="print:w-[70mm] print:h-[121mm]"
                :class="props.printMode ? 'w-[70mm] h-[121mm]' : ''"
            />
            
        </section>
    </div>
</template>


<script setup>
    const { t, tm, rt } = useI18n({
        useScope: 'local'
    });
    const props = defineProps({
        "printMode" : {
            type: Boolean,
            default: false
        }
    });
</script>


<i18n lang="json">
    {
      "en": {
        "storyCardsTitle" : "Story cards",
        "infoCardsTitle" : "Info cards",
        "storyCardsLabel" : "Story",
        "infoCardsLabel" : "Info",
        "storyCards" : [
            {
                "title": "",
                "image": "card_viruses_1.webp",
                "story": "Many people, some of them quite famous, were protesting against wearing masks in public spaces during the COVID-19 pandemic. The former baseball player Aubrey Huff (US) announced on Twitter that he would no longer wear a mask inside any business. “It’s unconstitutional to enforce,” he wrote. “Let’s make this bullshit stop now! Who’s with me?” His critics in social media had tried to shame him for “threatening the lives of millions of innocent people, yet those responses did nothing to persuade Huff to wear a mask. (theatlantic.com)"
            },
            {
                "title": "",
                "image": "card_viruses_2.webp",
                "story": "I am working as a pharmacist. Today came, a woman to me to buy a prescription drug while heavily coughing but not wearing a mask. This was meant against her pneumonia, as she said. After I reminded her of the mask-wearing requirement and offered her one, she said she just got a negative corona result and didn’t need any. I didn’t have enough courage to refuse her to sell the medication as she probably strongly required it. Still, I feel frustrated about people who do not understand that COVID is not the only airborne disease."
            },
            {
                "title": "",
                "image": "card_viruses_1.webp",
                "story": "I am a frequent gym visitor. Until now, I haven’t figured out how the mask-wearing rule in the gym could help prevent COVID. Namely, it is required to wear a mask in the locker room but not when in the shower or gym itself. It just does not make sense how wearing a mask in the locker room could help. Anyway, I am always healthy, and I think that I recover very quickly even if falling ill with the virus. Therefore, I don’t believe masks are of any use to me."
            },
            {
                "title": "",
                "image": "card_viruses_2.webp",
                "story": "I am a nurse in a surgery department and wear a mask daily. Medical workers have been using it for years and are still not suffocating. By now, I have gotten sick from claims about how masks suffocate or induce carbon dioxide toxication, how complicated it is to put masks on when wearing glasses, and so on. Those who are very loud and talk about their rights all the time could think for a moment about the most vulnerable among us. How privileged is your life where wearing a mask is the most oppressed you have ever felt?"
            }
        ],
        "infoCards" : [
            {
                "title": "",
                "story": "The prolonged use of medical masks can be uncomfortable. However, it does not lead to CO2 intoxication or oxygen deficiency. In a small study, wearing a 3-layer nonmedical face mask was not associated with a decline in oxygen saturation in older participants. Also, several other studies have confirmed this finding on much younger participants. These results do not support claims that wearing nonmedical face masks in community settings is unsafe."
            },
            {
                "title": "",
                "story": "Medical mask-wearing has a long history starting from medievals. There are pictures of medical professionals treating patients with bubonic plague and wearing beak-like masks. The beak was stuffed with herbs, spices, and dried flowers to ward off the odors believed to spread the plague. Not new in history is even mandatory masking - during the Spanish flu epidemic in 1918, cities worldwide passed mandatory masking orders. Mask-wearing skyrocketed in the early years of the 21st century with the outbreak of SARS and avian influenza. (Source)"
            },
            {
                "title": "",
                "story": "Masks are a vital measure to suppress transmission and save lives. Masks should be used as part of a comprehensive ‘Do it all!’ approach, including physical distancing, avoiding crowded, closed, and close-contact settings, good ventilation, cleaning hands, covering sneezes and coughs, and more. Depending on the type, masks can be used for either protection of healthy persons or to prevent onward transmission."
            },
            {
                "title": "",
                "story": "Masks are often used to protect against viruses and bacteria. They had become widespread in the sense of protection against the SARS-CoV-2 virus. Among different types of masks, surgical face masks are among the most commonly used face coverings in the COVID-19 pandemic. Typically, they are blue-colored from one side, which should be kept as an outer layer. The main aim of surgical masks is to protect patients from potential contact with bacteria and viruses exhaled by the wearer. So, they well prevent the spread of the coronavirus through the air but are less effective means of protecting the wearer from the virus."
            },
            {
                "title": "",
                "story": "To better filter both exhaling and inhaling air, an FFP2 or FFP3 mask (often called also respirator) should be used. FFP2 and FPP3 have a filtration efficiency for airborne particles (including those that contain the virus) of 92% and 98%, respectively. Both masks also have small inward leakage: <8% and <2%, respectively."
            },
            {
                "title": "",
                "story": "The efficiency of the masks has been tested in special laboratories, e.g. in the exposure chamber. In those studies, a particle generator fills the exposure chamber with small particles, similar to aerosols carrying the viruses. Subsequently, particle concentrations behind the masks are measured and compared to the attention in the general atmosphere of the exposure chamber."
            },
            {
                "title": "",
                "story": "The most substantial evidence of the efficiency of wearing masks is based on epidemiologic data from real-life situations. According to a study published in Health Affairs in 2020, the daily COVID-19 growth rate is slowdown after mask mandates in 15 states and the District of Columbia in the US. (Source)"
            },
            {
                "title": "",
                "story": "A high-speed video experiment found hundreds of droplets ranging from 20 to 500 micrometers were generated when saying a simple phrase. However, nearly all these droplets were blocked when a damp washcloth covered the mouth. Another study of people who had influenza or the common cold found that wearing a surgical mask significantly reduced the amount of these respiratory viruses emitted in droplets and aerosols. (Source)"
            },
            {
                "title": "",
                "story": "A recent study  looked at coronavirus deaths across 198 countries and found that those with cultural norms or government policies favoring mask-wearing had lower death rates.(Source)"
            },
            {
                "title": "",
                "story": "Case reports suggest that masks can prevent transmission in high-risk scenarios. In one case, a man flew from China to Toronto and tested positive for COVID-19. He had a dry cough and wore a mask on the flight, and all 25 people closest to him tested negative for COVID-19. In another case, in late May, two hair stylists in Missouri had close contact with 140 clients while sick with COVID-19. Everyone wore a mask, and none of the clients tested positive. (Source) Still, it should be admitted different viruses and strains of the same virus have different infection rates."
            },
            {
                "title": "",
                "story": "In one simulation, researchers predicted that 80 percent of the population wearing masks would do more to reduce COVID-19 spread than a strict lockdown. Even if you live in a community where few people wear masks, you would still reduce your chances of catching the virus by wearing one. (Source)"
            },
            {
                "title": "",
                "story": "FFP2 and FFP3 types masks (respirators, European system) can filter at least 95% of aerosols around 0.3 μm. Similar numbers have shown N95 masks (US system) (source). Respiratory droplets containing COVID-19 have measures of 5-10 μm and COVID-19 itself 0,1-0,5 μm (Source)."
            }
        ]
      },
      "et": {
        "storyCardsTitle" : "Lookaardid",
        "infoCardsTitle" : "Infokaardid",
        "storyCardsLabel" : "Lugu",
        "infoCardsLabel" : "Info",
        "storyCards" : [
        {
                "title": "",
                "image": "card_viruses_1.webp",
                "story": "Many people, some of them quite famous, were protesting against wearing masks in public spaces during the COVID-19 pandemic. The former baseball player Aubrey Huff (US) announced on Twitter that he would no longer wear a mask inside any business. “It’s unconstitutional to enforce,” he wrote. “Let’s make this bullshit stop now! Who’s with me?” His critics in social media had tried to shame him for “threatening the lives of millions of innocent people, yet those responses did nothing to persuade Huff to wear a mask. (theatlantic.com)"
            },
            {
                "title": "",
                "image": "card_viruses_2.webp",
                "story": "I am working as a pharmacist. Today came, a woman to me to buy a prescription drug while heavily coughing but not wearing a mask. This was meant against her pneumonia, as she said. After I reminded her of the mask-wearing requirement and offered her one, she said she just got a negative corona result and didn’t need any. I didn’t have enough courage to refuse her to sell the medication as she probably strongly required it. Still, I feel frustrated about people who do not understand that COVID is not the only airborne disease."
            },
            {
                "title": "",
                "image": "card_viruses_1.webp",
                "story": "I am a frequent gym visitor. Until now, I haven’t figured out how the mask-wearing rule in the gym could help prevent COVID. Namely, it is required to wear a mask in the locker room but not when in the shower or gym itself. It just does not make sense how wearing a mask in the locker room could help. Anyway, I am always healthy, and I think that I recover very quickly even if falling ill with the virus. Therefore, I don’t believe masks are of any use to me."
            },
            {
                "title": "",
                "image": "card_viruses_2.webp",
                "story": "I am a nurse in a surgery department and wear a mask daily. Medical workers have been using it for years and are still not suffocating. By now, I have gotten sick from claims about how masks suffocate or induce carbon dioxide toxication, how complicated it is to put masks on when wearing glasses, and so on. Those who are very loud and talk about their rights all the time could think for a moment about the most vulnerable among us. How privileged is your life where wearing a mask is the most oppressed you have ever felt?"
            }
        ],
        "infoCards" : [
            {
                "title": "",
                "story": "The prolonged use of medical masks can be uncomfortable. However, it does not lead to CO2 intoxication or oxygen deficiency. In a small study, wearing a 3-layer nonmedical face mask was not associated with a decline in oxygen saturation in older participants. Also, several other studies have confirmed this finding on much younger participants. These results do not support claims that wearing nonmedical face masks in community settings is unsafe."
            },
            {
                "title": "",
                "story": "Medical mask-wearing has a long history starting from medievals. There are pictures of medical professionals treating patients with bubonic plague and wearing beak-like masks. The beak was stuffed with herbs, spices, and dried flowers to ward off the odors believed to spread the plague. Not new in history is even mandatory masking - during the Spanish flu epidemic in 1918, cities worldwide passed mandatory masking orders. Mask-wearing skyrocketed in the early years of the 21st century with the outbreak of SARS and avian influenza. (Source)"
            },
            {
                "title": "",
                "story": "Masks are a vital measure to suppress transmission and save lives. Masks should be used as part of a comprehensive ‘Do it all!’ approach, including physical distancing, avoiding crowded, closed, and close-contact settings, good ventilation, cleaning hands, covering sneezes and coughs, and more. Depending on the type, masks can be used for either protection of healthy persons or to prevent onward transmission."
            },
            {
                "title": "",
                "story": "Masks are often used to protect against viruses and bacteria. They had become widespread in the sense of protection against the SARS-CoV-2 virus. Among different types of masks, surgical face masks are among the most commonly used face coverings in the COVID-19 pandemic. Typically, they are blue-colored from one side, which should be kept as an outer layer. The main aim of surgical masks is to protect patients from potential contact with bacteria and viruses exhaled by the wearer. So, they well prevent the spread of the coronavirus through the air but are less effective means of protecting the wearer from the virus."
            },
            {
                "title": "",
                "story": "To better filter both exhaling and inhaling air, an FFP2 or FFP3 mask (often called also respirator) should be used. FFP2 and FPP3 have a filtration efficiency for airborne particles (including those that contain the virus) of 92% and 98%, respectively. Both masks also have small inward leakage: <8% and <2%, respectively."
            },
            {
                "title": "",
                "story": "The efficiency of the masks has been tested in special laboratories, e.g. in the exposure chamber. In those studies, a particle generator fills the exposure chamber with small particles, similar to aerosols carrying the viruses. Subsequently, particle concentrations behind the masks are measured and compared to the attention in the general atmosphere of the exposure chamber."
            },
            {
                "title": "",
                "story": "The most substantial evidence of the efficiency of wearing masks is based on epidemiologic data from real-life situations. According to a study published in Health Affairs in 2020, the daily COVID-19 growth rate is slowdown after mask mandates in 15 states and the District of Columbia in the US. (Source)"
            },
            {
                "title": "",
                "story": "A high-speed video experiment found hundreds of droplets ranging from 20 to 500 micrometers were generated when saying a simple phrase. However, nearly all these droplets were blocked when a damp washcloth covered the mouth. Another study of people who had influenza or the common cold found that wearing a surgical mask significantly reduced the amount of these respiratory viruses emitted in droplets and aerosols. (Source)"
            },
            {
                "title": "",
                "story": "A recent study  looked at coronavirus deaths across 198 countries and found that those with cultural norms or government policies favoring mask-wearing had lower death rates.(Source)"
            },
            {
                "title": "",
                "story": "Case reports suggest that masks can prevent transmission in high-risk scenarios. In one case, a man flew from China to Toronto and tested positive for COVID-19. He had a dry cough and wore a mask on the flight, and all 25 people closest to him tested negative for COVID-19. In another case, in late May, two hair stylists in Missouri had close contact with 140 clients while sick with COVID-19. Everyone wore a mask, and none of the clients tested positive. (Source) Still, it should be admitted different viruses and strains of the same virus have different infection rates."
            },
            {
                "title": "",
                "story": "In one simulation, researchers predicted that 80 percent of the population wearing masks would do more to reduce COVID-19 spread than a strict lockdown. Even if you live in a community where few people wear masks, you would still reduce your chances of catching the virus by wearing one. (Source)"
            },
            {
                "title": "",
                "story": "FFP2 and FFP3 types masks (respirators, European system) can filter at least 95% of aerosols around 0.3 μm. Similar numbers have shown N95 masks (US system) (source). Respiratory droplets containing COVID-19 have measures of 5-10 μm and COVID-19 itself 0,1-0,5 μm (Source)."
            }
        ]
      },
      "el": {
        "storyCardsTitle" : "Story cards EL",
        "infoCardsTitle" : "Info cards EL",
        "storyCardsLabel" : "Story EL",
        "infoCardsLabel" : "Info EL",
        "storyCards" : [
        {
                "title": "",
                "image": "card_viruses_1.webp",
                "story": "Many people, some of them quite famous, were protesting against wearing masks in public spaces during the COVID-19 pandemic. The former baseball player Aubrey Huff (US) announced on Twitter that he would no longer wear a mask inside any business. “It’s unconstitutional to enforce,” he wrote. “Let’s make this bullshit stop now! Who’s with me?” His critics in social media had tried to shame him for “threatening the lives of millions of innocent people, yet those responses did nothing to persuade Huff to wear a mask. (theatlantic.com)"
            },
            {
                "title": "",
                "image": "card_viruses_2.webp",
                "story": "I am working as a pharmacist. Today came, a woman to me to buy a prescription drug while heavily coughing but not wearing a mask. This was meant against her pneumonia, as she said. After I reminded her of the mask-wearing requirement and offered her one, she said she just got a negative corona result and didn’t need any. I didn’t have enough courage to refuse her to sell the medication as she probably strongly required it. Still, I feel frustrated about people who do not understand that COVID is not the only airborne disease."
            },
            {
                "title": "",
                "image": "card_viruses_1.webp",
                "story": "I am a frequent gym visitor. Until now, I haven’t figured out how the mask-wearing rule in the gym could help prevent COVID. Namely, it is required to wear a mask in the locker room but not when in the shower or gym itself. It just does not make sense how wearing a mask in the locker room could help. Anyway, I am always healthy, and I think that I recover very quickly even if falling ill with the virus. Therefore, I don’t believe masks are of any use to me."
            },
            {
                "title": "",
                "image": "card_viruses_2.webp",
                "story": "I am a nurse in a surgery department and wear a mask daily. Medical workers have been using it for years and are still not suffocating. By now, I have gotten sick from claims about how masks suffocate or induce carbon dioxide toxication, how complicated it is to put masks on when wearing glasses, and so on. Those who are very loud and talk about their rights all the time could think for a moment about the most vulnerable among us. How privileged is your life where wearing a mask is the most oppressed you have ever felt?"
            }
        ],
        "infoCards" : [
            {
                "title": "",
                "story": "The prolonged use of medical masks can be uncomfortable. However, it does not lead to CO2 intoxication or oxygen deficiency. In a small study, wearing a 3-layer nonmedical face mask was not associated with a decline in oxygen saturation in older participants. Also, several other studies have confirmed this finding on much younger participants. These results do not support claims that wearing nonmedical face masks in community settings is unsafe."
            },
            {
                "title": "",
                "story": "Medical mask-wearing has a long history starting from medievals. There are pictures of medical professionals treating patients with bubonic plague and wearing beak-like masks. The beak was stuffed with herbs, spices, and dried flowers to ward off the odors believed to spread the plague. Not new in history is even mandatory masking - during the Spanish flu epidemic in 1918, cities worldwide passed mandatory masking orders. Mask-wearing skyrocketed in the early years of the 21st century with the outbreak of SARS and avian influenza. (Source)"
            },
            {
                "title": "",
                "story": "Masks are a vital measure to suppress transmission and save lives. Masks should be used as part of a comprehensive ‘Do it all!’ approach, including physical distancing, avoiding crowded, closed, and close-contact settings, good ventilation, cleaning hands, covering sneezes and coughs, and more. Depending on the type, masks can be used for either protection of healthy persons or to prevent onward transmission."
            },
            {
                "title": "",
                "story": "Masks are often used to protect against viruses and bacteria. They had become widespread in the sense of protection against the SARS-CoV-2 virus. Among different types of masks, surgical face masks are among the most commonly used face coverings in the COVID-19 pandemic. Typically, they are blue-colored from one side, which should be kept as an outer layer. The main aim of surgical masks is to protect patients from potential contact with bacteria and viruses exhaled by the wearer. So, they well prevent the spread of the coronavirus through the air but are less effective means of protecting the wearer from the virus."
            },
            {
                "title": "",
                "story": "To better filter both exhaling and inhaling air, an FFP2 or FFP3 mask (often called also respirator) should be used. FFP2 and FPP3 have a filtration efficiency for airborne particles (including those that contain the virus) of 92% and 98%, respectively. Both masks also have small inward leakage: <8% and <2%, respectively."
            },
            {
                "title": "",
                "story": "The efficiency of the masks has been tested in special laboratories, e.g. in the exposure chamber. In those studies, a particle generator fills the exposure chamber with small particles, similar to aerosols carrying the viruses. Subsequently, particle concentrations behind the masks are measured and compared to the attention in the general atmosphere of the exposure chamber."
            },
            {
                "title": "",
                "story": "The most substantial evidence of the efficiency of wearing masks is based on epidemiologic data from real-life situations. According to a study published in Health Affairs in 2020, the daily COVID-19 growth rate is slowdown after mask mandates in 15 states and the District of Columbia in the US. (Source)"
            },
            {
                "title": "",
                "story": "A high-speed video experiment found hundreds of droplets ranging from 20 to 500 micrometers were generated when saying a simple phrase. However, nearly all these droplets were blocked when a damp washcloth covered the mouth. Another study of people who had influenza or the common cold found that wearing a surgical mask significantly reduced the amount of these respiratory viruses emitted in droplets and aerosols. (Source)"
            },
            {
                "title": "",
                "story": "A recent study  looked at coronavirus deaths across 198 countries and found that those with cultural norms or government policies favoring mask-wearing had lower death rates.(Source)"
            },
            {
                "title": "",
                "story": "Case reports suggest that masks can prevent transmission in high-risk scenarios. In one case, a man flew from China to Toronto and tested positive for COVID-19. He had a dry cough and wore a mask on the flight, and all 25 people closest to him tested negative for COVID-19. In another case, in late May, two hair stylists in Missouri had close contact with 140 clients while sick with COVID-19. Everyone wore a mask, and none of the clients tested positive. (Source) Still, it should be admitted different viruses and strains of the same virus have different infection rates."
            },
            {
                "title": "",
                "story": "In one simulation, researchers predicted that 80 percent of the population wearing masks would do more to reduce COVID-19 spread than a strict lockdown. Even if you live in a community where few people wear masks, you would still reduce your chances of catching the virus by wearing one. (Source)"
            },
            {
                "title": "",
                "story": "FFP2 and FFP3 types masks (respirators, European system) can filter at least 95% of aerosols around 0.3 μm. Similar numbers have shown N95 masks (US system) (source). Respiratory droplets containing COVID-19 have measures of 5-10 μm and COVID-19 itself 0,1-0,5 μm (Source)."
            }
        ]
      }
    }
</i18n>

<style scoped>
        
</style>