/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#054790',
        accent: '#E54545',
        
      },
      backgroundImage: {
        site: "url('./assets/site3-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
        sergio: "url('./assets/sergio.jpeg')",
      },
    },
  },
  plugins: [],
}

