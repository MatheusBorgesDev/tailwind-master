import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
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
        // slideUpAndFade: "slideUpAndFade 0.2s linear",
      },
    },
  },
  plugins: [],
};
export default config;
