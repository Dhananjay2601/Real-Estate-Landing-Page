/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEF7F2",
        secondary: "#2B1B12",
        ternary: "#DDC7BB",
        quaternary: "#4F3527",
        placeholder: "#695346",
        iconBg: "#FBF5F1",
      },
    },
  },
  plugins: [require("daisyui")],
};
