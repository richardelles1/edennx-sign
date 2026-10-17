module.exports = {
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
          secondary: '#ef9fbc',
          accent: '#eeaf3a',
          neutral: '#24743f',
          'base-100': '#f5f7f9',
          'base-200': '#ebeef2',
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
