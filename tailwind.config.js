/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js', './data/**/*.js'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        surface: '#0a0a0a',
        'surface-2': '#111111',
        muted: '#a3a3a3',
        subtle: '#737373',
        border: 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0,0,0,0.4)',
      },
      transitionDuration: {
        DEFAULT: '400ms',
        slow: '600ms',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'scroll-hint': 'scroll-hint 3s ease-in-out infinite',
        'fade-in': 'fade-in 600ms ease forwards',
      },
      keyframes: {
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
