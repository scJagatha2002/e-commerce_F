/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '450px', // Change the small screens breakpoint to 420px
      'cm': '520px',
      'md': '768px', // Default medium screens breakpoint
      'lg': '1024px', // Default large screens breakpoint
      'ad': '1177px',
      'xl': '1280px', // Default extra large screens breakpoint
      
    },

    extend: {},
  },
  plugins: [],
}