/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1240px',
        '2xl': '1240px',
      },
      colors: {
        'gray-80': '#252930',
        'gray-70': '#333943',
        'yellow-80': '#FFE70B',
        'blue-30': '#00B2FF',
        'blue-60': '#5B13B6',
        'blue-80': '#080F27',
      },
    },
  },
  plugins: [],
}
