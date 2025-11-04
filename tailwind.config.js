// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        iris: "#6C63FF",
        accent: "#7C5CFF",
        cyan: "#35E0FF",
        mint: "#4AF2C6",
        amber: "#E9B949",
        rose: "#F06292",
        mist: "rgba(255,255,255,0.06)",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(124,92,255,0.35)",
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
};
