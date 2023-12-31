/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arenq: ["Arenq"],
        beckman: ["Beckman"],
        mova: ["Mova"],
        overcameBold: ["Overcame Bold"],
        overcameOutline: ["Overcame Outline"],
        poppins: ["Poppins", "sans-serif"],
        brush: ["Brush"],
        stockholm: ["Stockholm"],
        // poppins:['Poppins', 'Sans-serif']
      },
    },
  },
  plugins: [],
};
