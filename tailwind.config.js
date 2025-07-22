import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        noir: '#0F0F0F',
        glacier: '#F1F1F1',
        graphite: '#1C1C1E',
        rust: '#C08A2D',
        steel: '#3A4F63',
        rose: '#9e3838ff',
      },
      keyframes: {
        dots: {
          '0%, 20%': { content: '"."' },
          '40%': { content: '".."' },
          '60%': { content: '"..."' },
          '80%, 100%': { content: '""' },
        },
      },
      animation: {
        dots: 'dots 1.2s steps(4, end) infinite',
      },
    },
    plugins: [],
  }
}