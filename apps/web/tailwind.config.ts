import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0B0F',
        foreground: '#E5E7EB',
        card: '#14161F'
      }
    }
  }
};

export default config;
