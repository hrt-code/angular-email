/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      golden: "FFBF0F",
      yellow: "FFDF00",
      primary:"524CB0",
      purple:"9368D9"
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
