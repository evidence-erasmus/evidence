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
                name: 'English'
              },
              {
                code: 'et',
                name: 'Estonian'
              },
        ], 
        defaultLocale: 'en', 
        parsePages: false,   // Disable babel parsing
        pages: {
            about: {
                en: '/about', 
                et: '/projektist'
            }
        },
        vueI18n: {
            legacy: false,
            locale: 'en',
            messages: { 
                en : require("./locales/en.json"), 
                et : require("./locales/et.json") 
            }
          }
    },
    
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    }
})
