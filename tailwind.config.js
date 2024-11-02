/** @type {import('tailwindcss').Config} */
module.exports = {
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
        accent: {
          DEFAULT: "#9999ff",
          light: {
            1: "#33C3D4",
            2: "#49C9D9",
            3: "#60D0DD",
            4: "#77D7E2",
            5: "#8EDEE7",
            6: "#A4E4EC",
            7: "#BBEBF1",
            8: "#D2F2F5",
            9: "#E8F8FA",
          },
          dark: {
            1: "#19A9BA",
            2: "#1696A6",
            3: "#148491",
            4: "#11717C",
            5: "#0E5E68",
            6: "#0B4B53",
            7: "#08383E",
            8: "#062629",
            9: "#031315",
          },
          opposite: "#f3af56",
          black: "#030303",
        },
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
        kocluk1: "url('/assets/images/kocluk-1.jpg')",
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
