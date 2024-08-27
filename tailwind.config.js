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
      },
    },
  },
  plugins: [],
}

