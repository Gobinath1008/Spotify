export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          DEFAULT: '#1DB954',
          dark: '#1ed760',
          base: '#121212',
          highlight: '#1a1a1a',
          elevated: '#242424',
          light: '#b3b3b3'
        }
      }
    },
  },
  plugins: [],
}
