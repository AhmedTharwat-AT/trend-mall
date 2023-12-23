/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1100px",
        "2xl": "1170px",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        slideRight: "slideRight 0.8s 0.5s ease-out both ",
        slideLeft: "slideLeft 0.5s 0.8s ease-out both ",
        slideBottom: "slideBottom 0.5s 0.1s ease-out both",
        slideTop: "slideTop 0.5s  ease-out both",
        textRepeat: " textRepeat 12s  linear infinite  ",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-30%); opacity:0" },
          "50%": { opacity: "0.5" },
          "100%": { transform: "translateX(0); opacity:1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(20%); opacity:0" },
          "50%": { opacity: "0.1" },
          "100%": { transform: "translateX(0); opacity:1" },
        },
        slideBottom: {
          "0%": { transform: "translateY(-25%); opacity:0" },
          "50%": { opacity: "0.1" },
          "100%": { transform: "translateX(0); opacity:1" },
        },
        slideTop: {
          "0%": { transform: "translateY(20%); opacity:0" },
          "50%": { opacity: "0.1" },
          "100%": { transform: "translateX(0); opacity:1" },
        },
        textRepeat: {
          "0%": { left: "-100%" },
          "100%": { left: "-20.65%" },
        },
      },
      maxWidth: {
        conatin: "1170px ",
      },
      backgroundImage: {
        about:
          'url("https://preview.colorlib.com/theme/malefashion/img/about/testimonial-pic.jpg.webp")',
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        cart: "repeat(4,minmax(80px, 180px)) 40px",
        miniCart: "repeat(2,minmax(70px, 180px)) 50px 40px",
      },
    },
  },
  plugins: [],
};
