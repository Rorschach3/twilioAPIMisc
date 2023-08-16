// tailwind.config.js
module.exports = {
  darkMode: 'media',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      blue: '#1c7db7',
      red: '#ef8681',
      orange: '#ff7849',
      green: '#13ce66',
      'gray-dark': '#273444',
      gray: '#a7bdcf',
      'gray-light': '#d3dce6',
      ...configuration.colorTheme.colors, // Merge colorTheme colors here
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '4rem',
      },
    },
  },
};
