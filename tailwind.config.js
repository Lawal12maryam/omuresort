/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/src/image/background.jpg')",
        
      }
    },
  },
  plugins: [],
}

