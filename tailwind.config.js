// tailwind.config.js
import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      headline_1: 44,
      headline_2: 32,
      headline_3: 24,
      headline_4: 18,
      headline_5: 16,
      headline_6: 14,
      body: 12,
      caption_1: 14,
      caption_2: 12,
      overline: 10,
      large_button: 18,
      medium_button: 16,
      small_button: 14,
    },
    fontFamily: {
      eczar: ['"Eczar"', 'serif'],
      cabin: ['"Cabin"', 'sans-serif'],
    },
    screens: {
      xs: { min: '250px', max: '550px' },
      sm: { min: '551px', max: '767px' },
      md: { min: '768px', max: '1024px' },
      lg: { min: '1025px', max: '1440px' },
      '4k': { min: '1441px', max: '2560px' },
    },
    // minWidth: {
    //  "1/2": "40px",
    //  1: "80px",
    //  2: "92px",
    //  5: "468px",
    //  6: "24px",
    //  20: "20%",
    //  40: "40%",
    //  60: "60%",
    //  80: "80%",
    //  full: "100%",
    // },
    // minHeight: {
    //  "1/2": "40px",
    //  1: "80px",
    //  2: "92px",
    //  5: "468px",
    //  6: "24px",
    //  20: "20%",
    //  40: "40%",
    //  60: "60%",
    //  80: "80%",
    //  "20d": "20dvh",
    //  "80d": "80dvh",
    //  dfull: "100dvh",
    //  full: "100%",
    // },
    // maxWidth: {
    //  5: "468px",
    //  80: "80%",
    //  full: "100%",
    // },
    // maxHeight: {
    //  16: "16%",
    //  18: "18%",
    //  20: "20%",
    //  22: "22%",
    //  27: "27%",
    //  33: "33%",
    //  70: "70%",
    //  75: "75%",
    //  83: "83%",
    //  80: "80%",
    //  85: "85%",
    //  90: "90%",
    //  "20d": "20dvh",
    //  "80d": "80dvh",
    //  dfull: "100dvh",
    // },
    boxShadow: {
      shadow1: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      shadow2:
        'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      shadow3: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px',
      shadow4:
        'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
      shadow5: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
      shadow6: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
