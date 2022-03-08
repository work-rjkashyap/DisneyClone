module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        fresh: 'var(--fresh)',
        vermillion: 'var(--vermillion)',
        sunshine: 'var(--sunshine)',
        clean: 'var(--clean)',
      },
      fontFamily: {
        Gandhi: ['Gandhi', 'Roboto'],
        Lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};