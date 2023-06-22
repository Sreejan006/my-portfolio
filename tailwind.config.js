/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'ss' : {
                'min': '300px',
                'max': '400px', 
              },
        'ms' : {
                'min': '401px',
                'max': '500px', 
              },
        'ls' : {
                'min': '501px',
                'max': '639px', 
              },
        'nt' : {
                      'min': '0px',
                      'max': '640px', 
                    },
                    
        'ns' : {
          'min': '0px',
          'max': '299px', 
        },
    },
    },
  },
  plugins: [],
}
