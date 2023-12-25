<template>
    <UiCardInfo>
        <div>
            <p>{{ t('message-1') }} 
                <b>
                    {{ t('message-2') }}
                </b>
            </p>

            <div class="flex items-center flex-wrap gap-3 mb-3">
                <nuxt-link :to="url" target="_blank"
                    class="btn btn-md btn-secondary text-white font-sans no-underline"
                >
                    <icon name="material-symbols:print-outline-rounded" />
                    {{ t('button') }}
                </nuxt-link> 
                <div class="text-sm font-sans">{{ t('new-tab') }}</div>
            </div>
        </div>
    </UiCardInfo>
</template>


<i18n lang="json">
    {
        "en": {
            "message-1": "Here the cards fit to the page layout and take as little space as their content demands – so this is just a preview. If you want to see the cards as uniform size playing cards and print them out,",
            "message-2": "please open the special “card-view” page.",
            "button": "Open print view",
            "new-tab": "(in a new tab)"
        },
         
 
        "el": {
            "message-1" : "Εδώ οι κάρτες ταιριάζουν στη διάταξη της σελίδας και καταλαμβάνουν όσο λίγο χώρο απαιτεί το περιεχόμενό τους – επομένως αυτή είναι απλώς μια προεπισκόπηση. Εάν θέλετε να δείτε τις κάρτες ως τραπουλόχαρτα ομοιόμορφου μεγέθους και να τις εκτυπώσετε,",
            "message-2" : "ανοίξτε την ειδική σελίδα “προβολή καρτών”.",
            "button" : "Άνοιγμα προβολής εκτύπωσης",
            "new-tab" : "(σε νέα καρτέλα)"
        },
        "et": {
            "message-1" : "Siin sobivad kaardid lehe paigutusega ja võtavad nii vähe ruumi, kui nende sisu nõuab – nii et see on vaid eelvaade. Kui soovite kaarte näha ühtse suurusega mängukaartidena ja need välja printida,",
            "message-2" : "avage spetsiaalne “kaardivaate” leht.",
            "button" : "Ava prindivaade",
            "new-tab" : "(uuel vahelehel)"
        },
        "pt": {
            "message-1" : "Aqui os cartões se ajustam ao layout da página e ocupam tão pouco espaço quanto seu conteúdo exige – então isso é apenas uma prévia. Se você quiser ver as cartas como cartas de tamanho uniforme e imprimi-las,",
            "message-2" : "abra a página especial “visualização de cartas”.",
            "button" : "Abra a visualização de impressão",
            "new-tab" : "(em uma nova guia)"
        },
         
        "sv": {
            "message-1" : "Här passar korten till sidlayouten och tar så lite plats som deras innehåll kräver – så det här är bara en förhandstitt. Om du vill se korten som spelkort i enhetlig storlek och skriva ut dem,",
            "message-2" : "öppna den speciella sidan för “kortvy”.",
            "button" : "Öppna utskriftsvy",
            "new-tab" : "(på en ny flik)"
        }
    }
</i18n>

<script setup>
    const props = defineProps({
        "url": {
            type: String
        }
    });
    const {t} = useI18n({useScope: 'local'});
</script>