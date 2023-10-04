<template>
    <div>
        
        <label class="block mb-2 font-bold">{{ t('names') }}</label>
        <textarea placeholder="✍️" class="textarea textarea-bordered w-full max-w-xl mb-2" rows="1" ></textarea>

        <table class="text-sm">
            <thead>
                <tr>
                    <th class="max-sm:h-[24ch] align-bottom"></th>
                    <th v-for="option in tm('options')"
                    class="text-center align-bottom p-1 leading-none
                    max-sm:h-[24ch]" 
                    >
                        <span 
                        class="block 
                        w-14 md:w-20
                        max-sm:-rotate-90 max-sm:whitespace-nowrap max-sm:w-6">
                            {{ rt(option) }}
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(question, i) in tm('questions')" :key="`q${i}`">
                    <th class="border-b border-slate-300 text-left align-middle px-1 py-2 leading-tight">{{ rt(question) }}</th>
                    <td v-for="radio in tm('options')"
                    class="border-b border-slate-300 text-center align-middle px-1 py-2 
                    ">
                        <input type="radio" :name="`radio${i}`" class="radio" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<script setup>
    const { t, tm, rt } = useI18n({
        useScope: 'local'
    });
    // const { t, tm, rt } = useI18n();

</script>


<i18n lang="json">
    {
      "en": {
        "names" : "Students names belonging to the group:",
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
            // "Video is edited and supported with a title and closing captions",
            "The visual language is convincing",
            // "Sound is chosen in accordance with the message",
            // "The final product can be accessed (e.g. through YouTube)",
            "Group is able to respond to the questions raised by the audience"
        ],
        "button-title" : "PRINT",
        "button-note" : "(or save as pdf)"
      },
      "et": {
        "names" : "Selles rühmas olid:",
        "options" : [
            "Väga nõus",
            "Nõus",
            "Ei oska öelda",
            "Nõuab veel tööd",
            "Nõuab veel palju tööd"
        ],
        "questions" : [
            "Video/poster/jms oli sihtgrupile (eakaaslased) sobilik",
            "Esitlus oli loodusteaduslikult korrektne",
            "Püstitatud hüpotees ja järeldused olid omavahel seotud",
            "Tõestusmaterjal oli usaldusväärne",
            "Sõnum oli arusaadav",
            "See pani mind müüdi üle järele mõtlema või isegi muutis minu arvamust",
            "Video/esitlus jäi nõutud ajaraami",
            // "ET: Video is edited and supported with a title and closing captions",
            "Visuaalne keel oli mõjus",
            // "Heli (video korral) sobis täiendama esitatud sõnumit",
            // "ET: The final product can be accessed (e.g. through YouTube)",
            "Rühm oli võimeline vastama esitatud küsimustele"
        ],
        "button-title" : "PRINDI",
        "button-note" : "(või salvesta .pdf)"
      },
      "el": {
        "names" : "Ονόματα μαθητών που ανήκουν στην ομάδα:",
        "options" : [
            "Συμφωνώ απόλυτα",
            "Συμφωνώ",
            "Δεν είμαι σίγουρος",
            "Θέλει προσοχή",
            "Θέλει πολύ προσοχή"
        ],
        "questions" : [
            "Το βίντεο/αφίσα/...είναι κατάλληλο για ηλικίες 15-18 ετών",
            "Το επιστημονικό περιεχόμενο είναι σωστό",
            "Η υπόθεση, τα στοιχεία που βρέθηκαν και τα συμπεράσματα είναι εξίσου συνεπή",
            "Τα αποδεικτικά στοιχεία προέρχονται από αξιόπιστες πηγές που αναφέρονται",
            "Το μήνυμα είναι ξεκάθαρο/ κατανοητό",
            "Με έκανε να σκεφτώ για τον μύθο ή ακόμα και να αλλάξω γνώμη για αυτόν",
            "Το βίντεο/παρουσίαση παραμένει εντός του δεδομένου χρονικού πλαισίου",
            // "EL: Video is edited and supported with a title and closing captions",
            "Η οπτική γλώσσα είναι πειστική",
            // "Η ομάδα μπορεί να απαντήσει επαρκώς στις ερωτήσεις",
            // "Η ομάδα μπορεί να απαντήσει επαρκώς στις ερωτήσεις",
            "Η ομάδα μπορεί να απαντήσει επαρκώς στις ερωτήσεις"
        ],
        "button-title" : "PRINT",
        "button-note" : "(or save as pdf)"
      },
      "pt": {
        "names" : "Nomes dos alunos do Grupo:",
        "options" : [
            "Concordo completamente",
            "Concordo",
            "Em dúvida",
            "Precisa de alguma melhoria",
            "Precisa de muita melhoria"
        ],
        "questions" : [
            "O vídeo/poster/... é adequado para as idades 15-18",
            "O conteúdo científico está correto",
            "As hipóteses colocadas, as provas encontradas e as conclusões tiradas são coerentes entre si.",
            "As provas demonstradas foram obtidas a partir de fontes fiáveis que foram referidas",
            "A mensagem é clara/ compreensível",
            "Fez-me refletir sobre o mito ou até mudar de opinião sobre o mito",
            "O vídeo/a apresentação manteve-se dentro do tempo previsto",
            "A linguagem visual é convincente",
            "O grupo foi capaz de responder adequadamente às perguntas"
        ],
        "button-title" : "PRINT",
        "button-note" : "(or save as pdf)"
      },
      "sv": {
        "names" : "Elevernas namn som ingår i gruppen:",
        "options" : [
            "Håller med helt och hållet",
            "Håller med ganska mycket",
            "Inte riktigt säker om jag håller med",
            "Skulle behöva förbättras lite",
            "Skulle behöva förbättras mycket"
        ],
        "questions" : [
            "Den redovisade faktan passar ungdomar i din ålder",
            "Inga fel på ämneskunskaperna",
            "Hypotesen, beviset och slutsatserna är tydliga",
            "Bevisen hämtades från tillförlitliga källor",
            "Budskapet i presentationen är tydligt",
            "Redovisningen fick mig att ändra min uppfattning om myten",
            "Redovisningen är snygg gjort",
            "Gruppen kunde svara på de ställda frågorna"
        ],
        "button-title" : "PRINT",
        "button-note" : "(or save as pdf)"
      }
    }
</i18n>
