/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'rubik':['Rubik'],
        'ubuntu':['Ubuntu']
      },
      colors:{
        'primary': '#473BF0',
        'card_bg': '#E7E9ED',
        'content_fill': '#F4F7FA',
        'cta_fill': '#161C2D',
        'oval_fill': '#979797',
      },
    },
  },
  plugins: [],
}

