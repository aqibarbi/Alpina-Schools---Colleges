// Tailwind settings. This file must load AFTER the Tailwind script tag.
// Colors point to the CSS variables in style.css.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        snow: 'var(--snow)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        glacier: 'var(--glacier)',
        brand: 'var(--brand)',
        deep: 'var(--deep)'
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  }
};
