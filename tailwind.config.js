/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        alpha: '#66a6ff',
        beta: '#4dc7d9',
        gamma: '#C9BBCF',
        psi: '#191A16',
        omega: '#898AA6',
      },
    },
  },
  plugins: [],
};
