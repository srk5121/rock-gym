/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        widescreen: {
          raw: "(min-aspect-ratio:16/9)",
        },
      },
      colors: {
        primary: "#fdd100",
        // primary: "#BF8E4E",
      },
      fontFamily: {
        primary: ['"Black Ops One"', ...defaultTheme.fontFamily.sans],
        // secondary: [
        //   '"Alumni Sans Inline One"',
        //   ...defaultTheme.fontFamily.sans,
        // ],
        secondary: ['"Anton"', ...defaultTheme.fontFamily.sans],
        // secondary: ['"Archivo Black"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        // hero: "url('./src/sections/hero/body_hero.webp')",
        // location: "url('./src/sections/location/location.webp')",
        // hero: "url('./bg-images/body_hero.webp')",
        // location: "url('./bg-images/location.webp')",
      },
      keyframes: {
        name: {},
      },
      animation: {
        name: "",
      },
    },
  },
  plugins: [],
};
