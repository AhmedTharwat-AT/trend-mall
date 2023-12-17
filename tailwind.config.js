/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        textslide: "textslide 1.5s ease-out ",
        gradHeight: "gradHeight 0.5s linear forwards  ",
        decHeight: " decHeight 0.5s linear forwards  ",
      },
      keyframes: {
        textslide: {
          "0%": { transform: "translateX(-100%); opacity:0" },
          "50%": { opacity: "0.1" },
          "100%": { transform: "translateX(0); opacity:1" },
        },
        gradHeight: {
          "0%": { height: 0 },

          "100%": { height: "12rem " },
        },
        decHeight: {
          "0%": { height: "12rem" },

          "100%": { height: 0, display: "none" },
        },
      },
    },
  },
  plugins: [],
};
