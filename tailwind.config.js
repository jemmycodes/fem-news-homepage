module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        alata: ["Alata"],
      },
      colors: {
        softOrange: "hsl(35,77%,62%)",
        softRed: "hsl(5, 85%, 63%)",
        offWhite: " hsl(36, 100%, 99%)",
        grayishBlue: "hsl(233, 8%, 79%)",
        darkGrayishBlue: "hsl(236, 13%, 42%)",
        veryDarkBlue: "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
