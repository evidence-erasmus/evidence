<template>
    <div>
        <h2 class="text-2xl">{{ t('storyCardsTitle') }}</h2>
        
        <section class="flex flex-wrap gap-4 mb-10 mt-5">
            
            <div v-for="(cardS, i) in tm('storyCards')" :key="`cardS${i}`"
                class="flex flex-col justify-around
                w-[2.75in] h-[4.75in]
                p-4
                border-4 border-sky-400
                text-center
                rounded-lg shadow-md" style="hyphens: auto;"
            >
                <h3 class="text-center text-6xl">{{ rt(cardS.emoji) }}</h3>
                <p class="text-[9pt] m-0 leading-tight">{{ rt(cardS.story) }}</p>
            </div>
        </section>
    
        <h2 class="text-2xl">{{ t('infoCardsTitle') }}</h2>

        <section class="flex flex-wrap gap-4 mt-5">
            <div v-for="(cardI, i) in tm('infoCards')" :key="`cardI${i}`"
                class="flex flex-col justify-around
                w-[2.75in] h-[4.75in]
                p-4
                border-4 border-blue-500
                text-center
                rounded-lg shadow-md" style="hyphens: auto;"
            >
                <h3 class="text-center text-lg">{{ rt(cardI.title) }}</h3>
                <p class="text-[9pt] m-0 leading-tight">{{ rt(cardI.story) }}</p>
            </div>
        </section>
    </div>
</template>


<script setup>
    const { t, tm, rt } = useI18n({
        useScope: 'local'
    });
  
</script>


<i18n lang="json">
    {
      "en": {
        "storyCardsTitle" : "Story cards",
        "infoCardsTitle" : "Info cards",
        "storyCards" : [
            {
                "title": "",
                "emoji": "🧔",
                "story": "My son Francesco was a lively, intelligent, curious boy who was always healthy. Two years ago, at the age of 12, he died suddenly of meningitis at a summer camp. During the holidays, another boy also went down with meningitis but suffered no further consequences. All the youngsters at the camps received a preventive dose of antibiotics. At the hospital, they told us there was a vaccine against the pathogen that killed our son. On top of the tremendous pain of losing my son, it hurts me even more, to think that he would still be alive today if he had been vaccinated."
            },
            {
                "title": "",
                "emoji": "🤶",
                "story": "I was very reluctant to accept the flu vaccination when our family doctor offered it to us this year. Since we retired, my husband has developed heart failure, and we have been vaccinated every year. Still, we caught the flu last year even though we had been vaccinated. This year our doctor offered us the vaccine again, and, as he insisted, we agreed to be vaccinated. He told us this year’s virus was similar to the one that caused the Spanish flu epidemic at the beginning of the last century. Still, a terrible outbreak like that didn’t happen, and neither my husband nor I became ill. We have the impression that vaccination is a pointless, costly practice carried out for the benefit of drug companies."
            },
            {
                "title": "",
                "emoji": "👨‍👩‍👧",
                "story": "Our five years old daughter Anna has had several allergic to different foods, pollen, and medications, but also some vaccines towards which she has developed overreactions (high fever, skin rash all over the body), so it has been difficult for us as parents to give her all the recommended vaccines as scheduled. Since she went to preschool, we have been very worried after encountering other parents refusing vaccines for their children suggesting that vaccines are pointless, if not even dangerous. As Anna has not got all the scheduled vaccines, we are afraid she is especially vulnerable when being in the same group with children not vaccinated with the routinely scheduled vaccines."
            },
            {
                "title": "",
                "emoji": "👮‍♀️",
                "story": "I read a World Health Organisation leaflet at the pediatrician’s surgery. In 1998, about a thousand children suffered paralysis daily due to the polio virus. Most of them lived in the poorest countries. After worldwide vaccination campaigns, in 2000, only 30 children a day suffered paralysis due to polio. When I had my son vaccinated, I felt part of a project. I did it for him, his brothers and sisters, and all children, particularly those in the most deprived situations."
            },
            {
                "title": "",
                "emoji": "🧞‍♂️🧞‍♀️",
                "story": "At the age of two, the paediatrician diagnosed a disorder on the autistic spectrum in our son Esteve. We detected the first symptoms after the second vaccination. He was irritable, he wouldn’t look at us, he didn’t like being picked up and he was living as if he were alone. We read an article on the internet from the medical journal Lancet that related autism and vaccines. The paediatrician told us the article had been withdrawn because of fraud and many subsequent studies had rejected the relationship between vaccination and autism. The paediatrician also told us that the disease is usually diagnosed at about the same time as children are vaccinated, so some people wrongly believe there is a link between the two things. We understood what he was saying, but that doubt will always be there."
            },
            {
                "title": "",
                "emoji": "👩‍🦰",
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
        ]
      },
      "et": {
        "storyCardsTitle" : "Lookaardid",
        "infoCardsTitle" : "Infokaardid",
        "storyCards" : [
            {
                "title": "",
                "story": "My son Francesco was a lively, intelligent, curious boy who was always healthy. Two years ago, at the age of 12, he died suddenly of meningitis at a summer camp. During the holidays, another boy also went down with meningitis but suffered no further consequences. All the youngsters at the camps received a preventive dose of antibiotics. At the hospital, they told us there was a vaccine against the pathogen that killed our son. On top of the tremendous pain of losing my son, it hurts me even more, to think that he would still be alive today if he had been vaccinated."
            },
            {
                "title": "",
                "story": "I was very reluctant to accept the flu vaccination when our family doctor offered it to us this year. Since we retired, my husband has developed heart failure, and we have been vaccinated every year. Still, we caught the flu last year even though we had been vaccinated. This year our doctor offered us the vaccine again, and, as he insisted, we agreed to be vaccinated. He told us this year’s virus was similar to the one that caused the Spanish flu epidemic at the beginning of the last century. Still, a terrible outbreak like that didn’t happen, and neither my husband nor I became ill. We have the impression that vaccination is a pointless, costly practice carried out for the benefit of drug companies."
            },
            {
                "title": "",
                "story": "Our five years old daughter Anna has had several allergic to different foods, pollen, and medications, but also some vaccines towards which she has developed overreactions (high fever, skin rash all over the body), so it has been difficult for us as parents to give her all the recommended vaccines as scheduled. Since she went to preschool, we have been very worried after encountering other parents refusing vaccines for their children suggesting that vaccines are pointless, if not even dangerous. As Anna has not got all the scheduled vaccines, we are afraid she is especially vulnerable when being in the same group with children not vaccinated with the routinely scheduled vaccines."
            },
            {
                "title": "",
                "story": "I read a World Health Organisation leaflet at the pediatrician’s surgery. In 1998, about a thousand children suffered paralysis daily due to the polio virus. Most of them lived in the poorest countries. After worldwide vaccination campaigns, in 2000, only 30 children a day suffered paralysis due to polio. When I had my son vaccinated, I felt part of a project. I did it for him, his brothers and sisters, and all children, particularly those in the most deprived situations."
            },
            {
                "title": "",
                "story": "At the age of two, the paediatrician diagnosed a disorder on the autistic spectrum in our son Esteve. We detected the first symptoms after the second vaccination. He was irritable, he wouldn’t look at us, he didn’t like being picked up and he was living as if he were alone. We read an article on the internet from the medical journal Lancet that related autism and vaccines. The paediatrician told us the article had been withdrawn because of fraud and many subsequent studies had rejected the relationship between vaccination and autism. The paediatrician also told us that the disease is usually diagnosed at about the same time as children are vaccinated, so some people wrongly believe there is a link between the two things. We understood what he was saying, but that doubt will always be there."
            },
            {
                "title": "",
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
        ]
      },
      "el": {
        "storyCards" : [
            {
                "title": "",
                "story": "My son Francesco was a lively, intelligent, curious boy who was always healthy. Two years ago, at the age of 12, he died suddenly of meningitis at a summer camp. During the holidays, another boy also went down with meningitis but suffered no further consequences. All the youngsters at the camps received a preventive dose of antibiotics. At the hospital, they told us there was a vaccine against the pathogen that killed our son. On top of the tremendous pain of losing my son, it hurts me even more, to think that he would still be alive today if he had been vaccinated."
            },
            {
                "title": "",
                "story": "I was very reluctant to accept the flu vaccination when our family doctor offered it to us this year. Since we retired, my husband has developed heart failure, and we have been vaccinated every year. Still, we caught the flu last year even though we had been vaccinated. This year our doctor offered us the vaccine again, and, as he insisted, we agreed to be vaccinated. He told us this year’s virus was similar to the one that caused the Spanish flu epidemic at the beginning of the last century. Still, a terrible outbreak like that didn’t happen, and neither my husband nor I became ill. We have the impression that vaccination is a pointless, costly practice carried out for the benefit of drug companies."
            },
            {
                "title": "",
                "story": "Our five years old daughter Anna has had several allergic to different foods, pollen, and medications, but also some vaccines towards which she has developed overreactions (high fever, skin rash all over the body), so it has been difficult for us as parents to give her all the recommended vaccines as scheduled. Since she went to preschool, we have been very worried after encountering other parents refusing vaccines for their children suggesting that vaccines are pointless, if not even dangerous. As Anna has not got all the scheduled vaccines, we are afraid she is especially vulnerable when being in the same group with children not vaccinated with the routinely scheduled vaccines."
            },
            {
                "title": "",
                "story": "I read a World Health Organisation leaflet at the pediatrician’s surgery. In 1998, about a thousand children suffered paralysis daily due to the polio virus. Most of them lived in the poorest countries. After worldwide vaccination campaigns, in 2000, only 30 children a day suffered paralysis due to polio. When I had my son vaccinated, I felt part of a project. I did it for him, his brothers and sisters, and all children, particularly those in the most deprived situations."
            },
            {
                "title": "",
                "story": "At the age of two, the paediatrician diagnosed a disorder on the autistic spectrum in our son Esteve. We detected the first symptoms after the second vaccination. He was irritable, he wouldn’t look at us, he didn’t like being picked up and he was living as if he were alone. We read an article on the internet from the medical journal Lancet that related autism and vaccines. The paediatrician told us the article had been withdrawn because of fraud and many subsequent studies had rejected the relationship between vaccination and autism. The paediatrician also told us that the disease is usually diagnosed at about the same time as children are vaccinated, so some people wrongly believe there is a link between the two things. We understood what he was saying, but that doubt will always be there."
            },
            {
                "title": "",
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
        ]
      }
    }
</i18n>

<style scoped>
        
</style>