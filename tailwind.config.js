import PrimeUI from 'tailwindcss-primeui';

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        purple: {
          0: '#ffffff',
          50: '#f3f5ff',
          100: '#e7ebff',
          200: '#c4ccff',
          300: '#a0adff',
          400: '#7d8eff',
          500: '#3b4cca', // color base
          600: '#3240ab',
          700: '#29358d',
          800: '#20296e',
          900: '#171e50',
          950: '#0c102d',
        },

        yellow: {
          0: '#ffffff',
          50: '#fffef0',
          100: '#fffce0',
          200: '#fff7b3',
          300: '#fff185',
          400: '#ffeb57',
          500: '#ffde00', // color base
          600: '#d9bd00',
          700: '#b39c00',
          800: '#8c7b00',
          900: '#665a00',
          950: '#3d3600',
        },
      },
      fontFamily: {
        pokefont: ['Pokefont', 'sans-serif'],
        notosans: ['NotoSans', 'sans-serif'],
      },
    },
  },
  plugins: [PrimeUI],
};
