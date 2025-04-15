import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gamerRed: '#b91c1c',
        gamerBrightRed: '#ef4444'
      }
    },
  },
  plugins: [],
}

export default config
