/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

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
  plugins: [daisyui],
};
