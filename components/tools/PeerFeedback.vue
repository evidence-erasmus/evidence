<template>
    <div>
        <table class="text-sm">
            <thead>
                <tr>
                    <th class="max-sm:h-[24ch] align-bottom"></th>
                    <th v-for="option in tm('options')"
                    class="text-center align-bottom p-1 leading-none
                    max-sm:h-[24ch]" 
                    >
                        <span class="block max-sm:-rotate-90 max-sm:whitespace-nowrap max-sm:w-6">
                            {{ rt(option) }}
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(question, i) in tm('questions')" :key="`q${i}`"
                class="">
                    <th class="border-b border-slate-300 text-left align-middle px-1 py-2 leading-tight">{{ rt(question) }}</th>
                    <td v-for="radio in tm('options')"
                    class="border-b border-slate-300 text-center align-middle px-1 py-2 
                    ">
                        <input type="radio" :name="`radio${i}`"  />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<script setup lang="ts">
    const { t, tm, rt } = useI18n({
        useScope: 'local'
    });
</script>


<i18n lang="json">
    {
      "en": {
        "options" : [
            "Strongly agree",
            "Agree",
            "Not sure",
            "Needs some attention",
            "Needs much attention"
        ],
        "questions" : [
            "The content is suitable for ages 15-18.",
            "Science content is correct",
            "The posed hypothesis, found evidence and made conclusions are mutually consistent",
            "Demonstrated evidence is gained from reliable sources which are referred",
            "The message of the video is clear / understandable",
            "The video made me think about the myth or even change my mind about the myth",
            "Video remains within the given time frame (2-5 minutes)",
            "Video is edited and supported with a title and closing captions",
            "The visual language is convincing",
            "Sound is chosen in accordance with the message",
            "The final product can be accessed (e.g. through YouTube)",
            "Group is able to respond to the questions raised by the audience"
        ],
        "button-title" : "PRINT",
        "button-note" : "(or save as pdf)"
      },
      "et": {
        "options" : [
            "Strongly agree",
            "Agree",
            "Not sure",
            "Needs some attention",
            "Needs much attention"
        ],
        "questions" : [
            "ET: The content is suitable for ages 15-18.",
            "ET: Science content is correct",
            "ET: The posed hypothesis, found evidence and made conclusions are mutually consistent",
            "ET: Demonstrated evidence is gained from reliable sources which are referred",
            "ET: The message of the video is clear / understandable",
            "ET: The video made me think about the myth or even change my mind about the myth",
            "ET: Video remains within the given time frame (2-5 minutes)",
            "ET: Video is edited and supported with a title and closing captions",
            "ET: The visual language is convincing",
            "ET: Sound is chosen in accordance with the message",
            "ET: The final product can be accessed (e.g. through YouTube)",
            "ET: Group is able to respond to the questions raised by the audience"
        ],
        "button-title" : "PRINT",
        "button-note" : "(or save as pdf)"
      },
      "el": {
        "options" : [
            "Strongly agree",
            "Agree",
            "Not sure",
            "Needs some attention",
            "Needs much attention"
        ],
        "questions" : [
            "EL: The content is suitable for ages 15-18",
            "EL: Science content is correct",
            "EL: The posed hypothesis, found evidence and made conclusions are mutually consistent",
            "EL: Demonstrated evidence is gained from reliable sources which are referred",
            "EL: The message of the video is clear / understandable",
            "EL: The video made me think about the myth or even change my mind about the myth",
            "EL: Video remains within the given time frame (2-5 minutes)",
            "EL: Video is edited and supported with a title and closing captions",
            "EL: The visual language is convincing",
            "EL: Sound is chosen in accordance with the message",
            "EL: The final product can be accessed (e.g. through YouTube)",
            "EL: Group is able to respond to the questions raised by the audience"
        ],
        "button-title" : "PRINT",
        "button-note" : "(or save as pdf)"
      }
    }
</i18n>




<style scoped>
    /* th {
        text-align:left;
        font-weight: 600;
    }
    th, td {
        padding: 0.5em;
        line-height: 1.15;
        transition:all 0.3s ease-out;
    } */

    
    /* input {
        transform: scale(1.25);
    } */
    
</style>