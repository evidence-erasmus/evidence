<template>
        
        <section class="e-article print:not-prose max-w-6xl" :lang="locale" style="hyphens: auto;">
            
            <h1>{{ t('title') }}</h1>

            <h3>{{ t('videos-title') }}</h3>

            <div class="e-card grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <UiYoutube :video="locale === 'et' ? 'pCEpRmtCwzQ' : 's7FKnMC_cIU'"  />
                    <UiYoutube :video="locale === 'et' ? 'vTKzVpmN-ws' : 'Jy3sDnKAg0Q'"  />
            </div>

            <div class="e-card mt-10">
                <table class="mt-4">
                   
                    <tr class="leading-none border-b-4 border-double">
                        <th class="w-1/2 pb-6">
                            {{ t('table1.thead.th1') }}
                        </th>
                        <th class="w-1/3 pb-6">
                            {{ t('table1.thead.th2') }}
                        </th>
                        <th class="pb-6">
                            {{ t('table1.thead.th3') }}
                        </th>
                    </tr>
                
                    <tbody>
                        <tr>
                            <td>
                                {{ t('table1.row1.c1') }}
                            </td>
                            <td>
                                <h4 class="mt-2">
                                    {{ t('table1.row1.c2.title') }}
                                </h4>
                                <ul >
                                    <li>
                                        <a :href="t('table1.row1.c2.source1.link')" rel="noopener noreferrer" target="_blank">
                                                <b>{{ t('table1.row1.c2.source1.txt') }}</b>
                                        </a>
                                        <br />
                                        <i18n-t tag="span" keypath="table1.row1.c2.source1.txt2" scope="parent">
                                            <template #link1>
                                                <a :href="t('table1.row1.c2.source1.link2')" target="_blank" rel="noopener noreferrer">{{ t('table1.row1.c2.source1.txt3') }}</a>
                                            </template>
                                        </i18n-t>
                                        <!-- <p>
                                            <a href="https://youtu.be/Jy3sDnKAg0Q" target="_blank" rel="noopener noreferrer">
                                                <Icon name="mdi:youtube-tv" /> How to Google Scholar
                                            </a>
                                            <br />
                                            <a href="https://youtu.be/Jy3sDnKAg0Q" target="_blank" rel="noopener noreferrer">
                                                <Icon name="mdi:youtube-tv" /> How to Google Scholar
                                            </a>
                                        </p> -->
                                    </li>
                                    <li >
                                        <a :href="t('table1.row1.c2.source2.link')" rel="noopener noreferrer" target="_blank">
                                            <b>{{ t('table1.row1.c2.source2.txt') }}</b>
                                        </a>
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table1.row2.c1') }}
                            </td>
                            <td>
                                <ul class="leading-tight">
                                    <li>
                                        <a :href="t('table1.row2.c2.source1.link')" target="_blank" rel="noopener noreferrer" >
                                            {{ t('table1.row2.c2.source1.txt') }}
                                        </a>
                                    </li>
                                    <li>
                                        <a :href="t('table1.row2.c2.source2.link')" target="_blank" rel="noopener noreferrer">
                                            {{ t('table1.row2.c2.source2.txt') }}
                                        </a>
                                    </li>
                                    <li>
                                        <a :href="t('table1.row2.c2.source3.link')" target="_blank" rel="noopener noreferrer">
                                            {{ t('table1.row2.c2.source3.txt') }}
                                        </a>
                                    </li>
                                    <li>
                                        <a :href="t('table1.row2.c2.source4.link')" target="_blank" rel="noopener noreferrer">
                                            {{ t('table1.row2.c2.source4.txt') }}
                                        </a>
                                    </li>
                                    <li v-if="locale === 'sv'">
                                        <a :href="t('table1.row2.c2.source5.link')" target="_blank" rel="noopener noreferrer">
                                            {{ t('table1.row2.c2.source5.txt') }}
                                        </a>
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table1.row3.c1') }}
                            </td>
                            <td>
                                <ul class="leading-tight">
                                    <li>
                                        <a :href="t('table1.row3.c2.source1.link')" target="_blank" rel="noopener noreferrer">
                                            {{ t('table1.row3.c2.source1.txt') }}
                                        </a>
                                    </li>
                                    <li>
                                        <a :href="t('table1.row3.c2.source2.link')" target="_blank" rel="noopener noreferrer">
                                            {{ t('table1.row3.c2.source2.txt') }}
                                        </a>
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table1.row4.c1') }}
                            </td>
                            <td>
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table1.row5.c1') }}
                            </td>
                            <td>
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table1.row6.c1') }}
                            </td>
                            <td>
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:close-thick" size="32" class="text-red-600" />
                                    ...
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ul class="leading-tight">
                                    <li>
                                        {{ t('table1.row7.c1.li1') }}
                                    </li>
                                    <li>
                                        {{ t('table1.row7.c1.li2') }}
                                    </li>
                                    <li>
                                        {{ t('table1.row7.c1.li3') }}
                                    </li>
                                    <li>
                                        {{ t('table1.row7.c1.li4') }}
                                    </li>
                                    <li>
                                        {{ t('table1.row7.c1.li5') }}
                                    </li>
                                </ul>
                            </td>
                            <td>
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:close-thick" size="32" class="text-red-600" />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>




            <div class="e-card mt-8">
                <table class="mt-4">
                    <tbody>
                        <tr class="leading-tight border-b-4 border-double">
                            <th class="pb-4 pr-2 w-1/3">
                                {{ t('table2.thead.th1') }}
                                <br />
                                <span class="font-normal italic">{{ t('table2.thead.th12') }}</span>
                            </th>
                            <th class="w-1/2">
                                {{ t('table2.thead.th2') }}
                            </th>
                            <th>
                                {{ t('table2.thead.th3') }}
                            </th>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table2.row1.c1') }}
                            </td>
                            <td>
                                {{ t('table2.row1.c2') }}
                                <br />
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table2.row2.c1') }}
                            </td>
                            <td>
                                {{ t('table2.row2.c2') }}
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table2.row3.c1') }}
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="e-card mt-8">
                <table class="mt-4">
                    <tbody>
                        <tr class="leading-tight border-b-4 border-double">
                            <th class="pb-6">
                                {{ t('table3.thead.th1') }}
                            </th>
                            <th class="pb-6">
                                {{ t('table3.thead.th2') }}
                            </th>
                            <th class="pb-6">
                                {{ t('table3.thead.th3') }}
                            </th>
                        </tr>
                        <tr>
                            <td rowspan="3">
                                {{ t('table3.row1.c1') }}
                            </td>
                            <td class="pl-0">
                                {{ t('table3.row1.c2') }}
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table3.row2.c2') }}
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                    ...
                                    <Icon name="mdi:help" size="32" class="text-gray-400" />
                                </span>
                            </td>
                        </tr>
                        <tr class="border-b-4 border-double">
                            <td>
                                {{ t('table3.row3.c2') }}
                            </td>
                            <td>
                                <Icon name="mdi:close-thick" size="32" class="text-red-500" />
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">
                                {{ t('table3.row4.c1') }}
                                <br />
                                {{ t('table3.row4.c12') }}
                            </td>
                            <td class="pl-0">
                                {{ t('table3.row4.c2') }}
                            </td>
                            <td>
                                <span>
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table3.row5.c2') }}
                            </td>
                            <td>
                                <Icon name="mdi:help" size="32" class="text-gray-400" />
                            </td>
                        </tr>
                        <tr class="border-b-4 border-double">
                            <td>
                                {{ t('table3.row6.c2') }}
                            </td>
                            <td>
                                <span class="whitespace-nowrap">
                                    <Icon name="mdi:close-thick" size="32" class="text-red-500" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="7">
                                {{ t('table3.row7.c1') }}
                            </td>
                            <td class="pl-0">
                                {{ t('table3.row7.c2') }}
                            </td>
                            <td>
                                <span>
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table3.row8.c2') }}
                            </td>
                            <td>
                                <span>
                                    <Icon name="mdi:star" size="32" class="text-yellow-400" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table3.row9.c2') }}
                            </td>
                            <td>
                                <Icon name="mdi:star" size="32" class="text-yellow-400" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table3.row10.c2') }}
                            </td>
                            <td>
                                <Icon name="mdi:close-thick" size="32" class="text-red-500" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table3.row11.c2') }}
                            </td>
                            <td>
                                <Icon name="mdi:close-thick" size="32" class="text-red-500" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table3.row12.c2') }}
                            </td>
                            <td>
                                <Icon name="mdi:close-thick" size="32" class="text-red-500" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {{ t('table3.row13.c2') }}
                            </td>
                            <td>
                                <Icon name="mdi:close-thick" size="32" class="text-red-500" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                <b>{{ t('source.txt') }}</b> <a :href="t('source.link')" target="_blank" rel="noopener noreferrer">{{ t('source.link') }}</a>
            </p>

        </section>

</template>




<i18n lang="json">
{
    "en" : {
        "source": {
            "txt": "Source:",
            "link": "https://averillpark.k12.ny.us/web-site-evaluation"
        },
        "title": "Reliability assessment guidelines",
        "videos-title": "Videos on assessing sources' reliability and using Google Scholar:",
        "table1": {
            "thead": {
                "th1": "What is the type of the source?",
                "th2": "How to find?",
                "th3": "Reliability rate"
            },
            "row1": {
                "c1": "Peer-reviewed research papers, especially meta-studies, systematic literature reviews and similar are at the top of reliability hierarchy. They are followed by large scale studies with big sample sizes or having data form different countries/research institutions. Though, be careful with the study papers having a very limited sample size - try to find other research papers that confirm their findings.",
                "c2": {
                    "title": "Research databases:",
                    "source1" : {
                        "txt": "Google Scholar",
                        "link": "https://scholar.google.com/",
                        "txt2": "read more about {link1}",
                        "link2": "#googleScholar",
                        "txt3": "how to use Google Scholar"
                    },
                    "source2": {
                        "txt": "Medical studies’ database:",
                        "link": "https://pubmed.ncbi.nlm.nih.gov"
                    }
                }
            },
            "row2": {
                "c1": "Statistics / information published by relevant and trustable (inter)national organisations (.org): WHO, United Nations, Eurostat, national research academies, NASA, The Royal Society, websites of well-known universities, etc.",
                "c2": {
                    "source1": {
                        "txt": "Eurostat",
                        "link": "https://ec.europa.eu/eurostat/web/main/data/database"
                    },
                    "source2": {
                        "txt": "UNdata",
                        "link": "http://data.un.org/"
                    },
                    "source3": {
                        "txt": "WHO data",
                        "link": "https://www.who.int/data"
                    },
                    "source4": {
                        "txt": "National Academies Press",
                        "link": "https://nap.nationalacademies.org/"
                    },
                    "source5": {
                        "txt": "NE.se (Swedish database)",
                        "link": "https://www.ne.se/"
                    }
                }
            },
            "row3": {
                "c1": "Well-known encyclopedias",
                "c2": {
                    "source1": {
                        "txt": "Wikipedia",
                        "link": "https://www.wikipedia.org/"
                    },
                    "source2": {
                        "txt": "Britannica",
                        "link": "https://www.britannica.com/"
                    }
                }
            },
            "row4": {
                "c1": "Governmental websites (in nations with elected, democratic governments) (.gov)"
            },
            "row5": {
                "c1": "Popular science books/magazines published by well-known experts in an area (cited sources are traceable)"
            },
            "row6": {
                "c1": "Reputable newspapers who use fact check, other media releases of well-known experts in an area."
            },
            "row7": {
                "c1": {
                    "li1": "Life style magazines",
                    "li2": "Web-sites of business companies",
                    "li3": "Personal blogs, vlogs, etc.",
                    "li4": "Politically driven sources (e.g. newspapers driven by clear political agenda - especially far right and and far left)",
                    "li5": "Social media posts, etc."
                }
            }
        },
        "table2": {
            "thead": {
                "th1": "Who is the author (if any)?",
                "th12": "(Who is behind this information?)",
                "th2": "How to detect?",
                "th3": "Reliability rate"
            },
            "row1": {
                "c1": "If a scientist / researcher",
                "c2": "Are his/her credits (affiliation, educational degrees, publications, awards as claimed) traceable? (E.g. using GoogleScholar, or a nation database of scientists; Estonian researchers can be found at www.etis.ee)",
                "c22": "Has (s)he expertise in a given area?"
            },
            "row2": {
                "c1": "If a well-known expert in a given area",
                "c2": "Are his/her credits (affiliation, educational degrees, publications, awards as claimed) traceable?"
            },
            "row3": {
                "c1": "If an organisation"
            }
        },
        "table3": {
            "thead": {
                "th1": "Nature of the content",
                "th2": "Indicators",
                "th3": "Reliability rate"
            },
            "row1": {
                "c1": "Publisher’s relationship on the topic",
                "c2": "Balanced / neutral"
            },
            "row2": {
                "c2":"Publisher is sponsored by a trusted source (e.g. European Commission, etc.)"
            },
            "row3": {
                "c2":"Clearly biased or favoring a position for a purpose"
            },
            "row4": {
                "c1": "Date",
                "c12": "NB! Not all outdated sources must be unreliable - in case they are often cited means, that they have a big impact.",
                "c2":"Recently published or revised"
            },
            "row5": {
                "c2": "Outdated"
            },
            "row6": {
                "c2": "No date listed"
            },
            "row7": {
                "c1": "Text credibility",
                "c2": "The purpose is to inform or teach"
            },
            "row8": {
                "c2": "The tone is convincing, but not pushing."
            },
            "row9": {
                "c2": "The text has specific facts and details to support the ideas"
            },
            "row10": {
                "c2": "The purpose is to entertain"
            },
            "row11": {
                "c2": "The purpose is to persuade, the text is emotionally loaded"
            },
            "row12": {
                "c2": "The purpose is to scare"
            },
            "row13": {
                "c2": "The purpose is to sell something"
            }
        }
    },




    
    "el" : {
        "source": {
            "txt": "Source:",
            "link": "https://averillpark.k12.ny.us/web-site-evaluation"
        },
        "title": "Reliability assessment guidelines",
        "videos-title": "Videos on assessing sources' reliability and using Google Scholar:",
        "table1": {
            "thead": {
                "th1": "Ποιος είναι ο τύπος της πηγής;",
                "th2": "Πώς να την βρείτε;",
                "th3": "Αξιοπιστία"
            },
            "row1": {
                "c1": "Ερευνητικές εργασίες με αξιολογήσεις",
                "c2": {
                    "title": "Ερευνητικές βάσεις δεδομένων:",
                    "source1" : {
                        "txt": "Google Scholar",
                        "link": "https://scholar.google.com/",
                        "txt2": "read more about {link1}",
                        "link2": "#googleScholar",
                        "txt3": "how to use Google Scholar"
                    },
                    "source2": {
                        "txt": "Βάση δεδομένων ιατρικών μελετών:",
                        "link": "https://pubmed.ncbi.nlm.nih.gov"
                    }
                }
            },
            "row2": {
                "c1": "Στατιστικά στοιχεία/πληροφορίες που δημοσιεύονται από σχετικούς και αξιόπιστους (διεθνείς) οργανισμούς: WHO, Ηνωμένα Έθνη, Eurostat, NASA, πανεπιστήμια κ.λπ.",
                "c2": {
                    "source1": {
                        "txt": "Eurostat",
                        "link": "https://ec.europa.eu/eurostat/web/main/data/database"
                    },
                    "source2": {
                        "txt": "UNdata",
                        "link": "http://data.un.org/"
                    },
                    "source3": {
                        "txt": "WHO data",
                        "link": "https://www.who.int/data"
                    },
                    "source4": {
                        "txt": "National Academies Press",
                        "link": "https://nap.nationalacademies.org/"
                    },
                    "source5": {
                        "txt": "NE.se (Σουηδική βάση δεδομένων)",
                        "link": "https://www.ne.se/"
                    }
                }
            },
            "row3": {
                "c1": "Γνωστές εγκυκλοπαίδειες",
                "c2": {
                    "source1": {
                        "txt": "Wikipedia",
                        "link": "https://www.wikipedia.org/"
                    },
                    "source2": {
                        "txt": "Britannica",
                        "link": "https://www.britannica.com/"
                    }
                }
            },
            "row4": {
                "c1": "Κυβερνητικές ιστοσελίδες (σε έθνη με εκλεγμένες, δημοκρατικές κυβερνήσεις) (.gov)"
            },
            "row5": {
                "c1": "Δημοφιλή επιστημονικά βιβλία / περιοδικά που εκδίδονται από γνωστούς ειδικούς σε ένα τομέα (οι πηγές που αναφέρονται είναι ανιχνεύσιμες)"
            },
            "row6": {
                "c1": "Έγκυρες εφημερίδες, οι οποίες  χρησιμοποιούν επαλήθευση δεδομένων, άλλες δημοσιεύσεις από γνωστούς εμπειρογνώμονες σε ένα πεδίο."
            },
            "row7": {
                "c1": {
                    "li1": "Περιοδικά Lifestyle",
                    "li2": "Ιστοσελίδες επιχειρηματικών εταιρειών",
                    "li3": "Προσωπικά ιστολόγια, vlog κ.λπ.",
                    "li4": "Πολιτικές πηγές (π.χ. εφημερίδες που βασίζονται σε σαφή πολιτική ατζέντα - ιδιαίτερα ακροδεξιά και ακροαριστερά)",
                    "li5": "Αναρτήσεις στα μέσα κοινωνικής δικτύωσης κ.λπ."
                }
            }
        },
        "table2": {
            "thead": {
                "th1": "Ποιος είναι ο συγγραφέας (αν υπάρχει);",
                "th12": "",
                "th2": "Πώς να τον εντοπίσετε;",
                "th3": "Αξιοπιστία"
            },
            "row1": {
                "c1": "Επιστήμονας / ερευνητής",
                "c2": "Είναι ανιχνεύσιμο το επιστημονικό ου προφίλ (συνεργασίες, πτυχία, ημοσιεύσεις, βραβεία) όπως ισχυρίζεται; Π.χ. χρησιμοποιώντας το GoogleScholar Μπορείτε επίσης να βρείτε",
                "c22": "Has (s)he expertise in a given area?"
            },
            "row2": {
                "c1": "Γνωστός ειδικός σε έναν δεδομένο τομέα (εμπειρογνώμονας)",
                "c2": "Είναι ανιχνεύσιμο το επιστημονικό του προφίλ (συνεργασίες, πτυχία εκπαίδευση, δημοσιεύσεις, βραβεία) όπως ισχυρίζεται;"
            },
            "row3": {
                "c1": "If an organisation"
            }
        },
        "table3": {
            "thead": {
                "th1": "Φύση περιεχομένου",
                "th2": "Δείκτες",
                "th3": "Αξιοπιστία"
            },
            "row1": {
                "c1": "Σχέση εκδότη για το θέμα",
                "c2": "Ισορροπημένη ή ουδέτερη"
            },
            "row2": {
                "c2":"Ο εκδότης χρηματοδοτείται από αξιόπιστη πηγή"
            },
            "row3": {
                "c2":"Σαφώς προκατειλημμένος ή ευνοϊκός για μια θέση για κάποιο σκοπό"
            },
            "row4": {
                "c1": "Ημερομηνία",
                "c12": "NB! Not all outdated sources must be unreliable - in case they are often cited means, that they have a big impact.",
                "c2":"Πρόσφατα δημοσιεύτηκε ή αναθεωρήθηκε"
            },
            "row5": {
                "c2": "Απαρχαιωμένο"
            },
            "row6": {
                "c2": "Δεν αναφέρεται ημερομηνία"
            },
            "row7": {
                "c1": "Αξιοπιστία κειμένου",
                "c2": "Σκοπός είναι η ενημέρωση"
            },
            "row8": {
                "c2": "Ο τόνος είναι πειστικός, αλλά όχι πιεστικός."
            },
            "row9": {
                "c2": "Το κείμενο έχει συγκεκριμένα στοιχεία και λεπτομέρειες για την υποστήριξη των ιδεών."
            },
            "row10": {
                "c2": "The purpose is to entertain"
            },
            "row11": {
                "c2": "Σκοπός είναι να πείσει και το κείμενο είναι συναισθηματικά φορτωμένο"
            },
            "row12": {
                "c2": "The purpose is to scare"
            },
            "row13": {
                "c2": "Ο σκοπός είναι να πουλήσει"
            }
        }
    },










    "et" : {
        "source": {
            "txt": "Allikas:",
            "link": "https://averillpark.k12.ny.us/web-site-evaluation"
        },
        "title": "Juhend, kuidas hinnata info usaldusväärsust",
        "videos-title": "Google Scholar’i kasutamise õppevideod",
        "table1": {
            "thead": {
                "th1": "Millise allikaga on tegemist?",
                "th2": "Kuidas leida?",
                "th3": "Usaldusväärsuse määr"
            },
            "row1": {
                "c1": "Eelretsenseeritud teadusartiklid Tasub läbi lugeda sisukokkuvõte ning vaadata tsiteeringute arvu (NB! uutel artiklitel võivad puududa). Kõige kõrgemal astmel on usaldusväärsuse mõttes metauuringud ning teadusartiklite süstemaatilised kirjalduse ülevaated eelretsenseeritud ajakirjades.",
                "c2": {
                    "title": "Teadusliku uurimistöö andmebaasid:",
                    "source1": {
                        "txt": "Google Scholar",
                        "link": "https://scholar.google.com/",
                        "txt2": "Loe kuidas {link1}",
                        "link2": "#googleScholar",
                        "txt3": "kasutada Google Scholarit"
                    },
                    "source2": {
                        "txt": "Meditsiiniuuringute andmebaas:",
                        "link": "https://pubmed.ncbi.nlm.nih.gov"
                    }
                }
            },
            "row2": {
                "c1": "Statistika / info avaldatud asjakohaste ja usaldusväärsete rahvusvaheliste või rahvuslike organisatsioonide poolt (domeeni laiend: .org - viimane ei taga aga, et kõik sellelõpulised veebilehed on usaldusväärsed). WHO, Ühinenud Rahvaste Organisatsioon, ÜRO (United Nations, UN), NASA, National Academies of Science ning  tuntud ülikoolide veebilehed jms.",
                "c2": {
                    "source1": {
                        "txt": "Eurostat",
                        "link": "https://ec.europa.eu/eurostat/web/main/data/database"
                    },
                    "source2": {
                        "txt": "UNdata",
                        "link": "http://data.un.org/"
                    },
                    "source3": {
                        "txt": "WHO data",
                        "link": "https://www.who.int/data"
                    },
                    "source4": {
                        "txt": "National Academies Press",
                        "link": "https://nap.nationalacademies.org/"
                    }
                }
            },
            "row3": {
                "c1": "Tuntud entsüklopeediad",
                "c2": {
                    "source1": {
                        "txt": "Wikipedia",
                        "link": "https://www.wikipedia.org/"
                        // kindlasti mõelda siinkohal ingliskeelset kui kõige rikkalikumat ning enim faktikontrollitud Wikipedia versiooni
                    },
                    "source2": {
                        "txt": "Britannica",
                        "link": "https://www.britannica.com/"
                    }
                }
            },
            "row4": {
                "c1": "Riiklikud veebilehed (kuuluvad demokraatlikele riikidele, milles toimuvad vabad valimised) (ingliskeelsetes maades sageli domeeni lõpp: .gov)"
            },
            "row5": {
                "c1": "Populaarteaduslikud väljaanded antud valdkonna  ekspertidelt. Viidatakse algallikat ning see on kirjelduse põhjal tuvastatav."
            },
            "row6": {
                "c1": "Mainekad ajalehed, mis kasutavad faktikontrolli. Muud meediaväljalasked antud valdkonnas tuntud ekspertidelt."
            },
            "row7": {
                "c1": {
                    "li1": "Elustiili väljaanded.",
                    "li2": "Äriettevõtete veebilehed.",
                    "li3": "Isiklikud blogid, vlogid jms.",
                    "li4": "Poliitiliselt ja ideoloogiliselt  kallutatud väljaanded (N: ajalehed, mis on kantud äärmuslikust agendast).",
                    "li5": "Sotsiaalmeedia postitused."
                }
            }
        },
        "table2": {
            "thead": {
                "th1": "Kes on autor (kui on viidatud)?",
                "th12": "",
                "th2": "Kuidas tuvastada?",
                "th3": "Usaldusväärsuse määr"
            },
            "row1": {
                "c1": "Teadlane / uurija",
                "c2": "Kas tema saavutused on tuvastavad (väidetud amet ja organisatsioon, haridustase, publikatsioonid, auhinnad)? N: kasutada GoogleScholar-it, Eesti teadlaste kohta leiab infot: www.etis.ee",
                "c22": ""
            },
            "row2": {
                "c1": "Antud valdkonna tuntud ekspert",
                "c2": "Kas tema saavutused on tuvastavad (väidetud amet ja organisatsioon / asutus, haridustase, publikatsioonid, auhinnad)?"
            },
            "row3": {
                "c1": "" // If an organisation
            }
        },
        "table3": {
            "thead": {
                "th1": "Teksti olemus",
                "th2": "Indikaatorid",
                "th3": "Usaldusväärsuse määr"
            },
            "row1": {
                "c1": "Avaldaja seos teemaga",
                "c2": "Tasakaalustatud / neutraalne"
            },
            "row2": {
                "c2":"Rahastaja on usaldusväärne (riik, tuntud rahvusvaheline organisatsioon; N: väljaande valmimist on rahastanud Euroopa Sotsiaalarengu Fond)"
            },
            "row3": {
                "c2":"Selgelt kallutatud, eirab üldtunnustatud tõekspidamisi."
            },
            "row4": {
                "c1": "Väljaandmise aeg",
                "c12": "",
                "c2":"Hiljuti avaldatud või ülevaadatud"
            },
            "row5": {
                "c2": "Aegunud (nõuab lisakontrolli: mitte iga rohkem kui paari aasta tagune väljaanne pole kaotanud oma pädevust)"
            },
            "row6": {
                "c2": "Pole võimalik tuvastada"
            },
            "row7": {
                "c1": "Teksti tõepärasus",
                "c2": "Eesmärgiks on informeerida"
            },
            "row8": {
                "c2": "Toon on veenev, kuid mitte pealetükkiv"
            },
            "row9": {
                "c2": "Tekst sisaldab spetsiifilisi fakte ja detaile, et toetada väljakäidud ideid"
            },
            "row10": {
                "c2": "The purpose is to entertain"
            },
            "row11": {
                "c2": "Eesmärgiks on veenda, tekst on emotsionaalselt laetud"
            },
            "row12": {
                "c2": "Eesmärk on hirmutada"
            },
            "row13": {
                "c2": "Eesmärk on midagi müüa"
            }
        }
    },
    "pt" : {
        "source": {
            "txt": "Fontes:",
            "link": "https://averillpark.k12.ny.us/web-site-evaluation"
        },
        "title": "Como avaliar a fiabilidade das fontes de informação: Tutorial",
        "videos-title": "Videos on assessing sources' reliability and using Google Scholar:",
        "table1": {
            "thead": {
                "th1": "Tipo de fonte de informação",
                "th2": "Onde encontrar?",
                "th3": "Nível de fiabilidade"
            },
            "row1": {
                "c1": "Artigos científicos revistos por pares",
                "c2": {
                    "title": "Base de dados:",
                    "source1" : {
                        "txt": "Google Académico",
                        "link": "https://scholar.google.com/",
                        "txt2": "read more about {link1}",
                        "link2": "#googleScholar",
                        "txt3": "how to use Google Scholar"
                    },
                    "source2": {
                        "txt": "Medical studies’ database:",
                        "link": "https://pubmed.ncbi.nlm.nih.gov"
                    }
                }
            },
            "row2": {
                "c1": "Estatísticas / Informação publicada por organizações (inter)nacionais relevantes e de confiança (.org): INE, WHO, United Nations, Eurostat, Universidades, etc.",
                "c2": {
                    "source1": {
                        "txt": "Eurostat",
                        "link": "https://ec.europa.eu/eurostat/web/main/data/database"
                    },
                    "source2": {
                        "txt": "UNdata",
                        "link": "http://data.un.org/"
                    },
                    "source3": {
                        "txt": "WHO data",
                        "link": "https://www.who.int/data"
                    },
                    "source4": {
                        "txt": "National Academies Press",
                        "link": "https://nap.nationalacademies.org/"
                    },
                    "source5": {
                        "txt": "NE.se (Swedish database)",
                        "link": "https://www.ne.se/"
                    }
                }
            },
            "row3": {
                "c1": "Enciclopédias",
                "c2": {
                    "source1": {
                        "txt": "Wikipedia",
                        "link": "https://www.wikipedia.org/"
                    },
                    "source2": {
                        "txt": "Britannica",
                        "link": "https://www.britannica.com/"
                    }
                }
            },
            "row4": {
                "c1": "Sites governamentais (em países com governos eleitos democraticamente) (.gov)"
            },
            "row5": {
                "c1": "Livros e revistas de divulgação científica, artigos escritos por especialistas (as fontes que citam são identificáveis)."
            },
            "row6": {
                "c1": "Jornais de referência e outros media que fazem prova de factos ou que usam especialistas conhecidos."
            },
            "row7": {
                "c1": {
                    "li1": "Revistas",
                    "li2": "Sites de empresas",
                    "li3": "Blogs pessoais, Vlogs, etc",
                    "li4": "Fontes com agenda política",
                    "li5": "Posts em redes sociais, etc."
                }
            }
        },
        "table2": {
            "thead": {
                "th1": "Quem é o autor?",
                "th12": "(se identificado)",
                "th2": "Como detetar?",
                "th3": "Nível de fiabilidade"
            },
            "row1": {
                "c1": "Cientista / investigador",
                "c2": "É possível identificar  a sua filiação académica, grau académico e  publicações?",
                "c22": ""
            },
            "row2": {
                "c1": "Especialista conhecido",
                "c2": "É possível identificar  a sua filiação académica ou organizacional, grau académico e  publicações?"
            },
            "row3": {
                "c1": "If an organisation"
            }
        },
        "table3": {
            "thead": {
                "th1": "Natureza do conteúdo",
                "th2": "Indicadores",
                "th3": "Nível de fiabilidade"
            },
            "row1": {
                "c1": "Relação do editor com o tópico",
                "c2": "Equilibrado ou neutro"
            },
            "row2": {
                "c2":"Editor é financiado por uma fonte de confiança"
            },
            "row3": {
                "c2":"Claramente tendencioso ou favorecendo uma posição com um propósito"
            },
            "row4": {
                "c1": "Data",
                "c12": "",
                "c2":"Publicado ou revisto recentemente"
            },
            "row5": {
                "c2": "Desatualizado"
            },
            "row6": {
                "c2": "Sem data indicada"
            },
            "row7": {
                "c1": "Text credibility",
                "c2": "A finalidade é informar"
            },
            "row8": {
                "c2": "O tom é convincente, mas não forçado."
            },
            "row9": {
                "c2": "O texto tem fatos e detalhes específicos para apoiar as ideias"
            },
            "row10": {
                "c2": "O objetivo é persuadir e o texto está carregado de emoção"
            },
            "row11": {
                "c2": "A finalidade é vender"
            },
            "row12": {
                "c2": ""
            },
            "row13": {
                "c2": ""
            }
        }
    },
    "sv" : {
        "source": {
            "txt": "Source:",
            "link": "https://averillpark.k12.ny.us/web-site-evaluation"
        },
        "title": "Reliability assessment guidelines",
        "videos-title": "Videos on assessing sources' reliability and using Google Scholar:",
        "table1": {
            "thead": {
                "th1": "What is the type of the source?",
                "th2": "How to find?",
                "th3": "Reliability rate"
            },
            "row1": {
                "c1": "Peer-reviewed research papers, especially meta-studies, systematic literature reviews and similar are at the top of reliability hierarchy. They are followed by large scale studies with big sample sizes or having data form different countries/research institutions. Though, be careful with the study papers having a very limited sample size - try to find other research papers that confirm their findings.",
                "c2": {
                    "title": "Research databases:",
                    "source1" : {
                        "txt": "Google Scholar",
                        "link": "https://scholar.google.com/",
                        "txt2": "read more about {link1}",
                        "link2": "#googleScholar",
                        "txt3": "how to use Google Scholar"
                    },
                    "source2": {
                        "txt": "Medical studies’ database:",
                        "link": "https://pubmed.ncbi.nlm.nih.gov"
                    }
                }
            },
            "row2": {
                "c1": "Statistics / information published by relevant and trustable (inter)national organisations (.org): WHO, United Nations, Eurostat, national research academies, NASA, The Royal Society, websites of well-known universities, etc.",
                "c2": {
                    "source1": {
                        "txt": "Eurostat",
                        "link": "https://ec.europa.eu/eurostat/web/main/data/database"
                    },
                    "source2": {
                        "txt": "UNdata",
                        "link": "http://data.un.org/"
                    },
                    "source3": {
                        "txt": "WHO data",
                        "link": "https://www.who.int/data"
                    },
                    "source4": {
                        "txt": "National Academies Press",
                        "link": "https://nap.nationalacademies.org/"
                    },
                    "source5": {
                        "txt": "NE.se (Swedish database)",
                        "link": "https://www.ne.se/"
                    }
                }
            },
            "row3": {
                "c1": "Well-known encyclopedias",
                "c2": {
                    "source1": {
                        "txt": "Wikipedia",
                        "link": "https://www.wikipedia.org/"
                    },
                    "source2": {
                        "txt": "Britannica",
                        "link": "https://www.britannica.com/"
                    }
                }
            },
            "row4": {
                "c1": "Governmental websites (in nations with elected, democratic governments) (.gov)"
            },
            "row5": {
                "c1": "Popular science books/magazines published by well-known experts in an area (cited sources are traceable)"
            },
            "row6": {
                "c1": "Reputable newspapers who use fact check, other media releases of well-known experts in an area."
            },
            "row7": {
                "c1": {
                    "li1": "Life style magazines",
                    "li2": "Web-sites of business companies",
                    "li3": "Personal blogs, vlogs, etc.",
                    "li4": "Politically driven sources (e.g. newspapers driven by clear political agenda - especially far right and and far left)",
                    "li5": "Social media posts, etc."
                }
            }
        },
        "table2": {
            "thead": {
                "th1": "Who is the author (if any)?",
                "th12": "(Who is behind this information?)",
                "th2": "How to detect?",
                "th3": "Reliability rate"
            },
            "row1": {
                "c1": "If a scientist / researcher",
                "c2": "Are his/her credits (affiliation, educational degrees, publications, awards as claimed) traceable? (E.g. using GoogleScholar, or a nation database of scientists; Estonian researchers can be found at www.etis.ee)",
                "c22": "Has (s)he expertise in a given area?"
            },
            "row2": {
                "c1": "If a well-known expert in a given area",
                "c2": "Are his/her credits (affiliation, educational degrees, publications, awards as claimed) traceable?"
            },
            "row3": {
                "c1": "If an organisation"
            }
        },
        "table3": {
            "thead": {
                "th1": "Nature of the content",
                "th2": "Indicators",
                "th3": "Reliability rate"
            },
            "row1": {
                "c1": "Publisher’s relationship on the topic",
                "c2": "Balanced / neutral"
            },
            "row2": {
                "c2":"Publisher is sponsored by a trusted source (e.g. European Commission, etc.)"
            },
            "row3": {
                "c2":"Clearly biased or favoring a position for a purpose"
            },
            "row4": {
                "c1": "Date",
                "c12": "NB! Not all outdated sources must be unreliable - in case they are often cited means, that they have a big impact.",
                "c2":"Recently published or revised"
            },
            "row5": {
                "c2": "Outdated"
            },
            "row6": {
                "c2": "No date listed"
            },
            "row7": {
                "c1": "Text credibility",
                "c2": "The purpose is to inform or teach"
            },
            "row8": {
                "c2": "The tone is convincing, but not pushing."
            },
            "row9": {
                "c2": "The text has specific facts and details to support the ideas"
            },
            "row10": {
                "c2": "The purpose is to entertain"
            },
            "row11": {
                "c2": "The purpose is to persuade, the text is emotionally loaded"
            },
            "row12": {
                "c2": "The purpose is to scare"
            },
            "row13": {
                "c2": "The purpose is to sell something"
            }
        }
    }
}
</i18n>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { locale, t } = useI18n({ useScope: 'local' });

    definePageMeta({
        layout: "base",
    });

</script>