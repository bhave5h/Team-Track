// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Adding custom colors to match the reference image aesthetic better
      colors: {
        dark: {
          bg: '#13131A',      // Deep background
          card: '#1F1F2E',    // Slightly lighter card background
          input: '#29293D',   // Input field background
          muted: '#9494B8',   // Muted text color
        },
        accent: {
          purple: '#6C5DD3',  // The main purple accent color
        }
      },
      fontFamily: {
         // Ensure you have a nice sans-serif font imported (e.g., Inter, Poppins)
         sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}