/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}'
  ],
  safelist : [
    'text-rose-400',
    'border-rose-400',
    'text-yellow-400',
    'border-yellow-400',
    'text-sky-500',
    'border-sky-500'
  ],
  theme: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.slate,
    //   green: colors.green,
    //   blue: colors.sky,
    //   purple: colors.purple,
    //   yellow: colors.yellow,
    //   pink: colors.fuchsia,
    // },
    extend: {
      fontFamily: {
        Heading: ["Alegreya", "cursive"],
        Body: ["Roboto Flex", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {          
            css: {
              '--tw-text-opacity': '1',
              maxWidth: '85ch',
              h4: {
                fontSize: '1.25em'
              }
            }
        }
      })
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#facc15",
          "secondary": "#3b82f6",
          "accent": "#000000",
          "neutral": "#6b7280",
          "base-100": "#FFFFFF",
          "info": "#0ea5e9",
          "success": "#36D399",
          "warning": "#fb923c",
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
  // corePlugins: {
  //   preflight: false,
  // }
}
