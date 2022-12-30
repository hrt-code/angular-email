/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts,js,css,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['roboto', 'sans-serif'],
      },
      colors: {
        angular: {
          400: '#e85b5f',
          500: '#e5474b',
          600: '#e23237',
        },
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
