import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: '1fr 380px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-card':
          'linear-gradient(360deg, rgba(135,49,255,1) 30%, rgba(0,104,255,1) 100%)',
      },
      height: {
        cardResponsive: '400px',
      },
      boxShadow: {
        selected: '0px 0px 4px 4px',
      },
    },
  },
  plugins: [],
}
export default config
