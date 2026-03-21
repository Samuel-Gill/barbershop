/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#f5d67a',
          400: '#d4af37',
          500: '#b88a1b',
        },
      },
      boxShadow: {
        glow: '0 20px 45px rgba(212, 175, 55, 0.18)',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top, rgba(212,175,55,0.22), transparent 35%), linear-gradient(135deg, rgba(20,20,20,0.94), rgba(7,7,7,0.98))',
      },
    },
  },
  plugins: [],
};
