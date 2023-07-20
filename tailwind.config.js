/** @type {import('tailwindcss').Config} */
export default {
  content: [],
     purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '0 1px 0 0 rgba(0, 0, 0, 0.1)',
      },
      colors: {
        custom: "#475182",
        custom1: "#BDBEC0",
      },
    },
  },
  plugins: [],
}

