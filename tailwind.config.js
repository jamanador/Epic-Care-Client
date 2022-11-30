/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        doctorportal: {
          primary: "#19D3AE",
          secondary: "#0FCFEC",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {
      // doctorportal: {
      //   primary: "#000000",
      //   secondary: "#0FCFEC",
      //   accent: "#37cdbe",
      //   "base-100": "#ffffff",
      // },
    },
  },
  plugins: [require("daisyui")],
};
