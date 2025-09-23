import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors
        'primary-dark': '#1a1f36',
        'secondary-dark': '#252b42', 
        'accent-gold': '#ffa500',
        'light-blue': '#4a9eff',
        'text-primary': '#ffffff',
        'text-secondary': '#b8c1d9',
        'text-muted': '#8892b0',
        
        // Tailwind compatibility
        navy: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1a1f36',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#ffa500',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Typography Scale
        'h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.8rem', { lineHeight: '1.3' }],
        'h4': ['1.3rem', { lineHeight: '1.4' }],
        'h5': ['1.1rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        // 8px base unit system
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      zIndex: {
        'background': '1',
        'content': '10',
        'fixed': '100',
        'navigation': '1000',
        'dropdown': '1500',
        'modal': '2000',
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px', 
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'lg': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'xl': '0 12px 48px rgba(0, 0, 0, 0.25)',
        'gold': '0 8px 25px rgba(255, 165, 0, 0.3)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px #ffa500' },
          '50%': { boxShadow: '0 0 40px #ffa500, 0 0 60px #ff8c00' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [
    // Custom utilities plugin
    function({ addUtilities }: any) {
      const newUtilities = {
        '.container-custom': {
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        },
        '.section-padding': {
          padding: '96px 0',
        },
        '.btn-primary': {
          background: 'linear-gradient(135deg, #ffa500, #ff8c00)',
          color: '#ffffff',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '500',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        },
        '.btn-secondary': {
          background: 'transparent',
          color: '#ffa500',
          border: '2px solid #ffa500',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        },
        '.card-style': {
          background: '#252b42',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid rgba(255, 165, 0, 0.1)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
        },
      }
      addUtilities(newUtilities)
    }
  ],
  darkMode: 'class',
}
export default config