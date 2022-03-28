module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,svelte,css}"
  ],
  theme: {
    extend: {
      colors: {
        black:'#08221D',
        white:'#FBFFFD',
        primary:{
          'DEFAULT':'#00A99D',
        },
        secondary:{
          'DEFAULT':'#DD7D5F',
          'darkest':'#003935'
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
