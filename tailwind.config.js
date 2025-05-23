/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px", // You can change the size as per your needs
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#02134F",
        },
        secondary: "#CB2026",
        tertiary: "#001B6A",
        quaternary: "#F6ECED",
        quinary: "#F6FAFE",
        text: {
          DEFAULT: "#6C757D",
          header: "#A4A4A4",
        },
      },

      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      boxShadow: {
        custom: `0px 0px 8px 0px rgba(2, 19, 79, 0.08)`,
      },
      animation: {
        "move-left": "move-left 20s  linear infinite",
        rotation: "rotation 1s linear infinite",
        aniclip: "aniclip 2s linear infinite",
        appear: "appear linear",
      },
      keyframes: {
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        rotation: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        aniclip: {
          "0%": { clipPath: "polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)" },
          "50%": {
            clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)",
          },
          "75%, 100%": {
            clipPath:
              "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
            scale: "0.5",
          },
          "100%": {
            opacity: "1",
            sccale: "1",
          },
        },
      },
      transform: {
        rotate3d: "rotate3d(90, 90, 0, 180deg)",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
}

