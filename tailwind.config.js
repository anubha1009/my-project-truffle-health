/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#444444',
        'purple-500': '#7e77e5',
        'red': '#D21F3C'
      }
    },
  },
  plugins: [],
}

