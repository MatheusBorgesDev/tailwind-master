import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        profile: "min-content 1fr min-content",
        form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
      },
      borderWidth: {
        6: "6px",
      },

      colors: {
        violet: {
          25: "#fcfaff",
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1" },
        },
        // slideUpAndFade: {
        //   from: { opacity: "1" },
        //   to: { opacity: "0" },
        // },
      },

      animation: {
        slideDownAndFade: "slideDownAndFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        slideSlowDownAndFade:
          "slideDownAndFade 1s cubic-bezier(0.16, 1, 0.3, 1)",
        // slideUpAndFade: "slideUpAndFade 0.2s linear",
      },
    },
  },
  plugins: [],
};
export default config;
