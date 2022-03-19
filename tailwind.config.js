module.exports = {
  content: ["./index.html", "./src/**/*.{vue,astro,js,ts,jsx,tsx}",],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'main': 'Lack',
      'ms': 'Montserrat'
    },
    extend: {
      colors:{
        bg:"#003935",
        primary:{
          'light':'#00bfb2',
          'DEFAULT':"#00A99D",
          'dark':'#007d74',
          'darkest':'#003935'
        },
        black:'#08221D',
        grey:{
          'light':'#DFDFDF',
          'DEFAULT':'#A0A0A0'
        }
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
