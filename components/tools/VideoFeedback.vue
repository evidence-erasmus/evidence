<script setup lang="ts">
    const { t } = useI18n({
        useScope: 'local'
    });
</script>


<i18n lang="json">
    {
      "en": {
        "option-1": "Strongly agree",
        "option-2": "Agree",
        "option-3": "Not sure",
        "option-4": "Needs some attention",
        "option-5": "Needs much attention",
        "q-1" : "The video is suitable for age group 15-18",
        "q-2" : "Science content is correct",
        "q-3" : "The posed hypothesis, found evidence and made conclu&shy;sions are mutually consis&shy;tent",
        "q-4" : "Demon&shy;strated evidence is gained from reliable sources which are referred",
        "q-5" : "The message of the video is clear / understan&shy;dable",
        "q-6" : "The video made me think about the myth or even change my mind about the myth",
        "q-7" : "Video remains within the given time frame (2-5 minutes)",
        "q-8" : "Video is edited and supported with a title and closing captions",
        "q-9" : "The visual language is convin&shy;cing",
        "q-10" : "Sound is chosen in accor&shy;dance with the message",
        "q-11" : "The final product can be accessed (e.g. through YouTube)",
        "q-12" : "Group is able to respond to the ques&shy;tions raised by the audience",
        "button-title" : "PRINT",
        "button-note" : "(or save as pdf)"
      },
      "et": {
        "hello": "こんにちは、世界!"
      }
    }
</i18n>


<template>
    <div>
        <table class="text-sm">
            <thead>
                <tr>
                    <th class="max-sm:h-[24ch] align-bottom"><span class="block max-sm:-rotate-90 max-sm:whitespace-nowrap max-sm:w-4"></span></th>
                    <th class="max-sm:h-[24ch] align-bottom"><span class="block max-sm:-rotate-90 max-sm:whitespace-nowrap max-sm:w-4">{{ t('option-1') }}</span></th>
                    <th class="max-sm:h-[24ch] align-bottom"><span class="block max-sm:-rotate-90 max-sm:whitespace-nowrap max-sm:w-4">{{ t('option-2') }}</span></th>
                    <th class="max-sm:h-[24ch] align-bottom"><span class="block max-sm:-rotate-90 max-sm:whitespace-nowrap max-sm:w-4">{{ t('option-3') }}</span></th>
                    <th class="max-sm:h-[24ch] align-bottom"><span class="block max-sm:-rotate-90 max-sm:whitespace-nowrap max-sm:w-4">{{ t('option-4') }}</span></th>
                    <th class="max-sm:h-[24ch] align-bottom"><span class="block max-sm:-rotate-90 max-sm:whitespace-nowrap max-sm:w-4">{{ t('option-5') }}</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th v-html="t('q-1')"></th>
                    <td ><input type="checkbox"></td>
                    <td ><input type="checkbox"></td>
                    <td ><input type="checkbox"></td>
                    <td ><input type="checkbox"></td>
                    <td ><input type="checkbox"></td>
                </tr>
                <tr>
                    <th v-html="t('q-2')"></th>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th v-html="t('q-3')"></th>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th v-html="t('q-4')"></th>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th v-html="t('q-5')"></th>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th v-html="t('q-6')"></th>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th v-html="t('q-7')"></th>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th v-html="t('q-8')"></th>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th v-html="t('q-9')"></th>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th v-html="t('q-10')"></th>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th v-html="t('q-11')"></th>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th v-html="t('q-12')"></th>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    th {
        text-align:left;
        font-weight: 600;
    }
    th, td {
        padding: 0.5em;
        line-height: 1.15;
        transition:all 0.3s ease-out;
        /* border: 1px solid red; */
    }

    
    /* input {
        transform: scale(1.25);
    } */
    
</style>