import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "src/**/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '52px',
        '30': '30px',
        '38%': '38%',
        '72': '72px',
        '75': '75px',
        '110': '110px',
        '120' : '120px',
        '112': '112px',
        '198' : '198px',
        '432' : '432px',
        '446' : '446px',
        '500': '500px',
        '600': '600px',
        '753': '753px',
        '1034': '1034px',
        '1200' : '1200px'
      },
      colors:{
        'at-light-500': '#e5e7eb',
        'at-gray-500': '#333333',
        'at-gray-700': '#666666',
        'at-primary': '#0073CF',
        'at-primary-700': '#0464B0',
        'at-primary-50': '#E8F4FD'
      }
    },
    fontFamily : {
      "dmSans":["DM Sans", "sans-serif"],
      "golos": ["Golos Text", "sans-serif"]
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      'at-5xl': ['44px', '52px'],
      'at-7xl': ['74px', '82px']
    }
  },
 
  plugins: [],
};
export default config;
