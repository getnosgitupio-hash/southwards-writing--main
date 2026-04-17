/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slash-sweep': {
          '0%': { transform: 'translateX(-160%) rotate(8deg)' },
          '100%': { transform: 'translateX(260%) rotate(8deg)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-150%)' },
        },
      },
      animation: {
        'slash-sweep': 'slash-sweep 1.2s ease-in-out forwards',
        slide: 'slide 20s linear infinite',
      },
    },
  },
  plugins: [],
}
