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
        'serif': ['"Sometimes Times BETA"', 'Times New Roman', 'serif'],
      },
      animation: {
        'spin-three-times': 'spin 0.6s ease-in 1',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(500deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
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