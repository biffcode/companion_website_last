/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '90%',
        md: '90%',
        lg: '90%',
        xl: '90%',
        '2xl': '90%',
      },
    },
    extend: {
      maxWidth: {
        '7xl': '80rem',   // 1280px
        '8xl': '90rem',   // 1440px
        '9xl': '100rem',  // 1600px
      },
      colors: {
        primary: {
          50: '#FCF1EC',
          100: '#F9E3D9',
          200: '#F3C7B3',
          300: '#EDAB8D',
          400: '#E68F67',
          500: '#D9643A', // Main primary color
          600: '#C04D25',
          700: '#9B3E1F',
          800: '#762F18',
          900: '#512012',
        },
        secondary: {
          50: '#EFECEA',
          100: '#DFD9D5',
          200: '#BFB3AB',
          300: '#9F8E81',
          400: '#7F6857',
          500: '#473A35', // Main secondary color
          600: '#3A2F2B',
          700: '#2C2420',
          800: '#1F1A16',
          900: '#120F0D',
        },
        gray: {
          50: '#F9F9F9',
          100: '#F3F3F3',
          200: '#E6E6E6',
          300: '#D1D1D1',
          400: '#A8A8A8',
          500: '#8C8C8C',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1D1D1F',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['SF Mono', 'SFMono-Regular', 'ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      borderRadius: {
        'apple': '15px',
        'apple-lg': '30px',
        'apple-xl': '45px',
      },
      boxShadow: {
        'apple': '0 6px 45px rgba(0, 0, 0, 0.05)',
        'apple-md': '0 12px 60px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 18px 90px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}; 