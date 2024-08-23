module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths as necessary for your project
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6292ac',
        secondary: '#FFFFFF',
        dark: '#1a1a1a',
        light: '#f9f9f9',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Press Start 2P', 'cursive'],
      },
      boxShadow: {
        custom: '0 4px 8px rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 6px 12px rgba(0, 0, 0, 0.2)',
      },
      // Add any additional custom theme settings here
    },
  },
  plugins: [],
}
