/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        'card': '12px',
        'btn': '14px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0,0,0,0.06)',
        'soft-dark': '0 2px 12px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
