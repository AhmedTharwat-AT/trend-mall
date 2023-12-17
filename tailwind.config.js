/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        slideRight: "slideRight 1.5s ease-out ",
        slideLeft: "slideLeft 1.5s 1s ease-out both ",
        slideBottom: "slideBottom 1.5s 0.5s  ease-out both",
        gradHeight: "gradHeight 0.3s linear forwards  ",
        decHeight: " decHeight 0.3s linear forwards  ",
        textRepeat: " textRepeat 6s  linear infinite  ",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-100%); opacity:0" },
          "50%": { opacity: "0.1" },
          "100%": { transform: "translateX(0); opacity:1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%); opacity:0" },
          "50%": { opacity: "0.1" },
          "100%": { transform: "translateX(0); opacity:1" },
        },
        slideBottom: {
          "0%": { transform: "translateY(-20%); opacity:0" },
          "50%": { opacity: "0.1" },
          "100%": { transform: "translateX(0); opacity:1" },
        },
        textRepeat: {
          "0%": { left: "-100%" },
          "100%": { left: "-20.65%" },
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
      maxWidth: {
        conatin: "1170px ",
      },
    },
  },
  plugins: [],
};
