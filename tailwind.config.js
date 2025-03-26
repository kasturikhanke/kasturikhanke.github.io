/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Libre Franklin', 'sans-serif'],
        'serif': ['Times New Roman', 'serif'],
      },
      animation: {
        'spin-three-times': 'spin 0.6s ease-in 1',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(500deg)' },
        },
      },
      fontFamily: {
        'emoji': [
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Noto Color Emoji',
          'Android Emoji',
          'EmojiSymbols',
          'EmojiOne Mozilla',
          'Twemoji Mozilla',
          'Segoe UI Symbol',
          'sans-serif'
        ],
      },
    },
  },
  plugins: []
}