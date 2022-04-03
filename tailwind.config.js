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
          'DEFAULT': '#00A99D',
          'darkest': '#003935'
        },
        secondary: {
          'DEFAULT': '#DD7D5F',
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