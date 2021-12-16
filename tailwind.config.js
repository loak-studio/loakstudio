module.exports = {
  content: ["./index.html", "./src/**/*.{vue,astro,js,ts,jsx,tsx}",],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'main': 'Lack'
    },
    extend: {
      colors:{
        canard:"#098b9a"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
