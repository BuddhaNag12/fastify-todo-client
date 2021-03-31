const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.red,
      pink: colors.fuchsia,
      white:colors.white,
      primary: {
        light: "#3D4057",
        dark: "#11152b",
        dimmed: "#04e8b9",
        red: colors.red,
      },
      accent: {
        light: "#00CECD",
        dark: "#0EE6B7",
        code: "#e68fff",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
