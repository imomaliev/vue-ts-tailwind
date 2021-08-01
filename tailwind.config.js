module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      textColor: {
        default: '#2c3e50',
        link: '#42b983',
        code: '#304455',
      },
      backgroundColor: {
        code: '#eeeeee',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
