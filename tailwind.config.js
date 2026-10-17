module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Arial', 'sans-serif']
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        docuseal: {
          'color-scheme': 'light',
          primary: '#2c8b4f',
          'primary-content': '#ffffff',
          secondary: '#ef9fbc',
          accent: '#eeaf3a',
          neutral: '#24743f',
          'base-100': '#f5f7f9',
          'base-200': '#ffffff',
          'base-300': '#d6dbe1',
          'base-content': '#151c28',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem'
        }
      }
    ]
  }
}
