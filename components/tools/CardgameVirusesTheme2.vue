<template>
    <div>
        <h2 class="text-2xl mt-4">{{ t('storyCardsTitle') }}</h2>
        
        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        > 
            
            <!-- <ToolsCardgameCard v-for="(cardS, i) in tm('storyCards')" :key="`cardS${i}`"
                :image="rt(cardS.image)" :story="rt(cardS.story)" :label="`${t('storyCardsLabel')} ${i+1}`" border="border-blue-600"
                class="print:w-[70mm] print:h-[121mm]"
                :class="props.printMode ? 'w-[70mm] h-[121mm]' : ''"
            /> -->

            <ToolsCardgameCard v-for="(cardS, i) in tm('storyCards')" :key="`cardS${i}`"
                :title="rt(cardS.title)" :label="`${t('storyCardsLabel')} ${i+1}`" border="border-blue-500"
                :image="rt(cardS.image)" 
                :class="dynStyles"
            >
                <p 
                    class="text-[9pt] m-0 leading-tight text-justify 
                    px-[4mm] pb-[1mm] mt-[3mm]
                    print:font-sans" 
                    style="hyphens:auto;">
                    {{rt(cardS.story)}}
                </p>     
            </ToolsCardgameCard>

        </section>
    
        <h2 class="text-2xl print:break-before-page">{{ t('infoCardsTitle') }}</h2>

        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            <!-- <ToolsCardgameCard v-for="(cardI, i) in tm('infoCards')" :key="`cardI${i}`"
                :title="rt(cardI.title)" :story="rt(cardI.story)" :label="`${t('infoCardsLabel')} ${i+1}`"
                class="print:w-[70mm] print:h-[121mm]"
                :class="props.printMode ? 'w-[70mm] h-[121mm]' : ''"
            /> -->

            <ToolsCardgameCard v-for="(cardI, i) in tm('infoCards')" :key="`cardI${i}`"
                :title="rt(cardI.title)" :label="`${t('infoCardsLabel')} ${i+1}`" border="border-blue-500"
                :class="dynStyles"
            >
                <p 
                    class="text-[9pt] m-0 leading-tight text-justify 
                    px-[4mm] pb-[1mm] mt-[3mm]
                    print:font-sans" 
                    style="hyphens:auto;">
                    {{rt(cardI.story)}}
                </p>     
            </ToolsCardgameCard>
        </section>


        <h2 class="text-2xl print:break-before-page">{{ t('positionCardsTitle') }}</h2>

        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            <!-- <ToolsCardgameCard v-for="(cardP, i) in tm('positionCards')" :key="`cardP${i}`"
                :title="rt(cardP.title)" :story="rt(cardP.position)" border="border-amber-500"
                class="print:w-[70mm] print:h-[121mm]"
                :class="props.printMode ? 'w-[70mm] h-[121mm]' : ''"
            /> -->

            <ToolsCardgameCard v-for="(cardP, i) in tm('positionCards')" :key="`cardP${i}`"
                :title="rt(cardP.title)" 
                border="border-amber-500"
                :class="dynStyles"
            >
                <p 
                    class="text-[9pt] m-0 leading-tight text-justify 
                    px-[4mm] pb-[1mm] mt-[3mm]
                    print:font-sans" 
                    style="hyphens:auto;">
                    {{rt(cardP.position)}}
                </p>     
            </ToolsCardgameCard>
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
    const dynStyles = ref(computed(() => {
        if(props.printMode === true) {
            return "w-[70mm] h-[120mm] max-h-[120mm] min-h-[120mm] overflow-hidden";
        } else {
            return "print:w-[70mm] print:h-[120mm]";
        }
    }));
</script>


<i18n lang="json">
{
    "en": {
        "storyCardsTitle" : "Story cards",
        "infoCardsTitle" : "Info cards",
        "positionCardsTitle" : "Position cards",
        "storyCardsLabel" : "Story",
        "infoCardsLabel" : "Info",
        "storyCards" : [
            {
                "title": "",
                "image": "card_viruses_21.webp",
                "story": "Many people, some of them quite famous, were protesting against wearing masks in public spaces during the COVID-19 pandemic. The former baseball player Aubrey Huff (US) announced on Twitter that he would no longer wear a mask inside any business. “It’s unconstitutional to enforce,” he wrote. “Let’s make this bullshit stop now! Who’s with me?” His critics in social media had tried to shame him for “threatening the lives of millions of innocent people, yet those responses did nothing to persuade Huff to wear a mask. (theatlantic.com)"
            },
            {
                "title": "",
                "image": "card_viruses_22.webp",
                "story": "I am working as a pharmacist. Today came, a woman to me to buy a prescription drug while heavily coughing but not wearing a mask. This was meant against her pneumonia, as she said. After I reminded her of the mask-wearing requirement and offered her one, she said she just got a negative corona result and didn’t need any. I didn’t have enough courage to refuse her to sell the medication as she probably strongly required it. Still, I feel frustrated about people who do not understand that COVID is not the only airborne disease."
            },
            {
                "title": "",
                "image": "card_viruses_23.webp",
                "story": "I am a frequent gym visitor. Until now, I haven’t figured out how the mask-wearing rule in the gym could help prevent COVID. Namely, it is required to wear a mask in the locker room but not when in the shower or gym itself. It just does not make sense how wearing a mask in the locker room could help. Anyway, I am always healthy, and I think that I recover very quickly even if falling ill with the virus. Therefore, I don’t believe masks are of any use to me."
            },
            {
                "title": "",
                "image": "card_viruses_24.webp",
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
                "story": "To better filter both exhaling and inhaling air, an FFP2 or FFP3 mask (often called also respirator) should be used. FFP2 and FPP3 have a filtration efficiency for airborne particles (including those that contain the virus) of 92% and 98%, respectively. Both masks also have small inward leakage: ‹8% and ‹2%, respectively."
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
        ],
        "positionCards" : [
            {
                "title" : "Position 1",
                "position" : "In case of a pandemic outburst of upper respiratory viruses (e.g. COVID-19), the state establishes mask wearing compulsory in public places (public transportation, malls, medical institutions, mass events, etc.) for everyone — no matter whether people are vaccinated against the particular virus or not. The masks are provided for free, and penalties are imposed on people who refuse to wear masks. "
            },
            {
                "title" : "Position 2",
                "position" : "In case of a pandemic outburst of upper respiratory viruses (e.g. COVID-19), the state insists on wearing a mask in public places for only those not vaccinated nor lately recovered from the given viral disease. Also, people have to buy masks themselves. The other people should present respective documentation on demand for their vaccination or recovery. "
            },
            {
                "title" : "Position 3",
                "position" : "In case of a pandemic outburst of upper respiratory viruses (e.g. COVID-19), the state insists on wearing masks only on mass events exceeding a certain number of participants, a particular number depending on the nature of the event. "
            },
            {
                "title" : "Position 4",
                "position" : "In case of a pandemic outburst of upper respiratory viruses (e.g.  COVID-19), the state recommends wearing masks in public places. It does not compel its citizens; it allows them to choose responsibly, providing all necessary information and covering the costs."
            },
            {
                "title" : "Position 5",
                "position" : "Following the principle of freedom of choice, the state does not become involved in issues concerning wearing masks during pandemics. Citizens must get information for themselves (for example, via their doctors) and decide whether they want to wear masks. The state does not cover the cost of masks."
            }
        ]
    },









      "et": {
        "storyCardsTitle" : "Lookaardid",
        "infoCardsTitle" : "Infokaardid",
        "positionCardsTitle" : "Arvamuskaardid",
        "storyCardsLabel" : "Lugu",
        "infoCardsLabel" : "Info",
        "storyCards" : [
        {
                "title": "",
                "image": "card_viruses_21.webp",
                "story": "Ühiskonnas eksiteerib hulk inimesi, mõned neist küllalt kuulsad, kes os on häälekalt protestinud maskikandmise vastu avalikes kohtades COVID-19 pandeemia ajal. Näiteks USA endine korvpallur Aubrey Huff kuulutas Twitteris viiruse kõrghooajal, et enam kunagi ei kanna ta avalikes ruumides maski: “See on täielikult põhiseaduse vastane”, kirjutas ta. Lõpetame selle jama kohe ja praegu! Kes on minuga?”. Tema kriitikud sotsiaalmeedias proovisid teda häbistada teiste inimeste elude ohustamise eest, kuid see ei veennud Huff-i kuidagi, et too mõistlikumalt käituma hakkaks. (theatlantic.com)"
            },
            {
                "title": "",
                "image": "card_viruses_22.webp",
                "story": "Töötan farmatseudina apteegis. Täna tuli üks ilma maskita naine ostma retseptiravimit, ise samal ajal raskelt köhides (Märkus: tegemist oli COVID-19-sse nakatumise kõrghooajaga). Ta ütles, et ravimid on mõeldud kopsupõletiku vastu. Pärast seda, kui olin talle meelde tuletanud maski kandmise nõuet siseruumides ning seda ka pakkunud, ütles ta vaid, et sai just negatiivse koroonatesti tulemuse ning ei vaja seda.  Mul ei jätkunud piisavalt julgust talle retseptiravimeid müümata jätta, kuna ta ilmselt vajas neid väga. Siiski tunnen ennast taoliste inimeste tõttu frustreeritult, kuna COVID pole ainuke õhu kaudu leviv haigus."
            },
            {
                "title": "",
                "image": "card_viruses_23.webp",
                "story": "Olen sage jõusaali külastaja. Siiani pole ma suutnud välja mõelda, kuidas maskikandmine jõusaalis aitaks ära hoida nakatumist koroonasse. Nimelt nõutakse maski kandmist riietusruumis, kuid mitte duši all ega ka jõusaalis treenides. Seega ma ei saa aru, kuidas riietusruumis maski kandmisest oleks kasu. Niikuinii olen ma kogu aeg terve ning isegi kui jään viirusesse, siis põen kergelt. Seepärast ma ei arva, et maskidest oleks mulle miskit kasu."
            },
            {
                "title": "",
                "image": "card_viruses_24.webp",
                "story": "Töötan medõena kirurgia osakonnas ning kannan seetõttu maski igapäevaselt. Praeguseks hakkab mul sõna otseses mõttes paha nende inimeste jutu peale, kes väidavad, et mask neid lämmatab, mürgitab jne. Paljud meditsiinitöötajad on kandnud maske aastaid ning pole siiani lämbunud. Sina, kes sa pidevalt ja kõvahäälselt nõuad oma õigusi - kas sa võiksid ka korraks mõelda näiteks teistele - neile, kes on kõige kaitsetumad meie hulgas? Kui privilegeeritud on sinu elu, et maski kandmine on sinu jaoks kõige suurem ülekohus, mida sa eales oled tundnud?"
            }
        ],
        "infoCards" : [
            {
                "title": "",
                "story": "Maskikandmine võib olla ebamugav, kuid see ei tekita seepärast veel hapnikupuudust või süsihappegaasi mürgitust. Seda kinnitas näiteks uuring (Chan jt, 2020), kus vaadeldi 3-kihilise maski kandmise mõju vanemaealistele patsientidele. Uuring näitas, et maski kandmine ei vähendanud patsientidel hapnikusisaldust veres. Sarnaseid tulemusi on saadud ka märksa nooremate osalejatega uuringutes."
            },
            {
                "title": "",
                "story": "Meditsiinilistel põhjustel maskikandmisel on pikk ajalugu, mis ulatub tagasi keskaega. Sellest ajast on olemas pildimaterjali, kus meedikud tegelevad muhkkatku haigestunutega kandes samal ajal nokakujulisi maske. Maski nokaosa oli täidetud seejuures ravimtaimedega, vürtsidega ning kuivatatud õitega, et eemale hoida haisu, mis arvati põhjustavat katku. Ka kohustuslik maskikandmine pole ajaloos uus nähtus - hispaania gripiepideemia ajal 1918, oli maskikandmine mitmetes maaillma linnades kohustuslik.   Maskikandmine suurenes aga järsult 21. saj. alguses, kui puhkesid SARS-i ja linnugripi puhangud. (Matuschek, 2020)"
            },
            {
                "title": "",
                "story": "Maske peetakse võtmetähtsusega vahendiks, et vähendada nakkuse ülekandumist, kuid neid peaks käsitlema osana, mis pandeemia korral toimib tõhusalt koos teiste meetmetega, sh füüsiline distants, rahvarohkete kohtade vältimine, hea desinfitseerimine, suu ja nina katmine aevastamisel ja köhimisel jms. Igal juhul  kaitseb mask nii tervet inimest nakatumast kui haigel haigust levitamast."
            },
            {
                "title": "",
                "story": "Maske kantakse selleks, et kaitsta end viiruste ja bakterite eest. Mitmete erinevate maskide hulgas, on COVID-19 pandeemia ajal kõige enam kasutatud just kirurgilisi maske. Tavaliselt on need ühelt küljelt sinised, mis peaks jääma väliseks küljeks. Neid peetakse küllaltki tõhusaks koroonaviiruse levimise tõkestajaks kandjalt ülejäänud inimestele, kuid mitte nii tõhusaks kaitseks selle kandjale endale."
            },
            {
                "title": "",
                "story": "FFP2 ja FFP3 maskid (sageli kutsutakse neid ka respiraatoriteks) filtreerivad haigustekitajaid hästi nii sissehingatavast kui ka väljahingatavast õhust. Mõlemad filtreerivad õhu kaudu levivaid osakesi, sh neid, mis sisaldavad viirust vastavalt 92% ja 98%. Mõlemad lekivad vähe ka külgedelt: vastavalt ‹8% ja ‹2%."
            },
            {
                "title": "",
                "story": "Maskide tõhusust testitakse pidevalt spetsiaalsetes laborites ehk nn. ekspositsioonikambrites.  Nendes uuringutes täidab osakeste generaator kambri sama suurte aerosooliosakestega, mille abil viirus tavaliselt levib. Järgnevalt mõõdetakse osakeste kontsentratsiooni maski taga ja võrreldakse kontsentratsiooniga väljaspool seda ehk siis ekspositsioonikambris üldiselt."
            },
            {
                "title": "",
                "story": "Maskikandmise tõhusust tõendavad kõige veenvamalt epidemioloogilised andmed, mis on võetud  nö päris elust. Lyu ja Wehby (2020) poolt läbiviidud uurimus näitas, et koroonasse nakatumise kasv aeglustus kohe, kui 15 USA osariigis ning Columbia ringkonnas kehtestati maskikandmise kohustus."
            },
            {
                "title": "",
                "story": "Ühes eksperimendis, kus kasutati nn high-speed videosalvestamist, leiti, et osaleja tekitas sadu tilgakesi, mille läbimõõt jäi 20-500 mikromeetri vahele, kui see ütles lihtsa fraasi. Kui ta tegi seda aga läbi niisutatud riide, siis blokeeriti enamus piiskadest. Teises uuringus, kus inimestel oli kas gripp või mõni nn külmetushaigus, blokeeris kirurgiline mask oluliselt aerosoolina levivate viiruseosakeste hulka."
            },
            {
                "title": "",
                "story": "Ühes uurimuses (Leffler jt. 2020) vaadeldi koroonaga seotud surmajuhtumite statistikat kokku 198 riigis. Selle tulemusena leiti, et nendes riikides, kus maskikandmine oli kas sotsiaalseks normiks või kus ametlikult nõuti pandeemia ajal maski kandmist, oli surmajuhtumite määr tunduvalt väiksem muudest  riikidest."
            },
            {
                "title": "",
                "story": "Juhtumiuuringud näitavad, et maskid kaitsevad viiruse ülekandumist ka nö kõrge riskiga olukordades. Ühes juhtumiuuringus (Schwartz jt, 2020) sõitis mees Hiinast Torontosse ja testiti alles seejärel COVID-19 suhtes positiivseks. Tal oli ka kuiv köha, aga ta kandis ühtlasi maski lennu ajal. Kõik kõige ligemal istunud 25 inimest lennukis, andsid hiljem COVID-19 suhtes negatiivse testi.  Teises juhtumis, oli kahel koroonapositiivsel Missouri juuksuril kahe peale kokku 140 klienti. Kuna mõlemad osapooled kandsid maski, siis ei andnud keegi klientidest hiljem positiivset koroonatesti. Siiski tuleb nentida, et erinevad viirused ja sama viiruse erinevad tüved omavad erinevat makatumise määra."
            },
            {
                "title": "",
                "story": "Ühes uuringus ennustasid teadlased loodud mudelite põhjal, et kui 80% inimestest kannaksid maske, oleks sellest rohkem kasu, kui riikide täielikust nö lukkupanekust. Isegi kui sa elad kogukonnas, kus vaid vähesed kannavad maske pandeemia ajal, vähendab selle kandmine sinu enda viirusesse nakatumise tõenäosust oluliselt."
            },
            {
                "title": "",
                "story": "FFP2 ja FFP3 tüüpi maskid (respiraatorid, Euroopa tähistus) suudavad filtreerida välja 95% aerosooliosakestest läbimõõduga 0.3 μm. Sarnased tulemused on saadud ka N95 maskidega (USA tähistus) (Tcharkhtchi, 2021).  Hingamisteedest väljapaisatavad piisad, mis kannavad COVID-19 viirust, jäävad mõõtmetesse  5-10 μm ning COVID-19 ise 0,1-0,5 μm."
            }
        ],
        "positionCards" : [
            {
                "title" : "Seisukoht 1",
                "position" : "Ülemiste hingamisteede nakkushaiguse pandeemia korral kehtestab riik kohustusliku maskikandmise avalikes kohtades (ühistransport, kaubakeskused, meditsiiniasutused, massiüritused jms.). Pole tähtis, kas inimesed on vaktsineeritud leviva viirushaiguse suhtes või mitte. Maske jagatakse igal pool tasuta ning karistused on ette nähtud nendele, kes keelduvad maske kandmast."
            },
            {
                "title" : "Seisukoht 2",
                "position" : "Ülemiste hingamisteede nakkushaiguse pandeemia korral kehtestab riik maskikandmise kohutuse vaid neile, kes pole viirustekitaja suhtes vaktsineeritud ega ole ka hiljuti haigust läbi põdenud. Need inimesed peavad maskid alati ostma ise. Ülejäänud peavad vajadusel esitama dokumendi, mis tõestab vaktsineeritust või läbipõdemist haiguse suhtes."
            },
            {
                "title" : "Seisukoht 3",
                "position" : "Ülemiste hingamisteede nakkushaiguse pandeemia korral nõuab riik maskide kandmist vaid massiüritustel, mis ületab teatud arvu osalejaid. Piirarv sõltub ühtlasi ürituse iseloomust (sise või välisüritus jms.)."
            },
            {
                "title" : "Seisukoht 4",
                "position" : "Ülemiste hingamisteede nakkushaiguse pandeemia korral riik ei nõua, küll aga soovitab kanda maske avalikes kohtades. Riik laseb inimestel enestel valida, kas kanda maski või mitte lootes inimeste eneste vastutustunde peale. Riik kompenseerib maskidele kuluva rahasumma ning varustab inimesi asjakohase infoga."
            },
            {
                "title" : "Seisukoht 5",
                "position" : "Järgides täieliku valikuvabaduse põhimõtet, ei sekku riik pandeemia korra maskikandmise küsimustesse. Inimesed peavad ise otsima üles vajaliku info (näiteks oma perearstilt) ning otsustama, kas kanda sel puhul maski või mitte. Riik ei kompenseeri kandjatele ka kuidagi maskide maksumust."
            }
        ]
      },








      "el": {
        "storyCardsTitle" : "Story cards EL",
        "infoCardsTitle" : "Info cards EL",
        "positionCardsTitle" : "Position cards EL",
        "storyCardsLabel" : "Ιστορία",
        "infoCardsLabel" : "Πληροφορία",
        "storyCards" : [
        {
                "title": "",
                "image": "card_viruses_21.webp",
                "story": "Μερικοί άνθρωποι που είναι αρκετά διάσημοι διαμαρτύρονταν για τη χρήση μάσκας σε δημόσιους χώρους κατά τη διάρκεια της πανδημίας COVID-19. Ο πρώην παίκτης του μπέιζμπολ Aubrey Huff (ΗΠΑ) ανακοίνωσε στο Twitter ότι δεν επρόκειτο πλέον να φοράει μάσκα στο εσωτερικό χώρο καμίας επιχείρησης. «Είναι αντισυνταγματικό να επιβάλλεται», έγραψε. Ας σταματήσει αυτή η βλακεία τώρα! Ποιος συμφωνεί μαζί μου?. Οι κρητικές του στα μέσα κοινωνικής δικτύωσης προσπάθησαν να τον ντροπιάσουν επειδή «απειλούσε τις ζωές εκατομμυρίων αθώων ανθρώπων, ωστόσο αυτές οι απαντήσεις δεν έκαναν τίποτα για να πείσουν τον Huff να φορέσει μάσκα. (theatlantic.com)"
            },
            {
                "title": "",
                "image": "card_viruses_22.webp",
                "story": "Εργάζομαι ως φαρμακοποιός. Σήμερα ήρθε μια γυναίκα σε μένα για να αγοράσει ένα συνταγογραφημένο φάρμακο, ενώ έβηχε πολύ, αλλά δεν φορούσε μάσκα. Αυτό οφείλεται λόγω της πνευμονίας που είχε, όπως είπε. Αφού της ανάφερα ότι είναι υποχρεωμένη να φοράει μάσκα και της πρόσφερα μια είπε ότι μόλις πείρε αρνητικό αποτέλεσμα κορωνοϊού και δεν την χρειάζεται. Δεν είχα αρκετό θάρρος αυτή τη στιγμή να της αρνηθώ την πώληση του φαρμάκου, αφού μάλλον το χρειαζόταν πολύ. Ωστόσο, αισθάνομαι πραγματικά απογοητευμένη αυτή τη στιγμή για τους ανθρώπους που δεν καταλαβαίνουν ότι ο COVID δεν είναι η μόνη ασθένεια που μεταδίδεται μέσω του αέρα."
            },
            {
                "title": "",
                "image": "card_viruses_23.webp",
                "story": "Είμαι συχνός επισκέπτης του γυμναστηρίου. Μέχρι τώρα, δεν έχω καταλάβει πώς ο κανόνας για την χρήση της μάσκας στο γυμναστήριο θα μπορούσε να βοηθήσει στην πρόληψη του COVID. Δηλαδή, απαιτείται να φοράμε την μάσκα στα αποδυτήρια, αλλά όχι όταν κάνουμε ντους  ή όταν γυμναζόμαστε. Απλώς δεν έχει νόημα πώς θα μπορούσε να βοηθήσει η χρήση της μάσκας στα αποδυτήρια. Ούτως ή άλλως, είμαι πάντα υγιής και νομίζω ότι ακόμα κι αν αρρωστήσω από τον ιό θα αναρρώσω πολύ γρήγορα. Ως εκ τούτου, δεν νομίζω ότι οι μάσκες με ωφελούν."
            },
            {
                "title": "",
                "image": "card_viruses_24.webp",
                "story": "Εργάζομαι ως νοσοκόμα σε χειρουργικό τμήμα και φοράω μάσκα καθημερινά. Έχω βαρεθεί να ακούω ισχυρισμούς όπως το ότι οι μάσκες είναι αποπνικτικές ή προκαλούν τοξικότητα από το διοξείδιο του άνθρακα ή πόσο περίπλοκο είναι να φοράς μάσκα όταν φοράς γυαλιά και ούτω καθεξής. Οι ιατροί την χρησιμοποιούν εδώ και χρόνια και είναι μια χαρά. Όσοι συζητάτε για τα δικαιώματά σας όλη την ώρα, θα μπορούσατε να σκεφτείτε για λίγο και τους πιο ευάλωτους που βρίσκονται ανάμεσά μας. Πόσο προνομιακή είναι η ζωή σας όπου το να φοράτε μάσκα είναι η μεγαλύτερη καταπίεση που έχετε νιώσει ποτέ;"
            }
        ],
        "infoCards" : [
            {
                "title": "",
                "story": "Η παρατεταμένη χρήση της ιατρικής μάσκας μπορεί να είναι άβολη. Ωστόσο, δεν οδηγεί σε δηλητηρίαση από CO2 ούτε σε έλλειψη οξυγόνου. Σε μια μικρή έρευνα, φάνηκε ότι η χρήση τριών στρώσεων μη ιατρικής μάσκας δεν συσχετίζετε με μείωση του ποσοστού οξυγόνου στους μεγαλύτερους συμμετέχοντες. Επίσης, έχουν υπάρξει αρκετές άλλες μελέτες που επιβεβαιώνουν αυτό το εύρημα και σε πολύ νεότερους συμμετέχοντες. Αυτά τα ευρήματα δεν υποστηρίζουν τους ισχυρισμούς ότι η χρήση μη ιατρικής μάσκας σε κοινωνικά περιβάλλοντα δεν είναι ασφαλής."
            },
            {
                "title": "",
                "story": "Η χρήση ιατρικής μάσκας έχει ιστορία, ξεκινώντας από τον Μεσαίωνα. Υπάρχουν φωτογραφίες ιατρών που θεραπεύουν ασθενείς που πάσχουν από τη βουβωνική πανώλη και φορούν μάσκες σαν ράμφος. Το ράμφος είχε μέσα βότανα, μπαχαρικά και αποξηραμένα λουλούδια για να αποκρούσουν τις οσμές που πίστευαν ότι μεταδίδει την πανούκλα. Στην ιστορία ακόμη και η υποχρεωτική χρήση της μάσκας δεν είναι κάτι καινούργιο - κατά τη διάρκεια της επιδημίας της ισπανικής γρίπης το 1918, πόλεις σε όλο τον κόσμο εξέδωσαν υποχρεωτικές εντολές χρήσης της μάσκας. Ωστόσο, η χρήση της μάσκας εκτοξεύτηκε στα ύψη στα πρώτα χρόνια του 21ου αιώνα με το ξέσπασμα του SARS και της γρίπης των πτηνών. Πηγή."
            },
            {
                "title": "",
                "story": "Οι μάσκες είναι ένα βασικό μέτρο για την μείωση της μετάδοσης και σώζει ζωές. Οι μάσκες θα πρέπει να χρησιμοποιούνται ως μέρος μιας ολοκληρωμένης προσέγγισης «Κάντε τα όλα!», συμπεριλαμβανομένου της αποφυγής πολυσύχναστων, κλειστών και μικρών χωρών , καλό αερισμό, καθαρισμός χεριών, κάλυψη φτερνίσματος και βήχα, διατήρηση αποστάσεων και πολλά άλλα. Ανάλογα με την περίσταση, οι μάσκες μπορούν να χρησιμοποιηθούν είτε για την προστασία υγιών ατόμων είτε για την πρόληψη της περαιτέρω μετάδοσης."
            },
            {
                "title": "",
                "story": "Οι μάσκες συχνά χρησιμοποιούνται για την προστασία κατά των ιών και βακτηρίων. Είχαν γίνει ιδιαίτερα συχνές στην προστασία κατά του ιού SARS-CoV-2. Ανάμεσα από διάφορους τύπους μάσκας, η ιατρική μάσκα αποτελεί την πιο κοινόχρηστη κατά της πανδημίας του COVID-19. Μια τέτοια μάσκα συνήθως είναι μπλε από την μια πλευρά που χρησιμοποιείται ως η εξωτερική. Ο κύριος σκοπός της χρήσης αυτής της μάσκας ήταν να προστατεύσει τους ασθενείς από την πιθανή επαφή με βακτήρια ή ιούς που παρουσιάζονταν ανά εποχή. Καταφέρνουν να μειώσουν την εξάπλωση του κορωνοϊoύ μέσου του αέρα όμως δεν αποτελούν τόσο αποτελεσματικό τρόπο προστασίας αυτού που την φορά από τον ιό."
            },
            {
                "title": "",
                "story": "Για καλύτερο φιλτράρισμα τόσο του εισπνεόμενου αλλά και εκπνεόμενου αέρα η FFP2 ή FFP3 μάσκα (συχνά αποκαλούμενες και ως αναπνευστήρες) πρέπει να χρησιμοποιούνται. Η FFP2 και η FPP3  έχουν αποτελεσματικότητα στο φιλτράρισμα σωματιδίων που αιωρούνται ( περιλαμβάνοντας αυτά που περιέχουν τον ιό) 92% και 98%, αντίστοιχα. Και οι δύο μάσκες έχουν μικρό μικρή διαρροή προς τα μέσα: ‹8% και ‹2%, αντίστοιχα."
            },
            {
                "title": "",
                "story": "Η αποτελεσματικότητα των μασκών έχει δοκιμαστεί σε ειδικά εργαστήρια, π.χ. στον θάλαμο έκθεσης. Σε αυτές τις μελέτες, μια γεννήτρια σωματιδίων γεμίζει τον θάλαμο έκθεσης με μικρά σωματίδια, που μεταφέρουν τους ιούς. Στη συνέχεια μετρούνται οι συγκεντρώσεις σωματιδίων πίσω από τις μάσκες και συγκρίνονται με τη συγκέντρωση στη γενική ατμόσφαιρα του θαλάμου έκθεσης."
            },
            {
                "title": "",
                "story": "Η ισχυρότερη απόδειξη της αποτελεσματικότητας της χρήσης της μάσκας βασίζεται σε επιδημιολογικά δεδομένα από πραγματικές καταστάσεις. Σύμφωνα με μια μελέτη που δημοσιεύτηκε στο Health Affairs το 2020, ο ημερήσιος ρυθμός ανάπτυξης του COVID-19 βρέθηκε να επιβραδύνεται μετά από εντολές χρήσης της μάσκας σε 15 πολιτείες και την Περιφέρεια της Κολούμπια στις ΗΠΑ."
            },
            {
                "title": "",
                "story": "Ένα πείραμα χρησιμοποιώντας βίντεο υψηλής ταχύτητας διαπίστωσε ότι εκατοντάδες σταγονίδια που κυμαίνονταν από 20 έως 500 μικρόμετρα δημιουργούνταν όταν έλεγαν μια απλή φράση, αλλά σχεδόν όλα αυτά τα σταγονίδια μπλοκάρονταν όταν το στόμα καλυπτόταν από ένα υγρό πανί. Μια άλλη μελέτη σε άτομα που είχαν γρίπη ή κοινό κρυολόγημα διαπίστωσε ότι η χρήση χειρουργικής μάσκας μείωσε σημαντικά την ποσότητα αυτών των αναπνευστικών ιών που εκπέμπονται σε σταγονίδια. (Πηγή)"
            },
            {
                "title": "",
                "story": "Μια πρόσφατη μελέτη εξέτασε τους θανάτους από κορωνοϊό σε 198 χώρες και διαπίστωσε ότι εκείνοι με πολιτιστικούς κανόνες ή κυβερνητικές πολιτικές που είναι υπέρ της χρήσης της μάσκας είχαν χαμηλότερα ποσοστά θανάτου.(Πηγή)"
            },
            {
                "title": "",
                "story": "Οι αναφορές περιστατικών υποδηλώνουν ότι οι μάσκες μπορούν να αποτρέψουν τη μετάδοση σε σενάρια υψηλού κινδύνου. Σε μια περίπτωση, ένας άνδρας πέταξε από την Κίνα στο Τορόντο και στη συνέχεια βρέθηκε θετικός στον COVID-19. Είχε ξηρό βήχα και φορούσε μάσκα στην πτήση και τα 25 άτομα που ήταν πιο κοντά του στην πτήση βρέθηκαν αρνητικά για COVID-19. Σε μια άλλη περίπτωση, στα τέλη Μαΐου, δύο κομμωτές στο Μιζούρι είχαν στενή επαφή με 140 πελάτες ενώ ήταν άρρωστοι με COVID-19. Όλοι φορούσαν μάσκα και κανένας από τους πελάτες δεν βρέθηκε θετικός. (Πηγή) Ωστόσο, πρέπει να παραδεχτούμε ότι διαφορετικοί ιοί και στελέχη του ίδιου ιού έχουν διαφορετικά ποσοστά μόλυνσης."
            },
            {
                "title": "",
                "story": "Σε μια προσομοίωση, οι ερευνητές πρόβλεψαν ότι το 80% του πληθυσμού που φορούσε μάσκες θα έκανε περισσότερα για να μειώσει την εξάπλωση του COVID-19 από ένα αυστηρό lockdown. Ακόμα κι αν ζείτε σε μια κοινότητα όπου λίγοι άνθρωποι φορούν μάσκες, θα μειώσετε τις πιθανότητες να κολλήσετε τον ιό φορώντας μια. (Πηγή)"
            },
            {
                "title": "",
                "story": "Μάσκες τύπου FFP2 και FFP3 (αναπνευστήρες, ευρωπαϊκό σύστημα) μπορούν να φιλτράρουν τουλάχιστον το 95% των αερολυμάτων με μέγεθος 0,3 μm. Παρόμοιο ποσοστό έχουν δείξει και οι μάσκες N95 (σύστημα ΗΠΑ) (πηγή). Τα αναπνευστικά σταγονίδια που περιέχουν COVID-19 έχουν μέγεθος μεταξύ 5-10 μm και το ίδιο το COVID-19 0,1-0,5 μm (Πηγή)."
            }
        ],
        "positionCards" : [
            {
                "title" : "Θέση 1",
                "position" : "Σε περίπτωση πανδημικής έκρηξης από ιούς του ανώτερου αναπνευστικού (π.χ. COVID-19), η πολιτεία καθιερώνει υποχρεωτική την χρήση μάσκας σε δημόσιους χώρους (δημόσιες συγκοινωνίες, εμπορικά κέντρα, ιατρικά ιδρύματα, μαζικές εκδηλώσεις κ.λπ.), για όλους. Ανεξάρτητα από το αν οι άνθρωποι είναι εμβολιασμένοι κατά του συγκεκριμένου ιού ή όχι. Οι μάσκες παρέχονται δωρεάν και επιβάλλονται κυρώσεις σε άτομα που αρνούνται να φορέσουν."
            },
            {
                "title" : "Θέση 2",
                "position" : "Σε περίπτωση πανδημικής έκρηξης από ιούς του ανώτερου αναπνευστικού συστήματος (π.χ. COVID-19), η πολιτεία αναμένει να φορούν μάσκα σε δημόσιους χώρους μόνο όσοι δεν έχουν εμβολιαστεί ούτε έχουν αναρρώσει πρόσφατα από τη δεδομένη ιογενή νόσο. Επίσης, οι άνθρωποι πρέπει να αγοράζουν οι ίδιοι μάσκες. Τα υπόλοιπα άτομα θα πρέπει να παρουσιάσουν αντίστοιχα έγγραφα που να αποδεικνύουν τον εμβολιασμό ή την ανάρρωσή τους όταν τους ζητηθούν."
            },
            {
                "title" : "Θέση 3",
                "position" : "Σε περίπτωση πανδημικής έκρηξης από ιούς του ανώτερου αναπνευστικού (π.χ. COVID-19), το κράτος αναμένει να φοριέται η μάσκα μόνο σε μαζικές εκδηλώσεις που υπερβαίνουν συγκεκριμένο αριθμό συμμετεχόντων, συγκεκριμένο αριθμό ανάλογα με τη φύση της εκδήλωσης."
            },
            {
                "title" : "Θέση 4",
                "position" : "Σε περίπτωση πανδημικής έκρηξης  από ιούς του ανώτερου αναπνευστικού (π.χ. COVID-19), η πολιτεία συνιστά τη χρήση μάσκας σε δημόσιους χώρους. Δεν υποχρεώνει τους πολίτες της, τους επιτρέπει να επιλέγουν υπεύθυνα, παρέχοντάς τους όλες τις απαραίτητες πληροφορίες και καλύπτοντας το κόστος."
            },
            {
                "title" : "Θέση 5",
                "position" : "Ακολουθώντας την αρχή της ελεύθερης βούλησης το κράτος δεν εμπλέκεται σε θέματα που αφορούν τη χρήση μάσκας σε πανδημίες. Οι πολίτες πρέπει να λαμβάνουν πληροφορίες μόνοι τους (για παράδειγμα, μέσω των γιατρών τους) και να αποφασίζουν εάν θέλουν να φορούν μάσκες. Το κράτος δεν καλύπτει το κόστος για τις μάσκες."
            }
        ]
      },




    


      "pt": {
        "storyCardsTitle" : "Story cards PT",
        "infoCardsTitle" : "Info cards PT",
        "positionCardsTitle" : "Position cards PT",
        "storyCardsLabel" : "História",
        "infoCardsLabel" : "Info",
        "storyCards" : [
            {
                "title": "",
                "image": "card_viruses_21.webp",
                "story": "Muitas pessoas, algumas delas bastante famosas, protestaram contra o uso de máscaras em espaços públicos durante a pandemia COVID-19. O ex-jogador de basebol Aubrey Huff (EUA) anunciou no Twitter que não iria usar uma máscara em qualquer situação. “É inconstitucional impor”, escreveu. “Vamos fazer esta treta parar agora! Quem está comigo?” Os seus críticos nas redes sociais tentaram envergonhá-lo por “ameaçar a vida de milhões de pessoas inocentes”, mas essas respostas não fizeram nada para persuadir Huff a usar uma máscara. (theatlantic.com)"
            },
            {
                "title": "",
                "image": "card_viruses_22.webp",
                "story": "Estou a trabalhar como farmacêutico. Chegou hoje uma mulher para comprar um medicamento prescrito enquanto tossia fortemente, mas não usava uma máscara. Isto foi resultante da pneumonia dela, como ela disse. Depois de lhe ter lembrado o requisito de usar máscara e lhe ter oferecido uma, ela disse que tinha um resultado negativo de corona e não precisava de nenhuma. Não tive coragem de recusar a venda da medicação, como provavelmente exigia. Ainda assim, sinto-me frustrado com as pessoas que não entendem que o COVID não é a única doença transmitida pelo ar."
            },
            {
                "title": "",
                "image": "card_viruses_23.webp",
                "story": "Sou um visitante frequente do ginásio. Até agora, ainda não descobri como a regra do uso de máscaras no ginásio pode ajudar a prevenir o COVID. Ou seja, é necessário usar uma máscara no balneário, mas não quando está no chuveiro ou no próprio ginásio. Não faz sentido como usar uma máscara no balneário pode ajudar. De qualquer forma, estou sempre saudável, e acho que me recupero muito rapidamente, mesmo que adoeça com o vírus. Portanto, não acredito que as máscaras me sejam úteis."
            },
            {
                "title": "",
                "image": "card_viruses_24.webp",
                "story": "Sou enfermeira num departamento de cirurgia e uso uma máscara diariamente. Os médicos usam-na há anos e ainda não estão a sufocar. Por esta altura, já fiquei doente com alegações sobre como as máscaras sufocam ou induzem a intoxicação de dióxido de carbono, como é complicado pôr máscaras quando se usam óculos, e assim por diante. Aqueles que são muito barulhentos e falam dos seus direitos a toda a hora poderiam pensar por um momento sobre os mais vulneráveis entre nós. Quão privilegiada é a tua vida onde usar uma máscara é a maior forma de opressão que já sentiste?"
            }
        ],
        "infoCards" : [
            {
                "title": "",
                "story": "O uso prolongado de máscaras médicas pode ser desconfortável. No entanto, não conduz à intoxicação de CO2 ou à carência de oxigénio. Num pequeno estudo, usar uma máscara facial não médica de 3 camadas não foi associado a um declínio na saturação de oxigénio em participantes mais velhos. Além disso, vários outros estudos confirmaram esta descoberta sobre os participantes muito mais jovens. Estes resultados não suportam alegações de que usar máscaras faciais não médicas em ambientes comunitários é inseguro."
            },
            {
                "title": "",
                "story": "O uso de máscaras médicas tem uma longa história a partir da época medieval. Há fotos de profissionais médicos a tratar pacientes com peste bubónica e a usar máscaras de bico. O bico foi recheado com ervas, especiarias e flores secas para afastar os odores que se acreditavam espalhar a praga. Não é novidade na história mesmo a máscara obrigatória - durante a epidemia de gripe espanhola em 1918, cidades de todo o mundo aprovaram ordens obrigatórias de uso de máscara. O uso de máscaras disparou nos primeiros anos do século XXI com o surto de SARS e gripe aviária."
            },
            {
                "title": "",
                "story": "As máscaras são uma medida vital para suprimir a transmissão e salvar vidas. As máscaras devem ser usadas como parte de uma abordagem abrangente “Faça tudo!”, incluindo distanciamento físico, evitando configurações de proximidade, fechadas e de contacto próximo, boa ventilação, de limpeza das mãos, proteção em caso de espirros e tosse, e muito mais. Dependendo do tipo, as máscaras podem ser usadas para proteção de pessoas saudáveis ou para evitar a transmissão."
            },
            {
                "title": "",
                "story": "As máscaras são frequentemente usadas para proteger contra vírus e bactérias. Tinham-se generalizado no sentido de proteção contra o vírus SARS-CoV-2. Entre diferentes tipos de máscaras, as máscaras faciais cirúrgicas estão entre as coberturas faciais mais usadas na pandemia COVID-19. Tipicamente, são de cor azul de um lado, que deve ser mantido como uma camada exterior. O principal objetivo das máscaras cirúrgicas é proteger os pacientes do contacto potencial com bactérias e vírus exalados pelo utilizador. As máscaras impedem a propagação do coronavírus através do ar, mas são meios menos eficazes de proteger o utilizador contra o vírus."
            },
            {
                "title": "",
                "story": "Para filtrar melhor, tanto o ar de exalação como a inalação, deve ser utilizada uma máscara FFP2 ou FFP3 (muitas vezes chamada também de respirador). FFP2 e FPP3 têm uma eficiência de filtragem para partículas transmitidas pelo ar (incluindo as que contêm o vírus) de 92% e 98%, respetivamente. Ambas as máscaras também têm pequenas fugas interiores: ‹8% e ‹2%, respetivamente."
            },
            {
                "title": "",
                "story": "A eficiência das máscaras foi testada em laboratórios especiais, por exemplo, na câmara de exposição. Nesses estudos, um gerador de partículas enche a câmara de exposição com pequenas partículas, semelhantes aos aerossóis que transportam os vírus. Posteriormente, as concentrações de partículas por trás das máscaras são medidas e comparadas com a atenção na atmosfera geral da câmara de exposição."
            },
            {
                "title": "",
                "story": "A evidência mais substancial da eficiência do uso de máscaras baseia-se em dados epidemiológicos de situações reais. De acordo com um estudo publicado na Health Affairs em 2020, a taxa de crescimento diário da covid-19 abrandou, após a obrigatoriedade do uso de máscara em 15 estados e no distrito de Columbia, nos EUA."
            },
            {
                "title": "",
                "story": "Uma experiência de vídeo de alta velocidade encontrou centenas de gotículas que variavam entre 20 e 500 micrómetros quando se dizia uma frase simples. No entanto, quase todas estas gotículas foram bloqueadas quando uma toalha húmida cobriu a boca. Um outro estudo de pessoas que tinham gripe ou constipação comum descobriu que usar uma máscara cirúrgica reduziu significativamente a quantidade destes vírus respiratórios emitidos em gotículas e aerossóis."
            },
            {
                "title": "",
                "story": "Um recente estudo analisou as mortes de coronavírus em 198 países e descobriu que aqueles com normas culturais ou políticas governamentais que favorecem o uso de máscaras tinham taxas de morte mais baixas."
            },
            {
                "title": "",
                "story": "Relatórios de casos sugerem que máscaras podem impedir a transmissão em cenários de alto risco. Num dos casos, um homem voou da China para Toronto e deu positivo para a COVID-19. Tinha uma tosse seca e usava uma máscara no voo, e todas as 25 pessoas mais próximas dele deram negativo para o COVID-19. Noutro caso, no final de maio, dois cabeleireiros no Missouri tiveram um contacto próximo com 140 clientes enquanto estavam doentes com o COVID-19. Todos usavam uma máscara, e nenhum dos clientes deu positivo. Ainda assim, deve ser admitido que diferentes vírus e estirpes do mesmo vírus têm diferentes taxas de infeção."
            },
            {
                "title": "",
                "story": "Numa simulação, os investigadores previram que 80% da população que usa máscaras faria mais para reduzir a propagação do COVID-19 do que um bloqueio rigoroso. Mesmo que vivas numa comunidade onde poucas pessoas usam máscaras, ainda reduzirás as hipóteses de apanhar o vírus usando uma máscara."
            },
            {
                "title": "",
                "story": "Máscaras tipos FFP2 e FFP3 (respiradores, sistema europeu) pode filtrar pelo menos 95% dos aerossóis em torno de 0,3 μm. Números semelhantes registados com máscaras N95 (sistema dos EUA) (fonte). As gotículas respiratórias que contêm COVID-19 têm medidas de 5-10 μm e a própria COVID-19 0,1-0,5 μm."
            }
        ],
        "positionCards" : [
            {
                "title" : "Posição 1",
                "position" : "Em caso de explosão pandemia de vírus respiratórios superiores (por exemplo, COVID-19), o Estado estabelece máscara com uso obrigatório em locais públicos (transportes públicos, centros comerciais, instituições médicas, eventos em massa, etc.) para todos — independentemente de as pessoas serem vacinadas contra o vírus em particular ou não. As máscaras são fornecidas gratuitamente, e as penalizações são impostas às pessoas que se recusam a usar máscaras."
            },
            {
                "title" : "Posição 2",
                "position" : "Em caso de explosão pandemia de vírus respiratórios superiores (por exemplo, COVID-19), o Estado insiste em usar uma máscara em locais públicos apenas para aqueles que não foram vacinados ou que não foram recentemente recuperados da doença viral. Além disso, as pessoas têm de comprar máscaras. As outras pessoas devem apresentar a respetiva documentação a pedido da sua vacinação ou recuperação."
            },
            {
                "title" : "Posição 3",
                "position" : "Em caso de explosão pandemia de vírus respiratórios superiores (por exemplo, COVID-19), o Estado insiste em usar máscaras apenas em eventos em massa que excedam um determinado número de participantes, um número particular dependendo da natureza do evento."
            },
            {
                "title" : "Posição 4",
                "position" : "Em caso de explosão pandemia de vírus respiratórios superiores (por exemplo. COVID-19), o Estado recomenda o uso de máscaras em locais públicos. Não obriga os seus cidadãos; permite-lhes escolher de forma responsável, fornecendo-lhes todas as informações necessárias e cobrindo os custos."
            },
            {
                "title" : "Posição 5",
                "position" : "Seguindo o princípio da liberdade de escolha, o Estado não se envolve em questões relacionadas com o uso de máscaras durante as pandemias. Os cidadãos devem obter informações para si próprios (por exemplo, através dos seus médicos) e decidir se querem usar máscaras. O Estado não cobre o custo das máscaras."
            }
        ]
    },








      "sv": {
        "storyCardsTitle" : "Story cards SV",
        "infoCardsTitle" : "Info cards SV",
        "positionCardsTitle" : "Position cards SV",
        "storyCardsLabel" : "Berättelse",
        "infoCardsLabel" : "Info",
        "storyCards" : [
        {
                "title": "",
                "image": "card_viruses_21.webp",
                "story": "Det finns många människor, några av dem ganska kända, som har protesterat mot att bära munskydd i offentliga utrymmen under COVID-19-pandemier. Den före detta basebollspelaren Aubrey Huff (USA) meddelade på Twitter att han inte längre kommer att bära en mask i något som helst sammanhang. “Det strider mot grundlagen att genomdriva”, skrev han. “Låt oss få det här skitsnacket att sluta nu! Vem är med mig?” Hans kritiker i sociala medier hade försökt att skämma ut honom för att han “hotade livet på miljontals oskyldiga människor”, men dessa svar kunde inte övertala Huff att bära en mask. (theatlantic.com)"
            },
            {
                "title": "",
                "image": "card_viruses_22.webp",
                "story": "Jag arbetar som farmaceut. Idag kom en kvinna till mig för att köpa ett receptbelagt läkemedel, medan hon kraftigt hostade, men inte bar munskydd. Detta var menat mot hennes lunginflammation sade hon. Efter att jag uppmärksammade henne på kravet att bära mask och erbjöd henne en, sade hon att hon precis fått ett negativt coronaresultat och inte behövde någon. Jag hade inte tillräckligt med mod att vägra sälja medicinen till henne eftersom hon antagligen var i stort behov av den. Ändå känner jag mig riktigt frustrerad just nu över människor som inte förstår att covid inte är den enda luftburna sjukdomen."
            },
            {
                "title": "",
                "image": "card_viruses_23.webp",
                "story": "Jag är en frekvent gymbesökare. Hittills har jag inte förstått, hur regeln om att bära mask i gymmet kan hjälpa till att förebygga covid. Det är nämligen obligatoriskt att bära mask i omklädningsrummet, men inte när man duschar eller i själva gymmet. Det är helt enkelt inte vettigt hur det kan hjälpa att bära mask i omklädningsrummet. Hur som helst, jag är alltid frisk och jag tror att även om jag får en virussjukdom så återhämtar jag mig väldigt snabbt. Därför tror jag inte att bärandet av mask är till någon nytta för mig."
            },
            {
                "title": "",
                "image": "card_viruses_24.webp",
                "story": "Jag arbetar som sjuksköterska på en operationsavdelning och bär mask till vardags. Vid det här laget har jag bokstavligen blivit sjuk av påståenden om hur bärandet av mask orsakar andfåddhet, syrebrist, framkallar koldioxidförgiftning eller hur komplicerat det är att sätta på en mask när man bär glasögon och så vidare. Läkare har använt det i flera år och har fortfarande inte fått några men av det. De av er som pratar om sina rättigheter hela tiden, kunde bara tänka ett ögonblick på de andra som är mest utsatta bland oss. Hur privilegierat är ditt liv när det största förtrycket du någonsin känt är att bära en mask?"
            }
        ],
        "infoCards" : [
            {
                "title": "",
                "story": "Långvarig användning av medicinska masker kan vara obehagligt. Det leder dock inte till CO₂-förgiftning eller syrebrist. En liten studie visade att bära en 3-lagers icke-medicinsk ansiktsmask inte leder till en minskning av syremättnad hos äldre deltagare. Det har också gjorts flera andra studier som bekräftar detta på mycket yngre deltagare. Dessa resultat stöder inte påståenden om att det är farligt att bära icke-medicinska ansiktsmasker i offentliga miljöer."
            },
            {
                "title": "",
                "story": "Att bära medicinsk mask har en lång historia från medeltiden. Det finns bilder på läkare som behandlar patienter som lider av böldpest och bär näbbliknande masker. Näbben var fylld med örter, kryddor och torkade blommor för att avvärja de lukter som man trodde spred pesten. Inte nytt i historien är ens den obligatoriska munskyddanvändningen t ex under den spanska sjukan. 1918 antog städer runt om i världen krav på obligatoriska masker. Maskbärandet sköt i höjden under de första åren av 2000-talet med utbrottet av SARS och fågelinfluensan. (Källa)"
            },
            {
                "title": "",
                "story": "Bärande av mask är en nyckelåtgärd för att minska infektionsspridning och rädda liv. Masker bör användas som en del av ett omfattande “Gör allt!” tillvägagångssätt inklusive fysisk distansering, undvika trånga, slutna och nära kontaktmiljöer, bra ventilation, rengöring av händer, täcka munnen vid nysningar och hosta med mera. Beroende på typ kan masker användas antingen för att skydda friska personer eller för att förhindra vidare överföring."
            },
            {
                "title": "",
                "story": "Masker används ofta för att skydda mot virus och bakterier. De har blivit särskilt vanliga i betydelsen att skydda mot SARS-CoV-2-virus. Bland olika typer av masker är kirurgiska ansiktsmasker bland de mest använda ansiktsskydden i COVID-19-pandemin. Vanligtvis är de blåfärgade på ena sidan. Huvudsyftet med kirurgiska masker är att skydda patienter från potentiell kontakt med bakterier och virus som andas ut av bäraren. De förhindrar spridningen av coronaviruset genom luften väl, men är inte lika effektiva på att skydda bäraren från viruset."
            },
            {
                "title": "",
                "story": "För att bättre filtrera både utandnings- och inandningsluft bör FFP2- eller FFP3-mask (ofta även kallad respirator) användas. FFP2 och FPP3 har en filtreringseffektivitet för luftburna partiklar (inklusive de som innehåller viruset) på 92 % respektive 98 %. Båda maskerna har även ett litet inåtläckage på ‹8% respektive ‹2%."
            },
            {
                "title": "",
                "story": "Maskernas effektivitet har testats på speciella laboratorier, t.ex. i exponeringskammare. I dessa studier fyller en partikelgenerator exponeringskammaren med små partiklar, liknande aerosoler som bär viruset. Därefter mäts partikelkoncentrationerna bakom maskerna och jämförs med koncentrationen i atmosfären i exponeringskammaren."
            },
            {
                "title": "",
                "story": "Det starkaste beviset på effektiviteten av att bära mask är baserat på epidemiologiska data från verkliga situationer. Enligt en studie publicerad i Health Affairs 2020 har den dagliga tillväxten av COVID-19 visat sig vara avmattad efter masktvång i 15 delstater och District of Columbia i USA."
            },
            {
                "title": "",
                "story": "Ett experiment med höghastighetsvideo visade att hundratals droppar från 20 till 500 mikrometer genererades när man sade en enkel mening, men att nästan alla dessa droppar blockerades när munnen täcktes av en fuktig tvättlapp. En annan studie av personer som hade influensa eller vanlig förkylning fann att bära en kirurgisk mask avsevärt minskade mängden av dessa luftvägsvirus som släpptes ut i droppar och aerosoler."
            },
            {
                "title": "",
                "story": "En nyligen genomförd studie över dödsfall i coronavirus i 198 länder och fann att de med kulturella normer eller regeringspolitik som gynnar maskbärande hade lägre dödlighet."
            },
            {
                "title": "",
                "story": "Fallrapporter tyder på att masker kan förhindra smittöverföring i högriskscenarier. I ett fall flög en man från Kina till Toronto och testades därefter positivt för covid-19. Han hade torrhosta och bar en mask på flyget, och alla 25 personer närmast honom på flyget testade negativt för COVID-19. I ett annat fall, i slutet av maj, hade två frisörer i Missouri nära kontakt med 140 kunder när de var sjuka med covid-19. Alla bar en mask och ingen av klienterna testade positivt. ( Källan) Ändå bör det erkännas att olika virus och stammar av samma virus har olika smittningsförmåga."
            },
            {
                "title": "",
                "story": "I en simulering förutspådde forskare att om minst 80 procent av befolkningen bär masker skulle det göra mer för att minska spridningen av covid-19 än en strikt samhällsnedstängning. Även om du bor i ett samhälle där få människor bär masker, skulle du fortfarande minska dina egna chanser att få viruset genom att bära en mask."
            },
            {
                "title": "",
                "story": "Masker av typen FFP2 och FFP3 (andningsskydd, europeiskt system) kan filtrera minst 95 % av aerosoler runt 0,3 μm . N95-masker (amerikanskt system) har visat liknande siffror(källa) . Andningsdroppar som innehåller COVID-19 har måtten mellan 5-10 μm och COVID-19 0,1-0,5 μm."
            }
        ],
        "positionCards" : [
            {
                "title" : "Ställningstagande 1",
                "position" : "I händelse av pandemiutbrott av virus i övre luftvägarna (t.ex. COVID-19), inför staten obligatoriskt maskbärande på offentliga platser (kollektivtrafik, gallerior, medicinska institutioner, massevenemang, etc.), för alla. Oavsett om folk är vaccinerade mot det specifika viruset eller inte. Maskerna tillhandahålls gratis och påföljder utdöms för personer som vägrar att bära masker."
            },
            {
                "title" : "Ställningstagande 2",
                "position" : "I händelse av pandemiutbrott av virus i de övre luftvägarna (t.ex. COVID-19) insisterar staten på att det endast är obligatoriskt att bära mask på offentliga platser för de som inte vaccinerats eller inte nyligen återhämtat sig från den givna virussjukdomen. Dessutom måste folk köpa masker själva. Övriga personer bör på begäran visa upp respektive dokumentation som styrker att de vaccinerats eller att de återhämtats från COVID."
            },
            {
                "title" : "Ställningstagande 3",
                "position" : "Vid pandemiutbrott av virus i övre luftvägarna (t.ex. covid-19) rekommenderar staten att man bär masker på offentliga platser. Den tvingar inte sina medborgare, den tillåter dem att välja ansvarsfullt, förser dem med all nödvändig information och täcker kostnaderna."
            },
            {
                "title" : "Ställningstagande 4",
                "position" : "Enligt valfrihetsprincipen engagerar sig staten inte i frågor som rör användning av masker vid pandemier. Medborgarna måste själva få information (till exempel via sina läkare) och bestämma om de vill bära masker. Staten står inte för kostnaden för masker."
            }
        ]
      }






    }
</i18n>

<style scoped>
        
</style>