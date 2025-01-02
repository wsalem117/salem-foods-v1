/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F855A',
          light: '#48BB78',
          dark: '#276749',
        },
        secondary: {
          DEFAULT: '#ED8936',
          light: '#F6AD55',
          dark: '#C05621',
        },
        accent: {
          mango: '#F6E05E',
          grape: '#805AD5',
          apple: '#E53E3E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
