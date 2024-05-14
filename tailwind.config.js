/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {transitionDelay: {
      '2000': '2000ms',
    }},
  },
  plugins: [],
}