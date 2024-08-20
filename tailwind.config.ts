import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oren: {
          600: "AA5D36",
          4: '#D08159',
          3: '#FFAA5D',
          2: '#FFD4A3',
          1: '#FFECD5'
        },
        'dark-blue': '#0D2B45',
        'light-blue': '#213C56'
      },      

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
    },
  },
  plugins: [],
};
export default config;
