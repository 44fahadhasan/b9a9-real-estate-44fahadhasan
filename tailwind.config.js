/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mydarktheme: {
          primary: "#b99272",
          secondary: "#fff",
          "secondary-content": "#9FA18C",
          "base-100": "#0e1317",
          "base-200": "#090c0f",
          warning: "#ff8a00",
          neutral: "#fdfcfb",
        },
      },
      "light",
    ],
  },
};
