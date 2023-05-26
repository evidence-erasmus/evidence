/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}'
  ],
  // safelist : [
  //   "bg-green-700",
  //   "bg-blue-700",
  //   "bg-red-700",
  //   "border-green-700",
  // ],
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
              h4: {
                fontSize: '1.25em'
              }
            }
        }
      })
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
  // corePlugins: {
  //   preflight: false,
  // }
}
