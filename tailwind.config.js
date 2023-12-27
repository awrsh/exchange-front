/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "int": "#1F0990",
      },
      fontFamily: {
        "bold": "bold",
        "extrabold": "extrabold",
        "extrablack": "extrablack",
        "black": "black",
        "thin": "thin",
        "light": "light",
        "regular": "regular",
        "medium": "medium",
        "num": "num",
      }
    },
  },
  plugins: [],
}