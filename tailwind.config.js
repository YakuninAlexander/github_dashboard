/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%'
      },
      colors: {
        'pr-purple-50': '#EAE2F8',
        'pr-purple-100': '#CFBCF2',
        'pr-purple-200': '#A081D9',
        'pr-purple-300': '#8662C7',
        'pr-purple-400': '#724BB7',
        'pr-purple-500': '#653CAD',
        'pr-purple-600': '#51279B',
        'pr-purple-700': '#421987',
        'pr-purple-800': '#34126F',
        'pr-purple-900': '#240754',

        'pr-vivid-50': '#FFE3E3',
        'pr-vivid-100': '#FFBDBD',
        'pr-vivid-200': '#FF9B9B',
        'pr-vivid-300': '#F86A6A',
        'pr-vivid-400': '#EF4E4E',
        'pr-vivid-500': '#E12D39',
        'pr-vivid-600': '#CF1124',
        'pr-vivid-700': '#AB091E',
        'pr-vivid-800': '#8A041A',
        'pr-vivid-900': '#610316',

        'neut-blgr-50': '#F0F4F8',
        'neut-blgr-100': '#D9E2EC',
        'neut-blgr-200': '#BCCCDC',
        'neut-blgr-300': '#9FB3C8',
        'neut-blgr-400': '#829AB1',
        'neut-blgr-500': '#627D98',
        'neut-blgr-600': '#486581',
        'neut-blgr-700': '#334E68',
        'neut-blgr-800': '#243B53',
        'neut-blgr-900': '#102A43',

        'sup-teal-50': '#F0FCF9',
        'sup-teal-100': '#C6F7E9',
        'sup-teal-200': '#8EEDD1',
        'sup-teal-300': '#5FE3C0',
        'sup-teal-400': '#2DCCA7',
        'sup-teal-500': '#17B897',
        'sup-teal-600': '#079A82',
        'sup-teal-700': '#048271',
        'sup-teal-800': '#016457',
        'sup-teal-900': '#004440',
      }
      
    },
  },
  plugins: [],
}