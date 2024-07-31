import type { TailwindConfig } from '@/lib/tailwind'
import ThemeService from '@/lib/tailwind/theme'

const config: TailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: ThemeService.theme,
  plugins: []
}
export default config