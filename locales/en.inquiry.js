export default {
    inquiry: {
        reliability_table : {
            txt_1: "Palun hinnake järgmise {link1} abil kasutatud infoallikate usaldusväärsust. Kirjutage oma uurimistulemustest kokkuvõte tabelisse.",
            link_1: "tööriista",
            url_1: "https://docs.google.com/document/d/12ABQ5rgwb418f47KKdg1yPQbMUn7n6N0h4fEJLhJzbg/edit?usp=share_link",
            cols: {
              col_1:"Evidence / main conclusions / summary of the information relevant to the hypothesis",
              col_2:"Type and source of evidence",
              col_3:"Reliability rate",
              col_4:"Comments"
            },
            add_row: "ADD ROW"
        },
        variables_table: {
            header: [
              {thead:"Kontrollmuutujad", tsubhead:"(need, mida üritatakse hoida katse jooksul muutumatutena)"},
              {thead:"Sõltumatu muutuja", tsubhead:"(see, mida muudetakse)"},
              {thead:"Sõltuv muutuja", tsubhead:"(see mida sekkumise tulemusena mõõdetakse)"},
            ]
          },


        cc_open: {
            title: "Climate change",
            subtitle: "Open inquiry",
            choose: "Choose a myth",
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
            q2_txt2: "Tegevusplaan (palun märkige, milliste tegevustega olete kogu meeskonnana kaasatud ja mille puhul kavatsete töökohustusi jagada, antud juhul pange palun kirja, kes mille eest vastutab):",
            
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

        "cc-myth1":{
            "back": "Back",
            "title": "Climate change",
            "subtitle": "Guided inquiry; Myth 1",
            "myth": "“The extinction of species is a natural process. Mass extinctions of species have always occurred”.",
            "hypothesis": "Write down your testable hypothesis concerning Myth 1:",
            "argument": {
                "txt-1": "You are given the basic argument of Myth 1 and the question you must answer using the given scientific sources.",
                "argument": "Argument of Myth 1: The mass extinction of species is a natural process."
            },
            "question": {
                "question": "Question: Is the mass extinction of species a natural process?",
                "txt-1": "Study {link1} and watch the video {link2}. Then, answer the following questions.",
                "link-1": "source 1.1",
                "link-2": "Climate Change: Why are thousands of species facing extinction? - BBC News."
            },
            "q-1": "1. What do we mean by  „mass extinction”?",
            "q-2": "2. How many mass extinctions do you find happening?",
            "q-3": "3. What were the causes of the mass extinctions?",
            "q-4": "4. What were the consequences of the mass extinctions?",
            "q-5": "5. Why should we worry about mass extinctions now?",
            "q-6": {
                "txt-1": "Study {link1} and answer the following question.",
                "link-1": "source 1.2",
                "q-6": "6. What is the reason for the mass killing of penguins?"
            },
            "q-7": {
                "txt-1": "Please use {link1} to assess the reliability of the sources used.",
                "link-1": "this tool",
                "q-7": "7. Write a summary of your findings in the following table."
            },
            "q-8": "8. Based on the given evidence, our conclusion(s) concerning the myth “The extinction of species is a natural process. Mass extinctions of species have always occurred.” is (are):",
            "q-9": "According to the data you collected, where do you owe the error of this myth?",
            "flicc-sources": [
                {
                    "name": "Source 1.1",
                    "url": "http://mde-didaktiki.biol.uoa.gr/mde7/plexida/ordovician.html"
                },
                {
                    "name": "Video",
                    "url": "https://www.youtube.com/watch?v=nho73BtDQtE"
                },
                {
                    "name": "Source 1.2",
                    "url": "https://docs.google.com/document/d/e/2PACX-1vTxM7SnO9h9ZC8wxVMEVwU8Ha2_AKh99vbYcBO-g8BxJy9w5oFeb5lUoxUbvTQnq35mtT9Fi7bCSf67/pub"
                }
            ]
        }
    }
}