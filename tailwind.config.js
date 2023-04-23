/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      strongCyan: 'hsl(177, 66%, 44%)',
      lightBlue: 'hsl(233, 100%, 69%)',
      darkGrayIsBlue: 'hsl(210, 10%, 33%)',
      grayIsBlue: 'hsl(201, 11%, 66%)',
      lightWhite: '#fff'
    },
  },
  plugins: [],
}
