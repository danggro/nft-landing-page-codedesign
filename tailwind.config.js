/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "ui-sans-serif", "ui-system"],
      inter: ["Inter", "ui-sans-serif"],
    },
    extend: {
      colors: {
        primary: "#5C3EAF",
        "primary-2": "#D279F5",
        secondary: "#D9D9D9",
      },
      fontSize: {
        26: ["26px", "30px"],
        32: ["32px", "37px"],
      },
    },
  },
  plugins: [],
};
