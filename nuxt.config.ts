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
        strategy: 'prefix_and_default',
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
        strictMessage: false,
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
            'viruses/teacher': {
                en: '/viruses/teacher',
                et: '/viirused/õpetaja'
            },
            radiation: {
                en: '/radiation',
                et: '/radiatsioon'
            },
            'tools/StudentAnswersViruses': {
                en: '/viruses/answers',
                et: '/viirused/vastused'
            },
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
