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
        'gray-20': '#F2F2F2',
        'gray-30': '#D8D8D8',
        'gray-70': '#333943',
        'gray-80': '#252930',
        'orange-50': '#ea9301',
        'orange-80': '#ff7b1c',
        'blue-30': '#00B2FF',
        'blue-60': '#04B4AE',
        'blue-80': '#00968f',
      },
    },
  },
  plugins: [],
}
