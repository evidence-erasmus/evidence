export default {
  inquiry: {
    your_answers:"Οι απαντήσεις σου",
    add_row: "Πρόσθεσε γραμμή",
    
    reliability_table : {
      txt_1: "Παρακαλώ χρησιμοποιήστε αυτό το {link1} για την αναζήτηση πληροφοριών και την αξιολόγηση της αξιοπιστίας τους. Γράψετε μια περίληψη των ευρημάτων σας στον παρακάτω πίνακα.",
      link_1: "εργαλείo",
      url_1: "../../tools/reliability-assessment",  
      label_1: "Γράψετε μια περίληψη των ευρημάτων σας στον παρακάτω πίνακα.",
      cols: {
          col_1:"Τεκμήρια / κύρια συμπεράσματα / περίληψη πληροφοριών που σχετίζονται με την υπόθεση",
          col_2:"Είδος και πηγή τεκμηρίων",
          col_3:"Βαθμός Αξιοπιστίας",
          col_4:"Σχόλια"
        },
        add_row: "Πρόσθεσε γραμμή"
    },
    variables_table: { 
      header: [
        {thead:"Ανεξάρτητη μεταβλητή", tsubhead:"(αυτές που θα παραμείνουν σταθερές)"},
        {thead:"Ανεξάρτητη μεταβλητή", tsubhead:"(αυτή η οποία θα αλλάζει)"},
        {thead:"Εξαρτημένη μεταβλητή", tsubhead:"(αυτή που θα μετρηθεί)"},
      ]
    },

    ev_open: {
      title: "Evolution",
      subtitle: "Open inquiry",
      choose: "Choose a myth",
      q1_title: "1. We are going to examine the following myth:",
      myths: [
        "Evolution is just a theory.",
        "Evolution is unscientific because it is not testable or falsifiable. It makes claims about events that were not observed and can never be re-created.",
        "Evolution follows a preordained, straight path (or if human evolved from apes, why are there still apes?",
        "Evolution produces perfectly adapted creatures.",
        "Species are immutable",
        "The use or disuse of a structure during one’s lifetime, could be inherited by its offspring and lead to a change in a species"
      ],
      expectations: {
        title: "In this activity, you are expected to do the following:",
        items: [
          "develop a testable hypothesis / research question,",
          "plan your search for relevant information that will confirm or falsify your hypothesis / answer your research question,",
          "present collected data in the form of tables, graphs, or similar,",
          "assess the reliability of the gathered evidence.",
          "use your findings to draw a conclusion."
        ]
      },
      q2 : {
        txt: "Develop a {q2Link} / research question.",
        link: "testable hypothesis",
        title: "2. Our hypothesis / research question is:",
      },
      
      plan: {
        txt_1: "(you could indicate by which activities you are involved as a full team and by which you are going to divide responsibilities, in this case, specify, who is responsible for what).",
        label_1: "3. Plan of activities"
      },
      conclusions: "5. Based on the collected evidence, our conclusions are:"
    },



    ev_myth1: {
      title: "Evolution",
      subtitle: "Guided inquiry, myth 1",
      myth: {
        text: "Your team will deal with Statement 1:",
        myth: "“Evolution is just a theory”."
      },
      justification: {
        text: "Read the text carefully. Identify and document the arguments put forward by the authors to support their point of view.",
        label_1: "Argument:",
      },
      label_2: "How do you find this argument? Is something bothering you?",
      label_3: "How could we check whether this argument is valid?",
      question: "Question: Is Evolution just a theory? What is meant by the term “theory” in science?",
      sources_text: "In order to check the above questions, the following bibliographic sources are suggested:",
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
      label_4: "What is meant by the term “theory” in Science?",
      label_5: "Does the Theory of evolution fulfil the criteria to be a scientific theory?"
    },


    ev_myth2: {
      title: "Evolution",
      subtitle: "Guided inquiry, myth 2",
      myth: {
        text: "Your team will deal with Statement 2:",
        myth: "“Evolution is unscientific because it is not testable or falsifiable. It makes claims about events that were not observed and can never be re-created.”"
      },
      justification: {
        text: "Read the text carefully. Identify and document the arguments put forward by the authors to support their point of view.",
        label_1: "Argument:",
      },
      label_2: "How do you find this argument? Is something bothering you?",
      label_3: "How could we check whether this argument is valid?",
      question: "Questions: Is Evolution testable? Is it falsifiable? Does all science depend on controlled laboratory experiments to be considered true science?",
      sources_text: "In order to check the above question, the following bibliographic sources are suggested:",
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
          text: "Study the following source:",
          label: "Artificial selection in the lab",
          url: "https://evolution.berkeley.edu/artificial-selection-in-the-lab/"
        },
        {
          text: "“Play” with the following virtual lab:",
          label: "Evolution in the lab",
          url: "https://evolution.berkeley.edu/angling-for-evolutionary-answers/evolution-in-the-lab/"
        },
        {
          text: "Run the following simulation:",
          label: "The evolutionary informatics lab",
          url: "https://www.evoinfo.org/weasel.html"
        },
      ],
      label_4: "Are there any cases that we can actually observe evolution?",
      label_5: "Are there any cases that we can test evolutionary processes in the lab?",
      label_6: "Are there any alternatives we can use instead of actual experiments?",
      // reliability: {
      //   text: "Palun kasuta järgnevat {link} selleks, et hinnata kasutatud allikate usaldusväärsust.",
      //   link: "töörista",
      //   label: "Kirjuta alljärgnevasse tabelisse kokkuvõte oma uuringu tulemustest."
      // }
    },



    ev_myth3: {
      title: "Evolution",
      subtitle: "Guided inquiry, myth 3",
      myth: {
        text: "Your team will deal with Statement 3:",
        myth: "Evolution follows a preordained, straight path (or if human evolved from apes, why are there still apes?)"
      },
      justification: {
        text: "Read the text carefully. Identify and document the arguments put forward by the authors to support their point of view.",
        label_1: "Argument:",
      },
      label_2: "How do you find this argument? Is something bothering you?",
      label_3: "How could we check whether this argument is valid?",
      question: "Questions:	Does evolution follow a preordained, straight path? If a species evolves from another species, does this mean that the first one should become extinct?",
      sources_text: "To check the above question, the following bibliographic sources are suggested:",
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
      label_4: "Does evolution follow a preordained, straight path?"
    },


    ev_myth4: {
      title: "Evolution",
      subtitle: "Guided inquiry, myth 4",
      myth: {
        text: "Your team will deal with Statement 4:",
        myth: "“Evolution produces perfectly adapted creatures.”"
      },
      justification: {
        text: "Read the text carefully. Identify and document the arguments put forward by the authors to support their point of view.",
        label_1: "Argument:",
      },
      label_2: "How do you find this argument? Is something bothering you?",
      label_3: "How could we check whether this argument is valid?",
      question: "Question: Do you have to be perfectly adapted to survive? Does natural selection produce perfection/perfectly adapted creatures?",
      sources_text: "To check the above question, the following bibliographic sources are suggested:",
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
      label_4: "Do you have to be perfectly adapted to survive?",
      label_5: "Does natural selection produce perfection/perfectly adapted creatures?"
    },



    ev_myth5: {
      title: "Evolution",
      subtitle: "Guided inquiry, myth 5",
      myth: {
        text: "Your team will deal with Statement 5:",
        myth: "“Species are immutable.”"
      },
      justification: {
        text: "Read the text carefully. Identify and document the arguments put forward by the authors to support their point of view.",
        label_1: "Argument:",
      },
      label_2: "How do you find this argument? Is something bothering you?",
      label_3: "How could we check whether this argument is valid?",
      question: "Question: Do species change over time?",
      sources_text: "To check the above question, the following bibliographic sources are suggested:",
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
      label_4: "Do species change over time?"
    },



    ev_myth6: {
      title: "Evolution",
      subtitle: "Guided inquiry, myth 6",
      myth: {
        text: "Your team will deal with Statement 6:",
        myth: "“The use or disuse of a structure during one’s lifetime, could be inherited by its offspring and lead to a change in a species.”"
      },
      justification: {
        text: "Read the text carefully. Identify and document the arguments put forward by the authors to support their point of view.",
        label_1: "Argument:",
      },
      label_2: "How do you find this argument? Is something bothering you?",
      label_3: "How could we check whether this argument is valid?",
      question: "Which traits/characteristics are inheritable?",
      sources_text: "To check the above question, the following bibliographic sources are suggested:",
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
      label_4: "Which traits are inheritable?"
    },







    cc_open: {
      title: "Κλιματική Αλλαγή",
      subtitle: "Open inquiry",
      choose: "Choose a myth",
      q1_title: "1. Θα διερευνήσουμε τον ακόλουθο μύθο:",
      myths: [
        "The extinction of species is a natural process. Mass extinctions of species have always occurred.",
        "Οι οργανισμοί μπορούν να προσαρμοστούν στις κλιματικές αλλαγές.",
        "The science of climate change is not credible.",
        "The temperature rise is for good.",
        "There is no correlation between CO₂ and temperature.",
        "Climate change actions will make people poorer.",
        "The earth's climate has always changed, and now the same thing is happening."
      ],
      q2_txt: "Αναπτύξετε μια {q2Link} / ερευνητικό ερώτημα",
      q2_link: "ελεγχόμενη υπόθεση",
      q2_title: "2. Η υπόθεσή μας / Το ερευνητικό ερώτημα είναι:",

      plan: {
        txt_1: "(Σκεφτείτε προσεκτικά πώς θα ελέγχετε όλες τις άλλες μεταβλητές εκτός από αυτήν που πρόκειται να μεταβάλλεται· παρακαλούμε αναφέρετε σε ποιες δράσεις θα εμπλακεί ολόκληρη η ομάδα και σε ποιες θα κατανεμηθούν ρόλοι. Σημειώστε τι θα κάνει το κάθε μέλος της ομάδας):",
        label_1: "3. Πορεία Εργασίας"
      },
      
      q4_title: "5. Βάσει του πειράματος, το/τα συμπέρασμα / τα είναι:",
      q5_title: "6. Σύμφωνα με τα δεδομένα που συλλέξατε, πού οφείλεται το σφάλμα του μύθου αυτού;"
    },








    cc_myth1: {
      title: "Κλιματική Αλλαγή",
      subtitle: "Καθοδηγούμενη Διερεύνηση; Μύθο 1",
      myth: "Η ομάδα σας καλείται να διαπραγματευτεί το Μύθο 1 «Η εξαφάνιση των ειδών είναι μια φυσική διαδικασία. Μαζικές εξαφανίσεις ειδών συνέβαιναν πάντα.».",
      hypothesis: "Καταγράψτε την υπόθεσή / το ερευνητικό σας ερώτημα σχετικά με τον μύθο 1.",
      argument: {
        txt_1: "Σας δίνεται το βασικό επιχείρημα του Μύθου 1 και η ερώτηση που πρέπει να απαντήσετε χρησιμοποιώντας τις δεδομένες επιστημονικές πηγές.",
        argument: "Επιχείρημα Μύθου 1: Η μαζική εξαφάνιση των ειδών είναι μια φυσική διαδικασία."
      },
      question: {
        question: "Ερώτημα: Είναι η μαζική εξαφάνιση των ειδών μια φυσική διαδικασία;",
        txt_1: "Μελετήστε την {link1} και δείτε το βίντεο {link2}. Στη συνέχεια, απαντήστε στις παρακάτω ερωτήσεις.",
        link_1: "πηγή 1.1",
        link_2: "Climate Change: Why are thousands of species facing extinction? - BBC News."
      },
      q_1: "1. Τι εννοούμε με τον όρο «μαζική εξαφάνιση»;",
      q_2: "2. Πόσες μαζικές εξαφανίσεις βρήκατε ότι έγιναν;",
      q_3: "3. Ποιες ήταν οι αιτίες των μαζικών εξαφανίσεων;",
      q_4: "4. Ποιες ήταν οι συνέπειες των μαζικών εξαφανίσεων;",
      q_5: "5. Γιατί πρέπει να ανησυχούμε για τις μαζικές εξαφανίσεις τώρα;",
      q_6: {
        txt_1: "Μελετήστε την {link1} και απαντήστε στην παρακάτω ερώτηση.",
        link_1: "πηγή 1.2",
        q_6: "6. Ποιος είναι ο λόγος για τη μαζική δολοφονία πιγκουίνων;"
      },
      q_7: {
        txt_1: "Please use {link1} to assess the reliability of the sources used.",
        link_1: "this tool",
        q_7: "7. Γράψετε μια περίληψη των ευρημάτων σας στον παρακάτω πίνακα."
      },
      q_8: "8. Με βάση τα τεκμήρια, το/τα συμπέρασμα(τα) σχετικά με το μύθο «Η εξαφάνιση των ειδών είναι μια φυσική διαδικασία. Μαζικές εξαφανίσεις ειδών συνέβαιναν πάντα.» είναι:",
      q_9: "Σύμφωνα με τα δεδομένα που συλλέξατε, πού οφείλεται το σφάλμα του μύθου αυτού;",
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
      title: "Κλιματική Αλλαγή",
      subtitle: "Καθοδηγούμενη Διερεύνηση; Μύθο 2",
      myth: "Η ομάδα σας καλείται να διαπραγματευτεί το Μύθο 2: «Οι οργανισμοί μπορούν να προσαρμοστούν στις κλιματικές αλλαγές.»",
      hypothesis: "Καταγράψτε την υπόθεση / το ερευνητικό σας ερώτημα σχετικά με τον μύθο 2.",

      a1: {
        argument: {
          txt_1: "Σας δίνεται το βασικό επιχείρημα του Μύθου 2 και η ερώτηση που πρέπει να απαντήσετε χρησιμοποιώντας τις δεδομένες επιστημονικές πηγές.",
          argument: "Επιχείρημα 1 για τον Μύθο 2: Τα είδη έχουν προσαρμοστεί αρκετές φορές σε αντίξοες συνθήκες, έτσι είναι σε θέση να επιβιώσουν στις νέες κλιματικές συνθήκες."
        },
        q1: {
          title_1: "Ερώτημα: Η κλιματική αλλαγή επηρεάζει την ικανότητα προσαρμογής των ειδών;",
          txt_1: "Παρακολουθήστε προσεκτικά το κινούμενο σχέδιο {link1} και απαντήστε στις παρακάτω ερωτήσεις.",
          label_1: "Περί τίνος πρόκειται; Τι προκαλεί αυτή την αλλαγή;",
          label_2: "Ποιες είναι οι συνέπειες αυτής της αλλαγής;",
          answer_1: "Coral reefs case"
        },
        q2: {
          title_1: "Διερευνήσιμο ερώτημα: Η ύπαρξη οξέος στο θαλασσινό νερό επηρεάζει την μάζα των κοραλλιών;",
          txt_1: "Scientific Source: Conducting the experiment “Sharpening Oceans”",
          list_1_title: "Μέσα και Υλικά:",
          list_1: [
            "Όστρακα / κελύφοι σαλιγκαριών ίδιου μεγέθους, πολύ καλά καθαρισμένα",
            "Ξύδι (50gr), Οξύτητα: 4.5%",
            "2 πλαστικά δοχεία με καπάκι",
            "Θαλασσινό νερό 400gr",
            "Ζυγαριά μέτρησης",
            "Ογκομετρικά δοχεία",
            "Σουρωτήρι",
            "Βραστήρας",
            "Ζεστό νερό",
            "Αυτοκόλλητες ετικέτες"
          ],
          list_2_title: "Πειραματική διαδικασία:",
          list_2: [
            "Ζυγίζουμε τα κοράλλια που θα χρησιμοποιήσουμε. Καταγράφουμε τη μάζα των οστράκων. Κάνουμε δύο ομάδες με όστρακα και προσπαθούμε οι ομάδες να έχουν την ίδια μάζα.",
            "Σε δύο πανομοιότυπα δοχεία βάζουμε ίδια ποσότητα θαλασσινού νερού (200gr). Στο ένα δοχείο προσθέτουμε ξύδι.",
            "Τοποθετούμε σε κάθε δοχείο τα όστρακα.",
            "Αφήνουμε κλειστά τα δοχεία για 40 λεπτά σε ίδιες συνθήκες.",
            "Αδιάζουμε τα δοχεία σε ξεχωριστό ογκομετρικό δοχείο το καθένα. Ζεματίζουμε με ζεστό νερό τα όστρακα και τα αφήνουμε για 15 λεπτά.",
            "Καθαρίζουμε κάθε όστρακο ξεχωριστά. Τα αφήνουμε να στεγνώσουν πολύ καλά.",
            "Ζυγίζουμε κάθε ομάδα οστράκων, και καταγράφουμε τις νέες μάζες."
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
              { thead: "ΟΜΑΔΑ A" },
              { thead: "ΟΜΑΔΑ B" }
            ],
            rows: [
              ["Αρχική Μάζα (gr):", "", ""],
              ["Τελική μάζα (gr):", "", ""],
              ["Μεταβολή μάζας (gr):", "", ""]
            ]
          },
          table2_title: "Καταγραφή δεδομένων",
          hypothesis: "Πρόβλεψη:",
          conclusions: "Παρατηρήσεις:",
          source_1: {
            txt_1: "Μελετήστε την {link1} και απαντήστε στην ακόλουθη ερώτηση.",
            link_1: "Πηγή 2.2",
            label_1: "Γιατί είναι ανησυχητική η πρόσφατη λεύκανση στα κοράλλια;"
          },
          source_2: {
            txt_1: "Μελετήστε την {link1} και απαντήστε στην ακόλουθη ερώτηση.",
            link_1: "Πηγή 2.3",
            label_1: "What is it about? What is the relationship between climate change and the transmission of viruses and diseases?"
          },
          source_3: {
            txt_1: "Παρακολουθήστε το κινούμενο σχέδιο {link1} και απαντήστε στην παρακάτω ερώτηση.",
            link_1: "Climate change: Ice melting and animals",
            label_1: "Πώς επηρεάζει η κλιματική αλλαγή τους πληθυσμούς των πολικών αρκούδων; Καταγράψτε επαγωγικά την πορεία της αλλαγής."
          }
        }
      },

      a2: {
        argument: "Επιχείρημα 2 για τον Μύθο 2: Η εξέλιξη των ειδών προέκυψε από την ανάγκη επιβίωσης των οργανισμών στις μεταβαλλόμενες συνθήκες.",
        q1: {
          question: "Ερώτηση: Η κλιματική αλλαγή επηρεάζει την εξέλιξη των ειδών;",
          source_1: {
            txt_1: "Μελετήστε την {link1} και απαντήστε στις ακόλουθες ερωτήσεις.",
            link_1: "Πηγή 2.1",
            label_1: "Τι εννοούμε με τον όρο «εξέλιξη των ειδών»;"
          },
          label_2: "Γιατί η κλιματική αλλαγή θεωρείται ανησυχητική για την εξέλιξη των ειδών;"
        }
      },


      conclusions: "Με βάση τα τεκμήρια, το/τα συμπέρασμα(τα) σχετικά με το Μύθο 2 «Οι οργανισμοί μπορούν να προσαρμοστούν στις κλιματικές αλλαγές.» είναι:",

      flicc_label: "Σύμφωνα με τα δεδομένα που συλλέξατε, πού οφείλεται το σφάλμα του μύθου αυτού;",
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
      title: "Κλιματική Αλλαγή",
      subtitle: "Καθοδηγούμενη Διερεύνηση; Μύθο 3",
      myth: "Η ομάδα σας καλείται να διαπραγματευτεί το Μύθο 3: «Η επιστήμη της κλιματικής αλλαγής δεν είναι αξιόπιστη».",
      hypothesis: "Καταγράψτε την υπόθεση / το ερευνητικό σας ερώτημα σχετικά με τον μύθο 3.",
      argument: {
        txt_1: "Σας δίνεται το βασικό επιχείρημα του Μύθου 3 και η ερώτηση που πρέπει να απαντήσετε χρησιμοποιώντας τις δεδομένες επιστημονικές πηγές.",
        argument: "Επιχείρημα για τον Μύθο 3: Η συλλογή δεδομένων από τους σταθμούς μετρήσεων της ποσότητας του CO2 δεν είναι αξιόπιστη, επομένως η κλιματική αλλαγή δεν είναι πραγματικό γεγονός."
      },
      question: "Ερώτημα: Μπορούμε να βασιστούμε στη συλλογή δεδομένων από τους σταθμούς μέτρησης της ποσότητας του CO₂ στην ατμόσφαιρα;",
      source_1: {
        txt_1: "Παρακολουθήστε το βίντεο {link1}. Στη συνέχεια, διαβάστε προσεκτικά το παρακάτω κείμενο, μελετήστε τον χάρτη και απαντήστε στην ερώτηση.",
        link_1: "Building a robust temperature record",
        txt_2: "Η παγκόσμια μέση μηνιαία θερμοκρασία επιφάνειας (GMST), προκύπτει από έναν συνδυασμό δεδομένων που συλλέγονται από 1. NASA GISTEMP, 2. CRUTEM (University of East England Climate Research Unit), 3. National Climate Data NOAA (NCDC). Τα δεδομένα στα οποία βασίζεται η αποτύπωση του κλίματος προέκυψαν από πηγές παρατήρησης από τη γη, τον αέρα και τη θάλασσα."
      },
      img_1: {
        caption: "Διάγραμμα 1. Ο πιο πάνω χάρτης αποτυπώνει τους τρόπους συλλογής δεδομένων από τον οργανισμό ΝΟΑΑ."
      },
      q_1: "Σύμφωνα με το υπόμνημα του χάρτη, ποιοι είναι οι τρόποι συλλογής δεδομένων που χρησιμοποιεί ο ΝΟΑΑ;",
      q_2: "Τι παρατηρείτε ως προς την ποσότητα των τρόπων συλλογής δεδομένων και τη γεωγραφική τους θέση;",
      q_3: "Ο ΝΟΑΑ διατηρεί βασικούς σταθμούς παρατήρησης (Baseline Observatories). Πόσους τέτοιους σταθμούς εντοπίζετε στον χάρτη;",
      q_4: "Τι παρατηρείτε ως προς την τοποθεσία του κάθε παρατηρητηρίου; Γιατί νομίζετε ότι τοποθετήθηκαν στα συγκεκριμένα σημεία;",
      noaa_stations: {
        txt_1: "Ανατρέξτε στη σελίδα του {link1}. Ποια είναι τα 4 παρατηρητήρια του ΝΟΑΑ; Πού ακριβώς βρίσκονται (γεωγραφικό μήκος, γεωγραφικό μήκος)  και σε ποιο υψόμετρο; (Πηγές {source31}, {source32}, {source33}, {source34})",
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
          { thead: "Παρατηρητήριο" },
          { thead: "Γεωγραφικό Μήκος" },
          { thead: "Γεωγραφικό Πλάτος" },
          { thead: "Υψόμετρο" },
        ]
      },
      q_5: "Τι παρατηρείτε για την τοποθεσία τους;",
      img_2: {
        txt_1: "Ανά πάσα στιγμή μέσων αυτών των σταθμών μπορούμε να λάβουμε πληροφορίες για τις συνθήκες που επικρατούν. {link1}, μπορείτε να δείτε τελευταίες καταγραφές από τον σταθμό Mauna Loa της Χαβάης.",
        link_1: "Εδώ",
        url_1: "https://gml.noaa.gov/obop/mlo/met.html",
        caption: "Διάγραμμα 2. Το πιο πάνω γράφημα παρουσιάζει τις μετρήσεις CO₂ που λήφθηκαν από το 1975 μέχρι το 2020 από τους 4 βασικούς σταθμούς παρατήρησης του NOAA.",
        conclusion: "Τι παρατηρείται ως προς τις συγκεντρώσεις CO₂ που ανιχνεύθηκαν σε κάθε περιοχή;",
      },
      conclusion: "Με βάση τα τεκμήρια, το/τα συμπέρασμα(τα) σχετικά με τον μύθο «Η επιστήμη της κλιματικής αλλαγής δεν είναι αξιόπιστη.» είναι:",
      flicc_label: "Σύμφωνα με τα δεδομένα που συλλέξατε, πού οφείλεται το σφάλμα του μύθου αυτού;",
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
      title: "Κλιματική Αλλαγή",
      subtitle: "Καθοδηγούμενη Διερεύνηση; Μύθο 4",
      myth: "Η ομάδα σας καλείται να διαπραγματευτεί το Μύθο 4 «Η αύξηση της θερμοκρασίας είναι για καλό».",
      hypothesis: "Καταγράψτε την υπόθεση/ το ερευνητικό σας ερώτημα σχετικά με τον μύθο 4.",
      a1: {
        argument: {
          txt_1: "Σας δίνεται το βασικό επιχείρημα του Μύθου 4 και οι ερωτήσεις που πρέπει να απαντήσετε χρησιμοποιώντας τις δεδομένες επιστημονικές πηγές.",
          argument: "Επιχείρημα 1 για τον Μύθο 4: Με την αύξηση της θερμοκρασίας θα μειωθούν οι θάνατοι λόγω ψύχους."
        },
        question: "Διερευνήσιμο ερώτημα: Η αύξηση της θερμοκρασίας επηρεάζει τον αριθμό των θανάτων;",
        source_txt: "Otsi vastused küsimustele kasutades viidatud allikaid.",
        source_410: {
          txt_1: "Μελετήστε τη {link1} και απαντήστε στην ερώτηση.",
          link_1: "δημοσίευση του Παγκόσμιου Οργανισμού Υγείας",
          label_1: "«Η κλιματική αλλαγή θεωρείται η μεγαλύτερη απειλή για την ανθρώπινη υγεία», αναφέρει η έκθεση. Πώς σας φαίνεται αυτή η άποψη αφού διαβάσετε την παραπάνω επιστημονική πηγή; Να αιτιολογήσετε την απάντησή σας."
        },
        source_411: {
          txt_1: "Μελετήστε την {link1} και φέρετε εις πέρας την παρακάτω εργασία.",
          link_1: "Πηγή 4.1",
          label_1: "Γράψετε παραδείγματα σχετικά με τις επιπτώσεις της κλιματικής αλλαγής στην ανθρώπινη υγεία."
        },
        source_412: {
          txt_1: "Μελετήστε την {link1} και φέρετε εις πέρας την παρακάτω εργασία.",
          link_1: "Πηγή 4.2",
          label_1: "Καταγράψετε τις παρατηρήσεις σας σχετικά με τους θανάτους λόγω της κλιματικής αλλαγής."
        },
        conclusion: "Αφού μελετήσατε τις παραπάνω επιστημονικές πηγές (Δημοσίευση του ΠΟΥ, Πηγή 4.1 & Πηγή 4.2), ποια είναι η απάντησή σας στην ερώτηση: Η άνοδος της θερμοκρασίας επηρεάζει τον αριθμό των θανάτων αναφορικά με το Επιχείρημα 1 του μύθου 4;"
      },
      a2: {
        argument: "Επιχείρημα 2 για τον Μύθο 4: Με την αύξηση της θερμοκρασίας θα αυξηθούν οι κατοικήσιμες περιοχές και η καλλιεργήσιμη γη.",
        question: "Διερευνήσιμο ερώτημα: Η αύξηση της θερμοκρασίας επηρεάζει την έκταση της αξιοποιήσιμης γης για κατοικία ή καλλιέργεια;",
        txt_1: "Ακολουθήστε την πιο κάτω πειραματική διαδικασία και απαντήστε στα ερωτήματα που ακολουθούν.",
        exp: {
          title: "Επιστημονική Πηγή: Πειραματική διαδικασία",
          list_1: {
            title: "Μέσα και Υλικά:",
            list: [
              "Άμμος ή χώμα", 
              "Νερό", 
              "Μεγάλα πλαστικά μπουκάλια κομμένα στη μέση",
              "Πλαστικά ποτηράκια",
              "Παγάκια", 
              "Διαφανής μεμβράνη", 
              "Λάμπα", 
              "Μαρκαδόρος"
            ],
            image_caption: "Figure: Experiment setup"
          },
          list_2: {
            title: "Πειραματική διαδικασία:",
            list: [
              "Τοποθετήστε ίση ποσότητα άμμου ή χώματος στα δύο μεγάλα πλαστικά μπουκάλια.","Τοποθετήστε το ένα πλαστικό ποτήρι με το στόμιο μέσα στο χώμα του κάθε πλαστικού μπουκαλιού και στερεώστε το άλλο πλαστικό ποτήρι πάνω από το 1ο ποτήρι με το στόμιο προς τα πάνω. Στο κάθε 2ο πλαστικό ποτήρι τοποθετήστε τον ίδιο αριθμό πάγου.","Δημιουργήστε εγκοπές μεταξύ των δύο κάτω μερών των πλαστικών ποτηριών ώστε να ρέει το νερό από τον πάγο προς το κάθε πλαστικό μπουκάλι.",
              "Τοποθετήστε ίση ποσότητα νερού σε κάθε πλαστικό μπουκάλι.",
              "Καλύψτε το ένα πλαστικό μπουκάλι με διαφανής μεμβράνη.",
              "Ανάψτε τη λάμπα και κάνετε παρατηρήσεις μετά από 20 λεπτά."
            ],
          },
          variable_table: {
            title: "Έγκυρο πείραμα",
            subtitle: "Συμπληρώστε τον πίνακα.",
            table: {
              header: [
                { thead: "Παράγοντες που διατηρώ σταθερούς" },
                { thead: "Παράγοντας που μεταβάλλω" },
                { thead: "Παράγοντας που μετρώ" }
              ]
            }
          },
          hypothesis: "Πρόβλεψη",
          results_table: {
            title: "Αποτελέσματα",
            subtitle: "Συμπληρώστε τον πίνακα.",
            table: {
              header: [
                { thead: "" },
                { thead: "ΔΟΧΕΙΟ A" },
                { thead: "ΔΟΧΕΙΟ B" },
              ],
              rows: [
                ["Αρχική στάθμη νερού (cm):", "", ""],
                ["Τελική στάθμη νερού (cm):", "", ""],
                ["Μεταβολή στάθμης νερού (cm):", "", ""],
              ]
            }
          },
          conclusion: "Παρατηρήσεις",
          islands: "Ας υποθέσουμε ότι τα δυο δοχεία αντιπροσωπεύουν δύο νησιά. Σε ποιο νησί θα θέλατε να ζήσετε και γιατί;"
        },
        source_421: {
          txt_1: "Στον {link1} αυτό μπορείτε να εξερευνήσετε νησιά τα οποία κινδυνεύουν να εξαφανιστούν λόγω της κλιματικής αλλαγής:",
          link_1: "σύνδεσμο",
          txt_2: "Μελετήστε την πηγή της NASA: {link2} και και φέρετε εις πέρας την παρακάτω εργασία.",
          link_2: "Vital Signs: Sea Level",
          label_1: "Καταγράψτε τους παράγοντες που σχετίζονται με την άνοδο της στάθμης της θάλασσας και κατά συνέπεια, τη μείωση της διαθέσιμης γης για στέγαση ή καλλιέργεια."
        },
        graph: {
          txt_1: "Συγκρίνετε τα πιο κάτω γραφήματα (μπορείτε να μεταβείτε στους συνδέσμους που δίνονται κάτω από τα γραφήματα για πιο ακριβή εντοπισμό των δεδομένων).",
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
            subtitle: "Συμπληρώστε τον πίνακα.",
            label_1: "Ποια σχέση υπάρχει μεταξύ θερμοκρασίας και επιπέδου στάθμης της θάλασσας;",
            table: {
              header: [
                { thead: "Έτος" },
                { thead: "1900" },
                { thead: "1920" },
                { thead: "1940" },
                { thead: "1980" },
                { thead: "2000" },
                { thead: "2020" }
              ],
              rows: [
                ["Θερμοκρασία", "", "", "", "", "", ""],
                ["Στάθμη θάλασσας", "", "", "", "", "", ""]
              ]
            }
          }
        },
        conclusion: "Αφού έχετε μελετήσει τις πιο πάνω πηγές (Πειραματική Διαδικασία, Βιβλιογραφική Πηγή από τη NASA, Γραφήματα) απαντήστε στο διερευνήσιμο ερώτημα «Η αύξηση της θερμοκρασίας επηρεάζει την έκταση της αξιοποιήσιμης γης για κατοικία ή καλλιέργεια;» σχετικά με το επιχείρημα 2 που αφορά το Μύθο 4."
      },
      a3: {
        argument: "Επιχείρημα 3 για τον Μύθο 4: Με την αύξηση της θερμοκρασίας θα αυξηθούν οι καλλιέργειες και θα ευνοηθεί η γεωργία.",
        question: "Διερευνήσιμο ερώτημα: Η αύξηση της θερμοκρασίας επηρεάζει τον αριθμό των καλλιεργειών;",
        source_431: {
          txt_1: "Μελετήστε την {link1} που δημοσιεύτηκε από το European Environment Agency και απαντήστε στα ερωτήματα που ακολουθούν.",
          label_1: "Τι αλλαγές συμβαίνουν ή αναμένεται να συμβούν στις βόρειες και στις νότιες χώρες;",
          table: {
            subtitle: "Καταγράψτε τις πληροφορίες που δίνονται από την πηγή.",
            header: [
              { thead: "Βόρειες Χώρες" },
              { thead: "Νότιες Χώρες" }
            ],
            rows: [
              ["", ""]
            ]
          }
        },
        source_432: {
          txt_1: "Μελετήστε το διάγραμμα στην {link1} και φέρετε εις πέρας την παρακάτω εργασία.",
          link_1: "Πηγή 4.4",
          label_1: "Καταγράψτε τις πληροφορίες που λαμβάνετε από το διάγραμμα.",
        },
        source_433: {
          txt_1: "Μελετήστε το {link1} του BBC και απαντήστε στο ερώτημα.",
          link_1: "δημοσίευμα",
          label_1: "",
        },
        conclusion: "Αφού έχετε μελετήσει τις πηγές (Πηγή: 4.3, 4.4 και το άρθρο του BBC), ποια είναι η απάντησή σας στο ερώτημα «Η αύξηση της θερμοκρασίας επηρεάζει τον αριθμό των καλλιεργειών;» που σχετίζεται με το επιχείρημα 3 του μύθου 4;"
      },
      a4: {
        argument: "Επιχείρημα 4 για τον Μύθο 4: Καθώς η θερμοκρασία αυξάνεται, ορισμένα είδη (π.χ. έντομα) θα επηρεαστούν.",
        question: "Διερευνήσιμο ερώτημα: Η κλιματική αλλαγή επηρεάζει τους πληθυσμούς των εντόμων;",
        source_441: {
          txt_1: "Μελετήστε την επιστημονική {link1}, ξανά, παρακολουθήστε το βίντεο {link2} και απαντήστε στο πιο κάτω ερώτημα τεκμηριώνοντας την άποψή σας.",
          link_1: "Πηγή 4.3",
          link_2: "Impact of climate change on agricultural insect pests",
          url_2: "https://www.youtube.com/watch?v=XBxuuYRDc_w",
          label_1: "Η κλιματική αλλαγή επηρεάζει τους πληθυσμούς των εντόμων;",
        },
        source_442: {
          txt_1: "Μελετήστε την επιστημονική {link1} και απαντήστε στο πιο κάτω ερώτημα.",
          link_1: "Πηγή 4.5",
          label_1: "Σε ποιο θέμα αναφέρεται; Καταγράψετε πληροφορίες που δίνονται.",
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
        argument: "Επιχείρημα 5 για τον Μύθο 4: Η αύξηση της θερμοκρασίας βοηθά τους φτωχούς.",
        question: "Διερευνήσιμο ερώτημα: Η αύξηση της θερμοκρασίας επηρεάζει την οικονομική κατάσταση άπορων ατόμων;",
        source_451: {
          txt_1: "Μελετήστε την {link1} για να απαντήσετε στις ακόλουθες ερωτήσεις.",
          link_1: "ιστοσελίδα της UNHCR",
          label_1: "Τι είναι «Κλιματικοί Πρόσφυγες»;",
          label_2: "Καταγράψετε κάποιους λόγους που αναγκάζουν τους ανθρώπους να γίνουν «κλιματικοί πρόσφυγες»."
        },
        conclusion: "Αφού έχετε μελετήσει τις πιο πάνω επιστημονικές πηγές (ιστοσελίδα της UNHCR), ποια είναι η απάντησή σας στο ερώτημα «Η αύξηση της θερμοκρασίας επηρεάζει την οικονομική κατάσταση άπορων ατόμων;» που σχετίζεται με το επιχείρημα 5 του μύθου 4;",
        extra: {
          txt_1: "Μελετήστε τις πιο κάτω ιστοσελίδες για να απαντήσετε στα παρακάτω ερωτήματα.",
          q_1: "Τι είναι «Κλιματική Δικαιοσύνη»;",
          q_2: "Γιατί είναι θέμα, το οποίο απασχολεί τους πολίτες κάθε χώρας;",
          q_3: "Θεωρείτε ότι η κλιματική αλλαγή είναι κοινωνικό ζήτημα;"
        }
      },
      conclusions: "Με βάση τα τεκμήρια, το/τα συμπέρασμα(τα) σχετικά με το Μύθο 4 Η αύξηση της θερμοκρασίας είναι για καλό» είναι:",
      flicc_label: "Σύμφωνα με τα δεδομένα που συλλέξατε, πού οφείλεται το σφάλμα του μύθου αυτού;",
      sources: [
        {
          name: "Climate Change and Health",
          url: "https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health"
        },
        {
          name: "Πηγή 4.1",
          url: "https://drive.google.com/file/d/1M7JY4bMJNEI95JIOWRnwXgmuk77_L2J2/view?usp=sharing"
        },
        {
          name: "Πηγή 4.2",
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
          name: "Πηγή 4.4",
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
      title: "Κλιματική Αλλαγή",
      subtitle: "Καθοδηγούμενη Διερεύνηση; Μύθο 5",
      myth: "Η ομάδα σας καλείται να διαπραγματευτεί το Μύθο 5 «Δεν υπάρχει συσχέτιση μεταξύ CO₂ και θερμοκρασίας».",
      hypothesis: "Καταγράψτε την υπόθεση / το ερευνητικό σας ερώτημα σχετικά με τον μύθο 5.",
      argument: {
        txt_1: "Σας δίνεται το βασικό επιχείρημα του Μύθου 5 και το ερώτημα που πρέπει να απαντήσετε χρησιμοποιώντας τις δεδομένες επιστημονικές πηγές.",
        argument: "Επιχείρημα για τον Μύθο 5: Η άποψη ότι οι εκπομπές CO₂ είναι κυρίως υπεύθυνες για την παρατηρούμενη υπερθέρμανση του πλανήτη τον 20ο αιώνα είναι παραπλανητική."
      },
      question: "Διερευνήσιμο Ερώτημα: Οι εκπομπές CO₂ επηρεάζουν τη θερμοκρασία του πλανήτη;",
      source_1: {
        txt_1: "Μελετήστε την ακόλουθη πηγή: {link1}",
        txt_2: "Καταγράψετε τις παρατηρήσεις σας."
      },
      exp_1: {
        title: "Επιστημονική Πηγή: Πειραματική διαδικασία",
        question: "Ακολουθήστε τις οδηγίες της πειραματικής διαδικασίας για να απαντήσετε στην ερώτηση: Η αύξηση του CO₂ επηρεάζει τη θερμοκρασία της Γης;",
        formula: "ENGLISH MISSING ------------------------   NB! Acid + Carbonate → happejääk + H₂O + CO₂",
        list_1: {
          title: "Μέσα και Υλικά:",
          list: [
            "2 λάμπες",
            "2 ηλεκτρικά θερμόμετρα",
            "2 γυάλινες φιάλες με πώμα",
            "2 χάρτινους κυλίνδρους",
            "Μαγειρική σόδα",
            "Ξύδι",
            "Χωνί",
            "Ογκομετρικός κύλινδρος",
            "Πλαστικό δοχείο",
            "Κουτάλι",
            "Ψαλίδι",
            "Κολλητική ταινία"
          ]
        },
        list_2: {
          title: "Πειραματική διαδικασία:",
          list: [
            "Τοποθετούμε το καλώδιο του θερμομέτρου στον εσωτερικό χώρο του χάρτινου κυλίνδρου.","Βάζουμε 3 κουταλιές μαγειρικής σόδας στις 2 γυάλινες φιάλες.",
            "Σε ογκομετρικό κύλινδρο μετρούμε 50mL ξύδι.",
            "Κολλούμε στο κάθε γυάλινο δοχείο τον χάρτινο κύλινδρο με το θερμόμετρο του.",
            "Στο ένα δοχείο ρίχνουμε με τη βοήθεια του χωνιού το ξύδι και κλείνουμε το πώμα. Την στιγμή κλείνουμε και το πώμα στο 2ο δοχείο.",
            "Τοποθετούμε δίπλα από κάθε δοχείο μια αναμμένη λάμπα και την αφήνουμε για 30 λεπτά. Στο χρονικό αυτό διάστημα παρακολουθούμε την μεταβολή της θερμοκρασίας σε κάθε περίπτωση και καταγράφουμε τα δεδομένα μας."
          ]
        },
        table_1: {
          label: "Συμπληρώστε τον πίνακα.",
          table: {
            header: [
              { thead: "Παράγοντες που διατηρώ σταθερούς" },
              { thead: "Παράγοντας που μεταβάλλω" },
              { thead: "Παράγοντας που μετρώ" }
            ]
          }
        },
        hypothesis: "Πρόβλεψη:",
        table_2: {
          title: "Καταγράψετε τις θερμοκρασίες",
          txt_1: "Συμπληρώστε τον πίνακα.",
          header: [
            { thead: "Χρόνος: λεπτά" },
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
            ["Δοχείο Α Θερμοκρασία °C", "", "", "", "", "", "", "", "", "", ""],
            ["Δοχείο Β Θερμοκρασία °C", "", "", "", "", "", "", "", "", "", ""]
          ]
        },
        table_3: {
          title: "Καταγραφή δεδομένων",
          txt_1: "Συμπληρώστε τον πίνακα.",
          header: [
            { thead: " " },
            { thead: "ΔΟΧΕΙΟ A" },
            { thead: "ΔΟΧΕΙΟ B" }
          ],
          rows: [
            ["Αρχική Θερμοκρασία (°C)", "", ""],
            ["Τελική Θερμοκρασία (°C)", "", ""],
            ["Μεταβολή Θερμοκρασίας (°C)", "", ""]
          ]
        },
        collected_data: "Παρατηρήσεις:"

      },
      // reliability: {
      //   txt_1: "Palun hinnake järgmise {link1} abil kasutatud infoallikate usaldusväärsust. Kirjutage oma uurimistulemustest kokkuvõte allpool olevasse tabelisse.",
      //   link_1: "tööriista",
      //   url_1: ""
      // },
      conclusion: "Με βάση τα τεκμήρια, το/τα συμπέρασμα(τα) σχετικά με τον μύθο «Δεν υπάρχει συσχέτιση μεταξύ CO₂ και θερμοκρασίας.» είναι:",
      flicc_label: "Σύμφωνα με τα δεδομένα που συλλέξατε, πού οφείλεται το σφάλμα του μύθου αυτού;",
      sources: [
        {
          name: "How Carbon Affects Nearly Everything on Earth – Including Our Future",
          url: "https://www.youtube.com/watch?v=lWEvBLlUa2E"
        }
      ]
    },







    cc_myth6: {
      title: "Κλιματική Αλλαγή",
      subtitle: "Καθοδηγούμενη Διερεύνηση; Μύθο 6",
      myth: "Η ομάδα σας καλείται να διαπραγματευτεί το Μύθο 6 «Οι δράσεις για την κλιματική αλλαγή θα κάνουν τους ανθρώπους φτωχότερους».",
      hypothesis: "Καταγράψτε την υπόθεση / το ερευνητικό σας ερώτημα σχετικά με τον μύθο 6.",
      argument: {
        txt_1: "Σας δίνεται το βασικό επιχείρημα του Μύθου 6 και το ερώτημα που πρέπει να απαντήσετε χρησιμοποιώντας τις δεδομένες επιστημονικές πηγές.",
        argument: "Επιχείρημα για τον Μύθο 6: O περιορισμός της χρήσης των ορυκτών καυσίμων θα εμποδίσει την ανάπτυξη και θα αυξήσει το κόστος ζωής, βλάπτοντας τους φτωχότερους."
      },
      question: "Διερευνήσιμο Ερώτημα: Ο περιορισμός της χρήσης των ορυκτών καυσίμων θα επηρεάσει την ανάπτυξη και το κόστος ζωής, βλάπτοντας τους φτωχότερους;",
      source_txt: "NOT TRANSLATED ---------------------------------------- Ülaltoodud uurimisküsimuse vastuse kontrollimiseks soovitatakse järgmisi allikaid:",
      source_61: {
        txt_1: "Μελετήστε την {link1} και να φέρετε εις πέρας την παρακάτω εργασία.",
        link_1: "Πηγή 6.1",
        label_1: "Καταγράψετε ποια πλεονεκτήματα θα προκύψουν από την αξιοποίηση των ανανεώσιμων πηγών ηλεκτρικής ενέργειας:"
      },
      source_62: {
        txt_1: "Μελετήστε την {link1} και να φέρετε εις πέρας την παρακάτω εργασία. Μελετήστε τον πίνακα, ο οποίος προέρχεται από το {i1}, και αφορά στις κοινωνικοοικονομικές επιδράσεις που θα έχει η μεταβολή των πηγών ενέργειας.",
        link_1: "Πηγή 6.2",
        i_1: "World Economic Situation and Prospects 2020",
        label_1: "Εντοπίστε τις επερχόμενες επιπτώσεις από την αξιοποίηση διαφορετικών πηγών ενέργειας."
      },
      source_63: {
        txt_1: "Μελετήστε την {link1} και να φέρετε εις πέρας την παρακάτω εργασία.",
        link_1: "Πηγή 6.3",
        label_1: "Καταγράψετε τις πληροφορίες που δίνονται σχετικά με τις θέσεις εργασίας που θα προκύψουν από την εκμετάλλευση των ανανεώσιμων πηγών ενέργειας."
      },
      conclusion: "Με βάση τα τεκμήρια, το/τα συμπέρασμα(τα) για τον μύθο «Οι δράσεις για την κλιματική αλλαγή θα κάνουν τους ανθρώπους φτωχότερους.» είναι:",
      flicc_label: "Σύμφωνα με τα δεδομένα που συλλέξατε, πού οφείλεται το σφάλμα του μύθου αυτού;",
      sources: [
        {
          name: "Πηγή 6.1",
          url: "https://drive.google.com/file/d/1lLGM0OZxy3Sm0BvPeHlB7brOrNhZrBRA/view?usp=sharing"
        },
        {
          name: "Πηγή 6.2",
          url: "https://drive.google.com/file/d/1j-al4leaUi28OLKPq9Fj6So8XojxhOjn/view?usp=sharing"
        },
        {
          name: "Πηγή 6.3",
          url: "https://drive.google.com/file/d/1glVgyNAJeN_TyRwjAEAbCYQEHRw3Jwiq/view?usp=sharing"
        }
      ]
    },




    cc_myth7: {
      title: "Κλιματική Αλλαγή",
      subtitle: "Καθοδηγούμενη Διερεύνηση; Μύθο 7",
      myth: "Η ομάδα σας καλείται να διαπραγματευτεί το Μύθο 7 «Το κλίμα της γης πάντα άλλαζε, και τώρα το ίδιο συμβαίνει».",
      hypothesis: "Καταγράψτε την υπόθεση/ το ερευνητικό σας ερώτημα σχετικά με τον μύθο 7.",
      argument: {
        txt_1: "Σας δίνεται το βασικό επιχείρημα του Μύθου 7 και το ερώτημα που πρέπει να απαντήσετε χρησιμοποιώντας τις δεδομένες επιστημονικές πηγές.",
        argument: "Επιχείρημα για τον Μύθο 7: To κλίμα της γης πάντα άλλαζε"
      },
      question: "Ερώτημα: Η θερμοκρασία αυξανόταν με τον ίδιο ρυθμό πάντα;",
      source_txt: "NOT TRANSLATED ------------------------------------- Ülaltoodud uurimisküsimuse vastuse kontrollimiseks on soovitav kasutada järgmisi allikaid:",
      source_71: {
        txt_1: "Παρακολουθήστε το εισαγωγικό βίντεο  {link1} και απαντήστε στην ερώτηση.",
        link_1: "The greenhouse effect and climate change history",
        label_1: "Σε ποιο θέμα αναφέρεται;"
      },
      source_72: {
        txt_1: "Μελετήστε τον {link1} με τη γραφική παράσταση και απαντήστε στην ερώτηση.",
        link_1: "σύνδεσμο",
        label_1: "Παρακολουθήστε τις θερμοκρασίες για κάθε χρονιά. Τι παρατηρείτε;"
      },
      source_73: {
        txt_1: "Μελετήστε την {link1} and perform the task.",
        link_1: "Πηγή 7.1",
        label_1: "Καταγράψτε πληροφορίες που λαμβάνουμε όσον αφορά την αύξηση της θερμοκρασίας."
      },
      table_years: {
        label_1: "Συγκρίνετε τη μεταβολή της θερμοκρασίας ανά εικοσαετία. Πόση αύξηση θερμοκρασίας είχαμε για κάθε εικοσαετία;",
        table: {
          header: [
            { thead: "Χρονιές" },
            { thead: "Μεταβολή Θερμοκρασίας" }
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
      years_max: "Πότε είχαμε τη μεγαλύτερη αύξηση θερμοκρασίας;",
      conclusion: "Με βάση τα τεκμήρια, το/τα συμπέρασμα(τα) σχετικά  με τον μύθο «Το κλίμα της γης πάντα άλλαζε, και τώρα το ίδιο συμβαίνει.» είναι:",
      flicc_label: "Σύμφωνα με τα δεδομένα που συλλέξατε, πού οφείλεται το σφάλμα του μύθου αυτού;",
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
          name: "Πηγή 7.1",
          url: "https://drive.google.com/file/d/19TQRfChWF33c_zgUsPGNzBwa9F-YVH76/view?usp=sharing"
        }
      ]
    }
  }
}