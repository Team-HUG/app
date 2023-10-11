/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray0: '#FFFFFF',
        gray1: '#D9D9D9',
        gray2: '#BABABA',
        gray3: '#808080',
        gray4: '#666666',
        gray5: '#000000',
        orange0: '#FFF6F6',
        orange1: '#FB4F00',
        blue: '#0019FF',
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
