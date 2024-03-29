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
        enabled: true,
        vscode: {},
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
                files: ['en.main.js', 'en.inquiry.js']
            },
            {
                code: 'el',
                iso: 'el_CY',
                name: 'Ελληνικά',
                files: ['el.main.js', 'el.inquiry.js']
            },
            {
                code: 'et',
                iso: 'et_EE',
                name: 'Estonian',
                files: ['et.main.js', 'et.inquiry.js']
            },
            {
                code: 'pt',
                iso: 'pt_PT',
                name: 'Portugese',
                files: ['pt.main.js', 'pt.inquiry.js']
            },
            {
                code: 'sv',
                iso: 'sv_SE',
                name: 'Swedish',
                files: ['sv.main.js', 'sv.inquiry.js']
            },
        ],
        lazy: true,
        compilation: {
            strictMessage: false,
            escapeHtml: true
          },
        langDir: 'locales',
        defaultLocale: 'en',
        // customRoutes: 'config',
        // pages: {
        //     about: {
        //         en: '/about',
        //         et: '/projektist'
        //     },
        //     modules: {
        //         en: '/modules',
        //         et: '/moodulid'
        //     },
        //     inquiry: {
        //         en: '/inquiry',
        //         et: '/uurimus'
        //     },
        //     'climate-change/index': {
        //         en: '/climate-change',
        //         et: '/kliimamuutused'
        //     },
        //     'climate-change/student': {
        //         en: '/climate-change/student',
        //         et: '/kliimamuutused/opilane'
        //     },
        //     'climate-change/background': {
        //         en: '/climate-change/background',
        //         et: '/kliimamuutused/taustainfo'
        //     },
        //     'climate-change/inquiry/[inquiry]': {
        //         en: '/climate-change/inquiry/[inquiry]',
        //         et: '/kliimamuutused/uurimus/[inquiry]'
        //     },
        //     'viruses/index': {
        //         en: '/viruses',
        //         et: '/viirused'
        //     },
        //     'viruses/student': {
        //         en: '/viruses/student',
        //         et: '/viirused/opilane'
        //     },
        //     'viruses/background': {
        //         en: '/viruses/background',
        //         et: '/viirused/taustainfo'
        //     },
        //     radiation: {
        //         en: '/radiation',
        //         et: '/radiatsioon'
        //     },
            // 'tools/StudentAnswersViruses': {
            //     en: '/viruses/answers',
            //     et: '/viirused/vastused'
            // },
        // },
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
