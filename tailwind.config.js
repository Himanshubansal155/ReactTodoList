module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

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
