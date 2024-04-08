import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "src/shared/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '52px',
        '110': '110px',
        '432' : '432px',
        '600': '600px',
        '1200' : '1200px'
      },
      colors:{
        'at-light-500': '#e5e7eb',
        'at-gray-500': "#333333",
        'at-gray-700': '#666666',
        'at-primary': '#0073CF',
        'at-primary-700': '#0464B0'
      }
    },
    fontFamily : {
      "DmSans":["DM Sans", "sans-serif"]
    },
  },
 
  plugins: [],
};
export default config;
