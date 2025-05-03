
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
        quinary: 'var(--color-quinary)',
      },
      fontFamily: {
        'bricksons': ['Roboto', 'sans-serif'], 
        'bisdak': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        dance: {
          '0%': { transform: 'rotate(-3deg) translateY(0)' },
          '25%': { transform: 'rotate(0deg) translateY(-5px)' },
          '50%': { transform: 'rotate(3deg) translateY(0)' },
          '75%': { transform: 'rotate(0deg) translateY(-5px)' },
          '100%': { transform: 'rotate(-3deg) translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceText: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        slideText: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'dance': 'dance 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-text': 'bounceText 2s ease-in-out infinite',
        'slide-text': 'slideText 2s ease-in-out infinite',
        'shimmer': 'shimmer 8s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundSize: {
        'shimmer': '200% 100%',
      },
      backgroundImage: {
        'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}