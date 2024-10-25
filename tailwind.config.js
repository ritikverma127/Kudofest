/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#FDFDF5',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #C4ACFE 0%, #E6C2FE 100%)',
      },
      screens: {
        'mds': '786px', 
      },
    },
  },
  plugins: [],
}