/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url('/src/assets/main-background.png')",
      },
      colors: {
        'text-white': 'rgba(255, 255, 255, 0.87)',
      },
      borderColor: {
        'white-border': 'rgba(255, 255, 255, 0.3)',
        'blue-border': 'rgba(1, 132, 207, 1)',
      },
      backgroundColor: {
        'input-background': "rgb(51,51,51)"
      }
    },
  },
  plugins: [],
}

