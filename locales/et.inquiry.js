export default {
  inquiry: {
    your_answers:"Sinu vastused",
    add_row: "Lisa rida",
    
    reliability_table : {
      txt_1: "Palun hinnake järgmise {link1} abil kasutatud infoallikate usaldusväärsust. Kirjutage oma uurimistulemustest kokkuvõte  tabelisse.",
      link_1: "tööriista",
      url_1: "../../tools/reliability-assessment", 
      label_1: "Analüüsige iga allikat allpool tabelis", 
      cols: {
          col_1:"Tõendid / peamised järeldused / kokkuvõte hüpoteesist",
          col_2:"Tõendite tüüp ja allikas",
          col_3:"Hinnang usaldusväärsusele",
          col_4:"Kommentaarid"
        },
        add_row: "Lisa allikas"
    },
    variables_table: {
      header: [
        {thead:"Kontrollmuutujad", tsubhead:"(need, mida üritatakse hoida katse jooksul muutumatutena)"},
        {thead:"Sõltumatu muutuja", tsubhead:"(see, mida muudetakse)"},
        {thead:"Sõltuv muutuja", tsubhead:"(see mida sekkumise tulemusena mõõdetakse)"},
      ]
    },



    ev_open: {
      title: "Evolutsioon",
      subtitle: "Avatud uurimus",
      choose: "Vali müüt",
      q1_title: "1. Hakkame uurima järgmist müüti:",
      myths: [
        "Evolutsioon on kõigest teooria.",
        "Evolutsioon ei ole teadus, sest seda ei saa testida ja ümber lükata. See teeb järeldusi sündmuste kohta, mida pole võimalik vaadelda ja mida ei saa kunagi taasluua.",
        "Evolutsioon järgib ettemääratud sirget teed. (“Kui inimene arenes ahvidest, siis miks on veel ahvid olemas?”)",
        "Evolutsioon toodab ideaalselt kohanenud organisme.",
        "Liigid on muutumatud.",
        "Mingi organismi kehaosa kasutamine või mittekasutamine tema eluea jooksul võib päranduda järglastele ja see võib viia liikide muutumiseni."
      ],
      expectations: {
        title: "Teilt oodatakse järgnevat:",
        items: [
          "kitsendage oma väide testitavaks hüpoteesiks / uurimisküsimuseks;",
          "kavandage uuring, mis kas kinnitab või lükkab ümber teie poolt püstitatud hüpoteesi / uurimisküsimuse;",
          "esitage kogutud andmed;",
          "hinnake kasutatud allikate usaldusväärsust;",
          "koostage saadud tulemuste põhjal kokkuvõte."
        ]
      },
      q2 : {
        txt: "Kitsendage oma müüt {q2Link} või uurimisküsimuseks.",
        link: "kontrollitavaks hüpoteesiks",
        title: "2. Meie hüpotees ja/või uurimisküsimus on:",
        txt2: "Tegevusplaan (palun märkige, milliste tegevustega olete kogu meeskonnana kaasatud ja mille puhul kavatsete töökohustusi jagada, antud juhul pange palun kirja, kes mille eest vastutab):",
      },
      
      plan: {
        txt_1: "Palun märkige, milliste tegevustega olete kogu meeskonnana kaasatud ja mille puhul kavatsete töökohustusi jagada; antud juhul pange kirja, kes mille eest vastutab:",
        label_1: "3. Tegevusplaan"
      },

      reliability: {
        txt_1: "Kasuta järgmist tööriista informatsiooni otsimiseks ning selle usaldusväärsuse hindamiseks",
        label_1: "4. Uuritud materjalide usaldusväärsus."
      },
      conclusions: "5. Kogutud tõenditest lähtudes on meie järeldused järgmised:",
      q5_title: "6. Tuginedes kogutud andmetele, milliseid teaduse eitamise taktikaid tuvastasite loetud tekstides?"
    },




    ev_myth1: {
      title: "Evolutsioon",
      subtitle: "Juhitud uurimus, müüt 1",
      myth: {
        text: "Teie rühm hakkab tegelema müüdiga 1:",
        myth: "“Evolutsioon on kõigest teooria”."
      },
      justification: {
        text: "Loe müüdi kirjeldus hoolikalt läbi. Määratle ja dokumenteeri põhjendused, mida kirjutise autorid kasutavad, et oma seisukohta toetada.",
        label_1: "Põhjendused:",
      },
      label_2: "Kuidas sulle see põhjendus tundub? Kas miski häirib sind selle juures?",
      label_3: "Kuidas sa kontrolliksid nende põhjenduste valiidsust (kehtivust)?",
      question: "Küsimus: Kas evolutsioon on kõigest teooria? Mida mõeldakse teaduses mõistega “teooria”?",
      sources_text: "Alljärgnevad materjalid on soovitav läbi lugeda selleks, et leida esitatud küsimustele vastused:",
      sources: [
        {
          label: "Evolutsioon on nii fakt kui teooria",
          url: "http://www.talkorigins.org/faqs/evolution-fact.html"
        },
        {
          label: "Väärarusaamad evolutsiooni kohta",
          url: "https://evolution.berkeley.edu/teach-evolution/misconceptions-about-evolution/"
        },
        {
          label: "Loodusteadustest arusaamine",
          url: "https://undsci.berkeley.edu/article/0_0_0/howscienceworks_19"
        },
        {
          label: "Evolutsioon on kindlasti teooria, kuid see ei ole kindlasti “lihtsalt” teooria",
          url: "https://www.sciencefocus.com/comment/evolution-is-most-certainly-a-theory-but-certainly-not-just-a-theory/"
        }
      ],
      label_4: "Mida mõeldakse teaduses mõistega “teooria”?",
      label_5: "Kas evolutsiooniteooria täidab kõiki teaduslikule teooriale esitatud kriteeriume?",
      reliability: {
        label_1: "Tõendite usaldusväärsus:"
        // text: "Palun kasuta järgnevat {link} selleks, et hinnata kasutatud allikate usaldusväärsust.",
        // link: "töörista",
        // label: "Kirjuta alljärgnevasse tabelisse kokkuvõte oma uuringu tulemustest."
      }
    },


    ev_myth2: {
      title: "Evolutsioon",
      subtitle: "Juhitud uurimus, müüt 2",
      myth: {
        text: "Teie rühm hakkab tegelema müüdiga 2:",
        myth: "“Evolutsioon pole teaduslik, sest seda ei saa testida ega ümber lükata. See teeb järeldusi sündmuste kohta, mida pole võimalik vaadelda ja mida ei saa kunagi taasluua.”"
      },
      justification: {
        text: "Loe müüdi kirjeldus hoolikalt läbi. Määratle ja dokumenteeri põhjendused, mida kirjutise autorid kasutavad, et oma seisukohta toetada.",
        label_1: "Põhjendused:",
      },
      label_2: "Kuidas sulle see põhjendus tundub? Kas miski häirib sind selle juures?",
      label_3: "Kuidas sa kontrolliksid nende põhjenduste valiidsust (kehtivust)?",
      question: "Kas evolutsioon on testitav? Kas see on ümberlükatav? Kas ainult need teadused on “päris” teadused, mis põhinevad kontrollitud laborikatsetel?",
      sources_text: "Küsimustele vastamiseks on soovitav lugeda järgnevaid allikaid:",
      sources: [
        {
          label: "Väärarusaamad evolutsioonist",
          url: "https://evolution.berkeley.edu/teach-evolution/misconceptions-about-evolution/"
        },
        {
          label: "Soojenemine viib evolutsioonini",
          url: "https://evolution.berkeley.edu/evo-news/warming-to-evolution/"
        },
        {
          label: "Toksiline jõgi tähendab kalaliikide jaoks kiiret evolutsiooni",
          url: "https://evolution.berkeley.edu/evo-news/toxic-river-means-rapid-evolution-for-one-fish-species/"
        },
        {
          label: "Evolutsioon meie nina all",
          url: "https://evolution.berkeley.edu/evolution-under-our-noses/"
        }
      ],
      sources_2: [
        {
          text: "Tutvu alljärgneva veebilehega:",
          label: "Artificial selection in the lab",
          url: "https://evolution.berkeley.edu/artificial-selection-in-the-lab/"
        },
        {
          text: "Kasuta järgmist virtuaalset laborit:",
          label: "Evolution in the lab",
          url: "https://evolution.berkeley.edu/angling-for-evolutionary-answers/evolution-in-the-lab/"
        },
        {
          text: "Uuri järgnevat simulatsiooni:",
          label: "The evolutionary informatics lab",
          url: "https://www.evoinfo.org/weasel.html"
        },
      ],
      label_4: "Kas on võimalik evolutsiooni vaadelda?",
      label_5: "Kas evolutsiooniprotsesse on võimalik laboris uurida?",
      label_6: "Kas katsete asemel on võimalik kasutada alternatiive?",
      reliability: {
        label_1: "Tõendite usaldusväärsus:"
      }
    },



    ev_myth3: {
      title: "Evolutsioon",
      subtitle: "Juhitud uurimus, müüt 3",
      myth: {
        text: "Teie rühm hakkab tegelema müüdiga 3:",
        myth: "“Evolutsioon järgib ette määratud sirget rada.” (“Kui inimene arenes ahvist, siis miks on veel ahvid olemas?”)"
      },
      justification: {
        text: "Loe müüdi kirjeldus hoolikalt läbi. Määratle ja dokumenteeri põhjendused, mida kirjutise autorid kasutavad, et oma seisukohta toetada.",
        label_1: "Põhjendus:",
      },
      label_2: "Kuidas sulle see põhjendus tundub? Kas miski häirib sind selle juures?",
      label_3: "Kuidas sa kontrolliksid nende põhjenduste valiidsust (kehtivust)?",
      question: "Kas evolutsioon järgib ettemääratud sirget rada? Kui liigid arenevad teistest liikidest, siis kas see tähendab, et esimesed liigid surevad välja?",
      sources_text: "Soovituslik materjal:",
      sources: [
        {
          label: "Miks on ahvid alles jäänud?",
          url: "https://evolution-outreach.biomedcentral.com/articles/10.1007/s12052-010-0293-2"
        },
        {
          label: "Evolutsioon ei saa toimuda sirgjooneliselt",
          url: "https://theconversation.com/evolution-doesnt-proceed-in-a-straight-line-so-why-draw-it-that-way-109401"
        },
        {
          label: "Uuri fülogeneesipuud",
          url: "http://tolweb.org/tree/"
        },
        {
          label: "Fülogeneesipuu",
          url: "http://www.evogeneao.com/evo-gene.html"
        }
      ],
      label_4: "Kas evolutsioon järgib ettemääratud, sirget rada?",
      reliability: {
        label_1: "Tõendite usaldusväärsus:"
      }
    },


    ev_myth4: {
      title: "Evolutsioon",
      subtitle: "Juhitud uurimus, müüt 4",
      myth: {
        text: "Teie rühm hakkab tegelema müüdiga 4:",
        myth: "“Evolutsioon toodab ideaalselt kohanenud organisme.”"
      },
      justification: {
        text: "Loe müüdi kirjeldus hoolikalt läbi. Määratle ja dokumenteeri põhjendused, mida kirjutise autorid kasutavad, et oma seisukohta toetada.",
        label_1: "Põhjendus:",
      },
      label_2: "Kuidas sulle see põhjendus tundub? Kas miski häirib sind selle juures?",
      label_3: "Kuidas sa kontrolliksid nende põhjenduste valiidsust (kehtivust)?",
      question: "Kas keegi peaks olema ideaalselt kohanenud, et ellu jääda? Kas looduslik valik toodab ideaalselt kohanenud isendeid?",
      sources_text: "Soovituslikud allikad:",
      sources: [
        {
          label: "Ei ole olemas ideaalset organismi",
          url: "https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_General_Biology_(Boundless)/19%3A_The_Evolution_of_Populations/19.03%3A_Adaptive_Evolution/19.3E%3A_No_Perfect_Organism"
        },
        {
          label: "Evolutsiooni müüt",
          url: "https://www.newscientist.com/article/dn13640-evolution-myths-evolution-produces-perfectly-adapted-creatures/"
        },
        {
          label: "Valik, mitte idealism",
          url: "https://evolution.berkeley.edu/misconceptions-about-natural-selection-and-adaptation/selection-not-perfection/"
        },
        {
          label: "Looduslikust valikust arusaamine: Hädavajalikud mõisted ja levinud väärarusaamad",
          url: "https://evolution-outreach.biomedcentral.com/articles/10.1007/s12052-009-0128-1"
        }
      ],
      label_4: "Kas keegi peaks olema ideaalselt kohanenud, et ellu jääda?",
      label_5: "Kas looduslik valik toodab ideaalselt kohanenud isendeid?",
      reliability: {
        label_1: "Tõendite usaldusväärsus:"
      }
    },



    ev_myth5: {
      title: "Evolutsioon",
      subtitle: "Juhitud uurimus, müüt 5",
      myth: {
        text: "Teie rühm hakkab tegelema müüdiga 5:",
        myth: "“Liigid on muutumatud.”"
      },
      justification: {
        text: "Loe müüdi kirjeldus hoolikalt läbi. Määratle ja dokumenteeri põhjendused, mida kirjutise autorid kasutavad, et oma seisukohta toetada.",
        label_1: "Põhjendus:",
      },
      label_2: "Kuidas sulle see põhjendus tundub? Kas miski häirib sind selle juures?",
      label_3: "Kuidas sa kontrolliksid nende põhjenduste valiidsust (kehtivust)?",
      question: "Kas liigid muutuvad aja jooksul?",
      sources_text: "Otsi vastust järgnevatest allikatest:",
      sources: [
        {
          label: "5 looma, kes on hiljuti arenenud",
          url: "https://now.northropgrumman.com/5-animals-that-have-evolved-recently/"
        },
        {
          label: "Loomade evolutsioon",
          url: "https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_Introductory_Biology_(CK-12)/05%3A_Evolution/5.25%3A_Animal_Evolution"
        },
        {
          label: "Fossiilide andmebaaside vead",
          url: "https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_General_Biology_(Boundless)/18%3A_Evolution_and_the_Origin_of_Species/18.05%3A_Evidence_of_Evolution/18.5C%3A_Gaps_in_the_Fossil_Record"
        }
      ],
      label_4: "Kas liigid muutuvad aja jooksul?",
      reliability: {
        label_1: "Tõendite usaldusväärsus:"
      }
    },



    ev_myth6: {
      title: "Evolutsioon",
      subtitle: "Juhitud uurimus, müüt 6",
      myth: {
        text: "Teie rühm hakkab tegelema müüdiga 6:",
        myth: "“Mingi organismi kehaosa kasutamine või mittekasutamine tema eluea jooksul võib päranduda järglastele ja see võib viia liigi muutumiseni.”"
      },
      justification: {
        text: "Loe müüdi kirjeldus hoolikalt läbi. Määratle ja dokumenteeri põhjendused, mida kirjutise autorid kasutavad, et oma seisukohta toetada.",
        label_1: "Põhjendus:",
      },
      label_2: "Kuidas sulle see põhjendus tundub? Kas miski häirib sind selle juures?",
      label_3: "Kuidas sa kontrolliksid nende põhjenduste valiidsust (kehtivust)?",
      question: "Millised tunnused on päritavad?",
      sources_text: "Vastamiseks kasuta järgmisi allikaid:",
      sources: [
        {
          label: "Lamarkism",
          url: "https://www.britannica.com/science/Lamarckism"
        },
        {
          label: "Evolutsiooni ajalugu",
          url: "https://evolution.berkeley.edu/the-history-of-evolutionary-thought/1800s/early-concepts-of-evolution-jean-baptiste-lamarck/"
        },
        {
          label: "Evolutsiooniteooriad",
          url: "https://www.sciencesfp.com/evolutionary-theories.html"
        },
        {
          label: "Darwin ja looduslik valik",
          url: "https://www.open.edu/openlearn/nature-environment/natural-history/evolution-through-natural-selection/content-section-2"
        }
      ],
      label_4: "Millised tunnused on päritavad?",
      reliability: {
        label_1: "Tõendite usaldusväärsus:"
      }
    },


    /* 
      CLIMATE CHANGE 
    */

    cc_extra: {
      txt_1: "Vaata järgmist {link1} või loe läbi {link2} lehelt punkt 4. Tuginedes kogutud teadmistele, mis on teie seisukoht, millise teaduse eitamise taktika tõttu see müüt on tekkinud?",
      link_1: "videot",
      link_2: "teadusinfo",
      url_1: "https://www.uttv.ee/naita?id=34479",
      url_2: "https://evidence-erasmus.github.io/evidence/et/climate-change/background#s-4"
    },

    cc_open: {
      title: "Kliimamuutused",
      subtitle: "Avatud uurimus",
      choose: "Vali müüt",
      q1_title: "1. Hakkame uurima järgmist müüti:",
      myths: [
        "Liikide väljasuremine on looduslik protsess.",
        "Liigid suudavad kliimamuutustega kohaneda.",
        "Kliimamuutuste alane teadus ei ole usaldusväärne.",
        "Globaalne soojenemine on kasulik.",
        "Seos CO₂ ja temperatuuri tõusu vahel puudub.",
        "Kliimamuutustega seotud meetmed muudavad inimesed vaesemaks.",
        "Maa kliima on alati muutunud ning see jätkab muutumist."
      ],
      q2_txt: "Nüüd kitsendage oma müüt {q2Link} või uurimisküsimuseks.",
      q2_link: "kontrollitavaks hüpoteesiks",
      q2_title: "2. Meie hüpotees ja/või uurimisküsimus on:",
      q2_txt2: "Tegevusplaan (palun märkige, milliste tegevustega olete kogu meeskonnaga kaasatud ja mille puhul kavatsete töökohustusi jagada, antud juhul pange palun kirja, kes mille eest vastutab):",
      
      plan: {
        txt_1: "Palun märkige, milliste tegevustega olete kogu meeskonnana kaasatud ja mille puhul kavatsete töökohustusi jagada, antud juhul pange palun kirja, kes mille eest vastutab:",
        label_1: "3. Tegevusplaan"
      },

      reliability: {
        txt_1: "Kasuta järgmist tööriista informatsiooni otsimiseks ning selle usaldusväärsuse hindamiseks",
        label_1: "4. Uuritud materjalide usaldusväärsus."
      },
      q4_title: "5. Kogutud tõenditest lähtudes on meie järeldused järgmised:",
      q5_title: "6. Tuginedes kogutud andmetele, milliseid teaduse eitamise taktikaid tuvastasite loetud tekstides?"
    },




    cc_myth1: {
      back: "Tagasi",
      title: "Kliimamuutused",
      subtitle: "Juhitud uurimus, müüt 1",
      myth: "Müüt nr 1: Liikide väljasuremine on looduslik protsess. Massiline liikide väljasuremine on alati toimunud.",
      hypothesis: "Püstitage selle kohta oma hüpotees:",
      argument: {
        txt_1: "Teile antakse müüdi nr. 1 põhiargument ja küsimus, millele peate vastama etteantud allikate abil.",
        argument: "Müüdi 1 põhiargument: Liikide massiline väljasuremine on loomulik protsess."
      },
      question: {
        question: "Uurimisküsimus: Kas liikide massiline väljasuremine on loomulik protsess?",
        txt_1: "{link1} ning vastake järgnevatele küsimustele.",
        link_1: "Vaadake videot"
      },
      q_1: "1. Mida me mõtleme „massilise väljasuremise” all?",
      q_2: "2. Kui palju massilist väljasuremist teie arvates toimub?",
      q_3: "3. Millised olid massilise väljasuremise põhjused?",
      q_4: "4. Millised olid massilise väljasuremise tagajärjed?",
      q_5: "5. Miks me peaksime praegu muretsema massilise väljasuremise pärast?",
      q_6: {
        txt_1: "Uurige {link1} ning vastake järgmisele küsimusele:",
        link_1: "allikat 1.1",
        q_6: "6. Mis on pingviinide massilise hukkumise põhjus?"
      },
      q_7: {
        txt_1: "Palun hinnake järgmise {link1} abil kasutatud infoallikate usaldusväärsust.",
        link_1: "tööriista",
        q_7: "7. Kirjuta kokkuvõte uuritud materjalist alljärgnevasse tabelisse."
      },
      q_8: "8. Esitatud tõendite põhjal on meie järeldus(ed) müüdi “Liikide väljasuremine on looduslik protsess. Massiline liikide väljasuremine on alati toimunud”, paikapidavuse kohta järgmine (järgmised):",
      q_9: "9. Tuginedes kogutud teadmistele, mis on teie seisukoht, millise teaduse eitamise taktika tõttu see müüt on tekkinud?",
      sources: [
        {
          name: "Video",
          url: "https://www.youtube.com/watch?v=nho73BtDQtE"
        },
        {
          name: "Allikas 1.1",
          url: "https://docs.google.com/document/d/e/2PACX-1vTxM7SnO9h9ZC8wxVMEVwU8Ha2_AKh99vbYcBO-g8BxJy9w5oFeb5lUoxUbvTQnq35mtT9Fi7bCSf67/pub"
        }
      ]
    },









    cc_myth2: {
      back: "Tagasi",
      title: "Kliimamuutused",
      subtitle: "Juhitud uurimus, müüt 2",
      myth: "Müüt nr 2: Liigid suudavad kliimamuutustega kohaneda.",
      hypothesis: "Püstitage selle kohta oma hüpotees:",
      
      
      a1: {
        argument: {
          txt_1: "Teile esitatakse müüdi nr. 2 põhiargumendid ja küsimused, millele peate vastama viidatud allikate abil.",
          argument: "Argument 1: Liigid on ebasoodsate tingimustega korduvalt kohanenud nii, et nad suudavad uutes kliimatingimustes ellu jääda."
        },
        q1: {
          title_1: "Uurimisküsimus 1: Kas kliimamuutus mõjutab liikide kohanemisvõimet?",
          txt_1: "Vaadake animatsiooni {link1}  hoolikalt.",
          label_1: "Millest see räägib? Mis selle muutuse põhjustab?",
          label_2: "Millised on selle muudatuse tagajärjed?",
          answer_1: "Korallriffide juhtum"
        },
        q2: {
          title_1: "Uurimisküsimus 2: Kas merevesi mõjutab korallide massi?",
          txt_1: "Allikas: Eksperiment “Teravnevad ookeanid”",
          list_1_title: "Vahendid ja materjalid:",
          list_1: [
            "Teokarbid (samas suuruses ja hästi puhastatud)",
            "4,5%-line äädikhappe lahus (50g)", "2 plastkarpi koos kaanega",
            "Merevesi 400g või soolvesi, mis simuleerib 35‰ Suure Korallrahu juures olevat merevett",
            "Mõõtsilindrid",
            "Metallsõel vms",
            "Veekeetja",
            "Kuum vesi",
            "Kleebitavad etiketid"
          ],
          list_2_title: "Katse käik:",
          list_2: [
            "Kaalu teokarbid. Pane saadud massid kirja. Jaotage teokarbid kaheks osaks nii, et need oleksid sama massiga.",
            "Pane kahte identsesse anumasse 200 g merevett. Lisa esimesse anumasse 50 grammi äädikat.",
            "Aseta mõlemasse anumasse sama massiga kogus teokarpe.",
            "Kata anumad ning hoia neid 40 minutit samades tingimustes.",
            "Keeda teokarbid (kumbki osa eraldi) kuumas vees ja jäta 15 minutiks seisma.",
            "Puhasta iga kest eraldi. Lase neil väga hästi kuivada.",
            "Kaalu kumbki osa eraldi ja pane nende uued massid kirja."
          ],
          data_table: { 
            header: [
              {
                thead: "Kontrollmuutujad",
                tsubhead: "(need, mida üritatakse hoida katse jooksul  muutumatutena)"
              },
              {
                thead: "Sõltumatu muutuja",
                "tsubhead": "(see, mida muudetakse)"
              },
              {
                thead: "Sõltuv muutuja",
                tsubhead: "(see mida sekkumise tulemusena mõõdetakse)"
              }
            ]
          },
          table_2 : {
            header: [
              {thead:" "},
              {thead:"Teokarbid A"},
              {thead:"Teokarbid B"}
            ],
            rows: [
              ["Algne mass (g):", "", ""],
              ["Lõplik mass (g):", "", ""],
              ["Masside vahe (g):", "", ""]
            ]
          },
          table2_title: "Kogutud andmed",
          hypothesis: "Hüpotees",
          conclusions: "Järeldused:",
          source_1: {
            txt_1: "Uurige {link1} ja vastake küsimusele:",
            link_1: "allikat 2.2",
            label_1: "Miks on korallide pleekimine murettekitav?"
          },
          source_2: {
            txt_1: "Uurige {link1} ja vastake küsimusele:",
            link_1: "allikat 2.3",
            label_1: "Millest allikas räägib? Kuidas on omavahel seotud kliimamuutused ning viiruste ja haiguste levimine?"
          },
          source_3: {
            txt_1: "Vaadake animatsiooni: {link1}",
            link_1: "Kliimamuutused: Jää sulamine ja loomad",
            label_1: "Kuidas kliimamuutused mõjutavad jääkarude populatsioone?"
          }
        }
      },

      a2: {
        argument: "Argument 2: Liikide evolutsioon on kiirenenud, kuna liigid pidid muutuvate tingimustega kohanema.",
        q1: {
          question: "Uurimisküsimus: Kas kliimamuutus mõjutab liikide evolutsiooni?",
          source_1: {
            txt_1: "Tutvuge {link1}",
            link_1: "allikaga 2.1",
            label_1: "Mida tähendab liikide evolutsioon?"
          },
          label_2: "Kuidas kliimamuutused mõjutavad liikide evolutsiooni?"
        }
      },


      reliability: {
        txt_1: "Palun hinnake järgmise {link1} abil kasutatud infoallikate usaldusväärsust.",
        link_1: "tööriista",
        label_1: "Kirjuta kokkuvõte uuritud materjalist alljärgnevasse tabelisse.",
        url_1: "https://docs.google.com/document/d/12ABQ5rgwb418f47KKdg1yPQbMUn7n6N0h4fEJLhJzbg/edit?usp=share_link"
      },
      
      conclusions: "Eelpooltoodud tõenditele tuginedes on meie järeldused müüdi “Liigid suudavad kliimamuutustega kohaneda”, paikapidavuse kohta järgmised:",

      flicc_label: "Tuginedes kogutud teadmistele, mis te arvate, millise teaduse eitamise taktika tõttu antud müüt on tekkinud?",

      sources: [
        {
          name: "Mere ökosüsteem – korallide juhtum",
          url: "https://youtu.be/saUTXISSlBI"
        },
        {
          name: "Allikas 2.2",
          url: "https://drive.google.com/file/d/1dsgBLIsNaDFpB7y2AMamJgC41GEDHpt3/view?usp=share_link"
        },
        {
          name: "Allikas 2.3",
          url: "https://drive.google.com/file/d/1iVTPAHaL8bbUWskgKFvJfrRLjoQsQCde/view?usp=share_link"
        },
        {
          name: "Jää sulamine ja loomad",
          url: "https://youtu.be/mEgYnOaiJnU"
        },
        {
          name: "Allikas 2.1",
          url: "https://drive.google.com/file/d/19OENqL4uwh8YKd5SvAGUN44FC9md8nh5/view"
        }
      ]
    },







    cc_myth3 : {
      title: "Kliimamuutused",
      subtitle: "Juhitud uurimus, müüt 3",
      myth: "Müüt nr 3: Kliimamuutuste alane teadus ei ole usaldusväärne.",
      hypothesis: "Püstitage selle kohta oma hüpotees.",
      argument : {
        txt_1: "Teile esitatakse müüdi 3 põhiargument ja uurimisküsimus, millele vastamiseks saate kasutada mitmeid allikaid.",
        argument: "Müüdi 3 põhiargument: Vaatlusjaamadest kogutud andmed CO₂ koguse kohta ei ole usaldusväärsed, seega pole kliimamuutus reaalne fakt."
      },
      question: "Uurimisküsimus: Kas saame toetuda vaatlusjaamadest kogutud andmetele CO₂ koguse kohta?",
      source_1: {
        txt_1: "Vaata videot {link1} ning loe alljärgnevat teksti hoolikalt.",
        link_1: "Building a robust temperature record",
        txt_2: "Globaalne kuu keskmine pinnatemperatuur (GMST) on rekonstrueeritud: 1. NASA GISTEMP, 2. CRUTEM (Ida-Inglismaa ülikooli kliimauuringute üksus), 3. National Climate Data NOAA (NCDC) kogutud andmete kombinatsioonist. Kliima rekonstrueerimise aluseks olevad andmed pärinevad maa-, õhu- ja merevaatlusallikatest."
      },
      img_1: {
        caption: "Joonis 1. NOAA poolt kogutud temperatuuriandmed."
      },
      q_1: "Milliseid andmete kogumise meetodeid NOAA kasutab?",
      q_2: "Mida te märkate andmete kogumise meetodite ning nende geograafilise asukoha kohta?",
      q_3: "NOAA haldab vaatluskeskuste baase (Baseline Observatories). Kui palju selliseid jaamu kaardilt leiate?",
      q_4: "Mida te märkate nende vaatluskeskuste asukohtade kohta? Miks te arvate, mis on põhjuseks, et need jaamad just nendes asukohtades paiknevad?",
      noaa_stations: {
        txt_1: "Vaata NOAA poolt hallatavat veebilehte {link1}.  Millised on need 4 NOAA vaatlusjaama?  Kus need paiknevad (pikkus- ja laiuskraad) ja millisel kõrgusel? (Allikad  {source31}, {source32}, {source33}, {source34})",
        link_1: "Global Monitoring Laboratory",
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
          {thead:"Vaatlusjaam"},
          {thead:"Pikkuskraad"},
          {thead:"Laiuskraad"},
          {thead:"Kõrgus"},
        ]
      },
      q_5: "Mida märkate nende asukohtade juures?",
      img_2: {
        txt_1: "Nende jaamade kaudu saame igal ajal teavet valitsevate ilmatingimuste kohta. {link1} Hawaii Mauna Loa jaama uusimaid salvestusi.",
        link_1: "Siit leiate",
        url_1: "https://gml.noaa.gov/obop/mlo/met.html",
        caption:"Joonis 2. NOAA neljast vaatlusjaamast kogutud mõõtmiste (CO₂) tulemused aastatel 1975-2020.",
        conclusion: "Milliseid järeldusi saab graafikute (N:  Joonis 2) põhjal teha?",
      },
      conclusion: "Tuginedes kogutud tõenditele, millised on teie järeldused  müüdi “Kliimamuutuste alane teadus ei ole usaldusväärne”, paikapidavuse kohta?",
      flicc_label: "Tuginedes kogutud infole, mis te arvate, milliste teaduse eitamise taktikate tõttu see müüt on tekkinud?",
      sources: [
        {
          name: "Video: Building a robust temperature record",
          url: "https://www.youtube.com/watch?v=YKQiyBkt4Vs&t=228s"
        },
        {
          name: "Joonis 1",
          url: "https://evidence.onkel.ee/assets/c-change__myth3__img1.webp"
        },
        {
          name: "NOAA veebileht",
          url: "https://gml.noaa.gov/"
        },
        {
          name: "Joonis 2",
          url: "https://evidence.onkel.ee/assets/c-change__myth3__img2.webp"
        }
      ]
    },
    
    
    
    
    
    cc_myth4: {
      title: "Kliimamuutused",
      subtitle: "Juhitud uurimus, müüt 4",
      myth: "Müüt nr 4: Globaalne soojenemine on kasulik.",
      hypothesis: "Püstitage selle kohta oma hüpotees.",
      a1: {
        argument: {
          txt_1: "Teile esitatakse müüdi 4 põhiargumendid ja küsimused, millele peate vastama viidatud allikate abil.",
          argument: "Müüdi 4 argument 1: Temperatuuri tõustes väheneb külmast põhjustatud surmajuhtumite arv."
        },
        question: "Uurimisküsimus: Kas temperatuuri tõus mõjutab surmajuhtumite arvu?",
        source_txt: "Otsi vastused küsimustele kasutades viidatud allikaid.",
        source_410: {
          txt_1: "Loe WHO allikat {link1} ning vasta järgmistele küsimustele: ",
          link_1: "Kliimamuutused ja tervis",
          label_1: "“Kliimamuutusi peetakse suurimaks ohuks inimeste tervisele,” öeldakse raportis. Mida sa sellest väitest arvad? Põhjenda oma vastust."
        },
        source_411: {
          txt_1: "Tutvu {link1} ning täida ülesanne.",
          link_1: "allikaga 4.1",
          label_1: "Too allikale toetudes näiteid kliimamuutuste mõjust inimeste tervisele."
        },
        source_412: {
          txt_1: "Uuri {link1} ja täida ülesanne.",
          link_1: "allikat 4.2",
          label_1: "Pane kirja oma tähelepanekud kliimamuutustega seotud surmajuhtumite kohta."
        },
        conclusion: "Kokkuvõtteks: Millise järelduse saab teha küsimuse “Kas temperatuuri tõus mõjutab surmajuhtumite arvu?”, kohta?"
      },
      a2: {
        argument: "Müüdi 4 argument 2: Temperatuuri tõustes suureneb elamiseks sobiliku maa ja haritava maa pindala.",
        question: "Uurimisküsimus: Kas temperatuuri tõus mõjutab elamumaa ja haritava maa pindala?",
        txt_1: "Ülaltoodud küsimuse kontrollimiseks soovitatakse järgmisi tõestusmaterjalide  allikaid:",
        exp: {
          title: "Eksperiment",
          list_1: {
            title: "Vahendid ja materjalid:",
            list: [
              "Liiv või muld", "Vesi", "Suured pooleks lõigatud plastpudelid", "Plastiktopsid", "Jääkuubikud", "Läbipaistev kile (võid kasutada toidukilet)", "Lamp", "Marker"
            ],
            image_caption: "Joonis. Katse disain"
          },
          list_2: {
            title: "Katse käik:",
            list: [
              "Aseta kahte suurde plastpudelisse mõlemasse võrdne kogus liiva või mulda.",
              "Aseta aukudega plastiktopsid mõlema pooleks lõigatud plastpudeli liiva/mulda ja kinnitage need teiste plastiktopside külge (vt Joonis). Asetage sama kogus jääd mõlemasse plastiktopsi.",
              "Tee plastiktopside alumisse ossa sooned/augud, et jää sulamisvesi saaks plastpudelisse voolata.",
              "Vala mõlemasse  plastpudelisse võrdne kogus vett.", 
              "Kata üks plastpudelitest toidukilega.",
              "Lülita lamp sisse ja tehke vaatlused 20 minuti möödumisel."
            ],
          },
          variable_table: {
            title: "Muutujad",
            subtitle: "Kirjuta vastused tabelisse.",
            table: {
              header: [
                {thead:"Kontrollmuutujad", tsubhead:"(need, mida üritatakse hoida katse jooksul muutumatutena)"},
                {thead:"Sõltumatu muutuja", tsubhead:"(see, mida muudetakse)"},
                {thead:"Sõltuv muutuja", tsubhead:"(see mida sekkumise tulemusena mõõdetakse)"},
              ]
            }
          },
          hypothesis: "Hüpotees(id):",
          results_table: {
            title: "Tulemused",
            subtitle: "Kirjuta vastused tabelisse.",
            table: {
              header: [
                {thead:""},
                {thead:"Plastpudel A"},
                {thead:"Plastpudel B"},
              ],
              rows: [
                ["Esialgne veetase (cm)", "", ""],
                ["Lõplik veetase (cm)", "", ""],
                ["Veetaseme muutus (cm)", "", ""],
              ]
            }
          },
          conclusion: "Järeldused",
          islands: "Oletame, et need mõlemad plastpudelid on kaks saart. Kummal saarel sa sooviksid elada ja miks?"
        },
        source_421: {
          txt_1: "NB! Järgnevast artiklist {link1}, võid leida rohkem infot ohus olevate saareriikide kohta.",
          link_1: "Riigid, mis on kliimamuutuste tõttu kadumisohus",
          txt_2: "Uuri järgnevat allikat: {link2} ning täida ülesanne.",
          link_2: "https://climate.nasa.gov/vital-signs/sea-level/",
          label_1: "Märgi üles tegurid, mis on seotud merepinna tõusuga ja milline on sellest tulenev elamiseks sobiliku või maaharimiseks saadaoleva maa ressurss."
        },
        graph: {
          txt_1: "Võrdle järgmisi graafikuid (et leida rohkem infot, uuri toodud veebiallikaid).",
          img_1: {
            src: "https://evidence.onkel.ee/assets/c-change__myth4__globaltemp.webp",
            credits: "https://climate.nasa.gov/vital-signs/global-temperature/",
            caption: "Globaalne temperatuur 1880−..."
          },
          img_2: {
            src: "https://evidence.onkel.ee/assets/c-change__myth4__sealevel.webp",
            credits: "https://climate.nasa.gov/vital-signs/sea-level/",
            caption: "Merevee tase 1900−2018"
          },
          sealevel_table: {
            subtitle: "Täida tabel",
            label_1: "Kuidas on omavahel seotud temperatuur ja merevee tase?",
            table: {
              header: [
                {thead:"Aasta"},
                {thead:"1900"},
                {thead:"1920"},
                {thead:"1940"},
                {thead:"1980"},
                {thead:"2000"},
                {thead:"2020"}
              ],
              rows: [
                ["Temperatuur", "", "", "", "", "", ""],
                ["Merevee tase", "", "", "", "", "", ""]
              ]
            }
          }
        },
        conclusion: "Millise  järelduse saab teha  küsimuse “Kas temperatuuri tõus mõjutab elamiseks või harimiseks kasutatava maa pindala?”, kohta?"
      },
      a3: {
        argument: "Müüdi 4 argument 3: Temperatuuri tõustes kasvavad erinevad põllukultuurid ja see on põllumajanduse seisukohalt positiivne.",
        question: "Uurimisküsimus: Kas temperatuuri tõus mõjutab põllukultuuride hulka?",
        source_431: {
          txt_1: "Tutvu Euroopa Keskkonnaagentuuri allikaga {link1}",
          label_1: "Millised muutused on toimunud või toimuvad põhja- ning lõunapoolsetes riikides?",
          table: {
            subtitle: "Tee märkmeid allikas kasutatud info kohta.",
            header: [
              {thead:"Põhjapoolsed riigid"},
              {thead:"Lõunapoolsed riigid"}
            ],
            rows: [
              ["", ""]
            ]
          }
        },
        source_432: {
          txt_1: "Tutvu {link1}",
          link_1: "järgmise diagrammiga",
          label_1: "Millist infot on diagrammilt võimalik välja lugeda?",
        },
        source_433: {
          txt_1: "Tutvu {link1}",
          link_1: "BBC artikliga",
          label_1: "Millise probleemi see tõstatab? Miks on see oluline?",
        },
        conclusion: "Millise järelduse saab teha küsimuse “Kas temperatuuri tõus mõjutab põllukultuuride arvu?”, kohta?"
      },
      a4: {
        argument: "Müüdi 4 argument 4: Kui temperatuur tõuseb, mõjutab see mõningaid liike (nt putukaid).",
        question: "Uurimisküsimus: Kas kliimamuutus mõjutab liikide populatsioone?",
        source_441: {
          txt_1: "Uuri uuesti juba eelnevalt viidatud {link1} ning järgnevat {link2} ning vasta küsimusele.",
          link_1: "allikat 4.3",
          link_2: "animatsiooni",
          url_2: "https://www.youtube.com/watch?v=XBxuuYRDc_w",
          label_1: "Kas kliimamuutused mõjutavad putukate populatsioone?",
        },
        source_442: {
          txt_1: "Tutvu {link1}.",
          link_1: "allikaga 4.5",
          label_1: "Millist teemat see allikas käsitleb? Pange märkmed kirja.",
          table_label: "Otsige muid sarnaseid näiteid putukatest või umbrohtudest, mis mõjutavad või on hakanud mõjutama põllukultuure.",
          table: {
            header: [
              {thead:"Allikas"},
              {thead:"Näide"}
            ],
            rows: [
              ["",""],
              ["",""],
              ["",""]
            ]
          }
        },
        conclusion: "Millise järelduse saab teha küsimuse “Kas kliimamuutus mõjutab liikide populatsioone?”, kohta?"
      },
      a5: {
        argument: "Müüdi 4 argument 5:  Soojem temperatuur aitab vaeseid. ",
        question: "Uurimisküsimus:  Kas temperatuuri tõus mõjutab vaeste rahalist olukorda?",
        source_451: {
          txt_1: "Loe UNHCR (United Nations High Commissioner for Refugees) artiklit {link1} ning vasta järgnevale küsimusele.",
          link_1: "Climate change and disaster displacement",
          label_1: "Kes on kliimapagulane?",
          label_2: "Nimetage põhjuseid, miks inimesed on hakanud kliimapagulasteks."
        },
        conclusion: "Kokkuvõtteks: Millise järelduse saab teha küsimuse “Mis sa arvad, kas temperatuuri tõus aitab vaeseid?”, kohta?",
        extra: {
          txt_1: "Tutvu järgmiste allikatega, et vastata  küsimustele.",
          q_1: "Mis on kliimaõiglus?",
          q_2: "Mis põhjustab inimestes suurt muret?",
          q_3: "Mis sa arvad, kas kliimamuutused on ühtlasi sotsiaalne probleem?"
        }
      },
      conclusions: "Tõenditele tuginedes on meie järeldused müüdi “Globaalne soojenemine on kasulik”, paikapidavusele järgmised:",
      flicc_label: "Tuginedes kogutud andmetele, mis te arvate, millise teaduse eitamise taktika tõttu see müüt on tekkinud?",
      sources: [
        {
          name: "Kliimamuutused ja tervis",
          url: "https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health"
        },
        {
          name: "Allikas 4.1",
          url: "https://drive.google.com/file/d/1M7JY4bMJNEI95JIOWRnwXgmuk77_L2J2/view?usp=sharing"
        },
        {
          name: "Allikas 4.2",
          url: "https://drive.google.com/file/d/1vM4uPyU3_SKXAhQHqAR_GXoRnhAR9aF2/view?usp=sharing"
        },
        {
          name: "Riigid, mis on kliimamuutuste tõttu kadumisohus",
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
          name: "Allikas 4.4",
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
      title: "Kliimamuutused",
      subtitle: "Juhitud uurimus, müüt 5",
      myth: "Müüt nr 5: Seos CO₂ ja temperatuuri tõusu vahel puudub.",
      hypothesis: "Püstitage selle kohta oma hüpotees.",
      argument: {
        txt_1: "Teile esitatakse müüdi 5 põhiargument ja küsimus, millele hakkate vastama viidatud allikate abil.",
        argument: "Müüdi 5 põhiargument: Arvamus, et 20. sajandil täheldatud globaalse soojenemise põhjuseks on peamiselt CO₂ heitkogused, on eksitav."
      },
      question: "Uurimisküsimus: Kas CO₂ heitkogused mõjutavad globaalset soojenemist?",
      source_1: {
        txt_1: "Uuri järgmist allikat: {link1}",
        txt_2: "Vaata videot ja tee märkmeid."
      },
      exp_1: {
        title: "Eksperiment",
        question: "Uurimisküsimus: Kas CO₂ tõus mõjutab Maa temperatuuri?",
        formula: "NB! Hape + karbonaat → happejääk + H₂O + CO₂",
        list_1: {
          title: "Vahendid ja materjalid:",
          list: [
            "2 lampi",
            "2 elektrilist termomeetrit",
            "2 korgiga klaaspudelit",
            "2 paberrulli",
            "Söögisooda",
            "Äädikas",
            "Lehter",
            "Mõõtsilinder",
            "Plastikanum",
            "Lusikas",
            "Käärid",
            "Mõõdulint"
          ]
        },
        list_2: {
          title: "Katse käik:",
          list: [
            "Aseta termomeetri andur pabersilindri sisemusse.",
            "Pane kummassegi klaaspudelisse 3 supilusikatäit söögisoodat.",
            "Mõõda plastikust mahutistesse 50 ml äädikat (4,5%-line).",
            "Torka paberisilinder koos termomeetriga mõlemasse klaasanumasse.",
            "Vala lehtri abil anumasse äädikas ja sulge kaas. Hetkel paneme kaane kinni 2. anumal.",
            "Asetage mõlema konteineri kõrvale lambipirn ja jätke see 30 minutiks seisma. Selle aja jooksul jälgime igal konkreetsel juhul temperatuuri muutust ja salvestame oma andmed."
          ]
        },
        table_1: {
          label: "Kirjuta oma vastused tabelisse:",
          table: {
            header: [
              {
                thead: "Kontrollmuutujad",
                tsubhead: "(need, mida üritatakse hoida katse jooksul muutumatutena)"
              },
              {
                thead: "Sõltumatu muutuja",
                tsubhead: "(see, mida muudetakse)"
              },
              {
                thead: "Sõltuv muutuja",
                tsubhead: "(see mida sekkumise tulemusena mõõdetakse)"
              }
            ]
          } 
        },
        hypothesis: "Hüpotees:",
        table_2: {
          title: "Kogutud temperatuurinäidud",
          txt_1: "Kirjuta vastused tabelisse:",
          header: [
            {thead: "Aeg, min"},
            {thead: "0"},
            {thead: "2"},
            {thead: "4"},
            {thead: "6"},
            {thead: "8"},
            {thead: "10"},
            {thead: "12"},
            {thead: "14"},
            {thead: "16"},
            {thead: "18"}
          ],
          rows: [
            ["Mahuti A Temperatuur °C", "", "", "", "", "", "", "", "", "", ""],
            ["Mahuti B Temperatuur °C", "", "", "", "", "", "", "", "", "", ""]
          ]
        },
        table_3: {
          title: "Kogutud andmed",
          txt_1: "Kirjuta vastused tabelisse:",
          header: [
            {thead: " "},
            {thead: "Mahuti A"},
            {thead: "Mahuti B"}
          ],
          rows: [
            ["Algtemperatuur °C", "", ""],
            ["Lõpptemperatuur °C", "", ""],
            ["Temperatuuride vahe °C", "", ""]
          ]
        },
        collected_data: "Vaatlusandmed:"

      },
      reliability: {
        txt_1: "Palun hinnake järgmise {link1} abil kasutatud infoallikate usaldusväärsust. Kirjutage oma uurimistulemustest kokkuvõte allpool olevasse tabelisse.",
        link_1: "tööriista",
        url_1: ""
      },
      conclusion: "Tuginedes kogutud tõenditele, millised on teie järeldused müüdi paikapidavuse kohta:",
      flicc_label: "Tuginedes kogutud andmetele, mis te arvate, millise teaduse eitamise taktika tõttu see müüt on tekkinud?",
      sources: [
        {
          name: "How Carbon Affects Nearly Everything on Earth – Including Our Future",
          url: "https://www.youtube.com/watch?v=lWEvBLlUa2E"
        }
      ]
    },



    cc_myth6: {
      title: "Kliimamuutused",
      subtitle: "Juhitud uurimus, müüt 6",
      myth: "Müüt nr 6: Kliimamuutustega seotud meetmed muudavad inimesed vaesemaks.",
      hypothesis: "Püstitage selle kohta oma hüpotees.",
      argument: {
        txt_1: "Teile esitatakse müüdi 6 põhiargument ja küsimus, millele hakkate vastama viidatud allikate abil.",
        argument: "Müüdi 6 põhiargument : Fossiilkütuste kasutamise piiramine takistab majanduskasvu ja tõstab elukallidust, kahjustades vaesemaid."
      },
      question: "Uurimisküsimus: Kas fossiilkütuste kasutamise piiramine mõjutab majanduskasvu ja elukallidust, kahjustades vaesemaid?",
      source_txt: "Ülaltoodud uurimisküsimuse vastuse kontrollimiseks soovitatakse järgmisi allikaid:",
      source_61: {
        txt_1: "Tutvu {link1}",
        link_1: "allikaga 6.1",
        label_1: "Pane kirja taastuvate energiaallikate kasutamisest saadav tulu."
      },
      source_62: {
        txt_1: "Tutvu {link1}. Uuri tabelit, mis pärineb {i1}, mis käsitleb energiaallikate muutmise sotsiaalmajanduslikke mõjusid.",
        link_1: "allikaga 6.2",
        i_1: "World Economic Situation and Prospects 2020",
        label_1: "Millised võiksid olla erinevate energiaallikate kasutamise eelseisvad mõjud?"
      },
      source_63: {
        txt_1: "Uuri {link1}",
        link_1: "allikat 6.3",
        label_1: "Milliseid töökohti võib tekitada taastuvate energiallikate kasutamine?"
      },
      conclusion: "Tuginedes kogutud tõenditele, millised on sinu  järeldused müüdi “Kliimamuutustega seotud meetmed muudavad inimesed vaesemaks”, paikapidavuse kohta? ",
      flicc_label: "Tuginedes kogutud andmetele, mis te arvate, millise teaduse eitamise taktika tõttu see müüt on tekkinud?",
      sources: [
        {
          name: "Allikas 6.1",
          url: "https://drive.google.com/file/d/1lLGM0OZxy3Sm0BvPeHlB7brOrNhZrBRA/view?usp=sharing"
        },
        {
          name: "Allikas 6.2",
          url: "https://drive.google.com/file/d/1j-al4leaUi28OLKPq9Fj6So8XojxhOjn/view?usp=sharing"
        },
        {
          name: "Allikas 6.3",
          url: "https://drive.google.com/file/d/1glVgyNAJeN_TyRwjAEAbCYQEHRw3Jwiq/view?usp=sharing"
        }
      ]
    },


    cc_myth7: {
      title: "Kliimamuutused",
      subtitle: "Juhitud uurimus, müüt 7",
      myth: "Müüt nr 7: Maa kliima on alati muutunud ning see jätkab muutumist.",
      hypothesis: "Püstitage selle kohta oma hüpotees.",
      argument: {
        txt_1: "Teile esitatakse müüdi 7 põhiargument ja küsimus, millele hakkate vastama viidatud allikate abil.",
        argument: "Müüdi 7 põhiargument: Maa kliima on alati muutunud."
      },
      question: "Uurimisküsimus: Kas temperatuurid on alati sama kiirusega tõusnud?",
      source_txt: "Ülaltoodud uurimisküsimuse vastuse kontrollimiseks on soovitav kasutada järgmisi allikaid:",
      source_71: {
        txt_1: "Vaata videot {link1}",
        link_1: "“The greenhouse effect and climate change history”",
        label_1: "Millisele teemale see viitab? "
      },
      source_72: {
        txt_1: "Tutvu järgmise {link1}.",
        link_1: "graafikuga",
        label_1: "Vaata erinevate aastate temperatuure, mida märkad?"
      },
      source_73: {
        txt_1: "Tutvu {link1}.",
        link_1: "allikaga",
        label_1: "Mida märkad temperatuuri tõusuga seoses?"
      },
      table_years: {
        label_1: "Võrdle temperatuuride muutusi. Kui suur on olnud temperatuuride muutus iga 20 aasta järel?",
        table: {
          header: [
            {thead: "Ajavahemik"},
            {thead: "Temperatuuri muutus"}
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
      years_max: "Millal leidis aset suurim temperatuuri tõus?",
      conclusion: "Tuginedes kogutud tõenditele, millised on sinu järeldused müüdi “Maa kliima on alati muutunud ning see jätkab muutumist”, paikapidavuse kohta:",
      flicc_label: "Tuginedes kogutud andmetele, mis te arvate, millise teaduse eitamise taktika tõttu see müüt on tekkinud?",
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
          name: "Allikas 7.1",
          url: "https://drive.google.com/file/d/19TQRfChWF33c_zgUsPGNzBwa9F-YVH76/view?usp=sharing"
        }
      ]
    },

    drugs: {
      title: "Rohud",
      subtitle: "Vastused",
      label_1: "Murrame järgmise müüdi:",
      label_2: "Meie hüpotees / uurimisküsimus:",
      label_3: "Tegevusplaan",
      reliability: {
        label_1: "Allikate usaldusväärsus"
      },
      label_4: "Meie järeldused:",
      label_5: "Otsus:"
    }


  }
}