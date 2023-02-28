/** @type {import('tailwindcss').Config} */
module.exports = {
  darkTheme: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-orange": "#f9b17a",
        "deep-blue": "#2d3250",
        "medium-blue": "#424769",
        "light-blue": "#676f9d",
        "light-gray":"#C5CCCF",
        "white": "#fff"
      },
      fontFamily: {
        "roboto": ['Roboto Mono', 'monospace'],
        "shantell": ['Shantell Sans', 'cursive']
      }
    },
    screens:{
      md:"768px",
      lg:"1010px"
    }
  },
  plugins: [],
}
