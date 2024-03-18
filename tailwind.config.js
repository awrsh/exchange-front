/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundColor:{
        block:"#222222",
        deep_dark:"#1a1a1a"
      },
      colors: {
        "int": "#338eff",
        "ashy": "#3b3b3b",
        "dark-int":"",
        "dark-color":""
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