/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "320px", max: "425px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "426px", max: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "769px", max: "992px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "993px", max: "1024px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1025px", max: "1200px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
