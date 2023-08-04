/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'mdd': '769px',
      'lg': '1024px',
      'xl': '1280px',
      '1xl': '1367px',
      '1-5xl': '1440px',
      '2xl': '1530px',
      '3xl': '1680px',
      '4xl': '1920px',
      '5xl': '2200px',
    },
    extend: {
      container: {
        center:true,
      },
      fontFamily:{
        rubik:"Rubik"
      }
    },
  },
  plugins: [],
}

