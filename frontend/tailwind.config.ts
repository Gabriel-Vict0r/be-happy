import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    //"./node_modules/flowbite-react/**/*.js"
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'bg-gradient': 'linear-gradient(330deg, #29B6D1 0%, #00C7C7 100%)',
        'initial-gradient': '#29B6D1',
        'end-gradient': '#00C7C7',
        'red-error': '#F02D3A',
        yellow: '#FFD666',
        'dark-yellow': '#8D734B',
        'bg-form': '#EBF2F5',
        'border-form': '#D3E2E5',
        'border-map-form': '#DDE3F0',
        'bg-btn-map': '#F5F8FA',
        'btn-access': '#12D4E0',
        blue: '#15C3D6',
        'btn-side-bar': '#12AFCB',
        'dark-blue': '#0089A5',
        'light-blue': '#96FEFF',
        'blue-hover': 'rgba(23, 214, 235, 1)',
        title: '#4D6F80',
        'title-page': '#8FA7B2',
        text: '#5C8599',
        'border-box-hour': '#B3DAE2',
        'off-green': '#37C77F',
        'green-normal': '#37C77F',
        'light-green': '#3EE08F',
        'green-contact': '#3CDC8C',
        'green-btn-submit': '#31B272',
        'green-btn-submit-h': '#3BD689',
        'green-box': '#39CC83',
        'red-box': '#FF669D',
        'red-box-dark': '#C54F7A',
        'border-green': '#A1E9C5',
        'border-red': '#FFBCD4',
        'back-background': '#EBF2F5',
        'gradient-blue': 'linear-gradient(150deg, #E6F7FB 8.13%, #FFF 92.67%)',
        'gradient-green': 'linear-gradient(154deg, #EDFFF6 7.85%, #FFF 91.03%)',
        'first-gradient': '#E6F7FB',
        'second-gradient': '#FFF',
        'start-gradient-green': '#EDFFF6',
        'end-gradient-green': '#fff',
        'start-gradient-red': '#FCF0F4',
        'end-gradient-red': '#fff',
      },
      backgroundImage: {
        'kids-kidding': "url('/kids-kidding.svg')"
      },
      backgroundSize: {
        'tablet': '80%',
        'notebook': '70%',
      }
    },
  },
  plugins: [
    //require('flowbite/plugin')
  ],
}
export default config
