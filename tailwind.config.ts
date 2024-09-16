import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        "2xsm": "10px",
        xsm: "12px",
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "32px" }],
        "2xl": "22px",
        "3xl": "25px",
        "4xl": "32px",
        "5xl": "40px",
        "6xl": "48px",
        "7xl": "70px",
      },
      colors: {
        'heading-color': '#6e141e',
        'bg-color' : '#f8fafc'
      },
    },
  },
  plugins: [],
};
export default config;
