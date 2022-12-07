/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'sans': [
          '"Open Sans"',
          ...defaultTheme.fontFamily.sans,
        ],
        'title':[
          '"Work Sans"',
          'serif',
        ],
        'feature':[
          '"Kumbh Sans"',
          'Gadget',
          'sans',
        ],
      },

      textShadow: {
        noblur: '2px 2px 0 var(--tw-shadow-color)',
        DEFAULT: '0 1px 4px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }){
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow')}
      )
    })
  ],
}
