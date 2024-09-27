/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"],
      },
      backgroundImage: {
        "app-background": "url('src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
