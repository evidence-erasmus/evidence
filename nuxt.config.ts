// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        'nuxt-icon',
        'nuxt-headlessui'
    ],
    nitro: { prerender: { failOnError: false }, },
    // ssr:false,
    experimental : {
        payloadExtraction : false,
        inlineSSRStyles: false
    },
    devtools: {
        // Enable devtools (default: true)
        enabled: true,
        // VS Code Server options
        vscode: {},
        // ...other options
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
        pages: {
            about: {
                en: '/about',
                et: '/projektist'
            },
            modules: {
                en: '/modules',
                et: '/moodulid'
            },
            'climate-change/index': {
                en: '/climate-change',
                et: '/kliimamuutused'
            },
            'climate-change/student': {
                en: '/climate-change/student',
                et: '/kliimamuutused/opilane'
            },
            'climate-change/background': {
                en: '/climate-change/background',
                et: '/kliimamuutused/taustainfo'
            },
            'climate-change/inquiry/open': {
                en: '/climate-change/inquiry/open',
                et: '/kliimamuutused/inquiry/open'
            },
            'viruses/index': {
                en: '/viruses',
                et: '/viirused'
            },
            'viruses/student': {
                en: '/viruses/student',
                et: '/viirused/opilane'
            },
            'viruses/background': {
                en: '/viruses/background',
                et: '/viirused/taustainfo'
            },
            radiation: {
                en: '/radiation',
                et: '/radiatsioon'
            },
            // 'tools/StudentAnswersViruses': {
            //     en: '/viruses/answers',
            //     et: '/viirused/vastused'
            // },
        },
        // vueI18n: {
        //     legacy: false,
        //     locale: 'en'
        // }
        vueI18n: './i18n.config.ts' // if you are using custom path, default 
    },
    image: {
        gumlet: {
            baseURL: 'https://erasmus-evidence.gumlet.io'
        }
    },
    app: {
        baseURL: '/evidence/',
        // pageTransition: { name: 'page', mode: 'out-in' }
    }
})
