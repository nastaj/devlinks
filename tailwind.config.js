/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "'Instrument Sans', sans-serif",
    },

    extend: {
      colors: {
        "brand-purple": "#633CFF",
        "brand-purple--hover": "#BEADFF",
        "brand-purple--light": "#EFEBFF",
        "grey-dark": "#333333",
        grey: "#737373",
        "grey-light": "#FAFAFA",
        borders: "#D9D9D9",
        red: "#FF3939",
      },
      fontSize: {
        "heading-m": ["2rem", "3rem"],
      },
      dropShadow: {
        "3xl": "0 5px 10px rgba(190, 173, 255, 0.6)",
      },
      backgroundImage: {
        "phone-mockup": "url('illustration-phone-mockup.svg')",
      },
    },
  },
  plugins: [],
};
