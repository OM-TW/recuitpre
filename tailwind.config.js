/** @type {import('tailwindcss').Config} */
import color from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

delete color.lightBlue;
delete color.warmGray;
delete color.trueGray;
delete color.coolGray;
delete color.blueGray;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      ...fontSize,
    },
    fontFamily: {
      'noto-black': ['Noto Sans TC', 'sans-serif'],
      'noto-semiBold': ['Noto Sans TC', 'sans-serif'],
      'noto-bold': ['Noto Sans TC', 'sans-serif'],
      'noto-medium': ['Noto Sans TC', 'sans-serif'],
      'noto-regular': ['Noto Sans TC', 'sans-serif'],
    },
    colors: {
      ...color,
      primary: '#5e191b',
      // secondary: '#ff6600',
      // tertiary: '#ff0066',
      // quaternary: '#00ff00',
      backgroundColor: '#eb3f43',
      textColor: '#000',
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
