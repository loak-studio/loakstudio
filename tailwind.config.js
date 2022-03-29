module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,svelte,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': 'Lack',
        'content': 'Montserrat'
      },
      colors: {
        black:'#08221D',
        white:'#FBFFFD',
        primary:{
          'DEFAULT':'#00A99D',
          'darkest':'#003935'
        },
        secondary:{
          'DEFAULT':'#DD7D5F',
        },
        grey:{
          'light':'#F5F5F5',
          'DEFAULT':'#A0A0A0'
        }
      }
    },
  },
  plugins: [],
}
