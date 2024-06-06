<script setup>
    const { t } = useI18n();
</script>

<template>
    <section>
        <ModulesStructure>
            <template #title>{{ t('a') }} 1<br />{{ t('a1') }}</template>
            <template #icons>
                <div class="e-icon--rounded ">
                    <Icon name="material-symbols:youtube-tv-outline" class="text-white" />
                </div>
                <Icon name="mdi:arrow-right-thick" />
                <div class="e-icon--rounded bg-slate-600">
                    <Icon name="game-icons:ouroboros" class="text-white" />
                </div>
                <div class="e-icon--rounded bg-slate-600">
                    <Icon name="game-icons:unicorn" class="text-white" />
                </div>
                <div class="e-icon--rounded bg-slate-600">
                    <Icon name="game-icons:all-seeing-eye" class="text-white" />
                </div>
            </template>
        </ModulesStructure>
        <ModulesStructure>
            <template #title>{{ t('a') }} 2<br />{{ t('a2') }}</template>
            <template #icons>
                <div class="e-icon--rounded ">
                    <Icon name="fa6-solid:people-group" class="text-white" />
                </div>
                <div class="e-icon--rounded ">
                    <Icon name="mdi:frequently-asked-questions" class="text-white" />
                </div>
                <Icon name="mdi:check-bold" />
                <div class="e-icon--rounded bg-slate-600">
                    <Icon name="game-icons:unicorn" class="text-white" />
                </div>
            </template>
        </ModulesStructure>
        <ModulesStructure>
            <template #title>{{ t('a') }} 3<br />{{ t('a3') }}</template>
            <template #icons>
                <div class="e-icon--rounded ">
                    <Icon name="fa6-solid:people-group" class="text-white" />
                </div>
                <div class="e-icon--rounded ">
                    <Icon name="tabler:zoom-question" class="text-white" />
                </div>
                <div class="e-icon--rounded ">
                    <Icon name="tabler:microscope" class="text-white" />
                </div>
                <Icon name="fa6-solid:arrows-spin" />
                <div class="e-icon--rounded bg-slate-600">
                    <Icon name="game-icons:horse-head" class="text-white" />
                </div>
            </template>
        </ModulesStructure>
        <ModulesStructure>
            <template #title>{{ t('a') }} 4<br />{{ t('a4') }}</template>
            <template #icons>
                <div class="e-icon--rounded ">
                    <Icon name="fa6-solid:people-group" class="text-white" />
                </div>
                <div class="e-icon--rounded">
                    <Icon name="material-symbols:unknown-document-outline-rounded" class="text-white" />
                </div>
                <div class="e-icon--rounded ">
                    <Icon name="mdi:laptop-account" class="text-white" />
                </div>
                <Icon name="mdi:check-bold" />
                <div class="e-icon--rounded bg-slate-600">
                    <Icon name="game-icons:horse-head" class="text-white" />
                </div>
            </template>
        </ModulesStructure>
        <ModulesStructure>
            <template #title>{{ t('a') }} 5<br />{{ t('a5') }}</template>
            <template #icons>
                <div class="e-icon--rounded ">
                    <Icon name="fa6-solid:people-group" class="text-white" />
                </div>
                <div class="e-icon--rounded ">
                    <Icon name="heroicons-outline:chat-bubble-left-right" class="text-white" />
                </div>
                <div class="e-icon--rounded ">
                    <Icon name="carbon:group-presentation" class="text-white" />
                </div>
                <Icon name="mdi:check-bold" />
                <div class="e-icon--rounded">
                    <Icon name="game-icons:horse-head" class="text-white" />
                </div>
            </template>
        </ModulesStructure>
        <ModulesStructure>
            <template #title>{{ t('a') }} 6<br />{{ t('a6') }}</template>
            <template #icons>
                <div class="e-icon--rounded ">
                    <Icon name="fa6-solid:people-group" class="text-white" />
                </div>
                <div class="e-icon--rounded ">
                    <Icon name="game-icons:rolling-dices" class="text-white" />
                </div>
                <!-- <Icon name="mdi:check-bold" /> -->
                <div class="e-icon--rounded">
                    <Icon name="healthicons:group-discussion-meeting" class="text-white" />
                </div>
            </template>
        </ModulesStructure>
    </section>
</template>



<i18n lang="json">
    {
        "el": {
            "a": "Δραστηριότητα",
            "a1": "ΕΙΣΑΓΩΓΉ / ΠΑΡΟΥΣΊΑΣΗ ΤΩΝ ΠΙΟ ΚΟΙΝΏΝ ΜΎΘΩΝ",
            "a2": "ΕΠΙΛΟΓΉ ΜΎΘΟΥ",
            "a3": "ΚΑΤΆΡΡΙΨΗ ΜΎΘΟΥ",
            "a4": "ΠΑΡΟΥΣΊΑΣΗ ΑΠΌΔΕΙΞΗΣ ΣΕ ΚΑΤΆΛΛΗΛΗ ΜΟΡΦΉ",
            "a5": "ΣΥΖΉΤΗΣΗ ΑΠΌΔΕΙΞΗΣ ΚΑΙ ΔΙΑΤΎΠΩΣΗ ΣΥΜΠΕΡΑΣΜΆΤΩΝ",
            "a6": "ΛΉΨΗ ΚΟΙΝΩΝΙΚΟ- ΕΠΙΣΤΗΜΟΝΙΚΉΣ ΑΠΌΦΑΣΗΣ"
        },
        "en": {
            "a": "Activity",
            "a1": "OUTLINING THE MOST COMMON TOPIC-RELATED MYTHS",
            "a2": "CHOOSING A MYTH",
            "a3": "MYTHBUSTING",
            "a4": "GIVING EVIDENCE A RELEVANT FORMAT",
            "a5": "COMMUNICATING EVIDENCE AND CONCLUSIONS MADE",
            "a6": "SOCIO-SCIENTIFIC DECISION-MAKING"
        },
        "et": {
            "a": "Tegevus",
            "a1": "KÕIGE LEVINUMATE MÜÜTIDE TUTVUSTAMINE",
            "a2": "MÜÜDI VÄLJAVALIMINE",
            "a3": "MÜÜDIMURDMINE",
            "a4": "TÕESTUSMATERJALILE SOBIVA VORMI VÄLJATÖÖTAMINE",
            "a5": "TÕESTUSMATERJALIDE JA TEHTUD JÄRELDUSTE TUTVUSTAMINE",
            "a6": "SOTSIAAL-TEADUSLIKU OTSUSE LANGETAMINE"
        },
        "pt": {
            "a": "Atividade",
            "a1": "VIDEO INTRODUTÓRIO",
            "a2": "ESCOLHERO O MITO",
            "a3": "DESMISTIFICAR O MITO",
            "a4": "ATRIBUIR UM FORMATO RELEVANTE ÀS EVIDÊNCIAS",
            "a5": "APRESENTAR AS EVIDÊNCIAS E AS RESPETIVAS CONCLUSÕES",
            "a6": "DECISÕES SÓCIO-CIENTIFICAS"
        },
        "sv": {
            "a": "Aktivitet",
            "a1": "INTRO / ÖVERSIKT AV DE VANLIGASTE MYTERNA",
            "a2": "VAL AV EN MYT",
            "a3": "MOTBEVISA MYTEN",
            "a4": "PRESENTERA BEVIS I EN RELEVANT FORM",
            "a5": "KOMMUNICERA BEVIS OCH SLUTSATSER",
            "a6": "SOCIOVETENSKAPLIGA BESLUT"
        }
    }
</i18n>

