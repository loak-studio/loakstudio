module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,svelte,css}"
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '93rem'
      },
      fontFamily: {
        'title': 'Lack',
        'content': 'Montserrat'
      },
      colors: {
        primary: {
          'lightest':'#BFE2E0',
          'lighter':'#74BDB8',
          'DEFAULT': '#00A99D',
          'darker':'#008177',
          'darkest': '#003935'
        },
        lgrey: {
          'light': '#F5F5F5',
          'DEFAULT': '#A0A0A0',
          'dark': '#6B6B6B'
        },
        lblack: {
          'DEFAULT': '#08221D'
        },
        lwhite: {
          'DEFAULT': '#FBFFFD'
        },
      }
    },
  },
  plugins: [],
}