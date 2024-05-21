/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      xsm: '320px',
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
        primary: ["'Lato'", 'sans-serif'],
        complementary: ["'Roboto'", 'sans-serif'],
        white: ["'Josefin Sans'", 'sans-serif'],
        secondary: ["'Poppins'", "sans-serif"],
        montser: ["'Montserrat'", "sans-serif"]
      }
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
};

