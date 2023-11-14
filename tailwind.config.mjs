/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
        'detail-red': "hsl(var(--color-detail-red) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['"Titillium Web"', ...defaultTheme.fontFamily.sans],
        headings: ['"Russo One"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
