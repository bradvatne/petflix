/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        semidarkblue: "#161D2F",
        darkblue: "#10141E",
        greyishblue: "#5A698F"
      },
    },
  },
  plugins: [],
};
