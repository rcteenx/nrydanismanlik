/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ["order-1", "order-2"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        base: ["var(--font-base)", "sans-serif"],
      },
      colors: {
        // primary: "#8c8c8c",
        primary: "#9900ff",
        // primary: "#1EF2EC",
        secondary: "#808080",
        grey: "#e0f0f1",
        xviolet: "#ccccff",
        xviolet2: "#9999ff",
        xpurple: "#9900ff",
        xpink: "#ff00cc",
        xred: "#ff3333",
        xorange: "#fec200",
      },
      boxShadow: {
        custom1: "0px 2px 40px 0px rgba(8, 70, 78, 0.08)",
        custom2: "0px 2px 30px 0px rgba(8, 73, 81, 0.06)",
      },
      backgroundImage: (theme) => ({
        okullarimiz1: "url('/assets/images/okullarimiz-1.jpg')",
        bilincSonrasi: "url('/assets/images/bilinc-sonrasi.jpg')",
        services: "url('/assets/images/bg-atolye.png')",
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};
