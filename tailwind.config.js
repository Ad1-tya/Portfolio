/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      neutral: {
       "50": "#f6f7f6",
       "100": "#e4e5e2",
       "200": "#c9cbc4",
       "300": "#a6a99f",
       "400": "#81867b",
       "500": "#676b61",
       "600": "#51554c",
       "700": "#43463f",
       "800": "#373a35",
       "900": "#30322f",
       "950": "#121311"
      },
      purple: {
       "50": "#faf6fe",
       "100": "#f3eafd",
       "200": "#e8d8fc",
       "300": "#d7baf8",
       "400": "#be8ef2",
       "500": "#a562ea",
       "600": "#8f42db",
       "700": "#8233cc",
       "800": "#682c9d",
       "900": "#55257e",
       "950": "#390f5c"
      },
      "blue": {
       "50": "#eff3fe",
       "100": "#e2e9fd",
       "200": "#cad6fb",
       "300": "#a9bbf8",
       "400": "#8796f2",
       "500": "#6a73ea",
       "600": "#4342db",
       "700": "#423fc3",
       "800": "#37369d",
       "900": "#32337d",
       "950": "#1e1d49"
      },
      "lima": {
       "50": "#f4fbea",
       "100": "#e5f6d1",
       "200": "#cceea8",
       "300": "#abe274",
       "400": "#7dcc33",
       "500": "#6db72b",
       "600": "#52921e",
       "700": "#406f1c",
       "800": "#35591b",
       "900": "#2e4c1b",
       "950": "#16290a"
      },
     },
     fontSize: {
      "sm": "0.75rem",
      "base": "1rem",
      "lg": "1.25rem",
      "xl": "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "3.5rem",
      "7xl": "4.5rem"
     },
     fontFamily:{
        "sans" : ["Raleway", "sans"]
     },
    extend: {
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '7': '64px',
        '8': '80px',
        '9': '96px',
        '10': '120px',
        '11': '160px'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
],
}
