import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: '#000000',
        primary: '#060809',
        secondary: '#0C0E0F',
        tertiary: '#111314',
        quaternary: '#1F1F1F',
      },
      white: {
        DEFAULT: '#FFFFFF',
        primary: '#F9F9F9',
        secondary: '#D9D9D9',
        tertiary: '#ADADAD',
        quaternary: '#777777',
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
