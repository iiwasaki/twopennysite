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
          'Karla',
          ...defaultTheme.fontFamily.sans,
        ],
        'title':[
          '"Work Sans"',
          'serif',
        ],
      },

      textShadow: {
        DEFAULT: '0 2px 6px var(--tw-shadow-color)',
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
