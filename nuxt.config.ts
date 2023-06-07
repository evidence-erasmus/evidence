// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        'nuxt-icon',
        'nuxt-headlessui'
    ],
    // ssr:false,
    experimental : {
        payloadExtraction : false
    },
    // router: {
    //     base: '/evidence/'
    // },
    i18n: {
        // vueI18nLoader: true,
        baseUrl: '/evidence/',
        strategy: 'prefix',
        locales: [
            {
                code: 'en',
                iso: 'en_150',
                name: 'English',
                file: 'en.json'
            },
            {
                code: 'el',
                iso: 'el_CY',
                name: 'Ελληνικά',
                file: 'el.json'
            },
            {
                code: 'et',
                iso: 'et_EE',
                name: 'Estonian',
                file: 'et.json'
            },
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'en',
        customRoutes: 'config',
        // strictMessage: false,
        pages: {
            about: {
                en: '/about',
                et: '/projektist'
            },
            modules: {
                en: '/modules',
                et: '/moodulid'
            },
            viruses: {
                en: '/viruses',
                et: '/viirused'
            },
            'viruses/student': {
                en: '/viruses/student',
                et: '/viirused/õpilane'
            },
            'viruses/background': {
                en: '/viruses/background',
                et: '/viirused/taustainfo'
            },
            radiation: {
                en: '/radiation',
                et: '/radiatsioon'
            },
            'tools/StudentAnswersViruses': {
                en: '/viruses/answers',
                et: '/viirused/vastused'
            },
            // 'tools/StudentAnswersClimatechangeOpen': {
            //     en: '/climate-change/answers/open',
            //     et: '/kliimamuutused/vastused/avatud'
            // },
        },
        vueI18n: {
            legacy: false,
            locale: 'en'
        }
        // vueI18n: './i18n.config.ts' // if you are using custom path, default 
    },
    image: {
        gumlet: {
            baseURL: 'https://erasmus-evidence.gumlet.io'
        }
    },
    app: {
        baseURL: '/evidence/',
        pageTransition: { name: 'page', mode: 'out-in' }
    }
})
