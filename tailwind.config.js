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
          'button-primary': withOpacity('--color-button-primary-fill'),
          'button-secondary': withOpacity('--color-button-secondary-fill'),
          'button-tertiary': withOpacity('--color-button-tertiary-fill')
        }
      },
      borderColor: {
        theme: {
          'button-primary': withOpacity('--color-button-primary-border'),
          'button-secondary': withOpacity('--color-button-secondary-border'),
          'button-tertiary': withOpacity('--color-button-tertiary-border')
        }
      },
      textColor: {
        theme: {
          primary: withOpacity('--color-text-primary'),
          'button-primary': ('--color-button-primary-text'),
        }
      }
    },
  },
  plugins: [],
}
