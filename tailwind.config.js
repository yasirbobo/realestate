/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      serif: ['Ubuntu', 'sans-serif'],
      sans: ['Open Sans', 'sans'],
    },
    extend: {},
  },
  plugins: [],
}