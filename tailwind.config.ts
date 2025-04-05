/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      inline: true, // 👈 This is what enables @theme in CSS!
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  