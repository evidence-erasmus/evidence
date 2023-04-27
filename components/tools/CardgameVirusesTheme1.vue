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

        <h2 class="text-2xl print:break-before-page">{{ t('positionCardsTitle') }}</h2>

        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >
            <ToolsCardgameCard v-for="(cardP, i) in tm('positionCards')" :key="`cardP${i}`"
                :title="rt(cardP.title)" :story="rt(cardP.position)" border="border-amber-500"
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
        "positionCardsTitle" : "Position cards",
        "storyCardsLabel" : "Story",
        "infoCardsLabel" : "Info",
        "storyCards" : [
            {
                "title": "",
                "image": "card_viruses_11.webp",
                "story": "My son Francesco was a lively, intelligent, curious boy who was always healthy. Two years ago, at the age of 12, he died suddenly of meningitis at a summer camp. During the holidays, another boy also went down with meningitis but suffered no further consequences. All the youngsters at the camps received a preventive dose of antibiotics. At the hospital, they told us there was a vaccine against the pathogen that killed our son. On top of the tremendous pain of losing my son, it hurts me even more, to think that he would still be alive today if he had been vaccinated."
            },
            {
                "title": "",
                "image": "card_viruses_12.webp",
                "story": "I was very reluctant to accept the flu vaccination when our family doctor offered it to us this year. Since we retired, my husband has developed heart failure, and we have been vaccinated every year. Still, we caught the flu last year even though we had been vaccinated. This year our doctor offered us the vaccine again, and, as he insisted, we agreed to be vaccinated. He told us this year’s virus was similar to the one that caused the Spanish flu epidemic at the beginning of the last century. Still, a terrible outbreak like that didn’t happen, and neither my husband nor I became ill. We have the impression that vaccination is a pointless, costly practice carried out for the benefit of drug companies."
            },
            {
                "title": "",
                "image": "card_viruses_13.webp",
                "story": "Our five years old daughter Anna has had several allergic to different foods, pollen, and medications, but also some vaccines towards which she has developed overreactions (high fever, skin rash all over the body), so it has been difficult for us as parents to give her all the recommended vaccines as scheduled. Since she went to preschool, we have been very worried after encountering other parents refusing vaccines for their children suggesting that vaccines are pointless, if not even dangerous. As Anna has not got all the scheduled vaccines, we are afraid she is especially vulnerable when being in the same group with children not vaccinated with the routinely scheduled vaccines."
            },
            {
                "title": "",
                "image": "card_viruses_14.webp",
                "story": "I read a World Health Organisation leaflet at the pediatrician’s surgery. In 1998, about a thousand children suffered paralysis daily due to the polio virus. Most of them lived in the poorest countries. After worldwide vaccination campaigns, in 2000, only 30 children a day suffered paralysis due to polio. When I had my son vaccinated, I felt part of a project. I did it for him, his brothers and sisters, and all children, particularly those in the most deprived situations."
            },
            {
                "title": "",
                "image": "card_viruses_15.webp",
                "story": "At the age of two, the paediatrician diagnosed a disorder on the autistic spectrum in our son Esteve. We detected the first symptoms after the second vaccination. He was irritable, he wouldn’t look at us, he didn’t like being picked up and he was living as if he were alone. We read an article on the internet from the medical journal Lancet that related autism and vaccines. The paediatrician told us the article had been withdrawn because of fraud and many subsequent studies had rejected the relationship between vaccination and autism. The paediatrician also told us that the disease is usually diagnosed at about the same time as children are vaccinated, so some people wrongly believe there is a link between the two things. We understood what he was saying, but that doubt will always be there."
            },
            {
                "title": "",
                "image": "card_viruses_16.webp",
                "story": "An outbreak of measles has been declared at the university I’ve been attending for the last few months. To start with there were a few isolated cases, but the epidemic has spread and now a lot of people are ill. Some have been admitted to hospital. The complications of measles in adults can be serious, so the authorities decided that, in order to attend courses, vaccination records had to be presented or students would have to prove they had already had the disease. As vaccines are not compulsory, I don’t believe institutions should invade our privacy in this way."
            }
        ],
        "infoCards" : [
            {
                "title": "Vaccination coverage",
                "story": "With the success of vaccines, the seriousness of certain diseases is no longer perceived. As a result, vaccines are forgotten or even refused, exposing the population to severe impacts on health. If coverage in the population falls, some epidemics can reappear, as happened with diphtheria in some countries since the mid-1980s. E.g. in the lands formerly belonging to USSR, the diphtheria outbreak reached, in sum, 50 000 cases in 1995."
            },
            {
                "title": "Vaccination is an act of solidarity",
                "story": "Vaccination is an act of solidarity helping in the fight against diseases and epidemics around the world. Unvaccinated people threaten those who cannot be vaccinated for medical reasons (for example, young children, pregnant women, and people with immune deficiencies)."
            },
            {
                "title": "Who covers the costs?",
                "story": "In most of the EU countries, the cost of recommended essential vaccines is covered by social security. The cost of additional vaccines not included in the vaccine schedule is not covered."
            },
            {
                "title": "Vaccines protect us",
                "story": "Vaccines are the most effective way of protecting us from severe diseases like diphtheria, tetanus, whooping cough, polio, meningitis, measles, and many others. Thanks to the high percentage of vaccinated people, the propagation of these diseases in Europe and beyond has dramatically declined or completely disappeared."
            },
            {
                "title": "Benefits and risks of vaccines",
                "story": "The vaccines on the market have already been successfully tested on millions of children and adults. They are considered to be among the safest drugs. There are no risk-free vaccines, but the danger is much less than from natural diseases. Serious side effects are infrequent. E.g., about 1 in 10 get swelling around the site of infection, and even fewer people get fevers. Both disappear within a few days."
            },
            {
                "title": "Vaccines and autism",
                "story": "Some years ago, an article was published in the scientific journal The Lancet that associated vaccines with autism. Despite this, 20 studies were carried out in six different countries, with the participation of thousands of people; no association was found between the triple virus vaccine (measles, mumps, and rubella) and autism."
            },
            {
                "title": "Chickenpox",
                "story": "Chickenpox is a highly contagious viral disease passed from person to person and is usually contracted during childhood. At that age, chicken pox is an unpleasant but generally harmless disease. The risk of complications increases sharply, though, when a person goes down with chicken pox as an adult. It is, therefore, essential to protect all teenagers who have not had the disease during childhood with vaccination."
            },
            {
                "title": "Reduction in mortality",
                "story": "Vaccines against diphtheria, tetanus, whooping cough, and measles can save 2.5 million children’s lives yearly. They are among the most productive and cost-effective public health measures. Without the vaccination programme against COVID-19 in the US, by the end of June 2021, there would have been approximately 279,000 additional deaths and up to 1.25 million other hospitalizations."
            },
            {
                "title": "100% protection?",
                "story": "No vaccine offers 100% protection, but there are measures allowing increased protection, such as booster doses - a different vaccine administration after an earlier amount. After initial immunization, a booster dose is a re-exposure to the immunizing antigen. It is intended to increase immunity against that antigen back to protective levels after memory against that antigen has declined. For example, tetanus shot boosters are often recommended every ten years. By this point, memory cells specific against tetanus lose their function or undergo apoptosis."
            },
            {
                "title": "Getting vaccinated against the flu",
                "story": "Flu kills hundreds of thousands of people every year. Vaccination is particularly recommended for people over 65, chronic diabetes patients, people with weakened immune systems, and health personnel. Flu vaccination has to be repeated every year, as the virus responsible for the epidemics is constantly changing."
            },
            {
                "title": "Life expectancy",
                "story": "A significant part of the increase in our life expectancy, which is now above 80 in many European countries, is that we are almost all vaccinated. Today, vaccination is still the best preventive tool against certain infectious diseases."
            },
            {
                "title": "Sudden infant death",
                "story": "There is no documented correlation between vaccines and sudden infant death syndrome. Vaccines are administered at a time when children can suffer from this syndrome, so they can sometimes be erroneously related."
            },
            {
                "title": "Vaccines save lives",
                "story": "Vaccines save lives. In developing countries, every dollar spent The three essential vaccines (measles, mumps, and rubella) can save 16 dollars in direct medical costs necessary to treat these diseases and alleviate their consequences. Immunising a child against seven infections (tuberculosis, polio, diphtheria, tetanus, whooping cough, hepatitis B, and measles) costs 17 dollars, a ridiculous figure compared to any other medical treatment."
            },
            {
                "title": "Smallpox",
                "story": "Smallpox was the first disease eradicated, thanks to vaccination. In 1980, the World Health Organization (WHO) announced that smallpox had been eradicated worldwide, thanks to a coordinated worldwide vaccination campaign. This ended a disease that killed 35% of the people infected and caused blindness and multiple scars for the survivors."
            },
            {
                "title": "How is a vaccine developed?",
                "story": "Drugs that can become vaccines must be analyzed and tested on cells and animals in studies costing significant amounts of money. If good results are obtained in these tests, the drug company asks the authorities to approve a human clinical trial. Clinical trials are divided into three phases, including many procedures and more tests. Only if the results are positive and the authorities approve the vaccine can the pharmaceutical company sell it."
            },
            {
                "title": "Vaccines and natural infection",
                "story": "Vaccines stimulate the immune system, cause a similar but less intense response to the effect of a natural infection and prevent the disease and its complications in most cases. On the other hand, the price for immunity after natural infection might be pneumonia from chickenpox or pneumococcus, intellectual disability from Haemophilus influenzae type b (Hib), birth defects from rubella, liver cancer from hepatitis B virus, death from measles, etc. If you wanted to gain immunity to measles, for example, by contracting the disease, you would face a 1 in 500 chance of death from your symptoms. In contrast, the number of people who have had severe allergic reactions from an MMR vaccine is less than one-in-one million."
            },
            {
                "title": "Thiomersal",
                "story": "Thiomersal is a compound containing mercury used to prevent the growth of bacteria and fungi in vials of vaccines. However, the amount of thiomersal in vaccines is minimal and involves no health risk. A vaccine containing 0.01% thimerosal as a preservative contains roughly the same amount of elemental mercury contained in a small can of tuna fish. Moreover, since 2001, routine vaccines for children under six no longer contain thimerosal. Teens and adults can also request thimerosal-free vaccines. Thimerosal contains ethylmercury, which is cleared from the human body quickly compared to methylmercury, which bioaccumulates – so there is also a difference in which form toxic metal is. Nevertheless, COVID-19 vaccines, e.g. do not contain toxins."
            },
            {
                "title": "Aluminium",
                "story": "Certain elements, such as aluminum salts, are added to vaccines because they work as an adjuvant, which means their presence boosts the immune response when you are vaccinated. The small amount of aluminum in some vaccines does not cause any risk. A dose of vaccine contains 0.5 mg of aluminum. At the same time, it is estimated that we ingest 8 mg of food daily without causing any problems. Also, only certain vaccines contain aluminum salts, and new COVID-19 vaccines do not include them."
            },
            {
                "title": "Measles",
                "story": "What effect would measles have if we weren’t vaccinated? Before the measles vaccine was introduced in 1963, there were significant epidemics every two or three years, causing around 2.6 million deaths yearly. Since then, the figure has fallen, and in 2016 there were 89,780 deaths from measles throughout the world. This brought the figure below 100,000 deaths a year for the first time. If vaccination against the disease ended, we might return to the previous situation."
            },
            {
                "title": "Vaccines and the immune system",
                "story": "Babies and children are exposed to many viruses daily as they play, eat and breathe. These viruses, their proteins, and other substances they secrete act as antigens – in other words, they activate the immune response. The quantity of antigens children fight every day (2,000-6,000) is therefore much higher than the total number of antigens applied through vaccination. Children’s immune systems are prepared to tolerate vaccines well."
            },
            {
                "title": "Raising the probability of not becoming infected",
                "story": "Based on the data from Los Angeles County, unvaccinated people were about 29 times more likely to be hospitalized with COVID-19 than those who were fully vaccinated, according to a CDC (Centers for Disease Control and Prevention in the US) report in 2021."
            }
        ],
        "positionCards" : [
            {
                "title" : "Position 1",
                "position": "The State establishes a compulsory vaccination schedule for everyone. The vaccines it includes are free, and penalties are imposed on people who choose not to be vaccinated or not to have their children vaccinated."
            },
            {
                "title" : "Position 2",
                "position": "The State insists on only a few vaccines, following a compulsory vaccination schedule. An optional schedule is also established for the vaccines not considered to be such high priorities. The vaccines included in the calendar are free, and penalties are not imposed on people who do not follow the compulsory vaccination schedule."
            },
            {
                "title" : "Position 3",
                "position": "The State takes on the task of recommending some vaccines. It does not compel its citizens; it allows them to choose responsibly, providing them with all necessary information and covering the costs."
            },
            {
                "title" : "Position 4",
                "position": "Following the principle of freedom of choice, the State does not become involved in issues concerning vaccination. Citizens must get information for themselves (for example, via their doctors) and decide whether they want to be vaccinated and against which diseases. The State does not cover the cost of these vaccines."
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
                "image": "card_viruses_11.webp",
                "story": "Meie poeg Martin oli elav, arukas ja uudishimulik, alati terve poiss. Kaks aastat tagasi, kui ta sai 12, haigestus ta suvelaagris ootamatult meningiiti. Ka teine poiss laagris jäi meningiiti, kuid ta ei saanud haigusest pikaajalisi tüsistusi. Kõik ülejäänud lapsed said haiguse ennetamiseks antibiootikume. Haiglas öeldi meile, et tegelikult oli meie poja tapnud haigustekitaja vastu olemas vaktsiin. Kogu selle kaotusvalu tipuks piinab meid teadmine, et  ta võinuks olla veel elus, kui me oleksime teda lasknud meningiidi vastu vaktsineerida."
            },
            {
                "title": "",
                "image": "card_viruses_12.webp",
                "story": "Pensionile jäämisest alates on mu mehel olnud südamepuudulikkus. Me oleme vaktsineerinud ennast igal aastal, kuid eelmisel aastal saime mõlemad gripi, kuigi olime selle vastu vaktsineeritud. Seetõttu olin ma väga tõrges gripivaktsiini suhtes, mida meie perearst sel aastal meile pakkus, kuigi lõpuks me nõustusime. Ta ütles meile, et selle aasta viirus on üsna sarnane sellele, mis põhjustas hispaania gripi epideemia eelmisel sajandil. Kuid epideemiat ei tulnud ning me ka  ei haigestunud sellesse. Meil on tunne, et vaktsineerimine on mõttetu ning kulukas praktika, mida üritavad edendada ravimiettevõtted."
            },
            {
                "title": "",
                "image": "card_viruses_13.webp",
                "story": "Meie 5-aastasel tütrel Annil on olnud rida erinevaid allergiaid küll teatud toiduainete, tolmu, ravimite, aga ka mõne vaktsiini suhtes, mille manustamise järgselt on tal tekkinud äge reaktsioon (kõrge palavik, lööve üle terve keha), mistõttu on talle olnud riskantne kõiki ettenähtud vaktsiine õigel ajal anda. Sellest ajast peale, kui ta läks eelkooli, oleme me olnud väga mures, kuna oleme seal kohanud vanemaid, kes on täielikult keeldunud oma  lapsele vaktsiine manustamast öeldes, et need on kasutud või lausa ohtlikud. Kuna ka Anni pole saanud päris kõiki ettenähtud vaktsiine, siis me kardame, et ta võib olla nende laste seltskonnas eksponeeritud ning samas vastuvõtlik mõnedele ohtlikele haigustele."
            },
            {
                "title": "",
                "image": "card_viruses_14.webp",
                "story": "Lugesin Maailma Tervishoiu Organisatsiooni teabelehest, et 1998. a. kannatas ligi 1000 last igapäevaselt lastehalvatusest tingitud paralüüsi (lihasjõu kadumise) all. Enamus neist elasid maailma kõige vaesemates riikides. Pärast ülemaailmset vaktsineerimiskampaaniat, kannatas teadaolevalt lastehalvatuse paralüüsi all igapäevaselt vaid 30 last maailmas. Vaktsineerisime lastehalvatuse vastu ära ka oma lapse, kuna tundsime, et nii saame anda oma panuse ülemaailmsesse missiooni kaitstes niimoodi neid, kes on kõige haavatavamad."
            },
            {
                "title": "",
                "image": "card_viruses_15.webp",
                "story": "Kaheaastaselt diagnoosisid lastearstid meie pojal autismispektri häire. Me panime tähele esimesi sümptomeid pärast tema teist vaktsineerimist. Ta muutus kergesti ärrituvaks, ta ei vaadanud enam meile otsa, ta ei tahtnud, et teda võetaks sülle. Me lugesime meditsiiniajakirjast Lancet, et vaktsineerimisel leetrite, mumpsi ja punetiste kolmikvaktsiiniga ning autismil võib olla omavahel seos. Meie lastearst ütles aga, et antud artikkel on ajakirjast eemaldatud autorite väljamõeldud seoste tõttu nimetatud vaktsiini ning autismi vahel ning et mitmed uurimused on selle seose ka ümber lükanud. Lastearst rääkis meile, et haigus diagnoositakse tavaliselt vanuses, kui lapsi vaktsineeritakse. Seega jõuavad mitmed vanemad ebaõigetele järeldustele, et  vaktsineerimise ja autismi vahel peab olema seos. Me saime küll aru, mis ta ütles, aga ometi on hinges alles väike kahtlus."
            },
            {
                "title": "",
                "image": "card_viruses_16.webp",
                "story": "Ülikoolilinnakus, kus ma elan, teatati ulatuslikust leetrite puhangust.  Algas see mõnest üksikjuhtumist, kuid nüüdseks on nakatunuid juba palju. Mõned on sattunud juba ka haiglasse. Kuna leetrite tüsistused täiskasvanute jaoks võivad olla tõsised, otsustas ülikooli juhtkond, et kontaktõppesse pääsemiseks peab tudengil olema ette näidata vaktsineerimistõend või tunnistus leetrite läbipõdemise kohta. Kuna vaktsiinid pole kohustuslikud, siis ma arvan, et institutsioonid ei peaks sekkuma inimeste eraellu."
            }
        ],
        "infoCards" : [
            {
                "title": "Vaktsineerimise ulatus",
                "story": "Tänu vaktsineerimise edulugudele maailmas ei tajuta enam mitmeid haigusi otsese ohuna. Selle tulemusena unustatakse vaktsiinid või lausa keeldutakse nendest, mis aga paneb rahvastiku uuesti suurde ohtu. Kui rahvastiku üldine vaktsineerituse tase väheneb, võivad mõned epideemiad jälle tagasi tulla, nagu juhtus difteeriaga mõnedes riikides 80-ndate keskel. Näiteks riikides, mis varem olid kuulunud Nõukogude Liitu, jõudis difteeriapuhang  1995. aastal 50 000 juhtumini."
            },
            {
                "title": "Vaktsineerimine on solidaarsusakt",
                "story": "Vaktsineerimine on solidaarsusakt, mis aitab võidelda haiguste ja epideemiatega üle maailma. Vaktsineerimata inimesed on ohuks neile, kes ei saa ennast meditsiinilisel põhjusel vaktsineerida (vastsündinud, rasedad, immuunpuudulikkusega inimesed)."
            },
            {
                "title": "Kes katab kulud?",
                "story": "Enamuses Euroopa Liidu riikides kaetakse soovituslikud põhivaktsiinid sotsiaalsüsteemi poolt. Nende vaktsiinide, mis pole kantud soovituslikku nimekirja, maksumust sotsiaalsüsteem ei kata."
            },
            {
                "title": "Vaktsiinid kaitsevad",
                "story": "Vaktsiinid on kõige tõhusam viis kaitsta meid selliste tõsiste haiguste eest nagu difteeria, teetanus, läkaköha, lastehavatus, leetrid jpt. Tänu vaksineeritute kõrgele protsendile ühiskonnas, on nende haiguste esinemissagedus Euroopas ja mujal oluliselt vähenenud või täiesti kadunud."
            },
            {
                "title": "Vaktsiinide rakendamise kasud ja riskid",
                "story": "Ei ole olemas täiesti riskivabasid vaktsiine (nagu pole olemas ravimeid), mis oleksid absoluutselt risikivabad. Kuid nende kasutamisega seotud risk on kordades väiksem, kui risk, mis on seotud nende haiguste läbipõdemisega. Tegelikult peetakse vaktsiine ühtedeks kõige ohutumateks ravimiteks. Vaktsiinid, mis jõuavad turule, on pidanud läbima edukalt testid miljonite laste ja täiskasvanute peal. Näiteks sureb iga seitsmes difteeriasse nakatunu, kuid vaid ühel kümnest difteeria vaktsiini saanutest paistetab üles süstimiskoht ning veelgi vähesematel tekib palavik, millest mõlemad mööduvad paari päevaga.  Tõsisemad kõrvaltoimed on väga haruldased."
            },
            {
                "title": "Vaktsiinid ja autism",
                "story": "Aastaid tagasi avaldati teadusajakirjas The Lancet artikkel, kus autorid seostasid kolmikvaktsiini (leetrid-mumps- punetised) autismiga. Sellele järgnenud 20 uuringus, mida viidi läbi kuues riigis, kus osales tuhandeid inimesi, ei leitud mingit seost nende vahel. The Lanceti artikkel eemaldati ajakirjast, kuna see kvalifitseeriti pettuseks."
            },
            {
                "title": "Tuulerõuged",
                "story": "Tuulerõuged on väga nakkav viirushaigus, mis kandub inimeselt inimesele peamiselt lapseeas. Selles vanuses on see ebameeldiv, kuid enamasti siiski üsna ohutu haigus. Risk saada tüsistusi kasvab aga järsult, kui tuulerõugetesse nakatub täiskasvanu. Seetõttu on oluline kaitsta teismelisi vaktsineerimise teel, kui nad pole pole tuulerõugeid veel läbi põdenud."
            },
            {
                "title": "Suremuse vähenemine",
                "story": "Vaktsiinid difteeria, teetanuse, läkaköha ja leetrite vastu aitavad säästa igal aastal hinnanguliselt 2,5 miljonit last maailmas. Neid loetakse ühtedeks kõige (kulu) tõhusamateks rahva tervise meetmeteks. Teadlased on hinnanud, et näiteks ilma COVID-19 vaktsiini programmita oleks USA-s 2021. juuni lõpuks olnud  279,000  surma ning 1,25 miljonit hospitaliseerimist rohkem."
            },
            {
                "title": "100%-line kaitse?",
                "story": "Mitte ükski vaktsiin ei paku 100%-list kaitset, kuid on olemas meetmed, kuidas saavutada kõrgendatud kaitse. Näiteks tõhustusdoosi, st vaktsiini täiendava doosi manustamise kaudu. Tõhustusdoosi ajal tutvustatakse  organismile uuesti  immuniseerivat antigeeni tõstes organismi immuunsuse uuesti kaitseseisundusse pärast seda, kui organismi mälu antud antigeeni suhtes on hakanud aja jooksul vähenema. Näiteks soovitatakse teetanuse tõhustusdoosi 10 aastat pärast eelmise doosi manustamisest, kui teetanuse suhtes spetsiifilste mälurakkude toime hakkab kaduma või kui need surevad."
            },
            {
                "title": "Gripivaktsiin",
                "story": "Gripp tapab sadu tuhandeid inimesi igal aastal. Vaktsiin on eriti soovitatud inimestele üle 65 eluaasta, diabeedihaigetele, inimestele, kelle immuunssüsteem on nõrgenenud ning meditsiinitöötajatele. Gripivaktsiini tuleb korrata igal aastal, kuna viirus, mis põhjustab epideemiaid, muteerub pidevalt."
            },
            {
                "title": "Oodatav eluiga",
                "story": "Tunduvalt on kasvanud oodatav eluiga. Viimane on nüüd paljudes Euroopa riikides üle 80 eluaasta, mis on suuresti põhjustatud ka asjaolust, et me oleme kogukonnana suures ulatuses vaktsineeritud."
            },
            {
                "title": "Nakatumise tõenäosus",
                "story": "Vähendame nakatumise tõenäosust. Tuginedes Haiguste Kontrolli ja Ennetamise Keskuse (USA) andmetele 2021. aasta kohta, sattusid Los Angelese maakonnas mittevaktsineeritud inimesed 29 korda suurema tõenäosusega koroonaga haiglasse kui COVID-19 suhtes vaktsineeritud. "
            },
            {
                "title": "Vaktsineerimine päästab elusid",
                "story": "Vaktsineerimine päästab elusid vaestes riikides ning aitab kokkuvõttes säästa ka suure hulga  raha. Iga dollar, mis kulutatakse kolmikvaktsiinile (leetrid, mumps, punetised) säästab 16 dollarit, mis kuluks nende haigustega võitlemisele. Ühe lapse  immuniseerimisele 7 haiguse vastu (tuberkuloos, lastehalvatus, difteeria, teetanus, läkaköha, B-hepatiit, leetrid) kulutatud 17 dollarit on vaid naeruväärne summa võrreldaes summadega, mida  läheks maksma nende haiguste ravi, kui puhkeb epideemia."
            },
            {
                "title": "Rõuged",
                "story": "Rõuged oli esimene haigus, mis juuriti välja vaktsineerimise abil. 1980 teatas Maailma Tervishoiu Organisatsioon, et rõuged on tänu koordineeritud vaktsineerimis- kampaaniatele likvideeritud kogu maailmas. See pani punkti haigusele, mis tappis 35% nakatunud inimestest ning põhjustas ellujääjatel pimedust ja arvukaid arme."
            },
            {
                "title": "Kuidas vaktsiine arendatakse?",
                "story": "Vaktsiinid peavad olema põhjalikult analüüsitud ja testitud kulukates raku- ja loomkatsetes. Kui nendes testides saadakse positiivsed tulemused, palub ravimikompanii kiita heaks katsetused inimestel. Viimased toimuvad kolmes osas, mis hõlmavad erinevaid protseduure ja teste. Vaid postiivsete tulemuste korral ning kui vaktsiin kiidetakse heaks vastava riikliku ametkonna poolt, saab ravimifirma seda müüma hakata."
            },
            {
                "title": "Vaktsiinid ja loomulik immuunsus",
                "story": "Vaktsiinid ergutavad immuunsüsteemi kutsudes esile sarnase, kuid nõrgema reaktsiooni, kui loomulik nakkus ning hoiavad sellega suuresti ära haigestumise ning sellega kaasneda võiva tüsistused. Tüsistused võivad aga olla päris kallis hind, mida loomuliku immuunsuse tekkimise kaudu saada: kopsupõletik leetrite või pneumokoki tagajärjel, vaimne puue Hib-nakkuse ja järgneva meningiidi tagajärjel, sünnidefektid punetistest, maksavähk B-hepatiidit ja surm leetrite tagajärjel. Kui Sa peaksid haigestuma ja saavutama loomuliku immuunsuse leetrites, oleks tõenäosus surra 1:500-le. Kolmikvaktsiini (sisaldab ka vaktsiini leetrite vastu) tagajärjel ägeda allergilise reaktsiooni saamise tõenäosus on 1: 1000000-le."
            },
            {
                "title": "Tiomersal",
                "story": "Tiomersal on ühend, mis sisaldab elavhõbedat, mis takistab bakterite ja seente kasvamist vaktsiinis. Tiomersaali sisaldus vaktsiinis on üliväike ning ei põhjusta terviseriski. Vaktsiin, mis sisaldab ligikaudu 0,01% tiomersaali sisaldab ligikaudu sama koguse elavhõbedat, kui sisaldub väiksemat sorti tuunikalakonservis. Sellegipoolest ei sisalda alla 6-a.  lastele tehtavad vaktsiinid alates 2001. a. enam tiomersaali. Vanemad lapsed, teismelised ja täiskasvanud võivad endale paluda samuti tiomersaalivaba vaktsiini. Tiomersaal sisaldab etüülelavhõbedat, millest inimkeha suudab kergesti vabaneda võrreldes metüülelavhõbedaga, mis akumuleerub organismis. Seega on suur vahe, millist elavhõbeda vormi kasutatakse. Kasutusel olevad COVID-19 vaktsiinid  ei sisalda toksiine."
            },
            {
                "title": "Alumiinium",
                "story": "Mõningaid keemilisi elemente, nagu alumiinium, lisatakse vaktsiinidesse, sest nad käituvad adjuvantidena - ainetena, mis vaktsineerimisel tõhustavad immuunvastust. Alumiiniumi kogus on nii väike, et see ei tekita mingeid riske. Üks doos sisaldab 0.5 mg alumiiniumit samas, kui me igapäevaselt sööme toiduga sisse 0.8 mg aluminiiumit. Lisaks sisaldavad vaid osa vaktsiine alumiiniumi soolasid. Kasutusel olevad COVID-19 vaktsiinid neid ei sisalda."
            },
            {
                "title": "Leetrid",
                "story": "Milline oleks leetrite mõju, kui me ei oleks vaktsineeritud? Enne leetrite vaktsiini rakendamist 1963. a., leidsid iga paari aasta tagant aset epideemiad põhjustades mitme miljoni inimese surma aastas (keskmiselt). Sellest ajast peale on numbrid tunduvalt vähenenud. 2016. a. registreeriti maailmas 89, 870 surma. Kui vaktsineerimine lõppeks, peaksime me uuesti seisma silmitsi miljonite või isegi rohkemate surmadega aastas, kuna inimesed reisivad ja nakkused liiguvad maailma piirkondade vahel järjest kiiremini."
            },
            {
                "title": "Vaktsiinid ja immuunsüsteem",
                "story": "Imikud ja lapsed on eksponeeritud viirustele ja mikroobidele, kui nad hingavad, söövad ja mängivad. Viirused ise, nende valgud ning muud ained, mida nad eraldavad, toimivad  antigeenidena ehk teiste sõnadega, need aktiveerivad immuunvastuse. Antigeenide hulk, millega lapsed igapäevaselt võitlevad - 2000-6000, on palju suurem kui antigeenide arv, mida kasutatakse vaktsineerimisel. Laste immuunsüsteem on hästi ette valmistatud vaktsiinide talumiseks."
            }
        ],
        "positionCards" : [
            {
                "title" : "Position 1",
                "position": "The State establishes a compulsory vaccination schedule for everyone. The vaccines it includes are free, and penalties are imposed on people who choose not to be vaccinated or not to have their children vaccinated."
            },
            {
                "title" : "Position 2",
                "position": "The State insists on only a few vaccines, following a compulsory vaccination schedule. An optional schedule is also established for the vaccines not considered to be such high priorities. The vaccines included in the calendar are free, and penalties are not imposed on people who do not follow the compulsory vaccination schedule."
            },
            {
                "title" : "Position 3",
                "position": "The State takes on the task of recommending some vaccines. It does not compel its citizens; it allows them to choose responsibly, providing them with all necessary information and covering the costs."
            },
            {
                "title" : "Position 4",
                "position": "Following the principle of freedom of choice, the State does not become involved in issues concerning vaccination. Citizens must get information for themselves (for example, via their doctors) and decide whether they want to be vaccinated and against which diseases. The State does not cover the cost of these vaccines. "
            }
        ]
      },
      "el": {
        "storyCardsTitle" : "Story cards EL",
        "infoCardsTitle" : "Info cards EL",
        "positionCardsTitle" : "Position cards EL",
        "storyCardsLabel" : "Story EL",
        "infoCardsLabel" : "Info EL",
        "storyCards" : [
            {
                "title": "",
                "image": "🧔",
                "story": "My son Francesco was a lively, intelligent, curious boy who was always healthy. Two years ago, at the age of 12, he died suddenly of meningitis at a summer camp. During the holidays, another boy also went down with meningitis but suffered no further consequences. All the youngsters at the camps received a preventive dose of antibiotics. At the hospital, they told us there was a vaccine against the pathogen that killed our son. On top of the tremendous pain of losing my son, it hurts me even more, to think that he would still be alive today if he had been vaccinated."
            },
            {
                "title": "",
                "image": "🧔",
                "story": "I was very reluctant to accept the flu vaccination when our family doctor offered it to us this year. Since we retired, my husband has developed heart failure, and we have been vaccinated every year. Still, we caught the flu last year even though we had been vaccinated. This year our doctor offered us the vaccine again, and, as he insisted, we agreed to be vaccinated. He told us this year’s virus was similar to the one that caused the Spanish flu epidemic at the beginning of the last century. Still, a terrible outbreak like that didn’t happen, and neither my husband nor I became ill. We have the impression that vaccination is a pointless, costly practice carried out for the benefit of drug companies."
            },
            {
                "title": "",
                "image": "🧔",
                "story": "Our five years old daughter Anna has had several allergic to different foods, pollen, and medications, but also some vaccines towards which she has developed overreactions (high fever, skin rash all over the body), so it has been difficult for us as parents to give her all the recommended vaccines as scheduled. Since she went to preschool, we have been very worried after encountering other parents refusing vaccines for their children suggesting that vaccines are pointless, if not even dangerous. As Anna has not got all the scheduled vaccines, we are afraid she is especially vulnerable when being in the same group with children not vaccinated with the routinely scheduled vaccines."
            },
            {
                "title": "",
                "image": "🧔",
                "story": "I read a World Health Organisation leaflet at the pediatrician’s surgery. In 1998, about a thousand children suffered paralysis daily due to the polio virus. Most of them lived in the poorest countries. After worldwide vaccination campaigns, in 2000, only 30 children a day suffered paralysis due to polio. When I had my son vaccinated, I felt part of a project. I did it for him, his brothers and sisters, and all children, particularly those in the most deprived situations."
            },
            {
                "title": "",
                "image": "🧔",
                "story": "At the age of two, the paediatrician diagnosed a disorder on the autistic spectrum in our son Esteve. We detected the first symptoms after the second vaccination. He was irritable, he wouldn’t look at us, he didn’t like being picked up and he was living as if he were alone. We read an article on the internet from the medical journal Lancet that related autism and vaccines. The paediatrician told us the article had been withdrawn because of fraud and many subsequent studies had rejected the relationship between vaccination and autism. The paediatrician also told us that the disease is usually diagnosed at about the same time as children are vaccinated, so some people wrongly believe there is a link between the two things. We understood what he was saying, but that doubt will always be there."
            },
            {
                "title": "",
                "image": "🧔",
                "story": "An outbreak of measles has been declared at the university I’ve been attending for the last few months. To start with there were a few isolated cases, but the epidemic has spread and now a lot of people are ill. Some have been admitted to hospital. The complications of measles in adults can be serious, so the authorities decided that, in order to attend courses, vaccination records had to be presented or students would have to prove they had already had the disease. As vaccines are not compulsory, I don’t believe institutions should invade our privacy in this way."
            }
        ],
        "infoCards" : [
            {
                "title": "Vaccination coverage",
                "story": "With the success of vaccines, the seriousness of certain diseases is no longer perceived. As a result, vaccines are forgotten or even refused, exposing the population to severe impacts on health. If coverage in the population falls, some epidemics can reappear, as happened with diphtheria in some countries since the mid-1980s. E.g. in the lands formerly belonging to USSR, the diphtheria outbreak reached, in sum, 50 000 cases in 1995."
            },
            {
                "title": "Vaccination is an act of solidarity",
                "story": "Vaccination is an act of solidarity helping in the fight against diseases and epidemics around the world. Unvaccinated people threaten those who cannot be vaccinated for medical reasons (for example, young children, pregnant women, and people with immune deficiencies)."
            },
            {
                "title": "Who covers the costs?",
                "story": "In most of the EU countries, the cost of recommended essential vaccines is covered by social security. The cost of additional vaccines not included in the vaccine schedule is not covered."
            },
            {
                "title": "Vaccines protect us",
                "story": "Vaccines are the most effective way of protecting us from severe diseases like diphtheria, tetanus, whooping cough, polio, meningitis, measles, and many others. Thanks to the high percentage of vaccinated people, the propagation of these diseases in Europe and beyond has dramatically declined or completely disappeared."
            },
            {
                "title": "Benefits and risks of vaccines",
                "story": "The vaccines on the market have already been successfully tested on millions of children and adults. They are considered to be among the safest drugs. There are no risk-free vaccines, but the danger is much less than from natural diseases. Serious side effects are infrequent. E.g., about 1 in 10 get swelling around the site of infection, and even fewer people get fevers. Both disappear within a few days."
            },
            {
                "title": "Vaccines and autism",
                "story": "Some years ago, an article was published in the scientific journal The Lancet that associated vaccines with autism. Despite this, 20 studies were carried out in six different countries, with the participation of thousands of people; no association was found between the triple virus vaccine (measles, mumps, and rubella) and autism."
            },
            {
                "title": "Chickenpox",
                "story": "Chickenpox is a highly contagious viral disease passed from person to person and is usually contracted during childhood. At that age, chicken pox is an unpleasant but generally harmless disease. The risk of complications increases sharply, though, when a person goes down with chicken pox as an adult. It is, therefore, essential to protect all teenagers who have not had the disease during childhood with vaccination."
            },
            {
                "title": "Reduction in mortality",
                "story": "Vaccines against diphtheria, tetanus, whooping cough, and measles can save 2.5 million children’s lives yearly. They are among the most productive and cost-effective public health measures. Without the vaccination programme against COVID-19 in the US, by the end of June 2021, there would have been approximately 279,000 additional deaths and up to 1.25 million other hospitalizations."
            },
            {
                "title": "100% protection?",
                "story": "No vaccine offers 100% protection, but there are measures allowing increased protection, such as booster doses - a different vaccine administration after an earlier amount. After initial immunization, a booster dose is a re-exposure to the immunizing antigen. It is intended to increase immunity against that antigen back to protective levels after memory against that antigen has declined. For example, tetanus shot boosters are often recommended every ten years. By this point, memory cells specific against tetanus lose their function or undergo apoptosis."
            },
            {
                "title": "Getting vaccinated against the flu",
                "story": "Flu kills hundreds of thousands of people every year. Vaccination is particularly recommended for people over 65, chronic diabetes patients, people with weakened immune systems, and health personnel. Flu vaccination has to be repeated every year, as the virus responsible for the epidemics is constantly changing."
            },
            {
                "title": "Life expectancy",
                "story": "A significant part of the increase in our life expectancy, which is now above 80 in many European countries, is that we are almost all vaccinated. Today, vaccination is still the best preventive tool against certain infectious diseases."
            },
            {
                "title": "Sudden infant death",
                "story": "There is no documented correlation between vaccines and sudden infant death syndrome. Vaccines are administered at a time when children can suffer from this syndrome, so they can sometimes be erroneously related."
            },
            {
                "title": "Vaccines save lives",
                "story": "Vaccines save lives. In developing countries, every dollar spent The three essential vaccines (measles, mumps, and rubella) can save 16 dollars in direct medical costs necessary to treat these diseases and alleviate their consequences. Immunising a child against seven infections (tuberculosis, polio, diphtheria, tetanus, whooping cough, hepatitis B, and measles) costs 17 dollars, a ridiculous figure compared to any other medical treatment."
            },
            {
                "title": "Smallpox",
                "story": "Smallpox was the first disease eradicated, thanks to vaccination. In 1980, the World Health Organization (WHO) announced that smallpox had been eradicated worldwide, thanks to a coordinated worldwide vaccination campaign. This ended a disease that killed 35% of the people infected and caused blindness and multiple scars for the survivors."
            },
            {
                "title": "How is a vaccine developed?",
                "story": "Drugs that can become vaccines must be analyzed and tested on cells and animals in studies costing significant amounts of money. If good results are obtained in these tests, the drug company asks the authorities to approve a human clinical trial. Clinical trials are divided into three phases, including many procedures and more tests. Only if the results are positive and the authorities approve the vaccine can the pharmaceutical company sell it."
            },
            {
                "title": "Vaccines and natural infection",
                "story": "Vaccines stimulate the immune system, cause a similar but less intense response to the effect of a natural infection and prevent the disease and its complications in most cases. On the other hand, the price for immunity after natural infection might be pneumonia from chickenpox or pneumococcus, intellectual disability from Haemophilus influenzae type b (Hib), birth defects from rubella, liver cancer from hepatitis B virus, death from measles, etc. If you wanted to gain immunity to measles, for example, by contracting the disease, you would face a 1 in 500 chance of death from your symptoms. In contrast, the number of people who have had severe allergic reactions from an MMR vaccine is less than one-in-one million."
            },
            {
                "title": "Thiomersal",
                "story": "Thiomersal is a compound containing mercury used to prevent the growth of bacteria and fungi in vials of vaccines. However, the amount of thiomersal in vaccines is minimal and involves no health risk. A vaccine containing 0.01% thimerosal as a preservative contains roughly the same amount of elemental mercury contained in a small can of tuna fish. Moreover, since 2001, routine vaccines for children under six no longer contain thimerosal. Teens and adults can also request thimerosal-free vaccines. Thimerosal contains ethylmercury, which is cleared from the human body quickly compared to methylmercury, which bioaccumulates – so there is also a difference in which form toxic metal is. Nevertheless, COVID-19 vaccines, e.g. do not contain toxins."
            },
            {
                "title": "Aluminium",
                "story": "Certain elements, such as aluminum salts, are added to vaccines because they work as an adjuvant, which means their presence boosts the immune response when you are vaccinated. The small amount of aluminum in some vaccines does not cause any risk. A dose of vaccine contains 0.5 mg of aluminum. At the same time, it is estimated that we ingest 8 mg of food daily without causing any problems. Also, only certain vaccines contain aluminum salts, and new COVID-19 vaccines do not include them."
            },
            {
                "title": "Measles",
                "story": "What effect would measles have if we weren’t vaccinated? Before the measles vaccine was introduced in 1963, there were significant epidemics every two or three years, causing around 2.6 million deaths yearly. Since then, the figure has fallen, and in 2016 there were 89,780 deaths from measles throughout the world. This brought the figure below 100,000 deaths a year for the first time. If vaccination against the disease ended, we might return to the previous situation."
            },
            {
                "title": "Vaccines and the immune system",
                "story": "Babies and children are exposed to many viruses daily as they play, eat and breathe. These viruses, their proteins, and other substances they secrete act as antigens – in other words, they activate the immune response. The quantity of antigens children fight every day (2,000-6,000) is therefore much higher than the total number of antigens applied through vaccination. Children’s immune systems are prepared to tolerate vaccines well."
            },
            {
                "title": "Raising the probability of not becoming infected",
                "story": "Based on the data from Los Angeles County, unvaccinated people were about 29 times more likely to be hospitalized with COVID-19 than those who were fully vaccinated, according to a CDC (Centers for Disease Control and Prevention in the US) report in 2021."
            }
        ],
        "positionCards" : [
            {
                "title" : "Position 1",
                "position": "The State establishes a compulsory vaccination schedule for everyone. The vaccines it includes are free, and penalties are imposed on people who choose not to be vaccinated or not to have their children vaccinated."
            },
            {
                "title" : "Position 2",
                "position": "The State insists on only a few vaccines, following a compulsory vaccination schedule. An optional schedule is also established for the vaccines not considered to be such high priorities. The vaccines included in the calendar are free, and penalties are not imposed on people who do not follow the compulsory vaccination schedule."
            },
            {
                "title" : "Position 3",
                "position": "The State takes on the task of recommending some vaccines. It does not compel its citizens; it allows them to choose responsibly, providing them with all necessary information and covering the costs."
            },
            {
                "title" : "Position 4",
                "position": "Following the principle of freedom of choice, the State does not become involved in issues concerning vaccination. Citizens must get information for themselves (for example, via their doctors) and decide whether they want to be vaccinated and against which diseases. The State does not cover the cost of these vaccines. "
            }
        ]
      }
    }
</i18n>

<style scoped>
        
</style>