module.exports = {
  purge: [ './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({

      ...theme('colors'),

      'app-primary' : '#4c2a4c'
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
