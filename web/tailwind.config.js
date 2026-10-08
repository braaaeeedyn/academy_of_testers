/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Theme-driven corners: each [data-theme] block in index.css sets these tokens, so
      // `rounded-card` is soft under Mint, very round under Ember, and square under Ink.
      borderRadius: {
        card: 'var(--radius-card)',
        input: 'var(--radius-input)',
        btn: 'var(--radius-btn)',
        pill: 'var(--radius-pill)',
      },
      colors: {
        'deep-cream': {
          dark: '#02343F',
          light: '#F0EDCC'
        }
      }
    },
  },
  plugins: [],
}
