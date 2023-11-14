/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px', 
      lg: '976px', 
      xl: '1440px'
    },
    extend: {
      colors: {
        purpleG: "rgba(121,105,192,1)",
        blueG: "rgba(96,163,230,1)",
        complementary: "#FFE9B1",
        minWhite: "#FCFDF2",
        secondaryBackground: "#262d36"
      },
      fontFamily: {
        primary: ["'Lato'", '"sans-serif"'],
        complementry: ["'Montserrat'", 'sans-serif'],
        white: ["'Playfair Display'", 'serif'],
        secondary: ["'Poppins'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"]
      }
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
};

