module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twitter-silver': '#d6d9db',
        'twitter-signInBG': "#242d34"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
