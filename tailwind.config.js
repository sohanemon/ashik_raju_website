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
        alpha: '#D6EFED',
        beta: '#B7D3DF',
        gamma: '#C9BBCF',
        psi: '#898AA6',
        omega: '#898AA6',
      },
    },
  },
  plugins: [],
};
