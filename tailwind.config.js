// Tailwind settings. Colors point to the CSS variables in input.css.
module.exports = {
  content: ['./*.html', './script.js'],
  theme: {
    extend: {
      colors: { snow: 'var(--snow)', surface: 'var(--surface)', ink: 'var(--ink)', muted: 'var(--muted)', line: 'var(--line)', glacier: 'var(--glacier)', brand: 'var(--brand)', deep: 'var(--deep)' },
      fontFamily: { display: ['Fraunces', 'Georgia', 'serif'], body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] }
    }
  }
};
