// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        'nuxt-icon'
    ],
    target: 'static',
    router: {
        base: '/evidence/'
    },
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
            // 'modules/viruses': {
            //     en: '/modules/viruses',
            //     et: '/moodulid/viirused'
            // },
            // 'module/:slug': {
            //      en: '/module/:slug',
            //      et: '/moodul/:slug'
            // },
        },
        vueI18n: {
            legacy: false,
            locale: 'en',

            // messages: { 
                // en : require("./locales/en.json"), 
                // et : require("./locales/et.json") 
            // }
          }
    },
    image: {
        gumlet: {
          baseURL: 'https://erasmus-evidence.gumlet.io'
        }
    },
    
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    }
})
