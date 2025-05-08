/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        'fade-in-1': 'fadeIn 0.8s ease-out forwards',
        'fade-in-2': 'fadeIn 0.8s ease-out 0.3s forwards',
        'fade-in-3': 'fadeIn 0.8s ease-out 0.6s forwards',
        'fade-in-stat': 'fadeIn 0.5s ease-in forwards 0.5s',
        'fade-in-description': 'fadeIn 0.5s ease-in forwards 1s',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(500deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
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