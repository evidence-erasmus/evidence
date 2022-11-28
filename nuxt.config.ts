// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    i18n: {
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
        parsePages: false,   // Disable babel parsing
        pages: {
            about: {
                en: '/about', 
                et: '/projektist'
            },
            modules: {
                en: '/modules', 
                et: '/moodulid'
            }
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
    
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    }
})
