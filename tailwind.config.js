module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.red.500") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
      colors: {
        silver: "#bbbfb6",
        smoke: "#f5f5f5",
        pink: "#FF69B4",
        darkblue: "#004c9a",
        lightblue: "#0059b3",
        indigo: "#310062",
        turquoise: "#64ffda",
        navy: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lightest: "#233554",
        },
        slate: {
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },
        white: "#e6f1ff",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".79rem",
      base: "1rem",
      md: "1.05rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "1.5xl": "1.45rem",
      "2xl": "1.5rem",
      "2.5xl": "1.65rem",
      "3xl": "1.875rem",
      "4xl": "2.3rem",
      "5xl": "3.5rem",
      "6xl": "4rem",
      "7xl": "4.2rem",
    },
    grayscale: {
      0: "0%",
      10: "10%",
      50: "50%",
      60: "60%",
      80: "80%",
      100: "100%",
    },
  },
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
