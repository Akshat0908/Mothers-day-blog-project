/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "x01-primary": "var(--x01-primary)",
        "x02-secondary": "var(--x02-secondary)",
        "x03-dark": "var(--x03-dark)",
        "x04-gray": "var(--x04-gray)",
        "x05-gray-light": "var(--x05-gray-light)",
        "x06-white": "var(--x06-white)",
      },
      fontFamily: {
        "heading-1": "var(--heading-1-font-family)",
        "heading-2": "var(--heading-2-font-family)",
        "heading-3": "var(--heading-3-font-family)",
        "heading-4": "var(--heading-4-font-family)",
        "subtitle-1": "var(--subtitle-1-font-family)",
        "subtitle-2": "var(--subtitle-2-font-family)",
        "subtitle-2-bold": "var(--subtitle-2-bold-font-family)",
        "paragraph": "var(--paragraph-font-family)",
        "button": "var(--button-font-family)",
        "caption": "var(--caption-font-family)",
      }
    },
  },
  plugins: [],
}