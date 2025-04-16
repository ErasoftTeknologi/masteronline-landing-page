/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["backdrop-blur-lg", "filter"],
  theme: {
    extend: {
      objectPosition: {
        "hero-mobile": "62% 50%",
      },
      colors: {
        paprika: {
          "50": "#ffeff1",
          "100": "#ffe1e3",
          "200": "#ffc7cf",
          "300": "#ff99a7",
          "400": "#ff6079",
          "500": "#ff2950",
          "600": "#f9053b",
          "700": "#d30031",
          "800": "#b00131",
          "900": "#9d0534",
          "950": "#550015",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-hanken-grotesk)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        "hanken-grotesk": ["var(--font-hanken-grotesk)"],
        rubik: ["var(--font-rubik)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "2.5xl": ["1.75rem", { lineHeight: "1" }],
        "3.5xl": ["2rem", { lineHeight: "1" }],
        "6.5xl": ["4rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
  daisyui: {
    themes: [
      {
        masteronline: {
          primary: "#9D0534",
          secondary: "#e11d48",
          accent: "#fce7f3",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#67e8f9",
          success: "#4ade80",
          warning: "#facc15",
          error: "#fb7185",
        },
      },
    ],
  },
};
export default config;
