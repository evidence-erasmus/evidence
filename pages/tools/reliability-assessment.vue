<template>
        
        <section class="e-article print:not-prose max-w-6xl" lang="en" style="hyphens: auto;">
            
            <h1>{{ t('title') }}</h1>

            <h3>{{ t('videos-title') }}</h3>

            <div class="e-card grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <UiYoutube video="s7FKnMC_cIU"  />
                    <UiYoutube video="Jy3sDnKAg0Q"  />
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
                                    <li>
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

        </section>

    
</template>


<i18n lang="json">
{
    "en" : {
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
    const { t } = useI18n({ useScope: 'local' });

    definePageMeta({
        layout: "base",
    });

</script>