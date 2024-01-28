/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4E4D93",
          dark: "#2A254B",
        },
        lightGray: "#F9F9F9",
        border: {
          gray: "#EBE8F4",
          dark: "#CAC6DA",
        },
      },
    },
    backgroundImage: {
      main: "url(./src/assets/HomePhoto.jpg)",
      join: "url(./src/assets/joinBG.jpg)"
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
