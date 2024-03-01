export default {
  inquiry: {
    your_answers:"Suas respostas",
    add_row: "Adicionar linha",
    
    reliability_table : {
      txt_1: "Por favor, usa esta {link1} para procurar informações e avaliar a sua fiabilidade.",
      link_1: "ferramenta",
      url_1: "../../tools/reliability-assessment",
      label_1: "",
      cols: {
          col_1:"Elementos de prova / principais conclusões / resumo das informações relevantes para a hipótese)",
          col_2:"Tipo e fonte de evidência",
          col_3:"Fiabilidade taxa",
          col_4:"Comentários"
        },
        add_row: "Adicionar linha"
    },
    variables_table: {
      header: [
        {thead:"Variáveis de controlo", tsubhead:"(as que vão ser mantidas constantes)"},
        {thead:"Variável independente", tsubhead:"(aquela que vai ser alterada)"},
        {thead:"Variável dependente", tsubhead:"(aquela que vai ser medida)"},
      ]
    },



    ev_open: {
      title: "Evolução",
      subtitle: "Inquérito aberto",
      choose: "Escolha uma declaração:",
      q1_title: "1. Decisão do grupo: Vamos abordar a seguinte declaração:",
      myths: [
        "Evolução é só uma teoria.",
        "A evolução não é científica porque não é testável ou desmistificável. Faz afirmações sobre eventos que não foram observados e nunca podem ser recriados.",
        "A evolução segue um caminho direto predeterminado (ou se o ser humano evoluiu dos macacos, por que ainda existem macacos?)",
        "A evolução produz criaturas perfeitamente adaptadas.",
        "As espécies são imutáveis.",
        "O uso ou desuso de uma estrutura durante a vida de alguém pode ser herdado por seus descendentes e levar a uma mudança em uma espécie."
      ],
      expectations: {
        title: "Caso  ache que o seu mito pode ser testado experimentalmente, espera-se que:",
        items: [
          "Desenvolver uma hipótese testável / questão de pesquisa,",
          "projetar uma experiência que confirmará ou falsificará  a sua hipótese / responderá à sua pergunta de pesquisa,",
          "apresente os seus dados coletados na forma de tabelas e gráficos e, de preferência, grave em vídeo a sua experiência como prova (veja o tutorial)",
          "explique os seus resultados usando conhecimento científico,",
          "usar os seus resultados para chegar a uma Conclusão, divida a carga de trabalho dentro do seu grupo (por exemplo, designando cada um para uma função diferente - gerente, secretário, fornecedor de materiais)."
        ]
      },
      q2 : {
        txt: "Desenvolver uma {q2Link} / questão de pesquisa.",
        link: "hipótese testável",
        title: "2. Nossa hipótese / questão de pesquisa é:",
      },
      
      plan: {
        txt_1: "(pense bem como vai controlar todas as outras variáveis menos aquela que vai manipular; por favor indique em que atividades está envolvido como equipa completa e em que vai dividir responsabilidades, neste caso coloque por favor, quem é responsável por quê)",
        label_1: "3. Plano de atividades"
      },
      conclusions: "5. Com base na experiência, nossa(s) conclusão(ões) é(são):",
      reliability: {
        label_1: "4. Credibilidade das fontes"
      }
    },



    ev_myth1: {
      title: "Evolução",
      subtitle: "Inquérito guiado 1",
      myth: {
        text: "1ª Declaração:",
        myth: "“A evolução é apenas uma teoria”."
      },
      justification: {
        text: "Leia o texto com atenção. Identifique e documente os argumentos apresentados pelos autores para apoiar seu ponto de vista.",
        label_1: "Argumento:",
      },
      label_2: "Como vê esse argumento? Algo o está a incomodar?",
      label_3: "Como poderíamos verificar se este argumento é válido?",
      question: "Pergunta: Se a Evolução é só uma teoria? O que significa o termo “teoria” na ciência?",
      sources_text: "A fim de verificar as questões acima, as seguintes fontes bibliográficas são sugeridas:",
      sources: [
        {
          label: "Evolution",
          url: "https://www.youtube.com/watch?v=FMHNxsInyEg"
        },
        {
          label: "Evolution is a Fact and a Theory",
          url: "http://www.talkorigins.org/faqs/evolution-fact.html"
        },
        {
          label: "Misconceptions about evolution",
          url: "https://evolution.berkeley.edu/teach-evolution/misconceptions-about-evolution/"
        },
        {
          label: "Understanding Science",
          url: "https://undsci.berkeley.edu/article/0_0_0/howscienceworks_19"
        },
        {
          label: "Evolution is most certainly a theory, but certainly not “just” a theory",
          url: "https://www.sciencefocus.com/comment/evolution-is-most-certainly-a-theory-but-certainly-not-just-a-theory/"
        }
        
      ],
      label_4: "O que significa o termo “teoria” na Ciência?",
      label_5: "A Teoria da evolução preenche os critérios para ser uma teoria científica?",
      reliability: {
        label_1: "Credibilidade das fontes"
      }
    },


    ev_myth2: {
      title: "Evolução",
      subtitle: "Inquérito guiado 2",
      myth: {
        text: "2ª Declaração:",
        myth: "“A evolução não é científica porque não é testável ou desmistificada. Faz afirmações sobre eventos que não foram observados e nunca podem ser recriados.”"
      },
      justification: {
        text: "Leia o texto com atenção. Identifique e documente os argumentos apresentados pelos autores para apoiar seu ponto de vista.",
        label_1: "Argumento:",
      },
      label_2: "Como vê esse argumento? Algo o está a incomodar?",
      label_3: "Como poderíamos verificar se este argumento é válido?",
      question: "Questão:	A Evolução pode ser testada? Pode ser desmistificada? Toda ciência depende de experiências controladas em laboratório para ser considerada ciência verdadeira?",
      sources_text: "Para verificar a questão acima, as seguintes fontes bibliográficas são sugeridas:",
      sources: [
        {
          label: "Misconceptions about evolution",
          url: "https://evolution.berkeley.edu/teach-evolution/misconceptions-about-evolution/"
        },
        {
          label: "Warming to Evolution",
          url: "https://evolution.berkeley.edu/evo-news/warming-to-evolution/"
        },
        {
          label: "Toxic river means rapid evolution for one fish species",
          url: "https://evolution.berkeley.edu/evo-news/toxic-river-means-rapid-evolution-for-one-fish-species/"
        },
        {
          label: "Evolution under our noses",
          url: "https://evolution.berkeley.edu/evolution-under-our-noses/"
        }
      ],
      sources_2: [
        {
          text: "Estuda a fonte seguinte:",
          label: "Artificial selection in the lab",
          url: "https://evolution.berkeley.edu/artificial-selection-in-the-lab/"
        },
        {
          text: "“Jogue” com o laboratório virtual:",
          label: "Evolution in the lab",
          url: "https://evolution.berkeley.edu/angling-for-evolutionary-answers/evolution-in-the-lab/"
        },
        {
          text: "Executar a seguinte simulação:",
          label: "The evolutionary informatics lab",
          url: "https://www.evoinfo.org/weasel.html"
        },
      ],
      label_4: "Existem casos em que podemos realmente observar a evolução?",
      label_5: "Existem casos em que podemos testar processos evolutivos em laboratório?",
      label_6: "Existem alternativas que podemos usar em vez de experimentos reais?",
      reliability: {
        label_1: "Credibilidade das fontes"
      }
    },



    ev_myth3: {
      title: "Evolução",
      subtitle: "Inquérito guiado 3",
      myth: {
        text: "3ª Declaração:",
        myth: "A evolução segue um caminho direto predeterminado (ou se o ser humano evoluiu do macaco, por que ainda existem macacos?)"
      },
      justification: {
        text: "Leia o texto com atenção. Identifique e documente os argumentos apresentados pelos autores para apoiar seu ponto de vista.",
        label_1: "Argumento:",
      },
      label_2: "Como vê esse argumento? Algo o está a incomodar?",
      label_3: "Como poderíamos verificar se este argumento é válido?",
      question: "Perguntas: A evolução segue um caminho reto e predeterminado? Se uma espécie evolui a partir de outra espécie, isso significa que a primeira deve extinguir-se?",
      sources_text: "Para verificar a questão acima, as seguintes fontes bibliográficas são sugeridas:",
      sources: [
        {
          label: "Ιf human evolved from monkeys, why are there still monkeys?",
          url: "https://www.youtube.com/watch?v=4k4JLntDIzE"
        },
        {
          label: "Why Are There Still Monkeys?",
          url: "https://evolution-outreach.biomedcentral.com/articles/10.1007/s12052-010-0293-2"
        },
        {
          label: "Evolution doesn’t proceed in a straight line – so why draw it that way?",
          url: "https://theconversation.com/evolution-doesnt-proceed-in-a-straight-line-so-why-draw-it-that-way-109401"
        },
        {
          label: "Explore the Tree of Life",
          url: "http://tolweb.org/tree/"
        },
        {
          label: "The Tree of Life",
          url: "http://www.evogeneao.com/evo-gene.html"
        }
      ],
      label_4: "A evolução segue um caminho preestabelecido e retilíneo?",
      reliability: {
        label_1: "Credibilidade das fontes"
      }
    },


    ev_myth4: {
      title: "Evolução",
      subtitle: "Inquérito guiado 4",
      myth: {
        text: "4ª Declaração:",
        myth: "“A evolução produz criaturas perfeitamente adaptadas.”"
      },
      justification: {
        text: "Leia o texto com atenção. Identifique e documente os argumentos apresentados pelos autores para apoiar seu ponto de vista.",
        label_1: "Argumento:",
      },
      label_2: "Como vê esse argumento? Algo o está a incomodar?",
      label_3: "Como poderíamos verificar se este argumento é válido?",
      question: "Questão: É necessário estar perfeitamente adaptado para sobreviver? A seleção natural produz perfeição/criaturas perfeitamente adaptadas?",
      sources_text: "Para verificar a questão acima, as seguintes fontes bibliográficas são sugeridas:",
      sources: [
        {
          label: "Does Evolution Leads to Perfection?",
          url: "https://www.youtube.com/watch?v=O1Y3XyW9pEs"
        },
        {
          label: "No Perfect Organism",
          url: "https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_General_Biology_(Boundless)/19%3A_The_Evolution_of_Populations/19.03%3A_Adaptive_Evolution/19.3E%3A_No_Perfect_Organism"
        },
        {
          label: "Evolution myths: Evolution produces perfectly adapted creatures",
          url: "https://www.newscientist.com/article/dn13640-evolution-myths-evolution-produces-perfectly-adapted-creatures/"
        },
        {
          label: "Selection, not perfection",
          url: "https://evolution.berkeley.edu/misconceptions-about-natural-selection-and-adaptation/selection-not-perfection/"
        },
        {
          label: "Understanding Natural Selection: Essential Concepts and Common Misconceptions",
          url: "https://evolution-outreach.biomedcentral.com/articles/10.1007/s12052-009-0128-1"
        }
      ],
      label_4: "É preciso estar perfeitamente adaptado para sobreviver?",
      label_5: "A seleção natural produz a perfeição/criaturas perfeitamente adaptadas?",
      reliability: {
        label_1: "Credibilidade das fontes"
      }
    },



    ev_myth5: {
      title: "Evolução",
      subtitle: "Inquérito guiado 5",
      myth: {
        text: "5ª Declaração:",
        myth: "“As espécies são imutáveis.”"
      },
      justification: {
        text: "Leia o texto com atenção. Identifique e documente os argumentos apresentados pelos autores para apoiar seu ponto de vista.",
        label_1: "Argumento:",
      },
      label_2: "Como vê esse argumento? Algo o está a incomodar?",
      label_3: "Como poderíamos verificar se este argumento é válido?",
      question: "Question: Do species change over time?",
      sources_text: "Para verificar a questão acima, as seguintes fontes bibliográficas são sugeridas:",
      sources: [
        {
          label: "Lamarck's Theory",
          url: "https://www.youtube.com/watch?v=9QwTCj817Sg"
        },
        {
          label: "5 Animals That Have Evolved Recently",
          url: "https://now.northropgrumman.com/5-animals-that-have-evolved-recently/"
        },
        {
          label: "Animal Evolution",
          url: "https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_Introductory_Biology_(CK-12)/05%3A_Evolution/5.25%3A_Animal_Evolution"
        },
        {
          label: "Gaps in the Fossil Record",
          url: "https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_General_Biology_(Boundless)/18%3A_Evolution_and_the_Origin_of_Species/18.05%3A_Evidence_of_Evolution/18.5C%3A_Gaps_in_the_Fossil_Record"
        }
      ],
      label_4: "As espécies mudam ao longo do tempo?",
      reliability: {
        label_1: "Credibilidade das fontes"
      }
    },



    ev_myth6: {
      title: "Evolução",
      subtitle: "Inquérito guiado 6",
      myth: {
        text: "6ª Declaração:",
        myth: "“O uso ou desuso de uma estrutura durante a vida de alguém, pode ser herdado por seus descendentes e levar a uma mudança em uma espécie”"
      },
      justification: {
        text: "Leia o texto com atenção. Identifique e documente os argumentos apresentados pelos autores para apoiar seu ponto de vista.",
        label_1: "Argumento:",
      },
      label_2: "Como vê esse argumento? Algo o está a incomodar?",
      label_3: "Como poderíamos verificar se este argumento é válido?",
      question: "Pergunta: Quais traços / características são hereditários?",
      sources_text: "Para verificar a questão acima, as seguintes fontes bibliográficas são sugeridas:",
      sources: [
        {
          label: "Lamarck's Theory",
          url: "https://www.youtube.com/watch?v=9QwTCj817Sg"
        },
        {
          label: "Lamarckism",
          url: "https://www.britannica.com/science/Lamarckism"
        },
        {
          label: "The History of Evolutionary Thought",
          url: "https://evolution.berkeley.edu/the-history-of-evolutionary-thought/1800s/early-concepts-of-evolution-jean-baptiste-lamarck/"
        },
        {
          label: "Evolutionary Theories",
          url: "https://www.sciencesfp.com/evolutionary-theories.html"
        },
        {
          label: "Darwin and natural selection",
          url: "https://www.open.edu/openlearn/nature-environment/natural-history/evolution-through-natural-selection/content-section-2"
        }
      ],
      label_4: "Quais características são hereditárias?",
      reliability: {
        label_1: "Credibilidade das fontes"
      }
    },





    cc_open: {
      title: "Climate change",
      subtitle: "Open inquiry",
      choose: "Choose a myth",
      q1_title: "1. We are going to bust the following myth:",
      myths: [
        "The extinction of species is a natural process. Mass extinctions of species have always occurred.",
        "Organisms can adapt to climate change.",
        "The science of climate change is not credible.",
        "The temperature rise is for good.",
        "There is no correlation between CO₂ and temperature.",
        "Climate change actions will make people poorer.",
        "The earth's climate has always changed, and now the same thing is happening."
      ],
      q2_txt: "Develop a {q2Link} / research question.",
      q2_link: "testable hypothesis",
      q2_title: "2. Our hypothesis / research question is:",
      q2_txt2: "Tegevusplaan (palun märkige, milliste tegevustega olete kogu meeskonnana kaasatud ja mille puhul kavatsete töökohustusi jagada, antud juhul pange palun kirja, kes mille eest vastutab):",

      plan: {
        txt_1: "(think carefully about how you will control all the other variables except the one you are going to manipulate; please indicate by which activities you are involved as a whole team and by which you are going to divide responsibilities, in this case, put down, who is responsible for what):",
        label_1: "3. Plan of activities"
      },

      reliability: {
        txt_1: "Kasuta järgmist tööriista informatsiooni otsimiseks ning selle usaldusväärsuse hindamiseks",
        label_1: "4. Uuritud materjalide usaldusväärsus."
      },
      q4_title: "5. Based on the experiment, our conclusion(s) is/are:",
      q5_title: "6. According to the data you collected, where do you owe the error of this myth?"
    },








    cc_myth1: {
      back: "Back",
      title: "Climate change",
      subtitle: "Guided inquiry; Myth 1",
      myth: "“The extinction of species is a natural process. Mass extinctions of species have always occurred”.",
      hypothesis: "Write down your testable hypothesis concerning Myth 1:",
      argument: {
        txt_1: "You are given the basic argument of Myth 1 and the question you must answer using the given scientific sources.",
        argument: "Argument of Myth 1: The mass extinction of species is a natural process."
      },
      question: {
        question: "Question: Is the mass extinction of species a natural process?",
        txt_1: "Study {link1} and watch the video {link2}. Then, answer the following questions.",
        link_1: "source 1.1",
        link_2: "Climate Change: Why are thousands of species facing extinction? - BBC News."
      },
      q_1: "1. What do we mean by  „mass extinction”?",
      q_2: "2. How many mass extinctions do you find happening?",
      q_3: "3. What were the causes of the mass extinctions?",
      q_4: "4. What were the consequences of the mass extinctions?",
      q_5: "5. Why should we worry about mass extinctions now?",
      q_6: {
        txt_1: "Study {link1} and answer the following question.",
        link_1: "source 1.2",
        q_6: "6. What is the reason for the mass killing of penguins?"
      },
      q_7: {
        txt_1: "Please use {link1} to assess the reliability of the sources used.",
        link_1: "this tool",
        q_7: "7. Write a summary of your findings in the following table."
      },
      q_8: "8. Based on the given evidence, our conclusion(s) concerning the myth “The extinction of species is a natural process. Mass extinctions of species have always occurred.” is (are):",
      q_9: "According to the data you collected, where do you owe the error of this myth?",
      sources: [
        {
          name: "Source 1.1",
          url: "http://mde-didaktiki.biol.uoa.gr/mde7/plexida/ordovician.html"
        },
        {
          name: "Video",
          url: "https://www.youtube.com/watch?v=nho73BtDQtE"
        },
        {
          name: "Source 1.2",
          url: "https://docs.google.com/document/d/e/2PACX-1vTxM7SnO9h9ZC8wxVMEVwU8Ha2_AKh99vbYcBO-g8BxJy9w5oFeb5lUoxUbvTQnq35mtT9Fi7bCSf67/pub"
        }
      ]
    },





    cc_myth2: {
      title: "Climate change",
      subtitle: "Guided inquiry, Myth 2",
      myth: "Myth 2: Organisms can adapt to climate change",
      hypothesis: "Write down your testable hypothesis concerning Myth 2:",

      a1: {
        argument: {
          txt_1: "You are given some arguments of Myth 2 and the questions you must answer using the given scientific sources.",
          argument: "Argument 1 of Myth 2: The species have adapted several times to adverse conditions, so they are able to survive in the new climatic conditions."
        },
        q1: {
          title_1: "Question: Does climate change affect species’ ability to adapt?",
          txt_1: "Watch the animation {link1} carefully and answer the following questions.",
          label_1: "What is it about? What is causing this change?",
          label_2: "What are the consequences of this change?",
          answer_1: "Coral reefs case"
        },
        q2: {
          title_1: "Question: Does the presence of acid in seawater affect the mass of corals?",
          txt_1: "Scientific Source: Conducting the experiment “Sharpening Oceans”",
          list_1_title: "Means and Materials:",
          list_1: [
            "Snail shells of the same size, very well cleaned",
            "White vinegar (50gr), Acidity: 4.5%",
            "2 plastic containers with lids",
            "Sea water 400g",
            "Measuring scales",
            "Volumetric containers",
            "Strainer",
            "Kettle",
            "Hot water",
            "Adhesive labels"
          ],
          list_2_title: "Experimental procedure:",
          list_2: [
            "Weigh the corals we will use. We record the mass of the shells. We make two groups with shells and try to make the groups have the same mass.",
            "In two identical containers put the same amount of sea water (200g). In the first container add vinegar.",
            "Place the shells in each container.",
            "Leave the containers closed for 40 minutes in the same conditions.",
            "Divide the containers into a separate container each. Boil the shells with hot water and leave them for 15 minutes.",
            "Clean each shell separately. Let them dry very well.",
            "Weigh each group of shells and record the new masses."
          ],
          data_table: {
            header: [
              {
                thead: "Constants",
                // tsubhead: "(need, mida üritatakse hoida katse jooksul  muutumatutena)"
              },
              {
                thead: "Changed factor",
                // tsubhead: "(see, mida muudetakse)"
              },
              {
                thead: "Measured factor",
                // tsubhead: "(see mida sekkumise tulemusena mõõdetakse)"
              }
            ]
          },
          table_2: {
            header: [
              { thead: " " },
              { thead: "Team A" },
              { thead: "Team B" }
            ],
            rows: [
              ["Initial mass (g):", "", ""],
              ["Final mass (g):", "", ""],
              ["Mass change (g):", "", ""]
            ]
          },
          table2_title: "Data recording",
          hypothesis: "Prediction",
          conclusions: "Observations:",
          source_1: {
            txt_1: "Study {link1} and answer the following question:",
            link_1: "Source 2.2",
            label_1: "Why is the recent bleaching in corals worrying?"
          },
          source_2: {
            txt_1: "Study {link1} and answer the following question:",
            link_1: "Source 2.3",
            label_1: "What is it about? What is the relationship between climate change and the transmission of viruses and diseases?"
          },
          source_3: {
            txt_1: "Watch the animation: {link1} and answer the following question:",
            link_1: "Climate change: Ice melting and animals",
            label_1: "How does climate change affect polar bear populations? Record inferentially the course of change."
          }
        }
      },

      a2: {
        argument: "The argument 2 of Myth 2: The evolution of species arose from the need for organisms to survive and survive in changing conditions.",
        q1: {
          question: "Question: Does climate change affect species evolution?",
          source_1: {
            txt_1: "Study {link1} and answer the following questions.",
            link_1: "Source 2.1",
            label_1: "What do we mean by “species evolution”"
          },
          label_2: "Why is climate change considered a concern for species evolution?"
        }
      },


      reliability: {
        txt_1: "Please use this {link1} abil to assess the reliability of the sources used.",
        link_1: "tool",
        label_1: "Write a summary of your findings in the following table.",
        url_1: "https://docs.google.com/document/d/12ABQ5rgwb418f47KKdg1yPQbMUn7n6N0h4fEJLhJzbg/edit?usp=share_link"
      },

      conclusions: "Based on the given evidence, our conclusion(s) concerning the myth  “Organisations can adapt to climate change”, is (are):",

      flicc_label: "According to the data you collected, where do you owe the error of this myth?",

      sources: [
        {
          name: "Fishing Planet",
          url: "https://youtu.be/saUTXISSlBI"
        },
        {
          name: "Source 2.2",
          url: "https://drive.google.com/file/d/1dsgBLIsNaDFpB7y2AMamJgC41GEDHpt3/view?usp=share_link"
        },
        {
          name: "Source 2.3",
          url: "https://drive.google.com/file/d/1iVTPAHaL8bbUWskgKFvJfrRLjoQsQCde/view?usp=share_link"
        },
        {
          name: "Ice melting and animals",
          url: "https://youtu.be/mEgYnOaiJnU"
        },
        {
          name: "Source 2.1",
          url: "https://drive.google.com/file/d/19OENqL4uwh8YKd5SvAGUN44FC9md8nh5/view"
        }
      ]
    },



    cc_myth3: {
      title: "Climate change",
      subtitle: "Guided inquiry, Myth 3",
      myth: "Myth 3: “The science of climate change is not credible”.",
      hypothesis: "Write down your testable hypothesis concerning Myth 3.",
      argument: {
        txt_1: "You are given an argument about Myth 3 and the question you have to answer using the following scientific sources.",
        argument: "Argument of Myth 3: The collecting data from the observatory stations about the amount of the CO₂ are not reliable, so climate change is not a real fact."
      },
      question: "Question: Can we rely on collecting data from the observatory stations about the amount of the CO₂?",
      source_1: {
        txt_1: "Watch the video {link1}. Then, read the following text carefully, study the map, and answer the question.",
        link_1: "Building a robust temperature record",
        txt_2: "The global average monthly surface temperature (GMST), is reconstructed from a combination of data collected by 1. NASA GISTEMP, 2. CRUTEM (University of East England Climate Research Unit), 3. National Climate Data NOAA (NCDC). The data on which climate reconstruction is based, emerged from sources of observation from land, air, and sea."
      },
      img_1: {
        caption: "Figure 1. The ways in which data is collected by the NOAA organisation."
      },
      q_1: "According to the legend of the map, what are the data collection methods used by NOAA?",
      q_2: "What do you notice about the amount of data collection methods and their geographical location?",
      q_3: "NOAA maintains Baseline Observatories. How many such stations do you find on the map?",
      q_4: "What do you notice about the location of each observatory? Why do you think they were placed in these places?",
      noaa_stations: {
        txt_1: "Study the Webpage of {link1} and perform the task. What are the four NOAA observatories? Where are they located (longitude, latitude) and at what altitude? (Sources {source31}, {source32}, {source33}, {source34})",
        link_1: "NOAA",
        url_1: "https://gml.noaa.gov/",
        source_31: {
          link: "3.1",
          url: "https://drive.google.com/file/d/1yoT-7tTwsyKiPN7g1lPR4WwDl_R-9Tji/view?usp=sharing"
        },
        source_32: {
          link: "3.2",
          url: "https://drive.google.com/file/d/1uPvEUfKS2Yx6yMU9w5apr9Qhcs8nH4rG/view?usp=sharing"
        },
        source_33: {
          link: "3.3",
          url: "https://drive.google.com/file/d/1eR9NEujMajlKlAW_M75mcQQBIVjpIZo_/view?usp=sharing"
        },
        source_34: {
          link: "3.4",
          url: "https://drive.google.com/file/d/195ONima1nfQYeiUaRb6_X8GiTvax13gB/view?usp=sharing"
        }
      },
      noaa1_table: {
        header: [
          { thead: "Observatory" },
          { thead: "Longitude" },
          { thead: "Latitude" },
          { thead: "Altitude" },
        ]
      },
      q_5: "What do you notice about their location?",
      img_2: {
        txt_1: "At any time through these stations, we can receive information about the prevailing conditions. {link1}, you can see the latest recordings from Mauna Loa Station in Hawaii.",
        link_1: "Here",
        url_1: "https://gml.noaa.gov/obop/mlo/met.html",
        caption: "Figure 2. CO₂ measurements taken from 1975 to 2020 from the 4 main observation stations of NOAA.",
        conclusion: "Study the following graph and answer the question.",
      },
      conclusion: "Based on the given evidence, our conclusion(s) concerning the myth ”The science of climate change is not credible”, is (are):",
      flicc_label: "According to the data you collected, where do you owe the error of this myth?",
      sources: [
        {
          name: "Video: Building a robust temperature record",
          url: "https://www.youtube.com/watch?v=YKQiyBkt4Vs&t=228s"
        },
        {
          name: "Figure 1",
          url: "https://evidence.onkel.ee/assets/c-change__myth3__img1.webp"
        },
        {
          name: "NOAA website",
          url: "https://gml.noaa.gov/"
        },
        {
          name: "Figure 2",
          url: "https://evidence.onkel.ee/assets/c-change__myth3__img2.webp"
        }
      ]
    },





    cc_myth4: {
      title: "Climate change",
      subtitle: "Guided inquiry, Myth 4",
      myth: " Myth 4: “The temperature rise is for good”",
      hypothesis: "Write down your testable hypothesis concerning Myth 4.",
      a1: {
        argument: {
          txt_1: "You are given the basic arguments of Myth 4 and the questions you must answer using the following scientific sources.",
          argument: "Argument 1 of Myth 4: As the temperature rises, deaths from colds will decrease."
        },
        question: "Question: Does the rise in temperature affect the number of deaths?",
        source_txt: "Otsi vastused küsimustele kasutades viidatud allikaid.",
        source_410: {
          txt_1: "Study the {link1} and answer the question.",
          link_1: "publication of the World Health Organization",
          label_1: "“Climate change is considered the greatest threat to human health”, the report said. What do you think of this view after reading the above scientific source?  Justify your answer."
        },
        source_411: {
          txt_1: "Study the {link1} and perform the task.",
          link_1: "Source 4.1",
          label_1: "Write below examples about the effects of climate change on human health."
        },
        source_412: {
          txt_1: "Study the {link1} and perform the task.",
          link_1: "Source 4.2",
          label_1: "Record your observations about deaths due to climate change."
        },
        conclusion: "After studying the above scientific sources (Publication of the WHO, Source 4.1 & Source 4.2), what is your answer to the Question: Does the rise in temperature affect the number of deaths? Referring to Argument 1 of Myth 4?"
      },
      a2: {
        argument: "Argument 2 of Myth 4: As the temperature rises, the residential areas and the cultivated land will increase.",
        question: "Does the rise in temperature affect the amount of land used for housing or cultivation?",
        txt_1: "In order to check the above question, study or apply the following scientific sources.",
        exp: {
          title: "Scientific Source: Conducting an experiment",
          list_1: {
            title: "Means and materials:",
            list: [
              "Sand or soil", "Water", "Large plastic bottles cut in half", "Plastic cups", "Ice cubes", "Transparent film", "Light bulb", "Marker"
            ],
            image_caption: "Figure: Experiment setup"
          },
          list_2: {
            title: "Experimental procedure:",
            list: [
              "Place an equal amount of sand or soil in the two large plastic bottles.", "Place a plastic cup with the spout in the soil of each plastic bottle and secure the other plastic cup over the 1st glass with the spout facing up. Place the same number of ice in every 2nd plastic cup.", "Make grooves between the bottom two parts of the plastic cups so that water can flow from the ice into each plastic bottle.", "Put an equal amount of water in each plastic bottle.", "Cover each plastic bottle with cling film.", "Turn on the light and make observations after 20 minutes."
            ],
          },
          variable_table: {
            title: "Valid experiment",
            subtitle: "Fill the table.",
            table: {
              header: [
                { thead: "Constants" },
                { thead: "Changed factor" },
                { thead: "Measured factor" }
              ]
            }
          },
          hypothesis: "Prediction",
          results_table: {
            title: "Results",
            subtitle: "Fill the table.",
            table: {
              header: [
                { thead: "" },
                { thead: "Bottle A" },
                { thead: "Bottle B" },
              ],
              rows: [
                ["Initial water level (cm)", "", ""],
                ["Final water level (cm)", "", ""],
                ["Water level change (cm)", "", ""],
              ]
            }
          },
          conclusion: "Observations",
          islands: "Let us suppose that the two bottles represent two islands. Which island would you like to live on and why?"
        },
        source_421: {
          txt_1: "NB! At the following link {link1}, you can explore islands that are in danger of extinction due to climate change.",
          link_1: "link",
          txt_2: "Study the source of NASA: {link2} and perform the task.",
          link_2: "Vital Signs: Sea Level",
          label_1: "Record the factors associated with rising sea levels and, consequently, decreasing land available for housing or cultivation."
        },
        graph: {
          txt_1: "Compare the graphs below (you can go to the links below the graphs for more accurate data retrieval).",
          img_1: {
            src: "https://evidence.onkel.ee/assets/c-change__myth4__globaltemp.webp",
            credits: "https://climate.nasa.gov/vital-signs/global-temperature/",
            caption: "Global temperature 1880−..."
          },
          img_2: {
            src: "https://evidence.onkel.ee/assets/c-change__myth4__sealevel.webp",
            credits: "https://climate.nasa.gov/vital-signs/sea-level/",
            caption: "Sealevel Change 1900−2018"
          },
          sealevel_table: {
            subtitle: "Fill the table.",
            label_1: "What is the relationship between temperature and sea level?",
            table: {
              header: [
                { thead: "Year" },
                { thead: "1900" },
                { thead: "1920" },
                { thead: "1940" },
                { thead: "1980" },
                { thead: "2000" },
                { thead: "2020" }
              ],
              rows: [
                ["Temperature", "", "", "", "", "", ""],
                ["Sea level", "", "", "", "", "", ""]
              ]
            }
          }
        },
        conclusion: "After studying the above scientific sources (Experimental procedure, Link & Graphs), what is your answer to the Question: “Does the temperature rise affect the amount of land used for housing or cultivation?” Referring to Argument 2 of Myth 4?"
      },
      a3: {
        argument: "Argument 3 of Myth 4: As the temperature rises, crops will increase, and agriculture will be favoured.",
        question: "Question: Does the increase in temperature affect the number of crops?",
        source_431: {
          txt_1: "Study the {link1} published by the European Environment Agency and perform the tasks.",
          label_1: "What changes exist or occur in the northern and southern countries?",
          table: {
            subtitle: "Record the information given in the source.",
            header: [
              { thead: "Northern Countries" },
              { thead: "Southern Countries" }
            ],
            rows: [
              ["", ""]
            ]
          }
        },
        source_432: {
          txt_1: "Study the diagram in {link1} and perform the task.",
          link_1: "Source 4.4",
          label_1: "Record the information you receive from the diagram.",
        },
        source_433: {
          txt_1: "Study the {link1} and answer the questions.",
          link_1: "BBC article",
          label_1: "Which issue does it raise? Why do you think we care so much about this?",
        },
        conclusion: "After studying the above scientific sources (Source 4.3, Source 4.4, BBC article), what is your answer to  the question: Does the temperature increase affect the number of crops?, Referring to  Argument 3 of Myth 4?"
      },
      a4: {
        argument: "Argument 4 of Myth 4: As the temperature rises, some species (e.g. insects) will be affected.",
        question: "Question: Does climate change affect the population of insects?",
        source_441: {
          txt_1: "Study again {link1} , watch the video {link2} and answer the question posed above.",
          link_1: "Source 4.3",
          link_2: "Impact of climate change on agricultural insect pests",
          url_2: "https://www.youtube.com/watch?v=XBxuuYRDc_w",
          label_1: "Does climate change affect the population of insects?",
        },
        source_442: {
          txt_1: "Study the {link1} and answer the question.",
          link_1: "Source 4.5",
          label_1: "What subject is it referring to? Record the information given.",
          table_label: "ENGLISH TRANSLATION IS MISSING ----------------------------------------- Otsige muid sarnaseid näiteid putukatest või umbrohtudest, mis mõjutavad või on hakanud mõjutama põllukultuure.",
          table: {
            header: [
              { thead: "Allikas" },
              { thead: "Näide" }
            ],
            rows: [
              ["", ""],
              ["", ""],
              ["", ""]
            ]
          }
        },
        conclusion: "ENGLISH TRANSLATION IS MISSING -----------------------------------------  Millise järelduse saab teha küsimuse “Kas kliimamuutus mõjutab liikide populatsioone?”, kohta?"
      },
      a5: {
        argument: "Argument 5 of Myth 4: Raising temperature helps the poor.",
        question: "Question: Does the rise in temperature affect the financial situation of the poor?",
        source_451: {
          txt_1: "Study the {link1} to answer the following questions.",
          link_1: "web page of UNHCR",
          label_1: "What is a “Climate Refugee”?",
          label_2: "List some of the reasons why people are becoming “climate refugees”."
        },
        conclusion: "After studying the above scientific sources (Web Page of UNHCR), what is your answer to the question: Does the temperature rise affect the financial situation of the poor?, referring to Argument 5 of Myth 4?",
        extra: {
          txt_1: "Study the following websites and answer the questions.",
          q_1: "What is Climate Justice",
          q_2: "Why is it an issue that concerns the citizens of every country?",
          q_3: "Do you think that climate change is a social issue?"
        }
      },
      conclusions: "Based on the given evidence, our conclusion(s) concerning the myth “The temperature rise is for good”, is (are):",
      flicc_label: "According to the data you collected, where do you owe the error of this myth?",
      sources: [
        {
          name: "Climate Change and Health",
          url: "https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health"
        },
        {
          name: "Source 4.1",
          url: "https://drive.google.com/file/d/1M7JY4bMJNEI95JIOWRnwXgmuk77_L2J2/view?usp=sharing"
        },
        {
          name: "Source 4.2",
          url: "https://drive.google.com/file/d/1vM4uPyU3_SKXAhQHqAR_GXoRnhAR9aF2/view?usp=sharing"
        },
        {
          name: "Islands that are in danger of extinction due to climate change",
          url: "https://www.activesustainability.com/climate-change/countries-risk-disappearing-climate-change/"
        },
        {
          name: "Sea Level",
          url: "https://climate.nasa.gov/vital-signs/sea-level/"
        },
        {
          // 5
          name: "Climate change affects agriculture",
          url: "https://drive.google.com/file/d/1xK65Z9PpcVY37UE5lKvuavIQwjDwvvRR/view?usp=sharing"
        },
        {
          name: "Source 4.4",
          url: "https://drive.google.com/file/d/1b-_nvENTZYeVGy77uZoYCc38d8UQ4XSh/view?usp=sharing"
        },
        {
          // 7
          name: "UK plants now flowering a month earlier",
          url: "https://www.bbc.com/news/science-environment-60220661"
        },
        {
          // 8
          name: "Climate change in agriculture and the fight against serious crop enemies",
          url: "https://drive.google.com/file/d/1E0fL-vTSpAfCcr5xcD3uMa32zJurYyhA/view?usp=sharing"
        },
        {
          // 9
          name: "Climate change and disaster displacement",
          url: "https://www.unhcr.org/climate-change-and-disasters.html"
        }
      ]
    },






    cc_myth5: {
      title: "Climate change",
      subtitle: "Guided inquiry, Myth 5",
      myth: "Myth 5: “There is no correlation between CO₂ and temperature”.",
      hypothesis: "Write down your testable hypothesis concerning Myth 5.",
      argument: {
        txt_1: "You are given the basic argument of Myth 5 and the question you must answer using the following scientific sources.",
        argument: "The argument of Myth 5: The view that CO₂ emissions are mainly responsible for the observed global warming in the 20th century is misleading."
      },
      question: "Question: Do CO₂ emissions affect global warming?",
      source_1: {
        txt_1: "Study the following source: {link1}",
        txt_2: "Record your comments."
      },
      exp_1: {
        title: "Scientific source: Conducting an experiment",
        question: "Follow the guidelines of the experimental procedure to answer the question: Does rising CO₂ affect the Earth's temperature?",
        formula: "ENGLISH MISSING ------------------------   NB! Acid + Carbonate → happejääk + H₂O + CO₂",
        list_1: {
          title: "Tools and materials:",
          list: [
            "Two bulbs", "Two electric thermometers", "Two glass bottles with caps", "Two paper rolls", "Baking soda", "Vinegar", "Funnel", "Volumetric cylinder", "Plastic container", "Spoon", "Pair of scissors", "Tape"
          ]
        },
        list_2: {
          title: "Experimental procedure:",
          list: [
            "Place the thermometer cable into the paper cylinder.", "Put three tablespoons of baking soda in the two glass bottles.", "In a volumetric cylinder, measure 50 mL of vinegar.", "Stick the paper cylinder with its thermometer in each glass bottle.", "In a container, pour the vinegar with the help of the funnel and close the lid. At the moment, we close the lid on the 2nd container.", "Leave a light bulb next to each container for 30 minutes. During this time, we monitor the change in temperature in each case and record our data."
          ]
        },
        table_1: {
          label: "Fill the table",
          table: {
            header: [
              { thead: "Constants" },
              { thead: "Changed factor" },
              { thead: "Measured factor" }
            ]
          }
        },
        hypothesis: "Prediction:",
        table_2: {
          title: "Record temperatures",
          txt_1: "Fill the table.",
          header: [
            { thead: "Time, min" },
            { thead: "0" },
            { thead: "2" },
            { thead: "4" },
            { thead: "6" },
            { thead: "8" },
            { thead: "10" },
            { thead: "12" },
            { thead: "14" },
            { thead: "16" },
            { thead: "18" }
          ],
          rows: [
            ["Container A Temperature °C", "", "", "", "", "", "", "", "", "", ""],
            ["Container B Temperature °C", "", "", "", "", "", "", "", "", "", ""]
          ]
        },
        table_3: {
          title: "Data recording",
          txt_1: "Fill the table.",
          header: [
            { thead: " " },
            { thead: "Container A" },
            { thead: "Container B" }
          ],
          rows: [
            ["Initial Temperature °C", "", ""],
            ["Final Temperature °C", "", ""],
            ["Temperature Change °C", "", ""]
          ]
        },
        collected_data: "Observations:"

      },
      // reliability: {
      //   txt_1: "Palun hinnake järgmise {link1} abil kasutatud infoallikate usaldusväärsust. Kirjutage oma uurimistulemustest kokkuvõte allpool olevasse tabelisse.",
      //   link_1: "tööriista",
      //   url_1: ""
      // },
      conclusion: "Based on the given evidence, our conclusion(s) concerning the myth “There is no correlation between CO₂ and temperature” is (are):",
      flicc_label: "According to the data you collected, where do you owe the error of this myth?",
      sources: [
        {
          name: "How Carbon Affects Nearly Everything on Earth – Including Our Future",
          url: "https://www.youtube.com/watch?v=lWEvBLlUa2E"
        }
      ]
    },





    cc_myth6: {
      title: "Climate change",
      subtitle: "Guided inquiry, Myth 6",
      myth: "Myth 6: “Climate change actions will make people poorer”.",
      hypothesis: "Write down your testable hypothesis concerning Myth 6.",
      argument: {
        txt_1: "You are given the basic argument of Myth 6 and the question you must answer using the following scientific sources.",
        argument: "The argument of Myth 6: Limiting the use of fossil fuels will hinder growth and increase the cost of living, harming the poorest."
      },
      question: "Question: Will limiting the use of fossil fuels affect growth and the cost of living, harming the poorest?",
      source_txt: "NOT TRANSLATED ---------------------------------------- Ülaltoodud uurimisküsimuse vastuse kontrollimiseks soovitatakse järgmisi allikaid:",
      source_61: {
        txt_1: "Study  {link1} and perform the task.",
        link_1: "Source 6.1",
        label_1: "Record the benefits that will result from using renewable sources of electricity."
      },
      source_62: {
        txt_1: "Study {link1} and perform the task. Study the table from the {i1}, which concerns the socio-economic effects of the change of energy sources.",
        link_1: "Source 6.2",
        i_1: "World Economic Situation and Prospects 2020",
        label_1: "Identify the impending effects of using different energy sources."
      },
      source_63: {
        txt_1: "Study {link1} and perform the task.",
        link_1: "Source 6.3",
        label_1: "Record the information about the jobs that will result from exploiting renewable energy sources."
      },
      conclusion: "Based on the given evidence, our conclusion(s) concerning the myth “Climate change actions will make people poorer” is(are):",
      flicc_label: "According to the data you collected, where do you owe the error of this myth?",
      sources: [
        {
          name: "Source 6.1",
          url: "https://drive.google.com/file/d/1lLGM0OZxy3Sm0BvPeHlB7brOrNhZrBRA/view?usp=sharing"
        },
        {
          name: "Source 6.2",
          url: "https://drive.google.com/file/d/1j-al4leaUi28OLKPq9Fj6So8XojxhOjn/view?usp=sharing"
        },
        {
          name: "Source 6.3",
          url: "https://drive.google.com/file/d/1glVgyNAJeN_TyRwjAEAbCYQEHRw3Jwiq/view?usp=sharing"
        }
      ]
    },

    cc_myth7: {
      title: "Climate change",
      subtitle: "Guided inquiry, Myth 7",
      myth: "Myth 7: “The earth's climate has always changed, and now the same thing is happening”.",
      hypothesis: "Write down your testable hypothesis concerning Myth 7.",
      argument: {
        txt_1: "You are given the basic argument of Myth 7 and the question you have to answer using the following scientific sources.",
        argument: "The argument of Myth 7: The earth's climate was always changing."
      },
      question: "Question: Did the temperature always rise at the same rate?",
      source_txt: "NOT TRANSLATED ------------------------------------- Ülaltoodud uurimisküsimuse vastuse kontrollimiseks on soovitav kasutada järgmisi allikaid:",
      source_71: {
        txt_1: "Watch the Intro video: {link1} and answer the question.",
        link_1: "The greenhouse effect and climate change history",
        label_1: "What subject is it referring to?"
      },
      source_72: {
        txt_1: "Study the following {link1} and answer the question.",
        link_1: "graph",
        label_1: "Monitor the temperatures for each year. What do you notice?"
      },
      source_73: {
        txt_1: "Study  {link1} and perform the task.",
        link_1: "Source 7.1",
        label_1: "Record information we receive regarding temperature rise."
      },
      table_years: {
        label_1: "Compare the change in temperature every twenty years. How much temperature rise did we have every twenty years?",
        table: {
          header: [
            { thead: "Period" },
            { thead: "Temperature Change" }
          ],
          rows: [
            ["1880-1900", ""],
            ["1900-1920", ""],
            ["1920-1940", ""],
            ["1940-1960", ""],
            ["1960-1980", ""],
            ["1980-2000", ""],
            ["2000-2020", ""]
          ]
        },
      },
      years_max: "When did we have the biggest temperature rise?",
      conclusion: "Based on the given evidence, our conclusion(s) concerning the myth “The earth's climate has always changed, and now the same thing is happening”, is/are:",
      flicc_label: "According to the data you collected, where do you owe the error of this myth?",
      sources: [
        {
          name: "The greenhouse effect and climate change history",
          url: "https://www.youtube.com/watch?v=ftG_PgwWeNQ"
        },
        {
          name: "Global temperature - vital signs of the planet",
          url: "https://climate.nasa.gov/vital-signs/global-temperature/"
        },
        {
          name: "Source 7.1",
          url: "https://drive.google.com/file/d/19TQRfChWF33c_zgUsPGNzBwa9F-YVH76/view?usp=sharing"
        }
      ]
    },

    drugs: {
      title: "Drogas",
      subtitle: "Nossas respostas",
      label_1: "Quebramos o seguinte mito:",
      label_2: "Nossa hipótese / questão de pesquisa:",
      label_3: "Plano de atividades:",
      reliability: {
        label_1: "Confiabilidade das fontes:"
      },
      label_4: "Nossas conclusões:",
      label_5: "Nossa declaração:"
    }

  }
}