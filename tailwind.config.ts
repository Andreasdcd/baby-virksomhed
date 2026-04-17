import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D17655",
        secondary: "#B62B2B",
        accent: "#D17655",
        background: "#EEECEA",
        link: "#366460",
        text: {
          primary: "#232323",
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        heading: ['var(--font-cormorant)', 'serif'],
      },
      borderRadius: {
        'button': '14.7px',
        'input': '0px',
        'default': '6px',
      }
    },
  },
  plugins: [],
} satisfies Config;
