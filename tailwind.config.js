/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ds: { max: '480px' },
        sm: { min: '480px', max: '760px' },
        md: { min: '760px', max: '1024px' },
        lg: { min: '1024px', max: '1250px' },
        xl: {min: '1250px'}
      }
    },
  },
  plugins: [],
}