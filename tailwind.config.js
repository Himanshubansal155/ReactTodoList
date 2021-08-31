module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "120": "30rem",
        "152": "38rem",
        "200": "50rem",
        "240": "60rem",
      },
      fill: theme => ({
        'green': theme('colors.green.500'),
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
