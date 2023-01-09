/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        theme: {
          fill: withOpacity('--color-fill'),
        }
      },
      borderColor: {
        theme: {}
      },
      textColor: {
        theme: {
          base: withOpacity('--color-text-base'),
          inverted: withOpacity('--color-text-inverted'),
        }
      }
    },
  },
  plugins: [],
}
