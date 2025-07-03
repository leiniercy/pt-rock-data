/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))'
      }
    },
    gridRow: {
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12'
    },
    colors: {
      primary: '#4f00a8',
      green: '#67aa72',
      wine: '#b0425c',
      purple: {
        50: '#f4f0ff',
        100: '#ece4ff',
        200: '#dbccff',
        300: '#c1a4ff',
        400: '#a570ff',
        500: '#8d37ff',
        600: '#840fff',
        700: '#7800ff',
        800: '#6400da',
        900: '#4f00a8',
        950: '#32007a'
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712'
      }
    }
  },
  plugins: []
}
