/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        current:"var(--text-color)",
      },
      textColor:{
        portfolio:{
          base:"var(--text-color)",
        }
      },
      backgroundColor:{
        portfolio:{
          fill:"var(--text-color)",
          indicator:"var(--fill-color-indicator)",
        }
      },
      gradientColorStops:{
        portfolio:{
          hue:"var(--fill-color)",
        }
      }
    },
  },
  plugins: [],
}