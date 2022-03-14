module.exports = {
  content: ["./index.html", "./src/**/*.{vue,astro,js,ts,jsx,tsx}",],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'main': 'Lack'
    },
    extend: {
      colors:{
        bg:"#003935",
        primary:"#00A99D"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
