/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'bungee-outline': ['Bungee Outline', 'cursive'],
        'love-ya-like-a-sister': ['Love Ya Like A Sister', 'cursive'] 
      }
    },
  },
  plugins: [],
}

