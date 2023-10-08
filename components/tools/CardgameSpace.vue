<template>
    <div >
        <h2 class="mt-8 text-2xl">{{ t('roleCardsFavourTitle') }}</h2>
        
        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            
            <ToolsCardgameCard v-for="(cardR, i) in tm('roleCardsFavour')" :key="`cardR${i}`"
                :title="rt(cardR.title)" :story="rt(cardR.story)" :label="`${t('roleCardsLabel')} ${i+1}`" border="border-green-400"
                :image="rt(cardR.image)" 
                :class="dynStyles"
            >
                <p 
                    class="text-[9pt] m-0 leading-tight text-justify 
                    px-[4mm] pb-[1mm] -mt-[3mm]
                    print:font-sans" 
                    style="hyphens:auto;">
                    {{rt(cardR.story)}}
                </p>    
                <p 
                    class="text-[9pt] m-0 leading-tight text-justify 
                    px-[4mm] py-[1mm]
                    print:font-sans" 
                    style="hyphens:auto;">
                    {{rt(cardR.story2)}}
                </p>    
            </ToolsCardgameCard>

        </section>

        <h2 class="mt-8 text-2xl">{{ t('roleCardsAgainstTitle') }}</h2>
        
        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            
            <ToolsCardgameCard v-for="(cardR, i) in tm('roleCardsAgainst')" :key="`cardR${i}`"
                :title="rt(cardR.title)" :story="rt(cardR.story)" :label="`${t('roleCardsLabel')} ${i+1}`" border="border-red-400"
                :image="rt(cardR.image)" 
                :class="dynStyles"
            >
                <p 
                    class="text-[9pt] m-0 leading-tight text-justify 
                    px-[4mm] pb-[1mm] -mt-[3mm]
                    print:font-sans" 
                    style="hyphens:auto;">
                    {{rt(cardR.story)}}
                </p>    
                <p 
                    class="text-[9pt] m-0 leading-tight text-justify 
                    px-[4mm] py-[1mm]
                    print:font-sans" 
                    style="hyphens:auto;">
                    {{rt(cardR.story2)}}
                </p>    
            </ToolsCardgameCard>
        </section>
    
        <h2 class="print:break-before-page text-2xl">{{ t('infoCardsTitle') }}</h2>

        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            <ToolsCardgameCard v-for="(cardI, i) in tm('infoCards')" :key="`cardI${i}`"
                :title="rt(cardI.title)" :story="rt(cardI.story)" :label="`${t('infoCardsLabel')} ${i+1}`"
                border="border-blue-500"
                :class="dynStyles"
            >
                <p 
                    class="text-[9pt] m-0 leading-tight text-justify 
                    px-[4mm] pb-[2mm] -mt-[3mm]
                    print:font-sans" 
                    style="hyphens:auto;">
                    {{rt(cardI.story)}}
                </p>   
            </ToolsCardgameCard>
        </section>

    </div>
</template>


<script setup>

    // sizes: 64x89  ///   70x120   ///   89x146  /// 

    const cardSize = ref({w:"70mm", h:"120mm"});

    const dynStyles = ref(computed(() => {
        if(props.printMode === true) {
            return "w-[70mm] h-[120mm] max-h-[120mm] min-h-[120mm] overflow-hidden";
        } else {
            return "print:w-[70mm] print:h-[120mm]";
        }
    }));

    const { locale, t, tm, rt } = useI18n({
        useScope: 'local'
    });
    const props = defineProps({
        "printMode" : {
            type: Boolean,
            default: false
        }
    });
</script>


<i18n lang="js">
{
    en: {
        roleCardsFavourTitle : "Roles in favour of Position 1 (for crewed space exploration)",
        roleCardsAgainstTitle : "Roles in favour of position 2 (against manned space exploration)",
        infoCardsTitle : "Info cards",
        roleCardsLabel : "Position",
        infoCardsLabel : "Info",
        roleCardsFavour : [
            {
                title: "Government politician",
                image: "card_space_government_politician.webp",
                story: "As a government politician, you have electoral interests and want to increase the development of innovative technologies and the employment rate. Your party supports investments in the space exploration hi-tech industry as an essential foundation for a knowledge-based society. You defend the job creation resulting from creating a spaceport for manned spaceflights. The space travel industry provides many job opportunities and attracts youth through its innovative potential.",
                story2: "You seek arguments for manned space travel to confront your political adversary."
            },
            {
                title: "Manager of a space exploration company",
                image: "card_space_exploration_company_manager.webp",
                story: "You favour further development of space explorations and try to defend your company's economic interests. You try to convince the government and public to build a spaceport serving manned space flights operation. You appeal to the safety and scientific advancement provided by such a facility. People who have been in space always serve as role models and ambassadors for the space industry.",
                story2: "It must be supported by evidence justifying that investment in crewed space missions and constructing a spaceport is a timely necessity. It can be used commercially by other countries and private companies."
            },
            {
                title: "Space scientist",
                image: "card_space_scientist.webp",
                story: "You are a person who is researching new ways of advancing in human space explorations. You envisioned the participation of your nation in creating a moon base that has the potential, for example, for harvesting helium-3, which is relatively abundant in lunar soil. Its fusion releases large amounts of energy but no radioactive by-products. Helium-3 nuclei from the moon can provide centuries of the world’s current power consumption.",
                story2: "You should seek information to make a case for scientific evidence of the positive societal impact of new space techniques. You seek arguments in favour of human travels to space."
            },
            {
                title: "Medical doctor",
                image: "card_space_medical_doctor.webp",
                story: "Medical research has shown the importance of microgravity studies for fighting cancer and understanding the potential of astronauts’ self-examination studies to advance medical sciences. We get a lot of information from the astronauts as being the experiment themselves, providing essential data to be used on Earth. Many of us would also regard a human landing on Mars as a paramount achievement for our species.",
                story2: "You have to look for evidence to demonstrate that human space travel conditions and advancements propel advancements in health sciences."
            }
        ],
        roleCardsAgainst : [
            {
                title: "Ecologist",
                image: "card_space_ecologist.webp",
                story: "You have a radically negative view of atmospheric pollution caused by rocket fuels and do not envisage the possibility of building a platform for sending humans to space in your country. Humans also cause biological contamination of space, leaving traces of human DNA through our activities. This will make it difficult to identify alternative life forms in the universe.",
                story2: "You must look for evidence concerning favouring nature and the environment and positioning yourself against space travel."
            },
            {
                title: "Politician from the opposition",
                image: "card_radiation_opposition-politician.webp",
                story: "As a politician from the opposition, you have electoral interests and must be against your political opponent. Your party supports uncrewed space exploration as the most cost-effective, arguing that if it is possible to use self-driving cars in our cities, we should invest in sending AI-empowered robots on space missions. It is feasible to exploit additional resources in outer space, such as asteroid mining which could be an economic opportunity for the country. So, you do not entirely against the development of space exploration but how it should be focused.",
                story2: "Look for arguments against manned space travel and in favour of robotic missions to confront your political adversary."
            },
            {
                title: "Robotic technology space scientist",
                image: "card_space_scientist_robots.webp",
                story: "You are an expert in space robotics and convinced that it is possible to meet most of the achievable tasks in space with the help of robots and drones without risking human lives and saving a lot of money for other acute needs on our planet. You are against crewed spaceflights, although you recognise the need for future space explorations more sustainably.",
                story2: "You will have to look for scientific arguments to convince us that it is possible to conquer space resources and gain new technological knowledge and power without sending humans to space."
            },
            {
                title: "Representative satellite navigation company",
                image: "card_space_satellite_man.webp",
                story: "You are against the use of manned flights and want to sell your network services for a broad range of sectors of the economy in different countries. Economic and business interests drive you and argue that your network is very reliable and totally environmentally friendly. We need to develop further satellite launch facilities that space-based industries require and already give us huge economic benefits.",
                story2: "You must look for economic, labour and environmental evidence to support the positions against using crewed space flights."
            }
        ],
        infoCards : [
            {
                title: "New space age",
                story: "The new space age has shaped since the 1990s.  New independent actors are coming to space exploration: private companies, the European space programme, China and India are progressing rapidly. Probably, India will become the fourth nation to conduct independent human spaceflight after the Soviet Union/Russia, the United States and China. India intended to start a space station programme, crewed lunar landings, and crewed interplanetary missions in the long term. Suborbital space tourism became a reality not only for extremely rich people."
            },
            {
                title: "Internet on-board",
                story: "In-Flight Connectivity (IFC) and entertainment services across global airlines show steady growth. In 2021 service providers showed a 10% increase in the number of commercial aircraft connected to in-flight services compared to 2020, totalling 9,900 planes by the end of 2021. Within the next decade, the number of aircraft using such services is expected to double to more than 21,000. The new satellite constellations are expected to advance significantly post-2025, leading to an upsurge in bandwidth availability."
            },
            {
                title: "Uncrewed aerial vehicles (UAV) alternative",
                story: "Unmanned aerial vehicles (UAV) are a class of aircraft that can fly without the onboard presence of pilots. UAVs are very cost-effective. UAVs can also be used as a communication platform. Compared with satellites, it has simple system construction, high speed and low lag communication capability. It provides reliable wireless links for ground users to realise safe and reliable transmission of information. The UAV cluster communication network has high reliability."
            },
            {
                title: "Space debris",
                story: "It consists of non-functional spacecraft and abandoned launch vehicle stages, fragments from the rocket bodies including pieces from their disintegration, erosion and collisions, paint flecks, solidified liquids expelled from spacecraft, and unburned particles from solid rocket motors. Estimations show that over 128 million pieces of debris smaller than 1 cm, about 900 000 bits of debris 1–10 cm and around 34 000 pieces larger than 10 cm were to be in orbit around Earth. Space debris represents a risk to space exploration."
            },
            {
                title: "Atmospheric pollution linked to space tourism",
                story: "Scientists found that black carbon emissions will more than double after just three years of regular space tourism launches and that particles emitted by rockets are almost 500 times more efficient at holding heat in the atmosphere than all other sources of soot combined, resulting in an enhanced warming climate effect. While the current loss of ozone due to space launches is slight, the impact of space tourism launches may undermine the recovery in the ozone layer experienced after the success of the 1987 Montreal Protocol, which banned substances that deplete the Earth's ozone layer."
            },
            {
                title: "Trend in space economy",
                story: "Euroconsult estimates that the global space economy totalled $370 billion in 2021. The space economy is expected to grow by 74% by 2030 to reach $642B. The most significant revenue drivers remain satellite navigation and communications, which account for 50% and 41% of the total market value, respectively."
            },
            {
                title: "Experience of weightlessness",
                story: "Astronauts entering outer space experiencing weightlessness or microgravity. They are actually in a state of free fall. After switching off the engine, the rocket moves horizontally at a very high speed of about 8 kilometres per second and falls free, thus going around the Earth. Because the spaceship and its objects are falling around the world at the same rate, everything in the cabin that is not secured floats. When people encounter microgravity, they have the following feelings: •Nausea •Disorientation •Headache •Loss of appetite •Congestion The longer person stays in microgravity, the more muscles and bones weaken."
            },
            {
                title: "Contribution to the Sustainable Development Goals",
                story: "Space-based services and technologies are key to understanding climate change and disaster management www.unoosa.org. Cooperation in outer space is also of great importance for world peace. There is a need to ensure the compliance of all countries with international space laws and that new space-faring nations develop national space laws. UN-SPIDER Knowledge Portal: Space4DisasterManagement http://www.un-spider.org/ Space4Water Portal in http://www.space4water.org/ Space for the Sustainable Development Goals"
            },
            {
                title: "Hazard of Human Spaceflight: Radiation",
                story: "Radiation exposure increases cancer risk, damages the central nervous system, can alter cognitive function, reduce motor function and prompt behavioural changes. Exposure to different types of particles found in space radiation can lead to diverse cardiovascular diseases. The space station ISS sits just within Earth’s protective magnetic field, so while our astronauts are exposed to ten times higher radiation than on Earth, it’s still smaller than exposure in deep space. Deep space vehicles will have significant protective shielding, dosimetry, and alerts to minimise this hazard."
            },
            {
                title: "Hazard of Human Spaceflight: Isolation and confinement.",
                story: "Behavioural issues among groups of people crammed in a small space over a long period, no matter how well-trained they are, are inevitable. Crews will be carefully chosen, trained and supported to ensure they can work effectively as a team for months or years in space. Sleep loss, circadian desynchronisation, and work overload compound this issue and may lead to performance decrements, adverse health outcomes, and compromised mission objectives. Various tools and technologies for use in the spaceflight environment are being developed to detect and treat early risk factors. Research is also being conducted on workload and performance, light therapy for circadian alignment, phase shifting and alertness."
            },
            {
                title: "Hazard of Human Spaceflight: Different gravity.",
                story: "On Mars, astronauts must live and work with three-eighths of Earth’s gravity. Additionally, on the six-month trek between the planets, explorers will experience total weightlessness. When astronauts finally return home, they must readapt many systems in their bodies to Earth’s gravity. Bones, muscles, and the cardiovascular system have all been impacted by years without standard gravity. When astronauts transit from one gravity field to another, it’s usually quite an intense experience. Blasting off from the surface of a planet or a hurdling descent through an atmosphere changes the force of gravity many times. Research is being conducted to ensure that astronauts stay healthy before, during and after their mission."
            },
            {
                title: "Hazard of Human Spaceflight: Unusual closed environment.",
                story: "A spacecraft is not only a home. It’s also a machine. The ecosystem inside a vehicle plays a big role in everyday astronaut life. Important habitability factors include temperature, pressure, lighting, noise, and quantity of space. It’s essential that astronauts get the requisite food, sleep and exercise needed to stay healthy and happy. Microorganisms that naturally live on your body are transferred more easily from one person to another in a closed environment. Astronauts contribute data points via urine and blood samples and can reveal valuable information about possible stressors. Extensive recycling of resources we take for granted is also imperative:  oxygen, water, carbon dioxide, and even our waste."
            },
            {
                title: "Importance of satellites",
                story: "The convenience of everyday connectivity and the importance of information about the changes our planet is undergoing means that more satellites will be needed. Around 10,000 new satellites are expected to be launched over the next few years, and by 2040 the total number of satellites could reach 100,000 – compared with about 5,000 operational satellites in orbit today (2023)."
            },
            {
                title: "Consequences of being weightless for a long time.",
                story: "Imagine yourself on a long space trip. In weightlessness, your muscles do not need to work hard. In response to being used less, your muscles shrink or atrophy. Remember, your heart is also a muscle, and pumping blood around your body is easier in the weightless space environment, so your heart also gets weaker. On an extended space voyage, your muscles might become so soft that it would be difficult to stand upright once you return to an environment where you are subject to gravity."
            },
            {
                title: "Costs of human space missions",
                story: "The Apollo program cost $20 billion in 1970s dollars—over $100 billion in today’s money. The cost of the Shuttle is estimated at $200 billion in 2010 dollars. The total ISS program cost is about $150 billion (up until 2015). Currently, NASA suggested charging about  $10 million in permission fees for an ISS private mission. That includes  $2000 per person per day for food. https://spacenews.com/nasa-increases-prices-for-iss-private-astronaut-missions/"
            },
            {
                title: "Global Navigation Satellite System",
                story: "GNSS refers to a constellation of satellites providing signals from space that transmit positioning and timing data to GNSS receivers. Examples of GNSS include Europe’s Galileo, the USA’s NAVSTAR Global Positioning System (GPS), Russia’s Global'naya Navigatsionnaya Sputnikovaya Sistema (GLONASS) and China’s BeiDou Navigation Satellite System."
            },
            {
                title: "Structure of the atmosphere and where space begins",
                story: "The Earth's atmosphere protects us from heat and radiation emitted from the sun and contains the air we breathe. It can be divided into layers: troposphere, stratosphere, mesosphere, thermosphere and exosphere. According to NASA, the upper layer of Earth's atmosphere — the exosphere — extends up to 10 000 km, above which the atmosphere and space blend. Most scientists agree that the Kármán line, situated 100 km above sea level, marks the transition point between Earth and space. 99,99997 per cent of Earth's atmosphere is located below this height."
            },
            {
                title: "New moon exploration age",
                story: "The Moon appears to become once again a very attractive destination for space missions in the coming years. Seven countries are heading there: India, Japan, Russia, South Korea, the United Arab Emirates and the United States, along with several private companies. The Moon bears substantial natural resources which could be exploited in the future. Evidence from several orbiters indicates that water ice is present on the surface at the Moon poles, but mainly on the south pole region where potential human settlements are planned. Chinese Lunar Exploration Program is preparing lunar mining of the isotope helium-3 as a new energy source."
            },
            {
                title: "Example of global Satellite Navigation Networks",
                story: "The Chinese Beidou navigation satellite network became completed and fully operational in 2020. It now has 35 satellites - more than American GPS’s 31 (run by the U.S. Air Force) and more than European Galileo and Russia’s GLONASS. Beidou’s location services are accurate down to 10 cm in the Asia-Pacific, compared with GPS’s 30 cm range. Beidou-related services, such as port traffic monitoring and disaster mitigation, have been exported to about 120 countries."
            },
            {
                title: "Nanosatellites",
                story: "Designs now exist for automated spacecraft that include photography and radio communication equipment but weigh only one gram. Lasers could accelerate these to 20 per cent of the speed of light and reach the closest stars within a couple of decades. Thus, we can send our advanced artificial intelligence by nano explorers to the vastness of space."
            },
            {
                title: "Mars expedition",
                story: "Space base on the Moon will be an important step for human exploration of Mars. Human missions to Mars have been part of science fiction since the 1880s. The concept of a Martian as something living on Mars is part of the fiction. Most experts agree that life probably existed on Mars when water ran freely over its surface and that it may yet survive in underground pools. It takes about two years to go to Mars and back. ESA has no preparation or project to send humans to Mars. For a discussion of technical possibilities, see https://en.wikipedia.org/wiki/ Human_mission_to_Mars/ and technical plans of SpaceX at https://www.spacex.com/human-spaceflight/mars/"
            }
        ]
    },










    el: {
        roleCardsFavourTitle: "Ρόλοι υπέρ της Θέσης 1",
        roleCardsAgainstTitle: "Ρόλοι υπέρ της θέσης 2",
        infoCardsTitle: "Infokaardid",
        roleCardsLabel: "Ρόλος",
        infoCardsLabel: "Πληροφορία",
        roleCardsFavour: [
            {
                title: "Κυβερνητικός πολιτικός",
                image: "card_radiation_government-politician.webp",
                story: "Ως πολιτικός στη σημερινή κυβέρνηση, έχετε εκλογικά συμφέροντα και θέλετε να αυξήσετε το ποσοστό απασχόλησης. Το κόμμα σας υποστηρίζει την πυρηνική ενέργεια ως εφικτή, οικονομική και βιώσιμη ενεργειακή λύση. Υπερασπίζεστε τη δημιουργία θέσεων εργασίας που θα προέκυπτε από την εγκατάσταση ενός πυρηνικού σταθμού ηλεκτροπαραγωγής ή ενός ασφαλούς χώρου εκταφής πυρηνικών απορριμμάτων και τη μείωση της εξάρτησης ενέργειας και διαχείρισης αποβλήτων από άλλες χώρες.",
                story2: "Αναζητάς επιχειρήματα υπέρ της πυρηνικής ενέργειας για να αντιμετωπίσεις τον πολιτικό σου αντίπαλο."
            },
            {
                title: "Διευθυντής χώρου εκταφής πυρηνικών απορριμμάτων",
                image: "card_radiation_nuclear-cemetary.webp",
                story: "Είστε υπέρ της πυρηνικής ενέργειας και προσπαθείτε να υπερασπιστείτε τα οικονομικά συμφέροντα της εταιρείας σας. Προσπαθείτε να πουλήσετε το έργο σας για την κατασκευή και τη διαχείριση ενός χώρου εκταφής πυρηνικών απορριμμάτων ως εγκατάσταση που συνδέεται με τη λειτουργία ενός πυρηνικού σταθμού. Κάνετε έκκληση στην ασφάλεια που παρέχουν τέτοιοι χώροι εκταφής.",
                story2: "Πρέπει να υποστηρίζεται αποδεικτικά στοιχεία που να δικαιολογούν ότι είναι απαραίτητη η διαχείριση των πυρηνικών αποβλήτων που παράγονται σε μονάδες λειτουργίας, έτσι ώστε να μην χρειάζεται να αποστέλλονται σε άλλες χώρες."
            },
            {
                title: "Πυρηνικός επιστήμονας",
                image: "card_radiation_nuclear-scientist.webp",
                story: "Είστε ένα άτομο που ερευνά νέες μεθόδους για την επαναχρησιμοποίηση ουρανίου σε σταθμούς ηλεκτροπαραγωγής, έτσι ώστε τα απόβλητα να είναι λιγότερο επικίνδυνα για μικρότερο χρονικό διάστημα μετά την απόρριψή τους.",
                story2: "Θα πρέπει να αναζητήσετε πληροφορίες για να υποστηρίξετε την εγκατάσταση περισσότερων πυρηνικών σταθμών ηλεκτροπαραγωγής και/ή τοποθεσιών πυρηνικής ταφής με βάση επιστημονικά στοιχεία έρευνας σε αυτές τις νέες τεχνικές. Αναζητάτε επιχειρήματα υπέρ της πυρηνικής ενέργειας."
            },
            {
                title: "Εργάτης σε πυρηνικό εργοστάσιο",
                image: "card_radiation_worker.webp",
                story: "Ως εργαζόμενος σε πυρηνικό εργοστάσιο, είστε υπέρ της λειτουργίας αυτής της βιομηχανίας. Στην πόλη σας, πολλοί άνθρωποι βρήκαν δουλειά λόγω της ζήτησης για εργατικό δυναμικό στον πυρηνικό σταθμό. Άρα έχετε πολύ ευνοϊκή γνώμη για αυτού του είδους τις εταιρείες.",
                story2: "Πρέπει να αναζητήσετε στοιχεία για να αποδείξετε τα οφέλη από τις θέσεις εργασίας που δημιουργούνται από έναν πυρηνικό σταθμό ηλεκτροπαραγωγής ή ένα χώρο εκταφής πυρηνικών απορριμμάτων στη χώρα σας ή στην ΕΕ."
            }
        ],
        roleCardsAgainst : [
            {
                title: "Οικολόγος",
                image: "card_radiation_green-activist.webp",
                story: "Έχετε μια ριζικά αρνητική άποψη για την πυρηνική ενέργεια και, φυσικά, δεν οραματίζεστε το ενδεχόμενο περισσότερων εγκαταστάσεων. Είστε υπέρ των ανανεώσιμων πηγών ενέργειας, ακόμα κι αν γνωρίζετε ότι έχουν επίσης αντίκτυπο στο περιβάλλον. Είστε υπέρ του κλεισίματος όλων των πυρηνικών σταθμών και των χώρων εκταφής πυρηνικών απορριμμάτων στη χώρα.",
                story2: "Πρέπει να αναζητήσετε αποδεικτικά στοιχεία σχετικά με την εύνοια της φύσης και του περιβάλλοντος και τη θέση σας ενάντια στην πυρηνική ενέργεια και υπέρ των ανανεώσιμων πηγών ενέργειας."
            },
            {
                title: "Πολιτικός από την αντιπολίτευση",
                image: "card_radiation_opposition-politician.webp",
                story: "Ως πολιτικός της αντιπολίτευσης, έχεις εκλογικά συμφέροντα και πρέπει να είσαι εναντίον του πολιτικού σου αντιπάλου. Το κόμμα σας υποστηρίζει τις ανανεώσιμες πηγές ενέργειας ως εναλλακτική λύση στις παραδοσιακές πηγές ενέργειας και την πυρηνική ενέργεια, υποστηρίζοντας ότι είναι δυνατό να μειωθεί η ενεργειακή εξάρτηση από άλλες χώρες. Ωστόσο, θεωρείτε ότι δεν είναι εφικτό να κλείσουν όλοι οι πυρηνικοί σταθμοί ηλεκτροπαραγωγής βραχυπρόθεσμα και επίσης υποστηρίζετε ότι τα πυρηνικά απόβλητα που παράγονται πρέπει να υποβάλλονται σε επεξεργασία (κάτι που θα μπορούσε να είναι μια οικονομική ευκαιρία για τη χώρα), επομένως δεν διαφωνείτε πλήρως με την εγκατάσταση χώρου εκταφής πυρηνικών αποβλήτων.",
                story2: "Ψάξτε για επιχειρήματα κατά της πυρηνικής ενέργειας και υπέρ των ανανεώσιμων πηγών ενέργειας για να αντιμετωπίσετε τον πολιτικό σας αντίπαλο."
            },
            {
                title: "Επιστήμονας ανανεώσιμων πηγών ενέργειας",
                image: "card_radiation_renewable-scientist.webp",
                story: "Είστε ειδικός στις ανανεώσιμες πηγές ενέργειας και είστε πεπεισμένος ότι είναι δυνατό να καλυφθούν οι ενεργειακές ανάγκες μιας χώρας μόνο με εναλλακτικές πηγές ενέργειας, χωρίς την απαιτείται χρήση πυρηνικής ενέργειας. Είστε κατά της εγκατάστασης πυρηνικών σταθμών και χώρων εκταφής πυρηνικών αποβλήτων, αν και δεν υποστηρίζετε το κλείσιμο των υφιστάμενων, ως μεταβατική ενεργειακή επιλογή προς ένα πιο βιώσιμο μοντέλο.",
                story2: "Θα πρέπει να αναζητήσετε επιστημονικά επιχειρήματα για να πείσετε ότι είναι δυνατό να εφοδιαστεί μια χώρα μόνο με ανανεώσιμες πηγές ενέργειας."
            },
            {
                title: "Επιχειρηματίας αιολικής ενέργειας",
                image: "card_radiation_wind-enterpreneur.webp",
                story: "Είστε κατά τη χρήση της πυρηνικής ενέργειας και θέλετε να πουλήσετε το έργο σας για τη δημιουργία ενός υπεράκτιου αιολικού πάρκου για την αντικατάσταση των πυρηνικών σταθμών. Καθοδηγήστε από οικονομικά και επιχειρηματικά συμφέροντα και υποστηρίζετε ότι οι ανανεώσιμες πηγές ενέργειας είναι απολύτως φιλικές προς το περιβάλλον.",
                story2: "Πρέπει να αναζητήσετε οικονομικά, εργασιακά και περιβαλλοντικά στοιχεία για να υποστηρίξετε τις θέσεις κατά τη χρήση της πυρηνικής ενέργειας."
            }
        ],
        roleCardModerator : {
            title: "Παρουσιαστές / συντονιστές",
            image: "card_c-change_floods.webp",
            story: "Ως παρουσιαστής ενός τηλεοπτικού προγράμματος συζήτησης πρέπει να διατηρήσετε τη θέση σας αμερόληπτη. Δεν χρειάζεται να ψάχνετε για επιχειρήματα, αλλά πρέπει να προετοιμάσετε καλά το χρονοδιάγραμμα για να πραγματοποιηθεί το πρόγραμμα. Στο τέλος της συζήτησης θα πρέπει να κάνετε μια περίληψη και να παρουσιάσετε συμπεράσματα με βάση τις πιο σχετικές πτυχές του προγράμματος."
        },
        infoCards : [
            {
                title: "Προκλήσεις",
                story: "Υπάρχουν τρεις μεγάλες προκλήσεις που εμποδίζουν την πυρηνική βιομηχανία να συνεισφέρει πλήρως στη δυνητική της συμβολή στη βιώσιμη ανάπτυξη και την καταπολέμηση της κλιματικής αλλαγής: χρηματοδότηση, αντίληψη και ρύθμιση. Ο πυρηνικός τομέας πρέπει να ενταχθεί σε «ταξινομήσεις πράσινης χρηματοδότησης». Έχει υπάρξει αυξανόμενη αναγνώριση μεταξύ των υπευθύνων χάραξης πολιτικής και του κοινού των χαρακτηριστικών χαμηλών εκπομπών άνθρακα και της υψηλής αξιοπιστίας της πυρηνικής ενέργειας. Η αδειοδότηση των σχεδίων αντιδραστήρων πρέπει να γίνει πέραν των εθνικών συνόρων."
            },
            {
                title: "Παράδειγμα κορυφαίου έθνους",
                story: "Στις ΗΠΑ, σχεδόν 20 αντιδραστήρες σώθηκαν από άσκοπο πρόωρο κλείσιμο τα τελευταία πέντε χρόνια - κλείσιμο που όχι μόνο θα αύξανε τις εκπομπές αερίων του θερμοκηπίου, αλλά θα υπονόμευε επίσης την ενεργειακή ανεξαρτησία και θα είχε ως αποτέλεσμα την επείγουσα ανάγκη της βιομηχανίας να αντιμετωπίσει την αδειοδότηση σχεδίων αντιδραστήρων εθνικά σύνορα."
            },
            {
                title: "Σταματήστε την υπερθέρμανση του πλανήτη",
                story: "Η αύξηση της θερμοκρασίας κατά 1,5°C θα απαιτήσει την ταχεία ανάπτυξη πολύ περισσότερης πυρηνικής ενέργειας. Η πυρηνική ενέργεια είναι απαραίτητη για αποφυγή της εκπομπής ατμοσφαιρικών ρύπων και αερίων του θερμοκηπίου, διασφαλίζοντας ότι η μετάβαση σε ένα μέλλον χαμηλών εκπομπών άνθρακα θα γίνει μια «δίκαιη μόδα», που παρέχει στους ανθρώπους σε όλο τον κόσμο ένα ισχυρό και βιώσιμο μέλλον."
            },
            {
                title: "Απανθρακοποίηση",
                story: "Η πυρηνική ενέργεια επιτρέπει την ταχεία απαλλαγή από τις ανθρακούχες εκπομπές σε μαζική κλίμακα. Οι πυρηνικές τεχνολογίες μπορούν να παράγουν ηλεκτρική ενέργεια τόσο για μεγάλα δίκτυα όσο και για μικρές κοινότητες, παρέχοντας τηλεθέρμανση και ψύξη, θερμότητα στη βιομηχανία, παράγοντας υδρογόνο και πολλά άλλα. Αυτή είναι η μόνη πηγή ενέργειας που μπορεί να παράγει ηλεκτρισμό χαμηλών εκπομπών άνθρακα, ως εκ τούτου μπορεί να απαλλάξει από τις ανθρακούχες εκπομπές ολόκληρης της παγκόσμιας οικονομίας."
            },
            {
                title: "Βιωσιμότητα",
                story: "Περισσότερα από 1200 GW πυρηνικής παραγωγής πρέπει να εγκατασταθούν έως το 2050 προκειμένου να καλυφθούν οι ανάγκες αειφόρου ανάπτυξης του κόσμου. Αυτό σημαίνει την ανάγκη κατασκευής 30 νέων αντιδραστήρων ετησίως. Αυτό έχει γίνει στο παρελθόν, αλλά δεν έχουμε φτάσει ακόμη σε αυτό το επίπεδο σήμερα."
            },
            {
                title: "Νέες εξελίξεις",
                story: "Υπάρχει επείγουσα ανάγκη να επιταχυνθεί η ανάπτυξη μικρών αντιδραστήρων (SMR) και προηγμένων πυρηνικών τεχνολογιών. Τα SMR και τα προηγμένα πυρηνικά έργα θα διαδραματίσουν σημαντικό ρόλο στην περαιτέρω διαφοροποίηση του πυρηνικού τομέα και στην εισαγωγή της πυρηνικής ενέργειας σε νέες αγορές και εφαρμογές."
            },
            {
                title: "Η ακτινοβολία είναι ένα φυσικό μέρος της ζωής μας.",
                story: "Όλοι είμαστε εκτεθειμένοι σε ακτινοβολία καθημερινά, κατά μέσο όρο λαμβάνοντας 2-3 millisieverts (mSv) ετησίως. Το μεγαλύτερο μέρος αυτής της ακτινοβολίας από το αέριο ραδόνιο. Η πυρηνική βιομηχανία είναι υπεύθυνη για ένα πολύ μικρό μέρος της έκθεσης του κοινού στην ακτινοβολία. Το να ζεις κοντά σε ένα πυρηνικό εργοστάσιο κατά μέσο όρο εκθέτει το τοπικός πληθυσμός σε 0,00009 mSv/έτος. Για να το θέσουμε αλλιώς, τρώγοντας 10 μπανάνες ή δύο ξηρούς καρπούς Βραζιλίας έχει ως αποτέλεσμα την ίδια δόση ακτινοβολίας με το να ζεις κοντά σε ένα πυρηνικό εργοστάσιο για ένα χρόνο. Οι άνθρωποι είναι επίσης από τη φύση τους ραδιενεργοί και η δόση ακτινοβολίας από τον ύπνο δίπλα σε κάποιον κάθε βράδυ για ένα χρόνο είναι δέκα φορές υψηλότερη από την έκθεση από τη διαμονή κοντά σε πυρηνικό εργοστάσιο ηλεκτροπαραγωγής για το ίδιο χρονικό διάστημα."
            },
            {
                title: "Θνησιμότητα που προκαλείται από την ατμοσφαιρική ρύπανση",
                story: "Τα ορυκτά καύσιμα αντιπροσωπεύουν σήμερα περίπου το 80% του συνολικού ενεργειακού εφοδιασμού, γεγονός που προκαλεί σημαντικό επίπεδο εκπομπών τόσο σε αέρια θερμοκηπίου όσο και σε ατμοσφαιρικούς ρύπους. Πάνω από 8,5 εκατομμύρια άνθρωποι πεθαίνουν πρόωρα παγκοσμίως λόγω της ατμοσφαιρικής ρύπανσης."
            },
            {
                title: "Θανατηφόρα ατυχήματα",
                story: "Η υδροηλεκτρική ενέργεια είναι ο πιο θανατηφόρος παραγωγός ηλεκτρικής ενέργειας, κυρίως λόγω της κατάρρευσης φραγμάτων και τις συνέπειες των πλημμυρών. Η αποτυχία του φράγματος Banqiao στην Κίνα το 1975 οδήγησε σε πνιγμό τουλάχιστον 26.000 ανθρώπων και 150.000 θανάτους από δευτερεύουσες συνέπειες του ατυχήματος. Συγκριτικά, η η έκθεση στην ακτινοβολία μετά το Τσερνόμπιλ προκάλεσε 54 θανάτους (συμπεριλαμβανομένων 28 πυροσβεστών που εκτέθηκαν σε θανατηφόρες ποσότητες ακτινοβολίας κατά τη διάρκεια της νύχτας του ατυχήματος και 15 θανατηφόρες περιπτώσεις καρκίνου του θυρεοειδούς. Επιστημονική Επιτροπή των Ηνωμένων Εθνών για τις Επιδράσεις της Ακτινοβολίας."
            },
            {
                title: "Αερίου ραδονίου",
                story: "Η εισπνοή ραδιενεργού αερίου ραδονίου είναι μια κύρια αιτία καρκίνου του πνεύμονα παγκοσμίως. Η ιονίζουσα ακτινοβολία σωματιδίων άλφα από το ραδόνιο-222 (222Rn) και τους απογόνους της διάσπασής του όπως το πολώνιο (218Po) και (214Po), βλάπτει το DNA των κυττάρων του πνεύμονα για να παράγει γενετικές μεταλλάξεις που προάγουν τον καρκίνο. Τα σωματίδια άλφα από το ραδόνιο και τους απογόνους του μετρώνται σε μπεκερέλ (Bq) ανά κυβικό μέτρο (m³), που ισοδυναμεί με μία εκπομπή σωματιδίου ανά δευτερόλεπτο ανά κυβικό μέτρο αέρα. 100 Bq/m3 σηματοδοτεί μια έκθεση πάνω από την οποία ο αυξημένος σχετικός κίνδυνος καρκίνου του πνεύμονα κατά τη διάρκεια της ζωής είναι στατιστικά σημαντικός. Υπάρχει μια πρόσθετη αύξηση 16% στον σχετικό κίνδυνο εμφάνισης καρκίνου του πνεύμονα κατά τη διάρκεια της ζωής για κάθε 100 Bq/m3 μακροχρόνιας έκθεσης σε ραδόνιο."
            },
            {
                title: "Πυρηνικό νεκροταφείο",
                story: "Η σουηδική κυβέρνηση ενέκρινε τον Ιανουάριο του 2022 την ανάπτυξη της σουηδικής τελικής αποθήκης (πυρηνικό νεκροταφείο) για ραδιενεργά απόβλητα από τους σουηδικούς πυρηνικούς σταθμούς, παρά τις έντονες επικρίσεις από ανεξάρτητους επιστήμονες. Η υπόθεση αναφέρεται ως η μεγαλύτερη περιβαλλοντική περίπτωση της Σουηδίας ποτέ, καθώς το αναλωμένο πυρηνικό καύσιμο θα πρέπει να αποθηκεύεται με ασφάλεια για τουλάχιστον 100.000 χρόνια."
            },
            {
                title: "Παράδειγμα Γαλλίας:",
                story: "Η πυρηνική ενέργεια αντιπροσωπεύει σχεδόν το 75% της παραγωγής ηλεκτρικής ενέργειας της Γαλλίας. Τον Φεβρουάριο του 2022 η Γαλλία ανακοίνωσε ότι θα κατασκευάσει έξι νέους αντιδραστήρες πυρηνικής ενέργειας, θα εξετάσει το ενδεχόμενο κατασκευής άλλων οκτώ και θα προωθήσει την ανάπτυξη μικρών αρθρωτών αντιδραστήρων. Η λειτουργία όλων των υφιστάμενων αντιδραστήρων θα πρέπει επίσης να επεκταθεί χωρίς να διακυβεύεται η ασφάλεια."
            },
            {
                title: "Νέες εξελίξεις",
                story: "Ο πρώτος στον κόσμο αερόψυκτος αντιδραστήρας υψηλής θερμοκρασίας (HTGR) είναι συνδεδεμένος στο δίκτυο στην Κίνα. Τα HTGR χρησιμοποιούνται για παραγωγή ηλεκτρικής ενέργειας, παροχή θερμότητας, αφαλάτωση θαλασσινού νερού κ.λπ. Η Κίνα σχεδιάζει να επιταχύνει τη μαζική ανάπτυξη της τεχνολογίας HTGR, ενώ δημιουργεί μια προηγμένη πυρηνική βιομηχανία."
            },
            {
                title: "Greenpeace",
                story: "Η Greenpeace υποστηρίζει ότι η πυρηνική ενέργεια θα κοστίσει πάρα πολύ για να παραδοθεί πολύ λίγο και πολύ αργά, ενώ θα αυξήσει τον κίνδυνο για την παγκόσμια ασφάλεια. Η Greenpeace επισημαίνει τις υψηλές επενδύσεις της πυρηνικής ενέργειας, τις τακτικές υπερβάσεις του κόστους, τις μεγάλες περιόδους κατασκευής, τις τεράστιες επιδοτήσεις, τους λειτουργικούς κινδύνους, την παραγωγή ραδιενεργών αποβλήτων και ζητήματα ασφάλειας που περιλαμβάνουν τη διάδοση και την τρομοκρατία."
            },
            {
                title: "Η ιονίζουσα ακτινοβολί",
                story: "Η ιονίζουσα ακτινοβολία μπορεί να βλάψει τον ζωντανό ιστό αλλάζοντας τη δομή των κυττάρων και καταστρέφοντας το DNA. Το μέγεθος της ζημιάς εξαρτάται από τον τύπο της ακτινοβολίας, την οδό έκθεσης, την ενέργεια της ακτινοβολίας και τη συνολική ποσότητα ακτινοβολίας που απορροφάται. Η επίδραση από τη μικρή ή ακόμα και μέτρια έκθεση μπορεί να μην είναι αισθητή. Οι περισσότερες κυτταρικές βλάβες επιδιορθώνονται. Ωστόσο, ορισμένα κύτταρα μπορεί να μην ανακάμψουν τόσο καλά όσο άλλα και μπορεί να καταστραφούν ή να γίνουν καρκινικά. Τα παιδιά είναι πιο ευαίσθητα στην ιονίζουσα ακτινοβολία από τους ενήλικες επειδή τα παιδιά βρίσκονται ακόμη στη διαδικασία της ανάπτυξης. Υπάρχουν περισσότερα κύτταρα που διαιρούνται και μια μεγαλύτερη ευκαιρία για την ακτινοβολία να διαταράξει τη διαδικασία ανάπτυξης."
            },
            {
                title: "Η ιατρική ακτινοβολία",
                story: "(ακτινογραφία) παράγει μια εικόνα που μπορεί να βοηθήσει στην εύρεση σπασμένων οστών, όγκων και ξένων αντικειμένων στο σώμα και χρησιμοποιείται επίσης για αξονική τομογραφία (αξονικές τομογραφίες), μαστογραφίες και ακτινοσκόπηση. Οι ιατρικές ακτινογραφίες, οι οδοντικές ακτινογραφίες και οι μαστογραφίες χρησιμοποιούν σχετικά χαμηλές ποσότητες ιοντίζουσας ακτινοβολίας. Οι αξονικές τομογραφίες και οι ακτινοσκοπικές διαδικασίες έχουν ως αποτέλεσμα υψηλότερες δόσεις ακτινοβολίας λόγω της ανάγκης για πολλαπλές εικόνες ή/και μεγαλύτερου χρόνου έκθεσης. Οι αξονικές τομογραφίες εκθέτουν ένα σώμα έως και αρκετές εκατοντάδες φορές περισσότερη ακτινοβολία από μια συμβατική ακτινογραφία."
            },
            {
                title: "Αντίληψη κινδύνου",
                story: "Ένας σημαντικός όγκος ψυχολογικής έρευνας αφιερωμένης στην κατανόηση του γιατί συχνά αγνοούμε ορισμένους από τους μεγαλύτερους κινδύνους (π.χ. οδήγηση, κάπνισμα), ενώ φοβόμαστε μερικούς από τους μικρότερους έδειξε ότι αυτό οφείλεται ουσιαστικά στον τρόπο με τον οποίο αξιολογούμε τους κινδύνους. Λίγοι κίνδυνοι προκαλούν τόσο ισχυρή ανησυχία όσο η ακτινοβολία, αφού ταυτίζεται με την πυρηνική ενέργεια, είναι αόρατη και συνδέεται με τον καρκίνο."
            },
            {
                title: "Η πυρηνική βιομηχανία",
                story: "Η πυρηνική βιομηχανία ισχυρίζεται ότι η πυρηνική ενέργεια, ως πηγή χαμηλών εκπομπών άνθρακα, πρέπει να αποτελεί μέρος του ενεργειακού μείγματος και λύσης. Η πυρηνική ενέργεια είναι ζωτικής σημασίας για την κάλυψη της παγκόσμιας- συνεχώς αυξανόμενης ζήτησης ενέργειας, χάρη στην ικανότητά της να παρέχει οικονομικά προσιτή, αξιόπιστη και βιώσιμη ηλεκτρική ενέργεια και θερμότητα. Παρά τα πολλά οφέλη της πυρηνικής ενέργειας, η ανάπτυξή της εμποδίζεται σε ορισμένα μέρη του κόσμου λόγω μακροχρόνιων εσφαλμένων αντιλήψεων σχετικά με τους κινδύνους της. Ακόμη και με το ιστορικό ασφάλειας, η αντίληψη της πυρηνικής ενέργειας ως επικίνδυνης παραμένει. Οι άνθρωποι πρέπει να εκπαιδεύονται σχετικά με τους κινδύνους και τα οφέλη της πυρηνικής ενέργειας."
            },
            {
                title: "Φοβία ακτινοβολίας",
                story: "Εξετάζοντας μεμονωμένα τους κινδύνους ακτινοβολίας, δημιουργήσαμε κάτι παρόμοιο με μια «φοβία ακτινοβολίας», που βλάπτει άμεσα και έμμεσα τους ανθρώπους σε όλο τον κόσμο. Για παράδειγμα, είναι καλά τεκμηριωμένο ότι οι επιπτώσεις στην υγεία από το Τσέρνομπιλ και τη Φουκουσίμα Ντάιτσι δεν ήταν ακτινολογικές, αλλά μάλλον ψυχοκοινωνικές. Εκεί έχει παρατηρηθεί και δραματική αύξηση στην κατάθλιψη, το PTSD, την κατάχρηση ουσιών και τις αυτοκτονίες."
            },
            {
                title: "Επιπτώσεις ορυκτών καυσίμων",
                story: "Η ιστορική χρήση ορυκτών καυσίμων έχει συμβάλει σημαντικά στην κλιματική αλλαγή μέσω των εκπομπών αερίων του θερμοκηπίου, προκαλώντας άνευ προηγουμένου αλλαγές στη βιωσιμότητα της Γης. Έως το 2025, ο μισός παγκόσμιος πληθυσμός θα ζει σε περιοχές με πιέσεις από το νερό, καθώς η υπερβολική ζέστη και η ξηρασία επιδεινώνουν τους υδάτινους πόρους. Μεταξύ 2030 και 2050, η κλιματική αλλαγή αναμένεται να είναι η αιτία για επιπλέον 250.000 θανάτους ετησίως, που οφείλονται στον υποσιτισμό, την ελονοσία, τη διάρροια και το θερμικό στρες. Ωστόσο, παρά τους τεράστιους κινδύνους που συνδέονται με την κλιματική αλλαγή, ο εθισμός μας στα υπολείμματα άνθρακα, πετρελαίου και ορυκτού αερίου, διατηρεί τα ορυκτά καύσιμα να παρέχουν το 84% της παγκόσμιας πρωτογενούς ενέργειας το 2019. Η ατμοσφαιρική ρύπανση των νοικοκυριών και του περιβάλλοντος προκαλεί 8,7 εκατομμύρια θανάτους κάθε χρόνο, κυρίως λόγω της συνεχιζόμενης χρήσης ορυκτών καυσίμων. Σήμερα, 770 εκατομμύρια άνθρωποι σε όλο τον κόσμο δεν έχουν πρόσβαση σε ηλεκτρική ενέργεια, με πάνω από το 75% αυτού του πληθυσμού να ζει στην Υποσαχάρια Αφρική."
            },
            {
                title: "Πηγές ακτινοβολίας",
                story: "Ο ανθρώπινος πληθυσμός εκτίθεται συνεχώς σε ιονίζουσα ακτινοβολία από διάφορες φυσικές πηγές που μπορούν να ταξινομηθούν σε δύο μεγάλες κατηγορίες: κοσμικές ακτίνες υψηλής ενέργειας που προσπίπτουν στην ατμόσφαιρα της Γης και εκλύουν δευτερεύουσα ακτινοβολία (κοσμική συμβολή) και ραδιενεργά νουκλεΐδια που δημιουργήθηκαν κατά τον σχηματισμό της Γης και εξακολουθούν να υπάρχουν στον φλοιό της Γης (επίγεια συμβολή). Η επίγεια συνεισφορά αποτελείται κυρίως από τα ραδιονουκλίδια των αλυσίδων διάσπασης του ουρανίου και του θορίου μαζί με το ραδιενεργό κάλιο. Στις περισσότερες περιπτώσεις, το ραδόνιο, ένα ευγενές αέριο που παράγεται στη ραδιενεργή διάσπαση του ουρανίου, είναι ο πιο σημαντικός παράγοντας που συμβάλλει στην έκθεση στην ακτινοβολία."
            },
            {
                title: "Μετά το Τσερνόμπιλ",
                story: "Οι μελέτες των επιπτώσεων του ατυχήματος του Τσερνομπίλ έδειξαν ότι οι αρχικοί φόβοι για τις επιπτώσεις της ακτινοβολίας ήταν εξαιρετικά υπερβολικοί. Εκτός από τους 38 θανάτους εργαζομένων έκτακτης ανάγκης στο πρώιμο στάδιο του ατυχήματος, υπήρξαν 16 θάνατοι ανθρώπων λόγω καρκίνου του θυρεοειδούς, αλλά κατά τα άλλα δεν υπήρξε αύξηση των συμπαγών καρκίνων, λευχαιμίας ή δυσμορφιών των γεννητικών οργάνων και δεν εντοπίστηκαν κληρονομικές επιπτώσεις. Οι αποφάσεις εκκένωσης ανθρώπων και συμπερίληψης πολλών εκατομμυρίων κατοίκων στον κατάλογο των «θυμάτων του Τσερνομπίλ» ήταν αδικαιολόγητες και δεν θα λαμβάνονταν υπό το πρίσμα των σημερινών γνώσεων."
            },
            {
                title: "Ανανεώσιμες πηγές ενέργειας",
                story: "Ο άνεμος είναι μια καθαρή, ανανεώσιμη πηγή ενέργειας και είναι μια από τις πιο οικονομικές πηγές ηλεκτρικής ενέργειας. Είναι πλήρως ανανεώσιμο και δεν θα εξαντληθεί ποτέ. Ωστόσο, οι ανεμογεννήτριες μπορεί να είναι θορυβώδεις και μη ελκυστικές αισθητικά και μερικές φορές μπορεί να επηρεάσουν δυσμενώς το φυσικό περιβάλλον γύρω τους. Η αιολική ενέργεια είναι διακοπτόμενη, πράγμα που σημαίνει ότι οι ανεμογεννήτριες εξαρτώνται από τις καιρικές συνθήκες και επομένως δεν είναι σε θέση να παράγουν ηλεκτρική ενέργεια 24/7. Η εγκατάσταση αιολικών πάρκων ή μεμονωμένων ανεμογεννητριών μπορεί να είναι ακριβή. Ωστόσο, όταν τεθεί σε λειτουργία, το κόστος λειτουργίας είναι σχετικά χαμηλό. Το καύσιμο (άνεμος) τους είναι δωρεάν και οι τουρμπίνες δεν απαιτούν υπερβολική συντήρηση κατά τη διάρκεια της ζωής τους."
            },
            {
                title: "Ανεμογεννήτριες",
                story: "Ένα από τα μεγαλύτερα μειονεκτήματα της αιολικής ενέργειας είναι ο θόρυβος και η οπτική ρύπανση. Οι ανεμογεννήτριες μπορεί να είναι θορυβώδεις όταν λειτουργούν, ως αποτέλεσμα τόσο της μηχανικής λειτουργίας όσο και της δίνης ανέμου που δημιουργείται όταν τα πτερύγια περιστρέφονται. Επιπλέον, επειδή οι ανεμογεννήτριες πρέπει να κατασκευαστούν αρκετά ψηλά για να συλλάβουν μια καλή ποσότητα ανέμου, οι ανεμογεννήτριες μπορούν συχνά να διακόψουν διαφορετικά γραφικά τοπία, όπως οροσειρές, λίμνες, ωκεανούς και άλλα. Τα πτερύγια μιας ανεμογεννήτριας είναι πολύ μεγάλα και περιστρέφονται με πολύ υψηλές ταχύτητες. Δυστυχώς, οι λεπίδες τους μπορούν να βλάψουν και να σκοτώσουν είδη που πετούν μέσα τους, όπως πουλιά και νυχτερίδες. Η κατασκευή αιολικών πάρκων μπορεί επίσης να διαταράξει τους φυσικούς οικοτόπους των τοπικών ειδών εάν δεν πραγματοποιηθεί με βιώσιμο τρόπο. Ωστόσο, αυτά τα προβλήματα μπορούν να λυθούν σε κάποιο βαθμό με τις τεχνολογικές εξελίξεις και τη σωστή τοποθέτηση των αιολικών πάρκων. Σε πολλές περιπτώσεις, οι ανεμογεννήτριες και οι εγκαταστάσεις παραγωγής μπορεί να βρίσκονται αρκετά μακριά από τα πληθυσμιακά κέντρα όπου απαιτείται ηλεκτρική ενέργεια. Επομένως, οι γραμμές μεταφοράς είναι ένα επιπλέον κομμάτι υποδομής που πρέπει να κατασκευαστεί"
            }
        ]
    },










    et: {
        roleCardsFavourTitle : "Rollid, mis toetavad 1. seiskohta (Poolt)",
        roleCardsAgainstTitle : "Rollid, mis toetavad 2. seisukohta (Vastu)",
        infoCardsTitle : "Infokaardid",
        roleCardsLabel : "Roll",
        infoCardsLabel : "Info",
        roleCardsFavour : [
            {
                title: "Valitsuse poliitik",
                image: "card_radiation_government-politician.webp",
                story: "Praeguse valitsuse poliitikuna on teil valimishuvid ja soovite tõsta tööhõivet. Teie erakond toetab tuumaenergiat kui teostatavat, säästlikku ja säästvat energialahendust. Kaitsete töökohtade loomist, mis tuleneks tuumajaama või tuumajäätmete hoidla rajamisest ning energia- ja jäätmekäitlussõltuvuse vähenemisest teistest riikidest.",
                story2: "Otsite argumente tuumaenergia kasuks, et astuda vastu oma poliitilisele vastasele."
            },
            {
                title: "Tuumajäätmete hoidla mänedžer",
                image: "card_radiation_nuclear-cemetary.webp",
                story: "Pooldate tuumaenergiat ja proovite kaitsta oma ettevõtte majandushuve. Püüate müüa oma projekti tuumakalmistu rajamiseks ja haldamiseks kui rajatist, mis on seotud tuumajaama tööga. Apelleerite selliste hoidlate turvalisusele.",
                story2: "Seda tuleb toetada tõenditega, et töötavates jaamades tekkivaid tuumajäätmeid on vaja käidelda nii, et neid ei peaks saatma teistesse riikidesse."
            },
            {
                title: "Tuumateadlane",
                image: "card_radiation_nuclear-scientist.webp",
                story: "Olete teadlane, kes uurib uusi meetodeid uraani taaskasutamiseks elektrijaamades, et jäätmed oleksid lühema aja jooksul pärast kõrvaldamist vähem ohtlikud.",
                story2: "Peaksite otsima teavet, et toetada rohkemate tuumaelektrijaamade ja/või tuumajäätmete matmispaikade ehitamist, tuginedes uute tehnikate kohta käivatele teaduslikele tõenditele. Otsite argumente tuumaenergia toetamiseks."
            },
            {
                title: "Tuumajaama töötaja",
                image: "card_radiation_worker.webp",
                story: "Tuumaelektrijaama töötajana pooldate selle tööstuse toimimist. Teie linnas said paljud inimesed tööd tuumaelektrijaama tööjõuvajaduse tõttu. Seega on teil seda tüüpi ettevõtte kohta väga positiivne arvamus.",
                story2: "Peate otsima tõendeid, mis näitavad teie riigis või ELis asuva tuumaelektrijaama või tuumajäätmete hoidlate loomisega tekitatud töökohtade eeliseid."
            }
        ],
        roleCardsAgainst : [
            {
                title: "Ökoloog",
                image: "card_radiation_green-activist.webp",
                story: "Te suhtute tuumaenergiasse täiesti negatiivselt ja loomulikult ei näe te ette uute tuumarajatiste võimalust. Pooldate taastuvenergiat, isegi kui teate, et need mõjutavad samuti keskkonda. Olete kõigi riigi tuumaelektrijaamade ja tuumajäätmejaamade sulgemise poolt.",
                story2: "Peate otsima tõendeid looduse ja keskkonna säilitamise ning taastuvenergia poolt ning tuumaenergia vastu."
            },
            {
                title: "Opositsioonipoliitik",
                image: "card_radiation_opposition-politician.webp",
                story: "Opositsioonipoliitikuna on teil  valimishuvid ning seega olete oma poliitilise vastase vastu. Teie erakond toetab taastuvenergiat kui alternatiivi traditsioonilistele energiaallikatele ja tuumaenergiale, väites, et energiasõltuvust teistest riikidest on võimalik vähendada. Siiski arvate, et kõigi tuumaelektrijaamade kiire sulgemine ei ole otstarbekas. Samuti väidate, et tekkivaid tuumajäätmeid tuleks käidelda (mis võib olla riigi jaoks majanduslikult kasulik), mistõttu ei ole te täielikult tuumajäätmehoidlate hoidlate rajamise vastu.",
                story2: "Otsige argumente tuumaenergia vastu ja taastuvate energiaallikate poolt, et astuda vastu oma poliitilisele vastasele."
            },
            {
                title: "Taastuvenergia teadlane",
                image: "card_radiation_renewable-scientist.webp",
                story: "Olete taastuvenergia ekspert ja veendunud, et riigi energiavajadust on võimalik rahuldada ainuüksi alternatiivsete energiaallikatega, ilma et oleks vaja kasutada tuumaenergiat. Olete tuumajaamade ja -hoidlate rajamise vastu, kuigi te ei poolda olemasolevate sulgemist kui energia üleminekuvarianti säästvama mudeli suunas.",
                story2: "Peate otsima teaduslikke argumente veenmaks, et riiki on võimalik varustada ainult taastuvenergiaga."
            },
            {
                title: "Tuuleenergia ettevõtja",
                image: "card_radiation_wind-enterpreneur.webp",
                story: "Olete tuumaenergia kasutamise vastu ja soovite müüa oma projekti tuumaelektrijaamade asendamiseks loodava avamere tuulepargiga. Teid juhivad majanduslikud ja ärihuvid ning väidate, et taastuvenergia on täiesti keskkonnasõbralik.",
                story2: "Peate otsima majandus-, töö- ja keskkonnatõendeid, mis toetaksid tuumaenergia kasutamise vastast seisukohta."
            }
        ],
        infoCards : [
            {
                title: "Väljakutsed",
                story: "Tuumatööstusel on kolm peamist väljakutset, mis takistavad tema täielikku panust säästvasse arengusse ja kliimamuutustega võitlemisse: rahastamine, avalik arvamus ja reguleerimine. Tuumasektor peab olema osa “rohelise rahastamise klassifikaatoritest”. Poliitikakujundajad ja avalikkus on üha enam tunnustanud tuumaenergia vähese CO₂-heitega omadusi ja kõrget töökindlust. Reaktorite projekteerimise litsentsimine peab toimuma riigipiiride üleselt."
            },
            {
                title: "Ühe riigi (USA) näide",
                story: "USA-s on viimastel aastatel päästetud ligi 20 reaktorit tarbetust enneaegsest sulgemisest – sulgemised ei suurendaks mitte üksnes kasvuhoonegaaside emissiooni, vaid ka energiasõltuvust ja põhjustaksid surmava õhusaaste. Praeguse reaktoripargi eluea pikendamist nii kaua kui võimalik peetakse eluliselt oluliseks ka paljude kohalike kogukondade jaoks, kelle majandus sõltub nendest reaktoritest."
            },
            {
                title: "Peatage globaalne soojenemine",
                story: "Temperatuuritõusu eesmärgi (1,5 °C) täitmine kulutõhusal ja sotsiaalselt õiglasel viisil nõuab palju suurema hulga tuumaenergia kiiret kasutuselevõttu. Tuumaenergia on hädavajalik õhusaasteainete ja kasvuhoonegaaside heitkoguste vähendamiseks, et tagada üleminek vähese CO₂-heitega tulevikule. Samuti, et see toimuks õiglasel moel pakkudes inimestele üle maailma energia ja jätkusuutlik tulevik."
            },
            {
                title: "Dekarboniseerimine",
                story: "(süsihappegaasiheitmest vabastamine) Tuumaenergia võimaldab massiliselt kiiret dekarboniseerimist ja seda on tõestatud. Tuumatehnoloogiad võivad toota elektrit nii suurtele võrkudele kui ka väikestele kogukondadele, pakkudes kaugkütet ja -jahutust, varustades tööstust protsessisoojust, tootdes vesinikku ja palju muud. See on ainuke energiaallikas, mis suudab toota vähese CO₂-heitega elektrit ja vähese süsinikdioksiidiheitega soojust, see võib olla mängumuutus kogu maailmamajanduse süsihappegaasist vabastamisel."
            },
            {
                title: "Jätkusuutlikkus",
                story: "Maailma säästva arengu vajaduste rahuldamiseks tuleb 2050. aastaks paigaldada rohkem kui 1200 GW tuumaenergiat. See tähendab 30 uue reaktori ehitamist aastas. Seda on varemgi tehtud, aga tänaseks pole me veel sellele tasemele jõudnud."
            },
            {
                title: "Uued arengud",
                story: "On vaja kiirendada väikeste modulaarsete reaktorite (SMR) ja kõrgtehnoloogiliste tuumatehnoloogiate väljatöötamist ja kasutuselevõttu. SMR-idel ja täiustatud tuumaenergialahendustel on oluline roll tuumasektori edasisel mitmekesistamisel ning tuumaenergia toomisel uute turgude ja rakenduste jaoks."
            },
            {
                title: "Kiirgus on meie elu loomulik osa",
                story: "Me kõik puutume iga päev kokku kiirgusega, saades keskmiselt 2-3 millisiivertit (mSv) aastas. Suurem osa sellest kiirgusest pärineb radoonist. Tuumatööstus vastutab väga väikese osa inimeste  kiirgusega kokkupuute eest. Tuumaelektrijaama läheduses elamine ohustab kohalikku elanikkonda keskmiselt 0,00009 mSv aastas. Seda perspektiivi silmas pidades annab 10 banaani või kahe brasiilia pähkli söömine sama kiirgusdoosi, kui elades aasta aega tuumajaama läheduses. Inimene on ka oma olemuselt radioaktiivne ja ühe aasta jooksul kellegi teise kõrval magamisel tekkiv kiirgusdoos on kümme korda suurem kui sama aja jooksul tuumajaama läheduses elades saadav kiiritus."
            },
            {
                title: "Õhusaaste põhjustatud suremus",
                story: "Fossiilkütused moodustavad praegu ligikaudu 80% kogu energiavarustusest, mis põhjustab nii kasvuhoonegaaside kui ka õhusaasteainete heitkoguseid. Õhusaaste tõttu sureb maailmas enneaegselt üle 8,5 miljoni inimese."
            },
            {
                title: "Surmavad õnnetused",
                story: "Hüdroenergia on surmavaim elektritootja, seda peamiselt tammide kokkuvarisemise ja üleujutuste tagajärgede tõttu. Banqiao tammi purunemine Hiinas 1975. aastal viis vähemalt 26 000 inimese uppumiseni ja õnnetuse teiseste tagajärgede tõttu hukkus kuni 150 000 inimest. Võrdluseks põhjustas Tšernobõli järgne kiirgusega kokkupuude 54 surmaga (sh 28 tuletõrjujat, kes puutusid õnnetuse ööl kokku surmava koguse kiirgusega, ja 15 surmaga lõppenud kilpnäärme- vähi juhtumit), samas kui kiirguse tõttu kannatanuid tõenäoliselt ei olnud Fukushima tuumaelektrijaama õnnetuses Jaapanis."
            },
            {
                title: "Radoon",
                story: "Radioaktiivse radooni sissehingamine on kopsuvähi peamine põhjus kogu maailmas ja on inimese ehitatud keskkonna tagajärg. Radoon-222 (222Rn) ja selle lagunemissaaduste, nagu poloonium (218Po) ja (214Po) alfaosakeste ioniseeriv kiirgus kahjustab kopsurakkude DNA-d, tekitades vähi teket soodustavaid geneetilisi mutatsioone. Radooni ja selle saadusi - alfaosakesi mõõdetakse bekerellides (Bq) kuupmeetri (m³) kohta, mis võrdub ühe osakese emissiooniga sekundis kuupmeetri õhu kohta. 100 Bq/m³ tähistab kokkupuudet, mille ületamisel on suurenenud suhteline eluaegne risk haigestuda kopsuvähki; statistiliselt oluliselt suureneb kopsuvähi suhteline risk kogu elu jooksul 16%3 pikaajalise radooniga kokkupuute tõttu."
            },
            {
                title: "Tuumajäätmehoidlad",
                story: "Rootsi valitsus kiitis 2022. aasta jaanuaris heaks Rootsi tuumaelektrijaamade radioaktiivsete jäätmete Rootsi lõpphoidla (tuumakalmistu) arendamise, hoolimata sõltumatute teadlaste suurest kriitikast. Juhtumit nimetatakse Rootsi kõigi aegade suurimaks keskkonnajuhtumiks, kuna kasutatud tuumkütust tuleks ohutult säilitada vähemalt 100 000 aastat."
            },
            {
                title: "Prantsusmaa näide",
                story: "Tuumaenergia moodustab peaaegu 75% Prantsusmaa elektritoodangust. 2022. aasta veebruaris teatas Prantsusmaa, et ehitab kuus uut tuumareaktorit, kaalub veel kaheksa ehitamist ja jätkab väikeste modulaarsete reaktorite arendamist. Samuti tuleks laiendada kõigi olemasolevate reaktorite tööd, ilma et see kahjustaks ohutust."
            },
            {
                title: "Uued arengud",
                story: "Maailma esimene kõrge temperatuuriga gaasjahutusega reaktor (HTGR) on Hiinas võrku ühendatud. HTGR-i kasutatakse elektritootmiseks, soojusvarustuseks, merevee magestamiseks jne. Hiina kavatseb kiirendada HTGR-tehnoloogia massilist kasutuselevõttu, luues samas arenenud tuumatööstuse."
            },
            {
                title: "Greenpeace",
                story: "Greenpeace väidab, et tuumaenergia maksaks liiga palju, et tarnida liiga vähe ja liiga hilja, suurendades samas ohtu ülemaailmsele julgeolekule. Greenpeace juhib tähelepanu tuumaenergia suurtele investeeringutele, regulaarsetele kulude ületamisele, pikkadele ehitusperioodidele, tohututele toetustele, tegevusriskidele, radioaktiivsete jäätmete tootmisele ja julgeoleku- probleemidele, mis on seotud tuumarelvade leviku ja terrorismiga."
            },
            {
                title: "Ioniseeriv kiirgus",
                story: "Ioniseeriv kiirgus võib kahjustada eluskudesid, muutes rakustruktuuri ja kahjustades DNA-d. Kahju suurus sõltub kiirguse liigist, kokkupuute rajast, kiirguse energiast ja neeldunud kiirguse koguhulgast. Väikese või isegi mõõduka kokkupuute mõju ei pruugi olla märgatav. Enamik rakukahjustusi on paranevad.  Kuid mõned rakud ei pruugi taastuda nii hästi kui teised ja võivad kahjustuda või muutuda vähkkasvajaks. Lapsed on ioniseeriva kiirguse suhtes tundlikumad kui täiskasvanud, sest lapsed on alles kasvamisjärgus. Seal on rohkem rakke jagunemas ja kiirgusel suurem võimalus  kasvuprotsessi häirida."
            },
            {
                title: "Meditsiiniline kiirgus",
                story: "Meditsiiniline kiirgus (röntgen) tekitab pildi, mis aitab leida luumurrud, kasvajad ja võõrkehad kehas ning seda kasutatakse ka kompuutertomograafias (CT-skaneeringud), mammograafias ja fluoroskoopias. Meditsiinilises röntgenikiirguses, hambaröntgenis ja mammogrammis kasutatakse suhteliselt väikeses koguses ioniseerivat kiirgust. CT-skaneerimine ja fluoroskoopilised protseduurid toovad kaasa suuremad kiirgusdoosid, kuna on vaja teha mitu pilti ja/või on pikem kokkupuuteaeg. CT-skaneerimine kiirgab kehale kuni mitusada korda rohkem kiirgust kui tavaline röntgenikiirgus."
            },
            {
                title: "Riski tajumine",
                story: "Märkimisväärne hulk psühholoogilisi uuringuid, mille eesmärk on mõista, miks me sageli ignoreerime mõningaid statistiliselt suurimaid riske (nt autojuhtimine, suitsetamine), samas kui kardame mõnda kõige väiksemat (nt tuumaenergia), on jõudnud järeldusele, et sellised tegurid nagu emotsioonid, vaimsed kujutluspildid ja usaldus, on riskide hindamisel kesksel kohal. Vähesed riskid kutsuvad esile nii tugeva vastuse kui kiirgus, eriti kui see on seotud tuumaenergiaga, seda suuresti tänu selle nähtamatusele, seostele vähiga ja meedias kuvatavatele piltidele."
            },
            {
                title: "Tuumaenergia",
                story: "Tuumatööstus väidab, et tuumaenergia kui vähese süsinikdioksiidiheitega allikas peab olema osa energiaallikate valikust ja lahendusest. Tuumaenergia on maailma üha kasvava energianõudluse rahuldamiseks ülioluline tänu selle võimele pakkuda taskukohast, usaldusväärset ja säästvat elektrit ja soojust. Vaatamata tuumaenergia paljudele eelistele, on selle kasutuselevõtt mõnes maailma paigas takistatud pikaajaliste väärarusaamade tõttu selle riskide kohta. Isegi selle ohutusrekordi juures – millele pole võrreldav ükski teine ​​energiaallikas – jääb tuumaenergia ainuohtlikkuse tajumine püsima. Inimesi tuleb harida tuumaenergia riskide ja eeliste kohta."
            },
            {
                title: "Kiirgusfoobia",
                story: "Vaadeldes kiirgusriske eraldiseisvalt, oleme loonud midagi kiirgusfoobia sarnast, mis nii otseselt kui ka kaudselt kahjustab inimesi kogu maailmas. Näiteks on hästi tõestatud, et suurem osa Tšernobõli ja Fukushima Daiichi tervisemõjudest ei olnud radioloogilised, vaid pigem psühhosotsiaalsed. on täheldatav ja järsult suurenenud depressioon, PTSH (posttraumaatiline stressihäire), ainete kuritarvitamine ja enesetappude arv, mida võib olulisel määral seostada ebakõlaga tegelike ja tajutavate kiirgusriskide ning nende stigmatiseerimise vahel."
            },
            {
                title: "Fossiilkütuste mõju",
                story: "Fossiilkütuste ajalooline kasutamine on kasvuhoonegaaside heitkoguste kaudu oluliselt kaasa aidanud kliimamuutustele, põhjustades enneolematuid muutusi Maa jätkusuutlikkuses.. Aastaks 2025 elab pool maailma elanikkonnast veesurvega piirkondades, kuna äärmuslik kuumus ja põud halvendavad veevarusid. Aastatel 2030–2050 põhjustab kliimamuutus alatoitluse, malaaria, kõhulahtisuse ja kuumastressi tõttu täiendavalt 250 000 surmajuhtumit aastas. Vaatamata kliimamuutustega seotud tohututest riskidest jääb meie sõltuvus kivisöest, naftast ja fossiilgaasist siiski püsima, kuna fossiilkütused annavad 2019. aastal 84% ülemaailmsest primaarenergiast. Kodumajapidamiste ja välisõhu saaste põhjustab igal aastal 8,7 miljonit surma, peamiselt fossiilkütuste jätkuvast kasutamisest. Tänase seisuga ei ole 770 miljonil inimesel üle maailma juurdepääsu elektrile, kusjuures üle 75% elanikkonnast elab Sahara-taguses Aafrikas."
            },
            {
                title: "Kiirgusallikad",
                story: "Inimpopulatsioon puutub pidevalt kokku mitmest looduslikust allikast pärineva ioniseeriva kiirgusega, mille võib liigitada kahte suurde kategooriasse: suure energiaga kosmilised kiired, mis langevad Maa atmosfääri ja eraldavad sekundaarset kiirgust (kosmiline panus); ja Maa tekke käigus tekkinud radioaktiivsed nukliidid, mis on siiani maakoores (maapealne panus). Maapealne panus koosneb peamiselt uraani ja tooriumi lagunemisahelate radionukliididest koos radioaktiivse kaaliumiga. Enamikul juhtudel on radoon, uraani radioaktiivsel lagunemisel tekkiv väärisgaas, kõige olulisem kiirgusega kokkupuude."
            },
            {
                title: "Pärast Tšernobõli",
                story: "Tšernobõli avarii mõjude uuringud on näidanud, et esialgsed hirmud kiirgusmõjude ees olid tugevalt liialdatud. Lisaks 38 kiirabitöötajate surmale õnnetuse varajases staadiumis on kilpnäärmevähi tõttu surnud 16 inimest, kuid muidu pole sagenenud haigestumine vähkkasvajatesse,  leukeemiasse  ega esinenud  suguelundite väärarenguid ning pärilikke tagajärgi. Inimeste evakueerimise ja mitme miljoni elaniku Tšernobõli ohvrite nimekirja kandmise otsused olid põhjendamatud ja seda ei tehtaks praeguste teadmiste valguses."
            },
            {
                title: "Taastuvad energiaallikad",
                story: "Tuul on puhas taastuv energiaallikas ja üks kõige kuluefektiivsemaid elektrienergia allikaid. See on täielikult taastuv ja ei saa kunagi otsa. Tuuleturbiinid võivad aga olla mürarikkad ja esteetiliselt ebameeldivad ning võivad mõnikord kahjustada neid ümbritsevat füüsilist keskkonda. Sarnaselt päikeseenergiaga on ka tuuleenergia vahelduv, mis tähendab, et turbiinid sõltuvad ilmastikust ega ole seetõttu võimelised ööpäevaringselt elektrit tootma. Tuuleparkide või üksikute turbiinide paigaldamine võib olla kulukas. Siiski on kasutuskulud suhteliselt madalad; nende kütus (tuul) on tasuta ja turbiinid ei vaja oma eluea jooksul liiga palju hooldust."
            },
            {
                title: "Tuuleturbiinid",
                story: "Tuuleenergia üks suuremaid miinuseid on müra ja visuaalne saaste. Tuuleturbiinid võivad töötamisel olla mürarikkad nii mehaanilise töötamise kui ka labade pöörlemisel tekkiva tuulepöörise tõttu. Lisaks, kuna tuuleturbiinid peavad olema ehitatud piisavalt kõrgele, et püüda piisavalt tuult, võivad turbiinid visuaalselt risustada muidu maalilisi maastikuvaateid,  nagu vaated mäeahelikele, järvedele, ookeanidele jms. Tuuleturbiini labad on väga suured ja pöörlevad väga suurel kiirusel. Kahjuks võivad nende terad kahjustada ja tappa neisse lendavaid liike, näiteks linde ja nahkhiiri. Tuuleparkide rajamine võib häirida ka kohalike liikide looduslikke elupaiku, kui seda ei tehta säästvalt. Neid probleeme saab siiski teatud määral lahendada tehnoloogiliste edusammude ja tuuleparkide õige asukohaga. Paljudel juhtudel võivad turbiinid ja tootmiskohad asuda elektrit vajavatest asustuskeskustest üsna kaugel. Seetõttu on ülekandeliinid täiendav osa infrastruktuurist, mis tuleb ehitada."
            }
        ]
    },


    pt: {
        roleCardsFavourTitle : "Papéis a favor da Posição 1",
        roleCardsAgainstTitle : "Papéis a favor da Posição 2",
        infoCardsTitle : "Cartões de informação",
        roleCardsLabel : "Papel",
        infoCardsLabel : "Informação",
        roleCardsFavour : [
            {
                title: "Político do governo",
                image: "card_radiation_government-politician.webp",
                story: "Como político do atual governo, tens interesses eleitorais e queres aumentar a taxa de emprego. O partido que representas apoia a energia nuclear como uma solução de energia viável, económica e sustentável. Defendes a criação de emprego resultante da instalação de uma central nuclear ou de um cemitério nuclear e a diminuição da dependência energética e da gestão de resíduos de outros países.",
                story2: "Procura argumentos a favor da energia nuclear para enfrentar o teu adversário político."
            },
            {
                title: "Gestor de um cemitério nuclear",
                image: "card_radiation_nuclear-cemetary.webp",
                story: "És a favor da energia nuclear e tentas defender os interesses económicos da tua empresa. Enquanto gestor tentas vender o teu projeto para construir e administrar um cemitério nuclear como uma instalação ligada à operação de uma central nuclear.  Apelas para a segurança oferecida por tais cemitérios.",
                story2: "Recorre a evidências que justifiquem que é necessário gerir os resíduos nucleares produzidos nas centrais em funcionamento para que não tenham de ser enviados para outros países."
            },
            {
                title: "Cientista nuclear",
                image: "card_radiation_nuclear-scientist.webp",
                story: "És uma pessoa que está a pesquisar novos métodos de reutilização de urânio em centrais de energia para que os resíduos sejam menos perigosos por um período mais curto após a sua utilização.",
                story2: "Deves procurar informações para defender a instalação de mais centrais nucleares e/ou cemitérios nucleares com base em evidências científicas de pesquisas sobre essas novas técnicas. Recorre a argumentos a favor da energia nuclear"
            },
            {
                title: "Trabalhador de uma Central nuclear",
                image: "card_radiation_worker.webp",
                story: "Como trabalhador de uma central nuclear, és a favor do funcionamento dessa indústria. Na tua cidade, muitas pessoas conseguiram empregos por causa da procura de mão de obra na central nuclear. Tens uma opinião muito favorável sobre esse tipo de empresas.",
                story2: "Deves procurar evidências para demonstrar os benefícios dos empregos gerados por uma central nuclear ou cemitério nuclear no teu país ou na UE."
            }
        ],
        roleCardsAgainst : [
            {
                title: "Ativista verde",
                image: "card_radiation_green-activist.webp",
                story: "Tens uma visão radicalmente negativa da energia nuclear e, claro, não vislumbras a possibilidade de mais instalações. És a favor das energias renováveis, mesmo sabendo que elas também têm impacto no meio ambiente. És a favor do encerramento das centrais nucleares e dos cemitérios do país.",
                story2: "Deves procurar evidências sobre as vantagens da natureza e do meio ambiente, posicionando-te contra a energia nuclear e defendendo as energias renováveis."
            },
            {
                title: "Político da oposição",
                image: "card_radiation_opposition-politician.webp",
                story: "Como político da oposição, tens interesses eleitorais e deves ser contra o teu adversário político. O teu partido apoia as energias renováveis como alternativa às fontes de energia tradicionais e nucleares, argumentando que é possível reduzir a dependência energética de outros países. No entanto, consideras que não é viável fechar todas as centrais nucleares a curto prazo e também argumentas que os resíduos nucleares gerados devem ser tratados (o que pode ser uma oportunidade económica para o país), então não discordas totalmente da instalação do cemitério.",
                story2: "Procura argumentos contra a energia nuclear e a favor das energias renováveis para enfrentar o teu adversário político."
            },
            {
                title: "Cientista de energia renovável",
                image: "card_radiation_renewable-scientist.webp",
                story: "És um especialista em energias renováveis e estás convencido de que é possível atender à procura energética de um país apenas com energias alternativas, sem a necessidade de usar a energia nuclear. És contra a instalação de centrais nucleares e cemitérios, embora não defendas o encerramento das existentes, como opção energética de transição para um modelo mais sustentável.",
                story2: "Procura argumentos científicos para convencê-lo de que é possível abastecer um país apenas com energia renovável."
            },
            {
                title: "Empreendedor de energia eólica",
                image: "card_radiation_wind-enterpreneur.webp",
                story: "És contra o uso de energia nuclear e queres vender o teu projeto de criação de um parque eólico offshore para substituir as centrais nucleares. És movido por interesses económicos e empresariais e defendes que as energias renováveis são totalmente ecológicas.",
                story2: "Procura evidências económicas, laborais e ambientais para apoiar as posições contra o uso da energia nuclear."
            }
        ],
        infoCards : [
            {
                title: "Desafios",
                story: "Três grandes desafios para impedir que a indústria nuclear contribua com todo o seu potencial para o desenvolvimento sustentável e o combate às mudanças climáticas: financiamento, perceção e regulamentação. O setor nuclear precisa integrar as “classificações de financiamento verde”. Tem havido um crescente reconhecimento entre os decisores políticos e o público, dos atributos de baixo carbono e alta confiabilidade da energia nuclear. O licenciamento de projetos de reatores precisa ser feito além das fronteiras nacionais."
            },
            {
                title: "Um exemplo nacional de referência",
                story: "Nos EUA, cerca de 20 reatores foram salvos do encerramento prematuro desnecessário nos últimos anos - encerramentos que aumentariam as emissões de gases de efeito estufa e prejudicariam a independência energética e resultariam em poluição atmosférica letal. Estender a vida útil da atual frota de reatores o máximo possível também é considerado de vital importância para muitas comunidades locais cuja economia depende desses reatores."
            },
            {
                title: "Parar o aquecimento global",
                story: "Atingir a meta de aumento de temperatura de 1,5°C de maneira económica e socialmente justa exigirá a implantação rápida de muito mais energia nuclear. A energia nuclear é essencial para evitar a emissão de poluentes atmosféricos e gases de efeito estufa, garantindo que a transição para um futuro de baixo carbono seja feita de forma equitativa e proporcionando às pessoas em todo o mundo um futuro sustentável e high-powered."
            },
            {
                title: "Descarbonização",
                story: "A energia nuclear permite uma rápida descarbonização em grande escala, e tem o histórico para provar isso. As tecnologias nucleares podem gerar eletricidade para grandes redes e pequenas comunidades, fornecer aquecimento e arrefecimento na zona, fornecer calor para a indústria, produzir hidrogénio e muito mais. Esta é a única fonte de energia que pode produzir eletricidade e calor com baixo teor de carbono e pode ser um fator fundamental para a profunda descarbonização de toda a economia global."
            },
            {
                title: "Sustentabilidade",
                story: "Mais de 1.200 GW de gerados por energia nuclear devem ser instalados até 2050 para atender às necessidades mundiais de desenvolvimento sustentável. Isso significa a construção anual de 30 novos reatores. Isso já foi feito antes, mas ainda não atingimos esse nível atualmente."
            },
            {
                title: "Novos desenvolvimentos",
                story: "Há uma necessidade urgente de acelerar o desenvolvimento e implantação de pequenos reatores modulares (SMRs) e tecnologias nucleares avançadas. Os SMRs e os projetos nucleares avançados desempenham um papel essencial na diversificação do setor nuclear e levarão a energia nuclear a novos mercados e aplicações."
            },
            {
                title: "Radiação",
                story: "A radiação é uma parte natural da nossa vida. Estamos todos expostos à radiação diariamente, recebendo em média 2-3 milisieverts (mSv) por ano. A maior parte dessa radiação vem do gás radão. A indústria nuclear é responsável por uma pequena parte da radiação a que o público está sujeito. Em média, morar perto de uma central nuclear expõe a população local a 0,00009 mSv/ano. Para colocar isso em perspetiva, comer dez bananas ou duas castanhas-do-Pará resulta na mesma dose de radiação que viver perto de uma central nuclear durante um ano. Os seres humanos também são naturalmente radioativos, e a dose de radiação de dormir ao lado de outra pessoa todas as noites durante um ano é dez vezes maior do que a exposição de viver perto de uma central nuclear no mesmo período."
            },
            {
                title: "Mortalidade causada pela poluição do ar",
                story: "Os combustíveis fósseis representam atualmente cerca de 80% da oferta total de energia, o que causa um nível significativo de emissões, tanto em termos de gases de efeito estufa quanto de poluentes atmosféricos. Mais de 8,5 milhões de pessoas estão a morrer prematuramente em todo o mundo por causa da poluição do ar."
            },
            {
                title: "Acidentes letais",
                story: "A energia hidroelétrica é o gerador de eletricidade mais mortal, principalmente devido ao colapso de barragens e às consequências das cheias. O colapso da barragem de Banqiao na China em 1975 levou pelo menos 26.000 pessoas à morte por afogamento e até 150.000 mortes resultantes dos efeitos secundários do acidente. Em comparação, a radiação por exposição após Chernobyl causou 54 mortes (incluindo 28 bombeiros expostos a quantidades letais de radiação durante a noite do acidente e 15 casos fatais de cancro de tiroide), enquanto nenhuma morte ocorreu devido à radiação no acidente em Fukushima Daiichi no Japão. Comité Científico das Nações Unidas sobre os Efeitos da Radiação."
            },
            {
                title: "Gás radão",
                story: "A inalação de gás radão radioativo é uma das principais causas de cancro de pulmão em todo o mundo e é uma consequência da construção humana. A radiação ionizante de partículas alfa do radão-222 (222Rn) e os seus descendentes de decaimento, como o polónio (218Po) e (214Po), danifica o DNA das células pulmonares para produzir mutações genéticas que promovem o cancro. As partículas alfa do radão e os seus derivados são medidas em Becquerels (Bq) por metro cúbico (m³), equivalente a uma emissão de partículas por segundo por metro cúbico de ar. 100 Bq/m³ marca uma exposição acima da qual um aumento do risco relativo ao longo da vida de cancro de pulmão é estatisticamente significativo. Há um aumento aditivo de 16% no  risco relativo de cancro de pulmão ao longo da vida para cada 100 Bq/m³ de exposição prolongada ao radão"
            },
            {
                title: "Cemitério nuclear",
                story: "O governo sueco aprovou em janeiro de 2022 o desenvolvimento do repositório sueco final (cemitério nuclear) para resíduos radioativos das centrais nucleares suecas, apesar das fortes críticas de cientistas independentes. O caso está a ser referido como o maior caso ambiental da Suécia, já que o combustível nuclear gasto deve ser armazenado com segurança por pelo menos 100.000 anos."
            },
            {
                title: "Exemplo da França",
                story: "A energia nuclear é responsável por cerca de 75% da produção de energia da França. Em fevereiro de 2022, a França anunciou que iria construir seis novos reatores nucleares, ponderar a construção de mais oito e avançar com o desenvolvimento de pequenos reatores modulares. O funcionamento de todos os reatores existentes deverá também ser prolongado sem comprometer a segurança."
            },
            {
                title: "Novos desenvolvimentos",
                story: "O primeiro reator refrigerado a gás de alta temperatura (HTGR) do mundo está conectado à rede na China. Os HTGRs são usados ​​para gerar energia, fornecimento de calor, dessalinização de água do mar, etc. A China planeia acelerar a implantação massiva da tecnologia HTGR enquanto estabelece uma indústria nuclear avançada."
            },
            {
                title: "Greenpeace",
                story: "A Greenpeace afirma que a energia nuclear custaria muito para ser entregue muito pouco e muito tarde, aumentando o risco para a segurança global. O Greenpeace aponta para os altos investimentos em energia nuclear, excessos regulares de custos, longos períodos de construção, subsídios maciços, riscos operacionais, produção de lixo radioativo e questões de segurança envolvendo proliferação e terrorismo."
            },
            {
                title: "A radiação ionizante",
                story: "A radiação ionizante pode danificar o tecido vivo, alterando a estrutura celular e danificando o DNA. O dano depende do tipo de radiação, via de exposição, energia e quantidade total de radiação absorvida. O efeito da exposição menor ou mesmo moderada pode não ser percetível. A maioria dos danos celulares é reparada. No entanto, algumas células podem não se recuperar tão bem quanto outras e podem tornar-se danificadas ou cancerígenas. As crianças são mais sensíveis à radiação ionizante do que os adultos porque as crianças ainda estão em processo de crescimento. Mais células estão a dividir-se e há uma oportunidade maior para que a radiação interrompa o processo de crescimento."
            },
            {
                title: "A radiação médica",
                story: "A radiação médica (raio-x) produz uma imagem que pode ajudar a encontrar ossos partidos, tumores e objetos estranhos no corpo e também é usada para tomografia computadorizada, mamografias e fluoroscopia. Raios-x médicos, raios-x odontológicos usam quantidades relativamente baixas de radiação ionizante. Tomografias computadorizadas e procedimentos fluoroscópicos resultam em doses de radiação mais altas devido à necessidade de múltiplas imagens e/ou maior tempo de exposição. As tomografias computadorizadas expõem um corpo a várias centenas de vezes mais radiação do que um raio-x convencional."
            },
            {
                title: "Perceção de risco",
                story: "Uma quantidade considerável de pesquisas psicológicas dedicadas a entender a razão que nos leva ignorar muitas vezes alguns dos riscos estatisticamente mais significativos (por exemplo, conduzir, fumar) enquanto tememos alguns dos riscos menores (por exemplo, energia nuclear) concluíram que fatores como emoções, imagens mentais e confiança, são fundamentais para a forma como avaliamos os riscos. Poucos riscos provocam uma reação tão forte como a radiação, especialmente em relação à energia nuclear, em grande parte graças à sua invisibilidade, às ligações com o cancro e às representações nos media."
            },
            {
                title: "A indústria nuclear",
                story: "A indústria nuclear afirma que a energia nuclear, como fonte de baixo carbono, precisa fazer parte do mix de soluções energéticas. A energia nuclear é crucial para atender à crescente procura mundial por energia, graças à sua capacidade de fornecer eletricidade e calor acessíveis, confiáveis e sustentáveis. Apesar dos muitos benefícios da energia nuclear, a sua implantação é prejudicada em algumas partes do mundo devido a equívocos de longa data sobre os seus riscos. Mesmo com seu histórico de segurança – inigualável por qualquer outra fonte de energia – a perceção da energia nuclear como perigosa, perdura. As pessoas precisam ser educadas sobre os riscos e benefícios da energia nuclear."
            },
            {
                title: "Medo da radiação",
                story: "Ao analisarmos os riscos das radiações de forma isolada, criámos algo semelhante a uma “fobia das radiações” que prejudica direta e indiretamente as pessoas em todo o mundo. Por exemplo, está definido que a grande maioria dos impactos na saúde resultantes de Chernobyl e Fukushima Daiichi não foram radiológicos, mas sim psicossociais. Na sequência destes acontecimentos, registou-se um aumento observável e dramático da depressão, da perturbação do stress pós-traumático, do abuso de substâncias e dos suicídios, o que pode ser significativamente atribuído à dissonância entre os riscos reais e percecionados das radiações e a estigmatização que provocaram."
            },
            {
                title: "Efeitos dos combustíveis fósseis",
                story: "O uso histórico de combustíveis fósseis contribuiu significativamente para a mudança climática por meio de emissões de gases de efeito estufa, causando mudanças sem precedentes na habitabilidade da Terra. Até 2025, metade da população mundial irá viver em áreas com escassez de água, pois o calor extremo e as secas agravam os recursos hídricos. Entre 2030 e 2050, espera-se que a mudança climática provoque mais 250.000 mortes por ano causados pela desnutrição, malária, diarreia e stress por calor. No entanto, apesar dos enormes riscos associados às mudanças climáticas, a nossa dependência pelo carvão, petróleo e gás fóssil permanece, com os combustíveis fósseis fornecendo 84% da energia primária global em 2019. A Poluição do ar doméstico e ambiental, causa 8,7 milhões de mortes anualmente devido ao uso contínuo de combustíveis fósseis. Atualmente, 770 milhões de pessoas em todo o mundo não têm acesso à eletricidade, com mais de 75% dessa população a viver na na África Subsaariana."
            },
            {
                title: "Fontes de radiação",
                story: "A população humana está continuamente exposta à radiação ionizante de diversas fontes naturais que podem ser classificadas em duas grandes categorias: raios cósmicos de alta energia incidentes na atmosfera da Terra e libertando radiação secundária (contribuição cósmica); e nuclídeos radioativos gerados durante a formação da Terra e ainda presentes na crosta terrestre (contribuição terrestre). A contribuição terrestre é composta principalmente pelos radionuclídeos das cadeias de declínio do urânio e tório e potássio radioativo. Na maioria das circunstâncias, o radão, um gás nobre produzido pela decomposição radioativa do urânio, é o principal causador da exposição à radiação."
            },
            {
                title: "Depois de Chernobyl",
                story: "Os estudos dos efeitos do acidente de Chernobyl mostraram que os medos iniciais dos efeitos da radiação foram altamente exagerados. Além de 38 mortes de socorristas na fase inicial do acidente, houve 16 mortes de pessoas devido ao cancro  da tiroide. Ainda assim, por outro lado, não houve aumento de cancros sólidos, leucemia ou malformações genitais, e nenhum efeito genético foi detetado. As decisões de evacuar pessoas e incluir vários milhões de habitantes na lista de “vítimas de Chernobyl” foram injustificadas e não seriam tidas em conta à luz do conhecimento atual."
            },
            {
                title: "Renováveis",
                story: " O vento é uma fonte de energia limpa e renovável e é uma das fontes de eletricidade com melhor custo-benefício. É totalmente renovável e nunca se esgotará. No entanto, as turbinas eólicas podem ser barulhentas e esteticamente desagradáveis ​​e, às vezes, podem ter um impacto adverso no ambiente físico ao seu redor. Como a energia solar, a energia eólica também é intermitente, o que significa que as turbinas dependem do clima e, portanto, não são capazes de gerar eletricidade 24 horas por dia, 7 dias por semana. Parques eólicos ou turbinas individuais podem ser caros para instalar. No entanto, uma vez em operação, os custos operacionais são relativamente baixos; o seu combustível (vento) é gratuito e as turbinas não requerem muita manutenção ao longo de sua vida útil."
            },
            {
                title: "Turbinas eólicas",
                story: "Uma das desvantagens mais significativas da energia eólica é a poluição sonora e visual. As turbinas eólicas podem ser barulhentas a trabalhar devido à operação mecânica e ao vórtice de vento criado quando as pás giram. Além disso, como as turbinas eólicas precisam ser construídas em zonas altas e amplas o suficiente para capturar uma boa quantidade de vento, as turbinas podem frequentemente transformar a paisagem, como cadeias de montanhas, lagos, oceanos e muito mais. As pás de uma turbina eólica são enormes e giram em velocidades muito altas. Infelizmente, as suas lâminas podem ferir e matar espécies que voam na sua direção, como aves e morcegos. A construção de parques eólicos também pode perturbar os habitats naturais das espécies locais se não for conduzida de forma sustentável. No entanto, esses problemas podem ser resolvidos até certo ponto com avanços tecnológicos e parques eólicos com localização adequada. Em muitos casos, as turbinas e os locais de produção energética podem estar muito afastados dos centros populacionais onde a eletricidade é necessária. Portanto, as linhas de transmissão são uma infraestrutura adicional necessita ser construída."
            }
        ]
    },







    sv: {
        roleCardsFavourTitle : "Roller till förmån för position 1 (För kärnkraft)",
        roleCardsAgainstTitle : "Roller till förmån för position 2 (Imot kärnkraft)",
        infoCardsTitle : "Info kort",
        roleCardsLabel : "Roll",
        infoCardsLabel : "Info",
        roleCardsFavour : [
            {
                title: "Regeringspolitiker",
                image: "card_radiation_government-politician.webp",
                story: "Som politiker i nuvarande regering har man väljarintressen och vill öka sysselsättningsgraden. Ditt parti stöder kärnenergi som en genomförbar, ekonomisk och hållbar energilösning. Du försvarar skapandet av arbetstillfällen som skulle bli resultatet av installationen av ett kärnkraftverk eller en kärnkraftskyrkogård och det minskade beroendet av energi och avfallshantering av andra länder.",
                story2: "Du söker argument till förmån för kärnenergi för att konfrontera din politiska motståndare."
            },
            {
                title: "Chef för en kärnkrafts avfallslutförvaring",
                image: "card_radiation_nuclear-cemetary.webp",
                story: "Du är för kärnkraft och försöker försvara företagets ekonomiska intressen. Du försöker sälja ditt projekt för att bygga och förvalta en kärnkraftsavfallsdepå som en anläggning kopplad till driften av ett kärnkraftverk. Du hänvisar till hög säkerhetsnivå av sådana slutförvaringsplatser.",
                story2: "Det måste stödjas av bevis som motiverar att det är nödvändigt att hantera det kärnavfall som produceras i driftanläggningar så att det inte behöver skickas till andra länder."
            },
            {
                title: "Kärnfysiker",
                image: "card_radiation_nuclear-scientist.webp",
                story: "Du är en person som forskar om nya metoder för att återanvända uran i kärnkraftverk så att avfallet blir mindre farligt under en kortare tid efter deponering.",
                story2: "Du bör söka information för att göra ett argument för att installera fler kärnkraftverk och/eller anläggningar för slutförvar av använt kärnbränsle baserat på vetenskapliga bevis, på forskning om dessa nya tekniker. Du söker argument för kärnenergi."
            },
            {
                title: "Arbetare på ett kärnkraftverk",
                image: "card_radiation_worker.webp",
                story: "Som arbetare på ett kärnkraftverk är du för driften av denna industri. I din stad fick många jobb på grund av efterfrågan på arbetskraft vid kärnkraftverket. Så du har en mycket positiv uppfattning om den här typen av företag.",
                story2: "Du måste leta efter bevis för att visa fördelarna med de jobb som genereras av ett kärnkraftverk eller anläggningar för slutförvar av använt kärnbränsle i ditt land eller EU."
            }
        ],
        roleCardsAgainst : [
            {
                title: "Grön aktivist",
                image: "card_radiation_green-activist.webp",
                story: "Man har en radikalt negativ syn på kärnenergi och ser förstås inte möjlighet till fler installationer. Du är för förnybar energi, även om du vet att den också påverkar miljön. Ni är för stängningen av alla kärnkraftverk och emot uppförandet av anläggningar för slutförvar av använt kärnbränsle i landet.",
                story2: "Du måste leta efter bevis för att gynna natur och miljö och positionera dig mot kärnkraft och för förnybar energi."
            },
            {
                title: "Politiker från oppositionen",
                image: "card_radiation_opposition-politician.webp",
                story: "Som politiker från oppositionen har du valintressen och måste vara emot din politiska motståndare. Ert parti stödjer förnybar energi som ett alternativ till traditionella energikällor och kärnenergi, med argumentet att det är möjligt att minska energiberoendet av andra länder. Du anser dock att det inte är möjligt att stänga alla kärnkraftverk på kort sikt och argumenterar också för att kärnavfallet som genereras bör behandlas (vilket kan vara en ekonomisk möjlighet för landet), så du håller inte helt emot etableringen av en anläggning för kärnkrafts avfallslutförvaring.",
                story2: "Leta efter argument mot kärnenergi och för förnybara energikällor för att konfrontera din politiska motståndare."
            },
            {
                title: "Forskare inom förnybar energi",
                image: "card_radiation_renewable-scientist.webp",
                story: "Du är expert på förnybar energi och övertygad om att det är möjligt att möta ett lands energibehov enbart med alternativa energier, utan att behöva använda kärnenergi. Ni är emot installationen av kärnkraftverk och en kärnkraftsavfallslutförvaring, även om ni inte förespråkar nedläggning av de befintliga kärnkraftverk, som ett övergångsalternativ för en mer hållbar energiproduktions modell.",
                story2: "Du kommer att behöva leta efter vetenskapliga argument för att övertyga andra om att det är möjligt att förse ett land enbart med förnybar energi."
            },
            {
                title: "Vindenergi entreprenör",
                image: "card_radiation_wind-enterpreneur.webp",
                story: "Du är emot användningen av kärnkraft och vill sälja ditt projekt för att skapa en havsbaserad vindkraftspark för att ersätta kärnkraftverk. Du drivs av ekonomiska och affärsmässiga intressen och hävdar att förnybar energi är helt miljövänlig.",
                story2: "Du måste leta efter ekonomiska, arbetskrafts- och miljömässiga bevis för att stödja ståndpunkterna mot användningen av kärnenergi."
            }
        ],
        infoCards : [
            {
                title: "Utmaningar",
                story: "Det finns tre stora utmaningar som hindrar kärnkraftsindustrin i att göra sitt fulla potentiella bidrag till hållbar utveckling och bekämpa klimatförändringar: finansiering, allmänhetens uppfattning och reglering. Kärnkraftssektorn måste vara en del av “grön finansieringsklassificering”. Det har funnits ett växande erkännande bland beslutsfattare och allmänheten för kärnkraftens låga koldioxidutsläpp och höga tillförlitlighet. Licensiering av reaktorkonstruktioner måste göras över nationella gränser."
            },
            {
                title: "Ett ledande nationsexempel",
                story: "I USA har nästan 20 reaktorer räddats från onödig för tidig stängning de senaste åren – stängningar som inte bara skulle öka utsläppen av växthusgaser, utan också undergräva energioberoendet och resultera i dödliga luftföroreningar. Att förlänga livslängden för den nuvarande reaktorflottan så länge det är möjligt anses också vara mycket viktigt för många lokala samhällen vars ekonomi är beroende av dessa reaktorer."
            },
            {
                title: "Stoppa global uppvärmning",
                story: "För att nå målet för en temperaturhöjning på max 1,5°C på ett kostnadseffektivt och socialt rättvist sätt kommer det att krävas en snabb utbyggnad av mycket mer kärnenergi. Kärnenergi är avgörande för undvika utsläpp av luftföroreningar och växthusgaser, se till att övergången till en framtid med låga koldioxidutsläpp sker på ett rättvist sätt som ger människor över hela världen en energirik och hållbar framtid."
            },
            {
                title: "Avkarbonisering",
                story: "Kärnkraft möjliggör snabb avkolning i massiv skala. Kärnkraftteknik kan generera elektricitet för både stora nät och små samhällen, tillhandahålla fjärrvärme och kyla, leverera processvärme till industrin, producera väte och så mycket mer. Detta är den enda energikällan som kan producera elektricitet och värme med låga koldioxidutsläpp, det kan vara en game-changer för den omfattande dekarboniseringen av hela den globala ekonomin."
            },
            {
                title: "Hållbarhet",
                story: "Mer än 1200 GW kärnkraft måste installeras senast 2050 för att möta världens behov av hållbar utveckling. Det innebär byggandet av 30 nya reaktorer årligen. Det har man gjort tidigare, men vi har inte nått den nivån än idag."
            },
            {
                title: "Nya utvecklingar",
                story: "Det finns ett akut behov av att påskynda utvecklingen och utbyggnaden av små modulära reaktorer (SMR) och avancerad kärnteknik. SMR och avancerade kärnkraftsprojekt kommer att spela en viktig roll för att ytterligare diversifiera kärnkraftssektorn och föra kärnkraft till nya marknader och tillämpningar."
            },
            {
                title: "Strålning",
                story: "Strålning är en naturlig del av vårt liv. Vi utsätts alla för strålning varje dag och i genomsnitt får 2-3 millisievert (mSv) per år. Mest av denna strålning kommer från radongas. Kärnkraftsindustrin står för en mycket liten del av strålningsexponering för allmänheten. Boende i närheten av ett kärnkraftverk utsätts i genomsnitt 0,00009mSv/år. För att sätta detta i perspektiv, äta 10 bananer eller två paranötter resulterar i samma stråldos som att bo i närheten av ett kärnkraftverk i ett år. Människor är också naturligt radioaktiva, och stråldosen från att sova bredvid någon annan varje natt under ett år är tio gånger högre än exponeringen från att bo i närheten av ett kärnkraftverk under samma tidsperiod."
            },
            {
                title: "Dödlighet orsakad av luftföroreningar",
                story: "Fossila bränslen står för närvarande för cirka 80% av den totala energitillförseln, vilket orsakar betydande nivåer av utsläpp i termer av både växthusgaser och luftföroreningar. Över 8,5 miljoner människor dör i förtid i världen på grund av luftföroreningar."
            },
            {
                title: "Dödliga olyckor",
                story: "Statistiskt sett, vattenkraft är den dödligaste el-energiproducent, mest på grund av kollapsande dammar och följande av översvämningar. Banqiaodammens haveri i Kina 1975 ledde till att minst 26 000 människor drunknade, och så många som 150 000 dödsfall till följd av sekundära effekter av olyckan. I jämförelse, strålnings exponering från Tjernobyl olyckan orsakade 54 dödsfall, medan inga dödsoffer på grund av strålning sannolikt kommer att inträffa från olyckan vid Fukushima Daiichi i Japan. Enligt FN:s vetenskapliga kommitté för effekterna av strålning."
            },
            {
                title: "Radongas",
                story: "Inandning av radioaktiv radongas är en viktig orsak till lungcancer över hela världen. Alfapartikeljoniserande strålning från radon- 222 (222 Rn) och dess vidare sönderfallspartiklar som polonium (218 Po) och (214 Po) skadar lungcells DNA och producerar genetiska mutationer som främjar cancer. Strålningen från radon mäts i Becquerel (Bq) per kubikmeter (m³), motsvarande ett partikelutsläpp per sekund per kubikmeter luft. 100 Bq /m³ markerar en exponering över vilken gräns en ökad relativ livstidsrisk för lungcancer är statistiskt signifikant. Det finns en additiv ökning på 16% av den relativa livstidsrisken för lungcancer för varje 100 Bq /m 3 långvarig radonexponering."
            },
            {
                title: "Kärnkraftsavfalldepå",
                story: "Den svenska regeringen godkände i januari 2022 utvecklingen av det svenska slutförvaret för radioaktivt avfall från de svenska kärnkraftverken, trots hård kritik från oberoende forskare. Fallet omnämns som Sveriges största miljömål någonsin då det använda kärnbränslet ska förvaras säkert i minst 100 000 år."
            },
            {
                title: "Exempel av Frankrike",
                story: "Kärnkraft står för nästan 75 % av Frankrikes el-kraftproduktion. I februari 2022 meddelade Frankrike att de kommer att bygga sex nya kärnkraftsreaktorer, överväga att bygga ytterligare åtta och driva vidare utvecklingen av små modulära reaktorer (SMR). Driften av alla befintliga reaktorer bör också utökas utan att kompromissa med säkerheten."
            },
            {
                title: "Nya utvecklingar",
                story: "Världens första gaskylda högtemperaturreaktor (HTGR) är ansluten till nätet i Kina. HTGR används för elproduktion, värmeförsörjning, avsaltning av havsvatten, etc. Kina planerar att påskynda den massiva utbyggnaden av HTGR-teknologin, samtidigt som man etablerar en avancerad kärnkraftsindustri."
            },
            {
                title: "Greenpeace",
                story: "Greenpeace hävdar att kärnkraft kostar för mycket och levererar för lite och för sent, samtidigt som den ökar risken för den globala säkerheten. Greenpeace pekar på kärnkraftens höga investeringar, regelbundna kostnadsöverskridanden, långa byggperioder, enorma subventioner, operativa risker, produktion av radioaktivt avfall och säkerhetsfrågor som involverar spridning och terrorism."
            },
            {
                title: "Joniserande strålning",
                story: "Joniserande strålning kan skada levande vävnad genom att ändra cellstruktur och skada DNA. Hur stor skadan blir beror på typen av strålning, exponeringsvägen, strålningens energi och den totala mängden strålning som absorberas. Effekten från liten eller till och med måttlig exponering kanske inte märks. De flesta cellskador kan repareras. Men vissa celler kanske inte återhämtar sig lika bra som andra och kan bli cancerösa. Barn är mer känsliga för joniserande strålning än vuxna eftersom barn fortfarande växer. Det finns många fler celler hos barn som delar sig och en större möjlighet för strålning att störa tillväxtprocessen."
            },
            {
                title: "Medicinsk röntgenstrålning",
                story: "Medicinsk röntgenstrålning ger en bild som kan hjälpa till att hitta brutna ben, tumörer, främmande föremål i kroppen och används även för datortomografi (CT-skanningar) och mammografi. Tandröntgen och mammografi använder relativt låga mängder av joniserande strålning. Datortomografi resulterar i högre stråldoser på grund av behovet av flera bilder och/eller längre exponeringstid. CT-skanningar exponerar en kropp upp till flera hundra gånger mer strålning än en konventionell röntgen."
            },
            {
                title: "Riskuppfattning",
                story: "En avsevärd mängd av psykologisk forskning som ägnats åt att förstå varför vi ofta ignorerar några av de statistiskt största riskerna ( t.ex. bilkörning, rökning), samtidigt som vi fruktar några av de minsta (t.ex. kärnkraft), har kommit fram till att faktorer som känslor, mentala bilder och förtroende, är centrala för hur vi bedömer risker. Få risker framkallar en så stark reaktion som strålning, särskilt i samband med kärnkraft, till stor del tack vare dess osynlighet, kopplingar till cancer och medieskildringar."
            },
            {
                title: "Kärnkraft",
                story: "Kärnkraftsindustrin hävdar att kärnkraft, som en lågkoldioxidkälla, måste vara en del av samhällets energiproblemlösningar. Kärnenergi är avgörande för att möta världens ständigt ökande efterfrågan på energi, tack vare dess förmåga att leverera prisvärd, pålitlig och hållbar el och värme. Trots de många fördelarna med kärnenergi, hindras dess utbyggnad i vissa delar av världen på grund av långvariga missuppfattningar om dess risker. Även med dess säkerhetsresultat – oöverträffad av någon annan energikälla – består uppfattningen av kärnkraft som unikt farlig. Människor behöver utbildas om risker och fördelar med kärnenergi."
            },
            {
                title: "Strålningsfobi",
                story: "Genom att titta på strålningsrisker isolerat har vi skapat något som liknar en “strålningsfobi”, som både direkt och indirekt påverkar människor runt om i världen. Det är till exempel välkänt att de allra flesta av hälsoeffekterna från Tjernobyl och Fukushima Daiichi var inte radiologiska, utan snarare psykosociala. Där har varit en ökning av depression, PTSD, drogmissbruk och självmord efter dessa händelser, vilket avsevärt kan tillskrivas dissonansen mellan de faktiska och upplevda riskerna av strålning och den stigmatisering de orsakade."
            },
            {
                title: "Effekter av fossila bränslen",
                story: "Effekter av fossila bränslen. Den historiska användningen av fossila bränslen har bidragit avsevärt till klimatförändringarna genom utsläpp av växthusgaser, vilket orsakat enorma förändringar i jordens befolkning livsförutsättningar. År 2025 kommer hälften av världens befolkning att bo i ”vattenstressade” områden, eftersom extrem värme och torka minskar tillgång till vattenresurserna. Mellan 2030 och 2050, förväntas klimatförändringar vara orsaken till ytterligare 250 000 dödsfall per år, till följd av undernäring, malaria, diarré och värmestress. Ändå, trots de enorma risker som är förknippade med klimatförändringar, fortsätter vårt beroende av kol-, olja- och fossilgaser. Fossila bränslen står för 84 % av den globala primärenergin 2019. Hushållens och omgivande luftföroreningar orsakar 8,7 miljoner dödsfall varje år, till stor del på grund av den fortsatta användningen av fossila bränslen. 770 miljoner människor runt om i världen har inte tillgång till elektricitet idag, och över 75 % av den befolkningen bor i Afrika söder om Sahara"
            },
            {
                title: "Strålningskällor",
                story: "Mänskligheten utsätts kontinuerligt för joniserande strålning från flera naturliga källor som kan klassificeras i två breda kategorier: kosmiska strålar med hög energi som träffar jordens atmosfär där frigörs sekundär strålning (kosmiskt bidrag); och radioaktiva nuklider som genereras under bildningen av jorden och som fortfarande finns i jordskorpan (markbundet bidrag). Det terrestra bidraget består huvudsakligen av radionuklider från uran- och toriumsönderfallskedjorna tillsammans med radioaktivt kalium. I de flesta fall är radon, en ädelgas som produceras i radioaktivt sönderfall av uran, den viktigaste bidragsgivaren till strålningsexponering."
            },
            {
                title: "Efter Tjernobyl",
                story: " Studier av effekterna av Tjernobylolyckan har visat att den initiala rädslan för strålningseffekter var mycket överdriven. Utöver 38 dödsfall av räddningspersonal i det tidiga skedet av olyckan har 16 personer död på grund av sköldkörtelcancer, men i övrigt har det inte skett någon ökning av tumörcancerformer, leukemi eller genitalmissbildningar, och inga ärftliga effekter har upptäckts. Besluten om evakuering av människor och att inkludera flera miljoner invånare på listan över “Tjernobyloffer” var orättfärdiga och skulle inte fattas i ljuset av nuvarande kunskap."
            },
            {
                title: "Förnybar energi",
                story: "Vind är en ren, förnybar energikälla och är en av de mest kostnadseffektiva källorna för el. Den är helt förnybar och kommer aldrig att ta slut. Däremot kan vindturbiner vara bullriga och föga tilltalande estetiskt och kan ibland påverka den fysiska miljön runt dem negativt. I likhet med solkraft är vindkraft också beroende av väder och därför inte kan generera elektricitet 24/7. Vindkraftsparker eller enskilda turbiner kan vara dyra att installera. Men när de väl är igång är driftskostnaderna relativt låga; deras bränsle (vind) är gratis, och turbinerna kräver inte alltför mycket underhåll under sin livstid."
            },
            {
                title: "Vindturbiner",
                story: "En av nackdelarna med vindkraftverk är att vindturbinbladspetsarna rör sig med mycket höga hastigheter. Tyvärr kan de skada och döda arter som flyger in i dem, som fåglar och fladdermöss. Byggandet av vindkraftsparker kan också störa naturliga livsmiljöer för lokala arter om det inte bedrivs på ett hållbart sätt. Dessa problem kan dock till viss del lösas med tekniska framsteg och korrekt placerade vindkraftsparker. I många fall kan turbiner och produktionsplatser ligga ganska långt från de tätorter där el behövs. Därför blir elledningar en kostsam del av infrastruktur som måste byggas."
            }
        ]
    }
}
</i18n>

