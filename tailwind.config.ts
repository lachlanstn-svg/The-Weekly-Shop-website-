import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#f4efe4',
        ink: '#20241d',
        muted: '#726f64',
        line: '#e3ddcf',
        terracotta: {
          400: '#e08a5f',
          500: '#d1703f',
          600: '#b85a2e',
        },
        leaf: {
          50: '#e7f4ed',
          500: '#2f9e6f',
          600: '#1f7a54',
          700: '#175f41',
        },
      },
      boxShadow: {
        soft: '0 12px 32px -18px rgba(38, 42, 33, 0.28)',
        lift: '0 20px 45px -24px rgba(38, 42, 33, 0.35)',
      },
      borderRadius: {
        card: '22px',
      },
    },
  },
  plugins: [],
}
export default config
