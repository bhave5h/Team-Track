/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          black: 'rgba(0,0,0,0.95)',
          white: '#ffffff',
          'warm-white': '#f6f5f4',
          blue: '#0075de',
          'active-blue': '#005bab',
          'focus-blue': '#097fe8',
          'badge-blue-bg': '#f2f9ff',
          'badge-blue-text': '#097fe8',
          dark: '#31302e',
          'gray-500': '#615d59',
          'gray-300': '#a39e98',
          teal: '#2a9d99',
          green: '#1aae39',
          orange: '#dd5b00',
          pink: '#ff64c8',
          purple: '#391c57',
          brown: '#523410',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': 'rgba(0,0,0,0.04) 0px 4px 18px, rgba(0,0,0,0.027) 0px 2.025px 7.84688px, rgba(0,0,0,0.02) 0px 0.8px 2.925px, rgba(0,0,0,0.01) 0px 0.175px 1.04062px',
        'deep': 'rgba(0,0,0,0.01) 0px 1px 3px, rgba(0,0,0,0.02) 0px 3px 7px, rgba(0,0,0,0.02) 0px 7px 15px, rgba(0,0,0,0.04) 0px 14px 28px, rgba(0,0,0,0.05) 0px 23px 52px',
      },
      letterSpacing: {
        'tight-xl': '-2.125px',
        'tight-lg': '-1.875px',
        'tight-md': '-1.5px',
        'tight-sm': '-0.625px',
        'tight-xs': '-0.25px',
        'wide-sm': '0.125px',
      }
    },
  },
  plugins: [],
}