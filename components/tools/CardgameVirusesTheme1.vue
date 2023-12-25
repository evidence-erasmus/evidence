<template>
    <div>
        <h2 class="text-2xl mt-4">{{ t('storyCardsTitle') }}</h2>
        
        <section class="mb-10 mt-5 
            print:flex print:flex-wrap print:gap-2"
            :class="!props.printMode ? 'grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-wrap gap-4'"
        >   
            <!-- <ToolsCardgameCard v-for="(cardS, i) in tm('storyCards')" :key="`cardS${i}`"
                :image="rt(cardS.image)" :story="rt(cardS.story)" :label="`${t('storyCardsLabel')} ${i+1}`" border="border-sky-600"
                class="print:w-[70mm] print:h-[121mm]"
                :class="props.printMode ? 'w-[70mm] h-[121mm]' : ''"
            /> -->

            <ToolsCardgameCard v-for="(cardS, i) in tm('storyCards')" :key="`cardS${i}`"
                :title="rt(cardS.title)" :label="`${t('storyCardsLabel')} ${i+1}`" border="border-sky-500"
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
                :title="rt(cardI.title)" :label="`${t('infoCardsLabel')} ${i+1}`" border="border-sky-500"
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
                "title" : "Seisukoht 1",
                "position": "Riik kehtestab igaühele kohustusliku vaktsineerimisplaani. Vaktsiinid, mis on selles nimekirjas, on tasuta ning karistused on ette nähtud nendele, kes valivad enda või oma laste mittevaktsineerimise."
            },
            {
                "title" : "Seisukoht 2",
                "position": "Riik kohustab vaktsineerima vaid mõne kõige olulisema vaktsiiniga, mis on pandud kohustuslikku vaktsineerimisplaani. Lisaks on olemas vabatahtlik vaktsineerimisplaan vähemprioriteetsetele vaktsiinidele. Vaktsiinid, mis on lülitatud vaktsineerimisplaani, on tasuta ning karistusi neile, kes seda ei täida, ette nähtud ei ole."
            },
            {
                "title" : "Seisukoht 3",
                "position": "Riik on võtnud endale ülesandeks soovitada kõige olulisemaid vaktsiine. Ta ei nõua kodanikelt, et need vaktsineeriksid, vaid laseb neil vastutustundlikult valida varustades inimesed kogu vajaliku informatsiooniga ning kattes kulud."
            },
            {
                "title" : "Seisukoht 4",
                "position": "Järgides valikuvabaduse põhimõtet, ei sekku riik vaktsineerimisega seotud küsimustesse. Kodanikud peavad hankima informatsiooni ise (näiteks oma perearstidelt) ning otsustama, kas ja milliste haiguste suhtes nad tahavad ennast lasta vaktsineerida. Riik ei kata vaktsineerimisega seotud kulusid."
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
                "image": "card_viruses_11.webp",
                "story": "Ο γιός μου ο Φραντζέσκος ήταν ένα έξυπνο,δραστήριο παιδί που ήταν πάντα υγιής. Πριν από δύο χρόνια στην ηλικία των 12 απεβίωσε από αιφνίδιο θάνατο που προκλήθηκε από μηνιγγίτιδα που κόλλησε σε καλοκαιρινή κατασκήνωση. Κατά τη διάρκεια των διακοπών, ένα άλλο αγόρι έπαθε μηνιγγίτιδα, αλλά δεν υπέστη άλλες συνέπειες. Όλα τα παιδιά της κατασκήνωσης έλαβαν μια προληπτική δόση αντιβιοτικών. Στο νοσοκομείο μας ενημέρωσαν ότι υπήρχε ένα εμβόλιο κατά του παθογόνου που σκότωσε τον γιο μας. Πέρα από τον τεράστιο πόνο για τον χαμό του γιου μου, με πονάει ακόμη περισσότερο η σκέψη ότι θα ήταν ακόμα ζωντανός σήμερα αν είχε μβολιαστεί."
            },
            {
                "title": "",
                "image": "card_viruses_12.webp",
                "story": "Ήμουν πολύ δυστακτική να δεχτώ το εμβόλιο κατά της γρίπης  όταν μας το πρόσφερε φέτος ο οικογενειακός μας γιατρός. Από τότε που βγήκαμε στη σύνταξη, ο άντρας μου έχει παρουσιάσει καρδιακή ανεπάρκεια και εμβολιαζόμασταν κάθε χρόνο, αλλά πέρσι κολλήσαμε τη γρίπη παρόλο που είχαμε εμβολιαστεί. Φέτος ο γιατρός μας πρόσφερε ξανά το εμβόλιο και επειδή επέμενε, συμφωνήσαμε να εμβολιαστούμε. Μας είπε ότι ο φετινός ιός ήταν παρόμοιος με αυτόν που προκάλεσε την επιδημία της Ισπανικής γρίπης στις αρχές του περασμένου αιώνα, αλλά μια τρομερή επιδημία όπως αυτή δεν συνέβη και ούτε ο σύζυγός μου ούτε εγώ αρρωστήσαμε. Έχουμε την εντύπωση ότι ο εμβολιασμός είναι μια αχρείαστη δαπανηρή πρακτική που πραγματοποιείται προς όφελος των φαρμακευτικών εταιρειών."
            },
            {
                "title": "",
                "image": "card_viruses_13.webp",
                "story": "Η 5χρονη κόρη μας Άννα είχε αρκετές αλλεργικές αντιδράσεις σε διάφορες τροφές, γύρη, φάρμακα, αλλά και σε κάποια εμβόλια στα οποία έχει παρουσιάσει υπερβολικές αντιδράσεις (υψηλό πυρετό, δερματικό εξάνθημα σε όλο το σώμα), οπότε ήταν δύσκολο για εμάς ως γονείς να της δώσουμε όλα τα προτεινόμενα εμβόλια όπως είχε προγραμματιστεί. Από τότε που πηγαίνει στο νηπιαγωγείο ανησυχήσαμε πολύ αφού συναντήσαμε κάποιους άλλους γονείς που αρνούνται να κάνουν οποιοδήποτε εμβόλιο για τα παιδιά τους, υποδηλώνοντας ότι τα εμβόλια είναι άσκοπα, αν όχι και επικίνδυνα. Καθώς η Άννα δεν έχει κάνει όλα τα προγραμματισμένα εμβόλια, φοβόμαστε ότι μπορεί να είναι ιδιαίτερα ευάλωτη όταν βρίσκεται στην ίδια ομάδα με παιδιά που δεν έχουν εμβολιαστεί με τα προγραμματισμένα εμβόλια."
            },
            {
                "title": "",
                "image": "card_viruses_14.webp",
                "story": "Διάβασα έναν φυλλάδιο του Παγκόσμιου Οργανισμού Υγείας στο ιατρείο του παιδίατρου. Το 1998, περίπου χίλια παιδιά υπέφεραν καθημερινά από παράλυση λόγω του ιού της πολιομυελίτιδας. Οι περισσότεροι από αυτούς ζούσαν στις πιο φτωχές χώρες.Μετά από παγκόσμιες εκστρατείες εμβολιασμού, το 2000 μόνο 30 παιδιά την ημέρα υπέφεραν από παράλυση λόγω πολιομυελίτιδας. Όταν εμβολίασα τον γιο μου, ένιωσα μέρος ενός έργου.Το έκανα για εκείνον, για τα αδέρφια και τις αδερφές του και για όλα τα παιδιά, ιδιαίτερα αυτά που το στερούνται."
            },
            {
                "title": "",
                "image": "card_viruses_15.webp",
                "story": "Σε ηλικία δύο ετών, ο παιδίατρος διάγνωσε τον γίο μας Esteve με διαταραχή στο αυτιστικό φάσμα. Τα πρώτα συμπτώματα τα εντοπίσαμε μετά τον δεύτερο εμβολιασμό. Ήταν οξύθυμος,δεν μας κοίταζε, δεν του άρεσε να τον σηκώνουν και ζούσε σαν να ήταν μόνο εκείνος. Διαβάσαμε ένα άρθρο στο διαδίκτυο από το ιατρικό περιοδικό Lancet που αφορούσε τον αυτισμό και τα εμβόλια. Ο παιδίατρος μας είπε ότι το άρθρο είχε αποσυρθεί λόγω απάτης και πολλές μεταγενέστερες μελέτες είχαν απορρίψει την σχέση εμβολιασμού και αυτισμού. Ο παιδίατρος μας είπε επίσης ότι η νόσος συνήθως διαγιγνώσκεται περίπου την ίδια στιγμή που εμβολιάζονται τα παιδιά, επομένως κάποιοι λανθασμένα πιστεύουν ότι υπάρχει σχέση μεταξύ των δύο. Καταλάβαμε τι έλεγε, αλλά αυτή η αμφιβολία θα υπάρχει πάντα."
            },
            {
                "title": "",
                "image": "card_viruses_16.webp",
                "story": "Στο πανεπιστήμιο που φοιτώ δήλωσαν ότι υπάρχει έξαρση ιλαράς τους τελευταίους μήνες. Αρχικά, υπήρχαν μερικά μεμονωμένα κρούσματα, αλλά η επιδημία έχει εξαπλωθεί και τώρα πολλοί άνθρωποι είναι άρρωστοι. Κάποιοι έχουν πάει στο νοσοκομείο. Οι επιπλοκές της ιλαράς στους ενήλικες μπορεί να είναι σοβαρές, επομένως οι αρχές αποφάσισαν ότι, για να παρακολουθήσουν μαθήματα οι φοιτητές έπρεπε να προσκομίσουν ιστορικό εμβολιασμού ή να αποδείξουν ότι είχαν ήδη την ασθένεια. Καθώς τα εμβόλια δεν είναι υποχρεωτικά, δεν πιστεύω ότι τα ιδρύματα πρέπει να εισβάλλουν στην ιδιωτικότητα μας με αυτόν τον τρόπο."
            }
        ],
        "infoCards" : [
            {
                "title": "Εμβολιαστική κάλυψη",
                "story": "Με την επιτυχία των εμβολίων, η σοβαρότητα ορισμένων ασθενειών δεν γίνεται πλέον αντιληπτή. Ως αποτέλεσμα, τα εμβόλια ξεχνιούνται ή και απορρίπτονται, εκθέτοντας τον πληθυσμό σε σοβαρές επιπτώσεις στην υγεία. Εάν μειωθεί η κάλυψη του πληθυσμού ορισμένες επιδημίες μπορεί να επανεμφανιστούν, όπως συνέβη με τη διφθερίτιδα σε ορισμένες χώρες από τα μέσα της δεκαετίας του 1980 π.χ. στις χώρες που ανήκαν στο παρελθόν στην Σοβιετική ένωση η επιδημία διφθερίας έφτασε συνολικά σε 50.000 περιπτώσεις το 1995."
            },
            {
                "title": "Ο εμβολιασμός είναι πράξη αλληλεγγύης",
                "story": "Βοηθώντας στην καταπολέμηση ασθενειών και επιδημιών σε όλο τον κόσμο.Τα ανεμβολίαστα άτομα αποτελούν απειλή για όσους δεν μπορούν να εμβολιαστούν για ιατρικούς λόγους (για παράδειγμα, μικρά παιδιά, έγκυες γυναίκες και άτομα με ανοσοανεπάρκειες)."
            },
            {
                "title": "Ποιος καλύπτει τα έξοδα;",
                "story": "Στις περισσότερες χώρες της ΕΕ, το κόστος των συνιστώμενων βασικών εμβολίων καλύπτεται από το κράτος.Το κόστος των πρόσθετων εμβολίων δεν καλύπτεται."
            },
            {
                "title": "Τα εμβόλια μας προστατεύουν",
                "story": "Τα εμβόλια είναι ο πιο αποτελεσματικός τρόπος προστασίας από σοβαρές ασθένειες όπως η διφθερίτιδα, ο τέτανος, ο κοκκύτης, η πολιομυελίτιδα, η μηνιγγίτιδα, η ιλαρά και πολλές άλλες. Χάρη στο υψηλό ποσοστό των εμβολιασμένων ατόμων, η εξάπλωση αυτών των ασθενειών στην Ευρώπη και όχι μόνο έχει μειωθεί σημαντικά ή έχει εξαφανιστεί εντελώς."
            },
            {
                "title": "Οφέλη και κίνδυνοι των εμβολίων",
                "story": "Δεν υπάρχουν εμβόλια χωρίς κίνδυνο. Παρόλα αυτά ο κίνδυνος είναι πολύ μικρότερος από ό,τι από τη φυσική ασθένεια. Μάλιστα, θεωρούνται από τα πιο ασφαλή φάρμακα. Τα εμβόλια που κυκλοφορούν αυτή τη στιγμή στην αγορά έχουν ήδη δοκιμαστεί με επιτυχία σε εκατομμύρια παιδιά και ενήλικες."
            },
            {
                "title": "Εμβόλια και αυτισμός",
                "story": "Πριν από μερικά χρόνια, ένα άρθρο δημοσιεύθηκε στο επιστημονικό περιοδικό The Lancet που συσχέτιζε τα εμβόλια με τον αυτισμό. Πέρα από αυτό σε 20 έρευνες που πραγματοποιήθηκαν σε 6 διαφορετικές χώρες με χιλιάδες συμμετέχοντες δεν φάνηκε να υπάρχει κάποια συσχέτιση μεταξύ του τριπλού εμβολιασμού (ιλαράς, παρωτίτιδας και ερυθράς) με τον αυτισμό."
            },
            {
                "title": "Ανεμοβλογιά ",
                "story": "Η ανεμοβλογιά είναι εξαιρετικά μεταδοτική. Η ιογενής νόσος μεταδίδεται από άτομο σε άτομο και συνήθως εμφανίζεται κατά την παιδική ηλικία. Σε αυτή την ηλικία, η ανεμοβλογιά είναι μια δυσάρεστη αλλά γενικά άκακη ασθένεια. Ωστόσο ο κίνδυνος επιπλοκών αυξάνεται απότομα όταν ένα άτομο πάσχει από ανεμοβλογιά καθώς είναι ενήλικας. Επομένως, είναι σημαντικό να προστατεύονται όλοι οι έφηβοι που δεν είχαν τη νόσο κατά την παιδική ηλικία με εμβολιασμό."
            },
            {
                "title": "Μείωση της θνησιμότητας",
                "story": "Τα εμβόλια κατά της διφθερίτιδας, του τετάνου, του κοκκύτη και της ιλαράς καθιστούν δυνατό να σωθούν 2,5 εκατομμύρια ζωές παιδιών κάθε χρόνο. Είναι ένα από τα πιο αποτελεσματικά και οικονομικά μέτρα δημόσιας υγείας. Χωρίς το πρόγραμμα εμβολιασμού κατά του COVID-19 στις ΗΠΑ, μέχρι το τέλος Ιουνίου το 2021, θα είχαν σημειωθεί περίπου 279.000 επιπλέον θάνατοι και έως και 1,25 εκατομμύρια επιπλέον άνθρωποι θα χρειάζονταν νοσηλεία."
            },
            {
                "title": "100% προστασία",
                "story": "Κανένα εμβόλιο δεν προσφέρει 100% προστασία.Υπάρχουν όμως μέτρα που αυξάνουν την προστασία όπως μια επιπλέον χορήγηση ενός εμβολίου μετά από μια προηγούμενη δόση. Μετά τον αρχικό εμβολιασμό, μια επιπρόσθετη δόση θα ξανά εκθέσει το ανοσοποιητικό στο αντιγόνο. Στόχος του είναι να αύξηση την ανοσία έναντι αυτού του αντιγόνου και να επαναφέρει τα αρχικά επίπεδα προστασίας αφού μειώθηκαν με την πάροδο του χρόνου. Για παράδειγμα, τα ενισχυτικά εμβόλια τετάνου συνιστώνται να γίνονται κάθε 10 χρόνια καθώς τα κύτταρα ειδικά κατά του τετάνου χάνουν τη λειτουργία τους ή υφίστανται απόπτωση."
            },
            {
                "title": "Εμβολιασμός κατά της γρίπης",
                "story": "Η γρίπη σκοτώνει εκατοντάδες χιλιάδες ανθρώπους κάθε χρόνο. Ο εμβολιασμός κατά της γρίπης συνιστάται κυρίως για άτομο άνω των 65 που πάσχουν από χρόνιο διαβήτη, έχουν εξασθενημένο  ανοσοποιητικό και άλλα προβλήματα υγείας. Ο εμβολιασμός κατά της γρίπης πρέπει να επαναλαμβάνεται κάθε χρόνο, καθώς ο ιός που ευθύνεται για τις επιδημίες αλλάζει συνεχώς."
            },
            {
                "title": "Προσδόκιμου ζωής μας",
                "story": "Ένα σημαντικό μέρος της αύξησης του προσδόκιμου ζωής μας, που είναι πλέον πάνω από τα 80 σε πολλές ευρωπαϊκές χώρες, οφείλεται στο γεγονός ότι σχεδόν όλοι είμαστε εμβολιασμένοι. Σήμερα, ο εμβολιασμός εξακολουθεί να είναι το καλύτερο προληπτικό εργαλείο έναντι ορισμένων μολυσματικών ασθενειών."
            },
            {
                "title": "Συνδρόμου  βρεφικού θανάτου",
                "story": "Δεν υπάρχει τεκμηριωμένη συσχέτιση μεταξύ των εμβολίων και του αιφνίδιου συνδρόμου  βρεφικού θανάτου. Τα εμβόλια χορηγούνται σε μια περίοδο που τα παιδιά μπορεί να υποφέρουν από αυτό το σύνδρομο, άρα μπορεί μερικές φορές να σχετίζεται εσφαλμένα."
            },
            {
                "title": "Τα εμβόλια σώζουν ζωές στις φτωχές χώρες",
                "story": "Τα εμβόλια σώζουν ζωές στις φτωχές χώρες, κάθε δολάριο που ξοδεύεται για τα τρία βασικά εμβόλια (ιλαρά, παρωτίτιδα και ερυθρά) μπορεί να αποφέρει εξοικονόμηση 16 δολαρίων σε άμεσο ιατρικό κόστος που είναι απαραίτητο για τη θεραπεία αυτών των ασθενειών και την ανακούφιση των συμπτωμάτων τους. Το κόστος ανοσοποίησης ενός παιδιού έναντι επτά λοιμώξεων (φυματίωση, πολιομυελίτιδα, διφθερίτιδα, τέτανος, κοκκύτης, ηπατίτιδα Β και ιλαρά) είναι  17 δολάρια, ένα γελοίο ποσό σε σύγκριση με το κόστος οποιασδήποτε άλλης ιατρικής θεραπείας."
            },
            {
                "title": "Ευλογιά",
                "story": "Ευλογιά, η πρώτη ασθένεια που εξαλειφθεί χάρη στον εμβολιασμό. Το 1980, ο Παγκόσμιος Οργανισμός Υγείας (WHO) ανακοίνωσε ότι η ευλογιά είχε εξαλειφθεί σε όλο τον κόσμο, χάρη σε μια συντονισμένη παγκόσμια εκστρατεία εμβολιασμού. Αυτό έβαλε τέλος σε μια ασθένεια που σκότωσε το 35% των ανθρώπων που μολύνθηκαν και προκάλεσε τύφλωση και πολλαπλές ουλές στους επιζώντες."
            },
            {
                "title": "Πώς αναπτύσσεται ένα εμβόλιο;",
                "story": "Τα φάρμακα που μπορούν να γίνουν εμβόλια πρέπει να αναλυθούν και να δοκιμαστούν σε κύτταρα και ζώα σε μελέτες που κοστίζουν μεγάλα χρηματικά ποσά. Εάν προκύψουν καλά αποτελέσματα σε αυτές τις δοκιμές η φαρμακευτική εταιρεία ζητά από τις αρχές να εγκρίνουν μια κλινική δοκιμή σε ανθρώπους. Οι κλινικές δοκιμές χωρίζονται σε τρεις φάσεις, συμπεριλαμβανομένων πολλών διαδικασιών και περισσότερων εξετάσεων. Μόνο εάν τα αποτελέσματα είναι θετικά και οι αρχές εγκρίνουν το εμβόλιο μπορεί η φαρμακευτική εταιρεία να το πουλήσει."
            },
            {
                "title": "Εμβόλια και φυσική μόλυνση",
                "story": "Εμβόλια και φυσική μόλυνση Τα εμβόλια διεγείρουν το ανοσοποιητικό σύστημα, προκαλούν μια παρόμοια αλλά όχι τόσο έντονη ανταπόκριση που θα είχε κατά την επίδραση μιας φυσικής μόλυνσης και στις περισσότερες περιπτώσεις βοηθούν στην πρόληψη της ασθένεια και τις επιπλοκές της. Από την άλλη πλευρά, το τίμημα που καταβάλλεται για την ανοσία μετά από φυσική μόλυνση μπορεί να είναι πνευμονία από ανεμοβλογιά ή πνευμονιόκοκκος, διανοητική αναπηρία από Haemophilus influenzae τύπου b (Hib), γενετικές ανωμαλίες από ερυθρά, καρκίνος του ήπατος από τον ιό της ηπατίτιδας Β, θάνατος από ιλαρά κ.λπ. Για παράδειγμα, εάν θέλατε να αποκτήσετε ανοσία στην ιλαρά, προσβάλλοντας τη νόσο, θα αντιμετωπίζατε μια στις 500 πιθανότητες θανάτου από τα συμπτώματά σας. Αντίθετα, ο αριθμός των ατόμων που είχαν σοβαρές αλλεργικές αντιδράσεις από ένα εμβόλιο MMR είναι λιγότερος από ένα σε ένα εκατομμύριο."
            },
            {
                "title": "θειομερσάλη",
                "story": "Η θειομερσάλη είναι μια ένωση που περιέχει υδράργυρο και χρησιμοποιείται για την πρόληψη της ανάπτυξης βακτηρίων και μύκητων στα φιαλίδια των εμβολίων.Ωστόσο, η ποσότητα θειομερσάλης που περιέχεται στα εμβόλια είναι πολύ μικρή και δεν αποτελεί κίνδυνο για την υγεία του ανθρώπου. Ένα εμβόλιο που περιέχει 0,01% θειομερσάλη ως συντηρητικό περιέχει περίπου την ίδια ποσότητα υδραργύρου που έχει ένα μικρό κουτάκι τόνου.Επίσης από το 2001, τα συνηθισμένα εμβόλια για παιδιά κάτω των έξι ετών δεν περιέχουν πλέον θειομερσάλη. Έφηβοι και ενήλικες μπορούν να ζητήσουν εμβόλια χωρίς θειομερσάλη. Η θειομερσάλη περιέχει αιθυλ-υδράργυρο ο οποίος απομακρύνεται γρήγορα από το ανθρώπινο σώμα σε σύγκριση με τον μεθυλυδράργυρο που βιοσυσσωρεύεται- επομένως υπάρχει επίσης διαφορά σε ποια μορφή είναι το τοξικό μέταλλο. Ωστόσο, για παράδειγμα τα εμβόλια κατά του COVID-19, δεν περιέχουν τοξίνες."
            },
            {
                "title": "Άλατα αλουμινίου",
                "story": "Ο λόγος για τον οποίο ορισμένα στοιχεία προστίθενται στα εμβόλια όπως τα άλατα αλουμινίου  είναι καθώς λειτουργούν ως ανοσοενισχυτικά, πράγμα που σημαίνει ότι η παρουσία τους ενισχύει την ανοσολογική ανταπόκριση όταν εμβολιαζόμαστε. Η μικρή ποσότητα αλουμινίου που περιέχεται σε ορισμένα εμβόλια δεν ενέχει κανέναν κίνδυνο. Μια δόση εμβολίου περιέχει 0,5 mg αλουμινίου, ενώ υπολογίζεται ότι προσλαμβάνουμε καθημερινά 8 mg από την τροφή μας χωρίς αυτό να μας δημιουργεί κανένα πρόβλημα. Επίσης, μόνο ορισμένα εμβόλια περιέχουν άλατα αλουμινίου και τα νέα εμβόλια κατά τον COVID-19 δεν τα περιέχουν."
            },
            {
                "title": "Τι επιπτώσεις θα είχε η Ιλαρά αν δεν ήμασταν εμβολιασμένοι;",
                "story": "Πριν από το εμβόλιο κατά της Ιλαράς το 1963, υπήρχαν μεγάλες επιδημίες κάθε δύο ή τρία χρόνια που προκαλούσαν περίπου 2,6 εκατομμύρια θανάτους ετησίως. Από τότε, ο αριθμός μειώθηκε και το 2016 υπήρξαν 89.780 θάνατοι από ιλαρά σε όλο τον κόσμο. Αυτό έφερε τους θανάτους κάτω από 100.000 ετησίως για πρώτη φορά. Εάν σταματήσει ο εμβολιασμός κατά της νόσου, ίσως επιστρέψουμε στην αρχική κατάσταση."
            },
            {
                "title": "Εμβόλια και το ανοσοποιητικό Σύστημα",
                "story": "Τα βρέφη και τα παιδιά εκτίθονται σε πολλούς ιούς καθημερινά καθώς παίζουν, τρώνε και αναπνέουν. Οι πρωτεΐνες αυτών των ιών και άλλες ουσίες που εκκρίνουν δρουν ως αντιγόνα – με άλλα λόγια ενεργοποιούν την ανοσολογική απόκριση. Η ποσότητα των αντιγόνων που παλεύουν τα παιδιά καθημερινά (2.000-6.000) είναι πολύ μεγαλύτερη από τον συνολικό αριθμό των αντιγόνων που αποκτούν μέσω του εμβολιασμού. Επομένως, το ανοσοποιητικό σύστημα των παιδιών είναι καλά προετοιμασμένο να ανεχτεί τα εμβόλια."
            },
            {
                "title": "Αυξάνοντας την πιθανότητα να μην μολυνθείτε",
                "story": "Με βάση δεδομένα από το Λος Άντζελες, οι μη εμβολιασμένοι άνθρωποι είχαν περίπου 29 φορές περισσότερες πιθανότητες να νοσηλευτούν με COVID-19 από εκείνους που είχαν εμβολιαστεί πλήρως, σύμφωνα με άρθρο του CDC (Κέντρα Ελέγχου και Πρόληψης Νοσημάτων στις ΗΠΑ) το 2021."
            }
        ],
        "positionCards" : [
            {
                "title" : "Θέση 1",
                "position": "Το κράτος καθιερώνει ένα υποχρεωτικό πρόγραμμα εμβολιασμού για όλους. Τα εμβόλια που περιλαμβάνει είναι δωρεάν και επιβάλλονται ποινές σε άτομα που επιλέγουν να μην εμβολιαστούν ή να μην εμβολιαστούν τα παιδιά τους."
            },
            {
                "title" : "Θέση 2",
                "position": "Το κράτος επιμένει σε λίγα μόνο εμβόλια, ακολουθώντας υποχρεωτικό πρόγραμμα εμβολιασμού. Καθιερώνεται επίσης ένα προαιρετικό χρονοδιάγραμμα για τα εμβόλια που δεν θεωρούνται τόσο υψηλών προτεραιοτήτων. Τα εμβόλια που περιλαμβάνονται στο υποχρεωτικό πρόγραμμα εμβολιασμού είναι δωρεάν και δεν επιβάλλονται κυρώσεις σε άτομα που δεν εμβολιάζονται."
            },
            {
                "title" : "Θέση 3",
                "position": "Το κράτος αναλαμβάνει να προτείνει ορισμένα εμβόλια. Δεν υποχρεώνει τους πολίτες της, τους επιτρέπει να επιλέγουν υπεύθυνα, παρέχοντάς τους όλες τις απαραίτητες πληροφορίες και καλύπτοντας το κόστος."
            },
            {
                "title" : "Θέση 4",
                "position": "Following Ακολουθώντας την αρχή της ελεύθερης επιλογής το κράτος δεν εμπλέκεται σε θέματα που αφορούν τον εμβολιασμό. Οι πολίτες πρέπει να ενημερώνονται μόνοι τους (για παράδειγμα, μέσω των γιατρών τους) και να αποφασίζουν εάν θέλουν να εμβολιαστούν και για ποιες ασθένειες. Το κράτος δεν καλύπτει το κόστος αυτών των εμβολίων."
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
                "image": "card_viruses_11.webp",
                "story": "O meu filho Francesco era um menino animado, inteligente e curioso que foi sempre saudável. Há dois anos, quando tinha 12 anos, morreu subitamente de meningite num acampamento de verão. Durante as férias, outro rapaz também caiu com meningite, mas não sofreu mais consequências. Todos os jovens dos campos receberam uma dose preventiva de antibióticos. No hospital, disseram-nos que havia uma vacina contra o agente patogénico que matou o nosso filho. Além da dor tremenda de perder o meu filho, dói-me ainda mais pensar que ele ainda estaria vivo hoje se tivesse sido vacinado."
            },
            {
                "title": "",
                "image": "card_viruses_12.webp",
                "story": "Eu estava muito relutante em aceitar a vacinação contra a gripe quando o nosso médico de família a propôs este ano. Desde que nos reformamos, o meu marido tem tido insuficiência cardíaca, e temos sido vacinados todos os anos. Ainda assim, apanhámos gripe no ano passado, apesar de termos sido vacinados. Este ano o nosso médico ofereceu-nos a vacina novamente, e, como ele insistiu, nós concordamos em ser vacinados. Ele disse-nos que o vírus deste ano era semelhante ao que causou a epidemia de gripe espanhola no início do século passado. Mesmo assim, não aconteceu um surto terrível, e nem o meu marido nem eu ficámos doentes. Temos a impressão de que a vacinação é inútil, dispendiosa, sendo uma prática realizada em benefício das empresas farmacêuticas."
            },
            {
                "title": "",
                "image": "card_viruses_13.webp",
                "story": "A nossa filha Ana, de cinco anos, tem várias reações alérgicas a diferentes alimentos, pólen e medicamentos, mas também a algumas vacinas para as quais desenvolveu reações exageradas (febre alta, erupção cutânea em todo o corpo), pelo que tem sido difícil para nós, como pais, dar-lhe todas as vacinas recomendadas como programado. Desde que foi para o pré-escolar, temos estado muito preocupados depois de encontrar outros pais que recusam vacinas para os seus filhos, sugerindo que as vacinas são inúteis, se não mesmo perigosas. Como a Ana não tem todas as vacinas programadas, receamos que ela esteja especialmente vulnerável quando está no mesmo grupo com crianças não vacinadas com as vacinas programadas rotineiramente."
            },
            {
                "title": "",
                "image": "card_viruses_14.webp",
                "story": "Li um folheto da Organização Mundial de Saúde, na cirurgia pediátrica. Em 1998, cerca de mil crianças sofriam de paralisia diária devido ao vírus da poliomielite. A maioria vivia nos países mais pobres. Após campanhas mundiais de vacinação, em 2000, apenas 30 crianças por dia sofreram paralisia devido à poliomielite. Quando vacinaram o meu filho, senti-me parte de um projeto. Fi-lo por ele, pelos seus irmãos e irmãs, e por todas as crianças, especialmente pelas situações mais desfavorecidas."
            },
            {
                "title": "",
                "image": "card_viruses_15.webp",
                "story": "Aos dois anos de idade, o pediatra diagnosticou uma desordem do espectro do autismo no nosso filho Esteve. Detetamos os primeiros sintomas após a segunda vacinação. Estava irritado. Não olhava para nós, não gostava de ser fixado e vivia como se estivesse sozinho. Lemos um artigo na internet da revista médica Lancet que dizia respeito ao autismo e às vacinas. O pediatra disse-nos que o artigo tinha sido retirado por causa de fraude e muitos estudos subsequentes tinham rejeitado a relação entre a vacinação e o autismo. O pediatra também nos disse que a doença é geralmente diagnosticada na faixa etária em que as crianças são vacinadas, por isso algumas pessoas acreditam erradamente que há uma ligação entre as duas coisas. Entendemos o que ele estava a dizer, mas essa dúvida estará sempre lá."
            },
            {
                "title": "",
                "image": "card_viruses_16.webp",
                "story": "Um surto de sarampo foi declarado na universidade que tenho frequentado nos últimos meses. Para começar, houve alguns casos isolados, mas a epidemia espalhou-se e agora muitas pessoas estão doentes. Alguns foram internados no hospital. As complicações do sarampo em adultos podem ser graves, pelo que as autoridades decidiram que, para frequentar os cursos, os registos de vacinação têm de ser apresentados ou os alunos têm de provar que já tiveram a doença. Como as vacinas não são obrigatórias, não creio que as instituições devam invadir a nossa privacidade desta forma."
            }
        ],
        "infoCards" : [
            {
                "title": "Cobertura de vacinação",
                "story": "Com o sucesso das vacinas, a gravidade de certas doenças já não é percebida. Como resultado, as vacinas são esquecidas ou mesmo recusadas, expondo a população a impactos severos na saúde. Se a cobertura da população diminuir, algumas epidemias podem reaparecer, como aconteceu com a difteria em alguns países desde meados da década de 1980. Por exemplo, nas terras anteriormente pertencentes à URSS, o surto de difteria atingiu, 50 000 casos em 1995."
            },
            {
                "title": "Vacinação é um ato de solidariedade",
                "story": "Vacinação é um ato de solidariedade, ajudando na luta contra doenças e epidemias em todo o mundo. Pessoas não vacinadas ameaçam aqueles que não podem ser vacinados por razões médicas (por exemplo, crianças jovens, mulheres grávidas e pessoas com deficiências imunitárias)."
            },
            {
                "title": "Quem cobre os custos?",
                "story": "Na maior parte dos países da UE, o custo das vacinas essenciais recomendadas é coberto pelo Serviço Nacional de Saúde. O custo das vacinas adicionais não incluídas no calendário da vacina não está coberto."
            },
            {
                "title": "As vacinas protegem-nos",
                "story": "As vacinas são a forma mais eficaz de nos proteger de doenças graves como difteria, tétano, tosse convulsa, poliomielite, meningite, sarampo, entre muitas outras. Graças à elevada percentagem de pessoas vacinadas, a propagação destas doenças na Europa e não só, diminuiu drasticamente ou desapareceu completamente."
            },
            {
                "title": "Benefícios e riscos das vacinas",
                "story": "As vacinas no mercado já foram testadas com sucesso em milhões de crianças e adultos. São considerados como um dos fármacos mais seguros. Não existem vacinas isentas de riscos, mas o perigo é muito menor do que as doenças naturais. Os efeitos colaterais graves são pouco frequentes. Por exemplo, cerca de 1 em cada 10 têm inchaço em torno do local da infeção, e ainda menos pessoas têm febre. Ambos desaparecem dentro de alguns dias."
            },
            {
                "title": "Vacinas e autismo",
                "story": "Há alguns anos, um artigo era publicado na revista científica The Lancet que associava as vacinas ao autismo. Apesar disso, foram realizados 20 estudos em seis países diferentes, com a participação de milhares de pessoas; nenhuma associação foi encontrada entre a vacina tripla dos vírus (sarampo, papeira e rubéola) e o autismo."
            },
            {
                "title": "Varicela",
                "story": "Varicela é uma doença viral altamente contagiosa transmitida de pessoa para pessoa e é geralmente contraída durante a infância. Nessa idade, a varicela é uma doença desagradável, mas geralmente inofensiva. O risco de complicações aumenta acentuadamente, quando uma pessoa adoece com varicela na idade adulta. É, portanto, essencial proteger todos os adolescentes que não tiveram a doença durante a infância com a vacinação."
            },
            {
                "title": "Redução da mortalidade",
                "story": "As vacinas contra a difteria, o tétano, a tosse convulsa e o sarampo podem salvar 2,5 milhões de vidas de crianças por ano. Estão entre as medidas de saúde pública mais produtivas e rentáveis. Sem o programa de vacinação contra o COVID-19 nos EUA, até ao final de junho de 2021, teria havido aproximadamente 279.000 mortes adicionais e mais 1,25 milhões de outras hospitalizações."
            },
            {
                "title": "100% a proteção?",
                "story": "Nenhuma vacina oferece proteção a 100%, mas há medidas que permitem uma maior proteção, como doses de reforço - uma administração diferente da vacina após uma quantidade anterior. Após a imunização inicial, uma dose de reforço é uma reposição ao antigénio imunizador. Pretende-se aumentar a imunidade contra esse antigénio de volta aos níveis de proteção após a memória contra esse antigénio ter diminuído. Por exemplo, os reforços de vacina contra o tétano são, frequentemente, recomendados a cada 10 anos. Por esta altura, as células de memória específicas contra o tétano perdem a sua função ou são submetidas a apoptose."
            },
            {
                "title": "Ser vacinado contra a gripe",
                "story": "Gripe mata centenas de milhares de pessoas todos os anos. Vacinação é especialmente recomendado para pessoas com mais de 65 anos, doentes com diabetes crónica, pessoas com sistemas imunológicos enfraquecidos e pessoal de saúde. A vacinação contra a gripe tem de ser repetida todos os anos, uma vez que o vírus responsável pelas epidemias está em constante mudança."
            },
            {
                "title": "Esperança de vida",
                "story": "Uma parte significativa do aumento da nossa esperança de vida, que é agora superior a 80 anos em muitos países europeus, é fruto de estarmos quase todos vacinados. Atualmente, a vacinação continua a ser a melhor ferramenta preventiva contra determinadas doenças infeciosas."
            },
            {
                "title": "Morte súbita infantil",
                "story": "Não existe uma correlação documentada entre vacinas e síndrome de morte súbita infantil. As vacinas são administradas numa altura em que as crianças podem sofrer deste síndrome, por isso pode às vezes ser erroneamente relacionado."
            },
            {
                "title": "As vacinas salvam vidas",
                "story": "Nos países em desenvolvimento, as três vacinas essenciais (sarampo, papeira e rubéola) podem poupar 16 dólares em custos médicos diretos necessários para tratar estas doenças e aliviar as suas consequências. Imunizar uma criança contra sete infeções (tuberculose, poliomielite, difteria, tétano, tosse convulsa, hepatite B e sarampo) custa 17 dólares, uma figura ridícula em comparação com qualquer outro tratamento médico."
            },
            {
                "title": "Varíola",
                "story": "Varíola foi a primeira doença erradicado, graças à vacinação. Em 1980, a Saúde Mundial Organização (OMS) anunciou que a varíola tinha sido erradicada em todo o mundo, graças a uma campanha coordenada de vacinação a nível mundial. Isto acabou com uma doença que matou 35% das pessoas infetadas e causou cegueira e múltiplas cicatrizes para os sobreviventes."
            },
            {
                "title": "Como é desenvolvida uma vacina?",
                "story": "Os fármacos que se podem tornar vacinas devem ser analisados e testados em células e animais em estudos que custam quantidades significativas de dinheiro. Se forem obtidos bons resultados nestes testes, a farmacêutica pede às autoridades para aprovar um ensaio clínico humano. Os ensaios clínicos dividem-se em três fases, incluindo muitos procedimentos e mais testes. Só se os resultados forem positivos e as autoridades aprovarem a vacina é que a empresa farmacêutica a pode vender."
            },
            {
                "title": "Vacinas e infeções naturais",
                "story": "As vacinas estimulam o sistema imunológico a criar respostas semelhantes, mas menos intensas ao efeito de uma infeção natural e prevenir a doença e as suas complicações na maioria dos casos. Por outro lado, o preço da imunidade após infeção natural pode ser pneumonia de varicela ou pneumococco, incapacidade intelectual de Haemophilus influenzae tipo b (Hib), defeitos congénitos da rubéola, cancro do fígado devido ao vírus da hepatite B, morte por sarampo, etc. Se quisesse ganhar imunidade ao sarampo, por exemplo, ao contrair a doença, enfrentaria uma em cada 500 hipóteses de morte devido aos seus sintomas. Em contrapartida, o número de pessoas que tiveram reações alérgicas severas de uma vacina MMR é inferior a um em um milhão."
            },
            {
                "title": "Timerosal",
                "story": "O timerosal é um composto que contém mercúrio usado para prevenir o crescimento de bactérias e fungos em frascos de vacinas. No entanto, a quantidade de timerosal nas vacinas é mínima e não implica qualquer risco para a saúde. Uma vacina que contém 0,01% de um timerosal como conservante contém aproximadamente a mesma quantidade mínima de mercúrio contida numa pequena lata de atum. Além disso, desde 2001, as vacinas de rotina para crianças com menos de seis anos não contêm timerosal. Adolescentes e adultos também podem solicitar vacinas sem timerosal. O timerosal contém etilmercúrio, que é rapidamente eliminado do corpo humano, em comparação com o metilmercúrio, que se bioacumula – pelo que existe também uma diferença na forma do metal tóxico. No entanto, as vacinas contra a COVID-19, por exemplo, não contêm toxinas"
            },
            {
                "title": "Alumínio",
                "story": "Certos elementos, como os sais de alumínio, são adicionados às vacinas porque funcionam como um adjuvante, o que significa que a sua presença aumenta a resposta imune quando se é vacinado. A pequena quantidade de alumínio em algumas vacinas não causa qualquer risco. Uma dose de vacina contém 0,5 mg de alumínio. Ao mesmo tempo, estima-se que ingerimos 8 mg de alimentos por dia sem causar qualquer problema. Além disso, apenas certas vacinas contêm sais de alumínio, e novas vacinas COVID-19 não as incluem."
            },
            {
                "title": "Que efeito teria o sarampo se não fossemos vacinados?",
                "story": "Antes da vacina contra o sarampo ter sido introduzida em 1963, havia epidemias significativas a cada dois ou três anos, causando cerca de 2,6 milhões de mortes por ano. Desde então, o número diminuiu e, em 2016, registaram-se 89.780 mortes por sarampo em todo o mundo. Isto elevou o número para menos de 100.000 mortes por ano pela primeira vez. Se a vacina contra a doença acabar, podemos voltar à situação anterior."
            },
            {
                "title": "Vacinas e o sistema imunológico",
                "story": "Bebés e crianças são expostos a muitos vírus diariamente enquanto brincam, comem e respiram. Estes vírus, as suas proteínas e outras substâncias que segregam agem como antigénios – ou seja, ativam a resposta imune. A quantidade de antigénios com que as crianças lutam todos os dias (2.000-6.000) é, portanto, muito superior ao número total de antigénios aplicados através da vacinação. Os sistemas imunológicos das crianças estão preparados para tolerar bem as vacinas."
            },
            {
                "title": "Aumentando a probabilidade de não ficar infetado",
                "story": "Com base nos dados do condado de Los Angeles, as pessoas não vacinadas tinham cerca de 29 vezes mais probabilidades de serem hospitalizadas com COVID-19 do que aquelas que foram totalmente vacinadas, de acordo com um relatório do CDC (Centers for Disease Control and Prevention in the US) em 2021."
            }
        ],
        "positionCards" : [
            {
                "title" : "Posição 1",
                "position": "O Estado estabelece um calendário obrigatório de vacinação para todos. As vacinas que inclui, são gratuitas e são impostas sanções às pessoas que optam por não ser vacinadas ou não vacinarem os seus filhos."
            },
            {
                "title" : "Posição 2",
                "position": "O Estado insiste em apenas algumas vacinas, seguindo um calendário obrigatório de vacinação. É também estabelecido um calendário facultativo para as vacinas que não são consideradas como prioridades tão elevadas. As vacinas incluídas no calendário são gratuitas e não são impostas sanções às pessoas que não seguem o calendário de vacinação obrigatório. "
            },
            {
                "title" : "Posição 3",
                "position": "O Estado assume a tarefa de recomendar algumas vacinas. Não obriga os seus cidadãos; permite-lhes escolher de forma responsável, fornecendo-lhes todas as informações necessárias e cobrindo os custos."
            },
            {
                "title" : "Posição 4",
                "position": "Seguindo o princípio da liberdade de escolha, o Estado não se envolve em questões relacionadas com a vacinação. Os cidadãos devem obter informações para si próprios (por exemplo, através dos seus médicos) e decidir se querem ser vacinados e contra quais doenças. O Estado não cobre o custo destas vacinas."
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
                "image": "card_viruses_11.webp",
                "story": "Min son Francesco var en livlig, intelligent, nyfiken pojke som alltid var frisk. För två år sedan, vid 12 års ålder, dog han plötsligt av hjärnhinneinflammation på ett sommarläger. Under semestern drabbades även en annan pojke av hjärnhinneinflammation, men fick inga ytterligare konsekvenser. Alla ungdomar på lägret fick en förebyggande dos antibiotika. På sjukhuset berättade de att det fanns ett vaccin mot smittan som dödade vår son. Utöver den enorma smärtan för förlusten av min son gör det mig ännu mer ont att tänka på att han fortfarande skulle vara vid liv idag om han hade blivit vaccinerad."
            },
            {
                "title": "",
                "image": "card_viruses_12.webp",
                "story": "Jag var väldigt ovillig att acceptera influensavaccinationen när vår husläkare erbjöd oss det i år. Sedan vi gick i pension har min man fått hjärtsvikt och vi har vaccinerats varje år, men förra året drabbades vi av influensa trots att vi var vaccinerade. I år erbjöd vår läkare oss vaccinet igen och, eftersom han insisterade, gick vi med på det. Han berättade för oss att årets virus liknade det som orsakade spanska sjukan i början av förra seklet, men en sådan fruktansvärd epidemi inträffade inte och varken min man eller jag blev sjuka. Vi har intrycket att vaccination är meningslöst, kostsamt och utförs till förmån för läkemedelsföretagen."
            },
            {
                "title": "",
                "image": "card_viruses_13.webp",
                "story": "Vår 5-åriga dotter Anna har haft flera allergiska reaktioner  mot olika livsmedel, pollen, mediciner, men även några vacciner mot vilka hon fått starka reaktioner (hög feber, hudutslag över hela kroppen) så det har varit svårt för oss som föräldrar att ge henne alla rekommenderade vacciner. Sedan hon började i förskolan har vi varit mycket oroliga efter att ha stött på några andra föräldrar som vägrat vaccinera sina barn och antyder att vaccin är meningslöst om inte rent av farligt. Eftersom Anna inte har fått alla inplanerade vacciner är vi rädda för att hon kan vara särskilt sårbar när hon är i samma grupp med barn som inte vaccinerats enligt barnvaccinationsprogrammet."
            },
            {
                "title": "",
                "image": "card_viruses_14.webp",
                "story": "Jag läste en världshälsoorganisations-broschyr på barnläkarmottagningen. År 1998 drabbades cirka tusen barn varje dag av förlamning på grund av polioviruset. De flesta av dem bodde i de fattigaste länderna. Efter världsomspännande vaccinationskampanjer drabbades år 2000 endast 30 barn om dagen av förlamning på grund av polio. När jag fick min son vaccinerad kände jag mig som en del av ett projekt. Jag gjorde det för honom, för hans bröder och systrar och för alla barn i världen."
            },
            {
                "title": "",
                "image": "card_viruses_15.webp",
                "story": "Vid två års ålder diagnostiserade barnläkaren en störning inom det autistiska spektrumet hos vår son Esteve. Vi upptäckte de första symtomen efter den andra vaccinationen. Han var irriterad, han ville inte titta på oss, han gillade inte att bli hämtad och han levde som om han var ensam. Vi läste en artikel på internet från den medicinska tidskriften Lancet som hade funnit ett samband mellan autism och vacciner. Barnläkaren berättade för oss att artikeln hade dragits tillbaka på grund av att studien inte var tillräckligt vetenskapligt utförd och många efterföljande studier har tillbakavisat sambandet mellan vaccination och autism. Barnläkaren berättade också att sjukdomen vanligtvis diagnostiseras ungefär samtidigt som barn vaccineras, så vissa tror felaktigt att det finns ett samband mellan dessa. Vi förstod vad han sa, men tvivlet kommer alltid att finnas där."
            },
            {
                "title": "",
                "image": "card_viruses_16.webp",
                "story": "Det har skett ett utbrott av mässling vid universitetet jag har gått på de senaste månaderna. Till att börja med fanns det några enstaka fall, men epidemin har spridit sig och nu är många människor sjuka. Några har lagts in på sjukhus. Komplikationerna av mässling hos vuxna kan vara allvarliga, så myndigheterna beslutade att vaccinationsjournaler måste uppvisas för att kunna delta i kurser annars måste studenterna bevisa att de redan haft sjukdomen. Eftersom vacciner inte är obligatoriska, tror jag inte att myndigheterna bör kränka vår integritet på detta sätt."
            }
        ],
        "infoCards" : [
            {
                "title": "Vaccinationsskydd",
                "story": "Med vaccinationsframgång minskar rädslan för vissa sjukdomar. Som ett resultat glöms vacciner bort eller till och med vägras, vilket utsätter befolkningen för allvarliga konsekvenser. Om vaccinationstäckning i befolkningen minskar kan vissa epidemier dyka upp igen, vilket hände med difteri i vissa länder sedan mitten av 1980-talet. Till exempel i de länder som tidigare tillhörde Sovjetunionen nådde difteriutbrottet sammanlagt 50 000 fall år1995."
            },
            {
                "title": "Vaccination är en handling av solidaritet",
                "story": "Det hjälper i kampen mot sjukdomar och epidemier runt om i världen. Ovaccinerade personer är ett hot mot de som inte kan vaccineras av medicinska skäl (till exempel små barn, gravida kvinnor och människor med svagt immunförsvar)."
            },
            {
                "title": "Vem står för kostnaderna?",
                "story": "I de flesta EU-länder täcks kostnaden för rekommenderade basvacciner av socialförsäkringen. Kostnaden för ytterligare vacciner som inte ingår i vaccinationsprogrammet täcks inte."
            },
            {
                "title": "Vacciner skyddar oss",
                "story": "Vacciner är det mest effektiva sättet att skydda oss från allvarliga sjukdomar som difteri, stelkramp, kikhosta, polio, hjärnhinneinflammation, mässling m fl. Tack vare den höga andelen vaccinerade har spridningen av dessa sjukdomar i och utanför Europa minskat kraftigt eller helt försvunnit."
            },
            {
                "title": "Fördelar och risker med vaccin",
                "story": "Det finns inga riskfria vacciner, men faran är mycket mindre än om man fått sjukdomen naturligt. Faktum är att de anses vara bland de säkraste medicinerna. De vacciner som för närvarande finns på marknaden har redan framgångsrikt testats på miljontals barn och vuxna. Till exempel dör en av 7 difteripatienter medan av difterivaccin får cirka 1 av 10 svullnad runt infektionsplatsen, ännu färre får feber. Båda symptomen försvinner inom några dagar. Allvarliga biverkningar är mycket sällsynta."
            },
            {
                "title": "Vacciner och autism",
                "story": "För några år sedan var det en artikel publicerad i den vetenskapliga tidskriften The Lancet som hade funnit ett samband mellan vaccin och autism. Trots detta, i 20 studier utförda i sex olika länder, med deltagande av tusentals personer, hittades ingen samband mellan trippelvirusvaccinet (mässling, påssjuka, röda hund) och autism."
            },
            {
                "title": "Vattkoppor",
                "story": "Vattkoppor är en mycket smittsam virussjukdom som sprids från person till person vanligtvis under barndomen. I den åldern är vattkoppor en obehaglig men generellt ofarlig sjukdom. Risken för komplikationer ökar dock kraftigt när en person får vattkoppor som vuxen. Det är därför viktigt att skydda alla tonåringar som inte har haft sjukdomen under barndomen med vaccination."
            },
            {
                "title": "Minskad dödlighet",
                "story": "Vaccin mot difteri, stelkramp, kikhosta och mässling gör det möjligt att rädda 2,5 miljoner barns liv varje år. De är bland de mest effektiva och kostnadseffektiva folkhälsoåtgärderna. Utan vaccinationsprogrammet mot covid-19 i USA, i slutet av juni 2021, skulle det ha varit cirka 279 000 ytterligare dödsfall och upp till 1,25 miljoner ytterligare sjukhusvistelser."
            },
            {
                "title": "100% skydd?",
                "story": "Inget vaccin ger 100 % skydd, men det finns åtgärder som tillåter ökat skydd, så kallade booster doser - en extra dos av ett vaccin efter en tidigare dos. Efter initial immunisering är en boosterdos en återexponering för det immuniserande antigenet. Det avser att öka immuniteten till skyddsnivåer, efter att minnet mot antigenet minskat med tiden. Till exempel rekommenderas ofta stelkrampsbooster vart tionde år, då minnesceller som är specifika mot stelkramp förlorar sin funktion eller genomgår apoptos (programmerad celldöd)."
            },
            {
                "title": "Att bli vaccinerad mot influensa",
                "story": "Influensa dödar hundratusentals människor varje år. Vaccination rekommenderas särskilt för personer över 65 år, patienter med kronisk diabetes, personer med försvagat immunförsvar och hälsopersonal. Influensavaccination måste upprepas varje år, eftersom viruset som orsakar epidemierna ständigt förändras."
            },
            {
                "title": "Förväntade livslängd",
                "story": "En betydande del av ökningen av vår förväntade livslängd, som nu är över 80 i många europeiska länder, beror på att vi nästan alla är vaccinerade. Idag är vaccination fortfarande det bästa förebyggande verktyget mot vissa infektionssjukdomar."
            },
            {
                "title": "Plötslig spädbarnsdöd",
                "story": "Det finns ingen dokumenterad korrelation mellan vacciner och plötslig spädbarnsdöd. Den tidpunkt då man brukar vaccinera barn råkar sammanfalla med den tidpunkt då sannolikheten för att ett barn råkar ut för plötslig spädbarnsdöd är som störst. Därför kan vacciner och plötslig spädbarnsdöd ibland felaktigt relateras."
            },
            {
                "title": "Vacciner räddar liv",
                "story": "Vacciner räddar liv i fattiga länder Varje spenderad dollar på de tre grundläggande vaccinerna (mässling, påssjuka och röda hund) kan generera en besparing på 16 dollar i direkta medicinska kostnader som är nödvändiga för att behandla dessa sjukdomar och lindra deras konsekvenser. Att vaccinera ett barn mot sju infektioner (tuberkulos, polio, difteri, stelkramp, kikhosta, hepatit B och mässling) kostar 17 dollar, en löjligt siffra jämfört med kostnaden för någon annan medicinsk behandling."
            },
            {
                "title": "Smittkoppor",
                "story": "Smittkoppor, den första sjukdomen som utrotats tack vare vaccination. År 1980 meddelade Världshälsoorganisationen (WHO) att smittkoppor hade utrotats över hela världen, tack vare en samordnad världsomspännande vaccinationskampanj. Detta satte stopp för en sjukdom som dödade 35 % av de infekterade och orsakade blindhet och grova ärr hos de överlevande."
            },
            {
                "title": "Hur utvecklas ett vaccin?",
                "story": "Läkemedel som kan bli vacciner måste analyseras och testas på celler och djur i studier som kostar stora summor pengar. Får man bra resultat i dessa tester ansöker läkemedelsföretaget myndigheterna att godkänna en klinisk prövning på människor. Kliniska prövningar är indelade i tre faser, inklusive många procedurer och fler tester. Bara om resultaten är positiva och myndigheterna godkänner vaccinet kan läkemedelsföretaget sälja det."
            },
            {
                "title": "Vacciner och naturliga infektioner",
                "story": "Vacciner stimulerar immunförsvarsystemet att ge en mindre intensiv respons på en infektion och förhindrar insjuknande och komplikationer. Priset för immunitet efter naturlig infektion kan vara hög, t ex lunginflammation från vattkoppor eller pneumokocker, intellektuell funktionsnedsättning från Haemophilus influenzae typ b (Hib), fosterskador från röda hund, levercancer från hepatit B-virus, etc. Om du vill få immunitet mot mässling, till exempel genom att insjukna i sjukdomen, skulle du ha en risk av 1 på 500 att dö av dina symtom. Däremot är antalet personer som har haft svåra allergiska reaktioner från ett MMR-vaccin mindre än en på en miljon."
            },
            {
                "title": "Tiomersal",
                "story": "Tiomersal är en kemisk förening som innehåller kvicksilver  och  används för att förhindra tillväxt av bakterier och svampar i vaccinflaskor. Mängden tiomersal som finns i vacciner är dock mycket liten och innebär ingen hälsorisk. Ett vaccin som innehåller 0,01 % tiomersal som konserveringsmedel innehåller ungefär samma mängd elementärt kvicksilver som finns i en liten burk tonfisk. Dessutom innehåller rutinvacciner för barn under sex år sedan 2001 inte längre tiomersal. Tonåringar och vuxna kan också begära tiomersalfria vacciner. Tiomersal innehåller etylkvicksilver, som snabbt avlägsnas från människokroppen jämfört med metylkvicksilver som bioackumuleras – så det är också skillnad i vilken form giftig metall förekommer. Covid-19-vacciner innehåller inga giftiga ämnen alls."
            },
            {
                "title": "Aluminium",
                "story": "Anledningarna till att vissa kemiska ämnena som  aluminiumsalter tillsätts i vacciner, är att de fungerar som ett adjuvans, vilket innebär att dess närvaro ökar immunsvaret när du vaccineras. Den lilla mängd aluminium som finns i vissa vacciner medför inte någon risk. En dos vaccin innehåller 0,5 mg aluminium medan man räknar med att vi får i oss 8 mg i mat varje dag utan att det ställer till med några problem. Dessutom innehåller endast vissa vacciner aluminiumsalter och nya covid-19-vacciner innehåller dem inte."
            },
            {
                "title": "Mässling",
                "story": "Vilken effekt skulle mässling ha om vi inte vore vaccinerade? Innan mässlingsvaccinet introducerades 1963 var det stora epidemier vartannat eller vart tredje år som orsakade cirka 2,6 miljoner dödsfall per år. Sedan dess har siffran sjunkit och 2016 var det 89 780 dödsfall av mässling i hela världen. Detta var för första gången som siffran sjunkit under 100 000 dödsfall per år. Om vaccinationen mot sjukdomen upphör, kan vi återgå till den tidigare situationen."
            },
            {
                "title": "Vacciner och immunförsvar",
                "story": "Bebisar och barn utsätts för många virus varje dag när de leker, äter och andas. Dessa virus, dess proteiner och andra ämnen de utsöndrar fungerar som antigener – med andra ord aktiverar de immunsvaret. Mängden antigener som barn kämpar mot varje dag (2 000-6 000) är därför mycket högre än det totala antalet antigener som appliceras genom vaccination. Barns immunsystem tål vacciner väl."
            },
            {
                "title": "Ökar sannolikheten att inte bli smittad",
                "story": "Baserat på data från Los Angeles område, var ovaccinerade personer cirka 29 gånger mer benägna att läggas in på sjukhus med COVID-19 än de som var helt vaccinerade, enligt en CDC-rapport (Centers for Disease Control and Prevention i USA) 2021."
            }
        ],
        "positionCards" : [
            {
                "title" : "Ställningstagande 1",
                "position": "Staten upprättar ett obligatoriskt vaccinationsprogram för alla. Vaccinerna som ingår är gratis och påföljder utdöms för personer som väljer att inte vaccinera sig eller att inte låta vaccinera sina barn."
            },
            {
                "title" : "Ställningstagande 2",
                "position": "Staten påbuder endast ett fåtal vacciner, efter ett obligatoriskt vaccinationsprogram. Ett valfritt vaccinationsprogram upprättas också för de vacciner som inte anses vara så högprioriterade. Vaccinerna som ingår är gratis och påföljder utdöms inte för personer som inte följer det obligatoriska vaccinationsprogrammet."
            },
            {
                "title" : "Ställningstagande 3",
                "position": "Staten tar på sig uppdraget att rekommendera några vacciner. Den tvingar inte sina medborgare, men tillåter dem att välja ansvarsfullt, förser dem med all nödvändig information och täcker kostnaderna."
            },
            {
                "title" : "Ställningstagande 4",
                "position": "Enligt principen om valfrihet engagerar sig staten inte i frågor som rör vaccination. Medborgarna måste själva få information (till exempel via sina läkare) och bestämma om de vill vaccineras och mot vilka sjukdomar. Staten står inte för kostnaderna för dessa vacciner."
            }
        ]
      }
    }
</i18n>

<style scoped>
        
</style>