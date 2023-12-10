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
        'bg-gradient': 'linear-gradient(330deg, #29B6D1 0%, #00C7C7 100%)',
        'initial-gradient': '#29B6D1',
        'end-gradient': '#00C7C7',
        yellow: '#FFD666',
        'dark-yellow': '#8D734B',
        blue: '#15C3D6',
        'light-blue': '#96FEFF',
        'blue-hover': 'rgba(23, 214, 235, 1)',
        title: '#4D6F80',
        text: '#5C8599',
        'off-green': '#37C77F',
        'green-normal': '#37C77F',
        'light-green': '#3EE08F',
        'green-contact': '#3CDC8C',
        'gradient-blue': 'linear-gradient(150deg, #E6F7FB 8.13%, #FFF 92.67%)',
        'gradient-green': 'linear-gradient(154deg, #EDFFF6 7.85%, #FFF 91.03%)',
      },
      backgroundImage: {
        'kids-kidding': "url('/kids-kidding.svg')"
      },
      backgroundSize: {
        'tablet': '80%',
        'notebook':'70%',
      }
    },
  },
  plugins: [],
}
export default config
